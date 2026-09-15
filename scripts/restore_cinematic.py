"""Recover historical SVG assets from two pinned original generator sources, not production src."""
from pathlib import Path, PurePosixPath
import base64, hashlib, io, json, lzma, os, subprocess, sys, tarfile, tempfile

ROOT = Path(__file__).resolve().parents[1]
DEST = Path('archive/reuse/cinematic-original')
COMPRESSED_SHA = 'f1f4c3b7078a4b4228b3f8120fbb5c34a3d9fb0716ce14ce25120ec0805e1037'
RAW_SHA = '8889ab24cefe8b22cece0ec8ee9c82c05e8c806cfbd9e56c495594d9e1f64b13'
GENERATED_SHA = '1890a835e1d9d5d528450b4bf21dee13d62ce4931a7629f37858022b79d7fdab'
SOURCE_ZIP_SHA = 'b8cc56e33897b39841d5d37109b1f4207f21439f48ee30ba95c17a824888929f'
SOURCE_HASHES = {
    'src/art/make_programs.py': '6a018bbd1d0ca2b7cbb9d5fadd9cf2621a4487f4f2732500666c6431bc600f48',
    'src/programme-metadata.js': 'eaa7e82dcea1d78850e7c0b2d9662e0d0d8c50eb725528fbb14df8415d4d768d',
}
EXPR = """console.log(JSON.stringify(Object.entries(PROGRAMS).flatMap(([channel,list])=>list.map(p=>{const color={cth:'#e9ddb3',learn:'#9abc87',workbench:'#e18a6d',ezctd:'#c9a9a6',solo:'#a6b8c9',oracle:'#b8a6c9',gcp:'#c3c8b6'}[channel];return {...p,channel,color,svg:sceneSVG(p.kind,color)}}))));"""

def sha(data):
    return hashlib.sha256(data).hexdigest()

def safe_target(relative):
    p = PurePosixPath(relative)
    if p.is_absolute() or '..' in p.parts or '\\' in relative:
        raise ValueError('Unsafe path')
    target = ROOT.joinpath(*p.parts)
    if not target.resolve().is_relative_to(ROOT) or any(x.is_symlink() for x in (target, *target.parents)):
        raise ValueError('Unsafe destination')
    return target

def sources():
    stage = ROOT / '.motion-intake'
    if not stage.exists():
        result = {name: (ROOT / DEST / name).read_bytes() for name in SOURCE_HASHES}
    else:
        info = json.loads((stage / 'READY.json').read_text('utf-8'))
        parts = info['parts']
        if [x['name'] for x in parts] != ['part-000.txt', 'part-001.txt', 'part-002.txt']:
            raise ValueError('Wrong batch parts')
        blocks = []
        for item in parts:
            path = safe_target('.motion-intake/' + item['name'])
            block = path.read_bytes()
            if len(block) != item['bytes'] or sha(block) != item['sha256']:
                raise ValueError('Corrupted part: ' + item['name'])
            blocks.append(block)
        encoded = b''.join(blocks)
        if len(encoded) != 18120:
            raise ValueError('Unexpected base64 size')
        compressed = base64.b64decode(encoded, validate=True)
        if len(compressed) != 13588 or sha(compressed) != COMPRESSED_SHA:
            raise ValueError('Unrecognized source payload')
        dec = lzma.LZMADecompressor(memlimit=128_000_000)
        raw = dec.decompress(compressed, max_length=40961)
        if not dec.eof or dec.unused_data or len(raw) != 40960 or sha(raw) != RAW_SHA:
            raise ValueError('Invalid bounded source archive')
        result = {}
        with tarfile.open(fileobj=io.BytesIO(raw), mode='r:') as ar:
            for member in ar.getmembers():
                if not member.isfile() or member.name not in SOURCE_HASHES or member.name in result:
                    raise ValueError('Unexpected source member')
                result[member.name] = ar.extractfile(member).read()
    if set(result) != set(SOURCE_HASHES):
        raise ValueError('Missing source')
    for name, data in result.items():
        if sha(data) != SOURCE_HASHES[name]:
            raise ValueError('Source checksum mismatch: ' + name)
        data.decode('utf-8')
    return result

def recover():
    original = sources()
    expected = json.loads((ROOT / DEST / 'EXPECTED.json').read_text('utf-8'))
    if len(expected) != 16:
        raise ValueError('Expected 16 original SVGs')
    with tempfile.TemporaryDirectory(prefix='jclaw-original-svg-') as temp:
        tmp = Path(temp)
        for name, data in original.items():
            target = tmp / name
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(data)
        (tmp / 'src/programs.js').write_bytes(original['src/programme-metadata.js'])
        # Only the two exact reviewed historical sources are executed; cwd is disposable.
        subprocess.run([sys.executable, str(tmp / 'src/art/make_programs.py')], cwd=tmp, check=True, timeout=30)
        generated = (tmp / 'src/programs.js').read_bytes()
        if sha(generated) != GENERATED_SHA:
            raise ValueError('Historical generator output differs')
        rendered = subprocess.run(['node'], input=generated.decode('utf-8') + EXPR,
                                  cwd=tmp, text=True, capture_output=True, check=True, timeout=30)
        assets = json.loads(rendered.stdout)
    writes = {(DEST / name).as_posix(): data for name, data in original.items()}
    entries = []
    for item in assets:
        name = item['channel'] + '-' + item['id'] + '.svg'
        data = item['svg'].encode('utf-8')
        if name not in expected or sha(data) != expected[name]:
            raise ValueError('SVG does not match original delivery: ' + name)
        path = (DEST / 'assets/programmes' / name).as_posix()
        if path in writes:
            raise ValueError('Duplicate output')
        writes[path] = data
        entries.append({'path': path, 'bytes': len(data), 'sha256': sha(data),
                        'channel': item['channel'], 'id': item['id'], 'kind': item['kind']})
    if len(entries) != 16 or {Path(x['path']).name for x in entries} != set(expected):
        raise ValueError('Output set incomplete')
    report = {'schema': 1, 'status': 'byte-identical-historical-svg-recovered-not-production-integrated',
              'source_archive': 'JCLAW-TV-动态分镜与源码.zip', 'source_archive_sha256': SOURCE_ZIP_SHA,
              'generated_programs_sha256': GENERATED_SHA,
              'sources': [{'path': (DEST / n).as_posix(), 'bytes': len(d), 'sha256': sha(d)} for n, d in original.items()],
              'assets': entries,
              'limits': ['These are historical SVGs, not the current 16 Canvas programmes.',
                         'Byte equality does not establish aesthetics approval or current host integration.',
                         'Full earlier TV collection and earlier theme/CSS3D assets remain a separate batch.']}
    writes[(DEST / 'MANIFEST.json').as_posix()] = (json.dumps(report, ensure_ascii=False, indent=2) + '\n').encode('utf-8')
    # Validate every conflict before writing any output. Do not write production src/index/baseline.
    for name, data in writes.items():
        path = safe_target(name)
        if path.exists() and path.read_bytes() != data:
            raise ValueError('Refusing conflicting existing file: ' + name)
    for name, data in writes.items():
        path = safe_target(name)
        path.parent.mkdir(parents=True, exist_ok=True)
        tmp = path.with_name(path.name + '.restore-tmp')
        tmp.write_bytes(data)
        os.replace(tmp, path)
    print('Recovered 2 exact original sources and 16 byte-identical historical SVGs; production source unchanged')

if __name__ == '__main__':
    recover()

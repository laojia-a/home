"""Restore one checksum-verified archival batch; never modify production source."""
from pathlib import Path, PurePosixPath
import base64, hashlib, io, json, lzma, os, shutil, tarfile

def digest(data):
    return hashlib.sha256(data).hexdigest()

def restore(root):
    root = Path(root).resolve()
    staging = root / '.archive-import'
    manifest = json.loads((staging / 'READY.json').read_text('utf-8'))
    if manifest.get('schema') not in {1, 2} or not 0 < manifest['compressed_bytes'] <= 1_000_000:
        raise ValueError('Unsupported batch')
    if not 0 < manifest['raw_bytes'] <= 16_000_000 or not 0 < manifest['file_count'] <= 1000:
        raise ValueError('Invalid limits')
    parts = manifest['parts']
    if not 0 < len(parts) <= 100:
        raise ValueError('Invalid part count')
    data = []
    for i, part in enumerate(parts):
        if part['path'] != f'.archive-import/part-{i:03d}.txt':
            raise ValueError('Unexpected part path')
        p = root / part['path']
        if p.is_symlink():
            raise ValueError('Symlinked payload')
        block = p.read_bytes()
        if len(block) != part['bytes'] or digest(block) != part['sha256']:
            raise ValueError('Part integrity failure: ' + str(i))
        data.append(block)
    payload = base64.b64decode(b''.join(data), validate=True)
    if len(payload) != manifest['compressed_bytes'] or digest(payload) != manifest['compressed_sha256']:
        raise ValueError('Compressed payload mismatch')
    reader = lzma.LZMADecompressor(memlimit=300_000_000)
    raw = reader.decompress(payload, max_length=16_000_001)
    if not reader.eof or reader.unused_data or len(raw) != manifest['raw_bytes'] or digest(raw) != manifest['raw_sha256']:
        raise ValueError('Archive integrity failure')
    allowed_roots = ('archive/reuse/', 'docs/research/original/')
    allowed_exact = set()
    if manifest['schema'] == 2:
        allowed_roots = ('archive/reuse/', 'archive/rejected/')
        allowed_exact = {'archive/earlier-tv.html', 'archive/canonical-source-manifest.json'}
    allowed_extensions = {'.html','.svg','.js','.css','.json','.md','.txt','.py'}
    records, writes, names = [], [], set()
    with tarfile.open(fileobj=io.BytesIO(raw), mode='r:') as archive:
        for member in archive.getmembers():
            path = PurePosixPath(member.name)
            if (not member.isfile() or path.is_absolute() or '..' in path.parts or
                '\\' in member.name or not (member.name.startswith(allowed_roots) or member.name in allowed_exact) or
                path.suffix.lower() not in allowed_extensions or member.size > 8_000_000 or member.name in names):
                raise ValueError('Disallowed archive member: ' + member.name)
            target = root.joinpath(*path.parts)
            if not target.resolve().is_relative_to(root):
                raise ValueError('Path escape')
            if any(p.is_symlink() for p in (target, *target.parents)):
                raise ValueError('Symlink in destination')
            content = archive.extractfile(member).read()
            if len(content) != member.size:
                raise ValueError('Truncated member')
            content.decode('utf-8')
            if target.exists() and target.read_bytes() != content:
                raise ValueError('Refusing to overwrite existing different content: ' + member.name)
            names.add(member.name)
            writes.append((target, content))
            records.append({'path':member.name,'bytes':len(content),'sha256':digest(content)})
    if len(records) != manifest['file_count']:
        raise ValueError('File count mismatch')
    # No imported source is executed. Validate the whole batch before any write.
    for target, content in writes:
        target.parent.mkdir(parents=True, exist_ok=True)
        temporary = target.with_name(target.name + '.archive-tmp')
        temporary.write_bytes(content)
        os.replace(temporary, target)
    report = {'schema':1, 'batch':manifest['batch'], 'payload_sha256':manifest['compressed_sha256'],
              'status':'archival-bytes-restored-not-runtime-validated', 'files':records}
    report_name = 'ARCHIVE-RESTORE-canonical.json' if manifest['schema'] == 2 else 'ARCHIVE-RESTORE.json'
    output = root / 'docs/development' / report_name
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    shutil.rmtree(staging)
    print('Verified and restored', len(records), 'archival text files; production src/index untouched')

if __name__ == '__main__':
    restore(Path.cwd())

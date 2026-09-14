"""One-time import of user-authorized source bytes. No network downloads or secret access."""
from pathlib import Path, PurePosixPath
import hashlib, io, json, lzma, tarfile, shutil

root = Path.cwd().resolve()
manifest = json.loads((root / '.bootstrap/payload.json').read_text())
if manifest.get('schema') != 1 or not (0 < manifest['bytes'] < 4_000_000):
    raise ValueError('Unsupported or oversized payload')
parts = []
for index, item in enumerate(manifest['parts']):
    if item['path'] != f'.bootstrap/part-{index:03d}':
        raise ValueError('Unexpected chunk path or order')
    part = (root / item['path']).read_bytes()
    if len(part) != item['bytes'] or hashlib.sha256(part).hexdigest() != item['sha256']:
        raise ValueError(f'Chunk integrity failure: {index}')
    parts.append(part)
payload = b''.join(parts)
if len(payload) != manifest['bytes'] or hashlib.sha256(payload).hexdigest() != manifest['sha256']:
    raise ValueError('Payload integrity failure')
reader = lzma.LZMADecompressor(memlimit=512_000_000)
raw = reader.decompress(payload, max_length=32_000_001)
if len(raw) > 32_000_000 or not reader.eof or reader.unused_data:
    raise ValueError('Unexpected decompressed size or stream')
records, staged, names = [], [], set()
with tarfile.open(fileobj=io.BytesIO(raw), mode='r:') as archive:
    for item in archive.getmembers():
        path = PurePosixPath(item.name)
        if not item.isfile() or path.is_absolute() or '..' in path.parts or not path.parts:
            raise ValueError('Unsafe archive member')
        if path.parts[0] in {'.git', '.bootstrap'} or item.name in names:
            raise ValueError('Unexpected or repeated archive member')
        if item.size > 8_000_000:
            raise ValueError('Oversized member')
        target = root.joinpath(*path.parts)
        if not target.resolve().is_relative_to(root):
            raise ValueError('Path escaped repository')
        data = archive.extractfile(item).read()
        if len(data) != item.size:
            raise ValueError('Member size mismatch')
        # Workflow changes are submitted through the authorized connector, not GITHUB_TOKEN.
        if path.parts[:2] == ('.github', 'workflows'):
            if not target.exists() or target.read_bytes() != data:
                raise ValueError('Workflow differs from pre-authorized version')
        names.add(item.name)
        records.append({'path': item.name, 'bytes': len(data), 'sha256': hashlib.sha256(data).hexdigest()})
        staged.append((target, data))
for target, data in staged:
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(data)
audit = root / 'docs/development/IMPORT-MANIFEST.json'
audit.parent.mkdir(parents=True, exist_ok=True)
audit.write_text(json.dumps({'schema': 1, 'payload_sha256': manifest['sha256'], 'files': records}, ensure_ascii=False, indent=2) + '\n')
shutil.rmtree(root / '.bootstrap')
print(f'Imported and verified {len(records)} source files')

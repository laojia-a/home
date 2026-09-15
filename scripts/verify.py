from pathlib import Path
import hashlib,json,subprocess
R=Path(__file__).resolve().parents[1]
manifest=json.loads((R/'src/animations/sites/manifest.json').read_text())
assert len(manifest)==7
assert sum(s['sceneCount'] for s in manifest)==16
for site in manifest:
 for name in ['index.js','renderers.js','manifest.json','README.md']:
  assert (R/'src/animations/sites'/site['directory']/name).is_file()
for p in (R/'src').rglob('*.js'):
 subprocess.run(['node','--check',str(p)],check=True,capture_output=True)
subprocess.run(['node','--check',str(R/'dist/runtime.check.js')],check=True)
checks=R/'baseline/checksums.json'
if checks.exists():
 for path,want in json.loads(checks.read_text()).items():
  assert hashlib.sha256((R/path).read_bytes()).hexdigest()==want,path
print('Verified source syntax, seven site boundaries,16 scenes and supplied baseline hashes')

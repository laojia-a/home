"""Compare programme pixels, not the cabinet. Candidate Canvas geometry is explicitly
normalised to the immutable source at each viewport. Full-page visual differences
are intentional in this polish and are tested separately in tv_shell.py.
"""
from pathlib import Path
import asyncio, argparse, json, hashlib, shutil
from playwright.async_api import async_playwright
R=Path(__file__).resolve().parents[1]
HOOK="""window.__seek=(ch,scene,progress)=>{state.power=true;state.paused=true;state.menu=false;state.ch=ch;state.scene=scene;state.elapsed=programme().seconds*progress;clearTransition();document.querySelectorAll('.channel').forEach(el=>el.classList.toggle('on',Number(el.dataset.ch)===ch));drawActive();updateChrome();return Array.from(canvases[ch].getContext('2d').getImageData(0,0,canvases[ch].width,canvases[ch].height).data).reduce((h,v)=>Math.imul(h^v,16777619)>>>0,2166136261);};"""
def instrument(s):
 return s.replace("Object.defineProperty(window,'S10'",HOOK+"Object.defineProperty(window,'S10'",1)
async def main(args):
 async with async_playwright() as p:
  browser=await p.chromium.launch(headless=True,**({'executable_path':shutil.which('chromium')} if shutil.which('chromium') else {}))
  pages=[await browser.new_page(viewport={'width':1440,'height':900}) for _ in range(2)]
  errors=[]
  for page in pages:page.on('pageerror',lambda e:errors.append(str(e)))
  await pages[0].set_content(instrument((R/'baseline/s10-programme/S10-节目精修.html').read_text()),wait_until='load')
  await pages[1].set_content(instrument((R/'dist/index.html').read_text()),wait_until='load')
  results=[]
  for width,height in [(1440,900),(390,844)]:
   for page in pages:await page.set_viewport_size({'width':width,'height':height});await page.evaluate('document.fonts.ready')
   geometry=await pages[0].locator('#cv1').evaluate('(c)=>({width:c.getBoundingClientRect().width,height:c.getBoundingClientRect().height})')
   await pages[1].evaluate("g=>document.querySelectorAll('canvas.fill').forEach(c=>{c.style.width=g.width+'px';c.style.height=g.height+'px'})",geometry)
   for ch,count in enumerate([6,3,3,1,1,1,1],1):
    for scene in range(count):
     for phase in [.05,.25,.55,.9]:
      hashes=[await page.evaluate('([ch,s,p])=>__seek(ch,s,p)',[ch,scene,phase]) for page in pages]
      results.append({'viewport':width,'canvasGeometry':geometry,'channel':ch,'scene':scene,'phase':phase,'baseline':hashes[0],'modular':hashes[1],'same':hashes[0]==hashes[1]})
      if hashes[0]!=hashes[1]: print('MISMATCH',results[-1],flush=True)
   await pages[1].evaluate("()=>document.querySelectorAll('canvas.fill').forEach(c=>{c.style.removeProperty('width');c.style.removeProperty('height')})")
   await pages[1].evaluate('()=>__seek(1,0,.8)')
   await pages[1].screenshot(path=str(args.artifacts/f'parity-{width}.png'))
  (args.artifacts/'parity-results.json').write_text(json.dumps({'scope':'programme Canvas RGBA at equal baseline geometry; not full-page parity','frames':results,'errors':errors},indent=2))
  await browser.close()
  assert not errors,errors
  assert all(r['same'] for r in results),'Canvas parity failed'
  print(f'{len(results)} actual Canvas frame comparisons identical; no page errors',flush=True)
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--artifacts',type=Path,default=Path('/tmp/home-qa'));args=parser.parse_args();args.artifacts.mkdir(parents=True,exist_ok=True);asyncio.run(main(args))

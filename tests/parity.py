"""Compare the three unchanged programme channels; CH04-07 intentionally use no-signal scenes."""
from pathlib import Path
import asyncio, argparse, json, hashlib, shutil
from playwright.async_api import async_playwright
R=Path(__file__).resolve().parents[1]
HOOK="""window.__seek=(ch,scene,progress,width,height)=>{state.power=true;state.paused=true;state.menu=false;state.ch=ch;state.scene=scene;state.elapsed=programme().seconds*progress;clearTransition();const canvas=canvases[ch];canvas.style.width=width+'px';canvas.style.height=height+'px';document.querySelectorAll('.channel').forEach(el=>el.classList.toggle('on',Number(el.dataset.ch)===ch));drawActive();updateChrome();return Array.from(canvas.getContext('2d').getImageData(0,0,canvas.width,canvas.height).data).reduce((h,v)=>Math.imul(h^v,16777619)>>>0,2166136261);};window.__restoreParitySize=()=>{for(const canvas of canvases.slice(1)){canvas.style.width='';canvas.style.height='';}drawActive();};"""
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
  for width,height,canvas_width,canvas_height in [(1440,900,1000,580),(390,844,390,750)]:
   for page in pages:await page.set_viewport_size({'width':width,'height':height});await page.evaluate('document.fonts.ready')
   for ch,count in enumerate([6,3,3],1):
    for scene in range(count):
     for phase in [.05,.25,.55,.9]:
      hashes=[await page.evaluate('([ch,s,p,w,h])=>__seek(ch,s,p,w,h)',[ch,scene,phase,canvas_width,canvas_height]) for page in pages]
      results.append({'viewport':width,'canvas':[canvas_width,canvas_height],'channel':ch,'scene':scene,'phase':phase,'baseline':hashes[0],'modular':hashes[1],'same':hashes[0]==hashes[1]})
      if hashes[0]!=hashes[1]: print('MISMATCH',results[-1],flush=True)
   await pages[1].evaluate('([w,h])=>{__seek(1,0,.8,w,h);__restoreParitySize()}',[canvas_width,canvas_height])
   await pages[1].screenshot(path=str(args.artifacts/f'parity-{width}.png'))
  (args.artifacts/'parity-results.json').write_text(json.dumps({'frames':results,'errors':errors},indent=2))
  await browser.close()
  assert not errors,errors
  assert all(r['same'] for r in results),'Canvas parity failed'
  print(f'{len(results)} actual Canvas frame comparisons identical; no page errors',flush=True)
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--artifacts',type=Path,default=Path('/tmp/home-qa'));args=parser.parse_args();args.artifacts.mkdir(parents=True,exist_ok=True);asyncio.run(main(args))

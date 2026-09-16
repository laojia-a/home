"""Measure programme-body pixels over real time. No __seek or player-time writes.
All channel/scene changes use real user controls; the progress rail is excluded.
"""
from pathlib import Path
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from threading import Thread
import asyncio, argparse, json, shutil
from playwright.async_api import async_playwright
ROOT=Path(__file__).resolve().parents[1]
PIXELS='''()=>{
 const c=document.querySelector('.channel.on canvas'),w=c.width,h=c.height;
 const pixels=c.getContext('2d').getImageData(0,Math.floor(h*.16),w,Math.floor(h*.65)).data;
 let changed=0;
 if(window.__previousProgrammePixels?.length===pixels.length)
  for(let i=0;i<pixels.length;i+=4){
   const d=Math.abs(pixels[i]-__previousProgrammePixels[i])+Math.abs(pixels[i+1]-__previousProgrammePixels[i+1])+Math.abs(pixels[i+2]-__previousProgrammePixels[i+2]);
   if(d>24)changed++;
  }
 window.__previousProgrammePixels=pixels;
 return {changed,regionPixels:pixels.length/4,snapshot:S10.snapshot()};
}'''
class Handler(SimpleHTTPRequestHandler):
 def log_message(self,*_):pass
async def main(args):
 out=args.artifacts;out.mkdir(parents=True,exist_ok=True)
 server=ThreadingHTTPServer(('127.0.0.1',0),partial(Handler,directory=str(ROOT)))
 Thread(target=server.serve_forever,daemon=True).start()
 origin=f'http://127.0.0.1:{server.server_port}'
 results=[];checks=[];errors=[]
 async def load(page):
  page.on('pageerror',lambda e:errors.append(str(e)))
  if args.content:await page.set_content((ROOT/'dist/index.html').read_text())
  else:await page.goto(origin+'/dist/index.html')
 async def progress(page):
  await page.wait_for_timeout(500);await page.evaluate(PIXELS)
  await page.wait_for_timeout(950);r=await page.evaluate(PIXELS)
  # The reading programme deliberately starts its page turn at 16% (~2s).
  # Observe the scheduled opening, not only a sub-second still interval.
  r['firstIntervalChanged']=r['changed']
  if r['changed']<=max(12,r['regionPixels']*.00015):
   await page.wait_for_timeout(1300);later=await page.evaluate(PIXELS)
   later['firstIntervalChanged']=r['firstIntervalChanged'];r=later
  assert not r['snapshot']['paused'] and r['changed']>max(12,r['regionPixels']*.00015),r
  return r
 try:
  async with async_playwright() as p:
   browser=await p.chromium.launch(**({'executable_path':shutil.which('chromium')} if shutil.which('chromium') else {}))
   normal=await browser.new_context(viewport={'width':1440,'height':900},reduced_motion='no-preference')
   page=await normal.new_page();await load(page)
   assert not await page.evaluate('S10.snapshot().paused')
   assert not await page.locator('#rail').is_visible()
   assert await page.locator('.tv-key-stack>.tv-key').count()==4
   checks.append('normal mode autoplays; four main buttons inside cabinet right; handheld remote hidden')
   await page.locator('#screen').focus()
   for ch,count in enumerate([6,3,3,1,1,1,1],1):
    await page.keyboard.press(str(ch))
    for scene in range(count):
     if scene:await page.keyboard.press('ArrowDown')
     r=await progress(page);r.update(channel=ch,scene=scene);results.append(r);print('scene',ch,scene,r['changed'],flush=True)
   checks.append('16 programme bodies change actual pixels over real time; progress rail excluded')
   await page.click('.tv-play');a=await page.evaluate('S10.snapshot().elapsed')
   await page.wait_for_timeout(250);assert await page.evaluate('S10.snapshot().elapsed')==a
   assert await page.locator('#tvPlayLabel').inner_text()=='播放节目'
   await page.click('.tv-guide');await page.keyboard.press('Escape')
   assert await page.evaluate('S10.snapshot().paused')
   await page.click('.tv-play');await progress(page)
   checks.append('right play button pauses/resumes; menu preserves manual pause')
   await page.click('.tv-guide');a=await page.evaluate('S10.snapshot().elapsed')
   await page.wait_for_timeout(250);assert await page.evaluate('S10.snapshot().elapsed')==a
   await page.keyboard.press('Escape');await progress(page)
   checks.append('menu holds playing programme; closing resumes')
   await page.locator('#screen').focus();await page.keyboard.press('1')
   await page.wait_for_function('S10.snapshot().scene===1',timeout=16000)
   assert not await page.evaluate('S10.snapshot().paused')
   checks.append('scene automatically advances after a complete real programme duration')
   lowctx=await browser.new_context(viewport={'width':1440,'height':900},reduced_motion='reduce')
   low=await lowctx.new_page();await load(low)
   assert await low.evaluate("S10.snapshot().pauseReason==='reduced-motion'")
   assert await low.locator('.tv-playback-note').is_visible()
   assert '减少动态' in await low.locator('.tv-playback-note').inner_text()
   before=await low.evaluate('S10.snapshot().elapsed');await low.wait_for_timeout(4500)
   assert await low.evaluate('S10.snapshot().elapsed')==before
   assert await low.locator('#hud').evaluate('e=>getComputedStyle(e).opacity')=='1'
   await low.screenshot(path=str(out/'tv-reduced-motion.png'))
   await low.click('.tv-play');assert await low.evaluate('S10.snapshot().elapsed')<.8
   await progress(low)
   checks.append('system-reduced pause shows persistent explanation; explicit play starts opening action')
   await low.locator('#screen').focus();await low.keyboard.press('3');await progress(low)
   assert await low.evaluate('S10.snapshot().transition') is None
   checks.append('explicit play continues after channel changes; CRT movement remains disabled')
   await low.emulate_media(reduced_motion='no-preference');await low.wait_for_function('!S10.snapshot().reducedMotion')
   await low.emulate_media(reduced_motion='reduce');await low.wait_for_function('S10.snapshot().reducedMotion')
   assert await low.evaluate("S10.snapshot().pauseReason==='reduced-motion'")
   await low.emulate_media(reduced_motion='no-preference');await progress(low)
   await low.click('.tv-play')
   await low.emulate_media(reduced_motion='reduce');await low.wait_for_function('S10.snapshot().reducedMotion')
   await low.emulate_media(reduced_motion='no-preference');await low.wait_for_function('!S10.snapshot().reducedMotion')
   assert await low.evaluate("S10.snapshot().paused && S10.snapshot().pauseReason==='user'")
   checks.append('live system preference changes never override a manual pause')
   await lowctx.close()
   if args.video:
    videoctx=await browser.new_context(viewport={'width':1440,'height':900},reduced_motion='no-preference',timezone_id='Asia/Shanghai',record_video_dir=str(out/'recording'),record_video_size={'width':1440,'height':900})
    movie=await videoctx.new_page();await load(movie)
    await movie.wait_for_timeout(4500 if args.content else 500)
    await movie.locator('#screen').focus();await movie.keyboard.press('2');await movie.keyboard.press('1')
    await movie.wait_for_timeout(11300)
    for ch in range(2,8):
     await movie.keyboard.press(str(ch));await movie.wait_for_timeout(4000)
    await movie.click('.tv-play');await movie.wait_for_timeout(800)
    await movie.click('.tv-play');await movie.wait_for_timeout(1200)
    video=movie.video;await videoctx.close()
    await video.save_as(str(out/'tv-live-programmes.webm'));shutil.rmtree(out/'recording')
   await normal.close();await browser.close()
  assert not errors,errors
  report={'method':'Playwright Chromium, real RAF and wall time; no seek','entry':'set_content; local HTTP/file unverified' if args.content else 'local HTTP','checks':checks,'scenes':results,'pageErrors':errors}
  (out/'tv-motion-results.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
  print(f'{len(checks)} playback checks passed; {len(results)} scene bodies change; no page errors')
 finally:server.shutdown();server.server_close()
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--content',action='store_true');parser.add_argument('--video',action='store_true');parser.add_argument('--artifacts',type=Path,default=Path('/tmp/home-qa'))
 asyncio.run(main(parser.parse_args()))

"""Capture real current-browser replay evidence, explicitly not original historical screenshots."""
from pathlib import Path
import argparse, asyncio, hashlib, json, os, shutil
from playwright.async_api import async_playwright
R=Path(__file__).resolve().parents[1]
async def capture(args):
 out=args.output.resolve();out.mkdir(parents=True,exist_ok=True)
 errors=[]
 async with async_playwright() as p:
  browser=await p.chromium.launch(headless=True,**({'executable_path':shutil.which('chromium')} if shutil.which('chromium') else {}))
  context=await browser.new_context(viewport={'width':1280,'height':800},record_video_dir=str(args.artifacts/'video'),record_video_size={'width':960,'height':600})
  page=await context.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
  await page.set_content((R/'dist/index.html').read_text(encoding='utf-8'),wait_until='load')
  await page.wait_for_function('!!window.S10');await page.evaluate('document.fonts.ready')
  for channel,name in [(1,'cth'),(2,'learning'),(3,'workbench')]:
   await page.locator('#screen').focus();await page.keyboard.press(str(channel));await page.wait_for_timeout(2600)
   assert (await page.evaluate('S10.snapshot()'))['channel']==channel
   await page.screenshot(path=str(out/(name+'-desktop.png')))
   await page.wait_for_timeout(1600)
  before=await page.evaluate('S10.snapshot().elapsed');await page.wait_for_timeout(200)
  after=await page.evaluate('S10.snapshot().elapsed');assert after>before
  await page.keyboard.press('Space');paused=await page.evaluate('S10.snapshot().elapsed');await page.wait_for_timeout(250)
  assert await page.evaluate('S10.snapshot().elapsed')==paused
  await page.keyboard.press('Space');await page.wait_for_timeout(400)
  video=page.video;await context.close();await video.save_as(str(out/'current-three-channel-replay.webm'))
  # Existing fixed-frame parity screenshots and machine-readable results remain unedited.
  for filename in ['interaction-results.json','parity-results.json','parity-1440.png','parity-390.png']:
   src=args.artifacts/filename
   if not src.exists():raise FileNotFoundError(src)
   shutil.copy2(src,out/filename)
  await browser.close()
 if errors:raise AssertionError(errors)
 files=[{'path':str(path.relative_to(R)),'bytes':path.stat().st_size,'sha256':hashlib.sha256(path.read_bytes()).hexdigest()} for path in sorted(out.iterdir()) if path.is_file() and path.name!='MANIFEST.json']
 report={'schema':1,'kind':'new-browser-replay-not-original-conversation-media','source_commit':os.environ.get('GITHUB_SHA','local'),'core_source_commit':'af23c7664f85107d353937a691ebd3fe43fc46d6','workflow_run':os.environ.get('GITHUB_RUN_ID'),'load_method':'Playwright set_content of final built HTML; no file:// or external login claim','video':'real continuous browser recording, not image interpolation','files':files,'limitations':['User visual approval is not established by tests.','Archived font loading and remote media sources are not validated by this replay.','Historical original chat screenshots/videos are not represented as byte-identical copies.']}
 (out/'MANIFEST.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 print('Saved actual replay, 128-frame parity evidence and interaction results; no page errors')
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--artifacts',type=Path,required=True);parser.add_argument('--output',type=Path,required=True);asyncio.run(capture(parser.parse_args()))

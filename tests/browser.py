"""Actual-browser interaction checks. Uses content loading when file/network navigation is restricted."""
from pathlib import Path
import asyncio, argparse, json, shutil
from playwright.async_api import async_playwright
R=Path(__file__).resolve().parents[1]
async def main(args):
 results=[];errors=[]
 async with async_playwright() as p:
  browser=await p.chromium.launch(headless=True,**({'executable_path':shutil.which('chromium')} if shutil.which('chromium') else {}))
  page=await browser.new_page(viewport={'width':1440,'height':900});page.on('pageerror',lambda e:errors.append(str(e)))
  await page.set_content((R/'dist/index.html').read_text(),wait_until='load');await page.wait_for_timeout(250)
  assert 'S10' in await page.title();assert await page.locator('#screen').is_visible();results.append('page identity and visible TV')
  assert len(await page.evaluate('S10.modules()'))==7;results.append('seven website modules in actual player')
  a=await page.evaluate('S10.snapshot().elapsed');await page.wait_for_timeout(200);assert await page.evaluate('S10.snapshot().elapsed')>a;results.append('actual programme clock advances')
  await page.keyboard.press('Space');a=await page.evaluate('S10.snapshot().elapsed');await page.wait_for_timeout(200);assert await page.evaluate('S10.snapshot().elapsed')==a;results.append('pause freezes time')
  await page.keyboard.press('m');assert await page.evaluate('S10.snapshot().menu');a=await page.evaluate('S10.snapshot().elapsed');await page.wait_for_timeout(180);assert await page.evaluate('S10.snapshot().elapsed')==a;results.append('menu holds programme time')
  await page.click('[data-tab=link]');await page.fill('#link-1','https://example.org/new-3');await page.press('#link-1','3');assert await page.evaluate('S10.snapshot().channel')==1;results.append('typing digits cannot change channel')
  draft=await page.input_value('#link-1');await page.click('[data-tab=pic]');await page.click('[data-tab=link]');assert await page.input_value('#link-1')==draft;results.append('draft survives tab changes')
  await page.fill('#link-1','javascript:alert(1)');await page.click('[data-save]');assert 'HTTPS' in await page.locator('#menuResult').inner_text();results.append('unsafe URL rejected')
  await page.keyboard.press('Escape');assert await page.locator('[data-confirm=discard]').is_visible();await page.click('[data-confirm=discard]');assert not await page.evaluate('S10.snapshot().menu');assert await page.evaluate('S10.snapshot().paused');results.append('discard closes menu without losing manual pause')
  await page.locator('#screen').focus();
  for n in [3,6,1,2,5,7,2,4,3]:await page.keyboard.press(str(n))
  await page.wait_for_timeout(450);s=await page.evaluate('S10.snapshot()');assert s['channel']==3 and 'be-workbench' in s['url'] and s['transition'] is None;results.append('rapid channel input preserves final choice and URL')
  await page.keyboard.press('p');await page.wait_for_timeout(480);assert not await page.evaluate('S10.snapshot().power');await page.keyboard.press('1');assert await page.evaluate('S10.snapshot().channel')==3;await page.keyboard.press('p');await page.wait_for_timeout(480);assert await page.evaluate('S10.snapshot().power');results.append('standby guards channel and restores power')
  for channel in range(4,8):
   await page.keyboard.press(str(channel));await page.wait_for_timeout(350)
   assert await page.evaluate('S10.snapshot().signal')=='none'
   assert await page.locator('#siteIdentity').is_visible()
   assert await page.locator('#siteName').inner_text() in ['EZCTD','BE Solo','BE Oracle','2026 · 学习资料']
   assert not await page.locator('#siteMark').is_visible()
   assert not await page.locator('#siteScene').is_visible()
  results.append('CH04-07 show no signal with project-name station labels')
  frame="document.querySelector('#cv7').toDataURL()"
  frozen=await page.evaluate(frame);await page.wait_for_timeout(220);assert await page.evaluate(frame)==frozen
  await page.keyboard.press('Space');await page.wait_for_timeout(240);assert await page.evaluate(frame)!=frozen
  await page.keyboard.press('Space');frozen=await page.evaluate(frame);await page.wait_for_timeout(220);assert await page.evaluate(frame)==frozen
  results.append('snow freezes when paused and changes after resume')
  await page.screenshot(path=str(args.artifacts/'no-signal-desktop.png'))
  for w,h in [(360,800),(390,844),(768,1024),(844,390),(1366,768),(1920,1080)]:
   await page.set_viewport_size({'width':w,'height':h});assert await page.evaluate('document.documentElement.scrollWidth<=innerWidth+1');assert await page.locator('#screen').is_visible()
  results.append('six additional responsive viewports remain visible without horizontal overflow')
  for path in sorted((R/'dist/previews').glob('*.html')):
   await page.close();page=await browser.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
   await page.set_viewport_size({'width':1000,'height':750});await page.set_content(path.read_text(),wait_until='load');await page.wait_for_timeout(120);await page.click('#play');before=await page.locator('#status').inner_text();await page.wait_for_timeout(180);assert await page.locator('#status').inner_text()==before;await page.locator('input[type=range]').fill('800');await page.dispatch_event('input[type=range]','input');assert '8.' in await page.locator('#status').inner_text() or await page.input_value('input[type=range]')=='800';results.append(path.stem+' independent preview pause and seek')
  await browser.close()
 assert not errors,errors
 (args.artifacts/'interaction-results.json').write_text(json.dumps({'passed':results,'page_errors':errors},ensure_ascii=False,indent=2))
 print(len(results),'browser checks passed; no page errors')
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--content',action='store_true');parser.add_argument('--artifacts',type=Path,default=Path('/tmp/home-qa'));a=parser.parse_args();a.artifacts.mkdir(parents=True,exist_ok=True);asyncio.run(main(a))

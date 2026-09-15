from pathlib import Path
import asyncio,argparse,shutil,json
from playwright.async_api import async_playwright
R=Path(__file__).resolve().parents[1]
async def main(args):
 pth=R/'dist/portable.html'
 if not pth.exists():
  print('NOT TESTED: complete historical archive has not been imported');return
 async with async_playwright() as p:
  b=await p.chromium.launch(headless=True,**({'executable_path':shutil.which('chromium')} if shutil.which('chromium') else {}))
  page=await b.new_page(viewport={'width':1440,'height':900});errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
  await page.set_content(pth.read_text(),wait_until='load');frame=page.frames[1];await frame.wait_for_function('!!window.S10');assert (await frame.evaluate('S10.modules()'))[0]['id']=='cth'
  await page.evaluate("show('reference')");await page.wait_for_timeout(400);assert await page.locator('#back').is_visible();await page.click('#back');await page.frames[1].wait_for_function('!!window.S10');
  await page.evaluate("show('earlier')");await page.wait_for_timeout(600);assert len(page.frames)>=3;await page.click('#back');await page.frames[1].wait_for_function('!!window.S10');assert (await page.frames[1].evaluate('S10.snapshot()'))['channel']==1
  await b.close();assert not errors,errors;print('Reference and complete historical archive return paths passed')
if __name__=='__main__':
 q=argparse.ArgumentParser();q.add_argument('--artifacts',type=Path,default=Path('/tmp/home-qa'));asyncio.run(main(q.parse_args()))

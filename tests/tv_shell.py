"""TV cabinet and tuning smoke tests against real local HTTP and file entry points.
Browser plugin not available: Python Playwright/Chromium is the fallback.
Screenshots are rendered HTML, not design mockups; __seek only freezes QA frames.
"""
from pathlib import Path
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from functools import partial
from threading import Thread
from datetime import datetime, timezone
import argparse, asyncio, json, shutil
from playwright.async_api import async_playwright
from parity import instrument

ROOT = Path(__file__).resolve().parents[1]
VIEWPORTS = [(1440, 900), (1280, 720), (1920, 1080), (1024, 768),
             (768, 1024), (390, 844), (320, 740), (844, 390)]

class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass

async def main(args):
    server = ThreadingHTTPServer(('127.0.0.1', 0), partial(QuietHandler, directory=str(ROOT)))
    Thread(target=server.serve_forever, daemon=True).start()
    origin = f'http://127.0.0.1:{server.server_port}'
    results, errors, warnings, geometry = [], [], [], []
    async def load(page, source=ROOT / 'dist/index.html'):
        if args.content:
            await page.set_content(source.read_text(), wait_until='load')
        else:
            await page.goto(origin + '/' + source.relative_to(ROOT).as_posix(), wait_until='load')
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True, **({'executable_path': shutil.which('chromium')} if shutil.which('chromium') else {}))
            context = await browser.new_context(viewport={'width': 1440, 'height': 900}, timezone_id='Asia/Shanghai')
            page = await context.new_page()
            page.on('pageerror', lambda e: errors.append(str(e)))
            page.on('console', lambda e: warnings.append(e.text) if e.type in ('error', 'warning') else None)
            await load(page)
            assert 'S10' in await page.title() and await page.locator('.tv-cabinet').is_visible()
            assert await page.locator('.channel.on canvas').is_visible()
            assert not await page.locator('vite-error-overlay').count()
            results.append(('content-loaded' if args.content else 'HTTP') + ' bundle loads nonblank without error overlay')
            start = await page.evaluate('S10.snapshot().elapsed')
            await page.wait_for_timeout(150)
            assert await page.evaluate('S10.snapshot().elapsed') > start
            results.append('programme animation runs; cabinet is not a static image')
            await page.click('.tv-dial')
            assert await page.evaluate('S10.snapshot().channel') == 2
            assert await page.locator('#tvChannelNumber').inner_text() == '02'
            assert await page.locator('.rc-ch.cur').get_attribute('data-ch') == '2'
            assert '51.428' in await page.locator('.tv-dial-grip').get_attribute('style')
            results.append('dial click synchronises programme, number, pointer and remote')
            box = await page.locator('.tv-dial').bounding_box()
            x, y = box['x'] + box['width'] / 2, box['y'] + box['height'] / 2
            await page.mouse.move(x, y); await page.mouse.down()
            await page.mouse.move(x + 70, y, steps=10); await page.mouse.up()
            assert await page.evaluate('S10.snapshot().channel') == 5
            results.append('dial drag crosses three detents without an extra click')
            await page.mouse.move(x, y); await page.mouse.down()
            await page.mouse.move(x - 45, y, steps=5); await page.mouse.up()
            assert await page.evaluate('S10.snapshot().channel') == 3
            results.append('dial drag reverses direction')
            await page.mouse.move(x, y); await page.mouse.down()
            await page.dispatch_event('.tv-dial', 'pointercancel', {'pointerId': 1, 'isPrimary': True})
            await page.mouse.move(x + 100, y); await page.mouse.up()
            assert await page.evaluate('S10.snapshot().channel') == 3
            results.append('cancelled drag releases capture without changing channel')
            await page.locator('#screen').focus()
            await page.keyboard.press('Space')
            for number in [7, 1, 4, 2, 6, 1, 3]:
                await page.keyboard.press(str(number))
                assert await page.evaluate('S10.snapshot().channel') == number
                assert await page.locator('#tvChannelNumber').inner_text() == f'{number:02}'
            assert 'be-workbench' in await page.locator('#openTool').get_attribute('href')
            await page.wait_for_timeout(380)
            assert await page.evaluate('S10.snapshot().transition') is None
            results.append('rapid keyboard tuning: every intent immediate, last choice and URL survive')
            await page.click('.tv-channel-rocker [data-action=channel-prev]')
            assert await page.evaluate('S10.snapshot().channel') == 2
            await page.click('.tv-channel-rocker [data-action=channel-next]')
            assert await page.evaluate('S10.snapshot().channel') == 3
            results.append('cabinet previous/next buttons route to the existing player')
            await page.click('.tv-guide')
            assert await page.evaluate('S10.snapshot().menu')
            assert await page.locator('.tv-console').evaluate('(e)=>e.inert')
            assert await page.locator('#rail').evaluate('(e)=>e.inert')
            for _ in range(16):
                await page.keyboard.press('Tab')
                assert await page.evaluate("document.querySelector('#menu').contains(document.activeElement)")
            await page.keyboard.press('Escape')
            assert await page.evaluate('S10.snapshot().paused')
            assert await page.locator('.tv-guide').evaluate('(e)=>e===document.activeElement')
            assert not await page.locator('.tv-console').evaluate('(e)=>e.inert')
            results.append('menu isolates outside controls, traps focus and returns it without resuming')
            await page.locator('#screen').focus()
            await page.keyboard.press('1'); await page.keyboard.press('p')
            await page.wait_for_timeout(480)
            assert not await page.evaluate('S10.snapshot().power')
            assert await page.locator('.tv-dial').is_disabled()
            await page.keyboard.press('7')
            assert await page.evaluate('S10.snapshot().channel') == 1
            await page.click('.tv-power'); await page.wait_for_timeout(480)
            assert await page.evaluate('S10.snapshot().power')
            assert await page.locator('.tv-dial').is_enabled()
            results.append('power during tuning cancels transition; standby guards and restores controls')
            await page.locator('#screen').focus(); await page.keyboard.press('i')
            assert not await page.locator('.tv-console').is_visible()
            assert not await page.locator('.tv-handle').is_visible()
            await page.keyboard.press('Escape')
            assert await page.locator('.tv-console').is_visible()
            results.append('immersive mode removes cabinet without losing the programme')
            await page.keyboard.press('f'); await page.wait_for_timeout(100)
            assert await page.evaluate("document.fullscreenElement===document.querySelector('#screen')")
            await page.evaluate('document.exitFullscreen()')
            results.append('fullscreen targets real screen and exits cleanly')
            # Check real layout rather than only absence of horizontal overflow.
            for width, height in VIEWPORTS:
                await page.set_viewport_size({'width': width, 'height': height})
                await page.wait_for_timeout(80)
                g = await page.evaluate('''()=>{const r=document.querySelector('#screen').getBoundingClientRect();
                  const dock=document.querySelector('.mobileDock'); const d=dock.getBoundingClientRect();
                  return {width:innerWidth,height:innerHeight,left:r.left,right:r.right,top:r.top,bottom:r.bottom,
                    scrollWidth:document.documentElement.scrollWidth,
                    dockTop:getComputedStyle(dock).display==='none'?null:d.top};}''')
                assert g['scrollWidth'] <= width + 1 and g['left'] >= 0 and g['right'] <= width
                assert g['top'] >= 0 and g['bottom'] <= height
                if g['dockTop'] is not None:
                    assert g['bottom'] < g['dockTop']
                    sizes = await page.locator('.mobileDock button').evaluate_all('(es)=>es.map(e=>({w:e.offsetWidth,h:e.offsetHeight}))')
                    assert all(s['w'] >= 44 and s['h'] >= 44 for s in sizes)
                geometry.append(g)
            results.append('eight viewport layouts: full screen visible, no horizontal overflow or dock overlap')
            await page.set_viewport_size({'width': 390, 'height': 844})
            await page.click('.mobileDock [data-action=channel-next]')
            assert await page.evaluate('S10.snapshot().channel') == 2
            await page.click('.mobileDock [data-action=menu]')
            await page.keyboard.press('Escape')
            assert await page.locator('.mobileDock [data-action=menu]').evaluate('(e)=>e===document.activeElement')
            results.append('mobile dock tunes and opens/closes the screen menu with focus restoration')
            if not args.content:
                # Validate both source-module and offline bundled entry points.
                await page.goto(origin + '/index.html', wait_until='load')
                assert await page.locator('.tv-dial').count() == 1
                assert await page.evaluate('S10.version') == '2.2-tv-shell'
                results.append('ES-module development entry matches bundled shell')
                await page.goto((ROOT / 'dist/index.html').as_uri(), wait_until='load')
                assert await page.locator('.tv-cabinet').count() == 1
                await page.keyboard.press('2')
                assert await page.evaluate('S10.snapshot().channel') == 2
                results.append('offline file:// bundle opens and tunes without a network dependency')
            # A fresh context emulates touch input, rather than only a narrow desktop viewport.
            touch = await browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
            phone = await touch.new_page(); phone.on('pageerror', lambda e: errors.append(str(e)))
            await load(phone)
            cdp = await touch.new_cdp_session(phone)
            r = await phone.locator('#screen').bounding_box()
            y = r['y'] + r['height'] / 2; x = r['x'] + r['width'] * .8
            await cdp.send('Input.dispatchTouchEvent', {'type':'touchStart','touchPoints':[{'x':x,'y':y}]})
            for dx in [20, 45, 80, 120]:
                await cdp.send('Input.dispatchTouchEvent', {'type':'touchMove','touchPoints':[{'x':x-dx,'y':y}]})
            await cdp.send('Input.dispatchTouchEvent', {'type':'touchEnd','touchPoints':[]})
            await phone.wait_for_timeout(400)
            assert await phone.evaluate('S10.snapshot().channel') == 2
            assert len(touch.pages) == 1
            results.append('emulated touch swipe changes channel without opening a tool')
            await touch.close()
            reduced = await browser.new_context(reduced_motion='reduce')
            low = await reduced.new_page(); await load(low)
            assert await low.evaluate('S10.snapshot().paused')
            await low.click('.tv-dial')
            assert await low.evaluate('S10.snapshot().channel') == 2
            assert await low.evaluate('S10.snapshot().transition') is None
            assert await low.locator('.tv-dial-grip').evaluate("e=>getComputedStyle(e).transitionDuration") == '0s'
            results.append('reduced motion starts paused, skips tuning effect and preserves navigation')
            await reduced.close()
            # Deterministic screenshots, using the actual page at an HTTP origin.
            before = args.before or ROOT / 'baseline/s10-programme/S10-节目精修.html'
            for label, source in [('before', before), ('after', ROOT / 'dist/index.html')]:
                shot = await context.new_page()
                await shot.clock.set_fixed_time(datetime(2026, 9, 16, 2, 0, tzinfo=timezone.utc))
                if args.content:
                    await shot.set_content(instrument(source.read_text()), wait_until='load')
                    await shot.wait_for_timeout(4250)  # allow the truthful unavailable-storage notice to expire
                else:
                    await shot.route('**/qa-frame.html', lambda route, data=instrument(source.read_text()): route.fulfill(status=200, content_type='text/html', body=data))
                    await shot.goto(origin + '/qa-frame.html')
                for width, height in [(1440,900),(390,844),(844,390)]:
                    await shot.set_viewport_size({'width':width,'height':height})
                    await shot.evaluate('document.fonts.ready')
                    await shot.mouse.move(width / 2, 10)
                    await shot.evaluate('()=>__seek(1,0,.8)')
                    await shot.wait_for_timeout(350)
                    await shot.screenshot(path=str(args.artifacts / f'tv-{label}-{width}.png'))
                    if label == 'after' and width == 1440:
                        await shot.evaluate('()=>__seek(2,0,.8)')
                        await shot.wait_for_timeout(350)
                        await shot.screenshot(path=str(args.artifacts / 'tv-after-course.png'))
                        await shot.evaluate('()=>__seek(3,0,.8)')
                        await shot.wait_for_timeout(350)
                        await shot.screenshot(path=str(args.artifacts / 'tv-after-workbench.png'))
                        await shot.keyboard.press('m')
                        await shot.screenshot(path=str(args.artifacts / 'tv-after-menu.png'))
                        await shot.keyboard.press('Escape')
                await shot.close()
            if args.video:
                recording = await browser.new_context(viewport={'width':1440,'height':900},
                    record_video_dir=str(args.artifacts / 'recording'), record_video_size={'width':1440,'height':900})
                movie = await recording.new_page(); await load(movie)
                await movie.wait_for_timeout(4350 if args.content else 900)
                await movie.locator('#screen').focus(); await movie.keyboard.press('Space')
                for number in [1, 2, 3, 4, 5, 6, 7, 1]:
                    await movie.keyboard.press(str(number)); await movie.wait_for_timeout(750)
                for number in [2, 6, 3]:
                    await movie.keyboard.press(str(number)); await movie.wait_for_timeout(80)
                await movie.wait_for_timeout(700)
                await movie.click('.tv-dial'); await movie.wait_for_timeout(500)
                await movie.locator('#screen').focus(); await movie.keyboard.press('p')
                await movie.wait_for_timeout(700); await movie.keyboard.press('p')
                await movie.wait_for_timeout(700)
                video = movie.video
                await recording.close()
                await video.save_as(str(args.artifacts / 'tv-tuning.webm'))
                shutil.rmtree(args.artifacts / 'recording')
            await context.close()
            await browser.close()
        assert not errors and not warnings, {'errors': errors, 'console': warnings}
        results.append('no JavaScript errors or console errors/warnings')
        report = {'method':'Python Playwright / Chromium; Browser plugin not available',
                  'origins':['set_content: bundled HTML, no network origin'] if args.content else ['local HTTP: production bundle and ES modules','file://: offline bundle'],
                  'entryPointLimit': 'Local navigation blocked by ERR_BLOCKED_BY_ADMINISTRATOR; HTTP and file entry points not tested in this run' if args.content else None,
                  'beforeSource':str(before.relative_to(ROOT)) if before.is_relative_to(ROOT) else before.name,
                  'passed':results,'geometry':geometry,'pageErrors':errors,'console':warnings,
                  'notTested':['production deployment','physical mobile hardware','Safari and Firefox',
                               'navigation into external business applications','user aesthetic approval']}
        (args.artifacts / 'tv-shell-results.json').write_text(json.dumps(report, ensure_ascii=False, indent=2))
        print(f'{len(results)} TV-shell checks passed; screenshots saved to {args.artifacts}')
    finally:
        server.shutdown(); server.server_close()

if __name__ == '__main__':
    parser=argparse.ArgumentParser()
    parser.add_argument('--artifacts', type=Path, default=Path('/tmp/home-qa'))
    parser.add_argument('--video', action='store_true', help='record native Playwright WebM; requires its FFmpeg installation')
    parser.add_argument('--content', action='store_true', help='explicit fallback; does not test HTTP/file entry points')
    parser.add_argument('--before', type=Path, help='optional exact pre-polish bundled HTML')
    args=parser.parse_args(); args.artifacts.mkdir(parents=True, exist_ok=True)
    asyncio.run(main(args))

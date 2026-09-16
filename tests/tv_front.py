"""Keep the viewing plane frontal while retaining dimensional casing and controls.
Uses actual rendered quadrilaterals, pointer input and the existing programme clock.
"""
from pathlib import Path
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from threading import Thread
import argparse, asyncio, json, shutil
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
VIEWS = [(1440, 900), (1280, 720), (1024, 768), (768, 1024),
         (390, 844), (320, 740), (844, 390)]

class Handler(SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass

async def main(args):
    args.artifacts.mkdir(parents=True, exist_ok=True)
    server = ThreadingHTTPServer(('127.0.0.1', 0), partial(Handler, directory=str(ROOT)))
    Thread(target=server.serve_forever, daemon=True).start()
    origin = f'http://127.0.0.1:{server.server_port}'
    checks, views, errors, console = [], [], [], []
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(**({'executable_path': shutil.which('chromium')} if shutil.which('chromium') else {}))
            page = await browser.new_page(viewport={'width': 1440, 'height': 900}, reduced_motion='no-preference')
            page.on('pageerror', lambda e: errors.append(str(e)))
            page.on('console', lambda m: console.append(m.text) if m.type in ('error', 'warning') else None)
            if args.content:
                await page.set_content((ROOT / 'dist/index.html').read_text())
            else:
                await page.goto(origin + '/dist/index.html')
            assert 'S10' in await page.title()
            assert await page.locator('.channel.on canvas').is_visible()
            assert not await page.locator('vite-error-overlay').count()
            checks.append('intended page, meaningful programme and no error overlay')
            cdp = await page.context.new_cdp_session(page)
            async def quad(selector):
                document = await cdp.send('DOM.getDocument')
                node = await cdp.send('DOM.querySelector', {'nodeId': document['root']['nodeId'], 'selector': selector})
                box = await cdp.send('DOM.getBoxModel', {'nodeId': node['nodeId']})
                return box['model']['border']
            for width, height in VIEWS:
                await page.set_viewport_size({'width': width, 'height': height})
                await page.wait_for_timeout(100)
                geometries = {}
                for selector in ['.tv-cabinet', '#screen', '.channel.on canvas']:
                    q = await quad(selector)
                    # top/bottom horizontal, left/right vertical: no perspective trapezoid.
                    assert max(abs(q[1]-q[3]), abs(q[5]-q[7]), abs(q[0]-q[6]), abs(q[2]-q[4])) < .25, (selector, q)
                    geometries[selector] = q
                before = await quad('#screen')
                for x, y in [(20, 80), (width-20, 80), (width-20, height-100), (width/2, height/2)]:
                    await page.mouse.move(x, y)
                    await page.wait_for_timeout(160)
                    after = await quad('#screen')
                    assert max(abs(a-b) for a, b in zip(before, after)) < .25, (before, after)
                assert await page.locator('.tv-set').evaluate("e=>getComputedStyle(e).transform") == 'none'
                assert not await page.locator('#rail').is_visible()
                assert await page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1')
                q = geometries['#screen']
                assert min(q[1::2]) >= 0 and max(q[1::2]) <= height
                if await page.locator('.mobileDock').is_visible():
                    dock = await page.locator('.mobileDock').bounding_box()
                    assert max(q[1::2]) < dock['y']
                views.append({'width': width, 'height': height, 'quads': geometries})
            checks.append('seven viewports: axis-aligned screen, canvas and cabinet; no pointer tilt or overflow')
            await page.set_viewport_size({'width': 1440, 'height': 900})
            await page.locator('#screen').focus()
            for n in [7, 1, 3, 2]:
                await page.keyboard.press(str(n))
                assert await page.evaluate('S10.snapshot().channel') == n
                assert await page.locator('.tv-set').evaluate("e=>getComputedStyle(e).transform") == 'none'
            await page.wait_for_timeout(380)
            old_pointer = await page.locator('.tv-dial-grip').get_attribute('style')
            await page.click('.tv-dial')
            assert await page.evaluate('S10.snapshot().channel') == 3
            assert await page.locator('.tv-dial-grip').get_attribute('style') != old_pointer
            checks.append('channel selection turns only the dial pointer; viewing plane remains fixed')
            await page.click('.tv-play')
            elapsed = await page.evaluate('S10.snapshot().elapsed')
            await page.wait_for_timeout(300)
            assert await page.evaluate('S10.snapshot().elapsed') == elapsed
            await page.click('.tv-guide'); await page.keyboard.press('Escape')
            assert await page.evaluate('S10.snapshot().paused')
            await page.click('.tv-play'); await page.wait_for_timeout(350)
            assert await page.evaluate('S10.snapshot().elapsed') > elapsed
            checks.append('pause, menu and resume still work; frontal view does not stop programmes')
            await page.locator('#screen').focus(); await page.keyboard.press('i')
            assert not await page.locator('.tv-depth').is_visible()
            assert await page.locator('.tv-set').evaluate("e=>getComputedStyle(e).transform") == 'none'
            await page.keyboard.press('Escape')
            assert await page.locator('.tv-depth').is_visible()
            checks.append('immersive mode hides casing and returns to the same frontal view')
            # Real running screenshots. No seek, no forced pause, no timer writes.
            for width, height in [(1440, 900), (390, 844)]:
                await page.set_viewport_size({'width': width, 'height': height})
                await page.locator('#screen').focus()
                await page.keyboard.press('2'); await page.keyboard.press('1')
                await page.wait_for_function('S10.snapshot().elapsed > 7.7')
                await page.mouse.move(width/2, 10)
                await page.screenshot(path=str(args.artifacts / f'tv-front-{width}.png'))
            assert not errors and not console, (errors, console)
            await browser.close()
        report = {'method': 'Playwright Chromium; Browser plugin unavailable',
                  'entry': 'set_content; local file navigation blocked by browser policy' if args.content else 'local HTTP',
                  'checks': checks, 'views': views, 'pageErrors': errors, 'console': console}
        (args.artifacts / 'tv-front-results.json').write_text(json.dumps(report, ensure_ascii=False, indent=2))
        print(f'{len(checks)} frontal-view checks passed; seven viewports; no browser errors')
    finally:
        server.shutdown(); server.server_close()

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--content', action='store_true')
    parser.add_argument('--artifacts', type=Path, default=Path('/tmp/home-qa'))
    asyncio.run(main(parser.parse_args()))

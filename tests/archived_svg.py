"""Validate original SVG motion in isolation; does not claim production SVG-host support."""
from pathlib import Path
import argparse, asyncio, hashlib, json, shutil
from playwright.async_api import async_playwright
R = Path(__file__).resolve().parents[1]
A = R / 'archive/reuse/cinematic-original'

def digest(data): return hashlib.sha256(data).hexdigest()

async def main(out):
    out.mkdir(parents=True, exist_ok=True)
    errors, results = [], []
    expected = json.loads((A / 'EXPECTED.json').read_text())
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, **({'executable_path': shutil.which('chromium')} if shutil.which('chromium') else {}))
        page = await browser.new_page(viewport={'width': 820, 'height': 560}, reduced_motion='no-preference')
        page.on('pageerror', lambda e: errors.append(str(e)))
        for name, want in expected.items():
            raw = (A / 'assets/programmes' / name).read_bytes()
            assert digest(raw) == want, name
            await page.set_content('<!doctype html><html><meta charset="utf-8"><style>html,body{margin:0;background:#14251f}svg{display:block;width:780px;height:520px}</style><body>' + raw.decode('utf-8') + '</body></html>', wait_until='load')
            svg = page.locator('svg').first
            assert await svg.is_visible(), name
            duration = await svg.evaluate('(s)=>Number(s.dataset.duration)')
            assert duration > 0
            await svg.evaluate('(s)=>{s.pauseAnimations();s.setCurrentTime(0.5)}')
            await page.wait_for_timeout(40)
            first = await svg.screenshot()
            await svg.evaluate('(s,t)=>s.setCurrentTime(t)', duration * .65)
            await page.wait_for_timeout(40)
            later = await svg.screenshot()
            assert first != later, name + ': no visual change after seek'
            paused = await svg.evaluate('(s)=>s.getCurrentTime()')
            await page.wait_for_timeout(100)
            assert abs(await svg.evaluate('(s)=>s.getCurrentTime()') - paused) < .0001
            assert later == await svg.screenshot(), name + ': paused pixels moved'
            await svg.evaluate('(s)=>s.unpauseAnimations()')
            await page.wait_for_timeout(180)
            assert await svg.evaluate('(s)=>s.getCurrentTime()') > paused
            await svg.evaluate('(s)=>{s.pauseAnimations();s.setCurrentTime(0.5)}')
            await page.wait_for_timeout(40)
            assert first == await svg.screenshot(), name + ': backwards seek not repeatable'
            if name in {'cth-contract.svg','cth-supplies.svg','learn-design.svg','workbench-nca.svg'}:
                await svg.evaluate('(s,t)=>s.setCurrentTime(t)', duration * .65)
                await page.wait_for_timeout(40)
                await svg.screenshot(path=str(out / (Path(name).stem + '.png')))
            results.append({'file': name, 'original_sha256': want, 'phase_a_pixels_sha256': digest(first),
                            'phase_b_pixels_sha256': digest(later), 'seek_changes_pixels': True,
                            'paused_pixels_frozen': True, 'resume_clock_advances': True, 'backward_seek_repeatable': True})
        await browser.close()
    report = {'kind': 'current-isolated-SMIL-validation-not-production-host-integration',
              'browser_path': 'Browser plugin not available; Playwright Chromium',
              'load_method': 'set_content with original inline SVG; no file:// or remote-font validation',
              'viewport': [820,560], 'results': results, 'page_errors': errors,
              'limits': ['No user aesthetics approval.', 'Not a test of current production Canvas-to-SVG replacement.',
                         'Full old collection, CSS3D examples, remote fonts and streaming are not covered.']}
    (out / 'svg-results.json').write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    assert not errors, errors
    print(f'{len(results)} original SVG files: hashes, seek, frozen pixels, resume and backward seek passed')

if __name__ == '__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--artifacts',type=Path,default=Path('/tmp/home-svg-qa'))
    asyncio.run(main(parser.parse_args().artifacts))

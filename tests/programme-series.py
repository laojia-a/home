"""Browser regression for the integrated six-chapter programme and its seamless loop."""
from pathlib import Path
import argparse,asyncio,json,shutil
from playwright.async_api import async_playwright
ROOT=Path(__file__).resolve().parents[1]
HOOK="""
window.__ch1Meta=()=>PROGRAMMES[1].map(s=>({label:s.label,durationMs:s.durationMs,contentStartMs:s.contentStartMs,outroStartMs:s.outroStartMs,posterTimeMs:s.posterTimeMs}));
window.__ch1Autoplay=value=>{config.pic.autoplay=value;};
window.__ch1Paint=(i,ms)=>{state.ch=1;state.scene=i;state.elapsed=ms/1000;state.paused=true;state.pauseReason='user';state.power=true;state.menu=false;state.last=performance.now();document.querySelectorAll('.channel').forEach(el=>el.classList.toggle('on',Number(el.dataset.ch)===1));clearTransition();drawActive();updateChrome();return window.__ch1Hash();};
window.__ch1Hash=()=>Array.from(canvases[1].getContext('2d').getImageData(0,0,canvases[1].width,canvases[1].height).data).reduce((h,v)=>Math.imul(h^v,16777619)>>>0,2166136261);
"""
async def main(args):
    checks=[];errors=[]
    async with async_playwright() as p:
        browser=await p.chromium.launch(headless=True,**({'executable_path':shutil.which('chromium')} if shutil.which('chromium') else {}))
        page=await browser.new_page(viewport={'width':1440,'height':900})
        page.on('pageerror',lambda e:errors.append(str(e)))
        html=(ROOT/'dist/index.html').read_text(encoding='utf-8').replace("Object.defineProperty(window,'S10'",HOOK+"Object.defineProperty(window,'S10'",1)
        await page.set_content(html,wait_until='load');await page.evaluate('document.fonts.ready')
        chapters=await page.evaluate('__ch1Meta()')
        assert len(chapters)==6
        for width,height in [(1440,900),(390,844)]:
            await page.set_viewport_size({'width':width,'height':height})
            for i,ch in enumerate(chapters):
                before=await page.evaluate('([i,t])=>__ch1Paint(i,t)',[i,ch['durationMs']])
                after=await page.evaluate('([i,t])=>__ch1Paint(i,t)',[(i+1)%6,0])
                assert before==after,f'Boundary mismatch {width}px {i}'
                checks.append(f'{width}px chapter {i+1} -> {(i+1)%6+1}: identical boundary pixels')
            await page.evaluate('([i,t])=>__ch1Paint(i,t)',[0,chapters[0]['outroStartMs']+450])
            await page.screenshot(path=str(args.artifacts/f'ch1-handoff-{width}.png'))
            assert await page.evaluate('document.documentElement.scrollWidth<=innerWidth+1')
        await page.set_viewport_size({'width':1440,'height':900})
        await page.evaluate('__ch1Autoplay(false)')
        end=await page.evaluate('([i,t])=>__ch1Paint(i,t)',[2,chapters[2]['durationMs']])
        start=await page.evaluate('([i,t])=>__ch1Paint(i,t)',[2,0])
        assert end==start
        checks.append('autoplay disabled returns to the same chapter card')
        await page.evaluate('__ch1Autoplay(true)')
        at=chapters[0]['outroStartMs']+200
        frozen=await page.evaluate('([i,t])=>__ch1Paint(i,t)',[0,at])
        await page.wait_for_timeout(180);assert await page.evaluate('__ch1Hash()')==frozen
        assert (await page.evaluate('S10.snapshot()'))['chapterPhase']=='outro'
        await page.keyboard.press('Space');await page.wait_for_timeout(180)
        assert await page.evaluate('__ch1Hash()')!=frozen
        await page.keyboard.press('Space')
        paused=await page.evaluate('S10.snapshot()');snapshot=await page.evaluate('__ch1Hash()')
        await page.wait_for_timeout(150);assert await page.evaluate('__ch1Hash()')==snapshot
        assert (await page.evaluate('S10.snapshot()'))['elapsed']==paused['elapsed']
        checks.append('pause freezes transition pixels; resume advances them; second pause holds')
        await page.keyboard.press('ArrowDown');await page.wait_for_timeout(460)
        current=await page.evaluate('S10.snapshot()');assert current['scene']==1 and current['paused'] and current['transition'] is None
        checks.append('manual chapter selection fades and preserves manual pause')
        for i,ch in enumerate(chapters):
            await page.evaluate('([i,t])=>__ch1Paint(i,t)',[i,ch['durationMs']-30])
            await page.keyboard.press('Space');await page.wait_for_timeout(150)
            current=await page.evaluate('S10.snapshot()')
            assert current['scene']==(i+1)%6 and current['chapterPhase']=='intro'
        checks.append('all automatic advances, including chapter six -> one, enter the incoming intro')
        await browser.close()
    assert not errors,errors
    (args.artifacts/'ch1-continuous-results.json').write_text(json.dumps({'checks':checks,'pageErrors':errors},ensure_ascii=False,indent=2),encoding='utf-8')
    print(f'{len(checks)} continuous-programme browser checks passed')
if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--artifacts',type=Path,default=Path('/tmp/home-qa'));args=parser.parse_args();args.artifacts.mkdir(parents=True,exist_ok=True);asyncio.run(main(args))

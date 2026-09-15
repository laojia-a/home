"""Rebuild the S10-based standalone page; original reference stays byte-identical."""
from pathlib import Path
import re, json, hashlib
ROOT=Path(__file__).resolve().parent
source=(ROOT/'reference/s10-tv.html').read_text(encoding='utf-8')
css=re.search(r'<style>([\s\S]*?)</style>',source).group(1)
body=source.split('<body>',1)[1].split('<script>',1)[0]
body=body.replace('BROADCAST NETWORK · 七频同播','BROADCAST NETWORK · 七频导航')
body=body.replace('<div id="clock"></div>','<div id="clock"></div><button class="top-more" data-action="menu">更多 <span aria-hidden="true">···</span></button>')
body=body.replace('<div class="screen" id="screen">','<div class="screen" id="screen" tabindex="0" aria-label="电视节目。左右方向键换台，回车打开工具。">')
body=body.replace('<div class="liveTag" id="liveTag"><i></i>LIVE</div>','<div class="liveTag" id="liveTag"><i></i><span id="signalStatus">本地动画 · 非直播</span></div>')
body=body.replace('<div class="standby" id="standby">信号调试中</div>','''<div class="standby" id="standby"></div>
      <div class="broadcast-id" id="broadcastId"></div>
      <div class="programme-hud" id="hud"><div class="hud-left"><span id="channelCode"></span><span id="sceneLabel"></span></div><div class="hud-controls"><button data-action="scene-prev" aria-label="上一幕">‹</button><button data-action="play" id="playButton" aria-label="暂停节目">Ⅱ</button><button data-action="scene-next" aria-label="下一幕">›</button><button data-action="menu" class="hud-more">节目表</button><a id="openTool" target="_blank" rel="noopener noreferrer">打开工具 ↗</a></div></div>
      <div class="power-wake" id="powerWake" hidden><button data-action="power">开启电视</button></div>
      <p id="canvasAlt" class="sr-only" aria-live="polite"></p>''')
start=body.index('      <div id="menu">')
end=body.index('\n    </div>\n  </div>',start)
body=body[:start]+'''      <div id="menu" hidden>
        <section class="m-box" role="dialog" aria-modal="true" aria-labelledby="menuTitle" tabindex="-1">
          <div class="m-head"><strong id="menuTitle">MENU <em>节目与设置</em></strong><button data-action="close-menu" class="menu-close" aria-label="关闭菜单">×</button></div>
          <div class="m-tabs" role="tablist"><button role="tab" data-tab="guide">频道</button><button role="tab" data-tab="pic">画面</button><button role="tab" data-tab="link">接入</button><button role="tab" data-tab="more">更多</button></div>
          <div class="m-body" id="mBody" role="tabpanel"></div>
        </section>
      </div>'''+body[end:]
body=body.replace('<span>VOL</span><button data-k="vol+">+</button><button data-k="vol-">−</button>','<span>分幕</span><button data-action="scene-next" aria-label="下一幕">+</button><button data-action="scene-prev" aria-label="上一幕">−</button>')
body=body.replace('<button data-k="ch+">+</button><button data-k="ch-">−</button>','<button data-action="channel-next" aria-label="下一频道">+</button><button data-action="channel-prev" aria-label="上一频道">−</button>')
body=body.replace('id="rcPwr" title="电源"','id="rcPwr" data-action="power" title="电源" aria-label="电视电源"')
body=body.replace('id="rcMenu">MENU · 设置','id="rcMenu" data-action="menu">MENU · 更多')
body=body.replace('RC-07<br>七频同播','RC-07<br>七频导航')
body=body.replace('点击屏幕进入当前频道','点击屏幕进入工具<br>空格暂停 · 上下键切分幕')
body=body.replace('<nav class="sw" id="sw"></nav>','''<nav class="mobileDock" aria-label="手机遥控器"><button data-action="power">电源</button><button data-action="channel-prev">CH −</button><button data-action="play" id="mobilePlay">暂停</button><button data-action="channel-next">CH +</button><button data-action="menu">更多</button></nav><div class="toast" id="toast" role="status"></div>''')
js='\n'.join((ROOT/'src'/n).read_text(encoding='utf-8') for n in ['draw.js','programmes.js','runtime.js'])
html='''<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="color-scheme" content="light"><title>JCLAW TV · S10 节目精修</title><link rel="icon" href="data:,"><style>'''+css+'\n'+(ROOT/'src/refinements.css').read_text(encoding='utf-8')+'''</style></head><body>'''+body+'''<script>(()=>{\n'use strict';\n'''+js+'''\n})();</script></body></html>'''
(ROOT/'S10-节目精修.html').write_text(html,encoding='utf-8')
(ROOT/'src/combined.check.js').write_text(js,encoding='utf-8')
# Existing self-contained library is archived intact; no dangling links to absent demos.
arch=(ROOT/'archive/earlier-tv.html') if (ROOT/'archive/earlier-tv.html').exists() else Path('/mnt/data/JCLAW-TV-动态分镜精修.html')
if arch.exists():
 (ROOT/'archive').mkdir(exist_ok=True)
 if arch.resolve() != (ROOT/'archive/earlier-tv.html').resolve():
  (ROOT/'archive/earlier-tv.html').write_bytes(arch.read_bytes())
else:
 raise FileNotFoundError('Earlier TV archive is required for the archive menu')
# Bundle the reference and full earlier collection as real navigable internal documents.
pages={'main':html,'reference':source,'earlier':arch.read_text(encoding='utf-8')}
jsdata=json.dumps(pages,ensure_ascii=False).replace('<','\\u003c').replace('\u2028','\\u2028').replace('\u2029','\\u2029')
loader='''<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>JCLAW TV · S10 节目精修合集</title><link rel="icon" href="data:,"><style>*{box-sizing:border-box}html,body{margin:0;height:100%;background:#eae6db}iframe{border:0;width:100%;height:100%;display:block}#back{position:fixed;right:14px;top:8px;z-index:999;padding:10px 15px;border:1px solid #bfb6a2;border-radius:6px;background:#f5f1e6;color:#294832;font:12px sans-serif;cursor:pointer}#back[hidden]{display:none}</style></head><body><button id="back" hidden>← 返回新版电视</button><iframe id="surface" title="JCLAW TV 节目" allow="fullscreen; autoplay" allowfullscreen></iframe><script>const PAGES='''+jsdata+''';const f=document.getElementById('surface'),back=document.getElementById('back');let selected='';function show(id){if(!PAGES[id])return;selected=id;f.srcdoc=PAGES[id];back.hidden=id==='main';}back.onclick=()=>show('main');addEventListener('message',e=>{if(e.source===f.contentWindow&&e.data&&e.data.type==='s10-archive')show(e.data.id)});show('main');</script></body></html>'''
(ROOT/'index.html').write_text(loader,encoding='utf-8')
# The release entry point is index.html in this folder.
# The standalone page is S10-节目精修.html in this folder.
print('Built:',len(html.encode()),'standalone bytes;',len(loader.encode()),'collection bytes')

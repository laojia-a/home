"""Dependency-free build for controlled local ES modules; no third-party code is fetched."""
from pathlib import Path
import re,json,hashlib,shutil
ROOT=Path(__file__).resolve().parents[1]
IMPORT=re.compile(r'^import\s*\{([^}]+)\}\s*from\s*[\'"]([^\'"]+)[\'"];?\s*$',re.M)
EXPORT=re.compile(r'^export\s*\{([^}]+)\};?\s*$',re.M)
def bundle(entry):
    emitted=[]; visiting=set(); visited=set()
    def visit(path):
        path=path.resolve()
        if not path.is_relative_to(ROOT/'src'): raise ValueError('Import outside src: '+str(path))
        key=path.relative_to(ROOT).as_posix()
        if key in visited:return
        if key in visiting: raise ValueError('Cyclic dependency: '+key)
        visiting.add(key); text=path.read_text(encoding='utf-8')
        for match in IMPORT.finditer(text):visit(path.parent/match.group(2))
        def replace_import(match):
            target=(path.parent/match.group(2)).resolve().relative_to(ROOT).as_posix()
            bindings=re.sub(r'\s+as\s+',': ',match.group(1))
            return 'const {'+bindings+'} = __modules['+json.dumps(target)+'];'
        text=IMPORT.sub(replace_import,text)
        exports=[]
        for match in EXPORT.finditer(text): exports.extend(x.strip() for x in match.group(1).split(',') if x.strip())
        text=EXPORT.sub('',text)
        if re.search(r'^\s*(?:import|export)\b',text,re.M):raise ValueError('Unsupported module form: '+key)
        emitted.append('__modules['+json.dumps(key)+']=(()=>{\n'+text+'\nreturn {'+', '.join(exports)+'};\n})();')
        visiting.remove(key);visited.add(key)
    visit(ROOT/entry)
    return '(function(){"use strict";const __modules=Object.create(null);\n'+'\n'.join(emitted)+'\n})();'
def build():
    out=ROOT/'dist';out.mkdir(exist_ok=True)
    js=bundle('src/runtime.js');css='\n'.join((ROOT/'src/styles'/n).read_text(encoding='utf-8') for n in ['s10.css','refinements.css','tv-shell.css'])
    html=(ROOT/'src/shell.template.html').read_text(encoding='utf-8').replace('__STYLES__',css).replace('__SCRIPTS__',js.replace('</script','<\\/script'))
    (out/'index.html').write_text(html,encoding='utf-8')
    (out/'runtime.check.js').write_text(js,encoding='utf-8')
    previews=out/'previews';previews.mkdir(exist_ok=True)
    previewjs=bundle('src/dev/preview.js')
    for site in json.loads((ROOT/'src/animations/sites/manifest.json').read_text(encoding='utf-8')):
        page=(ROOT/'src/dev/preview.template.html').read_text(encoding='utf-8').replace('__SITE__',site['moduleId']).replace('__NAME__',site['website']).replace('__SCRIPT__',previewjs)
        (previews/(site['directory']+'.html')).write_text(page,encoding='utf-8')
    for name in ['reference','archive']:
        source=ROOT/name
        if source.exists(): shutil.copytree(source,out/name,dirs_exist_ok=True)
    # All-in-one is generated only when the full immutable archive actually exists.
    old=ROOT/'archive/earlier-tv.html';ref=ROOT/'reference/s10-tv.html'
    if old.exists() and ref.exists():
        pages={'main':html,'reference':ref.read_text(encoding='utf-8'),'earlier':old.read_text(encoding='utf-8')}
        payload=json.dumps(pages,ensure_ascii=False).replace('<','\\u003c').replace('\u2028','\\u2028').replace('\u2029','\\u2029')
        loader='''<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>JCLAW TV · 网站独立模块</title><style>html,body{margin:0;height:100%;background:#eae6db}iframe{width:100%;height:100%;border:0}button{position:fixed;right:12px;top:10px;z-index:9;padding:10px;background:#f5f1e6;border:1px solid #bfb6a2;color:#294832}button[hidden]{display:none}</style><button id="back" hidden>返回电视</button><iframe id="surface" title="JCLAW TV" allow="fullscreen" allowfullscreen></iframe><script>const PAGES=__PAGES__;const frame=document.querySelector('iframe'),back=document.querySelector('button');function show(id){if(!Object.hasOwn(PAGES,id))return;frame.srcdoc=PAGES[id];back.hidden=id==='main'}back.onclick=()=>show('main');addEventListener('message',e=>{if(e.source===frame.contentWindow&&e.data?.type==='s10-archive')show(e.data.id)});show('main');</script></html>'''.replace('__PAGES__',payload)
        (out/'portable.html').write_text(loader,encoding='utf-8')
    outputs={p.relative_to(out).as_posix():hashlib.sha256(p.read_bytes()).hexdigest() for p in out.rglob('*.html')}
    (out/'build-manifest.json').write_text(json.dumps(outputs,indent=2)+'\n')
    print('Built TV,',len(list(previews.glob('*.html'))),'independent website previews;',len(html.encode()),'standalone bytes')
if __name__=='__main__':build()

"""Extract inert JSON source strings from a pinned historical collection; no JS evaluation."""
from pathlib import Path, PurePosixPath
import hashlib, json, re, shutil, subprocess, sys, tempfile

CANONICAL='6239529db9efa575ba186153d807331d71b6b078fe9c922dd25b5b0b8e7c1f1c'
BASELINE_INDEX='fe83910519bd0fd260a77b7844ccde34c184422b28d65e4750f709a0369b1595'
BASELINE_PAGE='84fbe9aa8bdf955b0e14f5fe4d5b32dc1a583f76015c360b17266d5b4f4dae1b'
ROOT=Path(__file__).resolve().parents[1]
def sha(b): return hashlib.sha256(b).hexdigest()
def store(path,data,records,source):
    p=PurePosixPath(path)
    if p.is_absolute() or '..' in p.parts or '\\' in path: raise ValueError('Unsafe derived path')
    dst=ROOT/path
    if any(p.is_symlink() for p in (dst,*dst.parents)): raise ValueError('Symlinked destination')
    if dst.exists() and dst.read_bytes()!=data: raise ValueError('Refusing conflicting existing file: '+path)
    dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes(data)
    records.append({'path':path,'bytes':len(data),'sha256':sha(data),'source':source})
def extract():
    raw=(ROOT/'archive/earlier-tv.html').read_bytes()
    if sha(raw)!=CANONICAL: raise ValueError('Unrecognized historical collection')
    text=raw.decode('utf-8'); decoder=json.JSONDecoder(); records=[]
    pos=text.index('const PAGES=')+len('const PAGES=')
    pages,end=decoder.raw_decode(text[pos:]); nextpos=pos+end
    pos=text.index('GALLERIES=',nextpos)+len('GALLERIES=')
    galleries,end=decoder.raw_decode(text[pos:])
    expected={'01-launch','02-doodle','03-orbit','04-dragon','05-nanjing','06-prism','07-sky','08-television'}
    if set(pages)!=expected or set(galleries)!=expected|{'index','tv-reference'}: raise ValueError('Unexpected collection structure')
    for key,html in sorted(pages.items()):
        store('archive/reuse/legacy-pages/'+key+'.html',html.encode(),records,'earlier-tv.html:PAGES.'+key)
    library=[]
    for key,html in sorted(galleries.items()):
        store('archive/reuse/legacy-galleries/'+key+'.html',html.encode(),records,'earlier-tv.html:GALLERIES.'+key)
        match=re.search(r'\bconst ASSETS\s*=\s*',html)
        if not match:
            if key!='index':raise ValueError('Missing asset table')
            continue
        assets,_=decoder.raw_decode(html[match.end():])
        for asset in assets:
            if key=='tv-reference':
                aid=asset['id']; name=aid+'.svg'; code=asset['svg']; renderer='svg'; title=asset['title']
            else:
                aid=asset['id'];name=asset['filename'];code=asset['sourceCode'];renderer=asset['ext'];title=asset['name']
            if renderer not in {'svg','html'} or not re.fullmatch(r'[\w.\-]+',name) or PurePosixPath(name).suffix!='.'+renderer:
                raise ValueError('Unsafe asset filename: '+name)
            dest='archive/reuse/animation-library/'+key+'/'+name
            store(dest,code.encode('utf-8'),records,'GALLERIES.'+key+':ASSETS.'+aid+'.'+('svg' if key=='tv-reference' else 'sourceCode'))
            library.append({'id':aid,'theme':key,'name':title,'path':dest,'format':renderer,'description':asset.get('description',asset.get('motionNote','')),'original_source':asset.get('source','historical programme SVG'),'status':'extracted-source-not-integrated-into-production-host'})
    counts={ext:sum(x['format']==ext for x in library) for ext in ['svg','html']}
    if counts!={'svg':38,'html':8} or len(library)!=46:raise ValueError('Unexpected animation counts')
    store('archive/reuse/animation-library/manifest.json',(json.dumps({'schema':1,'source_sha256':CANONICAL,'entries':library},ensure_ascii=False,indent=2)+'\n').encode(),records,'generated from exact JSON source strings')
    # Restore baseline dependencies without changing existing reference or core source bytes.
    store('baseline/s10-programme/archive/earlier-tv.html',raw,records,'byte-identical to archive/earlier-tv.html')
    with tempfile.TemporaryDirectory(prefix='s10-frozen-build-') as temp:
        base=Path(temp)/'baseline';shutil.copytree(ROOT/'baseline/s10-programme',base)
        subprocess.run([sys.executable,str(base/'build.py')],cwd=base,check=True,timeout=45)
        built=(base/'index.html').read_bytes();standalone=(base/'S10-节目精修.html').read_bytes()
        if sha(built)!=BASELINE_INDEX or sha(standalone)!=BASELINE_PAGE:raise ValueError('Frozen baseline is not byte-reproducible')
        store('baseline/s10-programme/index.html',built,records,'reproduced by immutable baseline build.py; exact original delivered SHA-256')
    report={'schema':1,'source':'archive/earlier-tv.html','source_sha256':CANONICAL,'counts':{'navigation_pages':8,'gallery_pages':10,'svg_animation_sources':38,'css3d_html_sources':8},'notes':['JSON strings decoded without evaluating JavaScript.','Extracted original source bytes are preserved; these are not new animations.','Historical gallery/pages may expect the canonical collection parent for navigation.','38 SVG sources = 22 theme SVGs + 16 later programme SVGs; not the current Canvas 16 scenes.','The exact original baseline index was reconstructed and SHA-256 verified, not substituted with a new design.'],'files':records}
    out=ROOT/'docs/development/LEGACY-EXTRACTION.json';out.parent.mkdir(parents=True,exist_ok=True);out.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print('Extracted 8 navigation pages, 10 galleries, 38 SVG and 8 CSS3D HTML sources; exact frozen baseline restored')
if __name__=='__main__':extract()

"""Author original vector motion plates. No images, external fonts or runtime libraries.
Every plate has a single native SVG timeline. Static values describe its settled pose;
SMIL describes anticipation, action, overlapping follow-through and held breathing.
"""
from pathlib import Path
import json, math, re, html
ROOT=Path(__file__).resolve().parents[1]
old=(ROOT/'programs.js').read_text()
META=old.split('const SVG_FONT=')[0] if 'const SVG_FONT=' in old else (ROOT/'programme-metadata.js').read_text()
(ROOT/'programme-metadata.js').write_text(META)

def n(v): return f'{v:.3f}'.rstrip('0').rstrip('.') if isinstance(v,float) else str(v)
def attrs(**kw):return ' '.join(f'{k.replace("_","-")}="{html.escape(n(v),quote=True)}"' for k,v in kw.items() if v is not None)
def el(tag,content='',**kw):return f'<{tag} {attrs(**kw)}>{content}</{tag}>'
def path(d,fill='none',stroke=None,sw=None,inside='',**kw):return el('path',inside,d=d,fill=fill,stroke=stroke,stroke_width=sw,**kw)
def rect(x,y,w,h,fill,rx=0,inside='',**kw):return el('rect',inside,x=x,y=y,width=w,height=h,rx=rx,fill=fill,**kw)
def circ(x,y,r,fill,inside='',**kw):return el('circle',inside,cx=x,cy=y,r=r,fill=fill,**kw)
def ellipse(x,y,rx,ry,fill,inside='',**kw):return el('ellipse',inside,cx=x,cy=y,rx=rx,ry=ry,fill=fill,**kw)
def txt(x,y,t,size=12,fill='var(--ice)',inside='',**kw):return el('text',html.escape(t)+inside,x=x,y=y,font_size=size,fill=fill,**kw)
def group(content,**kw):return el('g',content,**kw)
# The canonical timeline uses normalised key positions; source durations differ per plate.
SOFT='.22 .61 .28 1'; INOUT='.45 0 .28 1'; SNAP='.14 .84 .23 1'; LINEAR='0 0 1 1'
def anim(attr,values,times=None,ease=INOUT):
    vals=[str(v) for v in values]; times=times or [i/(len(vals)-1) for i in range(len(vals))]
    eases=[ease]*(len(vals)-1) if isinstance(ease,str) else ease
    return f'<animate attributeName="{attr}" values="{";".join(vals)}" keyTimes="{";".join(map(n,times))}" keySplines="{";".join(eases)}" calcMode="spline" dur="__DUR__s" repeatCount="indefinite"/>'
def tr(typ,values,times=None,ease=INOUT):return anim('transform',values,times,ease).replace('<animate ','<animateTransform type="'+typ+'" ').replace('</animate>','</animateTransform>')
def reveal(delay=0,amount=1):return anim('opacity',[0,0,amount,amount,0],[0,.025+delay,.16+delay,.91,1],SOFT)
def move(content,xy=(0,0),offset=(0,30),delay=0,overshoot=3):
    x,y=xy;dx,dy=offset
    motion=tr('translate',[f'{x+dx} {y+dy}',f'{x+dx*.94} {y+dy+abs(dy)*.08}',f'{x} {y-overshoot}',f'{x} {y+overshoot*.32}',f'{x} {y}',f'{x} {y}',f'{x-dx*.2} {y-8}'],[0,.035+delay,.18+delay,.24+delay,.3+delay,.91,1],[INOUT,SNAP,SOFT,SOFT,LINEAR,INOUT])
    return group(motion+reveal(delay)+content,transform=f'translate({x} {y})')
def stroke_reveal(d,color='var(--ice)',sw=1,delay=0,opacity=1):
    return path(d,'none',color,sw,anim('stroke-dashoffset',[1,1,0,0,0],[0,.10+delay,.38+delay,.90,1],SOFT),pathLength=1,stroke_dasharray='1',stroke_dashoffset=0,opacity=opacity,stroke_linecap='round')
def surface(x,y,w,h,color='url(#metal)',r=8):
    return rect(x+3,y+9,w,h,'#010607',r,opacity='.75')+rect(x,y,w,h,color,r,stroke='#ccddd6',stroke_opacity='.17')+path(f'M{x+r} {y+1}H{x+w-r}','none','#ffffff',1,opacity='.25')
def ground(x=385,y=425,rx=225,ry=25):
    return ellipse(x,y,rx,ry,'url(#shadow)',anim('opacity',[.4,.72,.7,.64,.4],[0,.22,.6,.89,1]))
def label(x,y,t,anchor='middle',opacity='.48'):return txt(x,y,t,10,'var(--ice)',text_anchor=anchor,letter_spacing='2.1',opacity=opacity,font_family='ui-monospace,Consolas,monospace')
def paperlines(x,y,w,count=5,step=16,d=0):
    return ''.join(rect(x,y+i*step,w*(.62 if i%4==3 else 1),2,'#3e4d42',inside=anim('opacity',[.08,.08,.5,.5,.08],[0,.12+i*.012+d,.30+i*.012+d,.9,1]),opacity='.34') for i in range(count))

def definitions(color):
 return f'''<defs>
<linearGradient id="metal" x1="0" y1="0" x2=".75" y2="1"><stop stop-color="#52635b"/><stop offset=".12" stop-color="#293b36"/><stop offset=".48" stop-color="#12231f"/><stop offset=".75" stop-color="#24332b"/><stop offset="1" stop-color="#0a1916"/></linearGradient>
<linearGradient id="edge"><stop stop-color="#71827a"/><stop offset=".23" stop-color="#c2cfc6"/><stop offset=".26" stop-color="#22352c"/><stop offset=".78" stop-color="#16271f"/><stop offset="1" stop-color="#8a9c8c"/></linearGradient>
<linearGradient id="paper" x1=".07" y1=".1" x2=".94" y2="1"><stop stop-color="#fff9dc"/><stop offset=".4" stop-color="#e6d8b3"/><stop offset=".78" stop-color="#bdad86"/><stop offset="1" stop-color="#f5eccb"/></linearGradient>
<linearGradient id="fold"><stop stop-color="#8d8b6a"/><stop offset=".25" stop-color="#eee5bb"/><stop offset=".6" stop-color="#fffae6"/><stop offset="1" stop-color="#acaa88"/></linearGradient>
<linearGradient id="glass"><stop stop-color="#a7dbc5" stop-opacity=".4"/><stop offset=".1" stop-color="#f5fff3" stop-opacity=".57"/><stop offset=".19" stop-color="#173d2d" stop-opacity=".04"/><stop offset=".55" stop-color="#3a6f60" stop-opacity=".13"/><stop offset=".89" stop-color="#abc5a4" stop-opacity=".43"/><stop offset="1" stop-color="#fffdeb" stop-opacity=".2"/></linearGradient>
<linearGradient id="liquid" x2="0" y2="1"><stop stop-color="{color}" stop-opacity=".18"/><stop offset=".52" stop-color="{color}" stop-opacity=".55"/><stop offset="1" stop-color="#516e51" stop-opacity=".8"/></linearGradient>
<linearGradient id="ribbon" x1="0" y1="1" x2=".8" y2=".1"><stop stop-color="#543b2f"/><stop offset=".36" stop-color="{color}"/><stop offset=".49" stop-color="#fff3d9"/><stop offset=".6" stop-color="{color}"/><stop offset=".85" stop-color="#b66048"/><stop offset="1" stop-color="#f4d7a5"/></linearGradient>
<linearGradient id="lineglow"><stop stop-color="{color}" stop-opacity=".05"/><stop offset=".35" stop-color="{color}"/><stop offset=".63" stop-color="#fff5d6"/><stop offset="1" stop-color="{color}" stop-opacity=".14"/></linearGradient>
<linearGradient id="ceramic" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="#f2efdf"/><stop offset=".35" stop-color="#bdc3b2"/><stop offset=".58" stop-color="#869b88"/><stop offset=".85" stop-color="#dde1c6"/><stop offset="1" stop-color="#818e7f"/></linearGradient>
<radialGradient id="orb" cx=".28" cy=".22" r=".85"><stop stop-color="#f3ffe2"/><stop offset=".18" stop-color="{color}"/><stop offset=".43" stop-color="{color}" stop-opacity=".43"/><stop offset=".73" stop-color="#16382b" stop-opacity=".7"/><stop offset="1" stop-color="#080e0b"/></radialGradient>
<radialGradient id="halo"><stop stop-color="{color}" stop-opacity=".16"/><stop offset=".7" stop-color="{color}" stop-opacity=".02"/><stop offset="1" stop-color="{color}" stop-opacity="0"/></radialGradient>
<radialGradient id="shadow"><stop stop-color="#000" stop-opacity=".75"/><stop offset=".65" stop-color="#000" stop-opacity=".3"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
<linearGradient id="beam" x2="0" y2="1"><stop stop-color="{color}" stop-opacity="0"/><stop offset=".95" stop-color="{color}" stop-opacity=".12"/><stop offset="1" stop-color="{color}" stop-opacity=".7"/></linearGradient>
<pattern id="grain" patternUnits="userSpaceOnUse" width="7" height="9"><circle cx="1" cy="2" r=".45" fill="#ffffff" opacity=".05"/><circle cx="5" cy="7" r=".4" fill="#000000" opacity=".15"/></pattern>
<filter id="haze" x="-.5" y="-.3" width="2" height="1.6"><feGaussianBlur stdDeviation="15"/></filter>
<filter id="bloom" x="-.7" y="-.7" width="2.4" height="2.4"><feGaussianBlur stdDeviation="2.8"/></filter>
<filter id="smallblur" x="-.3" y="-.3" width="1.6" height="1.6"><feGaussianBlur stdDeviation=".6"/></filter>
</defs>'''

# 01 — a motor-fed folio settles onto a weighted anodised cradle.
def receipt():
    g=ground(390,434,230,30)
    g+=group(surface(210,343,326,76)+path('M210 349 244 323H510L536 349Z','url(#metal)', '#95a292',.7)+rect(239,337,268,8,'#030906',4)+path('M241 341H505','none','#9caf99',1,opacity='.25')+''.join(rect(230+i*6,386,1,16,'#d2dcc7',opacity='.22') for i in range(12))+circ(512,384,3,'var(--ice)',opacity='.5'))
    p=path('M248 55H470L479 73V345H247V78Q247 66 248 55Z','url(#paper)', '#ffeecd',.5)
    p+=path('M252 58H464L476 73H459Q452 60 441 58','url(#fold)', '#645b3f',.4,anim('d',['M252 58H464L476 73H459Q452 60 441 58','M252 58H462L479 75H458Q454 61 441 58','M252 58H464L476 73H459Q452 60 441 58'],[0,.48,1]))
    p+=rect(250,62,220,280,'url(#grain)')+txt(270,95,'CLINICAL / CONTRACT',9,'#68704e',letter_spacing='1.1')
    p+=txt(270,140,'合同金额',25,'#273329',font_weight='600')+txt(270,189,'¥',33,'#293329',font_family='Georgia,serif')
    p+=path('M306 184H449','none','#665d42',1.3,stroke_dasharray='9 8',opacity='.48')
    p+=paperlines(270,209,173,3,15)
    p+=path('M270 260H447','none','#635e47',.6,stroke_dasharray='2 3',opacity='.5')+txt(270,286,'TOTAL / TAX / TERMS',9,'#4a533f',letter_spacing='1.1')
    for i,(w,o) in enumerate([(51,.85),(56,.54),(46,.24)]):
        p+=rect(270+i*61,301,w,9,'#465b44',inside=anim('width',[0,0,w,w,0],[0,.2+i*.03,.35+i*.04,.92,1],SNAP),opacity=o)
    p+=txt(270,330,'金额与比例 · 在工具中核对',10,'#374331',opacity='.75')
    # Feed from the dark roller: clip before revealing, tiny reverse motion before advance.
    g+='<defs><clipPath id="feed"><rect x="215" y="20" width="310" height="324"/></clipPath></defs>'
    g+=group(move(p,offset=(0,216),delay=0,overshoot=5),clip_path='url(#feed)')
    # Brush passes over the paper once; accents stay subordinate to the main feed.
    for x,y,k in [(142,197,'AMOUNT'),(564,239,'PROPORTION')]:
        side=label(x,y,k,'middle','.43')+stroke_reveal(f'M{x-31} {y+12}H{x+31}',sw=.7,delay=.16)
        g+=group(reveal(.14,.8)+side)
    g+=group(anim('opacity',[0,0,.5,.05,0],[0,.27,.4,.62,1])+path('M268 332H446','none','#fff5db',1))
    return g

# 02 — fixed glass, loose liquid; each cap and each meniscus reacts at a different time.
def tubes():
    g=ground(382,443,250,26)
    g+=path('M167 322 212 296H595L570 323Z','url(#metal)', '#a6b39f',.5)+rect(166,322,405,17,'url(#edge)',3)
    g+=path('M180 337V408L207 419V339M554 339V410L529 418V337','url(#metal)', '#667662',.6)
    g+=path('M187 409H544L570 425H163Z','url(#metal)', '#8da283',.5)
    for i in range(5):
        x=206+i*76;delay=i*.026
        tube=path(f'M{x} 98h39v263q0 24-19.5 24T{x} 361Z','url(#glass)', '#b6d4b1',.65,stroke_opacity='.5')
        h=48+i*14;y=365-h
        d=f'M{x+5} {y}Q{x+20} {y+5} {x+34} {y}V360Q{x+34} 379 {x+20} 379Q{x+5} 379 {x+5} 360Z'
        d2=f'M{x+5} {y+3}Q{x+20} {y-4} {x+34} {y-2}V360Q{x+34} 379 {x+20} 379Q{x+5} 379 {x+5} 360Z'
        d3=f'M{x+5} {y-1}Q{x+20} {y+3} {x+34} {y+1}V360Q{x+34} 379 {x+20} 379Q{x+5} 379 {x+5} 360Z'
        tube+=path(d,'url(#liquid)',inside=anim('d',[d,d2,d3,d,d,d3,d],[0,.18+delay,.25+delay,.34+delay,.6,.79,1]))
        tube+=ellipse(x+19.5,y,14,3,'var(--ice)',opacity='.3',inside=anim('ry',[3,1,4,3,3],[0,.22+delay,.30+delay,.42+delay,1]))
        tube+=rect(x-3,88,45,39,'url(#edge)',5)+ellipse(x+19.5,90,20,5,'var(--ice)',opacity='.55')
        tube+=''.join(path(f'M{x+3+j*5} 99v19','none','#152e1e',1.2,opacity='.6') for j in range(7))
        tube+=path(f'M{x+7} 134V{i%2*10+244}','none','#f7ffe7',1.6,opacity='.45')
        tube+=''.join(path(f'M{x+30} {153+j*13}h{5 if j%2 else 9}','none','#ecf4cf',.6,opacity='.33') for j in range(9))
        tube+=rect(x+5,218,28,44,'#c8d0b6',2,opacity='.75')+''.join(rect(x+8+j*2.5,225,1,25,'#243a2b',opacity='.6') for j in range(8))
        g+=move(tube,offset=(-18,-66),delay=delay,overshoot=-5)
        g+=ellipse(x+20,426,22,4,'var(--ice)',opacity='.1',inside=anim('opacity',[0,.05,.14,.1,.02],[0,.2+delay,.28+delay,.6,1]))
    g+=label(379,475,'BOROSILICATE / RACK / ORDER',opacity='.43')
    return g

def sample():
    g=ground(375,428,256,31)+path('M111 374 263 302H647L497 392Z','url(#metal)', '#536e58',.5)
    for row in range(4):
      for col in range(6):
        x=212+col*56-row*24;y=145+row*54+col*7;d=(col+row)*.012
        orb=circ(x,y,15,'url(#orb)',stroke='#d6e3ba',stroke_width='.5',stroke_opacity='.4')+ellipse(x-4,y-5,5,2,'#ffffe8',opacity='.4')
        g+=move(orb,offset=((col-2.5)*32,-95-row*18),delay=d,overshoot=5)
        g+=ellipse(x,y+38,14,4,'#000',opacity='.32')
    g+=stroke_reveal('M131 291 131 128H460M133 307 470 349 619 275',sw=.8,delay=.16,opacity=.32)
    g+=group(reveal(.2)+label(141,104,'DESIGN','start')+label(503,371,'VARIABILITY','middle')+label(505,448,'POWER','middle'))
    return g

def grade():
    g=ground(387,431,258,22)
    for i in range(5):
        x=147+i*92;y=158+(abs(2-i))*10
        card=surface(x,y,74,178,'url(#glass)',8)
        card+=txt(x+37,y+84,'G'+str(i+1),30,'var(--ice)',text_anchor='middle',font_family='Georgia,serif')
        card+=''.join(rect(x+14,y+117+j*10,46 if j!=2 else 29,1,'#ccdbbe',opacity='.26') for j in range(3))
        card+=path(f'M{x+14} {y+24}h16','none','var(--ice)',2)
        card+=label(x+37,y+164,'CTCAE','middle','.3')
        g+=move(card,offset=((2-i)*73,30),delay=i*.018,overshoot=2)
    lens=circ(378,255,81,'url(#glass)',stroke='#e3edc1',stroke_width='2',stroke_opacity='.45')+circ(378,255,74,'none',stroke='#eeefd7',stroke_width='.6',opacity='.38')+path('M434 314 463 344','none','url(#edge)',13)+path('M438 313 468 341','none','#e8eed8',1,opacity='.4')
    g+=group(tr('translate',['-171 -56','-177 -60','3 1','0 0','0 0','5 -3','-171 -56'],[0,.07,.31,.39,.73,.9,1])+reveal(.06)+lens)
    g+=label(384,455,'五级原文 · 查询，不代替判断',opacity='.55')
    return g

def terms():
    g=ground(379,450,257,29)
    names=['SOC','HLGT','HLT','PT','LLT'];cn=['系统器官分类','高位组语','高位语','首选语','低位语']
    for i in range(4):
        x=183+i*57;y=123+i*59
        d=f'M{x+130} {y}C{x+183} {y} {x+25} {y+59} {x+58} {y+59}'
        g+=path(d,'none','var(--ice)',1,opacity='.15')+stroke_reveal(d,'var(--ice)',1.4,.025+i*.045,.65)
        g+=path(d,'none','#ffffdf',2,anim('stroke-dashoffset',[1,1,-1,-1],[0,.17+i*.05,.52+i*.05,1]),pathLength=1,stroke_dasharray='.045 .955',filter='url(#bloom)',opacity='.3')
    for i in range(5):
        x=149+i*57;y=75+i*59
        plate=surface(x,y,150,47,'url(#metal)',5)+path(f'M{x+10} {y+1}H{x+89}','none','var(--ice)',1,opacity='.65')
        plate+=txt(x+18,y+30,names[i],21,'var(--ice)',font_family='ui-monospace,Consolas,monospace')+label(x+135,y+30,f'0{i+1}','end','.3')
        g+=move(plate,offset=(-42,-19),delay=i*.035,overshoot=1)
        g+=group(reveal(.1+i*.035)+txt(x+163,y+29,cn[i],12,'var(--ice)',opacity='.6'))
    return g

def meal():
    g=ground(380,406,238,39)+ellipse(370,287,207,130,'#081610',stroke='#516d54',stroke_width='1')
    g+=ellipse(370,269,211,137,'url(#ceramic)',stroke='#e5ebd0',stroke_width='1')+ellipse(370,265,193,118,'none',stroke='#ffffff',stroke_width='.7',opacity='.55')+ellipse(370,269,167,99,'url(#metal)',stroke='#c6d7bb',stroke_width='.6')+ellipse(370,270,161,94,'#afbaa2',opacity='.75')
    # Toast, eggs, greens are coloured objects, not nutrition data.
    toast=path('M246 243 319 179 388 207 315 282Z','#8e5d35', '#eed4a3',1)+path('M246 233 319 168 389 197 315 271Z','#d9b273', '#ecdcb4',1.2)
    toast+=path('M258 232 319 179 375 200 314 256Z','#bb8c4f')
    for i in range(7):toast+=path(f'M{270+i*10} {225-i*5}l41 20','none','#7a4926',1.5,opacity='.23')
    for i in range(35):toast+=circ(284+(i*17)%58,204+(i*13)%38,.9,'#634325',opacity='.26')
    g+=move(toast,offset=(-57,-90),delay=.015,overshoot=3)
    eggs=ellipse(421,273,63,39,'#102217',opacity='.22')+path('M369 260C370 233 398 224 420 235C447 221 481 254 479 271C478 296 445 311 427 301C402 315 363 288 369 260Z','#eeeadd', '#a0a48a',.6)+ellipse(426,265,23,18,'#d9a348',stroke='#eed183',stroke_width='1')+ellipse(420,259,12,7,'#f7d56a',opacity='.6')
    g+=move(eggs,offset=(32,-70),delay=.05,overshoot=2)
    for i in range(5):
      x=308+i*19;y=310+i%2*12
      leaf=path(f'M{x} {y}Q{x-19} {y-46} {x+14} {y-33}Q{x+34} {y-22} {x} {y}Z','#527a4c', '#92aa67',.65)+path(f'M{x} {y}q12-16 9-30','none','#b9c388',.7)
      g+=move(leaf,offset=(18,-42),delay=.08+i*.008,overshoot=1)
    g+=path('M137 192v142M126 178v44m10-44v44m11-44v44M127 219q9 13 19 0M602 180V332M603 180q-23 21-23 63h23','none','url(#edge)',5,stroke_linecap='round')
    for i in range(3):
      x=320+i*42
      d=f'M{x} 181C{x-14} 158 {x+19} 136 {x+4} 111C{x-6} 92 {x} 85 {x+12} 72'
      g+=path(d,'none','#d6e6c1',1.4,anim('stroke-dashoffset',[0,-1],[0,1],LINEAR)+anim('opacity',[.07,.2,.08,.23,.07],[0,.2,.5,.8,1]),pathLength=1,stroke_dasharray='.25 .23',filter='url(#smallblur)',opacity='.13')
    g+=label(380,452,'食材组合 / 营养构成',opacity='.5')
    return g

# 07–09 — folios have hinges; light and paper keep moving after the main gesture ends.
def lesson():
    g=ground(384,448,262,32)
    for i in range(3):
        x=169+i*140;y=148-(i%2)*30
        card=path(f'M{x} {y}l118-22 5 210-123 22Z','url(#metal)', '#b5c2a4',.8)
        card+=path(f'M{x+6} {y+7}l105-20 4 193-109 22Z','url(#paper)')
        card+=txt(x+23,y+49,['问','辨','证'][i],42,'#314737',font_family='Georgia,SimSun,serif')+txt(x+24,y+85,['问题','设计','依据'][i],14,'#314737')
        for j in range(6):card+=path(f'M{x+22} {y+111+j*11}l{76-j%3*10}-14','none','#314737',1,opacity='.34')
        card+=path(f'M{x+38} {y+171}l46-9','none','#658758',2)
        g+=move(card,offset=((1-i)*123,60),delay=i*.022,overshoot=4)
    g+=stroke_reveal('M144 412C258 459 489 451 604 389','url(#lineglow)',1.4,.2,.8)
    g+=label(376,482,'QUESTION / DESIGN / EVIDENCE',opacity='.45')
    return g

def openbook(archive=False):
    # Consistent bezier control topology allows a real page-curl deformation.
    g=ground(385,417,265,42)
    cover='M130 249 330 322Q361 325 390 313L606 225V361L400 445Q374 453 349 443L130 354Z'
    g+=path(cover,'#18332a', '#90a78c',1)
    for i in range(6):
        y=i*2
        g+=path(f'M137 {264+y} 349 {337+y}Q371 {343+y} 392 {332+y}L600 {246+y}V{341+y}L398 {423+y}Q371 {431+y} 345 {420+y}L137 {343+y}Z','url(#paper)', '#877f63',.45)
    left='M133 201Q245 191 367 275V419Q260 335 133 342Z'
    right='M367 275Q470 190 603 197V342Q479 337 367 419Z'
    g+=path(left,'url(#paper)', '#f4edcd',.6)+path(right,'url(#fold)', '#dfd8b6',.6)
    g+=path('M368 280V416','none','#514d3a',2,opacity='.45')
    # Printed lines follow the ruled page surface rather than flat horizontal rectangles.
    for i in range(8):
        y=224+i*12
        g+=path(f'M154 {y}Q248 {y+4} 344 {y+61}','none','#3c513c',.9,opacity='.35')
        g+=path(f'M393 {y+54}Q479 {y+1} 579 {y-4}','none','#3c513c',.9,opacity='.3')
    if archive:
        g+=txt(177,304,'GCP',28,'#243d2d',transform='rotate(19 177 304)',font_family='Georgia,serif')
        g+=txt(442,325,'2026',24,'#29452e',transform='rotate(-19 442 325)',font_family='Georgia,serif')
    else:g+=stroke_reveal('M398 320Q465 282 558 273','#805d38',2.2,.27,.8)
    # The turning leaf travels through a curved upstanding pose before settling.
    d0='M367 275C432 213 535 179 603 197C606 242 605 301 603 342C497 338 433 370 367 419C367 359 367 319 367 275Z'
    d1='M367 275C437 220 464 131 457 91C492 128 503 207 488 272C428 306 395 350 367 419C367 359 367 319 367 275Z'
    d2='M367 275C316 237 266 150 235 164C192 197 173 267 183 315C251 338 304 376 367 419C367 359 367 319 367 275Z'
    d3='M367 275C282 201 206 191 133 201C133 242 133 301 133 342C237 337 306 371 367 419C367 359 367 319 367 275Z'
    turn=path(d0,'url(#fold)', '#e8ebcf',.6,anim('d',[d0,d0,d1,d2,d3,d3,d0],[0,.14,.29,.38,.5,.9,1],[LINEAR,INOUT,SOFT,SOFT,LINEAR,INOUT])+anim('opacity',[0,0,1,1,0,0],[0,.15,.17,.49,.54,1]),opacity='0')
    g+=turn
    bookmark=path('M425 342Q423 403 423 442L440 454 456 440Q444 408 441 335Z','#a77b4f', '#ddc38a',.5,anim('d',['M425 342Q423 403 423 442L440 454 456 440Q444 408 441 335Z','M425 342Q418 404 426 443L442 458 457 439Q441 408 441 335Z','M425 342Q423 403 423 442L440 454 456 440Q444 408 441 335Z'],[0,.57,1],INOUT))
    g+=bookmark
    g+=label(383,487,'REFERENCE / READING' if not archive else 'GCP / NOTES / 2026',opacity='.45')
    return move(g,offset=(0,18),delay=0,overshoot=1)

def practice():
    g=ground(385,430,251,32)
    shapes=[(166,146,155,204,'情境','SCENARIO'),(318,107,165,236,'问题','QUESTION'),(482,156,141,184,'依据','EVIDENCE')]
    g+=stroke_reveal('M217 373C291 420 458 426 563 351','var(--ice)',1,.16,.4)
    for i,(x,y,w,h,labelcn,en) in enumerate(shapes):
        card=surface(x,y,w,h,'url(#paper)' if i==1 else 'url(#glass)',7)
        color='#2d4030' if i==1 else 'var(--ice)'
        card+=txt(x+20,y+38,f'0{i+1}',11,color,letter_spacing='2')+txt(x+20,y+91,labelcn,28,color,font_family='Georgia,SimSun,serif')
        for j in range(4):card+=path(f'M{x+20} {y+114+j*12}h{w-43 if j<3 else w-71}','none',color,.8,opacity='.4')
        card+=txt(x+20,y+h-20,en,9,color,letter_spacing='1.2',opacity='.6')
        g+=move(card,offset=(68 if i>0 else -44,30-55*(i%2)),delay=i*.036,overshoot=3)
    # A pencil draws the underline with a slight grip lag, not a generic popping checkmark.
    pencil=path('M360 390 539 306 546 321 367 407 344 408Z','url(#fold)', '#a69c75',.7)+path('M344 408 362 399 365 407Z','#172d21')+path('M370 400 540 317','none','#5d8060',2)
    g+=group(reveal(.17)+tr('translate',['50 21','50 21','0 0','0 0','7 -2','50 21'],[0,.18,.41,.7,.9,1])+pencil)
    return g

# 10 — an envelope and two sampled traces, intentionally without research numbers.
def curve():
    g=ground(383,428,286,24)
    g+=path('M92 350 234 295H668L529 426H92Z','url(#metal)', '#84997f',.5,opacity='.44')
    for i in range(9):
        x=117+i*58
        g+=path(f'M{x} 350V105','none','var(--ice)',.5,opacity='.11')
    for i in range(5):g+=path(f'M115 {132+i*52}H659','none','var(--ice)',.5,opacity='.12')
    g+=path('M115 100V358H668','none','#c7cdb0',.9,opacity='.4')
    d='M117 350C156 348 167 170 245 128C321 87 373 169 443 232C511 288 579 311 657 324'
    dr='M117 350C165 352 175 198 254 156C322 122 375 193 443 252C512 308 589 326 657 336'
    g+=path(d+'L657 355H117Z','url(#beam)',inside=anim('opacity',[0,0,.68,.56,.52,0],[0,.12,.39,.63,.9,1]),opacity='.5')
    # Several displaced rails form the thickness of the luminous trace, not extra datasets.
    for i in range(7):
        rail=stroke_reveal(d,'var(--ice)',1.05,.006*i,.16-i*.012)
        g+=group(rail,transform=f'translate(0 {i*2.6+4})')
    g+=stroke_reveal(d,'url(#ribbon)',4,.035,1)+stroke_reveal(d,'#fff1d5',.9,.033,.85)
    g+=stroke_reveal(dr,'#97b9a2',1.8,.075,.8)
    g+=path(d,'none','var(--ice)',8,anim('stroke-dashoffset',[1,1,-1,-1],[0,.1,.68,1],LINEAR),pathLength=1,stroke_dasharray='.05 .95',filter='url(#bloom)',opacity='.45')
    g+=path(d,'none','#fff6db',2.5,anim('stroke-dashoffset',[1,1,-1,-1],[0,.1,.68,1],LINEAR),pathLength=1,stroke_dasharray='.013 .987',opacity='.9')
    g+=group(reveal(.17,.6)+path('M268 119V357M117 119H268','none','var(--ice)',.7,stroke_dasharray='3 6')+circ(268,118,4,'#fff4d0')+circ(268,118,12,'var(--ice)',inside=anim('r',[12,12,21,12,12],[0,.35,.46,.58,1])+anim('opacity',[0,0,.25,0,0],[0,.34,.42,.58,1]),opacity='.1'))
    g+=group(reveal(.2)+txt(650,304,'T',13,'var(--ice)',font_family='Georgia,serif')+txt(650,358,'R',13,'#8fb19c',font_family='Georgia,serif'))
    g+=label(370,471,'CONCENTRATION / TIME',opacity='.43')+label(635,90,'形态示意','end','.44')
    return g

def compare():
    g=ground(384,439,267,22)
    for i in range(2):
        x=168+i*247;color='var(--ice)' if i==0 else '#9cc1aa'
        body=surface(x,135,184,227,'url(#glass)',9)+txt(x+23,179,'T' if i==0 else 'R',28,color,font_family='Georgia,serif')+path(f'M{x+22} 311V211m0 100h140','none',color,.65,opacity='.35')
        body+=stroke_reveal(f'M{x+23} 303C{x+45} 305 {x+46} 231 {x+74} 218C{x+100} 207 {x+109} 281 {x+160} 290',color,2,.09+i*.02,.8)
        body+=label(x+90,392,'TEST' if i==0 else 'REFERENCE',opacity='.45')
        g+=move(body,offset=(-70 if i==0 else 70,15),delay=.018*i,overshoot=0)
    g+=stroke_reveal('M256 112C326 51 444 54 507 112','url(#lineglow)',1.5,.18,.7)+stroke_reveal('M507 390C442 442 332 442 256 390','url(#lineglow)',1,.2,.35)
    bar=rect(166,258,433,38,'url(#beam)',3,opacity='.25')+path('M166 295H599','none','#e6eacb',1.1,opacity='.65')
    g+=group(tr('translate',['0 -46','0 -46','0 2','0 0','0 0','0 -8','0 -46'],[0,.19,.41,.49,.72,.89,1])+reveal(.14)+bar)
    g+=label(383,487,'核对设计 / 比较结果 / 独立复核',opacity='.5')
    return g

def explore():
    g=ground(377,442,289,26)
    g+=path('M103 381 286 435 666 275','none','#637e64',1,opacity='.45')
    for i in range(17):
        x=131+i*8;y=384-i*3
        d=f'M{x} {y}C{239+i*5} {392-i*4} {253+i*4} {140-i*2} {341+i*4} {167-i*4}S{475+i*6} {264-i*4} {641+i*.2} {93+i*8}'
        g+=stroke_reveal(d,'url(#ribbon)' if i%5==0 else 'var(--ice)',2 if i%5==0 else .7,.004*i,.85 if i%5==0 else .18+i*.015)
    for i in range(3):
        g+=move(surface(158+i*161,429-i*35,111,38,'url(#metal)',3)+label(212+i*161,453-i*35,['DESIGN','CV','POWER'][i],opacity='.6'),offset=(0,16),delay=.12+i*.025,overshoot=1)
    g+=group(anim('opacity',[.06,.16,.07,.12,.06],[0,.31,.61,.82,1])+ellipse(401,272,262,158,'url(#halo)'))
    return g

# 13 — inspection moves across paper; it does not pretend to certify a document.
def pdf():
    g=ground(381,440,245,28)
    for i in [2,1,0]:
        x=217+i*27;y=104-i*15
        sheet=path(f'M{x} {y}h194l40 42v256H{x}Z','url(#paper)' if i==0 else 'url(#metal)', '#becbad',.8)
        sheet+=path(f'M{x+194} {y}v42h40','url(#fold)', '#a5b398',.5)
        sheet+=txt(x+28,y+74,'PDF' if i==0 else 'FILE',37,'#354b38' if i==0 else '#889e83',font_family='Georgia,serif')
        sheet+=paperlines(x+28,y+110,162,8,17,d=.015*i)
        g+=move(sheet,offset=(50-i*33,48),delay=(2-i)*.025,overshoot=1)
    beam=path('M187 178 513 151 513 186 187 215Z','url(#beam)')+path('M186 215 513 186','none','#e5f5db',1.4,opacity='.6')
    g+=group(tr('translate',['0 -52','0 -52','0 118','0 118','0 -52'],[0,.19,.64,.9,1])+anim('opacity',[0,0,.8,.8,0,0],[0,.15,.2,.57,.69,1])+beam)
    g+=label(380,471,'READ / LOCATE / INSPECT',opacity='.45')
    return g

def project():
    g=ground(383,443,280,27)
    for i in range(3):
        x=133+i*41;y=141+i*90;w=478-i*41
        rail=surface(x,y,w,41,'url(#metal)',6)+path(f'M{x+19} {y+20}h{w-38}','none','#b2c2a7',.5,opacity='.35')
        for j in range(5):rail+=path(f'M{x+24+j*(w-48)/4} {y+14}v12','none','#b2c2a7',.55,opacity='.4')
        rail+=label(x-10,y+24,['PROJECT','NODES','NEXT'][i],'end','.45')
        g+=move(rail,offset=(-50,15),delay=i*.025,overshoot=1)
        bx=x+105+i*57
        bead=surface(bx,y-8,77,57,'url(#glass)',7)+rect(bx+9,y+2,3,36,'var(--ice)',1,opacity='.8')+label(bx+46,y+26,f'0{i+1}','middle','.75')
        g+=group(tr('translate',['-105 0','-108 0','4 0','-1 0','0 0','0 0','-105 0'],[0,.1+i*.025,.31+i*.025,.4+i*.025,.49,.9,1])+reveal(.07+i*.025)+bead)
    g+=stroke_reveal('M277 183C307 227 361 199 389 232M389 273C412 319 453 289 487 321','var(--ice)',1,.18,.45)
    g+=label(401,451,'顺序明确，工作留在原处',opacity='.48')
    return g

def evidence():
    g=ground(386,443,260,27)
    for i,(x,y,title) in enumerate([(150,129,'SOURCE'),(489,92,'PK / BE'),(522,342,'CV')]):
        doc=surface(x,y,117,94,'url(#glass)',5)+label(x+13,y+27,title,'start','.62')
        doc+=''.join(path(f'M{x+13} {y+48+j*10}h{83-j%2*20}','none','var(--ice)',.7,opacity='.22') for j in range(3))
        g+=move(doc,offset=((1-i)*28,23),delay=i*.045,overshoot=1)
    for d in ['M261 176 342 234','M489 157 415 236','M522 381 420 302']:
        g+=stroke_reveal(d,'url(#lineglow)',1.3,.11,.65)
    lens=ellipse(371,259,82,99,'url(#glass)',stroke='#dcdccb',stroke_width='1.3',stroke_opacity='.68')+ellipse(374,259,73,91,'none',stroke='#dfded3',stroke_width='.6',opacity='.45')+ellipse(369,259,59,81,'url(#halo)')
    lens+=path('M310 221Q349 149 412 206','none','#e9f0d6',2,opacity='.55')+path('M318 329Q370 386 430 294','none','var(--ice)',1.5,opacity='.6')
    lens+=txt(374,268,'来源',23,'#e1e4ce',text_anchor='middle',font_family='Georgia,SimSun,serif')
    lens+=path('M326 337 288 399 300 407 342 347Z','url(#edge)', '#80928a',.6)
    g+=group(tr('translate',['24 -28','26 -32','-2 1','0 0','0 0','3 -2','24 -28'],[0,.06,.28,.35,.65,.9,1])+reveal(.0)+lens)
    g+=path('M121 365 327 266 634 265','none','var(--ice)',.7,anim('opacity',[.05,.25,.05,.15,.05],[0,.32,.61,.83,1]),opacity='.12')
    g+=label(385,478,'TRACE BACK / KEEP THE SOURCE',opacity='.43')
    return g

DURATIONS={'receipt':12,'tubes':13.6,'sample':12.4,'grade':12,'terms':13.2,'meal':14.2,'lesson':12.8,'reading':14,'practice':12.6,'curve':13.6,'compare':12.6,'explore':14,'pdf':13,'project':12.8,'evidence':14,'book':14.4}
ARTS={'receipt':receipt,'tubes':tubes,'sample':sample,'grade':grade,'terms':terms,'meal':meal,'lesson':lesson,'reading':lambda:openbook(False),'practice':practice,'curve':curve,'compare':compare,'explore':explore,'pdf':pdf,'project':project,'evidence':evidence,'book':lambda:openbook(True)}
NOTES={
'receipt':'滚轴先停顿，再送出纸张；纸角与阴影延迟收稳。',
'tubes':'试管错峰落架，液面在容器停止后仍有细微回摆。',
'sample':'分散的颗粒依次收拢，构成有纵深的假设阵列。',
'grade':'索引从叠层展开，光学镜片掠过后停驻。',
 'terms':'层级错峰到位，连接路径逐段显现，光脉沿既定顺序传递。',
 'meal':'餐盘静止；食材落位，只有细小热气持续上升。',
 'lesson':'三个内容页从同一书脊方向展开，再依次收稳。',
 'reading':'曲面纸页绕书脊卷动，书签保留延迟摆动。',
 'practice':'情境、问题、依据顺次入场，铅笔最后落位。',
 'curve':'曲线由细线生长为光带；尾迹保留后再缓慢消隐。',
 'compare':'双侧轨迹对应展开，比较平面经过微过冲后停稳。',
 'explore':'曲线面逐层展开，远端密度与亮度形成空间。',
 'pdf':'纸页叠层先展开，扫描光束随后滑过而非同时弹入。',
 'project':'轨道先出现，节点滑动吸附，连线稍后跟进。',
 'evidence':'来源先到位，镜片移动收稳，光路最后连接。',
 'book':'翻页后的长停留，给文字与书的体积留出呼吸。'}

def plate(kind):
    art=ARTS[kind]()
    # Shallow spatial drift only, with a long held frame; text outside never moves.
    camera=tr('translate',['-3 4','-3 4','0 0','2 -1','1 0','-3 4'],[0,.07,.33,.68,.91,1],INOUT)
    radiance=ellipse(374,253,305,222,'url(#halo)',anim('opacity',[.42,.68,.9,.66,.52,.42],[0,.2,.46,.70,.9,1]))
    rays=path('M141 -20H224L600 451 559 483Z','url(#beam)',inside=anim('opacity',[.025,.065,.032,.023,.025],[0,.36,.6,.9,1]),opacity='.03',filter='url(#haze)')
    # Fixed speck distribution, individual paths, far/near layers: no noise flicker.
    motes=''
    for i in range(24):
        x=91+(i*127)%599;y=45+(i*71)%386;r=.55+(i%4)*.28
        motes+=circ(x,y,r,'#d4dec4',anim('cx',[x,x+8+i%7,x],[0,.52,1],INOUT)+anim('cy',[y,y-10-i%8,y],[0,.56,1],INOUT),opacity=.045+i%5*.016,filter='url(#smallblur)' if i%6==0 else None)
    extra_defs=''.join(re.findall(r'<defs>(.*?)</defs>',art,re.S))
    art=re.sub(r'<defs>.*?</defs>','',art,flags=re.S)
    main=radiance+rays+group(camera+art)+motes
    still=re.sub(r'<animate(?:Transform)?\b[^>]*/>','',main)
    return '''<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 780 520" class="programme-svg cinematic-art" data-duration="__DUR__" role="img" aria-label="__LABEL__ · 原创矢量节目动画" style="--ice:__COLOR__;color:__COLOR__;isolation:isolate">
<title>__LABEL__</title><desc>以工具用途为主题的原创动态静物；非实际业务画面、研究数据或直播。</desc>'''+definitions('__COLOR__')+'<defs>'+extra_defs+'</defs>'+'''
<style>.cinematic-art{font-family:-apple-system,BlinkMacSystemFont,"Microsoft YaHei","Noto Sans CJK SC",sans-serif;overflow:visible}.still-layer{display:none}@media(prefers-reduced-motion:reduce){.motion-layer{display:none}.still-layer{display:inline}.cinematic-art[data-allow-motion="true"] .motion-layer{display:inline}.cinematic-art[data-allow-motion="true"] .still-layer{display:none}}</style>
<g class="motion-layer">'''+main+'''</g><g class="still-layer">'''+still+'''</g></svg>'''

raw={k:plate(k) for k in ARTS}
# Metadata stays grounded in the supplied tool directory; the new work is visual, not new features.
js=META+'\nconst PROGRAM_DURATION='+json.dumps(DURATIONS)+';\nconst MOTION_NOTES='+json.dumps(NOTES,ensure_ascii=False)+';\nObject.values(PROGRAMS).flat().forEach(p=>{p.duration=PROGRAM_DURATION[p.kind];p.motionNote=MOTION_NOTES[p.kind]});\n'
js+='const CINEMA_ART='+json.dumps(raw,ensure_ascii=False,separators=(',',':'))+';\nlet plateSerial=0;\n'
js+='''function sceneSVG(kind,color='#eaddb3',prefix=''){
 if(!Object.hasOwn(CINEMA_ART,kind))kind='receipt';
 if(!/^#[0-9a-f]{6}$/i.test(color))color='#eaddb3';
 const id=prefix||('plate-'+(++plateSerial)+'-');
 let raw=CINEMA_ART[kind].replaceAll('__COLOR__',color).replaceAll('__DUR__',String(PROGRAM_DURATION[kind])).replaceAll('__LABEL__',MOTION_NOTES[kind]);
 return raw.replace(/id="([^"]+)"/g,(_,n)=>'id="'+id+n+'"').replace(/url\\(#([^)]+)\\)/g,(_,n)=>'url(#'+id+n+')');
}
'''
(ROOT/'programs.js').write_text(js)
print('Authored',len(raw),'plates,',sum(map(len,raw.values())),'characters.')

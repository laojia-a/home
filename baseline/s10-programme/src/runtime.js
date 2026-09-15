/* S10 interaction layer: one programme clock; last channel selection wins.
   Side effects (navigation, saving, fullscreen) remain outside the renderers. */
const CHANNELS=[
 {n:1,id:'cth',name:'临床工具集',url:'https://cth.jclaw.top',enabled:true,color:'#9dab75',desc:'合同 / 物资 / 例数 / 分级 / 术语 / 餐谱'},
 {n:2,id:'learn',name:'临研知视',url:'https://cv.jclaw.top',enabled:true,color:'#9ac47a',desc:'三幕课程板书 · 逐条展开'},
 {n:3,id:'workbench',name:'BE Workbench',url:'https://be-workbench.jclaw.top',enabled:true,color:'#ed987e',desc:'合成曲线 / AUC 示意 / 参数标记'},
 {n:4,id:'ezctd',name:'EZCTD',url:'',enabled:false,color:'#c3a2b6',desc:'文档预告 · 原测试卡方向延续'},
 {n:5,id:'solo',name:'BE Solo',url:'',enabled:false,color:'#a3b5cf',desc:'项目预告 · 不读取真实任务'},
 {n:6,id:'oracle',name:'BE Oracle',url:'',enabled:false,color:'#b5c5a4',desc:'证据预告 · 不生成检索结论'},
 {n:7,id:'study',name:'2026 · 学习资料',url:'',enabled:false,color:'#d1bd8d',desc:'资料预告 · 默认地址未配置'}
];
const $=s=>document.querySelector(s),$$=s=>Array.from(document.querySelectorAll(s));
const KEY='jclaw-s10-programmes-2';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const baseLinks=()=>CHANNELS.map(c=>({url:c.url,enabled:c.enabled}));
function validURL(raw){if(!raw.trim())return '';const u=new URL(raw.trim());if(u.username||u.password)throw Error('地址中不能包含账号或密码');const loop=['localhost','127.0.0.1','[::1]'].includes(u.hostname);if(u.protocol!=='https:'&&!(u.protocol==='http:'&&loop))throw Error('请使用 HTTPS 或本机 HTTP 地址');return u.href;}
const defaultPic={scan:true,vig:true,bri:1,speed:1,autohide:true,autoplay:true,immersive:false};
let config={links:baseLinks(),pic:{...defaultPic}},loadWarning='';
try{const r=JSON.parse(localStorage.getItem(KEY)||'null');if(r&&Array.isArray(r.links)&&r.links.length===7){const next=r.links.map(l=>({url:validURL(typeof l.url==='string'?l.url:''),enabled:!!l.enabled}));if(next.some(l=>l.enabled&&!l.url))throw Error();config.links=next;if(r.pic&&typeof r.pic==='object'){for(const k of ['scan','vig','autohide','autoplay','immersive'])if(typeof r.pic[k]==='boolean')config.pic[k]=r.pic[k];config.pic.bri=D.clamp(Number(r.pic.bri)||1,.7,1.25);config.pic.speed=[.5,.75,1,1.25].includes(r.pic.speed)?r.pic.speed:1;}}}catch(e){loadWarning='浏览器保存不可用或旧设置无效；当前页面仍可使用。'}
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const state={ch:1,scene:0,elapsed:0,power:true,paused:reduced,menu:false,tab:'guide',draft:null,dirty:false,returnFocus:null,confirming:false,search:'',transition:null,revision:0,last:performance.now(),lastPaint:0,chromeAt:performance.now(),fpsFrames:0};
if(reduced)state.elapsed=PROGRAMMES[1][0].seconds*.72;
const screen=$('#screen'),menu=$('#menu'),mBody=$('#mBody'),wipe=$('#wipe'),canvases=[null,...Array.from({length:7},(_,i)=>$('#cv'+(i+1)))];
const ctxs=canvases.map(c=>c&&c.getContext('2d',{alpha:false}));
const current=()=>CHANNELS[state.ch-1],programme=()=>PROGRAMMES[state.ch][state.scene],currentLink=()=>config.links[state.ch-1];
function persist(){try{localStorage.setItem(KEY,JSON.stringify(config));return true}catch(e){notify('保存失败：设置仅在本次页面有效。');return false}}
function notify(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(notify.timer);notify.timer=setTimeout(()=>el.classList.remove('show'),3200)}
function pixelBrand(){const canvas=$('#brandPix'),c=canvas.getContext('2d');canvas.width=99;canvas.height=21;c.font='700 13px "Courier New",monospace';c.fillStyle='#397644';c.textBaseline='top';c.fillText('JCLAW·TV',0,3);canvas.setAttribute('role','img');canvas.setAttribute('aria-label','JCLAW TV');}
function tickClock(){const d=new Date(),pad=n=>String(n).padStart(2,'0');$('#clock').innerHTML=`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} <b>${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}</b>`}pixelBrand();tickClock();setInterval(tickClock,1000);
function size(c){const box=c.getBoundingClientRect(),dpr=Math.min(2,devicePixelRatio||1),w=Math.round(box.width),h=Math.round(box.height);if(!w||!h)return null;const tw=Math.round(w*dpr),th=Math.round(h*dpr);if(c.width!==tw||c.height!==th){c.width=tw;c.height=th;}return {w,h,dpr}}
function drawActive(){const cnv=canvases[state.ch],z=size(cnv);if(!z)return;const c=ctxs[state.ch];const mobile=z.w<600&&z.h>z.w*.92,virtualW=mobile?540:1000,scale=z.w/virtualW,H=z.h/scale,th=D.THEMES[state.ch];
 c.setTransform(z.dpr*scale,0,0,z.dpr*scale,0,0);c.globalAlpha=1;c.globalCompositeOperation='source-over';c.filter='none';c.setLineDash([]);c.textBaseline='middle';
 const s=programme(),p=D.clamp(state.elapsed/s.seconds);D.backdrop(c,virtualW,H,state.ch,state.elapsed);
 try{D.fragment(c,virtualW,H,p,()=>s.draw(c,virtualW,H,p,state.elapsed,th,mobile));D.rail(c,virtualW,H,p,PROGRAMMES[state.ch].length,state.scene,th,mobile);}
 catch(e){c.restore();c.setTransform(z.dpr*scale,0,0,z.dpr*scale,0,0);D.text(c,'节目绘制出错，工具仍可从菜单打开',virtualW/2,H/2,18,th.ink,400,'center');if(!drawActive.warned){console.error(e);notify('节目绘制异常，请从菜单打开工具。');drawActive.warned=true;}}
}
function snapshotCanvas(){const src=canvases[state.ch],c=document.createElement('canvas');c.width=Math.max(1,src.width);c.height=Math.max(1,src.height);c.getContext('2d').drawImage(src,0,0);return c;}
function ir(){const el=$('#rcIr');el.classList.add('tx');clearTimeout(ir.timer);ir.timer=setTimeout(()=>el.classList.remove('tx'),145)}
function wake(){state.chromeAt=performance.now();screen.classList.remove('chrome-hidden')}
function updateChrome(){const ch=current(),l=currentLink();screen.classList.toggle('paused',state.paused);screen.classList.toggle('power-off',!state.power);$('#powerWake').hidden=state.power;$('#channelCode').textContent='CH '+String(state.ch).padStart(2,'0');$('#sceneLabel').textContent=programme().label;$('#broadcastId').textContent='CH '+String(state.ch).padStart(2,'0')+' / '+ch.name;$('#signalStatus').textContent=state.paused?'已暂停 · 本地节目':state.ch>=4?'片头预告 · 非直播':'本地动画 · 非直播';$('#playButton').textContent=state.paused?'▷':'Ⅱ';$('#playButton').setAttribute('aria-label',state.paused?'播放节目':'暂停节目');$('#mobilePlay').textContent=state.paused?'播放':'暂停';const a=$('#openTool');a.textContent=l.url&&l.enabled?'打开工具 ↗':'配置入口 ↗';a.href=l.url&&l.enabled?l.url:'#';a.dataset.openCh=String(state.ch);$$('.rc-ch[data-ch]').forEach(b=>{const n=Number(b.dataset.ch);b.classList.toggle('cur',n===state.ch);b.classList.toggle('off',!config.links[n-1].enabled);b.setAttribute('aria-pressed',String(n===state.ch));});$('#canvasAlt').textContent=`${ch.name}，${programme().label}。本地节目示意，不是实时业务数据。`;}
function showOSD(){const ch=current(),l=currentLink(),el=$('#osd');el.innerHTML=`<span class="number">${String(state.ch).padStart(2,'0')}</span><div><div class="osd-name">${esc(ch.name)}</div><div class="osd-note">${l.enabled&&l.url?'工具入口已配置':'预告可看 · 入口待配置'}</div></div>`;el.classList.add('show');clearTimeout(showOSD.timer);showOSD.timer=setTimeout(()=>el.classList.remove('show'),1450);}
function applyPic(){const p=config.pic;$('#crtScan').style.display=p.scan?'block':'none';$('#crtVig').style.display=p.vig?'block':'none';$$('.channel').forEach(s=>s.style.setProperty('--bri',p.bri));document.body.classList.toggle('immersive',p.immersive);state.last=performance.now();drawActive();wake()}
function startTransition(type,snap){state.revision++;state.transition={type,snap,start:performance.now(),duration:type==='tune'?330:450,rev:state.revision};wipe.style.opacity=1;}
function clearTransition(){state.transition=null;const c=wipe.getContext('2d');c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,wipe.width,wipe.height);wipe.style.opacity=0;}
function paintTransition(now){const tr=state.transition;if(!tr)return;const z=size(wipe);if(!z)return;const c=wipe.getContext('2d'),W=z.w,H=z.h,k=D.clamp((now-tr.start)/tr.duration);c.setTransform(z.dpr,0,0,z.dpr,0,0);c.clearRect(0,0,W,H);
 if(tr.type==='tune'){
  // Reveal the new frame through spatially offset tiles of the prior frame.
  // No random flash, no command lock: every click immediately owns the link and the new frame.
  const cols=24,rows=14,tw=W/cols,th=H/rows;
  for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){const seed=((i*31+j*19)%37)/37,progress=D.clamp((k-seed*.28)/.70),a=1-D.smooth(progress);if(a<=.001)continue;c.globalAlpha=a;c.drawImage(tr.snap,i/cols*tr.snap.width,j/rows*tr.snap.height,tr.snap.width/cols,tr.snap.height/rows,i*tw,j*th,tw+.3,th+.3);}
  c.globalAlpha=1;
 }else{
  c.fillStyle='#0c1711';c.fillRect(0,0,W,H);const q=tr.type==='off'?k:1-k;
  if(q<.57){const hh=Math.max(2,H*(1-D.ease(q/.57)));c.drawImage(tr.snap,0,0,tr.snap.width,tr.snap.height,0,(H-hh)/2,W,hh)}
  else if(q<.85){const ww=Math.max(4,W*(1-(q-.57)/.28));const g=c.createLinearGradient((W-ww)/2,0,(W+ww)/2,0);g.addColorStop(0,'#edecd000');g.addColorStop(.5,'#edecd0');g.addColorStop(1,'#edecd000');c.fillStyle=g;c.fillRect((W-ww)/2,H/2-1.25,ww,2.5)}
  else{const a=1-(q-.85)/.15;D.ellipse(c,W/2,H/2,Math.max(.1,a*4),Math.max(.1,a*4),`rgba(235,234,207,${a})`)}
 }
 if(k>=1){if(tr.type==='off'){state.transition=null;c.globalAlpha=1;c.fillStyle='#101c14';c.fillRect(0,0,W,H);wipe.style.opacity=1;}else clearTransition()}
}
function switchTo(n,{instant=false}={}){if(!state.power||!Number.isInteger(n)||n<1||n>7)return;if(n===state.ch){showOSD();wake();return}const snap=snapshotCanvas();state.ch=n;state.scene=0;state.elapsed=state.paused?programme().seconds*.72:.001;state.last=performance.now();$$('.channel').forEach(s=>s.classList.toggle('on',Number(s.dataset.ch)===n));updateChrome();drawActive();if(instant||reduced)clearTransition();else startTransition('tune',snap);ir();showOSD();wake();}
function sceneTo(idx){if(!state.power)return;const list=PROGRAMMES[state.ch];state.scene=(idx+list.length)%list.length;state.elapsed=state.paused?programme().seconds*.72:.001;state.last=performance.now();clearTransition();updateChrome();drawActive();wake();ir();}
function playToggle(){if(!state.power)return;state.paused=!state.paused;state.last=performance.now();updateChrome();wake();if(state.menu)renderMenu();}
function powerToggle(){if(state.menu){notify('请先关闭菜单再操作电源');return}ir();const was=state.power,snap=snapshotCanvas();state.power=!state.power;state.last=performance.now();if(!was)drawActive();updateChrome();$('#osd').classList.remove('show');clearTimeout(showOSD.timer);clearTransition();if(reduced){if(was){size(wipe);const c=wipe.getContext('2d');c.setTransform(1,0,0,1,0,0);c.fillStyle='#101c14';c.fillRect(0,0,wipe.width,wipe.height);wipe.style.opacity=1;}}else startTransition(was?'off':'on',was?snap:snapshotCanvas());wake();}
function openTool(n=state.ch){const l=config.links[n-1];if(!state.power){notify('电视已待机');return}if(!l.url||!l.enabled){openMenu('link');notify('请填写并启用实际入口；本页不会启动本机软件。');return}const a=document.createElement('a');a.href=l.url;a.target='_blank';a.rel='noopener noreferrer';document.body.appendChild(a);a.click();a.remove();}
function dirty(){return state.draft&&JSON.stringify(state.draft)!==JSON.stringify(config.links)}
function confirmDiscard(after){state.confirming=true;mBody.innerHTML=`<div class="unsaved-box">接入地址有未保存的修改。<div><button data-confirm="keep">继续编辑</button><button data-confirm="discard">放弃修改</button></div></div>`;mBody.querySelector('[data-confirm=keep]').onclick=()=>{state.confirming=false;renderMenu();};mBody.querySelector('[data-confirm=discard]').onclick=()=>{state.draft=config.links.map(l=>({...l}));state.confirming=false;after()};mBody.querySelector('button').focus();}
function openMenu(tab='guide'){if(!state.menu){state.returnFocus=document.activeElement;state.draft=config.links.map(l=>({...l}));state.menu=true;menu.hidden=false;menu.classList.add('show');$('#rcMenu').classList.add('on');}state.tab=tab;state.last=performance.now();renderMenu();wake();const target=mBody.querySelector('input,button,a,select')||$('.m-box');target.focus();}
function closeMenu(force=false){if(!state.menu)return;if(!force&&dirty()){confirmDiscard(()=>closeMenu(true));return}state.menu=false;state.confirming=false;menu.hidden=true;menu.classList.remove('show');$('#rcMenu').classList.remove('on');state.last=performance.now();wake();if(state.returnFocus?.isConnected&&state.returnFocus.getClientRects().length)state.returnFocus.focus();else screen.focus();}
function renderGuide(){const q=state.search.trim().toLowerCase();const list=CHANNELS.filter(c=>(c.name+' '+c.id+' '+c.desc).toLowerCase().includes(q));return `<input type="search" id="guideSearch" value="${esc(state.search)}" aria-label="搜索频道" placeholder="查找频道或节目…"><div id="guideRows">${guideRows(list)}</div><p class="menu-note">编号用于换台；“打开”直接进入工具。频道画面均为本地示意，启用状态不是在线监测。</p>`;}
function guideRows(list){return list.length?list.map(c=>{const l=config.links[c.n-1];return `<div class="m-guide ${c.n===state.ch?'current':''}"><button class="number" data-tune="${c.n}" aria-label="切换到 ${esc(c.name)}">${String(c.n).padStart(2,'0')}</button><div><strong>${esc(c.name)}</strong><small>${esc(c.desc)}</small></div><a href="${l.url&&l.enabled?esc(l.url):'#'}" data-open-ch="${c.n}" target="_blank" rel="noopener noreferrer">${l.url&&l.enabled?'打开 ↗':'接入'}</a></div>`}).join(''):'<p class="menu-note">没有匹配频道。</p>'}
function renderMenu(){if(!state.menu)return;state.confirming=false;$$('.m-tabs button').forEach(b=>{const yes=b.dataset.tab===state.tab;b.classList.toggle('on',yes);b.setAttribute('aria-selected',String(yes));b.tabIndex=yes?0:-1});
 const p=config.pic;
 if(state.tab==='guide')mBody.innerHTML=renderGuide();
 else if(state.tab==='link')mBody.innerHTML=`<p class="menu-note">保留参考的 .top 地址。未配置的四个频道仍能预览，不会假装已经接通。</p>${CHANNELS.map((ch,i)=>{const l=state.draft[i];return `<div class="m-row"><i style="background:${ch.color}"></i><span class="m-ch">${ch.n}</span><label class="m-nm" for="link-${ch.n}">${esc(ch.name)}</label><input id="link-${ch.n}" data-link-index="${i}" value="${esc(l.url)}" spellcheck="false" placeholder="https://… 或本机地址"><button class="m-tg ${l.enabled?'on':''}" data-enable="${i}" aria-pressed="${l.enabled}">${l.enabled?'已启用':'未启用'}</button></div>`}).join('')}<div class="m-act"><button data-save>保存接入配置</button><button data-reset>填入参考默认</button></div><p class="menu-result" id="menuResult" role="status"></p>`;
 else if(state.tab==='pic')mBody.innerHTML=`<div class="m-pic">节目播放<button class="m-tg ${!state.paused?'on':''}" data-action="play">${state.paused?'播放':'暂停'}</button></div><div class="m-pic">分幕自动轮播<button class="m-tg ${p.autoplay?'on':''}" data-pic="autoplay">${p.autoplay?'开':'关'}</button></div><div class="m-pic">播放速度<select id="speed" aria-label="播放速度">${[.5,.75,1,1.25].map(v=>`<option value="${v}" ${p.speed===v?'selected':''}>${v} ×</option>`).join('')}</select></div><div class="m-pic">扫描线<button class="m-tg ${p.scan?'on':''}" data-pic="scan">${p.scan?'开':'关'}</button></div><div class="m-pic">柔和暗角<button class="m-tg ${p.vig?'on':''}" data-pic="vig">${p.vig?'开':'关'}</button></div><div class="m-pic">亮度<div class="controls"><input id="brightness" type="range" min="70" max="125" value="${Math.round(p.bri*100)}" aria-label="亮度"><output id="brightnessValue">${Math.round(p.bri*100)}%</output></div></div><div class="m-pic">控件自动收起<button class="m-tg ${p.autohide?'on':''}" data-pic="autohide">${p.autohide?'开':'关'}</button></div><div class="m-pic">沉浸观看<button class="m-tg ${p.immersive?'on':''}" data-pic="immersive">${p.immersive?'开':'关'}</button></div><div class="m-act"><button data-action="fullscreen">${document.fullscreenElement?'退出全屏':'进入全屏'}</button><button data-action="replay">本幕从头播放</button></div><p class="menu-note">菜单打开时节目停表；关闭后继续。左侧遥控器摇杆现在切换分幕，不再以 VOL 名义改变亮度。</p>`;
 else mBody.innerHTML=`<p class="menu-note">本版只更新 s10 的节目与必要的交互修复。以下保留的是可运行文件，不是空档案链接。</p><a class="archive-link" href="reference/s10-tv.html" data-archive="reference">s10 原始参考<small>保留原内容与旧行为，未覆盖</small></a><a class="archive-link" href="archive/earlier-tv.html" data-archive="earlier">此前 TV、八套导航与动画库<small>完整自包含合集；从顶部“返回新版电视”回来</small></a><p class="menu-note">当前频道分幕</p><div class="program-buttons">${PROGRAMMES[state.ch].map((s,i)=>`<button data-preview="${i}" class="${i===state.scene?'selected':''}">${esc(s.label)}</button>`).join('')}</div><p class="menu-note">本版节目使用 Canvas 2D，保留参考渲染方式。既有 SVG / CSS 三维资源在上面的旧合集内。画面不代表真实业务状态、课程进度或统计结果。</p>`;
}
function saveDraft(){const next=[];try{state.draft.forEach((l,i)=>{const url=validURL(l.url);if(l.enabled&&!url)throw Error(CHANNELS[i].name+'：启用前请填写地址');next.push({url,enabled:!!l.enabled})});}catch(e){const out=$('#menuResult');if(out){out.className='menu-result error';out.textContent=e.message||'地址格式不正确';}return}config.links=next;state.draft=next.map(l=>({...l}));const ok=persist();updateChrome();const out=$('#menuResult');out.className=ok?'menu-result':'menu-result error';out.textContent=ok?'已保存到当前浏览器。':'仅本次页面生效，浏览器拒绝保存。';}
async function toggleFullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await screen.requestFullscreen();}catch(e){notify('当前浏览器或预览环境不允许全屏。')}wake();}
function archive(id){if(dirty()){confirmDiscard(()=>archive(id));return}const paths={reference:'reference/s10-tv.html',earlier:'archive/earlier-tv.html'};if(!paths[id])return;if(window.parent!==window){window.parent.postMessage({type:'s10-archive',id},'*');}else location.href=paths[id];}
function handleAction(a){switch(a){case 'menu':state.menu?closeMenu():openMenu('guide');break;case 'close-menu':closeMenu();break;case 'channel-prev':switchTo((state.ch+5)%7+1);break;case 'channel-next':switchTo(state.ch%7+1);break;case 'scene-prev':sceneTo(state.scene-1);break;case 'scene-next':sceneTo(state.scene+1);break;case 'play':playToggle();break;case 'power':powerToggle();break;case 'fullscreen':toggleFullscreen();break;case 'replay':state.elapsed=.001;state.paused=false;state.last=performance.now();drawActive();updateChrome();closeMenu();break;}}
// Stable delegated listeners: rerendering a menu never removes its handlers.
document.addEventListener('click',e=>{const a=e.target.closest('[data-action]');if(a){e.preventDefault();handleAction(a.dataset.action);return}const tune=e.target.closest('[data-tune]');if(tune){if(dirty()){confirmDiscard(()=>{closeMenu(true);switchTo(Number(tune.dataset.tune));});return}closeMenu();switchTo(Number(tune.dataset.tune));return}const op=e.target.closest('[data-open-ch]');if(op){const n=Number(op.dataset.openCh),l=config.links[n-1];if(!state.power||!l.url||!l.enabled){e.preventDefault();openMenu('link');notify('填写并启用真实入口后即可打开');}return}const tab=e.target.closest('[data-tab]');if(tab){state.tab=tab.dataset.tab;renderMenu();return}const ar=e.target.closest('[data-archive]');if(ar){e.preventDefault();archive(ar.dataset.archive);return}if(e.target.closest('[data-save]')){saveDraft();return}if(e.target.closest('[data-reset]')){state.draft=baseLinks();renderMenu();return}const en=e.target.closest('[data-enable]');if(en){const i=Number(en.dataset.enable);state.draft[i].enabled=!state.draft[i].enabled;en.classList.toggle('on',state.draft[i].enabled);en.setAttribute('aria-pressed',String(state.draft[i].enabled));en.textContent=state.draft[i].enabled?'已启用':'未启用';return}const pc=e.target.closest('[data-pic]');if(pc){const k=pc.dataset.pic;if(['scan','vig','autoplay','autohide','immersive'].includes(k)){config.pic[k]=!config.pic[k];applyPic();persist();renderMenu();}return}const pv=e.target.closest('[data-preview]');if(pv){const i=Number(pv.dataset.preview);closeMenu();sceneTo(i);return}});
menu.addEventListener('click',e=>{if(e.target===menu)closeMenu();});
mBody.addEventListener('input',e=>{if(e.target.matches('[data-link-index]'))state.draft[Number(e.target.dataset.linkIndex)].url=e.target.value;if(e.target.id==='guideSearch'){state.search=e.target.value;const q=state.search.trim().toLowerCase();$('#guideRows').innerHTML=guideRows(CHANNELS.filter(c=>(c.name+' '+c.id+' '+c.desc).toLowerCase().includes(q)))}if(e.target.id==='brightness'){config.pic.bri=Number(e.target.value)/100;$('#brightnessValue').textContent=e.target.value+'%';applyPic();}});
mBody.addEventListener('change',e=>{if(e.target.id==='speed'){config.pic.speed=Number(e.target.value);state.last=performance.now();persist()}if(e.target.id==='brightness')persist()});
const pad=$('#rcPad');CHANNELS.forEach(ch=>{const b=document.createElement('button');b.className='rc-ch';b.dataset.ch=ch.n;b.textContent=ch.n;b.style.setProperty('--cc',ch.color);b.title=ch.name;b.setAttribute('aria-label',`频道 ${ch.n} ${ch.name}`);b.onclick=()=>switchTo(ch.n);pad.appendChild(b);});
let pointer=null,suppressClickUntil=0;
screen.addEventListener('pointerdown',e=>{if(e.target.closest('button,a,input,select,#menu'))return;pointer={x:e.clientX,y:e.clientY,id:e.pointerId}});
screen.addEventListener('pointerup',e=>{if(!pointer||pointer.id!==e.pointerId)return;const dx=e.clientX-pointer.x,dy=e.clientY-pointer.y;pointer=null;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5){suppressClickUntil=performance.now()+450;switchTo(dx<0?state.ch%7+1:(state.ch+5)%7+1);}});
screen.addEventListener('pointercancel',()=>pointer=null);
screen.addEventListener('click',e=>{if(e.target.closest('button,a,input,select,#menu'))return;if(performance.now()<suppressClickUntil)return;openTool();});
let wakeThrottle=0;document.addEventListener('pointermove',()=>{if(performance.now()-wakeThrottle>120){wakeThrottle=performance.now();wake();}},{passive:true});document.addEventListener('pointerdown',wake,{passive:true});document.addEventListener('focusin',()=>wake());
document.addEventListener('keydown',e=>{
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openMenu('guide');return}
 if(e.key==='Escape'){if(state.menu){e.preventDefault();closeMenu()}else if(config.pic.immersive){config.pic.immersive=false;applyPic();persist()}return}
 if(state.menu){
  if(e.key==='Tab'){const items=Array.from(menu.querySelectorAll('button,input,select,a[href],[tabindex]')).filter(el=>!el.disabled&&el.tabIndex>=0&&el.getClientRects().length);const first=items[0],last=items.at(-1);if(e.shiftKey&&(document.activeElement===first||!menu.contains(document.activeElement))){e.preventDefault();last?.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}}
  if(e.target.matches('[role=tab]')&&(e.key==='ArrowLeft'||e.key==='ArrowRight')){e.preventDefault();const tabs=$$('.m-tabs button'),i=tabs.indexOf(e.target),next=tabs[(i+(e.key==='ArrowRight'?1:tabs.length-1))%tabs.length];state.tab=next.dataset.tab;renderMenu();next.focus()}
  return;
 }
 if(e.target.matches('input,textarea,select,[contenteditable=true]'))return;
 if(e.key>='1'&&e.key<='7'){e.preventDefault();switchTo(Number(e.key));}
 else if(e.key==='ArrowRight'){e.preventDefault();switchTo(state.ch%7+1)}
 else if(e.key==='ArrowLeft'){e.preventDefault();switchTo((state.ch+5)%7+1)}
 else if(e.key==='ArrowUp'){e.preventDefault();sceneTo(state.scene-1)}
 else if(e.key==='ArrowDown'){e.preventDefault();sceneTo(state.scene+1)}
 else if((e.key===' '||e.key==='Enter')&&!e.target.closest('button,a')){e.preventDefault();e.key===' '?playToggle():openTool()}
 else if(e.key.toLowerCase()==='m'){e.preventDefault();openMenu('guide')}
 else if(e.key.toLowerCase()==='p'){e.preventDefault();powerToggle()}
 else if(e.key.toLowerCase()==='f'){e.preventDefault();toggleFullscreen()}
 else if(e.key.toLowerCase()==='i'){e.preventDefault();config.pic.immersive=!config.pic.immersive;applyPic();persist()}
 wake();
});
document.addEventListener('visibilitychange',()=>{state.last=performance.now()});window.addEventListener('resize',()=>{drawActive();if(!state.power&&!state.transition){size(wipe);const c=wipe.getContext('2d');c.setTransform(1,0,0,1,0,0);c.fillStyle='#101c14';c.fillRect(0,0,wipe.width,wipe.height);}});
window.addEventListener('beforeunload',e=>{if(state.menu&&dirty()){e.preventDefault();e.returnValue='';}});
let motionErrors=0;
function frame(now){const dt=Math.min(.10,Math.max(0,(now-state.last)/1000));state.last=now;
 if(state.power&&!state.paused&&!state.menu&&!document.hidden){state.elapsed+=dt*config.pic.speed;if(state.elapsed>=programme().seconds){if(config.pic.autoplay){state.elapsed=0;state.scene=(state.scene+1)%PROGRAMMES[state.ch].length;updateChrome()}else state.elapsed%=programme().seconds;}}
 // Even a paused programme re-renders on resize; all temporal values are held.
 if(state.power&&!state.paused&&!state.menu&&!document.hidden&&now-state.lastPaint>14){drawActive();state.lastPaint=now;state.fpsFrames++;}
 paintTransition(now);
 const holdingFocus=$('#hud').contains(document.activeElement)||state.menu;
 if(config.pic.autohide&&state.power&&!holdingFocus&&now-state.chromeAt>4200)screen.classList.add('chrome-hidden');
 requestAnimationFrame(frame);
}
$$('.channel').forEach(s=>s.classList.toggle('on',Number(s.dataset.ch)===1));updateChrome();applyPic();drawActive();requestAnimationFrame(frame);
if(loadWarning)setTimeout(()=>notify(loadWarning),800);
Object.defineProperty(window,'S10',{value:Object.freeze({version:'2.0-programmes',snapshot:()=>({channel:state.ch,scene:state.scene,label:programme().label,elapsed:state.elapsed,paused:state.paused,power:state.power,menu:state.menu,transition:state.transition?.type||null,frames:state.fpsFrames,url:currentLink().url,enabled:currentLink().enabled,speed:config.pic.speed,dirty:!!dirty(),immersion:config.pic.immersive})}),writable:false});

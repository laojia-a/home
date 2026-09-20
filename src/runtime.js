import { HISTORICAL_ARCHIVE } from "./archive-state.js";
/* S10 interaction layer: one programme clock; last channel selection wins.
   Side effects (navigation, saving, fullscreen) remain outside the renderers. */
import { CHANNELS, PROGRAMMES, SITE_BY_CHANNEL } from "./animations/registry.js";
import { D } from "./animations/shared/draw.js";
import { mountTelevision, channelDistance } from "./ui/tv-shell.js";
import { paintTuning } from "./ui/tuning.js";
import { createSettings } from "./settings/config.js";
import { createManagedSettings } from "./settings/managed.js";
import { createSettingsMenu } from "./ui/settings-menu.js";
import { advanceProgramme } from "./player/clock.js";
import { openConfiguredTool } from "./navigation/open-tool.js";
import { siteMarkDataUrl } from "./ui/site-marks.js";
const $=s=>document.querySelector(s),$$=s=>Array.from(document.querySelectorAll(s));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const settings=createSettings(CHANNELS,{getItem:key=>localStorage.getItem(key),setItem:(key,value)=>localStorage.setItem(key,value)});
const config=settings.config,loadWarning=settings.warning,baseLinks=settings.defaults;
const managed=createManagedSettings(config,settings);
let configReady=false;
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
let reduced=motionPreference.matches;
const state={ch:1,scene:0,elapsed:0,power:true,paused:reduced,pauseReason:reduced?'system':null,menu:false,tab:'guide',draft:null,dirty:false,returnFocus:null,confirming:false,search:'',transition:null,revision:0,last:performance.now(),lastPaint:0,chromeAt:performance.now(),fpsFrames:0};
if(reduced)state.elapsed=PROGRAMMES[1][0].seconds*.72;
const screen=$('#screen'),menu=$('#menu'),mBody=$('#mBody'),wipe=$('#wipe'),canvases=[null,...Array.from({length:7},(_,i)=>$('#cv'+(i+1)))];
const cabinet=mountTelevision(screen,CHANNELS,n=>switchTo(n));
const ctxs=canvases.map(c=>c&&c.getContext('2d',{alpha:false}));
const current=()=>CHANNELS[state.ch-1],programme=()=>PROGRAMMES[state.ch][state.scene],currentLink=()=>config.links[state.ch-1];
function persist(){const ok=settings.persist();if(!ok)notify('保存失败：设置仅在本次页面有效。');return ok}
function notify(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(notify.timer);notify.timer=setTimeout(()=>el.classList.remove('show'),3200)}
function size(c){const dpr=Math.min(2,devicePixelRatio||1),w=c.clientWidth,h=c.clientHeight;if(!w||!h)return null;const tw=Math.round(w*dpr),th=Math.round(h*dpr);if(c.width!==tw||c.height!==th){c.width=tw;c.height=th;}return {w,h,dpr}}
let activeDrawing=null, activeSceneId='';
function releaseDrawing(){if(activeDrawing)activeDrawing.dispose();activeDrawing=null;activeSceneId='';}
function drawActive(){
 const canvas=canvases[state.ch], z=size(canvas);if(!z)return;
 const scene=programme(),site=SITE_BY_CHANNEL.get(state.ch),viewport={width:z.w,height:z.h,dpr:z.dpr};
 try {
  if(activeSceneId!==scene.id){releaseDrawing();activeDrawing=scene.create({canvas,viewport,theme:site.theme,index:state.scene,count:site.scenes.length});activeSceneId=scene.id;}
  activeDrawing.resize(viewport);
  activeDrawing.render({elapsedMs:state.elapsed*1000,deltaMs:0,playing:state.power&&!state.paused&&!state.menu&&!document.hidden});
 }catch(error){releaseDrawing();console.error(error);notify('节目绘制异常，请从菜单打开工具。');}
}
window.addEventListener('pagehide',releaseDrawing);
function snapshotCanvas(){const src=canvases[state.ch],c=document.createElement('canvas');c.width=Math.max(1,src.width);c.height=Math.max(1,src.height);const context=c.getContext('2d');context.drawImage(src,0,0);if(state.transition?.type==='tune')context.drawImage(wipe,0,0,c.width,c.height);return c;}
function wake(){state.chromeAt=performance.now();screen.classList.remove('chrome-hidden')}
function updateChrome(){
 cabinet.update(state);
 const ch=current(),mark=$('#siteMark');
 document.body.dataset.channel=ch.id;
 screen.classList.toggle('paused',state.paused);
 screen.classList.toggle('power-off',!state.power);
 $('#powerWake').hidden=state.power;
 $('#siteIdentity').hidden=!state.power||programme().signal==='none';
 $('#siteName').textContent=ch.name;
 $('#siteScene').textContent=programme().label;
 if(mark.dataset.siteId!==ch.id){mark.src=siteMarkDataUrl(ch.id);mark.dataset.siteId=ch.id;}
 $('#mobilePlay').textContent=state.paused?'播放':'暂停';
 $('#canvasAlt').textContent=programme().signal==='none'?`${ch.name}，无信号。`:`${ch.name}，${programme().label}。本地节目示意，不是实时业务数据。`;
}
function applyPic(){const p=config.pic;$('#crtScan').style.display=p.scan?'block':'none';$('#crtVig').style.display=p.vig?'block':'none';$$('.channel').forEach(s=>s.style.setProperty('--bri',p.bri));document.body.classList.toggle('immersive',p.immersive);state.last=performance.now();drawActive();wake()}
function startTransition(type,snap,direction=1){state.revision++;state.transition={type,snap,direction,start:performance.now(),duration:type==='tune'?300:450,rev:state.revision};wipe.style.opacity=1;}
function clearTransition(){state.transition=null;const c=wipe.getContext('2d');c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,wipe.width,wipe.height);wipe.style.opacity=0;}
function paintTransition(now){const tr=state.transition;if(!tr)return;const z=size(wipe);if(!z)return;const c=wipe.getContext('2d'),W=z.w,H=z.h,k=D.clamp((now-tr.start)/tr.duration);c.setTransform(z.dpr,0,0,z.dpr,0,0);c.clearRect(0,0,W,H);
 if(tr.type==='tune'){
  paintTuning(c,tr.snap,W,H,k,tr.direction);
 }else{
  c.fillStyle='#0c1711';c.fillRect(0,0,W,H);const q=tr.type==='off'?k:1-k;
  if(q<.57){const hh=Math.max(2,H*(1-D.ease(q/.57)));c.drawImage(tr.snap,0,0,tr.snap.width,tr.snap.height,0,(H-hh)/2,W,hh)}
  else if(q<.85){const ww=Math.max(4,W*(1-(q-.57)/.28));const g=c.createLinearGradient((W-ww)/2,0,(W+ww)/2,0);g.addColorStop(0,'#edecd000');g.addColorStop(.5,'#edecd0');g.addColorStop(1,'#edecd000');c.fillStyle=g;c.fillRect((W-ww)/2,H/2-1.25,ww,2.5)}
  else{const a=1-(q-.85)/.15;D.ellipse(c,W/2,H/2,Math.max(.1,a*4),Math.max(.1,a*4),`rgba(235,234,207,${a})`)}
 }
 if(k>=1){if(tr.type==='off'){state.transition=null;c.globalAlpha=1;c.fillStyle='#101c14';c.fillRect(0,0,W,H);wipe.style.opacity=1;}else clearTransition()}
}
function switchTo(n,{instant=false}={}){if(!state.power||!Number.isInteger(n)||n<1||n>7)return;if(n===state.ch){wake();return}const snap=snapshotCanvas(),direction=Math.sign(channelDistance(state.ch,n));state.ch=n;state.scene=0;state.elapsed=state.paused?programme().seconds*.72:.001;state.last=performance.now();$$('.channel').forEach(s=>s.classList.toggle('on',Number(s.dataset.ch)===n));updateChrome();drawActive();if(instant||reduced)clearTransition();else startTransition('tune',snap,direction);wake();}
function sceneTo(idx){if(!state.power)return;const list=PROGRAMMES[state.ch];state.scene=(idx+list.length)%list.length;state.elapsed=state.paused?programme().seconds*.72:.001;state.last=performance.now();clearTransition();updateChrome();drawActive();wake();}
function playToggle(){if(!state.power)return;state.paused=!state.paused;state.pauseReason=state.paused?'user':null;state.last=performance.now();updateChrome();wake();if(state.menu)renderMenu();}
function powerToggle(){if(state.menu){notify('请先关闭菜单再操作电源');return}const was=state.power,snap=snapshotCanvas();state.power=!state.power;state.last=performance.now();if(!was)drawActive();updateChrome();clearTransition();if(reduced){if(was){size(wipe);const c=wipe.getContext('2d');c.setTransform(1,0,0,1,0,0);c.fillStyle='#101c14';c.fillRect(0,0,wipe.width,wipe.height);wipe.style.opacity=1;}}else startTransition(was?'off':'on',was?snap:snapshotCanvas());wake();}
function openTool(n=state.ch){if(!configReady){notify('正在读取全站配置，请稍后重试');return}const l=config.links[n-1];if(!state.power){notify('电视已待机');return}if(!l.url||!l.enabled){openMenu('link');notify('该频道尚未配置接入地址');return}openConfiguredTool(l);}
const menuController=createSettingsMenu({state,config,settings,managed,cabinet,notify,updateChrome,wake,screen,esc});
const {dirty,confirmDiscard,closeMenu,renderMenu,guideRows,saveDraft,login}=menuController;
function openMenu(tab){if(!configReady){notify('正在读取全站配置，请稍后重试');return}menuController.openMenu(tab);}
async function toggleFullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await screen.requestFullscreen();}catch(e){notify('当前浏览器或预览环境不允许全屏。')}wake();}
function archive(id){if(id==='earlier'&&!HISTORICAL_ARCHIVE){notify('完整旧合集仍在归档导入批次；当前不打开缺失文件。');return;}if(dirty()){confirmDiscard(()=>archive(id));return}const paths={reference:'reference/s10-tv.html',earlier:'archive/earlier-tv.html'};if(!paths[id])return;if(window.parent!==window){window.parent.postMessage({type:'s10-archive',id},'*');}else location.href=paths[id];}
function handleAction(a){switch(a){case 'menu':state.menu?closeMenu():openMenu('guide');break;case 'close-menu':closeMenu();break;case 'channel-prev':switchTo((state.ch+5)%7+1);break;case 'channel-next':switchTo(state.ch%7+1);break;case 'scene-prev':sceneTo(state.scene-1);break;case 'scene-next':sceneTo(state.scene+1);break;case 'play':playToggle();break;case 'power':powerToggle();break;case 'fullscreen':toggleFullscreen();break;case 'open-tool':openTool();break;case 'replay':state.elapsed=.001;state.paused=false;state.pauseReason=null;state.last=performance.now();drawActive();updateChrome();closeMenu();break;}}
// Stable delegated listeners: rerendering a menu never removes its handlers.
document.addEventListener('click',e=>{const a=e.target.closest('[data-action]');if(a){e.preventDefault();handleAction(a.dataset.action);return}const tune=e.target.closest('[data-tune]');if(tune){if(dirty()){confirmDiscard(()=>{closeMenu(true);switchTo(Number(tune.dataset.tune));});return}closeMenu();switchTo(Number(tune.dataset.tune));return}const op=e.target.closest('[data-open-ch]');if(op){const n=Number(op.dataset.openCh),l=config.links[n-1];if(!state.power||!l.url||!l.enabled){e.preventDefault();openMenu('link');notify('该频道尚未配置接入地址');}return}const tab=e.target.closest('[data-tab]');if(tab){if(managed.managed()&&!managed.authenticated())return;state.tab=tab.dataset.tab;renderMenu();return}const ar=e.target.closest('[data-archive]');if(ar){e.preventDefault();archive(ar.dataset.archive);return}if(e.target.closest('[data-save]')){saveDraft();return}if(e.target.closest('[data-reset]')){state.draft=baseLinks();renderMenu();return}const en=e.target.closest('[data-enable]');if(en){const i=Number(en.dataset.enable);state.draft[i].enabled=!state.draft[i].enabled;en.classList.toggle('on',state.draft[i].enabled);en.setAttribute('aria-pressed',String(state.draft[i].enabled));en.textContent=state.draft[i].enabled?'已启用':'未启用';return}const pc=e.target.closest('[data-pic]');if(pc){const k=pc.dataset.pic;if(['scan','vig','autoplay','autohide','immersive'].includes(k)){config.pic[k]=!config.pic[k];applyPic();persist();renderMenu();}return}const pv=e.target.closest('[data-preview]');if(pv){const i=Number(pv.dataset.preview);closeMenu();sceneTo(i);return}});
menu.addEventListener('submit',e=>{if(e.target.id==='adminLogin'){e.preventDefault();login($('#adminPassword').value)}});
menu.addEventListener('click',e=>{if(e.target===menu)closeMenu();});
mBody.addEventListener('input',e=>{if(e.target.matches('[data-link-index]'))state.draft[Number(e.target.dataset.linkIndex)].url=e.target.value;if(e.target.id==='guideSearch'){state.search=e.target.value;const q=state.search.trim().toLowerCase();$('#guideRows').innerHTML=guideRows(CHANNELS.filter(c=>(c.name+' '+c.id+' '+c.desc).toLowerCase().includes(q)))}if(e.target.id==='brightness'){config.pic.bri=Number(e.target.value)/100;$('#brightnessValue').textContent=e.target.value+'%';applyPic();}});
mBody.addEventListener('change',e=>{if(e.target.id==='speed'){config.pic.speed=Number(e.target.value);state.last=performance.now();persist()}if(e.target.id==='brightness')persist()});
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
motionPreference.addEventListener('change',e=>{reduced=e.matches;if(reduced&&!state.paused){state.paused=true;state.pauseReason='system';clearTransition();}else if(!reduced&&state.pauseReason==='system'){state.pauseReason=null;}state.last=performance.now();updateChrome();wake();});
document.addEventListener('visibilitychange',()=>{state.last=performance.now()});window.addEventListener('resize',()=>{drawActive();if(!state.power&&!state.transition){size(wipe);const c=wipe.getContext('2d');c.setTransform(1,0,0,1,0,0);c.fillStyle='#101c14';c.fillRect(0,0,wipe.width,wipe.height);}});
window.addEventListener('beforeunload',e=>{if(state.menu&&dirty()){e.preventDefault();e.returnValue='';}});
let motionErrors=0;
function frame(now){const active=state.power&&!state.paused&&!state.menu&&!document.hidden;
 if(advanceProgramme(state,now,PROGRAMMES[state.ch],config.pic,active))updateChrome();
 // Even a paused programme re-renders on resize; all temporal values are held.
 if(active&&now-state.lastPaint>14){drawActive();state.lastPaint=now;state.fpsFrames++;}
 paintTransition(now);
  requestAnimationFrame(frame);
}
$$('.channel').forEach(s=>s.classList.toggle('on',Number(s.dataset.ch)===1));updateChrome();applyPic();drawActive();requestAnimationFrame(frame);
managed.load().then(()=>{configReady=true;updateChrome();}).catch(e=>notify(e.message));
if(loadWarning)setTimeout(()=>notify(loadWarning),800);
Object.defineProperty(window,'S10',{value:Object.freeze({modules:()=>CHANNELS.map(c=>({id:c.id,name:c.name,scenes:PROGRAMMES[c.n].map(s=>({id:s.id,label:s.label,durationMs:s.durationMs}))})),version:'2.4-front-depth',snapshot:()=>({channel:state.ch,scene:state.scene,label:programme().label,signal:programme().signal||'programme',elapsed:state.elapsed,paused:state.paused,pauseReason:state.pauseReason,reducedMotion:reduced,power:state.power,menu:state.menu,transition:state.transition?.type||null,frames:state.fpsFrames,url:currentLink().url,enabled:currentLink().enabled,speed:config.pic.speed,dirty:!!dirty(),immersion:config.pic.immersive})}),writable:false});

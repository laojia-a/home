import { mountTelevision } from '../../src/ui/tv-shell.js';
import { siteMarkDataUrl } from '../../src/ui/site-marks.js';
import { site } from '../../src/animations/sites/cth/index.js';
import { drawStage } from './stage.js';
const screen=document.querySelector('#screen'),canvas=document.querySelector('#sceneCanvas'),c=canvas.getContext('2d',{alpha:false});
const cabinet=mountTelevision(screen,Array.from({length:7},(_,i)=>({n:i+1,name:i===0?'临床工具集':'频道 '+(i+1)})),()=>{});
cabinet.update({ch:1,power:true,paused:false,menu:false,pauseReason:null});
document.querySelector('#siteMark').src=siteMarkDataUrl('cth');
document.querySelectorAll('.tv-key,.tv-dial').forEach(b=>{b.disabled=true;b.title='请使用下方镜头小样控件';});document.querySelector('#tvPlayLabel').textContent='样稿';
let ms=0,playing=false,last=0,frame=0;
const play=document.querySelector('#play'),seek=document.querySelector('#seek'),time=document.querySelector('#time');
function paint(){
  const w=screen.clientWidth,h=screen.clientHeight,dpr=Math.min(devicePixelRatio,2),mobile=w<600&&h>w*.92,W=mobile?540:1000,scale=w/W,H=h/scale;
  if(!w||!h)return;
  const cw=Math.round(w*dpr),ch=Math.round(h*dpr);if(canvas.width!==cw||canvas.height!==ch){canvas.width=cw;canvas.height=ch;}
  c.setTransform(dpr*scale,0,0,dpr*scale,0,0);c.globalAlpha=1;c.filter='none';c.clearRect(0,0,W,H);
  const state=drawStage(c,W,H,ms,site.theme,mobile);
  seek.value=String(ms);time.textContent=(ms/1000).toFixed(2)+' / 8.00';
  screen.dataset.time=String(Math.round(ms));screen.dataset.phase=state.phase;
  document.querySelectorAll('[data-phase]').forEach(b=>b.setAttribute('aria-current',String(b.dataset.phase===state.phase)));
  play.textContent=playing?'暂停':ms===8000?'再看一次':'播放 8 秒';play.setAttribute('aria-pressed',String(playing));
}
function stop(){playing=false;cancelAnimationFrame(frame);paint();}
function tick(now){if(!playing)return;if(!document.hidden)ms=Math.min(8000,ms+Math.min(100,Math.max(0,now-last)));last=now;if(ms===8000)playing=false;paint();if(playing)frame=requestAnimationFrame(tick);}
function start(restart=false){if(restart||ms===8000)ms=0;playing=true;last=performance.now();cancelAnimationFrame(frame);frame=requestAnimationFrame(tick);paint();}
play.onclick=()=>playing?stop():start();document.querySelector('#replay').onclick=()=>start(true);
seek.oninput=()=>{ms=Number(seek.value);stop();};
document.querySelectorAll('[data-ms]').forEach(b=>b.onclick=()=>{ms=Number(b.dataset.ms);stop();});
document.querySelector('#view').onclick=e=>{const active=document.body.classList.toggle('close-up');e.currentTarget.setAttribute('aria-pressed',String(active));e.currentTarget.textContent=active?'放回电视':'放大画面';requestAnimationFrame(paint);};
const observer=new ResizeObserver(paint);observer.observe(screen);document.fonts.ready.then(paint);window.addEventListener('pagehide',()=>{cancelAnimationFrame(frame);observer.disconnect();});paint();

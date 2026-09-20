import { mountTelevision } from '../../src/ui/tv-shell.js';
import { siteMarkDataUrl } from '../../src/ui/site-marks.js';
import { site as originalSite } from '../../src/animations/sites/cth/index.js';
import { defineCanvasScene } from '../../src/animations/contract/canvas-scene.js';
import { inventory } from './inventory-refined.js';

const screen=document.querySelector('#screen'),canvas=document.querySelector('#sceneCanvas');
const cabinet=mountTelevision(screen,Array.from({length:7},(_,i)=>({n:i+1,name:i===0?'临床工具集':'频道 '+(i+1)})),()=>{});
cabinet.update({ch:1,power:true,paused:false,menu:false,pauseReason:null});
document.querySelector('#siteMark').src=siteMarkDataUrl('cth');
document.querySelectorAll('.tv-key,.tv-dial').forEach(button=>{button.disabled=true;button.title='请使用下方样稿审阅控件';});
document.querySelector('#tvPlayLabel').textContent='样稿';

const refined=defineCanvasScene({id:'cth.inventory-refined',channelId:'cth',label:'物资盘点',seconds:10.5,draw:inventory});
let original=false,playing=false,elapsedMs=7560,last=0,frameId=0;
function viewport(){return {width:screen.clientWidth,height:screen.clientHeight,dpr:Math.min(devicePixelRatio,2)};}
const options={canvas,viewport:viewport(),theme:originalSite.theme,index:1,count:6};
const instances=[refined.create(options),originalSite.scenes[1].create(options)];
function paint(){const instance=instances[Number(original)];instance.resize(viewport());instance.render({elapsedMs,deltaMs:0,playing});document.body.dataset.rendered='true';}
function tick(now){if(!playing)return;if(!document.hidden)elapsedMs=(elapsedMs+Math.min(100,Math.max(0,now-last)))%10500;last=now;paint();frameId=requestAnimationFrame(tick);}
document.querySelector('#compare').onclick=event=>{original=!original;event.currentTarget.setAttribute('aria-pressed',String(original));event.currentTarget.textContent=original?'看微调版':'看原版';document.querySelector('#edition').textContent=original?'原版 · 相同时间点':'原版微调 · v2';paint();};
document.querySelector('#play').onclick=event=>{playing=!playing;event.currentTarget.setAttribute('aria-pressed',String(playing));event.currentTarget.textContent=playing?'暂停预览':'播放预览';if(playing){last=performance.now();frameId=requestAnimationFrame(tick);}else cancelAnimationFrame(frameId);};
document.querySelector('#view').onclick=event=>{const active=document.body.classList.toggle('close-up');event.currentTarget.setAttribute('aria-pressed',String(active));event.currentTarget.textContent=active?'放回电视':'放大画面';requestAnimationFrame(paint);};
const observer=new ResizeObserver(paint);observer.observe(screen);
document.fonts.ready.then(paint);
window.addEventListener('pagehide',()=>{cancelAnimationFrame(frameId);observer.disconnect();instances.forEach(i=>i.dispose());});
paint();

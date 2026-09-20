import { mountTelevision } from '../../src/ui/tv-shell.js';
import { siteMarkDataUrl } from '../../src/ui/site-marks.js';
import { site } from '../../src/animations/sites/cth/index.js';
import { advanceProgramme } from '../../src/player/clock.js';

const screen=document.querySelector('#screen'),canvas=document.querySelector('#sceneCanvas'),scenes=site.scenes;
const state={scene:0,elapsed:0,last:performance.now(),paused:matchMedia('(prefers-reduced-motion: reduce)').matches,power:true};
if(state.paused)state.elapsed=scenes[0].posterTimeMs/1000;
const cabinet=mountTelevision(screen,Array.from({length:7},(_,i)=>({n:i+1,name:i===0?'临床工具集':'频道 '+(i+1)})),()=>{});
document.querySelector('#siteMark').src=siteMarkDataUrl('cth');
document.querySelector('.tv-dial').disabled=true;
document.querySelector('[data-action="menu"]').disabled=true;
const play=document.querySelector('#play'),seek=document.querySelector('#seek'),status=document.querySelector('#status'),phaseLabel=document.querySelector('#phase'),caption=document.querySelector('#chapterLabel');
const offsets=scenes.map((_,i)=>scenes.slice(0,i).reduce((sum,s)=>sum+s.durationMs,0));
const total=scenes.reduce((sum,s)=>sum+s.durationMs,0);seek.max=String(total-1);
const nav=document.querySelector('#chapters');
scenes.forEach((scene,i)=>{const b=document.createElement('button');b.textContent=(i+1)+' '+scene.label;b.dataset.chapter=String(i);nav.append(b);});
let instance=null,instanceIndex=-1,fade=null,frameId=0,lastPaint=0,cycles=0;
function viewport(){return {width:screen.clientWidth,height:screen.clientHeight,dpr:Math.min(devicePixelRatio,2)};}
const time=ms=>{const s=Math.floor(ms/1000);return Math.floor(s/60)+':'+String(s%60).padStart(2,'0');};
function paint(){
  if(instanceIndex!==state.scene){instance?.dispose();instance=scenes[state.scene].create({canvas,viewport:viewport(),theme:site.theme});instanceIndex=state.scene;}
  instance.resize(viewport());instance.render({elapsedMs:state.elapsed*1000,playing:!state.paused&&state.power&&!document.hidden});
  if(fade){
    const q=Math.min(1,(performance.now()-fade.start)/400),c=canvas.getContext('2d');
    c.save();c.setTransform(1,0,0,1,0,0);c.globalAlpha=1-q*q*(3-2*q);c.drawImage(fade.canvas,0,0,canvas.width,canvas.height);c.restore();if(q===1)fade=null;
  }
  if(!state.power){const c=canvas.getContext('2d');c.save();c.setTransform(1,0,0,1,0,0);c.fillStyle='#132017';c.fillRect(0,0,canvas.width,canvas.height);c.restore();}
  const chapter=scenes[state.scene],phase=chapter.presentation(state.elapsed*1000).phase;
  const hidden=!state.power||phase==='intro'||phase==='outro';caption.hidden=hidden;caption.textContent=chapter.label;
  document.querySelector('#siteIdentity').hidden=!state.power;
  cabinet.update({ch:1,power:state.power,paused:state.paused,menu:false,pauseReason:state.paused?'user':null});
  document.querySelector('.tv-dial').disabled=true;
  play.textContent=state.paused?'继续连播':'暂停';play.setAttribute('aria-pressed',String(!state.paused));
  const absolute=offsets[state.scene]+state.elapsed*1000;seek.value=String(absolute);status.textContent=time(absolute)+' / '+time(total);
  phaseLabel.textContent=(state.paused?'暂停 · ':'')+{intro:'开场',content:'本幕',hold:'停留',outro:'接续'}[phase];
  screen.dataset.scene=String(state.scene);screen.dataset.elapsed=String(Math.round(state.elapsed*1000));screen.dataset.phase=phase;screen.dataset.cycles=String(cycles);screen.dataset.paused=String(state.paused);
  for(const b of nav.children)b.setAttribute('aria-current',String(Number(b.dataset.chapter)===state.scene));
}
function snapshot(){const c=document.createElement('canvas');c.width=canvas.width;c.height=canvas.height;c.getContext('2d').drawImage(canvas,0,0);return c;}
function jump(index){fade={canvas:snapshot(),start:performance.now()};state.scene=(index+scenes.length)%scenes.length;state.elapsed=state.paused?scenes[state.scene].posterTimeMs/1000:0;state.last=performance.now();paint();}
function toggle(){state.paused=!state.paused;state.last=performance.now();paint();}
play.onclick=toggle;document.querySelector('[data-action="play"]').onclick=toggle;
document.querySelector('[data-action="power"]').onclick=()=>{state.power=!state.power;state.last=performance.now();fade=null;paint();};
document.querySelector('#previous').onclick=()=>jump(state.scene-1);document.querySelector('#next').onclick=()=>jump(state.scene+1);
document.querySelector('#restart').onclick=()=>{state.paused=false;state.power=true;jump(0);};
document.querySelector('#bridge').onclick=()=>{fade=null;state.elapsed=(scenes[state.scene].outroStartMs-600)/1000;state.paused=false;state.power=true;state.last=performance.now();paint();};
nav.onclick=e=>{const b=e.target.closest('[data-chapter]');if(b)jump(Number(b.dataset.chapter));};
seek.oninput=()=>{const target=Math.min(total-1,Number(seek.value));let index=scenes.length-1;while(index>0&&offsets[index]>target)index--;state.scene=index;state.elapsed=(target-offsets[index])/1000;state.paused=true;state.last=performance.now();fade=null;paint();};
document.addEventListener('keydown',e=>{if(e.target.matches('input,button,a'))return;if(e.key===' '){e.preventDefault();toggle();}if(e.key==='ArrowDown'){e.preventDefault();jump(state.scene+1);}if(e.key==='ArrowUp'){e.preventDefault();jump(state.scene-1);}});
const observer=new ResizeObserver(paint);observer.observe(screen);document.fonts.ready.then(paint);
function frame(now){
  const before=state.scene,active=state.power&&!state.paused&&!document.hidden;
  const changed=advanceProgramme(state,now,scenes,{speed:1,autoplay:true},active);
  if(changed&&before===scenes.length-1&&state.scene===0)cycles++;
  if(changed||fade||(active&&now-lastPaint>16)){paint();lastPaint=now;}
  frameId=requestAnimationFrame(frame);
}
window.addEventListener('pagehide',()=>{cancelAnimationFrame(frameId);observer.disconnect();instance?.dispose();});
paint();frameId=requestAnimationFrame(frame);

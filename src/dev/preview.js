import { SITES } from "../animations/registry.js";
const site=SITES.find(s=>s.website.id===document.body.dataset.site);
if(!site)throw Error('Unknown website module');
const canvas=document.querySelector('canvas'),select=document.querySelector('select'),seek=document.querySelector('input[type=range]'),play=document.querySelector('#play'),status=document.querySelector('#status');
let instance=null,controller=null,scene=site.scenes[0],elapsedMs=0,playing=!matchMedia('(prefers-reduced-motion: reduce)').matches,last=performance.now();
select.innerHTML=site.scenes.map((s,i)=>`<option value="${i}">${s.label}</option>`).join('');
function viewport(){const r=canvas.getBoundingClientRect();return {width:Math.round(r.width),height:Math.round(r.height),dpr:Math.min(2,devicePixelRatio||1)}}
function paint(){instance.resize(viewport());instance.render({elapsedMs,deltaMs:0,playing,autoplay:false});seek.value=String(elapsedMs/scene.durationMs*1000);status.textContent=(elapsedMs/1000).toFixed(1)+' / '+(scene.durationMs/1000)+' 秒 · '+scene.id;play.textContent=playing?'暂停':'播放';}
function mount(index){controller?.abort();instance?.dispose();scene=site.scenes[index];elapsedMs=playing?0:scene.posterTimeMs;controller=new AbortController();instance=scene.create({canvas,viewport:viewport(),theme:site.theme,index,count:site.scenes.length,signal:controller.signal});last=performance.now();paint();}
select.onchange=()=>mount(Number(select.value));play.onclick=()=>{playing=!playing;last=performance.now();paint()};seek.oninput=()=>{playing=false;elapsedMs=Number(seek.value)/1000*scene.durationMs;paint()};document.querySelector('#reset').onclick=()=>{elapsedMs=0;last=performance.now();paint()};
function tick(now){if(playing&&!document.hidden){elapsedMs=(elapsedMs+Math.min(100,Math.max(0,now-last)))%scene.durationMs;paint()}last=now;requestAnimationFrame(tick)}
addEventListener('resize',paint);addEventListener('pagehide',()=>{controller?.abort();instance?.dispose()});document.addEventListener('visibilitychange',()=>last=performance.now());mount(0);requestAnimationFrame(tick);

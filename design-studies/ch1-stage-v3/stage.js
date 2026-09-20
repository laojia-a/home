import { D } from '../../src/animations/shared/draw.js';
import { tube } from './tube.js';

const smooth=t=>{const q=Math.max(0,Math.min(1,t));return q*q*q*(q*(q*6-15)+10);};
const mix=(a,b,t)=>a+(b-a)*t;
function stageState(ms,mobile=false){
  const t=Math.max(0,Math.min(8,ms/1000)),push=smooth((t-2)/1.55),travel=smooth((t-4)/2);
  const gap=mobile?76:116;
  return {t,push,travel,gap,cameraX:mix(0,mix(-2*gap,-gap,travel),push),distance:mix(850,mobile?530:470,push),focus:travel<.5?0:1,phase:t<2?'wide':t<4?'push':t<6?'travel':'hold'};
}

function drawStage(c,W,H,ms,th,mobile){
  const state=stageState(ms,mobile),{t,push,travel,gap,cameraX,distance,focus}=state;
  const anchorX=mix(W*.5,W*(mobile?.34:.26),push),anchorY=mix(H*.50,H*.49,push);
  const project=(x,y,z=0)=>{const scale=780/(distance+z);return {x:anchorX+(x-cameraX)*scale,y:anchorY+y*scale,scale};};
  D.backdrop(c,W,H,th,0);
  // A broad, quiet light field keeps the selected area distinct without adding stage props.
  const light=c.createRadialGradient(anchorX,anchorY-40,20,anchorX,anchorY-40,W*.64);
  light.addColorStop(0,'#fffdf129');light.addColorStop(1,'#fffdf100');c.fillStyle=light;c.fillRect(0,0,W,H);
  c.save();c.globalAlpha=1-push;
  D.heading(c,W,H,'物资盘点',t<2?'逐项查看，按名称识别物资':'',th,mobile);c.restore();
  const positions=Array.from({length:5},(_,i)=>({x:(i-2)*gap,z:(i-2)*24,index:i}));
  const names=['采血管','离心管','试剂盒','耗材包','冻存管'];
  const height=mobile?195:180,top=-105;
  const left=-2.52*gap,right=2.52*gap;
  function strip(y,z,h,color,stroke){
    const a=project(left,y,z-45),b=project(right,y,z+45),d=project(right,y+h,z+45),e=project(left,y+h,z-45);
    c.beginPath();c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);c.lineTo(d.x,d.y);c.lineTo(e.x,e.y);c.closePath();c.fillStyle=color;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=1;c.stroke();}
  }
  const ground=project(0,top+height+45,110);
  D.shadow(c,ground.x,ground.y,gap*3*ground.scale,.10);
  strip(top+height*.64,65,21,'#c7cbae','#a1ae8b66');
  // Back to front painting plus perspective projection creates real occlusion between layers.
  for(const item of [...positions].reverse()){
    const {index:i,x,z}=item,pt=project(x,top,z);
    const emphasis=push*(1-Math.min(1,Math.abs(i-travel)));
    c.save();c.globalAlpha=mix(1,.45+emphasis*.55,push);
    c.translate(pt.x,pt.y);c.scale(pt.scale,pt.scale);
    // All vessels are already settled. Only the liquid retains a small damped response after travel.
    const settle=t<6?3:Math.max(0,(t-6))*1.5;
    tube(c,0,0,mobile?48:54,height,.55,'#87a586',1,settle);
    c.restore();
  }
  const faceY=top+height-20;
  strip(faceY-4,-16,6,'#dde2be');
  strip(faceY,-24,35,D.grad(c,0,project(0,faceY,-24).y,0,project(0,faceY+35,-24).y,[[0,'#d1d8ae'],[.5,'#b4bf95'],[1,'#9aaa80']]),'#879976');
  strip(faceY+33,-24,2,'#82956c55');
  for(const item of positions){const p=project(item.x,faceY+7,item.z-24);D.ellipse(c,p.x,p.y,12*p.scale,2.5*p.scale,'#596e493d');}
  // Wide labels disappear together as the camera approaches. Reading comes after motion.
  const wideAlpha=1-smooth((t-1.9)/.55);
  if(wideAlpha>0){c.save();c.globalAlpha=wideAlpha;for(const item of positions){const p=project(item.x,top+height+61,item.z);D.text(c,names[item.index],p.x,p.y,mobile?14:13,th.ink,400,'center');}c.restore();}
  const first=smooth((t-3.25)/.4)*(1-smooth((t-4)/.28));
  const second=smooth((t-6.05)/.5);
  const captionAlpha=Math.max(first,second);
  if(captionAlpha>0){
    const selected=second>0?1:0;
    const x=anchorX,y=H*.89;
    c.save();c.globalAlpha=captionAlpha;
    D.line(c,x-20,y-27,x+20,y-27,'#6d845d88',1.5);
    D.text(c,names[selected],x,y,mobile?22:25,th.ink,500,'center');
    c.restore();
  }
  return state;
}
export { stageState, drawStage };

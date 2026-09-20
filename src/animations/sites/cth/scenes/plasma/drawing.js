import { D } from '../../../../shared/draw.js';
import { processState } from './process.js';
const {rr,ellipse,line,text,grad,path}=D;
const GOLD='#d5b663',RED='#9d4c48';

function glassPath(c,x,y,w,h,round=18){c.beginPath();c.roundRect(x-w/2,y,w,h,[3,3,round,round]);}
function glassBack(c,x,y,w,h,round){
  glassPath(c,x,y,w,h,round);c.fillStyle=grad(c,x-w/2,0,x+w/2,0,[[0,'#a8b9a859'],[.18,'#fffdf3a6'],[.5,'#f6fae930'],[.85,'#ced8c333'],[1,'#869e846b']]);c.fill();
}
function glassFront(c,x,y,w,h,round){
  glassPath(c,x,y,w,h,round);c.strokeStyle='#859b8094';c.lineWidth=1.4;c.stroke();
  line(c,x-w/2+5,y+8,x-w/2+5,y+h-22,'#fffff2c9',2.6);
  line(c,x+w/2-4,y+9,x+w/2-4,y+h-25,'#dce7d187',1);
  ellipse(c,x,y+1,w/2,3,null,'#8e9f8299',1);
}
function closure(c,x,y,w,color,turn=0){
  rr(c,x-w/2,y,w,23,5,grad(c,x-w/2,0,x+w/2,0,[[0,color],[.45,'#dbe2c2'],[1,color]]),'#82936b',1);
  for(let i=0;i<12;i++){const px=x-w/2+4+((i*4+turn*8)%(w-8));line(c,px,y+5,px,y+17,'#697f6655',.8);}
  ellipse(c,x,y+3,w/2-2,3,'#e2e7ca66');
}
function drawCollectionTube(c,s){
  const x=300,y=238,w=57,h=222;
  D.shadow(c,x,479,50,.13);
  rr(c,x-41,447,82,24,5,'#c4ceb0','#95a582',1);
  glassBack(c,x,y,w,h,24);
  c.save();glassPath(c,x,y+4,w-3,h-7,23);c.clip();
  // Lower cells remain in place throughout both aspirations.
  rr(c,x-w/2,390,w,67,0,grad(c,x-w/2,0,x+w/2,0,[[0,'#844543'],[.48,'#af6255'],[1,'#914845']])) ;
  rr(c,x-w/2,386,w,4,0,'#ddd6c8');
  if(s.source>0){
    rr(c,x-w/2,s.surface,w,386-s.surface,0,grad(c,x-w/2,0,x+w/2,0,[[0,'#c5a554b0'],[.5,'#ead58d88'],[1,'#c7a451bc']]));
    c.save();c.globalAlpha=Math.min(1,s.source*10);ellipse(c,x,s.surface,w/2-2,3,'#eddca385','#b59b5577',.8);c.restore();
  }c.restore();
  glassFront(c,x,y,w,h,24);
  rr(c,x-41,459,82,15,4,grad(c,0,459,0,474,[[0,'#d5ddbd'],[1,'#adbf96']]),'#92a57d',1);
  // The collection tube has a stopper and rounded bottom, not a conical centrifuge-tube body.
  const q=s.uncap,cx=x-80*q,cy=220+(447-220)*q-120*Math.sin(q*Math.PI);
  closure(c,cx,cy,69,'#a9ae91');
  if(s.t<7){text(c,'抗凝采血管',x,498,17,'#4b5944',500,'center');}
  if(s.t>=4.6&&s.t<7.4){
    line(c,333,342,395,327,'#a18f5b',1);text(c,'上清血浆',408,327,19,'#8f793e',500);
    line(c,333,417,385,428,'#a47366',1);text(c,'细胞层',399,428,14,'#8d6359');
  }
}
function cryovial(c,x,amount,label,color,seal,dim=false){
  const y=350,w=56,h=110,level=453-amount*43;
  c.save();if(dim)c.globalAlpha=.68;
  D.shadow(c,x,470,43,.12);
  // Short, wide screw-neck body and a flat self-standing base distinguish cryovials.
  rr(c,x-29,443,58,20,4,'#c1ccb0','#90a281',1);
  glassBack(c,x,y,w,h,7);
  c.save();glassPath(c,x,y+3,w-3,h-6,6);c.clip();
  if(amount>0){rr(c,x-w/2,level,w,460-level,0,grad(c,x-w/2,0,x+w/2,0,[[0,'#cfad57c0'],[.5,'#e8cf7b99'],[1,'#c4a250b0']]));ellipse(c,x,level,w/2-2,2.8,'#ead58c99');}
  c.restore();glassFront(c,x,y,w,h,7);
  for(let i=0;i<3;i++)line(c,x-27,y+5+i*5,x+27,y+2+i*5,'#839a7775',1);
  rr(c,x-25,y+34,50,31,3,'#faf9e9d9');text(c,label,x,y+50,20,'#3f5946',600,'center');
  const capX=x+65*(1-seal),capY=445+(331-445)*seal-110*Math.sin(seal*Math.PI);
  closure(c,capX,capY,66,color,seal);
  text(c,label+'冻存管',x,494,16,'#4b5944',500,'center');c.restore();
}
function pipette(c,s){
  const {x,y,alpha,plunger}=s.pipette;if(alpha<=0)return;
  c.save();c.globalAlpha=alpha;c.translate(x,y);
  // Plunger, finger rest, tapered handle and a distinct transparent disposable tip.
  rr(c,-5,-225+plunger*7,10,28,3,'#768873');
  rr(c,-15,-235+plunger*7,30,13,5,'#8da18a','#6b8068',1);
  path(c,'M-17 -207 Q-23 -203 -21 -188 L-14 -102 Q-12 -86 -7 -76 L7 -76 Q12 -86 14 -102 L21 -188 Q23 -203 17 -207Z','#a6af9b',grad(c,-22,0,22,0,[[0,'#d0d6c4'],[.28,'#fffdf1'],[.8,'#e5e9d8'],[1,'#b8c6ad']]),1.2);
  rr(c,13,-196,28,9,4,'#93a58b');
  rr(c,-11,-183,22,59,6,'#6e856d');
  line(c,-5,-174,-5,-136,'#c3d1b57a',2);
  rr(c,-7,-88,14,29,3,'#a1b195','#7f9377',.8);
  const tipPath=()=>{c.beginPath();c.moveTo(-10,-63);c.lineTo(10,-63);c.lineTo(2,-1);c.quadraticCurveTo(0,2,-2,-1);c.closePath();};
  tipPath();c.fillStyle='#f5f6df70';c.fill();
  c.save();tipPath();c.clip();
  if(s.tip>0){c.fillStyle='#d7b352c4';c.fillRect(-10,-54*s.tip,20,57*s.tip);}
  c.restore();tipPath();c.strokeStyle='#819978aa';c.lineWidth=1;c.stroke();line(c,-7,-59,-1,-8,'#ffffedb3',1.4);
  c.restore();
}
function centrifuge(c,t){
  const x=500,y=348;
  D.shadow(c,x,494,235,.13);
  rr(c,x-201,y-51,402,174,38,grad(c,0,y-51,0,y+123,[[0,'#e8e6cf'],[.5,'#d6dbc1'],[1,'#b5c09f']]),'#849876',1.5);
  rr(c,x-146,y+110,42,19,5,'#74866d');rr(c,x+104,y+110,42,19,5,'#74866d');
  ellipse(c,x,y-35,196,88,'#eef0d9','#8d9e7e',1.5);
  ellipse(c,x,y-42,150,61,'#b0bfa3','#879a79',1.4);
  // Rotor schematic remains under a visibly closed cover; opposing samples are balanced.
  c.save();c.translate(x,y-44);c.scale(1,.40);c.beginPath();c.arc(0,0,139,0,Math.PI*2);c.clip();
  c.rotate(t<3.3?t*t*4:43.56+(t-3.3)*2);
  for(let i=0;i<6;i++){const a=i*Math.PI/3;line(c,0,0,Math.cos(a)*99,Math.sin(a)*99,'#829773',14);ellipse(c,Math.cos(a)*106,Math.sin(a)*106,15,15,i%3===0?'#985b52':'#cbd5b9','#6f8466',2);}
  ellipse(c,0,0,24,24,'#788f6e','#637d59',2);c.restore();
  ellipse(c,x,y-42,151,62,'#f3f4df62','#889d7d',2);
  c.save();c.globalAlpha=.35;ellipse(c,x-50,y-62,77,18,'#ffffef');c.restore();
  rr(c,x-47,y+51,94,28,6,'#4b614b');text(c,'离心',x,y+66,16,'#e0e9c9',500,'center');
  line(c,x-157,y+25,x+157,y+25,'#faffea77',1);
  text(c,'离心分层',x,177,31,'#384d38',500,'center');
  text(c,'采血管置于闭合的离心机内',x,213,16,'#7c876d',400,'center');
}
const captions={spin:'离心分层',layers:'上清血浆与细胞层分离',draw:'吸取上层血浆',test:'第一份 · 待测',backup:'第二份 · 备份',finish:'待测与备份，分别保存'};
function drawProcess(c,W,H,ms,theme,mobile){
  const s=processState(ms);D.backdrop(c,W,H,theme,0);
  const zoom=mobile?1.45+(s.zoom-1)*3:s.zoom;
  const scale=W/1000*zoom;
  const originX=W*.5-s.focus*scale,originY=H*.54-320*scale;
  c.save();c.translate(originX,originY);c.scale(scale,scale);
  if(s.machineAlpha>0){c.save();c.globalAlpha=s.machineAlpha;centrifuge(c,s.t);c.restore();}
  if(s.sceneAlpha>0){c.save();c.globalAlpha=s.sceneAlpha;
    drawCollectionTube(c,s);
    cryovial(c,630,s.test,'待测','#94ad9e',s.seal,s.t<10.5);
    cryovial(c,790,s.backup,'备份','#a7b6bd',s.seal,s.t<19.5);
    // Dispensing is visible below the tip and synchronised with receiver level rise.
    if((s.t>13&&s.t<14.8)||(s.t>21.5&&s.t<23.3)){
      const amount=s.t<15?s.test:s.backup;line(c,s.pipette.x,s.pipette.y+1,s.pipette.x,453-amount*43,'#d6b654a3',1.6);
    }
    pipette(c,s);c.restore();
  }
  c.restore();
  if(s.t>=4){text(c,'血浆分装',W*.72,H*.115,mobile?23:27,theme.ink,500,'center');text(c,captions[s.stage],W*.72,H*.175,mobile?14:16,theme.muted,400,'center');}
  return s;
}
export { drawProcess };

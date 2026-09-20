import { D } from "../../src/animations/shared/draw.js";
const {ease,phase,spring,alpha,text,rr,line,ellipse,grad,path,shadow,heading,annotation}=D;
 function tube(c,x,y,w,h,fillLevel,color,k,settle){
  const tw=w*.44,base=y+h,top=y-h*.03;
  const glass=grad(c,x-tw,0,x+tw,0,[[0,'#96ad914a'],[.10,'#ffffffd4'],[.25,'#fbfff02b'],[.72,'#c9d7bc32'],[.94,'#a8ba916b'],[1,'#849c8166']]);
  c.save();c.beginPath();c.roundRect(x-tw,top,tw*2,h,[0,0,tw,tw]);c.fillStyle=glass;c.fill();c.strokeStyle='#96a78b9c';c.lineWidth=1.2;c.stroke();c.clip();
  const level=base-15-(h-32)*fillLevel*k;
  const sway=Math.sin(settle*16)*Math.exp(-settle*5)*6;
  c.beginPath();c.moveTo(x-tw-1,level+sway);c.quadraticCurveTo(x,level-5,x+tw+1,level-sway);c.lineTo(x+tw+1,base+4);c.lineTo(x-tw-1,base+4);c.closePath();c.fillStyle=grad(c,x-tw,0,x+tw,0,[[0,alpha(color,.58)],[.5,alpha(color,.25)],[1,alpha(color,.55)]]);c.fill();
  c.beginPath();c.moveTo(x-tw,level+sway);c.quadraticCurveTo(x,level-5,x+tw,level-sway);c.strokeStyle=alpha(color,.58);c.lineWidth=1.6;c.stroke();
  ellipse(c,x,level,tw-1,2.2,alpha(color,.16),alpha(color,.35),.65);
  for(let i=0;i<6;i++)line(c,x+tw-9,top+23+i*20,x+tw-3,top+23+i*20,'#6c806151',.8);
  line(c,x-tw+7,top+12,x-tw+7,base-25,'#ffffffe6',2.4);
  line(c,x+tw-4,top+14,x+tw-4,base-28,'#eaf2df85',.9);
  c.beginPath();c.moveTo(x-tw+3,base-23);c.quadraticCurveTo(x,base+2-h*.03,x+tw-3,base-23);c.strokeStyle='#eaf4e294';c.lineWidth=1;c.stroke();c.restore();
  rr(c,x-tw-3,top-13,tw*2+6,18,4,grad(c,x-tw,0,x+tw,0,[[0,'#b2bd94'],[.45,'#d9ddbb'],[1,'#899a71']]),'#899b6c',.8);
  for(let i=0;i<8;i++)line(c,x-tw+1+i*(tw*2-2)/8,top-9,x-tw+1+i*(tw*2-2)/8,top+1,'#f6f8df59',.8);
  ellipse(c,x,top-11,tw+1.7,2.2,'#dce3bf96','#8ea27545',.5);
  line(c,x-tw+1,top+4,x+tw-1,top+4,'#74885b55',.9);
 }
 function inventory(c,W,H,p,t,th,m){
  heading(c,W,H,'物资盘点','逐项出现，数量与标识一一对应',th,m);
  const vals=[.82,.64,.47,.91,.16],names=['采血管','离心管','试剂盒','耗材包','冻存管'];
  const start=W*(m?.13:.25),span=W*(m?.74:.50),gap=span/4,ty=m?H*.35:H*.35,h=m?200:166;
  shadow(c,W/2,ty+h+32,span*.57,.13);
  // Back rail is drawn first. Tubes settle into front apertures afterwards.
  rr(c,start-gap*.45,ty+h*.63,span+gap*.9,23,4,'#c7cbae','#a1ae8b',1);
  for(let i=0;i<5;i++){const down=spring(p,.055+i*.045,.22+i*.045),settle=Math.max(0,p-(.22+i*.045))*10;
   tube(c,start+i*gap,ty-(1-down)*170,gap*(m?.53:.42),h,vals[i],i===4?'#bd886b':'#87a586',ease(phase(p,.11+i*.035,.36+i*.035)),settle);
  }
  const left=start-gap*.45,right=start+span+gap*.45,front=ty+h-21;
  path(c,`M${left+4} ${front-4} L${right+3} ${front-4} L${right} ${front+2} L${left} ${front+2}Z`,null,'#e0e4c4');
  path(c,`M${right-1} ${front} L${right+4} ${front-4} L${right+4} ${front+33} L${right-1} ${front+39}Z`,null,'#94a77c');
  rr(c,start-gap*.45,ty+h-21,span+gap*.9,40,5,grad(c,0,ty+h-21,0,ty+h+19,[[0,'#d9ddbb'],[.45,'#b4bf95'],[1,'#a4b18b']]),'#879976',1);
  for(let i=0;i<5;i++)ellipse(c,start+i*gap,ty+h-12,gap*.19,3.2,'#536c454b');
  line(c,start-gap*.42,ty+h-16,start+span+gap*.41,ty+h-16,'#edf0d1b0',1.5);
  for(let i=0;i<5;i++){let q=ease(phase(p,.25+i*.04,.42+i*.04));c.save();c.globalAlpha=q;text(c,names[i],start+i*gap,ty+h+49,m?16:13,th.ink,400,'center');text(c,Math.round(vals[i]*100*q)+'%',start+i*gap,ty+h+82,m?22:24,i===4?'#a46c52':th.ink,500,'center',true);c.restore();}
  line(c,left+6,front+38,right-5,front+38,'#778d5d4d',1);
  const sweep=phase(p,.48,.75),sx=start-gap*.4+(span+gap*.8)*sweep;
  if(sweep>0&&sweep<1){line(c,sx,ty-35,sx,ty+h+21,'#718f6a50',2);ellipse(c,sx,ty-38,3,3,'#94aa72')}
  annotation(c,'示例库存比例 · 不代表实际库存或采购状态',W/2,H-(m?118:98),th,m?15:12);
 }

export { inventory };

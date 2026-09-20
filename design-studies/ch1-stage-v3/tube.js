import { D } from "../../src/animations/shared/draw.js";
const {grad,alpha,line,ellipse,rr}=D;
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

export { tube };

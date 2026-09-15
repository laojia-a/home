import { D } from "../../shared/draw.js";
 const {clamp,ease,smooth,phase,spring,alpha,text,rr,line,ellipse,group,grad,path,trace,page,shadow,paperLines,pin,heading,annotation,cross}=D;
import { previewFrame } from "../../shared/preview-frame.js";
 function planning(c,W,H,p,t,th,m){
  previewFrame(c,W,H,th,m,'BE Solo · 项目预告','把节点放回清楚的位置');
  const bw=m?428:650,bh=m?330:270,bx=(W-bw)/2,by=m?H*.28:H*.31;
  rr(c,bx+5,by+9,bw,bh,4,'#71839720');rr(c,bx,by,bw,bh,4,'#f3f2e8','#a9b3b955',1);
  const cw=bw/3;
  ['项目','节点','待办'].forEach((s,i)=>{if(i)line(c,bx+i*cw,by+42,bx+i*cw,by+bh-20,'#a1aebb40',1);text(c,s,bx+i*cw+cw/2,by+25,m?19:16,th.ink,500,'center');});
  for(let i=0;i<5;i++){const col=i%3,row=Math.floor(i/3),k=spring(p,.03+i*.045,.22+i*.045);const destX=bx+cw*col+18,destY=by+62+row*(m?116:93),h=m?89:74;
   group(c,destX,destY-(1-k)*90,(i%2?1:-1)*.016,()=>{const color=['#dde4d6','#e6dec6','#dfe5ed'][col];c.save();c.shadowColor='#35434d1a';c.shadowBlur=5;c.shadowOffsetY=4;rr(c,0,0,cw-36,h,1,color);c.restore();pin(c,(cw-36)/2,6,'#7f91a0');paperLines(c,12,31,cw-58,2,17,'#637f8b55');});}
  const q=smooth(phase(p,.48,.69));const xx=bx+cw*.5+cw*q,yy=by+bh-19;line(c,bx+cw*.5,yy,bx+cw*2.5,yy,'#7f96a13b',2);ellipse(c,xx,yy,4,4,th.accent);
  annotation(c,'仅演示节点排布，不读取项目与待办数据',W/2,H-(m?118:95),th,m?15:12);
 }

export { planning };

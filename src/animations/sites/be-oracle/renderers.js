import { D } from "../../shared/draw.js";
 const {clamp,ease,smooth,phase,spring,alpha,text,rr,line,ellipse,group,grad,path,trace,page,shadow,paperLines,pin,heading,annotation,cross}=D;
import { previewFrame } from "../../shared/preview-frame.js";
 function evidence(c,W,H,p,t,th,m){
  previewFrame(c,W,H,th,m,'BE Oracle · 证据预告','从问题出发，回到出处');
  const xs=m?[W*.20,W*.50,W*.79]:[W*.28,W*.49,W*.71],ys=m?[H*.35,H*.49,H*.36]:[H*.45,H*.57,H*.44];
  for(let i=0;i<2;i++){const k=ease(phase(p,.18+i*.16,.37+i*.16));trace(c,[[xs[i],ys[i]],[xs[i]+(xs[i+1]-xs[i])*.48,ys[i]],[xs[i]+(xs[i+1]-xs[i])*.52,ys[i+1]],[xs[i+1],ys[i+1]]],k,'#7c98776a',1.4)}
  ['问题','资料','出处'].forEach((s,i)=>{const a=ease(phase(p,.045+i*.08,.19+i*.08));c.save();c.globalAlpha=a;group(c,xs[i],ys[i]+(1-a)*28,(i-1)*.025,()=>{const w=m?115:137,h=m?154:155;page(c,0,0,w,h,{fill:i===2?'#f9f4dc':'#f4f5e9',shadow:.10});text(c,s,0,-h/2+30,m?21:20,th.ink,500,'center');paperLines(c,-w/2+16,-h/2+65,w-28,3,20,'#7d927b4f');pin(c,0,-h/2+5,'#92a47b')});c.restore()});
  const k=smooth(phase(p,.39,.7)),lx=xs[1]+(xs[2]-xs[1])*k+20,ly=ys[1]+(ys[2]-ys[1])*k+39+Math.sin(k*Math.PI)*27;
  if(p>.34){const a=ease(phase(p,.34,.43));c.save();c.globalAlpha=a;group(c,lx,ly,-.44,()=>{
    shadow(c,10,14,52,.13);ellipse(c,0,0,42,42,'#daeac464','#7a8c72',4);ellipse(c,0,0,37,37,null,'#e4edd380',1.5);
    path(c,'M-20 -25 Q-4 -36 13 -29','#ffffffe0',null,3);rr(c,-7,39,14,71,6,grad(c,-7,0,7,0,[[0,'#566e54'],[.5,'#8a9b6a'],[1,'#56674a']]),'#557351',1);
   });c.restore();}
  annotation(c,'检索路径示意，不生成虚构来源或结论',W/2,H-(m?118:95),th,m?15:12);
 }

export { evidence };

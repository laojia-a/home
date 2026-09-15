import { D } from "../../shared/draw.js";
 const {clamp,ease,smooth,phase,spring,alpha,text,rr,line,ellipse,group,grad,path,trace,page,shadow,paperLines,pin,heading,annotation,cross}=D;
import { previewFrame } from "../../shared/preview-frame.js";
 function reading(c,W,H,p,t,th,m){
  previewFrame(c,W,H,th,m,'2026 · 学习资料','让每一份资料都有去处');
  const cx=W/2,cy=m?H*.49:H*.54,bw=m?369:430,bh=m?238:214;
  shadow(c,cx,cy+bh*.52,bw*.54,.12);
  group(c,cx,cy,0,()=>{
   path(c,`M${-bw/2-5} ${-bh/2+13} Q${-bw/4} ${-bh/2-5} 0 ${-bh/2+18} Q${bw/4} ${-bh/2-5} ${bw/2+5} ${-bh/2+13} L${bw/2+5} ${bh/2+7} Q${bw/4} ${bh/2-5} 0 ${bh/2+12} Q${-bw/4} ${bh/2-5} ${-bw/2-5} ${bh/2+7}Z`,'#8e845b','#b8ad7b',1.2);
   for(let i=3;i>=0;i--){let off=i*3;path(c,`M${-bw/2} ${-bh/2+off} Q${-bw/4} ${-bh/2-14+off} 0 ${-bh/2+14+off} Q${bw/4} ${-bh/2-14+off} ${bw/2} ${-bh/2+off} L${bw/2} ${bh/2+off} Q${bw/4} ${bh/2-11+off} 0 ${bh/2+11+off} Q${-bw/4} ${bh/2-11+off} ${-bw/2} ${bh/2+off}Z`,'#c5bd9549','#faf2d9',1)}
   line(c,0,-bh/2+17,0,bh/2+10,'#afa2725f',1.2);for(let side of [-1,1]){text(c,side<0?'学习目录':'阅读笔记',side*bw*.25,-bh*.26,17,th.ink,500,'center');paperLines(c,side<0?-bw/2+24:21,-bh*.08,bw*.34,5,22,'#b1a5746a')}
   const q=phase(p,.16,.73),theta=q*Math.PI,curl=Math.sin(theta);if(q>0&&q<1){
    const endX=bw*.49*Math.cos(theta),controlX=endX+curl*70;
    path(c,`M0 ${-bh/2+15} Q${controlX*.45} ${-bh/2-25-curl*64} ${endX} ${-bh/2-curl*29} L${endX} ${bh/2-curl*19} Q${controlX*.48} ${bh/2-curl*46} 0 ${bh/2+9}Z`,'#c6bb9457',grad(c,Math.min(0,endX)-1,0,Math.max(0,endX)+1,0,[[0,'#e5d9b3'],[.5,'#fff8e4'],[1,'#ece2c8']]),1);
    c.save();c.globalAlpha=curl*.18;line(c,3,-bh/2+17,3,bh/2+9,'#625335',7);c.restore();
   }
   // Bookmarks lag the page turn rather than floating as a single object.
   ['GCP','BE','Ⅰ期'].forEach((s,i)=>{const lag=Math.sin(t*1.2-i*.4)*Math.exp(-Math.abs(q-.9)*3)*2;group(c,bw*.20+i*37,-bh/2-12+lag,0,()=>{rr(c,-15,-16,30,43,3,['#9da66e','#c19467','#899e98'][i]);text(c,s,0,0,i===0?9:11,'#fbf6e8',500,'center',true)})});
  });
  annotation(c,'资料预告 · 未接入时可从菜单填写真实地址',W/2,H-(m?118:95),th,m?15:12);
 }

export { reading };

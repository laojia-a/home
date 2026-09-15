import { D } from "../../shared/draw.js";
 const {clamp,ease,smooth,phase,spring,alpha,text,rr,line,ellipse,group,grad,path,trace,page,shadow,paperLines,pin,heading,annotation,cross}=D;
import { previewFrame } from "../../shared/preview-frame.js";
 function documents(c,W,H,p,t,th,m){
  previewFrame(c,W,H,th,m,'EZCTD · 文档预告','文件夹、页序与检查标记');
  const cx=W/2,cy=m?H*.49:H*.53,w=m?245:245,h=m?300:245;
  shadow(c,cx,cy+h*.55,w*.63,.12);
  const bx=cx-w*.62,by=cy-70;
  path(c,`M${bx} ${by} L${bx+93} ${by} L${bx+112} ${by+18} L${bx+w*1.27} ${by+18} L${bx+w*1.27} ${by+h*.65} L${bx} ${by+h*.65}Z`,'#9b79994c','#c1a7bd',1);
  for(let i=0;i<3;i++){const k=spring(p,.04+i*.045,.26+i*.045);group(c,cx+(i-1)*14,cy-(1-k)*180-i*9,-.04+i*.035,()=>{
    page(c,0,0,w*.76,h,{fill:i===2?'#fffaf4':'#eee7de',shadow:.1});text(c,'M 05 / '+String(i+1).padStart(2,'0'),-w*.30,-h/2+26,11,th.muted,400,'left',true);paperLines(c,-w*.29,-h/2+62,w*.57,6,23,'#a894a259');
    if(i===2){const q=phase(p,.34,.67),sy=-h/2+30+q*(h-53);if(q>0&&q<1){rr(c,-w*.33,sy-3,w*.66,7,0,'#a390b133');line(c,-w*.33,sy,w*.33,sy,'#9a82aa99',1.2);}for(let j=0;j<3;j++){if(p>.57+j*.06){group(c,w*.21,-h/2+79+j*46,0,()=>{ellipse(c,0,0,8,8,'#dce7cb');trace(c,[[-4,0],[-1,3],[5,-4]],ease(phase(p,.57+j*.06,.65+j*.06)),'#789064',1.4)})}}}
   })}
  const frontY=cy+h*.16;path(c,`M${bx-8} ${frontY} Q${bx-10} ${frontY-10} ${bx+4} ${frontY-11} L${bx+w*1.3} ${frontY-11} L${bx+w*1.26} ${cy+h*.56} L${bx+7} ${cy+h*.56}Z`,'#947b927a',grad(c,0,frontY,0,cy+h*.56,[[0,'#d8c2d2'],[1,'#bca7bd']]),1);text(c,'PDF  /  工作资料',cx,frontY+41,m?18:15,'#6b536d',500,'center');
  annotation(c,'概念预告，不展示实际文件检查结果',W/2,H-(m?120:95),th,m?15:12);
 }

export { documents };

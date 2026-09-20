import { D } from '../../src/animations/shared/draw.js';
import { term } from './term.js';
const {rr,text,line,ellipse}=D;
const ease=x=>{const t=Math.min(1,Math.max(0,x));return t*t*t*(t*(t*6-15)+10);};
const p=(t,a,b)=>ease((t-a)/(b-a));
const mix=(a,b,q)=>a+(b-a)*q;
function paper(c,x,y,w,h,green=false){D.shadow(c,x,y+h+8,w*.49,.085);rr(c,x-w/2+4,y+4,w,h,5,'#d7d4bc');rr(c,x-w/2,y,w,h,5,green?'#e1e8d1':'#fcf8e9',green?'#9daf83':'#bebca255',1);line(c,x-w/2+9,y+1,x+w/2-9,y+1,'#fffff4ba',1);}
function searchStage(c,W,H,t,m){
  const fold=p(t,3.0,4.4);if(fold===1)return;
  c.save();c.globalAlpha=1-fold;c.translate(W/2,H*.51);c.scale(mix(1,.78,fold),mix(1,.05,fold));
  paper(c,0,-80,W*.75,175);
  text(c,'先找到具体条目',0,-48,m?22:24,'#577047',500,'center');
  const w=W*.60;rr(c,-w/2,-12,w,64,7,'#fffdf3','#9eaf8b',1.4);
  ellipse(c,-w/2+25,18,9,9,null,'#789264',1.8);line(c,-w/2+31,25,-w/2+38,32,'#789264',1.8);
  const query=t<.6?'':t<1.15?'恶':'恶心';
  text(c,query,-w/2+60,21,m?27:31,'#405d36',500);
  if(t<2&&Math.floor(t*3)%2===0){const x=-w/2+60+query.length*30;line(c,x,3,x,39,'#81966c',1.3);}
  c.save();c.globalAlpha=p(t,1.8,2.45);text(c,'Nausea · '+term.version,0,77,m?15:16,'#8a9878',400,'center');c.restore();c.restore();
}
function gradeStage(c,W,H,t,m){
  const opening=p(t,3.4,5.5),lift=p(t,7.2,9),returning=p(t,16.3,18.2),read=p(t,9,10.2)*(1-p(t,15.8,16.7));
  if(!opening)return;
  const center=W/2,base=H*.44,spread=W*.174,cardW=W*.154,cardH=m?H*.29:H*.33;
  const visible=p(t,3.4,4.0);
  // Show all five grade positions. Term-specific unavailable grades remain explicitly marked.
  for(const index of [0,4,2,3,1]){
    const delta=index-2,focus=index===1,forward=lift*(1-returning),available=term.grades[index].available;
    const restingX=mix(center,center+delta*spread,opening);
    const x=focus?mix(restingX,center,forward):restingX,y=base-(focus?forward*29:0);
    const rotation=delta*(m?.035:.07)*opening*(1-forward*.4),scale=focus?1+forward*.14:1-forward*.06;
    c.save();c.globalAlpha=visible*(focus?1:1-forward*.70)*(available?1:.68);c.translate(x,y);c.rotate(rotation);c.scale(scale,scale);
    paper(c,0,0,cardW,cardH,focus&&forward>.1);
    text(c,'G'+(index+1),0,cardH*.31,m?30:39,focus?'#4b6b3b':'#748468',500,'center',true);
    const summaries=[['食欲下降','查看完整条件'],['进食 / 干预','展开完整条件'],['摄入 / 干预','查看完整条件'],['—','不适用'],['—','不适用']][index];
    summaries.forEach((s,j)=>text(c,s,0,cardH*.63+j*(m?23:24),m?12:13,'#81906f',400,'center'));
    line(c,-cardW*.34,cardH*.47,cardW*.34,cardH*.47,'#a7b59555',1);c.restore();
  }
  // Unavailable grades stay visibly unavailable rather than becoming severe-event labels.
  c.save();c.globalAlpha=visible*(1-read*.9);
  text(c,'G1–G5 五级框架',center,H*.835,m?17:18,'#839375',400,'center');
  text(c,'“恶心”条目的 G4、G5 不适用',center,H*.89,m?14:14,'#879578',400,'center');c.restore();
  c.save();c.globalAlpha=visible;text(c,'恶心 / Nausea',center,H*.30,m?26:31,'#3f5a36',500,'center');c.restore();
  if(read>0)criteria(c,W,H,t,read,m);
  if(returning>.5){c.save();c.globalAlpha=p(t,17.2,18.3);text(c,'按具体条件核对，不直接判级',center,H*.365,m?16:18,'#788c67',400,'center');c.restore();}
}
function criteria(c,W,H,t,a,m){
  const w=W*.84,h=H*(m?.43:.45),x=W/2,y=H*.425;
  c.save();c.globalAlpha=a;c.translate(x,y);c.scale(.93+.07*a,.93+.07*a);
  paper(c,0,-8,w,h,true);
  rr(c,-w*.45,8,67,30,6,'#607d4e');text(c,'G2',-w*.45+33,23,21,'#f9f6e7',600,'center',true);
  text(c,'条件释义',w*.18,23,m?19:22,'#567047',500,'center');
  const size=m?16:20,start=-w*.40;
  const rowY=[h*.28,h*.40,h*.52];
  const lines=term.grades[1].summary.slice(0,2);
  lines.forEach((s,i)=>{
    const q=p(t,10+i*.6,10.7+i*.6);
    rr(c,start-4,rowY[i]-size*.64,(w*.79)*q,size*1.25,3,'#b7cfa65e');text(c,s,start,rowY[i],size,'#47603d',500);
  });
  const or=p(t,11.5,12.3);c.save();c.globalAlpha*=or;line(c,start,h*.56,-27,h*.56,'#a3b78e',1);line(c,27,h*.56,w*.40,h*.56,'#a3b78e',1);text(c,'或',0,h*.56,m?20:23,'#96794e',600,'center');c.restore();
  c.save();c.globalAlpha*=p(t,12.2,13.0);text(c,'需静脉干预',start,h*.73,size+2,'#47603d',500);c.restore();
  text(c,'原文分号表示“或”',0,h*.91,m?14:15,'#7d8b6d',400,'center');c.restore();
}
function drawProcess(c,W,H,ms,theme,m){
  const t=Math.min(20,Math.max(0,ms/1000)),stage=t<3.4?'search':t<9?'grades':t<16.7?'criteria':'review';
  D.backdrop(c,W,H,theme,0);
  searchStage(c,W,H,t,m);gradeStage(c,W,H,t,m);
  text(c,'不良事件分级',W*.72,H*.12,m?23:28,theme.ink,500,'center');
  text(c,'NCI · '+term.version,W*.72,H*.185,m?14:16,theme.muted,400,'center');
  text(c,'中文为动画释义 · 条目演示，不作个体分级',W*.5,H*.955,m?12:12,theme.muted,400,'center');
  return {stage};
}
export { drawProcess };

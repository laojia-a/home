import { D } from '../../src/animations/shared/draw.js';
import { example, nodes } from './hierarchy.js';
const {rr,text,line,ellipse}=D;
const ease=x=>{const t=Math.min(1,Math.max(0,x));return t*t*t*(t*(t*6-15)+10);};
const p=(t,a,b)=>ease((t-a)/(b-a));
const mix=(a,b,q)=>a+(b-a)*q;
function sheet(c,x,y,w,h,tint=false){D.shadow(c,x,y+h+6,w*.48,.085);rr(c,x-w/2+3,y+3,w,h,5,'#d6d2bc');rr(c,x-w/2,y,w,h,5,tint?'#e3ebd4':'#fcf8e9',tint?'#9caf82':'#c4c0a666',1);}
function search(c,W,H,t,m){
  const leave=p(t,3.25,4.3);if(leave===1)return;
  c.save();c.globalAlpha=1-leave;c.translate(W/2,H*.48);c.scale(mix(1,.8,leave),mix(1,.06,leave));
  sheet(c,0,-65,W*.72,142);
  ellipse(c,-W*.29,-3,11,11,null,'#82976d',2);line(c,-W*.278,6,-W*.266,18,'#82976d',2);
  const q=t<.6?'':t<1.15?'头':'头痛';text(c,q,-W*.235,0,m?29:33,'#3e5c35',500);
  if(t<2&&Math.floor(t*3)%2===0)line(c,-W*.235+q.length*32,-19,-W*.235+q.length*32,22,'#80956b',1.4);
  c.save();c.globalAlpha=p(t,1.8,2.5);text(c,'按 LLT 名称或代码查找',0,52,m?17:17,'#899879',400,'center');c.restore();c.restore();
}
function point(index,W,H,m){
  if(m)return {x:W*.52,y:H*(.785-index*.116),w:W*.70,h:H*.09};
  return {x:W*(.155+index*.171),y:H*(.69-index*.095),w:W*.151,h:H*.18};
}
function link(c,a,b,q,m){
  if(!q)return;
  const from=m?{x:a.x,y:a.y}:{x:a.x+a.w/2,y:a.y+a.h*.5};
  const to=m?{x:b.x,y:b.y+b.h}:{x:b.x-b.w/2,y:b.y+b.h*.5};
  const dots=[];
  for(let i=0;i<=50;i++){const t=i/50;dots.push([mix(from.x,to.x,t),mix(from.y,to.y,t)]);}
  D.trace(c,dots,q,'#90a478',1.5);
  ellipse(c,mix(from.x,to.x,q),mix(from.y,to.y,q),2.8,2.8,'#8da778');
}
function labelLines(node){
  if(node.level==='HLT')return ['各种头痛','（不另分类）'];
  if(node.level==='SOC')return ['各类神经','系统疾病'];
  return [node.zh];
}
function node(c,entry,box,q,m,emphasis=false){
  c.save();c.globalAlpha=q;c.translate(box.x,box.y+box.h*.5);c.scale(.87+.13*q,.87+.13*q);
  sheet(c,0,-box.h*.5,box.w,box.h,emphasis);
  if(m){
    rr(c,-box.w/2+9,-14,61,28,5,emphasis?'#6c8955':'#cbd7b8');text(c,entry.level,-box.w/2+39,0,19,emphasis?'#fff9e8':'#557042',500,'center',true);
    const full=entry.zh,fs=entry.level==='HLT'?14:16;
    text(c,full,31,0,fs,'#526c45',500,'center');
  }else{
    text(c,entry.level,0,-box.h*.22,24,emphasis?'#4e7339':'#7d916a',500,'center',true);
    labelLines(entry).forEach((s,i)=>text(c,s,0,box.h*.10+i*21,entry.level==='HLT'?14:15,'#62754f',400,'center'));
  }
  c.restore();
}
function hierarchy(c,W,H,t,m){
  const reveal=p(t,3.5,4.25);if(!reveal)return;
  const unfold=p(t,6.2,8),last=p(t,16,17.5);
  const selected=nodes[0],end=point(0,W,H,m);
  const initial={x:W*.5,y:H*.43,w:W*.60,h:H*(m?.22:.26)};
  const active={x:mix(initial.x,end.x,unfold),y:mix(initial.y,end.y,unfold),w:mix(initial.w,end.w,unfold),h:mix(initial.h,end.h,unfold)};
  if(unfold<.97){
    c.save();c.globalAlpha=reveal*(1-unfold);
    sheet(c,initial.x,initial.y,initial.w,initial.h,true);
    text(c,'LLT · 头痛 / Headache',initial.x,initial.y+initial.h*.32,m?23:28,'#416337',500,'center');
    text(c,selected.code,initial.x,initial.y+initial.h*.62,m?20:24,'#7d8e6a',400,'center',true);
    text(c,'当前 LLT · 选择此条目',initial.x,initial.y+initial.h*.86,m?15:16,'#6e8858',400,'center');
    const bracket=p(t,4.8,5.6);D.trace(c,[[initial.x-initial.w/2-8,initial.y+21],[initial.x-initial.w/2-8,initial.y-8],[initial.x-initial.w/2+38,initial.y-8]],bracket,'#7d9a5d',2);c.restore();
  }
  if(unfold>0)node(c,selected,active,unfold,m,true);
  for(let i=1;i<5;i++){
    const start=8+(i-1)*2.3,grow=p(t,start,start+1.2),arrive=p(t,start+.35,start+1.5);
    const a=point(i-1,W,H,m),b=point(i,W,H,m);
    link(c,a,b,grow,m);if(arrive>0)node(c,nodes[i],b,arrive,m,i===4&&last>.3);
  }
  c.save();c.globalAlpha=p(t,8.6,9.3)*(1-p(t,12,13));
  text(c,'LLT 与 PT 同名、同码，仍是两个层级',W/2,H*(m?.23:.245),m?17:19,'#768b63',400,'center');c.restore();
  c.save();c.globalAlpha=last;text(c,'LLT → PT → HLT → HLGT → SOC',W/2,H*(m?.23:.235),m?17:20,'#577147',500,'center',true);c.restore();
}
function drawProcess(c,W,H,ms,theme,m){
  const t=Math.min(20,Math.max(0,ms/1000)),stage=t<3.5?'search':t<6.2?'select':t<10.3?'parent':'hierarchy';
  D.backdrop(c,W,H,theme,0);search(c,W,H,t,m);hierarchy(c,W,H,t,m);
  text(c,'术语检索',W*.73,H*.12,m?24:28,theme.ink,500,'center');
  text(c,'MedDRA '+example.version,W*.73,H*.183,m?15:17,theme.muted,400,'center');
  text(c,'主 SOC 路径示例 · 条目选择仍需核对原始描述',W*.5,H*.95,m?12:12,theme.muted,400,'center');
  return {stage};
}
export { drawProcess };

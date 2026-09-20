import { D } from '../../../../shared/draw.js';
import { example } from './example.js';
const {rr,text,line,ellipse}=D;
const smooth=x=>{const t=Math.max(0,Math.min(1,x));return t*t*t*(t*(t*6-15)+10);};
const phase=(t,a,b)=>smooth((t-a)/(b-a));
const mix=(a,b,t)=>a+(b-a)*t;
const pct=x=>Math.round(x*100)+'%';
const I=example.inputs;
const fields=[['个体内 CV',pct(I.cv)],['预期 T/R',I.ratio.toFixed(2)],['目标 Power',pct(I.power)],['显著性 α',I.alpha.toFixed(2)],['等效界限',I.lower.toFixed(2)+'–'+I.upper.toFixed(2)],['预计脱落',pct(I.dropout)]];
function panel(c,x,y,w,h){D.shadow(c,x,y+h+9,w*.49,.08);rr(c,x-w/2+4,y+4,w,h,5,'#dad5bf');rr(c,x-w/2,y,w,h,5,'#fcf8e9','#c0bda155',1);}
function arrow(c,x1,y,x2,q){line(c,x1,y,mix(x1,x2,q),y,'#8c9d7a',1.5);if(q>.97){line(c,x2-6,y-4,x2,y,'#8c9d7a',1.5);line(c,x2-6,y+4,x2,y,'#8c9d7a',1.5);}}
function capsule(c,x,y,label,q,green){
  c.save();c.translate(x,y);c.rotate((1-q)*-.15);c.scale(.82+.18*q,.82+.18*q);c.globalAlpha*=q;
  ellipse(c,0,22,37,5,'#63774816');rr(c,-37,-20,74,40,18,green?'#c7d6ad':'#e2d3b5',green?'#99ad80':'#bdab86',1);
  line(c,-23,-14,22,-14,'#fffdf18c',1.3);text(c,label,0,0,27,green?'#496641':'#837052',600,'center',true);c.restore();
}
function design(c,W,H,t,m){
  const close=phase(t,3.8,4.65);if(close>=1)return;
  c.save();c.translate(W/2,H*.53);c.scale(1,Math.max(.025,1-close));c.globalAlpha=1-close;
  const width=W*.78,height=m?H*.43:H*.48;
  panel(c,0,-height/2,width,height);
  text(c,'2 × 2 交叉设计',0,-height/2+33,m?24:25,'#40583c',500,'center');
  const left=-width*.08,right=width*.33,labels=-width*.36;
  text(c,'第一周期',left,-height*.19,m?16:16,'#7a886c',400,'center');text(c,'第二周期',right,-height*.19,m?16:16,'#7a886c',400,'center');
  for(let row=0;row<2;row++){
    const y=row*height*.28;
    text(c,'序列 '+(row+1),labels,y,m?17:18,'#566d4d',500,'center');
    capsule(c,left,y,row===0?'T':'R',.65+.35*phase(t,.1+row*.2,.7+row*.2),row===0);
    arrow(c,left+44,y,right-45,phase(t,.8+row*.2,1.6+row*.2));
    capsule(c,right,y,row===0?'R':'T',phase(t,1.35+row*.15,2.2+row*.15),row!==0);
    text(c,'洗脱期',(left+right)/2,y-15,m?13:13,'#899478',400,'center');
  }
  text(c,'T 受试制剂   /   R 参比制剂',0,height/2-16,m?14:14,'#859174',400,'center');c.restore();
}
function parameterStage(c,W,H,t,m){
  const open=phase(t,4.1,4.85),fold=phase(t,8.15,9.6);if(!open||fold===1)return;
  const cy=mix(H*.54,H*.29,fold),scale=mix(1,.28,fold);
  c.save();c.translate(W/2,cy);c.scale(scale,scale*Math.max(.02,open));c.globalAlpha=(1-fold)*open;
  const w=W*.78,h=m?H*.48:H*.49;panel(c,0,-h/2,w,h);
  text(c,'示例参数',0,-h/2+28,m?23:24,'#40583c',500,'center');
  const cols=m?2:3,rows=m?3:2,cellW=w/cols,cellH=(h-72)/rows;
  fields.forEach(([label,value],i)=>{
    const x=-w/2+cellW*(i%cols+.5),y=-h/2+79+Math.floor(i/cols)*cellH;
    const q=phase(t,4.8+i*.3,5.35+i*.3),spot=phase(t,4.7+i*.3,4.95+i*.3)*(1-phase(t,5.6+i*.3,5.95+i*.3));
    c.save();c.translate(x,y);c.scale(.92+.08*q,.92+.08*q);c.globalAlpha*=q;
    rr(c,-cellW*.43,-20,cellW*.86,68,5,`rgba(157,179,130,${spot*.14})`);
    text(c,label,0,0,m?16:16,'#7b8b6c',400,'center');text(c,value,0,33,i===4?(m?22:25):(m?27:31),'#48633d',500,'center',true);c.restore();
  });c.restore();
}
function person(c,x,y,size,q,extra=false){
  c.save();c.translate(x,y);c.scale(q,q);
  ellipse(c,0,size*1.5,size*.9,2,'#52654621');
  const ink=extra?'#9c8557':'#789363';
  ellipse(c,0,-size*.48,size*.35,size*.35,ink);
  rr(c,-size*.47,0,size*.94,size*1.06,size*.26,ink);
  line(c,-size*.17,size*.9,-size*.2,size*1.35,ink,size*.25);line(c,size*.17,size*.9,size*.2,size*1.35,ink,size*.25);
  c.restore();
}
function peopleStage(c,W,H,t,m){
  const ready=phase(t,9.65,10.25);if(!ready)return;
  const basePerSequence=example.evaluable/2,total=example.perSequence;
  const start=W*.27,gap=W*.60/(total-1),size=Math.min(m?13:17,gap*.49),top=H*.56,rowGap=m?H*.16:H*.17;
  const plan=phase(t,14,15),complete=phase(t,16.7,17.4);
  c.save();c.globalAlpha=ready;
  text(c,plan>.05?'计划入组例数':'可评价例数',W*.5,H*.29,m?20:22,'#768969',500,'center');
  const headline=plan>.05&&complete<1?`${example.evaluable} → ${example.enrollment}`:String(complete===1?example.enrollment:example.evaluable);
  text(c,headline,W*.5,H*.40,plan>.05&&complete<1?(m?49:61):(m?65:81),'#3e5d34',500,'center',true);
  if(plan>0){c.save();c.globalAlpha=plan;text(c,'预计脱落 '+pct(I.dropout)+' · 向上取偶数',W*.5,H*.465,m?15:16,'#8c805e',400,'center');c.restore();}
  for(let row=0;row<2;row++){
    const y=top+row*rowGap;
    text(c,row===0?'T → R':'R → T',W*.13,y,m?18:21,'#526c45',500,'center',true);
    let shown=0;
    for(let i=0;i<total;i++){
      const extra=i>=basePerSequence;
      const q=extra?phase(t,15.1+(i-basePerSequence)*.38+row*.2,15.7+(i-basePerSequence)*.38+row*.2):phase(t,10.35+i*.075+row*.18,11.00+i*.075+row*.18);
      if(q>=.999)shown++;
      const targetX=start+i*gap;
      if(extra){c.save();c.globalAlpha=plan*.4;ellipse(c,targetX,y+size*.3,size*.74,size*1.2,null,'#9b906c',1);c.restore();}
      if(q>0){
        const x=extra?targetX:mix(W*.5,targetX,q);
        const py=extra?y-(1-q)*45:mix(H*.45,y,q)-Math.sin(q*Math.PI)*22;
        person(c,x,py,size,.3+.7*q,extra);
      }
    }
    text(c,shown+' 人',W*.13,y+26,m?15:17,'#879675',400,'center');
  }
  c.save();c.globalAlpha=complete;text(c,'每序列 '+example.perSequence+' 人，两序列合计 '+example.enrollment+' 人',W*.5,H*.845,m?17:19,'#4e6942',500,'center');c.restore();
  c.restore();
}
function drawProcess(c,W,H,ms,theme,mobile){
  const t=Math.min(20,Math.max(0,ms/1000));
  const stage=t<4?'design':t<9.6?'inputs':t<14?'estimate':'enrollment';
  D.backdrop(c,W,H,theme,0);
  // A small push during the result reveal, then a retreat to accommodate both sequences.
  const zoom=1+.035*phase(t,9.7,11)-.035*phase(t,14,15.5);
  c.save();c.translate(W/2,H*.55);c.scale(zoom,zoom);c.translate(-W/2,-H*.55);
  design(c,W,H,t,mobile);parameterStage(c,W,H,t,mobile);peopleStage(c,W,H,t,mobile);c.restore();
  text(c,'BE 例数估算',W*.73,H*.12,mobile?23:28,theme.ink,500,'center');
  text(c,'工具示例参数演示 · 非项目例数建议',W*.5,H*.94,mobile?14:12,theme.muted,400,'center');
  return {stage};
}
export { drawProcess };

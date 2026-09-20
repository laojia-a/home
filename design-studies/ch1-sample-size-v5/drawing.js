import { D } from '../../src/animations/shared/draw.js';
import { example } from './example.js';
const {rr,text,line,ellipse,grad}=D;
const smooth=x=>{const t=Math.max(0,Math.min(1,x));return t*t*t*(t*(t*6-15)+10);};
const phase=(t,a,b)=>smooth((t-a)/(b-a));
const mix=(a,b,t)=>a+(b-a)*t;
function sheet(c,x,y,w,h){
  D.shadow(c,x,y+h+9,w*.50,.09);
  rr(c,x-w/2+5,y+5,w,h,6,'#d7d3bc');
  rr(c,x-w/2,y,w,h,6,grad(c,0,y,0,y+h,[[0,'#fffbee'],[1,'#f4efdf']]),'#c0bea461',1);
  line(c,x-w/2+13,y+1,x+w/2-13,y+1,'#fffff7cc',1);
}
function pill(c,x,y,label,green=true){
  rr(c,x-43,y-23,86,46,18,green?'#d2dcbb':'#e6dbc4',green?'#9bad83':'#c1b28f',1);
  text(c,label,x,y,34,green?'#42613c':'#82714f',600,'center',true);
}
function arrow(c,x1,y,x2,opacity=1){c.save();c.globalAlpha*=opacity;line(c,x1,y,x2,y,'#8c9d7a',1.5);line(c,x2-7,y-5,x2,y,'#8c9d7a',1.5);line(c,x2-7,y+5,x2,y,'#8c9d7a',1.5);c.restore();}
function design(c,t,m){
  const x=500;sheet(c,x,185,650,m?390:307);
  text(c,'2 × 2 交叉设计',x,224,m?37:24,'#3e553d',500,'center');
  text(c,'第一周期',390,274,m?26:15,'#718163',400,'center');text(c,'第二周期',655,274,m?26:15,'#718163',400,'center');
  for(let row=0;row<2;row++){
    const y=326+row*(m?133:93);const appear=phase(t,row*.4,row*.4+.8);c.save();
    text(c,'序列 '+(row+1),243,y,m?28:18,'#53674b',500,'center');
    pill(c,390,y,row===0?'T':'R',row===0);arrow(c,451,y,590,appear);pill(c,655,y,row===0?'R':'T',row!==0);
    text(c,'洗脱期',523,y-22,m?23:13,'#7b8b6d',400,'center');c.restore();
  }
  text(c,'T 受试制剂   /   R 参比制剂',x,m?543:467,m?26:15,'#7c876b',400,'center');
}
const I=example.inputs,pct=n=>Math.round(n*100)+'%';
const parameters=[['个体内 CV',pct(I.cv)],['预期 T / R',I.ratio.toFixed(2)],['目标 Power',pct(I.power)],['显著性水平 α',I.alpha.toFixed(2)],['等效界限',I.lower.toFixed(2)+'–'+I.upper.toFixed(2)],['预计脱落率',pct(I.dropout)]];
function inputs(c,t,m){
  const x=1400;sheet(c,x,172,650,m?457:330);text(c,'示例参数',x,214,m?37:24,'#3e553d',500,'center');
  parameters.forEach(([label,value],i)=>{
    const col=i%(m?2:3),row=Math.floor(i/(m?2:3)),px=x-(m?160:210)+col*(m?320:210),py=279+row*(m?116:126);
    c.save();c.globalAlpha=phase(t,4.8+i*.31,5.45+i*.31);
    text(c,label,px,py,m?27:17,'#718263',400,'center');
    text(c,value,px,py+39,i===4?(m?33:25):m?42:33,'#435e3d',500,'center',true);
    line(c,px-73,py+64,px+73,py+64,'#aebc9666',1);c.restore();
  });
}
function results(c,t,m){
  const q=phase(t,14,16),ready=phase(t,10.3,11.1);
  if(m&&q>.5){
    c.save();c.globalAlpha=phase(q,.5,.9);
    const x=2300;sheet(c,x,174,650,343);
    text(c,'从可评价到计划入组',x,216,33,'#3e553d',500,'center');
    text(c,'可评价例数',x-161,274,29,'#718263',400,'center');text(c,'计划入组例数',x+149,274,29,'#718263',400,'center');
    text(c,String(example.evaluable),x-161,333,75,'#536a46',500,'center',true);
    c.save();c.globalAlpha*=q;text(c,String(example.enrollment),x+149,333,87,'#365631',600,'center',true);c.restore();arrow(c,x-70,334,x+34,q);
    text(c,'预计脱落率 '+pct(I.dropout)+' · 向上取偶数',x,399,25,'#748469',400,'center');
    c.save();c.globalAlpha*=q;text(c,`T → R：${example.perSequence} 人    R → T：${example.perSequence} 人`,x,464,27,'#466140',500,'center');c.restore();c.restore();return;
  }
  c.save();if(m)c.globalAlpha=1-phase(q,0,.45);
  const x=m?2300:mix(2300,2180,q),w=m?450:mix(450,340,q);
  sheet(c,x,188,w,300);
  text(c,'可评价例数',x,237,m?27:23,'#536949',500,'center');
  c.save();c.globalAlpha*=ready;text(c,String(example.evaluable),x,326,m?97:mix(98,82,q),'#3d5c37',500,'center',true);c.restore();
  if(ready<1)text(c,'按参数估算…',x,326,18,'#849278',400,'center');
  text(c,'两序列合计',x,399,m?24:18,'#7e8d72',400,'center');
  text(c,'工具估算 Power '+(example.achievedPower*100).toFixed(2)+'%',x,452,m?21:14,'#8e997f',400,'center');
  if(q>0&&!m){
    c.save();c.globalAlpha=q;const rx=2680;
    sheet(c,rx,188,340,300);text(c,'计划入组例数',rx,237,23,'#536949',500,'center');text(c,String(example.enrollment),rx,326,88,'#365631',600,'center',true);
    text(c,'每序列 '+example.perSequence+' 人',rx,399,20,'#536949',500,'center');
    text(c,'T → R     R → T',rx,449,17,'#8e997f',400,'center',true);
    arrow(c,2381,337,2470);text(c,'预期脱落',2429,295,14,'#859275',400,'center');text(c,'10%',2429,314,17,'#536949',500,'center',true);
    text(c,'30 ÷ (1 − 10%) = 33.33…   →   向上取偶数：34',2430,533,16,'#718362',400,'center');c.restore();
  }c.restore();
}
function drawProcess(c,W,H,ms,theme,mobile){
  const t=Math.max(0,Math.min(20,ms/1000));
  const first=phase(t,3,5),second=phase(t,8,10),last=phase(t,14,16);
  const focus=mix(mix(500,1400,first),2300,second)+(mobile?0:130*last);
  const zoom=1-.12*last,scale=W/(mobile?680:1000)*zoom;
  const stage=t<3?'design':t<8?'inputs':t<14?'estimate':'enrollment';
  D.backdrop(c,W,H,theme,0);
  c.save();c.translate(W*.5-focus*scale,H*.54-340*scale);c.scale(scale,scale);
  design(c,t,mobile);inputs(c,t,mobile);results(c,t,mobile);c.restore();
  text(c,'BE 例数估算',W*.73,H*.12,mobile?23:28,theme.ink,500,'center');
  const subtitles={design:'先确定研究设计',inputs:'输入有依据的假设',estimate:'计算可评价例数',enrollment:'纳入预计脱落，安排入组'};
  text(c,subtitles[stage],W*.73,H*.185,mobile?14:16,theme.muted,400,'center');
  text(c,'工具示例参数演示 · 非项目例数建议',W*.5,H*.92,mobile?14:12,theme.muted,400,'center');
  return {stage};
}
export { drawProcess };

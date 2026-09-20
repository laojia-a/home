import { D } from '../../../../shared/draw.js';
import { example,result } from './nutrition.js';
const {rr,text,line,ellipse,grad,path}=D;
const ease=x=>{const t=Math.min(1,Math.max(0,x));return t*t*t*(t*(t*6-15)+10);};
const p=(t,a,b)=>ease((t-a)/(b-a));
const mix=(a,b,q)=>a+(b-a)*q;
function egg(c,x,y,size=1){
  c.save();c.translate(x,y);c.scale(size,size);
  for(const [dx,dy,angle] of [[-24,0,-.22],[25,-9,.21]]){
    c.save();c.translate(dx,dy);c.rotate(angle);
    ellipse(c,3,9,29,39,'#cfc8ae');ellipse(c,0,0,29,39,'#fffaf0','#cfc8ae',1);
    ellipse(c,0,5,18,23,grad(c,-15,-17,16,27,[[0,'#f0d17d'],[1,'#d5a951']]),'#c4a15666',.8);
    ellipse(c,-5,-4,6,9,'#f8df9c77');c.restore();
  }c.restore();
}
function toast(c,x,y,size=1){
  c.save();c.translate(x,y);c.scale(size,size);
  const form='M-48 37 L-49 -10 Q-63 -28 -43 -45 Q-25 -58 0 -48 Q28 -58 48 -43 Q66 -25 49 -9 L47 37Z';
  c.save();c.translate(10,10);c.rotate(.12);path(c,form,'#b69159','#d4b17b',2);c.restore();
  path(c,form,'#ad8650',grad(c,0,-48,0,36,[[0,'#e9cf98'],[1,'#d8b779']]),2);
  path(c,'M-38 28 L-39 -10 Q-49 -28 -30 -35 Q-18 -42 0 -37 Q26 -45 37 -32 Q46 -21 38 -8 L37 28Z',null,'#f1dda8');
  for(let i=0;i<12;i++)ellipse(c,-28+(i*17)%59,-23+(i*23)%45,1.3+(i%2),1.1,'#b78d4855');c.restore();
}
function milk(c,x,y,fill,size=1){
  c.save();c.translate(x,y);c.scale(size,size);
  path(c,'M-29 -95 L-24 14 Q0 22 24 14 L29 -95Z','#9aab9866',grad(c,-30,0,30,0,[[0,'#b5c2b759'],[.2,'#ffffef88'],[.8,'#f3f8e840'],[1,'#879e8680']]),1.2);
  c.save();c.beginPath();c.moveTo(-28,-94);c.lineTo(-23,14);c.quadraticCurveTo(0,20,23,14);c.lineTo(28,-94);c.closePath();c.clip();
  const top=14-90*fill;rr(c,-29,top,58,112,0,'#f8f4e1');ellipse(c,0,top,27,4,'#fffbed','#c9cbb266',.8);c.restore();
  ellipse(c,0,-95,29,5,null,'#91a58a88',1);line(c,-21,-85,-18,8,'#ffffffd0',2.4);
  c.restore();
}
function balance(c,x,y,label){
  D.shadow(c,x,y+58,119,.11);
  rr(c,x-112,y-16,224,77,15,grad(c,0,y-16,0,y+61,[[0,'#e3e6ce'],[1,'#b7c7a0']]),'#91a580',1.3);
  rr(c,x-84,y-30,168,23,8,'#d0dabe','#9cac8c',1);ellipse(c,x,y-30,84,10,'#eef0dc','#a1b28d',1);
  rr(c,x-50,y+9,100,34,5,'#4a5e45');text(c,label,x,y+27,23,'#f0efd4',500,'center',true);
}
function weighing(c,W,H,t,m){
  const away=p(t,5.65,6.7);if(away===1)return;
  const s=m?.85:1,x=W/2,y=H*.61;
  c.save();c.globalAlpha=1-away;c.translate(x,y);c.scale(s*(1-away*.08),s*(1-away*.08));
  const second=t>=3.05,q=p(t,second?3.25:.4,second?4.45:1.65),out=second?0:p(t,2.65,3.05);
  balance(c,0,0,q>.98&&out===0?(second?'80 g':'50 g'):'0 g');
  c.save();c.globalAlpha=1-out;const py=-(second?69:60)-(1-q)*140-out*100;
  if(second)toast(c,0,py,.82);else egg(c,0,py,.76);c.restore();
  text(c,second?'吐司':'煮鸡蛋',0,98,m?22:23,'#536b44',500,'center');c.restore();
}
function meal(c,W,H,t,m){
  const show=p(t,6,6.9);if(!show)return;
  const compute=p(t,10.3,12.3),scale=m?.78:1;
  const cx=m?W*.43:mix(W*.5,W*.32,compute),cy=m?H*.43:mix(H*.61,H*.60,compute);
  c.save();c.globalAlpha=show;c.translate(cx,cy+(1-show)*30);c.scale(scale,scale);
  D.shadow(c,0,28,168,.12);ellipse(c,0,9,159,63,'#d5d6bd','#b0b6a0',1);ellipse(c,0,0,159,63,'#fcf8e9','#b3bba3',1.2);ellipse(c,0,-2,134,46,null,'#dedec866',5);
  const a=p(t,6.5,7.25),b=p(t,7.1,7.85),f=p(t,7.75,9.25);
  c.save();c.globalAlpha=a;toast(c,-39,-32-(1-a)*110,.90);c.restore();
  c.save();c.globalAlpha=b;egg(c,41,-10-(1-b)*100,.80);c.restore();
  c.save();c.globalAlpha=p(t,7.6,8.15);ellipse(c,169,-26,28,5,'#6174481d');milk(c,169,-41,f,.90);c.restore();
  if(f===1)text(c,'250 mL',169,10,17,'#7d8f6a',400,'center',true);
  c.restore();
  c.save();c.globalAlpha=p(t,8.6,9.45);text(c,'鸡蛋 50 g · 吐司 80 g · 牛奶 250 mL',m?W*.5:cx+18,m?H*.565:cy+111,m?14:15,'#7a8c68',400,'center');c.restore();
  if(compute>0)nutrition(c,W,H,t,compute,m);
}
function nutrition(c,W,H,t,q,m){
  const cx=m?W*.5:W*.755,cy=m?H*.68:H*.43,width=W*(m?.76:.36);
  c.save();c.globalAlpha=q;
  text(c,t<14?'按份量换算':'示例总热量',cx,cy-(m?27:45),m?19:22,'#7e906c',400,'center');
  const total=p(t,13.8,14.9);
  if(total<1){c.save();c.globalAlpha=1-total;text(c,'蛋白质 × 4   脂肪 × 9   碳水 × 4',cx,cy+12,m?14:15,'#5e794d',500,'center');c.restore();}
  c.save();c.globalAlpha=total;text(c,result.calories.toFixed(1),cx,cy+13,m?43:58,'#3f5e35',500,'center',true);text(c,'kcal',cx,cy+47,m?15:17,'#879775',400,'center',true);c.restore();
  const barY=cy+88,barH=m?18:24;
  text(c,'供能构成',cx,barY-14,m?13:14,'#8a9977',400,'center');
  rr(c,cx-width/2,barY,width,barH,4,'#d9dfc9');
  const palette=['#98b288','#d1b66e','#b7c498'],names=['蛋白质','脂肪','碳水'],keys=['protein','fat','carb'];let offset=0;
  keys.forEach((key,i)=>{
    const share=result.energy[key]/result.calories,fill=p(t,11+i*.35,12.5+i*.35);
    c.fillStyle=palette[i];c.fillRect(cx-width/2+offset,barY,Math.max(0,width*share*fill),barH);
    const x=cx-width/3+i*width/3;
    ellipse(c,x-27,barY+42,3,3,palette[i]);text(c,names[i],x+4,barY+42,m?13:14,'#7b8c69',400,'center');
    text(c,result[key].toFixed(1)+' g',x,barY+62,m?13:14,'#60794f',500,'center',true);
    offset+=width*share;
  });
  const ratio=p(t,16,17.2);c.save();c.globalAlpha=ratio;text(c,'脂肪供能比 '+(result.fatShare*100).toFixed(1)+'%',cx,barY+(m?91:113),m?17:21,'#8d7844',500,'center');c.restore();
  c.restore();
}
function drawProcess(c,W,H,ms,theme,m){
  const t=Math.min(20,Math.max(0,ms/1000)),stage=t<6?'weigh':t<10.3?'plate':t<15?'nutrition':'energy';
  D.backdrop(c,W,H,theme,0);weighing(c,W,H,t,m);meal(c,W,H,t,m);
  text(c,'餐谱计算',W*.73,H*.12,m?24:28,theme.ink,500,'center');
  text(c,'食材 · 份量 · 供能',W*.73,H*.185,m?15:17,theme.muted,400,'center');
  text(c,'食物库示例 · 按所示份量计算',W*.5,H*.965,m?13:12,theme.muted,400,'center');
  return {stage};
}
export { drawProcess };

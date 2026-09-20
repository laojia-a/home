import { D } from '../../src/animations/shared/draw.js';
import { inputs,amounts,money } from './amounts.js';
const {rr,text,line}=D;
const ease=x=>{const t=Math.min(1,Math.max(0,x));return t*t*t*(t*(t*6-15)+10);};
const p=(t,a,b)=>ease((t-a)/(b-a));
const mix=(a,b,q)=>a+(b-a)*q;
const colors=['#a4b98d','#c0cca5','#d2be89'];
function paper(c,x,y,w,h,fill='#fcf8e8'){
  D.shadow(c,x,y+h+8,w*.48,.085);rr(c,x-w/2+4,y+4,w,h,5,'#d5d2bc');rr(c,x-w/2,y,w,h,5,fill,'#b9bca166',1);line(c,x-w/2+10,y+1,x+w/2-10,y+1,'#fffff5b0',1);
}
function inputScene(c,W,H,t,m){
  const leave=p(t,3.6,4.6);if(leave===1)return;
  const cx=W/2,cy=H*.52,w=W*.77,h=H*(m?.37:.38);
  c.save();c.globalAlpha=1-leave;c.translate(cx,cy);c.scale(1,1-leave*.86);
  paper(c,0,-h/2,w,h);
  text(c,'演示输入',0,-h/2+28,m?22:24,'#758a62',500,'center');
  const a=p(t,.3,1.15),b=p(t,1.05,1.9),total=p(t,2.0,2.75);
  c.save();c.globalAlpha=a;text(c,'含税单价',-w*.24,-h*.10,m?16:18,'#8a9879',400,'center');text(c,money(inputs.unitPrice*100),-w*.24,h*.10,m?29:37,'#4b6b3c',500,'center',true);c.restore();
  text(c,'×',0,h*.08,m?27:32,'#98a586',400,'center');
  c.save();c.globalAlpha=b;text(c,'例数',w*.25,-h*.10,m?16:18,'#8a9879',400,'center');text(c,String(inputs.cases),w*.25,h*.10,m?32:42,'#4b6b3c',500,'center',true);c.restore();
  c.save();c.globalAlpha=total;line(c,-w*.4,h*.25,w*.4,h*.25,'#b8c7a266',1);text(c,'含税总价 '+money(amounts.grossCents),0,h*.39,m?23:27,'#3b5b31',500,'center');c.restore();c.restore();
}
function taxScene(c,W,H,t,m){
  const enter=p(t,4.0,4.9),leave=p(t,7.7,8.7);if(!enter||leave===1)return;
  const cy=H*.47;
  c.save();c.globalAlpha=enter*(1-leave);
  text(c,'含税总价',W/2,cy-62,m?18:21,'#7a8c68',500,'center');text(c,money(amounts.grossCents),W/2,cy-17,m?40:51,'#416137',500,'center',true);
  text(c,'示例税率 '+Math.round(inputs.taxRate*100)+'%',W/2,cy+19,m?16:17,'#918560',400,'center');
  const q=p(t,5.1,6.3),w=W*.33,h=H*.17;
  for(let i=0;i<2;i++){
    const x=mix(W/2,W*(i===0?.30:.70),q),y=cy+51+Math.sin(q*Math.PI)*15;
    c.save();c.globalAlpha*=q;paper(c,x,y,w,h,i===0?'#edf0de':'#f1e7d1');
    text(c,i===0?'不含税金额':'税额',x,y+h*.31,m?16:20,'#7d8d6c',400,'center');text(c,money(i===0?amounts.netCents:amounts.taxCents),x,y+h*.70,m?24:34,'#47613b',500,'center',true);c.restore();
  }
  text(c,'含税总价 ÷ (1 + 示例税率) = 不含税金额',W/2,H*.82,m?14:15,'#8a9878',400,'center');c.restore();
}
function periods(c,W,H,t,m){
  const show=p(t,8.2,9.15),fold=p(t,14.3,16.1);if(!show)return;
  const center=W/2,totalY=mix(H*.34,H*.285,fold),sheetTop=H*.23,sheetW=W*.82,sheetH=H*.65;
  if(fold>0){c.save();c.globalAlpha=fold;paper(c,center,sheetTop,sheetW,sheetH);c.restore();}
  c.save();c.globalAlpha=show;text(c,fold>.5?'示例金额摘要':'含税总价',center,totalY,m?20:23,'#758a62',500,'center');
  text(c,money(amounts.grossCents),center,totalY+45,m?38:51,'#3c5d32',500,'center',true);
  const barW=W*.76,barY=H*.48,barH=m?24:28,detach=p(t,10.1,11.7);
  let start=center-barW/2;
  for(let i=0;i<3;i++){
    const pieceWidth=barW*inputs.ratios[i]/100,barCenter=start+pieceWidth/2;
    const cx=mix(barCenter,W*(.22+i*.28),detach),y=mix(barY,H*.57,detach)-Math.sin(detach*Math.PI)*12;
    const cardW=mix(pieceWidth-3,W*.23,detach),cardH=mix(barH,H*.205,detach);
    c.save();c.globalAlpha*=1-fold;
    rr(c,cx-cardW/2+2,y+4,cardW,cardH,5,'#94a37e33');rr(c,cx-cardW/2,y,cardW,cardH,5,colors[i]);
    if(detach<.6)text(c,inputs.ratios[i]+'%',cx,y+barH*.58,m?17:19,'#f9f6e4',500,'center',true);
    c.save();c.globalAlpha*=detach;text(c,['一期','二期','三期'][i]+' · '+inputs.ratios[i]+'%',cx,y+cardH*.27,m?14:18,'#64774f',500,'center');text(c,money(amounts.periodCents[i]),cx,y+cardH*.65,m?21:30,'#3f5b32',500,'center',true);c.restore();c.restore();
    if(fold>0){
      const rowY=H*(.58+i*.081),fromX=cx;
      c.save();c.globalAlpha=fold;
      const tx=mix(fromX,center,fold),ty=mix(y+cardH*.5,rowY,fold);
      const rowW=mix(cardW,sheetW*.84,fold);
      rr(c,tx-rowW/2,ty-18,rowW,36,4,i%2?'#edf0df':'#f6f3e5');
      c.globalAlpha*=p(fold,.3,1);
      text(c,['第一期','第二期','第三期'][i]+'  '+inputs.ratios[i]+'%',tx-rowW*.44,ty,m?16:20,'#788966',500);
      text(c,money(amounts.periodCents[i]),tx+rowW*.44,ty,m?21:28,'#436237',500,'right',true);c.restore();
    }
    start+=pieceWidth;
  }
  c.save();c.globalAlpha=1-fold;text(c,'分期比例合计 100%',center,H*.855,m?17:19,'#7a8e68',400,'center');c.restore();
  if(fold>0){c.save();c.globalAlpha=fold;
    text(c,'不含税 '+money(amounts.netCents)+'   +   税额 '+money(amounts.taxCents),center,H*.46,m?15:19,'#7d8d6d',400,'center');
    text(c,'示例税率 '+Math.round(inputs.taxRate*100)+'%',center,H*.505,m?13:15,'#a19372',400,'center');
    line(c,center-sheetW*.39,H*.537,center+sheetW*.39,H*.537,'#c0c9ad77',1);
    text(c,'人民币'+amounts.uppercase,center,H*.837,m?16:19,'#7f8f6f',400,'center');c.restore();}
  c.restore();
}
function drawProcess(c,W,H,ms,theme,m){
  const t=Math.min(20,Math.max(0,ms/1000)),stage=t<4?'total':t<8.2?'tax':t<14.3?'periods':'summary';
  D.backdrop(c,W,H,theme,0);inputScene(c,W,H,t,m);taxScene(c,W,H,t,m);periods(c,W,H,t,m);
  text(c,'合同金额与分期',W*.70,H*.12,m?23:27,theme.ink,500,'center');
  text(c,'计算示例 · 不表示签署或实际付款',W*.5,H*.95,m?13:12,theme.muted,400,'center');
  return {stage};
}
export { drawProcess };

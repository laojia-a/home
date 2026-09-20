import { toChineseUpper } from './reference/chinese-upper.js';
const inputs=Object.freeze({unitPrice:5300,cases:20,taxRate:.06,ratios:[40,30,30]});
function calculate(data){
  const grossCents=Math.round(data.unitPrice*data.cases*100);
  const netCents=Math.round(grossCents/(1+data.taxRate));
  const taxCents=grossCents-netCents;
  const ratioSum=data.ratios.reduce((a,b)=>a+b,0);
  const periodCents=data.ratios.map(r=>Math.round(grossCents*r/ratioSum));
  return {grossCents,netCents,taxCents,periodCents,ratioSum,uppercase:toChineseUpper(grossCents/100)};
}
const amounts=calculate(inputs);
const money=cents=>'¥'+(cents/100).toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:2});
export { inputs,amounts,calculate,money };

// NCI CTCAE v6.0, Nausea, PDF printed page 69; verified against the CTH v6 record.
const source='https://dctd.cancer.gov/research/ctep-trials/for-sites/adverse-events/ctcae-v6.pdf';
function parseConditions(raw){
  if(raw.trim()==='-')return {available:false,operator:null,alternatives:[]};
  const alternatives=raw.split(';').map(s=>s.trim()).filter(Boolean);
  return {available:true,operator:alternatives.length>1?'or':null,alternatives};
}
const grade2Raw='Oral intake decreased without significant weight loss, dehydration or malnutrition; IV intervention indicated';
const term=Object.freeze({
  name:'恶心',english:'Nausea',version:'CTCAE v6.0',source,
  grades:[
    {grade:1,available:true,summary:['食欲下降','进食习惯未改变']},
    {grade:2,...parseConditions(grade2Raw),summary:['进食量减少，无明显体重下降，','且无脱水或营养不良','或：需静脉干预']},
    {grade:3,available:true,summary:['经口摄入热量或液体不足；','或需管饲、全肠外营养或住院']},
    {grade:4,...parseConditions('-'),summary:[]},
    {grade:5,...parseConditions('-'),summary:[]}
  ],
  grade2Raw,
  translationStatus:'animation-paraphrase-not-official-translation',
  assignedPatientGrade:null
});
export { term, parseConditions };

import { D } from "../../shared/draw.js";
 const {clamp,ease,smooth,phase,spring,alpha,text,rr,line,ellipse,group,grad,path,trace,page,shadow,paperLines,pin,heading,annotation,cross}=D;
 function contract(c,W,H,p,t,th,m){
  heading(c,W,H,'合同追踪','展开文档 / 对照条款 / 留下标记',th,m);
  const cx=W*.49,cy=m?H*.48:H*.50,pw=m?258:248,ph=m?342:293;
  const slide=spring(p,.025,.25),tilt=(-.1+.085*slide),stampPhase=phase(p,.42,.69);
  const hit=Math.sin(clamp((p-.555)*12)*Math.PI)*Math.exp(-Math.max(0,p-.56)*62)*3;
  shadow(c,cx,cy+ph*.54,pw*.5,.1);
  page(c,cx+12,cy+9,pw,ph,{fill:'#d9d4bb',angle:.03});
  group(c,cx-(1-slide)*W*.6,cy+hit,tilt,()=>{
   page(c,0,0,pw,ph,{fill:'#fffaf0',shadow:.16});
   text(c,'DOCUMENT / 01',-pw/2+25,-ph/2+25,10,'#969a80',500,'left',true);
   text(c,'临床试验合同',0,-ph/2+58,m?21:20,th.ink,550,'center');
   line(c,-pw/2+24,-ph/2+79,pw/2-24,-ph/2+79,'#b1ac9166',1);
   ['研究项目','工作范围','付款节点','版本记录'].forEach((s,i)=>{
    const a=ease(phase(p,.13+i*.024,.28+i*.03));c.save();c.globalAlpha=a;
    text(c,s,-pw/2+25,-ph/2+110+i*31,12,'#7e8569');
    line(c,-pw/2+88,-ph/2+110+i*31,pw/2-25,-ph/2+110+i*31,'#b2ad955a',1);c.restore();
   });
   const k=phase(p,.32,.50);const pts=[];for(let i=0;i<=90;i++){const q=i/90;pts.push([-pw/2+29+q*82,ph/2-38-10*Math.sin(q*25)*(1-q*.65)-q*4]);}trace(c,pts,k,'#596855',1.5);
   text(c,'样张 · 不代表已签署',-pw/2+25,ph/2-16,9,'#a5a38d');
   if(p>.552){const a=ease(phase(p,.552,.59));group(c,pw*.25,ph*.26,-.2,()=>{
     c.globalAlpha=a*.87;ellipse(c,0,0,29,29,null,'#ae6650',2);ellipse(c,1,-.8,25,25,null,'#b66c5266',.7);
     text(c,'示意',0,0,17,'#9e5945',550,'center');cross(c,0,-19,2,'#af7159');cross(c,0,19,2,'#af7159');
   })}
  });
  // The stamp shadow tightens before contact, then the handle rebounds and leaves.
  if(p>.36&&p<.74){const down=ease(phase(p,.36,.55)),up=ease(phase(p,.59,.82));const z=(1-down)*115+up*160;
   const sx=cx+pw*.25+up*60,sy=cy+ph*.26-z;c.save();c.globalAlpha=1-smooth(phase(p,.62,.73));
   shadow(c,sx,cy+ph*.29,21+z*.12,(.16*(1-up)));
   group(c,sx,sy,-.13*(1-down)+.09*up,()=>{rr(c,-33,-9,66,20,5,'#a6906b','#6a6554',1);rr(c,-37,7,74,7,2,'#554d3b');path(c,'M-20 -7 L-16 -41 Q-19 -72 0 -74 Q19 -72 16 -41 L20 -7Z','#81795d',grad(c,-20,-60,20,-60,[[0,'#948965'],[.4,'#cac19c'],[1,'#8d825e']]),1);ellipse(c,-5,-65,7,3,'#e8dfb77f');});c.restore();
  }
  // Editorial margin bracket follows a single clause; never a generic floating decoration.
  if(!m){const k=ease(phase(p,.28,.43));trace(c,[[cx+pw/2+20,cy-38],[cx+pw/2+47,cy-38],[cx+pw/2+65,cy-65],[cx+pw/2+134,cy-65]],k,alpha(th.accent,.6),1);c.save();c.globalAlpha=k;text(c,'逐项对照',cx+pw/2+65,cy-88,14,th.ink);text(c,'保留版本与记录',cx+pw/2+65,cy-42,12,th.muted);c.restore();}
  annotation(c,p<.3?'文档展开':p<.55?'条款与签条依次出现':p<.82?'接触、回弹，然后留印':'动作完成，留出阅读时间',W/2,H-(m?118:100),th,m?16:13);
 }
 function tube(c,x,y,w,h,fillLevel,color,k,settle){
  const tw=w*.44,base=y+h,top=y-h*.03;
  const glass=grad(c,x-tw,0,x+tw,0,[[0,'#c5cbb970'],[.14,'#ffffffc0'],[.35,'#fbfff04a'],[.73,'#b5c4b46b'],[1,'#9dae984f']]);
  c.save();c.beginPath();c.roundRect(x-tw,top,tw*2,h,[0,0,tw,tw]);c.fillStyle=glass;c.fill();c.strokeStyle='#96a78b9c';c.lineWidth=1.2;c.stroke();c.clip();
  const level=base-15-(h-32)*fillLevel*k;
  const sway=Math.sin(settle*16)*Math.exp(-settle*5)*6;
  c.beginPath();c.moveTo(x-tw-1,level+sway);c.quadraticCurveTo(x,level-5,x+tw+1,level-sway);c.lineTo(x+tw+1,base+4);c.lineTo(x-tw-1,base+4);c.closePath();c.fillStyle=grad(c,x-tw,0,x+tw,0,[[0,alpha(color,.58)],[.5,alpha(color,.25)],[1,alpha(color,.55)]]);c.fill();
  c.beginPath();c.moveTo(x-tw,level+sway);c.quadraticCurveTo(x,level-5,x+tw,level-sway);c.strokeStyle=alpha(color,.58);c.lineWidth=1.6;c.stroke();
  for(let i=0;i<6;i++)line(c,x+tw-9,top+23+i*20,x+tw-3,top+23+i*20,'#6c806151',.8);
  line(c,x-tw+7,top+12,x-tw+7,base-25,'#ffffffe6',2.4);c.restore();
  rr(c,x-tw-3,top-13,tw*2+6,18,4,grad(c,x-tw,0,x+tw,0,[[0,'#b2bd94'],[.45,'#d9ddbb'],[1,'#899a71']]),'#899b6c',.8);
  for(let i=0;i<8;i++)line(c,x-tw+1+i*(tw*2-2)/8,top-9,x-tw+1+i*(tw*2-2)/8,top+1,'#f6f8df59',.8);
 }
 function inventory(c,W,H,p,t,th,m){
  heading(c,W,H,'物资盘点','逐项出现，数量与标识一一对应',th,m);
  const vals=[.82,.64,.47,.91,.16],names=['采血管','离心管','试剂盒','耗材包','冻存管'];
  const start=W*(m?.13:.25),span=W*(m?.74:.50),gap=span/4,ty=m?H*.35:H*.35,h=m?200:166;
  shadow(c,W/2,ty+h+43,span*.6,.12);
  // Back rail is drawn first. Tubes settle into front apertures afterwards.
  rr(c,start-gap*.45,ty+h*.63,span+gap*.9,23,4,'#c7cbae','#a1ae8b',1);
  for(let i=0;i<5;i++){const down=spring(p,.055+i*.045,.22+i*.045),settle=Math.max(0,p-(.22+i*.045))*10;
   tube(c,start+i*gap,ty-(1-down)*170,gap*(m?.53:.42),h,vals[i],i===4?'#bd886b':'#87a586',ease(phase(p,.11+i*.035,.36+i*.035)),settle);
  }
  rr(c,start-gap*.45,ty+h-21,span+gap*.9,40,5,grad(c,0,ty+h-21,0,ty+h+19,[[0,'#d9ddbb'],[.45,'#b4bf95'],[1,'#a4b18b']]),'#879976',1);
  for(let i=0;i<5;i++)ellipse(c,start+i*gap,ty+h-12,gap*.18,3,'#596e493a');
  line(c,start-gap*.42,ty+h-16,start+span+gap*.41,ty+h-16,'#edf0d1b0',1.5);
  for(let i=0;i<5;i++){let q=ease(phase(p,.25+i*.04,.42+i*.04));c.save();c.globalAlpha=q;text(c,names[i],start+i*gap,ty+h+49,m?16:13,th.ink,400,'center');text(c,Math.round(vals[i]*100*q)+'%',start+i*gap,ty+h+82,m?22:24,i===4?'#a46c52':th.ink,500,'center',true);c.restore();}
  const sweep=phase(p,.48,.75),sx=start-gap*.4+(span+gap*.8)*sweep;
  if(sweep>0&&sweep<1){line(c,sx,ty-35,sx,ty+h+21,'#718f6a50',2);ellipse(c,sx,ty-38,3,3,'#94aa72')}
  annotation(c,'示例库存比例 · 不代表实际库存或采购状态',W/2,H-(m?118:98),th,m?15:12);
 }
 function sample(c,W,H,p,t,th,m){
  heading(c,W,H,'BE 例数估算','参数进入，点阵按顺序排列',th,m);
  const n=Math.round(48*ease(phase(p,.10,.56))),cx=W/2,cy=m?H*.33:H*.39;
  text(c,'n = '+String(n).padStart(2,'0'),cx,cy,m?68:88,th.ink,500,'center',true);
  const cols=12,rows=4,gap=m?29:26,bx=cx-(cols-1)*gap/2,by=cy+(m?70:80);
  for(let i=0;i<48;i++){const col=i%cols,row=Math.floor(i/cols),a=phase(p,.12+i*.007,.23+i*.007),kk=spring(p,.12+i*.007,.23+i*.007);c.save();c.globalAlpha=.16+.84*ease(a);group(c,bx+col*gap,by+row*gap+(1-kk)*14,0,()=>{ellipse(c,0,-4,3.4,3.4,i<n?th.accent:'#9a9a89');rr(c,-4.5,2,9,10,3,i<n?th.accent:'#9a9a89')});c.restore();}
  const labelY=by+rows*gap+36;
  if(!m){['CV','比值','脱落率'].forEach((s,i)=>{const xx=cx-210+i*210;rr(c,xx-70,labelY-15,140,32,3,'#f6f2e044',th.line,1);text(c,s,xx,labelY,14,th.muted,400,'center')})}
  else{text(c,'CV    /    比值    /    脱落率',cx,labelY,16,th.muted,400,'center')}
  annotation(c,'48 是沿用参考的演示数值，不是例数建议',W/2,H-(m?116:94),th,m?15:12);
 }
 function grades(c,W,H,p,t,th,m){
  heading(c,W,H,'不良事件分级','先查具体条目，再核对等级条件',th,m);
  const cardW=m?76:100,gap=m?15:21,total=cardW*5+gap*4,bx=(W-total)/2,yy=m?H*.43:H*.46;
  for(let i=0;i<5;i++){const k=spring(p,.055+i*.04,.25+i*.04);const lift=(i===1?ease(phase(p,.42,.58)):0);group(c,bx+i*(cardW+gap)+cardW/2,yy+(1-k)*70-lift*18,0,()=>{
    c.globalAlpha=.15+.85*ease(phase(p,.055+i*.04,.23+i*.04));c.save();c.shadowColor='#5d69321b';c.shadowBlur=lift?20:6;c.shadowOffsetY=lift?12:4;rr(c,-cardW/2,-60,cardW,125,5,i===1?'#d2ddbb':'#f4efdf');c.restore();rr(c,-cardW/2,-60,cardW,125,5,null,i===1?'#7b98626e':'#aea88755',1);text(c,'G'+(i+1),0,-13,m?30:38,i===1?'#425d35':th.ink,500,'center',true);line(c,-cardW/2+13,18,cardW/2-13,18,'#969b6a3b');text(c,['轻','中','重','危重','死亡'][i],0,42,m?16:15,th.muted,400,'center');
   });}
  const k=ease(phase(p,.55,.68));c.save();c.globalAlpha=k;const x=bx+(cardW+gap)+cardW/2;trace(c,[[x,yy+62],[x,yy+101],[W/2,yy+101]],k,alpha(th.accent,.65),1);text(c,'逐条核对',W/2,yy+130,m?18:16,th.ink,400,'center');c.restore();
  annotation(c,'参考条目的表现演示 · 不给出个体分级结论',W/2,H-(m?117:94),th,m?15:12);
 }
 function terms(c,W,H,p,t,th,m){
  heading(c,W,H,'术语检索','输入一个词，展开它的层级',th,m);
  const bw=m?410:500,bx=(W-bw)/2,by=m?H*.28:H*.29,word='headache',typed=Math.min(word.length,Math.floor(phase(p,.09,.37)*(word.length+1)));
  rr(c,bx,by,bw,60,5,'#fcf8e8','#a0ad86',1.2);ellipse(c,bx+27,by+29,8,8,null,'#8c9c73',1.6);line(c,bx+33,by+35,bx+40,by+42,'#8c9c73',1.6);
  text(c,word.slice(0,typed),bx+61,by+30,m?24:25,th.ink,500,'left',true);
  if(p<.39&&Math.floor(t*3)%2===0){const tx=bx+61+typed*15;line(c,tx,by+18,tx,by+44,th.accent,1.5)}
  const sy=by+105,k=ease(phase(p,.42,.56));c.save();c.globalAlpha=k;group(c,W/2,sy+(1-k)*13,0,()=>{
   text(c,'头痛',0,18,m?40:42,th.ink,400,'center');text(c,'PREFERRED TERM',0,54,12,th.muted,400,'center',true);
   line(c,0,78,0,109,alpha(th.accent,.55),1);ellipse(c,0,112,2.5,2.5,th.accent);
   rr(c,-bw*.34,132,bw*.68,64,4,'#f6f0df',th.line,1);text(c,'SOC 分类',0,154,m?18:15,th.ink,500,'center');text(c,'查阅并核对来源',0,178,m?15:12,th.muted,400,'center');
  });c.restore();
  annotation(c,'本地排版示例，不连接实时术语数据库',W/2,H-(m?117:92),th,m?15:12);
 }
 function toastPiece(c){
  path(c,'M-43 28 L-45 -9 Q-63 -53 -16 -58 Q23 -75 53 -43 Q68 -22 46 -7 L44 31Z','#b28d55','#d5ad70',2);
  path(c,'M-34 20 L-36 -8 Q-46 -40 -11 -44 Q21 -54 41 -34 Q52 -20 33 -7 L34 21Z',null,'#eed29b');
  for(let i=0;i<14;i++)ellipse(c,-27+(i*19)%57,-29+(i*29)%45,1.4+(i%2)*.4,1,'#ae7d384f');
 }
 function breakfast(c,W,H,p,t,th,m){
  heading(c,W,H,'餐谱计算','餐盘、食材与构成比例',th,m);
  const cx=m?W*.5:W*.39,cy=m?H*.405:H*.49,r=m?131:121;
  shadow(c,cx,cy+18,r*1.04,.14);ellipse(c,cx,cy,r,r,'#fcf8ed','#b8b7a2',1);ellipse(c,cx,cy,r-15,r-15,null,'#dad9c23f',6);ellipse(c,cx,cy,r-34,r-34,'#f4f1e4','#d3d2bc',1);
  const food=(i,x,y,ang,fn)=>{const k=spring(p,.07+i*.08,.27+i*.08);c.save();c.globalAlpha=ease(phase(p,.07+i*.08,.17+i*.08));group(c,cx+x,cy+y-(1-k)*120,ang,fn);c.restore()};
  food(0,-24,-31,-.18,()=>toastPiece(c));
  food(1,38,18,.3,()=>{path(c,'M-45 -7 C-48 -39 -19 -32 1 -38 C40 -43 44 -2 34 22 C22 44 -7 26 -29 30 C-50 29 -48 6 -45 -7Z','#d9d5bf','#fffdf3',1);ellipse(c,-1,-1,25,23,grad(c,-20,-21,19,22,[[0,'#f8d16f'],[.65,'#edb542'],[1,'#d7a338']]));ellipse(c,-8,-9,7,3,'#fff2bc91');});
  food(2,-49,53,.45,()=>{for(let j=0;j<3;j++)ellipse(c,j*15,-j*5,13,18,'#afbd72','#859950',1);line(c,-3,10,27,-12,'#e2e4a4',1.2)});
  const fx=cx-r-24;line(c,fx,cy-72,fx,cy+71,'#889582',3);for(let i=0;i<3;i++)line(c,fx-7+i*7,cy-76,fx-7+i*7,cy-44,'#889582',2);path(c,`M${cx+r+29} ${cy-73} Q${cx+r+10} ${cy-30} ${cx+r+25} ${cy-14} L${cx+r+28} ${cy+70}`,'#919987',null,3);
  // Thin steam moves independently after the food has settled.
  if(p>.34)for(let i=0;i<3;i++){const q=(t*.20+i*.3)%1;c.save();c.globalAlpha=Math.sin(q*Math.PI)*.12;path(c,`M${cx-20+i*17} ${cy-55-q*34} Q${cx-35+i*17} ${cy-85-q*34} ${cx-14+i*17} ${cy-107-q*34}`,'#7c8868',null,1.5);c.restore()}
  const xx=m?W*.5:W*.71,yy=m?cy+r+71:cy-32;const k=ease(phase(p,.28,.59));text(c,Math.round(986*k),xx,yy,m?48:65,th.ink,500,'center',true);text(c,'kcal · 演示值',xx,yy+40,m?16:14,th.muted,400,'center');
  if(p>.50){c.save();c.globalAlpha=ease(phase(p,.50,.66));text(c,'脂肪供能比 ≈ 52%',xx,yy+74,m?17:15,th.ink,400,'center');c.restore()}
  annotation(c,'沿用参考数值，仅用于动画示意',W/2,H-(m?114:92),th,m?15:12);
 }

export { contract, inventory, sample, grades, terms, breakfast };

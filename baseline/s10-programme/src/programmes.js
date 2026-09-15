/* Programme subjects, order and three channel languages are retained from s10-tv.
   New physical motion and four preview treatments are local design illustrations.
   No frame is a live product session, research output or a clinical recommendation. */
const PROGRAMMES = (()=>{
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
 const COURSES=[
  {title:'BE 试验设计入门',pts:['2×2 交叉设计与洗脱期','随机化与盲法实施','等效界值 80.00%–125.00%']},
  {title:'GCP 法规更新解读',pts:['法规条文与适用范围','研究者职责清单','核查常见缺陷']},
  {title:'数据核查实战',pts:['SDV 抽样策略','质疑处理与记录','数据库锁定流程']}
 ];
 function lecture(c,W,H,p,t,th,m,idx){
  const co=COURSES[idx],sx=W*(m?.07:.12),sy=m?H*.16:H*.17,sw=W*(m?.86:.76),sh=m?H*.50:H*.53;
  // Matte projection surface with chalk registration and physical lower ledge.
  rr(c,sx+5,sy+8,sw,sh,2,'#071d1266');rr(c,sx,sy,sw,sh,2,'#204834','#b3cd9166',1);
  rr(c,sx,sy,sw,m?60:55,2,'#c4d89e');
  text(c,'第 '+(idx+10)+' 讲',sx+23,sy+(m?29:27),m?16:13,'#526b42',500);
  text(c,co.title,sx+23,sy+(m?102:100),m?30:33,'#eff3d9',500);
  if(!m)text(c,'JCLAW ACADEMY',sx+sw-22,sy+28,12,'#526b42',500,'right',true);
  const rowY=sy+(m?167:148),rh=m?69:54,bfont=m?22:22;
  co.pts.forEach((s,i)=>{const a=ease(phase(p,.18+i*.20,.28+i*.20));if(a<=0)return;c.save();c.globalAlpha=a;const y=rowY+i*rh+(1-a)*8;
   ellipse(c,sx+31,y,3.4,3.4,'#b7d28d');text(c,s,sx+52,y,bfont,'#e1ebd4');
   if(i===Math.min(2,Math.floor((p-.18)/.20))){const k=phase(p,.25+i*.20,.39+i*.20);const len=Math.min(sw-95,s.length*bfont*.87);trace(c,[[sx+52,y+16],[sx+52+len*.48,y+18],[sx+52+len,y+16]],k,'#9aba7277',1.4)}c.restore();});
  const position=clamp((p-.18)/.20,0,2),ri=Math.floor(position),local=phase(position,ri,ri+.3),next=Math.min(2,ri+1);
  const ty=rowY+rh*(ri+smooth(local)*.0)+18; // current bullet owns the pointer, no unrelated bouncing dot.
  if(p>.18){const xx=sx+45+Math.min(sw-80,co.pts[Math.min(2,Math.floor(position))].length*bfont*.68)*(.68+.20*Math.sin(t*.9));c.save();c.shadowColor='#c3e79e';c.shadowBlur=8;ellipse(c,xx,ty,2.5,2.5,'#dcf2ae');c.restore();}
  const by=sy+sh+10;line(c,sx-7,by,sx+sw+7,by,'#a2b99148',4);line(c,sx-7,by+3,sx+sw+7,by+3,'#08211777',2);
  const progY=sy+sh-12;rr(c,sx+14,progY,sw-28,2,1,'#bbd39526');rr(c,sx+14,progY,(sw-28)*p,2,1,'#b1ce86');
  // The moving strip is a programme caption, never the user's training progress.
  const stripY=m?H*.755:H*.79,txt='临研知视  /  '+co.title+'   ·   本地授课形式示意   ·   点击进入课程平台   /   ';
  rr(c,0,stripY,W,m?48:36,0,'#bfd794');c.save();c.beginPath();c.rect(0,stripY,W,m?48:36);c.clip();c.font=`500 ${m?20:17}px ${D.FONT}`;const tw=c.measureText(txt).width,off=(t*(m?20:26))%tw;for(let x=-off;x<W;x+=tw)text(c,txt,x,stripY+(m?25:19),m?20:17,'#203e25',500);c.restore();
 }
 function pk(v,ka,ke){return Math.exp(-ke*v)-Math.exp(-ka*v)}
 function workbench(c,W,H,p,t,th,m,idx){
  const titles=['浓度曲线，逐点展开','曲线之下，观察暴露','从图形到参数位置'];
  heading(c,W,H,titles[idx],'合成曲线演示 · 不进行等效性判定',th,m);
  const gx=W*(m?.13:.105),gy=m?H*.52:H*.68,gw=W*(m?.74:.56),gh=m?H*.245:H*.35;
  const seq=idx===0?phase(p,.08,.68):phase(p,.03,.30);const prog=idx===0?smooth(seq):ease(seq);
  c.save();c.lineWidth=1;
  for(let i=0;i<=6;i++){const x=gx+gw*i/6;line(c,x,gy-gh-12,x,gy,th.line,.8);text(c,i*4,x,gy+22,m?13:11,th.muted,400,'center',true)}
  for(let i=0;i<=4;i++){const y=gy-gh*i/4;line(c,gx,y,gx+gw,y,th.line,.8);text(c,(i*.25).toFixed(2),gx-12,y,m?12:10,th.muted,400,'right',true)}
  text(c,'相对浓度（示意）',gx,gy-gh-32,m?16:12,th.muted);text(c,'示例时间',gx+gw,gy+45,m?15:11,th.muted,400,'right');
  const sets=[{ka:.3,ke:.045,c:'#ed987e',name:'T'},{ka:.24,ke:.05,c:'#d6dcb7',name:'R'}];
  const M=pk(Math.log(.3/.045)/(.3-.045),.3,.045),sx=v=>gx+v/24*gw,sy=v=>gy-v/M*gh;
  const auc=idx===1?ease(phase(p,.27,.55)):(idx===2?.28:0);
  sets.forEach((s,j)=>{const local=clamp(prog-(j===1?.014:0));c.beginPath();c.moveTo(gx,gy);for(let i=0;i<=240*local;i++){const v=i*.1;c.lineTo(sx(v),sy(pk(v,s.ka,s.ke)))}
   if(j===0&&auc>0){c.save();c.lineTo(sx(24*local),gy);c.closePath();c.fillStyle=grad(c,0,gy-gh,0,gy,[[0,alpha(s.c,.27*auc)],[1,alpha(s.c,.025*auc)]]);c.fill();c.restore();}
   const pts=[];for(let i=0;i<=Math.floor(240*local);i++){const v=i*.1;pts.push([sx(v),sy(pk(v,s.ka,s.ke))])}pts.push([sx(24*local),sy(pk(24*local,s.ka,s.ke))]);trace(c,pts,1,s.c,2.6);
   const tip=24*local,px=sx(tip),py=sy(pk(tip,s.ka,s.ke));if(local<.999){c.save();c.shadowColor=s.c;c.shadowBlur=8;ellipse(c,px,py,3,3,s.c);c.restore();}text(c,s.name,px+12,py+(j?17:-10),m?17:14,s.c,600,'left',true);
   [1,2,4,6,8,12,16,24].forEach(v=>{const on=clamp((tip-v)*.6);if(on>0)ellipse(c,sx(v),sy(pk(v,s.ka,s.ke)),2.6,2.6,th.bg,alpha(s.c,on),1.2)});
  });
  const peakT=Math.log(.3/.045)/(.3-.045),peakX=sx(peakT),peakY=sy(pk(peakT,.3,.045));
  if(prog>peakT/24){const k=ease(phase(prog,peakT/24,peakT/24+.11));c.globalAlpha=k;line(c,peakX,peakY,peakX,gy,'#c9d7c24d',1,[4,5]);line(c,gx,peakY,peakX,peakY,'#c9d7c24d',1,[4,5]);ellipse(c,peakX,peakY,6,6,null,'#eda3869c',1);text(c,'Cmax',peakX+12,peakY-18,m?17:13,'#e4b298',400,'left',true);text(c,'Tmax',peakX,gy+45,m?15:12,'#e2b096',400,'center',true);c.globalAlpha=1;}
  c.restore();
  // Same information role as the reference's right panel, without fabricated study results.
  const px=m?W*.13:W*.74,py=m?H*.64:H*.33,pw=m?W*.74:W*.19;
  const labels=[['输入','合成点位'],['绘图','T / R 轨迹'],['标记',idx===1?'AUC 区域':'Cmax / Tmax']];
  if(m){labels.forEach(([a,b],i)=>{const k=ease(phase(p,.15+i*.17,.30+i*.17));c.save();c.globalAlpha=.25+.75*k;line(c,px,py+i*44,px+pw,py+i*44,th.line,.8);text(c,a,px,py+i*44+22,16,th.muted);text(c,b,px+pw,py+i*44+22,18,th.ink,400,'right');c.restore()})}
  else{line(c,px-16,py-14,px-16,py+173,'#d8bb9c33',1);text(c,'WORKBENCH',px,py-15,11,th.muted,500,'left',true);labels.forEach(([a,b],i)=>{const k=ease(phase(p,.15+i*.17,.30+i*.17));c.save();c.globalAlpha=.25+.75*k;text(c,a,px,py+24+i*54,11,th.muted);text(c,b,px,py+47+i*54,17,th.ink,400);c.restore()})}
 }
 function previewFrame(c,W,H,th,m,title,sub){
  // Test-card colour cues remain as a thin edge; the whole channel is now a preview.
  const colors=['#b5baa7','#ccbb88','#8dbabd','#a9bd95','#b398b0','#bd9688','#8396af'];colors.forEach((s,i)=>rr(c,i*W/7,0,W/7+.2,5,0,s));
  heading(c,W,H,title,sub,th,m);
 }
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
 function planning(c,W,H,p,t,th,m){
  previewFrame(c,W,H,th,m,'BE Solo · 项目预告','把节点放回清楚的位置');
  const bw=m?428:650,bh=m?330:270,bx=(W-bw)/2,by=m?H*.28:H*.31;
  rr(c,bx+5,by+9,bw,bh,4,'#71839720');rr(c,bx,by,bw,bh,4,'#f3f2e8','#a9b3b955',1);
  const cw=bw/3;
  ['项目','节点','待办'].forEach((s,i)=>{if(i)line(c,bx+i*cw,by+42,bx+i*cw,by+bh-20,'#a1aebb40',1);text(c,s,bx+i*cw+cw/2,by+25,m?19:16,th.ink,500,'center');});
  for(let i=0;i<5;i++){const col=i%3,row=Math.floor(i/3),k=spring(p,.03+i*.045,.22+i*.045);const destX=bx+cw*col+18,destY=by+62+row*(m?116:93),h=m?89:74;
   group(c,destX,destY-(1-k)*90,(i%2?1:-1)*.016,()=>{const color=['#dde4d6','#e6dec6','#dfe5ed'][col];c.save();c.shadowColor='#35434d1a';c.shadowBlur=5;c.shadowOffsetY=4;rr(c,0,0,cw-36,h,1,color);c.restore();pin(c,(cw-36)/2,6,'#7f91a0');paperLines(c,12,31,cw-58,2,17,'#637f8b55');});}
  const q=smooth(phase(p,.48,.69));const xx=bx+cw*.5+cw*q,yy=by+bh-19;line(c,bx+cw*.5,yy,bx+cw*2.5,yy,'#7f96a13b',2);ellipse(c,xx,yy,4,4,th.accent);
  annotation(c,'仅演示节点排布，不读取项目与待办数据',W/2,H-(m?118:95),th,m?15:12);
 }
 function evidence(c,W,H,p,t,th,m){
  previewFrame(c,W,H,th,m,'BE Oracle · 证据预告','从问题出发，回到出处');
  const xs=m?[W*.20,W*.50,W*.79]:[W*.28,W*.49,W*.71],ys=m?[H*.35,H*.49,H*.36]:[H*.45,H*.57,H*.44];
  for(let i=0;i<2;i++){const k=ease(phase(p,.18+i*.16,.37+i*.16));trace(c,[[xs[i],ys[i]],[xs[i]+(xs[i+1]-xs[i])*.48,ys[i]],[xs[i]+(xs[i+1]-xs[i])*.52,ys[i+1]],[xs[i+1],ys[i+1]]],k,'#7c98776a',1.4)}
  ['问题','资料','出处'].forEach((s,i)=>{const a=ease(phase(p,.045+i*.08,.19+i*.08));c.save();c.globalAlpha=a;group(c,xs[i],ys[i]+(1-a)*28,(i-1)*.025,()=>{const w=m?115:137,h=m?154:155;page(c,0,0,w,h,{fill:i===2?'#f9f4dc':'#f4f5e9',shadow:.10});text(c,s,0,-h/2+30,m?21:20,th.ink,500,'center');paperLines(c,-w/2+16,-h/2+65,w-28,3,20,'#7d927b4f');pin(c,0,-h/2+5,'#92a47b')});c.restore()});
  const k=smooth(phase(p,.39,.7)),lx=xs[1]+(xs[2]-xs[1])*k+20,ly=ys[1]+(ys[2]-ys[1])*k+39+Math.sin(k*Math.PI)*27;
  if(p>.34){const a=ease(phase(p,.34,.43));c.save();c.globalAlpha=a;group(c,lx,ly,-.44,()=>{
    shadow(c,10,14,52,.13);ellipse(c,0,0,42,42,'#daeac464','#7a8c72',4);ellipse(c,0,0,37,37,null,'#e4edd380',1.5);
    path(c,'M-20 -25 Q-4 -36 13 -29','#ffffffe0',null,3);rr(c,-7,39,14,71,6,grad(c,-7,0,7,0,[[0,'#566e54'],[.5,'#8a9b6a'],[1,'#56674a']]),'#557351',1);
   });c.restore();}
  annotation(c,'检索路径示意，不生成虚构来源或结论',W/2,H-(m?118:95),th,m?15:12);
 }
 function reading(c,W,H,p,t,th,m){
  previewFrame(c,W,H,th,m,'2026 · 学习资料','让每一份资料都有去处');
  const cx=W/2,cy=m?H*.49:H*.54,bw=m?369:430,bh=m?238:214;
  shadow(c,cx,cy+bh*.52,bw*.54,.12);
  group(c,cx,cy,0,()=>{
   path(c,`M${-bw/2-5} ${-bh/2+13} Q${-bw/4} ${-bh/2-5} 0 ${-bh/2+18} Q${bw/4} ${-bh/2-5} ${bw/2+5} ${-bh/2+13} L${bw/2+5} ${bh/2+7} Q${bw/4} ${bh/2-5} 0 ${bh/2+12} Q${-bw/4} ${bh/2-5} ${-bw/2-5} ${bh/2+7}Z`,'#8e845b','#b8ad7b',1.2);
   for(let i=3;i>=0;i--){let off=i*3;path(c,`M${-bw/2} ${-bh/2+off} Q${-bw/4} ${-bh/2-14+off} 0 ${-bh/2+14+off} Q${bw/4} ${-bh/2-14+off} ${bw/2} ${-bh/2+off} L${bw/2} ${bh/2+off} Q${bw/4} ${bh/2-11+off} 0 ${bh/2+11+off} Q${-bw/4} ${bh/2-11+off} ${-bw/2} ${bh/2+off}Z`,'#c5bd9549','#faf2d9',1)}
   line(c,0,-bh/2+17,0,bh/2+10,'#afa2725f',1.2);for(let side of [-1,1]){text(c,side<0?'学习目录':'阅读笔记',side*bw*.25,-bh*.26,17,th.ink,500,'center');paperLines(c,side<0?-bw/2+24:21,-bh*.08,bw*.34,5,22,'#b1a5746a')}
   const q=phase(p,.16,.73),theta=q*Math.PI,curl=Math.sin(theta);if(q>0&&q<1){
    const endX=bw*.49*Math.cos(theta),controlX=endX+curl*70;
    path(c,`M0 ${-bh/2+15} Q${controlX*.45} ${-bh/2-25-curl*64} ${endX} ${-bh/2-curl*29} L${endX} ${bh/2-curl*19} Q${controlX*.48} ${bh/2-curl*46} 0 ${bh/2+9}Z`,'#c6bb9457',grad(c,Math.min(0,endX)-1,0,Math.max(0,endX)+1,0,[[0,'#e5d9b3'],[.5,'#fff8e4'],[1,'#ece2c8']]),1);
    c.save();c.globalAlpha=curl*.18;line(c,3,-bh/2+17,3,bh/2+9,'#625335',7);c.restore();
   }
   // Bookmarks lag the page turn rather than floating as a single object.
   ['GCP','BE','Ⅰ期'].forEach((s,i)=>{const lag=Math.sin(t*1.2-i*.4)*Math.exp(-Math.abs(q-.9)*3)*2;group(c,bw*.20+i*37,-bh/2-12+lag,0,()=>{rr(c,-15,-16,30,43,3,['#9da66e','#c19467','#899e98'][i]);text(c,s,0,0,i===0?9:11,'#fbf6e8',500,'center',true)})});
  });
  annotation(c,'资料预告 · 未接入时可从菜单填写真实地址',W/2,H-(m?118:95),th,m?15:12);
 }
 const wrap=(draw,seconds,label)=>({draw,seconds,label});
 return {
  1:[wrap(contract,10,'合同追踪'),wrap(inventory,10.5,'物资盘点'),wrap(sample,10,'例数估算'),wrap(grades,10,'不良事件分级'),wrap(terms,10,'术语检索'),wrap(breakfast,11,'餐谱计算')],
  2:COURSES.map((_,i)=>wrap((c,W,H,p,t,th,m)=>lecture(c,W,H,p,t,th,m,i),12,COURSES[i].title)),
  3:[0,1,2].map(i=>wrap((c,W,H,p,t,th,m)=>workbench(c,W,H,p,t,th,m,i),12,['T / R 轨迹','AUC 区域','参数标记'][i])),
  4:[wrap(documents,12,'文档预告')],5:[wrap(planning,12,'项目预告')],6:[wrap(evidence,12,'证据预告')],7:[wrap(reading,13,'学习资料预告')]
 };
})();

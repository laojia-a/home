import { D } from "../../shared/draw.js";
 const {clamp,ease,smooth,phase,spring,alpha,text,rr,line,ellipse,group,grad,path,trace,page,shadow,paperLines,pin,heading,annotation,cross}=D;
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

export { workbench };

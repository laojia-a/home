import { D } from "../../shared/draw.js";
 const {clamp,ease,smooth,phase,spring,alpha,text,rr,line,ellipse,group,grad,path,trace,page,shadow,paperLines,pin,heading,annotation,cross}=D;
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

export { lecture, COURSES };

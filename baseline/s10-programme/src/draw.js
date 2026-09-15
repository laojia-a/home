/* Small Canvas drawing primitives. Coordinates are independent of device pixels.
   All animations are driven by the single programme clock in runtime.js. */
const D = (()=>{
 const FONT='"PingFang SC","Microsoft YaHei","Noto Sans CJK SC",sans-serif';
 const MONO='"SFMono-Regular",Consolas,"Courier New",monospace';
 const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
 const ease=v=>1-Math.pow(1-clamp(v),3);
 const smooth=v=>{v=clamp(v);return v*v*(3-2*v)};
 const phase=(t,a,b)=>clamp((t-a)/(b-a));
 const spring=(t,a,b)=>{const v=phase(t,a,b);return v>=1?1:1-Math.exp(-7*v)*Math.cos(11*v)};
 function alpha(hex,a){let h=hex.replace('#','');if(h.length===3)h=[...h].map(c=>c+c).join('');return `rgba(${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)},${clamp(a)})`}
 function text(c,s,x,y,size=18,color='#334037',weight=400,align='left',mono=false){c.save();c.font=`${weight} ${size}px ${mono?MONO:FONT}`;c.textAlign=align;c.textBaseline='middle';c.fillStyle=color;c.fillText(String(s),x,y);c.restore()}
 function rr(c,x,y,w,h,r=6,fill,stroke,lw=1){if(w<=0||h<=0)return;c.beginPath();c.roundRect(x,y,w,h,r);if(fill){c.fillStyle=fill;c.fill()}if(stroke){c.strokeStyle=stroke;c.lineWidth=lw;c.stroke()}}
 function line(c,x1,y1,x2,y2,color='#607b63',lw=1,dash=[]){c.save();c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.strokeStyle=color;c.lineWidth=lw;c.lineCap='round';c.setLineDash(dash);c.stroke();c.restore()}
 function ellipse(c,x,y,rx,ry,fill,stroke,lw=1){c.beginPath();c.ellipse(x,y,Math.max(.01,rx),Math.max(.01,ry),0,0,Math.PI*2);if(fill){c.fillStyle=fill;c.fill()}if(stroke){c.strokeStyle=stroke;c.lineWidth=lw;c.stroke()}}
 function group(c,x,y,angle,fn,sc=1){c.save();c.translate(x,y);c.rotate(angle||0);c.scale(sc,sc);fn();c.restore()}
 function grad(c,x1,y1,x2,y2,stops){const g=c.createLinearGradient(x1,y1,x2,y2);stops.forEach(([p,v])=>g.addColorStop(p,v));return g}
 function path(c,d,stroke,fill,lw=2){const p=new Path2D(d);if(fill){c.fillStyle=fill;c.fill(p)}if(stroke){c.strokeStyle=stroke;c.lineWidth=lw;c.lineJoin='round';c.lineCap='round';c.stroke(p)}}
 function trace(c,points,k,color='#4d7858',lw=2){if(points.length<2||k<=0)return;const lengths=[0];for(let i=1;i<points.length;i++)lengths.push(lengths[i-1]+Math.hypot(points[i][0]-points[i-1][0],points[i][1]-points[i-1][1]));const end=lengths.at(-1)*clamp(k);c.save();c.beginPath();c.moveTo(...points[0]);for(let i=1;i<points.length;i++){if(lengths[i]<=end)c.lineTo(...points[i]);else{const r=(end-lengths[i-1])/(lengths[i]-lengths[i-1]);c.lineTo(points[i-1][0]+r*(points[i][0]-points[i-1][0]),points[i-1][1]+r*(points[i][1]-points[i-1][1]));break}}c.strokeStyle=color;c.lineWidth=lw;c.lineCap='round';c.lineJoin='round';c.stroke();c.restore()}
 function page(c,x,y,w,h,{fill='#fff9e9',angle=0,shadow=.14}={}){group(c,x,y,angle,()=>{c.save();c.shadowColor=`rgba(64,55,35,${shadow})`;c.shadowBlur=16;c.shadowOffsetY=9;rr(c,-w/2,-h/2,w,h,2,fill);c.restore();rr(c,-w/2,-h/2,w,h,2,null,'#9f987a55',.9);line(c,-w/2+4,-h/2+2,w/2-4,-h/2+2,'#ffffffa0',1.2)})}
 function shadow(c,x,y,w,opacity=.12){c.save();c.filter='blur(8px)';ellipse(c,x,y,w,9,`rgba(35,44,34,${opacity})`);c.restore()}
 function paperLines(c,x,y,w,count=5,step=17,color='#746d5540'){for(let i=0;i<count;i++)line(c,x,y+i*step,x+w*(.76+(i%3)*.08),y+i*step,color,2)}
 function pin(c,x,y,color='#7c9274',a=1){c.save();c.globalAlpha=a;c.shadowColor='#21382225';c.shadowBlur=4;c.shadowOffsetY=3;ellipse(c,x,y,5,5,color);c.restore();ellipse(c,x-1.5,y-1.5,1.2,1.2,'#fff8')}
 const THEMES={
  1:{bg:'#e9e2ce',dark:'#384b38',ink:'#364331',muted:'#7e856c',accent:'#7b8153',line:'#7c815126',light:true},
  2:{bg:'#183c2d',dark:'#0b251b',ink:'#e9efd8',muted:'#a1b699',accent:'#c4da93',line:'#b5d29325',light:false},
  3:{bg:'#152b31',dark:'#0e1f26',ink:'#e4e7df',muted:'#93a8a8',accent:'#ed977b',line:'#a9b8b920',light:false},
  4:{bg:'#ece3e2',dark:'#5c4f5b',ink:'#574755',muted:'#a08b99',accent:'#9c657e',line:'#85657526',light:true},
  5:{bg:'#e2e6eb',dark:'#414b66',ink:'#39475a',muted:'#7b8a9d',accent:'#677d9c',line:'#667e9b26',light:true},
  6:{bg:'#dce4d5',dark:'#334b3f',ink:'#324e40',muted:'#7a8c73',accent:'#708e60',line:'#60775c26',light:true},
  7:{bg:'#eee3ca',dark:'#5a543d',ink:'#534b35',muted:'#9a8c67',accent:'#a0864b',line:'#937e4726',light:true}
 };
 function backdrop(c,W,H,n,t){const th=THEMES[n];c.fillStyle=th.bg;c.fillRect(0,0,W,H);const g=c.createRadialGradient(W*.4,H*.32,0,W*.5,H*.5,W*.85);g.addColorStop(0,th.light?'#fffaf04d':'#88b8a20b');g.addColorStop(1,th.light?'#8273500b':'#020f1918');c.fillStyle=g;c.fillRect(0,0,W,H);
  c.save();c.globalAlpha=th.light?.042:.035;c.strokeStyle=th.light?'#6d7356':'#d8ecc0';c.lineWidth=.6;for(let i=0;i<80;i++){const x=(i*137.31)%W,y=(i*89.57)%H;c.beginPath();c.moveTo(x,y);c.lineTo(x+1+(i%4)*.8,y-.5);c.stroke()}c.restore();
  // Light paper crosshair, stable and low contrast; never overwhelms the content.
  for(const [x,y] of [[26,80],[W-26,80],[26,H-72],[W-26,H-72]]){line(c,x-4,y,x+4,y,th.line,.7);line(c,x,y-4,x,y+4,th.line,.7)}
 }
 function heading(c,W,H,title,sub,th,mobile){text(c,title,W/2,mobile?107:92,mobile?31:32,th.ink,500,'center');if(sub)text(c,sub,W/2,mobile?146:130,mobile?16:14,th.muted,400,'center')}
 function annotation(c,s,x,y,th,size=13){text(c,s,x,y,size,th.muted,400,'center')}
 function rail(c,W,H,p,count,index,th,mobile){const gap=7,bw=mobile?27:32,total=count*bw+(count-1)*gap,bx=(W-total)/2,by=H-(mobile?73:64);for(let i=0;i<count;i++){rr(c,bx+i*(bw+gap),by,bw,2,1,alpha(th.ink,.12));if(i===index)rr(c,bx+i*(bw+gap),by,Math.max(.1,bw*clamp(p)),2,1,alpha(th.accent,.85));}}
 function fragment(c,W,H,p,fn){c.save();const fadeIn=smooth(phase(p,0,.04)),fadeOut=1-smooth(phase(p,.95,1));c.globalAlpha=fadeIn*fadeOut;fn();c.restore()}
 function cross(c,x,y,r,color,lw=1){line(c,x-r,y,x+r,y,color,lw);line(c,x,y-r,x,y+r,color,lw)}
 return {FONT,MONO,clamp,ease,smooth,phase,spring,alpha,text,rr,line,ellipse,group,grad,path,trace,page,shadow,paperLines,pin,THEMES,backdrop,heading,annotation,rail,fragment,cross};
})();

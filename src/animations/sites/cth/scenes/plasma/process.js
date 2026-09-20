const clamp=x=>Math.min(1,Math.max(0,x));
const ease=x=>{const t=clamp(x);return t*t*(3-2*t);};
const phase=(t,a,b)=>ease((t-a)/(b-a));
const lerp=(a,b,t)=>a+(b-a)*t;
const INITIAL_PLASMA=2; // Two illustrative aliquots; not a volume or a recommendation.
const plasmaSurface=amount=>386-amount*42;
const aspirationTip=amount=>plasmaSurface(amount)+Math.min(10,amount*42*.45);
function processState(ms){
  const t=Math.min(28,Math.max(0,ms/1000));
  const a1=phase(t,8.5,10),d1=phase(t,13,14.8),a2=phase(t,17.3,18.8),d2=phase(t,21.5,23.3);
  const source=INITIAL_PLASMA-a1-a2,tip=a1-d1+a2-d2;
  const surface=plasmaSurface(source);
  const aspirationY=aspirationTip(source);
  const startY=aspirationTip(2),middleY=aspirationTip(1),endY=aspirationTip(0);
  const route=[
    [7,220,155],[7.7,300,205],[8.5,300,startY],
    [10,300,middleY],[11,300,200],[12.3,630,210],[13,639,365],
    [14.8,639,365],[15.5,630,205],[16.7,300,205],[17.3,300,middleY],
    [18.8,300,endY],[19.5,300,195],[21,790,205],[21.5,799,365],
    [23.3,799,365],[24,790,205],[25,890,110]
  ];
  let x=route[0][1],y=route[0][2];
  for(let i=0;i<route.length-1;i++){
    const [ta,xa,ya]=route[i],[tb,xb,yb]=route[i+1];
    if(t>=ta){const q=phase(t,ta,tb);x=lerp(xa,xb,q);y=lerp(ya,yb,q);}
  }
  if((t>=8.5&&t<=10)||(t>=17.3&&t<=18.8))y=aspirationY;
  const cameraKeys=[[0,500,1],[4,500,1],[5.2,325,1.19],[10.5,325,1.19],[12.8,525,1.12],[15,525,1.12],[17,325,1.19],[19.2,325,1.19],[21.3,675,1.14],[24.3,675,1.14],[26,520,1]];
  let focus=500,zoom=1;
  for(let i=0;i<cameraKeys.length-1;i++){const [ta,xa,za]=cameraKeys[i],[tb,xb,zb]=cameraKeys[i+1];if(t>=ta){const q=phase(t,ta,tb);focus=lerp(xa,xb,q);zoom=lerp(za,zb,q);}}
  const stage=t<4?'spin':t<7?'layers':t<10.7?'draw':t<15.5?'test':t<25?'backup':'finish';
  let plunger=0;
  if(t<8.5)plunger=phase(t,7.5,8);
  else if(t<=10)plunger=1-a1;
  else if(t>=13&&t<=15.5)plunger=d1*(1-phase(t,15.05,15.5));
  else if(t>15.5&&t<17.3)plunger=phase(t,16.4,16.7);
  else if(t>=17.3&&t<=18.8)plunger=1-a2;
  else if(t>=21.5&&t<=24)plunger=d2*(1-phase(t,23.6,24));
  return {t,stage,source,tip,test:d1,backup:d2,surface,pipette:{x,y,alpha:phase(t,7,7.35)*(1-phase(t,24.5,25)),plunger},uncap:phase(t,6,6.9),seal:phase(t,25,26.3),focus,zoom,sceneAlpha:phase(t,4,4.6),machineAlpha:1-phase(t,4,4.6)};
}
export { processState, INITIAL_PLASMA };

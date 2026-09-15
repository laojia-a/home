import { D } from "../shared/draw.js";
/** Canvas v1 contract. The host owns time, canvas and navigation; this instance owns drawing only. */
function defineCanvasScene({id,channelId,label,seconds,draw}) {
 if(!/^[a-z0-9.-]+$/.test(id)||typeof draw!=="function"||!Number.isFinite(seconds)||seconds<=0) throw Error('Invalid scene definition: '+id);
 function create({canvas,viewport,theme,index=0,count=1,signal}) {
  if(!canvas?.getContext) throw Error('A Canvas element is required');
  let disposed=false, view={...viewport}, colors={...theme};
  const ctx=canvas.getContext('2d',{alpha:false});
  if(!ctx) throw Error('Canvas2D unavailable');
  function render(frame) {
   if(disposed||signal?.aborted) return;
   const {width:width,height:height,dpr}=view;
   if(width<=0||height<=0) return;
   const mobile=width<600&&height>width*.92, W=mobile?540:1000, scale=width/W, H=height/scale;
   const tw=Math.round(width*dpr), th=Math.round(height*dpr);
   if(canvas.width!==tw||canvas.height!==th){canvas.width=tw;canvas.height=th;}
   ctx.setTransform(dpr*scale,0,0,dpr*scale,0,0);ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';ctx.filter='none';ctx.setLineDash([]);ctx.textBaseline='middle';
   const elapsed=Math.max(0,Math.min(seconds,Number(frame.elapsedMs)/1000||0)),progress=D.clamp(elapsed/seconds);
   ctx.save();
   try {
    D.backdrop(ctx,W,H,colors,elapsed);
    D.fragment(ctx,W,H,progress,()=>draw(ctx,W,H,progress,elapsed,colors,mobile));
    D.rail(ctx,W,H,progress,count,index,colors,mobile);
   } finally {ctx.restore();}
  }
  function resize(next){
   if(disposed)return;
   if(![next.width,next.height,next.dpr].every(Number.isFinite)||next.width<0||next.height<0||next.dpr<=0) throw Error('Invalid viewport');
   view={...next};
  }
  function updateTheme(next){if(!disposed)colors={...next};}
  function dispose(){if(disposed)return;disposed=true;signal?.removeEventListener('abort',dispose);}
  signal?.addEventListener('abort',dispose,{once:true});
  resize(view);
  return Object.freeze({render,resize,updateTheme,dispose});
 }
 return Object.freeze({apiVersion:1,id,channelId,label,title:label,seconds,durationMs:seconds*1000,posterTimeMs:seconds*720,renderer:'canvas2d',alt:label+'。本地节目示意。',draw,create});
}
export { defineCanvasScene };

import { D } from '../shared/draw.js';

const TIMING=Object.freeze({introMs:850,holdMs:1100,outroMs:900});
const ease=x=>{const t=Math.min(1,Math.max(0,x));return t*t*t*(t*(t*6-15)+10);};
function programmeFrame(contentMs,elapsedMs,timing=TIMING){
  const durationMs=timing.introMs+contentMs+timing.holdMs+timing.outroMs;
  const ms=Math.max(0,Math.min(durationMs,Number(elapsedMs)||0));
  if(ms<timing.introMs)return {phase:'intro',contentMs:0,mix:ease(ms/timing.introMs),durationMs};
  if(ms<timing.introMs+contentMs)return {phase:'content',contentMs:ms-timing.introMs,mix:1,durationMs};
  if(ms<durationMs-timing.outroMs)return {phase:'hold',contentMs,mix:1,durationMs};
  return {phase:'outro',contentMs,mix:ease((ms-(durationMs-timing.outroMs))/timing.outroMs),durationMs};
}
function chapterCard(c,W,H,chapter,index,count,theme,mobile,inkAlpha=1){
  D.backdrop(c,W,H,theme,0);
  c.save();c.globalAlpha=inkAlpha;
  D.text(c,chapter.section,W/2,H*.365,mobile?18:19,theme.muted,400,'center');
  D.text(c,chapter.label,W/2,H*.47,mobile?32:39,theme.ink,500,'center');
  D.text(c,chapter.subtitle,W/2,H*.565,mobile?17:18,theme.muted,400,'center');
  for(let i=0;i<count;i++){
    const x=W/2+(i-(count-1)/2)*33;
    D.line(c,x-10,H*.665,x+10,H*.665,i===index?theme.accent:theme.line,i===index?2:1);
  }
  c.restore();
}
function createProgrammeSeries(channelId,chapters){
  return Object.freeze(chapters.map((chapter,index)=>{
    const nextIndex=(index+1)%chapters.length,next=chapters[nextIndex];
    const durationMs=chapter.contentMs+TIMING.introMs+TIMING.holdMs+TIMING.outroMs;
    function create({canvas,viewport,theme,signal}){
      if(!canvas?.getContext)throw Error('A Canvas element is required');
      const ctx=canvas.getContext('2d',{alpha:false});
      const layer=canvas.ownerDocument.createElement('canvas'),paint=layer.getContext('2d',{alpha:false});
      let view={...viewport},colors={...theme},disposed=false;
      function resize(nextView){
        if(![nextView.width,nextView.height,nextView.dpr].every(Number.isFinite)||nextView.width<0||nextView.height<0||nextView.dpr<=0)throw Error('Invalid viewport');
        view={...nextView};
      }
      function render(frame){
        if(disposed||signal?.aborted||!view.width||!view.height)return;
        const {width,height,dpr}=view,mobile=width<600&&height>width*.92;
        const W=mobile?540:1000,scale=width/W,H=height/scale,w=Math.round(width*dpr),h=Math.round(height*dpr);
        for(const target of [canvas,layer])if(target.width!==w||target.height!==h){target.width=w;target.height=h;}
        const moment=programmeFrame(chapter.contentMs,frame.elapsedMs);
        for(const c of [ctx,paint]){c.setTransform(dpr*scale,0,0,dpr*scale,0,0);c.globalAlpha=1;c.globalCompositeOperation='source-over';c.filter='none';c.setLineDash([]);c.textBaseline='middle';}
        paint.save();chapter.draw(paint,W,H,moment.contentMs,colors,mobile);paint.restore();
        if(moment.phase==='intro'){
          chapterCard(ctx,W,H,chapter,index,chapters.length,colors,mobile,1-ease(moment.mix/.45));
          ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=ease((moment.mix-.25)/.75);ctx.drawImage(layer,0,0);ctx.restore();
        }else if(moment.phase==='outro'){
          // The last frame is exactly the next chapter's first card, including the last-to-first seam.
          chapterCard(ctx,W,H,frame.autoplay===false?chapter:next,frame.autoplay===false?index:nextIndex,chapters.length,colors,mobile,ease((moment.mix-.25)/.55));
          ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=1-ease(moment.mix/.45);ctx.drawImage(layer,0,0);ctx.restore();
        }else{
          ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.drawImage(layer,0,0);ctx.restore();
        }
      }
      function dispose(){disposed=true;layer.width=layer.height=1;signal?.removeEventListener('abort',dispose);}
      signal?.addEventListener('abort',dispose,{once:true});resize(view);
      return Object.freeze({render,resize,dispose,updateTheme(value){colors={...value};}});
    }
    return Object.freeze({apiVersion:1,id:chapter.id,channelId,label:chapter.label,title:chapter.label,section:chapter.section,subtitle:chapter.subtitle,
      renderer:'canvas2d',seconds:durationMs/1000,durationMs,contentDurationMs:chapter.contentMs,
      contentStartMs:TIMING.introMs,outroStartMs:durationMs-TIMING.outroMs,posterTimeMs:TIMING.introMs+chapter.contentMs*.72,
      alt:chapter.label+'，工具场景示意。',create,
      presentation:elapsedMs=>({...programmeFrame(chapter.contentMs,elapsedMs),nextLabel:next.label,nextIndex})
    });
  }));
}
export { TIMING, programmeFrame, createProgrammeSeries };

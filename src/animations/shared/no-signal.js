/** An untuned CRT. All motion follows the host clock, including pause and reduced motion. */
function defineNoSignalScene({channelId,channel}) {
  const seconds=12;
  function create({canvas,viewport,signal}) {
    const ctx=canvas.getContext('2d',{alpha:false});
    const tile=canvas.ownerDocument.createElement('canvas');
    tile.width=240;tile.height=140;
    const noise=tile.getContext('2d',{alpha:false}),pixels=noise.createImageData(tile.width,tile.height);
    let view={...viewport},disposed=false,lastTick=-1;
    function render({elapsedMs=0}) {
      if(disposed||signal?.aborted||!view.width||!view.height)return;
      const tick=Math.floor(elapsedMs/100),t=elapsedMs/1000;
      if(tick!==lastTick){
        let seed=(tick+1)*7919+channel*104729;
        for(let i=0;i<pixels.data.length;i+=4){
          seed^=seed<<13;seed^=seed>>>17;seed^=seed<<5;
          const grey=54+((seed>>>0)%86);
          pixels.data[i]=grey;pixels.data[i+1]=grey+2;pixels.data[i+2]=grey;pixels.data[i+3]=255;
        }
        noise.putImageData(pixels,0,0);lastTick=tick;
      }
      const {width:w,height:h,dpr}=view;
      const width=Math.round(w*dpr),height=Math.round(h*dpr);
      if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;}
      ctx.setTransform(dpr,0,0,dpr,0,0);ctx.imageSmoothingEnabled=false;
      ctx.drawImage(tile,0,0,w,h);
      ctx.fillStyle='rgba(12,18,14,.12)';
      for(let y=0;y<h;y+=3)ctx.fillRect(0,y,w,1);
      const bandY=((t/seconds)*1.4-.2)*h,band=ctx.createLinearGradient(0,bandY-h*.12,0,bandY+h*.12);
      band.addColorStop(0,'transparent');band.addColorStop(.5,'rgba(8,12,9,.23)');band.addColorStop(1,'transparent');
      ctx.fillStyle=band;ctx.fillRect(0,bandY-h*.12,w,h*.24);
      const shade=ctx.createRadialGradient(w*.5,h*.46,h*.12,w*.5,h*.5,Math.max(w,h)*.65);
      shade.addColorStop(0,'rgba(0,0,0,.05)');shade.addColorStop(1,'rgba(0,0,0,.52)');
      ctx.fillStyle=shade;ctx.fillRect(0,0,w,h);
      const scale=Math.min(w/700,h/430);
      ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.shadowColor='#dce6d170';ctx.shadowBlur=4*scale;ctx.fillStyle='#e1e6d5';
      ctx.font=`500 ${Math.max(17,25*scale)}px "Microsoft YaHei",sans-serif`;
      ctx.fillText('无 信 号',w/2,h*.47);
      ctx.shadowBlur=0;ctx.fillStyle='#c5ccb9';
      ctx.font=`${Math.max(10,12*scale)}px "Courier New",monospace`;
      ctx.fillText('CH '+String(channel).padStart(2,'0'),w/2,h*.47+32*scale);
    }
    function resize(next){view={...next};}
    function dispose(){disposed=true;signal?.removeEventListener('abort',dispose);}
    signal?.addEventListener('abort',dispose,{once:true});
    return {render,resize,dispose,updateTheme(){}};
  }
  return Object.freeze({apiVersion:1,id:channelId+'.no-signal',channelId,label:'无信号',title:'无信号',seconds,durationMs:seconds*1000,posterTimeMs:4000,renderer:'canvas2d',signal:'none',alt:'未接入频道，老电视雪花画面。',create});
}
export { defineNoSignalScene };

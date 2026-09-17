/* Cabinet-only UI. The player owns time, navigation and playback state. */
function channelDistance(from, to, count = 7) {
  const distance = (to - from + count) % count;
  return distance > count / 2 ? distance - count : distance;
}

function mountTelevision(screen, channels, onTune) {
  const icon = paths => `<svg viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`;
  const icons = {
    power: icon('<path d="M12 3v8M6.5 6.5a8 8 0 1 0 11 0"/>'),
    play: icon('<path class="icon-play" d="m9 5 11 7-11 7Z"/><path class="icon-pause" d="M9 5v14M16 5v14"/>'),
    guide: icon('<path d="M8 6h12M8 12h12M8 18h12M4 6h.1M4 12h.1M4 18h.1"/>'),
    open: icon('<path d="M14 4h6v6M20 4 10 14M10 5H5v15h15v-5"/>')
  };
  const set = document.createElement('div');
  set.className = 'tv-set';
  set.innerHTML = `
    <div class="tv-ground" aria-hidden="true"></div>
    <div class="tv-volume">
      <div class="tv-depth" aria-hidden="true">${Array.from({length:12},(_,i)=>`<i style="--layer:${12-i}"></i>`).join('')}</div>
      <div class="tv-side" aria-hidden="true"><div class="tv-vents">${'<i></i>'.repeat(7)}</div><div class="tv-side-label">JCLAW<br><span>MODEL 07</span></div><i class="tv-screw"></i></div>
      <div class="tv-handle" aria-hidden="true"></div>
      <div class="tv-aerial" aria-hidden="true"><i></i><i></i><b></b></div>
      <div class="tv-cabinet">
        <div class="tv-glass-surround"></div>
        <aside class="tv-console" aria-label="机身控制">
          <div class="tv-channel-window"><span>CH</span><strong id="tvChannelNumber">01</strong><i aria-hidden="true"></i></div>
          <div class="tv-tuner">
            <div class="tv-dial-marks" aria-hidden="true">${channels.map(c=>`<i style="--mark:${(c.n-1)*360/channels.length}deg" data-mark="${c.n}">${c.n}</i>`).join('')}</div>
            <button class="tv-dial" type="button" aria-label="换台旋钮：点击下一频道，或左右拖动换台" title="点击下一台 · 左右拖动换台"><span class="tv-dial-grip" aria-hidden="true"></span></button>
          </div>
          <div class="tv-channel-rocker"><button data-action="channel-prev" aria-label="机身：上一频道">${icon('<path d="m14 6-6 6 6 6"/>')}</button><span aria-hidden="true">换台</span><button data-action="channel-next" aria-label="机身：下一频道">${icon('<path d="m10 6 6 6-6 6"/>')}</button></div>
          <div class="tv-keys">
            <button class="tv-key tv-power" data-action="power" aria-label="机身电源" aria-pressed="true"><span class="tv-key-icon">${icons.power}</span><span>电源</span><i class="tv-power-light" aria-hidden="true"></i></button>
            <button class="tv-key tv-play" data-action="play" aria-label="暂停节目" aria-pressed="true"><span class="tv-key-icon">${icons.play}</span><span id="tvPlayLabel">暂停</span></button>
            <button class="tv-key tv-guide" data-action="menu"><span class="tv-key-icon">${icons.guide}</span><span>节目表</span></button>
            <button class="tv-key tv-open" data-action="open-tool"><span class="tv-key-icon">${icons.open}</span><span id="tvOpenLabel">打开工具</span></button>
          </div>
          <div class="tv-speaker" aria-hidden="true"><i></i></div>
        </aside>
        <div class="tv-chin"><svg class="tv-sketch" viewBox="0 0 66 26" aria-hidden="true"><path d="m3 21 12-16 9 11 7-7 14 13H3m8-9 4 2 4-3M48 7l3-5 2 6 6 1-5 4 1 6-5-4-5 2 2-6-4-3 5-1"/></svg><span class="tv-wordmark">JCLAW <b>TV</b></span><span class="tv-now" id="tvChannelName"></span></div>
      </div>
      <div class="tv-feet" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
    </div>
    <p class="tv-hint"><span>旋钮换台</span><i>·</i><span>键盘 <kbd>1</kbd>–<kbd>7</kbd> 直选</span><i>·</i><span>空格播放 / 暂停</span></p>`;
  screen.replaceWith(set);
  set.querySelector('.tv-glass-surround').append(screen);
  const resume = document.createElement('button');
  resume.className='playback-resume'; resume.dataset.action='play'; resume.hidden=true;
  resume.innerHTML=`${icons.play}<span id="playbackReason"></span><b>播放节目</b>`;
  screen.append(resume);
  const dial=set.querySelector('.tv-dial'),grip=set.querySelector('.tv-dial-grip');
  const backgroundControls=[set.querySelector('.tv-console'),document.querySelector('.mobileDock')];
  let channel=1,rotation=0,powered=true,modal=false,drag=null,suppressClick=false;
  const request=step=>{if(powered&&!modal)onTune(((channel-1+step)%channels.length+channels.length)%channels.length+1);};
  dial.addEventListener('click',e=>{e.stopPropagation();if(suppressClick&&e.detail!==0){suppressClick=false;return;}request(1);});
  dial.addEventListener('pointerdown',e=>{
    if(e.button!==0||!e.isPrimary||!powered||modal)return;
    suppressClick=false;drag={id:e.pointerId,x:e.clientX,steps:0,moved:false};dial.setPointerCapture(e.pointerId);
  });
  dial.addEventListener('pointermove',e=>{
    if(!drag||e.pointerId!==drag.id)return;
    const dx=e.clientX-drag.x;if(Math.abs(dx)>7)drag.moved=true;
    const steps=Math.trunc(dx/22);
    if(steps!==drag.steps){const delta=steps-drag.steps;drag.steps=steps;request(delta);}
  });
  const endDrag=e=>{
    if(!drag||e.pointerId!==drag.id)return;
    suppressClick=drag.moved||e.type==='pointercancel';drag=null;
    if(dial.hasPointerCapture(e.pointerId))dial.releasePointerCapture(e.pointerId);
  };
  for(const type of ['pointerup','pointercancel','lostpointercapture'])dial.addEventListener(type,endDrag);
  const cancelActiveDrag=()=>{if(!drag)return;const id=drag.id;drag=null;suppressClick=true;if(dial.hasPointerCapture(id))dial.releasePointerCapture(id);};
  // Pointer input is used only by the physical tuning control. No camera/parallax motion.
  return {
    update({ch,power,paused,menu,pauseReason},link={}) {
      if(!power)cancelActiveDrag();
      rotation+=channelDistance(channel,ch,channels.length)*360/channels.length;channel=ch;powered=power;
      grip.style.setProperty('--dial-angle',`${rotation}deg`);
      set.dataset.channel=String(ch);set.classList.toggle('tv-off',!power);set.classList.toggle('tv-paused',paused);
      set.querySelector('#tvChannelNumber').textContent=String(ch).padStart(2,'0');
      set.querySelector('#tvChannelName').textContent=channels[ch-1].name;
      set.querySelector('.tv-power').setAttribute('aria-pressed',String(power));
      const play=set.querySelector('.tv-play');play.disabled=!power;play.setAttribute('aria-pressed',String(!paused&&power));
      play.setAttribute('aria-label',paused?'播放节目':'暂停节目');set.querySelector('#tvPlayLabel').textContent=paused?'播放':'暂停';
      set.querySelector('#tvOpenLabel').textContent=link.url&&link.enabled?'打开工具':'配置入口';set.querySelector('.tv-open').disabled=!power;
      resume.hidden=!power||!paused||menu;
      screen.querySelector('#playbackReason').textContent=pauseReason==='system'?'系统偏好：减少动态':'节目已暂停';
      dial.setAttribute('aria-label',`换台旋钮：当前 ${ch}，${channels[ch-1].name}。点击下一频道，或左右拖动换台`);
      for(const mark of set.querySelectorAll('[data-mark]'))mark.classList.toggle('active',Number(mark.dataset.mark)===ch);
      for(const button of set.querySelectorAll('.tv-dial,.tv-channel-rocker button'))button.disabled=!power;
    },
    setMenuOpen(open) {modal=open;if(open)cancelActiveDrag();resume.hidden=true;for(const el of backgroundControls)if(el)el.inert=open;}
  };
}

export { mountTelevision, channelDistance };

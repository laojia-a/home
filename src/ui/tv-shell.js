/* The cabinet displays player state; it owns no links, storage or programme clock. */
function channelDistance(from, to, count = 7) {
  const distance = (to - from + count) % count;
  return distance > count / 2 ? distance - count : distance;
}

function mountTelevision(screen, channels, onTune) {
  const set = document.createElement('div');
  set.className = 'tv-set';
  set.innerHTML = `
    <div class="tv-handle" aria-hidden="true"></div>
    <div class="tv-aerial" aria-hidden="true"><i></i><i></i></div>
    <div class="tv-cabinet">
      <div class="tv-glass-surround"></div>
      <aside class="tv-console" aria-label="机身控制">
        <div class="tv-channel-window"><span>CH</span><strong id="tvChannelNumber">01</strong></div>
        <div class="tv-tuner">
          <div class="tv-dial-marks" aria-hidden="true">${channels.map(c => `<i style="--mark:${(c.n - 1) * 360 / channels.length}deg" data-mark="${c.n}">${c.n}</i>`).join('')}</div>
          <button class="tv-dial" type="button" aria-label="换台旋钮：点击下一频道，或左右拖动换台" title="点击下一台 · 左右拖动换台"><span class="tv-dial-grip" aria-hidden="true"></span></button>
        </div>
        <span class="tv-tuner-label">换台</span>
        <div class="tv-channel-rocker">
          <button data-action="channel-prev" aria-label="机身：上一频道"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6"/></svg></button>
          <button data-action="channel-next" aria-label="机身：下一频道"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6"/></svg></button>
        </div>
        <button class="tv-guide" data-action="menu"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h14M5 12h14M5 18h14"/></svg>节目表</button>
        <div class="tv-speaker" aria-hidden="true"></div>
        <button class="tv-power" data-action="power" aria-label="机身电源" aria-pressed="true"><i aria-hidden="true"></i><span>电源</span></button>
      </aside>
      <div class="tv-chin">
        <svg class="tv-sketch" viewBox="0 0 66 26" aria-hidden="true"><path d="m3 21 12-16 9 11 7-7 14 13H3m8-9 4 2 4-3M48 7l3-5 2 6 6 1-5 4 1 6-5-4-5 2 2-6-4-3 5-1"/></svg>
        <span class="tv-wordmark">JCLAW <b>TV</b></span>
        <span class="tv-now" id="tvChannelName"></span>
      </div>
    </div>
    <div class="tv-feet" aria-hidden="true"><i></i><i></i></div>`;
  screen.replaceWith(set);
  set.querySelector('.tv-glass-surround').append(screen);
  const dial = set.querySelector('.tv-dial');
  const grip = set.querySelector('.tv-dial-grip');
  const consolePanel = set.querySelector('.tv-console');
  const backgroundControls = [consolePanel, document.querySelector('#rail'), document.querySelector('.topbar'), document.querySelector('.mobileDock')];
  let channel = 1, rotation = 0, powered = true, modal = false, drag = null, suppressClick = false;
  const request = step => { if (powered && !modal) onTune(((channel - 1 + step) % channels.length + channels.length) % channels.length + 1); };
  dial.addEventListener('click', event => {
    event.stopPropagation();
    if (suppressClick && event.detail !== 0) { suppressClick = false; return; }
    request(1);
  });
  // Horizontal dragging is predictable on a small dial; a click is still a native button action.
  dial.addEventListener('pointerdown', event => {
    if (event.button !== 0 || !event.isPrimary || !powered || modal) return;
    suppressClick = false;
    drag = { id: event.pointerId, x: event.clientX, steps: 0, moved: false };
    dial.setPointerCapture(event.pointerId);
  });
  dial.addEventListener('pointermove', event => {
    if (!drag || event.pointerId !== drag.id) return;
    const dx = event.clientX - drag.x;
    if (Math.abs(dx) > 7) drag.moved = true;
    const steps = Math.trunc(dx / 22);
    if (steps !== drag.steps) { const delta = steps - drag.steps; drag.steps = steps; request(delta); }
  });
  const endDrag = event => {
    if (!drag || event.pointerId !== drag.id) return;
    suppressClick = drag.moved || event.type === 'pointercancel';
    drag = null;
    if (dial.hasPointerCapture(event.pointerId)) dial.releasePointerCapture(event.pointerId);
  };
  dial.addEventListener('pointerup', endDrag);
  dial.addEventListener('pointercancel', endDrag);
  dial.addEventListener('lostpointercapture', endDrag);
  const cancelActiveDrag = () => {
    if (!drag) return;
    const id = drag.id;
    drag = null; suppressClick = true;
    if (dial.hasPointerCapture(id)) dial.releasePointerCapture(id);
  };
  return {
    update({ ch, power }) {
      if (!power) cancelActiveDrag();
      rotation += channelDistance(channel, ch, channels.length) * 360 / channels.length;
      channel = ch; powered = power;
      grip.style.setProperty('--dial-angle', `${rotation}deg`);
      set.dataset.channel = String(ch);
      set.classList.toggle('tv-off', !power);
      set.querySelector('#tvChannelNumber').textContent = String(ch).padStart(2, '0');
      set.querySelector('#tvChannelName').textContent = channels[ch - 1].name;
      set.querySelector('.tv-power').setAttribute('aria-pressed', String(power));
      dial.setAttribute('aria-label', `换台旋钮：当前 ${ch}，${channels[ch - 1].name}。点击下一频道，或左右拖动换台`);
      for (const mark of set.querySelectorAll('[data-mark]')) mark.classList.toggle('active', Number(mark.dataset.mark) === ch);
      for (const button of set.querySelectorAll('.tv-dial,.tv-channel-rocker button')) button.disabled = !power;
    },
    setMenuOpen(open) {
      modal = open;
      if (open) cancelActiveDrag();
      for (const element of backgroundControls) if (element) element.inert = open;
    }
  };
}

export { mountTelevision, channelDistance };

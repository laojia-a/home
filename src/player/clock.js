// The host supplies time and pause state; scenes only receive elapsed time.
function advanceProgramme(state, now, scenes, picture, active){
  const dt=Math.min(.10,Math.max(0,(now-state.last)/1000));
  state.last=now;
  if(!active)return false;
  const scene=scenes[state.scene];
  state.elapsed+=dt*picture.speed;
  if(state.elapsed<scene.seconds)return false;
  if(picture.autoplay){
    state.elapsed-=scene.seconds;
    state.scene=(state.scene+1)%scenes.length;
    return true;
  }
  state.elapsed%=scene.seconds;
  return false;
}

export { advanceProgramme };

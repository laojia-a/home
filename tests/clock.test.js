import test from 'node:test';
import assert from 'node:assert/strict';
import { advanceProgramme } from '../src/player/clock.js';

const scenes=[{seconds:1},{seconds:2}];

test('programme time holds during pause and advances only when active',()=>{
  const state={scene:0,elapsed:.5,last:1000};
  assert.equal(advanceProgramme(state,1100,scenes,{speed:1,autoplay:true},false),false);
  assert.equal(state.elapsed,.5);
  assert.equal(advanceProgramme(state,1200,scenes,{speed:1,autoplay:true},true),false);
  assert.equal(state.elapsed,.6);
});

test('long frame is capped and autoplay selects the next scene',()=>{
  const state={scene:0,elapsed:.95,last:1000};
  assert.equal(advanceProgramme(state,4000,scenes,{speed:1,autoplay:true},true),true);
  assert.equal(state.scene,1);
  assert.equal(state.elapsed,0);
});

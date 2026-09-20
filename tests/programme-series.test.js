import test from 'node:test';
import assert from 'node:assert/strict';
import { site } from '../src/animations/sites/cth/index.js';
import { programmeFrame, TIMING } from '../src/animations/contract/programme-series.js';
import { advanceProgramme } from '../src/player/clock.js';
import { processState } from '../src/animations/sites/cth/scenes/plasma/process.js';
import { example as sample } from '../src/animations/sites/cth/scenes/sample-size/example.js';
import { term } from '../src/animations/sites/cth/scenes/ctcae/term.js';
import { nodes } from '../src/animations/sites/cth/scenes/terms/hierarchy.js';
import { result as meal } from '../src/animations/sites/cth/scenes/meal/nutrition.js';
import { amounts } from '../src/animations/sites/cth/scenes/contract/amounts.js';

test('CH1 follows three topic pairs, with complete reviewed content and explicit reading time',()=>{
  assert.deepEqual(site.scenes.map(s=>s.id),['cth.sample','cth.contract','cth.breakfast','cth.inventory','cth.grades','cth.terms']);
  assert.deepEqual(site.scenes.map(s=>s.section),['研究准备','研究准备','执行操作','执行操作','记录核对','记录核对']);
  assert.equal(site.scenes.reduce((sum,s)=>sum+s.durationMs,0),145100);
  for(const s of site.scenes){
    const held=s.presentation(s.contentStartMs+s.contentDurationMs+500);
    assert.equal(held.phase,'hold');assert.equal(held.contentMs,s.contentDurationMs);
    assert.ok(s.posterTimeMs>s.contentStartMs&&s.posterTimeMs<s.outroStartMs);
  }
});
test('all six handoffs, including the loop, end on the incoming chapter card',()=>{
  for(let i=0;i<site.scenes.length;i++){
    const scene=site.scenes[i],next=site.scenes[(i+1)%site.scenes.length];
    const end=scene.presentation(scene.durationMs),start=next.presentation(0);
    assert.equal(end.mix,1);assert.equal(end.nextLabel,next.label);assert.equal(start.phase,'intro');assert.equal(start.mix,0);
    assert.equal(programmeFrame(scene.contentDurationMs,scene.outroStartMs).mix,0);
  }
});
test('pause freezes an automatic handoff and the last chapter carries elapsed time into the first',()=>{
  const scene=site.scenes.at(-1),state={scene:5,elapsed:scene.seconds-.025,last:1000};
  const before=state.elapsed;
  advanceProgramme(state,3000,site.scenes,{autoplay:true,speed:1},false);assert.equal(state.elapsed,before);
  advanceProgramme(state,3100,site.scenes,{autoplay:true,speed:1},true);
  assert.equal(state.scene,0);assert.ok(Math.abs(state.elapsed-.075)<1e-8);
  assert.equal(site.scenes[0].presentation(state.elapsed*1000).phase,'intro');
});
test('integrated modules preserve the reviewed semantic examples',()=>{
  const plasma=processState(28000);assert.equal(plasma.source,0);assert.equal(plasma.test,1);assert.equal(plasma.backup,1);
  assert.equal(sample.evaluable,30);assert.equal(sample.enrollment,34);
  assert.deepEqual(term.grades.filter(g=>g.available).map(g=>g.grade),[1,2,3]);assert.equal(term.grades[1].operator,'or');
  assert.equal(new Set(nodes.map(n=>n.key)).size,5);
  assert.ok(Math.abs(meal.calories-555.66)<1e-9);
  assert.equal(amounts.periodCents.reduce((a,b)=>a+b,0),amounts.grossCents);
});

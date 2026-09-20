import test from 'node:test';
import assert from 'node:assert/strict';
import { processState, INITIAL_PLASMA } from './process.js';

test('plasma transfers conserve the illustrative quantity at every frame',()=>{
  for(let ms=0;ms<=28000;ms+=25){
    const s=processState(ms);
    assert.ok(Math.abs(s.source+s.tip+s.test+s.backup-INITIAL_PLASMA)<1e-9);
    for(const key of ['source','tip','test','backup'])assert.ok(s[key]>=-1e-9,key+' below zero');
    assert.ok(s.tip<=1+1e-9);
  }
});
test('aspiration stays in plasma and never enters the cell interface',()=>{
  for(const [a,b] of [[8500,10000],[17300,18800]])for(let ms=a;ms<=b;ms+=25){
    const s=processState(ms);
    assert.equal(s.pipette.x,300);
    assert.ok(s.pipette.y>s.surface);
    assert.ok(s.pipette.y<386);
    assert.equal(s.uncap,1);
  }
});
test('receivers fill only with the tip inside their open neck',()=>{
  let before=processState(0);
  for(let ms=25;ms<=28000;ms+=25){
    const s=processState(ms);
    for(const [key,x] of [['test',630],['backup',790]])if(s[key]>before[key]){
      assert.ok(Math.abs(s.pipette.x-x)<20);
      assert.ok(s.pipette.y>350&&s.pipette.y<400);
      assert.equal(s.seal,0);
    }
    before=s;
  }
  const end=processState(28000);
  assert.equal(end.test,1);assert.equal(end.backup,1);assert.equal(end.tip,0);assert.equal(end.seal,1);
});
test('the pipette clears tube mouths before travelling between vessels',()=>{
  for(const [a,b] of [[11000,12300],[15500,16700],[19500,21000]])for(let ms=a;ms<=b;ms+=25){
    assert.ok(processState(ms).pipette.y<238);
  }
});

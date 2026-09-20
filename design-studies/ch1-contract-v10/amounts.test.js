import test from 'node:test';
import assert from 'node:assert/strict';
import { inputs,amounts,calculate } from './amounts.js';
test('gross already includes the illustrative tax; net plus tax equals gross',()=>{
  assert.equal(amounts.grossCents,10600000);assert.equal(amounts.netCents,10000000);assert.equal(amounts.taxCents,600000);
  assert.equal(amounts.netCents+amounts.taxCents,amounts.grossCents);
  assert.equal(calculate({...inputs,taxRate:0}).taxCents,0);
});
test('the displayed three installments reconcile to the same total and uppercase amount',()=>{
  assert.deepEqual(amounts.periodCents,[4240000,3180000,3180000]);
  assert.equal(amounts.periodCents.reduce((a,b)=>a+b,0),amounts.grossCents);
  assert.equal(amounts.ratioSum,100);assert.equal(amounts.uppercase,'壹拾万陆仟元整');
});

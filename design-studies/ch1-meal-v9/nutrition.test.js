import test from 'node:test';
import assert from 'node:assert/strict';
import { example,result,calculate } from './nutrition.js';
test('ingredient portions determine energy, with beverages in mL',()=>{
  const milk=example.items.find(f=>f.unit==='mL');assert.equal(milk.amount,250);
  const m=calculate([milk]);assert.equal(m.protein,9);assert.equal(m.fat,11);assert.equal(m.carb,12.5);
  assert.ok(Math.abs(result.calories-555.66)<1e-9);
});
test('energy shares use calories rather than gram proportions',()=>{
  assert.ok(Math.abs(result.calories-(result.protein*4+result.fat*9+result.carb*4))<1e-9);
  assert.ok(Math.abs(result.fatShare-result.fat*9/result.calories)<1e-9);
  assert.equal((result.fatShare*100).toFixed(1),'44.7');
  const doubled=calculate(example.items.map(f=>({...f,amount:f.amount*2})));
  assert.ok(Math.abs(doubled.calories-result.calories*2)<1e-9);
  assert.equal(doubled.fatShare,result.fatShare);
});

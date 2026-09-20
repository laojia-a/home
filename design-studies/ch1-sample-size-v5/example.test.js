import test from 'node:test';
import assert from 'node:assert/strict';
import { example } from './example.js';
import { plannedEnrollment } from './reference/be-stats.js';
test('visible results come from the fixed CTH example rather than a decorative count',()=>{
  assert.equal(example.evaluable,30);assert.equal(example.enrollment,34);
  assert.ok(example.achievedPower>=example.inputs.power);
  assert.equal(example.perSequence*2,example.enrollment);
  assert.equal(example.enrollment%2,0);
  assert.ok(example.enrollment>=example.evaluable/(1-example.inputs.dropout));
});
test('without expected dropout the enrollment example does not add subjects',()=>{
  assert.equal(plannedEnrollment(example.evaluable,0,2),example.evaluable);
});

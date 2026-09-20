import test from 'node:test';
import assert from 'node:assert/strict';
import { term, parseConditions } from './term.js';
test('the v6 nausea example retains the IV alternative and OR semantics',()=>{
  const grade2=term.grades.find(g=>g.grade===2);
  assert.equal(grade2.operator,'or');assert.equal(grade2.alternatives.length,2);
  assert.equal(grade2.alternatives[1],'IV intervention indicated');
});
test('a source dash means unavailable, never zero severity or a grade assignment',()=>{
  assert.deepEqual(parseConditions('-'),{available:false,operator:null,alternatives:[]});
  assert.deepEqual(term.grades.filter(g=>g.available).map(g=>g.grade),[1,2,3]);
  assert.equal(term.assignedPatientGrade,null);
});

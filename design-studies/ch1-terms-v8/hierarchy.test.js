import test from 'node:test';
import assert from 'node:assert/strict';
import { example,nodes,buildNodes } from './hierarchy.js';
test('same-code LLT and PT remain distinct hierarchy nodes',()=>{
  assert.equal(nodes[0].code,nodes[1].code);
  assert.notEqual(nodes[0].key,nodes[1].key);
  assert.equal(new Set(nodes.map(n=>n.key)).size,5);
  assert.equal(buildNodes({levels:example.levels.slice(0,2)}).length,2);
});
test('the checked current term exposes all five levels of its primary path',()=>{
  assert.equal(example.version,'29.0');assert.equal(example.current,true);assert.equal(example.primarySOC,true);
  assert.deepEqual(nodes.map(n=>n.level),['LLT','PT','HLT','HLGT','SOC']);
  assert.equal(nodes[4].code,'10029205');
});

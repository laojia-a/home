import test from 'node:test';
import assert from 'node:assert/strict';
import { createSettings } from '../src/settings/config.js';

const channels=[{name:'一',url:'https://example.org/',enabled:true},{name:'二',url:'',enabled:false}];

test('settings keep drafts across edits and reject unsafe links without changing live configuration',()=>{
  const storage={getItem:()=>null,setItem:()=>{}};
  const settings=createSettings(channels,storage);
  const draft=settings.draft();draft[0].url='https://example.org/new';
  assert.equal(settings.changed(draft),true);
  assert.equal(settings.config.links[0].url,'https://example.org/');
  draft[0].url='javascript:alert(1)';
  assert.throws(()=>settings.saveLinks(draft),/HTTPS/);
  assert.equal(settings.config.links[0].url,'https://example.org/');
  draft[0].url='https://example.org/new';
  settings.saveLinks(draft);
  assert.equal(settings.changed(draft),false);
});

test('unavailable storage keeps saved session settings and reports persistence failure',()=>{
  const settings=createSettings(channels,{getItem:()=>null,setItem:()=>{throw Error('blocked')}});
  const draft=settings.draft();draft[1]={url:'http://localhost:8765/',enabled:true};
  settings.saveLinks(draft);
  assert.equal(settings.persist(),false);
  assert.equal(settings.config.links[1].url,'http://localhost:8765/');
});

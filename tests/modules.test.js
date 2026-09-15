import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SITES, SITE_BY_CHANNEL, SCENE_BY_ID } from '../src/animations/registry.js';
import { defineCanvasScene } from '../src/animations/contract/canvas-scene.js';
import { readFileSync,readdirSync } from 'node:fs';
test('all seven independent websites preserve 6/3/3/1/1/1/1 programmes',()=>{assert.equal(SITES.length,7);assert.deepEqual(SITES.map(s=>s.scenes.length),[6,3,3,1,1,1,1]);assert.equal(SCENE_BY_ID.size,16);assert.equal(SITE_BY_CHANNEL.size,7)});
for(const site of SITES) test(site.website.name+' has its own theme, stable scene identifiers and Canvas contract',()=>{assert.ok(Object.isFrozen(site));assert.ok(site.theme.bg);for(const s of site.scenes){assert.equal(s.channelId,site.website.id);assert.equal(s.apiVersion,1);assert.equal(s.renderer,'canvas2d');assert.ok(s.id.startsWith(site.website.id+'.'));assert.equal(typeof s.create,'function');assert.ok(s.posterTimeMs<s.durationMs)}});
test('bad scene and missing canvas are rejected',()=>{assert.throws(()=>defineCanvasScene({id:'bad/ID',seconds:0}));assert.throws(()=>SITES[0].scenes[0].create({}));});
test('site renderers have no browser navigation, private clocks, storage, or cross-site import',()=>{for(const folder of readdirSync(new URL('../src/animations/sites/',import.meta.url),{withFileTypes:true}).filter(d=>d.isDirectory())){const code=readFileSync(new URL('../src/animations/sites/'+folder.name+'/renderers.js',import.meta.url),'utf8');assert.doesNotMatch(code,/requestAnimationFrame|setInterval|setTimeout|localStorage|window\.open|document\./);assert.doesNotMatch(code,/\.\.\/\.\.\/sites\//)}});

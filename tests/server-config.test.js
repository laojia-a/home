import test from 'node:test';
import assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import { handleApi } from '../src/server/config-api.js';

globalThis.crypto ||= webcrypto;

function fixture(){
  const data=new Map();
  const env={ADMIN_PASSWORD:'a-long-test-password',SITE_CONFIG:{
    get:async (key,format)=>format==='json'?JSON.parse(data.get(key)||'null'):data.get(key),
    put:async (key,value)=>{data.set(key,value);}
  }};
  const call=(path,method='GET',body,secret)=>handleApi(new Request('https://www.jclaw.top'+path,{
    method,headers:{origin:'https://www.jclaw.top',...(secret?{authorization:'Bearer '+secret}:{}),'content-type':'application/json'},
    ...(body?{body:JSON.stringify(body)}:{})
  }),env);
  return {call};
}

test('shared config is public but writing requires the server secret',async()=>{
  const {call}=fixture();
  assert.deepEqual(await (await call('/api/config')).json(),{managed:true,links:null,revision:0});
  const links=Array.from({length:7},(_,i)=>({url:i===0?'https://example.org/':'',enabled:i===0}));
  assert.equal((await call('/api/admin/config','PUT',{links,revision:0})).status,401);
  assert.equal((await call('/api/admin/auth','POST',null,'wrong')).status,401);
  assert.equal((await call('/api/admin/auth','POST',null,'a-long-test-password')).status,200);
  assert.equal((await call('/api/admin/config','PUT',{links,revision:0},'a-long-test-password')).status,200);
  const read=await (await call('/api/config')).json();
  assert.equal(read.revision,1);
  assert.deepEqual(read.links,links);
  assert.equal((await call('/api/admin/config','PUT',{links,revision:0},'a-long-test-password')).status,409);
});

test('rejects unsafe global URLs and cross-origin writes',async()=>{
  const {call}=fixture();
  const links=Array.from({length:7},()=>({url:'',enabled:false}));
  links[0]={url:'http://localhost:8765/',enabled:true};
  assert.equal((await call('/api/admin/config','PUT',{links,revision:0},'a-long-test-password')).status,400);
  const response=await handleApi(new Request('https://www.jclaw.top/api/admin/auth',{method:'POST',headers:{origin:'https://other.example',authorization:'Bearer a-long-test-password'}}),{ADMIN_PASSWORD:'a-long-test-password',SITE_CONFIG:{}});
  assert.equal(response.status,403);
});

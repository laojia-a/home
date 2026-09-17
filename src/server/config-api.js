const KEY = 'site-config-v1';
const encoder = new TextEncoder();
const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status, headers: {'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff'}
});

function normalizeLinks(value) {
  if (!Array.isArray(value) || value.length !== 7) throw Error('需要七个频道地址');
  return value.map(item => {
    const raw = typeof item?.url === 'string' ? item.url.trim() : '';
    if (!raw) {
      if (item?.enabled) throw Error('启用的频道需要地址');
      return {url:'', enabled:false};
    }
    if (raw.length > 2048) throw Error('地址过长');
    const url = new URL(raw);
    if (url.protocol !== 'https:' || url.username || url.password) throw Error('接入地址必须是 HTTPS，且不能包含账号或密码');
    return {url:url.href, enabled:!!item.enabled};
  });
}

async function sameSecret(a,b) {
  if (a.length>512) return false;
  const [x,y]=await Promise.all([crypto.subtle.digest('SHA-256',encoder.encode(a)),crypto.subtle.digest('SHA-256',encoder.encode(b))]);
  const left=new Uint8Array(x),right=new Uint8Array(y);
  let diff=0;
  for(let i=0;i<left.length;i++)diff|=left[i]^right[i];
  return diff===0;
}

async function handleApi(request, env) {
  const url=new URL(request.url),path=url.pathname;
  if (!env.SITE_CONFIG || !env.ADMIN_PASSWORD) return json({error:'服务端配置尚未完成'},503);
  if (path==='/api/config' && request.method==='GET') {
    const saved=await env.SITE_CONFIG.get(KEY,'json');
    return json({managed:true,links:saved?.links||null,revision:saved?.revision||0});
  }
  if (path==='/api/admin/auth' && request.method==='POST') {
    if (request.headers.get('origin') !== url.origin) return json({error:'请求来源不匹配'},403);
    const auth=request.headers.get('authorization')||'';
    if (!auth.startsWith('Bearer ') || !await sameSecret(auth.slice(7),env.ADMIN_PASSWORD)) return json({error:'密码错误'},401);
    return json({ok:true});
  }
  if (path==='/api/admin/config' && request.method==='PUT') {
    if (request.headers.get('origin') !== url.origin) return json({error:'请求来源不匹配'},403);
    const auth=request.headers.get('authorization')||'';
    if (!auth.startsWith('Bearer ') || !await sameSecret(auth.slice(7),env.ADMIN_PASSWORD)) return json({error:'密码错误'},401);
    if (Number(request.headers.get('content-length')||0)>16000) return json({error:'请求过大'},413);
    let payload;
    try { const raw=await request.text();if(raw.length>16000)return json({error:'请求过大'},413);payload=JSON.parse(raw); } catch { return json({error:'JSON 无效'},400); }
    let links;
    try { links=normalizeLinks(payload?.links); } catch(e) { return json({error:e.message},400); }
    const current=await env.SITE_CONFIG.get(KEY,'json');
    if ((current?.revision||0)!==payload.revision) return json({error:'配置已由其他管理员修改，请刷新后重试'},409);
    const next={links,revision:(current?.revision||0)+1,updatedAt:new Date().toISOString()};
    await env.SITE_CONFIG.put(KEY,JSON.stringify(next));
    return json(next);
  }
  return json({error:'未找到接口'},404);
}

export { handleApi, normalizeLinks };

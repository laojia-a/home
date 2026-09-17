const KEY = 'jclaw-s10-programmes-2';
const defaultPicture = {scan:true,vig:true,bri:1,speed:1,autohide:true,autoplay:true,immersive:false};

function validURL(raw){
  if(!raw.trim())return '';
  const u=new URL(raw.trim());
  if(u.username||u.password)throw Error('地址中不能包含账号或密码');
  const loop=['localhost','127.0.0.1','[::1]'].includes(u.hostname);
  if(u.protocol!=='https:'&&!(u.protocol==='http:'&&loop))throw Error('请使用 HTTPS 或本机 HTTP 地址');
  return u.href;
}

function normalizeLinks(links,channels){
  if(!Array.isArray(links)||links.length!==channels.length)throw Error('频道配置数量不正确');
  return links.map((link,i)=>{
    const url=validURL(typeof link?.url==='string'?link.url:'');
    if(link?.enabled&&!url)throw Error(channels[i].name+'：启用前请填写地址');
    return {url,enabled:!!link?.enabled};
  });
}

function createSettings(channels,storage){
  const defaults=()=>channels.map(c=>({url:c.url,enabled:c.enabled}));
  const config={links:defaults(),pic:{...defaultPicture}};
  let warning='';
  try{
    const saved=JSON.parse(storage.getItem(KEY)||'null');
    if(saved&&Array.isArray(saved.links)&&saved.links.length===channels.length){
      config.links=normalizeLinks(saved.links,channels);
      if(saved.pic&&typeof saved.pic==='object'){
        for(const k of ['scan','vig','autohide','autoplay','immersive'])if(typeof saved.pic[k]==='boolean')config.pic[k]=saved.pic[k];
        config.pic.bri=Math.max(.7,Math.min(1.25,Number(saved.pic.bri)||1));
        config.pic.speed=[.5,.75,1,1.25].includes(saved.pic.speed)?saved.pic.speed:1;
      }
    }
  }catch(e){warning='浏览器保存不可用或旧设置无效；当前页面仍可使用。';}
  return {
    config,warning,defaults,
    draft:()=>config.links.map(link=>({...link})),
    changed:draft=>!!draft&&JSON.stringify(draft)!==JSON.stringify(config.links),
    validate:draft=>normalizeLinks(draft,channels),
    saveLinks:draft=>{config.links=normalizeLinks(draft,channels);return config.links.map(link=>({...link}));},
    persist:()=>{try{storage.setItem(KEY,JSON.stringify(config));return true}catch(e){return false}}
  };
}

export { createSettings, validURL };

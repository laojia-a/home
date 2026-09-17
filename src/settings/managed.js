function createManagedSettings(config, settings) {
  let managed=false,revision=0,password='';
  async function request(path,options={}) {
    const response=await fetch(path,{cache:'no-store',...options});
    const body=await response.json();
    if(!response.ok)throw Error(body.error||'服务端请求失败');
    return body;
  }
  async function load(){
    if(!['http:','https:'].includes(location.protocol))return false;
    try{
      const body=await request('/api/config');
      if(body.managed){managed=true;revision=body.revision;config.links=settings.validate(body.links||settings.defaults());}
    }catch(e){
      if(location.protocol==='https:')throw Error('全站配置暂时不可用，请稍后刷新。');
    }
    return managed;
  }
  async function login(value){
    if(!managed)return true;
    await request('/api/admin/auth',{method:'POST',headers:{authorization:'Bearer '+value}});
    password=value;
    return true;
  }
  async function save(draft){
    if(!managed){config.links=settings.saveLinks(draft);if(!settings.persist())throw Error('浏览器拒绝保存');return config.links;}
    const links=settings.validate(draft);
    const body=await request('/api/admin/config',{method:'PUT',headers:{'content-type':'application/json',authorization:'Bearer '+password},body:JSON.stringify({links,revision})});
    revision=body.revision;config.links=settings.saveLinks(body.links);
    return config.links;
  }
  return {load,login,save,managed:()=>managed,authenticated:()=>!!password,logout:()=>{password='';}};
}
export { createManagedSettings };

import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { mountTelevision } from '../../src/ui/tv-shell.js';
import { siteMarkDataUrl } from '../../src/ui/site-marks.js';
import { originalTheme, inventoryScene } from '../ch1-original-inventory.js';

const screen=document.querySelector('#screen');
const cabinet=mountTelevision(screen,Array.from({length:7},(_,i)=>({n:i+1,name:i===0?'临床工具集':'频道 '+(i+1)})),()=>{});
cabinet.update({ch:1,power:true,paused:false,menu:false,pauseReason:null});
document.querySelector('#siteMark').src=siteMarkDataUrl('cth');
document.querySelectorAll('.tv-key,.tv-dial').forEach(button=>{button.disabled=true;button.title='静态材质样稿';});
document.querySelector('#tvPlayLabel').textContent='静帧';

const canvas=document.querySelector('#sceneCanvas');
const originalCanvas=document.querySelector('#originalCanvas');
let renderer;
try {
  renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance'});
} catch(error) {
  const alert=document.querySelector('#studyError');alert.hidden=false;alert.textContent='此样稿需要 WebGL 2。当前浏览器未能建立 3D 画布，请在支持 WebGL 的浏览器中预览。';
  throw error;
}
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.VSMShadowMap;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=.83;
renderer.outputColorSpace=THREE.SRGBColorSpace;
const scene=new THREE.Scene();
scene.background=new THREE.Color('#dddcca');
scene.fog=new THREE.Fog('#dddcca',19,39);
const camera=new THREE.PerspectiveCamera(29,1,.1,60);
const target=new THREE.Vector3(0,.75,0);
const pmrem=new THREE.PMREMGenerator(renderer);
const environment=new RoomEnvironment();
const environmentTarget=pmrem.fromScene(environment,.055);
scene.environment=environmentTarget.texture;
scene.environmentIntensity=.48;
environment.dispose();pmrem.dispose();

scene.add(new THREE.HemisphereLight('#fff8e8','#9aa38c',.7));
const key=new THREE.DirectionalLight('#fff3d8',2.25);
key.position.set(-4,8,5);key.castShadow=true;key.shadow.mapSize.set(1024,1024);
Object.assign(key.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:24});
key.shadow.bias=-.0003;key.shadow.normalBias=.012;key.shadow.radius=14;key.shadow.blurSamples=16;
scene.add(key);
const fill=new THREE.DirectionalLight('#e6eedf',.6);fill.position.set(5,4,-2);scene.add(fill);

function grainTexture(){
  const size=128,data=new Uint8Array(size*size*4);let seed=831;
  for(let i=0;i<data.length;i+=4){seed=(1664525*seed+1013904223)>>>0;const v=115+(seed%24);data[i]=data[i+1]=data[i+2]=v;data[i+3]=255;}
  const texture=new THREE.DataTexture(data,size,size);texture.needsUpdate=true;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(3,3);return texture;
}
const grain=grainTexture();
const plastic=new THREE.MeshPhysicalMaterial({color:'#8da984',roughness:.56,metalness:0,clearcoat:.12,clearcoatRoughness:.5,bumpMap:grain,bumpScale:0});
const lightPlastic=new THREE.MeshPhysicalMaterial({color:'#dedfc9',roughness:.57,clearcoat:.13,bumpMap:grain,bumpScale:0});
const capMaterial=new THREE.MeshPhysicalMaterial({color:'#79976c',roughness:.43,clearcoat:.2,clearcoatRoughness:.3});
const glass=new THREE.MeshPhysicalMaterial({color:'#edf3e7',roughness:.14,transmission:.82,thickness:.12,ior:1.4,envMapIntensity:.9,clearcoat:.3,clearcoatRoughness:.065});
// An opaque liquid surface remains visible through the outer transmissive glass.
const liquidMaterial=new THREE.MeshPhysicalMaterial({color:'#80a387',roughness:.23,clearcoat:.75,clearcoatRoughness:.12});
const floor=new THREE.Mesh(new THREE.PlaneGeometry(180,180),new THREE.MeshStandardMaterial({color:'#cecdb6',roughness:.94}));
floor.rotation.x=-Math.PI/2;floor.receiveShadow=true;scene.add(floor);

function mesh(geometry,material,parent,x=0,y=0,z=0){const object=new THREE.Mesh(geometry,material);object.position.set(x,y,z);object.castShadow=true;object.receiveShadow=true;parent.add(object);return object;}
function box(w,h,d,mat,parent,x=0,y=0,z=0,r=.045){return mesh(new RoundedBoxGeometry(w,h,d,3,r),mat,parent,x,y,z);}
function cyl(r,h,mat,parent,x=0,y=0,z=0){return mesh(new THREE.CylinderGeometry(r,r,h,64),mat,parent,x,y,z);}
function torus(r,t,mat,parent,x,y,z){const o=mesh(new THREE.TorusGeometry(r,t,10,64),mat,parent,x,y,z);o.rotation.x=Math.PI/2;return o;}
function contact(x,z,sx,sz,opacity=.16,parent=scene){
  const cnv=document.createElement('canvas');cnv.width=cnv.height=128;const c=cnv.getContext('2d');
  const gradient=c.createRadialGradient(64,64,8,64,64,62);gradient.addColorStop(0,'rgba(35,46,30,.6)');gradient.addColorStop(.45,'rgba(35,46,30,.22)');gradient.addColorStop(1,'rgba(35,46,30,0)');
  c.fillStyle=gradient;c.fillRect(0,0,128,128);
  const shadow=new THREE.Mesh(new THREE.PlaneGeometry(sx,sz),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(cnv),transparent:true,opacity,depthWrite:false}));
  shadow.rotation.x=-Math.PI/2;shadow.position.set(x,.007,z);parent.add(shadow);
}
function printedTexture(title,subtitle,{paper='#f0eddf',accent='#a5b594',pouch=false}={}){
  const cnv=document.createElement('canvas');cnv.width=cnv.height=512;const c=cnv.getContext('2d');
  c.fillStyle=paper;c.fillRect(0,0,512,512);
  c.fillStyle=accent;c.fillRect(0,0,512,pouch?65:120);
  c.fillStyle='#405b42';c.textAlign='center';c.textBaseline='middle';
  c.font='500 66px "Microsoft YaHei",sans-serif';c.fillText(title,256,pouch?245:295);
  const texture=new THREE.CanvasTexture(cnv);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=renderer.capabilities.getMaxAnisotropy();return texture;
}
function bloodTube(parent,x,z,height,fill){
  const group=new THREE.Group();group.position.set(x,.16,z);parent.add(group);
  const r=.18;
  const points=[new THREE.Vector2(0,0),new THREE.Vector2(.08,.005),new THREE.Vector2(.147,.04),new THREE.Vector2(r,.13),new THREE.Vector2(r,height),new THREE.Vector2(.158,height),new THREE.Vector2(.158,.15),new THREE.Vector2(.13,.08),new THREE.Vector2(0,.07)];
  const tube=mesh(new THREE.LatheGeometry(points,80),glass,group);tube.castShadow=false;
  const fluid=cyl(.151,fill,liquidMaterial,group,0,.12+fill/2,0);fluid.castShadow=false;
  const meniscus=torus(.143,.009,liquidMaterial,group,0,.12+fill,0);meniscus.castShadow=false;
  const cap=cyl(.218,.21,capMaterial,group,0,height+.075,0);
  torus(.203,.017,lightPlastic,group,0,height-.034,0);

  // The long bright reflection is an actual studio light reflected in the glass.
  return group;
}

const rack=new THREE.Group();rack.position.set(-1.55,0,.08);rack.rotation.y=-.04;scene.add(rack);
box(2.12,.19,1.0,plastic,rack,0,.16,0,.08);
for(const x of [-.88,.88]){box(.16,.55,.69,plastic,rack,x,.49,0,.04);box(.32,.055,.76,lightPlastic,rack,x,.055,0,.025);}
function perforatedShelf(){
  const shape=new THREE.Shape();const w=2.12,h=.96,r=.14;
  shape.moveTo(-w/2+r,-h/2);shape.lineTo(w/2-r,-h/2);shape.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);shape.lineTo(w/2,h/2-r);shape.quadraticCurveTo(w/2,h/2,w/2-r,h/2);shape.lineTo(-w/2+r,h/2);shape.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);shape.lineTo(-w/2,-h/2+r);shape.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
  for(const x of [-.47,.47]){const hole=new THREE.Path();hole.absarc(x,0,.275,0,Math.PI*2,true);shape.holes.push(hole);}
  const geo=new THREE.ExtrudeGeometry(shape,{depth:.10,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.024,bevelThickness:.024,curveSegments:36});
  geo.rotateX(-Math.PI/2);return geo;
}
mesh(perforatedShelf(),plastic,rack,0,.71,0);
bloodTube(rack,-.47,0,1.72,.78).scale.set(1.25,1,1.25);bloodTube(rack,.47,0,1.95,1.0).scale.set(1.25,1,1.25);
contact(-1.55,.08,2.8,1.5,.25);

// One simplified reagent pack forms the secondary subject.
const paper=new THREE.MeshStandardMaterial({color:'#dedfca',roughness:.93,bumpMap:grain,bumpScale:0});
const front=new THREE.MeshStandardMaterial({map:printedTexture('试剂盒','试剂 / 分类存放'),roughness:.87,bumpMap:grain,bumpScale:0});
const carton=new THREE.Group();carton.position.set(1.50,0,-.43);carton.rotation.y=-.12;scene.add(carton);
box(1.22,1.55,.88,[paper,paper,paper,paper,front,paper],carton,0,.80,0,.075);

contact(1.50,-.43,1.8,1.4,.20);
// A sealed soft pack occupies the near plane. Its shallow wrinkles catch the key light.
const pouch=new THREE.Group();pouch.position.set(.65,.035,1.58);pouch.rotation.y=-.17;scene.add(pouch);
const backing=new THREE.MeshPhysicalMaterial({color:'#d9decd',roughness:.7,metalness:0,clearcoat:.1});
box(1.30,.055,1.7,backing,pouch,0,.008,0,.04);
const pouchGeo=new THREE.PlaneGeometry(1.26,1.65,40,40);const pos=pouchGeo.attributes.position;
for(let i=0;i<pos.count;i++){const x=pos.getX(i),y=pos.getY(i);const bulge=.095*Math.pow(Math.max(0,Math.cos(x/1.26*Math.PI)*Math.cos(y/1.65*Math.PI)),.7);pos.setZ(i,bulge);}
pouchGeo.computeVertexNormals();
const pouchMat=new THREE.MeshPhysicalMaterial({map:printedTexture('耗材包','耗材 / 分类存放',{pouch:true,paper:'#eaeadd',accent:'#a4af94'}),roughness:.55,clearcoat:.2,clearcoatRoughness:.4,side:THREE.DoubleSide});
const pouchFace=mesh(pouchGeo,pouchMat,pouch,0,.04,0);pouchFace.rotation.x=-Math.PI/2;
contact(.65,1.58,1.65,2.0,.20);

const renderTarget=new THREE.WebGLRenderTarget(1,1,{samples:4,type:THREE.HalfFloatType});
const composer=new EffectComposer(renderer,renderTarget);
composer.addPass(new RenderPass(scene,camera));
const bokeh=new BokehPass(scene,camera,{focus:8,aperture:.0005,maxblur:.003});composer.addPass(bokeh);
composer.addPass(new OutputPass());
let original=false,depth=true,originalInstance;
const sceneElements=['sceneType','materialLegend','sceneCaption'];

function paint(){
  const width=screen.clientWidth,height=screen.clientHeight;
  if(!width||!height)return;
  renderer.setSize(width,height,false);composer.setSize(width,height);
  camera.aspect=width/height;
  const distance=Math.max(1,1.7/camera.aspect);
  camera.position.set(2.0*distance,3.6*distance,8.8*distance);
  camera.lookAt(target);camera.updateProjectionMatrix();camera.updateMatrixWorld();
  bokeh.uniforms.focus.value=-new THREE.Vector3(-1.4,1.25,.3).applyMatrix4(camera.matrixWorldInverse).z;
  bokeh.enabled=depth;
  if(original){
    const viewport={width,height,dpr:Math.min(devicePixelRatio,2)};
    if(!originalInstance)originalInstance=inventoryScene.create({canvas:originalCanvas,viewport,theme:originalTheme,index:1,count:6});
    originalInstance.resize(viewport);originalInstance.render({elapsedMs:7560,deltaMs:0,playing:false});
  }else composer.render();
  document.body.dataset.rendered='true';
}
document.querySelector('#compare').onclick=event=>{
  original=!original;event.currentTarget.setAttribute('aria-pressed',String(original));event.currentTarget.textContent=original?'返回 3D 样稿':'原版对照';
  originalCanvas.hidden=!original;canvas.hidden=original;sceneElements.forEach(id=>document.getElementById(id).hidden=original);
  document.querySelector('#depth').disabled=original;paint();
};
document.querySelector('#depth').onclick=event=>{depth=!depth;event.currentTarget.setAttribute('aria-pressed',String(depth));event.currentTarget.textContent=depth?'景深：开':'景深：关';paint();};
document.querySelector('#view').onclick=event=>{const active=document.body.classList.toggle('close-up');event.currentTarget.setAttribute('aria-pressed',String(active));event.currentTarget.textContent=active?'放回电视':'放大画面';requestAnimationFrame(paint);};
const observer=new ResizeObserver(paint);observer.observe(screen);
window.addEventListener('pagehide',()=>{observer.disconnect();originalInstance?.dispose();composer.dispose();bokeh.dispose();environmentTarget.dispose();renderer.dispose();});
document.fonts.ready.then(paint);
paint();

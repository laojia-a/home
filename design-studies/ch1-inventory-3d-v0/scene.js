import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { mountTelevision } from '../../src/ui/tv-shell.js';
import { siteMarkDataUrl } from '../../src/ui/site-marks.js';
import { site as originalSite } from '../../src/animations/sites/cth/index.js';

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
const plastic=new THREE.MeshPhysicalMaterial({color:'#85967b',roughness:.56,metalness:0,clearcoat:.12,clearcoatRoughness:.5,bumpMap:grain,bumpScale:.008});
const lightPlastic=new THREE.MeshPhysicalMaterial({color:'#dedfc9',roughness:.57,clearcoat:.13,bumpMap:grain,bumpScale:.006});
const capMaterial=new THREE.MeshPhysicalMaterial({color:'#869d7a',roughness:.43,clearcoat:.2,clearcoatRoughness:.3});
const glass=new THREE.MeshPhysicalMaterial({color:'#edf3e7',roughness:.055,transmission:.94,thickness:.14,ior:1.5,envMapIntensity:2.2,clearcoat:1,clearcoatRoughness:.065});
// An opaque liquid surface remains visible through the outer transmissive glass.
const liquidMaterial=new THREE.MeshPhysicalMaterial({color:'#78967c',roughness:.23,clearcoat:.75,clearcoatRoughness:.12});
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
function printedTexture(title,subtitle,{paper='#ecebdf',accent='#8c9c80',pouch=false}={}){
  const cnv=document.createElement('canvas');cnv.width=1024;cnv.height=1024;const c=cnv.getContext('2d');
  c.fillStyle=paper;c.fillRect(0,0,1024,1024);
  c.fillStyle=accent;c.fillRect(0,0,1024,pouch?125:170);
  c.fillStyle='#f2f1e6';c.font='500 35px "Microsoft YaHei",sans-serif';c.fillText('临床工具集',65,95);
  c.fillStyle='#3e5140';c.font='600 115px "Microsoft YaHei",sans-serif';c.fillText(title,65,445);
  c.fillStyle='#858f7c';c.font='32px "Microsoft YaHei",sans-serif';c.fillText(subtitle,68,515);
  c.strokeStyle='#9eaa9255';c.lineWidth=2;c.beginPath();c.moveTo(65,594);c.lineTo(955,594);c.stroke();
  c.fillStyle='#8c9783';c.font='25px "Microsoft YaHei",sans-serif';c.fillText('物资示意',68,905);
  for(let i=0;i<48;i++){c.fillStyle=i%4===0?'#5b6e51':'#8d9b7c';c.fillRect(690+i*5,750,2+(i%3),92);}
  c.strokeStyle='#b4bda866';c.strokeRect(2,2,1020,1020);
  const texture=new THREE.CanvasTexture(cnv);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=renderer.capabilities.getMaxAnisotropy();return texture;
}
function ribs(parent,r,h,y,material,count=36){
  for(let i=0;i<count;i++){const a=i*Math.PI*2/count;const rib=box(.018,h,.028,material,parent,Math.sin(a)*r,y,Math.cos(a)*r,.008);rib.rotation.y=a;}
}
function graduations(parent,r,y,height){
  const cnv=document.createElement('canvas');cnv.width=128;cnv.height=512;const c=cnv.getContext('2d');
  c.strokeStyle='#657962a0';c.lineWidth=3;
  for(let i=0;i<9;i++){const py=45+i*47;c.beginPath();c.moveTo(i%2?63:38,py);c.lineTo(99,py);c.stroke();}
  const texture=new THREE.CanvasTexture(cnv);texture.colorSpace=THREE.SRGBColorSpace;
  const marks=mesh(new THREE.CylinderGeometry(r,r,height,64,1,true,-.32,.7),new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false,side:THREE.DoubleSide}),parent,0,y,0);marks.castShadow=false;
}
function bloodTube(parent,x,z,height,fill){
  const group=new THREE.Group();group.position.set(x,.16,z);parent.add(group);
  const r=.18;
  const points=[new THREE.Vector2(0,0),new THREE.Vector2(.08,.005),new THREE.Vector2(.147,.04),new THREE.Vector2(r,.13),new THREE.Vector2(r,height),new THREE.Vector2(.158,height),new THREE.Vector2(.158,.15),new THREE.Vector2(.13,.08),new THREE.Vector2(0,.07)];
  const tube=mesh(new THREE.LatheGeometry(points,80),glass,group);tube.castShadow=false;
  const fluid=cyl(.151,fill,liquidMaterial,group,0,.12+fill/2,0);fluid.castShadow=false;
  const meniscus=torus(.143,.009,liquidMaterial,group,0,.12+fill,0);meniscus.castShadow=false;
  const cap=cyl(.218,.21,capMaterial,group,0,height+.075,0);ribs(group,.213,.15,height+.073,capMaterial);
  torus(.203,.017,lightPlastic,group,0,height-.034,0);
  graduations(group,.181,height*.61,height*.53);
  // The long bright reflection is an actual studio light reflected in the glass.
  return group;
}

const rack=new THREE.Group();rack.position.set(-1.65,0,.35);rack.rotation.y=-.09;scene.add(rack);
box(2.64,.18,.97,plastic,rack,0,.16,0,.08);
for(const x of [-1.15,1.15]){box(.16,.55,.69,plastic,rack,x,.49,0,.04);box(.32,.055,.76,lightPlastic,rack,x,.055,0,.025);}
function perforatedShelf(){
  const shape=new THREE.Shape();const w=2.64,h=.92,r=.10;
  shape.moveTo(-w/2+r,-h/2);shape.lineTo(w/2-r,-h/2);shape.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);shape.lineTo(w/2,h/2-r);shape.quadraticCurveTo(w/2,h/2,w/2-r,h/2);shape.lineTo(-w/2+r,h/2);shape.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);shape.lineTo(-w/2,-h/2+r);shape.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
  for(const x of [-.73,0,.73]){const hole=new THREE.Path();hole.absarc(x,0,.235,0,Math.PI*2,true);shape.holes.push(hole);}
  const geo=new THREE.ExtrudeGeometry(shape,{depth:.10,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.024,bevelThickness:.024,curveSegments:36});
  geo.rotateX(-Math.PI/2);return geo;
}
mesh(perforatedShelf(),plastic,rack,0,.71,0);
bloodTube(rack,-.73,0,1.98,.88);bloodTube(rack,0,0,2.22,1.16);bloodTube(rack,.73,0,1.82,.65);
contact(-1.65,.35,3.4,1.5,.29);

// A conical centrifuge tube behind the focal rack.
const centrifuge=new THREE.Group();centrifuge.position.set(.03,0,-.92);scene.add(centrifuge);
const sleeve=box(.82,.19,.8,lightPlastic,centrifuge,0,.11,0,.065);
cyl(.18,.28,lightPlastic,centrifuge,0,.34,0);
torus(.15,.031,lightPlastic,centrifuge,0,.49,0);
const conePoints=[new THREE.Vector2(0,.2),new THREE.Vector2(.09,.25),new THREE.Vector2(.25,.85),new THREE.Vector2(.25,2.37),new THREE.Vector2(.218,2.37),new THREE.Vector2(.218,.86),new THREE.Vector2(.068,.30),new THREE.Vector2(0,.28)];
const conical=mesh(new THREE.LatheGeometry(conePoints,80),glass,centrifuge);conical.castShadow=false;
mesh(new THREE.ConeGeometry(.218,.68,64),liquidMaterial,centrifuge,0,.59,0).rotation.z=Math.PI;
cyl(.218,.45,liquidMaterial,centrifuge,0,1.145,0).castShadow=false;
cyl(.291,.24,lightPlastic,centrifuge,0,2.43,0);ribs(centrifuge,.287,.18,2.43,lightPlastic,40);
graduations(centrifuge,.252,1.55,1.1);contact(.03,-.92,1.3,1.25,.20);

// Two cardboard reagent packs establish a soft rear plane.
const paper=new THREE.MeshStandardMaterial({color:'#dedfca',roughness:.93,bumpMap:grain,bumpScale:.009});
const front=new THREE.MeshStandardMaterial({map:printedTexture('试剂盒','试剂 / 分类存放'),roughness:.87,bumpMap:grain,bumpScale:.006});
const carton=new THREE.Group();carton.position.set(1.38,0,-.88);carton.rotation.y=-.17;scene.add(carton);
box(1.26,1.92,.88,[paper,paper,paper,paper,front,paper],carton,0,.98,0,.022);
box(1.24,.032,.85,paper,carton,0,1.965,0,.01);
const seal=new THREE.MeshStandardMaterial({color:'#b7c0a3',roughness:.85});box(.33,.007,.91,seal,carton,0,1.985,0,.003);
contact(1.38,-.88,1.9,1.55,.22);
const carton2=new THREE.Group();carton2.position.set(2.35,0,-.34);carton2.rotation.y=.20;scene.add(carton2);
box(.73,1.09,.7,[paper,paper,paper,paper,front,paper],carton2,0,.56,0,.018);contact(2.35,-.34,1.15,1.1,.20);

// A sealed soft pack occupies the near plane. Its shallow wrinkles catch the key light.
const pouch=new THREE.Group();pouch.position.set(.86,.035,1.14);pouch.rotation.y=-.34;scene.add(pouch);
const backing=new THREE.MeshPhysicalMaterial({color:'#c1c5b7',roughness:.5,metalness:.18,clearcoat:.25});
box(1.30,.055,1.7,backing,pouch,0,.008,0,.04);
const pouchGeo=new THREE.PlaneGeometry(1.26,1.65,40,40);const pos=pouchGeo.attributes.position;
for(let i=0;i<pos.count;i++){const x=pos.getX(i),y=pos.getY(i);const bulge=.095*Math.pow(Math.max(0,Math.cos(x/1.26*Math.PI)*Math.cos(y/1.65*Math.PI)),.7);pos.setZ(i,bulge+.006*Math.sin(y*33+x*12)*Math.pow(Math.abs(x/.63),5));}
pouchGeo.computeVertexNormals();
const pouchMat=new THREE.MeshPhysicalMaterial({map:printedTexture('耗材包','耗材 / 分类存放',{pouch:true,paper:'#eaeadd',accent:'#a4af94'}),roughness:.55,clearcoat:.2,clearcoatRoughness:.4,side:THREE.DoubleSide});
const pouchFace=mesh(pouchGeo,pouchMat,pouch,0,.04,0);pouchFace.rotation.x=-Math.PI/2;
contact(.86,1.14,1.65,2.0,.25);

// Cryovial in the foreground: squat proportions and an opaque screw cap.
const cryo=new THREE.Group();cryo.position.set(2.29,0,.97);scene.add(cryo);
const cryoPoints=[new THREE.Vector2(0,.07),new THREE.Vector2(.15,.07),new THREE.Vector2(.20,.12),new THREE.Vector2(.20,.78),new THREE.Vector2(.173,.78),new THREE.Vector2(.173,.15),new THREE.Vector2(0,.13)];
mesh(new THREE.LatheGeometry(cryoPoints,64),glass,cryo).castShadow=false;
cyl(.167,.25,liquidMaterial,cryo,0,.25,0).castShadow=false;
cyl(.238,.23,capMaterial,cryo,0,.83,0);ribs(cryo,.231,.17,.84,capMaterial,32);
torus(.20,.012,lightPlastic,cryo,0,.70,0);contact(2.29,.97,.75,.75,.24);

const renderTarget=new THREE.WebGLRenderTarget(1,1,{samples:4,type:THREE.HalfFloatType});
const composer=new EffectComposer(renderer,renderTarget);
composer.addPass(new RenderPass(scene,camera));
const bokeh=new BokehPass(scene,camera,{focus:8,aperture:.0009,maxblur:.004});composer.addPass(bokeh);
composer.addPass(new OutputPass());
let original=false,depth=true,originalInstance;
const sceneElements=['sceneType','materialLegend','sceneCaption'];

function paint(){
  const width=screen.clientWidth,height=screen.clientHeight;
  if(!width||!height)return;
  renderer.setSize(width,height,false);composer.setSize(width,height);
  camera.aspect=width/height;
  const distance=Math.max(1,1.7/camera.aspect);
  camera.position.set(4.1*distance,3.7*distance,7.56*distance);
  camera.lookAt(target);camera.updateProjectionMatrix();camera.updateMatrixWorld();
  bokeh.uniforms.focus.value=-new THREE.Vector3(-1.4,1.25,.3).applyMatrix4(camera.matrixWorldInverse).z;
  bokeh.enabled=depth;
  if(original){
    const viewport={width,height,dpr:Math.min(devicePixelRatio,2)};
    if(!originalInstance)originalInstance=originalSite.scenes[1].create({canvas:originalCanvas,viewport,theme:originalSite.theme,index:1,count:6});
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

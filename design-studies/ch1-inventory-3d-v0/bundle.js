var Nh=0,sc=1,Uh=2;var wr=1,Fh=2,ui=3,di=0,Lt=1,en=2,qt=0,Ss=1,rc=2,ac=3,oc=4,Oh=5;var Ni=100,Bh=101,zh=102,kh=103,Vh=104,Gh=200,Hh=201,Wh=202,Xh=203,lc=204,cc=205,qh=206,Yh=207,Zh=208,Jh=209,$h=210,Kh=211,Qh=212,jh=213,eu=214,wa=0,Aa=1,Ca=2,ls=3,Ra=4,Pa=5,Ia=6,La=7,ao=0,tu=1,nu=2,_n=0,Ar=1,Cr=2,Rr=3,Ui=4,Pr=5,Ir=6,Lr=7;var hc=300,fi=301,Fi=302,oo=303,lo=304,Dr=306,cs=1e3,En=1001,Da=1002,vt=1003,iu=1004;var Nr=1005;var It=1006,co=1007;var pi=1008;var Yt=1009,uc=1010,dc=1011,bs=1012,ho=1013,xn=1014,an=1015,Dt=1016,uo=1017,fo=1018,Ts=1020,fc=35902,pc=35899,mc=1021,gc=1022,on=1023,wn=1026,mi=1027,po=1028,mo=1029,gi=1030,go=1031;var _o=1033,Ur=33776,Fr=33777,Or=33778,Br=33779,xo=35840,vo=35841,yo=35842,Mo=35843,So=36196,bo=37492,To=37496,Eo=37488,wo=37489,zr=37490,Ao=37491,Co=37808,Ro=37809,Po=37810,Io=37811,Lo=37812,Do=37813,No=37814,Uo=37815,Fo=37816,Oo=37817,Bo=37818,zo=37819,ko=37820,Vo=37821,Go=36492,Ho=36494,Wo=36495,Xo=36283,qo=36284,kr=36285,Yo=36286;var $s=2300,Na=2301,Ta=2302,ql=2303,Yl=2400,Zl=2401,Jl=2402;var su=3200,_c=3201;var Vr=0,ru=1,Xn="",Rt="srgb",Ks="srgb-linear",Qs="linear",et="srgb";var Ea=7680;var au=519,ou=512,lu=513,cu=514,Zo=515,hu=516,uu=517,Jo=518,du=519,fu=35044;var xc="300 es",mn=2e3,hs=2001;function Cd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pu(){let i=js("canvas");return i.style.display="block",i}var rh={},us=null;function vc(...i){let e="THREE."+i.shift();us?us("log",e,...i):console.log(e,...i)}function mu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Fe(...i){i=mu(i);let e="THREE."+i.shift();if(us)us("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Be(...i){i=mu(i);let e="THREE."+i.shift();if(us)us("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function wi(...i){let e=i.join(" ");e in rh||(rh[e]=!0,Fe(...i))}function gu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var _u={[wa]:Aa,[Ca]:Ia,[Ra]:La,[ls]:Pa,[Aa]:wa,[Ia]:Ca,[La]:Ra,[Pa]:ls},An=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var yl=Math.PI/180,Ua=180/Math.PI;function Es(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function Pd(i,e){return(i%e+e)%e}function Ml(i,e,t){return(1-t)*i+t*e}function ks(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ie=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Cn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(f!==x||c!==u||l!==d||h!==g){let p=c*u+l*d+h*g+f*x;p<0&&(u=-u,d=-d,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){let b=Math.acos(p),w=Math.sin(b);m=Math.sin(m*b)/w,o=Math.sin(o*b)/w,c=c*m+u*o,l=l*m+d*o,h=h*m+g*o,f=f*m+x*o}else{c=c*m+u*o,l=l*m+d*o,h=h*m+g*o,f=f*m+x*o;let b=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=b,l*=b,h*=b,f*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*f+c*d-l*u,e[t+1]=c*g+h*u+l*f-o*d,e[t+2]=l*g+h*d+o*u-c*f,e[t+3]=h*g-o*f-c*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),u=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ah.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sl=new O,ah=new Cn,Ge=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],x=s[0],p=s[3],m=s[6],b=s[1],w=s[4],y=s[7],E=s[2],T=s[5],L=s[8];return r[0]=a*x+o*b+c*E,r[3]=a*p+o*w+c*T,r[6]=a*m+o*y+c*L,r[1]=l*x+h*b+f*E,r[4]=l*p+h*w+f*T,r[7]=l*m+h*y+f*L,r[2]=u*x+d*b+g*E,r[5]=u*p+d*w+g*T,r[8]=u*m+d*y+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,u=o*c-h*r,d=l*r-a*c,g=t*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bl.makeScale(e,t)),this}rotate(e){return wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bl.makeRotation(-e)),this}translate(e,t){return wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bl=new Ge,oh=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lh=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Id(){let i={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?Qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ks]:{primaries:e,whitePoint:n,transfer:Qs,toXYZ:oh,fromXYZ:lh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:oh,fromXYZ:lh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}var Ze=Id();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yi,Fa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=js("canvas")),Yi.width=e.width,Yi.height=e.height;let s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=js("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ld=0,ds=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tl(s[a].image)):r.push(Tl(s[a]))}else r=Tl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Tl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var Dd=0,El=new O,Ht=class i extends An{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=En,s=En,r=It,a=pi,o=on,c=Yt,l=i.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Es(),this.name="",this.source=new ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(El).x}get height(){return this.source.getSize(El).y}get depth(){return this.source.getSize(El).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=hc;Ht.DEFAULT_ANISOTROPY=1;var mt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,y=(d+1)/2,E=(m+1)/2,T=(h+u)/4,L=(f+x)/4,v=(g+p)/4;return w>y&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=L/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=v/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=L/r,s=v/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-x)/b,this.z=(u-h)/b,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oa=class extends An{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Ht(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ds(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bt=class extends Oa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},er=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ba=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ct=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,h,f,u,d,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,f,u,d,g,x,p)}set(e,t,n,s,r,a,o,c,l,h,f,u,d,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),a=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,g=o*h,x=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=d+g*l,t[5]=u-x*l,t[9]=-o*c,t[2]=x-u*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,d=c*f,g=l*h,x=l*f;t[0]=u+x*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=x+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,d=c*f,g=l*h,x=l*f;t[0]=u-x*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,d=a*f,g=o*h,x=o*f;t[0]=c*h,t[4]=g*l-d,t[8]=u*l+x,t[1]=c*f,t[5]=x*l+u,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,d=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-u*f,t[8]=g*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*f+g,t[10]=u-x*f}else if(e.order==="XZY"){let u=a*c,d=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+x,t[5]=a*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nd,e,Ud)}lookAt(e,t,n){let s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Qn.crossVectors(n,Jt),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Qn.crossVectors(n,Jt)),Qn.normalize(),na.crossVectors(Jt,Qn),s[0]=Qn.x,s[4]=na.x,s[8]=Jt.x,s[1]=Qn.y,s[5]=na.y,s[9]=Jt.y,s[2]=Qn.z,s[6]=na.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],b=n[3],w=n[7],y=n[11],E=n[15],T=s[0],L=s[4],v=s[8],C=s[12],S=s[1],R=s[5],I=s[9],D=s[13],P=s[2],N=s[6],k=s[10],z=s[14],ee=s[3],q=s[7],K=s[11],j=s[15];return r[0]=a*T+o*S+c*P+l*ee,r[4]=a*L+o*R+c*N+l*q,r[8]=a*v+o*I+c*k+l*K,r[12]=a*C+o*D+c*z+l*j,r[1]=h*T+f*S+u*P+d*ee,r[5]=h*L+f*R+u*N+d*q,r[9]=h*v+f*I+u*k+d*K,r[13]=h*C+f*D+u*z+d*j,r[2]=g*T+x*S+p*P+m*ee,r[6]=g*L+x*R+p*N+m*q,r[10]=g*v+x*I+p*k+m*K,r[14]=g*C+x*D+p*z+m*j,r[3]=b*T+w*S+y*P+E*ee,r[7]=b*L+w*R+y*N+E*q,r[11]=b*v+w*I+y*k+E*K,r[15]=b*C+w*D+y*z+E*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],x=e[7],p=e[11],m=e[15],b=c*d-l*u,w=o*d-l*f,y=o*u-c*f,E=a*d-l*h,T=a*u-c*h,L=a*f-o*h;return t*(x*b-p*w+m*y)-n*(g*b-p*E+m*T)+s*(g*w-x*E+m*L)-r*(g*y-x*T+p*L)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],x=e[13],p=e[14],m=e[15],b=t*o-n*a,w=t*c-s*a,y=t*l-r*a,E=n*c-s*o,T=n*l-r*o,L=s*l-r*c,v=h*x-f*g,C=h*p-u*g,S=h*m-d*g,R=f*p-u*x,I=f*m-d*x,D=u*m-d*p,P=b*D-w*I+y*R+E*S-T*C+L*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/P;return e[0]=(o*D-c*I+l*R)*N,e[1]=(s*I-n*D-r*R)*N,e[2]=(x*L-p*T+m*E)*N,e[3]=(u*T-f*L-d*E)*N,e[4]=(c*S-a*D-l*C)*N,e[5]=(t*D-s*S+r*C)*N,e[6]=(p*y-g*L-m*w)*N,e[7]=(h*L-u*y+d*w)*N,e[8]=(a*I-o*S+l*v)*N,e[9]=(n*S-t*I-r*v)*N,e[10]=(g*T-x*y+m*b)*N,e[11]=(f*y-h*T-d*b)*N,e[12]=(o*C-a*R-c*v)*N,e[13]=(t*R-n*C+s*v)*N,e[14]=(x*w-g*E-p*b)*N,e[15]=(h*E-f*w+u*b)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,u=r*l,d=r*h,g=r*f,x=a*h,p=a*f,m=o*f,b=c*l,w=c*h,y=c*f,E=n.x,T=n.y,L=n.z;return s[0]=(1-(x+m))*E,s[1]=(d+y)*E,s[2]=(g-w)*E,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(u+m))*T,s[6]=(p+b)*T,s[7]=0,s[8]=(g+w)*L,s[9]=(p-b)*L,s[10]=(1-(u+x))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),c=Zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),un.copy(this);let l=1/a,h=1/o,f=1/c;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=mn,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===mn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===hs)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=mn,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===mn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===hs)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zi=new O,un=new ct,Nd=new O(0,0,0),Ud=new O(1,1,1),Qn=new O,na=new O,Jt=new O,ch=new ct,hh=new Cn,Rn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ch,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hh.setFromEuler(this),this.setFromQuaternion(hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fd=0,uh=new O,Ji=new Cn,On=new ct,ia=new O,Vs=new O,Od=new O,Bd=new Cn,dh=new O(1,0,0),fh=new O(0,1,0),ph=new O(0,0,1),mh={type:"added"},zd={type:"removed"},$i={type:"childadded",child:null},wl={type:"childremoved",child:null},At=class i extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new Rn,n=new Cn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ge}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(dh,e)}rotateY(e){return this.rotateOnAxis(fh,e)}rotateZ(e){return this.rotateOnAxis(ph,e)}translateOnAxis(e,t){return uh.copy(e).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dh,e)}translateY(e){return this.translateOnAxis(fh,e)}translateZ(e){return this.translateOnAxis(ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Vs,ia,this.up):On.lookAt(ia,Vs,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(On),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mh),$i.child=e,this.dispatchEvent($i),$i.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zd),wl.child=e,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mh),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,Od),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new O(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gt=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},kd={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=Pd(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Al(a,r,e+1/3),this.g=Al(a,r,e),this.b=Al(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Ze.workingToColorSpace(Ot.copy(this),e),Math.round(Ye(Ot.r*255,0,255))*65536+Math.round(Ye(Ot.g*255,0,255))*256+Math.round(Ye(Ot.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Ot.copy(this),t);let n=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Rt){Ze.workingToColorSpace(Ot.copy(this),e);let t=Ot.r,n=Ot.g,s=Ot.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(sa);let n=Ml(jn.h,sa.h,t),s=Ml(jn.s,sa.s,t),r=Ml(jn.l,sa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new ze;ze.NAMES=xu;var nr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ai=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},dn=new O,Bn=new O,Cl=new O,zn=new O,Ki=new O,Qi=new O,gh=new O,Rl=new O,Pl=new O,Il=new O,Ll=new mt,Dl=new mt,Nl=new mt,ii=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),Bn.subVectors(n,t),Cl.subVectors(e,t);let a=dn.dot(dn),o=dn.dot(Bn),c=dn.dot(Cl),l=Bn.dot(Bn),h=Bn.dot(Cl),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(a,zn.y),c.addScaledVector(o,zn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ll.setScalar(0),Dl.setScalar(0),Nl.setScalar(0),Ll.fromBufferAttribute(e,t),Dl.fromBufferAttribute(e,n),Nl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ll,r.x),a.addScaledVector(Dl,r.y),a.addScaledVector(Nl,r.z),a}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),Bn.subVectors(e,t),dn.cross(Bn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),dn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,n),Qi.subVectors(r,n),Rl.subVectors(e,n);let c=Ki.dot(Rl),l=Qi.dot(Rl);if(c<=0&&l<=0)return t.copy(n);Pl.subVectors(e,s);let h=Ki.dot(Pl),f=Qi.dot(Pl);if(h>=0&&f<=h)return t.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ki,a);Il.subVectors(e,r);let d=Ki.dot(Il),g=Qi.dot(Il);if(g>=0&&d<=g)return t.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Qi,o);let p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return gh.subVectors(r,s),o=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(gh,o);let m=1/(p+x+u);return a=x*m,o=u*m,t.copy(n).addScaledVector(Ki,a).addScaledVector(Qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),aa.subVectors(this.max,Gs),ji.subVectors(e.a,Gs),es.subVectors(e.b,Gs),ts.subVectors(e.c,Gs),ei.subVectors(es,ji),ti.subVectors(ts,es),Mi.subVectors(ji,ts);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-Mi.z,Mi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,Mi.z,0,-Mi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-Mi.y,Mi.x,0];return!Ul(t,ji,es,ts,aa)||(t=[1,0,0,0,1,0,0,0,1],!Ul(t,ji,es,ts,aa))?!1:(oa.crossVectors(ei,ti),t=[oa.x,oa.y,oa.z],Ul(t,ji,es,ts,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},kn=[new O,new O,new O,new O,new O,new O,new O,new O],fn=new O,ra=new Pn,ji=new O,es=new O,ts=new O,ei=new O,ti=new O,Mi=new O,Gs=new O,aa=new O,oa=new O,Si=new O;function Ul(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Si.fromArray(i,r);let o=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),c=e.dot(Si),l=t.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var St=new O,la=new ie,Vd=0,Kt=class extends An{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fu,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ks(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ir=class extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var sr=class extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Gd=new Pn,Hs=new O,Fl=new O,si=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Gd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);let t=Hs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(Fl)),this.expandByPoint(Hs.copy(e.center).sub(Fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Hd=0,sn=new ct,Ol=new At,ns=new O,$t=new Pn,Ws=new Pn,wt=new O,Bt=class i extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cd(e)?sr:ir)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors($t.min,Ws.min),$t.expandByPoint(wt),wt.addVectors($t.max,Ws.max),$t.expandByPoint(wt)):($t.expandByPoint(Ws.min),$t.expandByPoint(Ws.max))}$t.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)wt.fromBufferAttribute(o,l),c&&(ns.fromBufferAttribute(e,l),wt.add(ns)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new O,c[v]=new O;let l=new O,h=new O,f=new O,u=new ie,d=new ie,g=new ie,x=new O,p=new O;function m(v,C,S){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,C),f.fromBufferAttribute(n,S),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,C),g.fromBufferAttribute(r,S),h.sub(l),f.sub(l),d.sub(u),g.sub(u);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(R),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),o[v].add(x),o[C].add(x),o[S].add(x),c[v].add(p),c[C].add(p),c[S].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let v=0,C=b.length;v<C;++v){let S=b[v],R=S.start,I=S.count;for(let D=R,P=R+I;D<P;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let w=new O,y=new O,E=new O,T=new O;function L(v){E.fromBufferAttribute(s,v),T.copy(E);let C=o[v];w.copy(C),w.sub(E.multiplyScalar(E.dot(C))).normalize(),y.crossVectors(T,C);let R=y.dot(c[v])<0?-1:1;a.setXYZW(v,w.x,w.y,w.z,R)}for(let v=0,C=b.length;v<C;++v){let S=b[v],R=S.start,I=S.count;for(let D=R,P=R+I;D<P;D+=3)L(e.getX(D+0)),L(e.getX(D+1)),L(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,h=new O,f=new O;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*h;for(let m=0;m<h;m++)u[g++]=l[d++]}return new Kt(u,h,f)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=e(u,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Bl=new O,Wd=new O,Xd=new Ge,pn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Bl.subVectors(n,t).cross(Wd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Bl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xd.getNormalMatrix(e),s=this.coplanarPoint(Bl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},qd=0,Hn=class extends An{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=Ss,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ea,this.stencilZFail=Ea,this.stencilZPass=Ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new pn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Vn=new O,zl=new O,ca=new O,ha=new O,za=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zl.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),ha.copy(this.origin).sub(zl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ca),o=ha.dot(this.direction),c=-ha.dot(ca),l=ha.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*c-o,u=a*o-c,g=r*h,f>=0)if(u>=-g)if(u<=g){let x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(zl).addScaledVector(ca,u),d}intersectSphere(e,t){if(e.radius<0)return null;Vn.subVectors(e.center,this.origin);let n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,g=t.x-a.x,x=t.y-a.y,p=t.z-a.z,m=n.x-a.x,b=n.y-a.y,w=n.z-a.z,y=Math.abs(c),E=Math.abs(l),T=Math.abs(h),L,v,C,S,R,I,D,P,N,k,z,ee;if(y>=E&&y>=T?(C=c,I=f,N=g,ee=m,c>=0?(L=l,v=h,S=u,R=d,D=x,P=p,k=b,z=w):(L=h,v=l,S=d,R=u,D=p,P=x,k=w,z=b)):E>=T?(C=l,I=u,N=x,ee=b,l>=0?(L=h,v=c,S=d,R=f,D=p,P=g,k=w,z=m):(L=c,v=h,S=f,R=d,D=g,P=p,k=m,z=w)):(C=h,I=d,N=p,ee=w,h>=0?(L=c,v=l,S=f,R=u,D=g,P=x,k=m,z=b):(L=l,v=c,S=u,R=f,D=x,P=g,k=b,z=m)),C===0)return null;let q=L/C,K=v/C,j=1/C,Ae=S-q*I,Me=R-K*I,tt=D-q*N,Je=P-K*N,Qe=k-q*ee,J=z-K*ee,te=Qe*Je-J*tt,_e=Ae*J-Me*Qe,Oe=tt*Me-Je*Ae;if(s){if(te<0||_e<0||Oe<0)return null}else if((te<0||_e<0||Oe<0)&&(te>0||_e>0||Oe>0))return null;let Se=te+_e+Oe;if(Se===0)return null;let ke=j*(te*I+_e*N+Oe*ee);return(Se>0?ke<0:ke>0)?null:this.at(ke/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ri=class extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_h=new ct,bi=new za,ua=new si,xh=new O,da=new O,fa=new O,pa=new O,kl=new O,ma=new O,vh=new O,ga=new O,ot=class extends At{constructor(e=new Bt,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(kl.fromBufferAttribute(f,e),a?ma.addScaledVector(kl,h):ma.addScaledVector(kl.sub(t),h))}t.add(ma)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(ua.containsPoint(bi.origin)===!1&&(bi.intersectSphere(ua,xh)===null||bi.origin.distanceToSquared(xh)>(e.far-e.near)**2))&&(_h.copy(r).invert(),bi.copy(e.ray).applyMatrix4(_h),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],b=Math.max(p.start,d.start),w=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=b,E=w;y<E;y+=3){let T=o.getX(y),L=o.getX(y+1),v=o.getX(y+2);s=_a(this,m,e,n,l,h,f,T,L,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let b=o.getX(p),w=o.getX(p+1),y=o.getX(p+2);s=_a(this,a,e,n,l,h,f,b,w,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],b=Math.max(p.start,d.start),w=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let y=b,E=w;y<E;y+=3){let T=y,L=y+1,v=y+2;s=_a(this,m,e,n,l,h,f,T,L,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let b=p,w=p+1,y=p+2;s=_a(this,a,e,n,l,h,f,b,w,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Yd(i,e,t,n,s,r,a,o){let c;if(e.side===Lt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===di,o),c===null)return null;ga.copy(o),ga.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ga);return l<t.near||l>t.far?null:{distance:l,point:ga.clone(),object:i}}function _a(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,da),i.getVertexPosition(c,fa),i.getVertexPosition(l,pa);let h=Yd(i,e,t,n,da,fa,pa,vh);if(h){let f=new O;ii.getBarycoord(vh,da,fa,pa,f),s&&(h.uv=ii.getInterpolatedAttribute(s,o,c,l,f,new ie)),r&&(h.uv1=ii.getInterpolatedAttribute(r,o,c,l,f,new ie)),a&&(h.normal=ii.getInterpolatedAttribute(a,o,c,l,f,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new O,materialIndex:0};ii.getNormal(da,fa,pa,u.normal),h.face=u,h.barycoord=f}return h}var Ci=class extends Ht{constructor(e=null,t=1,n=1,s,r,a,o,c,l=vt,h=vt,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rr=class extends Kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},is=new ct,yh=new ct,xa=[],Mh=new Pn,Zd=new ct,Xs=new ot,qs=new si,ar=class extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Zd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),Mh.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(Mh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),qs.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,is),yh.multiplyMatrices(n,is),Xs.matrixWorld=yh,Xs.raycast(e,xa);for(let a=0,o=xa.length;a<o;a++){let c=xa[a];c.instanceId=r,c.object=this,t.push(c)}xa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ci(new Float32Array(s*this.count),s,this.count,po,an));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ti=new si,Jd=new ie(.5,.5),va=new O,ps=class{constructor(e=new pn,t=new pn,n=new pn,s=new pn,r=new pn,a=new pn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],x=r[9],p=r[10],m=r[11],b=r[12],w=r[13],y=r[14],E=r[15];if(s[0].setComponents(l-a,d-h,m-g,E-b).normalize(),s[1].setComponents(l+a,d+h,m+g,E+b).normalize(),s[2].setComponents(l+o,d+f,m+x,E+w).normalize(),s[3].setComponents(l-o,d-f,m-x,E-w).normalize(),n)s[4].setComponents(c,u,p,y).normalize(),s[5].setComponents(l-c,d-u,m-p,E-y).normalize();else if(s[4].setComponents(l-c,d-u,m-p,E-y).normalize(),t===mn)s[5].setComponents(l+c,d+u,m+p,E+y).normalize();else if(t===hs)s[5].setComponents(c,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);let t=Jd.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(va.x=s.normal.x>0?e.max.x:e.min.x,va.y=s.normal.y>0?e.max.y:e.min.y,va.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var or=class extends Ht{constructor(e=[],t=fi,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ri=class extends Ht{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ai=class extends Ht{constructor(e,t,n=xn,s,r,a,o=vt,c=vt,l,h=wn,f=1){if(h!==wn&&h!==mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ds(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ka=class extends ai{constructor(e,t=xn,n=fi,s,r,a=vt,o=vt,c,l=wn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},lr=class extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},In=class i extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function g(x,p,m,b,w,y,E,T,L,v,C){let S=y/L,R=E/v,I=y/2,D=E/2,P=T/2,N=L+1,k=v+1,z=0,ee=0,q=new O;for(let K=0;K<k;K++){let j=K*R-D;for(let Ae=0;Ae<N;Ae++){let Me=Ae*S-I;q[x]=Me*b,q[p]=j*w,q[m]=P,l.push(q.x,q.y,q.z),q[x]=0,q[p]=0,q[m]=T>0?1:-1,h.push(q.x,q.y,q.z),f.push(Ae/L),f.push(1-K/v),z+=1}}for(let K=0;K<v;K++)for(let j=0;j<L;j++){let Ae=u+j+N*K,Me=u+j+N*(K+1),tt=u+(j+1)+N*(K+1),Je=u+(j+1)+N*K;c.push(Ae,Me,Je),c.push(Me,tt,Je),ee+=6}o.addGroup(d,ee,C),d+=ee,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Pi=class i extends Bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,x=[],p=n/2,m=0;b(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function b(){let y=new O,E=new O,T=0,L=(t-e)/n;for(let v=0;v<=r;v++){let C=[],S=v/r,R=S*(t-e)+e;for(let I=0;I<=s;I++){let D=I/s,P=D*c+o,N=Math.sin(P),k=Math.cos(P);E.x=R*N,E.y=-S*n+p,E.z=R*k,f.push(E.x,E.y,E.z),y.set(N,L,k).normalize(),u.push(y.x,y.y,y.z),d.push(D,1-S),C.push(g++)}x.push(C)}for(let v=0;v<s;v++)for(let C=0;C<r;C++){let S=x[C][v],R=x[C+1][v],I=x[C+1][v+1],D=x[C][v+1];(e>0||C!==0)&&(h.push(S,R,D),T+=3),(t>0||C!==r-1)&&(h.push(R,I,D),T+=3)}l.addGroup(m,T,0),m+=T}function w(y){let E=g,T=new ie,L=new O,v=0,C=y===!0?e:t,S=y===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,p*S,0),u.push(0,S,0),d.push(.5,.5),g++;let R=g;for(let I=0;I<=s;I++){let P=I/s*c+o,N=Math.cos(P),k=Math.sin(P);L.x=C*k,L.y=p*S,L.z=C*N,f.push(L.x,L.y,L.z),u.push(0,S,0),T.x=N*.5+.5,T.y=k*.5*S+.5,d.push(T.x,T.y),g++}for(let I=0;I<s;I++){let D=E+I,P=R+I;y===!0?h.push(P,P+1,D):h.push(P+1,P,D),v+=3}l.addGroup(m,v,y===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cr=class i extends Pi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Qt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ie:new O);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,s=[],r=[],a=[],o=new O,c=new ct;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new O)}r[0]=new O,a[0]=new O;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ye(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ye(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ms=class extends Qt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Va=class extends ms{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yc(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Sh=new O,bh=new O,Vl=new yc,Gl=new yc,Hl=new yc,Ga=class extends Qt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(bh.subVectors(s[0],s[1]).add(s[0]),l=bh);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Sh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Vl.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,x,p),Gl.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,x,p),Hl.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Vl.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Gl.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Hl.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(Vl.calc(c),Gl.calc(c),Hl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Th(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function $d(i,e){let t=1-i;return t*t*e}function Kd(i,e){return 2*(1-i)*i*e}function Qd(i,e){return i*i*e}function Zs(i,e,t,n){return $d(i,e)+Kd(i,t)+Qd(i,n)}function jd(i,e){let t=1-i;return t*t*t*e}function ef(i,e){let t=1-i;return 3*t*t*i*e}function tf(i,e){return 3*(1-i)*i*i*e}function nf(i,e){return i*i*i*e}function Js(i,e,t,n,s){return jd(i,e)+ef(i,t)+tf(i,n)+nf(i,s)}var hr=class extends Qt{constructor(e=new ie,t=new ie,n=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(e,s.x,r.x,a.x,o.x),Js(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ha=class extends Qt{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(e,s.x,r.x,a.x,o.x),Js(e,s.y,r.y,a.y,o.y),Js(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ur=class extends Qt{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends Qt{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dr=class extends Qt{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Zs(e,s.x,r.x,a.x),Zs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Qt{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Zs(e,s.x,r.x,a.x),Zs(e,s.y,r.y,a.y),Zs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fr=class extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Th(o,c.x,l.x,h.x,f.x),Th(o,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ie().fromArray(s))}return this}},$l=Object.freeze({__proto__:null,ArcCurve:Va,CatmullRomCurve3:Ga,CubicBezierCurve:hr,CubicBezierCurve3:Ha,EllipseCurve:ms,LineCurve:ur,LineCurve3:Wa,QuadraticBezierCurve:dr,QuadraticBezierCurve3:Xa,SplineCurve:fr}),qa=class extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $l[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new $l[s.type]().fromJSON(s))}return this}},Ii=class extends qa{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ur(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new dr(this.currentPoint.clone(),new ie(e,t),new ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new hr(this.currentPoint.clone(),new ie(e,t),new ie(n,s),new ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new fr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new ms(e,t,n,s,r,a,o,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gs=class extends Ii{constructor(e){super(e),this.uuid=Es(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ii().fromJSON(s))}return this}};function sf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=vu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=cf(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,f=c;for(let u=t;u<s;u+=t){let d=i[u],g=i[u+1];d<o&&(o=d),g<c&&(c=g),d>h&&(h=d),g>f&&(f=g)}l=Math.max(h-o,f-c),l=l!==0?32767/l:0}return pr(r,a,t,o,c,l,0),a}function vu(i,e,t,n,s){let r;if(s===yf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Eh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Eh(a/n|0,i[a],i[a+1],r);return r&&_s(r,r.next)&&(gr(r),r=r.next),r}function Li(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(_s(t,t.next)||gt(t.prev,t,t.next)===0)){if(gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&pf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?af(i,n,s,r):rf(i)){e.push(c.i,i.i,l.i),gr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=of(Li(i),e),pr(i,e,t,n,s,r,2)):a===2&&lf(i,e,t,n,s,r):pr(Li(i),e,t,n,s,r,1);break}}}function rf(i){let e=i.prev,t=i,n=i.next;if(gt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),f=Math.min(o,c,l),u=Math.max(s,r,a),d=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Ys(s,o,r,c,a,l,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function af(i,e,t,n){let s=i.prev,r=i,a=i.next;if(gt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,c,l),g=Math.min(h,f,u),x=Math.max(o,c,l),p=Math.max(h,f,u),m=Kl(d,g,e,t,n),b=Kl(x,p,e,t,n),w=i.prevZ,y=i.nextZ;for(;w&&w.z>=m&&y&&y.z<=b;){if(w.x>=d&&w.x<=x&&w.y>=g&&w.y<=p&&w!==s&&w!==a&&Ys(o,h,c,f,l,u,w.x,w.y)&&gt(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Ys(o,h,c,f,l,u,y.x,y.y)&&gt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=m;){if(w.x>=d&&w.x<=x&&w.y>=g&&w.y<=p&&w!==s&&w!==a&&Ys(o,h,c,f,l,u,w.x,w.y)&&gt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=b;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Ys(o,h,c,f,l,u,y.x,y.y)&&gt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function of(i,e){let t=i;do{let n=t.prev,s=t.next.next;!_s(n,s)&&Mu(n,t,t.next,s)&&mr(n,s)&&mr(s,n)&&(e.push(n.i,t.i,s.i),gr(t),gr(t.next),t=i=s),t=t.next}while(t!==i);return Li(t)}function lf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_f(a,o)){let c=Su(a,o);a=Li(a,a.next),c=Li(c,c.next),pr(a,e,t,n,s,r,0),pr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function cf(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=vu(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(gf(l))}s.sort(hf);for(let r=0;r<s.length;r++)t=uf(s[r],t);return t}function hf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function uf(i,e){let t=df(i,e);if(!t)return e;let n=Su(t,i);return Li(n,n.next),Li(t,t.next)}function df(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(_s(i,t))return t;do{if(_s(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&yu(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);mr(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&ff(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function ff(i,e){return gt(i.prev,i,e.prev)<0&&gt(e.next,i,i.next)<0}function pf(i,e,t,n){let s=i;do s.z===0&&(s.z=Kl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mf(s)}function mf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Kl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function gf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function yu(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ys(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&yu(i,e,t,n,s,r,a,o)}function _f(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!xf(i,e)&&(mr(i,e)&&mr(e,i)&&vf(i,e)&&(gt(i.prev,i,e.prev)||gt(i,e.prev,e))||_s(i,e)&&gt(i.prev,i,i.next)>0&&gt(e.prev,e,e.next)>0)}function gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function _s(i,e){return i.x===e.x&&i.y===e.y}function Mu(i,e,t,n){let s=Ma(gt(i,e,t)),r=Ma(gt(i,e,n)),a=Ma(gt(t,n,i)),o=Ma(gt(t,n,e));return!!(s!==r&&a!==o||s===0&&ya(i,t,e)||r===0&&ya(i,n,e)||a===0&&ya(t,i,n)||o===0&&ya(t,e,n))}function ya(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ma(i){return i>0?1:i<0?-1:0}function xf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Mu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function mr(i,e){return gt(i.prev,i,i.next)<0?gt(i,e,i.next)>=0&&gt(i,i.prev,e)>=0:gt(i,e,i.prev)<0||gt(i,i.next,e)<0}function vf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Su(i,e){let t=Ql(i.i,i.x,i.y),n=Ql(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Eh(i,e,t,n){let s=Ql(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ql(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var jl=class{static triangulate(e,t,n=2){return sf(e,t,n)}},Ei=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];wh(e),Ah(n,e);let a=e.length;t.forEach(wh);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Ah(n,t[c]);let o=jl.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function wh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ah(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var _r=class i extends Bt{constructor(e=new gs([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Mf,w,y=!1,E,T,L,v;if(m){w=m.getSpacedPoints(h),y=!0,u=!1;let ne=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(h,ne),T=new O,L=new O,v=new O}u||(p=0,d=0,g=0,x=0);let C=o.extractPoints(l),S=C.shape,R=C.holes;if(!Ei.isClockWise(S)){S=S.reverse();for(let ne=0,re=R.length;ne<re;ne++){let ae=R[ne];Ei.isClockWise(ae)&&(R[ne]=ae.reverse())}}function D(ne){let ae=10000000000000001e-36,oe=ne[0];for(let he=1;he<=ne.length;he++){let Ne=he%ne.length,De=ne[Ne],Ve=De.x-oe.x,He=De.y-oe.y,U=Ve*Ve+He*He,nt=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(oe.x),Math.abs(oe.y)),$e=ae*nt*nt;if(U<=$e){ne.splice(Ne,1),he--;continue}oe=De}}D(S),R.forEach(D);let P=R.length,N=S;for(let ne=0;ne<P;ne++){let re=R[ne];S=S.concat(re)}function k(ne,re,ae){return re||Be("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(re,ae)}let z=S.length;function ee(ne,re,ae){let oe,he,Ne,De=ne.x-re.x,Ve=ne.y-re.y,He=ae.x-ne.x,U=ae.y-ne.y,nt=De*De+Ve*Ve,$e=De*U-Ve*He;if(Math.abs($e)>Number.EPSILON){let A=Math.sqrt(nt),_=Math.sqrt(He*He+U*U),V=re.x-Ve/A,W=re.y+De/A,Y=ae.x-U/_,le=ae.y+He/_,ce=((Y-V)*U-(le-W)*He)/(De*U-Ve*He);oe=V+De*ce-ne.x,he=W+Ve*ce-ne.y;let Z=oe*oe+he*he;if(Z<=2)return new ie(oe,he);Ne=Math.sqrt(Z/2)}else{let A=!1;De>Number.EPSILON?He>Number.EPSILON&&(A=!0):De<-Number.EPSILON?He<-Number.EPSILON&&(A=!0):Math.sign(Ve)===Math.sign(U)&&(A=!0),A?(oe=-Ve,he=De,Ne=Math.sqrt(nt)):(oe=De,he=Ve,Ne=Math.sqrt(nt/2))}return new ie(oe/Ne,he/Ne)}let q=[];for(let ne=0,re=N.length,ae=re-1,oe=ne+1;ne<re;ne++,ae++,oe++)ae===re&&(ae=0),oe===re&&(oe=0),q[ne]=ee(N[ne],N[ae],N[oe]);let K=[],j,Ae=q.concat();for(let ne=0,re=P;ne<re;ne++){let ae=R[ne];j=[];for(let oe=0,he=ae.length,Ne=he-1,De=oe+1;oe<he;oe++,Ne++,De++)Ne===he&&(Ne=0),De===he&&(De=0),j[oe]=ee(ae[oe],ae[Ne],ae[De]);K.push(j),Ae=Ae.concat(j)}let Me;if(p===0)Me=Ei.triangulateShape(N,R);else{let ne=[],re=[];for(let ae=0;ae<p;ae++){let oe=ae/p,he=d*Math.cos(oe*Math.PI/2),Ne=g*Math.sin(oe*Math.PI/2)+x;for(let De=0,Ve=N.length;De<Ve;De++){let He=k(N[De],q[De],Ne);_e(He.x,He.y,-he),oe===0&&ne.push(He)}for(let De=0,Ve=P;De<Ve;De++){let He=R[De];j=K[De];let U=[];for(let nt=0,$e=He.length;nt<$e;nt++){let A=k(He[nt],j[nt],Ne);_e(A.x,A.y,-he),oe===0&&U.push(A)}oe===0&&re.push(U)}}Me=Ei.triangulateShape(ne,re)}let tt=Me.length,Je=g+x;for(let ne=0;ne<z;ne++){let re=u?k(S[ne],Ae[ne],Je):S[ne];y?(L.copy(E.normals[0]).multiplyScalar(re.x),T.copy(E.binormals[0]).multiplyScalar(re.y),v.copy(w[0]).add(L).add(T),_e(v.x,v.y,v.z)):_e(re.x,re.y,0)}for(let ne=1;ne<=h;ne++)for(let re=0;re<z;re++){let ae=u?k(S[re],Ae[re],Je):S[re];y?(L.copy(E.normals[ne]).multiplyScalar(ae.x),T.copy(E.binormals[ne]).multiplyScalar(ae.y),v.copy(w[ne]).add(L).add(T),_e(v.x,v.y,v.z)):_e(ae.x,ae.y,f/h*ne)}for(let ne=p-1;ne>=0;ne--){let re=ne/p,ae=d*Math.cos(re*Math.PI/2),oe=g*Math.sin(re*Math.PI/2)+x;for(let he=0,Ne=N.length;he<Ne;he++){let De=k(N[he],q[he],oe);_e(De.x,De.y,f+ae)}for(let he=0,Ne=R.length;he<Ne;he++){let De=R[he];j=K[he];for(let Ve=0,He=De.length;Ve<He;Ve++){let U=k(De[Ve],j[Ve],oe);y?_e(U.x,U.y+w[h-1].y,w[h-1].x+ae):_e(U.x,U.y,f+ae)}}}Qe(),J();function Qe(){let ne=s.length/3;if(u){let re=0,ae=z*re;for(let oe=0;oe<tt;oe++){let he=Me[oe];Oe(he[2]+ae,he[1]+ae,he[0]+ae)}re=h+p*2,ae=z*re;for(let oe=0;oe<tt;oe++){let he=Me[oe];Oe(he[0]+ae,he[1]+ae,he[2]+ae)}}else{for(let re=0;re<tt;re++){let ae=Me[re];Oe(ae[2],ae[1],ae[0])}for(let re=0;re<tt;re++){let ae=Me[re];Oe(ae[0]+z*h,ae[1]+z*h,ae[2]+z*h)}}n.addGroup(ne,s.length/3-ne,0)}function J(){let ne=s.length/3,re=0;te(N,re),re+=N.length;for(let ae=0,oe=R.length;ae<oe;ae++){let he=R[ae];te(he,re),re+=he.length}n.addGroup(ne,s.length/3-ne,1)}function te(ne,re){let ae=ne.length;for(;--ae>=0;){let oe=ae,he=ae-1;he<0&&(he=ne.length-1);for(let Ne=0,De=h+p*2;Ne<De;Ne++){let Ve=z*Ne,He=z*(Ne+1),U=re+oe+Ve,nt=re+he+Ve,$e=re+he+He,A=re+oe+He;Se(U,nt,$e,A)}}}function _e(ne,re,ae){c.push(ne),c.push(re),c.push(ae)}function Oe(ne,re,ae){ke(ne),ke(re),ke(ae);let oe=s.length/3,he=b.generateTopUV(n,s,oe-3,oe-2,oe-1);rt(he[0]),rt(he[1]),rt(he[2])}function Se(ne,re,ae,oe){ke(ne),ke(re),ke(oe),ke(re),ke(ae),ke(oe);let he=s.length/3,Ne=b.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);rt(Ne[0]),rt(Ne[1]),rt(Ne[3]),rt(Ne[1]),rt(Ne[2]),rt(Ne[3])}function ke(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function rt(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new $l[s.type]().fromJSON(s)),new i(n,e.options)}},Mf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ie(r,a),new ie(o,c),new ie(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ie(a,1-c),new ie(l,1-f),new ie(u,1-g),new ie(x,1-m)]:[new ie(o,1-c),new ie(h,1-f),new ie(d,1-g),new ie(p,1-m)]}};function Sf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Di=class i extends Bt{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ye(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,f=new O,u=new ie,d=new O,g=new O,x=new O,p=0,m=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:p=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:p=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let b=0;b<=t;b++){let w=n+b*h*s,y=Math.sin(w),E=Math.cos(w);for(let T=0;T<=e.length-1;T++){f.x=e[T].x*y,f.y=e[T].y,f.z=e[T].x*E,a.push(f.x,f.y,f.z),u.x=b/t,u.y=T/(e.length-1),o.push(u.x,u.y);let L=c[3*T+0]*y,v=c[3*T+1],C=c[3*T+0]*E;l.push(L,v,C)}}for(let b=0;b<t;b++)for(let w=0;w<e.length-1;w++){let y=w+b*e.length,E=y,T=y+e.length,L=y+e.length+1,v=y+1;r.push(E,T,v),r.push(L,v,T)}this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("uv",new dt(o,2)),this.setAttribute("normal",new dt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Wn=class i extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=e/o,u=t/c,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let b=m*u-a;for(let w=0;w<l;w++){let y=w*f-r;g.push(y,-b,0),x.push(0,0,1),p.push(w/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<o;b++){let w=b+l*m,y=b+l*(m+1),E=b+1+l*(m+1),T=b+1+l*m;d.push(w,y,T),d.push(y,E,T)}this.setIndex(d),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var xr=class i extends Bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],f=[],u=new O,d=new O,g=new O;for(let x=0;x<=n;x++){let p=a+x/n*o;for(let m=0;m<=s;m++){let b=m/s*r;d.x=(e+t*Math.cos(p))*Math.cos(b),d.y=(e+t*Math.cos(p))*Math.sin(b),d.z=t*Math.sin(p),l.push(d.x,d.y,d.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(m/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){let m=(s+1)*x+p-1,b=(s+1)*(x-1)+p-1,w=(s+1)*(x-1)+p,y=(s+1)*x+p;c.push(m,b,y),c.push(b,w,y)}this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Oi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ch(s))s.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ch(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function zt(i){let e={};for(let t=0;t<i.length;t++){let n=Oi(i[t]);for(let s in n)e[s]=n[s]}return e}function Ch(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var _i={clone:Oi,merge:zt},Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ct=class extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=Ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ct().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xs=class extends Ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},rn=class extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gn=class extends rn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var vr=class extends Hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=ao,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vs=class extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ya=class extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ss(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var oi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Za=class extends oi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yl,endingEnd:Yl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zl:r=e,o=2*t-n;break;case Jl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zl:a=e,c=2*n-t;break;case Jl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,b=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,w=(-1-d)*p+(1.5+d)*x+.5*g,y=d*p-d*x;for(let E=0;E!==o;++E)r[E]=m*a[h+E]+b*a[l+E]+w*a[c+E]+y*a[f+E];return r}},Ja=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},$a=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ka=class extends oi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(s-t),x=1-g;for(let p=0;p!==o;++p)r[p]=a[l+p]*x+a[c+p]*g;return r}let u=o*2,d=e-1;for(let g=0;g!==o;++g){let x=a[l+g],p=a[c+g],m=d*u+g*2,b=f[m],w=f[m+1],y=e*u+g*2,E=h[y],T=h[y+1],L=Af(n,t,b,E,s);r[g]=bu(L,x,w,T,p)}return r}};function bu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function wf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Af(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=bu(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=wf(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ss(t,this.TimeBufferType),this.values=ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ss(e.times,Array),values:ss(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Wl(e.settings)&&(n.settings={inTangents:ss(e.settings.inTangents,Array),outTangents:ss(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ka(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case Na:t=this.InterpolantFactoryMethodLinear;break;case Ta:t=this.InterpolantFactoryMethodSmooth;break;case ql:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return Na;case this.InterpolantFactoryMethodSmooth:return Ta;case this.InterpolantFactoryMethodBezier:return ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Wl(this.settings)&&(Rh(this.settings.inTangents,e),Rh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Be("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Be("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Rd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Be("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ta,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[u+g]||x!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}jt.prototype.ValueTypeName="";jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=Na;var li=class extends jt{constructor(e,t,n){super(e,t,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=$s;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};Qa.prototype.ValueTypeName="color";var ja=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};ja.prototype.ValueTypeName="number";var eo=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Cn.slerpFlat(r,0,a,l-o,a,l,c);return r}},yr=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new eo(this.times,this.values,this.getValueSize(),e)}};yr.prototype.ValueTypeName="quaternion";yr.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends jt{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=$s;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};to.prototype.ValueTypeName="vector";var no=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tu=new no,io=class{constructor(e){this.manager=e!==void 0?e:Tu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};io.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Mr=class extends ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Xl=new ct,Ph=new O,Ih=new O,Sr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ph),Ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ih),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Xl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Xl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===hs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Sa=new O,ba=new Cn,Tn=new O,br=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sa,ba,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,Tn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Sa,ba,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ni=new O,Lh=new ie,Dh=new ie,Pt=class extends br{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,Lh,Dh),t.subVectors(Dh,Lh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ec=class extends Sr{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0}},Tr=class extends ys{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ec}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},hi=class extends br{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tc=class extends Sr{constructor(){super(new hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ms=class extends ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new tc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var rs=-90,as=1,so=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pt(rs,as,e,t);s.layers=this.layers,this.add(s);let r=new Pt(rs,as,e,t);r.layers=this.layers,this.add(r);let a=new Pt(rs,as,e,t);a.layers=this.layers,this.add(a);let o=new Pt(rs,as,e,t);o.layers=this.layers,this.add(o);let c=new Pt(rs,as,e,t);c.layers=this.layers,this.add(c);let l=new Pt(rs,as,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ro=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Er=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Cf.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Cf(){this._document.hidden===!1&&this.reset()}var Sc="\\[\\]\\.:\\/",Rf=new RegExp("["+Sc+"]","g"),bc="[^"+Sc+"]",Pf="[^"+Sc.replace("\\.","")+"]",If=/((?:WC+[\/:])*)/.source.replace("WC",bc),Lf=/(WCOD+)?/.source.replace("WCOD",Pf),Df=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),Nf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),Uf=new RegExp("^"+If+Lf+Df+Nf+"$"),Ff=["material","materials","bones","map"],nc=class{constructor(e,t,n){let s=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rf,"")}static parseTrackName(e){let t=Uf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ff.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=nc;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Q_=new Float32Array(1);var ic=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Tc(i,e,t,n){let s=Of(n);switch(t){case mc:return i*e;case po:return i*e/s.components*s.byteLength;case mo:return i*e/s.components*s.byteLength;case gi:return i*e*2/s.components*s.byteLength;case go:return i*e*2/s.components*s.byteLength;case gc:return i*e*3/s.components*s.byteLength;case on:return i*e*4/s.components*s.byteLength;case _o:return i*e*4/s.components*s.byteLength;case Ur:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vo:case Mo:return Math.max(i,16)*Math.max(e,8)/4;case xo:case yo:return Math.max(i,8)*Math.max(e,8)/2;case So:case bo:case Eo:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:case zr:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Go:case Ho:case Wo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xo:case qo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case kr:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Of(i){switch(i){case Yt:case uc:return{byteLength:1,components:1};case bs:case dc:case Dt:return{byteLength:2,components:1};case uo:case fo:return{byteLength:2,components:4};case xn:case ho:case an:return{byteLength:4,components:1};case fc:case pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function qu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zf(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ep=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,up=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",_p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ap=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Lp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Np=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Op=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$p=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Em=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Am=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Um=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ym=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ug=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:kf,alphahash_pars_fragment:Vf,alphamap_fragment:Gf,alphamap_pars_fragment:Hf,alphatest_fragment:Wf,alphatest_pars_fragment:Xf,aomap_fragment:qf,aomap_pars_fragment:Yf,batching_pars_vertex:Zf,batching_vertex:Jf,begin_vertex:$f,beginnormal_vertex:Kf,bsdfs:Qf,iridescence_fragment:jf,bumpmap_pars_fragment:ep,clipping_planes_fragment:tp,clipping_planes_pars_fragment:np,clipping_planes_pars_vertex:ip,clipping_planes_vertex:sp,color_fragment:rp,color_pars_fragment:ap,color_pars_vertex:op,color_vertex:lp,common:cp,cube_uv_reflection_fragment:hp,defaultnormal_vertex:up,displacementmap_pars_vertex:dp,displacementmap_vertex:fp,emissivemap_fragment:pp,emissivemap_pars_fragment:mp,colorspace_fragment:gp,colorspace_pars_fragment:_p,envmap_fragment:xp,envmap_common_pars_fragment:vp,envmap_pars_fragment:yp,envmap_pars_vertex:Mp,envmap_physical_pars_fragment:Lp,envmap_vertex:Sp,fog_vertex:bp,fog_pars_vertex:Tp,fog_fragment:Ep,fog_pars_fragment:wp,gradientmap_pars_fragment:Ap,lightmap_pars_fragment:Cp,lights_lambert_fragment:Rp,lights_lambert_pars_fragment:Pp,lights_pars_begin:Ip,lights_toon_fragment:Dp,lights_toon_pars_fragment:Np,lights_phong_fragment:Up,lights_phong_pars_fragment:Fp,lights_physical_fragment:Op,lights_physical_pars_fragment:Bp,lights_fragment_begin:zp,lights_fragment_maps:kp,lights_fragment_end:Vp,lightprobes_pars_fragment:Gp,logdepthbuf_fragment:Hp,logdepthbuf_pars_fragment:Wp,logdepthbuf_pars_vertex:Xp,logdepthbuf_vertex:qp,map_fragment:Yp,map_pars_fragment:Zp,map_particle_fragment:Jp,map_particle_pars_fragment:$p,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:Qp,morphinstance_vertex:jp,morphcolor_vertex:em,morphnormal_vertex:tm,morphtarget_pars_vertex:nm,morphtarget_vertex:im,normal_fragment_begin:sm,normal_fragment_maps:rm,normal_pars_fragment:am,normal_pars_vertex:om,normal_vertex:lm,normalmap_pars_fragment:cm,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:dm,iridescence_pars_fragment:fm,opaque_fragment:pm,packing:mm,premultiplied_alpha_fragment:gm,project_vertex:_m,dithering_fragment:xm,dithering_pars_fragment:vm,roughnessmap_fragment:ym,roughnessmap_pars_fragment:Mm,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:bm,shadowmap_vertex:Tm,shadowmask_pars_fragment:Em,skinbase_vertex:wm,skinning_pars_vertex:Am,skinning_vertex:Cm,skinnormal_vertex:Rm,specularmap_fragment:Pm,specularmap_pars_fragment:Im,tonemapping_fragment:Lm,tonemapping_pars_fragment:Dm,transmission_fragment:Nm,transmission_pars_fragment:Um,uv_pars_fragment:Fm,uv_pars_vertex:Om,uv_vertex:Bm,worldpos_vertex:zm,background_vert:km,background_frag:Vm,backgroundCube_vert:Gm,backgroundCube_frag:Hm,cube_vert:Wm,cube_frag:Xm,depth_vert:qm,depth_frag:Ym,distance_vert:Zm,distance_frag:Jm,equirect_vert:$m,equirect_frag:Km,linedashed_vert:Qm,linedashed_frag:jm,meshbasic_vert:eg,meshbasic_frag:tg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:sg,meshmatcap_frag:rg,meshnormal_vert:ag,meshnormal_frag:og,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:hg,meshphysical_frag:ug,meshtoon_vert:dg,meshtoon_frag:fg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:_g,sprite_vert:xg,sprite_frag:vg},ge={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Dn={basic:{uniforms:zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:zt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:zt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:zt([ge.points,ge.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:zt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:zt([ge.common,ge.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:zt([ge.sprite,ge.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:zt([ge.common,ge.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:zt([ge.lights,ge.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Dn.physical={uniforms:zt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var $o={r:0,b:0,g:0},yg=new ct,Yu=new Ge;Yu.set(-1,0,0,0,1,0,0,0,1);function Mg(i,e,t,n,s,r){let a=new ze(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function d(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let y=b.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(b){let w=!1,y=d(b);y===null?p(a,o):y&&y.isColor&&(p(y,1),w=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(b,w){let y=d(w);y&&(y.isCubeTexture||y.mapping===Dr)?(l===void 0&&(l=new ot(new In(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:Oi(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Yu),l.material.toneMapped=Ze.getTransfer(y.colorSpace)!==et,(h!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ot(new Wn(2,2),new Ct({name:"BackgroundMaterial",uniforms:Oi(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==et,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,w){b.getRGB($o,Mc(i)),t.buffers.color.setClear($o.r,$o.g,$o.b,w,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:g,addToRenderList:x,dispose:m}}function Sg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(R,I,D,P,N){let k=!1,z=f(R,P,D,I);r!==z&&(r=z,l(r.object)),k=d(R,P,D,N),k&&g(R,P,D,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(R,I,D,P),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function f(R,I,D,P){let N=P.wireframe===!0,k=n[I.id];k===void 0&&(k={},n[I.id]=k);let z=R.isInstancedMesh===!0?R.id:0,ee=k[z];ee===void 0&&(ee={},k[z]=ee);let q=ee[D.id];q===void 0&&(q={},ee[D.id]=q);let K=q[N];return K===void 0&&(K=u(c()),q[N]=K),K}function u(R){let I=[],D=[],P=[];for(let N=0;N<t;N++)I[N]=0,D[N]=0,P[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:P,object:R,attributes:{},index:null}}function d(R,I,D,P){let N=r.attributes,k=I.attributes,z=0,ee=D.getAttributes();for(let q in ee)if(ee[q].location>=0){let j=N[q],Ae=k[q];if(Ae===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(Ae=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(Ae=R.instanceColor)),j===void 0||j.attribute!==Ae||Ae&&j.data!==Ae.data)return!0;z++}return r.attributesNum!==z||r.index!==P}function g(R,I,D,P){let N={},k=I.attributes,z=0,ee=D.getAttributes();for(let q in ee)if(ee[q].location>=0){let j=k[q];j===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(j=R.instanceColor));let Ae={};Ae.attribute=j,j&&j.data&&(Ae.data=j.data),N[q]=Ae,z++}r.attributes=N,r.attributesNum=z,r.index=P}function x(){let R=r.newAttributes;for(let I=0,D=R.length;I<D;I++)R[I]=0}function p(R){m(R,0)}function m(R,I){let D=r.newAttributes,P=r.enabledAttributes,N=r.attributeDivisors;D[R]=1,P[R]===0&&(i.enableVertexAttribArray(R),P[R]=1),N[R]!==I&&(i.vertexAttribDivisor(R,I),N[R]=I)}function b(){let R=r.newAttributes,I=r.enabledAttributes;for(let D=0,P=I.length;D<P;D++)I[D]!==R[D]&&(i.disableVertexAttribArray(D),I[D]=0)}function w(R,I,D,P,N,k,z){z===!0?i.vertexAttribIPointer(R,I,D,N,k):i.vertexAttribPointer(R,I,D,P,N,k)}function y(R,I,D,P){x();let N=P.attributes,k=D.getAttributes(),z=I.defaultAttributeValues;for(let ee in k){let q=k[ee];if(q.location>=0){let K=N[ee];if(K===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),K!==void 0){let j=K.normalized,Ae=K.itemSize,Me=e.get(K);if(Me===void 0)continue;let tt=Me.buffer,Je=Me.type,Qe=Me.bytesPerElement,J=Je===i.INT||Je===i.UNSIGNED_INT||K.gpuType===ho;if(K.isInterleavedBufferAttribute){let te=K.data,_e=te.stride,Oe=K.offset;if(te.isInstancedInterleavedBuffer){for(let Se=0;Se<q.locationSize;Se++)m(q.location+Se,te.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Se=0;Se<q.locationSize;Se++)p(q.location+Se);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Se=0;Se<q.locationSize;Se++)w(q.location+Se,Ae/q.locationSize,Je,j,_e*Qe,(Oe+Ae/q.locationSize*Se)*Qe,J)}else{if(K.isInstancedBufferAttribute){for(let te=0;te<q.locationSize;te++)m(q.location+te,K.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let te=0;te<q.locationSize;te++)p(q.location+te);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let te=0;te<q.locationSize;te++)w(q.location+te,Ae/q.locationSize,Je,j,Ae*Qe,Ae/q.locationSize*te*Qe,J)}}else if(z!==void 0){let j=z[ee];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(q.location,j);break;case 3:i.vertexAttrib3fv(q.location,j);break;case 4:i.vertexAttrib4fv(q.location,j);break;default:i.vertexAttrib1fv(q.location,j)}}}}b()}function E(){C();for(let R in n){let I=n[R];for(let D in I){let P=I[D];for(let N in P){let k=P[N];for(let z in k)h(k[z].object),delete k[z];delete P[N]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;let I=n[R.id];for(let D in I){let P=I[D];for(let N in P){let k=P[N];for(let z in k)h(k[z].object),delete k[z];delete P[N]}}delete n[R.id]}function L(R){for(let I in n){let D=n[I];for(let P in D){let N=D[P];if(N[R.id]===void 0)continue;let k=N[R.id];for(let z in k)h(k[z].object),delete k[z];delete N[R.id]}}}function v(R){for(let I in n){let D=n[I],P=R.isInstancedMesh===!0?R.id:0,N=D[P];if(N!==void 0){for(let k in N){let z=N[k];for(let ee in z)h(z[ee].object),delete z[ee];delete N[k]}delete D[P],Object.keys(D).length===0&&delete n[I]}}}function C(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function bg(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Tg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==on&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let v=L===Dt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Yt&&L!==an&&!v&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Fe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:y,maxSamples:E,samples:T}}function Eg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new pn,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let b=r?0:n,w=b*4,y=m.clippingState||null;c.value=y,y=h(g,u,w,d);for(let E=0;E!==w;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,g){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=d+x*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,y=d;w!==x;++w,y+=4)a.copy(f[w]).applyMatrix4(b,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var As=4,wg=6,Ag=20,Cg=256,Gr=new hi,Eu=new ze,Ec=null,wc=0,Ac=0,Cc=!1,Rg=new O,Bi=new O,Rs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Rg}=r;Ec=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec,wc,Ac),this._renderer.xr.enabled=Cc,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:Dt,format:on,colorSpace:Ks,depthBuffer:!1},s=wu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pg(r)),this._blurMaterial=Lg(r,e,t),this._ggxMaterial=Ig(r,e,t)}return s}_compileMaterial(e){let t=new ot(new Bt,e);this._renderer.compile(t,Gr)}_sceneToCubeUV(e,t,n,s,r){let c=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Eu),f.toneMapping=_n,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ot(new In,new ri({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,m=!1,b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,m=!0):(p.color.copy(Eu),m=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let E=this._cubeSize;ws(s,y*E,w>2?E:0,E,E),f.setRenderTarget(s),m&&f.render(x,c),f.render(e,c)}f.toneMapping=d,f.autoClear=u,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===fi||e.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;ws(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Gr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=l*1.25,d=f*u,{_lodMax:g}=this,x=this._sizeLods[n],p=3*x*(n>g-As?n-g+As:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=g-t,ws(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(o,Gr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ws(e,p,m,3*x,2*x),s.setRenderTarget(e),s.render(o,Gr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-As?s-this._lodMax+As:0),u=4*(this._cubeSize-h);ws(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(c,Gr)}};function Pg(i){let e=[],t=[],n=i,s=i-As+1+wg;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,d=3,g=new Float32Array(d*u*f),x=new Float32Array(d*u*f);for(let m=0;m<f;m++){let b=m%3*2/3-1,w=m>2?0:-1,y=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];g.set(y,d*u*m);for(let E=0;E<u;E++){let T=h[E*2]*2-1,L=h[E*2+1]*2-1;m===0?Bi.set(1,L,T):m===1?Bi.set(-T,1,-L):m===2?Bi.set(-T,L,1):m===3?Bi.set(-1,L,-T):m===4?Bi.set(-T,-1,L):Bi.set(T,L,-1),Bi.toArray(x,(m*u+E)*d)}}let p=new Bt;p.setAttribute("position",new Kt(g,d)),p.setAttribute("outputDirection",new Kt(x,d)),t.push(new ot(p,null)),n>As&&n--}return{lodMeshes:t,sizeLods:e}}function wu(i,e,t){let n=new bt(i,e,t);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ig(i,e,t){return new Ct({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:el(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Lg(i,e,t){return new Ct({name:"SphericalGaussianBlur",defines:{SAMPLES:Ag,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:el(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Au(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Cu(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function el(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Qo=class extends bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new or(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new In(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:qt});r.uniforms.tEquirect.value=t;let a=new ot(s,r),o=t.minFilter;return t.minFilter===pi&&(t.minFilter=It),new so(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Dg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===oo||d===lo)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new Qo(g.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,g=d===oo||d===lo,x=d===fi||d===Fi;if(g||x){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Rs(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let b=u.image;return g&&b&&b.height>0||x&&b&&c(b)?(n===null&&(n=new Rs(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===oo?u.mapping=fi:d===lo&&(u.mapping=Fi),u}function c(u){let d=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&d++;return d===g}function l(u){let d=u.target;d.removeEventListener("dispose",l);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Ng(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&wi("WebGLRenderer: "+n+" extension not supported."),s}}}function Ug(i,e,t,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(f){let u=f.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function l(f){let u=[],d=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(d!==null){let b=d.array;x=d.version;for(let w=0,y=b.length;w<y;w+=3){let E=b[w+0],T=b[w+1],L=b[w+2];u.push(E,T,T,L,L,E)}}else{let b=g.array;x=g.version;for(let w=0,y=b.length/3-1;w<y;w+=3){let E=w+0,T=w+1,L=w+2;u.push(E,T,T,L,L,E)}}let p=new(g.count>=65535?sr:ir)(u,1);p.version=x;let m=r.get(f);m&&e.remove(m),r.set(f,p)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Fg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function l(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let x=0;for(let p=0;p<d;p++)x+=u[p];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Og(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Be("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Bg(i,e,t){let n=new WeakMap,s=new mt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let C=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;d===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let y=o.attributes.position.count*w,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*E*4*f),L=new er(T,y,E,f);L.type=an,L.needsUpdate=!0;let v=w*4;for(let S=0;S<f;S++){let R=p[S],I=m[S],D=b[S],P=y*E*4*S;for(let N=0;N<R.count;N++){let k=N*v;d===!0&&(s.fromBufferAttribute(R,N),T[P+k+0]=s.x,T[P+k+1]=s.y,T[P+k+2]=s.z,T[P+k+3]=0),g===!0&&(s.fromBufferAttribute(I,N),T[P+k+4]=s.x,T[P+k+5]=s.y,T[P+k+6]=s.z,T[P+k+7]=0),x===!0&&(s.fromBufferAttribute(D,N),T[P+k+8]=s.x,T[P+k+9]=s.y,T[P+k+10]=s.z,T[P+k+11]=D.itemSize===4?s.w:1)}}u={count:f,texture:L,size:new ie(y,E)},n.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function zg(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var kg={[Ar]:"LINEAR_TONE_MAPPING",[Cr]:"REINHARD_TONE_MAPPING",[Rr]:"CINEON_TONE_MAPPING",[Ui]:"ACES_FILMIC_TONE_MAPPING",[Ir]:"AGX_TONE_MAPPING",[Lr]:"NEUTRAL_TONE_MAPPING",[Pr]:"CUSTOM_TONE_MAPPING"};function Vg(i,e,t,n,s,r){let a=new bt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Bt;l.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new dt([0,2,0,0,2,0],2));let h=new xs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ot(l,h),u=new hi(-1,1,1,-1,0,1),d=null,g=null,x=!1,p,m=null,b=[],w=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),c!==null&&c.setSize(y,E);for(let T=0;T<b.length;T++){let L=b[T];L.setSize&&L.setSize(y,E)}},this.setEffects=function(y){b=y,w=b.length>0&&b[0].isRenderPass===!0;let E=a.width,T=a.height;b.length>0&&o===null&&(o=new bt(E,T,{type:Dt,depthBuffer:!1,stencilBuffer:!1}),c=new bt(E,T,{type:Dt,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<b.length;L++){let v=b[L];v.setSize&&v.setSize(E,T)}},this.begin=function(y,E){if(x||y.toneMapping===_n&&b.length===0)return!1;if(m=E,E!==null){let T=E.width,L=E.height;(a.width!==T||a.height!==L)&&this.setSize(T,L)}return w===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=_n,!0},this.hasRenderPass=function(){return w},this.end=function(y,E){y.toneMapping=p,x=!0;let T=a,L=o;for(let v=0;v<b.length;v++){let C=b[v];C.enabled!==!1&&(C.render(y,L,T,E),C.needsSwap!==!1&&(T=L,L=L===o?c:o))}if(d!==y.outputColorSpace||g!==y.toneMapping){d=y.outputColorSpace,g=y.toneMapping,h.defines={},Ze.getTransfer(d)===et&&(h.defines.SRGB_TRANSFER="");let v=kg[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(m),y.render(f,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Zu=new Ht,Ic=new ai(1,1),Ju=new er,$u=new Ba,Ku=new or,Ru=[],Pu=[],Iu=new Float32Array(16),Lu=new Float32Array(9),Du=new Float32Array(4);function Ps(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ru[s];if(r===void 0&&(r=new Float32Array(s),Ru[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function tl(i,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function Wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function qg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Du.set(n),i.uniformMatrix2fv(this.addr,!1,Du),Et(t,n)}}function Yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Lu.set(n),i.uniformMatrix3fv(this.addr,!1,Lu),Et(t,n)}}function Zg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Iu.set(n),i.uniformMatrix4fv(this.addr,!1,Iu),Et(t,n)}}function Jg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function Kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function jg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function e0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function t0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function n0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function i0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ic.compareFunction=t.isReversedDepthBuffer()?Jo:Zo,r=Ic):r=Zu,t.setTexture2D(e||r,s)}function s0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$u,s)}function r0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ku,s)}function a0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ju,s)}function o0(i){switch(i){case 5126:return Gg;case 35664:return Hg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return Qg;case 5125:return jg;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return a0}}function l0(i,e){i.uniform1fv(this.addr,e)}function c0(i,e){let t=Ps(e,this.size,2);i.uniform2fv(this.addr,t)}function h0(i,e){let t=Ps(e,this.size,3);i.uniform3fv(this.addr,t)}function u0(i,e){let t=Ps(e,this.size,4);i.uniform4fv(this.addr,t)}function d0(i,e){let t=Ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function f0(i,e){let t=Ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function p0(i,e){let t=Ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function m0(i,e){i.uniform1iv(this.addr,e)}function g0(i,e){i.uniform2iv(this.addr,e)}function _0(i,e){i.uniform3iv(this.addr,e)}function x0(i,e){i.uniform4iv(this.addr,e)}function v0(i,e){i.uniform1uiv(this.addr,e)}function y0(i,e){i.uniform2uiv(this.addr,e)}function M0(i,e){i.uniform3uiv(this.addr,e)}function S0(i,e){i.uniform4uiv(this.addr,e)}function b0(i,e,t){let n=this.cache,s=e.length,r=tl(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ic:a=Zu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function T0(i,e,t){let n=this.cache,s=e.length,r=tl(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$u,r[a])}function E0(i,e,t){let n=this.cache,s=e.length,r=tl(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ku,r[a])}function w0(i,e,t){let n=this.cache,s=e.length,r=tl(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ju,r[a])}function A0(i){switch(i){case 5126:return l0;case 35664:return c0;case 35665:return h0;case 35666:return u0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return _0;case 35669:case 35673:return x0;case 5125:return v0;case 36294:return y0;case 36295:return M0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return w0}}var Lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o0(t.type)}},Dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A0(t.type)}},Nc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Rc=/(\w+)(\])?(\[|\.)?/g;function Nu(i,e){i.seq.push(e),i.map[e.id]=e}function C0(i,e,t){let n=i.name,s=n.length;for(Rc.lastIndex=0;;){let r=Rc.exec(n),a=Rc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Nu(t,l===void 0?new Lc(o,i,e):new Dc(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Nc(o),Nu(t,f)),t=f}}}var Cs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);C0(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Uu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var R0=37297,P0=0;function I0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Fu=new Ge;function L0(i){Ze._getMatrix(Fu,Ze.workingColorSpace,i);let e=`mat3( ${Fu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Qs:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ou(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+I0(i.getShaderSource(e),o)}else return r}function D0(i,e){let t=L0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var N0={[Ar]:"Linear",[Cr]:"Reinhard",[Rr]:"Cineon",[Ui]:"ACESFilmic",[Ir]:"AgX",[Lr]:"Neutral",[Pr]:"Custom"};function U0(i,e){let t=N0[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ko=new O;function F0(){Ze.getLuminanceCoefficients(Ko);let i=Ko.x.toFixed(4),e=Ko.y.toFixed(4),t=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function B0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Wr(i){return i!==""}function Bu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(i){return i.replace(k0,G0)}var V0=new Map;function G0(i,e){let t=qe[e];if(t===void 0){let n=V0.get(e);if(n!==void 0)t=qe[n],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Uc(t)}var H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(i){return i.replace(H0,W0)}function W0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var X0={[wr]:"SHADOWMAP_TYPE_PCF",[ui]:"SHADOWMAP_TYPE_VSM"};function q0(i){return X0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Y0={[fi]:"ENVMAP_TYPE_CUBE",[Fi]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE_UV"};function Z0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Y0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var J0={[Fi]:"ENVMAP_MODE_REFRACTION"};function $0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":J0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var K0={[ao]:"ENVMAP_BLENDING_MULTIPLY",[tu]:"ENVMAP_BLENDING_MIX",[nu]:"ENVMAP_BLENDING_ADD"};function Q0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":K0[i.combine]||"ENVMAP_BLENDING_NONE"}function j0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function e_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=q0(t),l=Z0(t),h=$0(t),f=Q0(t),u=j0(t),d=O0(t),g=B0(r),x=s.createProgram(),p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`)):(p=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),m=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?qe.tonemapping_pars_fragment:"",t.toneMapping!==_n?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,D0("linearToOutputTexel",t.outputColorSpace),F0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),a=Uc(a),a=Bu(a,t),a=zu(a,t),o=Uc(o),o=Bu(o,t),o=zu(o,t),a=ku(a),o=ku(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=b+p+a,y=b+m+o,E=Uu(s,s.VERTEX_SHADER,w),T=Uu(s,s.FRAGMENT_SHADER,y);s.attachShader(x,E),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(R){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(E)||"",P=s.getShaderInfoLog(T)||"",N=I.trim(),k=D.trim(),z=P.trim(),ee=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,T);else{let K=Ou(s,E,"vertex"),j=Ou(s,T,"fragment");Be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+K+`
`+j)}else N!==""?Fe("WebGLProgram: Program Info Log:",N):(k===""||z==="")&&(q=!1);q&&(R.diagnostics={runnable:ee,programLog:N,vertexShader:{log:k,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(E),s.deleteShader(T),v=new Cs(s,x),C=z0(s,x)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let C;this.getAttributes=function(){return C===void 0&&L(this),C};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,R0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}var t_=0,Fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Oc(e),t.set(e,n)),n}},Oc=class{constructor(e){this.id=t_++,this.code=e,this.usedTimes=0}};function n_(i){return i===gi||i===zr||i===kr}function i_(i,e,t,n,s,r){let a=new tr,o=new Fc,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,C,S,R,I,D){let P=R.fog,N=I.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ee=e.get(v.envMap||k,z),q=ee&&ee.mapping===Dr?ee.image.height:null,K=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Fe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ae=j!==void 0?j.length:0,Me=0;N.morphAttributes.position!==void 0&&(Me=1),N.morphAttributes.normal!==void 0&&(Me=2),N.morphAttributes.color!==void 0&&(Me=3);let tt,Je,Qe,J;if(K){let ht=Dn[K];tt=ht.vertexShader,Je=ht.fragmentShader}else{tt=v.vertexShader,Je=v.fragmentShader;let ht=o.getVertexShaderStage(v),it=o.getFragmentShaderStage(v);o.update(v,ht,it),Qe=ht.id,J=it.id}let te=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Oe=I.isInstancedMesh===!0,Se=I.isBatchedMesh===!0,ke=!!v.map,rt=!!v.matcap,ne=!!ee,re=!!v.aoMap,ae=!!v.lightMap,oe=!!v.bumpMap&&v.wireframe===!1,he=!!v.normalMap,Ne=!!v.displacementMap,De=!!v.emissiveMap,Ve=!!v.metalnessMap,He=!!v.roughnessMap,U=v.anisotropy>0,nt=v.clearcoat>0,$e=v.dispersion>0,A=v.retroreflectivity>0,_=v.iridescence>0,V=v.sheen>0,W=v.transmission>0,Y=U&&!!v.anisotropyMap,le=nt&&!!v.clearcoatMap,ce=nt&&!!v.clearcoatNormalMap,Z=nt&&!!v.clearcoatRoughnessMap,Q=_&&!!v.iridescenceMap,ue=_&&!!v.iridescenceThicknessMap,Pe=V&&!!v.sheenColorMap,me=V&&!!v.sheenRoughnessMap,de=!!v.specularMap,Ie=!!v.specularColorMap,Ue=!!v.specularIntensityMap,We=W&&!!v.transmissionMap,B=W&&!!v.thicknessMap,fe=!!v.gradientMap,$=!!v.alphaMap,pe=v.alphaTest>0,ye=!!v.alphaHash,se=!!v.extensions,Le=_n;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Le=i.toneMapping);let Ce={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:tt,fragmentShader:Je,defines:v.defines,customVertexShaderID:Qe,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Se,batchingColor:Se&&I._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&I.instanceColor!==null,instancingMorph:Oe&&I.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ke,matcap:rt,envMap:ne,envMapMode:ne&&ee.mapping,envMapCubeUVHeight:q,aoMap:re,lightMap:ae,bumpMap:oe,normalMap:he,displacementMap:Ne,emissiveMap:De,normalMapObjectSpace:he&&v.normalMapType===ru,normalMapTangentSpace:he&&v.normalMapType===Vr,packedNormalMap:he&&v.normalMapType===Vr&&n_(v.normalMap.format),metalnessMap:Ve,roughnessMap:He,anisotropy:U,anisotropyMap:Y,clearcoat:nt,clearcoatMap:le,clearcoatNormalMap:ce,clearcoatRoughnessMap:Z,dispersion:$e,retroreflection:A,iridescence:_,iridescenceMap:Q,iridescenceThicknessMap:ue,sheen:V,sheenColorMap:Pe,sheenRoughnessMap:me,specularMap:de,specularColorMap:Ie,specularIntensityMap:Ue,transmission:W,transmissionMap:We,thicknessMap:B,gradientMap:fe,opaque:v.transparent===!1&&v.blending===Ss&&v.alphaToCoverage===!1,alphaMap:$,alphaTest:pe,alphaHash:ye,combine:v.combine,mapUv:ke&&g(v.map.channel),aoMapUv:re&&g(v.aoMap.channel),lightMapUv:ae&&g(v.lightMap.channel),bumpMapUv:oe&&g(v.bumpMap.channel),normalMapUv:he&&g(v.normalMap.channel),displacementMapUv:Ne&&g(v.displacementMap.channel),emissiveMapUv:De&&g(v.emissiveMap.channel),metalnessMapUv:Ve&&g(v.metalnessMap.channel),roughnessMapUv:He&&g(v.roughnessMap.channel),anisotropyMapUv:Y&&g(v.anisotropyMap.channel),clearcoatMapUv:le&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(v.sheenRoughnessMap.channel),specularMapUv:de&&g(v.specularMap.channel),specularColorMapUv:Ie&&g(v.specularColorMap.channel),specularIntensityMapUv:Ue&&g(v.specularIntensityMap.channel),transmissionMapUv:We&&g(v.transmissionMap.channel),thicknessMapUv:B&&g(v.thicknessMap.channel),alphaMapUv:$&&g(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(he||U),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(ke||$),fog:!!P,useFog:v.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&he===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Me,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:ke&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===et,decodeVideoTextureEmissive:De&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===en,flipSided:v.side===Lt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function p(v){let C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(let S in v.defines)C.push(S),C.push(v.defines[S]);return v.isRawShaderMaterial===!1&&(m(C,v),b(C,v),C.push(i.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function m(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numSunLights),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numSunLightShadows),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function b(v,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function w(v){let C=d[v.type],S;if(C){let R=Dn[C];S=_i.clone(R.uniforms)}else S=v.uniforms;return S}function y(v,C){let S=h.get(C);return S!==void 0?++S.usedTimes:(S=new e_(i,C,v,s),l.push(S),h.set(C,S)),S}function E(v){if(--v.usedTimes===0){let C=l.indexOf(v);l[C]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function L(){o.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:w,acquireProgram:y,releaseProgram:E,releaseShaderCache:T,programs:l,dispose:L}}function s_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function r_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Gu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,x,p,m){let b=i[e];return b===void 0?(b={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:m},i[e]=b):(b.id=u.id,b.object=u,b.geometry=d,b.material=g,b.materialVariant=a(u),b.groupOrder=x,b.renderOrder=u.renderOrder,b.z=p,b.group=m),e++,b}function c(u,d,g,x,p,m,b){b.reversedDepth===!0&&(p=-p);let w=o(u,d,g,x,p,m);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):t.push(w)}function l(u,d,g,x,p,m){let b=o(u,d,g,x,p,m);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}function h(u,d){t.length>1&&t.sort(u||r_),n.length>1&&n.sort(d||Gu),s.length>1&&s.sort(d||Gu)}function f(){for(let u=e,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function a_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Hu,i.set(n,[a])):s>=r.length?(a=new Hu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function o_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new ze};break;case"SpotLight":t={position:new O,direction:new O,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function l_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var c_=0;function h_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function u_(i){let e=new o_,t=l_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new ct,a=new ct;function o(l){let h=0,f=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,b=0,w=0,y=0,E=0,T=0,L=0,v=0,C=0,S=0;l.sort(h_);for(let I=0,D=l.length;I<D;I++){let P=l[I],N=P.color,k=P.intensity,z=P.distance,ee=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===gi?ee=P.shadow.map.texture:ee=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*k,f+=N.g*k,u+=N.b*k;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],k);S++}else if(P.isSunLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,j=t.get(P);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=ee;let Ae=K.getViewportCount();for(let Me=0;Me<Ae;Me++)n.sunShadowMatrix[x+Me]=K.getMatrix(Me),n.sunShadowCascade[x+Me]=K._cascadeData[Me];x+=Ae,g++}n.sun[d]=q,d++}else if(P.isDirectionalLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,j=t.get(P);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=ee,n.directionalShadowMatrix[p]=P.shadow.matrix,E++}n.directional[p]=q,p++}else if(P.isSpotLight){let q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(N).multiplyScalar(k),q.distance=z,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[b]=q;let K=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,K.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[b]=K.matrix,P.castShadow){let j=t.get(P);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.spotShadow[b]=j,n.spotShadowMap[b]=ee,L++}b++}else if(P.isRectAreaLight){let q=e.get(P);q.color.copy(N).multiplyScalar(k),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=q,w++}else if(P.isPointLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let K=P.shadow,j=t.get(P);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=ee,n.pointShadowMatrix[m]=P.shadow.matrix,T++}n.point[m]=q,m++}else if(P.isHemisphereLight){let q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(k),q.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[y]=q,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let R=n.hash;(R.sunLength!==d||R.directionalLength!==p||R.pointLength!==m||R.spotLength!==b||R.rectAreaLength!==w||R.hemiLength!==y||R.numSunShadows!==g||R.numDirectionalShadows!==E||R.numPointShadows!==T||R.numSpotShadows!==L||R.numSpotMaps!==v||R.numLightProbes!==S)&&(n.sun.length=d,n.directional.length=p,n.spot.length=b,n.rectArea.length=w,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+v-C,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=S,R.sunLength=d,R.directionalLength=p,R.pointLength=m,R.spotLength=b,R.rectAreaLength=w,R.hemiLength=y,R.numSunShadows=g,R.numDirectionalShadows=E,R.numPointShadows=T,R.numSpotShadows=L,R.numSpotMaps=v,R.numLightProbes=S,n.version=c_++)}function c(l,h){let f=0,u=0,d=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let b=0,w=l.length;b<w;b++){let y=l[b];if(y.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(y.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function Wu(i){let e=new u_(i),t=[],n=[],s=[];function r(u){f.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function d_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Wu(i),e.set(s,[o])):r>=a.length?(o=new Wu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,m_=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],g_=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Xu=new ct,Hr=new O,Pc=new O;function __(i,e,t){let n=new ps,s=new ie,r=new ie,a=new mt,o=new vs,c=new Ya,l={},h=t.maxTextureSize,f={[di]:Lt,[Lt]:di,[en]:en},u=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:f_,fragmentShader:p_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Bt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wr;let m=this.type;this.render=function(T,L,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Fh&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wr);let C=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(qt),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let D=m!==this.type;D&&L.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(N=>N.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,N=T.length;P<N;P++){let k=T[P],z=k.shadow;if(z===void 0){Fe("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ee=z.getFrameExtents();s.multiply(ee),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,z.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=q,z.map===null||D===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ui){if(k.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new bt(s.x,s.y,{format:gi,type:Dt,minFilter:It,magFilter:It,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new ai(s.x,s.y,an),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=wn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=vt,z.map.depthTexture.magFilter=vt}else k.isPointLight?(z.map=new Qo(s.x),z.map.depthTexture=new ka(s.x,xn)):(z.map=new bt(s.x,s.y),z.map.depthTexture=new ai(s.x,s.y,xn)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=wn,this.type===wr?(z.map.depthTexture.compareFunction=q?Jo:Zo,z.map.depthTexture.minFilter=It,z.map.depthTexture.magFilter=It):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=vt,z.map.depthTexture.magFilter=vt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let K=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();k.isPointLight!==!0&&z.updateMatrices(k,v);for(let j=0;j<K;j++){let Ae=z.getCamera(j);if(k.isPointLight){let Me=z.camera,tt=z.matrix,Je=k.distance||Me.far;Je!==Me.far&&(Me.far=Je,Me.updateProjectionMatrix()),Hr.setFromMatrixPosition(k.matrixWorld),Me.position.copy(Hr),Pc.copy(Me.position),Pc.add(m_[j]),Me.up.copy(g_[j]),Me.lookAt(Pc),Me.updateMatrixWorld(),tt.makeTranslation(-Hr.x,-Hr.y,-Hr.z),Xu.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Xu,Me.coordinateSystem,Me.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,j),i.clear();else{j===0&&(i.setRenderTarget(z.map),i.clear());let Me=z.getViewport(j);a.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),I.viewport(a)}n=z.getFrustum(j),y(L,v,Ae,k,this.type)}z.isPointLightShadow!==!0&&this.type===ui&&b(z,v),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(C,S,R)};function b(T,L){let v=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new bt(s.x,s.y,{format:gi,type:Dt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(L,null,v,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(L,null,v,d,x,null)}function w(T,L,v,C){let S=null,R=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=v.isPointLight===!0?c:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let I=S.uuid,D=L.uuid,P=l[I];P===void 0&&(P={},l[I]=P);let N=P[D];N===void 0&&(N=S.clone(),P[D]=N,L.addEventListener("dispose",E)),S=N}if(S.visible=L.visible,S.wireframe=L.wireframe,C===ui?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:f[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,v.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let I=i.properties.get(S);I.light=v}return S}function y(T,L,v,C,S){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===ui)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let D=e.update(T),P=T.material;if(Array.isArray(P)){let N=D.groups;for(let k=0,z=N.length;k<z;k++){let ee=N[k],q=P[ee.materialIndex];if(q&&q.visible){let K=w(T,q,C,S);T.onBeforeShadow(i,T,L,v,D,K,ee),i.renderBufferDirect(v,null,D,K,T,ee),T.onAfterShadow(i,T,L,v,D,K,ee)}}}else if(P.visible){let N=w(T,P,C,S);T.onBeforeShadow(i,T,L,v,D,N,null),i.renderBufferDirect(v,null,D,N,T,null),T.onAfterShadow(i,T,L,v,D,N,null)}}let I=T.children;for(let D=0,P=I.length;D<P;D++)y(I[D],L,v,C,S)}function E(T){T.target.removeEventListener("dispose",E);for(let v in l){let C=l[v],S=T.target.uuid;S in C&&(C[S].dispose(),delete C[S])}}}function x_(i,e){function t(){let B=!1,fe=new mt,$=null,pe=new mt(0,0,0,0);return{setMask:function(ye){$!==ye&&!B&&(i.colorMask(ye,ye,ye,ye),$=ye)},setLocked:function(ye){B=ye},setClear:function(ye,se,Le,Ce,ht){ht===!0&&(ye*=Ce,se*=Ce,Le*=Ce),fe.set(ye,se,Le,Ce),pe.equals(fe)===!1&&(i.clearColor(ye,se,Le,Ce),pe.copy(fe))},reset:function(){B=!1,$=null,pe.set(-1,0,0,0)}}}function n(){let B=!1,fe=!1,$=null,pe=null,ye=null;return{setReversed:function(se){if(fe!==se){let Le=e.get("EXT_clip_control");se?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),fe=se;let Ce=ye;ye=null,this.setClear(Ce)}},getReversed:function(){return fe},setTest:function(se){se?te(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(se){$!==se&&!B&&(i.depthMask(se),$=se)},setFunc:function(se){if(fe&&(se=_u[se]),pe!==se){switch(se){case wa:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case Ca:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case Ra:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case Ia:i.depthFunc(i.GREATER);break;case La:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=se}},setLocked:function(se){B=se},setClear:function(se){ye!==se&&(ye=se,fe&&(se=1-se),i.clearDepth(se))},reset:function(){B=!1,$=null,pe=null,ye=null,fe=!1}}}function s(){let B=!1,fe=null,$=null,pe=null,ye=null,se=null,Le=null,Ce=null,ht=null;return{setTest:function(it){B||(it?te(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(it){fe!==it&&!B&&(i.stencilMask(it),fe=it)},setFunc:function(it,hn,Sn){($!==it||pe!==hn||ye!==Sn)&&(i.stencilFunc(it,hn,Sn),$=it,pe=hn,ye=Sn)},setOp:function(it,hn,Sn){(se!==it||Le!==hn||Ce!==Sn)&&(i.stencilOp(it,hn,Sn),se=it,Le=hn,Ce=Sn)},setLocked:function(it){B=it},setClear:function(it){ht!==it&&(i.clearStencil(it),ht=it)},reset:function(){B=!1,fe=null,$=null,pe=null,ye=null,se=null,Le=null,Ce=null,ht=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],x=null,p=!1,m=null,b=null,w=null,y=null,E=null,T=null,L=null,v=new ze(0,0,0),C=0,S=!1,R=null,I=null,D=null,P=null,N=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ee=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=ee>=1):q.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=ee>=2);let K=null,j={},Ae=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),tt=new mt().fromArray(Ae),Je=new mt().fromArray(Me);function Qe(B,fe,$,pe){let ye=new Uint8Array(4),se=i.createTexture();i.bindTexture(B,se),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<$;Le++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(fe+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return se}let J={};J[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(ls),oe(!1),he(sc),te(i.CULL_FACE),re(qt);function te(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function _e(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Oe(B,fe){return u[B]!==fe?(i.bindFramebuffer(B,fe),u[B]=fe,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function Se(B,fe){let $=g,pe=!1;if(B){$=d.get(fe),$===void 0&&($=[],d.set(fe,$));let ye=B.textures;if($.length!==ye.length||$[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Le=ye.length;se<Le;se++)$[se]=i.COLOR_ATTACHMENT0+se;$.length=ye.length,pe=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,pe=!0);pe&&i.drawBuffers($)}function ke(B){return x!==B?(i.useProgram(B),x=B,!0):!1}let rt={[Ni]:i.FUNC_ADD,[Bh]:i.FUNC_SUBTRACT,[zh]:i.FUNC_REVERSE_SUBTRACT};rt[kh]=i.MIN,rt[Vh]=i.MAX;let ne={[Gh]:i.ZERO,[Hh]:i.ONE,[Wh]:i.SRC_COLOR,[lc]:i.SRC_ALPHA,[$h]:i.SRC_ALPHA_SATURATE,[Zh]:i.DST_COLOR,[qh]:i.DST_ALPHA,[Xh]:i.ONE_MINUS_SRC_COLOR,[cc]:i.ONE_MINUS_SRC_ALPHA,[Jh]:i.ONE_MINUS_DST_COLOR,[Yh]:i.ONE_MINUS_DST_ALPHA,[Kh]:i.CONSTANT_COLOR,[Qh]:i.ONE_MINUS_CONSTANT_COLOR,[jh]:i.CONSTANT_ALPHA,[eu]:i.ONE_MINUS_CONSTANT_ALPHA};function re(B,fe,$,pe,ye,se,Le,Ce,ht,it){if(B===qt){p===!0&&(_e(i.BLEND),p=!1);return}if(p===!1&&(te(i.BLEND),p=!0),B!==Oh){if(B!==m||it!==S){if((b!==Ni||E!==Ni)&&(i.blendEquation(i.FUNC_ADD),b=Ni,E=Ni),it)switch(B){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rc:i.blendFunc(i.ONE,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Be("WebGLState: Invalid blending: ",B);break}else switch(B){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ac:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oc:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",B);break}w=null,y=null,T=null,L=null,v.set(0,0,0),C=0,m=B,S=it}return}ye=ye||fe,se=se||$,Le=Le||pe,(fe!==b||ye!==E)&&(i.blendEquationSeparate(rt[fe],rt[ye]),b=fe,E=ye),($!==w||pe!==y||se!==T||Le!==L)&&(i.blendFuncSeparate(ne[$],ne[pe],ne[se],ne[Le]),w=$,y=pe,T=se,L=Le),(Ce.equals(v)===!1||ht!==C)&&(i.blendColor(Ce.r,Ce.g,Ce.b,ht),v.copy(Ce),C=ht),m=B,S=!1}function ae(B,fe){B.side===en?_e(i.CULL_FACE):te(i.CULL_FACE);let $=B.side===Lt;fe&&($=!$),oe($),B.blending===Ss&&B.transparent===!1?re(qt):re(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let pe=B.stencilWrite;o.setTest(pe),pe&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),De(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(B){R!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),R=B)}function he(B){B!==Nh?(te(i.CULL_FACE),B!==I&&(B===sc?i.cullFace(i.BACK):B===Uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),I=B}function Ne(B){B!==D&&(z&&i.lineWidth(B),D=B)}function De(B,fe,$){B?(te(i.POLYGON_OFFSET_FILL),(P!==fe||N!==$)&&(P=fe,N=$,a.getReversed()&&(fe=-fe),i.polygonOffset(fe,$))):_e(i.POLYGON_OFFSET_FILL)}function Ve(B){B?te(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function He(B){B===void 0&&(B=i.TEXTURE0+k-1),K!==B&&(i.activeTexture(B),K=B)}function U(B,fe,$){$===void 0&&(K===null?$=i.TEXTURE0+k-1:$=K);let pe=j[$];pe===void 0&&(pe={type:void 0,texture:void 0},j[$]=pe),(pe.type!==B||pe.texture!==fe)&&(K!==$&&(i.activeTexture($),K=$),i.bindTexture(B,fe||J[B]),pe.type=B,pe.texture=fe)}function nt(){let B=j[K];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function $e(){try{i.compressedTexImage2D(...arguments)}catch(B){Be("WebGLState:",B)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(B){Be("WebGLState:",B)}}function _(){try{i.texSubImage2D(...arguments)}catch(B){Be("WebGLState:",B)}}function V(){try{i.texSubImage3D(...arguments)}catch(B){Be("WebGLState:",B)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Be("WebGLState:",B)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Be("WebGLState:",B)}}function le(){try{i.texStorage2D(...arguments)}catch(B){Be("WebGLState:",B)}}function ce(){try{i.texStorage3D(...arguments)}catch(B){Be("WebGLState:",B)}}function Z(){try{i.texImage2D(...arguments)}catch(B){Be("WebGLState:",B)}}function Q(){try{i.texImage3D(...arguments)}catch(B){Be("WebGLState:",B)}}function ue(B){return f[B]!==void 0?f[B]:i.getParameter(B)}function Pe(B,fe){f[B]!==fe&&(i.pixelStorei(B,fe),f[B]=fe)}function me(B){tt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),tt.copy(B))}function de(B){Je.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Je.copy(B))}function Ie(B,fe){let $=l.get(fe);$===void 0&&($=new WeakMap,l.set(fe,$));let pe=$.get(B);pe===void 0&&(pe=i.getUniformBlockIndex(fe,B.name),$.set(B,pe))}function Ue(B,fe){let pe=l.get(fe).get(B);c.get(fe)!==pe&&(i.uniformBlockBinding(fe,pe,B.__bindingPointIndex),c.set(fe,pe))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},K=null,j={},u={},d=new WeakMap,g=[],x=null,p=!1,m=null,b=null,w=null,y=null,E=null,T=null,L=null,v=new ze(0,0,0),C=0,S=!1,R=null,I=null,D=null,P=null,N=null,tt.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:_e,bindFramebuffer:Oe,drawBuffers:Se,useProgram:ke,setBlending:re,setMaterial:ae,setFlipSided:oe,setCullFace:he,setLineWidth:Ne,setPolygonOffset:De,setScissorTest:Ve,activeTexture:He,bindTexture:U,unbindTexture:nt,compressedTexImage2D:$e,compressedTexImage3D:A,texImage2D:Z,texImage3D:Q,pixelStorei:Pe,getParameter:ue,updateUBOMapping:Ie,uniformBlockBinding:Ue,texStorage2D:le,texStorage3D:ce,texSubImage2D:_,texSubImage3D:V,compressedTexSubImage2D:W,compressedTexSubImage3D:Y,scissor:me,viewport:de,reset:We}}function v_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,_){return g?new OffscreenCanvas(A,_):js("canvas")}function p(A,_,V){let W=1,Y=$e(A);if((Y.width>V||Y.height>V)&&(W=V/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let le=Math.floor(W*Y.width),ce=Math.floor(W*Y.height);u===void 0&&(u=x(le,ce));let Z=_?x(le,ce):u;return Z.width=le,Z.height=ce,Z.getContext("2d").drawImage(A,0,0,le,ce),Fe("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+le+"x"+ce+")."),Z}else return"data"in A&&Fe("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function m(A){return A.generateMipmaps}function b(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,_,V,W,Y,le=!1){if(A!==null){if(i[A]!==void 0)return i[A];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce;W&&(ce=e.get("EXT_texture_norm16"),ce||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===i.RED&&(V===i.FLOAT&&(Z=i.R32F),V===i.HALF_FLOAT&&(Z=i.R16F),V===i.UNSIGNED_BYTE&&(Z=i.R8),V===i.UNSIGNED_SHORT&&ce&&(Z=ce.R16_EXT),V===i.SHORT&&ce&&(Z=ce.R16_SNORM_EXT)),_===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.R8UI),V===i.UNSIGNED_SHORT&&(Z=i.R16UI),V===i.UNSIGNED_INT&&(Z=i.R32UI),V===i.BYTE&&(Z=i.R8I),V===i.SHORT&&(Z=i.R16I),V===i.INT&&(Z=i.R32I)),_===i.RG&&(V===i.FLOAT&&(Z=i.RG32F),V===i.HALF_FLOAT&&(Z=i.RG16F),V===i.UNSIGNED_BYTE&&(Z=i.RG8),V===i.UNSIGNED_SHORT&&ce&&(Z=ce.RG16_EXT),V===i.SHORT&&ce&&(Z=ce.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RG8UI),V===i.UNSIGNED_SHORT&&(Z=i.RG16UI),V===i.UNSIGNED_INT&&(Z=i.RG32UI),V===i.BYTE&&(Z=i.RG8I),V===i.SHORT&&(Z=i.RG16I),V===i.INT&&(Z=i.RG32I)),_===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),V===i.UNSIGNED_INT&&(Z=i.RGB32UI),V===i.BYTE&&(Z=i.RGB8I),V===i.SHORT&&(Z=i.RGB16I),V===i.INT&&(Z=i.RGB32I)),_===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),V===i.UNSIGNED_INT&&(Z=i.RGBA32UI),V===i.BYTE&&(Z=i.RGBA8I),V===i.SHORT&&(Z=i.RGBA16I),V===i.INT&&(Z=i.RGBA32I)),_===i.RGB&&(V===i.UNSIGNED_SHORT&&ce&&(Z=ce.RGB16_EXT),V===i.SHORT&&ce&&(Z=ce.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),_===i.RGBA){let Q=le?Qs:Ze.getTransfer(Y);V===i.FLOAT&&(Z=i.RGBA32F),V===i.HALF_FLOAT&&(Z=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Z=Q===et?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&ce&&(Z=ce.RGBA16_EXT),V===i.SHORT&&ce&&(Z=ce.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function E(A,_){let V;return A?_===null||_===xn||_===Ts?V=i.DEPTH24_STENCIL8:_===an?V=i.DEPTH32F_STENCIL8:_===bs&&(V=i.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===xn||_===Ts?V=i.DEPTH_COMPONENT24:_===an?V=i.DEPTH_COMPONENT32F:_===bs&&(V=i.DEPTH_COMPONENT16),V}function T(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==vt&&A.minFilter!==It?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function L(A){let _=A.target;_.removeEventListener("dispose",L),C(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function v(A){let _=A.target;_.removeEventListener("dispose",v),R(_)}function C(A){let _=n.get(A);if(_.__webglInit===void 0)return;let V=A.source,W=d.get(V);if(W){let Y=W[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&S(A),Object.keys(W).length===0&&d.delete(V)}n.remove(A)}function S(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let V=A.source,W=d.get(V);delete W[_.__cacheKey],a.memory.textures--}function R(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let Y=0;Y<_.__webglFramebuffer[W].length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[W][Y]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let V=A.textures;for(let W=0,Y=V.length;W<Y;W++){let le=n.get(V[W]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(V[W])}n.remove(A)}let I=0;function D(){I=0}function P(){return I}function N(A){I=A}function k(){let A=I;return A>=s.maxTextures&&Fe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function z(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function ee(A,_){let V=n.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let W=A.image;if(W===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(V,A,_);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+_)}function q(A,_){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){_e(V,A,_);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+_)}function K(A,_){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){_e(V,A,_);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+_)}function j(A,_){let V=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&V.__version!==A.version){Oe(V,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+_)}let Ae={[cs]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[Da]:i.MIRRORED_REPEAT},Me={[vt]:i.NEAREST,[iu]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[co]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},tt={[ou]:i.NEVER,[du]:i.ALWAYS,[lu]:i.LESS,[Zo]:i.LEQUAL,[cu]:i.EQUAL,[Jo]:i.GEQUAL,[hu]:i.GREATER,[uu]:i.NOTEQUAL};function Je(A,_){if(_.type===an&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===It||_.magFilter===co||_.magFilter===Nr||_.magFilter===pi||_.minFilter===It||_.minFilter===co||_.minFilter===Nr||_.minFilter===pi)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ae[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ae[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ae[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Me[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Me[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,tt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===vt||_.minFilter!==Nr&&_.minFilter!==pi||_.type===an&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Qe(A,_){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",L));let W=_.source,Y=d.get(W);Y===void 0&&(Y={},d.set(W,Y));let le=z(_);if(le!==A.__cacheKey){Y[le]===void 0&&(Y[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Y[le].usedTimes++;let ce=Y[A.__cacheKey];ce!==void 0&&(Y[A.__cacheKey].usedTimes--,ce.usedTimes===0&&S(_)),A.__cacheKey=le,A.__webglTexture=Y[le].texture}return V}function J(A,_,V){return Math.floor(Math.floor(A/V)/_)}function te(A,_,V,W){let le=A.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,V,W,_.data);else{le.sort((Pe,me)=>Pe.start-me.start);let ce=0;for(let Pe=1;Pe<le.length;Pe++){let me=le[ce],de=le[Pe],Ie=me.start+me.count,Ue=J(de.start,_.width,4),We=J(me.start,_.width,4);de.start<=Ie+1&&Ue===We&&J(de.start+de.count-1,_.width,4)===Ue?me.count=Math.max(me.count,de.start+de.count-me.start):(++ce,le[ce]=de)}le.length=ce+1;let Z=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Pe=0,me=le.length;Pe<me;Pe++){let de=le[Pe],Ie=Math.floor(de.start/4),Ue=Math.ceil(de.count/4),We=Ie%_.width,B=Math.floor(Ie/_.width),fe=Ue,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,We,B,fe,$,V,W,_.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function _e(A,_,V){let W=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=i.TEXTURE_3D);let Y=Qe(A,_),le=_.source;t.bindTexture(W,A.__webglTexture,i.TEXTURE0+V);let ce=n.get(le);if(le.version!==ce.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let $=Ze.getPrimaries(Ze.workingColorSpace),pe=_.colorSpace===Xn?null:Ze.getPrimaries(_.colorSpace),ye=_.colorSpace===Xn||$===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=p(_.image,!1,s.maxTextureSize);Q=nt(_,Q);let ue=r.convert(_.format,_.colorSpace),Pe=r.convert(_.type),me=y(_.internalFormat,ue,Pe,_.normalized,_.colorSpace,_.isVideoTexture);Je(W,_);let de,Ie=_.mipmaps,Ue=_.isVideoTexture!==!0,We=ce.__version===void 0||Y===!0,B=le.dataReady,fe=T(_,Q);if(_.isDepthTexture)me=E(_.format===mi,_.type),We&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,me,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,me,Q.width,Q.height,0,ue,Pe,null));else if(_.isDataTexture)if(Ie.length>0){Ue&&We&&t.texStorage2D(i.TEXTURE_2D,fe,me,Ie[0].width,Ie[0].height);for(let $=0,pe=Ie.length;$<pe;$++)de=Ie[$],Ue?B&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,de.width,de.height,ue,Pe,de.data):t.texImage2D(i.TEXTURE_2D,$,me,de.width,de.height,0,ue,Pe,de.data);_.generateMipmaps=!1}else Ue?(We&&t.texStorage2D(i.TEXTURE_2D,fe,me,Q.width,Q.height),B&&te(_,Q,ue,Pe)):t.texImage2D(i.TEXTURE_2D,0,me,Q.width,Q.height,0,ue,Pe,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ue&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,me,Ie[0].width,Ie[0].height,Q.depth);for(let $=0,pe=Ie.length;$<pe;$++)if(de=Ie[$],_.format!==on)if(ue!==null)if(Ue){if(B)if(_.layerUpdates.size>0){let ye=Tc(de.width,de.height,_.format,_.type);for(let se of _.layerUpdates){let Le=de.data.subarray(se*ye/de.data.BYTES_PER_ELEMENT,(se+1)*ye/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,se,de.width,de.height,1,ue,Le)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,de.width,de.height,Q.depth,ue,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,me,de.width,de.height,Q.depth,0,de.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,de.width,de.height,Q.depth,ue,Pe,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,me,de.width,de.height,Q.depth,0,ue,Pe,de.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ue&&We&&t.texStorage2D(i.TEXTURE_2D,fe,me,Ie[0].width,Ie[0].height);for(let $=0,pe=Ie.length;$<pe;$++)de=Ie[$],_.format!==on?ue!==null?Ue?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(i.TEXTURE_2D,$,me,de.width,de.height,0,de.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?B&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,de.width,de.height,ue,Pe,de.data):t.texImage2D(i.TEXTURE_2D,$,me,de.width,de.height,0,ue,Pe,de.data)}else if(_.isDataArrayTexture)if(Ue){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,me,Q.width,Q.height,Q.depth),B)if(_.layerUpdates.size>0){let $=Tc(Q.width,Q.height,_.format,_.type);for(let pe of _.layerUpdates){let ye=Q.data.subarray(pe*$/Q.data.BYTES_PER_ELEMENT,(pe+1)*$/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,Q.width,Q.height,1,ue,Pe,ye)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ue,Pe,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,Q.width,Q.height,Q.depth,0,ue,Pe,Q.data);else if(_.isData3DTexture)Ue?(We&&t.texStorage3D(i.TEXTURE_3D,fe,me,Q.width,Q.height,Q.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ue,Pe,Q.data)):t.texImage3D(i.TEXTURE_3D,0,me,Q.width,Q.height,Q.depth,0,ue,Pe,Q.data);else if(_.isFramebufferTexture){if(We)if(Ue)t.texStorage2D(i.TEXTURE_2D,fe,me,Q.width,Q.height);else{let $=Q.width,pe=Q.height;for(let ye=0;ye<fe;ye++)t.texImage2D(i.TEXTURE_2D,ye,me,$,pe,0,ue,Pe,null),$>>=1,pe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),Q.parentNode!==$){$.appendChild(Q),f.add(_),$.onpaint=pe=>{let ye=pe.changedElements;for(let se of f)ye.includes(se.image)&&(se.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let ye=i.RGBA,se=i.RGBA,Le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ye,se,Le,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Ue&&We){let $=$e(Ie[0]);t.texStorage2D(i.TEXTURE_2D,fe,me,$.width,$.height)}for(let $=0,pe=Ie.length;$<pe;$++)de=Ie[$],Ue?B&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ue,Pe,de):t.texImage2D(i.TEXTURE_2D,$,me,ue,Pe,de);_.generateMipmaps=!1}else if(Ue){if(We){let $=$e(Q);t.texStorage2D(i.TEXTURE_2D,fe,me,$.width,$.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Pe,Q)}else t.texImage2D(i.TEXTURE_2D,0,me,ue,Pe,Q);m(_)&&b(W),ce.__version=le.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Oe(A,_,V){if(_.image.length!==6)return;let W=Qe(A,_),Y=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);let le=n.get(Y);if(Y.version!==le.__version||W===!0){t.activeTexture(i.TEXTURE0+V);let ce=Ze.getPrimaries(Ze.workingColorSpace),Z=_.colorSpace===Xn?null:Ze.getPrimaries(_.colorSpace),Q=_.colorSpace===Xn||ce===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ue=_.isCompressedTexture||_.image[0].isCompressedTexture,Pe=_.image[0]&&_.image[0].isDataTexture,me=[];for(let se=0;se<6;se++)!ue&&!Pe?me[se]=p(_.image[se],!0,s.maxCubemapSize):me[se]=Pe?_.image[se].image:_.image[se],me[se]=nt(_,me[se]);let de=me[0],Ie=r.convert(_.format,_.colorSpace),Ue=r.convert(_.type),We=y(_.internalFormat,Ie,Ue,_.normalized,_.colorSpace),B=_.isVideoTexture!==!0,fe=le.__version===void 0||W===!0,$=Y.dataReady,pe=T(_,de);Je(i.TEXTURE_CUBE_MAP,_);let ye;if(ue){B&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,We,de.width,de.height);for(let se=0;se<6;se++){ye=me[se].mipmaps;for(let Le=0;Le<ye.length;Le++){let Ce=ye[Le];_.format!==on?Ie!==null?B?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,We,Ce.width,Ce.height,0,Ce.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,0,0,Ce.width,Ce.height,Ie,Ue,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,We,Ce.width,Ce.height,0,Ie,Ue,Ce.data)}}}else{if(ye=_.mipmaps,B&&fe){ye.length>0&&pe++;let se=$e(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,We,se.width,se.height)}for(let se=0;se<6;se++)if(Pe){B?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,me[se].width,me[se].height,Ie,Ue,me[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,me[se].width,me[se].height,0,Ie,Ue,me[se].data);for(let Le=0;Le<ye.length;Le++){let ht=ye[Le].image[se].image;B?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,0,0,ht.width,ht.height,Ie,Ue,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,We,ht.width,ht.height,0,Ie,Ue,ht.data)}}else{B?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ie,Ue,me[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,Ie,Ue,me[se]);for(let Le=0;Le<ye.length;Le++){let Ce=ye[Le];B?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,0,0,Ie,Ue,Ce.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,We,Ie,Ue,Ce.image[se])}}}m(_)&&b(i.TEXTURE_CUBE_MAP),le.__version=Y.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Se(A,_,V,W,Y,le){let ce=r.convert(V.format,V.colorSpace),Z=r.convert(V.type),Q=y(V.internalFormat,ce,Z,V.normalized,V.colorSpace),ue=n.get(_),Pe=n.get(V);if(Pe.__renderTarget=_,!ue.__hasExternalTextures){let me=Math.max(1,_.width>>le),de=Math.max(1,_.height>>le);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,le,Q,me,de,_.depth,0,ce,Z,null):t.texImage2D(Y,le,Q,me,de,0,ce,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,Pe.__webglTexture,0,Ve(_)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,Pe.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(A,_,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let W=_.depthTexture,Y=W&&W.isDepthTexture?W.type:null,le=E(_.stencilBuffer,Y),ce=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve(_),le,_.width,_.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve(_),le,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,le,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,A)}else{let W=_.textures;for(let Y=0;Y<W.length;Y++){let le=W[Y],ce=r.convert(le.format,le.colorSpace),Z=r.convert(le.type),Q=y(le.internalFormat,ce,Z,le.normalized,le.colorSpace);He(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve(_),Q,_.width,_.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve(_),Q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Q,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(A,_,V){let W=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",L)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Je(i.TEXTURE_CUBE_MAP,_.depthTexture);let ue=r.convert(_.depthTexture.format),Pe=r.convert(_.depthTexture.type),me;_.depthTexture.format===wn?me=i.DEPTH_COMPONENT24:_.depthTexture.format===mi&&(me=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,me,_.width,_.height,0,ue,Pe,null)}}else ee(_.depthTexture,0);let le=Y.__webglTexture,ce=Ve(_),Z=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,Q=_.depthTexture.format===mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===wn)He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,le,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,le,0);else if(_.depthTexture.format===mi)He(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,le,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(A){let _=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let W=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=W}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(V)for(let W=0;W<6;W++)rt(_.__webglFramebuffer[W],A,W);else{let W=A.texture.mipmaps;W&&W.length>0?rt(_.__webglFramebuffer[0],A,0):rt(_.__webglFramebuffer,A,0)}else if(V){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=i.createRenderbuffer(),ke(_.__webglDepthbuffer[W],A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=_.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,le)}}else{let W=A.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ke(_.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(A,_,V){let W=n.get(A);_!==void 0&&Se(W.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ne(A)}function ae(A){let _=A.texture,V=n.get(A),W=n.get(_);A.addEventListener("dispose",v);let Y=A.textures,le=A.isWebGLCubeRenderTarget===!0,ce=Y.length>1;if(ce||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,a.memory.textures++),le){V.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer[Z]=[];for(let Q=0;Q<_.mipmaps.length;Q++)V.__webglFramebuffer[Z][Q]=i.createFramebuffer()}else V.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)V.__webglFramebuffer[Z]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ce)for(let Z=0,Q=Y.length;Z<Q;Z++){let ue=n.get(Y[Z]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&He(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let Q=Y[Z];V.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Z]);let ue=r.convert(Q.format,Q.colorSpace),Pe=r.convert(Q.type),me=y(Q.internalFormat,ue,Pe,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),de=Ve(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,V.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Je(i.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)Se(V.__webglFramebuffer[Z][Q],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else Se(V.__webglFramebuffer[Z],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(_)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let Z=0,Q=Y.length;Z<Q;Z++){let ue=Y[Z],Pe=n.get(ue),me=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Pe.__webglTexture),Je(me,ue),Se(V.__webglFramebuffer,A,ue,i.COLOR_ATTACHMENT0+Z,me,0),m(ue)&&b(me)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,W.__webglTexture),Je(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)Se(V.__webglFramebuffer[Q],A,_,i.COLOR_ATTACHMENT0,Z,Q);else Se(V.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,Z,0);m(_)&&b(Z),t.unbindTexture()}A.depthBuffer&&ne(A)}function oe(A){let _=A.textures;for(let V=0,W=_.length;V<W;V++){let Y=_[V];if(m(Y)){let le=w(A),ce=n.get(Y).__webglTexture;t.bindTexture(le,ce),b(le),t.unbindTexture()}}}let he=[],Ne=[];function De(A){if(A.samples>0){if(He(A)===!1){let _=A.textures,V=A.width,W=A.height,Y=i.COLOR_BUFFER_BIT,le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(A),Z=_.length>1;if(Z)for(let ue=0;ue<_.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let Q=A.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);let Pe=n.get(_[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,V,W,0,0,V,W,Y,i.NEAREST),c===!0&&(he.length=0,Ne.length=0,he.push(i.COLOR_ATTACHMENT0+ue),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(he.push(le),Ne.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ue=0;ue<_.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);let Pe=n.get(_[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ve(A){return Math.min(s.maxSamples,A.samples)}function He(A){let _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function nt(A,_){let V=A.colorSpace,W=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Ks&&V!==Xn&&(Ze.getTransfer(V)===et?(W!==on||Y!==Yt)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",V)),_}function $e(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.getTextureUnits=P,this.setTextureUnits=N,this.setTexture2D=ee,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=re,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function y_(i,e){function t(n,s=Xn){let r,a=Ze.getTransfer(s);if(n===Yt)return i.UNSIGNED_BYTE;if(n===uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uc)return i.BYTE;if(n===dc)return i.SHORT;if(n===bs)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===xn)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===Dt)return i.HALF_FLOAT;if(n===mc)return i.ALPHA;if(n===gc)return i.RGB;if(n===on)return i.RGBA;if(n===wn)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===po)return i.RED;if(n===mo)return i.RED_INTEGER;if(n===gi)return i.RG;if(n===go)return i.RG_INTEGER;if(n===_o)return i.RGBA_INTEGER;if(n===Ur||n===Fr||n===Or||n===Br)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===vo||n===yo||n===Mo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===So||n===bo||n===To||n===Eo||n===wo||n===zr||n===Ao)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===So||n===bo)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Eo)return r.COMPRESSED_R11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===zr)return r.COMPRESSED_RG11_EAC;if(n===Ao)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Co||n===Ro||n===Po||n===Io||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Vo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ko)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===Ho||n===Wo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Go)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xo||n===qo||n===kr||n===Yo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new lr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ct({vertexShader:M_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zc=class extends An{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,x=typeof XRWebGLBinding<"u",p=new Bc,m={},b=t.getContextAttributes(),w=null,y=null,E=[],T=[],L=new ie,v=null,C=null,S=new Pt;S.viewport=new mt;let R=new Pt;R.viewport=new mt;let I=[S,R],D=new ro,P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=E[J];return te===void 0&&(te=new fs,E[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=E[J];return te===void 0&&(te=new fs,E[J]=te),te.getGripSpace()},this.getHand=function(J){let te=E[J];return te===void 0&&(te=new fs,E[J]=te),te.getHandSpace()};function k(J){let te=T.indexOf(J.inputSource);if(te===-1)return;let _e=E[te];_e!==void 0&&(_e.update(J.inputSource,J.frame,l||a),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ee);for(let J=0;J<E.length;J++){let te=T[J];te!==null&&(T[J]=null,E[J].disconnect(te))}P=null,N=null,p.reset();for(let J in m)delete m[J];if(e.setRenderTarget(w),d=null,u=null,f=null,s=null,y=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(L.width,L.height,!1),C!==null){let J=C.camera;J.fov=C.fov,J.zoom=C.zoom,J.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ee),b.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Oe=null,Se=null;b.depth&&(Se=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?mi:wn,Oe=b.stencil?Ts:xn);let ke={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ke),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new bt(u.textureWidth,u.textureHeight,{format:on,type:Yt,depthTexture:new ai(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new bt(d.framebufferWidth,d.framebufferHeight,{format:on,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ee(J){for(let te=0;te<J.removed.length;te++){let _e=J.removed[te],Oe=T.indexOf(_e);Oe>=0&&(T[Oe]=null,E[Oe].disconnect(_e))}for(let te=0;te<J.added.length;te++){let _e=J.added[te],Oe=T.indexOf(_e);if(Oe===-1){for(let ke=0;ke<E.length;ke++)if(ke>=T.length){T.push(_e),Oe=ke;break}else if(T[ke]===null){T[ke]=_e,Oe=ke;break}if(Oe===-1)break}let Se=E[Oe];Se&&Se.connect(_e)}}let q=new O,K=new O;function j(J,te,_e){q.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);let Oe=q.distanceTo(K),Se=te.projectionMatrix.elements,ke=_e.projectionMatrix.elements,rt=Se[14]/(Se[10]-1),ne=Se[14]/(Se[10]+1),re=(Se[9]+1)/Se[5],ae=(Se[9]-1)/Se[5],oe=(Se[8]-1)/Se[0],he=(ke[8]+1)/ke[0],Ne=rt*oe,De=rt*he,Ve=Oe/(-oe+he),He=Ve*-oe;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(He),J.translateZ(Ve),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Se[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let U=rt+Ve,nt=ne+Ve,$e=Ne-He,A=De+(Oe-He),_=re*ne/nt*U,V=ae*ne/nt*U;J.projectionMatrix.makePerspective($e,A,_,V,U,nt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ae(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let te=J.near,_e=J.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(_e=p.depthFar)),D.near=R.near=S.near=te,D.far=R.far=S.far=_e,(P!==D.near||N!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),P=D.near,N=D.far),D.layers.mask=J.layers.mask|6,S.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;let Oe=J.parent,Se=D.cameras;Ae(D,Oe);for(let ke=0;ke<Se.length;ke++)Ae(Se[ke],Oe);Se.length===2?j(D,S,R):D.projectionMatrix.copy(S.projectionMatrix),C===null&&J.isPerspectiveCamera&&(C={camera:J,fov:J.fov,zoom:J.zoom}),Me(J,D,Oe)};function Me(J,te,_e){_e===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ua*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(J){return m[J]};let tt=null;function Je(J,te){if(h=te.getViewerPose(l||a),g=te,h!==null){let _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Oe=!1;_e.length!==D.cameras.length&&(D.cameras.length=0,Oe=!0);for(let ne=0;ne<_e.length;ne++){let re=_e[ne],ae=null;if(d!==null)ae=d.getViewport(re);else{let he=f.getViewSubImage(u,re);ae=he.viewport,ne===0&&(e.setRenderTargetTextures(y,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(y))}let oe=I[ne];oe===void 0&&(oe=new Pt,oe.layers.enable(ne),oe.viewport=new mt,I[ne]=oe),oe.matrix.fromArray(re.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(re.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ae.x,ae.y,ae.width,ae.height),ne===0&&(D.matrix.copy(oe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Oe===!0&&D.cameras.push(oe)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let ne=f.getDepthInformation(_e[0]);ne&&ne.isValid&&ne.texture&&p.init(ne,s.renderState)}if(Se&&Se.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let ne=0;ne<_e.length;ne++){let re=_e[ne].camera;if(re){let ae=m[re];ae||(ae=new lr,m[re]=ae);let oe=f.getCameraImage(re);ae.sourceTexture=oe}}}}for(let _e=0;_e<E.length;_e++){let Oe=T[_e],Se=E[_e];Oe!==null&&Se!==void 0&&Se.update(Oe,te,l||a)}tt&&tt(J,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let Qe=new qu;Qe.setAnimationLoop(Je),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}},b_=new ct,Qu=new Ge;Qu.set(-1,0,0,0,1,0,0,0,1);function T_(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Mc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,w,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,b,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Lt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Lt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=e.get(m),w=b.envMap,y=b.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(b_.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Qu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,b,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Lt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){let T=E.program;n.uniformBlockBinding(y,T)}function l(y,E){let T=s[y.id];T===void 0&&(p(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",b));let L=E.program;n.updateUBOMapping(y,L);let v=e.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function h(y){let E=f();y.__bindingPointIndex=E;let T=i.createBuffer(),L=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,L,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,T),T}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let E=s[y.id],T=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let v=0,C=T.length;v<C;v++){let S=T[v];if(Array.isArray(S))for(let R=0,I=S.length;R<I;R++)d(S[R],v,R,L);else d(S,v,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,E,T,L){if(x(y,E,T,L)===!0){let v=y.__offset,C=y.value;if(Array.isArray(C)){let S=0;for(let R=0;R<C.length;R++){let I=C[R],D=m(I);g(I,y.__data,S),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(S+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function g(y,E,T){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,T)}function x(y,E,T,L){let v=y.value,C=E+"_"+T;if(L[C]===void 0)return typeof v=="number"||typeof v=="boolean"?L[C]=v:ArrayBuffer.isView(v)?L[C]=v.slice():L[C]=v.clone(),!0;{let S=L[C];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return L[C]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function p(y){let E=y.uniforms,T=0,L=16;for(let C=0,S=E.length;C<S;C++){let R=Array.isArray(E[C])?E[C]:[E[C]];for(let I=0,D=R.length;I<D;I++){let P=R[I],N=Array.isArray(P.value)?P.value:[P.value];for(let k=0,z=N.length;k<z;k++){let ee=N[k],q=m(ee),K=T%L,j=K%q.boundary,Ae=K+j;T+=j,Ae!==0&&L-Ae<q.storage&&(T+=L-Ae),P.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,T+=q.storage}}}let v=T%L;return v>0&&(T+=L-v),y.__size=T,y.__cache={},this}function m(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",y),E}function b(y){let E=y.target;E.removeEventListener("dispose",b);let T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:w}}var w_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ln=null;function A_(){return Ln===null&&(Ln=new Ci(w_,16,16,gi,Dt),Ln.name="DFG_LUT",Ln.minFilter=It,Ln.magFilter=It,Ln.wrapS=En,Ln.wrapT=En,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}var jo=class{constructor(e={}){let{canvas:t=pu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Yt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=d,p=new Set([_o,go,mo]),m=new Set([Yt,xn,bs,Ts,uo,fo]),b=new Uint32Array(4),w=new Int32Array(4),y=new O,E=null,T=null,L=[],v=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,R=!1,I=null,D=null,P=null,N=null;this._outputColorSpace=Rt;let k=0,z=0,ee=null,q=-1,K=null,j=new mt,Ae=new mt,Me=null,tt=new ze(0),Je=0,Qe=t.width,J=t.height,te=1,_e=null,Oe=null,Se=new mt(0,0,Qe,J),ke=new mt(0,0,Qe,J),rt=!1,ne=new ps,re=!1,ae=!1,oe=new ct,he=new O,Ne=new mt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function He(){return ee===null?te:1}let U=n;function nt(M,F){return t.getContext(M,F)}let $e,A,_,V,W,Y,le,ce,Z,Q,ue,Pe,me,de,Ie,Ue,We,B,fe,$,pe,ye,se;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",hn,!1),U===null){let F="webgl2";if(U=nt(F,M),U===null)throw nt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(M){throw t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",hn,!1),Be("WebGLRenderer: "+M.message),M}function Le(){$e=new Ng(U),$e.init(),pe=new y_(U,$e),A=new Tg(U,$e,e,pe),_=new x_(U,$e),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),D=U.createFramebuffer(),P=U.createFramebuffer(),N=U.createFramebuffer(),V=new Og(U),W=new s_,Y=new v_(U,$e,_,W,A,pe,V),le=new Dg(S),ce=new zf(U),ye=new Sg(U,ce),Z=new Ug(U,ce,V,ye),Q=new zg(U,Z,ce,ye,V),B=new Bg(U,A,Y),Ie=new Eg(W),ue=new i_(S,le,$e,A,ye,Ie),Pe=new T_(S,W),me=new a_,de=new d_($e),We=new Mg(S,le,_,Q,g,c),Ue=new __(S,Q,A),se=new E_(U,V,A,_),fe=new bg(U,$e,V),$=new Fg(U,$e,V),V.programs=ue.programs,S.capabilities=A,S.extensions=$e,S.properties=W,S.renderLists=me,S.shadowMap=Ue,S.state=_,S.info=V}x!==Yt&&(C=new Vg(x,t.width,t.height,o,s,r));let Ce=new zc(S,U);this.xr=Ce,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=$e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=$e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(Qe,J,!1))},this.getSize=function(M){return M.set(Qe,J)},this.setSize=function(M,F,X=!0){if(Ce.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Qe=M,J=F,t.width=Math.floor(M*te),t.height=Math.floor(F*te),X===!0&&(t.style.width=M+"px",t.style.height=F+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Qe*te,J*te).floor()},this.setDrawingBufferSize=function(M,F,X){Qe=M,J=F,te=X,t.width=Math.floor(M*X),t.height=Math.floor(F*X),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(x===Yt){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(j)},this.getViewport=function(M){return M.copy(Se)},this.setViewport=function(M,F,X,G){M.isVector4?Se.set(M.x,M.y,M.z,M.w):Se.set(M,F,X,G),_.viewport(j.copy(Se).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(ke)},this.setScissor=function(M,F,X,G){M.isVector4?ke.set(M.x,M.y,M.z,M.w):ke.set(M,F,X,G),_.scissor(Ae.copy(ke).multiplyScalar(te).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(M){_.setScissorTest(rt=M)},this.setOpaqueSort=function(M){_e=M},this.setTransparentSort=function(M){Oe=M},this.getClearColor=function(M){return M.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,X=!0){let G=0;if(M){let H=!1;if(ee!==null){let ve=ee.texture.format;H=p.has(ve)}if(H){let ve=ee.texture.type,Te=m.has(ve),xe=We.getClearColor(),Ee=We.getClearAlpha(),Re=xe.r,Xe=xe.g,Ke=xe.b;Te?(b[0]=Re,b[1]=Xe,b[2]=Ke,b[3]=Ee,U.clearBufferuiv(U.COLOR,0,b)):(w[0]=Re,w[1]=Xe,w[2]=Ke,w[3]=Ee,U.clearBufferiv(U.COLOR,0,w))}else G|=U.COLOR_BUFFER_BIT}F&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),I=M},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",hn,!1),We.dispose(),me.dispose(),de.dispose(),W.dispose(),le.dispose(),Q.dispose(),ye.dispose(),se.dispose(),ue.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",$c),Ce.removeEventListener("sessionend",Kc),yi.stop()};function ht(M){M.preventDefault(),vc("WebGLRenderer: Context Lost."),R=!0}function it(){vc("WebGLRenderer: Context Restored."),R=!1;let M=V.autoReset,F=Ue.enabled,X=Ue.autoUpdate,G=Ue.needsUpdate,H=Ue.type;Le(),V.autoReset=M,Ue.enabled=F,Ue.autoUpdate=X,Ue.needsUpdate=G,Ue.type=H}function hn(M){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Sn(M){let F=M.target;F.removeEventListener("dispose",Sn),Md(F)}function Md(M){Sd(M),W.remove(M)}function Sd(M){let F=W.get(M).programs;F!==void 0&&(F.forEach(function(X){ue.releaseProgram(X)}),M.isShaderMaterial&&ue.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,X,G,H,ve){F===null&&(F=De);let Te=H.isMesh&&H.matrixWorld.determinantAffine()<0,xe=Ed(M,F,X,G,H);_.setMaterial(G,Te);let Ee=X.index,Re=1;if(G.wireframe===!0){if(Ee=Z.getWireframeAttribute(X),Ee===void 0)return;Re=2}let Xe=X.drawRange,Ke=X.attributes.position,we=Xe.start*Re,st=(Xe.start+Xe.count)*Re;ve!==null&&(we=Math.max(we,ve.start*Re),st=Math.min(st,(ve.start+ve.count)*Re)),Ee!==null?(we=Math.max(we,0),st=Math.min(st,Ee.count)):Ke!=null&&(we=Math.max(we,0),st=Math.min(st,Ke.count));let Mt=st-we;if(Mt<0||Mt===1/0)return;ye.setup(H,G,xe,X,Ee);let ft,lt=fe;if(Ee!==null&&(ft=ce.get(Ee),lt=$,lt.setIndex(ft)),H.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*He()),lt.setMode(U.LINES)):lt.setMode(U.TRIANGLES);else if(H.isLine){let Ut=G.linewidth;Ut===void 0&&(Ut=1),_.setLineWidth(Ut*He()),H.isLineSegments?lt.setMode(U.LINES):H.isLineLoop?lt.setMode(U.LINE_LOOP):lt.setMode(U.LINE_STRIP)}else H.isPoints?lt.setMode(U.POINTS):H.isSprite&&lt.setMode(U.TRIANGLES);if(H.isBatchedMesh)if($e.get("WEBGL_multi_draw"))lt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ut=H._multiDrawStarts,be=H._multiDrawCounts,Vt=H._multiDrawCount,je=Ee?ce.get(Ee).bytesPerElement:1,nn=W.get(G).currentProgram.getUniforms();for(let bn=0;bn<Vt;bn++)nn.setValue(U,"_gl_DrawID",bn),lt.render(Ut[bn]/je,be[bn])}else if(H.isInstancedMesh)lt.renderInstances(we,Mt,H.count);else if(X.isInstancedBufferGeometry){let Ut=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,be=Math.min(X.instanceCount,Ut);lt.renderInstances(we,Mt,be)}else lt.render(we,Mt)};function Jc(M,F,X,G){I!==null&&M.isNodeMaterial&&I.setObject(G,M),re===!0&&Ie.setState(M,X,!1),M.transparent===!0&&M.side===en&&M.forceSinglePass===!1?(M.side=Lt,M.needsUpdate=!0,ta(M,F,G),M.side=di,M.needsUpdate=!0,ta(M,F,G),M.side=en):ta(M,F,G)}this.compile=function(M,F,X=null){X===null&&(X=M),I!==null&&I.renderStart(M,F,X),T=de.get(X),T.init(F),v.push(T),X.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),M!==X&&M.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),ae=this.localClippingEnabled,re=Ie.init(this.clippingPlanes,ae),re===!0&&Ie.setGlobalState(this.clippingPlanes,F),I!==null&&Ue.render(T.state.shadowsArray,X,F);let G=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ve=H.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){let xe=ve[Te];Jc(xe,X,F,H),G.add(xe)}else Jc(ve,X,F,H),G.add(ve)}),T=v.pop(),I!==null&&I.renderEnd(),G},this.compileAsync=function(M,F,X=null){let G=this.compile(M,F,X);return new Promise(H=>{function ve(){if(G.forEach(function(Te){let Ee=W.get(Te).currentProgram;(Ee===void 0||Ee.isReady())&&G.delete(Te)}),G.size===0){H(M);return}setTimeout(ve,10)}$e.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let xl=null;function bd(M){xl&&xl(M)}function $c(){yi.stop()}function Kc(){yi.start()}let yi=new qu;yi.setAnimationLoop(bd),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(M){xl=M,Ce.setAnimationLoop(M),M===null?yi.stop():yi.start()},Ce.addEventListener("sessionstart",$c),Ce.addEventListener("sessionend",Kc),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;I!==null&&I.renderStart(M,F);let X=Ce.enabled===!0&&Ce.isPresenting===!0,G=C!==null&&(ee===null||X)&&C.begin(S,ee);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(F),F=Ce.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,F,ee),T=de.get(M,v.length),T.init(F),T.state.textureUnits=Y.getTextureUnits(),v.push(T),oe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(oe,mn,F.reversedDepth),ae=this.localClippingEnabled,re=Ie.init(this.clippingPlanes,ae),E=me.get(M,L.length),E.init(),L.push(E),Ce.enabled===!0&&Ce.isPresenting===!0){let Te=S.xr.getDepthSensingMesh();Te!==null&&vl(Te,F,-1/0,S.sortObjects)}vl(M,F,0,S.sortObjects),E.finish(),I!==null&&I.updateLights(T.state.lightsArray),S.sortObjects===!0&&E.sort(_e,Oe),Ve=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Ve&&We.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Ie.beginShadows();let H=T.state.shadowsArray;if(Ue.render(H,M,F),re===!0&&Ie.endShadows(),(G&&C.hasRenderPass())===!1){let Te=E.opaque,xe=E.transmissive;if(T.setupLights(),F.isArrayCamera){let Ee=F.cameras;if(xe.length>0)for(let Re=0,Xe=Ee.length;Re<Xe;Re++){let Ke=Ee[Re];jc(Te,xe,M,Ke)}Ve&&We.render(M);for(let Re=0,Xe=Ee.length;Re<Xe;Re++){let Ke=Ee[Re];Qc(E,M,Ke,Ke.viewport)}}else xe.length>0&&jc(Te,xe,M,F),Ve&&We.render(M),Qc(E,M,F)}ee!==null&&z===0&&(Y.updateMultisampleRenderTarget(ee),Y.updateRenderTargetMipmap(ee)),G&&C.end(S),M.isScene===!0&&M.onAfterRender(S,M,F),ye.resetDefaultState(),q=-1,K=null,v.pop(),v.length>0?(T=v[v.length-1],Y.setTextureUnits(T.state.textureUnits),re===!0&&Ie.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,L.pop(),L.length>0?E=L[L.length-1]:E=null,I!==null&&I.renderEnd()};function vl(M,F,X,G){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(ne)){G&&Ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(oe);let Te=Q.update(M),xe=M.material;xe.visible&&E.push(M,Te,xe,X,Ne.z,null,F)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(ne))){let Te=Q.update(M),xe=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ne.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ne.copy(Te.boundingSphere.center)),Ne.applyMatrix4(M.matrixWorld).applyMatrix4(oe)),Array.isArray(xe)){let Ee=Te.groups;for(let Re=0,Xe=Ee.length;Re<Xe;Re++){let Ke=Ee[Re],we=xe[Ke.materialIndex];we&&we.visible&&E.push(M,Te,we,X,Ne.z,Ke,F)}}else xe.visible&&E.push(M,Te,xe,X,Ne.z,null,F)}}let ve=M.children;for(let Te=0,xe=ve.length;Te<xe;Te++)vl(ve[Te],F,X,G)}function Qc(M,F,X,G){let{opaque:H,transmissive:ve,transparent:Te}=M;T.setupLightsView(X),re===!0&&Ie.setGlobalState(S.clippingPlanes,X),G&&_.viewport(j.copy(G)),H.length>0&&ea(H,F,X),ve.length>0&&ea(ve,F,X),Te.length>0&&ea(Te,F,X),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function jc(M,F,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let we=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new bt(1,1,{generateMipmaps:!0,type:we?Dt:Yt,minFilter:pi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let ve=T.state.transmissionRenderTarget[G.id],Te=G.viewport||j;ve.setSize(Te.z*S.transmissionResolutionScale,Te.w*S.transmissionResolutionScale);let xe=S.getRenderTarget(),Ee=S.getActiveCubeFace(),Re=S.getActiveMipmapLevel();S.setRenderTarget(ve),S.getClearColor(tt),Je=S.getClearAlpha(),Je<1&&S.setClearColor(16777215,.5),S.clear(),Ve&&We.render(X);let Xe=S.toneMapping;S.toneMapping=_n;let Ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),re===!0&&Ie.setGlobalState(S.clippingPlanes,G),ea(M,X,G),Y.updateMultisampleRenderTarget(ve),Y.updateRenderTargetMipmap(ve),$e.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let st=0,Mt=F.length;st<Mt;st++){let ft=F[st],{object:lt,geometry:Ut,material:be,group:Vt}=ft;if(be.side===en&&lt.layers.test(G.layers)){let je=be.side;be.side=Lt,be.needsUpdate=!0,eh(lt,X,G,Ut,be,Vt),be.side=je,be.needsUpdate=!0,we=!0}}we===!0&&(Y.updateMultisampleRenderTarget(ve),Y.updateRenderTargetMipmap(ve))}S.setRenderTarget(xe,Ee,Re),S.setClearColor(tt,Je),Ke!==void 0&&(G.viewport=Ke),S.toneMapping=Xe}function ea(M,F,X){let G=F.isScene===!0?F.overrideMaterial:null;for(let H=0,ve=M.length;H<ve;H++){let Te=M[H],{object:xe,geometry:Ee,group:Re}=Te,Xe=Te.material;Xe.allowOverride===!0&&G!==null&&(Xe=G),xe.layers.test(X.layers)&&eh(xe,F,X,Ee,Xe,Re)}}function eh(M,F,X,G,H,ve){I!==null&&H.isNodeMaterial&&I.setObject(M,H),M.onBeforeRender(S,F,X,G,H,ve),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(S,F,X,G,M,ve),H.transparent===!0&&H.side===en&&H.forceSinglePass===!1?(H.side=Lt,H.needsUpdate=!0,S.renderBufferDirect(X,F,G,H,M,ve),H.side=di,H.needsUpdate=!0,S.renderBufferDirect(X,F,G,H,M,ve),H.side=en):S.renderBufferDirect(X,F,G,H,M,ve),M.onAfterRender(S,F,X,G,H,ve)}function ta(M,F,X){F.isScene!==!0&&(F=De);let G=W.get(M),H=T.state.lights,ve=T.state.shadowsArray,Te=H.state.version,xe=ue.getParameters(M,H.state,ve,F,X,T.state.lightProbeGridArray),Ee=ue.getProgramCacheKey(xe),Re=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let Xe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=le.get(M.envMap||G.environment,Xe),G.envMapRotation=G.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Re===void 0&&(M.addEventListener("dispose",Sn),Re=new Map,G.programs=Re);let Ke=Re.get(Ee);if(Ke!==void 0){if(G.currentProgram===Ke&&G.lightsStateVersion===Te)return nh(M,xe),Ke}else xe.uniforms=ue.getUniforms(M),I!==null&&M.isNodeMaterial&&I.build(M,X,xe),M.onBeforeCompile(xe,S),Ke=ue.acquireProgram(xe,Ee),Re.set(Ee,Ke),G.uniforms=xe.uniforms;let we=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=Ie.uniform),nh(M,xe),G.needsLights=Ad(M),G.lightsStateVersion=Te,G.needsLights&&(we.ambientLightColor.value=H.state.ambient,we.lightProbe.value=H.state.probe,we.sunLights.value=H.state.sun,we.sunLightShadows.value=H.state.sunShadow,we.directionalLights.value=H.state.directional,we.directionalLightShadows.value=H.state.directionalShadow,we.spotLights.value=H.state.spot,we.spotLightShadows.value=H.state.spotShadow,we.rectAreaLights.value=H.state.rectArea,we.ltc_1.value=H.state.rectAreaLTC1,we.ltc_2.value=H.state.rectAreaLTC2,we.pointLights.value=H.state.point,we.pointLightShadows.value=H.state.pointShadow,we.hemisphereLights.value=H.state.hemi,we.sunShadowMatrix.value=H.state.sunShadowMatrix,we.sunShadowCascade.value=H.state.sunShadowCascade,we.directionalShadowMatrix.value=H.state.directionalShadowMatrix,we.spotLightMatrix.value=H.state.spotLightMatrix,we.spotLightMap.value=H.state.spotLightMap,we.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=Ke,G.uniformsList=null,Ke}function th(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=Cs.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function nh(M,F){let X=W.get(M);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Td(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let X=0,G=M.length;X<G;X++){let H=M[X];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function Ed(M,F,X,G,H){F.isScene!==!0&&(F=De),Y.resetTextureUnits();let ve=F.fog,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,xe=ee===null?S.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ze.workingColorSpace,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Re=le.get(G.envMap||Te,Ee),Xe=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ke=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),we=!!X.morphAttributes.position,st=!!X.morphAttributes.normal,Mt=!!X.morphAttributes.color,ft=_n;G.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ft=S.toneMapping);let lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ut=lt!==void 0?lt.length:0,be=W.get(G),Vt=T.state.lights;if(re===!0&&(ae===!0||M!==K)){let ut=M===K&&G.id===q;Ie.setState(G,M,ut)}let je=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Vt.state.version||be.outputColorSpace!==xe||H.isBatchedMesh&&be.batching===!1||!H.isBatchedMesh&&be.batching===!0||H.isBatchedMesh&&be.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&be.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&be.instancing===!1||!H.isInstancedMesh&&be.instancing===!0||H.isSkinnedMesh&&be.skinning===!1||!H.isSkinnedMesh&&be.skinning===!0||H.isInstancedMesh&&be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&be.instancingMorph===!1&&H.morphTexture!==null||be.envMap!==Re||G.fog===!0&&be.fog!==ve||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ie.numPlanes||be.numIntersection!==Ie.numIntersection)||be.vertexAlphas!==Xe||be.vertexTangents!==Ke||be.morphTargets!==we||be.morphNormals!==st||be.morphColors!==Mt||be.toneMapping!==ft||be.morphTargetsCount!==Ut||!!be.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,be.__version=G.version);let nn=be.currentProgram;je===!0&&(nn=ta(G,F,H),I&&G.isNodeMaterial&&I.onUpdateProgram(G,nn,be));let bn=!1,Jn=!1,Xi=!1,at=nn.getUniforms(),xt=be.uniforms;if(_.useProgram(nn.program)&&(bn=!0,Jn=!0,Xi=!0),G.id!==q&&(q=G.id,Jn=!0),be.needsLights){let ut=Td(T.state.lightProbeGridArray,H);be.lightProbeGrid!==ut&&(be.lightProbeGrid=ut,Jn=!0)}if(bn||K!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),at.setValue(U,"projectionMatrix",M.projectionMatrix),at.setValue(U,"viewMatrix",M.matrixWorldInverse);let Kn=at.map.cameraPosition;Kn!==void 0&&Kn.setValue(U,he.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&at.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&at.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),K!==M&&(K=M,Jn=!0,Xi=!0)}if(be.needsLights&&(Vt.state.sunShadowMap.length>0&&at.setValue(U,"sunShadowMap",Vt.state.sunShadowMap,Y),Vt.state.directionalShadowMap.length>0&&at.setValue(U,"directionalShadowMap",Vt.state.directionalShadowMap,Y),Vt.state.spotShadowMap.length>0&&at.setValue(U,"spotShadowMap",Vt.state.spotShadowMap,Y),Vt.state.pointShadowMap.length>0&&at.setValue(U,"pointShadowMap",Vt.state.pointShadowMap,Y)),H.isSkinnedMesh){at.setOptional(U,H,"bindMatrix"),at.setOptional(U,H,"bindMatrixInverse");let ut=H.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),at.setValue(U,"boneTexture",ut.boneTexture,Y))}H.isBatchedMesh&&(at.setOptional(U,H,"batchingTexture"),at.setValue(U,"batchingTexture",H._matricesTexture,Y),at.setOptional(U,H,"batchingIdTexture"),at.setValue(U,"batchingIdTexture",H._indirectTexture,Y),at.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&at.setValue(U,"batchingColorTexture",H._colorsTexture,Y));let $n=X.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&B.update(H,X,nn),(Jn||be.receiveShadow!==H.receiveShadow)&&(be.receiveShadow=H.receiveShadow,at.setValue(U,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(xt.envMapIntensity.value=F.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=A_()),Jn){if(at.setValue(U,"toneMappingExposure",S.toneMappingExposure),be.needsLights&&wd(xt,Xi),ve&&G.fog===!0&&Pe.refreshFogUniforms(xt,ve),Pe.refreshMaterialUniforms(xt,G,te,J,T.state.transmissionRenderTarget[M.id]),be.needsLights&&be.lightProbeGrid){let ut=be.lightProbeGrid;xt.probesSH.value=ut.texture,xt.probesMin.value.copy(ut.boundingBox.min),xt.probesMax.value.copy(ut.boundingBox.max),xt.probesResolution.value.copy(ut.resolution)}Cs.upload(U,th(be),xt,Y)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Cs.upload(U,th(be),xt,Y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&at.setValue(U,"center",H.center),at.setValue(U,"modelViewMatrix",H.modelViewMatrix),at.setValue(U,"normalMatrix",H.normalMatrix),at.setValue(U,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){let ut=G.uniformsGroups;for(let Kn=0,qi=ut.length;Kn<qi;Kn++){let sh=ut[Kn];se.update(sh,nn),se.bind(sh,nn)}}return nn}function wd(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Ad(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(M,F,X){let G=W.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(M.texture).__webglTexture=F,W.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let X=W.get(M);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,X=0){ee=M,k=F,z=X;let G=null,H=!1,ve=!1;if(M){let xe=W.get(M);if(xe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,xe.__webglFramebuffer),j.copy(M.viewport),Ae.copy(M.scissor),Me=M.scissorTest,_.viewport(j),_.scissor(Ae),_.setScissorTest(Me),q=-1;return}else if(xe.__webglFramebuffer===void 0)Y.setupRenderTarget(M);else if(xe.__hasExternalTextures)Y.rebindTextures(M,W.get(M.texture).__webglTexture,W.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Xe=M.depthTexture;if(xe.__boundDepthTexture!==Xe){if(Xe!==null&&W.has(Xe)&&(M.width!==Xe.image.width||M.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(M)}}let Ee=M.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ve=!0);let Re=W.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Re[F])?G=Re[F][X]:G=Re[F],H=!0):M.samples>0&&Y.useMultisampledRTT(M)===!1?G=W.get(M).__webglMultisampledFramebuffer:Array.isArray(Re)?G=Re[X]:G=Re,j.copy(M.viewport),Ae.copy(M.scissor),Me=M.scissorTest}else j.copy(Se).multiplyScalar(te).floor(),Ae.copy(ke).multiplyScalar(te).floor(),Me=rt;if(X!==0&&(G=D),_.bindFramebuffer(U.FRAMEBUFFER,G)&&_.drawBuffers(M,G),_.viewport(j),_.scissor(Ae),_.setScissorTest(Me),H){let xe=W.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,X)}else if(ve){let xe=F;for(let Ee=0;Ee<M.textures.length;Ee++){let Re=W.get(M.textures[Ee]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ee,Re.__webglTexture,X,xe)}}else if(M!==null&&X!==0){let xe=W.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xe.__webglTexture,X)}q=-1};function ih(M){let F=W.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=A.textureFormatReadable(M.format),F.__typeReadable=A.textureTypeReadable(M.type)),F}this.readRenderTargetPixels=function(M,F,X,G,H,ve,Te,xe=0){if(!(M&&M.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ee=Ee[Te]),Ee){_.bindFramebuffer(U.FRAMEBUFFER,Ee);try{let Re=M.textures[xe],Xe=Re.format,Ke=Re.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe);let we=ih(Re);if(we.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-G&&X>=0&&X<=M.height-H&&U.readPixels(F,X,G,H,pe.convert(Xe),pe.convert(Ke),ve)}finally{let Re=ee!==null?W.get(ee).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(M,F,X,G,H,ve,Te,xe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ee=Ee[Te]),Ee)if(F>=0&&F<=M.width-G&&X>=0&&X<=M.height-H){_.bindFramebuffer(U.FRAMEBUFFER,Ee);let Re=M.textures[xe],Xe=Re.format,Ke=Re.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe);let we=ih(Re);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.bufferData(U.PIXEL_PACK_BUFFER,ve.byteLength,U.STREAM_READ),U.readPixels(F,X,G,H,pe.convert(Xe),pe.convert(Ke),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Mt=ee!==null?W.get(ee).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Mt);let ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await gu(U,ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ve),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(st),U.deleteSync(ft),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,X=0){let G=Math.pow(2,-X),H=Math.floor(M.image.width*G),ve=Math.floor(M.image.height*G),Te=F!==null?F.x:0,xe=F!==null?F.y:0;Y.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Te,xe,H,ve),_.unbindTexture()},this.copyTextureToTexture=function(M,F,X=null,G=null,H=0,ve=0){let Te,xe,Ee,Re,Xe,Ke,we,st,Mt,ft=M.isCompressedTexture?M.mipmaps[ve]:M.image;if(X!==null)Te=X.max.x-X.min.x,xe=X.max.y-X.min.y,Ee=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,Xe=X.min.y,Ke=X.isBox3?X.min.z:0;else{let xt=Math.pow(2,-H);Te=Math.floor(ft.width*xt),xe=Math.floor(ft.height*xt),M.isDataArrayTexture?Ee=ft.depth:M.isData3DTexture?Ee=Math.floor(ft.depth*xt):Ee=1,Re=0,Xe=0,Ke=0}G!==null?(we=G.x,st=G.y,Mt=G.z):(we=0,st=0,Mt=0);let lt=pe.convert(F.format),Ut=pe.convert(F.type),be;F.isData3DTexture?(Y.setTexture3D(F,0),be=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Y.setTexture2DArray(F,0),be=U.TEXTURE_2D_ARRAY):(Y.setTexture2D(F,0),be=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let Vt=_.getParameter(U.UNPACK_ROW_LENGTH),je=_.getParameter(U.UNPACK_IMAGE_HEIGHT),nn=_.getParameter(U.UNPACK_SKIP_PIXELS),bn=_.getParameter(U.UNPACK_SKIP_ROWS),Jn=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,ft.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Re),_.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Ke);let Xi=M.isDataArrayTexture||M.isData3DTexture,at=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let xt=W.get(M),$n=W.get(F),ut=W.get(xt.__renderTarget),Kn=W.get($n.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,ut.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let qi=0;qi<Ee;qi++)Xi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(M).__webglTexture,H,Ke+qi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(F).__webglTexture,ve,Mt+qi)),U.blitFramebuffer(Re,Xe,Te,xe,we,st,Te,xe,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||W.has(M)){let xt=W.get(M),$n=W.get(F);_.bindFramebuffer(U.READ_FRAMEBUFFER,P),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,N);for(let ut=0;ut<Ee;ut++)Xi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.__webglTexture,H,Ke+ut):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xt.__webglTexture,H),at?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$n.__webglTexture,ve,Mt+ut):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,$n.__webglTexture,ve),H!==0?U.blitFramebuffer(Re,Xe,Te,xe,we,st,Te,xe,U.COLOR_BUFFER_BIT,U.NEAREST):at?U.copyTexSubImage3D(be,ve,we,st,Mt+ut,Re,Xe,Te,xe):U.copyTexSubImage2D(be,ve,we,st,Re,Xe,Te,xe);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else at?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(be,ve,we,st,Mt,Te,xe,Ee,lt,Ut,ft.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(be,ve,we,st,Mt,Te,xe,Ee,lt,ft.data):U.texSubImage3D(be,ve,we,st,Mt,Te,xe,Ee,lt,Ut,ft):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ve,we,st,Te,xe,lt,Ut,ft.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ve,we,st,ft.width,ft.height,lt,ft.data):U.texSubImage2D(U.TEXTURE_2D,ve,we,st,Te,xe,lt,Ut,ft);_.pixelStorei(U.UNPACK_ROW_LENGTH,Vt),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,je),_.pixelStorei(U.UNPACK_SKIP_PIXELS,nn),_.pixelStorei(U.UNPACK_SKIP_ROWS,bn),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Jn),ve===0&&F.generateMipmaps&&U.generateMipmap(be),_.unbindTexture()},this.initRenderTarget=function(M){W.get(M).__webglFramebuffer===void 0&&Y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Y.setTextureCube(M,0):M.isData3DTexture?Y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Y.setTexture2DArray(M,0):Y.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){k=0,z=0,ee=null,_.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Xr=new O;function ln(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Xr.copy(e),Xr[n]=0,Xr.normalize();let l=.5*a/(a+o),h=1-Xr.angleTo(i)/c;return Math.sign(Xr[t])===1?h*l:o/(a+o)+l+l*(1-h)}var nl=class i extends In{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new O,l=new O,h=new O(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,x=new O,p=.5/a;for(let m=0,b=0;m<f.length;m+=3,b+=2)switch(c.fromArray(f,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),f[m+0]=h.x*Math.sign(c.x)+l.x*r,f[m+1]=h.y*Math.sign(c.y)+l.y*r,f[m+2]=h.z*Math.sign(c.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/g)){case 0:x.set(1,0,0),d[b+0]=ln(x,l,"z","y",r,n),d[b+1]=1-ln(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),d[b+0]=1-ln(x,l,"z","y",r,n),d[b+1]=1-ln(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),d[b+0]=1-ln(x,l,"x","z",r,e),d[b+1]=ln(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),d[b+0]=1-ln(x,l,"x","z",r,e),d[b+1]=1-ln(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),d[b+0]=1-ln(x,l,"x","y",r,e),d[b+1]=1-ln(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),d[b+0]=ln(x,l,"x","y",r,e),d[b+1]=1-ln(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var il=class extends Ai{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new In;e.deleteAttribute("uv");let t=new rn({side:Lt}),n=new rn,s=new Tr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ot(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ar(e,n,6),o=new At;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ot(e,Is(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ot(e,Is(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new ot(e,Is(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new ot(e,Is(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new ot(e,Is(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new ot(e,Is(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Is(i){return new vr({color:0,emissive:16777215,emissiveIntensity:i})}var ju={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},R_=new hi(-1,1,1,-1,0,1),kc=class extends Bt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}},P_=new kc,xi=class{constructor(e){this._mesh=new ot(P_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,R_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var sl=class extends tn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_i.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new xi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var qr=class extends tn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},rl=class extends tn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var al=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sl(ju),this.copyPass.material.blending=qt,this.timer=new Er}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}qr!==void 0&&(a instanceof qr?n=!0:a instanceof rl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ol=class extends tn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ze}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Yr={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var ll=class extends tn{constructor(e,t,n){super(),this.scene=e,this.camera=t;let s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new bt(1,1,{minFilter:vt,magFilter:vt,type:Dt}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new vs,this._materialDepth.depthPacking=_c,this._materialDepth.blending=qt;let o=_i.clone(Yr.uniforms);o.tDepth.value=this._renderTargetDepth.texture,o.focus.value=s,o.aspect.value=t.aspect,o.aperture.value=r,o.maxblur.value=a,o.nearClip.value=t.near,o.farClip.value=t.far,this.materialBokeh=new Ct({defines:Object.assign({},Yr.defines),uniforms:o,vertexShader:Yr.vertexShader,fragmentShader:Yr.fragmentShader}),this.uniforms=o,this._fsQuad=new xi(this.materialBokeh),this._oldClearColor=new ze}render(e,t,n){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);let s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var Zr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var cl=class extends tn{constructor(){super(),this.isOutputPass=!0,this.uniforms=_i.clone(Zr.uniforms),this.material=new xs({name:Zr.name,uniforms:this.uniforms,vertexShader:Zr.vertexShader,fragmentShader:Zr.fragmentShader}),this._fsQuad=new xi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ar?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ui?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Pr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function I_(i,e,t=7){let n=(e-i+t)%t;return n>t/2?n-t:n}function ed(i,e,t){let n=w=>`<svg viewBox="0 0 24 24" aria-hidden="true">${w}</svg>`,s={power:n('<path d="M12 3v8M6.5 6.5a8 8 0 1 0 11 0"/>'),play:n('<path class="icon-play" d="m9 5 11 7-11 7Z"/><path class="icon-pause" d="M9 5v14M16 5v14"/>'),guide:n('<path d="M8 6h12M8 12h12M8 18h12M4 6h.1M4 12h.1M4 18h.1"/>')},r=document.createElement("div");r.className="tv-set",r.innerHTML=`
    <div class="tv-ground" aria-hidden="true"></div>
    <div class="tv-volume">
      <div class="tv-depth" aria-hidden="true">${Array.from({length:12},(w,y)=>`<i style="--layer:${12-y}"></i>`).join("")}</div>
      <div class="tv-side" aria-hidden="true"><div class="tv-vents">${"<i></i>".repeat(7)}</div><div class="tv-side-label">JCLAW<br><span>MODEL 07</span></div><i class="tv-screw"></i></div>
      <div class="tv-handle" aria-hidden="true"></div>
      <div class="tv-aerial" aria-hidden="true"><i></i><i></i><b></b></div>
      <div class="tv-cabinet">
        <div class="tv-glass-surround"></div>
        <aside class="tv-console" aria-label="\u673A\u8EAB\u63A7\u5236">
          <div class="tv-channel-window"><span>CH</span><strong id="tvChannelNumber">01</strong><i aria-hidden="true"></i></div>
          <div class="tv-tuner">
            <div class="tv-dial-marks" aria-hidden="true">${e.map(w=>`<i style="--mark:${(w.n-1)*360/e.length}deg" data-mark="${w.n}">${w.n}</i>`).join("")}</div>
            <button class="tv-dial" type="button" aria-label="\u6362\u53F0\u65CB\u94AE\uFF1A\u70B9\u51FB\u4E0B\u4E00\u9891\u9053\uFF0C\u6216\u5DE6\u53F3\u62D6\u52A8\u6362\u53F0" title="\u70B9\u51FB\u4E0B\u4E00\u53F0 \xB7 \u5DE6\u53F3\u62D6\u52A8\u6362\u53F0"><span class="tv-dial-grip" aria-hidden="true"></span></button>
          </div>
          <div class="tv-keys">
            <button class="tv-key tv-power" data-action="power" aria-label="\u7535\u89C6\u5F00\u5173" aria-pressed="true"><span class="tv-key-icon">${s.power}</span><span>\u5F00\u5173</span><i class="tv-power-light" aria-hidden="true"></i></button>
            <button class="tv-key tv-play" data-action="play" aria-label="\u6682\u505C\u8282\u76EE" aria-pressed="true"><span class="tv-key-icon">${s.play}</span><span id="tvPlayLabel">\u6682\u505C</span></button>
            <button class="tv-key tv-guide" data-action="menu"><span class="tv-key-icon">${s.guide}</span><span>\u8BBE\u7F6E</span></button>
          </div>
          <div class="tv-speaker" aria-hidden="true"><i></i></div>
        </aside>
        <div class="tv-chin"><svg class="tv-sketch" viewBox="0 0 66 26" aria-hidden="true"><path d="m3 21 12-16 9 11 7-7 14 13H3m8-9 4 2 4-3M48 7l3-5 2 6 6 1-5 4 1 6-5-4-5 2 2-6-4-3 5-1"/></svg><span class="tv-wordmark">JCLAW <b>TV</b></span></div>
      </div>
      <div class="tv-feet" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
    </div>`,i.replaceWith(r),r.querySelector(".tv-glass-surround").append(i);let a=document.createElement("button");a.className="playback-resume",a.dataset.action="play",a.hidden=!0,a.innerHTML=`${s.play}<span id="playbackReason"></span><b>\u64AD\u653E\u8282\u76EE</b>`,i.append(a);let o=r.querySelector(".tv-dial"),c=r.querySelector(".tv-dial-grip"),l=[r.querySelector(".tv-console"),document.querySelector(".mobileDock")],h=1,f=0,u=!0,d=!1,g=null,x=!1,p=w=>{u&&!d&&t(((h-1+w)%e.length+e.length)%e.length+1)};o.addEventListener("click",w=>{if(w.stopPropagation(),x&&w.detail!==0){x=!1;return}p(1)}),o.addEventListener("pointerdown",w=>{w.button!==0||!w.isPrimary||!u||d||(x=!1,g={id:w.pointerId,x:w.clientX,steps:0,moved:!1},o.setPointerCapture(w.pointerId))}),o.addEventListener("pointermove",w=>{if(!g||w.pointerId!==g.id)return;let y=w.clientX-g.x;Math.abs(y)>7&&(g.moved=!0);let E=Math.trunc(y/22);if(E!==g.steps){let T=E-g.steps;g.steps=E,p(T)}});let m=w=>{!g||w.pointerId!==g.id||(x=g.moved||w.type==="pointercancel",g=null,o.hasPointerCapture(w.pointerId)&&o.releasePointerCapture(w.pointerId))};for(let w of["pointerup","pointercancel","lostpointercapture"])o.addEventListener(w,m);let b=()=>{if(!g)return;let w=g.id;g=null,x=!0,o.hasPointerCapture(w)&&o.releasePointerCapture(w)};return{update({ch:w,power:y,paused:E,menu:T,pauseReason:L}){y||b(),f+=I_(h,w,e.length)*360/e.length,h=w,u=y,c.style.setProperty("--dial-angle",`${f}deg`),r.dataset.channel=String(w),r.classList.toggle("tv-off",!y),r.classList.toggle("tv-paused",E),r.querySelector("#tvChannelNumber").textContent=String(w).padStart(2,"0"),r.querySelector(".tv-power").setAttribute("aria-pressed",String(y));let v=r.querySelector(".tv-play");v.disabled=!y,v.setAttribute("aria-pressed",String(!E&&y)),v.setAttribute("aria-label",E?"\u64AD\u653E\u8282\u76EE":"\u6682\u505C\u8282\u76EE"),r.querySelector("#tvPlayLabel").textContent=E?"\u64AD\u653E":"\u6682\u505C",a.hidden=!y||!E||T,i.querySelector("#playbackReason").textContent=L==="system"?"\u7CFB\u7EDF\u504F\u597D\uFF1A\u51CF\u5C11\u52A8\u6001":"\u8282\u76EE\u5DF2\u6682\u505C",o.setAttribute("aria-label",`\u6362\u53F0\u65CB\u94AE\uFF1A\u5F53\u524D ${w}\uFF0C${e[w-1].name}\u3002\u70B9\u51FB\u4E0B\u4E00\u9891\u9053\uFF0C\u6216\u5DE6\u53F3\u62D6\u52A8\u6362\u53F0`);for(let C of r.querySelectorAll("[data-mark]"))C.classList.toggle("active",Number(C.dataset.mark)===w);o.disabled=!y},setMenuOpen(w){d=w,w&&b(),a.hidden=!0;for(let y of l)y&&(y.inert=w)}}}var td=Object.freeze({cth:'<svg class="app-icon" data-icon-pack="mono" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="cth" style="color:#31958f"><rect x="4" y="4" width="56" height="56" rx="16" fill="#31958f" opacity=".1"/><g transform="translate(12 12) scale(1.667)" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" stroke-linecap="round"><path d="M9 3h6m-5 0v6L4 19a1.5 1.5 0 0 0 1.2 2h13.6a1.5 1.5 0 0 0 1.2-2L14 9V3M7 15h10"/><path d="M10 17h.01m4 2h.01"/></g></svg>',learn:'<svg class="app-icon" data-icon-pack="mono" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="learn" style="color:#917ac3"><rect x="4" y="4" width="56" height="56" rx="16" fill="#917ac3" opacity=".1"/><g transform="translate(12 12) scale(1.667)" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" stroke-linecap="round"><path d="m2 8 10-5 10 5-10 5L2 8Zm4 3v6c4 3 8 3 12 0v-6m4-3v9"/></g></svg>',workbench:'<svg class="app-icon" data-icon-pack="mono" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="workbench" style="color:#d5a644"><rect x="4" y="4" width="56" height="56" rx="16" fill="#d5a644" opacity=".1"/><g transform="translate(12 12) scale(1.667)" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" stroke-linecap="round"><path d="M4 20V11h3v9m4 0V4h3v16m4 0v-6h3v6M3 21h19"/></g></svg>',ezctd:'<svg class="app-icon" data-icon-pack="mono" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="ezctd" style="color:#c67c9a"><rect x="4" y="4" width="56" height="56" rx="16" fill="#c67c9a" opacity=".1"/><g transform="translate(12 12) scale(1.667)" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" stroke-linecap="round"><path d="M5 3h9l5 5v13H5Zm9 0v6h5M8 13h8m-8 4h6"/></g></svg>',solo:'<svg class="app-icon" data-icon-pack="mono" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="solo" style="color:#ca8267"><rect x="4" y="4" width="56" height="56" rx="16" fill="#ca8267" opacity=".1"/><g transform="translate(12 12) scale(1.667)" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" stroke-linecap="round"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 2v6m8-6v6M4 11h16m-12 5 2 2 5-4"/></g></svg>',oracle:'<svg class="app-icon" data-icon-pack="mono" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="oracle" style="color:#709787"><rect x="4" y="4" width="56" height="56" rx="16" fill="#709787" opacity=".1"/><g transform="translate(12 12) scale(1.667)" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" stroke-linecap="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/></g></svg>',study:'<svg class="app-icon" data-icon-pack="mono" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="notes" style="color:#548bb9"><rect x="4" y="4" width="56" height="56" rx="16" fill="#548bb9" opacity=".1"/><g transform="translate(12 12) scale(1.667)" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" stroke-linecap="round"><path d="M6 3h12a2 2 0 0 1 2 2v15H4V5a2 2 0 0 1 2-2ZM4 8h16M8 12h8m-8 4h5"/></g></svg>'});function nd(i){return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(td[i]||td.study)}var zi=(()=>{let i='"PingFang SC","Microsoft YaHei","Noto Sans CJK SC",sans-serif',e='"SFMono-Regular",Consolas,"Courier New",monospace',t=(S,R=0,I=1)=>Math.max(R,Math.min(I,S)),n=S=>1-Math.pow(1-t(S),3),s=S=>(S=t(S),S*S*(3-2*S)),r=(S,R,I)=>t((S-R)/(I-R)),a=(S,R,I)=>{let D=r(S,R,I);return D>=1?1:1-Math.exp(-7*D)*Math.cos(11*D)};function o(S,R){let I=S.replace("#","");return I.length===3&&(I=[...I].map(D=>D+D).join("")),`rgba(${parseInt(I.slice(0,2),16)},${parseInt(I.slice(2,4),16)},${parseInt(I.slice(4,6),16)},${t(R)})`}function c(S,R,I,D,P=18,N="#334037",k=400,z="left",ee=!1){S.save(),S.font=`${k} ${P}px ${ee?e:i}`,S.textAlign=z,S.textBaseline="middle",S.fillStyle=N,S.fillText(String(R),I,D),S.restore()}function l(S,R,I,D,P,N=6,k,z,ee=1){D<=0||P<=0||(S.beginPath(),S.roundRect(R,I,D,P,N),k&&(S.fillStyle=k,S.fill()),z&&(S.strokeStyle=z,S.lineWidth=ee,S.stroke()))}function h(S,R,I,D,P,N="#607b63",k=1,z=[]){S.save(),S.beginPath(),S.moveTo(R,I),S.lineTo(D,P),S.strokeStyle=N,S.lineWidth=k,S.lineCap="round",S.setLineDash(z),S.stroke(),S.restore()}function f(S,R,I,D,P,N,k,z=1){S.beginPath(),S.ellipse(R,I,Math.max(.01,D),Math.max(.01,P),0,0,Math.PI*2),N&&(S.fillStyle=N,S.fill()),k&&(S.strokeStyle=k,S.lineWidth=z,S.stroke())}function u(S,R,I,D,P,N=1){S.save(),S.translate(R,I),S.rotate(D||0),S.scale(N,N),P(),S.restore()}function d(S,R,I,D,P,N){let k=S.createLinearGradient(R,I,D,P);return N.forEach(([z,ee])=>k.addColorStop(z,ee)),k}function g(S,R,I,D,P=2){let N=new Path2D(R);D&&(S.fillStyle=D,S.fill(N)),I&&(S.strokeStyle=I,S.lineWidth=P,S.lineJoin="round",S.lineCap="round",S.stroke(N))}function x(S,R,I,D="#4d7858",P=2){if(R.length<2||I<=0)return;let N=[0];for(let z=1;z<R.length;z++)N.push(N[z-1]+Math.hypot(R[z][0]-R[z-1][0],R[z][1]-R[z-1][1]));let k=N.at(-1)*t(I);S.save(),S.beginPath(),S.moveTo(...R[0]);for(let z=1;z<R.length;z++)if(N[z]<=k)S.lineTo(...R[z]);else{let ee=(k-N[z-1])/(N[z]-N[z-1]);S.lineTo(R[z-1][0]+ee*(R[z][0]-R[z-1][0]),R[z-1][1]+ee*(R[z][1]-R[z-1][1]));break}S.strokeStyle=D,S.lineWidth=P,S.lineCap="round",S.lineJoin="round",S.stroke(),S.restore()}function p(S,R,I,D,P,{fill:N="#fff9e9",angle:k=0,shadow:z=.14}={}){u(S,R,I,k,()=>{S.save(),S.shadowColor=`rgba(64,55,35,${z})`,S.shadowBlur=16,S.shadowOffsetY=9,l(S,-D/2,-P/2,D,P,2,N),S.restore(),l(S,-D/2,-P/2,D,P,2,null,"#9f987a55",.9),h(S,-D/2+4,-P/2+2,D/2-4,-P/2+2,"#ffffffa0",1.2)})}function m(S,R,I,D,P=.12){S.save(),S.filter="blur(8px)",f(S,R,I,D,9,`rgba(35,44,34,${P})`),S.restore()}function b(S,R,I,D,P=5,N=17,k="#746d5540"){for(let z=0;z<P;z++)h(S,R,I+z*N,R+D*(.76+z%3*.08),I+z*N,k,2)}function w(S,R,I,D="#7c9274",P=1){S.save(),S.globalAlpha=P,S.shadowColor="#21382225",S.shadowBlur=4,S.shadowOffsetY=3,f(S,R,I,5,5,D),S.restore(),f(S,R-1.5,I-1.5,1.2,1.2,"#fff8")}function y(S,R,I,D,P){S.fillStyle=D.bg,S.fillRect(0,0,R,I);let N=S.createRadialGradient(R*.4,I*.32,0,R*.5,I*.5,R*.85);N.addColorStop(0,D.light?"#fffaf04d":"#88b8a20b"),N.addColorStop(1,D.light?"#8273500b":"#020f1918"),S.fillStyle=N,S.fillRect(0,0,R,I),S.save(),S.globalAlpha=D.light?.042:.035,S.strokeStyle=D.light?"#6d7356":"#d8ecc0",S.lineWidth=.6;for(let k=0;k<80;k++){let z=k*137.31%R,ee=k*89.57%I;S.beginPath(),S.moveTo(z,ee),S.lineTo(z+1+k%4*.8,ee-.5),S.stroke()}S.restore();for(let[k,z]of[[26,80],[R-26,80],[26,I-72],[R-26,I-72]])h(S,k-4,z,k+4,z,D.line,.7),h(S,k,z-4,k,z+4,D.line,.7)}function E(S,R,I,D,P,N,k){c(S,D,R/2,k?107:92,k?31:32,N.ink,500,"center"),P&&c(S,P,R/2,k?146:130,k?16:14,N.muted,400,"center")}function T(S,R,I,D,P,N=13){c(S,R,I,D,N,P.muted,400,"center")}function L(S,R,I,D,P,N,k,z){let q=z?27:32,K=P*q+(P-1)*7,j=(R-K)/2,Ae=I-(z?73:64);for(let Me=0;Me<P;Me++)l(S,j+Me*(q+7),Ae,q,2,1,o(k.ink,.12)),Me===N&&l(S,j+Me*(q+7),Ae,Math.max(.1,q*t(D)),2,1,o(k.accent,.85))}function v(S,R,I,D,P){S.save();let N=s(r(D,0,.04)),k=1-s(r(D,.95,1));S.globalAlpha=N*k,P(),S.restore()}function C(S,R,I,D,P,N=1){h(S,R-D,I,R+D,I,P,N),h(S,R,I-D,R,I+D,P,N)}return{FONT:i,MONO:e,clamp:t,ease:n,smooth:s,phase:r,spring:a,alpha:o,text:c,rr:l,line:h,ellipse:f,group:u,grad:d,path:g,trace:x,page:p,shadow:m,paperLines:b,pin:w,backdrop:y,heading:E,annotation:T,rail:L,fragment:v,cross:C}})();function ki({id:i,channelId:e,label:t,seconds:n,draw:s}){if(!/^[a-z0-9.-]+$/.test(i)||typeof s!="function"||!Number.isFinite(n)||n<=0)throw Error("Invalid scene definition: "+i);function r({canvas:a,viewport:o,theme:c,index:l=0,count:h=1,signal:f}){if(!a?.getContext)throw Error("A Canvas element is required");let u=!1,d={...o},g={...c},x=a.getContext("2d",{alpha:!1});if(!x)throw Error("Canvas2D unavailable");function p(y){if(u||f?.aborted)return;let{width:E,height:T,dpr:L}=d;if(E<=0||T<=0)return;let v=E<600&&T>E*.92,C=v?540:1e3,S=E/C,R=T/S,I=Math.round(E*L),D=Math.round(T*L);(a.width!==I||a.height!==D)&&(a.width=I,a.height=D),x.setTransform(L*S,0,0,L*S,0,0),x.globalAlpha=1,x.globalCompositeOperation="source-over",x.filter="none",x.setLineDash([]),x.textBaseline="middle";let P=Math.max(0,Math.min(n,Number(y.elapsedMs)/1e3||0)),N=zi.clamp(P/n);x.save();try{zi.backdrop(x,C,R,g,P),zi.fragment(x,C,R,N,()=>s(x,C,R,N,P,g,v)),zi.rail(x,C,R,N,h,l,g,v)}finally{x.restore()}}function m(y){if(!u){if(![y.width,y.height,y.dpr].every(Number.isFinite)||y.width<0||y.height<0||y.dpr<=0)throw Error("Invalid viewport");d={...y}}}function b(y){u||(g={...y})}function w(){u||(u=!0,f?.removeEventListener("abort",w))}return f?.addEventListener("abort",w,{once:!0}),m(d),Object.freeze({render:p,resize:m,updateTheme:b,dispose:w})}return Object.freeze({apiVersion:1,id:i,channelId:e,label:t,title:t,seconds:n,durationMs:n*1e3,posterTimeMs:n*720,renderer:"canvas2d",alt:t+"\u3002\u672C\u5730\u8282\u76EE\u793A\u610F\u3002",draw:s,create:r})}var{clamp:L_,ease:kt,smooth:D_,phase:yt,spring:Jr,alpha:Vi,text:_t,rr:vn,line:Zt,ellipse:Wt,group:Gi,grad:Ls,path:Ds,trace:Vc,page:id,shadow:hl,paperLines:XM,pin:qM,heading:Ns,annotation:Us,cross:sd}=zi;function rd(i,e,t,n,s,r,a){Ns(i,e,t,"\u5408\u540C\u8FFD\u8E2A","\u5C55\u5F00\u6587\u6863 / \u5BF9\u7167\u6761\u6B3E / \u7559\u4E0B\u6807\u8BB0",r,a);let o=e*.49,c=a?t*.48:t*.5,l=a?258:248,h=a?342:293,f=Jr(n,.025,.25),u=-.1+.085*f,d=yt(n,.42,.69),g=Math.sin(L_((n-.555)*12)*Math.PI)*Math.exp(-Math.max(0,n-.56)*62)*3;if(hl(i,o,c+h*.54,l*.5,.1),id(i,o+12,c+9,l,h,{fill:"#d9d4bb",angle:.03}),Gi(i,o-(1-f)*e*.6,c+g,u,()=>{id(i,0,0,l,h,{fill:"#fffaf0",shadow:.16}),_t(i,"DOCUMENT / 01",-l/2+25,-h/2+25,10,"#969a80",500,"left",!0),_t(i,"\u4E34\u5E8A\u8BD5\u9A8C\u5408\u540C",0,-h/2+58,a?21:20,r.ink,550,"center"),Zt(i,-l/2+24,-h/2+79,l/2-24,-h/2+79,"#b1ac9166",1),["\u7814\u7A76\u9879\u76EE","\u5DE5\u4F5C\u8303\u56F4","\u4ED8\u6B3E\u8282\u70B9","\u7248\u672C\u8BB0\u5F55"].forEach((m,b)=>{let w=kt(yt(n,.13+b*.024,.28+b*.03));i.save(),i.globalAlpha=w,_t(i,m,-l/2+25,-h/2+110+b*31,12,"#7e8569"),Zt(i,-l/2+88,-h/2+110+b*31,l/2-25,-h/2+110+b*31,"#b2ad955a",1),i.restore()});let x=yt(n,.32,.5),p=[];for(let m=0;m<=90;m++){let b=m/90;p.push([-l/2+29+b*82,h/2-38-10*Math.sin(b*25)*(1-b*.65)-b*4])}if(Vc(i,p,x,"#596855",1.5),_t(i,"\u6837\u5F20 \xB7 \u4E0D\u4EE3\u8868\u5DF2\u7B7E\u7F72",-l/2+25,h/2-16,9,"#a5a38d"),n>.552){let m=kt(yt(n,.552,.59));Gi(i,l*.25,h*.26,-.2,()=>{i.globalAlpha=m*.87,Wt(i,0,0,29,29,null,"#ae6650",2),Wt(i,1,-.8,25,25,null,"#b66c5266",.7),_t(i,"\u793A\u610F",0,0,17,"#9e5945",550,"center"),sd(i,0,-19,2,"#af7159"),sd(i,0,19,2,"#af7159")})}}),n>.36&&n<.74){let x=kt(yt(n,.36,.55)),p=kt(yt(n,.59,.82)),m=(1-x)*115+p*160,b=o+l*.25+p*60,w=c+h*.26-m;i.save(),i.globalAlpha=1-D_(yt(n,.62,.73)),hl(i,b,c+h*.29,21+m*.12,.16*(1-p)),Gi(i,b,w,-.13*(1-x)+.09*p,()=>{vn(i,-33,-9,66,20,5,"#a6906b","#6a6554",1),vn(i,-37,7,74,7,2,"#554d3b"),Ds(i,"M-20 -7 L-16 -41 Q-19 -72 0 -74 Q19 -72 16 -41 L20 -7Z","#81795d",Ls(i,-20,-60,20,-60,[[0,"#948965"],[.4,"#cac19c"],[1,"#8d825e"]]),1),Wt(i,-5,-65,7,3,"#e8dfb77f")}),i.restore()}if(!a){let x=kt(yt(n,.28,.43));Vc(i,[[o+l/2+20,c-38],[o+l/2+47,c-38],[o+l/2+65,c-65],[o+l/2+134,c-65]],x,Vi(r.accent,.6),1),i.save(),i.globalAlpha=x,_t(i,"\u9010\u9879\u5BF9\u7167",o+l/2+65,c-88,14,r.ink),_t(i,"\u4FDD\u7559\u7248\u672C\u4E0E\u8BB0\u5F55",o+l/2+65,c-42,12,r.muted),i.restore()}Us(i,n<.3?"\u6587\u6863\u5C55\u5F00":n<.55?"\u6761\u6B3E\u4E0E\u7B7E\u6761\u4F9D\u6B21\u51FA\u73B0":n<.82?"\u63A5\u89E6\u3001\u56DE\u5F39\uFF0C\u7136\u540E\u7559\u5370":"\u52A8\u4F5C\u5B8C\u6210\uFF0C\u7559\u51FA\u9605\u8BFB\u65F6\u95F4",e/2,t-(a?118:100),r,a?16:13)}function N_(i,e,t,n,s,r,a,o,c){let l=n*.44,h=t+s,f=t-s*.03,u=Ls(i,e-l,0,e+l,0,[[0,"#c5cbb970"],[.14,"#ffffffc0"],[.35,"#fbfff04a"],[.73,"#b5c4b46b"],[1,"#9dae984f"]]);i.save(),i.beginPath(),i.roundRect(e-l,f,l*2,s,[0,0,l,l]),i.fillStyle=u,i.fill(),i.strokeStyle="#96a78b9c",i.lineWidth=1.2,i.stroke(),i.clip();let d=h-15-(s-32)*r*o,g=Math.sin(c*16)*Math.exp(-c*5)*6;i.beginPath(),i.moveTo(e-l-1,d+g),i.quadraticCurveTo(e,d-5,e+l+1,d-g),i.lineTo(e+l+1,h+4),i.lineTo(e-l-1,h+4),i.closePath(),i.fillStyle=Ls(i,e-l,0,e+l,0,[[0,Vi(a,.58)],[.5,Vi(a,.25)],[1,Vi(a,.55)]]),i.fill(),i.beginPath(),i.moveTo(e-l,d+g),i.quadraticCurveTo(e,d-5,e+l,d-g),i.strokeStyle=Vi(a,.58),i.lineWidth=1.6,i.stroke();for(let x=0;x<6;x++)Zt(i,e+l-9,f+23+x*20,e+l-3,f+23+x*20,"#6c806151",.8);Zt(i,e-l+7,f+12,e-l+7,h-25,"#ffffffe6",2.4),i.restore(),vn(i,e-l-3,f-13,l*2+6,18,4,Ls(i,e-l,0,e+l,0,[[0,"#b2bd94"],[.45,"#d9ddbb"],[1,"#899a71"]]),"#899b6c",.8);for(let x=0;x<8;x++)Zt(i,e-l+1+x*(l*2-2)/8,f-9,e-l+1+x*(l*2-2)/8,f+1,"#f6f8df59",.8)}function ad(i,e,t,n,s,r,a){Ns(i,e,t,"\u7269\u8D44\u76D8\u70B9","\u9010\u9879\u51FA\u73B0\uFF0C\u6570\u91CF\u4E0E\u6807\u8BC6\u4E00\u4E00\u5BF9\u5E94",r,a);let o=[.82,.64,.47,.91,.16],c=["\u91C7\u8840\u7BA1","\u79BB\u5FC3\u7BA1","\u8BD5\u5242\u76D2","\u8017\u6750\u5305","\u51BB\u5B58\u7BA1"],l=e*(a?.13:.25),h=e*(a?.74:.5),f=h/4,u=t*.35,d=a?200:166;hl(i,e/2,u+d+43,h*.6,.12),vn(i,l-f*.45,u+d*.63,h+f*.9,23,4,"#c7cbae","#a1ae8b",1);for(let p=0;p<5;p++){let m=Jr(n,.055+p*.045,.22+p*.045),b=Math.max(0,n-(.22+p*.045))*10;N_(i,l+p*f,u-(1-m)*170,f*(a?.53:.42),d,o[p],p===4?"#bd886b":"#87a586",kt(yt(n,.11+p*.035,.36+p*.035)),b)}vn(i,l-f*.45,u+d-21,h+f*.9,40,5,Ls(i,0,u+d-21,0,u+d+19,[[0,"#d9ddbb"],[.45,"#b4bf95"],[1,"#a4b18b"]]),"#879976",1);for(let p=0;p<5;p++)Wt(i,l+p*f,u+d-12,f*.18,3,"#596e493a");Zt(i,l-f*.42,u+d-16,l+h+f*.41,u+d-16,"#edf0d1b0",1.5);for(let p=0;p<5;p++){let m=kt(yt(n,.25+p*.04,.42+p*.04));i.save(),i.globalAlpha=m,_t(i,c[p],l+p*f,u+d+49,a?16:13,r.ink,400,"center"),_t(i,Math.round(o[p]*100*m)+"%",l+p*f,u+d+82,a?22:24,p===4?"#a46c52":r.ink,500,"center",!0),i.restore()}let g=yt(n,.48,.75),x=l-f*.4+(h+f*.8)*g;g>0&&g<1&&(Zt(i,x,u-35,x,u+d+21,"#718f6a50",2),Wt(i,x,u-38,3,3,"#94aa72")),Us(i,"\u793A\u4F8B\u5E93\u5B58\u6BD4\u4F8B \xB7 \u4E0D\u4EE3\u8868\u5B9E\u9645\u5E93\u5B58\u6216\u91C7\u8D2D\u72B6\u6001",e/2,t-(a?118:98),r,a?15:12)}function od(i,e,t,n,s,r,a){Ns(i,e,t,"BE \u4F8B\u6570\u4F30\u7B97","\u53C2\u6570\u8FDB\u5165\uFF0C\u70B9\u9635\u6309\u987A\u5E8F\u6392\u5217",r,a);let o=Math.round(48*kt(yt(n,.1,.56))),c=e/2,l=a?t*.33:t*.39;_t(i,"n = "+String(o).padStart(2,"0"),c,l,a?68:88,r.ink,500,"center",!0);let h=12,f=4,u=a?29:26,d=c-(h-1)*u/2,g=l+(a?70:80);for(let p=0;p<48;p++){let m=p%h,b=Math.floor(p/h),w=yt(n,.12+p*.007,.23+p*.007),y=Jr(n,.12+p*.007,.23+p*.007);i.save(),i.globalAlpha=.16+.84*kt(w),Gi(i,d+m*u,g+b*u+(1-y)*14,0,()=>{Wt(i,0,-4,3.4,3.4,p<o?r.accent:"#9a9a89"),vn(i,-4.5,2,9,10,3,p<o?r.accent:"#9a9a89")}),i.restore()}let x=g+f*u+36;a?_t(i,"CV    /    \u6BD4\u503C    /    \u8131\u843D\u7387",c,x,16,r.muted,400,"center"):["CV","\u6BD4\u503C","\u8131\u843D\u7387"].forEach((p,m)=>{let b=c-210+m*210;vn(i,b-70,x-15,140,32,3,"#f6f2e044",r.line,1),_t(i,p,b,x,14,r.muted,400,"center")}),Us(i,"48 \u662F\u6CBF\u7528\u53C2\u8003\u7684\u6F14\u793A\u6570\u503C\uFF0C\u4E0D\u662F\u4F8B\u6570\u5EFA\u8BAE",e/2,t-(a?116:94),r,a?15:12)}function ld(i,e,t,n,s,r,a){Ns(i,e,t,"\u4E0D\u826F\u4E8B\u4EF6\u5206\u7EA7","\u5148\u67E5\u5177\u4F53\u6761\u76EE\uFF0C\u518D\u6838\u5BF9\u7B49\u7EA7\u6761\u4EF6",r,a);let o=a?76:100,c=a?15:21,l=o*5+c*4,h=(e-l)/2,f=a?t*.43:t*.46;for(let g=0;g<5;g++){let x=Jr(n,.055+g*.04,.25+g*.04),p=g===1?kt(yt(n,.42,.58)):0;Gi(i,h+g*(o+c)+o/2,f+(1-x)*70-p*18,0,()=>{i.globalAlpha=.15+.85*kt(yt(n,.055+g*.04,.23+g*.04)),i.save(),i.shadowColor="#5d69321b",i.shadowBlur=p?20:6,i.shadowOffsetY=p?12:4,vn(i,-o/2,-60,o,125,5,g===1?"#d2ddbb":"#f4efdf"),i.restore(),vn(i,-o/2,-60,o,125,5,null,g===1?"#7b98626e":"#aea88755",1),_t(i,"G"+(g+1),0,-13,a?30:38,g===1?"#425d35":r.ink,500,"center",!0),Zt(i,-o/2+13,18,o/2-13,18,"#969b6a3b"),_t(i,["\u8F7B","\u4E2D","\u91CD","\u5371\u91CD","\u6B7B\u4EA1"][g],0,42,a?16:15,r.muted,400,"center")})}let u=kt(yt(n,.55,.68));i.save(),i.globalAlpha=u;let d=h+(o+c)+o/2;Vc(i,[[d,f+62],[d,f+101],[e/2,f+101]],u,Vi(r.accent,.65),1),_t(i,"\u9010\u6761\u6838\u5BF9",e/2,f+130,a?18:16,r.ink,400,"center"),i.restore(),Us(i,"\u53C2\u8003\u6761\u76EE\u7684\u8868\u73B0\u6F14\u793A \xB7 \u4E0D\u7ED9\u51FA\u4E2A\u4F53\u5206\u7EA7\u7ED3\u8BBA",e/2,t-(a?117:94),r,a?15:12)}function cd(i,e,t,n,s,r,a){Ns(i,e,t,"\u672F\u8BED\u68C0\u7D22","\u8F93\u5165\u4E00\u4E2A\u8BCD\uFF0C\u5C55\u5F00\u5B83\u7684\u5C42\u7EA7",r,a);let o=a?410:500,c=(e-o)/2,l=a?t*.28:t*.29,h="headache",f=Math.min(h.length,Math.floor(yt(n,.09,.37)*(h.length+1)));if(vn(i,c,l,o,60,5,"#fcf8e8","#a0ad86",1.2),Wt(i,c+27,l+29,8,8,null,"#8c9c73",1.6),Zt(i,c+33,l+35,c+40,l+42,"#8c9c73",1.6),_t(i,h.slice(0,f),c+61,l+30,a?24:25,r.ink,500,"left",!0),n<.39&&Math.floor(s*3)%2===0){let g=c+61+f*15;Zt(i,g,l+18,g,l+44,r.accent,1.5)}let u=l+105,d=kt(yt(n,.42,.56));i.save(),i.globalAlpha=d,Gi(i,e/2,u+(1-d)*13,0,()=>{_t(i,"\u5934\u75DB",0,18,a?40:42,r.ink,400,"center"),_t(i,"PREFERRED TERM",0,54,12,r.muted,400,"center",!0),Zt(i,0,78,0,109,Vi(r.accent,.55),1),Wt(i,0,112,2.5,2.5,r.accent),vn(i,-o*.34,132,o*.68,64,4,"#f6f0df",r.line,1),_t(i,"SOC \u5206\u7C7B",0,154,a?18:15,r.ink,500,"center"),_t(i,"\u67E5\u9605\u5E76\u6838\u5BF9\u6765\u6E90",0,178,a?15:12,r.muted,400,"center")}),i.restore(),Us(i,"\u672C\u5730\u6392\u7248\u793A\u4F8B\uFF0C\u4E0D\u8FDE\u63A5\u5B9E\u65F6\u672F\u8BED\u6570\u636E\u5E93",e/2,t-(a?117:92),r,a?15:12)}function U_(i){Ds(i,"M-43 28 L-45 -9 Q-63 -53 -16 -58 Q23 -75 53 -43 Q68 -22 46 -7 L44 31Z","#b28d55","#d5ad70",2),Ds(i,"M-34 20 L-36 -8 Q-46 -40 -11 -44 Q21 -54 41 -34 Q52 -20 33 -7 L34 21Z",null,"#eed29b");for(let e=0;e<14;e++)Wt(i,-27+e*19%57,-29+e*29%45,1.4+e%2*.4,1,"#ae7d384f")}function hd(i,e,t,n,s,r,a){Ns(i,e,t,"\u9910\u8C31\u8BA1\u7B97","\u9910\u76D8\u3001\u98DF\u6750\u4E0E\u6784\u6210\u6BD4\u4F8B",r,a);let o=a?e*.5:e*.39,c=a?t*.405:t*.49,l=a?131:121;hl(i,o,c+18,l*1.04,.14),Wt(i,o,c,l,l,"#fcf8ed","#b8b7a2",1),Wt(i,o,c,l-15,l-15,null,"#dad9c23f",6),Wt(i,o,c,l-34,l-34,"#f4f1e4","#d3d2bc",1);let h=(x,p,m,b,w)=>{let y=Jr(n,.07+x*.08,.27+x*.08);i.save(),i.globalAlpha=kt(yt(n,.07+x*.08,.17+x*.08)),Gi(i,o+p,c+m-(1-y)*120,b,w),i.restore()};h(0,-24,-31,-.18,()=>U_(i)),h(1,38,18,.3,()=>{Ds(i,"M-45 -7 C-48 -39 -19 -32 1 -38 C40 -43 44 -2 34 22 C22 44 -7 26 -29 30 C-50 29 -48 6 -45 -7Z","#d9d5bf","#fffdf3",1),Wt(i,-1,-1,25,23,Ls(i,-20,-21,19,22,[[0,"#f8d16f"],[.65,"#edb542"],[1,"#d7a338"]])),Wt(i,-8,-9,7,3,"#fff2bc91")}),h(2,-49,53,.45,()=>{for(let x=0;x<3;x++)Wt(i,x*15,-x*5,13,18,"#afbd72","#859950",1);Zt(i,-3,10,27,-12,"#e2e4a4",1.2)});let f=o-l-24;Zt(i,f,c-72,f,c+71,"#889582",3);for(let x=0;x<3;x++)Zt(i,f-7+x*7,c-76,f-7+x*7,c-44,"#889582",2);if(Ds(i,`M${o+l+29} ${c-73} Q${o+l+10} ${c-30} ${o+l+25} ${c-14} L${o+l+28} ${c+70}`,"#919987",null,3),n>.34)for(let x=0;x<3;x++){let p=(s*.2+x*.3)%1;i.save(),i.globalAlpha=Math.sin(p*Math.PI)*.12,Ds(i,`M${o-20+x*17} ${c-55-p*34} Q${o-35+x*17} ${c-85-p*34} ${o-14+x*17} ${c-107-p*34}`,"#7c8868",null,1.5),i.restore()}let u=a?e*.5:e*.71,d=a?c+l+71:c-32,g=kt(yt(n,.28,.59));_t(i,Math.round(986*g),u,d,a?48:65,r.ink,500,"center",!0),_t(i,"kcal \xB7 \u6F14\u793A\u503C",u,d+40,a?16:14,r.muted,400,"center"),n>.5&&(i.save(),i.globalAlpha=kt(yt(n,.5,.66)),_t(i,"\u8102\u80AA\u4F9B\u80FD\u6BD4 \u2248 52%",u,d+74,a?17:15,r.ink,400,"center"),i.restore()),Us(i,"\u6CBF\u7528\u53C2\u8003\u6570\u503C\uFF0C\u4EC5\u7528\u4E8E\u52A8\u753B\u793A\u610F",e/2,t-(a?114:92),r,a?15:12)}var F_={id:"cth",n:1,name:"\u4E34\u5E8A\u5DE5\u5177\u96C6",url:"https://cth.jclaw.top",enabled:!0,color:"#9dab75",desc:"\u5408\u540C / \u7269\u8D44 / \u4F8B\u6570 / \u5206\u7EA7 / \u672F\u8BED / \u9910\u8C31"},O_=Object.freeze({bg:"#e9e2ce",dark:"#384b38",ink:"#364331",muted:"#7e856c",accent:"#7b8153",line:"#7c815126",light:!0}),B_=Object.freeze([ki({id:"cth.contract",channelId:"cth",label:"\u5408\u540C\u8FFD\u8E2A",seconds:10,draw:rd}),ki({id:"cth.inventory",channelId:"cth",label:"\u7269\u8D44\u76D8\u70B9",seconds:10.5,draw:ad}),ki({id:"cth.sample",channelId:"cth",label:"\u4F8B\u6570\u4F30\u7B97",seconds:10,draw:od}),ki({id:"cth.grades",channelId:"cth",label:"\u4E0D\u826F\u4E8B\u4EF6\u5206\u7EA7",seconds:10,draw:ld}),ki({id:"cth.terms",channelId:"cth",label:"\u672F\u8BED\u68C0\u7D22",seconds:10,draw:cd}),ki({id:"cth.breakfast",channelId:"cth",label:"\u9910\u8C31\u8BA1\u7B97",seconds:11,draw:hd})]),Gc=Object.freeze({apiVersion:1,website:Object.freeze(F_),theme:O_,scenes:B_});var dl=document.querySelector("#screen"),z_=ed(dl,Array.from({length:7},(i,e)=>({n:e+1,name:e===0?"\u4E34\u5E8A\u5DE5\u5177\u96C6":"\u9891\u9053 "+(e+1)})),()=>{});z_.update({ch:1,power:!0,paused:!1,menu:!1,pauseReason:null});document.querySelector("#siteMark").src=nd("cth");document.querySelectorAll(".tv-key,.tv-dial").forEach(i=>{i.disabled=!0,i.title="\u9759\u6001\u6750\u8D28\u6837\u7A3F"});document.querySelector("#tvPlayLabel").textContent="\u9759\u5E27";var ud=document.querySelector("#sceneCanvas"),dd=document.querySelector("#originalCanvas"),cn;try{cn=new jo({canvas:ud,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(i){let e=document.querySelector("#studyError");throw e.hidden=!1,e.textContent="\u6B64\u6837\u7A3F\u9700\u8981 WebGL 2\u3002\u5F53\u524D\u6D4F\u89C8\u5668\u672A\u80FD\u5EFA\u7ACB 3D \u753B\u5E03\uFF0C\u8BF7\u5728\u652F\u6301 WebGL \u7684\u6D4F\u89C8\u5668\u4E2D\u9884\u89C8\u3002",i}cn.setPixelRatio(Math.min(devicePixelRatio,2));cn.shadowMap.enabled=!0;cn.shadowMap.type=ui;cn.toneMapping=Ui;cn.toneMappingExposure=.83;cn.outputColorSpace=Rt;var Nt=new Ai;Nt.background=new ze("#dddcca");Nt.fog=new nr("#dddcca",19,39);var Yn=new Pt(29,1,.1,60),k_=new O(0,.75,0),fd=new Rs(cn),pd=new il,md=fd.fromScene(pd,.055);Nt.environment=md.texture;Nt.environmentIntensity=.48;pd.dispose();fd.dispose();Nt.add(new Mr("#fff8e8","#9aa38c",.7));var Zn=new Ms("#fff3d8",2.25);Zn.position.set(-4,8,5);Zn.castShadow=!0;Zn.shadow.mapSize.set(1024,1024);Object.assign(Zn.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:.5,far:24});Zn.shadow.bias=-3e-4;Zn.shadow.normalBias=.012;Zn.shadow.radius=14;Zn.shadow.blurSamples=16;Nt.add(Zn);var gd=new Ms("#e6eedf",.6);gd.position.set(5,4,-2);Nt.add(gd);function V_(){let e=new Uint8Array(65536),t=831;for(let s=0;s<e.length;s+=4){t=1664525*t+1013904223>>>0;let r=115+t%24;e[s]=e[s+1]=e[s+2]=r,e[s+3]=255}let n=new Ci(e,128,128);return n.needsUpdate=!0,n.wrapS=n.wrapT=cs,n.repeat.set(3,3),n}var gl=V_(),Hc=new gn({color:"#85967b",roughness:.56,metalness:0,clearcoat:.12,clearcoatRoughness:.5,bumpMap:gl,bumpScale:.008}),vi=new gn({color:"#dedfc9",roughness:.57,clearcoat:.13,bumpMap:gl,bumpScale:.006}),fl=new gn({color:"#869d7a",roughness:.43,clearcoat:.2,clearcoatRoughness:.3}),Wc=new gn({color:"#edf3e7",roughness:.055,transmission:.94,thickness:.14,ior:1.5,envMapIntensity:2.2,clearcoat:1,clearcoatRoughness:.065}),Qr=new gn({color:"#78967c",roughness:.23,clearcoat:.75,clearcoatRoughness:.12}),Xc=new ot(new Wn(180,180),new rn({color:"#cecdb6",roughness:.94}));Xc.rotation.x=-Math.PI/2;Xc.receiveShadow=!0;Nt.add(Xc);function Fn(i,e,t,n=0,s=0,r=0){let a=new ot(i,e);return a.position.set(n,s,r),a.castShadow=!0,a.receiveShadow=!0,t.add(a),a}function Nn(i,e,t,n,s,r=0,a=0,o=0,c=.045){return Fn(new nl(i,e,t,3,c),n,s,r,a,o)}function Hi(i,e,t,n,s=0,r=0,a=0){return Fn(new Pi(i,i,e,64),t,n,s,r,a)}function pl(i,e,t,n,s,r,a){let o=Fn(new xr(i,e,10,64),t,n,s,r,a);return o.rotation.x=Math.PI/2,o}function Os(i,e,t,n,s=.16,r=Nt){let a=document.createElement("canvas");a.width=a.height=128;let o=a.getContext("2d"),c=o.createRadialGradient(64,64,8,64,64,62);c.addColorStop(0,"rgba(35,46,30,.6)"),c.addColorStop(.45,"rgba(35,46,30,.22)"),c.addColorStop(1,"rgba(35,46,30,0)"),o.fillStyle=c,o.fillRect(0,0,128,128);let l=new ot(new Wn(t,n),new ri({map:new Ri(a),transparent:!0,opacity:s,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.set(i,.007,e),r.add(l)}function _d(i,e,{paper:t="#ecebdf",accent:n="#8c9c80",pouch:s=!1}={}){let r=document.createElement("canvas");r.width=1024,r.height=1024;let a=r.getContext("2d");a.fillStyle=t,a.fillRect(0,0,1024,1024),a.fillStyle=n,a.fillRect(0,0,1024,s?125:170),a.fillStyle="#f2f1e6",a.font='500 35px "Microsoft YaHei",sans-serif',a.fillText("\u4E34\u5E8A\u5DE5\u5177\u96C6",65,95),a.fillStyle="#3e5140",a.font='600 115px "Microsoft YaHei",sans-serif',a.fillText(i,65,445),a.fillStyle="#858f7c",a.font='32px "Microsoft YaHei",sans-serif',a.fillText(e,68,515),a.strokeStyle="#9eaa9255",a.lineWidth=2,a.beginPath(),a.moveTo(65,594),a.lineTo(955,594),a.stroke(),a.fillStyle="#8c9783",a.font='25px "Microsoft YaHei",sans-serif',a.fillText("\u7269\u8D44\u793A\u610F",68,905);for(let c=0;c<48;c++)a.fillStyle=c%4===0?"#5b6e51":"#8d9b7c",a.fillRect(690+c*5,750,2+c%3,92);a.strokeStyle="#b4bda866",a.strokeRect(2,2,1020,1020);let o=new Ri(r);return o.colorSpace=Rt,o.anisotropy=cn.capabilities.getMaxAnisotropy(),o}function qc(i,e,t,n,s,r=36){for(let a=0;a<r;a++){let o=a*Math.PI*2/r,c=Nn(.018,t,.028,s,i,Math.sin(o)*e,n,Math.cos(o)*e,.008);c.rotation.y=o}}function xd(i,e,t,n){let s=document.createElement("canvas");s.width=128,s.height=512;let r=s.getContext("2d");r.strokeStyle="#657962a0",r.lineWidth=3;for(let c=0;c<9;c++){let l=45+c*47;r.beginPath(),r.moveTo(c%2?63:38,l),r.lineTo(99,l),r.stroke()}let a=new Ri(s);a.colorSpace=Rt;let o=Fn(new Pi(e,e,n,64,1,!0,-.32,.7),new ri({map:a,transparent:!0,depthWrite:!1,side:en}),i,0,t,0);o.castShadow=!1}function Yc(i,e,t,n,s){let r=new Gt;r.position.set(e,.16,t),i.add(r);let a=.18,o=[new ie(0,0),new ie(.08,.005),new ie(.147,.04),new ie(a,.13),new ie(a,n),new ie(.158,n),new ie(.158,.15),new ie(.13,.08),new ie(0,.07)],c=Fn(new Di(o,80),Wc,r);c.castShadow=!1;let l=Hi(.151,s,Qr,r,0,.12+s/2,0);l.castShadow=!1;let h=pl(.143,.009,Qr,r,0,.12+s,0);h.castShadow=!1;let f=Hi(.218,.21,fl,r,0,n+.075,0);return qc(r,.213,.15,n+.073,fl),pl(.203,.017,vi,r,0,n-.034,0),xd(r,.181,n*.61,n*.53),r}var Un=new Gt;Un.position.set(-1.65,0,.35);Un.rotation.y=-.09;Nt.add(Un);Nn(2.64,.18,.97,Hc,Un,0,.16,0,.08);for(let i of[-1.15,1.15])Nn(.16,.55,.69,Hc,Un,i,.49,0,.04),Nn(.32,.055,.76,vi,Un,i,.055,0,.025);function G_(){let i=new gs,e=2.64,t=.92,n=.1;i.moveTo(-e/2+n,-t/2),i.lineTo(e/2-n,-t/2),i.quadraticCurveTo(e/2,-t/2,e/2,-t/2+n),i.lineTo(e/2,t/2-n),i.quadraticCurveTo(e/2,t/2,e/2-n,t/2),i.lineTo(-e/2+n,t/2),i.quadraticCurveTo(-e/2,t/2,-e/2,t/2-n),i.lineTo(-e/2,-t/2+n),i.quadraticCurveTo(-e/2,-t/2,-e/2+n,-t/2);for(let r of[-.73,0,.73]){let a=new Ii;a.absarc(r,0,.235,0,Math.PI*2,!0),i.holes.push(a)}let s=new _r(i,{depth:.1,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.024,bevelThickness:.024,curveSegments:36});return s.rotateX(-Math.PI/2),s}Fn(G_(),Hc,Un,0,.71,0);Yc(Un,-.73,0,1.98,.88);Yc(Un,0,0,2.22,1.16);Yc(Un,.73,0,1.82,.65);Os(-1.65,.35,3.4,1.5,.29);var Mn=new Gt;Mn.position.set(.03,0,-.92);Nt.add(Mn);var aS=Nn(.82,.19,.8,vi,Mn,0,.11,0,.065);Hi(.18,.28,vi,Mn,0,.34,0);pl(.15,.031,vi,Mn,0,.49,0);var H_=[new ie(0,.2),new ie(.09,.25),new ie(.25,.85),new ie(.25,2.37),new ie(.218,2.37),new ie(.218,.86),new ie(.068,.3),new ie(0,.28)],W_=Fn(new Di(H_,80),Wc,Mn);W_.castShadow=!1;Fn(new cr(.218,.68,64),Qr,Mn,0,.59,0).rotation.z=Math.PI;Hi(.218,.45,Qr,Mn,0,1.145,0).castShadow=!1;Hi(.291,.24,vi,Mn,0,2.43,0);qc(Mn,.287,.18,2.43,vi,40);xd(Mn,.252,1.55,1.1);Os(.03,-.92,1.3,1.25,.2);var yn=new rn({color:"#dedfca",roughness:.93,bumpMap:gl,bumpScale:.009}),vd=new rn({map:_d("\u8BD5\u5242\u76D2","\u8BD5\u5242 / \u5206\u7C7B\u5B58\u653E"),roughness:.87,bumpMap:gl,bumpScale:.006}),Bs=new Gt;Bs.position.set(1.38,0,-.88);Bs.rotation.y=-.17;Nt.add(Bs);Nn(1.26,1.92,.88,[yn,yn,yn,yn,vd,yn],Bs,0,.98,0,.022);Nn(1.24,.032,.85,yn,Bs,0,1.965,0,.01);var X_=new rn({color:"#b7c0a3",roughness:.85});Nn(.33,.007,.91,X_,Bs,0,1.985,0,.003);Os(1.38,-.88,1.9,1.55,.22);var _l=new Gt;_l.position.set(2.35,0,-.34);_l.rotation.y=.2;Nt.add(_l);Nn(.73,1.09,.7,[yn,yn,yn,yn,vd,yn],_l,0,.56,0,.018);Os(2.35,-.34,1.15,1.1,.2);var jr=new Gt;jr.position.set(.86,.035,1.14);jr.rotation.y=-.34;Nt.add(jr);var q_=new gn({color:"#c1c5b7",roughness:.5,metalness:.18,clearcoat:.25});Nn(1.3,.055,1.7,q_,jr,0,.008,0,.04);var Zc=new Wn(1.26,1.65,40,40),ul=Zc.attributes.position;for(let i=0;i<ul.count;i++){let e=ul.getX(i),t=ul.getY(i),n=.095*Math.pow(Math.max(0,Math.cos(e/1.26*Math.PI)*Math.cos(t/1.65*Math.PI)),.7);ul.setZ(i,n+.006*Math.sin(t*33+e*12)*Math.pow(Math.abs(e/.63),5))}Zc.computeVertexNormals();var Y_=new gn({map:_d("\u8017\u6750\u5305","\u8017\u6750 / \u5206\u7C7B\u5B58\u653E",{pouch:!0,paper:"#eaeadd",accent:"#a4af94"}),roughness:.55,clearcoat:.2,clearcoatRoughness:.4,side:en}),Z_=Fn(Zc,Y_,jr,0,.04,0);Z_.rotation.x=-Math.PI/2;Os(.86,1.14,1.65,2,.25);var Wi=new Gt;Wi.position.set(2.29,0,.97);Nt.add(Wi);var J_=[new ie(0,.07),new ie(.15,.07),new ie(.2,.12),new ie(.2,.78),new ie(.173,.78),new ie(.173,.15),new ie(0,.13)];Fn(new Di(J_,64),Wc,Wi).castShadow=!1;Hi(.167,.25,Qr,Wi,0,.25,0).castShadow=!1;Hi(.238,.23,fl,Wi,0,.83,0);qc(Wi,.231,.17,.84,fl,32);pl(.2,.012,vi,Wi,0,.7,0);Os(2.29,.97,.75,.75,.24);var $_=new bt(1,1,{samples:4,type:Dt}),Fs=new al(cn,$_);Fs.addPass(new ol(Nt,Yn));var ml=new ll(Nt,Yn,{focus:8,aperture:9e-4,maxblur:.004});Fs.addPass(ml);Fs.addPass(new cl);var qn=!1,$r=!0,Kr,K_=["sceneType","materialLegend","sceneCaption"];function zs(){let i=dl.clientWidth,e=dl.clientHeight;if(!i||!e)return;cn.setSize(i,e,!1),Fs.setSize(i,e),Yn.aspect=i/e;let t=Math.max(1,1.7/Yn.aspect);if(Yn.position.set(4.1*t,3.7*t,7.56*t),Yn.lookAt(k_),Yn.updateProjectionMatrix(),Yn.updateMatrixWorld(),ml.uniforms.focus.value=-new O(-1.4,1.25,.3).applyMatrix4(Yn.matrixWorldInverse).z,ml.enabled=$r,qn){let n={width:i,height:e,dpr:Math.min(devicePixelRatio,2)};Kr||(Kr=Gc.scenes[1].create({canvas:dd,viewport:n,theme:Gc.theme,index:1,count:6})),Kr.resize(n),Kr.render({elapsedMs:7560,deltaMs:0,playing:!1})}else Fs.render();document.body.dataset.rendered="true"}document.querySelector("#compare").onclick=i=>{qn=!qn,i.currentTarget.setAttribute("aria-pressed",String(qn)),i.currentTarget.textContent=qn?"\u8FD4\u56DE 3D \u6837\u7A3F":"\u539F\u7248\u5BF9\u7167",dd.hidden=!qn,ud.hidden=qn,K_.forEach(e=>document.getElementById(e).hidden=qn),document.querySelector("#depth").disabled=qn,zs()};document.querySelector("#depth").onclick=i=>{$r=!$r,i.currentTarget.setAttribute("aria-pressed",String($r)),i.currentTarget.textContent=$r?"\u666F\u6DF1\uFF1A\u5F00":"\u666F\u6DF1\uFF1A\u5173",zs()};document.querySelector("#view").onclick=i=>{let e=document.body.classList.toggle("close-up");i.currentTarget.setAttribute("aria-pressed",String(e)),i.currentTarget.textContent=e?"\u653E\u56DE\u7535\u89C6":"\u653E\u5927\u753B\u9762",requestAnimationFrame(zs)};var yd=new ResizeObserver(zs);yd.observe(dl);window.addEventListener("pagehide",()=>{yd.disconnect(),Kr?.dispose(),Fs.dispose(),ml.dispose(),md.dispose(),cn.dispose()});document.fonts.ready.then(zs);zs();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

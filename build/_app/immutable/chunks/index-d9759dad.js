import{R as dl}from"./index-dc2bbbcc.js";const pl="124",ml=0,Uo=1,gl=2,Mc=1,vl=2,Ii=3,is=0,$t=1,rs=2,wc=1,Ni=0,Oi=1,zo=2,Ho=3,Go=4,yl=5,Zn=100,xl=101,_l=102,ko=103,Vo=104,bl=200,Ml=201,wl=202,Sl=203,Sc=204,Ec=205,El=206,Tl=207,Al=208,Ll=209,Cl=210,Rl=0,Pl=1,Il=2,ks=3,Dl=4,Nl=5,Ol=6,Fl=7,ss=0,Bl=1,Ul=2,Fi=0,zl=1,Hl=2,Gl=3,kl=4,Vl=5,Tc=300,wo=301,So=302,Wo=303,jo=304,Eo=306,To=307,Vs=1e3,fe=1001,Ws=1002,re=1003,qo=1004,Xo=1005,ne=1006,Wl=1007,os=1008,Ao=1009,jl=1010,ql=1011,kr=1012,Xl=1013,Hr=1014,cn=1015,Vr=1016,Yl=1017,Zl=1018,Jl=1019,Bi=1020,Ql=1021,wn=1022,Le=1023,$l=1024,Kl=1025,ii=1026,ki=1027,th=1028,eh=1029,nh=1030,ih=1031,rh=1032,sh=1033,Yo=33776,Zo=33777,Jo=33778,Qo=33779,$o=35840,Ko=35841,ta=35842,ea=35843,oh=36196,na=37492,ia=37496,ah=37808,ch=37809,lh=37810,hh=37811,uh=37812,fh=37813,dh=37814,ph=37815,mh=37816,gh=37817,vh=37818,yh=37819,xh=37820,_h=37821,bh=36492,Mh=37840,wh=37841,Sh=37842,Eh=37843,Th=37844,Ah=37845,Lh=37846,Ch=37847,Rh=37848,Ph=37849,Ih=37850,Dh=37851,Nh=37852,Oh=37853,Fh=2200,Bh=2201,Uh=2202,Wr=2300,Gr=2301,fs=2302,Jn=2400,Qn=2401,jr=2402,Lo=2500,Ac=2501,zh=0,ir=3e3,Lc=3001,Hh=3007,Gh=3002,kh=3003,Vh=3004,Wh=3005,jh=3006,qh=3200,Xh=3201,vi=0,Yh=1,ds=7680,Zh=519,as=35044,Vi=35048,ra="300 es";function $e(){}Object.assign($e.prototype,{addEventListener:function(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)},hasEventListener:function(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1},removeEventListener:function(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t)}}});const Qt=[];for(let t=0;t<256;t++)Qt[t]=(t<16?"0":"")+t.toString(16);let ar=1234567;const Mt={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toUpperCase()},clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},lerp:function(t,e,n){return(1-n)*t+n*e},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){return t!==void 0&&(ar=t%2147483647),ar=ar*16807%2147483647,(ar-1)/2147483646},degToRad:function(t){return t*Mt.DEG2RAD},radToDeg:function(t){return t*Mt.RAD2DEG},isPowerOfTwo:function(t){return(t&t-1)===0&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((e+i)/2),f=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),u=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":t.set(a*f,c*h,c*d,a*l);break;case"YZY":t.set(c*d,a*f,c*h,a*l);break;case"ZXZ":t.set(c*h,c*d,a*f,a*l);break;case"XZX":t.set(a*f,c*p,c*u,a*l);break;case"YXY":t.set(c*u,a*f,c*p,a*l);break;case"ZYZ":t.set(c*p,c*u,a*f,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class k{constructor(e=0,n=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}class ce{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=c,f[6]=i,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],f=i[4],h=i[7],d=i[2],u=i[5],p=i[8],v=r[0],y=r[3],g=r[6],m=r[1],S=r[4],T=r[7],M=r[2],x=r[5],A=r[8];return s[0]=o*v+a*m+c*M,s[3]=o*y+a*S+c*x,s[6]=o*g+a*T+c*A,s[1]=l*v+f*m+h*M,s[4]=l*y+f*S+h*x,s[7]=l*g+f*T+h*A,s[2]=d*v+u*m+p*M,s[5]=d*y+u*S+p*x,s[8]=d*g+u*T+p*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return n*o*f-n*a*l-i*s*f+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],h=f*o-a*l,d=a*c-f*s,u=l*s-o*c,p=n*h+i*d+r*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=h*v,e[1]=(r*l-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*n-r*c)*v,e[5]=(r*s-a*n)*v,e[6]=u*v,e[7]=(i*c-l*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).copy(this).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],f=r[7];return r[0]=n*s+i*c,r[3]=n*o+i*l,r[6]=n*a+i*f,r[1]=-i*s+n*c,r[4]=-i*o+n*l,r[7]=-i*a+n*f,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}}let Dn;const yi={getDataURL:function(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Dn===void 0&&(Dn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Dn.width=t.width,Dn.height=t.height;const n=Dn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Dn}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}};let Jh=0;function Ht(t=Ht.DEFAULT_IMAGE,e=Ht.DEFAULT_MAPPING,n=fe,i=fe,r=ne,s=os,o=Le,a=Ao,c=1,l=ir){Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Mt.generateUUID(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new k(0,0),this.repeat=new k(1,1),this.center=new k(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.version=0,this.onUpdate=null}Ht.DEFAULT_IMAGE=void 0;Ht.DEFAULT_MAPPING=Tc;Ht.prototype=Object.assign(Object.create($e.prototype),{constructor:Ht,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Mt.generateUUID()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(ps(i[s].image)):r.push(ps(i[s]))}else r=ps(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping!==Tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vs:t.x=t.x-Math.floor(t.x);break;case fe:t.x=t.x<0?0:1;break;case Ws:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vs:t.y=t.y-Math.floor(t.y);break;case fe:t.y=t.y<0?0:1;break;case Ws:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}});Object.defineProperty(Ht.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function ps(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?yi.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Ot{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],f=c[4],h=c[8],d=c[1],u=c[5],p=c[9],v=c[2],y=c[6],g=c[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(p-y)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(p+y)<.1&&Math.abs(l+u+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(l+1)/2,T=(u+1)/2,M=(g+1)/2,x=(f+d)/4,A=(h+v)/4,U=(p+y)/4;return S>T&&S>M?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=x/i,s=A/i):T>M?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=x/r,s=U/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=U/s),this.set(i,r,s,n),this}let m=Math.sqrt((y-p)*(y-p)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(m)<.001&&(m=1),this.x=(y-p)/m,this.y=(h-v)/m,this.z=(d-f)/m,this.w=Math.acos((l+u+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}function Ce(t,e,n){this.width=t,this.height=e,this.scissor=new Ot(0,0,t,e),this.scissorTest=!1,this.viewport=new Ot(0,0,t,e),n=n||{},this.texture=new Ht(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=e,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ne,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}Ce.prototype=Object.assign(Object.create($e.prototype),{constructor:Ce,isWebGLRenderTarget:!0,setSize:function(t,e){(this.width!==t||this.height!==e)&&(this.width=t,this.height=e,this.texture.image.width=t,this.texture.image.height=e,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function sa(t,e,n){Ce.call(this,t,e,n),this.samples=4}sa.prototype=Object.assign(Object.create(Ce.prototype),{constructor:sa,isWebGLMultisampleRenderTarget:!0,copy:function(t){return Ce.prototype.copy.call(this,t),this.samples=t.samples,this}});class de{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=e,this._y=n,this._z=i,this._w=r}static slerp(e,n,i,r){return i.copy(e).slerp(n,r)}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],u=s[o+1],p=s[o+2],v=s[o+3];if(h!==v||c!==d||l!==u||f!==p){let y=1-a;const g=c*d+l*u+f*p+h*v,m=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){const M=Math.sqrt(S),x=Math.atan2(M,g*m);y=Math.sin(y*x)/M,a=Math.sin(a*x)/M}const T=a*m;if(c=c*y+d*T,l=l*y+u*T,f=f*y+p*T,h=h*y+v*T,y===1-a){const M=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=M,l*=M,f*=M,h*=M}}e[n]=c,e[n+1]=l,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],f=i[r+3],h=s[o],d=s[o+1],u=s[o+2],p=s[o+3];return e[n]=a*p+f*h+c*u-l*d,e[n+1]=c*p+f*d+l*h-a*u,e[n+2]=l*p+f*u+a*d-c*h,e[n+3]=f*p-a*h-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(r/2),h=a(s/2),d=c(i/2),u=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=d*f*h+l*u*p,this._y=l*u*h-d*f*p,this._z=l*f*p+d*u*h,this._w=l*f*h-d*u*p;break;case"YXZ":this._x=d*f*h+l*u*p,this._y=l*u*h-d*f*p,this._z=l*f*p-d*u*h,this._w=l*f*h+d*u*p;break;case"ZXY":this._x=d*f*h-l*u*p,this._y=l*u*h+d*f*p,this._z=l*f*p+d*u*h,this._w=l*f*h-d*u*p;break;case"ZYX":this._x=d*f*h-l*u*p,this._y=l*u*h+d*f*p,this._z=l*f*p-d*u*h,this._w=l*f*h+d*u*p;break;case"YZX":this._x=d*f*h+l*u*p,this._y=l*u*h+d*f*p,this._z=l*f*p-d*u*h,this._w=l*f*h-d*u*p;break;case"XZY":this._x=d*f*h-l*u*p,this._y=l*u*h-d*f*p,this._z=l*f*p+d*u*h,this._w=l*f*h+d*u*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(f-c)*u,this._y=(s-l)*u,this._z=(o-r)*u}else if(i>a&&i>h){const u=2*Math.sqrt(1+i-a-h);this._w=(f-c)/u,this._x=.25*u,this._y=(r+o)/u,this._z=(s+l)/u}else if(a>h){const u=2*Math.sqrt(1+a-i-h);this._w=(s-l)/u,this._x=(r+o)/u,this._y=.25*u,this._z=(c+f)/u}else{const u=2*Math.sqrt(1+h-i-a);this._w=(o-r)/u,this._x=(s+l)/u,this._y=(c+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-6?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt.clamp(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,n)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,f=n._w;return this._x=i*f+o*a+r*l-s*c,this._y=r*f+o*c+s*a-i*l,this._z=s*f+o*l+i*c-r*a,this._w=o*f-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const u=1-n;return this._w=u*o+n*this._w,this._x=u*i+n*this._x,this._y=u*r+n*this._y,this._z=u*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),h=Math.sin((1-n)*f)/l,d=Math.sin(n*f)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}class E{constructor(e=0,n=0,i=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,n)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(oa.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(oa.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*n+o*r-a*i,f=c*i+a*n-s*r,h=c*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=l*c+d*-s+f*-a-h*-o,this.y=f*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,n)):this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ms.copy(this).projectOnVector(e),this.sub(ms)}reflect(e){return this.sub(ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mt.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}const ms=new E,oa=new de;class gn{constructor(e,n){Object.defineProperty(this,"isBox3",{value:!0}),this.min=e!==void 0?e:new E(1/0,1/0,1/0),this.max=n!==void 0?n:new E(-1/0,-1/0,-1/0)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const f=e[c],h=e[c+1],d=e[c+2];f<n&&(n=f),h<i&&(i=h),d<r&&(r=d),f>s&&(s=f),h>o&&(o=h),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const f=e.getX(c),h=e.getY(c),d=e.getZ(c);f<n&&(n=f),h<i&&(i=h),d<r&&(r=d),f>s&&(s=f),h>o&&(o=h),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=wi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new E),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new E),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const n=e.geometry;n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox),vs.applyMatrix4(e.matrixWorld),this.union(vs));const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),n=new E),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Si),cr.subVectors(this.max,Si),Nn.subVectors(e.a,Si),On.subVectors(e.b,Si),Fn.subVectors(e.c,Si),Ke.subVectors(On,Nn),tn.subVectors(Fn,On),xn.subVectors(Nn,Fn);let n=[0,-Ke.z,Ke.y,0,-tn.z,tn.y,0,-xn.z,xn.y,Ke.z,0,-Ke.x,tn.z,0,-tn.x,xn.z,0,-xn.x,-Ke.y,Ke.x,0,-tn.y,tn.x,0,-xn.y,xn.x,0];return!gs(n,Nn,On,Fn,cr)||(n=[1,0,0,0,1,0,0,0,1],!gs(n,Nn,On,Fn,cr))?!1:(lr.crossVectors(Ke,tn),n=[lr.x,lr.y,lr.z],gs(n,Nn,On,Fn,cr))}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),n=new E),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return wi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ge[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ge[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ge[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ge[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ge[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ge[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ge[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ge[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ge),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function gs(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){_n.fromArray(t,s);const a=r.x*Math.abs(_n.x)+r.y*Math.abs(_n.y)+r.z*Math.abs(_n.z),c=e.dot(_n),l=n.dot(_n),f=i.dot(_n);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const Ge=[new E,new E,new E,new E,new E,new E,new E,new E],wi=new E,vs=new gn,Nn=new E,On=new E,Fn=new E,Ke=new E,tn=new E,xn=new E,Si=new E,cr=new E,lr=new E,_n=new E,Qh=new gn;class vn{constructor(e,n){this.center=e!==void 0?e:new E,this.radius=n!==void 0?n:-1}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Qh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),n=new E),n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new gn),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}}const ke=new E,ys=new E,hr=new E,en=new E,xs=new E,ur=new E,_s=new E;class rr{constructor(e,n){this.origin=e!==void 0?e:new E,this.direction=n!==void 0?n:new E(0,0,-1)}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n===void 0&&(console.warn("THREE.Ray: .at() target is now required"),n=new E),n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ke)),this}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),n=new E),n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ke.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ke.copy(this.direction).multiplyScalar(n).add(this.origin),ke.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ys.copy(e).add(n).multiplyScalar(.5),hr.copy(n).sub(e).normalize(),en.copy(this.origin).sub(ys);const s=e.distanceTo(n)*.5,o=-this.direction.dot(hr),a=en.dot(this.direction),c=-en.dot(hr),l=en.lengthSq(),f=Math.abs(1-o*o);let h,d,u,p;if(f>0)if(h=o*c-a,d=o*a-c,p=s*f,h>=0)if(d>=-p)if(d<=p){const v=1/f;h*=v,d*=v,u=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),u=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-s,-c),s),u=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),u=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(hr).multiplyScalar(d).add(ys),u}intersectSphere(e,n){ke.subVectors(e.center,this.origin);const i=ke.dot(this.direction),r=ke.dot(ke)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ke)!==null}intersectTriangle(e,n,i,r,s){xs.subVectors(n,e),ur.subVectors(i,e),_s.crossVectors(xs,ur);let o=this.direction.dot(_s),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;en.subVectors(this.origin,e);const c=a*this.direction.dot(ur.crossVectors(en,ur));if(c<0)return null;const l=a*this.direction.dot(xs.cross(en));if(l<0||c+l>o)return null;const f=-a*en.dot(_s);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}}class St{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l,f,h,d,u,p,v,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=f,g[10]=h,g[14]=d,g[3]=u,g[7]=p,g[11]=v,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Bn.setFromMatrixColumn(e,0).length(),s=1/Bn.setFromMatrixColumn(e,1).length(),o=1/Bn.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,u=o*h,p=a*f,v=a*h;n[0]=c*f,n[4]=-c*h,n[8]=l,n[1]=u+p*l,n[5]=d-v*l,n[9]=-a*c,n[2]=v-d*l,n[6]=p+u*l,n[10]=o*c}else if(e.order==="YXZ"){const d=c*f,u=c*h,p=l*f,v=l*h;n[0]=d+v*a,n[4]=p*a-u,n[8]=o*l,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=u*a-p,n[6]=v+d*a,n[10]=o*c}else if(e.order==="ZXY"){const d=c*f,u=c*h,p=l*f,v=l*h;n[0]=d-v*a,n[4]=-o*h,n[8]=p+u*a,n[1]=u+p*a,n[5]=o*f,n[9]=v-d*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const d=o*f,u=o*h,p=a*f,v=a*h;n[0]=c*f,n[4]=p*l-u,n[8]=d*l+v,n[1]=c*h,n[5]=v*l+d,n[9]=u*l-p,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const d=o*c,u=o*l,p=a*c,v=a*l;n[0]=c*f,n[4]=v-d*h,n[8]=p*h+u,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-l*f,n[6]=u*h+p,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*c,u=o*l,p=a*c,v=a*l;n[0]=c*f,n[4]=-h,n[8]=l*f,n[1]=d*h+v,n[5]=o*f,n[9]=u*h-p,n[2]=p*h-u,n[6]=a*f,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($h,e,Kh)}lookAt(e,n,i){const r=this.elements;return he.subVectors(e,n),he.lengthSq()===0&&(he.z=1),he.normalize(),nn.crossVectors(i,he),nn.lengthSq()===0&&(Math.abs(i.z)===1?he.x+=1e-4:he.z+=1e-4,he.normalize(),nn.crossVectors(i,he)),nn.normalize(),fr.crossVectors(he,nn),r[0]=nn.x,r[4]=fr.x,r[8]=he.x,r[1]=nn.y,r[5]=fr.y,r[9]=he.y,r[2]=nn.z,r[6]=fr.z,r[10]=he.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,n)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],f=i[1],h=i[5],d=i[9],u=i[13],p=i[2],v=i[6],y=i[10],g=i[14],m=i[3],S=i[7],T=i[11],M=i[15],x=r[0],A=r[4],U=r[8],F=r[12],Y=r[1],P=r[5],D=r[9],I=r[13],R=r[2],C=r[6],O=r[10],G=r[14],j=r[3],J=r[7],tt=r[11],it=r[15];return s[0]=o*x+a*Y+c*R+l*j,s[4]=o*A+a*P+c*C+l*J,s[8]=o*U+a*D+c*O+l*tt,s[12]=o*F+a*I+c*G+l*it,s[1]=f*x+h*Y+d*R+u*j,s[5]=f*A+h*P+d*C+u*J,s[9]=f*U+h*D+d*O+u*tt,s[13]=f*F+h*I+d*G+u*it,s[2]=p*x+v*Y+y*R+g*j,s[6]=p*A+v*P+y*C+g*J,s[10]=p*U+v*D+y*O+g*tt,s[14]=p*F+v*I+y*G+g*it,s[3]=m*x+S*Y+T*R+M*j,s[7]=m*A+S*P+T*C+M*J,s[11]=m*U+S*D+T*O+M*tt,s[15]=m*F+S*I+T*G+M*it,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],h=e[6],d=e[10],u=e[14],p=e[3],v=e[7],y=e[11],g=e[15];return p*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*u-i*c*u)+v*(+n*c*u-n*l*d+s*o*d-r*o*u+r*l*f-s*c*f)+y*(+n*l*h-n*a*u-s*o*h+i*o*u+s*a*f-i*l*f)+g*(-r*a*f-n*c*h+n*a*d+r*o*h-i*o*d+i*c*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],h=e[9],d=e[10],u=e[11],p=e[12],v=e[13],y=e[14],g=e[15],m=h*y*l-v*d*l+v*c*u-a*y*u-h*c*g+a*d*g,S=p*d*l-f*y*l-p*c*u+o*y*u+f*c*g-o*d*g,T=f*v*l-p*h*l+p*a*u-o*v*u-f*a*g+o*h*g,M=p*h*c-f*v*c-p*a*d+o*v*d+f*a*y-o*h*y,x=n*m+i*S+r*T+s*M;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/x;return e[0]=m*A,e[1]=(v*d*s-h*y*s-v*r*u+i*y*u+h*r*g-i*d*g)*A,e[2]=(a*y*s-v*c*s+v*r*l-i*y*l-a*r*g+i*c*g)*A,e[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*u-i*c*u)*A,e[4]=S*A,e[5]=(f*y*s-p*d*s+p*r*u-n*y*u-f*r*g+n*d*g)*A,e[6]=(p*c*s-o*y*s-p*r*l+n*y*l+o*r*g-n*c*g)*A,e[7]=(o*d*s-f*c*s+f*r*l-n*d*l-o*r*u+n*c*u)*A,e[8]=T*A,e[9]=(p*h*s-f*v*s-p*i*u+n*v*u+f*i*g-n*h*g)*A,e[10]=(o*v*s-p*a*s+p*i*l-n*v*l-o*i*g+n*a*g)*A,e[11]=(f*a*s-o*h*s-f*i*l+n*h*l+o*i*u-n*a*u)*A,e[12]=M*A,e[13]=(f*v*r-p*h*r+p*i*d-n*v*d-f*i*y+n*h*y)*A,e[14]=(p*a*r-o*v*r-p*i*c+n*v*c+o*i*y-n*a*y)*A,e[15]=(o*h*r-f*a*r+f*i*c-n*h*c-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,f=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,f*a+i,f*c-r*o,0,l*c-r*a,f*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i){return this.set(1,n,i,0,e,1,i,0,e,n,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,f=o+o,h=a+a,d=s*l,u=s*f,p=s*h,v=o*f,y=o*h,g=a*h,m=c*l,S=c*f,T=c*h,M=i.x,x=i.y,A=i.z;return r[0]=(1-(v+g))*M,r[1]=(u+T)*M,r[2]=(p-S)*M,r[3]=0,r[4]=(u-T)*x,r[5]=(1-(d+g))*x,r[6]=(y+m)*x,r[7]=0,r[8]=(p+S)*A,r[9]=(y-m)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Bn.set(r[0],r[1],r[2]).length();const o=Bn.set(r[4],r[5],r[6]).length(),a=Bn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],we.copy(this);const l=1/s,f=1/o,h=1/a;return we.elements[0]*=l,we.elements[1]*=l,we.elements[2]*=l,we.elements[4]*=f,we.elements[5]*=f,we.elements[6]*=f,we.elements[8]*=h,we.elements[9]*=h,we.elements[10]*=h,n.setFromRotationMatrix(we),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(n-e),l=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r),d=-(o+s)/(o-s),u=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=u,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,c=1/(n-e),l=1/(i-r),f=1/(o-s),h=(n+e)*c,d=(i+r)*l,u=(o+s)*f;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-u,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Bn=new E,we=new St,$h=new E(0,0,0),Kh=new E(1,1,1),nn=new E,fr=new E,he=new E;class sr{constructor(e=0,n=0,i=0,r=sr.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n,i){const r=Mt.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],f=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(n=n||this._order,n){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(u,f),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,f),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(aa,n,i)}setFromVector3(e,n){return this.set(e.x,e.y,e.z,n||this._order)}reorder(e){return ca.setFromEuler(this),this.setFromQuaternion(ca,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new E(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}sr.DefaultOrder="XYZ";sr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];const aa=new St,ca=new de;class Cc{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let tu=0;const la=new E,Un=new de,Ve=new St,dr=new E,Ei=new E,eu=new E,nu=new de,ha=new E(1,0,0),ua=new E(0,1,0),fa=new E(0,0,1),iu={type:"added"},da={type:"removed"};function dt(){Object.defineProperty(this,"id",{value:tu++}),this.uuid=Mt.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DefaultUp.clone();const t=new E,e=new sr,n=new de,i=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new ce}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=dt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}dt.DefaultUp=new E(0,1,0);dt.DefaultMatrixAutoUpdate=!0;dt.prototype=Object.assign(Object.create($e.prototype),{constructor:dt,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,e){return Un.setFromAxisAngle(t,e),this.quaternion.multiply(Un),this},rotateOnWorldAxis:function(t,e){return Un.setFromAxisAngle(t,e),this.quaternion.premultiply(Un),this},rotateX:function(t){return this.rotateOnAxis(ha,t)},rotateY:function(t){return this.rotateOnAxis(ua,t)},rotateZ:function(t){return this.rotateOnAxis(fa,t)},translateOnAxis:function(t,e){return la.copy(t).applyQuaternion(this.quaternion),this.position.add(la.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(ha,t)},translateY:function(t){return this.translateOnAxis(ua,t)},translateZ:function(t){return this.translateOnAxis(fa,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(Ve.copy(this.matrixWorld).invert())},lookAt:function(t,e,n){t.isVector3?dr.copy(t):dr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ve.lookAt(Ei,dr,this.up):Ve.lookAt(dr,Ei,this.up),this.quaternion.setFromRotationMatrix(Ve),i&&(Ve.extractRotation(i.matrixWorld),Un.setFromRotationMatrix(Ve),this.quaternion.premultiply(Un.invert()))},add:function(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(iu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(da)),this},clear:function(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(da)}return this.children.length=0,this},attach:function(t){return this.updateWorldMatrix(!0,!1),Ve.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ve.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ve),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}},getWorldPosition:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new E),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new de),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,t,eu),t},getWorldScale:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new E),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,nu,t),t},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new E),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)},traverseVisible:function(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)},traverseAncestors:function(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const f=a[c];r(t.shapes,f)}else r(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(t.materials,this.material[a]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(r(t.animations,a))}}if(e){const o=s(t.geometries),a=s(t.materials),c=s(t.textures),l=s(t.images),f=s(t.shapes),h=s(t.skeletons),d=s(t.animations);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d)}return n.object=i,n;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(t){return new this.constructor().copy(this,t)},copy:function(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}});const bs=new E,ru=new E,su=new ce;class qe{constructor(e,n){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=e!==void 0?e:new E(1,0,0),this.constant=n!==void 0?n:0}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=bs.subVectors(i,n).cross(ru.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}clone(){return new this.constructor().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),n=new E),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){n===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new E);const i=e.delta(bs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):void 0;const s=-(e.start.dot(this.normal)+this.constant)/r;if(!(s<0||s>1))return n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new E),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||su.getNormalMatrix(e),r=this.coplanarPoint(bs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}}const Se=new E,We=new E,Ms=new E,je=new E,zn=new E,Hn=new E,pa=new E,ws=new E,Ss=new E,Es=new E;class ee{constructor(e,n,i){this.a=e!==void 0?e:new E,this.b=n!==void 0?n:new E,this.c=i!==void 0?i:new E}static getNormal(e,n,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new E),r.subVectors(i,n),Se.subVectors(e,n),r.cross(Se);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Se.subVectors(r,n),We.subVectors(i,n),Ms.subVectors(e,n);const o=Se.dot(Se),a=Se.dot(We),c=Se.dot(Ms),l=We.dot(We),f=We.dot(Ms),h=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new E),h===0)return s.set(-2,-1,-1);const d=1/h,u=(l*c-a*f)*d,p=(o*f-a*c)*d;return s.set(1-u-p,p,u)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,je),je.x>=0&&je.y>=0&&je.x+je.y<=1}static getUV(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,je),c.set(0,0),c.addScaledVector(s,je.x),c.addScaledVector(o,je.y),c.addScaledVector(a,je.z),c}static isFrontFacing(e,n,i,r){return Se.subVectors(i,n),We.subVectors(e,n),Se.cross(We).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Se.subVectors(this.c,this.b),We.subVectors(this.a,this.b),Se.cross(We).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new E),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ee.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new qe),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ee.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ee.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ee.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ee.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),n=new E);const i=this.a,r=this.b,s=this.c;let o,a;zn.subVectors(r,i),Hn.subVectors(s,i),ws.subVectors(e,i);const c=zn.dot(ws),l=Hn.dot(ws);if(c<=0&&l<=0)return n.copy(i);Ss.subVectors(e,r);const f=zn.dot(Ss),h=Hn.dot(Ss);if(f>=0&&h<=f)return n.copy(r);const d=c*h-f*l;if(d<=0&&c>=0&&f<=0)return o=c/(c-f),n.copy(i).addScaledVector(zn,o);Es.subVectors(e,s);const u=zn.dot(Es),p=Hn.dot(Es);if(p>=0&&u<=p)return n.copy(s);const v=u*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(Hn,a);const y=f*p-u*h;if(y<=0&&h-f>=0&&u-p>=0)return pa.subVectors(s,r),a=(h-f)/(h-f+(u-p)),n.copy(r).addScaledVector(pa,a);const g=1/(y+v+d);return o=v*g,a=d*g,n.copy(i).addScaledVector(zn,o).addScaledVector(Hn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ee={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Ts(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function As(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ls(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}class lt{constructor(e,n,i){return Object.defineProperty(this,"isColor",{value:!0}),n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,n,i){return this.r=e,this.g=n,this.b=i,this}setHSL(e,n,i){if(e=Mt.euclideanModulo(e,1),n=Mt.clamp(n,0,1),i=Mt.clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Ts(s,r,e+1/3),this.g=Ts(s,r,e),this.b=Ts(s,r,e-1/3)}return this}setStyle(e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,n(r[4]),this;if(r=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,n(r[4]),this;break;case"hsl":case"hsla":if(r=/^(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const n=Rc[e];return n!==void 0?this.setHex(n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,n=2){return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}copyLinearToGamma(e,n=2){const i=n>0?1/n:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const n=this.r,i=this.g,r=this.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const f=s-o;switch(c=l<=.5?f/(s+o):f/(2-s-o),s){case n:a=(i-r)/f+(i<r?6:0);break;case i:a=(r-n)/f+2;break;case r:a=(n-i)/f+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,n,i){return this.getHSL(Ee),Ee.h+=e,Ee.s+=n,Ee.l+=i,this.setHSL(Ee.h,Ee.s,Ee.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpHSL(e,n){this.getHSL(Ee),e.getHSL(pr);const i=Mt.lerp(Ee.h,pr.h,n),r=Mt.lerp(Ee.s,pr.s,n),s=Mt.lerp(Ee.l,pr.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}lt.NAMES=Rc;lt.prototype.r=1;lt.prototype.g=1;lt.prototype.b=1;class js{constructor(e,n,i,r,s,o=0){this.a=e,this.b=n,this.c=i,this.normal=r&&r.isVector3?r:new E,this.vertexNormals=Array.isArray(r)?r:[],this.color=s&&s.isColor?s:new lt,this.vertexColors=Array.isArray(s)?s:[],this.materialIndex=o}clone(){return new this.constructor().copy(this)}copy(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let n=0,i=e.vertexNormals.length;n<i;n++)this.vertexNormals[n]=e.vertexNormals[n].clone();for(let n=0,i=e.vertexColors.length;n<i;n++)this.vertexColors[n]=e.vertexColors[n].clone();return this}}let ou=0;function pt(){Object.defineProperty(this,"id",{value:ou++}),this.uuid=Mt.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=Oi,this.side=is,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Sc,this.blendDst=Ec,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}pt.prototype=Object.assign(Object.create($e.prototype),{constructor:pt,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===wc;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}},toJSON:function(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==is&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(pt.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function Sn(t){pt.call(this),this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ss,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}Sn.prototype=Object.create(pt.prototype);Sn.prototype.constructor=Sn;Sn.prototype.isMeshBasicMaterial=!0;Sn.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};const zt=new E,mr=new k;function xt(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=as,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(xt.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(xt.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new lt),e[n++]=s.r,e[n++]=s.g,e[n++]=s.b}return this},copyVector2sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new k),e[n++]=s.x,e[n++]=s.y}return this},copyVector3sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new E),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z}return this},copyVector4sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Ot),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z,e[n++]=s.w}return this},applyMatrix3:function(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mr.fromBufferAttribute(this,e),mr.applyMatrix3(t),this.setXY(e,mr.x,mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)zt.fromBufferAttribute(this,e),zt.applyMatrix3(t),this.setXYZ(e,zt.x,zt.y,zt.z);return this},applyMatrix4:function(t){for(let e=0,n=this.count;e<n;e++)zt.x=this.getX(e),zt.y=this.getY(e),zt.z=this.getZ(e),zt.applyMatrix4(t),this.setXYZ(e,zt.x,zt.y,zt.z);return this},applyNormalMatrix:function(t){for(let e=0,n=this.count;e<n;e++)zt.x=this.getX(e),zt.y=this.getY(e),zt.z=this.getZ(e),zt.applyNormalMatrix(t),this.setXYZ(e,zt.x,zt.y,zt.z);return this},transformDirection:function(t){for(let e=0,n=this.count;e<n;e++)zt.x=this.getX(e),zt.y=this.getY(e),zt.z=this.getZ(e),zt.transformDirection(t),this.setXYZ(e,zt.x,zt.y,zt.z);return this},set:function(t,e=0){return this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function qs(t,e,n){xt.call(this,new Int8Array(t),e,n)}qs.prototype=Object.create(xt.prototype);qs.prototype.constructor=qs;function Xs(t,e,n){xt.call(this,new Uint8Array(t),e,n)}Xs.prototype=Object.create(xt.prototype);Xs.prototype.constructor=Xs;function Ys(t,e,n){xt.call(this,new Uint8ClampedArray(t),e,n)}Ys.prototype=Object.create(xt.prototype);Ys.prototype.constructor=Ys;function Zs(t,e,n){xt.call(this,new Int16Array(t),e,n)}Zs.prototype=Object.create(xt.prototype);Zs.prototype.constructor=Zs;function Wi(t,e,n){xt.call(this,new Uint16Array(t),e,n)}Wi.prototype=Object.create(xt.prototype);Wi.prototype.constructor=Wi;function Js(t,e,n){xt.call(this,new Int32Array(t),e,n)}Js.prototype=Object.create(xt.prototype);Js.prototype.constructor=Js;function ji(t,e,n){xt.call(this,new Uint32Array(t),e,n)}ji.prototype=Object.create(xt.prototype);ji.prototype.constructor=ji;function qr(t,e,n){xt.call(this,new Uint16Array(t),e,n)}qr.prototype=Object.create(xt.prototype);qr.prototype.constructor=qr;qr.prototype.isFloat16BufferAttribute=!0;function Pt(t,e,n){xt.call(this,new Float32Array(t),e,n)}Pt.prototype=Object.create(xt.prototype);Pt.prototype.constructor=Pt;function Qs(t,e,n){xt.call(this,new Float64Array(t),e,n)}Qs.prototype=Object.create(xt.prototype);Qs.prototype.constructor=Qs;class au{constructor(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}computeGroups(e){const n=[];let i,r,s;const o=e.faces;for(r=0;r<o.length;r++){const a=o[r];a.materialIndex!==s&&(s=a.materialIndex,i!==void 0&&(i.count=r*3-i.start,n.push(i)),i={start:r*3,materialIndex:s})}i!==void 0&&(i.count=r*3-i.start,n.push(i)),this.groups=n}fromGeometry(e){const n=e.faces,i=e.vertices,r=e.faceVertexUvs,s=r[0]&&r[0].length>0,o=r[1]&&r[1].length>0,a=e.morphTargets,c=a.length;let l;if(c>0){l=[];for(let g=0;g<c;g++)l[g]={name:a[g].name,data:[]};this.morphTargets.position=l}const f=e.morphNormals,h=f.length;let d;if(h>0){d=[];for(let g=0;g<h;g++)d[g]={name:f[g].name,data:[]};this.morphTargets.normal=d}const u=e.skinIndices,p=e.skinWeights,v=u.length===i.length,y=p.length===i.length;i.length>0&&n.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let g=0;g<n.length;g++){const m=n[g];this.vertices.push(i[m.a],i[m.b],i[m.c]);const S=m.vertexNormals;if(S.length===3)this.normals.push(S[0],S[1],S[2]);else{const M=m.normal;this.normals.push(M,M,M)}const T=m.vertexColors;if(T.length===3)this.colors.push(T[0],T[1],T[2]);else{const M=m.color;this.colors.push(M,M,M)}if(s===!0){const M=r[0][g];M!==void 0?this.uvs.push(M[0],M[1],M[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",g),this.uvs.push(new k,new k,new k))}if(o===!0){const M=r[1][g];M!==void 0?this.uvs2.push(M[0],M[1],M[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",g),this.uvs2.push(new k,new k,new k))}for(let M=0;M<c;M++){const x=a[M].vertices;l[M].data.push(x[m.a],x[m.b],x[m.c])}for(let M=0;M<h;M++){const x=f[M].vertexNormals[g];d[M].data.push(x.a,x.b,x.c)}v&&this.skinIndices.push(u[m.a],u[m.b],u[m.c]),y&&this.skinWeights.push(p[m.a],p[m.b],p[m.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this}}function Pc(t){if(t.length===0)return-1/0;let e=t[0];for(let n=1,i=t.length;n<i;++n)t[n]>e&&(e=t[n]);return e}const cu={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray<"u"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function gr(t,e){return new cu[t](e)}let lu=1;const Re=new St,Cs=new dt,Gn=new E,ue=new gn,Ti=new gn,Zt=new E;function Dt(){Object.defineProperty(this,"id",{value:lu+=2}),this.uuid=Mt.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}Dt.prototype=Object.assign(Object.create($e.prototype),{constructor:Dt,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){return Array.isArray(t)?this.index=new(Pc(t)>65535?ji:Wi)(t,1):this.index=t,this},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,e){return this.attributes[t]=e,this},deleteAttribute:function(t){return delete this.attributes[t],this},hasAttribute:function(t){return this.attributes[t]!==void 0},addGroup:function(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix4:function(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(t){return Re.makeRotationX(t),this.applyMatrix4(Re),this},rotateY:function(t){return Re.makeRotationY(t),this.applyMatrix4(Re),this},rotateZ:function(t){return Re.makeRotationZ(t),this.applyMatrix4(Re),this},translate:function(t,e,n){return Re.makeTranslation(t,e,n),this.applyMatrix4(Re),this},scale:function(t,e,n){return Re.makeScale(t,e,n),this.applyMatrix4(Re),this},lookAt:function(t){return Cs.lookAt(t),Cs.updateMatrix(),this.applyMatrix4(Cs.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gn).negate(),this.translate(Gn.x,Gn.y,Gn.z),this},setFromObject:function(t){const e=t.geometry;if(t.isPoints||t.isLine){const n=new Pt(e.vertices.length*3,3),i=new Pt(e.colors.length*3,3);if(this.setAttribute("position",n.copyVector3sArray(e.vertices)),this.setAttribute("color",i.copyColorsArray(e.colors)),e.lineDistances&&e.lineDistances.length===e.vertices.length){const r=new Pt(e.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(e.lineDistances))}e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone())}else t.isMesh&&e&&e.isGeometry&&this.fromGeometry(e);return this},setFromPoints:function(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pt(e,3)),this},updateFromObject:function(t){let e=t.geometry;if(t.isMesh){let n=e.__directGeometry;if(e.elementsNeedUpdate===!0&&(n=void 0,e.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(e);n.verticesNeedUpdate=e.verticesNeedUpdate,n.normalsNeedUpdate=e.normalsNeedUpdate,n.colorsNeedUpdate=e.colorsNeedUpdate,n.uvsNeedUpdate=e.uvsNeedUpdate,n.groupsNeedUpdate=e.groupsNeedUpdate,e.verticesNeedUpdate=!1,e.normalsNeedUpdate=!1,e.colorsNeedUpdate=!1,e.uvsNeedUpdate=!1,e.groupsNeedUpdate=!1,e=n}if(e.verticesNeedUpdate===!0){const n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(e.vertices),n.needsUpdate=!0),e.verticesNeedUpdate=!1}if(e.normalsNeedUpdate===!0){const n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(e.normals),n.needsUpdate=!0),e.normalsNeedUpdate=!1}if(e.colorsNeedUpdate===!0){const n=this.attributes.color;n!==void 0&&(n.copyColorsArray(e.colors),n.needsUpdate=!0),e.colorsNeedUpdate=!1}if(e.uvsNeedUpdate){const n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(e.uvs),n.needsUpdate=!0),e.uvsNeedUpdate=!1}if(e.lineDistancesNeedUpdate){const n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(e.lineDistances),n.needsUpdate=!0),e.lineDistancesNeedUpdate=!1}return e.groupsNeedUpdate&&(e.computeGroups(t.geometry),this.groups=e.groups,e.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=new au().fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){const e=new Float32Array(t.vertices.length*3);if(this.setAttribute("position",new xt(e,3).copyVector3sArray(t.vertices)),t.normals.length>0){const n=new Float32Array(t.normals.length*3);this.setAttribute("normal",new xt(n,3).copyVector3sArray(t.normals))}if(t.colors.length>0){const n=new Float32Array(t.colors.length*3);this.setAttribute("color",new xt(n,3).copyColorsArray(t.colors))}if(t.uvs.length>0){const n=new Float32Array(t.uvs.length*2);this.setAttribute("uv",new xt(n,2).copyVector2sArray(t.uvs))}if(t.uvs2.length>0){const n=new Float32Array(t.uvs2.length*2);this.setAttribute("uv2",new xt(n,2).copyVector2sArray(t.uvs2))}this.groups=t.groups;for(const n in t.morphTargets){const i=[],r=t.morphTargets[n];for(let s=0,o=r.length;s<o;s++){const a=r[s],c=new Pt(a.data.length*3,3);c.name=a.name,i.push(c.copyVector3sArray(a.data))}this.morphAttributes[n]=i}if(t.skinIndices.length>0){const n=new Pt(t.skinIndices.length*4,4);this.setAttribute("skinIndex",n.copyVector4sArray(t.skinIndices))}if(t.skinWeights.length>0){const n=new Pt(t.skinWeights.length*4,4);this.setAttribute("skinWeight",n.copyVector4sArray(t.skinWeights))}return t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ue.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,ue.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,ue.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(ue.min),this.boundingBox.expandByPoint(ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new vn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(ue.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(ue.min,Ti.min),ue.expandByPoint(Zt),Zt.addVectors(ue.max,Ti.max),ue.expandByPoint(Zt)):(ue.expandByPoint(Ti.min),ue.expandByPoint(Ti.max))}ue.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)Zt.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Zt));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)Zt.fromBufferAttribute(o,c),a&&(Gn.fromBufferAttribute(t,c),Zt.add(Gn)),i=Math.max(i,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new E,r=new E,s=new E,o=new E,a=new E,c=new E,l=new E,f=new E;if(t)for(let h=0,d=t.count;h<d;h+=3){const u=t.getX(h+0),p=t.getX(h+1),v=t.getX(h+2);i.fromBufferAttribute(e,u),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,v),l.subVectors(s,r),f.subVectors(i,r),l.cross(f),o.fromBufferAttribute(n,u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),o.add(l),a.add(l),c.add(l),n.setXYZ(u,o.x,o.y,o.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),l.subVectors(s,r),f.subVectors(i,r),l.cross(f),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const s=n[i].array,o=t.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let f=0,h=c;f<l;f++,h++)s[h]=a[f]}return this},normalizeNormals:function(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Zt.fromBufferAttribute(t,e),Zt.normalize(),t.setXYZ(e,Zt.x,Zt.y,Zt.z)},toNonIndexed:function(){function t(o,a){const c=o.array,l=o.itemSize,f=o.normalized,h=new c.constructor(a.length*l);let d=0,u=0;for(let p=0,v=a.length;p<v;p++){d=a[p]*l;for(let y=0;y<l;y++)h[u++]=c[d++]}return new xt(h,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;const e=new Dt,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=t(a,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const a=[],c=r[o];for(let l=0,f=c.length;l<f;l++){const h=c[l],d=t(h,n);a.push(d)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const a in n){const c=n[a],l=c.toJSON(t.data);c.name!==""&&(l.name=c.name),t.data.attributes[a]=l}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let f=0,h=c.length;f<h;f++){const d=c[f],u=d.toJSON(t.data);d.name!==""&&(u.name=d.name),l.push(u)}l.length>0&&(i[a]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t},clone:function(){return new Dt().copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(e))}const r=t.morphAttributes;for(const c in r){const l=[],f=r[c];for(let h=0,d=f.length;h<d;h++)l.push(f[h].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,l=s.length;c<l;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const ma=new St,bn=new rr,Rs=new vn,rn=new E,sn=new E,on=new E,Ps=new E,Is=new E,Ds=new E,vr=new E,yr=new E,xr=new E,$n=new k,Kn=new k,ti=new k,Ui=new E,_r=new E;function Kt(t=new Dt,e=new Sn){dt.call(this),this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}Kt.prototype=Object.assign(Object.create(dt.prototype),{constructor:Kt,isMesh:!0,copy:function(t){return dt.prototype.copy.call(this,t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),t.ray.intersectsSphere(Rs)===!1)||(ma.copy(r).invert(),bn.copy(t.ray).applyMatrix4(ma),n.boundingBox!==null&&bn.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){const o=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,v=d.length;p<v;p++){const y=d[p],g=i[y.materialIndex],m=Math.max(y.start,u.start),S=Math.min(y.start+y.count,u.start+u.count);for(let T=m,M=S;T<M;T+=3){const x=o.getX(T),A=o.getX(T+1),U=o.getX(T+2);s=br(this,g,t,bn,a,c,l,f,h,x,A,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let y=p,g=v;y<g;y+=3){const m=o.getX(y),S=o.getX(y+1),T=o.getX(y+2);s=br(this,i,t,bn,a,c,l,f,h,m,S,T),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,v=d.length;p<v;p++){const y=d[p],g=i[y.materialIndex],m=Math.max(y.start,u.start),S=Math.min(y.start+y.count,u.start+u.count);for(let T=m,M=S;T<M;T+=3){const x=T,A=T+1,U=T+2;s=br(this,g,t,bn,a,c,l,f,h,x,A,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let y=p,g=v;y<g;y+=3){const m=y,S=y+1,T=y+2;s=br(this,i,t,bn,a,c,l,f,h,m,S,T),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}else if(n.isGeometry){const o=Array.isArray(i),a=n.vertices,c=n.faces;let l;const f=n.faceVertexUvs[0];f.length>0&&(l=f);for(let h=0,d=c.length;h<d;h++){const u=c[h],p=o?i[u.materialIndex]:i;if(p===void 0)continue;const v=a[u.a],y=a[u.b],g=a[u.c];if(s=Ic(this,p,t,bn,v,y,g,Ui),s){if(l&&l[h]){const m=l[h];$n.copy(m[0]),Kn.copy(m[1]),ti.copy(m[2]),s.uv=ee.getUV(Ui,v,y,g,$n,Kn,ti,new k)}s.face=u,s.faceIndex=h,e.push(s)}}}}});function Ic(t,e,n,i,r,s,o,a){let c;if(e.side===$t?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==rs,a),c===null)return null;_r.copy(a),_r.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(_r);return l<n.near||l>n.far?null:{distance:l,point:_r.clone(),object:t}}function br(t,e,n,i,r,s,o,a,c,l,f,h){rn.fromBufferAttribute(r,l),sn.fromBufferAttribute(r,f),on.fromBufferAttribute(r,h);const d=t.morphTargetInfluences;if(e.morphTargets&&s&&d){vr.set(0,0,0),yr.set(0,0,0),xr.set(0,0,0);for(let p=0,v=s.length;p<v;p++){const y=d[p],g=s[p];y!==0&&(Ps.fromBufferAttribute(g,l),Is.fromBufferAttribute(g,f),Ds.fromBufferAttribute(g,h),o?(vr.addScaledVector(Ps,y),yr.addScaledVector(Is,y),xr.addScaledVector(Ds,y)):(vr.addScaledVector(Ps.sub(rn),y),yr.addScaledVector(Is.sub(sn),y),xr.addScaledVector(Ds.sub(on),y)))}rn.add(vr),sn.add(yr),on.add(xr)}t.isSkinnedMesh&&(t.boneTransform(l,rn),t.boneTransform(f,sn),t.boneTransform(h,on));const u=Ic(t,e,n,i,rn,sn,on,Ui);if(u){a&&($n.fromBufferAttribute(a,l),Kn.fromBufferAttribute(a,f),ti.fromBufferAttribute(a,h),u.uv=ee.getUV(Ui,rn,sn,on,$n,Kn,ti,new k)),c&&($n.fromBufferAttribute(c,l),Kn.fromBufferAttribute(c,f),ti.fromBufferAttribute(c,h),u.uv2=ee.getUV(Ui,rn,sn,on,$n,Kn,ti,new k));const p=new js(l,f,h);ee.getNormal(rn,sn,on,p.normal),u.face=p}return u}class Dc extends Dt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxBufferGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],f=[],h=[];let d=0,u=0;p("z","y","x",-1,-1,i,n,e,o,s,0),p("z","y","x",1,-1,i,n,-e,o,s,1),p("x","z","y",1,1,e,i,n,r,o,2),p("x","z","y",1,-1,e,i,-n,r,o,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(h,2));function p(v,y,g,m,S,T,M,x,A,U,F){const Y=T/A,P=M/U,D=T/2,I=M/2,R=x/2,C=A+1,O=U+1;let G=0,j=0;const J=new E;for(let tt=0;tt<O;tt++){const it=tt*P-I;for(let gt=0;gt<C;gt++){const vt=gt*Y-D;J[v]=vt*m,J[y]=it*S,J[g]=R,l.push(J.x,J.y,J.z),J[v]=0,J[y]=0,J[g]=x>0?1:-1,f.push(J.x,J.y,J.z),h.push(gt/A),h.push(1-tt/U),G+=1}}for(let tt=0;tt<U;tt++)for(let it=0;it<A;it++){const gt=d+it+C*tt,vt=d+it+C*(tt+1),Nt=d+(it+1)+C*(tt+1),H=d+(it+1)+C*tt;c.push(gt,vt,H),c.push(vt,Nt,H),j+=6}a.addGroup(u,j,F),u+=j,d+=G}}}function oi(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function te(t){const e={};for(let n=0;n<t.length;n++){const i=oi(t[n]);for(const r in i)e[r]=i[r]}return e}const hu={clone:oi,merge:te};var uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function le(t){pt.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=uu,this.fragmentShader=fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}le.prototype=Object.create(pt.prototype);le.prototype.constructor=le;le.prototype.isShaderMaterial=!0;le.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=oi(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this};le.prototype.toJSON=function(t){const e=pt.prototype.toJSON.call(this,t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e};function fn(){dt.call(this),this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St}fn.prototype=Object.assign(Object.create(dt.prototype),{constructor:fn,isCamera:!0,copy:function(t,e){return dt.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new E),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){dt.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(t,e){dt.prototype.updateWorldMatrix.call(this,t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function Jt(t=50,e=1,n=.1,i=2e3){fn.call(this),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Jt.prototype=Object.assign(Object.create(fn.prototype),{constructor:Jt,isPerspectiveCamera:!0,copy:function(t,e){return fn.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){const e=.5*this.getFilmHeight()/t;this.fov=Mt.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){const t=Math.tan(Mt.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/t},getEffectiveFOV:function(){return Mt.RAD2DEG*2*Math.atan(Math.tan(Mt.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const t=this.near;let e=t*Math.tan(Mt.DEG2RAD*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*n/c,i*=s.width/a,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){const e=dt.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});const kn=90,Vn=1;function ai(t,e,n){if(dt.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Jt(kn,Vn,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new E(1,0,0)),this.add(i);const r=new Jt(kn,Vn,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new E(-1,0,0)),this.add(r);const s=new Jt(kn,Vn,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new E(0,1,0)),this.add(s);const o=new Jt(kn,Vn,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new E(0,-1,0)),this.add(o);const a=new Jt(kn,Vn,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new E(0,0,1)),this.add(a);const c=new Jt(kn,Vn,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new E(0,0,-1)),this.add(c),this.update=function(l,f){this.parent===null&&this.updateMatrixWorld();const h=l.xr.enabled,d=l.getRenderTarget();l.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(f,i),l.setRenderTarget(n,1),l.render(f,r),l.setRenderTarget(n,2),l.render(f,s),l.setRenderTarget(n,3),l.render(f,o),l.setRenderTarget(n,4),l.render(f,a),n.texture.generateMipmaps=u,l.setRenderTarget(n,5),l.render(f,c),l.setRenderTarget(d),l.xr.enabled=h}}ai.prototype=Object.create(dt.prototype);ai.prototype.constructor=ai;function dn(t,e,n,i,r,s,o,a,c,l){t=t!==void 0?t:[],e=e!==void 0?e:wo,o=o!==void 0?o:wn,Ht.call(this,t,e,n,i,r,s,o,a,c,l),this.flipY=!1,this._needsFlipEnvMap=!0}dn.prototype=Object.create(Ht.prototype);dn.prototype.constructor=dn;dn.prototype.isCubeTexture=!0;Object.defineProperty(dn.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}});function En(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n),Ce.call(this,t,t,e),e=e||{},this.texture=new dn(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture._needsFlipEnvMap=!1}En.prototype=Object.create(Ce.prototype);En.prototype.constructor=En;En.prototype.isWebGLCubeRenderTarget=!0;En.prototype.fromEquirectangularTexture=function(t,e){this.texture.type=e.type,this.texture.format=Le,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
		`},i=new Dc(5,5,5),r=new le({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Ni});r.uniforms.tEquirect.value=e;const s=new Kt(i,r),o=e.minFilter;return e.minFilter===os&&(e.minFilter=ne),new ai(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this};En.prototype.clear=function(t,e,n,i){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)};function ci(t,e,n,i,r,s,o,a,c,l,f,h){Ht.call(this,null,s,o,a,c,l,i,r,f,h),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=c!==void 0?c:re,this.minFilter=l!==void 0?l:re,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}ci.prototype=Object.create(Ht.prototype);ci.prototype.constructor=ci;ci.prototype.isDataTexture=!0;const Wn=new vn,Mr=new E;class cs{constructor(e,n,i,r,s,o){this.planes=[e!==void 0?e:new qe,n!==void 0?n:new qe,i!==void 0?i:new qe,r!==void 0?r:new qe,s!==void 0?s:new qe,o!==void 0?o:new qe]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}clone(){return new this.constructor().copy(this)}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],f=i[6],h=i[7],d=i[8],u=i[9],p=i[10],v=i[11],y=i[12],g=i[13],m=i[14],S=i[15];return n[0].setComponents(a-r,h-c,v-d,S-y).normalize(),n[1].setComponents(a+r,h+c,v+d,S+y).normalize(),n[2].setComponents(a+s,h+l,v+u,S+g).normalize(),n[3].setComponents(a-s,h-l,v-u,S-g).normalize(),n[4].setComponents(a-o,h-f,v-p,S-m).normalize(),n[5].setComponents(a+o,h+f,v+p,S+m).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Wn.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Mr.x=r.normal.x>0?e.max.x:e.min.x,Mr.y=r.normal.y>0?e.max.y:e.min.y,Mr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}}function Nc(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function du(t,e){const n=e.isWebGL2,i=new WeakMap;function r(l,f){const h=l.array,d=l.usage,u=t.createBuffer();t.bindBuffer(f,u),t.bufferData(f,h,d),l.onUploadCallback();let p=5126;return h instanceof Float32Array?p=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?n?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:h instanceof Int16Array?p=5122:h instanceof Uint32Array?p=5125:h instanceof Int32Array?p=5124:h instanceof Int8Array?p=5120:h instanceof Uint8Array&&(p=5121),{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,f,h){const d=f.array,u=f.updateRange;t.bindBuffer(h,l),u.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):t.bufferSubData(h,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f&&(t.deleteBuffer(f.buffer),i.delete(l))}function c(l,f){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,f)):h.version<l.version&&(s(h.buffer,l,f),h.version=l.version)}return{get:o,remove:a,update:c}}class pu extends Dt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneBufferGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,f=c+1,h=e/a,d=n/c,u=[],p=[],v=[],y=[];for(let g=0;g<f;g++){const m=g*d-o;for(let S=0;S<l;S++){const T=S*h-s;p.push(T,-m,0),v.push(0,0,1),y.push(S/a),y.push(1-g/c)}}for(let g=0;g<c;g++)for(let m=0;m<a;m++){const S=m+l*g,T=m+l*(g+1),M=m+1+l*(g+1),x=m+1+l*g;u.push(S,T,x),u.push(T,M,x)}this.setIndex(u),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(y,2))}}var mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vu=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,yu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,xu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_u="vec3 transformed = vec3( position );",bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mu=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,wu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lu=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,Cu=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,Ru=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Iu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Du=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,Nu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hu=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qu=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Xu=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ju=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Qu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,$u=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ku=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,tf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,ef=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rf=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,af=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,cf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,uf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ff=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,df=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gf=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,wf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Ef=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Tf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,Af=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,Lf=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Cf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,Rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Pf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,If=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Gf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jf=`#ifdef USE_SKINNING
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
#endif`,qf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zf=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jf=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Qf=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,$f=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Kf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,td=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ed=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,nd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,id=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,rd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ad=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ld=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ud=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xd=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sd=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Ed=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Ad=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,Cd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Rd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Id=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Dd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Nd=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`;const At={alphamap_fragment:mu,alphamap_pars_fragment:gu,alphatest_fragment:vu,aomap_fragment:yu,aomap_pars_fragment:xu,begin_vertex:_u,beginnormal_vertex:bu,bsdfs:Mu,bumpmap_pars_fragment:wu,clipping_planes_fragment:Su,clipping_planes_pars_fragment:Eu,clipping_planes_pars_vertex:Tu,clipping_planes_vertex:Au,color_fragment:Lu,color_pars_fragment:Cu,color_pars_vertex:Ru,color_vertex:Pu,common:Iu,cube_uv_reflection_fragment:Du,defaultnormal_vertex:Nu,displacementmap_pars_vertex:Ou,displacementmap_vertex:Fu,emissivemap_fragment:Bu,emissivemap_pars_fragment:Uu,encodings_fragment:zu,encodings_pars_fragment:Hu,envmap_fragment:Gu,envmap_common_pars_fragment:ku,envmap_pars_fragment:Vu,envmap_pars_vertex:Wu,envmap_physical_pars_fragment:ef,envmap_vertex:ju,fog_vertex:qu,fog_pars_vertex:Xu,fog_fragment:Yu,fog_pars_fragment:Zu,gradientmap_pars_fragment:Ju,lightmap_fragment:Qu,lightmap_pars_fragment:$u,lights_lambert_vertex:Ku,lights_pars_begin:tf,lights_toon_fragment:nf,lights_toon_pars_fragment:rf,lights_phong_fragment:sf,lights_phong_pars_fragment:of,lights_physical_fragment:af,lights_physical_pars_fragment:cf,lights_fragment_begin:lf,lights_fragment_maps:hf,lights_fragment_end:uf,logdepthbuf_fragment:ff,logdepthbuf_pars_fragment:df,logdepthbuf_pars_vertex:pf,logdepthbuf_vertex:mf,map_fragment:gf,map_pars_fragment:vf,map_particle_fragment:yf,map_particle_pars_fragment:xf,metalnessmap_fragment:_f,metalnessmap_pars_fragment:bf,morphnormal_vertex:Mf,morphtarget_pars_vertex:wf,morphtarget_vertex:Sf,normal_fragment_begin:Ef,normal_fragment_maps:Tf,normalmap_pars_fragment:Af,clearcoat_normal_fragment_begin:Lf,clearcoat_normal_fragment_maps:Cf,clearcoat_pars_fragment:Rf,packing:Pf,premultiplied_alpha_fragment:If,project_vertex:Df,dithering_fragment:Nf,dithering_pars_fragment:Of,roughnessmap_fragment:Ff,roughnessmap_pars_fragment:Bf,shadowmap_pars_fragment:Uf,shadowmap_pars_vertex:zf,shadowmap_vertex:Hf,shadowmask_pars_fragment:Gf,skinbase_vertex:kf,skinning_pars_vertex:Vf,skinning_vertex:Wf,skinnormal_vertex:jf,specularmap_fragment:qf,specularmap_pars_fragment:Xf,tonemapping_fragment:Yf,tonemapping_pars_fragment:Zf,transmissionmap_fragment:Jf,transmissionmap_pars_fragment:Qf,uv_pars_fragment:$f,uv_pars_vertex:Kf,uv_vertex:td,uv2_pars_fragment:ed,uv2_pars_vertex:nd,uv2_vertex:id,worldpos_vertex:rd,background_frag:sd,background_vert:od,cube_frag:ad,cube_vert:cd,depth_frag:ld,depth_vert:hd,distanceRGBA_frag:ud,distanceRGBA_vert:fd,equirect_frag:dd,equirect_vert:pd,linedashed_frag:md,linedashed_vert:gd,meshbasic_frag:vd,meshbasic_vert:yd,meshlambert_frag:xd,meshlambert_vert:_d,meshmatcap_frag:bd,meshmatcap_vert:Md,meshtoon_frag:wd,meshtoon_vert:Sd,meshphong_frag:Ed,meshphong_vert:Td,meshphysical_frag:Ad,meshphysical_vert:Ld,normal_frag:Cd,normal_vert:Rd,points_frag:Pd,points_vert:Id,shadow_frag:Dd,shadow_vert:Nd,sprite_frag:Od,sprite_vert:Fd},K={common:{diffuse:{value:new lt(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new ce},uv2Transform:{value:new ce},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new k(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ce}},sprite:{diffuse:{value:new lt(15658734)},opacity:{value:1},center:{value:new k(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ce}}},Ie={basic:{uniforms:te([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:te([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.fog,K.lights,{emissive:{value:new lt(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:te([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:te([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:te([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new lt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:te([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:te([K.points,K.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:te([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:te([K.common,K.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:te([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:At.normal_vert,fragmentShader:At.normal_frag},sprite:{uniforms:te([K.sprite,K.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null}},vertexShader:At.background_vert,fragmentShader:At.background_frag},cube:{uniforms:te([K.envmap,{opacity:{value:1}}]),vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:te([K.common,K.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:te([K.lights,K.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};Ie.physical={uniforms:te([Ie.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new k(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new lt(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};function Bd(t,e,n,i,r){const s=new lt(0);let o=0,a,c,l=null,f=0,h=null;function d(p,v,y,g){let m=v.isScene===!0?v.background:null;m&&m.isTexture&&(m=e.get(m));const S=t.xr,T=S.getSession&&S.getSession();T&&T.environmentBlendMode==="additive"&&(m=null),m===null?u(s,o):m&&m.isColor&&(u(m,1),g=!0),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.isWebGLCubeRenderTarget||m.mapping===Eo)?(c===void 0&&(c=new Kt(new Dc(1,1,1),new le({name:"BackgroundCubeMaterial",uniforms:oi(Ie.cube.uniforms),vertexShader:Ie.cube.vertexShader,fragmentShader:Ie.cube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,x,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),m.isWebGLCubeRenderTarget&&(m=m.texture),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m._needsFlipEnvMap?-1:1,(l!==m||f!==m.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,l=m,f=m.version,h=t.toneMapping),p.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new Kt(new pu(2,2),new le({name:"BackgroundMaterial",uniforms:oi(Ie.background.uniforms),vertexShader:Ie.background.vertexShader,fragmentShader:Ie.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(l!==m||f!==m.version||h!==t.toneMapping)&&(a.material.needsUpdate=!0,l=m,f=m.version,h=t.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function u(p,v){n.buffers.color.setClear(p.r,p.g,p.b,v,r)}return{getClearColor:function(){return s},setClearColor:function(p,v=1){s.set(p),o=v,u(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,u(s,o)},render:d}}function Ud(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=v(null);let l=c;function f(I,R,C,O,G){let j=!1;if(o){const J=p(O,C,R);l!==J&&(l=J,d(l.object)),j=y(O,G),j&&g(O,G)}else{const J=R.wireframe===!0;(l.geometry!==O.id||l.program!==C.id||l.wireframe!==J)&&(l.geometry=O.id,l.program=C.id,l.wireframe=J,j=!0)}I.isInstancedMesh===!0&&(j=!0),G!==null&&n.update(G,34963),j&&(A(I,R,C,O),G!==null&&t.bindBuffer(34963,n.get(G).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function d(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function u(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,R,C){const O=C.wireframe===!0;let G=a[I.id];G===void 0&&(G={},a[I.id]=G);let j=G[R.id];j===void 0&&(j={},G[R.id]=j);let J=j[O];return J===void 0&&(J=v(h()),j[O]=J),J}function v(I){const R=[],C=[],O=[];for(let G=0;G<r;G++)R[G]=0,C[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:C,attributeDivisors:O,object:I,attributes:{},index:null}}function y(I,R){const C=l.attributes,O=I.attributes;let G=0;for(const j in O){const J=C[j],tt=O[j];if(J===void 0||J.attribute!==tt||J.data!==tt.data)return!0;G++}return l.attributesNum!==G||l.index!==R}function g(I,R){const C={},O=I.attributes;let G=0;for(const j in O){const J=O[j],tt={};tt.attribute=J,J.data&&(tt.data=J.data),C[j]=tt,G++}l.attributes=C,l.attributesNum=G,l.index=R}function m(){const I=l.newAttributes;for(let R=0,C=I.length;R<C;R++)I[R]=0}function S(I){T(I,0)}function T(I,R){const C=l.newAttributes,O=l.enabledAttributes,G=l.attributeDivisors;C[I]=1,O[I]===0&&(t.enableVertexAttribArray(I),O[I]=1),G[I]!==R&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,R),G[I]=R)}function M(){const I=l.newAttributes,R=l.enabledAttributes;for(let C=0,O=R.length;C<O;C++)R[C]!==I[C]&&(t.disableVertexAttribArray(C),R[C]=0)}function x(I,R,C,O,G,j){i.isWebGL2===!0&&(C===5124||C===5125)?t.vertexAttribIPointer(I,R,C,G,j):t.vertexAttribPointer(I,R,C,O,G,j)}function A(I,R,C,O){if(i.isWebGL2===!1&&(I.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const G=O.attributes,j=C.getAttributes(),J=R.defaultAttributeValues;for(const tt in j){const it=j[tt];if(it>=0){const gt=G[tt];if(gt!==void 0){const vt=gt.normalized,Nt=gt.itemSize,H=n.get(gt);if(H===void 0)continue;const qt=H.buffer,ut=H.type,Lt=H.bytesPerElement;if(gt.isInterleavedBufferAttribute){const yt=gt.data,It=yt.stride,wt=gt.offset;yt&&yt.isInstancedInterleavedBuffer?(T(it,yt.meshPerAttribute),O._maxInstanceCount===void 0&&(O._maxInstanceCount=yt.meshPerAttribute*yt.count)):S(it),t.bindBuffer(34962,qt),x(it,Nt,ut,vt,It*Lt,wt*Lt)}else gt.isInstancedBufferAttribute?(T(it,gt.meshPerAttribute),O._maxInstanceCount===void 0&&(O._maxInstanceCount=gt.meshPerAttribute*gt.count)):S(it),t.bindBuffer(34962,qt),x(it,Nt,ut,vt,0,0)}else if(tt==="instanceMatrix"){const vt=n.get(I.instanceMatrix);if(vt===void 0)continue;const Nt=vt.buffer,H=vt.type;T(it+0,1),T(it+1,1),T(it+2,1),T(it+3,1),t.bindBuffer(34962,Nt),t.vertexAttribPointer(it+0,4,H,!1,64,0),t.vertexAttribPointer(it+1,4,H,!1,64,16),t.vertexAttribPointer(it+2,4,H,!1,64,32),t.vertexAttribPointer(it+3,4,H,!1,64,48)}else if(tt==="instanceColor"){const vt=n.get(I.instanceColor);if(vt===void 0)continue;const Nt=vt.buffer,H=vt.type;T(it,1),t.bindBuffer(34962,Nt),t.vertexAttribPointer(it,3,H,!1,12,0)}else if(J!==void 0){const vt=J[tt];if(vt!==void 0)switch(vt.length){case 2:t.vertexAttrib2fv(it,vt);break;case 3:t.vertexAttrib3fv(it,vt);break;case 4:t.vertexAttrib4fv(it,vt);break;default:t.vertexAttrib1fv(it,vt)}}}}M()}function U(){P();for(const I in a){const R=a[I];for(const C in R){const O=R[C];for(const G in O)u(O[G].object),delete O[G];delete R[C]}delete a[I]}}function F(I){if(a[I.id]===void 0)return;const R=a[I.id];for(const C in R){const O=R[C];for(const G in O)u(O[G].object),delete O[G];delete R[C]}delete a[I.id]}function Y(I){for(const R in a){const C=a[R];if(C[I.id]===void 0)continue;const O=C[I.id];for(const G in O)u(O[G].object),delete O[G];delete C[I.id]}}function P(){D(),l!==c&&(l=c,d(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:P,resetDefaultState:D,dispose:U,releaseStatesOfGeometry:F,releaseStatesOfProgram:Y,initAttributes:m,enableAttribute:S,disableUnusedAttributes:M}}function zd(t,e,n,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,f){t.drawArrays(s,l,f),n.update(f,s,1)}function c(l,f,h){if(h===0)return;let d,u;if(r)d=t,u="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](s,l,f,h),n.update(f,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Hd(t,e,n){let i;function r(){if(i!==void 0)return i;const x=e.get("EXT_texture_filter_anisotropic");return x!==null?i=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(x){if(x==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),h=t.getParameter(35660),d=t.getParameter(3379),u=t.getParameter(34076),p=t.getParameter(34921),v=t.getParameter(36347),y=t.getParameter(36348),g=t.getParameter(36349),m=h>0,S=o||!!e.get("OES_texture_float"),T=m&&S,M=o?t.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:u,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:M}}function Gd(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new qe,a=new ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,u){const p=h.length!==0||d||i!==0||r;return r=d,n=f(h,u,0),i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,d,u){const p=h.clippingPlanes,v=h.clipIntersection,y=h.clipShadows,g=t.get(h);if(!r||p===null||p.length===0||s&&!y)s?f(null):l();else{const m=s?0:i,S=m*4;let T=g.clippingState||null;c.value=T,T=f(p,d,S,u);for(let M=0;M!==S;++M)T[M]=n[M];g.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,u,p){const v=h!==null?h.length:0;let y=null;if(v!==0){if(y=c.value,p!==!0||y===null){const g=u+v*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(y===null||y.length<g)&&(y=new Float32Array(g));for(let S=0,T=u;S!==v;++S,T+=4)o.copy(h[S]).applyMatrix4(m,a),o.normal.toArray(y,T),y[T+3]=o.constant}c.value=y,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,y}}function kd(t){let e=new WeakMap;function n(o,a){return a===Wo?o.mapping=wo:a===jo&&(o.mapping=So),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wo||a===jo)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=t.getRenderList(),f=t.getRenderTarget(),h=new En(c.height/2);return h.fromEquirectangularTexture(t,o),e.set(o,h),t.setRenderTarget(f),t.setRenderList(l),o.addEventListener("dispose",r),n(h.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function Vd(t){const e={};return{has:function(n){if(e[n]!==void 0)return e[n]!==null;let i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n)}return e[n]=i,i!==null},get:function(n){return this.has(n)||console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),e[n]}}}function Wd(t,e,n,i){const r=new WeakMap,s=new WeakMap;function o(h){const d=h.target,u=r.get(d);u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);d.removeEventListener("dispose",o),r.delete(d);const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){let u=r.get(d);return u||(d.addEventListener("dispose",o),d.isBufferGeometry?u=d:d.isGeometry&&(d._bufferGeometry===void 0&&(d._bufferGeometry=new Dt().setFromObject(h)),u=d._bufferGeometry),r.set(d,u),n.memory.geometries++,u)}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],34962);const u=h.morphAttributes;for(const p in u){const v=u[p];for(let y=0,g=v.length;y<g;y++)e.update(v[y],34962)}}function l(h){const d=[],u=h.index,p=h.attributes.position;let v=0;if(u!==null){const m=u.array;v=u.version;for(let S=0,T=m.length;S<T;S+=3){const M=m[S+0],x=m[S+1],A=m[S+2];d.push(M,x,x,A,A,M)}}else{const m=p.array;v=p.version;for(let S=0,T=m.length/3-1;S<T;S+=3){const M=S+0,x=S+1,A=S+2;d.push(M,x,x,A,A,M)}}const y=new(Pc(d)>65535?ji:Wi)(d,1);y.version=v;const g=s.get(h);g&&e.remove(g),s.set(h,y)}function f(h){const d=s.get(h);if(d){const u=h.index;u!==null&&d.version<u.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:f}}function jd(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function f(d,u){t.drawElements(s,u,a,d*c),n.update(u,s,1)}function h(d,u,p){if(p===0)return;let v,y;if(r)v=t,y="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[y](s,u,a,d*c,p),n.update(u,s,p)}this.setMode=o,this.setIndex=l,this.render=f,this.renderInstances=h}function qd(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Xd(t,e){return t[0]-e[0]}function Yd(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Zd(t){const e={},n=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){const l=s.morphTargetInfluences,f=l===void 0?0:l.length;let h=e[o.id];if(h===void 0){h=[];for(let y=0;y<f;y++)h[y]=[y,0];e[o.id]=h}for(let y=0;y<f;y++){const g=h[y];g[0]=y,g[1]=l[y]}h.sort(Yd);for(let y=0;y<8;y++)y<f&&h[y][1]?(i[y][0]=h[y][0],i[y][1]=h[y][1]):(i[y][0]=Number.MAX_SAFE_INTEGER,i[y][1]=0);i.sort(Xd);const d=a.morphTargets&&o.morphAttributes.position,u=a.morphNormals&&o.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const g=i[y],m=g[0],S=g[1];m!==Number.MAX_SAFE_INTEGER&&S?(d&&o.getAttribute("morphTarget"+y)!==d[m]&&o.setAttribute("morphTarget"+y,d[m]),u&&o.getAttribute("morphNormal"+y)!==u[m]&&o.setAttribute("morphNormal"+y,u[m]),n[y]=S,p+=S):(d&&o.hasAttribute("morphTarget"+y)===!0&&o.deleteAttribute("morphTarget"+y),u&&o.hasAttribute("morphNormal"+y)===!0&&o.deleteAttribute("morphNormal"+y),n[y]=0)}const v=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",n)}return{update:r}}function Jd(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,f=c.geometry,h=e.get(c,f);return r.get(h)!==l&&(f.isGeometry&&h.updateFromObject(c),e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.update(c.instanceMatrix,34962),c.instanceColor!==null&&n.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:o}}function qi(t=null,e=1,n=1,i=1){Ht.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=re,this.minFilter=re,this.wrapR=fe,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}qi.prototype=Object.create(Ht.prototype);qi.prototype.constructor=qi;qi.prototype.isDataTexture2DArray=!0;function Xi(t=null,e=1,n=1,i=1){Ht.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=re,this.minFilter=re,this.wrapR=fe,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Xi.prototype=Object.create(Ht.prototype);Xi.prototype.constructor=Xi;Xi.prototype.isDataTexture3D=!0;const Oc=new Ht,Qd=new qi,$d=new Xi,Fc=new dn,ga=[],va=[],ya=new Float32Array(16),xa=new Float32Array(9),_a=new Float32Array(4);function xi(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ga[r];if(s===void 0&&(s=new Float32Array(r),ga[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function _e(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function pe(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Bc(t,e){let n=va[e];n===void 0&&(n=new Int32Array(e),va[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Kd(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function tp(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_e(n,e))return;t.uniform2fv(this.addr,e),pe(n,e)}}function ep(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_e(n,e))return;t.uniform3fv(this.addr,e),pe(n,e)}}function np(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_e(n,e))return;t.uniform4fv(this.addr,e),pe(n,e)}}function ip(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_e(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),pe(n,e)}else{if(_e(n,i))return;_a.set(i),t.uniformMatrix2fv(this.addr,!1,_a),pe(n,i)}}function rp(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_e(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),pe(n,e)}else{if(_e(n,i))return;xa.set(i),t.uniformMatrix3fv(this.addr,!1,xa),pe(n,i)}}function sp(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_e(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),pe(n,e)}else{if(_e(n,i))return;ya.set(i),t.uniformMatrix4fv(this.addr,!1,ya),pe(n,i)}}function op(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(e||Oc,r)}function ap(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Qd,r)}function cp(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$d,r)}function lp(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(e||Fc,r)}function hp(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function up(t,e){const n=this.cache;_e(n,e)||(t.uniform2iv(this.addr,e),pe(n,e))}function fp(t,e){const n=this.cache;_e(n,e)||(t.uniform3iv(this.addr,e),pe(n,e))}function dp(t,e){const n=this.cache;_e(n,e)||(t.uniform4iv(this.addr,e),pe(n,e))}function pp(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mp(t){switch(t){case 5126:return Kd;case 35664:return tp;case 35665:return ep;case 35666:return np;case 35674:return ip;case 35675:return rp;case 35676:return sp;case 5124:case 35670:return hp;case 35667:case 35671:return up;case 35668:case 35672:return fp;case 35669:case 35673:return dp;case 5125:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return lp;case 36289:case 36303:case 36311:case 36292:return ap}}function gp(t,e){t.uniform1fv(this.addr,e)}function vp(t,e){t.uniform1iv(this.addr,e)}function yp(t,e){t.uniform2iv(this.addr,e)}function xp(t,e){t.uniform3iv(this.addr,e)}function _p(t,e){t.uniform4iv(this.addr,e)}function bp(t,e){const n=xi(e,this.size,2);t.uniform2fv(this.addr,n)}function Mp(t,e){const n=xi(e,this.size,3);t.uniform3fv(this.addr,n)}function wp(t,e){const n=xi(e,this.size,4);t.uniform4fv(this.addr,n)}function Sp(t,e){const n=xi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ep(t,e){const n=xi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Tp(t,e){const n=xi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Ap(t,e,n){const i=e.length,r=Bc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(e[s]||Oc,r[s])}function Lp(t,e,n){const i=e.length,r=Bc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(e[s]||Fc,r[s])}function Cp(t){switch(t){case 5126:return gp;case 35664:return bp;case 35665:return Mp;case 35666:return wp;case 35674:return Sp;case 35675:return Ep;case 35676:return Tp;case 5124:case 35670:return vp;case 35667:case 35671:return yp;case 35668:case 35672:return xp;case 35669:case 35673:return _p;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35680:case 36300:case 36308:case 36293:return Lp}}function Rp(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=mp(e.type)}function Uc(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Cp(e.type)}Uc.prototype.updateCache=function(t){const e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),pe(e,t)};function zc(t){this.id=t,this.seq=[],this.map={}}zc.prototype.setValue=function(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(t,e[o.id],n)}};const Ns=/(\w+)(\])?(\[|\.)?/g;function ba(t,e){t.seq.push(e),t.map[e.id]=e}function Pp(t,e,n){const i=t.name,r=i.length;for(Ns.lastIndex=0;;){const s=Ns.exec(i),o=Ns.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){ba(n,l===void 0?new Rp(a,t,e):new Uc(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new zc(a),ba(n,h)),n=h}}}function hn(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);Pp(r,s,this)}}hn.prototype.setValue=function(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)};hn.prototype.setOptional=function(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)};hn.upload=function(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}};hn.seqWithValue=function(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n};function Ma(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let Ip=0;function Dp(t){const e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function Hc(t){switch(t){case ir:return["Linear","( value )"];case Lc:return["sRGB","( value )"];case Gh:return["RGBE","( value )"];case Vh:return["RGBM","( value, 7.0 )"];case Wh:return["RGBM","( value, 16.0 )"];case jh:return["RGBD","( value, 256.0 )"];case Hh:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case kh:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function wa(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=t.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+Dp(s)}function Ai(t,e){const n=Hc(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function Np(t,e){const n=Hc(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Op(t,e){let n;switch(e){case zl:n="Linear";break;case Hl:n="Reinhard";break;case Gl:n="OptimizedCineon";break;case kl:n="ACESFilmic";break;case Vl:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Fp(t){return[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Di).join(`
`)}function Bp(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Up(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r).name;n[o]=t.getAttribLocation(e,o)}return n}function Di(t){return t!==""}function Sa(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ea(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function $s(t){return t.replace(zp,Hp)}function Hp(t,e){const n=At[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return $s(n)}const Gp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ta(t){return t.replace(kp,Gc).replace(Gp,Vp)}function Vp(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Gc(t,e,n,i)}function Gc(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Aa(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wp(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Mc?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===vl?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function jp(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case wo:case So:e="ENVMAP_TYPE_CUBE";break;case Eo:case To:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qp(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case So:case To:e="ENVMAP_MODE_REFRACTION";break}return e}function Xp(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ss:e="ENVMAP_BLENDING_MULTIPLY";break;case Bl:e="ENVMAP_BLENDING_MIX";break;case Ul:e="ENVMAP_BLENDING_ADD";break}return e}function Yp(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=Wp(n),l=jp(n),f=qp(n),h=Xp(n),d=t.gammaFactor>0?t.gammaFactor:1,u=n.isWebGL2?"":Fp(n),p=Bp(s),v=r.createProgram();let y,g,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=[p].filter(Di).join(`
`),y.length>0&&(y+=`
`),g=[u,p].filter(Di).join(`
`),g.length>0&&(g+=`
`)):(y=[Aa(n),"#define SHADER_NAME "+n.shaderName,p,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),g=[u,Aa(n),"#define SHADER_NAME "+n.shaderName,p,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fi?"#define TONE_MAPPING":"",n.toneMapping!==Fi?At.tonemapping_pars_fragment:"",n.toneMapping!==Fi?Op("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",At.encodings_pars_fragment,n.map?Ai("mapTexelToLinear",n.mapEncoding):"",n.matcap?Ai("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?Ai("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?Ai("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?Ai("lightMapTexelToLinear",n.lightMapEncoding):"",Np("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Di).join(`
`)),o=$s(o),o=Sa(o,n),o=Ea(o,n),a=$s(a),a=Sa(a,n),a=Ea(a,n),o=Ta(o),a=Ta(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===ra?"":"out highp vec4 pc_fragColor;",n.glslVersion===ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=m+y+o,T=m+g+a,M=Ma(r,35633,S),x=Ma(r,35632,T);if(r.attachShader(v,M),r.attachShader(v,x),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){const F=r.getProgramInfoLog(v).trim(),Y=r.getShaderInfoLog(M).trim(),P=r.getShaderInfoLog(x).trim();let D=!0,I=!0;if(r.getProgramParameter(v,35714)===!1){D=!1;const R=wa(r,M,"vertex"),C=wa(r,x,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(v,35715),"gl.getProgramInfoLog",F,R,C)}else F!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",F):(Y===""||P==="")&&(I=!1);I&&(this.diagnostics={runnable:D,programLog:F,vertexShader:{log:Y,prefix:y},fragmentShader:{log:P,prefix:g}})}r.deleteShader(M),r.deleteShader(x);let A;this.getUniforms=function(){return A===void 0&&(A=new hn(r,v)),A};let U;return this.getAttributes=function(){return U===void 0&&(U=Up(r,v)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=n.shaderName,this.id=Ip++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=x,this}function Zp(t,e,n,i,r,s){const o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,f=i.maxVertexUniforms,h=i.vertexTextures;let d=i.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function v(x){const U=x.skeleton.bones;if(l)return 1024;{const Y=Math.floor((f-20)/4),P=Math.min(Y,U.length);return P<U.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+U.length+" bones. This GPU supports "+P+"."),0):P}}function y(x){let A;return x&&x.isTexture?A=x.encoding:x&&x.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),A=x.texture.encoding):A=ir,A}function g(x,A,U,F,Y){const P=F.fog,D=x.isMeshStandardMaterial?F.environment:null,I=e.get(x.envMap||D),R=u[x.type],C=Y.isSkinnedMesh?v(Y):0;x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let O,G;if(R){const tt=Ie[R];O=tt.vertexShader,G=tt.fragmentShader}else O=x.vertexShader,G=x.fragmentShader;const j=t.getRenderTarget();return{isWebGL2:a,shaderID:R,shaderName:x.type,vertexShader:O,fragmentShader:G,defines:x.defines,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:h,outputEncoding:j!==null?y(j.texture):t.outputEncoding,map:!!x.map,mapEncoding:y(x.map),matcap:!!x.matcap,matcapEncoding:y(x.matcap),envMap:!!I,envMapMode:I&&I.mapping,envMapEncoding:y(I),envMapCubeUV:!!I&&(I.mapping===Eo||I.mapping===To),lightMap:!!x.lightMap,lightMapEncoding:y(x.lightMap),aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,emissiveMapEncoding:y(x.emissiveMap),bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Yh,tangentSpaceNormalMap:x.normalMapType===vi,clearcoatMap:!!x.clearcoatMap,clearcoatRoughnessMap:!!x.clearcoatRoughnessMap,clearcoatNormalMap:!!x.clearcoatNormalMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,alphaMap:!!x.alphaMap,gradientMap:!!x.gradientMap,sheen:!!x.sheen,transmissionMap:!!x.transmissionMap,combine:x.combine,vertexTangents:x.normalMap&&x.vertexTangents,vertexColors:x.vertexColors,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.displacementMap||!!x.transmissionMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.transmissionMap)&&!!x.displacementMap,fog:!!P,useFog:x.fog,fogExp2:P&&P.isFogExp2,flatShading:x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:c,skinning:x.skinning&&C>0,maxBones:C,useVertexTexture:l,morphTargets:x.morphTargets,morphNormals:x.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:x.toneMapped?t.toneMapping:Fi,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,alphaTest:x.alphaTest,doubleSided:x.side===rs,flipSided:x.side===$t,depthPacking:x.depthPacking!==void 0?x.depthPacking:!1,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.fragmentShader),A.push(x.vertexShader)),x.defines!==void 0)for(const U in x.defines)A.push(U),A.push(x.defines[U]);if(x.isRawShaderMaterial===!1){for(let U=0;U<p.length;U++)A.push(x[p[U]]);A.push(t.outputEncoding),A.push(t.gammaFactor)}return A.push(x.customProgramCacheKey),A.join()}function S(x){const A=u[x.type];let U;if(A){const F=Ie[A];U=hu.clone(F.uniforms)}else U=x.uniforms;return U}function T(x,A){let U;for(let F=0,Y=o.length;F<Y;F++){const P=o[F];if(P.cacheKey===A){U=P,++U.usedTimes;break}}return U===void 0&&(U=new Yp(t,A,x,r),o.push(U)),U}function M(x){if(--x.usedTimes===0){const A=o.indexOf(x);o[A]=o[o.length-1],o.pop(),x.destroy()}}return{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:T,releaseProgram:M,programs:o}}function Jp(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Qp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $p(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function La(t){const e=[];let n=0;const i=[],r=[],s={id:-1};function o(){n=0,i.length=0,r.length=0}function a(d,u,p,v,y,g){let m=e[n];const S=t.get(p);return m===void 0?(m={id:d.id,object:d,geometry:u,material:p,program:S.program||s,groupOrder:v,renderOrder:d.renderOrder,z:y,group:g},e[n]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=p,m.program=S.program||s,m.groupOrder=v,m.renderOrder=d.renderOrder,m.z=y,m.group=g),n++,m}function c(d,u,p,v,y,g){const m=a(d,u,p,v,y,g);(p.transparent===!0?r:i).push(m)}function l(d,u,p,v,y,g){const m=a(d,u,p,v,y,g);(p.transparent===!0?r:i).unshift(m)}function f(d,u){i.length>1&&i.sort(d||Qp),r.length>1&&r.sort(u||$p)}function h(){for(let d=n,u=e.length;d<u;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:f}}function Kp(t){let e=new WeakMap;function n(r,s){const o=e.get(r);let a;return o===void 0?(a=new La(t),e.set(r,new WeakMap),e.get(r).set(s,a)):(a=o.get(s),a===void 0&&(a=new La(t),o.set(s,a))),a}function i(){e=new WeakMap}return{get:n,dispose:i}}function tm(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new E,color:new lt};break;case"SpotLight":n={position:new E,direction:new E,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new E,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new E,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new E,halfWidth:new E,halfHeight:new E};break}return t[e.id]=n,n}}}function em(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nm=0;function im(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function rm(t,e){const n=new tm,i=em(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let f=0;f<9;f++)r.probe.push(new E);const s=new E,o=new St,a=new St;function c(f){let h=0,d=0,u=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let p=0,v=0,y=0,g=0,m=0,S=0,T=0,M=0;f.sort(im);for(let A=0,U=f.length;A<U;A++){const F=f[A],Y=F.color,P=F.intensity,D=F.distance,I=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=Y.r*P,d+=Y.g*P,u+=Y.b*P;else if(F.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(F.sh.coefficients[R],P);else if(F.isDirectionalLight){const R=n.get(F);if(R.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const C=F.shadow,O=i.get(F);O.shadowBias=C.bias,O.shadowNormalBias=C.normalBias,O.shadowRadius=C.radius,O.shadowMapSize=C.mapSize,r.directionalShadow[p]=O,r.directionalShadowMap[p]=I,r.directionalShadowMatrix[p]=F.shadow.matrix,S++}r.directional[p]=R,p++}else if(F.isSpotLight){const R=n.get(F);if(R.position.setFromMatrixPosition(F.matrixWorld),R.color.copy(Y).multiplyScalar(P),R.distance=D,R.coneCos=Math.cos(F.angle),R.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),R.decay=F.decay,F.castShadow){const C=F.shadow,O=i.get(F);O.shadowBias=C.bias,O.shadowNormalBias=C.normalBias,O.shadowRadius=C.radius,O.shadowMapSize=C.mapSize,r.spotShadow[y]=O,r.spotShadowMap[y]=I,r.spotShadowMatrix[y]=F.shadow.matrix,M++}r.spot[y]=R,y++}else if(F.isRectAreaLight){const R=n.get(F);R.color.copy(Y).multiplyScalar(P),R.halfWidth.set(F.width*.5,0,0),R.halfHeight.set(0,F.height*.5,0),r.rectArea[g]=R,g++}else if(F.isPointLight){const R=n.get(F);if(R.color.copy(F.color).multiplyScalar(F.intensity),R.distance=F.distance,R.decay=F.decay,F.castShadow){const C=F.shadow,O=i.get(F);O.shadowBias=C.bias,O.shadowNormalBias=C.normalBias,O.shadowRadius=C.radius,O.shadowMapSize=C.mapSize,O.shadowCameraNear=C.camera.near,O.shadowCameraFar=C.camera.far,r.pointShadow[v]=O,r.pointShadowMap[v]=I,r.pointShadowMatrix[v]=F.shadow.matrix,T++}r.point[v]=R,v++}else if(F.isHemisphereLight){const R=n.get(F);R.skyColor.copy(F.color).multiplyScalar(P),R.groundColor.copy(F.groundColor).multiplyScalar(P),r.hemi[m]=R,m++}}g>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=u;const x=r.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==y||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==S||x.numPointShadows!==T||x.numSpotShadows!==M)&&(r.directional.length=p,r.spot.length=y,r.rectArea.length=g,r.point.length=v,r.hemi.length=m,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotShadowMatrix.length=M,x.directionalLength=p,x.pointLength=v,x.spotLength=y,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=S,x.numPointShadows=T,x.numSpotShadows=M,r.version=nm++)}function l(f,h){let d=0,u=0,p=0,v=0,y=0;const g=h.matrixWorldInverse;for(let m=0,S=f.length;m<S;m++){const T=f[m];if(T.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),d++}else if(T.isSpotLight){const M=r.spot[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(T.isRectAreaLight){const M=r.rectArea[v];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(T.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const M=r.point[u];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),u++}else if(T.isHemisphereLight){const M=r.hemi[y];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(g),M.direction.normalize(),y++}}}return{setup:c,setupView:l,state:r}}function Ca(t,e){const n=new rm(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(){n.setup(i)}function l(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function sm(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new Ca(t,e),n.set(s,[]),n.get(s).push(a)):o>=n.get(s).length?(a=new Ca(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}function pn(t){pt.call(this),this.type="MeshDepthMaterial",this.depthPacking=qh,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}pn.prototype=Object.create(pt.prototype);pn.prototype.constructor=pn;pn.prototype.isMeshDepthMaterial=!0;pn.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this};function Tn(t){pt.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new E,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}Tn.prototype=Object.create(pt.prototype);Tn.prototype.constructor=Tn;Tn.prototype.isMeshDistanceMaterial=!0;Tn.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this};var om=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function kc(t,e,n){let i=new cs;const r=new k,s=new k,o=new Ot,a=[],c=[],l={},f={0:$t,1:is,2:rs},h=new le({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new k},radius:{value:4}},vertexShader:am,fragmentShader:om}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const u=new Dt;u.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Kt(u,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc,this.render=function(M,x,A){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||M.length===0)return;const U=t.getRenderTarget(),F=t.getActiveCubeFace(),Y=t.getActiveMipmapLevel(),P=t.state;P.setBlending(Ni),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let D=0,I=M.length;D<I;D++){const R=M[D],C=R.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const O=C.getFrameExtents();if(r.multiply(O),s.copy(C.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/O.x),r.x=s.x*O.x,C.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/O.y),r.y=s.y*O.y,C.mapSize.y=s.y)),C.map===null&&!C.isPointLightShadow&&this.type===Ii){const j={minFilter:ne,magFilter:ne,format:Le};C.map=new Ce(r.x,r.y,j),C.map.texture.name=R.name+".shadowMap",C.mapPass=new Ce(r.x,r.y,j),C.camera.updateProjectionMatrix()}if(C.map===null){const j={minFilter:re,magFilter:re,format:Le};C.map=new Ce(r.x,r.y,j),C.map.texture.name=R.name+".shadowMap",C.camera.updateProjectionMatrix()}t.setRenderTarget(C.map),t.clear();const G=C.getViewportCount();for(let j=0;j<G;j++){const J=C.getViewport(j);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),P.viewport(o),C.updateMatrices(R,j),i=C.getFrustum(),T(x,A,C.camera,R,this.type)}!C.isPointLightShadow&&this.type===Ii&&y(C,A),C.needsUpdate=!1}v.needsUpdate=!1,t.setRenderTarget(U,F,Y)};function y(M,x){const A=e.update(p);h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(x,null,A,h,p,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(x,null,A,d,p,null)}function g(M,x,A){const U=M<<0|x<<1|A<<2;let F=a[U];return F===void 0&&(F=new pn({depthPacking:Xh,morphTargets:M,skinning:x}),a[U]=F),F}function m(M,x,A){const U=M<<0|x<<1|A<<2;let F=c[U];return F===void 0&&(F=new Tn({morphTargets:M,skinning:x}),c[U]=F),F}function S(M,x,A,U,F,Y,P){let D=null,I=g,R=M.customDepthMaterial;if(U.isPointLight===!0&&(I=m,R=M.customDistanceMaterial),R===void 0){let C=!1;A.morphTargets===!0&&(C=x.morphAttributes&&x.morphAttributes.position&&x.morphAttributes.position.length>0);let O=!1;M.isSkinnedMesh===!0&&(A.skinning===!0?O=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",M));const G=M.isInstancedMesh===!0;D=I(C,O,G)}else D=R;if(t.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0){const C=D.uuid,O=A.uuid;let G=l[C];G===void 0&&(G={},l[C]=G);let j=G[O];j===void 0&&(j=D.clone(),G[O]=j),D=j}return D.visible=A.visible,D.wireframe=A.wireframe,P===Ii?D.side=A.shadowSide!==null?A.shadowSide:A.side:D.side=A.shadowSide!==null?A.shadowSide:f[A.side],D.clipShadows=A.clipShadows,D.clippingPlanes=A.clippingPlanes,D.clipIntersection=A.clipIntersection,D.wireframeLinewidth=A.wireframeLinewidth,D.linewidth=A.linewidth,U.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(U.matrixWorld),D.nearDistance=F,D.farDistance=Y),D}function T(M,x,A,U,F){if(M.visible===!1)return;if(M.layers.test(x.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&F===Ii)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const D=e.update(M),I=M.material;if(Array.isArray(I)){const R=D.groups;for(let C=0,O=R.length;C<O;C++){const G=R[C],j=I[G.materialIndex];if(j&&j.visible){const J=S(M,D,j,U,A.near,A.far,F);t.renderBufferDirect(A,null,D,J,M,G)}}}else if(I.visible){const R=S(M,D,I,U,A.near,A.far,F);t.renderBufferDirect(A,null,D,R,M,null)}}const P=M.children;for(let D=0,I=P.length;D<I;D++)T(P[D],x,A,U,F)}}function cm(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const X=new Ot;let nt=null;const ct=new Ot(0,0,0,0);return{setMask:function($){nt!==$&&!L&&(t.colorMask($,$,$,$),nt=$)},setLocked:function($){L=$},setClear:function($,at,ft,_t,st){st===!0&&($*=_t,at*=_t,ft*=_t),X.set($,at,ft,_t),ct.equals(X)===!1&&(t.clearColor($,at,ft,_t),ct.copy(X))},reset:function(){L=!1,nt=null,ct.set(-1,0,0,0)}}}function s(){let L=!1,X=null,nt=null,ct=null;return{setTest:function($){$?tt(2929):it(2929)},setMask:function($){X!==$&&!L&&(t.depthMask($),X=$)},setFunc:function($){if(nt!==$){if($)switch($){case Rl:t.depthFunc(512);break;case Pl:t.depthFunc(519);break;case Il:t.depthFunc(513);break;case ks:t.depthFunc(515);break;case Dl:t.depthFunc(514);break;case Nl:t.depthFunc(518);break;case Ol:t.depthFunc(516);break;case Fl:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);nt=$}},setLocked:function($){L=$},setClear:function($){ct!==$&&(t.clearDepth($),ct=$)},reset:function(){L=!1,X=null,nt=null,ct=null}}}function o(){let L=!1,X=null,nt=null,ct=null,$=null,at=null,ft=null,_t=null,st=null;return{setTest:function(mt){L||(mt?tt(2960):it(2960))},setMask:function(mt){X!==mt&&!L&&(t.stencilMask(mt),X=mt)},setFunc:function(mt,Vt,oe){(nt!==mt||ct!==Vt||$!==oe)&&(t.stencilFunc(mt,Vt,oe),nt=mt,ct=Vt,$=oe)},setOp:function(mt,Vt,oe){(at!==mt||ft!==Vt||_t!==oe)&&(t.stencilOp(mt,Vt,oe),at=mt,ft=Vt,_t=oe)},setLocked:function(mt){L=mt},setClear:function(mt){st!==mt&&(t.clearStencil(mt),st=mt)},reset:function(){L=!1,X=null,nt=null,ct=null,$=null,at=null,ft=null,_t=null,st=null}}}const a=new r,c=new s,l=new o;let f={},h=null,d=null,u=null,p=null,v=null,y=null,g=null,m=null,S=null,T=!1,M=null,x=null,A=null,U=null,F=null;const Y=t.getParameter(35661);let P=!1,D=0;const I=t.getParameter(7938);I.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(I)[1]),P=D>=1):I.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),P=D>=2);let R=null,C={};const O=new Ot,G=new Ot;function j(L,X,nt){const ct=new Uint8Array(4),$=t.createTexture();t.bindTexture(L,$),t.texParameteri(L,10241,9728),t.texParameteri(L,10240,9728);for(let at=0;at<nt;at++)t.texImage2D(X+at,0,6408,1,1,0,6408,5121,ct);return $}const J={};J[3553]=j(3553,3553,1),J[34067]=j(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),tt(2929),c.setFunc(ks),ut(!1),Lt(Uo),tt(2884),H(Ni);function tt(L){f[L]!==!0&&(t.enable(L),f[L]=!0)}function it(L){f[L]!==!1&&(t.disable(L),f[L]=!1)}function gt(L){return h!==L?(t.useProgram(L),h=L,!0):!1}const vt={[Zn]:32774,[xl]:32778,[_l]:32779};if(i)vt[ko]=32775,vt[Vo]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(vt[ko]=L.MIN_EXT,vt[Vo]=L.MAX_EXT)}const Nt={[bl]:0,[Ml]:1,[wl]:768,[Sc]:770,[Cl]:776,[Al]:774,[El]:772,[Sl]:769,[Ec]:771,[Ll]:775,[Tl]:773};function H(L,X,nt,ct,$,at,ft,_t){if(L===Ni){d&&(it(3042),d=!1);return}if(d||(tt(3042),d=!0),L!==yl){if(L!==u||_t!==T){if((p!==Zn||g!==Zn)&&(t.blendEquation(32774),p=Zn,g=Zn),_t)switch(L){case Oi:t.blendFuncSeparate(1,771,1,771);break;case zo:t.blendFunc(1,1);break;case Ho:t.blendFuncSeparate(0,0,769,771);break;case Go:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Oi:t.blendFuncSeparate(770,771,1,771);break;case zo:t.blendFunc(770,1);break;case Ho:t.blendFunc(0,769);break;case Go:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,y=null,m=null,S=null,u=L,T=_t}return}$=$||X,at=at||nt,ft=ft||ct,(X!==p||$!==g)&&(t.blendEquationSeparate(vt[X],vt[$]),p=X,g=$),(nt!==v||ct!==y||at!==m||ft!==S)&&(t.blendFuncSeparate(Nt[nt],Nt[ct],Nt[at],Nt[ft]),v=nt,y=ct,m=at,S=ft),u=L,T=null}function qt(L,X){L.side===rs?it(2884):tt(2884);let nt=L.side===$t;X&&(nt=!nt),ut(nt),L.blending===Oi&&L.transparent===!1?H(Ni):H(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const ct=L.stencilWrite;l.setTest(ct),ct&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),It(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits)}function ut(L){M!==L&&(L?t.frontFace(2304):t.frontFace(2305),M=L)}function Lt(L){L!==ml?(tt(2884),L!==x&&(L===Uo?t.cullFace(1029):L===gl?t.cullFace(1028):t.cullFace(1032))):it(2884),x=L}function yt(L){L!==A&&(P&&t.lineWidth(L),A=L)}function It(L,X,nt){L?(tt(32823),(U!==X||F!==nt)&&(t.polygonOffset(X,nt),U=X,F=nt)):it(32823)}function wt(L){L?tt(3089):it(3089)}function V(L){L===void 0&&(L=33984+Y-1),R!==L&&(t.activeTexture(L),R=L)}function Z(L,X){R===null&&V();let nt=C[R];nt===void 0&&(nt={type:void 0,texture:void 0},C[R]=nt),(nt.type!==L||nt.texture!==X)&&(t.bindTexture(L,X||J[L]),nt.type=L,nt.texture=X)}function Q(){const L=C[R];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ot(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function w(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function b(L){O.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),O.copy(L))}function q(L){G.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),G.copy(L))}function W(){f={},R=null,C={},h=null,d=null,u=null,p=null,v=null,y=null,g=null,m=null,S=null,T=!1,M=null,x=null,A=null,U=null,F=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:tt,disable:it,useProgram:gt,setBlending:H,setMaterial:qt,setFlipSided:ut,setCullFace:Lt,setLineWidth:yt,setPolygonOffset:It,setScissorTest:wt,activeTexture:V,bindTexture:Z,unbindTexture:Q,compressedTexImage2D:ot,texImage2D:rt,texImage3D:w,scissor:b,viewport:q,reset:W}}function lm(t,e,n,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=new WeakMap;let u,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,b){return p?new OffscreenCanvas(w,b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function y(w,b,q,W){let L=1;if((w.width>W||w.height>W)&&(L=W/Math.max(w.width,w.height)),L<1||b===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const X=b?Mt.floorPowerOfTwo:Math.floor,nt=X(L*w.width),ct=X(L*w.height);u===void 0&&(u=v(nt,ct));const $=q?v(nt,ct):u;return $.width=nt,$.height=ct,$.getContext("2d").drawImage(w,0,0,nt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+nt+"x"+ct+")."),$}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function g(w){return Mt.isPowerOfTwo(w.width)&&Mt.isPowerOfTwo(w.height)}function m(w){return a?!1:w.wrapS!==fe||w.wrapT!==fe||w.minFilter!==re&&w.minFilter!==ne}function S(w,b){return w.generateMipmaps&&b&&w.minFilter!==re&&w.minFilter!==ne}function T(w,b,q,W){t.generateMipmap(w);const L=i.get(b);L.__maxMipLevel=Math.log(Math.max(q,W))*Math.LOG2E}function M(w,b,q){if(a===!1)return b;if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let W=b;return b===6403&&(q===5126&&(W=33326),q===5131&&(W=33325),q===5121&&(W=33321)),b===6407&&(q===5126&&(W=34837),q===5131&&(W=34843),q===5121&&(W=32849)),b===6408&&(q===5126&&(W=34836),q===5131&&(W=34842),q===5121&&(W=32856)),(W===33325||W===33326||W===34842||W===34836)&&e.get("EXT_color_buffer_float"),W}function x(w){return w===re||w===qo||w===Xo?9728:9729}function A(w){const b=w.target;b.removeEventListener("dispose",A),F(b),b.isVideoTexture&&d.delete(b),o.memory.textures--}function U(w){const b=w.target;b.removeEventListener("dispose",U),Y(b),o.memory.textures--}function F(w){const b=i.get(w);b.__webglInit!==void 0&&(t.deleteTexture(b.__webglTexture),i.remove(w))}function Y(w){const b=i.get(w),q=i.get(w.texture);if(!!w){if(q.__webglTexture!==void 0&&t.deleteTexture(q.__webglTexture),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++)t.deleteFramebuffer(b.__webglFramebuffer[W]),b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[W]);else t.deleteFramebuffer(b.__webglFramebuffer),b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer&&t.deleteRenderbuffer(b.__webglColorRenderbuffer),b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer);i.remove(w.texture),i.remove(w)}}let P=0;function D(){P=0}function I(){const w=P;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),P+=1,w}function R(w,b){const q=i.get(w);if(w.isVideoTexture&&V(w),w.version>0&&q.__version!==w.version){const W=w.image;if(W===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(q,w,b);return}}n.activeTexture(33984+b),n.bindTexture(3553,q.__webglTexture)}function C(w,b){const q=i.get(w);if(w.version>0&&q.__version!==w.version){gt(q,w,b);return}n.activeTexture(33984+b),n.bindTexture(35866,q.__webglTexture)}function O(w,b){const q=i.get(w);if(w.version>0&&q.__version!==w.version){gt(q,w,b);return}n.activeTexture(33984+b),n.bindTexture(32879,q.__webglTexture)}function G(w,b){const q=i.get(w);if(w.version>0&&q.__version!==w.version){vt(q,w,b);return}n.activeTexture(33984+b),n.bindTexture(34067,q.__webglTexture)}const j={[Vs]:10497,[fe]:33071,[Ws]:33648},J={[re]:9728,[qo]:9984,[Xo]:9986,[ne]:9729,[Wl]:9985,[os]:9987};function tt(w,b,q){q?(t.texParameteri(w,10242,j[b.wrapS]),t.texParameteri(w,10243,j[b.wrapT]),(w===32879||w===35866)&&t.texParameteri(w,32882,j[b.wrapR]),t.texParameteri(w,10240,J[b.magFilter]),t.texParameteri(w,10241,J[b.minFilter])):(t.texParameteri(w,10242,33071),t.texParameteri(w,10243,33071),(w===32879||w===35866)&&t.texParameteri(w,32882,33071),(b.wrapS!==fe||b.wrapT!==fe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(w,10240,x(b.magFilter)),t.texParameteri(w,10241,x(b.minFilter)),b.minFilter!==re&&b.minFilter!==ne&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));const W=e.get("EXT_texture_filter_anisotropic");if(W){if(b.type===cn&&e.get("OES_texture_float_linear")===null||b.type===Vr&&(a||e.get("OES_texture_half_float_linear"))===null)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(t.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function it(w,b){w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",A),w.__webglTexture=t.createTexture(),o.memory.textures++)}function gt(w,b,q){let W=3553;b.isDataTexture2DArray&&(W=35866),b.isDataTexture3D&&(W=32879),it(w,b),n.activeTexture(33984+q),n.bindTexture(W,w.__webglTexture),t.pixelStorei(37440,b.flipY),t.pixelStorei(37441,b.premultiplyAlpha),t.pixelStorei(3317,b.unpackAlignment);const L=m(b)&&g(b.image)===!1,X=y(b.image,L,!1,f),nt=g(X)||a,ct=s.convert(b.format);let $=s.convert(b.type),at=M(b.internalFormat,ct,$);tt(W,b,nt);let ft;const _t=b.mipmaps;if(b.isDepthTexture)at=6402,a?b.type===cn?at=36012:b.type===Hr?at=33190:b.type===Bi?at=35056:at=33189:b.type===cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ii&&at===6402&&b.type!==kr&&b.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=kr,$=s.convert(b.type)),b.format===ki&&at===6402&&(at=34041,b.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Bi,$=s.convert(b.type))),n.texImage2D(3553,0,at,X.width,X.height,0,ct,$,null);else if(b.isDataTexture)if(_t.length>0&&nt){for(let st=0,mt=_t.length;st<mt;st++)ft=_t[st],n.texImage2D(3553,st,at,ft.width,ft.height,0,ct,$,ft.data);b.generateMipmaps=!1,w.__maxMipLevel=_t.length-1}else n.texImage2D(3553,0,at,X.width,X.height,0,ct,$,X.data),w.__maxMipLevel=0;else if(b.isCompressedTexture){for(let st=0,mt=_t.length;st<mt;st++)ft=_t[st],b.format!==Le&&b.format!==wn?ct!==null?n.compressedTexImage2D(3553,st,at,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,st,at,ft.width,ft.height,0,ct,$,ft.data);w.__maxMipLevel=_t.length-1}else if(b.isDataTexture2DArray)n.texImage3D(35866,0,at,X.width,X.height,X.depth,0,ct,$,X.data),w.__maxMipLevel=0;else if(b.isDataTexture3D)n.texImage3D(32879,0,at,X.width,X.height,X.depth,0,ct,$,X.data),w.__maxMipLevel=0;else if(_t.length>0&&nt){for(let st=0,mt=_t.length;st<mt;st++)ft=_t[st],n.texImage2D(3553,st,at,ct,$,ft);b.generateMipmaps=!1,w.__maxMipLevel=_t.length-1}else n.texImage2D(3553,0,at,ct,$,X),w.__maxMipLevel=0;S(b,nt)&&T(W,b,X.width,X.height),w.__version=b.version,b.onUpdate&&b.onUpdate(b)}function vt(w,b,q){if(b.image.length!==6)return;it(w,b),n.activeTexture(33984+q),n.bindTexture(34067,w.__webglTexture),t.pixelStorei(37440,b.flipY);const W=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture),L=b.image[0]&&b.image[0].isDataTexture,X=[];for(let st=0;st<6;st++)!W&&!L?X[st]=y(b.image[st],!1,!0,l):X[st]=L?b.image[st].image:b.image[st];const nt=X[0],ct=g(nt)||a,$=s.convert(b.format),at=s.convert(b.type),ft=M(b.internalFormat,$,at);tt(34067,b,ct);let _t;if(W){for(let st=0;st<6;st++){_t=X[st].mipmaps;for(let mt=0;mt<_t.length;mt++){const Vt=_t[mt];b.format!==Le&&b.format!==wn?$!==null?n.compressedTexImage2D(34069+st,mt,ft,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+st,mt,ft,Vt.width,Vt.height,0,$,at,Vt.data)}}w.__maxMipLevel=_t.length-1}else{_t=b.mipmaps;for(let st=0;st<6;st++)if(L){n.texImage2D(34069+st,0,ft,X[st].width,X[st].height,0,$,at,X[st].data);for(let mt=0;mt<_t.length;mt++){const oe=_t[mt].image[st].image;n.texImage2D(34069+st,mt+1,ft,oe.width,oe.height,0,$,at,oe.data)}}else{n.texImage2D(34069+st,0,ft,$,at,X[st]);for(let mt=0;mt<_t.length;mt++){const Vt=_t[mt];n.texImage2D(34069+st,mt+1,ft,$,at,Vt.image[st])}}w.__maxMipLevel=_t.length}S(b,ct)&&T(34067,b,nt.width,nt.height),w.__version=b.version,b.onUpdate&&b.onUpdate(b)}function Nt(w,b,q,W){const L=s.convert(b.texture.format),X=s.convert(b.texture.type),nt=M(b.texture.internalFormat,L,X);n.texImage2D(W,0,nt,b.width,b.height,0,L,X,null),t.bindFramebuffer(36160,w),t.framebufferTexture2D(36160,q,W,i.get(b.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function H(w,b,q){if(t.bindRenderbuffer(36161,w),b.depthBuffer&&!b.stencilBuffer){let W=33189;if(q){const L=b.depthTexture;L&&L.isDepthTexture&&(L.type===cn?W=36012:L.type===Hr&&(W=33190));const X=wt(b);t.renderbufferStorageMultisample(36161,X,W,b.width,b.height)}else t.renderbufferStorage(36161,W,b.width,b.height);t.framebufferRenderbuffer(36160,36096,36161,w)}else if(b.depthBuffer&&b.stencilBuffer){if(q){const W=wt(b);t.renderbufferStorageMultisample(36161,W,35056,b.width,b.height)}else t.renderbufferStorage(36161,34041,b.width,b.height);t.framebufferRenderbuffer(36160,33306,36161,w)}else{const W=s.convert(b.texture.format),L=s.convert(b.texture.type),X=M(b.texture.internalFormat,W,L);if(q){const nt=wt(b);t.renderbufferStorageMultisample(36161,nt,X,b.width,b.height)}else t.renderbufferStorage(36161,X,b.width,b.height)}t.bindRenderbuffer(36161,null)}function qt(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),R(b.depthTexture,0);const W=i.get(b.depthTexture).__webglTexture;if(b.depthTexture.format===ii)t.framebufferTexture2D(36160,36096,3553,W,0);else if(b.depthTexture.format===ki)t.framebufferTexture2D(36160,33306,3553,W,0);else throw new Error("Unknown depthTexture format")}function ut(w){const b=i.get(w),q=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture){if(q)throw new Error("target.depthTexture not supported in Cube render targets");qt(b.__webglFramebuffer,w)}else if(q){b.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(36160,b.__webglFramebuffer[W]),b.__webglDepthbuffer[W]=t.createRenderbuffer(),H(b.__webglDepthbuffer[W],w,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),H(b.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Lt(w){const b=i.get(w),q=i.get(w.texture);w.addEventListener("dispose",U),q.__webglTexture=t.createTexture(),o.memory.textures++;const W=w.isWebGLCubeRenderTarget===!0,L=w.isWebGLMultisampleRenderTarget===!0,X=g(w)||a;if(a&&w.texture.format===wn&&(w.texture.type===cn||w.texture.type===Vr)&&(w.texture.format=Le,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),W){b.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)b.__webglFramebuffer[nt]=t.createFramebuffer()}else if(b.__webglFramebuffer=t.createFramebuffer(),L)if(a){b.__webglMultisampledFramebuffer=t.createFramebuffer(),b.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,b.__webglColorRenderbuffer);const nt=s.convert(w.texture.format),ct=s.convert(w.texture.type),$=M(w.texture.internalFormat,nt,ct),at=wt(w);t.renderbufferStorageMultisample(36161,at,$,w.width,w.height),t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,b.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),w.depthBuffer&&(b.__webglDepthRenderbuffer=t.createRenderbuffer(),H(b.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(W){n.bindTexture(34067,q.__webglTexture),tt(34067,w.texture,X);for(let nt=0;nt<6;nt++)Nt(b.__webglFramebuffer[nt],w,36064,34069+nt);S(w.texture,X)&&T(34067,w.texture,w.width,w.height),n.bindTexture(34067,null)}else n.bindTexture(3553,q.__webglTexture),tt(3553,w.texture,X),Nt(b.__webglFramebuffer,w,36064,3553),S(w.texture,X)&&T(3553,w.texture,w.width,w.height),n.bindTexture(3553,null);w.depthBuffer&&ut(w)}function yt(w){const b=w.texture,q=g(w)||a;if(S(b,q)){const W=w.isWebGLCubeRenderTarget?34067:3553,L=i.get(b).__webglTexture;n.bindTexture(W,L),T(W,b,w.width,w.height),n.bindTexture(W,null)}}function It(w){if(w.isWebGLMultisampleRenderTarget)if(a){const b=i.get(w);t.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,b.__webglFramebuffer);const q=w.width,W=w.height;let L=16384;w.depthBuffer&&(L|=256),w.stencilBuffer&&(L|=1024),t.blitFramebuffer(0,0,q,W,0,0,q,W,L,9728),t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function wt(w){return a&&w.isWebGLMultisampleRenderTarget?Math.min(h,w.samples):0}function V(w){const b=o.render.frame;d.get(w)!==b&&(d.set(w,b),w.update())}let Z=!1,Q=!1;function ot(w,b){w&&w.isWebGLRenderTarget&&(Z===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Z=!0),w=w.texture),R(w,b)}function rt(w,b){w&&w.isWebGLCubeRenderTarget&&(Q===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Q=!0),w=w.texture),G(w,b)}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=R,this.setTexture2DArray=C,this.setTexture3D=O,this.setTextureCube=G,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=It,this.safeSetTexture2D=ot,this.safeSetTextureCube=rt}function hm(t,e,n){const i=n.isWebGL2;function r(s){let o;if(s===Ao)return 5121;if(s===Yl)return 32819;if(s===Zl)return 32820;if(s===Jl)return 33635;if(s===jl)return 5120;if(s===ql)return 5122;if(s===kr)return 5123;if(s===Xl)return 5124;if(s===Hr)return 5125;if(s===cn)return 5126;if(s===Vr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ql)return 6406;if(s===wn)return 6407;if(s===Le)return 6408;if(s===$l)return 6409;if(s===Kl)return 6410;if(s===ii)return 6402;if(s===ki)return 34041;if(s===th)return 6403;if(s===eh)return 36244;if(s===nh)return 33319;if(s===ih)return 33320;if(s===rh)return 36248;if(s===sh)return 36249;if(s===Yo||s===Zo||s===Jo||s===Qo)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$o||s===Ko||s===ta||s===ea)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===$o)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ko)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ta)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ea)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===oh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===na||s===ia)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===na)return o.COMPRESSED_RGB8_ETC2;if(s===ia)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===ah||s===ch||s===lh||s===hh||s===uh||s===fh||s===dh||s===ph||s===mh||s===gh||s===vh||s===yh||s===xh||s===_h||s===Mh||s===wh||s===Sh||s===Eh||s===Th||s===Ah||s===Lh||s===Ch||s===Rh||s===Ph||s===Ih||s===Dh||s===Nh||s===Oh)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===bh)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Bi)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Ks(t=[]){Jt.call(this),this.cameras=t}Ks.prototype=Object.assign(Object.create(Jt.prototype),{constructor:Ks,isArrayCamera:!0});function ei(){dt.call(this),this.type="Group"}ei.prototype=Object.assign(Object.create(dt.prototype),{constructor:ei,isGroup:!0});function zi(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(zi.prototype,{constructor:zi,getHandSpace:function(){if(this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let t=0;t<=window.XRHand.LITTLE_PHALANX_TIP;t++){const e=new ei;e.matrixAutoUpdate=!1,e.visible=!1,this._hand.joints.push(e),this._hand.add(e)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this},disconnect:function(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(t,e,n){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(c&&t.hand){s=!0;for(let l=0;l<=window.XRHand.LITTLE_PHALANX_TIP;l++)if(t.hand[l]){const f=e.getJointPose(t.hand[l],n),h=c.joints[l];f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=f.radius),h.visible=f!==null;const d=c.joints[window.XRHand.INDEX_PHALANX_TIP],u=c.joints[window.XRHand.THUMB_PHALANX_TIP],p=d.position.distanceTo(u.position),v=.02,y=.005;c.inputState.pinching&&p>v+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=v-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}}else o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function Vc(t,e){const n=this;let i=null,r=1,s=null,o="local-floor",a=null;const c=[],l=new Map,f=new Jt;f.layers.enable(1),f.viewport=new Ot;const h=new Jt;h.layers.enable(2),h.viewport=new Ot;const d=[f,h],u=new Ks;u.layers.enable(1),u.layers.enable(2);let p=null,v=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let D=c[P];return D===void 0&&(D=new zi,c[P]=D),D.getTargetRaySpace()},this.getControllerGrip=function(P){let D=c[P];return D===void 0&&(D=new zi,c[P]=D),D.getGripSpace()},this.getHand=function(P){let D=c[P];return D===void 0&&(D=new zi,c[P]=D),D.getHandSpace()};function y(P){const D=l.get(P.inputSource);D&&D.dispatchEvent({type:P.type,data:P.inputSource})}function g(){l.forEach(function(P,D){P.disconnect(D)}),l.clear(),t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),Y.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function m(P){s=P,Y.setContext(i),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=function(P){if(i=P,i!==null){i.addEventListener("select",y),i.addEventListener("selectstart",y),i.addEventListener("selectend",y),i.addEventListener("squeeze",y),i.addEventListener("squeezestart",y),i.addEventListener("squeezeend",y),i.addEventListener("end",g);const D=e.getContextAttributes();D.xrCompatible!==!0&&e.makeXRCompatible();const I={antialias:D.antialias,alpha:D.alpha,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:r},R=new XRWebGLLayer(i,e,I);i.updateRenderState({baseLayer:R}),i.requestReferenceSpace(o).then(m),i.addEventListener("inputsourceschange",S)}};function S(P){const D=i.inputSources;for(let I=0;I<c.length;I++)l.set(D[I],c[I]);for(let I=0;I<P.removed.length;I++){const R=P.removed[I],C=l.get(R);C&&(C.dispatchEvent({type:"disconnected",data:R}),l.delete(R))}for(let I=0;I<P.added.length;I++){const R=P.added[I],C=l.get(R);C&&C.dispatchEvent({type:"connected",data:R})}}const T=new E,M=new E;function x(P,D,I){T.setFromMatrixPosition(D.matrixWorld),M.setFromMatrixPosition(I.matrixWorld);const R=T.distanceTo(M),C=D.projectionMatrix.elements,O=I.projectionMatrix.elements,G=C[14]/(C[10]-1),j=C[14]/(C[10]+1),J=(C[9]+1)/C[5],tt=(C[9]-1)/C[5],it=(C[8]-1)/C[0],gt=(O[8]+1)/O[0],vt=G*it,Nt=G*gt,H=R/(-it+gt),qt=H*-it;D.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(qt),P.translateZ(H),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const ut=G+H,Lt=j+H,yt=vt-qt,It=Nt+(R-qt),wt=J*j/Lt*ut,V=tt*j/Lt*ut;P.projectionMatrix.makePerspective(yt,It,wt,V,ut,Lt)}function A(P,D){D===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(D.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.getCamera=function(P){u.near=h.near=f.near=P.near,u.far=h.far=f.far=P.far,(p!==u.near||v!==u.far)&&(i.updateRenderState({depthNear:u.near,depthFar:u.far}),p=u.near,v=u.far);const D=P.parent,I=u.cameras;A(u,D);for(let C=0;C<I.length;C++)A(I[C],D);P.matrixWorld.copy(u.matrixWorld);const R=P.children;for(let C=0,O=R.length;C<O;C++)R[C].updateMatrixWorld(!0);return I.length===2?x(u,f,h):u.projectionMatrix.copy(f.projectionMatrix),u};let U=null;function F(P,D){if(a=D.getViewerPose(s),a!==null){const R=a.views,C=i.renderState.baseLayer;t.setFramebuffer(C.framebuffer);let O=!1;R.length!==u.cameras.length&&(u.cameras.length=0,O=!0);for(let G=0;G<R.length;G++){const j=R[G],J=C.getViewport(j),tt=d[G];tt.matrix.fromArray(j.transform.matrix),tt.projectionMatrix.fromArray(j.projectionMatrix),tt.viewport.set(J.x,J.y,J.width,J.height),G===0&&u.matrix.copy(tt.matrix),O===!0&&u.cameras.push(tt)}}const I=i.inputSources;for(let R=0;R<c.length;R++){const C=c[R],O=I[R];C.update(O,D,s)}U&&U(P,D)}const Y=new Nc;Y.setAnimationLoop(F),this.setAnimationLoop=function(P){U=P},this.dispose=function(){}}Object.assign(Vc.prototype,$e.prototype);function um(t){function e(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,S,T){m.isMeshBasicMaterial?i(g,m):m.isMeshLambertMaterial?(i(g,m),c(g,m)):m.isMeshToonMaterial?(i(g,m),f(g,m)):m.isMeshPhongMaterial?(i(g,m),l(g,m)):m.isMeshStandardMaterial?(i(g,m),m.isMeshPhysicalMaterial?d(g,m):h(g,m)):m.isMeshMatcapMaterial?(i(g,m),u(g,m)):m.isMeshDepthMaterial?(i(g,m),p(g,m)):m.isMeshDistanceMaterial?(i(g,m),v(g,m)):m.isMeshNormalMaterial?(i(g,m),y(g,m)):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?o(g,m,S,T):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.specularMap&&(g.specularMap.value=m.specularMap);const S=t.get(m).envMap;if(S){g.envMap.value=S,g.flipEnvMap.value=S.isCubeTexture&&S._needsFlipEnvMap?-1:1,g.reflectivity.value=m.reflectivity,g.refractionRatio.value=m.refractionRatio;const x=t.get(S).__maxMipLevel;x!==void 0&&(g.maxMipLevel.value=x)}m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let T;m.map?T=m.map:m.specularMap?T=m.specularMap:m.displacementMap?T=m.displacementMap:m.normalMap?T=m.normalMap:m.bumpMap?T=m.bumpMap:m.roughnessMap?T=m.roughnessMap:m.metalnessMap?T=m.metalnessMap:m.alphaMap?T=m.alphaMap:m.emissiveMap?T=m.emissiveMap:m.clearcoatMap?T=m.clearcoatMap:m.clearcoatNormalMap?T=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(T=m.clearcoatRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix));let M;m.aoMap?M=m.aoMap:m.lightMap&&(M=m.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uv2Transform.value.copy(M.matrix))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,S,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=T*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let M;m.map?M=m.map:m.alphaMap&&(M=m.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uvTransform.value.copy(M.matrix))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let S;m.map?S=m.map:m.alphaMap&&(S=m.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),g.uvTransform.value.copy(S.matrix))}function c(g,m){m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===$t&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===$t&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===$t&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===$t&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function h(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===$t&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===$t&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),t.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m){h(g,m),g.reflectivity.value=m.reflectivity,g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&g.sheen.value.copy(m.sheen),m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===$t&&g.clearcoatNormalScale.value.negate()),g.transmission.value=m.transmission,m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap)}function u(g,m){m.matcap&&(g.matcap.value=m.matcap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===$t&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===$t&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function p(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function v(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}function y(g,m){m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===$t&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===$t&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function fm(){const t=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return t.style.display="block",t}function or(t){t=t||{};const e=t.canvas!==void 0?t.canvas:fm(),n=t.context!==void 0?t.context:null,i=t.alpha!==void 0?t.alpha:!1,r=t.depth!==void 0?t.depth:!0,s=t.stencil!==void 0?t.stencil:!0,o=t.antialias!==void 0?t.antialias:!1,a=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,c=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",f=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let h=null,d=null;const u=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=ir,this.physicallyCorrectLights=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const p=this;let v=!1,y=null,g=0,m=0,S=null,T=null,M=-1,x=null;const A=new Ot,U=new Ot;let F=null,Y=e.width,P=e.height,D=1,I=null,R=null;const C=new Ot(0,0,Y,P),O=new Ot(0,0,Y,P);let G=!1;const j=new cs;let J=!1,tt=!1;const it=new St,gt=new E,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return S===null?D:1}let H=n;function qt(_,B){for(let N=0;N<_.length;N++){const z=_[N],et=e.getContext(z,B);if(et!==null)return et}return null}try{const _={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(e.addEventListener("webglcontextlost",Vt,!1),e.addEventListener("webglcontextrestored",oe,!1),H===null){const B=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&B.shift(),H=qt(B,_),H===null)throw qt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let ut,Lt,yt,It,wt,V,Z,Q,ot,rt,w,b,q,W,L,X,nt,ct,$,at,ft;function _t(){ut=new Vd(H),Lt=new Hd(H,ut,t),Lt.isWebGL2===!1&&(ut.get("WEBGL_depth_texture"),ut.get("OES_texture_float"),ut.get("OES_texture_half_float"),ut.get("OES_texture_half_float_linear"),ut.get("OES_standard_derivatives"),ut.get("OES_element_index_uint"),ut.get("OES_vertex_array_object"),ut.get("ANGLE_instanced_arrays")),ut.get("OES_texture_float_linear"),at=new hm(H,ut,Lt),yt=new cm(H,ut,Lt),yt.scissor(U.copy(O).multiplyScalar(D).floor()),yt.viewport(A.copy(C).multiplyScalar(D).floor()),It=new qd,wt=new Jp,V=new lm(H,ut,yt,wt,Lt,at,It),Z=new kd(p),Q=new du(H,Lt),ft=new Ud(H,ut,Q,Lt),ot=new Wd(H,Q,It,ft),rt=new Jd(H,ot,Q,It),nt=new Zd(H),L=new Gd(wt),w=new Zp(p,Z,ut,Lt,ft,L),b=new um(wt),q=new Kp(wt),W=new sm(ut,Lt),X=new Bd(p,Z,yt,rt,a),ct=new zd(H,ut,It,Lt),$=new jd(H,ut,It,Lt),It.programs=w.programs,p.capabilities=Lt,p.extensions=ut,p.properties=wt,p.renderLists=q,p.state=yt,p.info=It}_t();const st=new Vc(p,H);this.xr=st;const mt=new kc(p,rt,Lt.maxTextureSize);this.shadowMap=mt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const _=ut.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=ut.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(_){_!==void 0&&(D=_,this.setSize(Y,P,!1))},this.getSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),_=new k),_.set(Y,P)},this.setSize=function(_,B,N){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=_,P=B,e.width=Math.floor(_*D),e.height=Math.floor(B*D),N!==!1&&(e.style.width=_+"px",e.style.height=B+"px"),this.setViewport(0,0,_,B)},this.getDrawingBufferSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),_=new k),_.set(Y*D,P*D).floor()},this.setDrawingBufferSize=function(_,B,N){Y=_,P=B,D=N,e.width=Math.floor(_*N),e.height=Math.floor(B*N),this.setViewport(0,0,_,B)},this.getCurrentViewport=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),_=new Ot),_.copy(A)},this.getViewport=function(_){return _.copy(C)},this.setViewport=function(_,B,N,z){_.isVector4?C.set(_.x,_.y,_.z,_.w):C.set(_,B,N,z),yt.viewport(A.copy(C).multiplyScalar(D).floor())},this.getScissor=function(_){return _.copy(O)},this.setScissor=function(_,B,N,z){_.isVector4?O.set(_.x,_.y,_.z,_.w):O.set(_,B,N,z),yt.scissor(U.copy(O).multiplyScalar(D).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(_){yt.setScissorTest(G=_)},this.setOpaqueSort=function(_){I=_},this.setTransparentSort=function(_){R=_},this.getClearColor=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),_=new lt),_.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(_,B,N){let z=0;(_===void 0||_)&&(z|=16384),(B===void 0||B)&&(z|=256),(N===void 0||N)&&(z|=1024),H.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Vt,!1),e.removeEventListener("webglcontextrestored",oe,!1),q.dispose(),W.dispose(),wt.dispose(),Z.dispose(),rt.dispose(),ft.dispose(),st.dispose(),_i.stop()};function Vt(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1,_t()}function Io(_){const B=_.target;B.removeEventListener("dispose",Io),cl(B)}function cl(_){Do(_),wt.remove(_)}function Do(_){const B=wt.get(_).program;B!==void 0&&w.releaseProgram(B)}function ll(_,B){_.render(function(N){p.renderBufferImmediate(N,B)})}this.renderBufferImmediate=function(_,B){ft.initAttributes();const N=wt.get(_);_.hasPositions&&!N.position&&(N.position=H.createBuffer()),_.hasNormals&&!N.normal&&(N.normal=H.createBuffer()),_.hasUvs&&!N.uv&&(N.uv=H.createBuffer()),_.hasColors&&!N.color&&(N.color=H.createBuffer());const z=B.getAttributes();_.hasPositions&&(H.bindBuffer(34962,N.position),H.bufferData(34962,_.positionArray,35048),ft.enableAttribute(z.position),H.vertexAttribPointer(z.position,3,5126,!1,0,0)),_.hasNormals&&(H.bindBuffer(34962,N.normal),H.bufferData(34962,_.normalArray,35048),ft.enableAttribute(z.normal),H.vertexAttribPointer(z.normal,3,5126,!1,0,0)),_.hasUvs&&(H.bindBuffer(34962,N.uv),H.bufferData(34962,_.uvArray,35048),ft.enableAttribute(z.uv),H.vertexAttribPointer(z.uv,2,5126,!1,0,0)),_.hasColors&&(H.bindBuffer(34962,N.color),H.bufferData(34962,_.colorArray,35048),ft.enableAttribute(z.color),H.vertexAttribPointer(z.color,3,5126,!1,0,0)),ft.disableUnusedAttributes(),H.drawArrays(4,0,_.count),_.count=0},this.renderBufferDirect=function(_,B,N,z,et,Ct){B===null&&(B=vt);const Et=et.isMesh&&et.matrixWorld.determinant()<0,Rt=Bo(_,B,z,et);yt.setMaterial(z,Et);let Tt=N.index;const Xt=N.attributes.position;if(Tt===null){if(Xt===void 0||Xt.count===0)return}else if(Tt.count===0)return;let jt=1;z.wireframe===!0&&(Tt=ot.getWireframeAttribute(N),jt=2),(z.morphTargets||z.morphNormals)&&nt.update(et,N,z,Rt),ft.setup(et,z,Rt,N,Tt);let bt,Bt=ct;Tt!==null&&(bt=Q.get(Tt),Bt=$,Bt.setIndex(bt));const He=Tt!==null?Tt.count:Xt.count,Ut=N.drawRange.start*jt,yn=N.drawRange.count*jt,Yt=Ct!==null?Ct.start*jt:0,us=Ct!==null?Ct.count*jt:1/0,ae=Math.max(Ut,Yt),bi=Math.min(He,Ut+yn,Yt+us)-1,In=Math.max(0,bi-ae+1);if(In!==0){if(et.isMesh)z.wireframe===!0?(yt.setLineWidth(z.wireframeLinewidth*Nt()),Bt.setMode(1)):Bt.setMode(4);else if(et.isLine){let Mi=z.linewidth;Mi===void 0&&(Mi=1),yt.setLineWidth(Mi*Nt()),et.isLineSegments?Bt.setMode(1):et.isLineLoop?Bt.setMode(2):Bt.setMode(3)}else et.isPoints?Bt.setMode(0):et.isSprite&&Bt.setMode(4);if(et.isInstancedMesh)Bt.renderInstances(ae,In,et.count);else if(N.isInstancedBufferGeometry){const Mi=Math.min(N.instanceCount,N._maxInstanceCount);Bt.renderInstances(ae,In,Mi)}else Bt.render(ae,In)}},this.compile=function(_,B){d=W.get(_),d.init(),_.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const N=new WeakMap;_.traverse(function(z){const et=z.material;if(et)if(Array.isArray(et))for(let Ct=0;Ct<et.length;Ct++){const Et=et[Ct];N.has(Et)===!1&&(ze(Et,_,z),N.set(Et))}else N.has(et)===!1&&(ze(et,_,z),N.set(et))})};let hs=null;function hl(_){st.isPresenting||hs&&hs(_)}const _i=new Nc;_i.setAnimationLoop(hl),typeof window<"u"&&_i.setContext(window),this.setAnimationLoop=function(_){hs=_,st.setAnimationLoop(_),_===null?_i.stop():_i.start()},this.render=function(_,B){let N,z;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),N=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),z=arguments[3]),B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;ft.resetDefaultState(),M=-1,x=null,_.autoUpdate===!0&&_.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(B=st.getCamera(B)),_.isScene===!0&&_.onBeforeRender(p,_,B,N||S),d=W.get(_,u.length),d.init(),u.push(d),it.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(it),tt=this.localClippingEnabled,J=L.init(this.clippingPlanes,tt,B),h=q.get(_,B),h.init(),No(_,B,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(I,R),J===!0&&L.beginShadows();const et=d.state.shadowsArray;mt.render(et,_,B),d.setupLights(),d.setupLightsView(B),J===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),N!==void 0&&this.setRenderTarget(N),X.render(h,_,B,z);const Ct=h.opaque,Et=h.transparent;Ct.length>0&&Oo(Ct,_,B),Et.length>0&&Oo(Et,_,B),_.isScene===!0&&_.onAfterRender(p,_,B),S!==null&&(V.updateRenderTargetMipmap(S),V.updateMultisampleRenderTarget(S)),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1),u.pop(),u.length>0?d=u[u.length-1]:d=null,h=null};function No(_,B,N,z){if(_.visible===!1)return;if(_.layers.test(B.layers)){if(_.isGroup)N=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(B);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||j.intersectsSprite(_)){z&&gt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it);const Et=rt.update(_),Rt=_.material;Rt.visible&&h.push(_,Et,Rt,N,gt.z,null)}}else if(_.isImmediateRenderObject)z&&gt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it),h.push(_,null,_.material,N,gt.z,null);else if((_.isMesh||_.isLine||_.isPoints)&&(_.isSkinnedMesh&&_.skeleton.frame!==It.render.frame&&(_.skeleton.update(),_.skeleton.frame=It.render.frame),!_.frustumCulled||j.intersectsObject(_))){z&&gt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it);const Et=rt.update(_),Rt=_.material;if(Array.isArray(Rt)){const Tt=Et.groups;for(let Xt=0,jt=Tt.length;Xt<jt;Xt++){const bt=Tt[Xt],Bt=Rt[bt.materialIndex];Bt&&Bt.visible&&h.push(_,Et,Bt,N,gt.z,bt)}}else Rt.visible&&h.push(_,Et,Rt,N,gt.z,null)}}const Ct=_.children;for(let Et=0,Rt=Ct.length;Et<Rt;Et++)No(Ct[Et],B,N,z)}function Oo(_,B,N){const z=B.isScene===!0?B.overrideMaterial:null;for(let et=0,Ct=_.length;et<Ct;et++){const Et=_[et],Rt=Et.object,Tt=Et.geometry,Xt=z===null?Et.material:z,jt=Et.group;if(N.isArrayCamera){const bt=N.cameras;for(let Bt=0,He=bt.length;Bt<He;Bt++){const Ut=bt[Bt];Rt.layers.test(Ut.layers)&&(yt.viewport(A.copy(Ut.viewport)),d.setupLightsView(Ut),Fo(Rt,B,Ut,Tt,Xt,jt))}}else Fo(Rt,B,N,Tt,Xt,jt)}}function Fo(_,B,N,z,et,Ct){if(_.onBeforeRender(p,B,N,z,et,Ct),_.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),_.isImmediateRenderObject){const Et=Bo(N,B,et,_);yt.setMaterial(et),ft.reset(),ll(_,Et)}else p.renderBufferDirect(N,B,z,et,_,Ct);_.onAfterRender(p,B,N,z,et,Ct)}function ze(_,B,N){B.isScene!==!0&&(B=vt);const z=wt.get(_),et=d.state.lights,Ct=d.state.shadowsArray,Et=et.state.version,Rt=w.getParameters(_,et.state,Ct,B,N),Tt=w.getProgramCacheKey(Rt);let Xt=z.program,jt=!0;if(Xt===void 0)_.addEventListener("dispose",Io);else if(Xt.cacheKey!==Tt)Do(_);else if(z.lightsStateVersion!==Et)jt=!1;else if(Rt.shaderID!==void 0){const Ut=_.isMeshStandardMaterial?B.environment:null;z.envMap=Z.get(_.envMap||Ut);return}else jt=!1;jt&&(Rt.uniforms=w.getUniforms(_),_.onBeforeCompile(Rt,p),Xt=w.acquireProgram(Rt,Tt),z.program=Xt,z.uniforms=Rt.uniforms,z.outputEncoding=Rt.outputEncoding);const bt=z.uniforms;(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(z.numClippingPlanes=L.numPlanes,z.numIntersection=L.numIntersection,bt.clippingPlanes=L.uniform),z.environment=_.isMeshStandardMaterial?B.environment:null,z.fog=B.fog,z.envMap=Z.get(_.envMap||z.environment),z.needsLights=fl(_),z.lightsStateVersion=Et,z.needsLights&&(bt.ambientLightColor.value=et.state.ambient,bt.lightProbe.value=et.state.probe,bt.directionalLights.value=et.state.directional,bt.directionalLightShadows.value=et.state.directionalShadow,bt.spotLights.value=et.state.spot,bt.spotLightShadows.value=et.state.spotShadow,bt.rectAreaLights.value=et.state.rectArea,bt.ltc_1.value=et.state.rectAreaLTC1,bt.ltc_2.value=et.state.rectAreaLTC2,bt.pointLights.value=et.state.point,bt.pointLightShadows.value=et.state.pointShadow,bt.hemisphereLights.value=et.state.hemi,bt.directionalShadowMap.value=et.state.directionalShadowMap,bt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,bt.spotShadowMap.value=et.state.spotShadowMap,bt.spotShadowMatrix.value=et.state.spotShadowMatrix,bt.pointShadowMap.value=et.state.pointShadowMap,bt.pointShadowMatrix.value=et.state.pointShadowMatrix);const Bt=z.program.getUniforms(),He=hn.seqWithValue(Bt.seq,bt);z.uniformsList=He}function Bo(_,B,N,z){B.isScene!==!0&&(B=vt),V.resetTextureUnits();const et=B.fog,Ct=N.isMeshStandardMaterial?B.environment:null,Et=S===null?p.outputEncoding:S.texture.encoding,Rt=Z.get(N.envMap||Ct),Tt=wt.get(N),Xt=d.state.lights;if(J===!0&&(tt===!0||_!==x)){const Yt=_===x&&N.id===M;L.setState(N,_,Yt)}N.version===Tt.__version?(N.fog&&Tt.fog!==et||Tt.environment!==Ct||Tt.needsLights&&Tt.lightsStateVersion!==Xt.state.version||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==L.numPlanes||Tt.numIntersection!==L.numIntersection)||Tt.outputEncoding!==Et||Tt.envMap!==Rt)&&ze(N,B,z):(ze(N,B,z),Tt.__version=N.version);let jt=!1,bt=!1,Bt=!1;const He=Tt.program,Ut=He.getUniforms(),yn=Tt.uniforms;if(yt.useProgram(He.program)&&(jt=!0,bt=!0,Bt=!0),N.id!==M&&(M=N.id,bt=!0),jt||x!==_){if(Ut.setValue(H,"projectionMatrix",_.projectionMatrix),Lt.logarithmicDepthBuffer&&Ut.setValue(H,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),x!==_&&(x=_,bt=!0,Bt=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Yt=Ut.map.cameraPosition;Yt!==void 0&&Yt.setValue(H,gt.setFromMatrixPosition(_.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Ut.setValue(H,"isOrthographic",_.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||N.skinning)&&Ut.setValue(H,"viewMatrix",_.matrixWorldInverse)}if(N.skinning){Ut.setOptional(H,z,"bindMatrix"),Ut.setOptional(H,z,"bindMatrixInverse");const Yt=z.skeleton;if(Yt){const us=Yt.bones;if(Lt.floatVertexTextures){if(Yt.boneTexture===null){let ae=Math.sqrt(us.length*4);ae=Mt.ceilPowerOfTwo(ae),ae=Math.max(ae,4);const bi=new Float32Array(ae*ae*4);bi.set(Yt.boneMatrices);const In=new ci(bi,ae,ae,Le,cn);Yt.boneMatrices=bi,Yt.boneTexture=In,Yt.boneTextureSize=ae}Ut.setValue(H,"boneTexture",Yt.boneTexture,V),Ut.setValue(H,"boneTextureSize",Yt.boneTextureSize)}else Ut.setOptional(H,Yt,"boneMatrices")}}return(bt||Tt.receiveShadow!==z.receiveShadow)&&(Tt.receiveShadow=z.receiveShadow,Ut.setValue(H,"receiveShadow",z.receiveShadow)),bt&&(Ut.setValue(H,"toneMappingExposure",p.toneMappingExposure),Tt.needsLights&&ul(yn,Bt),et&&N.fog&&b.refreshFogUniforms(yn,et),b.refreshMaterialUniforms(yn,N,D,P),hn.upload(H,Tt.uniformsList,yn,V)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(hn.upload(H,Tt.uniformsList,yn,V),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Ut.setValue(H,"center",z.center),Ut.setValue(H,"modelViewMatrix",z.modelViewMatrix),Ut.setValue(H,"normalMatrix",z.normalMatrix),Ut.setValue(H,"modelMatrix",z.matrixWorld),He}function ul(_,B){_.ambientLightColor.needsUpdate=B,_.lightProbe.needsUpdate=B,_.directionalLights.needsUpdate=B,_.directionalLightShadows.needsUpdate=B,_.pointLights.needsUpdate=B,_.pointLightShadows.needsUpdate=B,_.spotLights.needsUpdate=B,_.spotLightShadows.needsUpdate=B,_.rectAreaLights.needsUpdate=B,_.hemisphereLights.needsUpdate=B}function fl(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.setFramebuffer=function(_){y!==_&&S===null&&H.bindFramebuffer(36160,_),y=_},this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return m},this.getRenderList=function(){return h},this.setRenderList=function(_){h=_},this.getRenderTarget=function(){return S},this.setRenderTarget=function(_,B=0,N=0){S=_,g=B,m=N,_&&wt.get(_).__webglFramebuffer===void 0&&V.setupRenderTarget(_);let z=y,et=!1;if(_){const Ct=wt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(z=Ct[B],et=!0):_.isWebGLMultisampleRenderTarget?z=wt.get(_).__webglMultisampledFramebuffer:z=Ct,A.copy(_.viewport),U.copy(_.scissor),F=_.scissorTest}else A.copy(C).multiplyScalar(D).floor(),U.copy(O).multiplyScalar(D).floor(),F=G;if(T!==z&&(H.bindFramebuffer(36160,z),T=z),yt.viewport(A),yt.scissor(U),yt.setScissorTest(F),et){const Ct=wt.get(_.texture);H.framebufferTexture2D(36160,36064,34069+B,Ct.__webglTexture,N)}},this.readRenderTargetPixels=function(_,B,N,z,et,Ct,Et){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=wt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt){let Tt=!1;Rt!==T&&(H.bindFramebuffer(36160,Rt),Tt=!0);try{const Xt=_.texture,jt=Xt.format,bt=Xt.type;if(jt!==Le&&at.convert(jt)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt!==Ao&&at.convert(bt)!==H.getParameter(35738)&&!(bt===cn&&(Lt.isWebGL2||ut.get("OES_texture_float")||ut.get("WEBGL_color_buffer_float")))&&!(bt===Vr&&(Lt.isWebGL2?ut.get("EXT_color_buffer_float"):ut.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H.checkFramebufferStatus(36160)===36053?B>=0&&B<=_.width-z&&N>=0&&N<=_.height-et&&H.readPixels(B,N,z,et,at.convert(jt),at.convert(bt),Ct):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Tt&&H.bindFramebuffer(36160,T)}}},this.copyFramebufferToTexture=function(_,B,N=0){const z=Math.pow(2,-N),et=Math.floor(B.image.width*z),Ct=Math.floor(B.image.height*z),Et=at.convert(B.format);V.setTexture2D(B,0),H.copyTexImage2D(3553,N,Et,_.x,_.y,et,Ct,0),yt.unbindTexture()},this.copyTextureToTexture=function(_,B,N,z=0){const et=B.image.width,Ct=B.image.height,Et=at.convert(N.format),Rt=at.convert(N.type);V.setTexture2D(N,0),H.pixelStorei(37440,N.flipY),H.pixelStorei(37441,N.premultiplyAlpha),H.pixelStorei(3317,N.unpackAlignment),B.isDataTexture?H.texSubImage2D(3553,z,_.x,_.y,et,Ct,Et,Rt,B.image.data):B.isCompressedTexture?H.compressedTexSubImage2D(3553,z,_.x,_.y,B.mipmaps[0].width,B.mipmaps[0].height,Et,B.mipmaps[0].data):H.texSubImage2D(3553,z,_.x,_.y,Et,Rt,B.image),z===0&&N.generateMipmaps&&H.generateMipmap(3553),yt.unbindTexture()},this.initTexture=function(_){V.setTexture2D(_,0),yt.unbindTexture()},this.resetState=function(){yt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Ra(t){or.call(this,t)}Ra.prototype=Object.assign(Object.create(or.prototype),{constructor:Ra,isWebGL1Renderer:!0});class Wc extends dt{constructor(){super(),Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.background!==null&&(n.object.background=this.background.toJSON(e)),this.environment!==null&&(n.object.environment=this.environment.toJSON(e)),this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}function ve(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=as,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Mt.generateUUID()}Object.defineProperty(ve.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(ve.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e=0){return this.array.set(t,e),this},clone:function(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mt.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new ve(e,this.stride);return n.setUsage(this.usage),n},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mt.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const Mn=new E;function An(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}Object.defineProperties(An.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(t){this.data.needsUpdate=t}}});Object.assign(An.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(let e=0,n=this.data.count;e<n;e++)Mn.x=this.getX(e),Mn.y=this.getY(e),Mn.z=this.getZ(e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this},setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this},clone:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new xt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new An(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function Ln(t){pt.call(this),this.type="SpriteMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}Ln.prototype=Object.create(pt.prototype);Ln.prototype.constructor=Ln;Ln.prototype.isSpriteMaterial=!0;Ln.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};let jn;const Li=new E,qn=new E,Xn=new E,Yn=new k,Ci=new k,jc=new St,wr=new E,Ri=new E,Sr=new E,Pa=new k,Os=new k,Ia=new k;function Da(t){if(dt.call(this),this.type="Sprite",jn===void 0){jn=new Dt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ve(e,5);jn.setIndex([0,1,2,0,2,3]),jn.setAttribute("position",new An(n,3,0,!1)),jn.setAttribute("uv",new An(n,2,3,!1))}this.geometry=jn,this.material=t!==void 0?t:new Ln,this.center=new k(.5,.5)}Da.prototype=Object.assign(Object.create(dt.prototype),{constructor:Da,isSprite:!0,raycast:function(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qn.setFromMatrixScale(this.matrixWorld),jc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qn.multiplyScalar(-Xn.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;Er(wr.set(-.5,-.5,0),Xn,s,qn,i,r),Er(Ri.set(.5,-.5,0),Xn,s,qn,i,r),Er(Sr.set(.5,.5,0),Xn,s,qn,i,r),Pa.set(0,0),Os.set(1,0),Ia.set(1,1);let o=t.ray.intersectTriangle(wr,Ri,Sr,!1,Li);if(o===null&&(Er(Ri.set(-.5,.5,0),Xn,s,qn,i,r),Os.set(0,1),o=t.ray.intersectTriangle(wr,Sr,Ri,!1,Li),o===null))return;const a=t.ray.origin.distanceTo(Li);a<t.near||a>t.far||e.push({distance:a,point:Li.clone(),uv:ee.getUV(Li,wr,Ri,Sr,Pa,Os,Ia,new k),face:null,object:this})},copy:function(t){return dt.prototype.copy.call(this,t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}});function Er(t,e,n,i,r,s){Yn.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Ci.x=s*Yn.x-r*Yn.y,Ci.y=r*Yn.x+s*Yn.y):Ci.copy(Yn),t.copy(e),t.x+=Ci.x,t.y+=Ci.y,t.applyMatrix4(jc)}const Tr=new E,Na=new E;function to(){dt.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}to.prototype=Object.assign(Object.create(dt.prototype),{constructor:to,isLOD:!0,copy:function(t){dt.prototype.copy.call(this,t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=t.autoUpdate,this},addLevel:function(t,e=0){e=Math.abs(e);const n=this.levels;let i;for(i=0;i<n.length&&!(e<n[i].distance);i++);return n.splice(i,0,{distance:e,object:t}),this.add(t),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object}return null},raycast:function(t,e){if(this.levels.length>0){Tr.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(Tr);this.getObjectForDistance(i).raycast(t,e)}},update:function(t){const e=this.levels;if(e.length>1){Tr.setFromMatrixPosition(t.matrixWorld),Na.setFromMatrixPosition(this.matrixWorld);const n=Tr.distanceTo(Na)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r&&n>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}},toJSON:function(t){const e=dt.prototype.toJSON.call(this,t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const s=n[i];e.object.levels.push({object:s.object.uuid,distance:s.distance})}return e}});const Oa=new E,Fa=new Ot,Ba=new Ot,dm=new E,Ua=new St;function eo(t,e){t&&t.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),Kt.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new St,this.bindMatrixInverse=new St}eo.prototype=Object.assign(Object.create(Kt.prototype),{constructor:eo,isSkinnedMesh:!0,copy:function(t){return Kt.prototype.copy.call(this,t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this},bind:function(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const t=new Ot,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){Kt.prototype.updateMatrixWorld.call(this,t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(t,e){const n=this.skeleton,i=this.geometry;Fa.fromBufferAttribute(i.attributes.skinIndex,t),Ba.fromBufferAttribute(i.attributes.skinWeight,t),Oa.fromBufferAttribute(i.attributes.position,t).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const s=Ba.getComponent(r);if(s!==0){const o=Fa.getComponent(r);Ua.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(dm.copy(Oa).applyMatrix4(Ua),s)}}return e.applyMatrix4(this.bindMatrixInverse)}});function no(){dt.call(this),this.type="Bone"}no.prototype=Object.assign(Object.create(dt.prototype),{constructor:no,isBone:!0});const za=new St,pm=new St;function io(t=[],e=[]){this.uuid=Mt.generateUUID(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}Object.assign(io.prototype,{init:function(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new St)}},calculateInverses:function(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new St;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}},pose:function(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){const o=t[r]?t[r].matrixWorld:pm;za.multiplyMatrices(o,e[r]),za.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)},clone:function(){return new io(this.bones,this.boneInverses)},getBoneByName:function(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}},dispose:function(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)},fromJSON:function(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new no),this.bones.push(s),this.boneInverses.push(new St().fromArray(t.boneInverses[n]))}return this.init(),this},toJSON:function(){const t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const s=e[i];t.bones.push(s.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}});const Ha=new St,Ga=new St,Ar=[],Pi=new Kt;function ka(t,e,n){Kt.call(this,t,e),this.instanceMatrix=new xt(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}ka.prototype=Object.assign(Object.create(Kt.prototype),{constructor:ka,isInstancedMesh:!0,copy:function(t){return Kt.prototype.copy.call(this,t),this.instanceMatrix.copy(t.instanceMatrix),this.count=t.count,this},getColorAt:function(t,e){e.fromArray(this.instanceColor.array,t*3)},getMatrixAt:function(t,e){e.fromArray(this.instanceMatrix.array,t*16)},raycast:function(t,e){const n=this.matrixWorld,i=this.count;if(Pi.geometry=this.geometry,Pi.material=this.material,Pi.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Ha),Ga.multiplyMatrices(n,Ha),Pi.matrixWorld=Ga,Pi.raycast(t,Ar);for(let s=0,o=Ar.length;s<o;s++){const a=Ar[s];a.instanceId=r,a.object=this,e.push(a)}Ar.length=0}},setColorAt:function(t,e){this.instanceColor===null&&(this.instanceColor=new xt(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,t*3)},setMatrixAt:function(t,e){e.toArray(this.instanceMatrix.array,t*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});function be(t){pt.call(this),this.type="LineBasicMaterial",this.color=new lt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}be.prototype=Object.create(pt.prototype);be.prototype.constructor=be;be.prototype.isLineBasicMaterial=!0;be.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this};const Va=new E,Wa=new E,ja=new St,Lr=new rr,Cr=new vn;function li(t=new Dt,e=new be){dt.call(this),this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}li.prototype=Object.assign(Object.create(dt.prototype),{constructor:li,isLine:!0,copy:function(t){return dt.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Va.fromBufferAttribute(e,i-1),Wa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Va.distanceTo(Wa);t.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){const e=t.vertices,n=t.lineDistances;n[0]=0;for(let i=1,r=e.length;i<r;i++)n[i]=n[i-1],n[i]+=e[i-1].distanceTo(e[i])}return this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=r,t.ray.intersectsSphere(Cr)===!1)return;ja.copy(i).invert(),Lr.copy(t.ray).applyMatrix4(ja);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new E,c=new E,l=new E,f=new E,h=this.isLineSegments?2:1;if(n.isBufferGeometry){const d=n.index,p=n.attributes.position;if(d!==null){const v=d.array;for(let y=0,g=v.length-1;y<g;y+=h){const m=v[y],S=v[y+1];if(a.fromBufferAttribute(p,m),c.fromBufferAttribute(p,S),Lr.distanceSqToSegment(a,c,f,l)>o)continue;f.applyMatrix4(this.matrixWorld);const M=t.ray.origin.distanceTo(f);M<t.near||M>t.far||e.push({distance:M,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else for(let v=0,y=p.count-1;v<y;v+=h){if(a.fromBufferAttribute(p,v),c.fromBufferAttribute(p,v+1),Lr.distanceSqToSegment(a,c,f,l)>o)continue;f.applyMatrix4(this.matrixWorld);const m=t.ray.origin.distanceTo(f);m<t.near||m>t.far||e.push({distance:m,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){const d=n.vertices,u=d.length;for(let p=0;p<u-1;p+=h){if(Lr.distanceSqToSegment(d[p],d[p+1],f,l)>o)continue;f.applyMatrix4(this.matrixWorld);const y=t.ray.origin.distanceTo(f);y<t.near||y>t.far||e.push({distance:y,point:l.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const Rr=new E,Pr=new E;function Xr(t,e){li.call(this,t,e),this.type="LineSegments"}Xr.prototype=Object.assign(Object.create(li.prototype),{constructor:Xr,isLineSegments:!0,computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Rr.fromBufferAttribute(e,i),Pr.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rr.distanceTo(Pr);t.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){const e=t.vertices,n=t.lineDistances;for(let i=0,r=e.length;i<r;i+=2)Rr.copy(e[i]),Pr.copy(e[i+1]),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rr.distanceTo(Pr)}return this}});function qa(t,e){li.call(this,t,e),this.type="LineLoop"}qa.prototype=Object.assign(Object.create(li.prototype),{constructor:qa,isLineLoop:!0});function Cn(t){pt.call(this),this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}Cn.prototype=Object.create(pt.prototype);Cn.prototype.constructor=Cn;Cn.prototype.isPointsMaterial=!0;Cn.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};const Xa=new St,ro=new rr,Ir=new vn,Dr=new E;function Ya(t=new Dt,e=new Cn){dt.call(this),this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}Ya.prototype=Object.assign(Object.create(dt.prototype),{constructor:Ya,isPoints:!0,copy:function(t){return dt.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;Xa.copy(i).invert(),ro.copy(t.ray).applyMatrix4(Xa);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position;if(a!==null){const f=a.array;for(let h=0,d=f.length;h<d;h++){const u=f[h];Dr.fromBufferAttribute(l,u),Fs(Dr,u,o,i,t,e,this)}}else for(let f=0,h=l.count;f<h;f++)Dr.fromBufferAttribute(l,f),Fs(Dr,f,o,i,t,e,this)}else{const a=n.vertices;for(let c=0,l=a.length;c<l;c++)Fs(a[c],c,o,i,t,e,this)}},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Fs(t,e,n,i,r,s,o){const a=ro.distanceSqToPoint(t);if(a<n){const c=new E;ro.closestPointToPoint(t,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function Za(t,e,n,i,r,s,o,a,c){Ht.call(this,t,e,n,i,r,s,o,a,c),this.format=o!==void 0?o:wn,this.minFilter=s!==void 0?s:ne,this.magFilter=r!==void 0?r:ne,this.generateMipmaps=!1;const l=this;function f(){l.needsUpdate=!0,t.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(f)}Za.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Za,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Yi(t,e,n,i,r,s,o,a,c,l,f,h){Ht.call(this,null,s,o,a,c,l,i,r,f,h),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}Yi.prototype=Object.create(Ht.prototype);Yi.prototype.constructor=Yi;Yi.prototype.isCompressedTexture=!0;function Yr(t,e,n,i,r,s,o,a,c){Ht.call(this,t,e,n,i,r,s,o,a,c),this.needsUpdate=!0}Yr.prototype=Object.create(Ht.prototype);Yr.prototype.constructor=Yr;Yr.prototype.isCanvasTexture=!0;function Zr(t,e,n,i,r,s,o,a,c,l){if(l=l!==void 0?l:ii,l!==ii&&l!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===ii&&(n=kr),n===void 0&&l===ki&&(n=Bi),Ht.call(this,null,i,r,s,o,a,l,n,c),this.image={width:t,height:e},this.magFilter=o!==void 0?o:re,this.minFilter=a!==void 0?a:re,this.flipY=!1,this.generateMipmaps=!1}Zr.prototype=Object.create(Ht.prototype);Zr.prototype.constructor=Zr;Zr.prototype.isDepthTexture=!0;let mm=0;const Pe=new St,Bs=new dt,Nr=new E;function ye(){Object.defineProperty(this,"id",{value:mm+=2}),this.uuid=Mt.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}ye.prototype=Object.assign(Object.create($e.prototype),{constructor:ye,isGeometry:!0,applyMatrix4:function(t){const e=new ce().getNormalMatrix(t);for(let n=0,i=this.vertices.length;n<i;n++)this.vertices[n].applyMatrix4(t);for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];r.normal.applyMatrix3(e).normalize();for(let s=0,o=r.vertexNormals.length;s<o;s++)r.vertexNormals[s].applyMatrix3(e).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this},rotateY:function(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this},rotateZ:function(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this},translate:function(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this},scale:function(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this},lookAt:function(t){return Bs.lookAt(t),Bs.updateMatrix(),this.applyMatrix4(Bs.matrix),this},fromBufferGeometry:function(t){const e=this,n=t.index!==null?t.index:void 0,i=t.attributes;if(i.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;const r=i.position,s=i.normal,o=i.color,a=i.uv,c=i.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(let h=0;h<r.count;h++)e.vertices.push(new E().fromBufferAttribute(r,h)),o!==void 0&&e.colors.push(new lt().fromBufferAttribute(o,h));function l(h,d,u,p){const v=o===void 0?[]:[e.colors[h].clone(),e.colors[d].clone(),e.colors[u].clone()],y=s===void 0?[]:[new E().fromBufferAttribute(s,h),new E().fromBufferAttribute(s,d),new E().fromBufferAttribute(s,u)],g=new js(h,d,u,y,v,p);e.faces.push(g),a!==void 0&&e.faceVertexUvs[0].push([new k().fromBufferAttribute(a,h),new k().fromBufferAttribute(a,d),new k().fromBufferAttribute(a,u)]),c!==void 0&&e.faceVertexUvs[1].push([new k().fromBufferAttribute(c,h),new k().fromBufferAttribute(c,d),new k().fromBufferAttribute(c,u)])}const f=t.groups;if(f.length>0)for(let h=0;h<f.length;h++){const d=f[h],u=d.start,p=d.count;for(let v=u,y=u+p;v<y;v+=3)n!==void 0?l(n.getX(v),n.getX(v+1),n.getX(v+2),d.materialIndex):l(v,v+1,v+2,d.materialIndex)}else if(n!==void 0)for(let h=0;h<n.count;h+=3)l(n.getX(h),n.getX(h+1),n.getX(h+2));else for(let h=0;h<r.count;h+=3)l(h,h+1,h+2);return this.computeFaceNormals(),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this},normalize:function(){this.computeBoundingSphere();const t=this.boundingSphere.center,e=this.boundingSphere.radius,n=e===0?1:1/e,i=new St;return i.set(n,0,0,-n*t.x,0,n,0,-n*t.y,0,0,n,-n*t.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){const t=new E,e=new E;for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=this.vertices[r.a],o=this.vertices[r.b],a=this.vertices[r.c];t.subVectors(a,o),e.subVectors(s,o),t.cross(e),t.normalize(),r.normal.copy(t)}},computeVertexNormals:function(t=!0){const e=new Array(this.vertices.length);for(let n=0,i=this.vertices.length;n<i;n++)e[n]=new E;if(t){const n=new E,i=new E;for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=this.vertices[o.a],c=this.vertices[o.b],l=this.vertices[o.c];n.subVectors(l,c),i.subVectors(a,c),n.cross(i),e[o.a].add(n),e[o.b].add(n),e[o.c].add(n)}}else{this.computeFaceNormals();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];e[r.a].add(r.normal),e[r.b].add(r.normal),e[r.c].add(r.normal)}}for(let n=0,i=this.vertices.length;n<i;n++)e[n].normalize();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=r.vertexNormals;s.length===3?(s[0].copy(e[r.a]),s[1].copy(e[r.b]),s[2].copy(e[r.c])):(s[0]=e[r.a].clone(),s[1]=e[r.b].clone(),s[2]=e[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let t=0,e=this.faces.length;t<e;t++){const n=this.faces[t],i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let e=0,n=this.faces.length;e<n;e++){const i=this.faces[e];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,s=i.vertexNormals.length;r<s;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}const t=new ye;t.faces=this.faces;for(let e=0,n=this.morphTargets.length;e<n;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];const r=this.morphNormals[e].faceNormals,s=this.morphNormals[e].vertexNormals;for(let o=0,a=this.faces.length;o<a;o++){const c=new E,l={a:new E,b:new E,c:new E};r.push(c),s.push(l)}}const i=this.morphNormals[e];t.vertices=this.morphTargets[e].vertices,t.computeFaceNormals(),t.computeVertexNormals();for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=i.faceNormals[r],c=i.vertexNormals[r];a.copy(o.normal),c.a.copy(o.vertexNormals[0]),c.b.copy(o.vertexNormals[1]),c.c.copy(o.vertexNormals[2])}}for(let e=0,n=this.faces.length;e<n;e++){const i=this.faces[e];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.setFromPoints(this.vertices)},merge:function(t,e,n=0){if(!(t&&t.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",t);return}let i;const r=this.vertices.length,s=this.vertices,o=t.vertices,a=this.faces,c=t.faces,l=this.colors,f=t.colors;e!==void 0&&(i=new ce().getNormalMatrix(e));for(let h=0,d=o.length;h<d;h++){const p=o[h].clone();e!==void 0&&p.applyMatrix4(e),s.push(p)}for(let h=0,d=f.length;h<d;h++)l.push(f[h].clone());for(let h=0,d=c.length;h<d;h++){const u=c[h];let p,v;const y=u.vertexNormals,g=u.vertexColors,m=new js(u.a+r,u.b+r,u.c+r);m.normal.copy(u.normal),i!==void 0&&m.normal.applyMatrix3(i).normalize();for(let S=0,T=y.length;S<T;S++)p=y[S].clone(),i!==void 0&&p.applyMatrix3(i).normalize(),m.vertexNormals.push(p);m.color.copy(u.color);for(let S=0,T=g.length;S<T;S++)v=g[S],m.vertexColors.push(v.clone());m.materialIndex=u.materialIndex+n,a.push(m)}for(let h=0,d=t.faceVertexUvs.length;h<d;h++){const u=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,v=u.length;p<v;p++){const y=u[p],g=[];for(let m=0,S=y.length;m<S;m++)g.push(y[m].clone());this.faceVertexUvs[h].push(g)}}},mergeMesh:function(t){if(!(t&&t.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",t);return}t.matrixAutoUpdate&&t.updateMatrix(),this.merge(t.geometry,t.matrix)},mergeVertices:function(t=4){const e={},n=[],i=[],r=Math.pow(10,t);for(let a=0,c=this.vertices.length;a<c;a++){const l=this.vertices[a],f=Math.round(l.x*r)+"_"+Math.round(l.y*r)+"_"+Math.round(l.z*r);e[f]===void 0?(e[f]=a,n.push(this.vertices[a]),i[a]=n.length-1):i[a]=i[e[f]]}const s=[];for(let a=0,c=this.faces.length;a<c;a++){const l=this.faces[a];l.a=i[l.a],l.b=i[l.b],l.c=i[l.c];const f=[l.a,l.b,l.c];for(let h=0;h<3;h++)if(f[h]===f[(h+1)%3]){s.push(a);break}}for(let a=s.length-1;a>=0;a--){const c=s[a];this.faces.splice(c,1);for(let l=0,f=this.faceVertexUvs.length;l<f;l++)this.faceVertexUvs[l].splice(c,1)}const o=this.vertices.length-n.length;return this.vertices=n,o},setFromPoints:function(t){this.vertices=[];for(let e=0,n=t.length;e<n;e++){const i=t[e];this.vertices.push(new E(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){const t=this.faces,e=t.length;for(let a=0;a<e;a++)t[a]._id=a;function n(a,c){return a.materialIndex-c.materialIndex}t.sort(n);const i=this.faceVertexUvs[0],r=this.faceVertexUvs[1];let s,o;i&&i.length===e&&(s=[]),r&&r.length===e&&(o=[]);for(let a=0;a<e;a++){const c=t[a]._id;s&&s.push(i[c]),o&&o.push(r[c])}s&&(this.faceVertexUvs[0]=s),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){const t={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.parameters!==void 0){const u=this.parameters;for(const p in u)u[p]!==void 0&&(t[p]=u[p]);return t}const e=[];for(let u=0;u<this.vertices.length;u++){const p=this.vertices[u];e.push(p.x,p.y,p.z)}const n=[],i=[],r={},s=[],o={},a=[],c={};for(let u=0;u<this.faces.length;u++){const p=this.faces[u],v=!0,y=!1,g=this.faceVertexUvs[0][u]!==void 0,m=p.normal.length()>0,S=p.vertexNormals.length>0,T=p.color.r!==1||p.color.g!==1||p.color.b!==1,M=p.vertexColors.length>0;let x=0;if(x=l(x,0,0),x=l(x,1,v),x=l(x,2,y),x=l(x,3,g),x=l(x,4,m),x=l(x,5,S),x=l(x,6,T),x=l(x,7,M),n.push(x),n.push(p.a,p.b,p.c),n.push(p.materialIndex),g){const A=this.faceVertexUvs[0][u];n.push(d(A[0]),d(A[1]),d(A[2]))}if(m&&n.push(f(p.normal)),S){const A=p.vertexNormals;n.push(f(A[0]),f(A[1]),f(A[2]))}if(T&&n.push(h(p.color)),M){const A=p.vertexColors;n.push(h(A[0]),h(A[1]),h(A[2]))}}function l(u,p,v){return v?u|1<<p:u&~(1<<p)}function f(u){const p=u.x.toString()+u.y.toString()+u.z.toString();return r[p]!==void 0||(r[p]=i.length/3,i.push(u.x,u.y,u.z)),r[p]}function h(u){const p=u.r.toString()+u.g.toString()+u.b.toString();return o[p]!==void 0||(o[p]=s.length,s.push(u.getHex())),o[p]}function d(u){const p=u.x.toString()+u.y.toString();return c[p]!==void 0||(c[p]=a.length/2,a.push(u.x,u.y)),c[p]}return t.data={},t.data.vertices=e,t.data.normals=i,s.length>0&&(t.data.colors=s),a.length>0&&(t.data.uvs=[a]),t.data.faces=n,t},clone:function(){return new ye().copy(this)},copy:function(t){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=t.name;const e=t.vertices;for(let h=0,d=e.length;h<d;h++)this.vertices.push(e[h].clone());const n=t.colors;for(let h=0,d=n.length;h<d;h++)this.colors.push(n[h].clone());const i=t.faces;for(let h=0,d=i.length;h<d;h++)this.faces.push(i[h].clone());for(let h=0,d=t.faceVertexUvs.length;h<d;h++){const u=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,v=u.length;p<v;p++){const y=u[p],g=[];for(let m=0,S=y.length;m<S;m++){const T=y[m];g.push(T.clone())}this.faceVertexUvs[h].push(g)}}const r=t.morphTargets;for(let h=0,d=r.length;h<d;h++){const u={};if(u.name=r[h].name,r[h].vertices!==void 0){u.vertices=[];for(let p=0,v=r[h].vertices.length;p<v;p++)u.vertices.push(r[h].vertices[p].clone())}if(r[h].normals!==void 0){u.normals=[];for(let p=0,v=r[h].normals.length;p<v;p++)u.normals.push(r[h].normals[p].clone())}this.morphTargets.push(u)}const s=t.morphNormals;for(let h=0,d=s.length;h<d;h++){const u={};if(s[h].vertexNormals!==void 0){u.vertexNormals=[];for(let p=0,v=s[h].vertexNormals.length;p<v;p++){const y=s[h].vertexNormals[p],g={};g.a=y.a.clone(),g.b=y.b.clone(),g.c=y.c.clone(),u.vertexNormals.push(g)}}if(s[h].faceNormals!==void 0){u.faceNormals=[];for(let p=0,v=s[h].faceNormals.length;p<v;p++)u.faceNormals.push(s[h].faceNormals[p].clone())}this.morphNormals.push(u)}const o=t.skinWeights;for(let h=0,d=o.length;h<d;h++)this.skinWeights.push(o[h].clone());const a=t.skinIndices;for(let h=0,d=a.length;h<d;h++)this.skinIndices.push(a[h].clone());const c=t.lineDistances;for(let h=0,d=c.length;h<d;h++)this.lineDistances.push(c[h]);const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.elementsNeedUpdate=t.elementsNeedUpdate,this.verticesNeedUpdate=t.verticesNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.lineDistancesNeedUpdate=t.lineDistancesNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});new E;new E;new E;new ee;const gm={triangulate:function(t,e,n){n=n||2;const i=e&&e.length,r=i?e[0]*n:t.length;let s=qc(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,f,h,d,u;if(i&&(s=bm(t,e,s,n)),t.length>80*n){a=l=t[0],c=f=t[1];for(let p=n;p<r;p+=n)h=t[p],d=t[p+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>f&&(f=d);u=Math.max(l-a,f-c),u=u!==0?1/u:0}return Zi(s,o,n,a,c,u),o}};function qc(t,e,n,i,r){let s,o;if(r===Im(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Ja(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Ja(s,t[s],t[s+1],o);return o&&ls(o,o.next)&&(Qi(o),o=o.next),o}function mn(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(ls(n,n.next)||Wt(n.prev,n,n.next)===0)){if(Qi(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Zi(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Tm(t,i,r,s);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,s?ym(t,i,r,s):vm(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),Qi(t),t=l.next,a=l.next;continue}if(t=l,t===a){o?o===1?(t=xm(mn(t),e,n),Zi(t,e,n,i,r,s,2)):o===2&&_m(t,e,n,i,r,s):Zi(mn(t),e,n,i,r,s,1);break}}}function vm(t){const e=t.prev,n=t,i=t.next;if(Wt(e,n,i)>=0)return!1;let r=t.next.next;for(;r!==t.prev;){if(ni(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&Wt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function ym(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Wt(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,f=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=so(a,c,e,n,i),d=so(l,f,e,n,i);let u=t.prevZ,p=t.nextZ;for(;u&&u.z>=h&&p&&p.z<=d;){if(u!==t.prev&&u!==t.next&&ni(r.x,r.y,s.x,s.y,o.x,o.y,u.x,u.y)&&Wt(u.prev,u,u.next)>=0||(u=u.prevZ,p!==t.prev&&p!==t.next&&ni(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Wt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;u&&u.z>=h;){if(u!==t.prev&&u!==t.next&&ni(r.x,r.y,s.x,s.y,o.x,o.y,u.x,u.y)&&Wt(u.prev,u,u.next)>=0)return!1;u=u.prevZ}for(;p&&p.z<=d;){if(p!==t.prev&&p!==t.next&&ni(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function xm(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!ls(r,s)&&Xc(r,i,i.next,s)&&Ji(r,s)&&Ji(s,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(s.i/n),Qi(i),Qi(i.next),i=t=s),i=i.next}while(i!==t);return mn(i)}function _m(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cm(o,a)){let c=Yc(o,a);o=mn(o,o.next),c=mn(c,c.next),Zi(o,e,n,i,r,s),Zi(c,e,n,i,r,s);return}a=a.next}o=o.next}while(o!==t)}function bm(t,e,n,i){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:t.length,l=qc(t,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(Lm(l));for(r.sort(Mm),s=0;s<r.length;s++)wm(r[s],n),n=mn(n,n.next);return n}function Mm(t,e){return t.x-e.x}function wm(t,e){if(e=Sm(t,e),e){const n=Yc(e,t);mn(e,e.next),mn(n,n.next)}}function Sm(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const d=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>s){if(s=d,d===i){if(r===n.y)return n;if(r===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===s)return o;const a=o,c=o.x,l=o.y;let f=1/0,h;n=o;do i>=n.x&&n.x>=c&&i!==n.x&&ni(r<l?i:s,r,c,l,r<l?s:i,r,n.x,n.y)&&(h=Math.abs(r-n.y)/(i-n.x),Ji(n,t)&&(h<f||h===f&&(n.x>o.x||n.x===o.x&&Em(o,n)))&&(o=n,f=h)),n=n.next;while(n!==a);return o}function Em(t,e){return Wt(t.prev,t,e.prev)<0&&Wt(e.next,t,t.next)<0}function Tm(t,e,n,i){let r=t;do r.z===null&&(r.z=so(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Am(r)}function Am(t){let e,n,i,r,s,o,a,c,l=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(o>1);return t}function so(t,e,n,i,r){return t=32767*(t-n)*r,e=32767*(e-i)*r,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Lm(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function ni(t,e,n,i,r,s,o,a){return(r-o)*(e-a)-(t-o)*(s-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function Cm(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Rm(t,e)&&(Ji(t,e)&&Ji(e,t)&&Pm(t,e)&&(Wt(t.prev,t,e.prev)||Wt(t,e.prev,e))||ls(t,e)&&Wt(t.prev,t,t.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function ls(t,e){return t.x===e.x&&t.y===e.y}function Xc(t,e,n,i){const r=Fr(Wt(t,e,n)),s=Fr(Wt(t,e,i)),o=Fr(Wt(n,i,t)),a=Fr(Wt(n,i,e));return!!(r!==s&&o!==a||r===0&&Or(t,n,e)||s===0&&Or(t,i,e)||o===0&&Or(n,t,i)||a===0&&Or(n,e,i))}function Or(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Fr(t){return t>0?1:t<0?-1:0}function Rm(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Xc(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ji(t,e){return Wt(t.prev,t,t.next)<0?Wt(t,e,t.next)>=0&&Wt(t,t.prev,e)>=0:Wt(t,e,t.prev)<0||Wt(t,t.next,e)<0}function Pm(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Yc(t,e){const n=new oo(t.i,t.x,t.y),i=new oo(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Ja(t,e,n,i){const r=new oo(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Qi(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function oo(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Im(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}const un={area:function(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5},isClockWise:function(t){return un.area(t)<0},triangulateShape:function(t,e){const n=[],i=[],r=[];Qa(t),$a(n,t);let s=t.length;e.forEach(Qa);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,$a(n,e[a]);const o=gm.triangulate(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function Qa(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function $a(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Zc extends Dt{constructor(e,n){super(),this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Pt(r,3)),this.setAttribute("uv",new Pt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=n.curveSegments!==void 0?n.curveSegments:12,f=n.steps!==void 0?n.steps:1;let h=n.depth!==void 0?n.depth:100,d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,u=n.bevelThickness!==void 0?n.bevelThickness:6,p=n.bevelSize!==void 0?n.bevelSize:u-2,v=n.bevelOffset!==void 0?n.bevelOffset:0,y=n.bevelSegments!==void 0?n.bevelSegments:3;const g=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:Dm;n.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=n.amount);let S,T=!1,M,x,A,U;g&&(S=g.getSpacedPoints(f),T=!0,d=!1,M=g.computeFrenetFrames(f,!1),x=new E,A=new E,U=new E),d||(y=0,u=0,p=0,v=0);const F=a.extractPoints(l);let Y=F.shape;const P=F.holes;if(!un.isClockWise(Y)){Y=Y.reverse();for(let V=0,Z=P.length;V<Z;V++){const Q=P[V];un.isClockWise(Q)&&(P[V]=Q.reverse())}}const I=un.triangulateShape(Y,P),R=Y;for(let V=0,Z=P.length;V<Z;V++){const Q=P[V];Y=Y.concat(Q)}function C(V,Z,Q){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(Q).add(V)}const O=Y.length,G=I.length;function j(V,Z,Q){let ot,rt,w;const b=V.x-Z.x,q=V.y-Z.y,W=Q.x-V.x,L=Q.y-V.y,X=b*b+q*q,nt=b*L-q*W;if(Math.abs(nt)>Number.EPSILON){const ct=Math.sqrt(X),$=Math.sqrt(W*W+L*L),at=Z.x-q/ct,ft=Z.y+b/ct,_t=Q.x-L/$,st=Q.y+W/$,mt=((_t-at)*L-(st-ft)*W)/(b*L-q*W);ot=at+b*mt-V.x,rt=ft+q*mt-V.y;const Vt=ot*ot+rt*rt;if(Vt<=2)return new k(ot,rt);w=Math.sqrt(Vt/2)}else{let ct=!1;b>Number.EPSILON?W>Number.EPSILON&&(ct=!0):b<-Number.EPSILON?W<-Number.EPSILON&&(ct=!0):Math.sign(q)===Math.sign(L)&&(ct=!0),ct?(ot=-q,rt=b,w=Math.sqrt(X)):(ot=b,rt=q,w=Math.sqrt(X/2))}return new k(ot/w,rt/w)}const J=[];for(let V=0,Z=R.length,Q=Z-1,ot=V+1;V<Z;V++,Q++,ot++)Q===Z&&(Q=0),ot===Z&&(ot=0),J[V]=j(R[V],R[Q],R[ot]);const tt=[];let it,gt=J.concat();for(let V=0,Z=P.length;V<Z;V++){const Q=P[V];it=[];for(let ot=0,rt=Q.length,w=rt-1,b=ot+1;ot<rt;ot++,w++,b++)w===rt&&(w=0),b===rt&&(b=0),it[ot]=j(Q[ot],Q[w],Q[b]);tt.push(it),gt=gt.concat(it)}for(let V=0;V<y;V++){const Z=V/y,Q=u*Math.cos(Z*Math.PI/2),ot=p*Math.sin(Z*Math.PI/2)+v;for(let rt=0,w=R.length;rt<w;rt++){const b=C(R[rt],J[rt],ot);ut(b.x,b.y,-Q)}for(let rt=0,w=P.length;rt<w;rt++){const b=P[rt];it=tt[rt];for(let q=0,W=b.length;q<W;q++){const L=C(b[q],it[q],ot);ut(L.x,L.y,-Q)}}}const vt=p+v;for(let V=0;V<O;V++){const Z=d?C(Y[V],gt[V],vt):Y[V];T?(A.copy(M.normals[0]).multiplyScalar(Z.x),x.copy(M.binormals[0]).multiplyScalar(Z.y),U.copy(S[0]).add(A).add(x),ut(U.x,U.y,U.z)):ut(Z.x,Z.y,0)}for(let V=1;V<=f;V++)for(let Z=0;Z<O;Z++){const Q=d?C(Y[Z],gt[Z],vt):Y[Z];T?(A.copy(M.normals[V]).multiplyScalar(Q.x),x.copy(M.binormals[V]).multiplyScalar(Q.y),U.copy(S[V]).add(A).add(x),ut(U.x,U.y,U.z)):ut(Q.x,Q.y,h/f*V)}for(let V=y-1;V>=0;V--){const Z=V/y,Q=u*Math.cos(Z*Math.PI/2),ot=p*Math.sin(Z*Math.PI/2)+v;for(let rt=0,w=R.length;rt<w;rt++){const b=C(R[rt],J[rt],ot);ut(b.x,b.y,h+Q)}for(let rt=0,w=P.length;rt<w;rt++){const b=P[rt];it=tt[rt];for(let q=0,W=b.length;q<W;q++){const L=C(b[q],it[q],ot);T?ut(L.x,L.y+S[f-1].y,S[f-1].x+Q):ut(L.x,L.y,h+Q)}}}Nt(),H();function Nt(){const V=r.length/3;if(d){let Z=0,Q=O*Z;for(let ot=0;ot<G;ot++){const rt=I[ot];Lt(rt[2]+Q,rt[1]+Q,rt[0]+Q)}Z=f+y*2,Q=O*Z;for(let ot=0;ot<G;ot++){const rt=I[ot];Lt(rt[0]+Q,rt[1]+Q,rt[2]+Q)}}else{for(let Z=0;Z<G;Z++){const Q=I[Z];Lt(Q[2],Q[1],Q[0])}for(let Z=0;Z<G;Z++){const Q=I[Z];Lt(Q[0]+O*f,Q[1]+O*f,Q[2]+O*f)}}i.addGroup(V,r.length/3-V,0)}function H(){const V=r.length/3;let Z=0;qt(R,Z),Z+=R.length;for(let Q=0,ot=P.length;Q<ot;Q++){const rt=P[Q];qt(rt,Z),Z+=rt.length}i.addGroup(V,r.length/3-V,1)}function qt(V,Z){let Q=V.length;for(;--Q>=0;){const ot=Q;let rt=Q-1;rt<0&&(rt=V.length-1);for(let w=0,b=f+y*2;w<b;w++){const q=O*w,W=O*(w+1),L=Z+ot+q,X=Z+rt+q,nt=Z+rt+W,ct=Z+ot+W;yt(L,X,nt,ct)}}}function ut(V,Z,Q){c.push(V),c.push(Z),c.push(Q)}function Lt(V,Z,Q){It(V),It(Z),It(Q);const ot=r.length/3,rt=m.generateTopUV(i,r,ot-3,ot-2,ot-1);wt(rt[0]),wt(rt[1]),wt(rt[2])}function yt(V,Z,Q,ot){It(V),It(Z),It(ot),It(Z),It(Q),It(ot);const rt=r.length/3,w=m.generateSideWallUV(i,r,rt-6,rt-3,rt-2,rt-1);wt(w[0]),wt(w[1]),wt(w[3]),wt(w[1]),wt(w[2]),wt(w[3])}function It(V){r.push(c[V*3+0]),r.push(c[V*3+1]),r.push(c[V*3+2])}function wt(V){s.push(V.x),s.push(V.y)}}}toJSON(){const e=Dt.prototype.toJSON.call(this),n=this.parameters.shapes,i=this.parameters.options;return Nm(n,i,e)}}const Dm={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],f=e[r*3+1];return[new k(s,o),new k(a,c),new k(l,f)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],c=e[n*3+2],l=e[i*3],f=e[i*3+1],h=e[i*3+2],d=e[r*3],u=e[r*3+1],p=e[r*3+2],v=e[s*3],y=e[s*3+1],g=e[s*3+2];return Math.abs(a-f)<.01?[new k(o,1-c),new k(l,1-h),new k(d,1-p),new k(v,1-g)]:[new k(a,1-c),new k(f,1-h),new k(u,1-p),new k(y,1-g)]}};function Nm(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Om extends ye{constructor(e,n){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},this.fromBufferGeometry(new Zc(e,n)),this.mergeVertices()}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Fm(n,i,e)}}function Fm(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}function Jr(t,e,n){Dt.call(this),this.type="ParametricBufferGeometry",this.parameters={func:t,slices:e,stacks:n};const i=[],r=[],s=[],o=[],a=1e-5,c=new E,l=new E,f=new E,h=new E,d=new E;t.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const u=e+1;for(let p=0;p<=n;p++){const v=p/n;for(let y=0;y<=e;y++){const g=y/e;t(g,v,l),r.push(l.x,l.y,l.z),g-a>=0?(t(g-a,v,f),h.subVectors(l,f)):(t(g+a,v,f),h.subVectors(f,l)),v-a>=0?(t(g,v-a,f),d.subVectors(l,f)):(t(g,v+a,f),d.subVectors(f,l)),c.crossVectors(h,d).normalize(),s.push(c.x,c.y,c.z),o.push(g,v)}}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=p*u+v,g=p*u+v+1,m=(p+1)*u+v+1,S=(p+1)*u+v;i.push(y,g,S),i.push(g,m,S)}this.setIndex(i),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(s,3)),this.setAttribute("uv",new Pt(o,2))}Jr.prototype=Object.create(Dt.prototype);Jr.prototype.constructor=Jr;function ao(t,e,n){ye.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n},this.fromBufferGeometry(new Jr(t,e,n)),this.mergeVertices()}ao.prototype=Object.create(ye.prototype);ao.prototype.constructor=ao;class Bm extends Dt{constructor(e,n=12){super(),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let f=0;f<e.length;f++)l(e[f]),this.addGroup(a,c,f),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(s,3)),this.setAttribute("uv",new Pt(o,2));function l(f){const h=r.length/3,d=f.extractPoints(n);let u=d.shape;const p=d.holes;un.isClockWise(u)===!1&&(u=u.reverse());for(let y=0,g=p.length;y<g;y++){const m=p[y];un.isClockWise(m)===!0&&(p[y]=m.reverse())}const v=un.triangulateShape(u,p);for(let y=0,g=p.length;y<g;y++){const m=p[y];u=u.concat(m)}for(let y=0,g=u.length;y<g;y++){const m=u[y];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let y=0,g=v.length;y<g;y++){const m=v[y],S=m[0]+h,T=m[1]+h,M=m[2]+h;i.push(S,T,M),c+=3}}}toJSON(){const e=Dt.prototype.toJSON.call(this),n=this.parameters.shapes;return Um(n,e)}}function Um(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class zm extends ye{constructor(e,n){super(),this.type="ShapeGeometry",typeof n=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),n=n.curveSegments),this.parameters={shapes:e,curveSegments:n},this.fromBufferGeometry(new Bm(e,n)),this.mergeVertices()}toJSON(){const e=ye.prototype.toJSON.call(this),n=this.parameters.shapes;return Hm(n,e)}}function Hm(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class Gm extends Dt{constructor(e=1,n=8,i=6,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereBufferGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const f=[],h=new E,d=new E,u=[],p=[],v=[],y=[];for(let g=0;g<=i;g++){const m=[],S=g/i;let T=0;g==0&&o==0?T=.5/n:g==i&&c==Math.PI&&(T=-.5/n);for(let M=0;M<=n;M++){const x=M/n;h.x=-e*Math.cos(r+x*s)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(r+x*s)*Math.sin(o+S*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),y.push(x+T,1-S),m.push(l++)}f.push(m)}for(let g=0;g<i;g++)for(let m=0;m<n;m++){const S=f[g][m+1],T=f[g][m],M=f[g+1][m],x=f[g+1][m+1];(g!==0||o>0)&&u.push(S,T,x),(g!==i-1||c<Math.PI)&&u.push(T,M,x)}this.setIndex(u),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(y,2))}}class km extends ye{constructor(e,n,i,r,s,o,a){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},this.fromBufferGeometry(new Gm(e,n,i,r,s,o,a)),this.mergeVertices()}}function hi(t){pt.call(this),this.type="ShadowMaterial",this.color=new lt(0),this.transparent=!0,this.setValues(t)}hi.prototype=Object.create(pt.prototype);hi.prototype.constructor=hi;hi.prototype.isShadowMaterial=!0;hi.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this};function $i(t){le.call(this,t),this.type="RawShaderMaterial"}$i.prototype=Object.create(le.prototype);$i.prototype.constructor=$i;$i.prototype.isRawShaderMaterial=!0;function Xe(t){pt.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(t)}Xe.prototype=Object.create(pt.prototype);Xe.prototype.constructor=Xe;Xe.prototype.isMeshStandardMaterial=!0;Xe.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.vertexTangents=t.vertexTangents,this};function Rn(t){Xe.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new k(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=Mt.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t)}Rn.prototype=Object.create(Xe.prototype);Rn.prototype.constructor=Rn;Rn.prototype.isMeshPhysicalMaterial=!0;Rn.prototype.copy=function(t){return Xe.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new lt).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this};function Pn(t){pt.call(this),this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ss,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Pn.prototype=Object.create(pt.prototype);Pn.prototype.constructor=Pn;Pn.prototype.isMeshPhongMaterial=!0;Pn.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ui(t){pt.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new lt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ui.prototype=Object.create(pt.prototype);ui.prototype.constructor=ui;ui.prototype.isMeshToonMaterial=!0;ui.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function fi(t){pt.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}fi.prototype=Object.create(pt.prototype);fi.prototype.constructor=fi;fi.prototype.isMeshNormalMaterial=!0;fi.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function di(t){pt.call(this),this.type="MeshLambertMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ss,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}di.prototype=Object.create(pt.prototype);di.prototype.constructor=di;di.prototype.isMeshLambertMaterial=!0;di.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function pi(t){pt.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new lt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vi,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}pi.prototype=Object.create(pt.prototype);pi.prototype.constructor=pi;pi.prototype.isMeshMatcapMaterial=!0;pi.prototype.copy=function(t){return pt.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function mi(t){be.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}mi.prototype=Object.create(be.prototype);mi.prototype.constructor=mi;mi.prototype.isLineDashedMaterial=!0;mi.prototype.copy=function(t){return be.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var Vm=Object.freeze({__proto__:null,ShadowMaterial:hi,SpriteMaterial:Ln,RawShaderMaterial:$i,ShaderMaterial:le,PointsMaterial:Cn,MeshPhysicalMaterial:Rn,MeshStandardMaterial:Xe,MeshPhongMaterial:Pn,MeshToonMaterial:ui,MeshNormalMaterial:fi,MeshLambertMaterial:di,MeshDepthMaterial:pn,MeshDistanceMaterial:Tn,MeshBasicMaterial:Sn,MeshMatcapMaterial:pi,LineDashedMaterial:mi,LineBasicMaterial:be,Material:pt});const kt={arraySlice:function(t,e,n){return kt.isTypedArray(t)?new t.constructor(t.subarray(e,n!==void 0?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){function e(r,s){return t[r]-t[s]}const n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i},sortedArray:function(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*e;for(let c=0;c!==e;++c)r[o++]=t[a+c]}return r},flattenJSON:function(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)},subclip:function(t,e,n,i,r=30){const s=t.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],f=l.getValueSize(),h=[],d=[];for(let u=0;u<l.times.length;++u){const p=l.times[u]*r;if(!(p<n||p>=i)){h.push(l.times[u]);for(let v=0;v<f;++v)d.push(l.values[u*f+v])}}h.length!==0&&(l.times=kt.convertArray(h,l.times.constructor),l.values=kt.convertArray(d,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(t,e=0,n=t,i=30){i<=0&&(i=30);const r=n.tracks.length,s=e/i;for(let o=0;o<r;++o){const a=n.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=t.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let f=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=h/3);let d=0;const u=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=u/3);const p=a.times.length-1;let v;if(s<=a.times[0]){const g=f,m=h-f;v=kt.arraySlice(a.values,g,m)}else if(s>=a.times[p]){const g=p*h+f,m=g+h-f;v=kt.arraySlice(a.values,g,m)}else{const g=a.createInterpolant(),m=f,S=h-f;g.evaluate(s),v=kt.arraySlice(g.resultBuffer,m,S)}c==="quaternion"&&new de().fromArray(v).normalize().conjugate().toArray(v);const y=l.times.length;for(let g=0;g<y;++g){const m=g*u+d;if(c==="quaternion")de.multiplyQuaternionsFlat(l.values,m,v,0,l.values,m);else{const S=u-d*2;for(let T=0;T<S;++T)l.values[m+T]-=v[T]}}}return t.blendMode=Ac,t}};function xe(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n}Object.assign(xe.prototype,{evaluate:function(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let s;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===a)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;break n}break t}for(;n<s;){const o=n+s>>>1;t<e[o]?s=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(xe.prototype,{beforeStart_:xe.prototype.copySampleValue_,afterEnd_:xe.prototype.copySampleValue_});function co(t,e,n,i){xe.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}co.prototype=Object.assign(Object.create(xe.prototype),{constructor:co,DefaultSettings_:{endingStart:Jn,endingEnd:Jn},intervalChanged_:function(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Qn:r=t,o=2*e-n;break;case jr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Qn:s=t,a=2*n-e;break;case jr:s=1,a=n+i[1]-i[0];break;default:s=t-1,a=e}const c=(n-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,u=(n-e)/(i-e),p=u*u,v=p*u,y=-h*v+2*h*p-h*u,g=(1+h)*v+(-1.5-2*h)*p+(-.5+h)*u+1,m=(-1-d)*v+(1.5+d)*p+.5*u,S=d*v-d*p;for(let T=0;T!==o;++T)r[T]=y*s[l+T]+g*s[c+T]+m*s[a+T]+S*s[f+T];return r}});function Qr(t,e,n,i){xe.call(this,t,e,n,i)}Qr.prototype=Object.assign(Object.create(xe.prototype),{constructor:Qr,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=(n-e)/(i-e),f=1-l;for(let h=0;h!==o;++h)r[h]=s[c+h]*f+s[a+h]*l;return r}});function lo(t,e,n,i){xe.call(this,t,e,n,i)}lo.prototype=Object.assign(Object.create(xe.prototype),{constructor:lo,interpolate_:function(t){return this.copySampleValue_(t-1)}});function ie(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=kt.convertArray(e,this.TimeBufferType),this.values=kt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(ie,{toJSON:function(t){const e=t.constructor;let n;if(e.toJSON!==void 0)n=e.toJSON(t);else{n={name:t.name,times:kt.convertArray(t.times,Array),values:kt.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}});Object.assign(ie.prototype,{constructor:ie,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:Gr,InterpolantFactoryMethodDiscrete:function(t){return new lo(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new Qr(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new co(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case Gr:e=this.InterpolantFactoryMethodLinear;break;case fs:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Gr;case this.InterpolantFactoryMethodSmooth:return fs}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this},scale:function(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this},trim:function(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=kt.arraySlice(n,r,s),this.values=kt.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let o=0;o!==r;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),t=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),t=!1;break}s=a}if(i!==void 0&&kt.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t},optimize:function(){const t=kt.arraySlice(this.times),e=kt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===fs,r=t.length-1;let s=1;for(let o=1;o<r;++o){let a=!1;const c=t[o],l=t[o+1];if(c!==l&&(o!==1||c!==c[0]))if(i)a=!0;else{const f=o*n,h=f-n,d=f+n;for(let u=0;u!==n;++u){const p=e[f+u];if(p!==e[h+u]||p!==e[d+u]){a=!0;break}}}if(a){if(o!==s){t[s]=t[o];const f=o*n,h=s*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++s}}if(r>0){t[s]=t[r];for(let o=r*n,a=s*n,c=0;c!==n;++c)e[a+c]=e[o+c];++s}return s!==t.length?(this.times=kt.arraySlice(t,0,s),this.values=kt.arraySlice(e,0,s*n)):(this.times=t,this.values=e),this},clone:function(){const t=kt.arraySlice(this.times,0),e=kt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}});function ho(t,e,n){ie.call(this,t,e,n)}ho.prototype=Object.assign(Object.create(ie.prototype),{constructor:ho,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:Wr,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function uo(t,e,n,i){ie.call(this,t,e,n,i)}uo.prototype=Object.assign(Object.create(ie.prototype),{constructor:uo,ValueTypeName:"color"});function Ki(t,e,n,i){ie.call(this,t,e,n,i)}Ki.prototype=Object.assign(Object.create(ie.prototype),{constructor:Ki,ValueTypeName:"number"});function fo(t,e,n,i){xe.call(this,t,e,n,i)}fo.prototype=Object.assign(Object.create(xe.prototype),{constructor:fo,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e);let c=t*o;for(let l=c+o;c!==l;c+=4)de.slerpFlat(r,0,s,c-o,s,c,a);return r}});function $r(t,e,n,i){ie.call(this,t,e,n,i)}$r.prototype=Object.assign(Object.create(ie.prototype),{constructor:$r,ValueTypeName:"quaternion",DefaultInterpolation:Gr,InterpolantFactoryMethodLinear:function(t){return new fo(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0});function po(t,e,n,i){ie.call(this,t,e,n,i)}po.prototype=Object.assign(Object.create(ie.prototype),{constructor:po,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:Wr,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function tr(t,e,n,i){ie.call(this,t,e,n,i)}tr.prototype=Object.assign(Object.create(ie.prototype),{constructor:tr,ValueTypeName:"vector"});function Ae(t,e=-1,n,i=Lo){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Mt.generateUUID(),this.duration<0&&this.resetDuration()}function Wm(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ki;case"vector":case"vector2":case"vector3":case"vector4":return tr;case"color":return uo;case"quaternion":return $r;case"bool":case"boolean":return ho;case"string":return po}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function jm(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Wm(t.type);if(t.times===void 0){const n=[],i=[];kt.flattenJSON(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(Ae,{parse:function(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let s=0,o=n.length;s!==o;++s)e.push(jm(n[s]).scale(i));const r=new Ae(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r},toJSON:function(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(ie.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){const r=e.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const l=kt.getKeyframeOrder(a);a=kt.sortedArray(a,1,l),c=kt.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new Ki(".morphTargetInfluences["+e[o].name+"]",a,c).scale(1/n))}return new Ae(t,-1,s)},findByName:function(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=t.length;o<a;o++){const c=t[o],l=c.name.match(r);if(l&&l.length>1){const f=l[1];let h=i[f];h||(i[f]=h=[]),h.push(c)}}const s=[];for(const o in i)s.push(Ae.CreateFromMorphTargetSequence(o,i[o],e,n));return s},parseAnimation:function(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,u,p){if(d.length!==0){const v=[],y=[];kt.flattenJSON(d,v,y,u),v.length!==0&&p.push(new f(h,v,y))}},i=[],r=t.name||"default",s=t.fps||30,o=t.blendMode;let a=t.length||-1;const c=t.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let u;for(u=0;u<h.length;u++)if(h[u].morphTargets)for(let p=0;p<h[u].morphTargets.length;p++)d[h[u].morphTargets[p]]=-1;for(const p in d){const v=[],y=[];for(let g=0;g!==h[u].morphTargets.length;++g){const m=h[u];v.push(m.time),y.push(m.morphTarget===p?1:0)}i.push(new Ki(".morphTargetInfluence["+p+"]",v,y))}a=d.length*(s||1)}else{const d=".bones["+e[f].name+"]";n(tr,d+".position",h,"pos",i),n($r,d+".quaternion",h,"rot",i),n(tr,d+".scale",h,"scl",i)}}return i.length===0?null:new Ae(r,a,i,o)}});Object.assign(Ae.prototype,{resetDuration:function(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this},trim:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new Ae(this.name,this.duration,t,this.blendMode)},toJSON:function(){return Ae.toJSON(this)}});const gi={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function qm(t,e,n){const i=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,f){return c.push(l,f),this},this.removeHandler=function(l){const f=c.indexOf(l);return f!==-1&&c.splice(f,2),this},this.getHandler=function(l){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],u=c[f+1];if(d.global&&(d.lastIndex=0),d.test(l))return u}return null}}const Xm=new qm;function Ft(t){this.manager=t!==void 0?t:Xm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Ft.prototype,{load:function(){},loadAsync:function(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});const Te={};function Ye(t){Ft.call(this,t)}Ye.prototype=Object.assign(Object.create(Ft.prototype),{constructor:Ye,load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=gi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;if(Te[t]!==void 0){Te[t].push({onLoad:e,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=t.match(o);let c;if(a){const l=a[1],f=!!a[2];let h=a[3];h=decodeURIComponent(h),f&&(h=atob(h));try{let d;const u=(this.responseType||"").toLowerCase();switch(u){case"arraybuffer":case"blob":const p=new Uint8Array(h.length);for(let y=0;y<h.length;y++)p[y]=h.charCodeAt(y);u==="blob"?d=new Blob([p.buffer],{type:l}):d=p.buffer;break;case"document":d=new DOMParser().parseFromString(h,l);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){e&&e(d),r.manager.itemEnd(t)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{Te[t]=[],Te[t].push({onLoad:e,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",t,!0),c.addEventListener("load",function(l){const f=this.response,h=Te[t];if(delete Te[t],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),gi.add(t,f);for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onLoad&&p.onLoad(f)}r.manager.itemEnd(t)}else{for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),c.addEventListener("progress",function(l){const f=Te[t];for(let h=0,d=f.length;h<d;h++){const u=f[h];u.onProgress&&u.onProgress(l)}},!1),c.addEventListener("error",function(l){const f=Te[t];delete Te[t];for(let h=0,d=f.length;h<d;h++){const u=f[h];u.onError&&u.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),c.addEventListener("abort",function(l){const f=Te[t];delete Te[t];for(let h=0,d=f.length;h<d;h++){const u=f[h];u.onError&&u.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(t),c},setResponseType:function(t){return this.responseType=t,this},setMimeType:function(t){return this.mimeType=t,this}});function Ka(t){Ft.call(this,t)}Ka.prototype=Object.assign(Object.create(Ft.prototype),{constructor:Ka,load:function(t,e,n,i){const r=this,s=new Ye(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e=[];for(let n=0;n<t.length;n++){const i=Ae.parse(t[n]);e.push(i)}return e}});function tc(t){Ft.call(this,t)}tc.prototype=Object.assign(Object.create(Ft.prototype),{constructor:tc,load:function(t,e,n,i){const r=this,s=[],o=new Yi,a=new Ye(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(f){a.load(t[f],function(h){const d=r.parse(h,!0);s[f]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=ne),o.image=s,o.format=d.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let f=0,h=t.length;f<h;++f)l(f);else a.load(t,function(f){const h=r.parse(f,!0);if(h.isCubemap){const d=h.mipmaps.length/h.mipmapCount;for(let u=0;u<d;u++){s[u]={mipmaps:[]};for(let p=0;p<h.mipmapCount;p++)s[u].mipmaps.push(h.mipmaps[u*h.mipmapCount+p]),s[u].format=h.format,s[u].width=h.width,s[u].height=h.height}o.image=s}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=ne),o.format=h.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}});function Kr(t){Ft.call(this,t)}Kr.prototype=Object.assign(Object.create(Ft.prototype),{constructor:Kr,load:function(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=gi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),gi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(l){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}});function mo(t){Ft.call(this,t)}mo.prototype=Object.assign(Object.create(Ft.prototype),{constructor:mo,load:function(t,e,n,i){const r=new dn,s=new Kr(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(c){s.load(t[c],function(l){r.images[c]=l,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)a(c);return r}});function ec(t){Ft.call(this,t)}ec.prototype=Object.assign(Object.create(Ft.prototype),{constructor:ec,load:function(t,e,n,i){const r=this,s=new ci,o=new Ye(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(a){const c=r.parse(a);!c||(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:fe,s.wrapT=c.wrapT!==void 0?c.wrapT:fe,s.magFilter=c.magFilter!==void 0?c.magFilter:ne,s.minFilter=c.minFilter!==void 0?c.minFilter:ne,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=os),c.mipmapCount===1&&(s.minFilter=ne),s.needsUpdate=!0,e&&e(s,c))},n,i),s}});function go(t){Ft.call(this,t)}go.prototype=Object.assign(Object.create(Ft.prototype),{constructor:go,load:function(t,e,n,i){const r=new Ht,s=new Kr(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o;const a=t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0;r.format=a?wn:Le,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}});function ht(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(ht.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)},getPoints:function(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){const t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(t===void 0&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){const n=this.getLengths();let i=0;const r=n.length;let s;e?s=e:s=t*n[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);const l=n[i],h=n[i+1]-l,d=(s-l)/h;return(i+d)/(r-1)},getTangent:function(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new k:new E);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)},computeFrenetFrames:function(t,e){const n=new E,i=[],r=[],s=[],o=new E,a=new St;for(let d=0;d<=t;d++){const u=d/t;i[d]=this.getTangentAt(u,new E),i[d].normalize()}r[0]=new E,s[0]=new E;let c=Number.MAX_VALUE;const l=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const u=Math.acos(Mt.clamp(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(o,u))}s[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Mt.clamp(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let u=1;u<=t;u++)r[u].applyMatrix4(a.makeRotationAxis(i[u],d*u)),s[u].crossVectors(i[u],r[u])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}});function Me(t,e,n,i,r,s,o,a){ht.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}Me.prototype=Object.create(ht.prototype);Me.prototype.constructor=Me;Me.prototype.isEllipseCurve=!0;Me.prototype.getPoint=function(t,e){const n=e||new k,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=a-this.aX,d=c-this.aY;a=h*l-d*f+this.aX,c=h*f+d*l+this.aY}return n.set(a,c)};Me.prototype.copy=function(t){return ht.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};Me.prototype.toJSON=function(){const t=ht.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t};Me.prototype.fromJSON=function(t){return ht.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};function er(t,e,n,i,r,s){Me.call(this,t,e,n,n,i,r,s),this.type="ArcCurve"}er.prototype=Object.create(Me.prototype);er.prototype.constructor=er;er.prototype.isArcCurve=!0;function Co(){let t=0,e=0,n=0,i=0;function r(s,o,a,c){t=s,e=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,f,h){let d=(o-s)/l-(a-s)/(l+f)+(a-o)/f,u=(a-o)/f-(c-o)/(f+h)+(c-a)/h;d*=f,u*=f,r(o,a,d,u)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Br=new E,Us=new Co,zs=new Co,Hs=new Co;function me(t=[],e=!1,n="centripetal",i=.5){ht.call(this),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}me.prototype=Object.create(ht.prototype);me.prototype.constructor=me;me.prototype.isCatmullRomCurve3=!0;me.prototype.getPoint=function(t,e=new E){const n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t;let o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,l;this.closed||o>0?c=i[(o-1)%r]:(Br.subVectors(i[0],i[1]).add(i[0]),c=Br);const f=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?l=i[(o+2)%r]:(Br.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=Br),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let u=Math.pow(c.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(l),d);p<1e-4&&(p=1),u<1e-4&&(u=p),v<1e-4&&(v=p),Us.initNonuniformCatmullRom(c.x,f.x,h.x,l.x,u,p,v),zs.initNonuniformCatmullRom(c.y,f.y,h.y,l.y,u,p,v),Hs.initNonuniformCatmullRom(c.z,f.z,h.z,l.z,u,p,v)}else this.curveType==="catmullrom"&&(Us.initCatmullRom(c.x,f.x,h.x,l.x,this.tension),zs.initCatmullRom(c.y,f.y,h.y,l.y,this.tension),Hs.initCatmullRom(c.z,f.z,h.z,l.z,this.tension));return n.set(Us.calc(a),zs.calc(a),Hs.calc(a)),n};me.prototype.copy=function(t){ht.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};me.prototype.toJSON=function(){const t=ht.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t};me.prototype.fromJSON=function(t){ht.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new E().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};function nc(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,c=t*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*t+n}function Ym(t,e){const n=1-t;return n*n*e}function Zm(t,e){return 2*(1-t)*t*e}function Jm(t,e){return t*t*e}function Hi(t,e,n,i){return Ym(t,e)+Zm(t,n)+Jm(t,i)}function Qm(t,e){const n=1-t;return n*n*n*e}function $m(t,e){const n=1-t;return 3*n*n*t*e}function Km(t,e){return 3*(1-t)*t*t*e}function tg(t,e){return t*t*t*e}function Gi(t,e,n,i,r){return Qm(t,e)+$m(t,n)+Km(t,i)+tg(t,r)}function Oe(t=new k,e=new k,n=new k,i=new k){ht.call(this),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}Oe.prototype=Object.create(ht.prototype);Oe.prototype.constructor=Oe;Oe.prototype.isCubicBezierCurve=!0;Oe.prototype.getPoint=function(t,e=new k){const n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Gi(t,i.x,r.x,s.x,o.x),Gi(t,i.y,r.y,s.y,o.y)),n};Oe.prototype.copy=function(t){return ht.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};Oe.prototype.toJSON=function(){const t=ht.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};Oe.prototype.fromJSON=function(t){return ht.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function Ze(t=new E,e=new E,n=new E,i=new E){ht.call(this),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}Ze.prototype=Object.create(ht.prototype);Ze.prototype.constructor=Ze;Ze.prototype.isCubicBezierCurve3=!0;Ze.prototype.getPoint=function(t,e=new E){const n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Gi(t,i.x,r.x,s.x,o.x),Gi(t,i.y,r.y,s.y,o.y),Gi(t,i.z,r.z,s.z,o.z)),n};Ze.prototype.copy=function(t){return ht.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};Ze.prototype.toJSON=function(){const t=ht.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};Ze.prototype.fromJSON=function(t){return ht.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function ge(t=new k,e=new k){ht.call(this),this.type="LineCurve",this.v1=t,this.v2=e}ge.prototype=Object.create(ht.prototype);ge.prototype.constructor=ge;ge.prototype.isLineCurve=!0;ge.prototype.getPoint=function(t,e=new k){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};ge.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};ge.prototype.getTangent=function(t,e){const n=e||new k;return n.copy(this.v2).sub(this.v1).normalize(),n};ge.prototype.copy=function(t){return ht.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};ge.prototype.toJSON=function(){const t=ht.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};ge.prototype.fromJSON=function(t){return ht.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Fe(t=new E,e=new E){ht.call(this),this.type="LineCurve3",this.v1=t,this.v2=e}Fe.prototype=Object.create(ht.prototype);Fe.prototype.constructor=Fe;Fe.prototype.isLineCurve3=!0;Fe.prototype.getPoint=function(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};Fe.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};Fe.prototype.copy=function(t){return ht.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Fe.prototype.toJSON=function(){const t=ht.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Fe.prototype.fromJSON=function(t){return ht.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Be(t=new k,e=new k,n=new k){ht.call(this),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}Be.prototype=Object.create(ht.prototype);Be.prototype.constructor=Be;Be.prototype.isQuadraticBezierCurve=!0;Be.prototype.getPoint=function(t,e=new k){const n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Hi(t,i.x,r.x,s.x),Hi(t,i.y,r.y,s.y)),n};Be.prototype.copy=function(t){return ht.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Be.prototype.toJSON=function(){const t=ht.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Be.prototype.fromJSON=function(t){return ht.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Je(t=new E,e=new E,n=new E){ht.call(this),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}Je.prototype=Object.create(ht.prototype);Je.prototype.constructor=Je;Je.prototype.isQuadraticBezierCurve3=!0;Je.prototype.getPoint=function(t,e=new E){const n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Hi(t,i.x,r.x,s.x),Hi(t,i.y,r.y,s.y),Hi(t,i.z,r.z,s.z)),n};Je.prototype.copy=function(t){return ht.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};Je.prototype.toJSON=function(){const t=ht.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};Je.prototype.fromJSON=function(t){return ht.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Ue(t=[]){ht.call(this),this.type="SplineCurve",this.points=t}Ue.prototype=Object.create(ht.prototype);Ue.prototype.constructor=Ue;Ue.prototype.isSplineCurve=!0;Ue.prototype.getPoint=function(t,e=new k){const n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],l=i[s>i.length-2?i.length-1:s+1],f=i[s>i.length-3?i.length-1:s+2];return n.set(nc(o,a.x,c.x,l.x,f.x),nc(o,a.y,c.y,l.y,f.y)),n};Ue.prototype.copy=function(t){ht.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this};Ue.prototype.toJSON=function(){const t=ht.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t};Ue.prototype.fromJSON=function(t){ht.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new k().fromArray(i))}return this};var eg=Object.freeze({__proto__:null,ArcCurve:er,CatmullRomCurve3:me,CubicBezierCurve:Oe,CubicBezierCurve3:Ze,EllipseCurve:Me,LineCurve:ge,LineCurve3:Fe,QuadraticBezierCurve:Be,QuadraticBezierCurve3:Je,SplineCurve:Ue});function ln(){ht.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}ln.prototype=Object.assign(Object.create(ht.prototype),{constructor:ln,add:function(t){this.curves.push(t)},closePath:function(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new ge(e,t))},getPoint:function(t){const e=t*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=e){const r=n[i]-e,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){const t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s&&s.isEllipseCurve?t*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?t*s.points.length:t,a=s.getPoints(o);for(let c=0;c<a.length;c++){const l=a[c];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e},copy:function(t){ht.prototype.copy.call(this,t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){const t=ht.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t},fromJSON:function(t){ht.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new eg[i.type]().fromJSON(i))}return this}});function De(t){ln.call(this),this.type="Path",this.currentPoint=new k,t&&this.setFromPoints(t)}De.prototype=Object.assign(Object.create(ln.prototype),{constructor:De,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this},moveTo:function(t,e){return this.currentPoint.set(t,e),this},lineTo:function(t,e){const n=new ge(this.currentPoint.clone(),new k(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this},quadraticCurveTo:function(t,e,n,i){const r=new Be(this.currentPoint.clone(),new k(t,e),new k(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(t,e,n,i,r,s){const o=new Oe(this.currentPoint.clone(),new k(t,e),new k(n,i),new k(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(t){const e=[this.currentPoint.clone()].concat(t),n=new Ue(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this},arc:function(t,e,n,i,r,s){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+o,e+a,n,i,r,s),this},absarc:function(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this},ellipse:function(t,e,n,i,r,s,o,a){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,i,r,s,o,a),this},absellipse:function(t,e,n,i,r,s,o,a){const c=new Me(t,e,n,i,r,s,o,a);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(t){return ln.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){const t=ln.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return ln.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}});function ri(t){De.call(this,t),this.uuid=Mt.generateUUID(),this.type="Shape",this.holes=[]}ri.prototype=Object.assign(Object.create(De.prototype),{constructor:ri,getPointsHoles:function(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){De.prototype.copy.call(this,t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this},toJSON:function(){const t=De.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t},fromJSON:function(t){De.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new De().fromJSON(i))}return this}});function Gt(t,e=1){dt.call(this),this.type="Light",this.color=new lt(t),this.intensity=e}Gt.prototype=Object.assign(Object.create(dt.prototype),{constructor:Gt,isLight:!0,copy:function(t){return dt.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){const e=dt.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}});function ic(t,e,n){Gt.call(this,t,n),this.type="HemisphereLight",this.position.copy(dt.DefaultUp),this.updateMatrix(),this.groundColor=new lt(e)}ic.prototype=Object.assign(Object.create(Gt.prototype),{constructor:ic,isHemisphereLight:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}});function Qe(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new k(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new k(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}Object.assign(Qe.prototype,{_projScreenMatrix:new St,_lightPositionWorld:new E,_lookTarget:new E,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){const e=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(t.matrixWorld),e.position.copy(s),r.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(r),e.updateMatrixWorld(),i.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}});function vo(){Qe.call(this,new Jt(50,1,.5,500)),this.focus=1}vo.prototype=Object.assign(Object.create(Qe.prototype),{constructor:vo,isSpotLightShadow:!0,updateMatrices:function(t){const e=this.camera,n=Mt.RAD2DEG*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),Qe.prototype.updateMatrices.call(this,t)}});function rc(t,e,n,i,r,s){Gt.call(this,t,e),this.type="SpotLight",this.position.copy(dt.DefaultUp),this.updateMatrix(),this.target=new dt,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new vo}rc.prototype=Object.assign(Object.create(Gt.prototype),{constructor:rc,isSpotLight:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function yo(){Qe.call(this,new Jt(90,1,.5,500)),this._frameExtents=new k(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}yo.prototype=Object.assign(Object.create(Qe.prototype),{constructor:yo,isPointLightShadow:!0,updateMatrices:function(t,e=0){const n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(t.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function sc(t,e,n,i){Gt.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new yo}sc.prototype=Object.assign(Object.create(Gt.prototype),{constructor:sc,isPointLight:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}});function xo(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){fn.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}xo.prototype=Object.assign(Object.create(fn.prototype),{constructor:xo,isOrthographicCamera:!0,copy:function(t,e){return fn.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){const e=dt.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}});function _o(){Qe.call(this,new xo(-5,5,5,-5,.5,500))}_o.prototype=Object.assign(Object.create(Qe.prototype),{constructor:_o,isDirectionalLightShadow:!0,updateMatrices:function(t){Qe.prototype.updateMatrices.call(this,t)}});function oc(t,e){Gt.call(this,t,e),this.type="DirectionalLight",this.position.copy(dt.DefaultUp),this.updateMatrix(),this.target=new dt,this.shadow=new _o}oc.prototype=Object.assign(Object.create(Gt.prototype),{constructor:oc,isDirectionalLight:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function ac(t,e){Gt.call(this,t,e),this.type="AmbientLight"}ac.prototype=Object.assign(Object.create(Gt.prototype),{constructor:ac,isAmbientLight:!0});function cc(t,e,n,i){Gt.call(this,t,e),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}cc.prototype=Object.assign(Object.create(Gt.prototype),{constructor:cc,isRectAreaLight:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){const e=Gt.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}});class ng{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let n=0;n<9;n++)this.coefficients[n].copy(e[n]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(e){for(let n=0;n<9;n++)this.coefficients[n].add(e.coefficients[n]);return this}addScaledSH(e,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],n);return this}scale(e){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(e);return this}lerp(e,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],n);return this}equals(e){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(e.coefficients[n]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,n+r*3);return this}toArray(e=[],n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,n+r*3);return e}static getBasisAt(e,n){const i=e.x,r=e.y,s=e.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}}function Ne(t,e){Gt.call(this,void 0,e),this.type="LightProbe",this.sh=t!==void 0?t:new ng}Ne.prototype=Object.assign(Object.create(Gt.prototype),{constructor:Ne,isLightProbe:!0,copy:function(t){return Gt.prototype.copy.call(this,t),this.sh.copy(t.sh),this},fromJSON:function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},toJSON:function(t){const e=Gt.prototype.toJSON.call(this,t);return e.object.sh=this.sh.toArray(),e}});function lc(t){Ft.call(this,t),this.textures={}}lc.prototype=Object.assign(Object.create(Ft.prototype),{constructor:lc,load:function(t,e,n,i){const r=this,s=new Ye(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const i=new Vm[t.type];if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=new lt().setHex(t.sheen)),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==1&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.skinning!==void 0&&(i.skinning=t.skinning),t.morphTargets!==void 0&&(i.morphTargets=t.morphTargets),t.morphNormals!==void 0&&(i.morphNormals=t.morphNormals),t.dithering!==void 0&&(i.dithering=t.dithering),t.vertexTangents!==void 0&&(i.vertexTangents=t.vertexTangents),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const s=t.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new lt().setHex(s.value);break;case"v2":i.uniforms[r].value=new k().fromArray(s.value);break;case"v3":i.uniforms[r].value=new E().fromArray(s.value);break;case"v4":i.uniforms[r].value=new Ot().fromArray(s.value);break;case"m3":i.uniforms[r].value=new ce().fromArray(s.value);break;case"m4":i.uniforms[r].value=new St().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.shading!==void 0&&(i.flatShading=t.shading===1),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new k().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new k().fromArray(t.clearcoatNormalScale)),t.transmission!==void 0&&(i.transmission=t.transmission),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),i},setTextures:function(t){return this.textures=t,this}});const ig={decodeText:function(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}},extractUrlBase:function(t){const e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}};function ts(){Dt.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}ts.prototype=Object.assign(Object.create(Dt.prototype),{constructor:ts,isInstancedBufferGeometry:!0,copy:function(t){return Dt.prototype.copy.call(this,t),this.instanceCount=t.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const t=Dt.prototype.toJSON.call(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}});function bo(t,e,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),xt.call(this,t,e,n),this.meshPerAttribute=i||1}bo.prototype=Object.assign(Object.create(xt.prototype),{constructor:bo,isInstancedBufferAttribute:!0,copy:function(t){return xt.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){const t=xt.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}});function hc(t){Ft.call(this,t)}hc.prototype=Object.assign(Object.create(Ft.prototype),{constructor:hc,load:function(t,e,n,i){const r=this,s=new Ye(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e={},n={};function i(d,u){if(e[u]!==void 0)return e[u];const v=d.interleavedBuffers[u],y=r(d,v.buffer),g=gr(v.type,y),m=new ve(g,v.stride);return m.uuid=v.uuid,e[u]=m,m}function r(d,u){if(n[u]!==void 0)return n[u];const v=d.arrayBuffers[u],y=new Uint32Array(v).buffer;return n[u]=y,y}const s=t.isInstancedBufferGeometry?new ts:new Dt,o=t.data.index;if(o!==void 0){const d=gr(o.type,o.array);s.setIndex(new xt(d,1))}const a=t.data.attributes;for(const d in a){const u=a[d];let p;if(u.isInterleavedBufferAttribute){const v=i(t.data,u.data);p=new An(v,u.itemSize,u.offset,u.normalized)}else{const v=gr(u.type,u.array),y=u.isInstancedBufferAttribute?bo:xt;p=new y(v,u.itemSize,u.normalized)}u.name!==void 0&&(p.name=u.name),s.setAttribute(d,p)}const c=t.data.morphAttributes;if(c)for(const d in c){const u=c[d],p=[];for(let v=0,y=u.length;v<y;v++){const g=u[v];let m;if(g.isInterleavedBufferAttribute){const S=i(t.data,g.data);m=new An(S,g.itemSize,g.offset,g.normalized)}else{const S=gr(g.type,g.array);m=new xt(S,g.itemSize,g.normalized)}g.name!==void 0&&(m.name=g.name),p.push(m)}s.morphAttributes[d]=p}t.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const f=t.data.groups||t.data.drawcalls||t.data.offsets;if(f!==void 0)for(let d=0,u=f.length;d!==u;++d){const p=f[d];s.addGroup(p.start,p.count,p.materialIndex)}const h=t.data.boundingSphere;if(h!==void 0){const d=new E;h.center!==void 0&&d.fromArray(h.center),s.boundingSphere=new vn(d,h.radius)}return t.name&&(s.name=t.name),t.userData&&(s.userData=t.userData),s}});function uc(t){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Ft.call(this,t),this.options={premultiplyAlpha:"none"}}uc.prototype=Object.assign(Object.create(Ft.prototype),{constructor:uc,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=gi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(t,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){gi.add(t,a),e&&e(a),r.manager.itemEnd(t)}).catch(function(a){i&&i(a),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}});function Jc(){this.type="ShapePath",this.color=new lt,this.subPaths=[],this.currentPath=null}Object.assign(Jc.prototype,{moveTo:function(t,e){return this.currentPath=new De,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this},lineTo:function(t,e){return this.currentPath.lineTo(t,e),this},quadraticCurveTo:function(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this},bezierCurveTo:function(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,n,i,r,s),this},splineThru:function(t){return this.currentPath.splineThru(t),this},toShapes:function(t,e){function n(g){const m=[];for(let S=0,T=g.length;S<T;S++){const M=g[S],x=new ri;x.curves=M.curves,m.push(x)}return m}function i(g,m){const S=m.length;let T=!1;for(let M=S-1,x=0;x<S;M=x++){let A=m[M],U=m[x],F=U.x-A.x,Y=U.y-A.y;if(Math.abs(Y)>Number.EPSILON){if(Y<0&&(A=m[x],F=-F,U=m[M],Y=-Y),g.y<A.y||g.y>U.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{const P=Y*(g.x-A.x)-F*(g.y-A.y);if(P===0)return!0;if(P<0)continue;T=!T}}else{if(g.y!==A.y)continue;if(U.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=U.x)return!0}}return T}const r=un.isClockWise,s=this.subPaths;if(s.length===0)return[];if(e===!0)return n(s);let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new ri,c.curves=a.curves,l.push(c),l;let f=!r(s[0].getPoints());f=t?!f:f;const h=[],d=[];let u=[],p=0,v;d[p]=void 0,u[p]=[];for(let g=0,m=s.length;g<m;g++)a=s[g],v=a.getPoints(),o=r(v),o=t?!o:o,o?(!f&&d[p]&&p++,d[p]={s:new ri,p:v},d[p].s.curves=a.curves,f&&p++,u[p]=[]):u[p].push({h:a,p:v[0]});if(!d[0])return n(s);if(d.length>1){let g=!1;const m=[];for(let S=0,T=d.length;S<T;S++)h[S]=[];for(let S=0,T=d.length;S<T;S++){const M=u[S];for(let x=0;x<M.length;x++){const A=M[x];let U=!0;for(let F=0;F<d.length;F++)i(A.p,d[F].p)&&(S!==F&&m.push({froms:S,tos:F,hole:x}),U?(U=!1,h[F].push(A)):g=!0);U&&h[S].push(A)}}m.length>0&&(g||(u=h))}let y;for(let g=0,m=d.length;g<m;g++){c=d[g].s,l.push(c),y=u[g];for(let S=0,T=y.length;S<T;S++)c.holes.push(y[S].h)}return l}});function Qc(t){this.type="Font",this.data=t}Object.assign(Qc.prototype,{isFont:!0,generateShapes:function(t,e=100){const n=[],i=rg(t,e,this.data);for(let r=0,s=i.length;r<s;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}});function rg(t,e,n){const i=Array.from?Array.from(t):String(t).split(""),r=e/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const f=i[l];if(f===`
`)a=0,c-=s;else{const h=sg(f,r,a,c,n);a+=h.offsetX,o.push(h.path)}}return o}function sg(t,e,n,i,r){const s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}const o=new Jc;let a,c,l,f,h,d,u,p;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let y=0,g=v.length;y<g;)switch(v[y++]){case"m":a=v[y++]*e+n,c=v[y++]*e+i,o.moveTo(a,c);break;case"l":a=v[y++]*e+n,c=v[y++]*e+i,o.lineTo(a,c);break;case"q":l=v[y++]*e+n,f=v[y++]*e+i,h=v[y++]*e+n,d=v[y++]*e+i,o.quadraticCurveTo(h,d,l,f);break;case"b":l=v[y++]*e+n,f=v[y++]*e+i,h=v[y++]*e+n,d=v[y++]*e+i,u=v[y++]*e+n,p=v[y++]*e+i,o.bezierCurveTo(h,d,u,p,l,f);break}}return{offsetX:s.ha*e,path:o}}function fc(t){Ft.call(this,t)}fc.prototype=Object.assign(Object.create(Ft.prototype),{constructor:fc,load:function(t,e,n,i){const r=this,s=new Ye(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){let a;try{a=JSON.parse(o)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}const c=r.parse(a);e&&e(c)},n,i)},parse:function(t){return new Qc(t)}});let Ur;const og={getContext:function(){return Ur===void 0&&(Ur=new(window.AudioContext||window.webkitAudioContext)),Ur},setContext:function(t){Ur=t}};function dc(t){Ft.call(this,t)}dc.prototype=Object.assign(Object.create(Ft.prototype),{constructor:dc,load:function(t,e,n,i){const r=this,s=new Ye(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{const a=o.slice(0);og.getContext().decodeAudioData(a,function(l){e(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)}});function pc(t,e,n){Ne.call(this,void 0,n);const i=new lt().set(t),r=new lt().set(e),s=new E(i.r,i.g,i.b),o=new E(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}pc.prototype=Object.assign(Object.create(Ne.prototype),{constructor:pc,isHemisphereLightProbe:!0,copy:function(t){return Ne.prototype.copy.call(this,t),this},toJSON:function(t){return Ne.prototype.toJSON.call(this,t)}});function mc(t,e){Ne.call(this,void 0,e);const n=new lt().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}mc.prototype=Object.assign(Object.create(Ne.prototype),{constructor:mc,isAmbientLightProbe:!0,copy:function(t){return Ne.prototype.copy.call(this,t),this},toJSON:function(t){return Ne.prototype.toJSON.call(this,t)}});const gc=new St,vc=new St;function ag(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Jt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Jt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(ag.prototype,{update:function(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep;const i=t.projectionMatrix.clone(),r=e.eyeSep/2,s=r*e.near/e.focus,o=e.near*Math.tan(Mt.DEG2RAD*e.fov*.5)/e.zoom;let a,c;vc.elements[12]=-r,gc.elements[12]=r,a=-o*e.aspect+s,c=o*e.aspect+s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-o*e.aspect-s,c=o*e.aspect-s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(vc),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(gc)}});function $c(t,e,n){this.binding=t,this.valueSize=n;let i,r,s;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign($c.prototype,{accumulate:function(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=e}else{s+=e;const o=e/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t},apply:function(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const a=e*this._origIndex;this._mixBufferRegion(n,i,a,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let a=e,c=e+e;a!==c;++a)if(n[a]!==n[a+e]){o.setValue(n,i);break}},saveOriginalState:function(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)},_setAdditiveIdentityNumeric:function(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]},_select:function(t,e,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]},_slerp:function(t,e,n,i){de.slerpFlat(t,e,t,e,t,n,i)},_slerpAdditive:function(t,e,n,i,r){const s=this._workIndex*r;de.multiplyQuaternionsFlat(t,s,t,e,t,n),de.slerpFlat(t,e,t,e,t,s,i)},_lerp:function(t,e,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]*s+t[n+o]*i}},_lerpAdditive:function(t,e,n,i,r){for(let s=0;s!==r;++s){const o=e+s;t[o]=t[o]+t[n+s]*i}}});const Ro="\\[\\]\\.:\\/",cg=new RegExp("["+Ro+"]","g"),Po="[^"+Ro+"]",lg="[^"+Ro.replace("\\.","")+"]",hg=/((?:WC+[\/:])*)/.source.replace("WC",Po),ug=/(WCOD+)?/.source.replace("WCOD",lg),fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Po),dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Po),pg=new RegExp("^"+hg+ug+fg+dg+"$"),mg=["material","materials","bones"];function Kc(t,e,n){const i=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}Object.assign(Kc.prototype,{getValue:function(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)},setValue:function(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)},bind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}});function se(t,e,n){this.path=e,this.parsedPath=n||se.parseTrackName(e),this.node=se.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}Object.assign(se,{Composite:Kc,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new se.Composite(t,e,n):new se(t,e,n)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(cg,"")},parseTrackName:function(t){const e=pg.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);mg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n},findNode:function(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===e||o.uuid===e)return o;const a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}});Object.assign(se.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,n){e[n]=this.node[this.propertyName]},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]},function(e,n){e[n]=this.resolvedProperty[this.propertyIndex]},function(e,n){this.resolvedProperty.toArray(e,n)}],SetterByBindingTypeAndVersioning:[[function(e,n){this.targetObject[this.propertyName]=e[n]},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty[this.propertyIndex]=e[n]},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty.fromArray(e,n)},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,n){this.bind(),this.getValue(e,n)},setValue:function(e,n){this.bind(),this.setValue(e,n)},bind:function(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=se.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const s=t[i];if(s===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(se.prototype,{_getValue_unbound:se.prototype.getValue,_setValue_unbound:se.prototype.setValue});function gg(){this.uuid=Mt.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}Object.assign(gg.prototype,{isAnimationObjectGroup:!0,add:function(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let o,a=t.length,c=this.nCachedObjects_;for(let l=0,f=arguments.length;l!==f;++l){const h=arguments[l],d=h.uuid;let u=e[d];if(u===void 0){u=a++,e[d]=u,t.push(h);for(let p=0,v=s;p!==v;++p)r[p].push(new se(h,n[p],i[p]))}else if(u<c){o=t[u];const p=--c,v=t[p];e[v.uuid]=u,t[u]=v,e[d]=p,t[p]=h;for(let y=0,g=s;y!==g;++y){const m=r[y],S=m[p];let T=m[u];m[u]=S,T===void 0&&(T=new se(h,n[y],i[y])),m[p]=T}}else t[u]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const a=arguments[s],c=a.uuid,l=e[c];if(l!==void 0&&l>=r){const f=r++,h=t[f];e[h.uuid]=l,t[l]=h,e[c]=f,t[f]=a;for(let d=0,u=i;d!==u;++d){const p=n[d],v=p[f],y=p[l];p[l]=v,p[f]=y}}}this.nCachedObjects_=r},uncache:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=t.length;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,f=e[l];if(f!==void 0)if(delete e[l],f<r){const h=--r,d=t[h],u=--s,p=t[u];e[d.uuid]=f,t[f]=d,e[p.uuid]=h,t[h]=p,t.pop();for(let v=0,y=i;v!==y;++v){const g=n[v],m=g[h],S=g[u];g[f]=m,g[h]=S,g.pop()}}else{const h=--s,d=t[h];h>0&&(e[d.uuid]=f),t[f]=d,t.pop();for(let u=0,p=i;u!==p;++u){const v=n[u];v[f]=v[h],v.pop()}}}this.nCachedObjects_=r},subscribe_:function(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const s=this._paths,o=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,f=new Array(c);i=r.length,n[t]=i,s.push(t),o.push(e),r.push(f);for(let h=l,d=a.length;h!==d;++h){const u=a[h];f[h]=new se(u,t,e)}return f},unsubscribe_:function(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],c=t[o];e[c]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});class vg{constructor(e,n,i=null,r=n.blendMode){this._mixer=e,this._clip=n,this._localRoot=i,this.blendMode=r;const s=n.tracks,o=s.length,a=new Array(o),c={endingStart:Jn,endingEnd:Jn};for(let l=0;l!==o;++l){const f=s[l].createInterpolant(null);a[l]=f,f.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Bh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,n){return this.loop=e,this.repetitions=n,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,n,i){if(e.fadeOut(n),this.fadeIn(n),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,n),this.warp(a,1,n)}return this}crossFadeTo(e,n,i){return e.crossFadeFrom(this,n,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,n,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=n/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,n,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,n=i*c}n*=this._updateTimeScale(e);const o=this._updateTime(n),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Ac:for(let f=0,h=c.length;f!==h;++f)c[f].evaluate(o),l[f].accumulateAdditive(a);break;case Lo:default:for(let f=0,h=c.length;f!==h;++f)c[f].evaluate(o),l[f].accumulate(r,a)}}}_updateWeight(e){let n=0;if(this.enabled){n=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n}_updateTimeScale(e){let n=0;if(!this.paused){n=this.timeScale;const i=this._timeScaleInterpolant;i!==null&&(n*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n))}return this._effectiveTimeScale=n,n}_updateTime(e){const n=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===Uh;if(e===0)return s===-1?r:o&&(s&1)===1?n-r:r;if(i===Fh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(r>=n)r=n;else if(r<0)r=0;else{this.time=r;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=n||r<0){const a=Math.floor(r/n);r-=n*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?n:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return n-r}return r}_setEndings(e,n,i){const r=this._interpolantSettings;i?(r.endingStart=Qn,r.endingEnd=Qn):(e?r.endingStart=this.zeroSlopeAtStart?Qn:Jn:r.endingStart=jr,n?r.endingEnd=this.zeroSlopeAtEnd?Qn:Jn:r.endingEnd=jr)}_scheduleFading(e,n,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=n,a[1]=s+e,c[1]=i,this}}function yc(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}yc.prototype=Object.assign(Object.create($e.prototype),{constructor:yc,_bindAction:function(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,o=t._interpolants,a=n.uuid,c=this._bindingsByRootAndName;let l=c[a];l===void 0&&(l={},c[a]=l);for(let f=0;f!==r;++f){const h=i[f],d=h.name;let u=l[d];if(u!==void 0)s[f]=u;else{if(u=s[f],u!==void 0){u._cacheIndex===null&&(++u.referenceCount,this._addInactiveBinding(u,a,d));continue}const p=e&&e._propertyBindings[f].binding.parsedPath;u=new $c(se.create(n,d,p),h.ValueTypeName,h.getValueSize()),++u.referenceCount,this._addInactiveBinding(u,a,d),s[f]=u}o[f].resultBuffer=u.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){const i=this._actions,r=this._actionsByClip;let s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{const o=s.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t},_removeInactiveAction:function(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,c=a[a.length-1],l=t._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),t._byClipCacheIndex=null;const f=o.actionByRoot,h=(t._localRoot||this._root).uuid;delete f[h],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackAction:function(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_addInactiveBinding:function(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)},_removeInactiveBinding:function(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=e[e.length-1],c=t._cacheIndex;a._cacheIndex=c,e[c]=a,e.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_lendControlInterpolant:function(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Qr(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e,n){const i=e||this._root,r=i.uuid;let s=typeof t=="string"?Ae.findByName(i,t):t;const o=s!==null?s.uuid:t,a=this._actionsByClip[o];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=Lo),a!==void 0){const f=a.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=a.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const l=new vg(this,s,e,n);return this._bindAction(l,c),this._addInactiveAction(l,o,r),l},existingAction:function(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Ae.findByName(n,t):t,s=r?r.uuid:t,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this},update:function(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,s);const o=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)o[c].apply(s);return this},setTime:function(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)},getRoot:function(){return this._root},uncacheClip:function(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){const c=s[o];this._deactivateAction(c);const l=c._cacheIndex,f=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=l,e[l]=f,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(t){const e=t.uuid,n=this._actionsByClip;for(const s in n){const o=n[s].actionByRoot,a=o[e];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});function xc(t,e,n){ve.call(this,t,e),this.meshPerAttribute=n||1}xc.prototype=Object.assign(Object.create(ve.prototype),{constructor:xc,isInstancedInterleavedBuffer:!0,copy:function(t){return ve.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},clone:function(t){const e=ve.prototype.clone.call(this,t);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(t){const e=ve.prototype.toJSON.call(this,t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function tl(t,e,n,i,r){this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(tl.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(tl.prototype,{isGLBufferAttribute:!0,setBuffer:function(t){return this.buffer=t,this},setType:function(t,e){return this.type=t,this.elementSize=e,this},setItemSize:function(t){return this.itemSize=t,this},setCount:function(t){return this.count=t,this}});function el(t,e,n,i){this.ray=new rr(t,e),this.near=n||0,this.far=i||1/0,this.camera=null,this.layers=new Cc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function _c(t,e){return t.distance-e.distance}function Mo(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Mo(r[s],e,n,!0)}}Object.assign(el.prototype,{set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)},intersectObject:function(t,e,n){const i=n||[];return Mo(t,this,i,e),i.sort(_c),i},intersectObjects:function(t,e,n){const i=n||[];if(Array.isArray(t)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=t.length;r<s;r++)Mo(t[r],this,i,e);return i.sort(_c),i}});const bc=new k;class yg{constructor(e,n){Object.defineProperty(this,"isBox2",{value:!0}),this.min=e!==void 0?e:new k(1/0,1/0),this.max=n!==void 0?n:new k(-1/0,-1/0)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bc.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new k),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new k),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),n=new k),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),n=new k),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return bc.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function es(t){dt.call(this),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}es.prototype=Object.create(dt.prototype);es.prototype.constructor=es;es.prototype.isImmediateRenderObject=!0;const an=new E,zr=new St,Gs=new St;class xg extends Xr{constructor(e){const n=nl(e),i=new Dt,r=[],s=[],o=new lt(0,0,1),a=new lt(0,1,0);for(let l=0;l<n.length;l++){const f=n[l];f.parent&&f.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new Pt(r,3)),i.setAttribute("color",new Pt(s,3));const c=new be({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=n,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const n=this.bones,i=this.geometry,r=i.getAttribute("position");Gs.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<n.length;s++){const a=n[s];a.parent&&a.parent.isBone&&(zr.multiplyMatrices(Gs,a.matrixWorld),an.setFromMatrixPosition(zr),r.setXYZ(o,an.x,an.y,an.z),zr.multiplyMatrices(Gs,a.parent.matrixWorld),an.setFromMatrixPosition(zr),r.setXYZ(o+1,an.x,an.y,an.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function nl(t){const e=[];t&&t.isBone&&e.push(t);for(let n=0;n<t.children.length;n++)e.push.apply(e,nl(t.children[n]));return e}class _g extends Xr{constructor(e=10,n=10,i=4473924,r=8947848){i=new lt(i),r=new lt(r);const s=n/2,o=e/n,a=e/2,c=[],l=[];for(let d=0,u=0,p=-a;d<=n;d++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const v=d===s?i:r;v.toArray(l,u),u+=3,v.toArray(l,u),u+=3,v.toArray(l,u),u+=3,v.toArray(l,u),u+=3}const f=new Dt;f.setAttribute("position",new Pt(c,3)),f.setAttribute("color",new Pt(l,3));const h=new be({vertexColors:!0,toneMapped:!1});super(f,h),this.type="GridHelper"}}const bg=new Float32Array(1);new Int32Array(bg.buffer);ht.create=function(t,e){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(ht.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t};Object.assign(ln.prototype,{createPointsGeometry:function(t){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=this.getPoints(t);return this.createGeometry(e)},createSpacedPointsGeometry:function(t){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=this.getSpacedPoints(t);return this.createGeometry(e)},createGeometry:function(t){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=new ye;for(let n=0,i=t.length;n<i;n++){const r=t[n];e.vertices.push(new E(r.x,r.y,r.z||0))}return e}});Object.assign(De.prototype,{fromPoints:function(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)}});Object.create(me.prototype);Object.create(me.prototype);function il(t){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),me.call(this,t),this.type="catmullrom"}il.prototype=Object.create(me.prototype);Object.assign(il.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});_g.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};xg.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(Ft.prototype,{extractUrlBase:function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),ig.extractUrlBase(t)}});Ft.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(yg.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign(gn.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign(vn.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});cs.prototype.setFromMatrix=function(t){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)};Object.assign(Mt,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(t){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),Mt.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),Mt.ceilPowerOfTwo(t)}});Object.assign(ce.prototype,{flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},getInverse:function(t){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}});Object.assign(St.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new E().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(t,e,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,e,i,n,r,s)},getInverse:function(t){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}});qe.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)};Object.assign(de.prototype,{multiplyVector3:function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)},inverse:function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()}});Object.assign(rr.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}});Object.assign(ee.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,e)},midpoint:function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},normal:function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},plane:function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)}});Object.assign(ee,{barycoordFromPoint:function(t,e,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ee.getBarycoord(t,e,n,i,r)},normal:function(t,e,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ee.getNormal(t,e,n,i)}});Object.assign(ri.prototype,{extractAllPoints:function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Om(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new zm(this,t)}});Object.assign(k.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(E.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},applyProjection:function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},fromAttribute:function(t,e,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Ot.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(ye.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(t){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.assign(dt.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(t){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(dt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(Kt.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(Kt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),zh},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(to.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(io.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});eo.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(ht.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(t){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=t}});Jt.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(t)};Object.defineProperties(Gt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}});Object.defineProperties(xt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Vi},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Vi)}}});Object.assign(xt.prototype,{setDynamic:function(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?Vi:as),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(Dt.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},addAttribute:function(t,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(t,new xt(arguments[1],arguments[2]))):t==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(t,e)},addDrawCall:function(t,e,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(t){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(t)},applyMatrix:function(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(Dt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(ts.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(t){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=t}}});Object.defineProperties(el.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(t){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=t}}});Object.defineProperties(ve.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===Vi},set:function(t){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(t)}}});Object.assign(ve.prototype,{setDynamic:function(t){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?Vi:as),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(Zc.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.assign(Wc.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}});Object.defineProperties(pt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new lt}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===wc}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=t}}});Object.defineProperties(Pn.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(Rn.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(t){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=t}}});Object.defineProperties(le.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}});Object.assign(or.prototype,{clearTarget:function(t,e,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(e,n,i)},animate:function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(or.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=t===!0?Lc:ir}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(kc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Ce.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}});ai.prototype.updateCubeMap=function(t,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,e)};ai.prototype.clear=function(t,e,n,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(t,e,n,i)};yi.crossOrigin=void 0;yi.loadTexture=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new go;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s};yi.loadTextureCube=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new mo;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s};yi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};yi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));var rl={};(function(t){(function(e){var n=t;function i(p,v,y){this.x=p,this.y=v,this.z=y}i.prototype.dot2=function(p,v){return this.x*p+this.y*v},i.prototype.dot3=function(p,v,y){return this.x*p+this.y*v+this.z*y};var r=[new i(1,1,0),new i(-1,1,0),new i(1,-1,0),new i(-1,-1,0),new i(1,0,1),new i(-1,0,1),new i(1,0,-1),new i(-1,0,-1),new i(0,1,1),new i(0,-1,1),new i(0,1,-1),new i(0,-1,-1)],s=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],o=new Array(512),a=new Array(512);n.seed=function(p){p>0&&p<1&&(p*=65536),p=Math.floor(p),p<256&&(p|=p<<8);for(var v=0;v<256;v++){var y;v&1?y=s[v]^p&255:y=s[v]^p>>8&255,o[v]=o[v+256]=y,a[v]=a[v+256]=r[y%12]}},n.seed(0);var c=.5*(Math.sqrt(3)-1),l=(3-Math.sqrt(3))/6,f=1/3,h=1/6;n.simplex2=function(p,v){var y,g,m,S=(p+v)*c,T=Math.floor(p+S),M=Math.floor(v+S),x=(T+M)*l,A=p-T+x,U=v-M+x,F,Y;A>U?(F=1,Y=0):(F=0,Y=1);var P=A-F+l,D=U-Y+l,I=A-1+2*l,R=U-1+2*l;T&=255,M&=255;var C=a[T+o[M]],O=a[T+F+o[M+Y]],G=a[T+1+o[M+1]],j=.5-A*A-U*U;j<0?y=0:(j*=j,y=j*j*C.dot2(A,U));var J=.5-P*P-D*D;J<0?g=0:(J*=J,g=J*J*O.dot2(P,D));var tt=.5-I*I-R*R;return tt<0?m=0:(tt*=tt,m=tt*tt*G.dot2(I,R)),70*(y+g+m)},n.simplex3=function(p,v,y){var g,m,S,T,M=(p+v+y)*f,x=Math.floor(p+M),A=Math.floor(v+M),U=Math.floor(y+M),F=(x+A+U)*h,Y=p-x+F,P=v-A+F,D=y-U+F,I,R,C,O,G,j;Y>=P?P>=D?(I=1,R=0,C=0,O=1,G=1,j=0):Y>=D?(I=1,R=0,C=0,O=1,G=0,j=1):(I=0,R=0,C=1,O=1,G=0,j=1):P<D?(I=0,R=0,C=1,O=0,G=1,j=1):Y<D?(I=0,R=1,C=0,O=0,G=1,j=1):(I=0,R=1,C=0,O=1,G=1,j=0);var J=Y-I+h,tt=P-R+h,it=D-C+h,gt=Y-O+2*h,vt=P-G+2*h,Nt=D-j+2*h,H=Y-1+3*h,qt=P-1+3*h,ut=D-1+3*h;x&=255,A&=255,U&=255;var Lt=a[x+o[A+o[U]]],yt=a[x+I+o[A+R+o[U+C]]],It=a[x+O+o[A+G+o[U+j]]],wt=a[x+1+o[A+1+o[U+1]]],V=.6-Y*Y-P*P-D*D;V<0?g=0:(V*=V,g=V*V*Lt.dot3(Y,P,D));var Z=.6-J*J-tt*tt-it*it;Z<0?m=0:(Z*=Z,m=Z*Z*yt.dot3(J,tt,it));var Q=.6-gt*gt-vt*vt-Nt*Nt;Q<0?S=0:(Q*=Q,S=Q*Q*It.dot3(gt,vt,Nt));var ot=.6-H*H-qt*qt-ut*ut;return ot<0?T=0:(ot*=ot,T=ot*ot*wt.dot3(H,qt,ut)),32*(g+m+S+T)};function d(p){return p*p*p*(p*(p*6-15)+10)}function u(p,v,y){return(1-y)*p+y*v}n.perlin2=function(p,v){var y=Math.floor(p),g=Math.floor(v);p=p-y,v=v-g,y=y&255,g=g&255;var m=a[y+o[g]].dot2(p,v),S=a[y+o[g+1]].dot2(p,v-1),T=a[y+1+o[g]].dot2(p-1,v),M=a[y+1+o[g+1]].dot2(p-1,v-1),x=d(p);return u(u(m,T,x),u(S,M,x),d(v))},n.perlin3=function(p,v,y){var g=Math.floor(p),m=Math.floor(v),S=Math.floor(y);p=p-g,v=v-m,y=y-S,g=g&255,m=m&255,S=S&255;var T=a[g+o[m+o[S]]].dot3(p,v,y),M=a[g+o[m+o[S+1]]].dot3(p,v,y-1),x=a[g+o[m+1+o[S]]].dot3(p,v-1,y),A=a[g+o[m+1+o[S+1]]].dot3(p,v-1,y-1),U=a[g+1+o[m+o[S]]].dot3(p-1,v,y),F=a[g+1+o[m+o[S+1]]].dot3(p-1,v,y-1),Y=a[g+1+o[m+1+o[S]]].dot3(p-1,v-1,y),P=a[g+1+o[m+1+o[S+1]]].dot3(p-1,v-1,y-1),D=d(p),I=d(v),R=d(y);return u(u(u(T,U,D),u(M,F,D),R),u(u(x,Y,D),u(A,P,D),R),I)}})()})(rl);const sl=new Wc,si=new Kt(new km(1,75,75),new pn);sl.add(si);si.position.set(1.3,.4);si.rotation.set(2,1,2);const ns=new Jt(75,window.innerWidth/window.innerHeight,.1,5);ns.position.z=1.5;let nr;const ol=async()=>{requestAnimationFrame(ol);const t=performance.now()*.001;for(let e=500;e<si.geometry.vertices.length/1.6;e++){let n=si.geometry.vertices[e];n.normalize().multiplyScalar(1+.3*rl.perlin3(n.x*3+t,n.y*3,n.z*3))}si.geometry.verticesNeedUpdate=!0,nr.render(sl,ns)},al=async()=>{nr.setPixelRatio(window.devicePixelRatio),nr.setSize(window.innerWidth,window.innerHeight),ns.aspect=window.innerWidth/window.innerHeight,ns.updateProjectionMatrix()};window.addEventListener("resize",al);const wg=async t=>{nr=new or({canvas:t}),nr.setClearColor(1052688),await al(),await ol()};function Sg(t,{delay:e=0,duration:n=400,easing:i=dl}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:s=>`opacity: ${s*r}`}}export{Sg as f,wg as s};

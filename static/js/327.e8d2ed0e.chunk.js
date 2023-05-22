/*! For license information please see 327.e8d2ed0e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[327],{6327:function(t,e,r){r.r(e),r.d(e,{encodeToCurve:function(){return zt},hashToCurve:function(){return _t},schnorr:function(){return Pt},secp256k1:function(){return Bt}});var n=r(5671),i=r(3144),o=r(136),a=r(7277),u=r(3433);function f(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("Wrong positive integer: ".concat(t))}function s(t){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];if(r.length>0&&!r.includes(t.length))throw new TypeError("Expected Uint8Array of length ".concat(r,", not of length=").concat(t.length))}var c={number:f,bool:function(t){if("boolean"!==typeof t)throw new Error("Expected boolean, not ".concat(t))},bytes:s,hash:function(t){if("function"!==typeof t||"function"!==typeof t.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");f(t.outputLen),f(t.blockLen)},exists:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")},output:function(t,e){s(t);var r=e.outputLen;if(t.length<r)throw new Error("digestInto() expects output buffer of length at least ".concat(r))}},d=c,h="object"===typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0,l=function(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)},v=function(t,e){return t<<32-e|t>>>e};if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");Array.from({length:256},(function(t,e){return e.toString(16).padStart(2,"0")}));function y(t){if("string"===typeof t&&(t=function(t){if("string"!==typeof t)throw new TypeError("utf8ToBytes expected string, got ".concat(typeof t));return(new TextEncoder).encode(t)}(t)),!(t instanceof Uint8Array))throw new TypeError("Expected input type is Uint8Array (got ".concat(typeof t,")"));return t}function p(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];if(!e.every((function(t){return t instanceof Uint8Array})))throw new Error("Uint8Array list expected");if(1===e.length)return e[0];for(var n=e.reduce((function(t,e){return t+e.length}),0),i=new Uint8Array(n),o=0,a=0;o<e.length;o++){var u=e[o];i.set(u,a),a+=u.length}return i}var g=function(){function t(){(0,n.Z)(this,t)}return(0,i.Z)(t,[{key:"clone",value:function(){return this._cloneInto()}}]),t}();function w(t){var e=function(e){return t().update(y(e)).digest()},r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=function(){return t()},e}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32;if(h&&"function"===typeof h.getRandomValues)return h.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}var m=function(t){(0,o.Z)(r,t);var e=(0,a.Z)(r);function r(t,i,o,a){var u;return(0,n.Z)(this,r),(u=e.call(this)).blockLen=t,u.outputLen=i,u.padOffset=o,u.isLE=a,u.finished=!1,u.length=0,u.pos=0,u.destroyed=!1,u.buffer=new Uint8Array(t),u.view=l(u.buffer),u}return(0,i.Z)(r,[{key:"update",value:function(t){d.exists(this);for(var e=this.view,r=this.buffer,n=this.blockLen,i=(t=y(t)).length,o=0;o<i;){var a=Math.min(n-this.pos,i-o);if(a!==n)r.set(t.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===n&&(this.process(e,0),this.pos=0);else for(var u=l(t);n<=i-o;o+=n)this.process(u,o)}return this.length+=t.length,this.roundClean(),this}},{key:"digestInto",value:function(t){d.exists(this),d.output(t,this),this.finished=!0;var e=this.buffer,r=this.view,n=this.blockLen,i=this.isLE,o=this.pos;e[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>n-o&&(this.process(r,0),o=0);for(var a=o;a<n;a++)e[a]=0;!function(t,e,r,n){if("function"===typeof t.setBigUint64)return t.setBigUint64(e,r,n);var i=BigInt(32),o=BigInt(4294967295),a=Number(r>>i&o),u=Number(r&o),f=n?4:0,s=n?0:4;t.setUint32(e+f,a,n),t.setUint32(e+s,u,n)}(r,n-8,BigInt(8*this.length),i),this.process(r,0);var u=l(t),f=this.outputLen;if(f%4)throw new Error("_sha2: outputLen should be aligned to 32bit");var s=f/4,c=this.get();if(s>c.length)throw new Error("_sha2: outputLen bigger than state");for(var h=0;h<s;h++)u.setUint32(4*h,c[h],i)}},{key:"digest",value:function(){var t=this.buffer,e=this.outputLen;this.digestInto(t);var r=t.slice(0,e);return this.destroy(),r}},{key:"_cloneInto",value:function(t){var e;t||(t=new this.constructor),(e=t).set.apply(e,(0,u.Z)(this.get()));var r=this.blockLen,n=this.buffer,i=this.length,o=this.finished,a=this.destroyed,f=this.pos;return t.length=i,t.pos=f,t.finished=o,t.destroyed=a,i%r&&t.buffer.set(n),t}}]),r}(g),E=function(t,e,r){return t&e^t&r^e&r},B=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),x=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),A=new Uint32Array(64),S=function(t){(0,o.Z)(r,t);var e=(0,a.Z)(r);function r(){var t;return(0,n.Z)(this,r),(t=e.call(this,64,32,8,!1)).A=0|x[0],t.B=0|x[1],t.C=0|x[2],t.D=0|x[3],t.E=0|x[4],t.F=0|x[5],t.G=0|x[6],t.H=0|x[7],t}return(0,i.Z)(r,[{key:"get",value:function(){return[this.A,this.B,this.C,this.D,this.E,this.F,this.G,this.H]}},{key:"set",value:function(t,e,r,n,i,o,a,u){this.A=0|t,this.B=0|e,this.C=0|r,this.D=0|n,this.E=0|i,this.F=0|o,this.G=0|a,this.H=0|u}},{key:"process",value:function(t,e){for(var r=0;r<16;r++,e+=4)A[r]=t.getUint32(e,!1);for(var n=16;n<64;n++){var i=A[n-15],o=A[n-2],a=v(i,7)^v(i,18)^i>>>3,u=v(o,17)^v(o,19)^o>>>10;A[n]=u+A[n-7]+a+A[n-16]|0}for(var f,s=this.A,c=this.B,d=this.C,h=this.D,l=this.E,y=this.F,p=this.G,g=this.H,w=0;w<64;w++){var b=g+(v(l,6)^v(l,11)^v(l,25))+((f=l)&y^~f&p)+B[w]+A[w]|0,m=(v(s,2)^v(s,13)^v(s,22))+E(s,c,d)|0;g=p,p=y,y=l,l=h+b|0,h=d,d=c,c=s,s=b+m|0}s=s+this.A|0,c=c+this.B|0,d=d+this.C|0,h=h+this.D|0,l=l+this.E|0,y=y+this.F|0,p=p+this.G|0,g=g+this.H|0,this.set(s,c,d,h,l,y,p,g)}},{key:"roundClean",value:function(){A.fill(0)}},{key:"destroy",value:function(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}]),r}(m),I=function(t){(0,o.Z)(r,t);var e=(0,a.Z)(r);function r(){var t;return(0,n.Z)(this,r),(t=e.call(this)).A=-1056596264,t.B=914150663,t.C=812702999,t.D=-150054599,t.E=-4191439,t.F=1750603025,t.G=1694076839,t.H=-1090891868,t.outputLen=28,t}return(0,i.Z)(r)}(S),k=w((function(){return new S})),T=(w((function(){return new I})),r(3298)),O=BigInt(0),Z=BigInt(1),R=BigInt(2),N=BigInt(3),q=BigInt(4),L=BigInt(5),H=BigInt(8);BigInt(9),BigInt(16);function U(t,e){var r=t%e;return r>=O?r:e+r}function C(t,e,r){if(r<=O||e<O)throw new Error("Expected power/modulo > 0");if(r===Z)return O;for(var n=Z;e>O;)e&Z&&(n=n*t%r),t=t*t%r,e>>=Z;return n}function P(t,e,r){for(var n=t;e-- >O;)n*=n,n%=r;return n}function D(t,e){if(t===O||e<=O)throw new Error("invert: expected positive integers, got n=".concat(t," mod=").concat(e));for(var r=U(t,e),n=e,i=O,o=Z,a=Z,u=O;r!==O;){var f=n/r,s=n%r,c=i-a*f,d=o-u*f;n=r,r=s,i=a,o=u,a=c,u=d}if(n!==Z)throw new Error("invert: does not exist");return U(i,e)}function V(t){if(t%q===N){var e=(t+Z)/q;return function(t,r){var n=t.pow(r,e);if(!t.eql(t.sqr(n),r))throw new Error("Cannot find square root");return n}}if(t%H===L){var r=(t-L)/H;return function(t,e){var n=t.mul(e,R),i=t.pow(n,r),o=t.mul(e,i),a=t.mul(t.mul(o,R),i),u=t.mul(o,t.sub(a,t.ONE));if(!t.eql(t.sqr(u),e))throw new Error("Cannot find square root");return u}}return function(t){var e,r,n,i=(t-Z)/R;for(e=t-Z,r=0;e%R===O;e/=R,r++);for(n=R;n<t&&C(n,i,t)!==t-Z;n++);if(1===r){var o=(t+Z)/q;return function(t,e){var r=t.pow(e,o);if(!t.eql(t.sqr(r),e))throw new Error("Cannot find square root");return r}}var a=(e+Z)/R;return function(t,o){if(t.pow(o,i)===t.neg(t.ONE))throw new Error("Cannot find square root");for(var u=r,f=t.pow(t.mul(t.ONE,n),e),s=t.pow(o,a),c=t.pow(o,e);!t.eql(c,t.ONE);){if(t.eql(c,t.ZERO))return t.ZERO;for(var d=1,h=t.sqr(c);d<u&&!t.eql(h,t.ONE);d++)h=t.sqr(h);var l=t.pow(f,Z<<BigInt(u-d-1));f=t.sqr(l),s=t.mul(s,l),c=t.mul(c,f),u=d}return s}}(t)}var F=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function _(t){var e=F.reduce((function(t,e){return t[e]="function",t}),{ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"});return(0,T.validateObject)(t,e)}function z(t,e){var r=void 0!==e?e:t.toString(2).length;return{nBitLength:r,nByteLength:Math.ceil(r/8)}}var j=r(8737),K=r(1413),M=BigInt(0),Y=BigInt(1);function W(t){return _(t.Fp),(0,T.validateObject)(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze((0,K.Z)((0,K.Z)((0,K.Z)({},z(t.n,t.nBitLength)),t),{p:t.Fp.ORDER}))}var G=T.bytesToNumberBE,X=T.hexToBytes,J={Err:function(t){(0,o.Z)(r,t);var e=(0,a.Z)(r);function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,n.Z)(this,r),e.call(this,t)}return(0,i.Z)(r)}((0,j.Z)(Error)),_parseInt:function(t){var e=J.Err;if(t.length<2||2!==t[0])throw new e("Invalid signature integer tag");var r=t[1],n=t.subarray(2,r+2);if(!r||n.length!==r)throw new e("Invalid signature integer: wrong length");if(128&n[0])throw new e("Invalid signature integer: negative");if(0===n[0]&&!(128&n[1]))throw new e("Invalid signature integer: unnecessary leading zero");return{d:G(n),l:t.subarray(r+2)}},toSig:function(t){var e=J.Err,r="string"===typeof t?X(t):t;if(!(r instanceof Uint8Array))throw new Error("ui8a expected");var n=r.length;if(n<2||48!=r[0])throw new e("Invalid signature tag");if(r[1]!==n-2)throw new e("Invalid signature: incorrect length");var i=J._parseInt(r.subarray(2)),o=i.d,a=i.l,u=J._parseInt(a),f=u.d;if(u.l.length)throw new e("Invalid signature: left bytes after parsing");return{r:o,s:f}},hexFromSig:function(t){var e=function(t){return 8&Number.parseInt(t[0],16)?"00"+t:t},r=function(t){var e=t.toString(16);return 1&e.length?"0".concat(e):e},n=e(r(t.s)),i=e(r(t.r)),o=n.length/2,a=i.length/2,u=r(o),f=r(a);return"30".concat(r(a+o+4),"02").concat(f).concat(i,"02").concat(u).concat(n)}},Q=BigInt(0),$=BigInt(1),tt=BigInt(2),et=BigInt(3),rt=BigInt(4);function nt(t){var e=function(t){var e=W(t);T.validateObject(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});var r=e.endo,n=e.Fp,i=e.a;if(r){if(!n.eql(i,n.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if("object"!==typeof r||"bigint"!==typeof r.beta||"function"!==typeof r.splitScalar)throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze((0,K.Z)({},e))}(t),r=e.Fp,o=e.toBytes||function(t,e,n){var i=e.toAffine();return T.concatBytes(Uint8Array.from([4]),r.toBytes(i.x),r.toBytes(i.y))},a=e.fromBytes||function(t){var e=t.subarray(1);return{x:r.fromBytes(e.subarray(0,r.BYTES)),y:r.fromBytes(e.subarray(r.BYTES,2*r.BYTES))}};function u(t){var n=e.a,i=e.b,o=r.sqr(t),a=r.mul(o,t);return r.add(r.add(a,r.mul(t,n)),i)}if(!r.eql(r.sqr(e.Gy),u(e.Gx)))throw new Error("bad generator point: equation left != right");function f(t){return"bigint"===typeof t&&Q<t&&t<e.n}function s(t){if(!f(t))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function c(t){var r,n=e.allowedPrivateKeyLengths,i=e.nByteLength,o=e.wrapPrivateKey,a=e.n;if(n&&"bigint"!==typeof t){if(t instanceof Uint8Array&&(t=T.bytesToHex(t)),"string"!==typeof t||!n.includes(t.length))throw new Error("Invalid key");t=t.padStart(2*i,"0")}try{r="bigint"===typeof t?t:T.bytesToNumberBE((0,T.ensureBytes)("private key",t,i))}catch(u){throw new Error("private key must be ".concat(i," bytes, hex or bigint, not ").concat(typeof t))}return o&&(r=U(r,a)),s(r),r}var d=new Map;function h(t){if(!(t instanceof l))throw new Error("ProjectivePoint expected")}var l=function(){function t(e,i,o){if((0,n.Z)(this,t),this.px=e,this.py=i,this.pz=o,null==e||!r.isValid(e))throw new Error("x required");if(null==i||!r.isValid(i))throw new Error("y required");if(null==o||!r.isValid(o))throw new Error("z required")}return(0,i.Z)(t,[{key:"x",get:function(){return this.toAffine().x}},{key:"y",get:function(){return this.toAffine().y}},{key:"_setWindowSize",value:function(t){this._WINDOW_SIZE=t,d.delete(this)}},{key:"assertValidity",value:function(){if(this.is0()){if(e.allowInfinityPoint)return;throw new Error("bad point: ZERO")}var t=this.toAffine(),n=t.x,i=t.y;if(!r.isValid(n)||!r.isValid(i))throw new Error("bad point: x or y not FE");var o=r.sqr(i),a=u(n);if(!r.eql(o,a))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}},{key:"hasEvenY",value:function(){var t=this.toAffine().y;if(r.isOdd)return!r.isOdd(t);throw new Error("Field doesn't support isOdd")}},{key:"equals",value:function(t){h(t);var e=this.px,n=this.py,i=this.pz,o=t.px,a=t.py,u=t.pz,f=r.eql(r.mul(e,u),r.mul(o,i)),s=r.eql(r.mul(n,u),r.mul(a,i));return f&&s}},{key:"negate",value:function(){return new t(this.px,r.neg(this.py),this.pz)}},{key:"double",value:function(){var n=e.a,i=e.b,o=r.mul(i,et),a=this.px,u=this.py,f=this.pz,s=r.ZERO,c=r.ZERO,d=r.ZERO,h=r.mul(a,a),l=r.mul(u,u),v=r.mul(f,f),y=r.mul(a,u);return y=r.add(y,y),d=r.mul(a,f),d=r.add(d,d),s=r.mul(n,d),c=r.mul(o,v),c=r.add(s,c),s=r.sub(l,c),c=r.add(l,c),c=r.mul(s,c),s=r.mul(y,s),d=r.mul(o,d),v=r.mul(n,v),y=r.sub(h,v),y=r.mul(n,y),y=r.add(y,d),d=r.add(h,h),h=r.add(d,h),h=r.add(h,v),h=r.mul(h,y),c=r.add(c,h),v=r.mul(u,f),v=r.add(v,v),h=r.mul(v,y),s=r.sub(s,h),d=r.mul(v,l),d=r.add(d,d),new t(s,c,d=r.add(d,d))}},{key:"add",value:function(n){h(n);var i=this.px,o=this.py,a=this.pz,u=n.px,f=n.py,s=n.pz,c=r.ZERO,d=r.ZERO,l=r.ZERO,v=e.a,y=r.mul(e.b,et),p=r.mul(i,u),g=r.mul(o,f),w=r.mul(a,s),b=r.add(i,o),m=r.add(u,f);b=r.mul(b,m),m=r.add(p,g),b=r.sub(b,m),m=r.add(i,a);var E=r.add(u,s);return m=r.mul(m,E),E=r.add(p,w),m=r.sub(m,E),E=r.add(o,a),c=r.add(f,s),E=r.mul(E,c),c=r.add(g,w),E=r.sub(E,c),l=r.mul(v,m),c=r.mul(y,w),l=r.add(c,l),c=r.sub(g,l),l=r.add(g,l),d=r.mul(c,l),g=r.add(p,p),g=r.add(g,p),w=r.mul(v,w),m=r.mul(y,m),g=r.add(g,w),w=r.sub(p,w),w=r.mul(v,w),m=r.add(m,w),p=r.mul(g,m),d=r.add(d,p),p=r.mul(E,m),c=r.mul(b,c),c=r.sub(c,p),p=r.mul(b,g),l=r.mul(E,l),new t(c,d,l=r.add(l,p))}},{key:"subtract",value:function(t){return this.add(t.negate())}},{key:"is0",value:function(){return this.equals(t.ZERO)}},{key:"wNAF",value:function(e){return y.wNAFCached(this,d,e,(function(e){var n=r.invertBatch(e.map((function(t){return t.pz})));return e.map((function(t,e){return t.toAffine(n[e])})).map(t.fromAffine)}))}},{key:"multiplyUnsafe",value:function(n){var i=t.ZERO;if(n===Q)return i;if(s(n),n===$)return this;var o=e.endo;if(!o)return y.unsafeLadder(this,n);for(var a=o.splitScalar(n),u=a.k1neg,f=a.k1,c=a.k2neg,d=a.k2,h=i,l=i,v=this;f>Q||d>Q;)f&$&&(h=h.add(v)),d&$&&(l=l.add(v)),v=v.double(),f>>=$,d>>=$;return u&&(h=h.negate()),c&&(l=l.negate()),l=new t(r.mul(l.px,o.beta),l.py,l.pz),h.add(l)}},{key:"multiply",value:function(n){s(n);var i,o,a=n,u=e.endo;if(u){var f=u.splitScalar(a),c=f.k1neg,d=f.k1,h=f.k2neg,l=f.k2,v=this.wNAF(d),p=v.p,g=v.f,w=this.wNAF(l),b=w.p,m=w.f;p=y.constTimeNegate(c,p),b=y.constTimeNegate(h,b),b=new t(r.mul(b.px,u.beta),b.py,b.pz),i=p.add(b),o=g.add(m)}else{var E=this.wNAF(a);i=E.p,o=E.f}return t.normalizeZ([i,o])[0]}},{key:"multiplyAndAddUnsafe",value:function(e,r,n){var i=t.BASE,o=function(t,e){return e!==Q&&e!==$&&t.equals(i)?t.multiply(e):t.multiplyUnsafe(e)},a=o(this,r).add(o(e,n));return a.is0()?void 0:a}},{key:"toAffine",value:function(t){var e=this.px,n=this.py,i=this.pz,o=this.is0();null==t&&(t=o?r.ONE:r.inv(i));var a=r.mul(e,t),u=r.mul(n,t),f=r.mul(i,t);if(o)return{x:r.ZERO,y:r.ZERO};if(!r.eql(f,r.ONE))throw new Error("invZ was invalid");return{x:a,y:u}}},{key:"isTorsionFree",value:function(){var r=e.h,n=e.isTorsionFree;if(r===$)return!0;if(n)return n(t,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}},{key:"clearCofactor",value:function(){var r=e.h,n=e.clearCofactor;return r===$?this:n?n(t,this):this.multiplyUnsafe(e.h)}},{key:"toRawBytes",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.assertValidity(),o(t,this,e)}},{key:"toHex",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return T.bytesToHex(this.toRawBytes(t))}}],[{key:"fromAffine",value:function(e){var n=e||{},i=n.x,o=n.y;if(!e||!r.isValid(i)||!r.isValid(o))throw new Error("invalid affine point");if(e instanceof t)throw new Error("projective point not allowed");var a=function(t){return r.eql(t,r.ZERO)};return a(i)&&a(o)?t.ZERO:new t(i,o,r.ONE)}},{key:"normalizeZ",value:function(e){var n=r.invertBatch(e.map((function(t){return t.pz})));return e.map((function(t,e){return t.toAffine(n[e])})).map(t.fromAffine)}},{key:"fromHex",value:function(e){var r=t.fromAffine(a((0,T.ensureBytes)("pointHex",e)));return r.assertValidity(),r}},{key:"fromPrivateKey",value:function(e){return t.BASE.multiply(c(e))}}]),t}();l.BASE=new l(e.Gx,e.Gy,r.ONE),l.ZERO=new l(r.ZERO,r.ONE,r.ZERO);var v=e.nBitLength,y=function(t,e){var r=function(t,e){var r=e.negate();return t?r:e},n=function(t){return{windows:Math.ceil(e/t)+1,windowSize:Math.pow(2,t-1)}};return{constTimeNegate:r,unsafeLadder:function(e,r){for(var n=t.ZERO,i=e;r>M;)r&Y&&(n=n.add(i)),i=i.double(),r>>=Y;return n},precomputeWindow:function(t,e){for(var r=n(e),i=r.windows,o=r.windowSize,a=[],u=t,f=u,s=0;s<i;s++){f=u,a.push(f);for(var c=1;c<o;c++)f=f.add(u),a.push(f);u=f.double()}return a},wNAF:function(e,i,o){for(var a=n(e),u=a.windows,f=a.windowSize,s=t.ZERO,c=t.BASE,d=BigInt(Math.pow(2,e)-1),h=Math.pow(2,e),l=BigInt(e),v=0;v<u;v++){var y=v*f,p=Number(o&d);o>>=l,p>f&&(p-=h,o+=Y);var g=y,w=y+Math.abs(p)-1,b=v%2!==0,m=p<0;0===p?c=c.add(r(b,i[g])):s=s.add(r(m,i[w]))}return{p:s,f:c}},wNAFCached:function(t,e,r,n){var i=t._WINDOW_SIZE||1,o=e.get(t);return o||(o=this.precomputeWindow(t,i),1!==i&&e.set(t,n(o))),this.wNAF(i,o,r)}}}(l,e.endo?Math.ceil(v/2):v);return{CURVE:e,ProjectivePoint:l,normPrivateKeyToScalar:c,weierstrassEquation:u,isWithinCurveOrder:f}}function it(t){var e=function(t){var e=W(t);return T.validateObject(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze((0,K.Z)({lowS:!0},e))}(t),r=e.Fp,o=e.n,a=r.BYTES+1,u=2*r.BYTES+1;function f(t){return U(t,o)}function s(t){return D(t,o)}var c=nt((0,K.Z)((0,K.Z)({},e),{},{toBytes:function(t,e,n){var i=e.toAffine(),o=r.toBytes(i.x),a=T.concatBytes;return n?a(Uint8Array.from([e.hasEvenY()?2:3]),o):a(Uint8Array.from([4]),o,r.toBytes(i.y))},fromBytes:function(t){var e=t.length,n=t[0],i=t.subarray(1);if(e!==a||2!==n&&3!==n){if(e===u&&4===n)return{x:r.fromBytes(i.subarray(0,r.BYTES)),y:r.fromBytes(i.subarray(r.BYTES,2*r.BYTES))};throw new Error("Point of length ".concat(e," was invalid. Expected ").concat(a," compressed bytes or ").concat(u," uncompressed bytes"))}var o=T.bytesToNumberBE(i);if(!(Q<(f=o)&&f<r.ORDER))throw new Error("Point is not on curve");var f,s=l(o),c=r.sqrt(s);return 1===(1&n)!==((c&$)===$)&&(c=r.neg(c)),{x:o,y:c}}})),d=c.ProjectivePoint,h=c.normPrivateKeyToScalar,l=c.weierstrassEquation,v=c.isWithinCurveOrder,y=function(t){return T.bytesToHex(T.numberToBytesBE(t,e.nByteLength))};function p(t){return t>o>>$}var g=function(t,e,r){return T.bytesToNumberBE(t.slice(e,r))},w=function(){function t(e,r,i){(0,n.Z)(this,t),this.r=e,this.s=r,this.recovery=i,this.assertValidity()}return(0,i.Z)(t,[{key:"assertValidity",value:function(){if(!v(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!v(this.s))throw new Error("s must be 0 < s < CURVE.n")}},{key:"addRecoveryBit",value:function(e){return new t(this.r,this.s,e)}},{key:"recoverPublicKey",value:function(t){var n=this.r,i=this.s,o=this.recovery,a=B((0,T.ensureBytes)("msgHash",t));if(null==o||![0,1,2,3].includes(o))throw new Error("recovery id invalid");var u=2===o||3===o?n+e.n:n;if(u>=r.ORDER)throw new Error("recovery id 2 or 3 invalid");var c=0===(1&o)?"02":"03",h=d.fromHex(c+y(u)),l=s(u),v=f(-a*l),p=f(i*l),g=d.BASE.multiplyAndAddUnsafe(h,v,p);if(!g)throw new Error("point at infinify");return g.assertValidity(),g}},{key:"hasHighS",value:function(){return p(this.s)}},{key:"normalizeS",value:function(){return this.hasHighS()?new t(this.r,f(-this.s),this.recovery):this}},{key:"toDERRawBytes",value:function(){return T.hexToBytes(this.toDERHex())}},{key:"toDERHex",value:function(){return J.hexFromSig({r:this.r,s:this.s})}},{key:"toCompactRawBytes",value:function(){return T.hexToBytes(this.toCompactHex())}},{key:"toCompactHex",value:function(){return y(this.r)+y(this.s)}}],[{key:"fromCompact",value:function(r){var n=e.nByteLength;return r=(0,T.ensureBytes)("compactSignature",r,2*n),new t(g(r,0,n),g(r,n,2*n))}},{key:"fromDER",value:function(e){var r=J.toSig((0,T.ensureBytes)("DER",e));return new t(r.r,r.s)}}]),t}(),b={isValidPrivateKey:function(t){try{return h(t),!0}catch(e){return!1}},normPrivateKeyToScalar:h,randomPrivateKey:function(){var t=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=(t=(0,T.ensureBytes)("privateHash",t)).length,i=z(e).nByteLength+8;if(i<24||n<i||n>1024)throw new Error("hashToPrivateScalar: expected ".concat(i,"-1024 bytes of input, got ").concat(n));return U(r?(0,T.bytesToNumberLE)(t):(0,T.bytesToNumberBE)(t),e-Z)+Z}(e.randomBytes(r.BYTES+8),o);return T.numberToBytesBE(t,e.nByteLength)},precompute:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.BASE;return e._setWindowSize(t),e.multiply(BigInt(3)),e}};function m(t){var e=t instanceof Uint8Array,r="string"===typeof t,n=(e||r)&&t.length;return e?n===a||n===u:r?n===2*a||n===2*u:t instanceof d}var E=e.bits2int||function(t){var r=T.bytesToNumberBE(t),n=8*t.length-e.nBitLength;return n>0?r>>BigInt(n):r},B=e.bits2int_modN||function(t){return f(E(t))},x=T.bitMask(e.nBitLength);function A(t){if("bigint"!==typeof t)throw new Error("bigint expected");if(!(Q<=t&&t<x))throw new Error("bigint expected < 2^".concat(e.nBitLength));return T.numberToBytesBE(t,e.nByteLength)}function S(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:I;if(["recovered","canonical"].some((function(t){return t in i})))throw new Error("sign() legacy options not supported");var o=e.hash,a=e.randomBytes,u=i.lowS,c=i.prehash,l=i.extraEntropy;null==u&&(u=!0),t=(0,T.ensureBytes)("msgHash",t),c&&(t=(0,T.ensureBytes)("prehashed msgHash",o(t)));var y=B(t),g=h(n),b=[A(g),A(y)];if(null!=l){var m=!0===l?a(r.BYTES):l;b.push((0,T.ensureBytes)("extraEntropy",m,r.BYTES))}var x=T.concatBytes.apply(T,b),S=y;return{seed:x,k2sig:function(t){var e=E(t);if(v(e)){var r=s(e),n=d.BASE.multiply(e).toAffine(),i=f(n.x);if(i!==Q){var o=f(r*f(S+i*g));if(o!==Q){var a=(n.x===i?0:2)|Number(n.y&$),c=o;return u&&p(o)&&(c=function(t){return p(t)?f(-t):t}(o),a^=1),new w(i,c,a)}}}}}}var I={lowS:e.lowS,prehash:!1},k={lowS:e.lowS,prehash:!1};return d.BASE._setWindowSize(8),{CURVE:e,getPublicKey:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return d.fromPrivateKey(t).toRawBytes(e)},getSharedSecret:function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(m(t))throw new Error("first arg must be private key");if(!m(e))throw new Error("second arg must be public key");return d.fromHex(e).multiply(h(t)).toRawBytes(r)},sign:function(t,r){var n=S(t,r,arguments.length>2&&void 0!==arguments[2]?arguments[2]:I),i=n.seed,o=n.k2sig;return T.createHmacDrbg(e.hash.outputLen,e.nByteLength,e.hmac)(i,o)},verify:function(t,r,n){var i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k,a=t;if(r=(0,T.ensureBytes)("msgHash",r),n=(0,T.ensureBytes)("publicKey",n),"strict"in o)throw new Error("options.strict was renamed to lowS");var u,c=o.lowS,h=o.prehash,l=void 0;try{if("string"===typeof a||a instanceof Uint8Array)try{l=w.fromDER(a)}catch(I){if(!(I instanceof J.Err))throw I;l=w.fromCompact(a)}else{if("object"!==typeof a||"bigint"!==typeof a.r||"bigint"!==typeof a.s)throw new Error("PARSE");var v=a.r,y=a.s;l=new w(v,y)}u=d.fromHex(n)}catch(O){if("PARSE"===O.message)throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(c&&l.hasHighS())return!1;h&&(r=e.hash(r));var p=l,g=p.r,b=p.s,m=B(r),E=s(b),x=f(m*E),A=f(g*E),S=null===(i=d.BASE.multiplyAndAddUnsafe(u,x,A))||void 0===i?void 0:i.toAffine();return!!S&&f(S.x)===g},ProjectivePoint:d,Signature:w,utils:b}}var ot=r(9439);var at=T.bytesToNumberBE;function ut(t,e){if(t<0||t>=1<<8*e)throw new Error("bad I2OSP call: value=".concat(t," length=").concat(e));for(var r=Array.from({length:e}).fill(0),n=e-1;n>=0;n--)r[n]=255&t,t>>>=8;return new Uint8Array(r)}function ft(t,e){for(var r=new Uint8Array(t.length),n=0;n<t.length;n++)r[n]=t[n]^e[n];return r}function st(t){if(!(t instanceof Uint8Array))throw new Error("Uint8Array expected")}function ct(t){if(!Number.isSafeInteger(t))throw new Error("number expected")}function dt(t,e,r){(0,T.validateObject)(r,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});var n=r.p,i=r.k,o=r.m,a=r.hash,u=r.expand,f=r.DST;st(t),ct(e);var s,c=function(t){if(t instanceof Uint8Array)return t;if("string"===typeof t)return(0,T.utf8ToBytes)(t);throw new Error("DST must be Uint8Array or string")}(f),d=n.toString(2).length,h=Math.ceil((d+i)/8),l=e*o*h;if("xmd"===u)s=function(t,e,r,n){st(t),st(e),ct(r),e.length>255&&(e=n((0,T.concatBytes)((0,T.utf8ToBytes)("H2C-OVERSIZE-DST-"),e)));var i=n.outputLen,o=n.blockLen,a=Math.ceil(r/i);if(a>255)throw new Error("Invalid xmd length");var u=(0,T.concatBytes)(e,ut(e.length,1)),f=ut(0,o),s=ut(r,2),c=new Array(a),d=n((0,T.concatBytes)(f,t,s,ut(0,1),u));c[0]=n((0,T.concatBytes)(d,ut(1,1),u));for(var h=1;h<=a;h++){var l=[ft(d,c[h-1]),ut(h+1,1),u];c[h]=n(T.concatBytes.apply(void 0,l))}return T.concatBytes.apply(void 0,c).slice(0,r)}(t,c,l,a);else if("xof"===u)s=function(t,e,r,n,i){if(st(t),st(e),ct(r),e.length>255){var o=Math.ceil(2*n/8);e=i.create({dkLen:o}).update((0,T.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(e).digest()}if(r>65535||e.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return i.create({dkLen:r}).update(t).update(ut(r,2)).update(e).update(ut(e.length,1)).digest()}(t,c,l,i,a);else{if("_internal_pass"!==u)throw new Error('expand must be "xmd" or "xof"');s=t}for(var v=new Array(e),y=0;y<e;y++){for(var p=new Array(o),g=0;g<o;g++){var w=h*(g+y*o),b=s.subarray(w,w+h);p[g]=U(at(b),n)}v[y]=p}return v}var ht=function(t){(0,o.Z)(r,t);var e=(0,a.Z)(r);function r(t,i){var o;(0,n.Z)(this,r),(o=e.call(this)).finished=!1,o.destroyed=!1,d.hash(t);var a=y(i);if(o.iHash=t.create(),"function"!==typeof o.iHash.update)throw new TypeError("Expected instance of class which extends utils.Hash");o.blockLen=o.iHash.blockLen,o.outputLen=o.iHash.outputLen;var u=o.blockLen,f=new Uint8Array(u);f.set(a.length>u?t.create().update(a).digest():a);for(var s=0;s<f.length;s++)f[s]^=54;o.iHash.update(f),o.oHash=t.create();for(var c=0;c<f.length;c++)f[c]^=106;return o.oHash.update(f),f.fill(0),o}return(0,i.Z)(r,[{key:"update",value:function(t){return d.exists(this),this.iHash.update(t),this}},{key:"digestInto",value:function(t){d.exists(this),d.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}},{key:"digest",value:function(){var t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}},{key:"_cloneInto",value:function(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));var e=this.oHash,r=this.iHash,n=this.finished,i=this.destroyed,o=this.blockLen,a=this.outputLen;return t.finished=n,t.destroyed=i,t.blockLen=o,t.outputLen=a,t.oHash=e._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}},{key:"destroy",value:function(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}]),r}(g),lt=function(t,e,r){return new ht(t,e).update(r).digest()};function vt(t){return{hash:t,hmac:function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return lt(t,e,p.apply(void 0,n))},randomBytes:b}}lt.create=function(t,e){return new ht(t,e)};var yt=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),pt=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),gt=BigInt(1),wt=BigInt(2),bt=function(t,e){return(t+e/wt)/e};function mt(t){var e=yt,r=BigInt(3),n=BigInt(6),i=BigInt(11),o=BigInt(22),a=BigInt(23),u=BigInt(44),f=BigInt(88),s=t*t*t%e,c=s*s*t%e,d=P(c,r,e)*c%e,h=P(d,r,e)*c%e,l=P(h,wt,e)*s%e,v=P(l,i,e)*l%e,y=P(v,o,e)*v%e,p=P(y,u,e)*y%e,g=P(p,f,e)*p%e,w=P(g,u,e)*y%e,b=P(w,r,e)*c%e,m=P(b,a,e)*v%e,E=P(m,n,e)*s%e,B=P(E,wt,e);if(!Et.eql(Et.sqr(B),t))throw new Error("Cannot find square root");return B}var Et=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(t<=O)throw new Error("Expected Fp ORDER > 0, got ".concat(t));var i=z(t,e),o=i.nBitLength,a=i.nByteLength;if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");var u=V(t),f=Object.freeze({ORDER:t,BITS:o,BYTES:a,MASK:(0,T.bitMask)(o),ZERO:O,ONE:Z,create:function(e){return U(e,t)},isValid:function(e){if("bigint"!==typeof e)throw new Error("Invalid field element: expected bigint, got ".concat(typeof e));return O<=e&&e<t},is0:function(t){return t===O},isOdd:function(t){return(t&Z)===Z},neg:function(e){return U(-e,t)},eql:function(t,e){return t===e},sqr:function(e){return U(e*e,t)},add:function(e,r){return U(e+r,t)},sub:function(e,r){return U(e-r,t)},mul:function(e,r){return U(e*r,t)},pow:function(t,e){return function(t,e,r){if(r<O)throw new Error("Expected power > 0");if(r===O)return t.ONE;if(r===Z)return e;for(var n=t.ONE,i=e;r>O;)r&Z&&(n=t.mul(n,i)),i=t.sqr(i),r>>=Z;return n}(f,t,e)},div:function(e,r){return U(e*D(r,t),t)},sqrN:function(t){return t*t},addN:function(t,e){return t+e},subN:function(t,e){return t-e},mulN:function(t,e){return t*e},inv:function(e){return D(e,t)},sqrt:n.sqrt||function(t){return u(f,t)},invertBatch:function(t){return function(t,e){var r=new Array(e.length),n=e.reduce((function(e,n,i){return t.is0(n)?e:(r[i]=e,t.mul(e,n))}),t.ONE),i=t.inv(n);return e.reduceRight((function(e,n,i){return t.is0(n)?e:(r[i]=t.mul(e,r[i]),t.mul(e,n))}),i),r}(f,t)},cmov:function(t,e,r){return r?e:t},toBytes:function(t){return r?(0,T.numberToBytesLE)(t,a):(0,T.numberToBytesBE)(t,a)},fromBytes:function(t){if(t.length!==a)throw new Error("Fp.fromBytes: expected ".concat(a,", got ").concat(t.length));return r?(0,T.bytesToNumberLE)(t):(0,T.bytesToNumberBE)(t)}});return Object.freeze(f)}(yt,void 0,void 0,{sqrt:mt}),Bt=function(t,e){var r=function(e){return it((0,K.Z)((0,K.Z)({},t),vt(e)))};return Object.freeze((0,K.Z)((0,K.Z)({},r(e)),{},{create:r}))}({a:BigInt(0),b:BigInt(7),Fp:Et,n:pt,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:function(t){var e=pt,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),n=-gt*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),i=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),o=r,a=BigInt("0x100000000000000000000000000000000"),u=bt(o*t,e),f=bt(-n*t,e),s=U(t-u*r-f*i,e),c=U(-u*n-f*o,e),d=s>a,h=c>a;if(d&&(s=e-s),h&&(c=e-c),s>a||c>a)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:d,k1:s,k2neg:h,k2:c}}}},k),xt=BigInt(0),At=function(t){return"bigint"===typeof t&&xt<t&&t<yt},St=function(t){return"bigint"===typeof t&&xt<t&&t<pt},It={};function kt(t){var e=It[t];if(void 0===e){var r=k(Uint8Array.from(t,(function(t){return t.charCodeAt(0)})));e=(0,T.concatBytes)(r,r),It[t]=e}for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return k(T.concatBytes.apply(void 0,[e].concat(i)))}var Tt=function(t){return t.toRawBytes(!0).slice(1)},Ot=function(t){return(0,T.numberToBytesBE)(t,32)},Zt=function(t){return U(t,yt)},Rt=function(t){return U(t,pt)},Nt=Bt.ProjectivePoint,qt=function(t,e,r){return Nt.BASE.multiplyAndAddUnsafe(t,e,r)};function Lt(t){var e=Bt.utils.normPrivateKeyToScalar(t),r=Nt.fromPrivateKey(e);return{scalar:r.hasEvenY()?e:Rt(-e),bytes:Tt(r)}}function Ht(t){if(!At(t))throw new Error("bad x: need 0 < x < p");var e=Zt(t*t),r=mt(Zt(e*t+BigInt(7)));r%wt!==xt&&(r=Zt(-r));var n=new Nt(t,r,gt);return n.assertValidity(),n}function Ut(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return Rt((0,T.bytesToNumberBE)(kt.apply(void 0,["BIP0340/challenge"].concat(e))))}function Ct(t,e,r){var n=(0,T.ensureBytes)("signature",t,64),i=(0,T.ensureBytes)("message",e),o=(0,T.ensureBytes)("publicKey",r,32);try{var a=Ht((0,T.bytesToNumberBE)(o)),u=(0,T.bytesToNumberBE)(n.subarray(0,32));if(!At(u))return!1;var f=(0,T.bytesToNumberBE)(n.subarray(32,64));if(!St(f))return!1;var s=Ut(Ot(u),Tt(a),i),c=qt(a,f,Rt(-s));return!(!c||!c.hasEvenY()||c.toAffine().x!==u)}catch(d){return!1}}var Pt={getPublicKey:function(t){return Lt(t).bytes},sign:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b(32),n=(0,T.ensureBytes)("message",t),i=Lt(e),o=i.bytes,a=i.scalar,u=(0,T.ensureBytes)("auxRand",r,32),f=Ot(a^(0,T.bytesToNumberBE)(kt("BIP0340/aux",u))),s=kt("BIP0340/nonce",f,o,n),c=Rt((0,T.bytesToNumberBE)(s));if(c===xt)throw new Error("sign failed: k is zero");var d=Lt(c),h=d.bytes,l=d.scalar,v=Ut(h,o,n),y=new Uint8Array(64);if(y.set(h,0),y.set(Ot(Rt(l+v*a)),32),!Ct(y,n,o))throw new Error("sign: Invalid signature produced");return y},verify:Ct,utils:{randomPrivateKey:Bt.utils.randomPrivateKey,lift_x:Ht,pointToBytes:Tt,numberToBytesBE:T.numberToBytesBE,bytesToNumberBE:T.bytesToNumberBE,taggedHash:kt,mod:U}},Dt=function(t,e){var r=e.map((function(t){return Array.from(t).reverse()}));return function(e,n){var i=r.map((function(r){return r.reduce((function(r,n){return t.add(t.mul(r,e),n)}))})),o=(0,ot.Z)(i,4),a=o[0],u=o[1],f=o[2],s=o[3];return e=t.div(a,u),n=t.mul(n,t.div(f,s)),{x:e,y:n}}}(Et,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map((function(t){return t.map((function(t){return BigInt(t)}))}))),Vt=function(t,e){if(_(t),!t.isValid(e.A)||!t.isValid(e.B)||!t.isValid(e.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");var r=function(t,e){for(var r=t.ORDER,n=Q,i=r-$;i%tt===Q;i/=tt)n+=$;var o=n,a=(r-$)/Math.pow(tt,o),u=(a-$)/tt,f=Math.pow(tt,o)-$,s=Math.pow(tt,o-$),c=t.pow(e,a),d=t.pow(e,(a+$)/tt),h=function(e,r){var n=c,i=t.pow(r,f),a=t.sqr(i);a=t.mul(a,r);var h=t.mul(e,a);h=t.pow(h,u),h=t.mul(h,i),i=t.mul(h,r),a=t.mul(h,e);var l=t.mul(a,i);h=t.pow(l,s);var v=t.eql(h,t.ONE);i=t.mul(a,d),h=t.mul(l,n),a=t.cmov(i,a,v),l=t.cmov(h,l,v);for(var y=o;y>$;y--){var p=Math.pow(tt,y-tt),g=t.pow(l,p),w=t.eql(g,t.ONE);i=t.mul(a,n),n=t.mul(n,n),g=t.mul(l,n),a=t.cmov(i,a,w),l=t.cmov(g,l,w)}return{isValid:v,value:a}};if(t.ORDER%rt===et){var l=(t.ORDER-et)/rt,v=t.sqrt(t.neg(e));h=function(e,r){var n=t.sqr(r),i=t.mul(e,r);n=t.mul(n,i);var o=t.pow(n,l);o=t.mul(o,i);var a=t.mul(o,v),u=t.mul(t.sqr(o),r),f=t.eql(u,e);return{isValid:f,value:t.cmov(a,o,f)}}}return h}(t,e.Z);if(!t.isOdd)throw new Error("Fp.isOdd is not implemented!");return function(n){var i,o,a,u,f,s,c,d;i=t.sqr(n),i=t.mul(i,e.Z),o=t.sqr(i),o=t.add(o,i),a=t.add(o,t.ONE),a=t.mul(a,e.B),u=t.cmov(e.Z,t.neg(o),!t.eql(o,t.ZERO)),u=t.mul(u,e.A),o=t.sqr(a),s=t.sqr(u),f=t.mul(s,e.A),o=t.add(o,f),o=t.mul(o,a),s=t.mul(s,u),f=t.mul(s,e.B),o=t.add(o,f),c=t.mul(i,a);var h=r(o,s),l=h.isValid,v=h.value;d=t.mul(i,n),d=t.mul(d,v),c=t.cmov(c,a,l),d=t.cmov(d,v,l);var y=t.isOdd(n)===t.isOdd(d);return d=t.cmov(t.neg(d),d,y),{x:c=t.div(c,u),y:d}}}(Et,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:Et.create(BigInt("-11"))}),Ft=function(t,e,r){if("function"!==typeof e)throw new Error("mapToCurve() must be defined");return{hashToCurve:function(n,i){var o=dt(n,2,(0,K.Z)((0,K.Z)({},r),{},{DST:r.DST},i)),a=t.fromAffine(e(o[0])),u=t.fromAffine(e(o[1])),f=a.add(u).clearCofactor();return f.assertValidity(),f},encodeToCurve:function(n,i){var o=dt(n,1,(0,K.Z)((0,K.Z)({},r),{},{DST:r.encodeDST},i)),a=t.fromAffine(e(o[0])).clearCofactor();return a.assertValidity(),a}}}(Bt.ProjectivePoint,(function(t){var e=Vt(Et.create(t[0])),r=e.x,n=e.y;return Dt(r,n)}),{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:Et.ORDER,m:1,k:128,expand:"xmd",hash:k}),_t=Ft.hashToCurve,zt=Ft.encodeToCurve}}]);
//# sourceMappingURL=327.e8d2ed0e.chunk.js.map
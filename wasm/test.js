var e;e||(e=typeof Module !== 'undefined' ? Module : {});var n={},q;for(q in e)e.hasOwnProperty(q)&&(n[q]=e[q]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var r=!1,t=!1,aa=!1,ba=!1;r="object"===typeof window;t="function"===typeof importScripts;aa="object"===typeof process&&"function"===typeof require&&!r&&!t;ba=!r&&!aa&&!t;var v="";function ca(a){return e.locateFile?e.locateFile(a,v):v+a}
if(aa){v=__dirname+"/";var da,ea;e.read=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);a=da.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("unhandledRejection",function(){process.exit(1)});e.quit=function(a){process.exit(a)};
e.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(r||t)r?document.currentScript&&(v=document.currentScript.src):
v=self.location.href,v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):
c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};var fa=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),w=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||fa);for(q in n)n.hasOwnProperty(q)&&(e[q]=n[q]);n=void 0;function ha(a){var b;b||(b=16);return Math.ceil(a/b)*b}var ia={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},ja=!1;
function assert(a,b){a||x("Assertion failed: "+b)}var ka="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function la(a,b){for(var c=b;a[c];)++c;if(16<c-b&&a.subarray&&ka)return ka.decode(a.subarray(b,c));for(c="";;){var d=a[b++];if(!d)return c;if(d&128){var f=a[b++]&63;if(192==(d&224))c+=String.fromCharCode((d&31)<<6|f);else{var g=a[b++]&63;if(224==(d&240))d=(d&15)<<12|f<<6|g;else{var h=a[b++]&63;if(240==(d&248))d=(d&7)<<18|f<<12|g<<6|h;else{var k=a[b++]&63;if(248==(d&252))d=(d&3)<<24|f<<18|g<<12|h<<6|k;else{var m=a[b++]&63;d=(d&1)<<30|f<<24|g<<18|h<<12|k<<6|m}}}65536>d?c+=String.fromCharCode(d):(d-=
65536,c+=String.fromCharCode(55296|d>>10,56320|d&1023))}}else c+=String.fromCharCode(d)}}
function ma(a,b,c){var d=y;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(2097151>=g){if(b+3>=c)break;d[b++]=240|g>>18}else{if(67108863>=g){if(b+4>=c)break;d[b++]=248|g>>24}else{if(b+5>=c)break;d[b++]=252|g>>30;d[b++]=128|g>>24&63}d[b++]=128|g>>18&63}d[b++]=128|g>>
12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,na,y,oa,pa,z,A,qa,ra;function sa(){e.HEAP8=na=new Int8Array(buffer);e.HEAP16=oa=new Int16Array(buffer);e.HEAP32=z=new Int32Array(buffer);e.HEAPU8=y=new Uint8Array(buffer);e.HEAPU16=pa=new Uint16Array(buffer);e.HEAPU32=A=new Uint32Array(buffer);e.HEAPF32=qa=new Float32Array(buffer);e.HEAPF64=ra=new Float64Array(buffer)}var ta,C,ua,va,wa,xa,ya;ta=C=ua=va=wa=xa=ya=0;
function za(){x("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+D+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var Aa=e.TOTAL_STACK||5242880,D=e.TOTAL_MEMORY||16777216;D<Aa&&w("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+D+"! (TOTAL_STACK="+Aa+")");
e.buffer?buffer=e.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(e.wasmMemory=new WebAssembly.Memory({initial:D/65536,maximum:D/65536}),buffer=e.wasmMemory.buffer):buffer=new ArrayBuffer(D),e.buffer=buffer);sa();function Ba(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.U;"number"===typeof c?void 0===b.G?e.dynCall_v(c):e.dynCall_vi(c,b.G):c(void 0===b.G?null:b.G)}}}var Ca=[],Da=[],Fa=[],Ga=[],Ha=!1;
function Ia(){var a=e.preRun.shift();Ca.unshift(a)}var E=0,Ja=null,F=null;e.preloadedImages={};e.preloadedAudios={};function Ka(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(f);throw"both async and sync fetching of the wasm failed";}catch(p){x(p)}}function b(){return e.wasmBinary||!r&&!t||"function"!==typeof fetch?new Promise(function(b){b(a())}):fetch(f,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+f+"'";return a.arrayBuffer()}).catch(function(){return a()})}function c(a){function c(a){k=a.exports;if(k.memory){a=
k.memory;var b=e.buffer;a.byteLength<b.byteLength&&w("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);e.buffer=buffer=a;sa()}e.asm=k;e.usingWasm=!0;E--;e.monitorRunDependencies&&e.monitorRunDependencies(E);0==E&&(null!==Ja&&(clearInterval(Ja),Ja=null),F&&(a=F,F=null,a()))}function d(a){c(a.instance)}function g(a){b().then(function(a){return WebAssembly.instantiate(a,h)}).then(a).catch(function(a){w("failed to asynchronously prepare wasm: "+
a);x(a)})}if("object"!==typeof WebAssembly)return w("no native wasm support detected"),!1;if(!(e.wasmMemory instanceof WebAssembly.Memory))return w("no native wasm Memory in use"),!1;a.memory=e.wasmMemory;h.global={NaN:NaN,Infinity:Infinity};h["global.Math"]=Math;h.env=a;E++;e.monitorRunDependencies&&e.monitorRunDependencies(E);if(e.instantiateWasm)try{return e.instantiateWasm(h,c)}catch(wb){return w("Module.instantiateWasm callback failed with error: "+wb),!1}e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||
Ka(f)||"function"!==typeof fetch?g(d):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),h).then(d).catch(function(a){w("wasm streaming compile failed: "+a);w("falling back to ArrayBuffer instantiation");g(d)});return{}}var d="test.wast",f="test.wasm",g="test.temp.asm.js";Ka(d)||(d=ca(d));Ka(f)||(f=ca(f));Ka(g)||(g=ca(g));var h={global:null,env:null,asm2wasm:ia,parent:e},k=null;e.asmPreload=e.asm;var m=e.reallocBuffer;e.reallocBuffer=function(a){if("asmjs"===l)var b=m(a);else a:{var c=
e.usingWasm?65536:16777216;0<a%c&&(a+=c-a%c);c=e.buffer.byteLength;if(e.usingWasm)try{b=-1!==e.wasmMemory.grow((a-c)/65536)?e.buffer=e.wasmMemory.buffer:null;break a}catch(B){b=null;break a}b=void 0}return b};var l="";e.asm=function(a,b){if(!b.table){a=e.wasmTableSize;void 0===a&&(a=1024);var d=e.wasmMaxTableSize;b.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==d?new WebAssembly.Table({initial:a,maximum:d,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):
Array(a);e.wasmTable=b.table}b.memoryBase||(b.memoryBase=e.STATIC_BASE);b.tableBase||(b.tableBase=0);b=c(b);assert(b,"no binaryen method succeeded.");return b}})();ta=1024;C=ta+11552;Da.push({U:function(){La()}},{U:function(){Ma()}});e.STATIC_BASE=ta;e.STATIC_BUMP=11552;C+=16;function Na(){return!!Na.o}var G=0;function H(){G+=4;return z[G-4>>2]}var Oa={};
function I(a,b){G=b;try{var c=H(),d=H(),f=H();a=0;I.o||(I.o=[null,[],[]],I.Y=function(a,b){var c=I.o[a];assert(c);0===b||10===b?((1===a?fa:w)(la(c,0)),c.length=0):c.push(b)});for(b=0;b<f;b++){for(var g=z[d+8*b>>2],h=z[d+(8*b+4)>>2],k=0;k<h;k++)I.Y(c,y[g+k]);a+=h}return a}catch(m){return"undefined"!==typeof FS&&m instanceof FS.P||x(m),-m.S}}var Pa={};function Qa(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function J(a){return this.fromWireType(A[a>>2])}var K={},L={},Ra={};
function Sa(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ta(a,b){a=Sa(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Ua(a){var b=Error,c=Ta(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Va=void 0;function Wa(a){throw new Va(a);}
function M(a,b,c){function d(b){b=c(b);b.length!==a.length&&Wa("Mismatched type converter count");for(var d=0;d<a.length;++d)N(a[d],b[d])}a.forEach(function(a){Ra[a]=b});var f=Array(b.length),g=[],h=0;b.forEach(function(a,b){L.hasOwnProperty(a)?f[b]=L[a]:(g.push(a),K.hasOwnProperty(a)||(K[a]=[]),K[a].push(function(){f[b]=L[a];++h;h===g.length&&d(f)}))});0===g.length&&d(f)}var Xa={};
function Ya(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Za=void 0;function O(a){for(var b="";y[a];)b+=Za[y[a++]];return b}var P=void 0;function Q(a){throw new P(a);}
function N(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||Q('type "'+d+'" must have a positive integer typeid pointer');if(L.hasOwnProperty(a)){if(c.ga)return;Q("Cannot register type '"+d+"' twice")}L[a]=b;delete Ra[a];K.hasOwnProperty(a)&&(b=K[a],delete K[a],b.forEach(function(a){a()}))}function $a(a){Q(a.a.f.b.name+" instance already deleted")}var R=void 0,S=[];
function ab(){for(;S.length;){var a=S.pop();a.a.u=!1;a["delete"]()}}function T(){}var bb={};function cb(a,b,c){if(void 0===a[b].g){var d=a[b];a[b]=function(){a[b].g.hasOwnProperty(arguments.length)||Q("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].g+")!");return a[b].g[arguments.length].apply(this,arguments)};a[b].g=[];a[b].g[d.C]=d}}
function db(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].g&&void 0!==e[a].g[c])&&Q("Cannot register public name '"+a+"' twice"),cb(e,a,a),e.hasOwnProperty(c)&&Q("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].g[c]=b):(e[a]=b,void 0!==c&&(e[a].na=c))}function eb(a,b,c,d,f,g,h,k){this.name=a;this.constructor=b;this.v=c;this.j=d;this.m=f;this.ba=g;this.B=h;this.$=k;this.ia=[]}
function fb(a,b,c){for(;b!==c;)b.B||Q("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.B(a),b=b.m;return a}function gb(a,b){if(null===b)return this.K&&Q("null is not a valid "+this.name),0;b.a||Q('Cannot pass "'+U(b)+'" as a '+this.name);b.a.c||Q("Cannot pass deleted object as a pointer of type "+this.name);return fb(b.a.c,b.a.f.b,this.b)}
function hb(a,b){if(null===b){this.K&&Q("null is not a valid "+this.name);if(this.F){var c=this.A();null!==a&&a.push(this.j,c);return c}return 0}b.a||Q('Cannot pass "'+U(b)+'" as a '+this.name);b.a.c||Q("Cannot pass deleted object as a pointer of type "+this.name);!this.D&&b.a.f.D&&Q("Cannot convert argument of type "+(b.a.l?b.a.l.name:b.a.f.name)+" to parameter type "+this.name);c=fb(b.a.c,b.a.f.b,this.b);if(this.F)switch(void 0===b.a.h&&Q("Passing raw pointer to smart pointer is illegal"),this.ka){case 0:b.a.l===
this?c=b.a.h:Q("Cannot convert argument of type "+(b.a.l?b.a.l.name:b.a.f.name)+" to parameter type "+this.name);break;case 1:c=b.a.h;break;case 2:if(b.a.l===this)c=b.a.h;else{var d=b.clone();c=this.ja(c,ib(function(){d["delete"]()}));null!==a&&a.push(this.j,c)}break;default:Q("Unsupporting sharing policy")}return c}
function jb(a,b){if(null===b)return this.K&&Q("null is not a valid "+this.name),0;b.a||Q('Cannot pass "'+U(b)+'" as a '+this.name);b.a.c||Q("Cannot pass deleted object as a pointer of type "+this.name);b.a.f.D&&Q("Cannot convert argument of type "+b.a.f.name+" to parameter type "+this.name);return fb(b.a.c,b.a.f.b,this.b)}function kb(a,b,c){if(b===c)return a;if(void 0===c.m)return null;a=kb(a,b,c.m);return null===a?null:c.$(a)}var V={};
function lb(a,b){for(void 0===b&&Q("ptr should not be undefined");a.m;)b=a.B(b),a=a.m;return V[b]}function mb(a,b){b.f&&b.c||Wa("makeClassHandle requires ptr and ptrType");!!b.l!==!!b.h&&Wa("Both smartPtrType and smartPtr must be specified");b.count={value:1};return Object.create(a,{a:{value:b}})}
function W(a,b,c,d,f,g,h,k,m,l,p){this.name=a;this.b=b;this.K=c;this.D=d;this.F=f;this.ha=g;this.ka=h;this.V=k;this.A=m;this.ja=l;this.j=p;f||void 0!==b.m?this.toWireType=hb:(this.toWireType=d?gb:jb,this.i=null)}function nb(a,b,c){e.hasOwnProperty(a)||Wa("Replacing nonexistant public symbol");void 0!==e[a].g&&void 0!==c?e[a].g[c]=b:(e[a]=b,e[a].C=c)}
function X(a,b){a=O(a);if(void 0!==e["FUNCTION_TABLE_"+a])var c=e["FUNCTION_TABLE_"+a][b];else if("undefined"!==typeof FUNCTION_TABLE)c=FUNCTION_TABLE[b];else{c=e.asm["dynCall_"+a];void 0===c&&(c=e.asm["dynCall_"+a.replace(/f/g,"d")],void 0===c&&Q("No dynCall invoker for signature: "+a));for(var d=[],f=1;f<a.length;++f)d.push("a"+f);f="return function "+("dynCall_"+a+"_"+b)+"("+d.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(d.length?", ":"")+d.join(", ")+");\n";c=(new Function("dynCall",
"rawFunction",f+"};\n"))(c,b)}"function"!==typeof c&&Q("unknown function pointer with signature "+a+": "+b);return c}var ob=void 0;function pb(a){a=qb(a);var b=O(a);Y(a);return b}function rb(a,b){function c(a){f[a]||L[a]||(Ra[a]?Ra[a].forEach(c):(d.push(a),f[a]=!0))}var d=[],f={};b.forEach(c);throw new ob(a+": "+d.map(pb).join([", "]));}function sb(a,b){for(var c=[],d=0;d<a;d++)c.push(z[(b>>2)+d]);return c}
function tb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ta(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function ub(a,b,c,d,f){var g=b.length;2>g&&Q("argTypes array size mismatch! Must at least get return value and 'this' types!");var h=null!==b[1]&&null!==c,k=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].i){k=!0;break}var m="void"!==b[0].name,l="",p="";for(c=0;c<g-2;++c)l+=(0!==c?", ":"")+"arg"+c,p+=(0!==c?", ":"")+"arg"+c+"Wired";a="return function "+Sa(a)+"("+l+") {\nif (arguments.length !== "+(g-2)+") {\nthrowBindingError('function "+a+" called with ' + arguments.length + ' arguments, expected "+
(g-2)+" args!');\n}\n";k&&(a+="var destructors = [];\n");var u=k?"destructors":"null";l="throwBindingError invoker fn runDestructors retType classParam".split(" ");d=[Q,d,f,Qa,b[0],b[1]];h&&(a+="var thisWired = classParam.toWireType("+u+", this);\n");for(c=0;c<g-2;++c)a+="var arg"+c+"Wired = argType"+c+".toWireType("+u+", arg"+c+"); // "+b[c+2].name+"\n",l.push("argType"+c),d.push(b[c+2]);h&&(p="thisWired"+(0<p.length?", ":"")+p);a+=(m?"var rv = ":"")+"invoker(fn"+(0<p.length?", ":"")+p+");\n";if(k)a+=
"runDestructors(destructors);\n";else for(c=h?1:2;c<b.length;++c)g=1===c?"thisWired":"arg"+(c-2)+"Wired",null!==b[c].i&&(a+=g+"_dtor("+g+"); // "+b[c].name+"\n",l.push(g+"_dtor"),d.push(b[c].i));m&&(a+="var ret = retType.fromWireType(rv);\nreturn ret;\n");l.push(a+"}\n");return tb(l).apply(null,d)}var vb=[],Z=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function yb(a){4<a&&0===--Z[a].L&&(Z[a]=void 0,vb.push(a))}
function ib(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=vb.length?vb.pop():Z.length;Z[b]={L:1,value:a};return b}}function U(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function zb(a,b){switch(b){case 2:return function(a){return this.fromWireType(qa[a>>2])};case 3:return function(a){return this.fromWireType(ra[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Ab(a,b,c){switch(b){case 0:return c?function(a){return na[a]}:function(a){return y[a]};case 1:return c?function(a){return oa[a>>1]}:function(a){return pa[a>>1]};case 2:return c?function(a){return z[a>>2]}:function(a){return A[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var Bb={},Cb=1;function Db(a,b){Db.o||(Db.o={});a in Db.o||(e.dynCall_v(b),Db.o[a]=1)}Va=e.InternalError=Ua("InternalError");for(var Eb=Array(256),Fb=0;256>Fb;++Fb)Eb[Fb]=String.fromCharCode(Fb);Za=Eb;
P=e.BindingError=Ua("BindingError");T.prototype.isAliasOf=function(a){if(!(this instanceof T&&a instanceof T))return!1;var b=this.a.f.b,c=this.a.c,d=a.a.f.b;for(a=a.a.c;b.m;)c=b.B(c),b=b.m;for(;d.m;)a=d.B(a),d=d.m;return b===d&&c===a};T.prototype.clone=function(){this.a.c||$a(this);if(this.a.w)return this.a.count.value+=1,this;var a=this.a;a=Object.create(Object.getPrototypeOf(this),{a:{value:{count:a.count,u:a.u,w:a.w,c:a.c,f:a.f,h:a.h,l:a.l}}});a.a.count.value+=1;a.a.u=!1;return a};
T.prototype["delete"]=function(){this.a.c||$a(this);this.a.u&&!this.a.w&&Q("Object already scheduled for deletion");--this.a.count.value;if(0===this.a.count.value){var a=this.a;a.h?a.l.j(a.h):a.f.b.j(a.c)}this.a.w||(this.a.h=void 0,this.a.c=void 0)};T.prototype.isDeleted=function(){return!this.a.c};T.prototype.deleteLater=function(){this.a.c||$a(this);this.a.u&&!this.a.w&&Q("Object already scheduled for deletion");S.push(this);1===S.length&&R&&R(ab);this.a.u=!0;return this};
W.prototype.da=function(a){this.V&&(a=this.V(a));return a};W.prototype.R=function(a){this.j&&this.j(a)};W.prototype.argPackAdvance=8;W.prototype.readValueFromPointer=J;W.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};
W.prototype.fromWireType=function(a){function b(){return this.F?mb(this.b.v,{f:this.ha,c:c,l:this,h:a}):mb(this.b.v,{f:this,c:a})}var c=this.da(a);if(!c)return this.R(a),null;var d=lb(this.b,c);if(void 0!==d){if(0===d.a.count.value)return d.a.c=c,d.a.h=a,d.clone();d=d.clone();this.R(a);return d}d=this.b.ba(c);d=bb[d];if(!d)return b.call(this);d=this.D?d.Z:d.pointerType;var f=kb(c,this.b,d.b);return null===f?b.call(this):this.F?mb(d.b.v,{f:d,c:f,l:this,h:a}):mb(d.b.v,{f:d,c:f})};
e.getInheritedInstanceCount=function(){return Object.keys(V).length};e.getLiveInheritedInstances=function(){var a=[],b;for(b in V)V.hasOwnProperty(b)&&a.push(V[b]);return a};e.flushPendingDeletes=ab;e.setDelayFunction=function(a){R=a;S.length&&R&&R(ab)};ob=e.UnboundTypeError=Ua("UnboundTypeError");e.count_emval_handles=function(){for(var a=0,b=5;b<Z.length;++b)void 0!==Z[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<Z.length;++a)if(void 0!==Z[a])return Z[a];return null};var Gb=C;
C=C+4+15&-16;ya=Gb;ua=va=ha(C);wa=ua+Aa;xa=ha(wa);z[ya>>2]=xa;e.wasmTableSize=320;e.wasmMaxTableSize=320;e.W={};
e.X={abort:x,enlargeMemory:function(){za()},getTotalMemory:function(){return D},abortOnCannotGrowMemory:za,___cxa_allocate_exception:function(a){return Hb(a)},___cxa_throw:function(a){"uncaught_exception"in Na?Na.o++:Na.o=1;throw a+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";},___setErrNo:function(a){e.___errno_location&&(z[e.___errno_location()>>2]=a);return a},___syscall140:function(a,
b){G=b;try{var c=Oa.ea();H();var d=H(),f=H(),g=H();FS.ma(c,d,g);z[f>>2]=c.position;c.fa&&0===d&&0===g&&(c.fa=null);return 0}catch(h){return"undefined"!==typeof FS&&h instanceof FS.P||x(h),-h.S}},___syscall146:I,___syscall6:function(a,b){G=b;try{var c=Oa.ea();FS.close(c);return 0}catch(d){return"undefined"!==typeof FS&&d instanceof FS.P||x(d),-d.S}},__embind_finalize_value_array:function(a){var b=Pa[a];delete Pa[a];var c=b.elements,d=c.length,f=c.map(function(a){return a.J}).concat(c.map(function(a){return a.N})),
g=b.A,h=b.j;M([a],f,function(a){c.forEach(function(b,c){var g=a[c],f=b.H,k=b.I,h=a[c+d],l=b.M,m=b.O;b.read=function(a){return g.fromWireType(f(k,a))};b.write=function(a,b){var c=[];l(m,a,h.toWireType(c,b));Qa(c)}});return[{name:b.name,fromWireType:function(a){for(var b=Array(d),g=0;g<d;++g)b[g]=c[g].read(a);h(a);return b},toWireType:function(a,f){if(d!==f.length)throw new TypeError("Incorrect number of tuple elements for "+b.name+": expected="+d+", actual="+f.length);for(var k=g(),l=0;l<d;++l)c[l].write(k,
f[l]);null!==a&&a.push(h,k);return k},argPackAdvance:8,readValueFromPointer:J,i:h}]})},__embind_finalize_value_object:function(a){var b=Xa[a];delete Xa[a];var c=b.A,d=b.j,f=b.T,g=f.map(function(a){return a.J}).concat(f.map(function(a){return a.N}));M([a],g,function(a){var g={};f.forEach(function(b,c){var d=a[c],k=b.H,h=b.I,l=a[c+f.length],m=b.M,xb=b.O;g[b.aa]={read:function(a){return d.fromWireType(k(h,a))},write:function(a,b){var c=[];m(xb,a,l.toWireType(c,b));Qa(c)}}});return[{name:b.name,fromWireType:function(a){var b=
{},c;for(c in g)b[c]=g[c].read(a);d(a);return b},toWireType:function(a,b){for(var f in g)if(!(f in b))throw new TypeError("Missing field");var k=c();for(f in g)g[f].write(k,b[f]);null!==a&&a.push(d,k);return k},argPackAdvance:8,readValueFromPointer:J,i:d}]})},__embind_register_bool:function(a,b,c,d,f){var g=Ya(c);b=O(b);N(a,{name:b,fromWireType:function(a){return!!a},toWireType:function(a,b){return b?d:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===c)var d=na;else if(2===c)d=oa;else if(4===
c)d=z;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(d[a>>g])},i:null})},__embind_register_class:function(a,b,c,d,f,g,h,k,m,l,p,u,Ea){p=O(p);g=X(f,g);k&&(k=X(h,k));l&&(l=X(m,l));Ea=X(u,Ea);var B=Sa(p);db(B,function(){rb("Cannot construct "+p+" due to unbound types",[d])});M([a,b,c],d?[d]:[],function(b){b=b[0];if(d){var c=b.b;var f=c.v}else f=T.prototype;b=Ta(B,function(){if(Object.getPrototypeOf(this)!==h)throw new P("Use 'new' to construct "+p);if(void 0===m.s)throw new P(p+
" has no accessible constructor");var a=m.s[arguments.length];if(void 0===a)throw new P("Tried to invoke ctor of "+p+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(m.s).toString()+") parameters instead!");return a.apply(this,arguments)});var h=Object.create(f,{constructor:{value:b}});b.prototype=h;var m=new eb(p,b,h,Ea,c,g,k,l);c=new W(p,m,!0,!1,!1);f=new W(p+"*",m,!1,!1,!1);var u=new W(p+" const*",m,!1,!0,!1);bb[a]={pointerType:f,Z:u};nb(B,b);return[c,f,u]})},
__embind_register_class_constructor:function(a,b,c,d,f,g){var h=sb(b,c);f=X(d,f);M([],[a],function(a){a=a[0];var c="constructor "+a.name;void 0===a.b.s&&(a.b.s=[]);if(void 0!==a.b.s[b-1])throw new P("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+a.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");a.b.s[b-1]=function(){rb("Cannot construct "+a.name+" due to unbound types",h)};M([],h,function(d){a.b.s[b-
1]=function(){arguments.length!==b-1&&Q(c+" called with "+arguments.length+" arguments, expected "+(b-1));var a=[],h=Array(b);h[0]=g;for(var k=1;k<b;++k)h[k]=d[k].toWireType(a,arguments[k-1]);h=f.apply(null,h);Qa(a);return d[0].fromWireType(h)};return[]});return[]})},__embind_register_class_function:function(a,b,c,d,f,g,h,k){var m=sb(c,d);b=O(b);g=X(f,g);M([],[a],function(a){function d(){rb("Cannot call "+f+" due to unbound types",m)}a=a[0];var f=a.name+"."+b;k&&a.b.ia.push(b);var l=a.b.v,B=l[b];
void 0===B||void 0===B.g&&B.className!==a.name&&B.C===c-2?(d.C=c-2,d.className=a.name,l[b]=d):(cb(l,b,f),l[b].g[c-2]=d);M([],m,function(d){d=ub(f,d,a,g,h);void 0===l[b].g?(d.C=c-2,l[b]=d):l[b].g[c-2]=d;return[]});return[]})},__embind_register_emval:function(a,b){b=O(b);N(a,{name:b,fromWireType:function(a){var b=Z[a].value;yb(a);return b},toWireType:function(a,b){return ib(b)},argPackAdvance:8,readValueFromPointer:J,i:null})},__embind_register_float:function(a,b,c){c=Ya(c);b=O(b);N(a,{name:b,fromWireType:function(a){return a},
toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+U(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:zb(b,c),i:null})},__embind_register_function:function(a,b,c,d,f,g){var h=sb(b,c);a=O(a);f=X(d,f);db(a,function(){rb("Cannot call "+a+" due to unbound types",h)},b-1);M([],h,function(c){c=[c[0],null].concat(c.slice(1));nb(a,ub(a,c,null,f,g),b-1);return[]})},__embind_register_integer:function(a,b,c,d,f){function g(a){return a}
b=O(b);-1===f&&(f=4294967295);var h=Ya(c);if(0===d){var k=32-8*c;g=function(a){return a<<k>>>k}}var m=-1!=b.indexOf("unsigned");N(a,{name:b,fromWireType:g,toWireType:function(a,c){if("number"!==typeof c&&"boolean"!==typeof c)throw new TypeError('Cannot convert "'+U(c)+'" to '+this.name);if(c<d||c>f)throw new TypeError('Passing a number "'+U(c)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return m?c>>>0:c|0},argPackAdvance:8,readValueFromPointer:Ab(b,
h,0!==d),i:null})},__embind_register_memory_view:function(a,b,c){function d(a){a>>=2;var b=A;return new f(b.buffer,b[a+1],b[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=O(c);N(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{ga:!0})},__embind_register_std_string:function(a,b){b=O(b);var c="std::string"===b;N(a,{name:b,fromWireType:function(a){var b=A[a>>2];if(c){var d=y[a+4+b],h=0;0!=d&&(h=d,y[a+4+b]=0);var k=a+4;for(d=
0;d<=b;++d){var m=a+4+d;if(0==y[m]){k=la(y,k);if(void 0===l)var l=k;else l+=String.fromCharCode(0),l+=k;k=m+1}}0!=h&&(y[a+4+b]=h)}else{l=Array(b);for(d=0;d<b;++d)l[d]=String.fromCharCode(y[a+4+d]);l=l.join("")}Y(a);return l},toWireType:function(a,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var d="string"===typeof b;d||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||Q("Cannot pass non-string to std::string");var f=(c&&d?function(){for(var a=0,c=0;c<b.length;++c){var d=
b.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|b.charCodeAt(++c)&1023);127>=d?++a:a=2047>=d?a+2:65535>=d?a+3:2097151>=d?a+4:67108863>=d?a+5:a+6}return a}:function(){return b.length})(),k=Hb(4+f+1);A[k>>2]=f;if(c&&d)ma(b,k+4,f+1);else if(d)for(d=0;d<f;++d){var m=b.charCodeAt(d);255<m&&(Y(k),Q("String has UTF-16 code units that do not fit in 8 bits"));y[k+4+d]=m}else for(d=0;d<f;++d)y[k+4+d]=b[d];null!==a&&a.push(Y,k);return k},argPackAdvance:8,readValueFromPointer:J,i:function(a){Y(a)}})},
__embind_register_std_wstring:function(a,b,c){c=O(c);if(2===b){var d=function(){return pa};var f=1}else 4===b&&(d=function(){return A},f=2);N(a,{name:c,fromWireType:function(a){for(var b=d(),c=A[a>>2],g=Array(c),l=a+4>>f,p=0;p<c;++p)g[p]=String.fromCharCode(b[l+p]);Y(a);return g.join("")},toWireType:function(a,c){var g=d(),h=c.length,l=Hb(4+h*b);A[l>>2]=h;for(var p=l+4>>f,u=0;u<h;++u)g[p+u]=c.charCodeAt(u);null!==a&&a.push(Y,l);return l},argPackAdvance:8,readValueFromPointer:J,i:function(a){Y(a)}})},
__embind_register_value_array:function(a,b,c,d,f,g){Pa[a]={name:O(b),A:X(c,d),j:X(f,g),elements:[]}},__embind_register_value_array_element:function(a,b,c,d,f,g,h,k,m){Pa[a].elements.push({J:b,H:X(c,d),I:f,N:g,M:X(h,k),O:m})},__embind_register_value_object:function(a,b,c,d,f,g){Xa[a]={name:O(b),A:X(c,d),j:X(f,g),T:[]}},__embind_register_value_object_field:function(a,b,c,d,f,g,h,k,m,l){Xa[a].T.push({aa:O(b),J:c,H:X(d,f),I:g,N:h,M:X(k,m),O:l})},__embind_register_void:function(a,b){b=O(b);N(a,{la:!0,
name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},__emval_decref:yb,__emval_incref:function(a){4<a&&(Z[a].L+=1)},__emval_take_value:function(a,b){var c=L[a];void 0===c&&Q("_emval_take_value has unknown type "+pb(a));a=c.readValueFromPointer(b);return ib(a)},_abort:function(){e.abort()},_emscripten_memcpy_big:function(a,b,c){y.set(y.subarray(b,b+c),a);return a},_pthread_getspecific:function(a){return Bb[a]||0},_pthread_key_create:function(a){if(0==a)return 22;z[a>>2]=Cb;
Bb[Cb]=0;Cb++;return 0},_pthread_once:Db,_pthread_setspecific:function(a,b){if(!(a in Bb))return 22;Bb[a]=b;return 0},DYNAMICTOP_PTR:ya,STACKTOP:va};var Ib=e.asm(e.W,e.X,buffer);e.asm=Ib;var Ma=e.__GLOBAL__sub_I_bind_cpp=function(){return e.asm.__GLOBAL__sub_I_bind_cpp.apply(null,arguments)},La=e.__GLOBAL__sub_I_embind_cpp=function(){return e.asm.__GLOBAL__sub_I_embind_cpp.apply(null,arguments)};e.___errno_location=function(){return e.asm.___errno_location.apply(null,arguments)};
var qb=e.___getTypeName=function(){return e.asm.___getTypeName.apply(null,arguments)},Y=e._free=function(){return e.asm._free.apply(null,arguments)},Hb=e._malloc=function(){return e.asm._malloc.apply(null,arguments)};e.dynCall_di=function(){return e.asm.dynCall_di.apply(null,arguments)};e.dynCall_dii=function(){return e.asm.dynCall_dii.apply(null,arguments)};e.dynCall_i=function(){return e.asm.dynCall_i.apply(null,arguments)};e.dynCall_ii=function(){return e.asm.dynCall_ii.apply(null,arguments)};
e.dynCall_iii=function(){return e.asm.dynCall_iii.apply(null,arguments)};e.dynCall_iiii=function(){return e.asm.dynCall_iiii.apply(null,arguments)};e.dynCall_iiiid=function(){return e.asm.dynCall_iiiid.apply(null,arguments)};e.dynCall_iiiif=function(){return e.asm.dynCall_iiiif.apply(null,arguments)};e.dynCall_iiiii=function(){return e.asm.dynCall_iiiii.apply(null,arguments)};e.dynCall_v=function(){return e.asm.dynCall_v.apply(null,arguments)};
e.dynCall_vi=function(){return e.asm.dynCall_vi.apply(null,arguments)};e.dynCall_vii=function(){return e.asm.dynCall_vii.apply(null,arguments)};e.dynCall_viid=function(){return e.asm.dynCall_viid.apply(null,arguments)};e.dynCall_viif=function(){return e.asm.dynCall_viif.apply(null,arguments)};e.dynCall_viii=function(){return e.asm.dynCall_viii.apply(null,arguments)};e.dynCall_viiid=function(){return e.asm.dynCall_viiid.apply(null,arguments)};
e.dynCall_viiif=function(){return e.asm.dynCall_viiif.apply(null,arguments)};e.dynCall_viiii=function(){return e.asm.dynCall_viiii.apply(null,arguments)};e.dynCall_viiiii=function(){return e.asm.dynCall_viiiii.apply(null,arguments)};e.dynCall_viiiiii=function(){return e.asm.dynCall_viiiiii.apply(null,arguments)};e.asm=Ib;F=function Jb(){e.calledRun||Kb();e.calledRun||(F=Jb)};
function Kb(){function a(){if(!e.calledRun&&(e.calledRun=!0,!ja)){Ha||(Ha=!0,Ba(Da));Ba(Fa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var a=e.postRun.shift();Ga.unshift(a)}Ba(Ga)}}if(!(0<E)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ia();Ba(Ca);0<E||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);a()},1)):a())}}e.run=Kb;function x(a){if(e.onAbort)e.onAbort(a);void 0!==a?(fa(a),w(a),a=JSON.stringify(a)):a="";ja=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=x;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();e.noExitRuntime=!0;Kb();

import { createRequire } from 'node:module';
globalThis['require'] ??= createRequire(import.meta.url);
import{b as ee,c as $e,e as te}from"./chunk-ZAAD4LGZ.mjs";import{a as g,b as C,e as s}from"./chunk-YJ4N4I6Q.mjs";var R,$,I,Re,ke,_e=s(()=>{"use strict";R=(e,t)=>{let r=[];if(e&&r.push(e),t)for(let o of t)r.push(o);return r},$=(e,t)=>`${e||"anonymous"}${t&&t.length>0?` (a.k.a. ${t.join(",")})`:""}`,I=()=>{let e=[],t=[],r=!1,o=new Set,n=f=>f.sort((u,l)=>Re[l.step]-Re[u.step]||ke[l.priority||"normal"]-ke[u.priority||"normal"]),i=f=>{let u=!1,l=y=>{let E=R(y.name,y.aliases);if(E.includes(f)){u=!0;for(let h of E)o.delete(h);return!1}return!0};return e=e.filter(l),t=t.filter(l),u},a=f=>{let u=!1,l=y=>{if(y.middleware===f){u=!0;for(let E of R(y.name,y.aliases))o.delete(E);return!1}return!0};return e=e.filter(l),t=t.filter(l),u},c=f=>(e.forEach(u=>{f.add(u.middleware,g({},u))}),t.forEach(u=>{f.addRelativeTo(u.middleware,g({},u))}),f.identifyOnResolve?.(T.identifyOnResolve()),f),d=f=>{let u=[];return f.before.forEach(l=>{l.before.length===0&&l.after.length===0?u.push(l):u.push(...d(l))}),u.push(f),f.after.reverse().forEach(l=>{l.before.length===0&&l.after.length===0?u.push(l):u.push(...d(l))}),u},b=(f=!1)=>{let u=[],l=[],y={};return e.forEach(h=>{let m=C(g({},h),{before:[],after:[]});for(let w of R(m.name,m.aliases))y[w]=m;u.push(m)}),t.forEach(h=>{let m=C(g({},h),{before:[],after:[]});for(let w of R(m.name,m.aliases))y[w]=m;l.push(m)}),l.forEach(h=>{if(h.toMiddleware){let m=y[h.toMiddleware];if(m===void 0){if(f)return;throw new Error(`${h.toMiddleware} is not found when adding ${$(h.name,h.aliases)} middleware ${h.relation} ${h.toMiddleware}`)}h.relation==="after"&&m.after.push(h),h.relation==="before"&&m.before.push(h)}}),n(u).map(d).reduce((h,m)=>(h.push(...m),h),[])},T={add:(f,u={})=>{let{name:l,override:y,aliases:E}=u,h=g({step:"initialize",priority:"normal",middleware:f},u),m=R(l,E);if(m.length>0){if(m.some(w=>o.has(w))){if(!y)throw new Error(`Duplicate middleware name '${$(l,E)}'`);for(let w of m){let p=e.findIndex(D=>D.name===w||D.aliases?.some(K=>K===w));if(p===-1)continue;let x=e[p];if(x.step!==h.step||h.priority!==x.priority)throw new Error(`"${$(x.name,x.aliases)}" middleware with ${x.priority} priority in ${x.step} step cannot be overridden by "${$(l,E)}" middleware with ${h.priority} priority in ${h.step} step.`);e.splice(p,1)}}for(let w of m)o.add(w)}e.push(h)},addRelativeTo:(f,u)=>{let{name:l,override:y,aliases:E}=u,h=g({middleware:f},u),m=R(l,E);if(m.length>0){if(m.some(w=>o.has(w))){if(!y)throw new Error(`Duplicate middleware name '${$(l,E)}'`);for(let w of m){let p=t.findIndex(D=>D.name===w||D.aliases?.some(K=>K===w));if(p===-1)continue;let x=t[p];if(x.toMiddleware!==h.toMiddleware||x.relation!==h.relation)throw new Error(`"${$(x.name,x.aliases)}" middleware ${x.relation} "${x.toMiddleware}" middleware cannot be overridden by "${$(l,E)}" middleware ${h.relation} "${h.toMiddleware}" middleware.`);t.splice(p,1)}}for(let w of m)o.add(w)}t.push(h)},clone:()=>c(I()),use:f=>{f.applyToStack(T)},remove:f=>typeof f=="string"?i(f):a(f),removeByTag:f=>{let u=!1,l=y=>{let{tags:E,name:h,aliases:m}=y;if(E&&E.includes(f)){let w=R(h,m);for(let p of w)o.delete(p);return u=!0,!1}return!0};return e=e.filter(l),t=t.filter(l),u},concat:f=>{let u=c(I());return u.use(f),u.identifyOnResolve(r||u.identifyOnResolve()||(f.identifyOnResolve?.()??!1)),u},applyToStack:c,identify:()=>b(!0).map(f=>{let u=f.step??f.relation+" "+f.toMiddleware;return $(f.name,f.aliases)+" - "+u}),identifyOnResolve(f){return typeof f=="boolean"&&(r=f),r},resolve:(f,u)=>{for(let l of b().map(y=>y.middleware).reverse())f=l(f,u);return r&&console.log(T.identify()),f}};return T},Re={initialize:5,serialize:4,build:3,finalizeRequest:2,deserialize:1},ke={high:3,normal:2,low:1}});var re=s(()=>{"use strict";_e()});var Me,Ie=s(()=>{"use strict";re();Me=class{constructor(t){this.config=t,this.middlewareStack=I()}send(t,r,o){let n=typeof r!="function"?r:void 0,i=typeof r=="function"?r:o,a=n===void 0&&this.config.cacheMiddleware===!0,c;if(a){this.handlers||(this.handlers=new WeakMap);let d=this.handlers;d.has(t.constructor)?c=d.get(t.constructor):(c=t.resolveMiddleware(this.middlewareStack,this.config,n),d.set(t.constructor,c))}else delete this.handlers,c=t.resolveMiddleware(this.middlewareStack,this.config,n);if(i)c(t).then(d=>i(null,d.output),d=>i(d)).catch(()=>{});else return c(t).then(d=>d.output)}destroy(){this.config?.requestHandler?.destroy?.(),delete this.handlers}}});var oe,ne,Ne=s(()=>{"use strict";re();te();oe=class{constructor(){this.middlewareStack=I()}static classBuilder(){return new ne}resolveMiddlewareWithContext(t,r,o,{middlewareFn:n,clientName:i,commandName:a,inputFilterSensitiveLog:c,outputFilterSensitiveLog:d,smithyContext:b,additionalContext:T,CommandCtor:f}){for(let h of n.bind(this)(f,t,r,o))this.middlewareStack.use(h);let u=t.concat(this.middlewareStack),{logger:l}=r,y=g({logger:l,clientName:i,commandName:a,inputFilterSensitiveLog:c,outputFilterSensitiveLog:d,[$e]:g({commandInstance:this},b)},T),{requestHandler:E}=r;return u.resolve(h=>E.handle(h.request,o||{}),y)}},ne=class{constructor(){this._init=()=>{},this._ep={},this._middlewareFn=()=>[],this._commandName="",this._clientName="",this._additionalContext={},this._smithyContext={},this._inputFilterSensitiveLog=t=>t,this._outputFilterSensitiveLog=t=>t,this._serializer=null,this._deserializer=null}init(t){this._init=t}ep(t){return this._ep=t,this}m(t){return this._middlewareFn=t,this}s(t,r,o={}){return this._smithyContext=g({service:t,operation:r},o),this}c(t={}){return this._additionalContext=t,this}n(t,r){return this._clientName=t,this._commandName=r,this}f(t=o=>o,r=o=>o){return this._inputFilterSensitiveLog=t,this._outputFilterSensitiveLog=r,this}ser(t){return this._serializer=t,this}de(t){return this._deserializer=t,this}build(){let t=this,r;return r=class extends oe{static getEndpointParameterInstructions(){return t._ep}constructor(...[o]){super(),this.serialize=t._serializer,this.deserialize=t._deserializer,this.input=o??{},t._init(this)}resolveMiddleware(o,n,i){return this.resolveMiddlewareWithContext(o,n,i,{CommandCtor:r,middlewareFn:t._middlewareFn,clientName:t._clientName,commandName:t._commandName,inputFilterSensitiveLog:t._inputFilterSensitiveLog,outputFilterSensitiveLog:t._outputFilterSensitiveLog,smithyContext:t._smithyContext,additionalContext:t._additionalContext})}}}}});var _o,Mo,Pe=s(()=>{"use strict";_o=e=>{let t=e.httpHandler;return{setHttpHandler(r){t=r},httpHandler(){return t},updateHttpClientConfig(r,o){t.updateHttpClientConfig(r,o)},httpHandlerConfigs(){return t.httpHandlerConfigs()}}},Mo=e=>({httpHandler:e.httpHandler()})});var Ue=s(()=>{"use strict";Pe()});var Be=s(()=>{"use strict";te()});var Oe=s(()=>{"use strict"});var Fe=s(()=>{"use strict"});function Lr(e){return Object.keys(e).reduce((t,r)=>{let o=e[r];return C(g({},t),{[r]:Array.isArray(o)?[...o]:o})},{})}var j,Le=s(()=>{"use strict";j=class e{constructor(t){this.method=t.method||"GET",this.hostname=t.hostname||"localhost",this.port=t.port,this.query=t.query||{},this.headers=t.headers||{},this.body=t.body,this.protocol=t.protocol?t.protocol.slice(-1)!==":"?`${t.protocol}:`:t.protocol:"https:",this.path=t.path?t.path.charAt(0)!=="/"?`/${t.path}`:t.path:"/",this.username=t.username,this.password=t.password,this.fragment=t.fragment}static clone(t){let r=new e(C(g({},t),{headers:g({},t.headers)}));return r.query&&(r.query=Lr(r.query)),r}static isInstance(t){if(!t)return!1;let r=t;return"method"in r&&"protocol"in r&&"hostname"in r&&"path"in r&&typeof r.query=="object"&&typeof r.headers=="object"}clone(){return e.clone(this)}}});var N,De=s(()=>{"use strict";N=class{constructor(t){this.statusCode=t.statusCode,this.reason=t.reason,this.headers=t.headers||{},this.body=t.body}static isInstance(t){if(!t)return!1;let r=t;return typeof r.statusCode=="number"&&typeof r.headers=="object"}}});var He=s(()=>{"use strict"});var ve=s(()=>{"use strict"});var H=s(()=>{"use strict";Ue();Be();Oe();Fe();Le();De();He();ve()});var v,Dr,se=s(()=>{"use strict";v=e=>encodeURIComponent(e).replace(/[!'()*]/g,Dr),Dr=e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`});var ze=s(()=>{"use strict";se()});var We=s(()=>{"use strict";se();ze()});function q(e){let t=[];for(let r of Object.keys(e).sort()){let o=e[r];if(r=v(r),Array.isArray(o))for(let n=0,i=o.length;n<i;n++)t.push(`${r}=${v(o[n])}`);else{let n=r;(o||typeof o=="string")&&(n+=`=${v(o)}`),t.push(n)}}return t.join("&")}var J=s(()=>{"use strict";We()});var je,qe=s(()=>{"use strict";je=["ECONNRESET","EPIPE","ETIMEDOUT"]});var ie,ae=s(()=>{"use strict";ie=e=>{let t={};for(let r of Object.keys(e)){let o=e[r];t[r]=Array.isArray(o)?o.join(","):o}return t}});var S,P=s(()=>{"use strict";S={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e)}});var Je,Ye,Ve=s(()=>{"use strict";P();Je=1e3,Ye=(e,t,r=0)=>{if(!r)return-1;let o=n=>{let i=S.setTimeout(()=>{e.destroy(),t(Object.assign(new Error(`Socket timed out without establishing a connection within ${r} ms`),{name:"TimeoutError"}))},r-n),a=c=>{c?.connecting?c.on("connect",()=>{S.clearTimeout(i)}):S.clearTimeout(i)};e.socket?a(e.socket):e.on("socket",a)};return r<2e3?(o(0),0):S.setTimeout(o.bind(null,Je),Je)}});var Hr,Ge,Qe=s(()=>{"use strict";P();Hr=3e3,Ge=(e,{keepAlive:t,keepAliveMsecs:r},o=Hr)=>{if(t!==!0)return-1;let n=()=>{e.socket?e.socket.setKeepAlive(t,r||0):e.on("socket",i=>{i.setKeepAlive(t,r||0)})};return o===0?(n(),0):S.setTimeout(n,o)}});var Xe,Ze,Ke=s(()=>{"use strict";P();Xe=3e3,Ze=(e,t,r=0)=>{let o=n=>{e.setTimeout(r-n,()=>{e.destroy(),t(Object.assign(new Error(`Connection timed out after ${r} ms`),{name:"TimeoutError"}))})};return 0<r&&r<6e3?(o(0),0):S.setTimeout(o.bind(null,r===0?0:Xe),Xe)}});import{Readable as vr}from"stream";async function ce(e,t,r=et){let o=t.headers??{},n=o.Expect||o.expect,i=-1,a=!0;n==="100-continue"&&(a=await Promise.race([new Promise(c=>{i=Number(S.setTimeout(c,Math.max(et,r)))}),new Promise(c=>{e.on("continue",()=>{S.clearTimeout(i),c(!0)}),e.on("response",()=>{S.clearTimeout(i),c(!1)}),e.on("error",()=>{S.clearTimeout(i),c(!1)})})])),a&&zr(e,t.body)}function zr(e,t){if(t instanceof vr){t.pipe(e);return}if(t){if(Buffer.isBuffer(t)||typeof t=="string"){e.end(t);return}let r=t;if(typeof r=="object"&&r.buffer&&typeof r.byteOffset=="number"&&typeof r.byteLength=="number"){e.end(Buffer.from(r.buffer,r.byteOffset,r.byteLength));return}e.end(Buffer.from(t));return}e.end()}var et,fe=s(()=>{"use strict";P();et=1e3});import{Agent as tt,request as Wr}from"http";import{Agent as rt,request as jr}from"https";var ot,nt=s(()=>{"use strict";H();J();qe();ae();Ve();Qe();Ke();P();fe();ot=class e{static create(t){return typeof t?.handle=="function"?t:new e(t)}static checkSocketUsage(t,r,o=console){let{sockets:n,requests:i,maxSockets:a}=t;if(typeof a!="number"||a===1/0||Date.now()-15e3<r)return r;if(n&&i)for(let d in n){let b=n[d]?.length??0,T=i[d]?.length??0;if(b>=a&&T>=2*a)return o?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${b} and ${T} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`),Date.now()}return r}constructor(t){this.socketWarningTimestamp=0,this.metadata={handlerProtocol:"http/1.1"},this.configProvider=new Promise((r,o)=>{typeof t=="function"?t().then(n=>{r(this.resolveDefaultConfig(n))}).catch(o):r(this.resolveDefaultConfig(t))})}resolveDefaultConfig(t){let{requestTimeout:r,connectionTimeout:o,socketTimeout:n,httpAgent:i,httpsAgent:a}=t||{},c=!0,d=50;return{connectionTimeout:o,requestTimeout:r??n,httpAgent:i instanceof tt||typeof i?.destroy=="function"?i:new tt(g({keepAlive:c,maxSockets:d},i)),httpsAgent:a instanceof rt||typeof a?.destroy=="function"?a:new rt(g({keepAlive:c,maxSockets:d},a)),logger:console}}destroy(){this.config?.httpAgent?.destroy(),this.config?.httpsAgent?.destroy()}async handle(t,{abortSignal:r}={}){return this.config||(this.config=await this.configProvider),new Promise((o,n)=>{let i,a=[],c=async p=>{await i,a.forEach(S.clearTimeout),o(p)},d=async p=>{await i,a.forEach(S.clearTimeout),n(p)};if(!this.config)throw new Error("Node HTTP request handler config is not resolved");if(r?.aborted){let p=new Error("Request aborted");p.name="AbortError",d(p);return}let b=t.protocol==="https:",T=b?this.config.httpsAgent:this.config.httpAgent;a.push(S.setTimeout(()=>{this.socketWarningTimestamp=e.checkSocketUsage(T,this.socketWarningTimestamp,this.config.logger)},this.config.socketAcquisitionWarningTimeout??(this.config.requestTimeout??2e3)+(this.config.connectionTimeout??1e3)));let f=q(t.query||{}),u;if(t.username!=null||t.password!=null){let p=t.username??"",x=t.password??"";u=`${p}:${x}`}let l=t.path;f&&(l+=`?${f}`),t.fragment&&(l+=`#${t.fragment}`);let y=t.hostname??"";y[0]==="["&&y.endsWith("]")?y=t.hostname.slice(1,-1):y=t.hostname;let E={headers:t.headers,host:y,method:t.method,path:l,port:t.port,agent:T,auth:u},m=(b?jr:Wr)(E,p=>{let x=new N({statusCode:p.statusCode||-1,reason:p.statusMessage,headers:ie(p.headers),body:p});c({response:x})});if(m.on("error",p=>{je.includes(p.code)?d(Object.assign(p,{name:"TimeoutError"})):d(p)}),r){let p=()=>{m.destroy();let x=new Error("Request aborted");x.name="AbortError",d(x)};if(typeof r.addEventListener=="function"){let x=r;x.addEventListener("abort",p,{once:!0}),m.once("close",()=>x.removeEventListener("abort",p))}else r.onabort=p}a.push(Ye(m,d,this.config.connectionTimeout)),a.push(Ze(m,d,this.config.requestTimeout));let w=E.agent;typeof w=="object"&&"keepAlive"in w&&a.push(Ge(m,{keepAlive:w.keepAlive,keepAliveMsecs:w.keepAliveMsecs})),i=ce(m,t,this.config.requestTimeout).catch(p=>(a.forEach(S.clearTimeout),n(p)))})}updateHttpClientConfig(t,r){this.config=void 0,this.configProvider=this.configProvider.then(o=>C(g({},o),{[t]:r}))}httpHandlerConfigs(){return this.config??{}}}});var st=s(()=>{"use strict"});var it=s(()=>{"use strict";st()});var at=s(()=>{"use strict";H();J();ae();it();fe()});import{Writable as qr}from"stream";var Y,ct=s(()=>{"use strict";Y=class extends qr{constructor(){super(...arguments),this.bufferedBytes=[]}_write(t,r,o){this.bufferedBytes.push(t),o()}}});async function Yr(e){let t=[],r=e.getReader(),o=!1,n=0;for(;!o;){let{done:c,value:d}=await r.read();d&&(t.push(d),n+=d.length),o=c}let i=new Uint8Array(n),a=0;for(let c of t)i.set(c,a),a+=c.length;return i}var ft,Jr,ut=s(()=>{"use strict";ct();ft=e=>Jr(e)?Yr(e):new Promise((t,r)=>{let o=new Y;e.pipe(o),e.on("error",n=>{o.end(),r(n)}),o.on("error",r),o.on("finish",function(){let n=new Uint8Array(Buffer.concat(this.bufferedBytes));t(n)})}),Jr=e=>typeof ReadableStream=="function"&&e instanceof ReadableStream});var dt=s(()=>{"use strict";nt();at();ut()});var Xn,lt=s(()=>{"use strict";Xn="***SensitiveInformation***"});var Kn,ht=s(()=>{"use strict";Kn=(e,t)=>{for(let r of Object.keys(e)){let o=e[r],n=async function(a,c,d){let b=new o(a);if(typeof c=="function")this.send(b,c);else if(typeof d=="function"){if(typeof c!="object")throw new Error(`Expected http options but got ${typeof c}`);this.send(b,c||{},d)}else return this.send(b,c)},i=(r[0].toLowerCase()+r.slice(1)).replace(/Command$/,"");t.prototype[i]=n}}});var mt,pt,ue=s(()=>{"use strict";mt=class e extends Error{constructor(t){super(t.message),Object.setPrototypeOf(this,e.prototype),this.name=t.name,this.$fault=t.$fault,this.$metadata=t.$metadata}},pt=(e,t={})=>{Object.entries(t).filter(([,o])=>o!==void 0).forEach(([o,n])=>{(e[o]==null||e[o]==="")&&(e[o]=n)});let r=e.message||e.Message||"UnknownError";return e.message=r,delete e.Message,e}});var yt,gt=s(()=>{"use strict";yt=e=>typeof ArrayBuffer=="function"&&e instanceof ArrayBuffer||Object.prototype.toString.call(e)==="[object ArrayBuffer]"});import{Buffer as de}from"buffer";var U,V,B=s(()=>{"use strict";gt();U=(e,t=0,r=e.byteLength-t)=>{if(!yt(e))throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`);return de.from(e,t,r)},V=(e,t)=>{if(typeof e!="string")throw new TypeError(`The "input" argument must be of type string. Received type ${typeof e} (${e})`);return t?de.from(e,t):de.from(e)}});var Vr,wt,xt=s(()=>{"use strict";B();Vr=/^[A-Za-z0-9+/]*={0,2}$/,wt=e=>{if(e.length*3%4!==0)throw new TypeError("Incorrect padding on base64 string.");if(!Vr.exec(e))throw new TypeError("Invalid base64 string.");let t=V(e,"base64");return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}});var O,le=s(()=>{"use strict";B();O=e=>{let t=V(e,"utf8");return new Uint8Array(t.buffer,t.byteOffset,t.byteLength/Uint8Array.BYTES_PER_ELEMENT)}});var ds,bt=s(()=>{"use strict";le();ds=e=>typeof e=="string"?O(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(e)});var G,Et=s(()=>{"use strict";B();G=e=>{if(typeof e=="string")return e;if(typeof e!="object"||typeof e.byteOffset!="number"||typeof e.byteLength!="number")throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");return U(e.buffer,e.byteOffset,e.byteLength).toString("utf8")}});var Q=s(()=>{"use strict";le();bt();Et()});var F,St=s(()=>{"use strict";B();Q();F=e=>{let t;if(typeof e=="string"?t=O(e):t=e,typeof t!="object"||typeof t.byteOffset!="number"||typeof t.byteLength!="number")throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");return U(t.buffer,t.byteOffset,t.byteLength).toString("base64")}});var z=s(()=>{"use strict";xt();St()});function Tt(e,t="utf-8"){return t==="base64"?F(e):G(e)}function Ct(e,t){return t==="base64"?A.mutate(wt(e)):A.mutate(O(e))}var At=s(()=>{"use strict";z();Q();he()});var A,he=s(()=>{"use strict";At();A=class e extends Uint8Array{static fromString(t,r="utf-8"){switch(typeof t){case"string":return Ct(t,r);default:throw new Error(`Unsupported conversion from ${typeof t} to Uint8ArrayBlobAdapter.`)}}static mutate(t){return Object.setPrototypeOf(t,e.prototype),t}transformToString(t="utf-8"){return Tt(this,t)}}});var $t=s(()=>{"use strict"});var Rt=s(()=>{"use strict"});var kt=s(()=>{"use strict"});var _t=s(()=>{"use strict";H();J();Rt();kt()});async function Gr(e){let t=[],r=e.getReader(),o=!1,n=0;for(;!o;){let{done:c,value:d}=await r.read();d&&(t.push(d),n+=d.length),o=c}let i=new Uint8Array(n),a=0;for(let c of t)i.set(c,a),a+=c.length;return i}var Mt,It=s(()=>{"use strict";Mt=async e=>typeof Blob=="function"&&e instanceof Blob||e.constructor?.name==="Blob"?new Uint8Array(await e.arrayBuffer()):Gr(e)});var Nt=s(()=>{"use strict";_t();It()});function qs(e){if(e.length%2!==0)throw new Error("Hex encoded strings must have an even number length");let t=new Uint8Array(e.length/2);for(let r=0;r<e.length;r+=2){let o=e.slice(r,r+2).toLowerCase();if(o in me)t[r/2]=me[o];else throw new Error(`Cannot decode unrecognized sequence ${o} as hexadecimal`)}return t}function Ut(e){let t="";for(let r=0;r<e.byteLength;r++)t+=Pt[e[r]];return t}var Pt,me,Bt=s(()=>{"use strict";Pt={},me={};for(let e=0;e<256;e++){let t=e.toString(16).toLowerCase();t.length===1&&(t=`0${t}`),Pt[e]=t,me[t]=e}});var k,_=s(()=>{"use strict";k=e=>typeof ReadableStream=="function"&&(e?.constructor?.name===ReadableStream.name||e instanceof ReadableStream)});var Ot,Lt,Ft,Dt=s(()=>{"use strict";Nt();z();Bt();Q();_();Ot="The stream has already been transformed.",Lt=e=>{if(!Ft(e)&&!k(e)){let n=e?.__proto__?.constructor?.name||e;throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${n}`)}let t=!1,r=async()=>{if(t)throw new Error(Ot);return t=!0,await Mt(e)},o=n=>{if(typeof n.stream!="function")throw new Error(`Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.
If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body`);return n.stream()};return Object.assign(e,{transformToByteArray:r,transformToString:async n=>{let i=await r();if(n==="base64")return F(i);if(n==="hex")return Ut(i);if(n===void 0||n==="utf8"||n==="utf-8")return G(i);if(typeof TextDecoder=="function")return new TextDecoder(n).decode(i);throw new Error("TextDecoder is not available, please make sure polyfill is provided.")},transformToWebStream:()=>{if(t)throw new Error(Ot);if(t=!0,Ft(e))return o(e);if(k(e))return e;throw new Error(`Cannot transform payload to web stream, got ${e}`)}})},Ft=e=>typeof Blob=="function"&&e instanceof Blob});import{Readable as pe}from"stream";var Ht,ni,vt=s(()=>{"use strict";dt();B();Dt();Ht="The stream has already been transformed.",ni=e=>{if(!(e instanceof pe))try{return Lt(e)}catch{let n=e?.__proto__?.constructor?.name||e;throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${n}`)}let t=!1,r=async()=>{if(t)throw new Error(Ht);return t=!0,await ft(e)};return Object.assign(e,{transformToByteArray:r,transformToString:async o=>{let n=await r();return o===void 0||Buffer.isEncoding(o)?U(n.buffer,n.byteOffset,n.byteLength).toString(o):new TextDecoder(o).decode(n)},transformToWebStream:()=>{if(t)throw new Error(Ht);if(e.readableFlowing!==null)throw new Error("The stream has been consumed by other callbacks.");if(typeof pe.toWeb!="function")throw new Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");return t=!0,pe.toWeb(e)}})}});var zt=s(()=>{"use strict"});var Wt=s(()=>{"use strict";zt();_()});var jt=s(()=>{"use strict"});var qt=s(()=>{"use strict";jt();_()});var ye=s(()=>{"use strict";z()});var Jt=s(()=>{"use strict"});var Yt=s(()=>{"use strict";z();_();Jt()});var Vt=s(()=>{"use strict";_();ye();Yt()});var Gt=s(()=>{"use strict";he();$t();vt();Wt();qt();_();Vt();ye()});var Qr,Qt=s(()=>{"use strict";Gt();Qr=async(e=new Uint8Array,t)=>{if(e instanceof Uint8Array)return A.mutate(e);if(!e)return A.mutate(new Uint8Array);let r=t.streamCollector(e);return A.mutate(await r)}});function X(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}var ge=s(()=>{"use strict"});var we,xe=s(()=>{"use strict";ge();we=(e,t,r,o,n,i)=>{if(t!=null&&t[r]!==void 0){let a=o();if(a.length<=0)throw new Error("Empty value provided for input HTTP label: "+r+".");e=e.replace(n,i?a.split("/").map(c=>X(c)).join("/"):X(a))}else throw new Error("No value provided for input HTTP label: "+r+".");return e}});function Yi(e,t){return new be(e,t)}var be,Xt=s(()=>{"use strict";H();xe();be=class{constructor(t,r){this.input=t,this.context=r,this.query={},this.method="",this.headers={},this.path="",this.body=null,this.hostname="",this.resolvePathStack=[]}async build(){let{hostname:t,protocol:r="https",port:o,path:n}=await this.context.endpoint();this.path=n;for(let i of this.resolvePathStack)i(this.path);return new j({protocol:r,hostname:this.hostname||t,port:o,method:this.method,path:this.path,query:this.query,body:this.body,headers:this.headers})}hn(t){return this.hostname=t,this}bp(t){return this.resolvePathStack.push(r=>{this.path=`${r?.endsWith("/")?r.slice(0,-1):r||""}`+t}),this}p(t,r,o,n){return this.resolvePathStack.push(i=>{this.path=we(i,this.input,t,r,o,n)}),this}h(t){return this.headers=t,this}q(t){return this.query=t,this}b(t){return this.body=t,this}m(t){return this.method=t,this}}});var Z=s(()=>{"use strict";Qt();ge();Xt();xe()});var Zt=s(()=>{"use strict";Z()});var Ee,Xr,Kt,Zr,er,tr,rr,Se,Kr,ra,oa,na,or,nr,eo,W,sa,Te,sr,ir,ar,Ce=s(()=>{"use strict";Ee=e=>{if(e!=null){if(typeof e=="string"){let t=parseFloat(e);if(!Number.isNaN(t))return String(t)!==String(e)&&ar.warn(ir(`Expected number but observed string: ${e}`)),t}if(typeof e=="number")return e;throw new TypeError(`Expected number, got ${typeof e}: ${e}`)}},Xr=Math.ceil(34028234663852886e22),Kt=e=>{let t=Ee(e);if(t!==void 0&&!Number.isNaN(t)&&t!==1/0&&t!==-1/0&&Math.abs(t)>Xr)throw new TypeError(`Expected 32-bit float, got ${e}`);return t},Zr=e=>{if(e!=null){if(Number.isInteger(e)&&!Number.isNaN(e))return e;throw new TypeError(`Expected integer, got ${typeof e}: ${e}`)}},er=e=>Se(e,32),tr=e=>Se(e,16),rr=e=>Se(e,8),Se=(e,t)=>{let r=Zr(e);if(r!==void 0&&Kr(r,t)!==r)throw new TypeError(`Expected ${t}-bit integer, got ${e}`);return r},Kr=(e,t)=>{switch(t){case 32:return Int32Array.of(e)[0];case 16:return Int16Array.of(e)[0];case 8:return Int8Array.of(e)[0]}},ra=(e,t)=>{if(e==null)throw t?new TypeError(`Expected a non-null value for ${t}`):new TypeError("Expected a non-null value");return e},oa=e=>{if(e==null)return;if(typeof e=="object"&&!Array.isArray(e))return e;let t=Array.isArray(e)?"array":typeof e;throw new TypeError(`Expected object, got ${t}: ${e}`)},na=e=>{if(e!=null){if(typeof e=="string")return e;if(["boolean","number","bigint"].includes(typeof e))return ar.warn(ir(`Expected string, got ${typeof e}: ${e}`)),String(e);throw new TypeError(`Expected string, got ${typeof e}: ${e}`)}},or=e=>Ee(typeof e=="string"?W(e):e),nr=e=>Kt(typeof e=="string"?W(e):e),eo=/(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,W=e=>{let t=e.match(eo);if(t===null||t[0].length!==e.length)throw new TypeError("Expected real number, got implicit NaN");return parseFloat(e)},sa=e=>er(typeof e=="string"?W(e):e),Te=e=>tr(typeof e=="string"?W(e):e),sr=e=>rr(typeof e=="string"?W(e):e),ir=e=>String(new TypeError(e).stack||e).split(`
`).slice(0,5).filter(t=>!t.includes("stackTraceWarning")).join(`
`),ar={warn:console.warn}});var to,ro,ca,oo,fa,ua,da,la,ha,cr,ma,no,so,io,M,ao,co,Ae,fr=s(()=>{"use strict";Ce();to=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ro=new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/),ca=e=>{if(e==null)return;if(typeof e!="string")throw new TypeError("RFC-3339 date-times must be expressed as strings");let t=ro.exec(e);if(!t)throw new TypeError("Invalid RFC-3339 date-time value");let[r,o,n,i,a,c,d,b]=t,T=Te(Ae(o)),f=M(n,"month",1,12),u=M(i,"day",1,31);return cr(T,f,u,{hours:a,minutes:c,seconds:d,fractionalMilliseconds:b})},oo=new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),fa=e=>{if(e==null)return;if(typeof e!="string")throw new TypeError("RFC-3339 date-times must be expressed as strings");let t=oo.exec(e);if(!t)throw new TypeError("Invalid RFC-3339 date-time value");let[r,o,n,i,a,c,d,b,T]=t,f=Te(Ae(o)),u=M(n,"month",1,12),l=M(i,"day",1,31),y=cr(f,u,l,{hours:a,minutes:c,seconds:d,fractionalMilliseconds:b});return T.toUpperCase()!="Z"&&y.setTime(y.getTime()-co(T)),y},ua=new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),da=new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),la=new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/),ha=e=>{if(e==null)return;let t;if(typeof e=="number")t=e;else if(typeof e=="string")t=or(e);else if(typeof e=="object"&&e.tag===1)t=e.value;else throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");if(Number.isNaN(t)||t===1/0||t===-1/0)throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");return new Date(Math.round(t*1e3))},cr=(e,t,r,o)=>{let n=t-1;return so(e,n,r),new Date(Date.UTC(e,n,r,M(o.hours,"hour",0,23),M(o.minutes,"minute",0,59),M(o.seconds,"seconds",0,60),ao(o.fractionalMilliseconds)))},ma=50*365*24*60*60*1e3,no=[31,28,31,30,31,30,31,31,30,31,30,31],so=(e,t,r)=>{let o=no[t];if(t===1&&io(e)&&(o=29),r>o)throw new TypeError(`Invalid day for ${to[t]} in ${e}: ${r}`)},io=e=>e%4===0&&(e%100!==0||e%400===0),M=(e,t,r,o)=>{let n=sr(Ae(e));if(n<r||n>o)throw new TypeError(`${t} must be between ${r} and ${o}, inclusive`);return n},ao=e=>e==null?0:nr("0."+e)*1e3,co=e=>{let t=e[0],r=1;if(t=="+")r=1;else if(t=="-")r=-1;else throw new TypeError(`Offset direction, ${t}, must be "+" or "-"`);let o=Number(e.substring(1,3)),n=Number(e.substring(4,6));return r*(o*60+n)*60*1e3},Ae=e=>{let t=0;for(;t<e.length-1&&e.charAt(t)==="0";)t++;return t===0?e:e.slice(t)}});var fo,ga,uo,ur=s(()=>{"use strict";ue();fo=({output:e,parsedBody:t,exceptionCtor:r,errorCode:o})=>{let n=uo(e),i=n.httpStatusCode?n.httpStatusCode+"":void 0,a=new r({name:t?.code||t?.Code||o||i||"UnknownError",$fault:"client",$metadata:n});throw pt(a,t)},ga=e=>({output:t,parsedBody:r,errorCode:o})=>{fo({output:t,parsedBody:r,exceptionCtor:e,errorCode:o})},uo=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]})});var xa,dr=s(()=>{"use strict";xa=e=>{switch(e){case"standard":return{retryMode:"standard",connectionTimeout:3100};case"in-region":return{retryMode:"standard",connectionTimeout:1100};case"cross-region":return{retryMode:"standard",connectionTimeout:3100};case"mobile":return{retryMode:"standard",connectionTimeout:3e4};default:return{}}}});var lr,Ea,hr=s(()=>{"use strict";lr=!1,Ea=e=>{e&&!lr&&parseInt(e.substring(1,e.indexOf(".")))<16&&(lr=!0)}});var mr=s(()=>{"use strict";Z()});var pr,yr,gr=s(()=>{"use strict";te();pr=e=>{let t=[];for(let r in ee){let o=ee[r];e[o]!==void 0&&t.push({algorithmId:()=>o,checksumConstructor:()=>e[o]})}return{_checksumAlgorithms:t,addChecksumAlgorithm(r){this._checksumAlgorithms.push(r)},checksumAlgorithms(){return this._checksumAlgorithms}}},yr=e=>{let t={};return e.checksumAlgorithms().forEach(r=>{t[r.algorithmId()]=r.checksumConstructor()}),t}});var wr,xr,br=s(()=>{"use strict";wr=e=>{let t=e.retryStrategy;return{setRetryStrategy(r){t=r},retryStrategy(){return t}}},xr=e=>{let t={};return t.retryStrategy=e.retryStrategy(),t}});var Ma,Ia,Er=s(()=>{"use strict";gr();br();Ma=e=>g(g({},pr(e)),wr(e)),Ia=e=>g(g({},yr(e)),xr(e))});var Sr=s(()=>{"use strict";Er()});var Tr=s(()=>{"use strict"});var lo,Cr=s(()=>{"use strict";lo=e=>{let t="#text";for(let r in e)e.hasOwnProperty(r)&&e[r][t]!==void 0?e[r]=e[r][t]:typeof e[r]=="object"&&e[r]!==null&&(e[r]=lo(e[r]));return e}});var La,Ar=s(()=>{"use strict";La=e=>e!=null});function L(e){return Object.assign(new String(e),{deserializeJSON(){return JSON.parse(String(e))},toString(){return String(e)},toJSON(){return String(e)}})}var $r=s(()=>{"use strict";L.from=e=>e&&typeof e=="object"&&(e instanceof L||"deserializeJSON"in e)?e:typeof e=="string"||Object.getPrototypeOf(e)===String.prototype?L(String(e)):L(JSON.stringify(e));L.fromObject=L.from});var Rr,kr=s(()=>{"use strict";Rr=class{trace(){}debug(){}info(){}warn(){}error(){}}});function ho(e,t,r){let o,n,i;if(typeof t>"u"&&typeof r>"u")o={},i=e;else{if(o=e,typeof t=="function")return n=t,i=r,mo(o,n,i);i=t}for(let a of Object.keys(i)){if(!Array.isArray(i[a])){o[a]=i[a];continue}_r(o,null,i,a)}return o}var za,mo,_r,po,yo,Mr=s(()=>{"use strict";za=(e,t)=>{let r={};for(let o in t)_r(r,e,t,o);return r},mo=(e,t,r)=>ho(e,Object.entries(r).reduce((o,[n,i])=>(Array.isArray(i)?o[n]=i:typeof i=="function"?o[n]=[t,i()]:o[n]=[t,i],o),{})),_r=(e,t,r,o)=>{if(t!==null){let a=r[o];typeof a=="function"&&(a=[,a]);let[c=po,d=yo,b=o]=a;(typeof c=="function"&&c(t[b])||typeof c!="function"&&c)&&(e[o]=d(t[b]));return}let[n,i]=r[o];if(typeof i=="function"){let a,c=n===void 0&&(a=i())!=null,d=typeof n=="function"&&!!n(void 0)||typeof n!="function"&&!!n;c?e[o]=a:d&&(e[o]=i())}else{let a=n===void 0&&i!=null,c=typeof n=="function"&&!!n(i)||typeof n!="function"&&!!n;(a||c)&&(e[o]=i)}},po=e=>e!=null,yo=e=>e});var Ir=s(()=>{"use strict"});var Nr=s(()=>{"use strict";Z()});var Pr=s(()=>{"use strict"});var Ur,Br=s(()=>{"use strict";Ur=e=>{if(e==null)return{};if(Array.isArray(e))return e.filter(t=>t!=null).map(Ur);if(typeof e=="object"){let t={};for(let r of Object.keys(e))e[r]!=null&&(t[r]=Ur(e[r]));return t}return e}});var Or=s(()=>{"use strict"});var Fr=s(()=>{"use strict"});var go=s(()=>{"use strict";Ie();Zt();Ne();lt();ht();fr();ur();dr();hr();ue();mr();Sr();Tr();Cr();Ar();$r();kr();Mr();Ce();Ir();Nr();Pr();Br();Or();Fr()});export{_o as a,Mo as b,j as c,N as d,H as e,yt as f,gt as g,U as h,V as i,B as j,wt as k,O as l,ds as m,G as n,Q as o,F as p,z as q,v as r,We as s,ot as t,ft as u,dt as v,qs as w,Ut as x,Bt as y,ni as z,Gt as A,Qr as B,X as C,Yi as D,Z as E,Me as F,oe as G,Xn as H,Kn as I,Ee as J,Zr as K,er as L,ra as M,oa as N,na as O,sa as P,ca as Q,fa as R,ha as S,mt as T,pt as U,ga as V,xa as W,Ea as X,Ma as Y,Ia as Z,lo as _,La as $,Rr as aa,ho as ba,za as ca,Ur as da,go as ea};

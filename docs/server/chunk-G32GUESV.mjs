import { createRequire } from 'node:module';
globalThis['require'] ??= createRequire(import.meta.url);
import{a as Rt,b as Yo}from"./chunk-P2MZKD6E.mjs";import"./chunk-7MLGPFI3.mjs";import{$ as wt,A as U,B as nt,C as it,F as M,G as st,H as qo,I as at,J as ct,K as dt,L as pt,M as lt,N as mt,O as ut,P as Ho,Q as E,R as ft,S as j,T as gt,U as Bo,V as yt,W as xt,X as St,Y as vt,Z as Ct,_ as Et,a as be,aa as Go,b as Oo,ba as It,c as Pe,ca as Wo,d as To,da as _t,e as ke,ea as Vo,f as Do,fa as bt,g as Re,ga as Jo,h as Ae,ha as Pt,i as zo,ia as kt,j as Oe,ja as Ko,k as v,l as H,m as Te,o as Fe,p as qe,q as le,r as He,s as Me,t as Le,u as Be,v as jo,w as Ge,x as Fo,y as Ve,z as Je}from"./chunk-UVLFOUBM.mjs";import{a as b,b as Mo,c as ht,d as Lo}from"./chunk-OXRWZM6G.mjs";import{D,F as Ke,G as C,H as u,I as Ye,K as me,L as z,M as $,N,O as s,T as Xe,U as h,V as Qe,W as Ze,X as et,Y as tt,Z as ot,a as Ie,aa as rt,b as _e,ba as p,ca as c,da as _,e as Ao,ea as f,k as De,l as ze,n as $e,o as $o,p as Ne,q as No,t as Ue,u as je,v as Uo}from"./chunk-QNKP6SCQ.mjs";import"./chunk-DUU7IDJR.mjs";import{a as We}from"./chunk-HOM3E74A.mjs";import"./chunk-ZAAD4LGZ.mjs";import"./chunk-WHYOH54Q.mjs";import{a as r,b as I,e as d}from"./chunk-YJ4N4I6Q.mjs";function Xo(e){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"sso-oauth",region:e.region},propertiesExtractor:(t,o)=>({signingProperties:{config:t,context:o}})}}function ue(e){return{schemeId:"smithy.api#noAuth"}}var At,Ot,Tt,he=d(()=>{"use strict";M();zo();At=async(e,t,o)=>({operation:Re(t).operation,region:await Ae(e.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()});Ot=e=>{let t=[];switch(e.operation){case"CreateToken":{t.push(ue(e));break}case"RegisterClient":{t.push(ue(e));break}case"StartDeviceAuthorization":{t.push(ue(e));break}default:t.push(Xo(e))}return t},Tt=e=>{let t=Je(e);return r({},t)}});var Dt,w,k=d(()=>{"use strict";Dt=e=>I(r({},e),{useDualstackEndpoint:e.useDualstackEndpoint??!1,useFipsEndpoint:e.useFipsEndpoint??!1,defaultSigningName:"sso-oauth"}),w={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}}});var $t,zt=d(()=>{$t={name:"@aws-sdk/client-sso-oidc",description:"AWS SDK for JavaScript Sso Oidc Client for Node.js, Browser and React Native",version:"3.699.0",scripts:{build:"concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'","build:cjs":"node ../../scripts/compilation/inline client-sso-oidc","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4",clean:"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo sso-oidc"},main:"./dist-cjs/index.js",types:"./dist-types/index.d.ts",module:"./dist-es/index.js",sideEffects:!1,dependencies:{"@aws-crypto/sha256-browser":"5.2.0","@aws-crypto/sha256-js":"5.2.0","@aws-sdk/core":"3.696.0","@aws-sdk/credential-provider-node":"3.699.0","@aws-sdk/middleware-host-header":"3.696.0","@aws-sdk/middleware-logger":"3.696.0","@aws-sdk/middleware-recursion-detection":"3.696.0","@aws-sdk/middleware-user-agent":"3.696.0","@aws-sdk/region-config-resolver":"3.696.0","@aws-sdk/types":"3.696.0","@aws-sdk/util-endpoints":"3.696.0","@aws-sdk/util-user-agent-browser":"3.696.0","@aws-sdk/util-user-agent-node":"3.696.0","@smithy/config-resolver":"^3.0.12","@smithy/core":"^2.5.3","@smithy/fetch-http-handler":"^4.1.1","@smithy/hash-node":"^3.0.10","@smithy/invalid-dependency":"^3.0.10","@smithy/middleware-content-length":"^3.0.12","@smithy/middleware-endpoint":"^3.2.3","@smithy/middleware-retry":"^3.0.27","@smithy/middleware-serde":"^3.0.10","@smithy/middleware-stack":"^3.0.10","@smithy/node-config-provider":"^3.1.11","@smithy/node-http-handler":"^3.3.1","@smithy/protocol-http":"^4.1.7","@smithy/smithy-client":"^3.4.4","@smithy/types":"^3.7.1","@smithy/url-parser":"^3.0.10","@smithy/util-base64":"^3.0.0","@smithy/util-body-length-browser":"^3.0.0","@smithy/util-body-length-node":"^3.0.0","@smithy/util-defaults-mode-browser":"^3.0.27","@smithy/util-defaults-mode-node":"^3.0.27","@smithy/util-endpoints":"^2.1.6","@smithy/util-middleware":"^3.0.10","@smithy/util-retry":"^3.0.10","@smithy/util-utf8":"^3.0.0",tslib:"^2.6.2"},devDependencies:{"@tsconfig/node16":"16.1.3","@types/node":"^16.18.96",concurrently:"7.0.0","downlevel-dts":"0.10.1",rimraf:"3.0.2",typescript:"~4.9.5"},engines:{node:">=16.0.0"},typesVersions:{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},files:["dist-*/**"],author:{name:"AWS SDK for JavaScript Team",url:"https://aws.amazon.com/javascript/"},license:"Apache-2.0",peerDependencies:{"@aws-sdk/client-sts":"^3.699.0"},browser:{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},homepage:"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso-oidc",repository:{type:"git",url:"https://github.com/aws/aws-sdk-js-v3.git",directory:"clients/client-sso-oidc"}}});var Gt,y,x,O,Nt,F,R,A,S,fe,ge,Ut,jt,Ft,Wt,Vt,g,qt,Jt,Ht,Mt,Lt,Bt,Zo,Kt,Yt=d(()=>{"use strict";Gt="required",y="fn",x="argv",O="ref",Nt="isSet",F="booleanEquals",R="error",A="endpoint",S="tree",fe="PartitionResult",ge="getAttr",Ut={[Gt]:!1,type:"String"},jt={[Gt]:!0,default:!1,type:"Boolean"},Ft={[O]:"Endpoint"},Wt={[y]:F,[x]:[{[O]:"UseFIPS"},!0]},Vt={[y]:F,[x]:[{[O]:"UseDualStack"},!0]},g={},qt={[y]:ge,[x]:[{[O]:fe},"supportsFIPS"]},Jt={[O]:fe},Ht={[y]:F,[x]:[!0,{[y]:ge,[x]:[Jt,"supportsDualStack"]}]},Mt=[Wt],Lt=[Vt],Bt=[{[O]:"Region"}],Zo={version:"1.0",parameters:{Region:Ut,UseDualStack:jt,UseFIPS:jt,Endpoint:Ut},rules:[{conditions:[{[y]:Nt,[x]:[Ft]}],rules:[{conditions:Mt,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:R},{conditions:Lt,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:R},{endpoint:{url:Ft,properties:g,headers:g},type:A}],type:S},{conditions:[{[y]:Nt,[x]:Bt}],rules:[{conditions:[{[y]:"aws.partition",[x]:Bt,assign:fe}],rules:[{conditions:[Wt,Vt],rules:[{conditions:[{[y]:F,[x]:[!0,qt]},Ht],rules:[{endpoint:{url:"https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:g,headers:g},type:A}],type:S},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:R}],type:S},{conditions:Mt,rules:[{conditions:[{[y]:F,[x]:[qt,!0]}],rules:[{conditions:[{[y]:"stringEquals",[x]:[{[y]:ge,[x]:[Jt,"name"]},"aws-us-gov"]}],endpoint:{url:"https://oidc.{Region}.amazonaws.com",properties:g,headers:g},type:A},{endpoint:{url:"https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",properties:g,headers:g},type:A}],type:S},{error:"FIPS is enabled but this partition does not support FIPS",type:R}],type:S},{conditions:Lt,rules:[{conditions:[Ht],rules:[{endpoint:{url:"https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:g,headers:g},type:A}],type:S},{error:"DualStack is enabled but this partition does not support DualStack",type:R}],type:S},{endpoint:{url:"https://oidc.{Region}.{PartitionResult#dnsSuffix}",properties:g,headers:g},type:A}],type:S}],type:S},{error:"Invalid Configuration: Missing Region",type:R}]},Kt=Zo});var er,Xt,Qt=d(()=>{"use strict";Fo();jo();Yt();er=new Me({size:50,params:["Endpoint","Region","UseDualStack","UseFIPS"]}),Xt=(e,t={})=>er.get(e,()=>Be(Kt,{endpointParams:e,logger:t.logger}));Le.aws=Ge});var Zt,eo=d(()=>{"use strict";M();le();f();Lo();No();$o();he();Qt();Zt=e=>({apiVersion:"2019-06-10",base64Decoder:e?.base64Decoder??De,base64Encoder:e?.base64Encoder??Ne,disableHostPrefix:e?.disableHostPrefix??!1,endpointProvider:e?.endpointProvider??Xt,extensions:e?.extensions??[],httpAuthSchemeProvider:e?.httpAuthSchemeProvider??Ot,httpAuthSchemes:e?.httpAuthSchemes??[{schemeId:"aws.auth#sigv4",identityProvider:t=>t.getIdentityProvider("aws.auth#sigv4"),signer:new Ve},{schemeId:"smithy.api#noAuth",identityProvider:t=>t.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new qe}],logger:e?.logger??new rt,serviceId:e?.serviceId??"SSO OIDC",urlParser:e?.urlParser??ht,utf8Decoder:e?.utf8Decoder??ze,utf8Encoder:e?.utf8Encoder??$e})});var to,oo=d(()=>{"use strict";zt();M();Yo();Go();mt();Wo();Ct();Mo();Uo();Vo();Bo();eo();f();Jo();f();to=e=>{et(process.version);let t=bt(e),o=()=>t().then(Ze),n=Zt(e);return We(process.version),I(r(r({},n),e),{runtime:"node",defaultsMode:t,bodyLengthChecker:e?.bodyLengthChecker??_t,credentialDefaultProvider:e?.credentialDefaultProvider??Rt,defaultUserAgentProvider:e?.defaultUserAgentProvider??Et({serviceId:n.serviceId,clientVersion:$t.version}),maxAttempts:e?.maxAttempts??b(yt),region:e?.region??b(dt,pt),requestHandler:Ue.create(e?.requestHandler??o),retryMode:e?.retryMode??b(I(r({},St),{default:async()=>(await o()).retryMode||gt})),sha256:e?.sha256??It.bind(null,"sha256"),streamCollector:e?.streamCollector??je,useDualstackEndpoint:e?.useDualstackEndpoint??b(at),useFipsEndpoint:e?.useFipsEndpoint??b(ct),userAgentAppId:e?.userAgentAppId??b(wt)})}});var ro,no,io=d(()=>{"use strict";ro=e=>{let t=e.httpAuthSchemes,o=e.httpAuthSchemeProvider,n=e.credentials;return{setHttpAuthScheme(i){let a=t.findIndex(T=>T.schemeId===i.schemeId);a===-1?t.push(i):t.splice(a,1,i)},httpAuthSchemes(){return t},setHttpAuthSchemeProvider(i){o=i},httpAuthSchemeProvider(){return o},setCredentials(i){n=i},credentials(){return n}}},no=e=>({httpAuthSchemes:e.httpAuthSchemes(),httpAuthSchemeProvider:e.httpAuthSchemeProvider(),credentials:e.credentials()})});var L,so,ao=d(()=>{"use strict";Ko();Ao();f();io();L=e=>e,so=(e,t)=>{let o=r(r(r(r({},L(Pt(e))),L(tt(e))),L(Ie(e))),L(ro(e)));return t.forEach(n=>n.configure(o)),r(r(r(r(r({},e),kt(o)),ot(o)),_e(o)),no(o))}});var B,ye=d(()=>{"use strict";Oo();To();Do();qo();mt();le();Ho();j();Ct();f();he();k();oo();ao();B=class extends Ke{constructor(...[t]){let o=to(t||{}),n=Dt(o),i=He(n),a=xt(i),T=lt(a),bo=T,Po=ft(bo),ko=Tt(Po),we=so(ko,t?.extensions||[]);super(we),this.config=we,this.middlewareStack.use(st(this.config)),this.middlewareStack.use(vt(this.config)),this.middlewareStack.use(ut(this.config)),this.middlewareStack.use(be(this.config)),this.middlewareStack.use(Pe(this.config)),this.middlewareStack.use(ke(this.config)),this.middlewareStack.use(Oe(this.config,{httpAuthSchemeParametersProvider:At,identityProviderConfigProvider:async Ro=>new Fe({"aws.auth#sigv4":Ro.credentials})})),this.middlewareStack.use(Te(this.config))}destroy(){super.destroy()}}});var l,G=d(()=>{"use strict";f();l=class e extends Xe{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}}});var W,V,J,K,Y,X,Q,Z,ee,te,oe,re,ne,ie,co,po,lo,mo,uo,ho,P=d(()=>{"use strict";f();G();W=class e extends l{constructor(t){super(r({name:"AccessDeniedException",$fault:"client"},t)),this.name="AccessDeniedException",this.$fault="client",Object.setPrototypeOf(this,e.prototype),this.error=t.error,this.error_description=t.error_description}},V=class e extends l{constructor(t){super(r({name:"AuthorizationPendingException",$fault:"client"},t)),this.name="AuthorizationPendingException",this.$fault="client",Object.setPrototypeOf(this,e.prototype),this.error=t.error,this.error_description=t.error_description}},J=class e extends l{constructor(t){super(r({name:"ExpiredTokenException",$fault:"client"},t)),this.name="ExpiredTokenException",this.$fault="client",Object.setPrototypeOf(this,e.prototype),this.error=t.error,this.error_description=t.error_description}},K=class e extends l{constructor(t){super(r({name:"InternalServerException",$fault:"server"},t)),this.name="InternalServerException",this.$fault="server",Object.setPrototypeOf(this,e.prototype),this.error=t.error,this.error_description=t.error_description}},Y=class e extends l{constructor(t){super(r({name:"InvalidClientException",$fault:"client"},t)),this.name="InvalidClientException",this.$fault="client",Object.setPrototypeOf(this,e.prototype),this.error=t.error,this.error_description=t.error_description}},X=class e extends l{constructor(t){super(r({name:"InvalidGrantException",$fault:"client"},t)),this.name="InvalidGrantException",this.$fault="client",Object.setPrototypeOf(this,e.prototype),this.error=t.error,this.error_description=t.error_description}},Q=class e extends l{constructor(t){super(r({name:"InvalidRequestException",$fault:"client"},t)),this.name="InvalidRequestException",this.$fault="client",Object.setPrototypeOf(this,e.prototype),this.error=t.error,this.error_description=t.error_description}},Z=class e extends l{constructor(t){super(r({name:"InvalidScopeException",$fault:"client"},t)),this.name="InvalidScopeException",this.$fault="client",Object.setPrototypeOf(this,e.prototype),this.error=t.error,this.error_description=t.error_description}},ee=class e extends l{constructor(t){super(r({name:"SlowDownException",$fault:"client"},t)),this.name="SlowDownException",this.$fault="client",Object.setPrototypeOf(this,e.prototype),this.error=t.error,this.error_description=t.error_description}},te=class e extends l{constructor(t){super(r({name:"UnauthorizedClientException",$fault:"client"},t)),this.name="UnauthorizedClientException",this.$fault="client",Object.setPrototypeOf(this,e.prototype),this.error=t.error,this.error_description=t.error_description}},oe=class e extends l{constructor(t){super(r({name:"UnsupportedGrantTypeException",$fault:"client"},t)),this.name="UnsupportedGrantTypeException",this.$fault="client",Object.setPrototypeOf(this,e.prototype),this.error=t.error,this.error_description=t.error_description}},re=class e extends l{constructor(t){super(r({name:"InvalidRequestRegionException",$fault:"client"},t)),this.name="InvalidRequestRegionException",this.$fault="client",Object.setPrototypeOf(this,e.prototype),this.error=t.error,this.error_description=t.error_description,this.endpoint=t.endpoint,this.region=t.region}},ne=class e extends l{constructor(t){super(r({name:"InvalidClientMetadataException",$fault:"client"},t)),this.name="InvalidClientMetadataException",this.$fault="client",Object.setPrototypeOf(this,e.prototype),this.error=t.error,this.error_description=t.error_description}},ie=class e extends l{constructor(t){super(r({name:"InvalidRedirectUriException",$fault:"client"},t)),this.name="InvalidRedirectUriException",this.$fault="client",Object.setPrototypeOf(this,e.prototype),this.error=t.error,this.error_description=t.error_description}},co=e=>r(r(r(r({},e),e.clientSecret&&{clientSecret:u}),e.refreshToken&&{refreshToken:u}),e.codeVerifier&&{codeVerifier:u}),po=e=>r(r(r(r({},e),e.accessToken&&{accessToken:u}),e.refreshToken&&{refreshToken:u}),e.idToken&&{idToken:u}),lo=e=>r(r(r(r(r({},e),e.refreshToken&&{refreshToken:u}),e.assertion&&{assertion:u}),e.subjectToken&&{subjectToken:u}),e.codeVerifier&&{codeVerifier:u}),mo=e=>r(r(r(r({},e),e.accessToken&&{accessToken:u}),e.refreshToken&&{refreshToken:u}),e.idToken&&{idToken:u}),uo=e=>r(r({},e),e.clientSecret&&{clientSecret:u}),ho=e=>r(r({},e),e.clientSecret&&{clientSecret:u})});var fo,go,yo,xo,So,vo,Co,Eo,se,tr,or,rr,nr,ir,sr,ar,cr,dr,pr,lr,mr,ur,hr,fr,m,gr,q=d(()=>{"use strict";M();le();f();P();G();fo=async(e,t)=>{let o=D(e,t),n={"content-type":"application/json"};o.bp("/token");let i;return i=JSON.stringify(c(e,{clientId:[],clientSecret:[],code:[],codeVerifier:[],deviceCode:[],grantType:[],redirectUri:[],refreshToken:[],scope:a=>_(a)})),o.m("POST").h(n).b(i),o.build()},go=async(e,t)=>{let o=D(e,t),n={"content-type":"application/json"};o.bp("/token");let i=p({[gr]:[,"t"]}),a;return a=JSON.stringify(c(e,{assertion:[],clientId:[],code:[],codeVerifier:[],grantType:[],redirectUri:[],refreshToken:[],requestedTokenType:[],scope:T=>_(T),subjectToken:[],subjectTokenType:[]})),o.m("POST").h(n).q(i).b(a),o.build()},yo=async(e,t)=>{let o=D(e,t),n={"content-type":"application/json"};o.bp("/client/register");let i;return i=JSON.stringify(c(e,{clientName:[],clientType:[],entitledApplicationArn:[],grantTypes:a=>_(a),issuerUrl:[],redirectUris:a=>_(a),scopes:a=>_(a)})),o.m("POST").h(n).b(i),o.build()},xo=async(e,t)=>{let o=D(e,t),n={"content-type":"application/json"};o.bp("/device_authorization");let i;return i=JSON.stringify(c(e,{clientId:[],clientSecret:[],startUrl:[]})),o.m("POST").h(n).b(i),o.build()},So=async(e,t)=>{if(e.statusCode!==200&&e.statusCode>=300)return se(e,t);let o=p({$metadata:m(e)}),n=$(N(await U(e.body,t)),"body"),i=c(n,{accessToken:s,expiresIn:z,idToken:s,refreshToken:s,tokenType:s});return Object.assign(o,i),o},vo=async(e,t)=>{if(e.statusCode!==200&&e.statusCode>=300)return se(e,t);let o=p({$metadata:m(e)}),n=$(N(await U(e.body,t)),"body"),i=c(n,{accessToken:s,expiresIn:z,idToken:s,issuedTokenType:s,refreshToken:s,scope:_,tokenType:s});return Object.assign(o,i),o},Co=async(e,t)=>{if(e.statusCode!==200&&e.statusCode>=300)return se(e,t);let o=p({$metadata:m(e)}),n=$(N(await U(e.body,t)),"body"),i=c(n,{authorizationEndpoint:s,clientId:s,clientIdIssuedAt:me,clientSecret:s,clientSecretExpiresAt:me,tokenEndpoint:s});return Object.assign(o,i),o},Eo=async(e,t)=>{if(e.statusCode!==200&&e.statusCode>=300)return se(e,t);let o=p({$metadata:m(e)}),n=$(N(await U(e.body,t)),"body"),i=c(n,{deviceCode:s,expiresIn:z,interval:z,userCode:s,verificationUri:s,verificationUriComplete:s});return Object.assign(o,i),o},se=async(e,t)=>{let o=I(r({},e),{body:await nt(e.body,t)}),n=it(e,o.body);switch(n){case"AccessDeniedException":case"com.amazonaws.ssooidc#AccessDeniedException":throw await or(o,t);case"AuthorizationPendingException":case"com.amazonaws.ssooidc#AuthorizationPendingException":throw await rr(o,t);case"ExpiredTokenException":case"com.amazonaws.ssooidc#ExpiredTokenException":throw await nr(o,t);case"InternalServerException":case"com.amazonaws.ssooidc#InternalServerException":throw await ir(o,t);case"InvalidClientException":case"com.amazonaws.ssooidc#InvalidClientException":throw await sr(o,t);case"InvalidGrantException":case"com.amazonaws.ssooidc#InvalidGrantException":throw await cr(o,t);case"InvalidRequestException":case"com.amazonaws.ssooidc#InvalidRequestException":throw await pr(o,t);case"InvalidScopeException":case"com.amazonaws.ssooidc#InvalidScopeException":throw await mr(o,t);case"SlowDownException":case"com.amazonaws.ssooidc#SlowDownException":throw await ur(o,t);case"UnauthorizedClientException":case"com.amazonaws.ssooidc#UnauthorizedClientException":throw await hr(o,t);case"UnsupportedGrantTypeException":case"com.amazonaws.ssooidc#UnsupportedGrantTypeException":throw await fr(o,t);case"InvalidRequestRegionException":case"com.amazonaws.ssooidc#InvalidRequestRegionException":throw await lr(o,t);case"InvalidClientMetadataException":case"com.amazonaws.ssooidc#InvalidClientMetadataException":throw await ar(o,t);case"InvalidRedirectUriException":case"com.amazonaws.ssooidc#InvalidRedirectUriException":throw await dr(o,t);default:let i=o.body;return tr({output:e,parsedBody:i,errorCode:n})}},tr=Qe(l),or=async(e,t)=>{let o=p({}),n=e.body,i=c(n,{error:s,error_description:s});Object.assign(o,i);let a=new W(r({$metadata:m(e)},o));return h(a,e.body)},rr=async(e,t)=>{let o=p({}),n=e.body,i=c(n,{error:s,error_description:s});Object.assign(o,i);let a=new V(r({$metadata:m(e)},o));return h(a,e.body)},nr=async(e,t)=>{let o=p({}),n=e.body,i=c(n,{error:s,error_description:s});Object.assign(o,i);let a=new J(r({$metadata:m(e)},o));return h(a,e.body)},ir=async(e,t)=>{let o=p({}),n=e.body,i=c(n,{error:s,error_description:s});Object.assign(o,i);let a=new K(r({$metadata:m(e)},o));return h(a,e.body)},sr=async(e,t)=>{let o=p({}),n=e.body,i=c(n,{error:s,error_description:s});Object.assign(o,i);let a=new Y(r({$metadata:m(e)},o));return h(a,e.body)},ar=async(e,t)=>{let o=p({}),n=e.body,i=c(n,{error:s,error_description:s});Object.assign(o,i);let a=new ne(r({$metadata:m(e)},o));return h(a,e.body)},cr=async(e,t)=>{let o=p({}),n=e.body,i=c(n,{error:s,error_description:s});Object.assign(o,i);let a=new X(r({$metadata:m(e)},o));return h(a,e.body)},dr=async(e,t)=>{let o=p({}),n=e.body,i=c(n,{error:s,error_description:s});Object.assign(o,i);let a=new ie(r({$metadata:m(e)},o));return h(a,e.body)},pr=async(e,t)=>{let o=p({}),n=e.body,i=c(n,{error:s,error_description:s});Object.assign(o,i);let a=new Q(r({$metadata:m(e)},o));return h(a,e.body)},lr=async(e,t)=>{let o=p({}),n=e.body,i=c(n,{endpoint:s,error:s,error_description:s,region:s});Object.assign(o,i);let a=new re(r({$metadata:m(e)},o));return h(a,e.body)},mr=async(e,t)=>{let o=p({}),n=e.body,i=c(n,{error:s,error_description:s});Object.assign(o,i);let a=new Z(r({$metadata:m(e)},o));return h(a,e.body)},ur=async(e,t)=>{let o=p({}),n=e.body,i=c(n,{error:s,error_description:s});Object.assign(o,i);let a=new ee(r({$metadata:m(e)},o));return h(a,e.body)},hr=async(e,t)=>{let o=p({}),n=e.body,i=c(n,{error:s,error_description:s});Object.assign(o,i);let a=new te(r({$metadata:m(e)},o));return h(a,e.body)},fr=async(e,t)=>{let o=p({}),n=e.body,i=c(n,{error:s,error_description:s});Object.assign(o,i);let a=new oe(r({$metadata:m(e)},o));return h(a,e.body)},m=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),gr="aws_iam"});var ae,xe=d(()=>{"use strict";j();H();f();k();P();q();ae=class extends C.classBuilder().ep(w).m(function(t,o,n,i){return[v(n,this.serialize,this.deserialize),E(n,t.getEndpointParameterInstructions())]}).s("AWSSSOOIDCService","CreateToken",{}).n("SSOOIDCClient","CreateTokenCommand").f(co,po).ser(fo).de(So).build(){}});var ce,Se=d(()=>{"use strict";j();H();f();k();P();q();ce=class extends C.classBuilder().ep(w).m(function(t,o,n,i){return[v(n,this.serialize,this.deserialize),E(n,t.getEndpointParameterInstructions())]}).s("AWSSSOOIDCService","CreateTokenWithIAM",{}).n("SSOOIDCClient","CreateTokenWithIAMCommand").f(lo,mo).ser(go).de(vo).build(){}});var de,ve=d(()=>{"use strict";j();H();f();k();P();q();de=class extends C.classBuilder().ep(w).m(function(t,o,n,i){return[v(n,this.serialize,this.deserialize),E(n,t.getEndpointParameterInstructions())]}).s("AWSSSOOIDCService","RegisterClient",{}).n("SSOOIDCClient","RegisterClientCommand").f(void 0,uo).ser(yo).de(Co).build(){}});var pe,Ce=d(()=>{"use strict";j();H();f();k();P();q();pe=class extends C.classBuilder().ep(w).m(function(t,o,n,i){return[v(n,this.serialize,this.deserialize),E(n,t.getEndpointParameterInstructions())]}).s("AWSSSOOIDCService","StartDeviceAuthorization",{}).n("SSOOIDCClient","StartDeviceAuthorizationCommand").f(ho,void 0).ser(xo).de(Eo).build(){}});var yr,Ee,wo=d(()=>{"use strict";f();xe();Se();ve();Ce();ye();yr={CreateTokenCommand:ae,CreateTokenWithIAMCommand:ce,RegisterClientCommand:de,StartDeviceAuthorizationCommand:pe},Ee=class extends B{};Ye(yr,Ee)});var Io=d(()=>{"use strict";xe();Se();ve();Ce()});var _o=d(()=>{"use strict";P()});var xr=d(()=>{ye();wo();Io();_o();G()});xr();export{C as $Command,W as AccessDeniedException,V as AuthorizationPendingException,ae as CreateTokenCommand,co as CreateTokenRequestFilterSensitiveLog,po as CreateTokenResponseFilterSensitiveLog,ce as CreateTokenWithIAMCommand,lo as CreateTokenWithIAMRequestFilterSensitiveLog,mo as CreateTokenWithIAMResponseFilterSensitiveLog,J as ExpiredTokenException,K as InternalServerException,Y as InvalidClientException,ne as InvalidClientMetadataException,X as InvalidGrantException,ie as InvalidRedirectUriException,Q as InvalidRequestException,re as InvalidRequestRegionException,Z as InvalidScopeException,de as RegisterClientCommand,uo as RegisterClientResponseFilterSensitiveLog,Ee as SSOOIDC,B as SSOOIDCClient,l as SSOOIDCServiceException,ee as SlowDownException,pe as StartDeviceAuthorizationCommand,ho as StartDeviceAuthorizationRequestFilterSensitiveLog,te as UnauthorizedClientException,oe as UnsupportedGrantTypeException,Ke as __Client};
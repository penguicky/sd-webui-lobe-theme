const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["heavy-utils-CnT3T5QD.js","core-jkSX95V2.js"])))=>i.map(i=>d[i]);
var Bs=Object.defineProperty;var Us=(t,e,r)=>e in t?Bs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var L=(t,e,r)=>Us(t,typeof e!="symbol"?e+"":e,r);import{g as Vn,c as Vs,r as f,R as Rr,s as Gs,j as u,C as st,F as H,a as Ws,d as qs,b as Gn,i as Ir,u as de,e as Xs}from"./core-jkSX95V2.js";import{R as Ys,B as me,c as Oe,a as J,u as Ks,A as Yr,C as Wn,T as Kr,b as qn,M as Lr,I as Js,D as Zs,G as Qs,d as eo,L as lt,g as to,S as ro,F as no,e as so,p as oo,f as io,n as ao,h as lo,i as co,j as ee,k as Jr,l as Ve,m as dr,o as ct,q as Xn,s as zt,P as uo,r as Bt,t as ho,v as po,w as go,x as mo}from"./ui-lib-DJDOGt1z.js";import{d as fo,a as bo,b as wo,c as vo}from"./heavy-utils-CnT3T5QD.js";const yo="modulepreload",Eo=function(t){return"/dev/"+t},Zr={},pr=function(e,r,n){let s=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");s=Promise.allSettled(r.map(a=>{if(a=Eo(a),a in Zr)return;Zr[a]=!0;const h=a.endsWith(".css"),c=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":yo,h||(d.as="script"),d.crossOrigin="",d.href=a,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})}))}function o(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return s.then(i=>{for(const l of i||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})},ge={fatal:0,error:0,warn:1,log:2,info:3,success:3,fail:3,debug:4,trace:5,verbose:Number.POSITIVE_INFINITY},Qr={silent:{level:-1},fatal:{level:ge.fatal},error:{level:ge.error},warn:{level:ge.warn},log:{level:ge.log},info:{level:ge.info},success:{level:ge.success},fail:{level:ge.fail},ready:{level:ge.info},start:{level:ge.info},box:{level:ge.info},debug:{level:ge.debug},trace:{level:ge.trace},verbose:{level:ge.verbose}};function Ut(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function gr(t,e,r=".",n){if(!Ut(e))return gr(t,{},r);const s=Object.assign({},e);for(const o in t){if(o==="__proto__"||o==="constructor")continue;const i=t[o];i!=null&&(Array.isArray(i)&&Array.isArray(s[o])?s[o]=[...i,...s[o]]:Ut(i)&&Ut(s[o])?s[o]=gr(i,s[o],(r?`${r}.`:"")+o.toString()):s[o]=i)}return s}function xo(t){return(...e)=>e.reduce((r,n)=>gr(r,n,""),{})}const So=xo();function Co(t){return Object.prototype.toString.call(t)==="[object Object]"}function $o(t){return!(!Co(t)||!t.message&&!t.args||t.stack)}let Vt=!1;const en=[];class re{constructor(e={}){L(this,"options");L(this,"_lastLog");L(this,"_mockFn");const r=e.types||Qr;this.options=So({...e,defaults:{...e.defaults},level:Gt(e.level,r),reporters:[...e.reporters||[]]},{types:Qr,throttle:1e3,throttleMin:5,formatOptions:{date:!0,colors:!1,compact:!0}});for(const n in r){const s={type:n,...this.options.defaults,...r[n]};this[n]=this._wrapLogFn(s),this[n].raw=this._wrapLogFn(s,!0)}this.options.mockFn&&this.mockTypes(),this._lastLog={}}get level(){return this.options.level}set level(e){this.options.level=Gt(e,this.options.types,this.options.level)}prompt(e,r){if(!this.options.prompt)throw new Error("prompt is not supported!");return this.options.prompt(e,r)}create(e){const r=new re({...this.options,...e});return this._mockFn&&r.mockTypes(this._mockFn),r}withDefaults(e){return this.create({...this.options,defaults:{...this.options.defaults,...e}})}withTag(e){return this.withDefaults({tag:this.options.defaults.tag?this.options.defaults.tag+":"+e:e})}addReporter(e){return this.options.reporters.push(e),this}removeReporter(e){if(e){const r=this.options.reporters.indexOf(e);if(r!==-1)return this.options.reporters.splice(r,1)}else this.options.reporters.splice(0);return this}setReporters(e){return this.options.reporters=Array.isArray(e)?e:[e],this}wrapAll(){this.wrapConsole(),this.wrapStd()}restoreAll(){this.restoreConsole(),this.restoreStd()}wrapConsole(){for(const e in this.options.types)console["__"+e]||(console["__"+e]=console[e]),console[e]=this[e].raw}restoreConsole(){for(const e in this.options.types)console["__"+e]&&(console[e]=console["__"+e],delete console["__"+e])}wrapStd(){this._wrapStream(this.options.stdout,"log"),this._wrapStream(this.options.stderr,"log")}_wrapStream(e,r){e&&(e.__write||(e.__write=e.write),e.write=n=>{this[r].raw(String(n).trim())})}restoreStd(){this._restoreStream(this.options.stdout),this._restoreStream(this.options.stderr)}_restoreStream(e){e&&e.__write&&(e.write=e.__write,delete e.__write)}pauseLogs(){Vt=!0}resumeLogs(){Vt=!1;const e=en.splice(0);for(const r of e)r[0]._logFn(r[1],r[2])}mockTypes(e){const r=e||this.options.mockFn;if(this._mockFn=r,typeof r=="function")for(const n in this.options.types)this[n]=r(n,this.options.types[n])||this[n],this[n].raw=this[n]}_wrapLogFn(e,r){return(...n)=>{if(Vt){en.push([this,e,n,r]);return}return this._logFn(e,n,r)}}_logFn(e,r,n){if((e.level||0)>this.level)return!1;const s={date:new Date,args:[],...e,level:Gt(e.level,this.options.types)};!n&&r.length===1&&$o(r[0])?Object.assign(s,r[0]):s.args=[...r],s.message&&(s.args.unshift(s.message),delete s.message),s.additional&&(Array.isArray(s.additional)||(s.additional=s.additional.split(`
`)),s.args.push(`
`+s.additional.join(`
`)),delete s.additional),s.type=typeof s.type=="string"?s.type.toLowerCase():"log",s.tag=typeof s.tag=="string"?s.tag:"";const o=(l=!1)=>{const a=(this._lastLog.count||0)-this.options.throttleMin;if(this._lastLog.object&&a>0){const h=[...this._lastLog.object.args];a>1&&h.push(`(repeated ${a} times)`),this._log({...this._lastLog.object,args:h}),this._lastLog.count=1}l&&(this._lastLog.object=s,this._log(s))};clearTimeout(this._lastLog.timeout);const i=this._lastLog.time&&s.date?s.date.getTime()-this._lastLog.time.getTime():0;if(this._lastLog.time=s.date,i<this.options.throttle)try{const l=JSON.stringify([s.type,s.tag,s.args]),a=this._lastLog.serialized===l;if(this._lastLog.serialized=l,a&&(this._lastLog.count=(this._lastLog.count||0)+1,this._lastLog.count>this.options.throttleMin)){this._lastLog.timeout=setTimeout(o,this.options.throttle);return}}catch{}o(!0)}_log(e){for(const r of this.options.reporters)r.log(e,{options:this.options})}}function Gt(t,e={},r=3){return t===void 0?r:typeof t=="number"?t:e[t]&&e[t].level!==void 0?e[t].level:r}re.prototype.add=re.prototype.addReporter;re.prototype.remove=re.prototype.removeReporter;re.prototype.clear=re.prototype.removeReporter;re.prototype.withScope=re.prototype.withTag;re.prototype.mock=re.prototype.mockTypes;re.prototype.pause=re.prototype.pauseLogs;re.prototype.resume=re.prototype.resumeLogs;function To(t={}){return new re(t)}class ko{constructor(e){L(this,"options");L(this,"defaultColor");L(this,"levelColorMap");L(this,"typeColorMap");this.options={...e},this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}_getLogFn(e){return e<1?console.__error||console.error:e===1?console.__warn||console.warn:console.__log||console.log}log(e){const r=this._getLogFn(e.level),n=e.type==="log"?"":e.type,s=e.tag||"",i=`
      background: ${this.typeColorMap[e.type]||this.levelColorMap[e.level]||this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `,l=`%c${[s,n].filter(Boolean).join(":")}`;typeof e.args[0]=="string"?r(`${l}%c ${e.args[0]}`,i,"",...e.args.slice(1)):r(l,i,...e.args)}}function Ao(t={}){return To({reporters:t.reporters||[new ko({})],prompt(r,n={}){return n.type==="confirm"?Promise.resolve(confirm(r)):Promise.resolve(prompt(r))},...t})}const O=Ao();var Yn={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(Vs,function(){var r=1e3,n=6e4,s=36e5,o="millisecond",i="second",l="minute",a="hour",h="day",c="week",d="month",p="quarter",m="year",E="date",b="Invalid Date",R=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,C=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,G={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(y){var g=["th","st","nd","rd"],w=y%100;return"["+y+(g[(w-20)%10]||g[w]||g[0])+"]"}},j=function(y,g,w){var x=String(y);return!x||x.length>=g?y:""+Array(g+1-x.length).join(w)+y},D={s:j,z:function(y){var g=-y.utcOffset(),w=Math.abs(g),x=Math.floor(w/60),v=w%60;return(g<=0?"+":"-")+j(x,2,"0")+":"+j(v,2,"0")},m:function y(g,w){if(g.date()<w.date())return-y(w,g);var x=12*(w.year()-g.year())+(w.month()-g.month()),v=g.clone().add(x,d),S=w-v<0,$=g.clone().add(x+(S?-1:1),d);return+(-(x+(w-v)/(S?v-$:$-v))||0)},a:function(y){return y<0?Math.ceil(y)||0:Math.floor(y)},p:function(y){return{M:d,y:m,w:c,d:h,D:E,h:a,m:l,s:i,ms:o,Q:p}[y]||String(y||"").toLowerCase().replace(/s$/,"")},u:function(y){return y===void 0}},A="en",P={};P[A]=G;var Q="$isDayjsObject",U=function(y){return y instanceof ue||!(!y||!y[Q])},pe=function y(g,w,x){var v;if(!g)return A;if(typeof g=="string"){var S=g.toLowerCase();P[S]&&(v=S),w&&(P[S]=w,v=S);var $=g.split("-");if(!v&&$.length>1)return y($[0])}else{var k=g.name;P[k]=g,v=k}return!x&&v&&(A=v),v||!x&&A},V=function(y,g){if(U(y))return y.clone();var w=typeof g=="object"?g:{};return w.date=y,w.args=arguments,new ue(w)},N=D;N.l=pe,N.i=U,N.w=function(y,g){return V(y,{locale:g.$L,utc:g.$u,x:g.$x,$offset:g.$offset})};var ue=function(){function y(w){this.$L=pe(w.locale,null,!0),this.parse(w),this.$x=this.$x||w.x||{},this[Q]=!0}var g=y.prototype;return g.parse=function(w){this.$d=function(x){var v=x.date,S=x.utc;if(v===null)return new Date(NaN);if(N.u(v))return new Date;if(v instanceof Date)return new Date(v);if(typeof v=="string"&&!/Z$/i.test(v)){var $=v.match(R);if($){var k=$[2]-1||0,T=($[7]||"0").substring(0,3);return S?new Date(Date.UTC($[1],k,$[3]||1,$[4]||0,$[5]||0,$[6]||0,T)):new Date($[1],k,$[3]||1,$[4]||0,$[5]||0,$[6]||0,T)}}return new Date(v)}(w),this.init()},g.init=function(){var w=this.$d;this.$y=w.getFullYear(),this.$M=w.getMonth(),this.$D=w.getDate(),this.$W=w.getDay(),this.$H=w.getHours(),this.$m=w.getMinutes(),this.$s=w.getSeconds(),this.$ms=w.getMilliseconds()},g.$utils=function(){return N},g.isValid=function(){return this.$d.toString()!==b},g.isSame=function(w,x){var v=V(w);return this.startOf(x)<=v&&v<=this.endOf(x)},g.isAfter=function(w,x){return V(w)<this.startOf(x)},g.isBefore=function(w,x){return this.endOf(x)<V(w)},g.$g=function(w,x,v){return N.u(w)?this[x]:this.set(v,w)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(w,x){var v=this,S=!!N.u(x)||x,$=N.p(w),k=function(Te,Z){var we=N.w(v.$u?Date.UTC(v.$y,Z,Te):new Date(v.$y,Z,Te),v);return S?we:we.endOf(h)},T=function(Te,Z){return N.w(v.toDate()[Te].apply(v.toDate("s"),(S?[0,0,0,0]:[23,59,59,999]).slice(Z)),v)},I=this.$W,F=this.$M,_=this.$D,ie="set"+(this.$u?"UTC":"");switch($){case m:return S?k(1,0):k(31,11);case d:return S?k(1,F):k(0,F+1);case c:var xe=this.$locale().weekStart||0,Fe=(I<xe?I+7:I)-xe;return k(S?_-Fe:_+(6-Fe),F);case h:case E:return T(ie+"Hours",0);case a:return T(ie+"Minutes",1);case l:return T(ie+"Seconds",2);case i:return T(ie+"Milliseconds",3);default:return this.clone()}},g.endOf=function(w){return this.startOf(w,!1)},g.$set=function(w,x){var v,S=N.p(w),$="set"+(this.$u?"UTC":""),k=(v={},v[h]=$+"Date",v[E]=$+"Date",v[d]=$+"Month",v[m]=$+"FullYear",v[a]=$+"Hours",v[l]=$+"Minutes",v[i]=$+"Seconds",v[o]=$+"Milliseconds",v)[S],T=S===h?this.$D+(x-this.$W):x;if(S===d||S===m){var I=this.clone().set(E,1);I.$d[k](T),I.init(),this.$d=I.set(E,Math.min(this.$D,I.daysInMonth())).$d}else k&&this.$d[k](T);return this.init(),this},g.set=function(w,x){return this.clone().$set(w,x)},g.get=function(w){return this[N.p(w)]()},g.add=function(w,x){var v,S=this;w=Number(w);var $=N.p(x),k=function(F){var _=V(S);return N.w(_.date(_.date()+Math.round(F*w)),S)};if($===d)return this.set(d,this.$M+w);if($===m)return this.set(m,this.$y+w);if($===h)return k(1);if($===c)return k(7);var T=(v={},v[l]=n,v[a]=s,v[i]=r,v)[$]||1,I=this.$d.getTime()+w*T;return N.w(I,this)},g.subtract=function(w,x){return this.add(-1*w,x)},g.format=function(w){var x=this,v=this.$locale();if(!this.isValid())return v.invalidDate||b;var S=w||"YYYY-MM-DDTHH:mm:ssZ",$=N.z(this),k=this.$H,T=this.$m,I=this.$M,F=v.weekdays,_=v.months,ie=v.meridiem,xe=function(Z,we,We,W){return Z&&(Z[we]||Z(x,S))||We[we].slice(0,W)},Fe=function(Z){return N.s(k%12||12,Z,"0")},Te=ie||function(Z,we,We){var W=Z<12?"AM":"PM";return We?W.toLowerCase():W};return S.replace(C,function(Z,we){return we||function(We){switch(We){case"YY":return String(x.$y).slice(-2);case"YYYY":return N.s(x.$y,4,"0");case"M":return I+1;case"MM":return N.s(I+1,2,"0");case"MMM":return xe(v.monthsShort,I,_,3);case"MMMM":return xe(_,I);case"D":return x.$D;case"DD":return N.s(x.$D,2,"0");case"d":return String(x.$W);case"dd":return xe(v.weekdaysMin,x.$W,F,2);case"ddd":return xe(v.weekdaysShort,x.$W,F,3);case"dddd":return F[x.$W];case"H":return String(k);case"HH":return N.s(k,2,"0");case"h":return Fe(1);case"hh":return Fe(2);case"a":return Te(k,T,!0);case"A":return Te(k,T,!1);case"m":return String(T);case"mm":return N.s(T,2,"0");case"s":return String(x.$s);case"ss":return N.s(x.$s,2,"0");case"SSS":return N.s(x.$ms,3,"0");case"Z":return $}return null}(Z)||$.replace(":","")})},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(w,x,v){var S,$=this,k=N.p(x),T=V(w),I=(T.utcOffset()-this.utcOffset())*n,F=this-T,_=function(){return N.m($,T)};switch(k){case m:S=_()/12;break;case d:S=_();break;case p:S=_()/3;break;case c:S=(F-I)/6048e5;break;case h:S=(F-I)/864e5;break;case a:S=F/s;break;case l:S=F/n;break;case i:S=F/r;break;default:S=F}return v?S:N.a(S)},g.daysInMonth=function(){return this.endOf(d).$D},g.$locale=function(){return P[this.$L]},g.locale=function(w,x){if(!w)return this.$L;var v=this.clone(),S=pe(w,x,!0);return S&&(v.$L=S),v},g.clone=function(){return N.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},y}(),ne=ue.prototype;return V.prototype=ne,[["$ms",o],["$s",i],["$m",l],["$H",a],["$W",h],["$M",d],["$y",m],["$D",E]].forEach(function(y){ne[y[1]]=function(g){return this.$g(g,y[0],y[1])}}),V.extend=function(y,g){return y.$i||(y(g,ue,V),y.$i=!0),V},V.locale=pe,V.isDayjs=U,V.unix=function(y){return V(1e3*y)},V.en=P[A],V.Ls=P,V.p={},V})})(Yn);var Ro=Yn.exports;const Kn=Vn(Ro),Jn=0,Zn=1,Qn=2,tn=3;var rn=Object.prototype.hasOwnProperty;function mr(t,e){var r,n;if(t===e)return!0;if(t&&e&&(r=t.constructor)===e.constructor){if(r===Date)return t.getTime()===e.getTime();if(r===RegExp)return t.toString()===e.toString();if(r===Array){if((n=t.length)===e.length)for(;n--&&mr(t[n],e[n]););return n===-1}if(!r||typeof t=="object"){n=0;for(r in t)if(rn.call(t,r)&&++n&&!rn.call(e,r)||!(r in e)||!mr(t[r],e[r]))return!1;return Object.keys(e).length===n}}return t!==t&&e!==e}const Re=new WeakMap,Me=()=>{},le=Me(),fr=Object,z=t=>t===le,Ce=t=>typeof t=="function",Pe=(t,e)=>({...t,...e}),es=t=>Ce(t.then),Wt={},dt={},jr="undefined",ut=typeof window!=jr,br=typeof document!=jr,Io=ut&&"Deno"in window,Lo=()=>ut&&typeof window.requestAnimationFrame!=jr,ts=(t,e)=>{const r=Re.get(t);return[()=>!z(e)&&t.get(e)||Wt,n=>{if(!z(e)){const s=t.get(e);e in dt||(dt[e]=s),r[5](e,Pe(s,n),s||Wt)}},r[6],()=>!z(e)&&e in dt?dt[e]:!z(e)&&t.get(e)||Wt]};let wr=!0;const jo=()=>wr,[vr,yr]=ut&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[Me,Me],Oo=()=>{const t=br&&document.visibilityState;return z(t)||t!=="hidden"},_o=t=>(br&&document.addEventListener("visibilitychange",t),vr("focus",t),()=>{br&&document.removeEventListener("visibilitychange",t),yr("focus",t)}),No=t=>{const e=()=>{wr=!0,t()},r=()=>{wr=!1};return vr("online",e),vr("offline",r),()=>{yr("online",e),yr("offline",r)}},Mo={isOnline:jo,isVisible:Oo},Po={initFocus:_o,initReconnect:No},nn=!Rr.useId,ot=!ut||Io,Do=t=>Lo()?window.requestAnimationFrame(t):setTimeout(t,1),qt=ot?f.useEffect:f.useLayoutEffect,Xt=typeof navigator<"u"&&navigator.connection,sn=!ot&&Xt&&(["slow-2g","2g"].includes(Xt.effectiveType)||Xt.saveData),pt=new WeakMap,Yt=(t,e)=>fr.prototype.toString.call(t)===`[object ${e}]`;let Fo=0;const Er=t=>{const e=typeof t,r=Yt(t,"Date"),n=Yt(t,"RegExp"),s=Yt(t,"Object");let o,i;if(fr(t)===t&&!r&&!n){if(o=pt.get(t),o)return o;if(o=++Fo+"~",pt.set(t,o),Array.isArray(t)){for(o="@",i=0;i<t.length;i++)o+=Er(t[i])+",";pt.set(t,o)}if(s){o="#";const l=fr.keys(t).sort();for(;!z(i=l.pop());)z(t[i])||(o+=i+":"+Er(t[i])+",");pt.set(t,o)}}else o=r?t.toJSON():e=="symbol"?t.toString():e=="string"?JSON.stringify(t):""+t;return o},Or=t=>{if(Ce(t))try{t=t()}catch{t=""}const e=t;return t=typeof t=="string"?t:(Array.isArray(t)?t.length:t)?Er(t):"",[t,e]};let Ho=0;const xr=()=>++Ho;async function rs(...t){const[e,r,n,s]=t,o=Pe({populateCache:!0,throwOnError:!0},typeof s=="boolean"?{revalidate:s}:s||{});let i=o.populateCache;const l=o.rollbackOnError;let a=o.optimisticData;const h=p=>typeof l=="function"?l(p):l!==!1,c=o.throwOnError;if(Ce(r)){const p=r,m=[],E=e.keys();for(const b of E)!/^\$(inf|sub)\$/.test(b)&&p(e.get(b)._k)&&m.push(b);return Promise.all(m.map(d))}return d(r);async function d(p){const[m]=Or(p);if(!m)return;const[E,b]=ts(e,m),[R,C,G,j]=Re.get(e),D=()=>{const ne=R[m];return(Ce(o.revalidate)?o.revalidate(E().data,p):o.revalidate!==!1)&&(delete G[m],delete j[m],ne&&ne[0])?ne[0](Qn).then(()=>E().data):E().data};if(t.length<3)return D();let A=n,P;const Q=xr();C[m]=[Q,0];const U=!z(a),pe=E(),V=pe.data,N=pe._c,ue=z(N)?V:N;if(U&&(a=Ce(a)?a(ue,V):a,b({data:a,_c:ue})),Ce(A))try{A=A(ue)}catch(ne){P=ne}if(A&&es(A))if(A=await A.catch(ne=>{P=ne}),Q!==C[m][0]){if(P)throw P;return A}else P&&U&&h(P)&&(i=!0,b({data:ue,_c:le}));if(i&&!P)if(Ce(i)){const ne=i(A,ue);b({data:ne,error:le,_c:le})}else b({data:A,error:le,_c:le});if(C[m][1]=xr(),Promise.resolve(D()).then(()=>{b({_c:le})}),P){if(c)throw P;return}return A}}const on=(t,e)=>{for(const r in t)t[r][0]&&t[r][0](e)},zo=(t,e)=>{if(!Re.has(t)){const r=Pe(Po,e),n=Object.create(null),s=rs.bind(le,t);let o=Me;const i=Object.create(null),l=(c,d)=>{const p=i[c]||[];return i[c]=p,p.push(d),()=>p.splice(p.indexOf(d),1)},a=(c,d,p)=>{t.set(c,d);const m=i[c];if(m)for(const E of m)E(d,p)},h=()=>{if(!Re.has(t)&&(Re.set(t,[n,Object.create(null),Object.create(null),Object.create(null),s,a,l]),!ot)){const c=r.initFocus(setTimeout.bind(le,on.bind(le,n,Jn))),d=r.initReconnect(setTimeout.bind(le,on.bind(le,n,Zn)));o=()=>{c&&c(),d&&d(),Re.delete(t)}}};return h(),[t,s,h,o]}return[t,Re.get(t)[4]]},Bo=(t,e,r,n,s)=>{const o=r.errorRetryCount,i=s.retryCount,l=~~((Math.random()+.5)*(1<<(i<8?i:8)))*r.errorRetryInterval;!z(o)&&i>o||setTimeout(n,l,s)},Uo=mr,[ns,Vo]=zo(new Map),Go=Pe({onLoadingSlow:Me,onSuccess:Me,onError:Me,onErrorRetry:Bo,onDiscarded:Me,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:sn?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:sn?5e3:3e3,compare:Uo,isPaused:()=>!1,cache:ns,mutate:Vo,fallback:{}},Mo),Wo=(t,e)=>{const r=Pe(t,e);if(e){const{use:n,fallback:s}=t,{use:o,fallback:i}=e;n&&o&&(r.use=n.concat(o)),s&&i&&(r.fallback=Pe(s,i))}return r},qo=f.createContext({}),Xo="$inf$",ss=ut&&window.__SWR_DEVTOOLS_USE__,Yo=ss?window.__SWR_DEVTOOLS_USE__:[],Ko=()=>{ss&&(window.__SWR_DEVTOOLS_REACT__=Rr)},Jo=t=>Ce(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(t[1]===null?t[2]:t[1])||{}],Zo=()=>Pe(Go,f.useContext(qo)),Qo=t=>(e,r,n)=>t(e,r&&((...o)=>{const[i]=Or(e),[,,,l]=Re.get(ns);if(i.startsWith(Xo))return r(...o);const a=l[i];return z(a)?r(...o):(delete l[i],a)}),n),ei=Yo.concat(Qo),ti=t=>function(...r){const n=Zo(),[s,o,i]=Jo(r),l=Wo(n,i);let a=t;const{use:h}=l,c=(h||[]).concat(ei);for(let d=c.length;d--;)a=c[d](a);return a(s,o||l.fetcher||null,l)},ri=(t,e,r)=>{const n=e[t]||(e[t]=[]);return n.push(r),()=>{const s=n.indexOf(r);s>=0&&(n[s]=n[n.length-1],n.pop())}};Ko();const Kt=Rr.use||(t=>{switch(t.status){case"pending":throw t;case"fulfilled":return t.value;case"rejected":throw t.reason;default:throw t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e}),t}}),Jt={dedupe:!0},ni=(t,e,r)=>{const{cache:n,compare:s,suspense:o,fallbackData:i,revalidateOnMount:l,revalidateIfStale:a,refreshInterval:h,refreshWhenHidden:c,refreshWhenOffline:d,keepPreviousData:p}=r,[m,E,b,R]=Re.get(n),[C,G]=Or(t),j=f.useRef(!1),D=f.useRef(!1),A=f.useRef(C),P=f.useRef(e),Q=f.useRef(r),U=()=>Q.current,pe=()=>U().isVisible()&&U().isOnline(),[V,N,ue,ne]=ts(n,C),y=f.useRef({}).current,g=z(i)?z(r.fallback)?le:r.fallback[C]:i,w=(W,q)=>{for(const se in y){const K=se;if(K==="data"){if(!s(W[K],q[K])&&(!z(W[K])||!s(_,q[K])))return!1}else if(q[K]!==W[K])return!1}return!0},x=f.useMemo(()=>{const W=!C||!e?!1:z(l)?U().isPaused()||o?!1:a!==!1:l,q=ae=>{const ke=Pe(ae);return delete ke._k,W?{isValidating:!0,isLoading:!0,...ke}:ke},se=V(),K=ne(),ve=q(se),qe=se===K?ve:q(K);let te=ve;return[()=>{const ae=q(V());return w(ae,te)?(te.data=ae.data,te.isLoading=ae.isLoading,te.isValidating=ae.isValidating,te.error=ae.error,te):(te=ae,ae)},()=>qe]},[n,C]),v=Gs.useSyncExternalStore(f.useCallback(W=>ue(C,(q,se)=>{w(se,q)||W()}),[n,C]),x[0],x[1]),S=!j.current,$=m[C]&&m[C].length>0,k=v.data,T=z(k)?g&&es(g)?Kt(g):g:k,I=v.error,F=f.useRef(T),_=p?z(k)?z(F.current)?T:F.current:k:T,ie=$&&!z(I)?!1:S&&!z(l)?l:U().isPaused()?!1:o?z(T)?!1:a:z(T)||a,xe=!!(C&&e&&S&&ie),Fe=z(v.isValidating)?xe:v.isValidating,Te=z(v.isLoading)?xe:v.isLoading,Z=f.useCallback(async W=>{const q=P.current;if(!C||!q||D.current||U().isPaused())return!1;let se,K,ve=!0;const qe=W||{},te=!b[C]||!qe.dedupe,ae=()=>nn?!D.current&&C===A.current&&j.current:C===A.current,ke={isValidating:!1,isLoading:!1},Wr=()=>{N(ke)},qr=()=>{const fe=b[C];fe&&fe[1]===K&&delete b[C]},Xr={isValidating:!0};z(V().data)&&(Xr.isLoading=!0);try{if(te&&(N(Xr),r.loadingTimeout&&z(V().data)&&setTimeout(()=>{ve&&ae()&&U().onLoadingSlow(C,r)},r.loadingTimeout),b[C]=[q(G),xr()]),[se,K]=b[C],se=await se,te&&setTimeout(qr,r.dedupingInterval),!b[C]||b[C][1]!==K)return te&&ae()&&U().onDiscarded(C),!1;ke.error=le;const fe=E[C];if(!z(fe)&&(K<=fe[0]||K<=fe[1]||fe[1]===0))return Wr(),te&&ae()&&U().onDiscarded(C),!1;const Ae=V().data;ke.data=s(Ae,se)?Ae:se,te&&ae()&&U().onSuccess(se,C,r)}catch(fe){qr();const Ae=U(),{shouldRetryOnError:Ft}=Ae;Ae.isPaused()||(ke.error=fe,te&&ae()&&(Ae.onError(fe,C,Ae),(Ft===!0||Ce(Ft)&&Ft(fe))&&(!U().revalidateOnFocus||!U().revalidateOnReconnect||pe())&&Ae.onErrorRetry(fe,C,Ae,zs=>{const Ht=m[C];Ht&&Ht[0]&&Ht[0](tn,zs)},{retryCount:(qe.retryCount||0)+1,dedupe:!0})))}return ve=!1,Wr(),!0},[C,n]),we=f.useCallback((...W)=>rs(n,A.current,...W),[]);if(qt(()=>{P.current=e,Q.current=r,z(k)||(F.current=k)}),qt(()=>{if(!C)return;const W=Z.bind(le,Jt);let q=0;U().revalidateOnFocus&&(q=Date.now()+U().focusThrottleInterval);const K=ri(C,m,(ve,qe={})=>{if(ve==Jn){const te=Date.now();U().revalidateOnFocus&&te>q&&pe()&&(q=te+U().focusThrottleInterval,W())}else if(ve==Zn)U().revalidateOnReconnect&&pe()&&W();else{if(ve==Qn)return Z();if(ve==tn)return Z(qe)}});return D.current=!1,A.current=C,j.current=!0,N({_k:G}),ie&&(z(T)||ot?W():Do(W)),()=>{D.current=!0,K()}},[C]),qt(()=>{let W;function q(){const K=Ce(h)?h(V().data):h;K&&W!==-1&&(W=setTimeout(se,K))}function se(){!V().error&&(c||U().isVisible())&&(d||U().isOnline())?Z(Jt).then(q):q()}return q(),()=>{W&&(clearTimeout(W),W=-1)}},[h,c,d,C]),f.useDebugValue(_),o&&z(T)&&C){if(!nn&&ot)throw new Error("Fallback data is required when using Suspense in SSR.");P.current=e,Q.current=r,D.current=!1;const W=R[C];if(!z(W)){const q=we(W);Kt(q)}if(z(I)){const q=Z(Jt);z(_)||(q.status="fulfilled",q.value=!0),Kt(q)}else throw I}return{mutate:we,get data(){return y.data=!0,_},get error(){return y.error=!0,I},get isValidating(){return y.isValidating=!0,Fe},get isLoading(){return y.isLoading=!0,Te}}},os=ti(ni),si={"alert-triangle":"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01",brush:"M9.06 11.9c.18-.19.45-.3.74-.3h4.4c.29 0 .56.11.74.3l2.36 2.36a1 1 0 010 1.42l-2.36 2.36c-.18.18-.45.3-.74.3H9.8c-.29 0-.56-.12-.74-.3L6.7 15.68a1 1 0 010-1.42L9.06 11.9zM12 5L8 9l4 4 4-4-4-4z",bug:"M8 2v4M16 2v4M8 14v.01M16 14v.01M12 6v.01M8 10v.01M16 10v.01M12 14v.01M20 8a8 8 0 11-16 0 8 8 0 0116 0z","chevron-down":"M6 9l6 6 6-6","chevron-right":"M9 18l6-6-6-6","file-clock":"M16 22h2a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v3M14 2v6h6M10 15.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM12.5 13v2.5L14 17","flask-conical":"M10 2v7.31l-3.39 6.78a1 1 0 00.9 1.41h9.98a1 1 0 00.9-1.41L14 9.31V2M8 2h8","git-fork":"M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 15v6M6 9a9 9 0 009 9",github:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",heart:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",layout:"M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z","layout-grid":"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z","loader-2":"M21 12a9 9 0 11-6.219-8.56",moon:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z",palette:"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-.56 2.5-1.25 0-.34-.13-.65-.35-.88-.22-.23-.35-.54-.35-.87 0-.69.56-1.25 1.25-1.25H16c3.31 0 6-2.69 6-6 0-5.51-4.49-10-10-10zM7.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z","panel-left-close":"M9 6l6 6-6 6M3 3h18v18H3z","panel-right":"M2 3h20v18H2zM15 8v8","panel-right-close":"M15 18l-6-6 6-6M3 3h18v18H3z","refresh-cw":"M3 12a9 9 0 019-9 9.75 9.75 0 016.74 2.74L21 8M3 16l2.26-2.26A9.75 9.75 0 0012 21a9 9 0 919-9",settings:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",sun:"M12 1v2M12 21v2m9-9h2M1 12h2m15.36-6.36l1.42-1.42M6.64 6.64L5.22 5.22m12.72 12.72l1.42 1.42M6.64 17.36l-1.42 1.42M16 12a4 4 0 11-8 0 4 4 0 018 0z","text-cursor-input":"M5 4h1a3 3 0 013 3 3 3 0 013-3h1M13 20h-1a3 3 0 01-3-3 3 3 0 01-3 3H5M5 16H4a2 2 0 01-2-2v-4a2 2 0 012-2h1M13 4h7v16h-7M9 7v10","zoom-in":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM15 11h-4m0 0V7m0 4v4","zoom-out":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM15 11H9"},he=f.memo(({name:t,size:e=24,className:r,style:n,spin:s=!1,stroke:o="currentColor",strokeWidth:i=2,onClick:l,absoluteStrokeWidth:a,...h})=>{const c=si[t];if(!c)return console.warn(`OptimizedIcon: Icon "${t}" not found`),null;const d=typeof e=="string"?parseInt(e,10)||24:e,p=typeof i=="string"?parseFloat(i)||2:i,m=s?{animation:"spin 1s linear infinite"}:{};return u.jsxs(u.Fragment,{children:[s&&u.jsx("style",{children:`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}),u.jsx("svg",{className:r,fill:"none",height:d,onClick:l,stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:p,style:{...n,...m},viewBox:"0 0 24 24",width:d,...h,children:u.jsx("path",{d:c})})]})});he.displayName="OptimizedIcon";const _r=f.memo(t=>u.jsx(he,{name:"loader-2",spin:!0,...t})),is=f.memo(t=>u.jsx(he,{name:"github",...t})),as=f.memo(t=>u.jsx(he,{name:"heart",...t})),oi=f.memo(t=>u.jsx(he,{name:"settings",...t}));_r.displayName="LoadingIcon";is.displayName="GitHubIcon";as.displayName="HeartIcon";oi.displayName="SettingsIcon";const X=t=>{const e=f.forwardRef(r=>u.jsx(he,{name:t,...r}));return e.$$typeof=Symbol.for("react.forward_ref"),e};X("alert-triangle");X("brush");X("bug");const ii=X("chevron-down"),ai=X("chevron-right");X("file-clock");X("flask-conical");X("git-fork");const Kh=X("github");X("heart");X("layout");const Jh=X("layout-grid");X("loader-2");const Zh=X("moon");X("palette");X("panel-left-close");X("panel-right");X("panel-right-close");X("refresh-cw");const Qh=X("settings"),ed=X("sun");X("text-cursor-input");const td=X("zoom-in"),rd=X("zoom-out");let oe=!1;typeof window<"u"&&(window.HIGHLIGHT_DEBUG_STATE={enabled:oe,get:()=>oe,set:t=>{oe=t,window.HIGHLIGHT_DEBUG_STATE.enabled=t}});const Y=(t,...e)=>{oe&&console.log(t,...e)},B=(t,...e)=>{oe&&console.warn(t,...e)},De=(t,...e)=>{oe&&console.error(t,...e)},nd=()=>oe,li=()=>{oe=!0,typeof window<"u"&&window.HIGHLIGHT_DEBUG_STATE?.set(!0),console.log("🔧 Highlight debugging ENABLED"),console.log("🔇 Use disableHighlightDebug() to turn off")},ci=()=>{oe=!1,typeof window<"u"&&window.HIGHLIGHT_DEBUG_STATE?.set(!1),console.log("🔇 Highlight debugging DISABLED"),console.log("🔧 Use enableHighlightDebug() to turn on")},ui=()=>{oe=!oe,typeof window<"u"&&window.HIGHLIGHT_DEBUG_STATE?.set(oe),console.log(`🔄 Highlight debugging ${oe?"ENABLED":"DISABLED"}`),console.log(`💡 Current state: ${oe?"ON":"OFF"}`)};typeof window<"u"&&(window.enableHighlightDebug=li,window.disableHighlightDebug=ci,window.toggleHighlightDebug=ui,window.checkHighlightDebugStatus=()=>(console.log(`🔍 Highlight debugging is currently: ${oe?"🟢 ENABLED":"🔴 DISABLED"}`),oe));class Nr extends f.Component{constructor(r){super(r);L(this,"retryTimeoutId",null);L(this,"reportError",(r,n,s)=>{const o={componentStack:n.componentStack,level:s,message:r.message,retryCount:this.state.retryCount,stack:r.stack,timestamp:new Date().toISOString(),url:window.location.href,userAgent:navigator.userAgent};B("📊 Error Report:",o)});L(this,"handleRetry",()=>{const{maxRetries:r=3}=this.props,{retryCount:n}=this.state;n<r?(B(`🔄 Retrying component (attempt ${n+1}/${r})`),this.setState({error:null,errorInfo:null,hasError:!1,retryCount:n+1})):De("❌ Max retries exceeded, component will remain in error state")});L(this,"handleReset",()=>{B("🔄 Resetting error boundary state"),this.setState({error:null,errorInfo:null,hasError:!1,retryCount:0})});this.state={error:null,errorInfo:null,hasError:!1,retryCount:0}}static getDerivedStateFromError(r){return{error:r,hasError:!0}}componentDidCatch(r,n){const{level:s="component",onError:o}=this.props;De(`🚨 ErrorBoundary (${s}) caught error:`,{componentStack:n.componentStack,error:r.message,retryCount:this.state.retryCount,stack:r.stack}),this.setState({error:r,errorInfo:n}),o?.(r,n),this.reportError(r,n,s)}componentWillUnmount(){this.retryTimeoutId&&clearTimeout(this.retryTimeoutId)}render(){const{children:r,fallback:n,level:s="component",maxRetries:o=3,showDetails:i=!1}=this.props,{hasError:l,error:a,errorInfo:h,retryCount:c}=this.state;return l&&a?n||this.renderErrorUI(a,h,s,c,o,i):r}renderErrorUI(r,n,s,o,i,l){const a=o<i;return s==="app"?u.jsx(st,{style:{height:"100vh",padding:"2rem"},children:u.jsx(Ys,{extra:u.jsxs(H,{gap:12,horizontal:!0,children:[a&&u.jsxs(me,{icon:u.jsx(he,{name:"refresh-cw"}),onClick:this.handleRetry,type:"primary",children:["Retry (",o,"/",i,")"]}),u.jsx(me,{onClick:this.handleReset,children:"Reset"}),u.jsx(me,{onClick:()=>window.location.reload(),children:"Reload Page"})]}),icon:u.jsx(he,{name:"alert-triangle",style:{color:"#ff4d4f"}}),status:"error",subTitle:l?u.jsxs("details",{style:{marginTop:"1rem",textAlign:"left"},children:[u.jsx("summary",{children:"Error Details"}),u.jsxs("pre",{style:{fontSize:"12px",overflow:"auto"},children:[r.message,r.stack&&`

Stack:
${r.stack}`,n?.componentStack&&`

Component Stack:
${n.componentStack}`]})]}):"Something went wrong with the application. Please try refreshing the page.",title:"Application Error"})}):u.jsxs("div",{style:{border:"1px solid #ff4d4f",borderRadius:"6px",margin:"8px",padding:"16px",textAlign:"center"},children:[u.jsx(he,{name:"alert-triangle",style:{color:"#ff4d4f",fontSize:"24px",marginBottom:"8px"}}),u.jsxs("div",{style:{marginBottom:"12px"},children:[u.jsx("strong",{children:"Component Error"}),u.jsx("div",{style:{color:"#666",fontSize:"14px",marginTop:"4px"},children:r.message||"An unexpected error occurred"})]}),u.jsxs(H,{gap:8,horizontal:!0,justify:"center",children:[a&&u.jsxs(me,{icon:u.jsx(he,{name:"refresh-cw"}),onClick:this.handleRetry,size:"small",type:"primary",children:["Retry (",o,"/",i,")"]}),u.jsx(me,{onClick:this.handleReset,size:"small",children:"Reset"})]}),l&&!1]})}}const sd=({children:t})=>u.jsx(Nr,{level:"app",maxRetries:2,showDetails:!1,children:t}),od=({children:t,feature:e="feature"})=>u.jsx(Nr,{level:"feature",maxRetries:3,onError:r=>B(`🚨 ${e} feature error:`,r.message),children:t}),hi=({children:t,component:e="component"})=>u.jsx(Nr,{level:"component",maxRetries:1,onError:r=>B(`🚨 ${e} component error:`,r.message),children:t}),di="3.7.1",pi="LobeThem: The Modern Theme for Stable Diffusion WebUI, Exquisite interface design, Highly customizable UI, and Efficiency boosting features.",gi="https://github.com/lobehub/sd-webui-lobe-theme",mi={description:pi,homepage:gi},fi="https://discord.gg/AYFPHvv2jT",bi="https://opencollective.com/lobehub",wi="R_kgDOJCPcNg",Je=mi.homepage,vi=Je.replace("https://github.com/",""),id="https://lobehub.com/",ad=location.origin,ld="support@lobehub.com",cd="hello@lobehub.com",ud="https://x.com/lobehub",hd="https://medium.com/@lobehub",dd="https://status.lobehub.com",Ge=(t,e=document,r={})=>{const{retries:n=0,onError:s}=r;try{return e.querySelector(t)}catch(o){const i=o instanceof Error?o:new Error(String(o));return B(`🚨 safeQuerySelector failed for "${t}":`,i.message),s?.(i),n>0?Ge(t,e,{...r,retries:n-1}):null}},yi=(t,e,r,n={})=>{const{onError:s}=n;if(!t)return B(`🚨 safeSetProperty: Element is null for property "${e}"`),!1;try{return t[e]=r,!0}catch(o){const i=o instanceof Error?o:new Error(String(o));return B(`🚨 safeSetProperty failed for "${e}":`,i.message),s?.(i),!1}},an=(t,e,r={})=>{const{onError:n}=r;if(!t||!e)return B("🚨 safeAppendChild: Parent or child element is null"),!1;try{return t.append(e),!0}catch(s){const o=s instanceof Error?s:new Error(String(s));return B("🚨 safeAppendChild failed:",o.message),n?.(o),!1}},ls=async(t,e={})=>{const{retries:r=0,timeout:n=5e3,fallback:s,onError:o}=e;try{return await Promise.race([Promise.resolve(t()),new Promise((l,a)=>{setTimeout(()=>a(new Error("Operation timeout")),n)})])}catch(i){const l=i instanceof Error?i:new Error(String(i));return De("🚨 safeDomOperation failed:",l.message),o?.(l),s?.(),r>0?(B(`🔄 Retrying DOM operation (${r} attempts remaining)`),ls(t,{...e,retries:r-1})):null}},cs=()=>Ge("gradio-app")||Ge("#root")||document.body,Zt=()=>{try{if(typeof get_uiCurrentTabContent=="function")return get_uiCurrentTabContent()}catch{B("🚨 get_uiCurrentTabContent not available, using fallback")}return Ge('.tab-content:not([style*="display: none"])')||Ge(".tab-content")||cs()},Ei=(t,e,{onSuccess:r,onError:n,debug:s,id:o,onStart:i,parent:l,inverse:a}={})=>{const[h,c]=f.useState(!0),[d,p]=f.useState(),m=f.useRef(!1),E=f.useRef(0),b=3;return f.useEffect(()=>{if(m.current)return;const R=async()=>{try{const C=cs();if(!C)throw new Error("Gradio app root not found");const G=l?Ge(l,C):C;if(!G)throw new Error(`Parent element not found: ${l}`);const j=Ge(e,G);if(j){if(o&&yi(j,"id",o,{onError:D=>O.warn(`Failed to set ID "${o}":`,D.message)}),i?.(j),a&&t.current){if(!an(j,t.current,{onError:A=>O.error("Failed to append to target element:",A.message)}))throw new Error("Failed to append ref to target element")}else if(t.current&&!an(t.current,j,{onError:A=>O.error("Failed to append target to ref:",A.message)}))throw new Error("Failed to append target element to ref");p(j),r?.(j),m.current=!0,c(!1),s&&O.success(`🤯 ${s}`)}else{if(E.current++,E.current<=b){setTimeout(()=>{R()},1e3*E.current);return}const D=`Element not found for selector: ${e} (after ${b} retries)`;s&&O.warn(`🤯 ${s} - Element may not exist in current WebUI version:`,D),c(!1);return}}catch(C){const G=C instanceof Error?C:new Error(String(C));if(E.current++,E.current<=b&&G.message.includes("not found")){setTimeout(()=>{R()},1e3*E.current);return}console.warn("useInject persistent error:",G.message),n?.(G),c(!1),s&&O.warn(`🤯 ${s} - Injection failed:`,G.message)}};ls(R,{onError:C=>{C.message.includes("not found")||console.warn("DOM injection operation failed:",C.message),c(!1)},retries:0,timeout:8e3})},[]),{element:d,isLoaded:!h,isLoading:h}},be={convert(t){const e=/\{|\[|\}|\]|[^{}[\]]+/gmu;let r=be.convertStr(t);const n=be.convertStr2Array(r);r=be.convertArray2Str(n);let s=[];const l={"[":{multiplier:1/1.05,stack:[]},"{":{multiplier:1.05,stack:[]}};function a(d,p){for(let m=d;m<s.length;m++){const E=s[m];E&&Array.isArray(E)&&typeof E[1]=="number"&&(E[1]=be.round(E[1]*p))}}for(const d of r.matchAll(e)){let p=d[0];if(p in l){const m=l[p];m?.stack&&m.stack.push(s.length)}else if(p==="}"||p==="]"){const m=l[p==="}"?"{":"["];if(m?.stack&&m.stack.length>0&&m.multiplier){const E=m.stack.pop();typeof E=="number"&&a(E,m.multiplier)}}else s.push([p,1])}for(const d of Object.keys(l)){const p=l[d];if(p?.stack&&p.multiplier)for(const m of p.stack)typeof m=="number"&&a(m,p.multiplier)}s.length===0&&(s=[["",1]]);let h=0;for(;h+1<s.length;){const d=s[h],p=s[h+1];d&&p&&d[1]===p[1]?(d[0]+=p[0],s.splice(h+1,1)):h+=1}let c="";for(const[d,p]of s)c+=p===1?d:`(${d}:${p.toString()})`;return c.trim().replaceAll(/\s+/g," ")},convertArray2Str(t){return t.map(r=>{if(r.includes("<"))return r;const n=r.replaceAll(/\s+/g," ").replaceAll(/，|\.\|。/g,",").replaceAll(/“|‘|”|"|\/'/g,"").replaceAll(", ",",").replaceAll(",,",",").replaceAll(",",", ");return be.convertStr2Array(n).join(", ")}).join(", ")},convertStr(t){return t.replaceAll("：",":").replaceAll("（","(").replaceAll("）",")")},convertStr2Array(t){const e=/([()<>[\]])/g,r=o=>{const i=[];let l=0,a=0,h;for(;(h=e.exec(o))!==null;)a===0&&h.index>l&&(i.push(o.slice(l,h.index)),l=h.index),h[0]==="("||h[0]==="<"||h[0]==="["?a++:(h[0]===")"||h[0]===">"||h[0]==="]")&&a--,a===0&&(i.push(o.slice(l,h.index+1)),l=h.index+1);return l<o.length&&i.push(o.slice(Math.max(0,l))),i},n=o=>{const i=[];let l=0,a=!1;for(let h=0;h<o.length;h++)o[h]===","&&!a?(i.push(o.slice(l,h)),l=h+1):h<o.length&&e.test(o[h])&&(a=!a);return i.push(o.slice(Math.max(0,l))),i};return(o=>{let i=r(o);return i=i.flatMap(l=>n(l)),i.filter(l=>l!=="")})(t).filter(o=>!/^[\s,，]+$/.test(o)).filter(Boolean).sort((o,i)=>o.includes("<")&&!i.includes("<")?1:i.includes("<")&&!o.includes("<")?-1:0)},dispatchInputEvent(t){let e=new Event("input");Object.defineProperty(e,"target",{value:t}),t.dispatchEvent(e)},onClickConvert(t){const e="",r="",n=gradioApp().querySelector(`#${t}2img_prompt > label > textarea`),s=be.convert(n.value);n.value=s.match(/^masterpiece, best quality,/)===null?e+s:s,be.dispatchInputEvent(n);const o=gradioApp().querySelector(`#${t}2img_neg_prompt > label > textarea`),i=be.convert(o.value);o.value=i.match(/^lowres,/)===null?i.length===0?r:r+i:i,be.dispatchInputEvent(o)},round(t){return Math.round(t*1e4)/1e4}},xi=()=>{try{return"wakeLock"in navigator&&"request"in navigator.wakeLock}catch{return!1}},us=()=>typeof IntersectionObserver<"u",hs=()=>typeof MutationObserver<"u",Si=()=>typeof performance<"u"&&typeof performance.now=="function",kt=()=>{try{const t="__test_localStorage__";return localStorage.setItem(t,"test"),localStorage.removeItem(t),!0}catch{return!1}},pd=()=>{const t={intersectionObserver:us(),localStorage:kt(),mutationObserver:hs(),performanceAPI:Si(),wakeLock:xi()};return Y("🌐 Browser compatibility report:",t),t};function Ci(t,e,r={}){const{leading:n=!1,trailing:s=!0,maxWait:o}=r;let i,l,a=0,h,c,d;function p(A){const P=h,Q=c;return h=c=void 0,a=A,d=t.apply(Q,P),d}function m(A){const P=A-l,Q=A-a,U=e-P;return o!==void 0?Math.min(U,o-Q):U}function E(A){const P=A-l,Q=A-a;return l===void 0||P>=e||P<0||o!==void 0&&Q>=o}function b(A){return i=void 0,s&&h?p(A):(h=c=void 0,d)}function R(){const A=Date.now();if(E(A))return b(A);i=setTimeout(()=>R(),m(A))}function C(A){return a=A,i=setTimeout(()=>R(),e),n?p(A):d}function G(){i!==void 0&&clearTimeout(i),a=0,h=l=c=i=void 0}function j(){return i===void 0?d:b(Date.now())}function D(...A){const P=Date.now(),Q=E(P);if(h=A,c=this,l=P,Q){if(i===void 0)return C(l);if(o!==void 0)return i=setTimeout(()=>R(),e),p(l)}return i===void 0&&(i=setTimeout(()=>R(),e)),d}return D.cancel=G,D.flush=j,D}function gd(t){return!t||typeof t!="string"?"":t.replaceAll(/([a-z])([A-Z])/g,"$1 $2").replaceAll(/[_-]/g," ").replaceAll(/\s+/g," ").trim().split(" ").map(e=>e?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():"").join(" ")}function md(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}var Sr={exports:{}};const $i="2.0.0",ds=256,Ti=Number.MAX_SAFE_INTEGER||9007199254740991,ki=16,Ai=ds-6,Ri=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var Ot={MAX_LENGTH:ds,MAX_SAFE_COMPONENT_LENGTH:ki,MAX_SAFE_BUILD_LENGTH:Ai,MAX_SAFE_INTEGER:Ti,RELEASE_TYPES:Ri,SEMVER_SPEC_VERSION:$i,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},Qt={};const Ii=typeof process=="object"&&Qt&&Qt.NODE_DEBUG&&/\bsemver\b/i.test(Qt.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};var _t=Ii;(function(t,e){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:n,MAX_LENGTH:s}=Ot,o=_t;e=t.exports={};const i=e.re=[],l=e.safeRe=[],a=e.src=[],h=e.safeSrc=[],c=e.t={};let d=0;const p="[a-zA-Z0-9-]",m=[["\\s",1],["\\d",s],[p,n]],E=R=>{for(const[C,G]of m)R=R.split(`${C}*`).join(`${C}{0,${G}}`).split(`${C}+`).join(`${C}{1,${G}}`);return R},b=(R,C,G)=>{const j=E(C),D=d++;o(R,D,C),c[R]=D,a[D]=C,h[D]=j,i[D]=new RegExp(C,G?"g":void 0),l[D]=new RegExp(j,G?"g":void 0)};b("NUMERICIDENTIFIER","0|[1-9]\\d*"),b("NUMERICIDENTIFIERLOOSE","\\d+"),b("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${p}*`),b("MAINVERSION",`(${a[c.NUMERICIDENTIFIER]})\\.(${a[c.NUMERICIDENTIFIER]})\\.(${a[c.NUMERICIDENTIFIER]})`),b("MAINVERSIONLOOSE",`(${a[c.NUMERICIDENTIFIERLOOSE]})\\.(${a[c.NUMERICIDENTIFIERLOOSE]})\\.(${a[c.NUMERICIDENTIFIERLOOSE]})`),b("PRERELEASEIDENTIFIER",`(?:${a[c.NONNUMERICIDENTIFIER]}|${a[c.NUMERICIDENTIFIER]})`),b("PRERELEASEIDENTIFIERLOOSE",`(?:${a[c.NONNUMERICIDENTIFIER]}|${a[c.NUMERICIDENTIFIERLOOSE]})`),b("PRERELEASE",`(?:-(${a[c.PRERELEASEIDENTIFIER]}(?:\\.${a[c.PRERELEASEIDENTIFIER]})*))`),b("PRERELEASELOOSE",`(?:-?(${a[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${a[c.PRERELEASEIDENTIFIERLOOSE]})*))`),b("BUILDIDENTIFIER",`${p}+`),b("BUILD",`(?:\\+(${a[c.BUILDIDENTIFIER]}(?:\\.${a[c.BUILDIDENTIFIER]})*))`),b("FULLPLAIN",`v?${a[c.MAINVERSION]}${a[c.PRERELEASE]}?${a[c.BUILD]}?`),b("FULL",`^${a[c.FULLPLAIN]}$`),b("LOOSEPLAIN",`[v=\\s]*${a[c.MAINVERSIONLOOSE]}${a[c.PRERELEASELOOSE]}?${a[c.BUILD]}?`),b("LOOSE",`^${a[c.LOOSEPLAIN]}$`),b("GTLT","((?:<|>)?=?)"),b("XRANGEIDENTIFIERLOOSE",`${a[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),b("XRANGEIDENTIFIER",`${a[c.NUMERICIDENTIFIER]}|x|X|\\*`),b("XRANGEPLAIN",`[v=\\s]*(${a[c.XRANGEIDENTIFIER]})(?:\\.(${a[c.XRANGEIDENTIFIER]})(?:\\.(${a[c.XRANGEIDENTIFIER]})(?:${a[c.PRERELEASE]})?${a[c.BUILD]}?)?)?`),b("XRANGEPLAINLOOSE",`[v=\\s]*(${a[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[c.XRANGEIDENTIFIERLOOSE]})(?:${a[c.PRERELEASELOOSE]})?${a[c.BUILD]}?)?)?`),b("XRANGE",`^${a[c.GTLT]}\\s*${a[c.XRANGEPLAIN]}$`),b("XRANGELOOSE",`^${a[c.GTLT]}\\s*${a[c.XRANGEPLAINLOOSE]}$`),b("COERCEPLAIN",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),b("COERCE",`${a[c.COERCEPLAIN]}(?:$|[^\\d])`),b("COERCEFULL",a[c.COERCEPLAIN]+`(?:${a[c.PRERELEASE]})?(?:${a[c.BUILD]})?(?:$|[^\\d])`),b("COERCERTL",a[c.COERCE],!0),b("COERCERTLFULL",a[c.COERCEFULL],!0),b("LONETILDE","(?:~>?)"),b("TILDETRIM",`(\\s*)${a[c.LONETILDE]}\\s+`,!0),e.tildeTrimReplace="$1~",b("TILDE",`^${a[c.LONETILDE]}${a[c.XRANGEPLAIN]}$`),b("TILDELOOSE",`^${a[c.LONETILDE]}${a[c.XRANGEPLAINLOOSE]}$`),b("LONECARET","(?:\\^)"),b("CARETTRIM",`(\\s*)${a[c.LONECARET]}\\s+`,!0),e.caretTrimReplace="$1^",b("CARET",`^${a[c.LONECARET]}${a[c.XRANGEPLAIN]}$`),b("CARETLOOSE",`^${a[c.LONECARET]}${a[c.XRANGEPLAINLOOSE]}$`),b("COMPARATORLOOSE",`^${a[c.GTLT]}\\s*(${a[c.LOOSEPLAIN]})$|^$`),b("COMPARATOR",`^${a[c.GTLT]}\\s*(${a[c.FULLPLAIN]})$|^$`),b("COMPARATORTRIM",`(\\s*)${a[c.GTLT]}\\s*(${a[c.LOOSEPLAIN]}|${a[c.XRANGEPLAIN]})`,!0),e.comparatorTrimReplace="$1$2$3",b("HYPHENRANGE",`^\\s*(${a[c.XRANGEPLAIN]})\\s+-\\s+(${a[c.XRANGEPLAIN]})\\s*$`),b("HYPHENRANGELOOSE",`^\\s*(${a[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${a[c.XRANGEPLAINLOOSE]})\\s*$`),b("STAR","(<|>)?=?\\s*\\*"),b("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),b("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(Sr,Sr.exports);var ht=Sr.exports;const Li=Object.freeze({loose:!0}),ji=Object.freeze({}),Oi=t=>t?typeof t!="object"?Li:t:ji;var Mr=Oi;const ln=/^[0-9]+$/,ps=(t,e)=>{const r=ln.test(t),n=ln.test(e);return r&&n&&(t=+t,e=+e),t===e?0:r&&!n?-1:n&&!r?1:t<e?-1:1},_i=(t,e)=>ps(e,t);var gs={compareIdentifiers:ps,rcompareIdentifiers:_i};const gt=_t,{MAX_LENGTH:cn,MAX_SAFE_INTEGER:mt}=Ot,{safeRe:ft,t:bt}=ht,Ni=Mr,{compareIdentifiers:Xe}=gs;let Mi=class Se{constructor(e,r){if(r=Ni(r),e instanceof Se){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>cn)throw new TypeError(`version is longer than ${cn} characters`);gt("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const n=e.trim().match(r.loose?ft[bt.LOOSE]:ft[bt.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>mt||this.major<0)throw new TypeError("Invalid major version");if(this.minor>mt||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>mt||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(s=>{if(/^[0-9]+$/.test(s)){const o=+s;if(o>=0&&o<mt)return o}return s}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(gt("SemVer.compare",this.version,this.options,e),!(e instanceof Se)){if(typeof e=="string"&&e===this.version)return 0;e=new Se(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof Se||(e=new Se(e,this.options)),Xe(this.major,e.major)||Xe(this.minor,e.minor)||Xe(this.patch,e.patch)}comparePre(e){if(e instanceof Se||(e=new Se(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{const n=this.prerelease[r],s=e.prerelease[r];if(gt("prerelease compare",r,n,s),n===void 0&&s===void 0)return 0;if(s===void 0)return 1;if(n===void 0)return-1;if(n===s)continue;return Xe(n,s)}while(++r)}compareBuild(e){e instanceof Se||(e=new Se(e,this.options));let r=0;do{const n=this.build[r],s=e.build[r];if(gt("build compare",r,n,s),n===void 0&&s===void 0)return 0;if(s===void 0)return 1;if(n===void 0)return-1;if(n===s)continue;return Xe(n,s)}while(++r)}inc(e,r,n){if(e.startsWith("pre")){if(!r&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(r){const s=`-${r}`.match(this.options.loose?ft[bt.PRERELEASELOOSE]:ft[bt.PRERELEASE]);if(!s||s[1]!==r)throw new Error(`invalid identifier: ${r}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,n),this.inc("pre",r,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,n),this.inc("pre",r,n);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const s=Number(n)?1:0;if(this.prerelease.length===0)this.prerelease=[s];else{let o=this.prerelease.length;for(;--o>=0;)typeof this.prerelease[o]=="number"&&(this.prerelease[o]++,o=-2);if(o===-1){if(r===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(s)}}if(r){let o=[r,s];n===!1&&(o=[r]),Xe(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=o):this.prerelease=o}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};var ce=Mi;const un=ce,Pi=(t,e,r=!1)=>{if(t instanceof un)return t;try{return new un(t,e)}catch(n){if(!r)return null;throw n}};var Ze=Pi;const Di=Ze,Fi=(t,e)=>{const r=Di(t,e);return r?r.version:null};var Hi=Fi;const zi=Ze,Bi=(t,e)=>{const r=zi(t.trim().replace(/^[=v]+/,""),e);return r?r.version:null};var Ui=Bi;const hn=ce,Vi=(t,e,r,n,s)=>{typeof r=="string"&&(s=n,n=r,r=void 0);try{return new hn(t instanceof hn?t.version:t,r).inc(e,n,s).version}catch{return null}};var Gi=Vi;const dn=Ze,Wi=(t,e)=>{const r=dn(t,null,!0),n=dn(e,null,!0),s=r.compare(n);if(s===0)return null;const o=s>0,i=o?r:n,l=o?n:r,a=!!i.prerelease.length;if(!!l.prerelease.length&&!a){if(!l.patch&&!l.minor)return"major";if(l.compareMain(i)===0)return l.minor&&!l.patch?"minor":"patch"}const c=a?"pre":"";return r.major!==n.major?c+"major":r.minor!==n.minor?c+"minor":r.patch!==n.patch?c+"patch":"prerelease"};var qi=Wi;const Xi=ce,Yi=(t,e)=>new Xi(t,e).major;var Ki=Yi;const Ji=ce,Zi=(t,e)=>new Ji(t,e).minor;var Qi=Zi;const ea=ce,ta=(t,e)=>new ea(t,e).patch;var ra=ta;const na=Ze,sa=(t,e)=>{const r=na(t,e);return r&&r.prerelease.length?r.prerelease:null};var oa=sa;const pn=ce,ia=(t,e,r)=>new pn(t,r).compare(new pn(e,r));var ye=ia;const aa=ye,la=(t,e,r)=>aa(e,t,r);var ca=la;const ua=ye,ha=(t,e)=>ua(t,e,!0);var da=ha;const gn=ce,pa=(t,e,r)=>{const n=new gn(t,r),s=new gn(e,r);return n.compare(s)||n.compareBuild(s)};var Pr=pa;const ga=Pr,ma=(t,e)=>t.sort((r,n)=>ga(r,n,e));var fa=ma;const ba=Pr,wa=(t,e)=>t.sort((r,n)=>ba(n,r,e));var va=wa;const ya=ye,Ea=(t,e,r)=>ya(t,e,r)>0;var Nt=Ea;const xa=ye,Sa=(t,e,r)=>xa(t,e,r)<0;var Dr=Sa;const Ca=ye,$a=(t,e,r)=>Ca(t,e,r)===0;var ms=$a;const Ta=ye,ka=(t,e,r)=>Ta(t,e,r)!==0;var fs=ka;const Aa=ye,Ra=(t,e,r)=>Aa(t,e,r)>=0;var Fr=Ra;const Ia=ye,La=(t,e,r)=>Ia(t,e,r)<=0;var Hr=La;const ja=ms,Oa=fs,_a=Nt,Na=Fr,Ma=Dr,Pa=Hr,Da=(t,e,r,n)=>{switch(e){case"===":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t===r;case"!==":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t!==r;case"":case"=":case"==":return ja(t,r,n);case"!=":return Oa(t,r,n);case">":return _a(t,r,n);case">=":return Na(t,r,n);case"<":return Ma(t,r,n);case"<=":return Pa(t,r,n);default:throw new TypeError(`Invalid operator: ${e}`)}};var bs=Da;const Fa=ce,Ha=Ze,{safeRe:wt,t:vt}=ht,za=(t,e)=>{if(t instanceof Fa)return t;if(typeof t=="number"&&(t=String(t)),typeof t!="string")return null;e=e||{};let r=null;if(!e.rtl)r=t.match(e.includePrerelease?wt[vt.COERCEFULL]:wt[vt.COERCE]);else{const a=e.includePrerelease?wt[vt.COERCERTLFULL]:wt[vt.COERCERTL];let h;for(;(h=a.exec(t))&&(!r||r.index+r[0].length!==t.length);)(!r||h.index+h[0].length!==r.index+r[0].length)&&(r=h),a.lastIndex=h.index+h[1].length+h[2].length;a.lastIndex=-1}if(r===null)return null;const n=r[2],s=r[3]||"0",o=r[4]||"0",i=e.includePrerelease&&r[5]?`-${r[5]}`:"",l=e.includePrerelease&&r[6]?`+${r[6]}`:"";return Ha(`${n}.${s}.${o}${i}${l}`,e)};var Ba=za;class Ua{constructor(){this.max=1e3,this.map=new Map}get(e){const r=this.map.get(e);if(r!==void 0)return this.map.delete(e),this.map.set(e,r),r}delete(e){return this.map.delete(e)}set(e,r){if(!this.delete(e)&&r!==void 0){if(this.map.size>=this.max){const s=this.map.keys().next().value;this.delete(s)}this.map.set(e,r)}return this}}var Va=Ua,er,mn;function Ee(){if(mn)return er;mn=1;const t=/\s+/g;class e{constructor(g,w){if(w=s(w),g instanceof e)return g.loose===!!w.loose&&g.includePrerelease===!!w.includePrerelease?g:new e(g.raw,w);if(g instanceof o)return this.raw=g.value,this.set=[[g]],this.formatted=void 0,this;if(this.options=w,this.loose=!!w.loose,this.includePrerelease=!!w.includePrerelease,this.raw=g.trim().replace(t," "),this.set=this.raw.split("||").map(x=>this.parseRange(x.trim())).filter(x=>x.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const x=this.set[0];if(this.set=this.set.filter(v=>!b(v[0])),this.set.length===0)this.set=[x];else if(this.set.length>1){for(const v of this.set)if(v.length===1&&R(v[0])){this.set=[v];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let g=0;g<this.set.length;g++){g>0&&(this.formatted+="||");const w=this.set[g];for(let x=0;x<w.length;x++)x>0&&(this.formatted+=" "),this.formatted+=w[x].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(g){const x=((this.options.includePrerelease&&m)|(this.options.loose&&E))+":"+g,v=n.get(x);if(v)return v;const S=this.options.loose,$=S?a[h.HYPHENRANGELOOSE]:a[h.HYPHENRANGE];g=g.replace($,ue(this.options.includePrerelease)),i("hyphen replace",g),g=g.replace(a[h.COMPARATORTRIM],c),i("comparator trim",g),g=g.replace(a[h.TILDETRIM],d),i("tilde trim",g),g=g.replace(a[h.CARETTRIM],p),i("caret trim",g);let k=g.split(" ").map(_=>G(_,this.options)).join(" ").split(/\s+/).map(_=>N(_,this.options));S&&(k=k.filter(_=>(i("loose invalid filter",_,this.options),!!_.match(a[h.COMPARATORLOOSE])))),i("range list",k);const T=new Map,I=k.map(_=>new o(_,this.options));for(const _ of I){if(b(_))return[_];T.set(_.value,_)}T.size>1&&T.has("")&&T.delete("");const F=[...T.values()];return n.set(x,F),F}intersects(g,w){if(!(g instanceof e))throw new TypeError("a Range is required");return this.set.some(x=>C(x,w)&&g.set.some(v=>C(v,w)&&x.every(S=>v.every($=>S.intersects($,w)))))}test(g){if(!g)return!1;if(typeof g=="string")try{g=new l(g,this.options)}catch{return!1}for(let w=0;w<this.set.length;w++)if(ne(this.set[w],g,this.options))return!0;return!1}}er=e;const r=Va,n=new r,s=Mr,o=Mt(),i=_t,l=ce,{safeRe:a,t:h,comparatorTrimReplace:c,tildeTrimReplace:d,caretTrimReplace:p}=ht,{FLAG_INCLUDE_PRERELEASE:m,FLAG_LOOSE:E}=Ot,b=y=>y.value==="<0.0.0-0",R=y=>y.value==="",C=(y,g)=>{let w=!0;const x=y.slice();let v=x.pop();for(;w&&x.length;)w=x.every(S=>v.intersects(S,g)),v=x.pop();return w},G=(y,g)=>(i("comp",y,g),y=P(y,g),i("caret",y),y=D(y,g),i("tildes",y),y=U(y,g),i("xrange",y),y=V(y,g),i("stars",y),y),j=y=>!y||y.toLowerCase()==="x"||y==="*",D=(y,g)=>y.trim().split(/\s+/).map(w=>A(w,g)).join(" "),A=(y,g)=>{const w=g.loose?a[h.TILDELOOSE]:a[h.TILDE];return y.replace(w,(x,v,S,$,k)=>{i("tilde",y,x,v,S,$,k);let T;return j(v)?T="":j(S)?T=`>=${v}.0.0 <${+v+1}.0.0-0`:j($)?T=`>=${v}.${S}.0 <${v}.${+S+1}.0-0`:k?(i("replaceTilde pr",k),T=`>=${v}.${S}.${$}-${k} <${v}.${+S+1}.0-0`):T=`>=${v}.${S}.${$} <${v}.${+S+1}.0-0`,i("tilde return",T),T})},P=(y,g)=>y.trim().split(/\s+/).map(w=>Q(w,g)).join(" "),Q=(y,g)=>{i("caret",y,g);const w=g.loose?a[h.CARETLOOSE]:a[h.CARET],x=g.includePrerelease?"-0":"";return y.replace(w,(v,S,$,k,T)=>{i("caret",y,v,S,$,k,T);let I;return j(S)?I="":j($)?I=`>=${S}.0.0${x} <${+S+1}.0.0-0`:j(k)?S==="0"?I=`>=${S}.${$}.0${x} <${S}.${+$+1}.0-0`:I=`>=${S}.${$}.0${x} <${+S+1}.0.0-0`:T?(i("replaceCaret pr",T),S==="0"?$==="0"?I=`>=${S}.${$}.${k}-${T} <${S}.${$}.${+k+1}-0`:I=`>=${S}.${$}.${k}-${T} <${S}.${+$+1}.0-0`:I=`>=${S}.${$}.${k}-${T} <${+S+1}.0.0-0`):(i("no pr"),S==="0"?$==="0"?I=`>=${S}.${$}.${k}${x} <${S}.${$}.${+k+1}-0`:I=`>=${S}.${$}.${k}${x} <${S}.${+$+1}.0-0`:I=`>=${S}.${$}.${k} <${+S+1}.0.0-0`),i("caret return",I),I})},U=(y,g)=>(i("replaceXRanges",y,g),y.split(/\s+/).map(w=>pe(w,g)).join(" ")),pe=(y,g)=>{y=y.trim();const w=g.loose?a[h.XRANGELOOSE]:a[h.XRANGE];return y.replace(w,(x,v,S,$,k,T)=>{i("xRange",y,x,v,S,$,k,T);const I=j(S),F=I||j($),_=F||j(k),ie=_;return v==="="&&ie&&(v=""),T=g.includePrerelease?"-0":"",I?v===">"||v==="<"?x="<0.0.0-0":x="*":v&&ie?(F&&($=0),k=0,v===">"?(v=">=",F?(S=+S+1,$=0,k=0):($=+$+1,k=0)):v==="<="&&(v="<",F?S=+S+1:$=+$+1),v==="<"&&(T="-0"),x=`${v+S}.${$}.${k}${T}`):F?x=`>=${S}.0.0${T} <${+S+1}.0.0-0`:_&&(x=`>=${S}.${$}.0${T} <${S}.${+$+1}.0-0`),i("xRange return",x),x})},V=(y,g)=>(i("replaceStars",y,g),y.trim().replace(a[h.STAR],"")),N=(y,g)=>(i("replaceGTE0",y,g),y.trim().replace(a[g.includePrerelease?h.GTE0PRE:h.GTE0],"")),ue=y=>(g,w,x,v,S,$,k,T,I,F,_,ie)=>(j(x)?w="":j(v)?w=`>=${x}.0.0${y?"-0":""}`:j(S)?w=`>=${x}.${v}.0${y?"-0":""}`:$?w=`>=${w}`:w=`>=${w}${y?"-0":""}`,j(I)?T="":j(F)?T=`<${+I+1}.0.0-0`:j(_)?T=`<${I}.${+F+1}.0-0`:ie?T=`<=${I}.${F}.${_}-${ie}`:y?T=`<${I}.${F}.${+_+1}-0`:T=`<=${T}`,`${w} ${T}`.trim()),ne=(y,g,w)=>{for(let x=0;x<y.length;x++)if(!y[x].test(g))return!1;if(g.prerelease.length&&!w.includePrerelease){for(let x=0;x<y.length;x++)if(i(y[x].semver),y[x].semver!==o.ANY&&y[x].semver.prerelease.length>0){const v=y[x].semver;if(v.major===g.major&&v.minor===g.minor&&v.patch===g.patch)return!0}return!1}return!0};return er}var tr,fn;function Mt(){if(fn)return tr;fn=1;const t=Symbol("SemVer ANY");class e{static get ANY(){return t}constructor(c,d){if(d=r(d),c instanceof e){if(c.loose===!!d.loose)return c;c=c.value}c=c.trim().split(/\s+/).join(" "),i("comparator",c,d),this.options=d,this.loose=!!d.loose,this.parse(c),this.semver===t?this.value="":this.value=this.operator+this.semver.version,i("comp",this)}parse(c){const d=this.options.loose?n[s.COMPARATORLOOSE]:n[s.COMPARATOR],p=c.match(d);if(!p)throw new TypeError(`Invalid comparator: ${c}`);this.operator=p[1]!==void 0?p[1]:"",this.operator==="="&&(this.operator=""),p[2]?this.semver=new l(p[2],this.options.loose):this.semver=t}toString(){return this.value}test(c){if(i("Comparator.test",c,this.options.loose),this.semver===t||c===t)return!0;if(typeof c=="string")try{c=new l(c,this.options)}catch{return!1}return o(c,this.operator,this.semver,this.options)}intersects(c,d){if(!(c instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new a(c.value,d).test(this.value):c.operator===""?c.value===""?!0:new a(this.value,d).test(c.semver):(d=r(d),d.includePrerelease&&(this.value==="<0.0.0-0"||c.value==="<0.0.0-0")||!d.includePrerelease&&(this.value.startsWith("<0.0.0")||c.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&c.operator.startsWith(">")||this.operator.startsWith("<")&&c.operator.startsWith("<")||this.semver.version===c.semver.version&&this.operator.includes("=")&&c.operator.includes("=")||o(this.semver,"<",c.semver,d)&&this.operator.startsWith(">")&&c.operator.startsWith("<")||o(this.semver,">",c.semver,d)&&this.operator.startsWith("<")&&c.operator.startsWith(">")))}}tr=e;const r=Mr,{safeRe:n,t:s}=ht,o=bs,i=_t,l=ce,a=Ee();return tr}const Ga=Ee(),Wa=(t,e,r)=>{try{e=new Ga(e,r)}catch{return!1}return e.test(t)};var Pt=Wa;const qa=Ee(),Xa=(t,e)=>new qa(t,e).set.map(r=>r.map(n=>n.value).join(" ").trim().split(" "));var Ya=Xa;const Ka=ce,Ja=Ee(),Za=(t,e,r)=>{let n=null,s=null,o=null;try{o=new Ja(e,r)}catch{return null}return t.forEach(i=>{o.test(i)&&(!n||s.compare(i)===-1)&&(n=i,s=new Ka(n,r))}),n};var Qa=Za;const el=ce,tl=Ee(),rl=(t,e,r)=>{let n=null,s=null,o=null;try{o=new tl(e,r)}catch{return null}return t.forEach(i=>{o.test(i)&&(!n||s.compare(i)===1)&&(n=i,s=new el(n,r))}),n};var nl=rl;const rr=ce,sl=Ee(),bn=Nt,ol=(t,e)=>{t=new sl(t,e);let r=new rr("0.0.0");if(t.test(r)||(r=new rr("0.0.0-0"),t.test(r)))return r;r=null;for(let n=0;n<t.set.length;++n){const s=t.set[n];let o=null;s.forEach(i=>{const l=new rr(i.semver.version);switch(i.operator){case">":l.prerelease.length===0?l.patch++:l.prerelease.push(0),l.raw=l.format();case"":case">=":(!o||bn(l,o))&&(o=l);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${i.operator}`)}}),o&&(!r||bn(r,o))&&(r=o)}return r&&t.test(r)?r:null};var il=ol;const al=Ee(),ll=(t,e)=>{try{return new al(t,e).range||"*"}catch{return null}};var cl=ll;const ul=ce,ws=Mt(),{ANY:hl}=ws,dl=Ee(),pl=Pt,wn=Nt,vn=Dr,gl=Hr,ml=Fr,fl=(t,e,r,n)=>{t=new ul(t,n),e=new dl(e,n);let s,o,i,l,a;switch(r){case">":s=wn,o=gl,i=vn,l=">",a=">=";break;case"<":s=vn,o=ml,i=wn,l="<",a="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(pl(t,e,n))return!1;for(let h=0;h<e.set.length;++h){const c=e.set[h];let d=null,p=null;if(c.forEach(m=>{m.semver===hl&&(m=new ws(">=0.0.0")),d=d||m,p=p||m,s(m.semver,d.semver,n)?d=m:i(m.semver,p.semver,n)&&(p=m)}),d.operator===l||d.operator===a||(!p.operator||p.operator===l)&&o(t,p.semver))return!1;if(p.operator===a&&i(t,p.semver))return!1}return!0};var zr=fl;const bl=zr,wl=(t,e,r)=>bl(t,e,">",r);var vl=wl;const yl=zr,El=(t,e,r)=>yl(t,e,"<",r);var xl=El;const yn=Ee(),Sl=(t,e,r)=>(t=new yn(t,r),e=new yn(e,r),t.intersects(e,r));var Cl=Sl;const $l=Pt,Tl=ye;var kl=(t,e,r)=>{const n=[];let s=null,o=null;const i=t.sort((c,d)=>Tl(c,d,r));for(const c of i)$l(c,e,r)?(o=c,s||(s=c)):(o&&n.push([s,o]),o=null,s=null);s&&n.push([s,null]);const l=[];for(const[c,d]of n)c===d?l.push(c):!d&&c===i[0]?l.push("*"):d?c===i[0]?l.push(`<=${d}`):l.push(`${c} - ${d}`):l.push(`>=${c}`);const a=l.join(" || "),h=typeof e.raw=="string"?e.raw:String(e);return a.length<h.length?a:e};const En=Ee(),Br=Mt(),{ANY:nr}=Br,Qe=Pt,Ur=ye,Al=(t,e,r={})=>{if(t===e)return!0;t=new En(t,r),e=new En(e,r);let n=!1;e:for(const s of t.set){for(const o of e.set){const i=Il(s,o,r);if(n=n||i!==null,i)continue e}if(n)return!1}return!0},Rl=[new Br(">=0.0.0-0")],xn=[new Br(">=0.0.0")],Il=(t,e,r)=>{if(t===e)return!0;if(t.length===1&&t[0].semver===nr){if(e.length===1&&e[0].semver===nr)return!0;r.includePrerelease?t=Rl:t=xn}if(e.length===1&&e[0].semver===nr){if(r.includePrerelease)return!0;e=xn}const n=new Set;let s,o;for(const m of t)m.operator===">"||m.operator===">="?s=Sn(s,m,r):m.operator==="<"||m.operator==="<="?o=Cn(o,m,r):n.add(m.semver);if(n.size>1)return null;let i;if(s&&o){if(i=Ur(s.semver,o.semver,r),i>0)return null;if(i===0&&(s.operator!==">="||o.operator!=="<="))return null}for(const m of n){if(s&&!Qe(m,String(s),r)||o&&!Qe(m,String(o),r))return null;for(const E of e)if(!Qe(m,String(E),r))return!1;return!0}let l,a,h,c,d=o&&!r.includePrerelease&&o.semver.prerelease.length?o.semver:!1,p=s&&!r.includePrerelease&&s.semver.prerelease.length?s.semver:!1;d&&d.prerelease.length===1&&o.operator==="<"&&d.prerelease[0]===0&&(d=!1);for(const m of e){if(c=c||m.operator===">"||m.operator===">=",h=h||m.operator==="<"||m.operator==="<=",s){if(p&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===p.major&&m.semver.minor===p.minor&&m.semver.patch===p.patch&&(p=!1),m.operator===">"||m.operator===">="){if(l=Sn(s,m,r),l===m&&l!==s)return!1}else if(s.operator===">="&&!Qe(s.semver,String(m),r))return!1}if(o){if(d&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===d.major&&m.semver.minor===d.minor&&m.semver.patch===d.patch&&(d=!1),m.operator==="<"||m.operator==="<="){if(a=Cn(o,m,r),a===m&&a!==o)return!1}else if(o.operator==="<="&&!Qe(o.semver,String(m),r))return!1}if(!m.operator&&(o||s)&&i!==0)return!1}return!(s&&h&&!o&&i!==0||o&&c&&!s&&i!==0||p||d)},Sn=(t,e,r)=>{if(!t)return e;const n=Ur(t.semver,e.semver,r);return n>0?t:n<0||e.operator===">"&&t.operator===">="?e:t},Cn=(t,e,r)=>{if(!t)return e;const n=Ur(t.semver,e.semver,r);return n<0?t:n>0||e.operator==="<"&&t.operator==="<="?e:t};var Ll=Al;const sr=ht,$n=Ot,jl=ce,Tn=gs,Ol=Ze,_l=Hi,Nl=Ui,Ml=Gi,Pl=qi,Dl=Ki,Fl=Qi,Hl=ra,zl=oa,Bl=ye,Ul=ca,Vl=da,Gl=Pr,Wl=fa,ql=va,Xl=Nt,Yl=Dr,Kl=ms,Jl=fs,Zl=Fr,Ql=Hr,ec=bs,tc=Ba,rc=Mt(),nc=Ee(),sc=Pt,oc=Ya,ic=Qa,ac=nl,lc=il,cc=cl,uc=zr,hc=vl,dc=xl,pc=Cl,gc=kl,mc=Ll;var fc={parse:Ol,valid:_l,clean:Nl,inc:Ml,diff:Pl,major:Dl,minor:Fl,patch:Hl,prerelease:zl,compare:Bl,rcompare:Ul,compareLoose:Vl,compareBuild:Gl,sort:Wl,rsort:ql,gt:Xl,lt:Yl,eq:Kl,neq:Jl,gte:Zl,lte:Ql,cmp:ec,coerce:tc,Comparator:rc,Range:nc,satisfies:sc,toComparators:oc,maxSatisfying:ic,minSatisfying:ac,minVersion:lc,validRange:cc,outside:uc,gtr:hc,ltr:dc,intersects:pc,simplifyRange:gc,subset:mc,SemVer:jl,re:sr.re,src:sr.src,tokens:sr.t,SEMVER_SPEC_VERSION:$n.SEMVER_SPEC_VERSION,RELEASE_TYPES:$n.RELEASE_TYPES,compareIdentifiers:Tn.compareIdentifiers,rcompareIdentifiers:Tn.rcompareIdentifiers};const vs=Vn(fc),bc=[{label:"English",value:"en_US"},{label:"简体中文",value:"zh_CN"},{label:"繁體中文",value:"zh_HK"},{label:"日本語",value:"ja_JP"},{label:"한국어",value:"ko_KR"},{label:"Deutsch",value:"de_DE"},{label:"Español",value:"es_ES"},{label:"Français",value:"fr_FR"},{label:"Português",value:"pt_BR"},{label:"Русский",value:"ru_RU"},{label:"Turkish",value:"tr_TR"}],Ke=di,ys=bc,wc=async()=>{const e=await(await fetch("/lobe/config")).json();if(!(!e||e?.empty))return e},yt=async t=>{await fetch("/lobe/config",{body:JSON.stringify(t),headers:{"Content-Type":"application/json"},method:"POST"})},vc=async()=>{const e=await(await fetch("/lobe/package")).json();return!e||e.empty||!e.version?Ke:e.version},yc=async()=>await(await fetch("/lobe/prompt")).json(),Ec=async()=>{const e=await(await fetch("/lobe/locales/options")).json();return!e||e?.length===0?ys:e},xc=async()=>{const t=await fetch(`https://api.github.com/repos/${Je.replace("https://github.com/","")}/releases/latest`);if(!t.ok)return Ke;const e=await t.json();return!e||!e.tag_name?Ke:vs.clean(e.tag_name)||Ke},it={confirmPageUnload:!1,enableExtraNetworkSidebar:!0,enableHighlight:!1,enableImageInfo:!0,enableSidebar:!0,enableWebFont:!0,extraNetworkCardSize:86,extraNetworkFixedMode:"fixed",extraNetworkSidebarExpand:!0,extraNetworkSidebarWidth:340,i18n:"en_US",layoutHideFooter:!1,layoutSplitPreview:!1,liteAnimation:!0,logoCustomTitle:"",logoCustomUrl:"",logoType:"lobe",neutralColor:void 0,primaryColor:void 0,promptEditor:!1,promptTextareaType:"resizable",sidebarExpand:!0,sidebarFixedMode:"fixed",sidebarWidth:280,svgIcon:!0},Sc={currentTab:"tab_txt2img",latestVersion:Ke,loading:!0,localeOptions:ys,setting:it,themeMode:"dark",version:Ke},Et="SD-LOBE-SETTING",Cc="SD-KITCHEN-SETTING",Ie=new Map;class $c{constructor(){L(this,"batchQueue",[]);L(this,"batchTimeout",null);L(this,"BATCH_DELAY",50);L(this,"onBatchUpdate",null)}addToBatch(e){this.batchQueue.push({settings:e,timestamp:Date.now()}),this.batchTimeout&&clearTimeout(this.batchTimeout),this.batchTimeout=setTimeout(()=>{this.processBatch()},this.BATCH_DELAY)}processBatch(){if(this.batchQueue.length===0)return;const e=this.batchQueue.reduce((r,n)=>({...r,...n.settings}),{});this.batchQueue=[],this.batchTimeout=null,this.executeBatchedUpdate(e)}executeBatchedUpdate(e){this.onBatchUpdate&&this.onBatchUpdate(e)}clearBatch(){this.batchTimeout&&(clearTimeout(this.batchTimeout),this.batchTimeout=null),this.batchQueue=[]}}const or=new $c,et=(t,e)=>({...t,...e}),ir=Ci((t,e)=>{localStorage.setItem(t,e);try{const r=JSON.parse(e);Ie.set(t,r)}catch(r){O.warn(`Failed to cache localStorage item: ${t}`,r)}},300),kn=t=>{if(Ie.has(t))return Ie.get(t);try{const e=localStorage.getItem(t);if(e){const r=JSON.parse(e);return Ie.set(t,r),r}}catch(e){O.warn(`Failed to parse localStorage item: ${t}`,e)}return null},Tc=(t,e)=>(or.onBatchUpdate=r=>{const n=e().setting,s=et(n,r);t(()=>({setting:s}),!1,"onBatchedUpdate"),ir(Et,JSON.stringify(s)),yt(s).catch(o=>{O.error("Failed to post batched setting update:",o)})},{clearCache:()=>{Ie.clear(),or.clearBatch(),O.info("🤯 [cache] cleared localStorage cache and state batch")},onBatchUpdateSetting:async r=>{const n=e().setting,s=r.reduce((o,i)=>et(o,i),n);t(()=>({setting:s}),!1,"onBatchUpdateSetting"),ir(Et,JSON.stringify(s));try{await yt(s),O.success("🤯 [setting] batch update applied successfully")}catch(o){throw O.error("Failed to post batch setting update:",o),t(()=>({setting:n}),!1,"onBatchUpdateSetting"),o}},onBatchedSetSetting:r=>{or.addToBatch(r)},onInit:async()=>{t(()=>({loading:!0}),!1,"onInit");try{const{onLoadLocalOptions:r,onLoadVersion:n,onLoadLatestVersion:s,onLoadSetting:o}=e();await Promise.all([r(),n(),s()]),await o()}catch(r){O.error("Failed to initialize app:",r)}finally{t(()=>({loading:!1}),!1,"onInit")}},onLoadLatestVersion:async()=>{try{const r=await xc();t(()=>({latestVersion:r}),!1,"onLoadLatestVersion")}catch(r){O.warn("Failed to load latest version:",r)}},onLoadLocalOptions:async()=>{try{const r=await Ec();t(()=>({localeOptions:r}),!1,"onLoadLocalOptions")}catch(r){O.warn("Failed to load locale options:",r)}},onLoadSetting:async()=>{let r=null;try{const s=await wc();s&&(O.start("🤯 [setting] loaded webui setting"),r=s)}catch(s){O.warn("Failed to load webui setting:",s)}r||(r=kn(Et),r&&O.info("🤯 [setting] loaded local setting")),r||(r=kn(Cc),r&&O.info("🤯 [setting] loaded fallback local setting")),r||(O.info("🤯 [setting] loaded default setting"),r={});const n=et(it,r);try{await yt(n),t(()=>({setting:n}),!1,"onLoadSetting"),O.success("🤯 [setting] loaded")}catch(s){O.error("Failed to post setting:",s),t(()=>({setting:n}),!1,"onLoadSetting")}},onLoadVersion:async()=>{try{const r=await vc();t(()=>({version:r}),!1,"onLoadVersion")}catch(r){O.warn("Failed to load version:",r)}},onNormalizeSettings:r=>{const n=et(it,r);return n.extraNetworkCardSize<50&&(n.extraNetworkCardSize=50),n.extraNetworkCardSize>200&&(n.extraNetworkCardSize=200),n.sidebarWidth<200&&(n.sidebarWidth=200),n.sidebarWidth>500&&(n.sidebarWidth=500),n.extraNetworkSidebarWidth<200&&(n.extraNetworkSidebarWidth=200),n.extraNetworkSidebarWidth>600&&(n.extraNetworkSidebarWidth=600),n},onOptimizedPersist:(r,n,s=!1)=>{try{let o=JSON.stringify(n);s&&o.length>1e3&&(o=JSON.stringify(n,null,0)),localStorage.setItem(r,o),Ie.set(r,n)}catch(o){O.error(`Failed to persist data for key ${r}:`,o)}},onOptimizedRestore:(r,n)=>{try{if(Ie.has(r))return Ie.get(r);const s=localStorage.getItem(r);if(s){const o=JSON.parse(s);return Ie.set(r,o),o}}catch(s){O.error(`Failed to restore data for key ${r}:`,s)}return n},onSetSetting:async r=>{const n=e().setting,s=et(n,r);t(()=>({setting:s}),!1,"onSetSetting"),ir(Et,JSON.stringify(s));try{await yt(s)}catch(o){O.error("Failed to post setting update:",o)}},onSetThemeMode:r=>{t(()=>({themeMode:r}),!1,"onSetThemeMode")},setCurrentTab:()=>{const r=get_uiCurrentTabContent()?.id,n=e().currentTab;r&&r!==n&&(O.info("🤯 [tab] onChange",r),t({currentTab:r},!1,"setCurrentTab"))}}),kc=(...t)=>({...Sc,...Tc(...t)}),Es=t=>({...it,...t.setting}),Ac=t=>Es(t).i18n,Rc=t=>t.currentTab,Ic=t=>t.themeMode,at={currentLanguage:Ac,currentSetting:Es,currentTab:Rc,themeMode:Ic},je=Ws()(qs(kc,{enabled:typeof window<"u"&&window.__DEV__,name:"sd-webui-lobe-theme-store"}),Gn),Be=class Be{constructor(){L(this,"mutationObservers",new Map);L(this,"intersectionObservers",new Map);L(this,"resizeObservers",new Map);L(this,"observerCallbacks",new Map);L(this,"observedElements",new WeakMap);L(this,"debouncedCallbacks",new Map)}static getInstance(){return Be.instance||(Be.instance=new Be),Be.instance}getMutationObserver(e,r,n){if(!hs())return console.warn("⚠️ MutationObserver is not supported in this browser"),null;if(!this.mutationObservers.has(e)){const o=new MutationObserver((i,l)=>{const a=this.observerCallbacks.get(e);a&&a.forEach(h=>{try{h(i,l)}catch(c){console.warn("Observer callback error:",c)}})});this.mutationObservers.set(e,o),this.observerCallbacks.set(e,new Set)}return this.observerCallbacks.get(e).add(n),this.mutationObservers.get(e)}getIntersectionObserver(e,r,n,s){if(!us())return console.warn("⚠️ IntersectionObserver is not supported in this browser"),null;if(!this.intersectionObservers.has(e)){const i=new IntersectionObserver((l,a)=>{const h=this.observerCallbacks.get(e);h&&h.forEach(c=>{try{c(l,a)}catch(d){console.warn("Observer callback error:",d)}})},r);this.intersectionObservers.set(e,i),this.observerCallbacks.set(e,new Set)}const o=this.observerCallbacks.get(e);if(s&&s>0){const i=this.getDebouncedCallback(e,n,s);o.add(i)}else o.add(n);return this.intersectionObservers.get(e)}getResizeObserver(e,r,n){if(!("ResizeObserver"in window))return console.warn("⚠️ ResizeObserver is not supported in this browser"),null;if(!this.resizeObservers.has(e)){const o=new ResizeObserver((i,l)=>{const a=this.observerCallbacks.get(e);a&&a.forEach(h=>{try{h(i,l)}catch(c){console.warn("Observer callback error:",c)}})});this.resizeObservers.set(e,o),this.observerCallbacks.set(e,new Set)}const s=this.observerCallbacks.get(e);if(n&&n>0){const o=this.getDebouncedCallback(e,r,n);s.add(o)}else s.add(r);return this.resizeObservers.get(e)}getDebouncedCallback(e,r,n){this.debouncedCallbacks.has(e)||this.debouncedCallbacks.set(e,new Map);const s=this.debouncedCallbacks.get(e);if(!s.has(r)){let o;const i=(...l)=>{clearTimeout(o),o=setTimeout(()=>r(...l),n)};s.set(r,i)}return s.get(r)}observe(e,r,n,s){if(!e){console.warn("⚠️ Cannot observe element: observer is null (browser compatibility issue)");return}e instanceof MutationObserver?e.observe(r,s):e.observe(r),this.observedElements.has(r)||this.observedElements.set(r,new Set),this.observedElements.get(r).add(n)}removeCallback(e,r){const n=this.observerCallbacks.get(e);if(n){n.delete(r);const s=this.debouncedCallbacks.get(e);if(s&&s.has(r)){const o=s.get(r);n.delete(o),s.delete(r),s.size===0&&this.debouncedCallbacks.delete(e)}n.size===0&&this.cleanupObserver(e)}}cleanupObserver(e){const r=this.mutationObservers.get(e),n=this.intersectionObservers.get(e),s=this.resizeObservers.get(e);r&&(r.disconnect(),this.mutationObservers.delete(e)),n&&(n.disconnect(),this.intersectionObservers.delete(e)),s&&(s.disconnect(),this.resizeObservers.delete(e)),this.observerCallbacks.delete(e)}unobserve(e,r){const n=this.observedElements.get(e);n&&(n.delete(r),n.size===0&&this.observedElements.delete(e));const s=this.mutationObservers.get(r),o=this.intersectionObservers.get(r);s&&(s.disconnect(),this.reobserveOtherElements(r,s)),o&&o.unobserve(e)}reobserveOtherElements(e,r){r.disconnect()}getStats(){return{debouncedCallbacks:this.debouncedCallbacks.size,intersectionObservers:this.intersectionObservers.size,mutationObservers:this.mutationObservers.size,resizeObservers:this.resizeObservers.size,totalCallbacks:Array.from(this.observerCallbacks.values()).reduce((e,r)=>e+r.size,0)}}dispose(){this.mutationObservers.forEach(e=>e.disconnect()),this.intersectionObservers.forEach(e=>e.disconnect()),this.resizeObservers.forEach(e=>e.disconnect()),this.mutationObservers.clear(),this.intersectionObservers.clear(),this.resizeObservers.clear(),this.observerCallbacks.clear(),this.debouncedCallbacks.clear()}};L(Be,"instance",null);let Cr=Be;const Le=Cr.getInstance(),xs=(t,e,r,n,s)=>{const o={attributes:!0,childList:!0,subtree:!0},i=f.useRef(e),l=n||`mutation-${Math.random().toString(36).slice(2,11)}`;i.current=e,f.useEffect(()=>{if(!t)return;const a=r||o,h=s&&s>0?Le.getDebouncedCallback(l,i.current,s):i.current,c=Le.getMutationObserver(l,a,h);return c&&Le.observe(c,t,l,a),()=>{Le.removeCallback(l,h),Le.unobserve(t,l)}},[t,l,r,o,s])},Lc=(t,e,r,n,s)=>{const o={threshold:.1},i=f.useRef(e),l=n||`intersection-${Math.random().toString(36).slice(2,11)}`;i.current=e,f.useEffect(()=>{if(!t)return;const a=r||o,h=Le.getIntersectionObserver(l,a,i.current,s);return h&&Le.observe(h,t,l),()=>{Le.removeCallback(l,i.current),Le.unobserve(t,l)}},[t,l,r,o,s])},jc={attributes:!0,characterData:!0,childList:!0,subtree:!0},Oc=(t,{subSelector:e,valueProp:r="innerHTML",debounceMs:n=100}={})=>{const[s,o]=f.useState(""),[i,l]=f.useState(null);return f.useEffect(()=>{const a=gradioApp().querySelector(t);if(l(a),a){const h=e?a.querySelector(e):a;o(String(h?.[r]))}},[t,e,r]),xs(i,a=>{for(const h of a)if(h.type==="childList"||h.type==="characterData")if(e){const c=h.target.querySelector(e);c&&o(String(c[r]))}else o(String(h.target?.innerHTML))},jc,`observer-${t}-${e||"root"}`,n),String(s)},_c=Oe(({css:t,token:e,isDarkMode:r})=>{const n=r?"dark":"light",s=r?J.lime[n][9]:J.green[n][10];return{configTitle:t`
      color: ${e.colorTextSecondary};
    `,configValue:t`
      color: ${e.colorInfoText};
      text-align: right;
      word-break: break-word;
    `,container:t`
      padding: 16px 10px 16px 24px;

      font-family: ${e.fontFamilyCode};
      font-size: 13px;

      background: ${e.colorFillTertiary};
      border-radius: ${e.borderRadius}px;
    `,highlight:t`
      pre {
        font-family: ${e.fontFamilyCode} !important;
        font-size: 13px !important;
        line-height: 1.5 !important;
        word-wrap: break-word !important;
        white-space: pre-wrap !important;
        vertical-align: bottom !important;
      }
    `,negative:t`
      span[style='color:${s.toUpperCase()}'] {
        color: ${e.colorErrorTextHover} !important;
      }
    `}}),Ss=5*60*1e3,$r="webui_embeddings_cache",Cs="webui_embeddings_last_fetch";let He=null,tt=null;function Dt(){return window.location.origin}async function Nc(){const e=`${Dt()}/sdapi/v1/embeddings`;try{const r=await fetch(e,{headers:{Accept:"application/json","Cache-Control":"no-cache"},method:"GET",signal:AbortSignal.timeout(15e3)});if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const n=await r.json(),s=new Set;return Object.keys(n.loaded||{}).forEach(o=>{s.add(o)}),Object.keys(n.skipped||{}).forEach(o=>{s.add(o)}),Y(`✅ Successfully fetched ${s.size} embeddings from WebUI API`),s}catch(r){throw B("❌ Failed to fetch embeddings from API:",r),r instanceof TypeError&&r.message.includes("Failed to fetch")?B("🔌 Network error - WebUI API may not be available or CORS issue"):r instanceof DOMException&&r.name==="AbortError"&&B("⏱️ Request timeout - WebUI API is taking too long to respond"),r}}async function Mc(){const t=Date.now();return He&&t-He.timestamp<Ss?(Y("📦 Using cached embeddings data"),He.embeddings):tt?(Y("⏳ Waiting for ongoing embeddings fetch..."),tt):(tt=(async()=>{let e=null;const r=2;for(let n=1;n<=r;n++)try{Y(`🔄 Fetching embeddings from API (attempt ${n}/${r})`);const s=await Nc();if(He={embeddings:s,timestamp:t},kt())try{localStorage.setItem($r,JSON.stringify(Array.from(s))),localStorage.setItem(Cs,t.toString())}catch(o){B("⚠️ Failed to store embeddings in localStorage:",o)}else B("⚠️ localStorage is not supported - embeddings will not persist across page reloads");return Y(`✅ Successfully fetched and cached ${s.size} embeddings`),s}catch(s){e=s,B(`❌ Attempt ${n} failed:`,s),n<r&&await new Promise(o=>{setTimeout(o,1e3*n)})}if(B("⚠️ All API attempts failed, checking fallback options"),He)return Y("📦 Using expired cached embeddings as fallback"),He.embeddings;if(kt())try{const n=localStorage.getItem($r);if(n){const s=JSON.parse(n),o=new Set(s);return Y(`📦 Using localStorage fallback with ${o.size} embeddings`),o}}catch(n){B("⚠️ Failed to read localStorage fallback:",n)}return De("💥 No embeddings available - API failed and no cache:",e),new Set})().finally(()=>{tt=null}),tt)}function Pc(){if(!kt()){B("⚠️ localStorage not supported - embeddings cache will not persist");return}try{const t=localStorage.getItem($r),e=localStorage.getItem(Cs);if(t&&e){const r=parseInt(e,10);if(Date.now()-r<Ss){const s=JSON.parse(t);He={embeddings:new Set(s),timestamp:r},Y(`📦 Initialized embeddings cache with ${s.length} entries`)}}}catch(t){B("⚠️ Failed to initialize embeddings cache from localStorage:",t)}}async function Dc(t){try{return(await Mc()).has(t)}catch(e){return De("❌ Error during embedding verification:",e),!1}}async function Fc(){const e=`${Dt()}/sdapi/v1/embeddings`;try{return(await fetch(e,{headers:{Accept:"application/json","Cache-Control":"no-cache"},method:"GET",signal:AbortSignal.timeout(5e3)})).ok}catch{return!1}}async function Hc(){const e=`${Dt()}/sdapi/v1/embeddings`;console.log("🧪 Testing Embedding API..."),console.log("📍 API URL:",e);try{const r=await fetch(e,{headers:{Accept:"application/json"},method:"GET"});if(console.log("📊 Response Status:",r.status,r.statusText),console.log("📋 Response Headers:",Object.fromEntries(r.headers.entries())),!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const n=await r.json();console.log("✅ API Response:",n),console.log("📈 Loaded Embeddings:",Object.keys(n.loaded||{}).length),console.log("📈 Skipped Embeddings:",Object.keys(n.skipped||{}).length),console.log("🎯 Total Embeddings:",Object.keys(n.loaded||{}).length+Object.keys(n.skipped||{}).length),Object.keys(n.loaded||{}).length>0&&console.log("📝 Sample Embeddings:",Object.keys(n.loaded).slice(0,5))}catch(r){console.error("❌ API Test Failed:",r),r instanceof TypeError&&r.message.includes("Failed to fetch")?console.error("🔌 Network Error - Check if WebUI is running and accessible"):r instanceof DOMException&&r.name==="AbortError"&&console.error("⏱️ Request Timeout")}}async function zc(){const e=`${Dt()}/sdapi/v1/loras`;console.log("🧪 Testing LoRA API..."),console.log("📍 API URL:",e);try{const r=await fetch(e,{headers:{Accept:"application/json"},method:"GET"});if(console.log("📊 Response Status:",r.status,r.statusText),console.log("📋 Response Headers:",Object.fromEntries(r.headers.entries())),!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const n=await r.json();console.log("✅ LoRA API Response:",n),Array.isArray(n)?(console.log("📈 Total LoRAs:",n.length),n.length>0&&(console.log("📝 Sample LoRAs:",n.slice(0,5)),console.log("🔍 LoRA Structure:",n[0]))):console.log("📋 LoRA Data Structure:",n)}catch(r){console.error("❌ LoRA API Test Failed:",r),r instanceof TypeError&&r.message.includes("Failed to fetch")?console.error("🔌 Network Error - Check if WebUI is running and accessible"):r instanceof DOMException&&r.name==="AbortError"&&console.error("⏱️ Request Timeout")}}Pc();window.testEmbeddingAPI=Hc;window.testLoRAAPI=zc;const $s=[{captures:{1:{name:"category-bracket"},2:{name:"category-name"},3:{name:"category-bracket"}},match:"({)([^:{}]+)(})"},{begin:"({)([^:{}]+)(:)",beginCaptures:{1:{name:"category-bracket"},2:{name:"category-name"},3:{name:"func"}},end:"(})",endCaptures:{1:{name:"category-bracket"}},patterns:[{match:"[,]",name:"comma"},{match:":-?\\d*\\.?\\d+|:-?\\.\\d+",name:"number"},{match:"[()\\[\\]]",name:"bracket"},{captures:{0:{name:"model-bracket"},1:{name:"model-type"},2:{name:"model-name"},3:{name:"number"}},match:"<([^:]+):([^:]+):([^>]+)>"},{captures:{0:{name:"embedding-bracket"},1:{name:"embedding-name"}},match:"<(embedding:[^>]+)>"},{match:"\\b[a-zA-Z_][a-zA-Z0-9_]*\\b",name:"term"}]},{match:"[,]",name:"comma"},{match:"AND",name:"and"},{match:"BREAK",name:"break"},{captures:{0:{name:"model-bracket"},1:{name:"model-type"},2:{name:"model-name"},3:{name:"number"}},match:"<([^:>\\s]+):([^:>\\s]+):([^>\\s]+)>"},{match:"[<|>]",name:"model-bracket"},{match:"[()\\[\\]]",name:"bracket"},{match:":-?\\d*\\.?\\d+|:-?\\.\\d+",name:"number"},{match:"[:|]",name:"func"},{match:"__.*__",name:"wildcards"},{match:"#.*",name:"comment"}],xt=new Map,St=new Map,Ye=new Map,Bc=50;function Uc(t){const e=[],r=t.match(/[([]\s*([^():[\]]+)\s*:[^():[\]]*[)\]]/g);if(r)for(const a of r){const h=a.match(/[([]\s*([^():[\]]+)\s*:/);if(h&&h[1]){const c=h[1].trim();c.length>0&&e.push(c)}}const n=[],s=t.match(/{[^:{}]+:[^{}]*}/g);if(s)for(const a of s){const h=a.match(/{[^:{}]+:([^{}]*)}/);if(h&&h[1]){const d=h[1].trim().split(",").map(p=>p.trim()).filter(p=>p.length>0);n.push(...d)}}const o=t.split(/[\s,]+/).map(a=>a.trim()).map(a=>a.replaceAll(/^[([]+|[)\]]+$/g,"").replace(/:[^():[\]]*$/,"")).filter(a=>a.length>0);return[...new Set([...e,...n,...o])].filter(a=>{const h=["masterpiece","best","quality","high","ultra","detailed","beautiful","amazing","stunning","perfect","realistic","photorealistic","cinematic","dramatic","lighting","shadows","colors","vibrant","soft","hard","sharp","blurry","focus","background","foreground","portrait","landscape","close-up","wide","angle","shot","view","perspective","composition","framing","depth","field","bokeh","lens","camera","photo","image","picture","art","artwork","painting","drawing","sketch","illustration","digital","traditional","style","anime","manga","cartoon","realistic","abstract","surreal","fantasy","sci-fi","horror","cute","sexy","elegant","graceful","powerful","strong","weak","small","large","huge","tiny","girl","boy","man","woman","person","people","up","down","left","right","top","bottom","front","back","side","center","middle","x","y","z","a","an","the","and","or","but","in","on","at","to","for","of","with","by","from","as","is","are","was","were","be","been","being","have","has","had","do","does","did","will","would","could","should","may","might","can","must","shall","lora","hair","eyes","face","body","hand","hands","arm","arms","leg","legs","foot","feet","head","neck","shoulder","shoulders","chest","back","waist","hip","hips","long","short","tall","big","small","red","blue","green","yellow","orange","purple","pink","black","white","gray","grey","brown","blonde","brunette","dark","light","bright","dim","full","empty","open","closed","new","old","young","adult","teen","child","baby"],c=a.toLowerCase();return!(a.length<3||h.includes(c)||/^\d+$/.test(a)||/^\W+$/.test(a))})}async function Vc(t){const e=new Map;for(const r of t){if(xt.has(r)){e.set(r,xt.get(r));continue}if(St.has(r))try{const s=await St.get(r);e.set(r,s);continue}catch(s){B(`⚠️ Error waiting for embedding verification of "${r}":`,s),e.set(r,!1);continue}const n=Dc(r);St.set(r,n);try{const s=await n;xt.set(r,s),e.set(r,s)}catch(s){B(`⚠️ Error verifying embedding "${r}":`,s),xt.set(r,!1),e.set(r,!1)}finally{St.delete(r)}}return e}function Gc(t){const e=[],r=[];for(const[n,s]of t)s&&r.push(n);if(r.length>0){const n=r.map(s=>s.replaceAll(/[$()*+.?[\\\]^{|}]/g,"\\$&")).join("|");e.push({match:`\\b(${n})\\b`,name:"embedding-valid"},{captures:{1:{name:"bracket"},2:{name:"embedding-valid"},3:{name:"func"},4:{name:"number"},5:{name:"bracket"}},match:`([\\(\\[])\\s*(${n})\\s*(:)(-?[0-9]*\\.?[0-9]+)\\s*([\\)\\]])`})}return e}function ar(){return{$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",fileTypes:["prompt"],name:"prompt",patterns:[...$s],repository:{},scopeName:"source.prompt"}}function Wc(t,e){if(Ye.size>=Bc){const r=Ye.keys().next().value;r!==void 0&&Ye.delete(r)}Ye.set(t,e)}async function qc(t){try{const e=Uc(t),r=e.sort().join("|");if(Ye.has(r))return Ye.get(r);if(e.length===0)return ar();if(!await Fc())return B("⚠️ Embedding API not available, using static grammar with unknown embeddings"),ar();const s=await Vc(e),o=Gc(s),i=$s.map(a=>a.begin&&a.begin==="({)([^:{}]+)(:)"?{...a,patterns:[...o,...a.patterns]}:a),l={$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",fileTypes:["prompt"],name:"prompt",patterns:[...o,...i],repository:{},scopeName:"source.prompt"};return Wc(r,l),l}catch(e){return B("⚠️ Error creating dynamic grammar, falling back to static:",e),ar()}}const Ts={$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",fileTypes:["prompt"],name:"prompt",patterns:[{match:"[,]",name:"comma"},{match:"AND",name:"and"},{match:"BREAK",name:"break"},{captures:{0:{name:"model-bracket"},1:{name:"model-type"},2:{name:"model-name"},3:{name:"number"}},match:"<([^:]+):([^:]+):([^>]+)>"},{captures:{0:{name:"embedding-bracket"},1:{name:"embedding-name"}},match:"<(embedding:[^>]+)>"},{match:"[<|>]",name:"model-bracket"},{match:"[(|)|\\[|\\]|{|}\\\\]",name:"bracket"},{match:":\\d*\\.?\\d+|:\\.\\d+",name:"number"},{match:"[:|]",name:"func"},{match:"__.*__",name:"wildcards"},{match:"#.*",name:"comment"}],repository:{},scopeName:"source.prompt"},$t=[Ts],fd=Object.freeze({__proto__:null,default:$t,lang:Ts}),rt=(t,e)=>{const r=t?"dark":"light",n=r+(e?"-neg-prompt":""),s=t?J.yellow[r][9]:J.gold[r][10],o=t?J.gold[r][9]:J.orange[r][10],i=t?J.volcano[r][10]:J.volcano[r][8],l=t?J.lime[r][9]:J.green[r][10],a=t?J.lime[r][7]:J.green[r][8],h=t?J.blue[r][9]:J.geekblue[r][9],c=t?J.purple[r][11]:J.purple[r][8],d=t?J.gray[r][8]:J.gray[r][9],p=t?J.red[r][9]:J.red[r][8];return{colors:{"editor.foreground":e?i:l},name:n,tokenColors:[{scope:"comma",settings:{foreground:J.gray[r][11]}},{scope:["and","break"],settings:{foreground:h}},{scope:"bracket",settings:{foreground:c}},{scope:"model-type",settings:{fontStyle:"italic",foreground:i}},{scope:"model-name",settings:{foreground:o}},{scope:"model-bracket",settings:{foreground:c}},{scope:"number",settings:{foreground:c}},{scope:"func",settings:{foreground:c}},{scope:"wildcards",settings:{foreground:s}},{scope:"comment",settings:{foreground:d}},{scope:"embedding-valid",settings:{fontStyle:"italic",foreground:h}},{scope:"embedding-invalid",settings:{fontStyle:"italic",foreground:i,textDecoration:"line-through"}},{scope:"embedding-unknown",settings:{fontStyle:"italic",foreground:o}},{scope:"embedding-bracket",settings:{foreground:c}},{scope:"category-name",settings:{foreground:p}},{scope:"category-bracket",settings:{foreground:c}},{scope:"term",settings:{foreground:a}}],type:r}},bd=Object.freeze({__proto__:null,themeConfig:rt}),Ne=class Ne{constructor(){L(this,"worker",null);L(this,"isInitialized",!1);L(this,"initPromise",null);L(this,"pendingRequests",new Map);L(this,"metrics",{averageTime:0,cacheHits:0,errors:0,totalRequests:0,totalTime:0});L(this,"requestCache",new Map);L(this,"CACHE_TTL",5*60*1e3);L(this,"MAX_CACHE_SIZE",100)}static getInstance(){return Ne.instance||(Ne.instance=new Ne),Ne.instance}generateRequestId(){return`${Date.now()}-${Math.random().toString(36).slice(2,11)}`}generateCacheKey(e,r,n,s){return`${e.slice(0,50)}-${e.length}-${r}-${n}-${s}`}cleanupCache(){const e=Date.now(),r=[];for(const[n,s]of this.requestCache.entries())e-s.timestamp>this.CACHE_TTL&&r.push(n);if(r.forEach(n=>this.requestCache.delete(n)),this.requestCache.size>this.MAX_CACHE_SIZE){const n=Array.from(this.requestCache.entries());n.sort((o,i)=>o[1].timestamp-i[1].timestamp),n.slice(0,n.length-this.MAX_CACHE_SIZE).forEach(([o])=>this.requestCache.delete(o))}}createWorker(){return console.info("Web Worker disabled in IIFE build - using main thread fallback for syntax highlighting"),null}async initialize(){if(!this.isInitialized)return this.initPromise?this.initPromise:(this.initPromise=(async()=>{try{if(this.worker=this.createWorker(),!this.worker){console.warn("Web Worker not available, will use main thread fallback for all requests"),this.isInitialized=!0,setInterval(()=>this.cleanupCache(),6e4);return}this.worker.onmessage=n=>{this.handleWorkerMessage(n.data)},this.worker.onerror=n=>{console.error("Shiki Worker error:",n),this.metrics.errors++};const e=this.generateRequestId(),r=new Promise((n,s)=>{const o=setTimeout(()=>{s(new Error("Worker initialization timeout"))},1e4);this.pendingRequests.set(e,{reject:i=>{clearTimeout(o),s(i)},resolve:()=>{clearTimeout(o),n()},startTime:Date.now()})});this.worker.postMessage({id:e,type:"init"}),await r,this.isInitialized=!0,setInterval(()=>this.cleanupCache(),6e4)}catch(e){console.warn("Worker initialization failed, will use main thread fallback:",e),this.worker=null,this.isInitialized=!0,this.initPromise=null,setInterval(()=>this.cleanupCache(),6e4)}})(),this.initPromise)}handleWorkerMessage(e){const r=this.pendingRequests.get(e.id);if(r){if(this.pendingRequests.delete(e.id),e.type==="init-result")e.success?r.resolve(""):r.reject(new Error(e.error||"Worker initialization failed"));else if(e.type==="highlight-result"){const n=Date.now()-r.startTime;this.updateMetrics(n,!e.error),e.error?r.reject(new Error(e.error)):e.html?r.resolve(e.html):r.reject(new Error("No HTML returned from worker"))}}}updateMetrics(e,r){this.metrics.totalRequests++,r?(this.metrics.totalTime+=e,this.metrics.averageTime=this.metrics.totalTime/(this.metrics.totalRequests-this.metrics.errors)):this.metrics.errors++}async highlight(e,r,n,s=!1){const o=this.generateCacheKey(e,r,n,s),i=this.requestCache.get(o);if(i&&Date.now()-i.timestamp<this.CACHE_TTL)return this.metrics.cacheHits++,i.html;if(await this.initialize(),!this.worker)throw new Error("Web Worker not available, use main thread fallback");const l=this.generateRequestId(),a=Date.now(),h=new Promise((d,p)=>{const m=setTimeout(()=>{this.pendingRequests.delete(l),p(new Error("Highlight request timeout"))},15e3);this.pendingRequests.set(l,{reject:E=>{clearTimeout(m),p(E)},resolve:E=>{clearTimeout(m),this.requestCache.set(o,{html:E,timestamp:Date.now()}),d(E)},startTime:a})}),c={id:l,isDarkMode:r,isNegPrompt:n,text:e,type:"highlight",useDynamicGrammar:s};return this.worker.postMessage(c),h}async highlightWithFallback(e,r,n,s=!1,o){try{return await this.highlight(e,r,n,s)}catch{return o?await o():e}}getMetrics(){return{...this.metrics,cacheSize:this.requestCache.size,isInitialized:this.isInitialized}}destroy(){this.worker&&(this.worker.terminate(),this.worker=null),this.pendingRequests.clear(),this.requestCache.clear(),this.isInitialized=!1,this.initPromise=null,Ne.instance=null}async preWarm(){try{await this.initialize(),await this.highlight("test",!1,!1,!1)}catch(e){console.warn("Failed to pre-warm Shiki worker:",e)}}};L(Ne,"instance",null);let At=Ne;const ks=At.getInstance(),wd=Object.freeze({__proto__:null,ShikiWorkerManager:At,shikiWorkerManager:ks});let lr,An;const cr=async()=>{if(!lr){const[t,e]=await Promise.all([pr(()=>import("./heavy-utils-CnT3T5QD.js").then(r=>r.g),__vite__mapDeps([0,1])),pr(()=>import("./heavy-utils-CnT3T5QD.js").then(r=>r.h),__vite__mapDeps([0,1]))]);lr=t.createHighlighterCore,An=e.createOnigurumaEngine}return{createHighlighterCore:lr,createOnigurumaEngine:An}};function Xc(t){const e=t.match(/[([]\s*[^():[\]]+\s*:-?\d*\.?\d+\s*[)\]]/g)||[];return e.length===0?"0":e.map(r=>r.replaceAll(/\s+/g,"")).sort().join("|").slice(0,20)}const Yc=()=>{},As=(t,e)=>(t?"dark":"light")+(e?"-neg-prompt":""),Kc={code(t){t.properties.id="lobe_highlighter"}},Ue=class Ue{constructor(){L(this,"engine",null);L(this,"staticHighlighter",null);L(this,"dynamicHighlighterCache",new Map);L(this,"grammarCache",new Map);L(this,"initPromise",null);L(this,"enginePromise",null);L(this,"themes",[rt(!1,!1),rt(!1,!0),rt(!0,!1),rt(!0,!0)]);setInterval(()=>{if(this.dynamicHighlighterCache.size>3){Y("🧹 Running periodic Shiki cleanup...");const r=Array.from(this.dynamicHighlighterCache.entries()).slice(0,-3);for(const[n,s]of r)s&&typeof s.dispose=="function"&&s.dispose(),this.dynamicHighlighterCache.delete(n)}},2*60*1e3)}static getInstance(){return Ue.instance||(Ue.instance=new Ue),Ue.instance}async getEngine(){return this.engine?this.engine:this.enginePromise?this.enginePromise:(this.enginePromise=(async()=>{try{const{createOnigurumaEngine:e}=await cr();return this.engine=await e(async()=>{const r=await pr(()=>import("./heavy-utils-CnT3T5QD.js").then(n=>n.w),__vite__mapDeps([0,1]));return Y("📦 Minimal Shiki WASM loaded for prompt syntax only"),r}),Y("✅ Optimized Shiki engine initialized successfully"),this.engine}catch(e){throw B("❌ Failed to initialize optimized Shiki engine:",e),this.enginePromise=null,e}})(),this.enginePromise)}getCachedGrammar(e){const r=this.generateGrammarCacheKey(e);return this.grammarCache.get(r)||null}setCachedGrammar(e,r){const n=this.generateGrammarCacheKey(e);if(this.grammarCache.size>=50){const s=this.grammarCache.keys().next().value;s!==void 0&&this.grammarCache.delete(s)}this.grammarCache.set(n,r)}generateGrammarCacheKey(e){const r=e.match(/[A-Z_a-z][\w.-]*/g)||[];return[...new Set(r)].sort().slice(0,20).join("|")}async getDynamicHighlighter(e){const r=this.generateGrammarCacheKey(e);if(this.dynamicHighlighterCache.has(r))return this.dynamicHighlighterCache.get(r);try{const n=await this.getEngine();let s=this.getCachedGrammar(e);s||(e.includes("<")||e.includes("{")||e.includes("embedding:")?s=await qc(e):s=$t[0],this.setCachedGrammar(e,s));const o=$t[0];if(!o)throw new Error("Base grammar not available");const i={...s,patterns:s.patterns?.slice(0,20)||o.patterns||[],repository:{}},{createHighlighterCore:l}=await cr(),a=await l({engine:n,langs:[i],themes:this.themes});if(this.dynamicHighlighterCache.size>=3){const h=this.dynamicHighlighterCache.keys().next().value;if(h!==void 0){const c=this.dynamicHighlighterCache.get(h);c&&typeof c.dispose=="function"&&c.dispose(),this.dynamicHighlighterCache.delete(h)}}return this.dynamicHighlighterCache.set(r,a),a}catch(n){return B("⚠️ Failed to create optimized dynamic highlighter, falling back to static:",n),this.getStaticHighlighter()}}async getStaticHighlighter(){return this.staticHighlighter?this.staticHighlighter:this.initPromise?this.initPromise:(this.initPromise=(async()=>{try{const e=await this.getEngine(),r=$t[0];if(!r)throw new Error("Base grammar not available");const n={...r,patterns:r.patterns?.filter(i=>i.name!=="comment"||i.match!=="#.*")||[],repository:{}},{createHighlighterCore:s}=await cr(),o=await s({engine:e,langs:[n],themes:this.themes});return this.staticHighlighter=o,Y("✅ Optimized static highlighter initialized successfully"),o}catch(e){throw this.initPromise=null,B("❌ Failed to initialize optimized static highlighter:",e),e}})(),this.initPromise)}async preWarm(){try{await this.getEngine(),this.getStaticHighlighter().catch(e=>{B("⚠️ Failed to pre-warm static highlighter:",e)})}catch(e){B("⚠️ Failed to pre-warm Shiki engine:",e)}}clearCaches(){this.dynamicHighlighterCache.clear(),this.grammarCache.clear(),Y("🧹 Shiki caches cleared")}getCacheStats(){return{dynamicHighlighters:this.dynamicHighlighterCache.size,grammars:this.grammarCache.size,hasEngine:!!this.engine,hasStaticHighlighter:!!this.staticHighlighter}}cleanup(){for(const e of this.dynamicHighlighterCache.values())e&&typeof e.dispose=="function"&&e.dispose();this.dynamicHighlighterCache.clear(),this.staticHighlighter&&typeof this.staticHighlighter.dispose=="function"&&(this.staticHighlighter.dispose(),this.staticHighlighter=null),this.grammarCache.clear(),Y("🧹 ShikiEngineManager cleanup completed")}};L(Ue,"instance",null);let Rt=Ue;const Tr=Rt.getInstance(),Jc=async t=>t&&t.length>0?Tr.getDynamicHighlighter(t):Tr.getStaticHighlighter(),Zc=async(t,e,r)=>{const n=t&&t.length>0,s=async()=>{try{const o=await Jc(t),i=As(e,r);return o.codeToHtml(t,{lang:"prompt",theme:i,transformers:[Kc]})}catch(o){return De("❌ Fallback highlighting failed:",o),t}};return ks.highlightWithFallback(t,e,r,!!n,s)};class Qc{constructor(){L(this,"contentCache",new Map);L(this,"elementCache",new WeakMap);L(this,"CACHE_TTL",5*60*1e3);L(this,"MAX_CACHE_SIZE",80);L(this,"cleanupInterval",null);this.startPeriodicCleanup()}startPeriodicCleanup(){this.cleanupInterval=setInterval(()=>{this.cleanupExpiredEntries()},2*60*1e3)}cleanupExpiredEntries(){const e=Date.now(),r=[];for(const[n,s]of this.contentCache.entries())e-s.timestamp>this.CACHE_TTL&&r.push(n);r.forEach(n=>this.contentCache.delete(n)),r.length>0&&Y(`🧹 Cleaned up ${r.length} expired cache entries`)}getCachedContent(e){const r=this.contentCache.get(e);return r?Date.now()-r.timestamp>this.CACHE_TTL?(this.contentCache.delete(e),null):r.html:null}setCachedContent(e,r){this.contentCache.size>=this.MAX_CACHE_SIZE&&Array.from(this.contentCache.entries()).sort((s,o)=>s[1].timestamp-o[1].timestamp).slice(0,Math.floor(this.MAX_CACHE_SIZE*.3)).forEach(([s])=>this.contentCache.delete(s)),this.contentCache.set(e,{html:r,timestamp:Date.now()})}getElementCache(e){return this.elementCache.get(e)}setElementCache(e,r){this.elementCache.set(e,r)}clearAll(){this.contentCache.clear(),Y("🧹 All highlight caches cleared")}getStats(){return{cacheTTL:this.CACHE_TTL,contentCacheSize:this.contentCache.size,maxCacheSize:this.MAX_CACHE_SIZE}}dispose(){this.cleanupInterval&&(clearInterval(this.cleanupInterval),this.cleanupInterval=null),this.clearAll()}}const Vr=new Qc,eu=t=>Vr.getCachedContent(t),tu=(t,e)=>Vr.setCachedContent(t,e),Gr=()=>{Vr.clearAll(),Tr.clearCaches(),Y("🧹 All highlight caches cleared")},ru=()=>{Gr(),document.querySelectorAll("textarea").forEach(e=>{e.dispatchEvent(new Event("input",{bubbles:!0}))}),Y("🔄 Forced highlighting refresh on all textareas")},nu=()=>{Y("🚨 EMERGENCY: Forcing all highlighting to complete..."),Gr(),document.querySelectorAll('[data-code-type="highlighter"]').forEach((e,r)=>{Y(`🔧 Forcing container ${r} to show plain text`),e.querySelectorAll(".shiki").forEach(o=>{if(o.parentElement){const l=document.createElement("code");l.style.pointerEvents="none",l.style.fontFamily="inherit";const h=e.dataset.codeType==="highlighter"?"textarea":null;if(h){const c=document.querySelector(h);c&&(l.textContent=c.value)}o.replaceWith(l)}}),e.querySelectorAll('[class*="loading"]').forEach(o=>o.remove())}),Y("✅ Emergency highlighting completion done")},Rs=(t,e,r)=>{const n=f.useMemo(()=>{if(!t||t.length<2)return null;const i=As(e,r),l=Xc(t),a=t.length>80?`${t.slice(0,25)}...${t.slice(-25)}_${t.length}_${l}`:t;return`${i}-${a}`},[t,e,r]),s=os(n,async i=>{const l=eu(i);if(l)return l;try{const a=await Zc(t,e,r);return tu(i,a),a}catch(a){return De("❌ Highlighting failed:",a),t}},{dedupingInterval:1e3,errorRetryCount:1,errorRetryInterval:2e3,revalidateIfStale:!0,revalidateOnFocus:!1,revalidateOnReconnect:!1,shouldRetryOnError:!1});return!t||t.length<2?{data:t,error:null,isLoading:!1}:{data:s.data,error:s.error,isLoading:s.isLoading}},vd=Object.freeze({__proto__:null,ShikiEngineManager:Rt,clearHighlightCache:Gr,forceCompleteAllHighlighting:nu,forceRefreshHighlighting:ru,toggleHighlightDebug:Yc,useHighlight:Rs}),su=Oe(({css:t,token:e,cx:r,stylish:n,prefixCls:s})=>{const o=`${s}-highlighter`;return{container:t`
      /* CSS custom properties for micro-adjustments if needed */
      --highlight-offset-x: 0;
      --highlight-offset-y: 0;
      --highlight-sub-pixel-x: 0;
      --highlight-sub-pixel-y: 0;

      pointer-events: none !important;

      position: absolute;

      /* Enhanced positioning for pixel-perfect alignment */
      top: 0;
      left: 0;
      transform: translate(
        calc(var(--highlight-offset-x) + var(--highlight-sub-pixel-x)),
        calc(var(--highlight-offset-y) + var(--highlight-sub-pixel-y))
      );

      /* Critical: Force hardware acceleration and prevent sub-pixel issues */
      will-change: transform;
      transform-style: preserve-3d;
      backface-visibility: hidden;

      /* Ensure consistent rendering across browsers */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-smooth: always;
      text-rendering: optimizeLegibility;

      /* Allow content to be visible even if it extends beyond container */
      overflow: visible;

      box-sizing: border-box;

      /* Remove hardcoded padding and margins - will be set dynamically to match textarea */
      margin: 0;
      padding: 0;

      /* Ensure perfect text baseline alignment */
      vertical-align: baseline;

      /* Prevent text selection and interaction issues */
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;

      /* Ensure all child elements also don't capture events */
      * {
        pointer-events: none !important;
      }

      pre {
        margin: 0 !important;
        padding: 0 !important;

        /* Font properties will be inherited from parent container */

        /* which gets them dynamically from the textarea */
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        font-style: inherit !important;
        font-variant: inherit !important;
        font-stretch: inherit !important;
        line-height: inherit !important;
        hyphens: inherit !important;
        text-align: inherit !important;

        /* Text layout properties - inherit from parent to match textarea exactly */
        text-indent: inherit !important;
        text-transform: inherit !important;
        text-rendering: inherit !important;
        letter-spacing: inherit !important;
        word-break: inherit !important;
        word-spacing: inherit !important;
        word-wrap: inherit !important;
        overflow-wrap: inherit !important;

        /* Tab size */
        tab-size: inherit !important;
        tab-size: inherit !important;

        /* Critical: inherit wrapping behavior from parent instead of forcing */
        white-space: inherit !important;

        /* Vertical alignment */
        vertical-align: inherit !important;
      }
    `,loading:r(n.blur,t`
        /* Loading indicator should also not capture events */
        pointer-events: none !important;

        position: absolute;
        z-index: 10;
        top: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 34px;
        padding: 0 8px;
        border-radius: ${e.borderRadius};

        font-family: ${e.fontFamilyCode};
        color: ${e.colorTextTertiary};

        * {
          pointer-events: none !important;
        }
      `),shiki:r(`${o}-shiki`,t`
        pointer-events: none !important;
        margin: 0;
        padding: 0;

        /* Ensure all Shiki-generated content doesn't capture events */
        * {
          pointer-events: none !important;
        }

        .shiki {
          pointer-events: none !important;

          overflow-x: auto;

          margin: 0 !important;
          padding: 0 !important;

          /* Ensure exact positioning match */
          border: none !important;

          background: none !important;
          outline: none !important;

          /* Enhanced text rendering for pixel-perfect alignment */
          -webkit-font-smoothing: inherit;
          -moz-osx-font-smoothing: inherit;
          font-smooth: inherit;
          text-rendering: inherit;

          /* Prevent sub-pixel positioning issues */
          transform: translateZ(0);
          will-change: auto;

          /* Ensure consistent text metrics */
          font-variant-ligatures: inherit;
          font-variant-numeric: inherit;
          font-feature-settings: inherit;
          font-kerning: inherit;

          /* Make sure all highlighted elements are non-interactive and aligned */
          code,
          code span,
          code *,
          span,
          span * {
            pointer-events: none !important;

            margin: 0 !important;
            padding: 0 !important;
            border: none !important;

            /* Inherit ALL font and text properties from parent container */
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            font-style: inherit !important;
            font-variant: inherit !important;
            font-stretch: inherit !important;
            line-height: inherit !important;
            hyphens: inherit !important;
            text-align: inherit !important;
            text-decoration: none !important;
            text-indent: inherit !important;
            text-transform: inherit !important;
            text-rendering: inherit !important;
            letter-spacing: inherit !important;
            word-break: inherit !important;
            word-spacing: inherit !important;
            word-wrap: inherit !important;
            overflow-wrap: inherit !important;

            /* Tab size */
            tab-size: inherit !important;
            tab-size: inherit !important;

            /* Inherit wrapping behavior */
            white-space: inherit !important;

            /* Vertical alignment */
            vertical-align: inherit !important;

            background: transparent !important;
          }

          /* Ensure code elements don't add extra spacing and inherit all layout */
          code {
            display: block !important;

            word-break: inherit !important;
            word-wrap: inherit !important;
            overflow-wrap: inherit !important;

            /* Critical: inherit wrapping behavior instead of forcing */
            white-space: inherit !important;
          }
        }
      `)}}),Is=f.memo(({parentId:t,children:e,priority:r="normal",maxLength:n=1e4})=>{const{styles:s}=su(),{isDarkMode:o}=Ks(),i=f.useRef(null),[l,a]=f.useState(!1),[h,c]=f.useState(r==="high"),{isNegPrompt:d,textContent:p}=f.useMemo(()=>{const A=e;return{isNegPrompt:t.endsWith("_neg_prompt"),textContent:A}},[e,t]);Lc(r==="high"?null:i.current,([A])=>{A&&c(A.isIntersecting)},{rootMargin:"50px",threshold:.1},`syntax-highlighter-${t||"default"}`,200);const m=p.length>0&&p.length<=n&&h,{data:E,isLoading:b,error:R}=Rs(p,o,d);if(f.useEffect(()=>{if(!b||!m){a(!1);return}const A=r==="high"?3e3:r==="low"?8e3:5e3,P=setTimeout(()=>{B(`⏰ SyntaxHighlighter timeout after ${A}ms (priority: ${r}, parentId: ${t.slice(-20)})`),a(!0)},A);return()=>clearTimeout(P)},[b,r,m,t]),p.length>n)return u.jsx("div",{className:s.shiki,ref:i,children:u.jsxs("code",{title:"Content too long for syntax highlighting",children:[p.slice(0,200),"..."]})});if(p.length===0||p.length>n)return u.jsx("div",{ref:i,children:u.jsx("code",{children:p})});if(R)return De("SyntaxHighlighter error:",R),u.jsx("div",{className:s.shiki,ref:i,children:u.jsx("code",{style:{opacity:.8},children:p})});const C=!!E,G=C&&!R&&h,j=l&&!C,D=b&&!C&&!l&&h;return u.jsx(hi,{component:"SyntaxHighlighter",children:u.jsxs("div",{ref:i,children:[G?u.jsx("div",{className:s.shiki,dangerouslySetInnerHTML:{__html:E},style:{MozUserSelect:"none",WebkitUserSelect:"none",msUserSelect:"none",pointerEvents:"none",userSelect:"none"}}):u.jsx("div",{className:s.shiki,children:u.jsx("code",{style:{opacity:j?.8:1,pointerEvents:"none"},children:p})}),D&&r==="high"&&u.jsxs(st,{className:s.loading,gap:8,horizontal:!0,style:{pointerEvents:"none"},children:[u.jsx(_r,{}),"Highlighting..."]})]})})});Is.displayName="SyntaxHighlighter";const ou=Oe(({token:t,css:e,cx:r,prefixCls:n},s)=>{const o=`${n}-highlighter`,i=`${o}-hover-btn`,l=`${o}-hover-lang`,a=e`
      border: 1px solid ${s==="block"?"transparent":t.colorBorder};
      background-color: ${s==="block"?t.colorFillTertiary:"transparent"};

      &:hover {
        background-color: ${s==="block"?t.colorFillTertiary:t.colorFillQuaternary};
      }
    `;return{container:r(o,s!=="pure"&&a,e`
          position: relative;
          overflow: auto;
          border-radius: ${t.borderRadius}px;
          transition: background-color 100ms ${t.motionEaseOut};

          &:hover {
            .${i} {
              opacity: 1;
            }

            .${l} {
              opacity: 1;
            }
          }

          .prism-code {
            background: none !important;
          }

          pre {
            margin: 0 !important;
            padding: ${s==="pure"?0:"16px 24px"} !important;
            background: none !important;
          }

          code {
            background: transparent !important;
          }
        `),header:e`
        padding: 4px 8px;
        background: ${t.colorFillQuaternary};
      `,select:e`
        .${n}-select-selection-item {
          min-width: 100px;
          padding-inline-end: 0 !important;
          color: ${t.colorTextDescription};
          text-align: center;
        }
      `}}),Rn=f.memo(({children:t,title:e="Prompt",className:r,style:n,showCopy:s=!0,...o})=>{const[i,l]=f.useState(!0),{styles:a,cx:h}=ou("block"),c=h(a.container,r);return u.jsxs("div",{className:c,"data-code-type":"highlighter",style:n,...o,children:[u.jsxs(H,{align:"center",className:a.header,horizontal:!0,justify:"space-between",children:[u.jsx(Yr,{icon:i?ii:ai,onClick:()=>l(!i),size:{blockSize:24,fontSize:14,strokeWidth:3}}),u.jsx(Yr,{size:{blockSize:24},style:{width:"unset"},children:e}),s?u.jsx(Wn,{content:t,placement:"left",size:{blockSize:24,fontSize:14,strokeWidth:2}}):u.jsx("div",{})]}),u.jsx("div",{style:i?{}:{height:0,overflow:"hidden"},children:u.jsx(Is,{maxLength:2e4,parentId:e?.includes("Negative")?`${r}_neg_prompt`:r||"",priority:"high",children:t})})]})});var In,Ln;(function(t){t.CR="\r",t.CRLF=`\r
`,t.LF=`
`})(In||(In={})),function(t){t[t.CR=13]="CR",t[t.LF=10]="LF"}(Ln||(Ln={}));const iu=/\r\n|\r(?!\n)|\n/g;function au(t,e=`
`){return t.replace(iu,e)}var jn,On;(function(t){t.INCLUDE_SEPARATOR_NONE="NONE",t.INCLUDE_SEPARATOR_SEPARATELY="SEPARATELY",t.INCLUDE_SEPARATOR_LEFT="LEFT",t.INCLUDE_SEPARATOR_RIGHT="RIGHT",t.INCLUDE_SEPARATOR_ONLY="ONLY"})(jn||(jn={})),function(t){t[t.ACTION_CLOSE=1]="ACTION_CLOSE",t[t.ACTION_OPEN=2]="ACTION_OPEN",t[t.ACTION_ADD_FRAGMENT=3]="ACTION_ADD_FRAGMENT",t[t.ACTION_NULL=4]="ACTION_NULL"}(On||(On={}));const Ct=t=>{let e,r;return function(...n){return r||(e=t(...n),r=!0),e}},It=t=>{if(!t)return!0;if(Array.isArray(t)){if(t.length===0)return!0}else if(typeof t=="object"&&Object.keys(t).length===0)return!0;return!1},kr=t=>t[0];function lu(t){const e=[t].flat().filter(Boolean);return!It(e)&&{values:new Set(e),max:Math.max(...e),count:0,hasIndex(){return this.max===-1/0||this.values.has(this.count++)},isOverMax(){return this.max!==-1/0&&this.count>this.max}}}class cu{constructor(e,r){this.string=e,this.searchSettings=r,this.prepareSearch()}prepareSearch(){for(const e of[this.searchSettings.separatorSearch,this.searchSettings.bracketsSearch])e.lastIndex=0;Object.assign(this,{brackets:[],pipe:[],currentMentions:[],position:0,isDone:!1,freeArea:{start:0,end:void 0},lastSeparator:void 0,searchString:this.searchSettings.ignoreCase&&!this.searchSettings.separatorSearch.ignoreCase?this.string.toUpperCase():this.string,indexes:lu(this.searchSettings.indexes)})}get pipeIsEmpty(){return It(this.pipe)}getMentions(e,r){const n=[],s=[];for(const o of this.currentMentions)o.index>=e&&o.index<r?n.push(o.mention):s.push(o);return[n.length&&n,s]}trimResultText(e){return this.searchSettings.trimResult?e.trim():e}trimSeparatorText(e){return this.searchSettings.trimSeparators?e.trim():e}checkSeparator(e){const{string:r}=this,{check:n,includePositions:s,mentions:o}=this.searchSettings;let{0:i="",index:l=r.length,searchWithinData:a}=e??{};const h=i.length,c=a?a.openPosition:this.position;let d=r.substring(c,l);i||(this.isDone=!0),d=this.trimResultText(d),i=this.trimSeparatorText(i);let p,m=a?[a.open,a.close]:i;if(s&&(d={text:d,position:c},m={text:m,position:l,isSeparator:!0}),o){d=typeof d=="string"?{text:d}:d;const[E,b]=this.getMentions(c,l);E&&(d.mentions=E,p=b)}if(n&&i){const E=isNaN(this.tempPosition)?c:this.tempPosition;this.tempPosition=l+i.length;const b=this;if(!n({getString:Ct(()=>b.trimResultText(r.substring(E,l))),getTextAfter:Ct(()=>r.substring(l+i.length)),getMentions:Ct(()=>b.getMentions(E,l)[0]),getSeparator:Ct(()=>i),get string(){return this.getString()},get textAfter(){return this.getTextAfter()},get mentions(){return this.getMentions()},get separator(){return this.getSeparator()}}))return[];delete this.tempPosition}return p&&(this.currentMentions=p),this.position=l+h,[d,m,!0]}pushToPipe(e){if(this.indexes){if(!this.indexes.hasIndex())return;this.indexes.isOverMax()&&(this.isDone=!0)}this.pipe.push(e)}addToPipe(e){let[r,n,s]=this.checkSeparator(e);if(!s)return!1;switch(this.searchSettings.includeSeparatorMode){case"SEPARATELY":this.pushToPipe(r),n&&this.pushToPipe(n);break;case"LEFT":this.pushToPipe([r,n]);break;case"RIGHT":!(typeof r=="object"?r.text:r)&&!this.lastSeparator||this.pushToPipe([this.lastSeparator,r]),this.lastSeparator=n;break;case"ONLY":n&&this.pushToPipe(n);break;default:this.pushToPipe(r)}return!this.pipeIsEmpty}findBrackets(){const{searchString:e,brackets:r,freeArea:n,searchSettings:s}=this,{bracketsSearch:o,separatorSearch:i,searchWithin:l}=s,a=l?()=>this.pipeIsEmpty:()=>(typeof n.start!="number"||n.start!==n.end)&&!n.end;for(;a();){var h;const d=o.exec(e);if(!d){if(l||isNaN(n.start))return!1;n.end=e.length-1;continue}const p=d[0],{close:m,ignoreMode:E,searchLevels:b}=(c=r)[c.length-1]||{};let R;switch((p===m?1:E&&4)||(R=s.bracketsMap[p])&&2||((h=s.mentions)===null||h===void 0?void 0:h[p])&&3){case 1:const C=r.pop();l?(b===!0||b.includes(r.length+1))&&this.addToPipe(Object.assign(d,{searchWithinData:C})):It(r)&&(n.start=d.index,i&&i.lastIndex<n.start&&(i.lastIndex=n.start));break;case 2:r.push({...R,openPosition:d.index+p.length}),r.length!==1||l||(n.end=d.index);break;case 3:this.currentMentions.push({mention:s.mentions[p],index:d.index})}}var c;return!0}findSeparator(e){const{searchString:r,freeArea:n}=this,{separatorSearch:s}=this.searchSettings;let o;for(;!o;){if(e=e||s.exec(r))if(e.index<=n.end){const i=e.index>=n.start&&this.addToPipe(e);if(e=null,!i)continue}else n.start=n.end=void 0;else this.addToPipe();o=!0}return e}getNext(){let e;for(;this.pipeIsEmpty&&!this.isDone;)this.findBrackets()?this.searchSettings.searchWithin||(e=this.findSeparator(e)):this.isDone=!0;return this.pipeIsEmpty?null:this.pipe.shift()}getAll(){return[...this]}getRest(){const e=[];let r;for(;(r=this.getNext())!==null;)e.push(r);return e}*[Symbol.iterator](){this.prepareSearch();const e=this;let r;do r=e.getNext(),r!==null&&(yield r);while(r!==null)}}function uu(t,e){const r=this.merge(e);let n=new cu(t,r);return typeof r.indexes=="number"?n.getNext():r.returnIterator?n:n.getAll()}function hu(t){const e=uu.bind(t);return Object.assign(e,{getOne(r,n,s={}){if(isNaN(n))throw new TypeError("second parameter of `getOne` function should be index");return e(r,{...s,indexes:n})},getFirst:(r,n={})=>e(r,{...n,indexes:0}),getIndexes(r,n,s={}){if(!Array.isArray(n))throw new TypeError("second parameter of `getOne` function should be array of indexes");return e(r,{...s,indexes:n})},getIterator:(r,n={})=>e(r,{...n,returnIterator:!0})})}function du(t,e){if(t==null||!t.length)throw new RangeError("empty arguments");if(t.length===3)return t;if(t.length===1){const r=kr(t);typeof r=="string"?t.push(",",{}):Array.isArray(r)?(t.unshift(null),t.push({})):typeof r=="object"&&t.unshift(null,",")}else if(t.length===2)typeof t[0]=="string"&&t[1]instanceof RegExp||typeof t[1]=="string"||Array.isArray(t[1])?t.push({}):t.unshift(null);else if(t.length>3)throw new RangeError("Too many arguments passed to splitSmartly function!!!");return t}let ur;function pu(t,e){return{brackets:[],mentions:[],ignoreInsideQuotes:!0,includeSeparatorMode:"NONE",ignoreCase:!0,trimResult:!0,trimSeparators:!1,defaultBrackets:[["(",")"],["[","]"],["{","}"]],...e,separators:t,init(){return function(s){if(Array.isArray(s.mentions)||typeof s.mentions=="string"){const o=[s.mentions].flat().filter(Boolean).reduce((i,l)=>(i[s.ignoreCase?l.toUpperCase():l]=l,i),{});s.mentions=!It(o)&&o}return s.createBracketsMap().createBracketsSearch().createSeparatorsSearch()}(this)},merge(n){return function(o,i){return i?(i={...o,...i},["brackets","mentions"].some(l=>l in i)&&i.init(),i):o}(this,n)},arrayToPattern:n=>function(o){var i;return(i=ur)!==null&&i!==void 0||(ur=new Set(".{}[]^()+*?\\/$|".split(""))),o.map(l=>l instanceof RegExp?l.source:l.split("").map(a=>ur.has(a)?"\\"+a:a).join("")).join("|")}(n),createRegExp:n=>RegExp(n,"g"),createBracketsMap(){return function(s){let o=s.brackets=function(l,a){var h;return l===!0?l=a.slice():typeof l!="object"||Array.isArray(l)?typeof l=="string"&&(l=l.split(",").map(c=>{let d=c.trim().split(" ");if(d.length!==2){if(kr(d).length!==2)throw new TypeError("open and close parts of brackets should be separated by space symbol");d=kr(d).split("")}return d})):l=Object.entries(l),(h=l)!==null&&h!==void 0?h:[]}(s.brackets,s.defaultBrackets);return o=function(l,a){return a.ignoreInsideQuotes&&l.unshift(["'",,,!0],['"',,,!0]),l}(o,s),s.bracketsMap=function(l,a){return l.reduce((h,[c,d,...p])=>{p.length!==1||a||p.unshift(void 0);let[m=a&&1,E]=p;return typeof m=="number"&&(m=[m]),h[c]={open:c,ignoreMode:E,searchLevels:m,close:d||c},h},{})}(o,s.searchWithin),s}(this)},createBracketsSearch(){return function(s){const o=Object.entries(s.bracketsMap).flatMap(([,{close:l,open:a}])=>l!==a?[a,l]:a).concat(Object.keys(s.mentions||{})).filter(Boolean),i=s.arrayToPattern(o);return s.bracketsSearch=s.createRegExp(i),s}(this)},createSeparatorsSearch(){return function(s){const{separators:o}=s;if(typeof o=="string"||Array.isArray(o)){const i=s.arrayToPattern([o].flat().filter(Boolean));s.separatorSearch=s.createRegExp(i)}else o?(s.separatorSearch=o,s.ignoreCase=o.ignoreCase):s.separatorSearch=/empty/;return s}(this)}}.init()}function gu(t,e){const r=pu(t,e);return{splitSettings:r,splitFn:hu(r)}}function Ls(...t){let[e,r,n]=du(t);const{splitFn:s}=gu(r,n);return e!==null?s(e):s}function js(t){return au(t).replace(/[ \t\xa0]+(?=\n)/g,"").replace(/\n{3,}/g,`

`).replace(/^[\r\n]+|[\s\r\n]+$/g,"")}const mu=/\r?\n/,Os=/(?:\x00\x00\x00|\u200b\u200b\u200b)\r?\n/;function fu(t){return t.split(_s(t)?Os:mu)}function _s(t){return Os.test(t)}function bu(t){const[,e,r]=t.match(/^([^:]+)\s*:\s*(.*)$/);return[e,r]}function*wu(t){t=js(t);const e=Ls(t,[","],{brackets:!0,trimSeparators:!0});for(let r of e)r!=null&&r.length&&(yield bu(r))}function vu(t){const e=_s(t=js(t));let r=fu(t),n="",s="",o="";const i=r.slice();if(r.length){if(e){var l,a;if(r.length>3)throw new TypeError;let h=r.pop();if(h.startsWith("Steps: ")&&(o=h,h=void 0),(l=h)!==null&&l!==void 0||(h=r.pop()),h.startsWith("Negative prompt: ")&&(s=h.slice(17),h=void 0),(a=h)!==null&&a!==void 0||(h=r.pop()),n=h,r.length)throw new TypeError}else{let h=r[r.length-1];if(h.startsWith("Steps: ")&&(o=r.pop(),h=void 0),r.length){let c=-1;for(let d=r.length-1;d>=0;d--)if(h=r[d],h.startsWith("Negative prompt: ")){c=d,r[d]=h.slice(17);break}c!==-1&&(s=r.splice(c).join(`
`)),n=r.join(`
`)}}n=n.replace(/\x00\x00\x00/g,""),s=s.replace(/\x00\x00\x00/g,"")}return{prompt:n,negative_prompt:s,infoline:o,infoline_extra:[],lines_raw:i}}function yu(t){return t.toLowerCase().replace(/ /g,"_")}function*Eu(t,e){for(const r of t)yield xu(r,e)}function xu(t,e){const r=e?.cast_to_snake;let[n,s]=t;const o=parseFloat(s),i=/^0\d/.test(s)||isNaN(o)||s-o!=0;return r&&(n=yu(n)),[n,i?s:o]}var _n;function Su(t,e){return Object.fromEntries([...Cu(t,e)])}function*Cu(t,e){if(e!=null&&e.isIncludePrompts){const{prompt:r,negative_prompt:n,infoline:s}=vu(t);yield["prompt",r],yield["negative_prompt",n],t=s}yield*Eu(wu(t),e)}(function(t){t.prompt="prompt",t.negative_prompt="negative_prompt"})(_n||(_n={}));const Nn=t=>{let e=t.replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll(/^[\s\u0000,。，]+$/gm,"").replaceAll(/\n{2,}/g,`
`);return Ls(e.replaceAll(`
`,"<br>"),[",","，","。"],{brackets:!0,trimSeparators:!0}).filter(n=>n.length).join(", ").replaceAll("<br>",`
`).replaceAll(/^\s+|\s+$/gm,"")},$u=t=>{if(!t||t==="undefined"||!t.includes("<br>"))return;let{prompt:e,negative_prompt:r,...n}=Su(t,{isIncludePrompts:!0});return e=e.trim().replaceAll("<br>",`
`).replaceAll(/\s+$/g,""),r=r.trim().replaceAll("<br>",`
`).replaceAll(/\s+$/g,""),e=e?Nn(e):"",r=r?Nn(r):"",{config:n,negative:r,positive:e}},Tu=f.memo(({value:t,className:e,style:r,showCopy:n=!0,showConfig:s=!0,showNegative:o=!0})=>{const{styles:i,cx:l}=_c(),a=f.useMemo(()=>$u(t),[t]);return!t||t==="undefined"||!a?null:u.jsxs(H,{className:e,gap:4,style:r,children:[a?.positive&&u.jsx(Rn,{className:i.highlight,showCopy:n,title:"Positive Prompt",children:a.positive}),o&&a?.negative&&u.jsx(Rn,{className:l(i.highlight,i.negative),showCopy:n,title:"Negative Prompt",children:a.negative}),s&&a?.config&&u.jsx(H,{className:i.container,style:n?{}:{paddingRight:24},children:Object.entries(a.config).map(([h,c])=>u.jsxs(H,{gap:4,horizontal:!0,justify:"space-between",children:[u.jsxs(H,{align:"center",className:i.configTitle,horizontal:!0,children:[h,":"]}),u.jsxs(H,{align:"center",className:i.configValue,gap:4,horizontal:!0,children:[c,n&&u.jsx(Wn,{content:c,size:"small"})]})]},h))})]})}),ku={dark:{colorPrimary:"#007AFF",colorPrimaryActive:"#1554ad",colorPrimaryBg:"#111a2c",colorPrimaryBgHover:"#112545",colorPrimaryBorder:"#15325b",colorPrimaryBorderHover:"#15417e",colorPrimaryHover:"#3c89e8",colorPrimaryText:"#1668dc",colorPrimaryTextActive:"#1554ad",colorPrimaryTextHover:"#3c89e8"},light:{colorPrimary:"#007AFF",colorPrimaryActive:"#0958d9",colorPrimaryBg:"#e6f4ff",colorPrimaryBgHover:"#bae0ff",colorPrimaryBorder:"#91caff",colorPrimaryBorderHover:"#69b1ff",colorPrimaryHover:"#4096ff",colorPrimaryText:"#1677ff",colorPrimaryTextActive:"#0958d9",colorPrimaryTextHover:"#4096ff"}},Au={dark:{colorBgContainer:"#1f1f1f",colorBgElevated:"#222",colorBgLayout:"#181818",colorBgSpotlight:"#444",colorBorder:"#444",colorBorderSecondary:"#333",colorFill:"rgb(255 255 255 / 18%)",colorFillQuaternary:"rgb(255 255 255 / 4%)",colorFillSecondary:"rgb(255 255 255 / 12%)",colorFillTertiary:"rgb(255 255 255 / 8%)",colorNeutral:"#666",colorText:"rgb(255 255 255 / 85%)",colorTextQuaternary:"rgb(255 255 255 / 25%)",colorTextSecondary:"rgb(255 255 255 / 65%)",colorTextTertiary:"rgb(255 255 255 / 45%)"},light:{colorBgContainer:"#fff",colorBgElevated:"#fff",colorBgLayout:"#f7f7f7",colorBgSpotlight:"rgb(0 0 0 / 85%)",colorBorder:"#ddd",colorBorderSecondary:"#eee",colorFill:"rgb(0 0 0 / 15%)",colorFillQuaternary:"rgb(0 0 0 / 2%)",colorFillSecondary:"rgb(0 0 0 / 6%)",colorFillTertiary:"rgb(0 0 0 / 4%)",colorNeutral:"#666",colorText:"rgb(0 0 0 / 88%)",colorTextQuaternary:"rgb(0 0 0 / 25%)",colorTextSecondary:"rgb(0 0 0 / 65%)",colorTextTertiary:"rgb(0 0 0 / 45%)"}};/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ru=`
<svg
  class="lucide lucide-archive-restore"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="20" height="5" x="2" y="3" rx="1" />
  <path d="M4 8v11a2 2 0 0 0 2 2h2" />
  <path d="M20 8v11a2 2 0 0 1-2 2h-2" />
  <path d="m9 15 3-3 3 3" />
  <path d="M12 12v9" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Iu=`
<svg
  class="lucide lucide-arrow-down-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17 7 7 17" />
  <path d="M17 17H7V7" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Lu=`
<svg
  class="lucide lucide-arrow-down-wide-narrow"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m3 16 4 4 4-4" />
  <path d="M7 20V4" />
  <path d="M11 4h10" />
  <path d="M11 8h7" />
  <path d="M11 12h4" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ju=`
<svg
  class="lucide lucide-arrow-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 5v14" />
  <path d="m19 12-7 7-7-7" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ou=`
<svg
  class="lucide lucide-arrow-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m12 19-7-7 7-7" />
  <path d="M19 12H5" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _u=`
<svg
  class="lucide lucide-arrow-right-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m16 3 4 4-4 4" />
  <path d="M20 7H4" />
  <path d="m8 21-4-4 4-4" />
  <path d="M4 17h16" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Mn=`
<svg
  class="lucide lucide-arrow-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
  <path d="m12 5 7 7-7 7" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Nu=`
<svg
  class="lucide lucide-arrow-up-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21 16-4 4-4-4" />
  <path d="M17 20V4" />
  <path d="m3 8 4-4 4 4" />
  <path d="M7 4v16" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Mu=`
<svg
  class="lucide lucide-book"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pu=`
<svg
  class="lucide lucide-box"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
  <path d="m3.3 7 8.7 5 8.7-5" />
  <path d="M12 22V12" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Du=`
<svg
  class="lucide lucide-brush"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m11 10 3 3" />
  <path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z" />
  <path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fu=`
<svg
  class="lucide lucide-clipboard-list"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  <path d="M12 11h4" />
  <path d="M12 16h4" />
  <path d="M8 11h.01" />
  <path d="M8 16h.01" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hu=`
<svg
  class="lucide lucide-corner-right-up"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m10 9 5-5 5 5" />
  <path d="M4 20h7a4 4 0 0 0 4-4V4" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zu=`
<svg
  class="lucide lucide-dices"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="12" height="12" x="2" y="10" rx="2" ry="2" />
  <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
  <path d="M6 18h.01" />
  <path d="M10 14h.01" />
  <path d="M15 6h.01" />
  <path d="M18 9h.01" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bu=`
<svg
  class="lucide lucide-download"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Uu=`
<svg
  class="lucide lucide-file-archive"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 12v-1" />
  <path d="M10 18v-2" />
  <path d="M10 7V6" />
  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  <path d="M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" />
  <circle cx="10" cy="20" r="2" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vu=`
<svg
  class="lucide lucide-folder-closed"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
  <path d="M2 10h20" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gu=`
<svg
  class="lucide lucide-grid-2x2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3v18" />
  <path d="M3 12h18" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wu=`
<svg
  class="lucide lucide-image"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <circle cx="9" cy="9" r="2" />
  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qu=`
<svg
  class="lucide lucide-laptop-minimal"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
  <line x1="2" x2="22" y1="20" y2="20" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xu=`
<svg
  class="lucide lucide-maximize"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8 3H5a2 2 0 0 0-2 2v3" />
  <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
  <path d="M3 16v3a2 2 0 0 0 2 2h3" />
  <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yu=`
<svg
  class="lucide lucide-panel-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M15 3v18" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ku=`
<svg
  class="lucide lucide-paperclip"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ju=`
<svg
  class="lucide lucide-pencil-ruler"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
  <path d="m8 6 2-2" />
  <path d="m18 16 2-2" />
  <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zu=`
<svg
  class="lucide lucide-play"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polygon points="6 3 20 12 6 21 6 3" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qu=`
<svg
  class="lucide lucide-refresh-ccw"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
  <path d="M16 16h5v5" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const eh=`
<svg
  class="lucide lucide-save"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
  <path d="M7 3v4a1 1 0 0 0 1 1h7" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const th=`
<svg
  class="lucide lucide-scaling"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
  <path d="M14 15H9v-5" />
  <path d="M16 3h5v5" />
  <path d="M21 3 9 15" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rh=`
<svg
  class="lucide lucide-settings"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
  <circle cx="12" cy="12" r="3" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nh=`
<svg
  class="lucide lucide-share-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sh=`
<svg
  class="lucide lucide-square-pen"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const oh=`
<svg
  class="lucide lucide-trash"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 6h18" />
  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ih=`
<svg
  class="lucide lucide-undo"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 7v6h6" />
  <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ah=`
<svg
  class="lucide lucide-wand-sparkles"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
  <path d="m14 7 3 3" />
  <path d="M5 6v4" />
  <path d="M19 14v4" />
  <path d="M10 2v2" />
  <path d="M7 8H3" />
  <path d="M21 16h-4" />
  <path d="M11 3H9" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lh=`
<svg
  class="lucide lucide-webcam"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="10" r="8" />
  <circle cx="12" cy="10" r="3" />
  <path d="M7 22h10" />
  <path d="M12 22v-4" />
</svg>
`;/**
* @license lucide-static v0.525.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ch=`
<svg
  class="lucide lucide-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>
`,M=(t,e,r,n)=>{if(!(!t?.textContent||!r))for(const s of e)t?.textContent?.includes(s)&&(t.innerHTML=r.replace('width="24"',`width="${n}"`).replace('height="24"',`height="${n}"`))},uh=()=>{for(const t of document.querySelectorAll("button"))M(t,["🖌️"],sh,16),M(t,["🗃️"],Uu,16),M(t,["🖼️"],Wu,16),M(t,["🎨️"],Du,16),M(t,["📂"],Vu,16),M(t,["🔄","🔁","♻️"],Qu,16),M(t,["↙️"],Iu,16),M(t,["⤴"],Hu,16),M(t,["↕️"],Lu,16),M(t,["🗑️"],oh,16),M(t,["📋"],Fu,16),M(t,["💾"],eh,16),M(t,["🎲️"],zu,16),M(t,["🪄"],ah,16),M(t,["⚙️"],rh,16),M(t,["➡️"],Mn,16),M(t,["⇅"],Nu,16),M(t,["⇄"],_u,16),M(t,["🎴"],Yu,16),M(t,["🌀"],Ru,16),M(t,["💥"],Zu,16),M(t,["📷"],lh,16),M(t,["📝"],qu,16),M(t,["📐"],Ju,16),M(t,["⬇️"],ju,16),M(t,["↩"],ih,16),M(t,["📒"],Mu,16),M(t,["📎"],Ku,16),M(t,["📦"],Pu,16),M(t,["💞"],nh,16),M(t,["✨"],th,16);for(const t of document.querySelectorAll("span"))M(t,["⤡"],Xu,36),M(t,["⊞"],Gu,36),M(t,["🖫"],Bu,36),M(t,["×"],ch,36);for(const t of document.querySelectorAll("a"))M(t,["❮"],Ou,36),M(t,["❯"],Mn,36);O.success("🤯 [svgIcon] replace")},nt={button:(t,e)=>e?`${t} ${e}`:t,input:(t,e=!1,r=!1)=>{let n=t;return e&&(n+=", required"),r&&(n+=", invalid input"),n},modal:t=>`${t} dialog`,tab:(t,e=!1)=>`${t} tab${e?", selected":""}`},_e={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",ENTER:"Enter",ESCAPE:"Escape",SPACE:" ",TAB:"Tab"},hh={arrowNavigation:(t,e)=>{switch(t.key){case _e.ARROW_DOWN:{t.preventDefault(),e.down?.();break}case _e.ARROW_UP:{t.preventDefault(),e.up?.();break}case _e.ARROW_LEFT:{t.preventDefault(),e.left?.();break}case _e.ARROW_RIGHT:{t.preventDefault(),e.right?.();break}}},enter:(t,e)=>{t.key===_e.ENTER&&(t.preventDefault(),e())},escape:(t,e)=>{t.key===_e.ESCAPE&&(t.preventDefault(),e())},space:(t,e)=>{t.key===_e.SPACE&&(t.preventDefault(),e())}},Pn={createFocusTrap(t){const e=r=>{r instanceof KeyboardEvent&&this.trapFocus(t,r)};return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}},focusFirst(t){const e=this.getFocusableElements(t);e.length>0&&e[0].focus()},focusLast(t){const e=this.getFocusableElements(t);e.length>0&&e.at(-1).focus()},getFocusableElements(t){const e=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])','[contenteditable="true"]'].join(", ");return Array.from(t.querySelectorAll(e))},trapFocus(t,e){if(e.key!==_e.TAB)return;const r=this.getFocusableElements(t);if(r.length===0)return;const n=r[0],s=r.at(-1);e.shiftKey?document.activeElement===n&&(e.preventDefault(),s.focus()):document.activeElement===s&&(e.preventDefault(),n.focus())}},Ns=f.memo(t=>{const{version:e,latestVersion:r}=je(o=>({latestVersion:o.latestVersion,version:o.version})),n=vs.gte(e,r),s=n?`Current version ${e} (latest)`:`Current version ${e}, latest version ${r} available`;return u.jsx("a",{"aria-label":nt.button("View on GitHub",s),href:Je,rel:"noreferrer",target:"_blank",children:n?u.jsxs(Kr,{color:"success",...t,"aria-label":`Version ${e}, up to date`,role:"status",children:["v",e]}):u.jsxs(Kr,{color:"warning",...t,"aria-label":`Version ${e}, update available to ${r}`,role:"status",children:["v",e," / latest v",r]})})}),yd=f.memo(({open:t,onCancel:e})=>{const r=je(at.currentSetting,Ir),n=qn(),{t:s}=de(),o=f.useRef(null);return f.useEffect(()=>{if(t&&o.current){const i=Pn.createFocusTrap(o.current);return Pn.focusFirst(o.current),i}},[t]),f.useEffect(()=>{const i=l=>{t&&hh.escape(l,()=>e?.(l))};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[t,e]),u.jsx(Lr,{footer:null,...e&&{onCancel:e},"aria-label":nt.modal(s("modal.themeFeedback.title")),"aria-modal":"true",open:t||!1,title:u.jsxs(H,{align:"center",gap:4,horizontal:!0,children:[s("modal.themeFeedback.title"),u.jsx(Ns,{})]}),children:u.jsx("div",{ref:o,children:u.jsxs(H,{gap:32,children:[u.jsx(st,{"aria-label":"Community links",gap:16,role:"region",style:{background:n.colorBgLayout,border:`1px solid ${n.colorBorderSecondary}`,borderRadius:n.borderRadiusLG,padding:"16px 0"},children:u.jsxs(H,{gap:16,horizontal:!0,children:[u.jsx("a",{"aria-label":nt.button("Join Discord community","opens in new tab"),href:fi,rel:"noreferrer",target:"_blank",children:u.jsx(me,{"aria-label":"Join Discord community",icon:u.jsx(Js,{icon:Zs}),size:"large",children:"Join Discord"})}),u.jsx("a",{"aria-label":nt.button("View GitHub repository","opens in new tab"),href:Je,rel:"noreferrer",target:"_blank",children:u.jsx(me,{"aria-label":"View GitHub repository",icon:u.jsx(is,{}),size:"large",children:"GitHub"})}),u.jsx("a",{"aria-label":nt.button("Sponsor project","opens in new tab"),href:bi,rel:"noreferrer",target:"_blank",children:u.jsx(Qs,{"aria-label":"Sponsor this project",icon:u.jsx(as,{}),children:"Sponsor"})})]})}),u.jsx(eo,{"aria-label":"Discussion comments",lang:r.i18n,mapping:"number",repo:vi,repoId:wi,term:"53"})]})})})}),Ed=f.memo(()=>{const{t}=de();return u.jsx(H,{height:"100vh",width:"100%",children:u.jsxs(st,{flex:1,gap:12,width:"100%",children:[u.jsx(lt,{extra:"SD",size:48,type:"combine"}),u.jsxs(st,{gap:16,horizontal:!0,children:[u.jsx(_r,{}),t("custom.initializing")]})]})})}),Ms=f.memo(({size:t=32,style:e,logoCustomUrl:r,logoCustomTitle:n})=>{let s=u.jsx(lt,{size:t,style:e});if(r)if(r.includes("http")||r.includes("data"))s=u.jsx("img",{alt:"logo",src:r,style:{height:t,...e}});else{const o=to(r);o&&(s=u.jsx(no,{emoji:o,size:t,style:e}))}return u.jsxs(ro,{align:"center",size:t*.3,children:[s,u.jsx("b",{style:{fontSize:t*.6,whiteSpace:"nowrap"},children:n})]})}),dh="https://gw.alipayobjects.com/zos/bmw-prod/9ecb2822-1592-4cb0-a087-ce0097fef2ca.svg",ph="https://gw.alipayobjects.com/zos/bmw-prod/e146116d-c65a-4306-a3d2-bb8d05e1c49b.svg",gh=f.memo(({size:t=32,style:e,themeMode:r})=>u.jsx("img",{alt:"logo",src:r==="dark"?dh:ph,style:{height:t,...e}})),xd=f.memo(({size:t=32,style:e})=>{const r=je(at.currentSetting,Ir),n=je(at.themeMode);return r.logoType==="kitchen"?u.jsx(gh,{size:t*.75,...e&&{style:e},themeMode:n}):r.logoType==="custom"?u.jsx(Ms,{...r.logoCustomTitle&&{logoCustomTitle:r.logoCustomTitle},...r.logoCustomUrl&&{logoCustomUrl:r.logoCustomUrl},size:t,...e&&{style:e}}):u.jsx(lt,{extra:u.jsx("a",{href:Je,rel:"noreferrer",style:{color:"inherit",fontWeight:400},target:"_blank",children:"SD"}),size:t,...e&&{style:e},type:"combine"})}),Tt=t=>{const e=t;return e.text.includes("<lora")?e.className="ReactTags__lora":e.text.includes("<hypernet")?e.className="ReactTags__hypernet":e.text.includes("<embedding")?e.className="ReactTags__embedding":delete e.className,e},Ps=t=>{const e=be.convertStr(t);return be.convertStr2Array(e).map(n=>{if(n.includes("<"))return n;const s=n.replaceAll(/\s+/g," ").replaceAll(/，|\.\|。/g,",").replaceAll(/“|‘|”|"|\/'/g,"").replaceAll(", ",",").replaceAll(",,",",").replaceAll(",",", ");return be.convertStr2Array(s).join(", ")}).map(n=>Tt({id:n.trim(),text:n.trim()}))},Dn="[id$='2img_prompt'] textarea",Fn=f.memo(()=>{const{data:t,isLoading:e}=os("prompt",yc),[r,n]=f.useState([]),[s,o]=f.useState(),[i,l]=f.useState(),a=je(at.currentLanguage),{t:h}=de(),c=a==="zh_CN"||a==="zh_HK",d=f.useCallback(()=>{try{const E=get_uiCurrentTabContent().querySelector(Dn),b=Ps(E.value);return E&&n(b),b}catch(E){return O.error("🤯 [prompt]",E),[]}},[]),p=f.useCallback(E=>{try{const b=E.map(C=>C.text).join(", "),R=get_uiCurrentTabContent().querySelector(Dn);R&&(R.value=b),updateInput(R)}catch(b){O.error("🤯 [prompt]",b)}},[]),m=f.useCallback(E=>{let b=d()||[];console.log(b),b.some(C=>C.text.toLowerCase()===E.text.toLowerCase()||C.id===E.id)?b=b.filter(C=>C.text.toLowerCase()!==E.text.toLowerCase()&&C.id!==E.id):b=[...b,E].filter(Boolean),n(b),p(b)},[]);return f.useEffect(()=>{if(d(),!t||s||i)return;const E=Object.keys(t)[0];if(E){o(E);const b=t[E];if(b?.children){const R=Object.keys(b.children)[0];R&&l(R)}}},[t,s,i]),e||!t?u.jsx(so,{active:!0}):u.jsxs(u.Fragment,{children:[u.jsx("span",{style:{marginBottom:-10},children:h("prompt.area.object")}),u.jsx(H,{gap:4,horizontal:!0,style:{flexWrap:"wrap"},children:Object.entries(t).map(([E,b],R)=>{const C=c?b.langName:b.name,G=s?s===E:R===0;return u.jsx(me,{onClick:()=>{o(E);const j=t[E];if(j?.children){const D=Object.keys(j.children)[0];D&&l(D)}},size:"small",style:{flex:1},type:G?"primary":"default",children:C},E)})}),u.jsx("span",{style:{marginBottom:-10},children:h("prompt.area.attribute")}),u.jsx(H,{gap:4,horizontal:!0,style:{flexWrap:"wrap"},children:s&&t[s]?.children&&Object.entries(t[s].children).map(([E,b],R)=>{const C=c?b.langName:b.name,G=i?i===E:R===0;return u.jsx(me,{onClick:()=>l(E),size:"small",style:{flex:1},type:G?"primary":"default",children:C},E)})}),u.jsx("span",{style:{marginBottom:-10},children:h("prompt.area.tag")}),u.jsx(H,{gap:4,horizontal:!0,style:{flexWrap:"wrap"},children:s&&i&&t[s]?.children?.[i]?.children&&Object.entries(t[s].children[i].children).map(([E,b])=>{const R=r.some(C=>C.text.toLowerCase()===b.name.toLowerCase());return u.jsx(me,{onClick:()=>m({id:E,text:b.name}),size:"small",style:c?{flex:1,height:36}:{flex:1},type:R?"primary":"dashed",children:c?u.jsxs(H,{gap:2,children:[u.jsx("div",{style:{fontSize:12,fontWeight:600,lineHeight:1},children:b.langName}),u.jsx("div",{style:{fontSize:12,lineHeight:1,opacity:.75},children:b.name})]}):b.name},E)})})]})}),hr=(t,e,r={})=>{const{onError:n}=r;try{return t()}catch(s){const o=s instanceof Error?s:new Error(String(s));return B("🚨 Operation failed, using fallback:",o.message),n?.(o),e()}},mh=Oe(({css:t,token:e},r)=>t`
    .autocompleteResults {
      left: 16px !important;
      min-width: 200px !important;
      padding: 0 !important;
    }

    /* Styles for the input */
    .ReactTags__editTagInput,
    .ReactTags__tagInput {
      display: inline-block;
      width: 100%;
      margin: 0;

      input {
        position: relative;

        display: block;

        width: 100%;
        margin: 0;
        padding: var(--input-padding);

        color: ${r==="positive"?e.colorSuccessTextHover:e.colorErrorTextHover};

        background: ${e.colorFillTertiary};
        border: 1px solid ${e.colorBorderSecondary};
        border-radius: ${e.borderRadius}px;

        &:focus {
          color: ${r==="positive"?e.colorSuccessText:e.colorErrorText};
          background: ${e.colorFillSecondary};
          border: 1px solid ${e.colorBorder};
          outline: none;
        }
      }
    }

    /* Styles for selected tags */
    .ReactTags__tags.react-tags-wrapper {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .ReactTags__selected {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;

      span.ReactTags__tag {
        position: relative;

        display: flex;
        align-items: center;

        padding: 6px 6px 6px 8px;

        font-size: 13px;
        color: ${r==="positive"?e.colorSuccessTextHover:e.colorErrorTextHover};

        background: ${e.colorFillSecondary};
        border: 1px solid ${e.colorBorderSecondary};
        border-radius: ${e.borderRadius}px;

        &:hover {
          color: ${r==="positive"?e.colorSuccessText:e.colorErrorText};
          background: ${e.colorFill};
          border: 1px solid ${e.colorBorder};
        }
      }

      a.ReactTags__remove {
        cursor: pointer;
        margin-left: 5px;
        color: #aaa;
      }
    }

    .ReactTags__remove {
      cursor: pointer;
      color: ${e.colorTextDescription};
      background: none;
      border: none;

      &:hover {
        color: ${e.colorText};
      }
    }
  `),fh=Xs.WithContext,Hn={comma:188,enter:13},bh=[Hn.comma,Hn.enter],wh=f.memo(({tags:t,setTags:e,type:r,setValue:n})=>{const s=`${r}_tag_editor`,[o,i]=f.useState(!1),{styles:l}=mh(r),a=f.useCallback(p=>{const m=t.filter((E,b)=>b!==p);e(m),n(m)},[t]),h=f.useCallback(p=>{const m=[...t,Tt(p)];e(m),n(m)},[t]),c=f.useCallback((p,m,E)=>{const b=[...t];b.splice(m,1),b.splice(E,0,Tt(p)),e(b),n(b)},[t]),d=f.useCallback((p,m)=>{const E=[...t];E[p]=Tt(m),e(E),n(E)},[t]);return f.useEffect(()=>{try{if(!addAutocompleteToArea||o)return;let p=0;const m=setInterval(()=>{if(o||p>10){const E=document.querySelector(`#${s}`);E&&(i(!0),addAutocompleteToArea(E),clearInterval(m),O.success("🤯 [promptTagEditor] inject"))}p++},1e3)}catch(p){O.error("🤯 [promptTagEditor]",p)}},[o]),u.jsx("div",{className:l,children:u.jsx(fh,{delimiters:bh,editable:!0,handleAddition:h,handleDelete:a,handleDrag:c,id:s,inline:!0,inputFieldPosition:"bottom",onTagUpdate:d,tags:t})})}),vh=Oe(({css:t})=>({promptView:t`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `})),zn=f.memo(({type:t})=>{const[e,r]=f.useState([]),{styles:n}=vh(),{t:s}=de(),o=t==="positive"?"[id$='2img_prompt'] textarea":"[id$='2img_neg_prompt'] textarea",i=f.useCallback(()=>{hr(()=>{const h=Zt();if(!h)throw new Error("Current tab content not found");const c=h.querySelector(o);if(!c)throw new Error(`Textarea not found for selector: ${o}`);r(Ps(c.value))},()=>{O.warn("🤯 [prompt] getValue fallback - unable to get textarea value"),r([])},{onError:h=>O.error("🤯 [prompt] getValue error:",h.message)})},[o]),l=f.useCallback(()=>{hr(()=>{const h=e.map(p=>p.text).join(", "),c=Zt();if(!c)throw new Error("Current tab content not found");const d=c.querySelector(o);if(!d)throw new Error(`Textarea not found for selector: ${o}`);d.value=h,updateInput(d)},()=>{O.warn("🤯 [prompt] setValue fallback - unable to set textarea value")},{onError:h=>O.error("🤯 [prompt] setValue error:",h.message)})},[e,o]),a=f.useCallback(h=>{hr(()=>{const c=Zt();if(!c)throw new Error("Current tab content not found");const d=c.querySelector(o);if(!d)throw new Error(`Textarea not found for selector: ${o}`);d.value=h.map(p=>p.text).join(", "),updateInput(d)},()=>{O.warn("🤯 [prompt] setCurrentValue fallback - unable to set textarea value")},{onError:c=>O.error("🤯 [prompt] setCurrentValue error:",c.message)})},[o]);return u.jsxs("div",{className:n.promptView,children:[u.jsx(wh,{setTags:r,setValue:a,tags:e,type:t}),u.jsxs(H,{gap:8,horizontal:!0,children:[u.jsx("button",{className:"secondary gradio-button",onClick:i,style:{flex:1,height:36},title:s("prompt.load"),type:"button",children:"🔄"}),u.jsx("button",{className:"secondary gradio-button",onClick:l,style:{flex:1,height:36},title:s("prompt.set"),type:"button",children:"➡️"})]})]})}),yh=t=>({promptEditor:t.setting.promptEditor,svgIcon:t.setting.svgIcon}),Eh=f.memo(()=>{const{promptEditor:t,svgIcon:e}=je(yh,Gn),{t:r}=de(),n=f.useCallback(()=>{e&&uh()},[e]);return f.useEffect(()=>{n()},[n]),t?u.jsxs(H,{gap:16,children:[u.jsx("span",{style:{marginBottom:-10},children:r("prompt.positive")}),u.jsx(zn,{type:"positive"}),u.jsx("span",{style:{marginBottom:-10},children:r("prompt.negative")}),u.jsx(zn,{type:"negative"}),u.jsx(Fn,{})]}):u.jsx(Fn,{})});Eh.displayName="PromptEditor";const Lt={kitchen:ku.dark.colorPrimary,...oo},xh=[Lt.kitchen,...io],jt={kitchen:Au.dark.colorNeutral,...ao},Sh=[jt.kitchen,...lo],Bn=(t,e)=>{if(!e)return"";let n=Object.entries(t==="primary"?Lt:jt).find(s=>s[1]===e);return n?.[0]},Ch=f.memo(({currentSetting:t})=>{const{localeOptions:e}=je(E=>({localeOptions:E.localeOptions})),[r,n]=f.useState(t),[s,o]=f.useState(t.primaryColor||void 0),[i,l]=f.useState(t.neutralColor||void 0),{t:a}=de();f.useEffect(()=>{n(t),o(t.primaryColor||void 0),l(t.neutralColor||void 0)},[t]);const h=f.useCallback(E=>{const b=new CustomEvent("settingsFormChange",{detail:{...E,neutralColor:i,primaryColor:s}});window.dispatchEvent(b)},[s,i]),c=f.useCallback((E,b)=>{n(b);const R=new CustomEvent("settingsFormChange",{detail:{...b,neutralColor:i,primaryColor:s}});window.dispatchEvent(R)},[s,i]),d=f.useCallback(E=>{if(E){const b=Bn("primary",E);o(b);const R=new CustomEvent("settingsFormChange",{detail:{...r,neutralColor:i,primaryColor:b}});window.dispatchEvent(R)}},[r,i]),p=f.useCallback(E=>{if(E){const b=Bn("neutral",E);l(b);const R=new CustomEvent("settingsFormChange",{detail:{...r,neutralColor:b,primaryColor:s}});window.dispatchEvent(R)}},[r,s]),m=f.useMemo(()=>({children:[{children:u.jsx(co,{...e&&{options:e}}),desc:a("setting.language.desc"),label:a("setting.language.title"),name:"i18n"},{children:u.jsx(ee,{}),desc:a("setting.liteAnimation.desc","Reduce animations for better performance"),label:a("setting.liteAnimation.title","Reduce Animation"),name:"liteAnimation",valuePropName:"checked"},{children:u.jsx(Jr,{...s&&Lt[s]&&{activeColor:Lt[s]},colors:xh,onSelect:d}),desc:a("setting.primaryColor.desc"),label:a("setting.primaryColor.title")},{children:u.jsx(Jr,{...i&&jt[i]&&{activeColor:jt[i]},colors:Sh,onSelect:p}),desc:a("setting.neutralColor.desc"),label:a("setting.neutralColor.title")},{children:u.jsx(Ve,{options:[{label:a("brand.lobe"),value:"lobe"},{label:a("brand.kitchen"),value:"kitchen"},{label:a("brand.custom"),value:"custom"}]}),desc:a("setting.logoType.desc","Choose logo style"),label:a("setting.logoType.title","Logo Type"),name:"logoType"},{children:u.jsx(dr,{}),desc:a("setting.customLogo.desc"),hidden:r.logoType!=="custom",label:a("setting.customLogo.title"),name:"logoCustomUrl"},{children:u.jsx(dr,{}),desc:a("setting.customTitle.desc"),hidden:r.logoType!=="custom",label:a("setting.customTitle.title"),name:"logoCustomTitle"},{children:u.jsx(Ms,{...r.logoCustomTitle&&{logoCustomTitle:r.logoCustomTitle},...r.logoCustomUrl&&{logoCustomUrl:r.logoCustomUrl}}),hidden:r.logoType!=="custom",label:"Logo Preview"},{children:u.jsx(ee,{}),desc:a("setting.svgIcon.desc","Use SVG icons globally"),label:a("setting.svgIcon.title","SVG Icons"),name:"svgIcon",valuePropName:"checked"},{children:u.jsx(ee,{}),desc:a("setting.customFont.desc"),label:a("setting.customFont.title"),name:"enableWebFont",valuePropName:"checked"},{children:u.jsx(ee,{}),desc:a("setting.confirmPageUnload.desc"),label:a("setting.confirmPageUnload.title"),name:"confirmPageUnload",valuePropName:"checked"}],title:a("setting.group.theme")}),[s,i,r.logoType,r.logoCustomTitle,r.logoCustomUrl,e,d,p,a]);return u.jsx(ct,{initialValues:t,items:[m],onFinish:h,onValuesChange:c,style:{flex:1},variant:"pure"})}),$h=f.memo(({currentSetting:t})=>{const{t:e}=de(),r=f.useCallback(i=>{const l=new CustomEvent("settingsFormChange",{detail:i});window.dispatchEvent(l)},[]),n=f.useCallback((i,l)=>{const a=new CustomEvent("settingsFormChange",{detail:l});window.dispatchEvent(a)},[]),s=f.useMemo(()=>({children:[{children:u.jsx(ee,{}),desc:e("setting.imageInfo.desc"),label:e("setting.imageInfo.title"),name:"enableImageInfo",valuePropName:"checked"}],title:e("setting.group.experimental")}),[e]),o=f.useMemo(()=>({children:[{children:u.jsx(ee,{}),desc:e("setting.promptHighlight.desc"),label:e("setting.promptHighlight.title"),name:"enableHighlight",valuePropName:"checked"},{children:u.jsx(ee,{}),desc:e("setting.promptEditor.desc"),label:e("setting.promptEditor.title"),name:"promptEditor",valuePropName:"checked"}],title:e("setting.group.promptTextarea")}),[e]);return u.jsx(ct,{id:"theme_settings",initialValues:t,items:[s,o],onFinish:r,onValuesChange:n,style:{flex:1},variant:"pure"})}),Th=f.memo(({pendingChanges:t,onReset:e})=>{const{t:r}=de(),{mobile:n}=Xn(),s=je(h=>h.onBatchUpdateSetting),o=Object.keys(t).length>0,i=f.useCallback(async()=>{await s([it]),e(),location.reload()},[s,e]),l=f.useCallback(async()=>{if(!o){zt.warning({message:r("setting.noChangesToApply","No changes to apply")});return}try{await s([t]),zt.success({message:r("setting.settingsAppliedSuccess","Settings applied successfully")}),e(),location.reload()}catch{zt.error({message:r("setting.settingsApplyError","Failed to apply settings")})}},[t,o,s,e,r]),a=n?{flex:1}:{margin:0};return u.jsxs(H,{gap:12,horizontal:!0,justify:"space-between",style:{backgroundColor:o?"#f6ffed":"transparent",borderTop:o?"2px solid #1890ff":"1px solid #f0f0f0",padding:n?16:24},children:[u.jsx("div",{style:{color:o?"#52c41a":"transparent",fontSize:"14px",fontWeight:500,minHeight:"20px"},children:o?r("setting.pendingChanges","You have unsaved changes in multiple tabs"):" "}),u.jsxs(H,{gap:12,horizontal:!0,children:[u.jsx(uo,{onConfirm:i,title:r("setting.resetConfirmTitle","Reset all settings to default?"),children:u.jsx(me,{danger:!0,style:a,children:r("setting.button.reset")})}),u.jsx(me,{disabled:!o,onClick:l,style:a,type:"primary",children:o?r("setting.button.applyAll","Apply All Changes & Restart"):r("setting.button.noChanges","No Changes to Apply")})]})]})}),kh=f.memo(({currentSetting:t})=>{const{t:e}=de(),r=f.useCallback(i=>{const l=new CustomEvent("settingsFormChange",{detail:i});window.dispatchEvent(l)},[]),n=f.useCallback((i,l)=>{const a=new CustomEvent("settingsFormChange",{detail:l});window.dispatchEvent(a)},[]),s=f.useMemo(()=>({children:[{children:u.jsx(ee,{}),desc:e("setting.splitPreviewer.desc"),label:e("setting.splitPreviewer.title"),name:"layoutSplitPreview",valuePropName:"checked"},{children:u.jsx(ee,{}),desc:e("setting.hideFooter.desc"),label:e("setting.hideFooter.title"),name:"layoutHideFooter",valuePropName:"checked"}],title:e("setting.group.layout")}),[e]),o=f.useMemo(()=>({children:[{children:u.jsx(Ve,{options:[{label:e("setting.promptDisplayMode.scroll"),value:"scroll"},{label:e("setting.promptDisplayMode.resizable"),value:"resizable"}]}),desc:e("setting.promptDisplayMode.desc"),label:e("setting.promptDisplayMode.title"),name:"promptTextareaType"}],title:e("setting.group.promptTextarea")}),[e]);return u.jsx(ct,{id:"theme_settings",initialValues:t,items:[s,o],onFinish:r,onValuesChange:n,style:{flex:1},variant:"pure"})}),Ah=f.memo(({currentSetting:t})=>{const[e,r]=f.useState(t),{t:n}=de(),s=f.useCallback(a=>{const h=new CustomEvent("settingsFormChange",{detail:a});window.dispatchEvent(h)},[]),o=f.useCallback((a,h)=>{r(h);const c=new CustomEvent("settingsFormChange",{detail:h});window.dispatchEvent(c)},[]),i=f.useMemo(()=>({children:[{children:u.jsx(ee,{}),desc:n("setting.quickSettingSidebar.enable.desc"),label:n("setting.quickSettingSidebar.enable.title"),name:"enableSidebar",valuePropName:"checked"},{children:u.jsx(ee,{}),desc:n("setting.quickSettingSidebar.defaultExpand.desc"),hidden:!e.enableSidebar,label:n("setting.quickSettingSidebar.defaultExpand.title"),name:"sidebarExpand",valuePropName:"checked"},{children:u.jsx(Ve,{options:[{label:n("sidebar.mode.fixed"),value:"fixed"},{label:n("sidebar.mode.float"),value:"float"}]}),desc:n("setting.quickSettingSidebar.displayMode.desc"),hidden:!e.enableSidebar,label:n("setting.quickSettingSidebar.displayMode.title"),name:"sidebarFixedMode"},{children:u.jsx(Bt,{}),desc:n("setting.quickSettingSidebar.defaultWidth.desc"),hidden:!e.enableSidebar,label:n("setting.quickSettingSidebar.defaultWidth.title"),name:"sidebarWidth"}],title:n("setting.group.quickSettingSidebar")}),[e.enableSidebar,n]),l=f.useMemo(()=>({children:[{children:u.jsx(ee,{}),desc:n("setting.extraNetworkSidebar.enable.desc"),label:n("setting.extraNetworkSidebar.enable.title"),name:"enableExtraNetworkSidebar",valuePropName:"checked"},{children:u.jsx(Ve,{options:[{label:n("sidebar.mode.fixed"),value:"fixed"},{label:n("sidebar.mode.float"),value:"float"}]}),desc:n("setting.extraNetworkSidebar.displayMode.desc"),hidden:!e.enableExtraNetworkSidebar,label:n("setting.extraNetworkSidebar.displayMode.title"),name:"extraNetworkFixedMode"},{children:u.jsx(ee,{}),desc:n("setting.extraNetworkSidebar.defaultExpand.desc"),hidden:!e.enableExtraNetworkSidebar,label:n("setting.extraNetworkSidebar.defaultExpand.title"),name:"extraNetworkSidebarExpand",valuePropName:"checked"},{children:u.jsx(Bt,{}),desc:n("setting.extraNetworkSidebar.defaultWidth.desc"),hidden:!e.enableExtraNetworkSidebar,label:n("setting.extraNetworkSidebar.defaultWidth.title"),name:"extraNetworkSidebarWidth"},{children:u.jsx(Bt,{}),desc:n("setting.extraNetworkSidebar.defaultCardSize.desc"),hidden:!e.enableExtraNetworkSidebar,label:n("setting.extraNetworkSidebar.defaultCardSize.title"),name:"extraNetworkCardSize"}],title:n("setting.group.extraNetworkSidebar")}),[e.enableExtraNetworkSidebar,n]);return u.jsx(ct,{id:"theme_settings",initialValues:t,items:[i,l],onFinish:s,onValuesChange:o,style:{flex:1},variant:"pure"})}),Rh=Oe(({css:t,token:e,prefixCls:r})=>({compact:t`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  `,menu:t`
    flex: 1;
    background: transparent;
    border: none !important;

    .${r}-menu-item-divider {
      margin-block: 0.125rem;
      border-color: ${e.colorFillTertiary};

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    .${r}-menu-item, .${r}-menu-submenu-title {
      display: flex;
      gap: 0.75rem;
      align-items: center;

      height: unset;
      min-height: 2rem;
      padding: 0.375rem 0.75rem;

      line-height: 2;

      .anticon + .${r}-menu-title-content {
        margin-inline-start: 0;
      }
    }

    .${r}-menu-item-selected {
      .${r}-menu-item-icon svg {
        color: ${e.colorText};
      }
    }

    .${r}-menu-item-icon svg {
      color: ${e.colorTextSecondary};
    }

    .${r}-menu-title-content {
      flex: 1;
    }
  `})),Ih=f.memo(({className:t,selectable:e=!1,variant:r,...n})=>{const s=r==="compact",{cx:o,styles:i,theme:l}=Rh();return u.jsx(ho,{theme:{components:{Menu:{controlHeightLG:36,iconMarginInlineEnd:8,iconSize:16,itemBorderRadius:l.borderRadius,itemColor:e?l.colorTextSecondary:l.colorText,itemHoverBg:l.colorFillTertiary,itemMarginBlock:s?0:4,itemMarginInline:s?0:4,itemSelectedBg:l.colorFillSecondary,paddingXS:-8}}},children:u.jsx(po,{className:o(i.menu,s&&i.compact,t),mode:"vertical",selectable:e,...n})})}),Lh=Oe(({token:t,css:e})=>({logoLink:e`
    height: 20px;
    color: inherit;

    &:hover {
      color: ${t.colorLink};
    }
  `})),jh=f.memo(({style:t,...e})=>{const{styles:r,theme:n}=Lh();return u.jsxs(H,{align:"center",flex:"none",gap:4,horizontal:!0,style:{color:n.colorTextDescription,fontSize:12,...t},...e,children:[u.jsx("span",{children:"Powered by"}),u.jsx("a",{className:r.logoLink,href:"https://lobehub.com",rel:"noreferrer",target:"_blank",children:u.jsx(lt,{size:20,type:"text"})})]})}),Oh=Oe(({token:t,css:e})=>({container:e`
    padding: 24px 12px 16px;
    background: ${t.colorBgContainer};
    border-inline-end: 1px solid ${t.colorBorder};
  `,desc:e`
    line-height: 1.4;
    color: ${t.colorTextDescription};
  `,header:e`
    padding: 0 0.75rem;
  `,logo:e`
    fill: ${t.colorText};
  `,title:e`
    margin: 0;
    font-size: 26px;
    font-weight: 600;
    line-height: 1.3;
  `})),_h=({children:t,className:e,title:r,desc:n,...s})=>{const{cx:o,styles:i}=Oh();return u.jsxs(H,{className:o(i.container,e),flex:"none",gap:20,width:280,...s,children:[u.jsxs(H,{className:i.header,gap:4,children:[u.jsx("h1",{className:i.title,children:r}),n&&u.jsx("p",{className:i.desc,children:n})]}),t,u.jsx(jh,{paddingInline:12})]})},Ds=()=>{const{t}=de();return[{icon:u.jsx(he,{name:"brush"}),key:$e.Appearance,label:t("setting.tab.appearance")},{icon:u.jsx(he,{name:"layout"}),key:$e.Layout,label:t("setting.tab.layout")},{icon:u.jsx(he,{name:"panel-right"}),key:$e.Sidebar,label:t("setting.tab.sidebar")},{icon:u.jsx(he,{name:"flask-conical"}),key:$e.Experimental,label:t("setting.tab.experimental")}]},Nh=f.memo(({tab:t,setTab:e})=>{const r=Ds();return u.jsx(Ve,{block:!0,onChange:e,options:r.map(({key:n,label:s})=>({label:s,value:n})),value:t})});var $e=(t=>(t.Appearance="appearance",t.Experimental="experimental",t.Layout="layout",t.Sidebar="sidebar",t))($e||{});const Mh=f.memo(({tab:t,setTab:e})=>{const r=Ds(),{t:n}=de();return u.jsx(_h,{desc:u.jsxs(H,{align:"center",gap:8,horizontal:!0,wrap:"wrap",children:[n("modal.themeSetting.desc"),u.jsx(Ns,{})]}),title:n("modal.themeSetting.title"),children:u.jsx(Ih,{items:r,onClick:({key:s})=>e(s),selectable:!0,selectedKeys:[t]})})}),Ph=f.memo(({open:t,onCancel:e})=>{const[r,n]=f.useState($e.Appearance),{mobile:s}=Xn(),o=qn(),i=je(at.currentSetting,Ir),[l,a]=f.useState({}),h={...i,...l};f.useEffect(()=>{const p=m=>{a(E=>({...E,...m.detail}))};return window.addEventListener("settingsFormChange",p),()=>window.removeEventListener("settingsFormChange",p)},[]),f.useEffect(()=>{t&&a({})},[t]);const c=f.useCallback(()=>{a({})},[]),d=u.jsxs(u.Fragment,{children:[r===$e.Appearance&&u.jsx(Ch,{currentSetting:h},"appearance"),r===$e.Layout&&u.jsx(kh,{currentSetting:h},"layout"),r===$e.Sidebar&&u.jsx(Ah,{currentSetting:h},"sidebar"),r===$e.Experimental&&u.jsx($h,{currentSetting:h},"experimental")]});return u.jsx(Lr,{allowFullscreen:!0,footer:u.jsx(Th,{onReset:c,pendingChanges:l}),...e&&{onCancel:e},open:t||!1,styles:{body:{display:"flex",minHeight:"min(75vh, 750px)",overflow:"hidden",padding:0,paddingBlock:0},content:{background:s?o.colorBgContainer:void 0,border:"none",boxShadow:`0 0 0 1px ${o.colorBorderSecondary}`}},title:!1,width:1024,children:s?u.jsxs(H,{height:"100%",style:{overflow:"hidden",position:"relative"},width:"100%",children:[u.jsx("div",{style:{padding:16},children:u.jsx(Nh,{setTab:n,tab:r})}),u.jsx(H,{height:"100%",style:{overflowX:"hidden",overflowY:"auto",position:"relative"},width:"100%",children:d})]}):u.jsxs(H,{horizontal:!0,width:"100%",children:[u.jsx(Mh,{setTab:n,tab:r}),u.jsx(H,{align:"center",gap:64,style:{background:o.isDarkMode?o.colorFillQuaternary:o.colorBgElevated,minHeight:"100%",overflowX:"hidden",overflowY:"auto",paddingBlock:40,paddingInline:56},width:"100%",children:d})]})})});Ph.displayName="Setting";const Fs=Oe(({css:t,token:e,stylish:r,cx:n},s)=>({background:t`
    padding: 24px;

    background-color: ${e.colorBgLayout};
    background-image: url('https://gw.alipayobjects.com/zos/kitchen/o1ccl9hjoX/screenshot_background.webp');
    background-position: center;
    background-size: 120% 120%;
  `,container:n(s&&t`
        overflow: hidden;
        border: 2px solid ${e.colorBorder};
        border-radius: ${e.borderRadiusLG}px;
      `,t`
      background: ${e.colorBgLayout};
    `),desc:t`
    font-size: 12px;
    color: ${e.colorTextDescription};
  `,footer:t`
    padding: 16px;
    border-top: 1px solid ${e.colorBorder};
  `,img:t`
    border-radius: ${e.borderRadiusSM}px;
  `,preview:n(r.noScrollbar,t`
      overflow: hidden scroll;

      width: 100%;
      max-height: 40vh;

      background: ${e.colorBgLayout};
      border: 1px solid ${e.colorBorder};
      border-radius: ${e.borderRadiusLG}px;

      * {
        pointer-events: none !important;
        overflow: hidden !important;

        ${r.noScrollbar}
        ::-webkit-scrollbar {
          width: 0 !important;
          height: 0 !important;
        }
      }
    `),title:t`
    font-size: 16px;
    font-weight: 600;
  `,url:t`
    color: ${e.colorTextDescription};
  `})),Dh=f.memo(({withBackground:t,withFooter:e,children:r})=>{const{styles:n}=Fs(t);return u.jsx("div",{className:n.preview,children:u.jsx("div",{className:t?n.background:void 0,id:"preview",children:u.jsxs(H,{className:n.container,gap:16,children:[r,e?u.jsxs(H,{align:"center",className:n.footer,gap:4,children:[u.jsx(lt,{extra:"SD",type:"combine"}),u.jsx("div",{className:n.url,children:Je})]}):u.jsx("div",{})]})})})}),Fh={attributes:!0,characterData:!0,childList:!0,subtree:!0},Hh=(t,e=150)=>{const[r,n]=f.useState(""),[s,o]=f.useState([]),[i,l]=f.useState(null);return f.useEffect(()=>{const a=gradioApp().querySelector(t);if(l(a),a){const h=a.querySelector('img[data-testid="detailed-image"]'),c=a.querySelectorAll(".thumbnails button img"),d=Array.from(c).filter(Boolean).map(p=>p.src);n(h?.src||""),o(d)}},[t]),xs(i,a=>{for(const h of a)if(h.type==="childList"||h.type==="characterData"){const c=h.target.querySelector('img[data-testid="detailed-image"]'),d=h.target.querySelectorAll(".thumbnails button img"),p=Array.from(d).filter(Boolean).map(m=>m.src);n(c?.src||""),o(p)}},Fh,`gallery-observer-${t}`,e),{image:r,images:s}},zh=f.memo(({type:t,showConfig:e,showNegative:r,title:n,showAllImages:s})=>{const{image:o,images:i}=Hh(`#${t}2img_gallery`),l=Oc(`#html_info_${t}2img .infotext`,{subSelector:"p"}),{styles:a}=Fs(),{t:h}=de();return!o||o==="undefined"?u.jsx("div",{style:{padding:16},children:u.jsx(go,{message:h("shareModal.warn"),type:"warning"})}):u.jsxs(H,{gap:16,style:{padding:16},children:[n&&u.jsxs(H,{align:"center",gap:12,horizontal:!0,children:[u.jsx(mo,{avatar:o}),u.jsxs(H,{children:[u.jsx("div",{className:a.title,children:n}),u.jsx("div",{className:a.desc,children:Kn().format("YYYY-MM-DD")})]})]}),s?i?.map((c,d)=>u.jsx("img",{alt:"screenshot",className:a.img,src:c,width:"100%"},d)):u.jsx("img",{alt:"screenshot",className:a.img,src:o,width:"100%"}),u.jsx(Tu,{showConfig:e,showCopy:!1,showNegative:r,value:l})]})});var ze=(t=>(t.JPG="jpg",t.PNG="png",t.SVG="svg",t.WEBP="webp",t))(ze||{});const Bh=[{label:"JPG",value:"jpg"},{label:"PNG",value:"png"},{label:"SVG",value:"svg"},{label:"WEBP",value:"webp"}],Uh=(t=ze.JPG)=>{const[e,r]=f.useState(!1),n=f.useCallback(async()=>{r(!0);try{let s;switch(t){case ze.JPG:{s=vo;break}case ze.PNG:{s=wo;break}case ze.SVG:{s=bo;break}case ze.WEBP:{s=fo;break}}const o=await s(document.querySelector("#preview"),{features:{removeControlCharacter:!1},scale:2}),i=document.createElement("a");i.download=`LobeTheme_${Kn().format("YYYY-MM-DD")}.${t}`,i.href=o,i.click(),r(!1)}catch(s){O.error("🤯 Failed to download image",s),r(!1)}},[t]);return{loading:e,onDownload:n}},Un={imageType:ze.JPG,showAllImages:!1,showConfig:!0,showNegative:!0,title:"",withBackground:!0,withFooter:!1},Vh=f.memo(({open:t,onCancel:e,type:r})=>{const[n,s]=f.useState(Un),[o,i]=f.useState("info"),{t:l}=de(),{loading:a,onDownload:h}=Uh(n.imageType),c=f.useMemo(()=>[{label:l("shareModal.tabs.info"),value:"info"},{label:l("shareModal.tabs.settings"),value:"settings"}],[]),d=f.useMemo(()=>[{children:u.jsx(dr,{}),hidden:o!=="info",label:l("shareModal.title"),name:"title"},{children:u.jsx(ee,{}),hidden:o!=="info",label:l("shareModal.showAllImages"),name:"showAllImages",valuePropName:"checked"},{children:u.jsx(ee,{}),hidden:o!=="info",label:l("shareModal.showNegative"),name:"showNegative",valuePropName:"checked"},{children:u.jsx(ee,{}),hidden:o!=="info",label:l("shareModal.showConfig"),name:"showConfig",valuePropName:"checked"},{children:u.jsx(ee,{}),hidden:o!=="settings",label:l("shareModal.withBackground"),name:"withBackground",valuePropName:"checked"},{children:u.jsx(ee,{}),hidden:o!=="settings",label:l("shareModal.withFooter"),name:"withFooter",valuePropName:"checked"},{children:u.jsx(Ve,{options:Bh}),hidden:o!=="settings",label:l("shareModal.imageType"),name:"imageType"}],[o]);return u.jsx(Lr,{centered:!1,destroyOnClose:!0,footer:u.jsx(me,{block:!0,loading:a,onClick:h,size:"large",type:"primary",children:l("shareModal.download")}),maxHeight:!1,...e&&{onCancel:e},open:t||!1,title:l("share"),children:u.jsxs(H,{gap:16,children:[u.jsx(Ve,{block:!0,onChange:p=>i(p),options:c,style:{width:"100%"},value:o}),u.jsx(ct,{initialValues:Un,items:d,itemsType:"flat",onValuesChange:(p,m)=>s({...n,...m})}),u.jsx(Dh,{...n,children:u.jsx(zh,{...n,type:r})})]})})}),Gh=(t,e)=>{const r=document.createElement("button");return r.id=`lobe_share_${t}`,r.type="button",r.innerHTML="💞",r.title="Share",r.className="lg secondary gradio-button tool svelte-cmf5ev",r.addEventListener("click",()=>e(!0)),r},Ar=f.memo(({type:t})=>{const[e,r]=f.useState(!1),n=f.useRef();f.useMemo(()=>{n.current||(n.current=Gh(t,r))},[t]);const s=f.useMemo(()=>`#image_buttons_${t}2img > .form`,[t]),o=f.useMemo(()=>`[layout] inject - Share ${t}`,[t]),i=f.useCallback(()=>r(!1),[]);return Ei(n,s,{debug:o,inverse:!0}),u.jsx(Vh,{onCancel:i,open:e,type:t})});Ar.displayName="Share";const Hs=f.memo(()=>f.useMemo(()=>u.jsxs(u.Fragment,{children:[u.jsx(Ar,{type:"txt"}),u.jsx(Ar,{type:"img"})]}),[]));Hs.displayName="ShareContainer";const Sd=Object.freeze({__proto__:null,default:Hs});export{vd as $,yd as A,gd as B,be as C,fi as D,cd as E,xd as F,Je as G,as as H,Tu as I,pd as J,sd as K,Jh as L,hd as M,od as N,id as O,uh as P,Ed as Q,Eh as R,ad as S,md as T,td as U,fd as V,bd as W,ud as X,wd as Y,rd as Z,pr as _,ld as a,Sd as a0,B as b,O as c,Y as d,De as e,nd as f,Et as g,Oc as h,Si as i,je as j,ku as k,Au as l,xs as m,su as n,Is as o,mi as p,dd as q,is as r,at as s,he as t,Ei as u,ed as v,Zh as w,Kh as x,Qh as y,Ph as z};

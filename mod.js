// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&o.call(r,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var f=n()?function(r){var e,t,n;if(null==r)return i.call(r);t=r[c],e=a(r,c);try{r[c]=void 0}catch(e){return i.call(r)}return n=i.call(r),e?r[c]=t:delete r[c],n}:function(r){return i.call(r)};function l(r){return"[object Arguments]"===f(r)}var s=function(){return l(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function d(r){return"number"==typeof r}function h(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function y(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+h(i):h(i)+r,n&&(r="-"+r)),r}var b=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!d(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=y(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=y(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===v.call(r.specifier)?v.call(t):b.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function m(r){return"string"==typeof r}var j=Math.abs,S=String.prototype.toLowerCase,E=String.prototype.toUpperCase,O=String.prototype.replace,_=/e\+(\d)$/,k=/e-(\d)$/,T=/^(\d+)$/,I=/^(\d+)e/,x=/\.0$/,P=/\.0*e/,A=/(\..*[^0])0*e/;function V(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!d(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":j(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=O.call(t,A,"$1e"),t=O.call(t,P,"e"),t=O.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=O.call(t,_,"e+0$1"),t=O.call(t,k,"e-0$1"),r.alternate&&(t=O.call(t,T,"$1."),t=O.call(t,I,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===E.call(r.specifier)?E.call(t):S.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function N(r,e,t){var n=e-r.length;return n<0?r:r=t?r+F(n):F(n)+r}var C=String.fromCharCode,$=isNaN,B=Array.isArray;function L(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function R(r){var e,t,n,i,o,a,u,c,f;if(!B(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(m(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=L(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,$(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,$(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!$(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$(o)?String(n.arg):C(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=y(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=N(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function X(r){var e,t,n,i;for(t=[],i=0,n=W.exec(r);n;)(e=r.slice(i,W.lastIndex-n[0].length)).length&&t.push(e),t.push(G(n)),i=W.lastIndex,n=W.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Z(r){return"string"==typeof r}function M(r){var e,t,n;if(!Z(r))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=X(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return R.apply(null,t)}var U,Y=Object.prototype,H=Y.toString,z=Y.__defineGetter__,D=Y.__defineSetter__,q=Y.__lookupGetter__,J=Y.__lookupSetter__;U=function(){try{return p({},"x",{}),!0}catch(r){return!1}}()?g:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===H.call(t))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(q.call(r,e)||J.call(r,e)?(n=r.__proto__,r.__proto__=Y,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&z&&z.call(r,e,t.get),a&&D&&D.call(r,e,t.set),r};var K=U;function Q(r,e,t){K(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function rr(r){return"string"==typeof r}var er=String.prototype.valueOf;var tr=n();function nr(r){return"object"==typeof r&&(r instanceof String||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object String]"===f(r)))}function ir(r){return rr(r)||nr(r)}function or(r){return"number"==typeof r}Q(ir,"isPrimitive",rr),Q(ir,"isObject",nr);var ar=Number,ur=ar.prototype.toString;var cr=n();function fr(r){return"object"==typeof r&&(r instanceof ar||(cr?function(r){try{return ur.call(r),!0}catch(r){return!1}}(r):"[object Number]"===f(r)))}function lr(r){return or(r)||fr(r)}function sr(r){return r!=r}function pr(r){return or(r)&&sr(r)}function gr(r){return fr(r)&&sr(r.valueOf())}function dr(r){return pr(r)||gr(r)}Q(lr,"isPrimitive",or),Q(lr,"isObject",fr),Q(dr,"isPrimitive",pr),Q(dr,"isObject",gr);var hr=Number.POSITIVE_INFINITY,yr=ar.NEGATIVE_INFINITY,br=Math.floor;function vr(r){return br(r)===r}function wr(r){return r<hr&&r>yr&&vr(r)}function mr(r){return or(r)&&wr(r)}function jr(r){return fr(r)&&wr(r.valueOf())}function Sr(r){return mr(r)||jr(r)}Q(Sr,"isPrimitive",mr),Q(Sr,"isObject",jr);var Er=Object.prototype.propertyIsEnumerable;var Or=!Er.call("beep","0");function _r(r,e){var t;return null!=r&&(!(t=Er.call(r,e))&&Or&&ir(r)?!pr(e=+e)&&mr(e)&&e>=0&&e<r.length:t)}var kr=Array.isArray?Array.isArray:function(r){return"[object Array]"===f(r)};var Tr=s?l:function(r){return null!==r&&"object"==typeof r&&!kr(r)&&"number"==typeof r.length&&vr(r.length)&&r.length>=0&&r.length<=4294967295&&a(r,"callee")&&!_r(r,"callee")},Ir=Array.prototype.slice;function xr(r){if("function"!=typeof r)throw new TypeError(M("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!kr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}function Pr(r){return null!==r&&"object"==typeof r}Q(Pr,"isObjectLikeArray",xr(Pr));var Ar=_r((function(){}),"prototype"),Vr=!_r({toString:null},"toString");function Fr(r){return r!=r}function Nr(r){return or(r)&&Fr(r)}function Cr(r){return fr(r)&&Fr(r.valueOf())}function $r(r){return Nr(r)||Cr(r)}Q($r,"isPrimitive",Nr),Q($r,"isObject",Cr);function Br(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&vr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Lr(r,e,t){var n,i;if(!Br(r)&&!rr(r))throw new TypeError(M("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!mr(t))throw new TypeError(M("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if($r(e)){for(;i<n;i++)if($r(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Rr=/./;function Wr(r){return"boolean"==typeof r}var Gr=Boolean,Xr=Boolean.prototype.toString;var Zr=n();function Mr(r){return"object"==typeof r&&(r instanceof Gr||(Zr?function(r){try{return Xr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===f(r)))}function Ur(r){return Wr(r)||Mr(r)}function Yr(){return new Function("return this;")()}Q(Ur,"isPrimitive",Wr),Q(Ur,"isObject",Mr);var Hr="object"==typeof self?self:null,zr="object"==typeof window?window:null,Dr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},qr="object"==typeof Dr?Dr:null,Jr="object"==typeof globalThis?globalThis:null;var Kr=function(r){if(arguments.length){if(!Wr(r))throw new TypeError(M("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Yr()}if(Jr)return Jr;if(Hr)return Hr;if(zr)return zr;if(qr)return qr;throw new Error("unexpected error. Unable to resolve global object.")}(),Qr=Kr.document&&Kr.document.childNodes,re=Int8Array;function ee(){return/^\s*function\s*([^(]*)/i}var te=/^\s*function\s*([^(]*)/i;function ne(r){var e,t,n,i;if(("Object"===(t=f(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=te.exec(n.toString()))return e[1]}return Pr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Q(ee,"REGEXP",te);var ie="function"==typeof Rr||"object"==typeof re||"function"==typeof Qr?function(r){return ne(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ne(r).toLowerCase():e};function oe(r){return r.constructor&&r.constructor.prototype===r}var ae=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ue="undefined"==typeof window?void 0:window;var ce=function(){var r;if("undefined"===ie(ue))return!1;for(r in ue)try{-1===Lr(ae,r)&&a(ue,r)&&null!==ue[r]&&"object"===ie(ue[r])&&oe(ue[r])}catch(r){return!0}return!1}(),fe="undefined"!=typeof window;var le=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var se=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return Tr(e)?r(Ir.call(e)):r(e)}:r:function(r){var e,t,n,i,o,u,c;if(i=[],Tr(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!a(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Pr(r))return i;t=Ar&&n}for(o in r)t&&"prototype"===o||!a(r,o)||i.push(String(o));if(Vr)for(e=function(r){if(!1===fe&&!ce)return oe(r);try{return oe(r)}catch(r){return!1}}(r),c=0;c<le.length;c++)u=le[c],e&&"constructor"===u||!a(r,u)||i.push(String(u));return i},pe=xr(ir.isPrimitive),ge=xr(ir.isObject),de=xr(ir);function he(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function ye(r,e){var t,n,i,o;if("object"!=typeof r||null===r)throw new TypeError(he("1WP3L,Gc",r));if(t=se(r),n={},rr(e)){for(o=0;o<t.length;o++)(i=t[o])!==e&&(n[i]=r[i]);return n}if(pe(e)){for(o=0;o<t.length;o++)-1===Lr(e,i=t[o])&&(n[i]=r[i]);return n}throw new TypeError(he("1WPBg,OV",e))}Q(de,"primitives",pe),Q(de,"objects",ge);export{ye as default};
//# sourceMappingURL=mod.js.map

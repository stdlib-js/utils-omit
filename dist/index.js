"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=v(function(h,s){
var f=require('@stdlib/utils-keys/dist'),m=require('@stdlib/assert-is-string/dist').isPrimitive,g=require('@stdlib/assert-is-string-array/dist').primitives,l=require('@stdlib/utils-index-of/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function c(e,r){var a,n,i,t;if(typeof e!="object"||e===null)throw new TypeError(u('1WP3L',e));if(a=f(e),n={},m(r)){for(t=0;t<a.length;t++)i=a[t],i!==r&&(n[i]=e[i]);return n}if(g(r)){for(t=0;t<a.length;t++)i=a[t],l(r,i)===-1&&(n[i]=e[i]);return n}throw new TypeError(u('1WPBg',r))}s.exports=c
});var p=o();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

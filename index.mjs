// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function n(n,o){var d,m,l,j;if("object"!=typeof n||null===n)throw new TypeError(i("1WP3L",n));if(d=s(n),m={},t(o)){for(j=0;j<d.length;j++)(l=d[j])!==o&&(m[l]=n[l]);return m}if(r(o)){for(j=0;j<d.length;j++)l=d[j],-1===e(o,l)&&(m[l]=n[l]);return m}throw new TypeError(i("1WPBg",o))}export{n as default};
//# sourceMappingURL=index.mjs.map

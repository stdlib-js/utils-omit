// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";function n(n,m){var o,d,a,l;if("object"!=typeof n||null===n)throw new TypeError(i("invalid argument. First argument must be an object. Value: `%s`.",n));if(o=t(n),d={},s(m)){for(l=0;l<o.length;l++)(a=o[l])!==m&&(d[a]=n[a]);return d}if(r(m)){for(l=0;l<o.length;l++)a=o[l],-1===e(m,a)&&(d[a]=n[a]);return d}throw new TypeError(i("invalid argument. Second argument must be either a string or an array of strings. Value: `%s`.",m))}export{n as default};
//# sourceMappingURL=index.mjs.map

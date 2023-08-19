// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function e(e,r,s,d,n){if(arguments.length>3){if("closed"!==d&&"open"!==d)throw new TypeError(o("04Z3G,Ir",["closed","open"].join('", "'),d));if("closed"!==n&&"open"!==n)throw new TypeError(o("04Z3H,Is",["closed","open"].join('", "'),n))}return"closed"===d||void 0===d?"closed"===n||void 0===n?e>=r&&e<=s:e>=r&&e<s:"closed"===n||void 0===n?e>r&&e<=s:e>r&&e<s}export{e as default};
//# sourceMappingURL=index.mjs.map

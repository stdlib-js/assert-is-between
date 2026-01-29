// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function e(e,r,d,s,n){if(arguments.length>3){if("closed"!==s&&"open"!==s)throw new TypeError(o("04Z3G",["closed","open"].join('", "'),s));if("closed"!==n&&"open"!==n)throw new TypeError(o("04Z3H",["closed","open"].join('", "'),n))}return"closed"===s||void 0===s?"closed"===n||void 0===n?e>=r&&e<=d:e>=r&&e<d:"closed"===n||void 0===n?e>r&&e<=d:e>r&&e<d}export{e as default};
//# sourceMappingURL=index.mjs.map

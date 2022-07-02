// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function e(e,n,t,r,s){if(arguments.length>3){if("closed"!==r&&"open"!==r)throw new TypeError(o('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),r));if("closed"!==s&&"open"!==s)throw new TypeError(o('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),s))}return"closed"===r||void 0===r?"closed"===s||void 0===s?e>=n&&e<=t:e>=n&&e<t:"closed"===s||void 0===s?e>n&&e<=t:e>n&&e<t}export{e as default};
//# sourceMappingURL=index.mjs.map

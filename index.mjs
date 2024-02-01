// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function o(o,n,t,i,r){if(arguments.length>3){if("closed"!==i&&"open"!==i)throw new TypeError(e('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if("closed"!==r&&"open"!==r)throw new TypeError(e('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),r))}return"closed"===i||void 0===i?"closed"===r||void 0===r?o>=n&&o<=t:o>=n&&o<t:"closed"===r||void 0===r?o>n&&o<=t:o>n&&o<t}export{o as default};
//# sourceMappingURL=index.mjs.map

// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var o=e;var r=function(e,r,n,t,l){if(arguments.length>3){if("closed"!==t&&"open"!==t)throw new TypeError(o('invalid argument. `left` must be one of the following: "closed" or "open". Value: `%s`.',t));if("closed"!==l&&"open"!==l)throw new TypeError(o('invalid argument. `right` must be one of the following: "closed" or "open". Value: `%s`.',l))}return"closed"===t||void 0===t?"closed"===l||void 0===l?e>=r&&e<=n:e>=r&&e<n:"closed"===l||void 0===l?e>r&&e<=n:e>r&&e<n};export{r as default};
//# sourceMappingURL=index.mjs.map

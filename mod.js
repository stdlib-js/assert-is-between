// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function o(){var o,e=arguments,n=e[0],r="https://stdlib.io/e/"+n+"?";for(o=1;o<e.length;o++)r+="&arg[]="+encodeURIComponent(e[o]);return r}function e(e,n,r,t,d){if(arguments.length>3){if("closed"!==t&&"open"!==t)throw new TypeError(o("04Z3G,Ir",["closed","open"].join('", "'),t));if("closed"!==d&&"open"!==d)throw new TypeError(o("04Z3H,Is",["closed","open"].join('", "'),d))}return"closed"===t||void 0===t?"closed"===d||void 0===d?e>=n&&e<=r:e>=n&&e<r:"closed"===d||void 0===d?e>n&&e<=r:e>n&&e<r}export{e as default};
//# sourceMappingURL=mod.js.map

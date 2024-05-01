"use strict";var u=function(e,o){return function(){return o||e((o={exports:{}}).exports,o),o.exports}};var d=u(function(p,t){
var i=require('@stdlib/error-tools-fmtprodmsg/dist');function c(e,o,s,r,n){if(arguments.length>3){if(r!=="closed"&&r!=="open")throw new TypeError(i('04Z3G',["closed","open"].join('", "'),r));if(n!=="closed"&&n!=="open")throw new TypeError(i('04Z3H',["closed","open"].join('", "'),n))}return r==="closed"||r===void 0?n==="closed"||n===void 0?e>=o&&e<=s:e>=o&&e<s:n==="closed"||n===void 0?e>o&&e<=s:e>o&&e<s}t.exports=c
});var f=d();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

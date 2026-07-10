"use strict";var u=function(e,o){return function(){try{return o||e((o={exports:{}}).exports,o),o.exports}catch(r){throw (o=0, r)}};};var d=u(function(p,t){
var i=require('@stdlib/error-tools-fmtprodmsg/dist');function c(e,o,r,s,n){if(arguments.length>3){if(s!=="closed"&&s!=="open")throw new TypeError(i('04Z3G',["closed","open"].join('", "'),s));if(n!=="closed"&&n!=="open")throw new TypeError(i('04Z3H',["closed","open"].join('", "'),n))}return s==="closed"||s===void 0?n==="closed"||n===void 0?e>=o&&e<=r:e>=o&&e<r:n==="closed"||n===void 0?e>o&&e<=r:e>o&&e<r}t.exports=c
});var f=d();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

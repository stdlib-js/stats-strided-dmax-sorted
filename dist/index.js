"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var n=u(function(Z,d){
var v=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-assert-is-positive-zero/dist');function p(e,r,t,s){var a,i;return e<=0?NaN:e===1||t===0?r[0]:(a=r[s],i=r[s+(e-1)*t],v(a)||v(i)?NaN:a===i?o(a)||o(i)?0:a:a>i?a:i)}d.exports=p
});var q=u(function(b,f){
var y=require('@stdlib/strided-base-stride2offset/dist'),S=n();function l(e,r,t){return S(e,r,t,y(e,t))}f.exports=l
});var m=u(function(g,x){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),O=n();N(c,"ndarray",O);x.exports=c
});var P=m();module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

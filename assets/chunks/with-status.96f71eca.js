import{g as d,q as h,r as n,o as c,c as f,a as e,w as s,F as m,d as y,_ as r,f as a,u as i,A as S,aw as x,ag as v,I as j}from"../app.80d93473.js";const O=y("Next step"),$=d({__name:"basic",setup(l){const _=h(0),t=()=>{_.value++>2&&(_.value=0)};return(o,p)=>{const u=n("el-step"),b=n("el-steps"),g=n("el-button");return c(),f(m,null,[e(b,{active:_.value,"finish-status":"success"},{default:s(()=>[e(u,{title:"Step 1"}),e(u,{title:"Step 2"}),e(u,{title:"Step 3"})]),_:1},8,["active"]),e(g,{style:{"margin-top":"12px"},onClick:t},{default:s(()=>[O]),_:1})],64)}}});var G=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));const P={};function T(l,_){const t=n("el-step"),o=n("el-steps");return c(),a(o,{active:2,"align-center":""},{default:s(()=>[e(t,{title:"Step 1",description:"Some description"}),e(t,{title:"Step 2",description:"Some description"}),e(t,{title:"Step 3",description:"Some description"}),e(t,{title:"Step 4",description:"Some description"})]),_:1})}var z=r(P,[["render",T]]),H=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));const M=d({__name:"simple",setup(l){return(_,t)=>{const o=n("el-step"),p=n("el-steps");return c(),f(m,null,[e(p,{space:200,active:1,simple:""},{default:s(()=>[e(o,{title:"Step 1",icon:i(S)},null,8,["icon"]),e(o,{title:"Step 2",icon:i(x)},null,8,["icon"]),e(o,{title:"Step 3",icon:i(v)},null,8,["icon"])]),_:1}),e(p,{active:1,"finish-status":"success",simple:"",style:{"margin-top":"20px"}},{default:s(()=>[e(o,{title:"Step 1"}),e(o,{title:"Step 2"}),e(o,{title:"Step 3"})]),_:1})],64)}}});var J=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));const w={},k={style:{height:"300px"}};function C(l,_){const t=n("el-step"),o=n("el-steps");return c(),f("div",k,[e(o,{direction:"vertical",active:1},{default:s(()=>[e(t,{title:"Step 1"}),e(t,{title:"Step 2"}),e(t,{title:"Step 3"})]),_:1})])}var B=r(w,[["render",C]]),K=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const N={};function D(l,_){const t=n("el-step"),o=n("el-steps");return c(),a(o,{active:1},{default:s(()=>[e(t,{title:"Step 1",description:"Some description"}),e(t,{title:"Step 2",description:"Some description"}),e(t,{title:"Step 3",description:"Some description"})]),_:1})}var F=r(N,[["render",D]]),L=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const V=d({__name:"with-icon",setup(l){return(_,t)=>{const o=n("el-step"),p=n("el-steps");return c(),a(p,{active:1},{default:s(()=>[e(o,{title:"Step 1",icon:i(S)},null,8,["icon"]),e(o,{title:"Step 2",icon:i(j)},null,8,["icon"]),e(o,{title:"Step 3",icon:i(v)},null,8,["icon"])]),_:1})}}});var Q=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));const q={};function A(l,_){const t=n("el-step"),o=n("el-steps");return c(),a(o,{space:200,active:1,"finish-status":"success"},{default:s(()=>[e(t,{title:"Done"}),e(t,{title:"Processing"}),e(t,{title:"Step 3"})]),_:1})}var E=r(q,[["render",A]]),R=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));export{G as _,H as a,J as b,K as c,L as d,Q as e,R as f};

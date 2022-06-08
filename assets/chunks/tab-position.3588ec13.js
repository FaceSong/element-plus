import{g as h,q as f,r as d,o as p,f as v,w as e,a as t,d as o,_ as V,b as x,u as C,ak as z,c as T,F as y,i as $,t as k}from"../app.80d93473.js";const S=o("User"),j=o("Config"),w=o("Role"),O=o("Task"),R=h({__name:"basic",setup(g){const u=f("first"),l=(_,n)=>{console.log(_,n)};return(_,n)=>{const s=d("el-tab-pane"),c=d("el-tabs");return p(),v(c,{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=a=>u.value=a),class:"demo-tabs",onTabClick:l},{default:e(()=>[t(s,{label:"User",name:"first"},{default:e(()=>[S]),_:1}),t(s,{label:"Config",name:"second"},{default:e(()=>[j]),_:1}),t(s,{label:"Role",name:"third"},{default:e(()=>[w]),_:1}),t(s,{label:"Task",name:"fourth"},{default:e(()=>[O]),_:1})]),_:1},8,["modelValue"])}}});var re=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));const U={},N=o("User"),P=o("Config"),M=o("Role"),E=o("Task");function B(g,u){const l=d("el-tab-pane"),_=d("el-tabs");return p(),v(_,{type:"border-card"},{default:e(()=>[t(l,{label:"User"},{default:e(()=>[N]),_:1}),t(l,{label:"Config"},{default:e(()=>[P]),_:1}),t(l,{label:"Role"},{default:e(()=>[M]),_:1}),t(l,{label:"Task"},{default:e(()=>[E]),_:1})]),_:1})}var F=V(U,[["render",B]]),ie=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const I=o("User"),q=o("Config"),D=o("Role"),L=o("Task"),A=h({__name:"card-style",setup(g){const u=f("first"),l=(_,n)=>{console.log(_,n)};return(_,n)=>{const s=d("el-tab-pane"),c=d("el-tabs");return p(),v(c,{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=a=>u.value=a),type:"card",class:"demo-tabs",onTabClick:l},{default:e(()=>[t(s,{label:"User",name:"first"},{default:e(()=>[I]),_:1}),t(s,{label:"Config",name:"second"},{default:e(()=>[q]),_:1}),t(s,{label:"Role",name:"third"},{default:e(()=>[D]),_:1}),t(s,{label:"Task",name:"fourth"},{default:e(()=>[L]),_:1})]),_:1},8,["modelValue"])}}});var pe=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const G={class:"custom-tabs-label"},H=x("span",null,"Route",-1),J=o(" Route "),K=o("Config"),Q=o("Role"),W=o("Task"),X=h({__name:"custom-tab",setup(g){return(u,l)=>{const _=d("el-icon"),n=d("el-tab-pane"),s=d("el-tabs");return p(),v(s,{type:"border-card",class:"demo-tabs"},{default:e(()=>[t(n,null,{label:e(()=>[x("span",G,[t(_,null,{default:e(()=>[t(C(z))]),_:1}),H])]),default:e(()=>[J]),_:1}),t(n,{label:"Config"},{default:e(()=>[K]),_:1}),t(n,{label:"Role"},{default:e(()=>[Q]),_:1}),t(n,{label:"Task"},{default:e(()=>[W]),_:1})]),_:1})}}});var me=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));const Y={style:{"margin-bottom":"20px"}},Z=o(" add tab "),ee=h({__name:"customized-trigger",setup(g){let u=2;const l=f("2"),_=f([{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}]),n=c=>{const a=`${++u}`;_.value.push({title:"New Tab",name:a,content:"New Tab content"}),l.value=a},s=c=>{const a=_.value;let r=l.value;r===c&&a.forEach((b,m)=>{if(b.name===c){const i=a[m+1]||a[m-1];i&&(r=i.name)}}),l.value=r,_.value=a.filter(b=>b.name!==c)};return(c,a)=>{const r=d("el-button"),b=d("el-tab-pane"),m=d("el-tabs");return p(),T(y,null,[x("div",Y,[t(r,{size:"small",onClick:a[0]||(a[0]=i=>n(l.value))},{default:e(()=>[Z]),_:1})]),t(m,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=i=>l.value=i),type:"card",class:"demo-tabs",closable:"",onTabRemove:s},{default:e(()=>[(p(!0),T(y,null,$(_.value,i=>(p(),v(b,{key:i.name,label:i.title,name:i.name},{default:e(()=>[o(k(i.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])],64)}}});var fe=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));const te=h({__name:"dynamic-tabs",setup(g){let u=2;const l=f("2"),_=f([{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}]),n=(s,c)=>{if(c==="add"){const a=`${++u}`;_.value.push({title:"New Tab",name:a,content:"New Tab content"}),l.value=a}else if(c==="remove"){const a=_.value;let r=l.value;r===s&&a.forEach((b,m)=>{if(b.name===s){const i=a[m+1]||a[m-1];i&&(r=i.name)}}),l.value=r,_.value=a.filter(b=>b.name!==s)}};return(s,c)=>{const a=d("el-tab-pane"),r=d("el-tabs");return p(),v(r,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=b=>l.value=b),type:"card",editable:"",class:"demo-tabs",onEdit:n},{default:e(()=>[(p(!0),T(y,null,$(_.value,b=>(p(),v(a,{key:b.name,label:b.title,name:b.name},{default:e(()=>[o(k(b.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])}}});var ve=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"}));const ae=o("top"),oe=o("right"),le=o("bottom"),ne=o("left"),_e=o("User"),se=o("Config"),ce=o("Role"),de=o("Task"),be=h({__name:"tab-position",setup(g){const u=f("left");return(l,_)=>{const n=d("el-radio-button"),s=d("el-radio-group"),c=d("el-tab-pane"),a=d("el-tabs");return p(),T(y,null,[t(s,{modelValue:u.value,"onUpdate:modelValue":_[0]||(_[0]=r=>u.value=r),style:{"margin-bottom":"30px"}},{default:e(()=>[t(n,{label:"top"},{default:e(()=>[ae]),_:1}),t(n,{label:"right"},{default:e(()=>[oe]),_:1}),t(n,{label:"bottom"},{default:e(()=>[le]),_:1}),t(n,{label:"left"},{default:e(()=>[ne]),_:1})]),_:1},8,["modelValue"]),t(a,{"tab-position":u.value,style:{height:"200px"},class:"demo-tabs"},{default:e(()=>[t(c,{label:"User"},{default:e(()=>[_e]),_:1}),t(c,{label:"Config"},{default:e(()=>[se]),_:1}),t(c,{label:"Role"},{default:e(()=>[ce]),_:1}),t(c,{label:"Task"},{default:e(()=>[de]),_:1})]),_:1},8,["tab-position"])],64)}}});var ge=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"}));export{re as _,ie as a,pe as b,me as c,fe as d,ve as e,ge as f};

"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[4451],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2210:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={slug:"/forOp",sidebar_position:10},i="\u69cb\u6210",c={unversionedId:"forOp/composition",id:"forOp/composition",title:"\u69cb\u6210",description:"AdminGate\u306fWebgate,AccessManager,IDManager,\u306e\u4f7f\u7528\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u308b\u3002",source:"@site/docs/forOp/composition.md",sourceDirName:"forOp",slug:"/forOp",permalink:"/pages-nsag/docs/forOp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/forOp/composition.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{slug:"/forOp",sidebar_position:10},sidebar:"forOpSidebar",next:{title:"\u30ed\u30b0\u30a4\u30f3\u624b\u9806",permalink:"/pages-nsag/docs/forOp/login"}},p={},s=[{value:"WebGate",id:"webgate",level:3},{value:"AccessManager",id:"accessmanager",level:3},{value:"IDManager",id:"idmanager",level:3},{value:"\u30b5\u30fc\u30d3\u30b9\u69cb\u6210\u56f3",id:"\u30b5\u30fc\u30d3\u30b9\u69cb\u6210\u56f3",level:2}],l={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u69cb\u6210"},"\u69cb\u6210"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AdminGate"),"\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"Webgate"),",",(0,a.kt)("inlineCode",{parentName:"p"},"AccessManager"),",",(0,a.kt)("inlineCode",{parentName:"p"},"IDManager"),",\u306e\u4f7f\u7528\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u308b\u3002"),(0,a.kt)("h3",{id:"webgate"},"WebGate"),(0,a.kt)("p",null,"\u30d6\u30e9\u30a6\u30b6\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3059\u308b\u969b\u306e\u30ea\u30d0\u30fc\u30b9\u30d7\u30ed\u30ad\u30b7\u3092\u884c\u3046\u3002"),(0,a.kt)("h3",{id:"accessmanager"},"AccessManager"),(0,a.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3/\u30ed\u30b0\u30a2\u30a6\u30c8\u3092\u7ba1\u7406\u3057\u3001SAML\u8a8d\u8a3c\u3067Guacamole\u3078\u306e\u30ed\u30b0\u30a4\u30f3\u3092\u884c\u3046\u3002"),(0,a.kt)("h3",{id:"idmanager"},"IDManager"),(0,a.kt)("p",null,"\u4f5c\u696d\u306e\u7533\u8acb\u3068\u627f\u8a8d\u3001\u63a5\u7d9a\u5148\u306e\u8ffd\u52a0\u306a\u3069\u3092\u884c\u3046\u3002"),(0,a.kt)("h2",{id:"\u30b5\u30fc\u30d3\u30b9\u69cb\u6210\u56f3"},"\u30b5\u30fc\u30d3\u30b9\u69cb\u6210\u56f3"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u69cb\u6210\u56f3",src:r(5931).Z,width:"1418",height:"1020"})))}u.isMDXComponent=!0},5931:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/composition-2377a0c5fc88b2ed879c38496b8c6bed.png"}}]);
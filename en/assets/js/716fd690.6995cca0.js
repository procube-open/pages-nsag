"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[9532],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),c=a,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||l;return r?n.createElement(g,o(o({ref:t},m),{},{components:r})):n.createElement(g,o({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:80},o="session-manager \u306e\u69cb\u7bc9",i={unversionedId:"forSE/services/session-manager",id:"forSE/services/session-manager",title:"session-manager \u306e\u69cb\u7bc9",description:"session-manager \u306e\u30b5\u30fc\u30d3\u30b9\u3092\u69cb\u7bc9\u3059\u308b\u969b\u306e\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/docs/forSE/services/session-manager.md",sourceDirName:"forSE/services",slug:"/forSE/services/session-manager",permalink:"/pages-nsag/en/docs/forSE/services/session-manager",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/forSE/services/session-manager.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"forSESidebar",previous:{title:"mongo \u306e\u69cb\u7bc9",permalink:"/pages-nsag/en/docs/forSE/services/mongo"},next:{title:"webdav-server \u306e\u69cb\u7bc9",permalink:"/pages-nsag/en/docs/forSE/services/webdav-server"}},s={},p=[{value:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a",id:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a",level:2},{value:"roles \u306e\u8a2d\u5b9a",id:"roles-\u306e\u8a2d\u5b9a",level:2}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"session-manager-\u306e\u69cb\u7bc9"},"session-manager \u306e\u69cb\u7bc9"),(0,a.kt)("p",null,"session-manager \u306e\u30b5\u30fc\u30d3\u30b9\u3092\u69cb\u7bc9\u3059\u308b\u969b\u306e\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a"},"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a"),(0,a.kt)("p",null,"session-manager \u3067\u5229\u7528\u3059\u308b\u74b0\u5883\u5909\u6570\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5909\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HIVE_SERVERS"),(0,a.kt)("td",{parentName:"tr",align:null},"hive \u30b5\u30fc\u30d0\u30fc\u3067\u3059\u3002\u30ab\u30f3\u30de\u533a\u5207\u308a\u3067\u5168\u30b5\u30fc\u30d0\u30fc\u3092\u8a18\u8f09\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IMAGE_CHROME"),(0,a.kt)("td",{parentName:"tr",align:null},"Chrome \u30b3\u30f3\u30c6\u30ca\u3092\u7acb\u3061\u4e0a\u3052\u308b\u969b\u306e\u30a4\u30e1\u30fc\u30b8\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WEBDAV_SERVER"),(0,a.kt)("td",{parentName:"tr",align:null},"webdav \u30b5\u30fc\u30d0\u30fc\u306eIP\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WEBDAV_PORT"),(0,a.kt)("td",{parentName:"tr",align:null},"webdav \u30b5\u30fc\u30d0\u30fc\u306e\u30dd\u30fc\u30c8\u756a\u53f7\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WEBDAV_USERNAME"),(0,a.kt)("td",{parentName:"tr",align:null},"webdav \u30b5\u30fc\u30d0\u30fc\u306e\u30e6\u30fc\u30b6\u30fc\u540d\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WEBDAV_PASSWORD"),(0,a.kt)("td",{parentName:"tr",align:null},"webdav \u30b5\u30fc\u30d0\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GUACAMOLE_URL"),(0,a.kt)("td",{parentName:"tr",align:null},"Guacamole \u306e API \u306e URL \u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GUACAMOLE_USERNAME"),(0,a.kt)("td",{parentName:"tr",align:null},"Guacamole \u306e\u30e6\u30fc\u30b6\u30fc\u540d\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GUACAMOLE_PASSWORD"),(0,a.kt)("td",{parentName:"tr",align:null},"Guacamole \u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VNC_PORT"),(0,a.kt)("td",{parentName:"tr",align:null},"VNC \u306e\u30dd\u30fc\u30c8\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VNC_PASSWORD"),(0,a.kt)("td",{parentName:"tr",align:null},"VNC \u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3067\u3059\u3002")))),(0,a.kt)("h2",{id:"roles-\u306e\u8a2d\u5b9a"},"roles \u306e\u8a2d\u5b9a"),(0,a.kt)("p",null,"admingate-api \u3067\u5229\u7528\u3059\u308b roles \u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u8a2d\u5b9a\u3059\u308b roles \u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"role \u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5b9f\u65bd\u30bf\u30a4\u30df\u30f3\u30b0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hive-trust-ca"),(0,a.kt)("td",{parentName:"tr",align:null},"build-images"),(0,a.kt)("td",{parentName:"tr",align:null},"CA\u5c40\u8a3c\u660e\u66f8\u306e\u30b3\u30f3\u30c6\u30ca\u306e\u30c8\u30e9\u30b9\u30c8\u30b9\u30c8\u30a2\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hive-certificate"),(0,a.kt)("td",{parentName:"tr",align:null},"build-images"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b5\u30fc\u30d0\u306b\u5229\u7528\u3067\u304d\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8(\u30b5\u30fc\u30d0\u30fc)\u8a3c\u660e\u66f8\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002")))))}u.isMDXComponent=!0}}]);
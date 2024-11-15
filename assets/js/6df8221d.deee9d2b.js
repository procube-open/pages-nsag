"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[2690],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:90},o="webdav-server \u306e\u69cb\u7bc9",i={unversionedId:"forSE/services/webdav-server",id:"forSE/services/webdav-server",title:"webdav-server \u306e\u69cb\u7bc9",description:"ftp-server \u306e\u30b5\u30fc\u30d3\u30b9\u3092\u69cb\u7bc9\u3059\u308b\u969b\u306e\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/docs/forSE/services/webdav-server.md",sourceDirName:"forSE/services",slug:"/forSE/services/webdav-server",permalink:"/pages-nsag/docs/forSE/services/webdav-server",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/forSE/services/webdav-server.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"forSESidebar",previous:{title:"session-manager \u306e\u69cb\u7bc9",permalink:"/pages-nsag/docs/forSE/services/session-manager"},next:{title:"\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u9023\u643aAPI",permalink:"/pages-nsag/docs/category/\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u9023\u643aapi-1"}},p={},s=[{value:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a",id:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webdav-server-\u306e\u69cb\u7bc9"},"webdav-server \u306e\u69cb\u7bc9"),(0,a.kt)("p",null,"ftp-server \u306e\u30b5\u30fc\u30d3\u30b9\u3092\u69cb\u7bc9\u3059\u308b\u969b\u306e\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a"},"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a"),(0,a.kt)("p",null,"ftp-server \u3067\u5229\u7528\u3059\u308b\u74b0\u5883\u5909\u6570\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u74b0\u5883\u5909\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DATABASE_URL"),(0,a.kt)("td",{parentName:"tr",align:null},"mongodb://localhost:27017/files_db"),(0,a.kt)("td",{parentName:"tr",align:null},"MongoDB \u306e\u63a5\u7d9a\u5148 URL \u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MONGO_INITDB_ROOT_USERNAME"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7a7a\u6587\u5b57\u5217"),(0,a.kt)("td",{parentName:"tr",align:null},"MongoDB \u306e\u30eb\u30fc\u30c8\u30e6\u30fc\u30b6\u30fc\u540d\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MONGO_INITDB_ROOT_PASSWORD"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7a7a\u6587\u5b57\u5217"),(0,a.kt)("td",{parentName:"tr",align:null},"MongoDB \u306e\u30eb\u30fc\u30c8\u30d1\u30b9\u30ef\u30fc\u30c9\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WEBDAV_PUBLIC_VOLUME_USERNAME"),(0,a.kt)("td",{parentName:"tr",align:null},"public"),(0,a.kt)("td",{parentName:"tr",align:null},"public \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u30e6\u30fc\u30b6\u540d\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WEBDAV_CREATE_FILE_TIMEOUT"),(0,a.kt)("td",{parentName:"tr",align:null},"3600"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65b0\u898f\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u304c\u4e2d\u65ad\u3055\u308c\u305f\u3068\u304d\u306b\u6b8b\u308b\u4e00\u6642\u30c7\u30fc\u30bf\u3092\u4e00\u5b9a\u6642\u9593\u7d4c\u904e\u5f8c\u306b\u524a\u9664\u3059\u308b\u305f\u3081\u306e\u3001\u524a\u9664\u307e\u3067\u306e\u6642\u9593\u3092\u6307\u5b9a\u3057\u307e\u3059\uff08\u5358\u4f4d\uff1a\u79d2\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WEBDAV_SERVER_PORT:"),(0,a.kt)("td",{parentName:"tr",align:null},"2000"),(0,a.kt)("td",{parentName:"tr",align:null},"WebDAV \u30b5\u30fc\u30d0\u306e\u30dd\u30fc\u30c8\u756a\u53f7\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UPLOAD_SIZE_LIMIT"),(0,a.kt)("td",{parentName:"tr",align:null},"10,737,418,240"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5358\u4e00\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30b5\u30a4\u30ba\u5236\u9650\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UPLOAD_TOTAL_SIZE_LIMIT"),(0,a.kt)("td",{parentName:"tr",align:null},"53,687,091,200"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5168\u30d5\u30a1\u30a4\u30eb\u306e\u5408\u8a08\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30b5\u30a4\u30ba\u5236\u9650\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SCAN_SIZE_LIMIT"),(0,a.kt)("td",{parentName:"tr",align:null},"4,294,967,296"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30d5\u30a1\u30a4\u30eb\u30b9\u30ad\u30e3\u30f3\u306e\u30b5\u30a4\u30ba\u5236\u9650\u3067\u3059\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FILESERVER_AV"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u30a6\u30a4\u30eb\u30b9\u30b9\u30ad\u30e3\u30f3\u306e\u6709\u52b9/\u7121\u52b9\u3092\u5207\u308a\u66ff\u3048\u307e\u3059\u3002")))))}u.isMDXComponent=!0}}]);
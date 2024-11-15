"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[1774],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},o="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),o=m(n),u=r,s=o["".concat(p,".").concat(u)]||o[u]||N[u]||l;return n?a.createElement(s,i(i({ref:e},k),{},{components:n})):a.createElement(s,i({ref:e},k))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[o]="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5527:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:10},i="\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9",d={unversionedId:"forDev/fileserver/database",id:"forDev/fileserver/database",title:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9",description:"\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d0\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3068\u3057\u3066\u3001MongoDB\u306eGridFS\u3092\u63a1\u7528\u3057\u3066\u304a\u308a\u3001\u63a5\u7d9a\u306b\u306fMongoose\u3092\u4f7f\u3046\u3002",source:"@site/docs/forDev/fileserver/database.md",sourceDirName:"forDev/fileserver",slug:"/forDev/fileserver/database",permalink:"/pages-nsag/docs/forDev/fileserver/database",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/forDev/fileserver/database.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"forDevSidebar",previous:{title:"\u6982\u8981",permalink:"/pages-nsag/docs/forDev/fileserver/overview"},next:{title:"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5b9f\u88c5",permalink:"/pages-nsag/docs/forDev/fileserver/directory"}},p={},m=[{value:"fs.files",id:"fsfiles",level:2},{value:"fs.chunks",id:"fschunks",level:2},{value:"fs.dirs",id:"fsdirs",level:2},{value:"fs.works",id:"fsworks",level:2}],k={toc:m};function o(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"},"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"),(0,r.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d0\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3068\u3057\u3066\u3001MongoDB\u306eGridFS\u3092\u63a1\u7528\u3057\u3066\u304a\u308a\u3001\u63a5\u7d9a\u306b\u306fMongoose\u3092\u4f7f\u3046\u3002\n\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u540d\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"files_db"),"\u3068\u3057\u3066\u3001\u4ee5\u4e0b\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u304c\u5b58\u5728\u3059\u308b\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fs.files")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d5\u30a1\u30a4\u30eb\u306e\u30e1\u30bf\u30c7\u30fc\u30bf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fs.chunks")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d5\u30a1\u30a4\u30eb\u306e\u5185\u90e8\u30c7\u30fc\u30bf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fs.dirs")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u30e1\u30bf\u30c7\u30fc\u30bf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fs.works")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f5c\u696d\u306e\u30e1\u30bf\u30c7\u30fc\u30bf")))),(0,r.kt)("h2",{id:"fsfiles"},"fs.files"),(0,r.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u4fdd\u6301\u3059\u308b\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3002GridFS\u6a19\u6e96\u306e\u5b9f\u88c5\u306b\u5f93\u3046\u3002\n\u4fdd\u6301\u3059\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u4ee5\u4e0b\u306e\u8868\u306e\u901a\u308a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},"MongoDB\u4e0a\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8ID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ObjectId"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filename")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u8868\u3059\u6587\u5b57\u5217"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"length")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chunkSize")),(0,r.kt)("td",{parentName:"tr",align:null},"fs.chunks\u306b\u304a\u3051\u308b1\u30c1\u30e3\u30f3\u30af\u306e\u30b5\u30a4\u30ba"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uploadDate")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u7d42\u66f4\u65b0\u65e5\u6642"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Date"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata.accessHistory")),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u5c65\u6b74"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<acHistory>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata.status")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30a6\u30a4\u30eb\u30b9\u30b9\u30ad\u30e3\u30f3\u72b6\u6cc1\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f",(0,r.kt)("a",{parentName:"td",href:"/docs/forDev/fileserver/avscan"},"\u30a6\u30a4\u30eb\u30b9\u30b9\u30ad\u30e3\u30f3\u30da\u30fc\u30b8"),"\u3092\u53c2\u7167\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata.parent_id")),(0,r.kt)("td",{parentName:"tr",align:null},"\u89aa\u306b\u5bfe\u5fdc\u3059\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e",(0,r.kt)("inlineCode",{parentName:"td"},"fs.dirs"),"\u306e",(0,r.kt)("inlineCode",{parentName:"td"},"_id"),"\u3092\u6587\u5b57\u5217\u5316\u3057\u305f\u3082\u306e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata.fullpath")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"root"'),"\u304b\u3089\u59cb\u307e\u308a\u3001\u30d5\u30a1\u30a4\u30eb\u306b\u5230\u9054\u3059\u308b\u307e\u3067\u306e\u30d1\u30b9\u306e\u9806\u306b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e",(0,r.kt)("inlineCode",{parentName:"td"},"dirname"),"\u3092\u914d\u5217\u3067\u3064\u306a\u3052\u3066\u6700\u5f8c\u306b",(0,r.kt)("inlineCode",{parentName:"td"},"filename"),"\u3092\u5165\u308c\u305f\u3082\u306e\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<string>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata.unique")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u521d\u306e\u6587\u5b57\u3092",(0,r.kt)("inlineCode",{parentName:"td"},'"/"'),"\u3068\u3057\u3066\u3001\u305d\u306e\u5f8c\u306b",(0,r.kt)("inlineCode",{parentName:"td"},"metadata.fullpath"),"\u3092",(0,r.kt)("inlineCode",{parentName:"td"},'"/"'),"\u3067\u3064\u306a\u3052\u305f\u3082\u306e\u3002unique\u306a\u5024\u3092\u3068\u308b\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("p",null,"\u307e\u305f",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.accessHistory"),"\u3067\u914d\u5217\u3068\u3057\u3066\u683c\u7d0d\u3055\u308c\u308b",(0,r.kt)("inlineCode",{parentName:"p"},"acHistory"),"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u4ee5\u4e0b\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6301\u3064"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30a2\u30af\u30bb\u30b9\u306e\u7a2e\u5225\u3002",(0,r.kt)("inlineCode",{parentName:"td"},'"upload"'),",",(0,r.kt)("inlineCode",{parentName:"td"},'"update"'),",",(0,r.kt)("inlineCode",{parentName:"td"},'"download"'),",",(0,r.kt)("inlineCode",{parentName:"td"},'"rename"'),",",(0,r.kt)("inlineCode",{parentName:"td"},'"scan"'),"\u306e\u3044\u305a\u308c\u304b\u306e\u6587\u5b57\u5217\u304c\u5165\u308b\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Date")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30a2\u30af\u30bb\u30b9\u65e5\u6642"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Date"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Protocol")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d7\u30ed\u30c8\u30b3\u30eb\u3002\u8a73\u7d30\u306f\u5404\u30d7\u30ed\u30c8\u30b3\u30eb\u30da\u30fc\u30b8\u3092\u53c2\u7167\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SourceIP")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9001\u4fe1\u5143IP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Info")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a73\u7d30\u30fb\u88dc\u8db3\u60c5\u5831"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h2",{id:"fschunks"},"fs.chunks"),(0,r.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u306e\u5185\u90e8\u30c7\u30fc\u30bf\u3092\u4fdd\u6301\u3059\u308b\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3002GridFS\u6a19\u6e96\u306e\u5b9f\u88c5\u306b\u5f93\u3046\u3002\n\u4fdd\u6301\u3059\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u4ee5\u4e0b\u306e\u8868\u306e\u901a\u308a\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},"MongoDB\u4e0a\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8ID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ObjectId"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"files_id")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bfe\u5fdc\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u306e",(0,r.kt)("inlineCode",{parentName:"td"},"fs.files"),"\u306b\u304a\u3051\u308b",(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ObjectId"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8aad\u307f\u8fbc\u3080\u9806\u5e8f\u3092\u8868\u3059\u6570\u5b57\u30020\u304b\u3089\u59cb\u307e\u308b\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30c1\u30e3\u30f3\u30af\u5206\u3051\u3055\u308c\u305f\u30c7\u30fc\u30bf"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Binary.createFromBase64"))))),(0,r.kt)("h2",{id:"fsdirs"},"fs.dirs"),(0,r.kt)("p",null,"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u4fdd\u6301\u3059\u308b\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3002\n\u4fdd\u6301\u3059\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},"MongoDB\u4e0a\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8ID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ObjectId"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dirname")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u540d\u3092\u8868\u3059\u6587\u5b57\u5217"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uploadDate")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f5c\u6210\u65e5\u6642"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Date"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fullpath")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"root"'),"\u304b\u3089\u59cb\u307e\u308a\u3001\u30d5\u30a1\u30a4\u30eb\u306b\u5230\u9054\u3059\u308b\u307e\u3067\u306e\u30d1\u30b9\u306e\u9806\u306b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e",(0,r.kt)("inlineCode",{parentName:"td"},"dirname"),"\u3092\u914d\u5217\u3067\u3064\u306a\u3052\u305f\u3082\u306e\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<string>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unique")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u521d\u306e\u6587\u5b57\u3092",(0,r.kt)("inlineCode",{parentName:"td"},'"/"'),"\u3068\u3057\u3066\u3001\u305d\u306e\u5f8c\u306b",(0,r.kt)("inlineCode",{parentName:"td"},"fullpath"),"\u3092",(0,r.kt)("inlineCode",{parentName:"td"},'"/"'),"\u3067\u3064\u306a\u3052\u305f\u3082\u306e\u3002unique\u306a\u5024\u3092\u3068\u308b\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h2",{id:"fsworks"},"fs.works"),(0,r.kt)("p",null,"\u4f5c\u696d\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u4fdd\u6301\u3059\u308b\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3002\n\u4fdd\u6301\u3059\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id")),(0,r.kt)("td",{parentName:"tr",align:null},"MongoDB\u4e0a\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8ID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ObjectId"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"idmIdentifier")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f5c\u696dID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ed\u30b0\u30a4\u30f3\u30d1\u30b9\u30ef\u30fc\u30c9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f5c\u696d\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"whitelist")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ed\u30b0\u30a4\u30f3\u53ef\u80fdIP\u4e00\u89a7"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<string>"))))))}o.isMDXComponent=!0}}]);
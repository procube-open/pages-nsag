"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[1315],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},o="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),o=m(n),u=r,g=o["".concat(p,".").concat(u)]||o[u]||N[u]||l;return n?a.createElement(g,i(i({ref:e},k),{},{components:n})):a.createElement(g,i({ref:e},k))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[o]="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8522:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:10},i="API\u4e00\u89a7",d={unversionedId:"forDev/fastify/api",id:"forDev/fastify/api",title:"API\u4e00\u89a7",description:"\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4",source:"@site/docs/forDev/fastify/api.md",sourceDirName:"forDev/fastify",slug:"/forDev/fastify/api",permalink:"/pages-nsag/en/docs/forDev/fastify/api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/forDev/fastify/api.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"forDevSidebar",previous:{title:"\u6982\u8981",permalink:"/pages-nsag/en/docs/forDev/fastify/overview"},next:{title:"SFTP\u63a5\u7d9a",permalink:"/pages-nsag/en/docs/forDev/fastify/sftp"}},p={},m=[{value:"\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4",id:"\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4",level:3},{value:"\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d0\u30fc",id:"\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d0\u30fc",level:3},{value:"SFTP\u63a5\u7d9a",id:"sftp\u63a5\u7d9a",level:3},{value:"\u4f5c\u696d",id:"\u4f5c\u696d",level:3}],k={toc:m};function o(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api\u4e00\u89a7"},"API\u4e00\u89a7"),(0,r.kt)("h3",{id:"\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4"},"\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4"),(0,r.kt)("p",null,"\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8fd4\u3059API\u4e00\u89a7\u3002\n\u30ec\u30b9\u30dd\u30f3\u30b9\u306f\u5168\u3066\u30d5\u30a1\u30a4\u30eb\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"application/octet-stream")," \u3067\u8fd4\u3055\u308c\u308b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d1\u30b9"),(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30ec\u30b9\u30dd\u30f3\u30b9\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"frontend/index.html")," \u3092\u8fd4\u3059")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/manifest.json")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"frontend/manifest.json")," \u3092\u8fd4\u3059")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"favicon.ico")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"frontend/favicon.ico")," \u3092\u8fd4\u3059")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logo192.png")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"frontend/logo192.png")," \u3092\u8fd4\u3059")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logo512.png")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"frontend/logo512.png")," \u3092\u8fd4\u3059")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"static/:type/:chunk")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"frontend/{type}/{chunk}"),"\u3092\u8fd4\u3059")))),(0,r.kt)("h3",{id:"\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d0\u30fc"},"\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d0\u30fc"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d1\u30b9"),(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30af\u30a8\u30ea"),(0,r.kt)("th",{parentName:"tr",align:null},"body"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30ec\u30b9\u30dd\u30f3\u30b9\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/getenv")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"fastify\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u74b0\u5883\u5909\u6570\u306e\u4e00\u89a7\u3092\u8fd4\u3059 \u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/files/:dir")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"includerDir:boolean")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"{dir}\u914d\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u4e00\u89a7\u3092\u8fd4\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"includeDir"),"\u304c",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\u306e\u5834\u5408\u306f{dir}\u914d\u4e0b\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3082\u4e00\u7dd2\u306b\u8fd4\u3055\u308c\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/files/:id/getfile")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id"),"\u304c{id}\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u5358\u4f53\u53d6\u5f97\u3067\u304d\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/files/:work/getdirs")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f5c\u696dID\u304c{work}\u306e",(0,r.kt)("a",{parentName:"td",href:"/docs/forDev/fileserver/directory#%E3%83%AB%E3%83%BC%E3%83%88%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA"},"\u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea"),"\u914d\u4e0b\u306e\u60c5\u5831\u3092\u53d6\u5f97\u3067\u304d\u308b\u3002\u305d\u308c\u305e\u308c\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u306b\u65b0\u3057\u304f",(0,r.kt)("inlineCode",{parentName:"td"},"children"),"\u3068\u3044\u3046\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/files/:id/getdir")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id"),"\u304c{dir}\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u5358\u4f53\u53d6\u5f97\u3067\u304d\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/files/:id/download")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u30d5\u30a1\u30a4\u30eb\u306e\u3046\u3061\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"_id"),"\u304c{id}\u306e\u3082\u306e\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/files/:dir/check")),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filename:string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u53ef\u80fd\u304b\u3069\u3046\u304b\u7cbe\u67fb\u3059\u308b\u305f\u3081\u306e\u60c5\u5831\u3092\u8fd4\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/files/:dir/:id")),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReadableStream")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id"),"\u304c{id}\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u4e0a\u66f8\u304d\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3002\u305f\u3060\u3057\u3001{id}\u304c",(0,r.kt)("inlineCode",{parentName:"td"},'"new"'),"\u3060\u3063\u305f\u5834\u5408\u306f{dir}\u914d\u4e0b\u306b\u65b0\u898f\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/files/:dir/mkdir")),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dirname:string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id"),"\u304c{dir}\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u914d\u4e0b\u306b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u4f5c\u6210\u3059\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/files/cancel")),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filename:string")," ",(0,r.kt)("inlineCode",{parentName:"td"},"uuid:string")," ",(0,r.kt)("inlineCode",{parentName:"td"},"dirId:string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uuid"),"\u3067\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u4e2d\u306e\u3082\u306e\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/files/:id")),(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filename:string")," ",(0,r.kt)("inlineCode",{parentName:"td"},"matadata.parent_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id"),"\u304c{id}\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u540d\u524d\u3092\u5909\u66f4\u3059\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/files/:dir/rndir")),(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dirname:string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id"),"\u304c{dir}\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u540d\u524d\u3092\u5909\u66f4\u3059\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/files/:id")),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id"),"\u304c{id}\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664\u3059\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/files")),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<string>")),(0,r.kt)("td",{parentName:"tr",align:null},"body\u306e\u914d\u5217\u306b\u683c\u7d0d\u3055\u308c\u305f\u6587\u5b57\u5217\u306e",(0,r.kt)("inlineCode",{parentName:"td"},"_id"),"\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u5168\u3066\u524a\u9664\u3059\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/files/:dir/rmdir")),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_id"),"\u304c{dir}\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u524a\u9664\u3059\u308b\u3002")))),(0,r.kt)("h3",{id:"sftp\u63a5\u7d9a"},"SFTP\u63a5\u7d9a"),(0,r.kt)("p",null,"WebSocket\u3092\u63a5\u7d9a\u3059\u308b\u305f\u3081\u306eAPI\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/sftp/websocket?id={\u63a5\u7d9a\u5148ID}&token={GUACAMOLE\u30c8\u30fc\u30af\u30f3}\n")),(0,r.kt)("p",null,"fastify\u306fGuacamole\u304b\u3089\u63a5\u7d9a\u5148ID\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u3001\u305d\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3067SSH\u63a5\u7d9a\u3092\u8a66\u307f\u308b\u3002\n\u63a5\u7d9a\u5f8c\u306eWebSocket\u306e\u9001\u53d7\u4fe1\u306b\u95a2\u3057\u3066\u306f",(0,r.kt)("a",{parentName:"p",href:"/docs/forDev/fastify/sftp"},"SFTP\u63a5\u7d9a"),"\u3092\u53c2\u7167\u3002"),(0,r.kt)("h3",{id:"\u4f5c\u696d"},"\u4f5c\u696d"),(0,r.kt)("p",null,"\u4f5c\u696d\u7533\u8acb\u304c\u627f\u8a8d\u3055\u308c\u305f\u6642\u306bfastify\u5074\u3067\u64cd\u4f5c\u3092\u884c\u3046\u305f\u3081\u306eAPI\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/api/works/add\n")),(0,r.kt)("p",null,"\u30e1\u30bd\u30c3\u30c9\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),"\u3067\u3001body\u306e\u5f62\u5f0f\u306fjson\u3067\u4ee5\u4e0b\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6301\u3064"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,r.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f5c\u696d\u306e\u540d\u524d\u3002\u57fa\u672c\u7684\u306bfastify\u304c\u4f7f\u3046\u3053\u3068\u306f\u306a\u3044\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"idmidentifier")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f5c\u696dID\u3002\u4f5c\u696d\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u540d\u524d\u306a\u3069\u306b\u4f7f\u308f\u308c\u308b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"FTP,SFTP\u306e\u30ed\u30b0\u30a4\u30f3\u6642\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"whitelist")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<string>")),(0,r.kt)("td",{parentName:"tr",align:null},"\u3053\u3053\u306b\u767b\u9332\u3055\u308c\u305f\u63a5\u7d9a\u5148\u306e\u307f\u304cFTP,SFTP\u30b5\u30fc\u30d0\u306b\u63a5\u7d9a\u3067\u304d\u308b\u3002")))))}o.isMDXComponent=!0}}]);
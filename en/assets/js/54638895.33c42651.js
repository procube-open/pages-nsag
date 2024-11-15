"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[2789],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(a),c=r,g=u["".concat(p,".").concat(c)]||u[c]||s[c]||l;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:20},i="admingate-api \u306e\u69cb\u7bc9",o={unversionedId:"forSE/services/admingate-api",id:"forSE/services/admingate-api",title:"admingate-api \u306e\u69cb\u7bc9",description:"admingate-api \u306e\u30b5\u30fc\u30d3\u30b9\u3092\u69cb\u7bc9\u3059\u308b\u969b\u306e\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/docs/forSE/services/admingate-api.md",sourceDirName:"forSE/services",slug:"/forSE/services/admingate-api",permalink:"/en/docs/forSE/services/admingate-api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/forSE/services/admingate-api.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"forSESidebar",previous:{title:"admingate-client \u306e\u69cb\u7bc9",permalink:"/en/docs/forSE/services/admingate-client"},next:{title:"guacd \u306e\u69cb\u7bc9",permalink:"/en/docs/forSE/services/guacd"}},p={},m=[{value:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a",id:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a",level:2},{value:"\u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u8a2d\u5b9a",id:"\u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u8a2d\u5b9a",level:2},{value:"roles \u306e\u8a2d\u5b9a",id:"roles-\u306e\u8a2d\u5b9a",level:2},{value:"guacamole \u306e\u30bf\u30b9\u30af\u30b5\u30f3\u30d7\u30eb",id:"guacamole-\u306e\u30bf\u30b9\u30af\u30b5\u30f3\u30d7\u30eb",level:3},{value:"\u305d\u306e\u4ed6",id:"\u305d\u306e\u4ed6",level:2},{value:"labels \u306e\u8a2d\u5b9a",id:"labels-\u306e\u8a2d\u5b9a",level:3}],d={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"admingate-api-\u306e\u69cb\u7bc9"},"admingate-api \u306e\u69cb\u7bc9"),(0,r.kt)("p",null,"admingate-api \u306e\u30b5\u30fc\u30d3\u30b9\u3092\u69cb\u7bc9\u3059\u308b\u969b\u306e\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a"},"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"admingate-api \u3067\u5229\u7528\u3059\u308b\u74b0\u5883\u5909\u6570\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5909\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GUACD_HOSTNAME"),(0,r.kt)("td",{parentName:"tr",align:null},"guacd \u306e\u30db\u30b9\u30c8\u540d\u3067\u3059\u3002hive-builder \u3067\u306e\u5185\u90e8\u901a\u4fe1\u306e\u5834\u5408\u306f\u30b5\u30fc\u30d3\u30b9\u540d\u304c\u30db\u30b9\u30c8\u540d\u306b\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POSTGRES_HOSTNAME"),(0,r.kt)("td",{parentName:"tr",align:null},"postgres \u306e\u30db\u30b9\u30c8\u540d\u3067\u3059\u3002hive-builder \u3067\u306e\u5185\u90e8\u901a\u4fe1\u306e\u5834\u5408\u306f\u30b5\u30fc\u30d3\u30b9\u540d\u304c\u30db\u30b9\u30c8\u540d\u306b\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POSTGRES_DATABASE"),(0,r.kt)("td",{parentName:"tr",align:null},"postgres \u306eDB\u540d\u3067\u3059\u3002\u5225\u9014\u8a18\u8f09\u306e postgres \u306e\u30b5\u30fc\u30d3\u30b9\u3068\u5408\u308f\u305b\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POSTGRES_USER"),(0,r.kt)("td",{parentName:"tr",align:null},"postgres \u306e\u30e6\u30fc\u30b6\u30fc\u540d\u3067\u3059\u3002\u5225\u9014\u8a18\u8f09\u306e postgres \u306e\u30b5\u30fc\u30d3\u30b9\u3068\u5408\u308f\u305b\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POSTGRES_PASSWORD"),(0,r.kt)("td",{parentName:"tr",align:null},"postgres \u306e\u4e0a\u8a18\u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3067\u3059\u3002\u5225\u9014\u8a18\u8f09\u306e postgres \u306e\u30b5\u30fc\u30d3\u30b9\u3068\u5408\u308f\u305b\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GUACAMOLE_HOME"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30db\u30fc\u30e0\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u30d1\u30b9\u3067\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RECORDING_SEARCH_PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c65\u6b74\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3059\u308b\u30d1\u30b9\u3067\u3059\u3002\u4e0b\u8a18\u8a18\u8f09\u306e guacamole-recordings \u306e\u30d1\u30b9\u3068\u5408\u308f\u305b\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HEADER_ENABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"SAML \u30d8\u30c3\u30c0\u30fc\u8a8d\u8a3c\u6a5f\u80fd\u3092\u30aa\u30f3\u306b\u3059\u308b\u5834\u5408\u306f true \u3068\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,r.kt)("h2",{id:"\u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u8a2d\u5b9a"},"\u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"admingate-api \u306b\u306f\u4ee5\u4e0b\u306e\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d1\u30b9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/var/lib/guacamole/recordings"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u7d9a\u5c65\u6b74\u3092\u4fdd\u5b58\u3059\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u30dc\u30ea\u30e5\u30fc\u30e0\u5316\u3057\u307e\u3059\u3002\u5225\u9014\u8a18\u8f09\u306e guacd \u306e\u30dc\u30ea\u30e5\u30fc\u30e0\u3068\u4e00\u81f4\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))),(0,r.kt)("h2",{id:"roles-\u306e\u8a2d\u5b9a"},"roles \u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"admingate-api \u3067\u5229\u7528\u3059\u308b roles \u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u8a2d\u5b9a\u3059\u308b roles \u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"role \u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5b9f\u65bd\u30bf\u30a4\u30df\u30f3\u30b0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"guacamole"),(0,r.kt)("td",{parentName:"tr",align:null},"build-images"),(0,r.kt)("td",{parentName:"tr",align:null},"guacamole \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002")))),(0,r.kt)("h3",{id:"guacamole-\u306e\u30bf\u30b9\u30af\u30b5\u30f3\u30d7\u30eb"},"guacamole \u306e\u30bf\u30b9\u30af\u30b5\u30f3\u30d7\u30eb"),(0,r.kt)("p",null,"guacamole \u306e\u30bf\u30b9\u30af\u30b5\u30f3\u30d7\u30eb\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'# \u62e1\u5f35\u6a5f\u80fd\u7528\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u4f5c\u6210\u3059\u308b\n- name: create extensions directory if does not exist\n  file:\n    path: extensions\n    state: directory\n  become: true\n\n# guacamole.properties\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30d4\u30fc\u3059\u308b\n- name: copy guacamole properties file\n  copy:\n    src: guacamole.properties\n    dest: ./\n  become: true\n\n# DB\u521d\u671f\u5316\u7528sql\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3059\u308b\n- name: create sql file\n  shell: /opt/guacamole/bin/initdb.sh --postgresql > /tmp/initdb.sql\n\n- name: Check if the generated sql file exists\n  stat:\n    path: /tmp/initdb.sql\n  register: generated_file_check\n\n- name: Copy the generated sql file to the local\n  when: generated_file_check.stat.exists\n  fetch:\n    src: /tmp/initdb.sql\n    dest: "{{ hive_temp_dir }}/initdb.sql"\n    flat: yes\n')),(0,r.kt)("p",null,"\u307e\u305f\u3001\u30b3\u30d4\u30fc\u5143\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066 guacamole.properties \u3092\u7528\u610f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http-auth-header: HTTP_REMOTEUSER\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"http-auth-header \u30d7\u30ed\u30d1\u30c6\u30a3\u306f SAML \u8a8d\u8a3c\u3092\u5229\u7528\u3059\u308b\u969b\u306b\u5fc5\u8981\u3067\u3059\u3002\nguacamole.properties \u306b\u3064\u3044\u3066\u3001\u8a73\u7d30\u306f Guacamole \u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://guacamole.apache.org/doc/gug/configuring-guacamole.html"},"Guacamole \u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"))),(0,r.kt)("h2",{id:"\u305d\u306e\u4ed6"},"\u305d\u306e\u4ed6"),(0,r.kt)("p",null,"\u305d\u306e\u4ed6\u8a2d\u5b9a\u9805\u76ee\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"labels-\u306e\u8a2d\u5b9a"},"labels \u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"labels \u306b\u8a2d\u5b9a\u3059\u308b\u9805\u76ee\u306b\u3064\u3044\u3066\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5099\u8003"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"published_name"),(0,r.kt)("td",{parentName:"tr",align:null},"admingate-api \u306fAPI\u306e\u4ed6\u306b\u30b5\u30fc\u30d0\u30fc\u30a2\u30af\u30bb\u30b9\u6642\u306e\u753b\u9762\u3092\u63d0\u4f9b\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HIVE_MARK"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5225\u9014\u8a18\u8f09\u306e guacd \u306e\u30b5\u30fc\u30d3\u30b9\u3068\u540c\u3058 hive \u30b5\u30fc\u30d0\u30fc\u306b\u5b58\u5728\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081\u3001\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002")))))}u.isMDXComponent=!0}}]);
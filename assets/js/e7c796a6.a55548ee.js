"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5906],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90573:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),c=["components"],i={title:"Rockset",hide_title:!0,sidebar_position:35,version:1},s=void 0,u={unversionedId:"databases/rockset",id:"databases/rockset",title:"Rockset",description:"Rockset",source:"@site/docs/databases/rockset.mdx",sourceDirName:"databases",slug:"/databases/rockset",permalink:"/docs/databases/rockset",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/rockset.mdx",tags:[],version:"current",sidebarPosition:35,frontMatter:{title:"Rockset",hide_title:!0,sidebar_position:35,version:1},sidebar:"tutorialSidebar",previous:{title:"Trino",permalink:"/docs/databases/trino"},next:{title:"CrateDB",permalink:"/docs/databases/cratedb"}},p=[{value:"Rockset",id:"rockset",children:[],level:2}],l={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rockset"},"Rockset"),(0,a.kt)("p",null,"The connection string for Rockset is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rockset://apikey:{your-apikey}@api.rs2.usw2.rockset.com/\n")),(0,a.kt)("p",null,"For more complete instructions, we recommend the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rockset.com/apache-superset/"},"Rockset documentation"),"."))}d.isMDXComponent=!0}}]);
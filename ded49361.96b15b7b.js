(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(172)),o={id:"creating-first-user",title:"Creating first user"},c={id:"administrator/creating-first-user",title:"Creating first user",description:"The following steps are required prior using the system.",source:"@site/docs/administrator/creating-first-user.md",permalink:"/administrator/creating-first-user",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/website/docs/administrator/creating-first-user.md",lastUpdatedBy:"Jason-2020",lastUpdatedAt:1590116873,sidebar:"docs",previous:{title:"Mobile Apps",permalink:"/user/mobile-apps"},next:{title:"Environment variables",permalink:"/administrator/environment-variables"}},s=[{value:"Create admin user",id:"create-admin-user",children:[]},{value:"Load initial data",id:"load-initial-data",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The following steps are required prior using the system."),Object(i.b)("h2",{id:"create-admin-user"},"Create admin user"),Object(i.b)("p",null,"The below command will create first admin user with a random password.\nThe password will be printed in the terminal."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn initProject\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"username: admin@erxes.io\npassword: ********\n")),Object(i.b)("h2",{id:"load-initial-data"},"Load initial data"),Object(i.b)("p",null,"The below command will create initial permission groups, permissions, growth hack templates, email templates and some sample data, and reset the admin password.\nThe password will be printed in the terminal."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn loadInitialData\n")),Object(i.b)("p",null,"If you do not want to load sample data then you can run the following command just to load permissions."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn loadPermission\n")))}p.isMDXComponent=!0},172:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return r?a.a.createElement(b,c(c({ref:t},l),{},{components:r})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
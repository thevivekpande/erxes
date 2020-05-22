(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(172)),i={id:"centos8",title:"CentOS 8"},l={id:"installation/centos8",title:"CentOS 8",description:"This steps explain how to install Erxes on CentOS 8.",source:"@site/docs/installation/centos8.md",permalink:"/installation/centos8",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/website/docs/installation/centos8.md",lastUpdatedBy:"Batnasan Byambasuren",lastUpdatedAt:1585722197,sidebar:"docs",previous:{title:"Debian 10",permalink:"/installation/debian10"},next:{title:"REHL 8",permalink:"/installation/redhat8"}},c=[{value:"Installing erxes on CentOS 8",id:"installing-erxes-on-centos-8",children:[]},{value:"Create an admin user",id:"create-an-admin-user",children:[]},{value:"Load initial data",id:"load-initial-data",children:[]},{value:"SSL integration",id:"ssl-integration",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This steps explain how to install Erxes on CentOS 8."),Object(o.b)("h2",{id:"installing-erxes-on-centos-8"},"Installing erxes on CentOS 8"),Object(o.b)("p",null,"To have erxes up and running quickly, you can follow the following steps."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Provision a new server running CentOS 8.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log in to your new server as ",Object(o.b)("inlineCode",{parentName:"p"},"root")," account and run the following command."),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},'bash -c "$(curl https://raw.githubusercontent.com/erxes/erxes/develop/scripts/install/centos8.sh)"')),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Note"),": you will be asked to provide a domain for nginx server to set up config for erxes")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log in to your domain DNS and create A record based on your new server IP."))),Object(o.b)("h2",{id:"create-an-admin-user"},"Create an admin user"),Object(o.b)("p",null,"Switch to user ",Object(o.b)("inlineCode",{parentName:"p"},"erxes")," and run the following commands based on your needs."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"su erxes\ncd ~/erxes-api\nexport MONGO_URL=mongodb://localhost/erxes?replicaSet=rs0\n")),Object(o.b)("p",null,"The following will create an admin user ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:admin@erxes.io"}),"admin@erxes.io")," with a random password (check your console to grab the password)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn initProject\n")),Object(o.b)("h2",{id:"load-initial-data"},"Load initial data"),Object(o.b)("p",null,"The below command will create initial permission groups, permissions, growth hack templates, email templates and some sample data and reset the admin password (check your console to grab the password)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn loadInitialData\n")),Object(o.b)("p",null,"If do not want to load sample data then you can run following command just to load permissions."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn loadPermission\n")),Object(o.b)("p",null,"Now you have erxes up and running!"),Object(o.b)("h2",{id:"ssl-integration"},"SSL integration"),Object(o.b)("p",null,"The following is the demonstration of how to secure your nginx by installing letsencrypt."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": it is up to you if you wish to use different SSL provider."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to your server as ",Object(o.b)("inlineCode",{parentName:"li"},"root")," via ",Object(o.b)("inlineCode",{parentName:"li"},"ssh")," and run the following commands.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -O https://dl.eff.org/certbot-auto\nmv certbot-auto /usr/local/bin/certbot-auto\nchmod 0755 /usr/local/bin/certbot-auto\n/usr/local/bin/certbot-auto --nginx\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"/usr/local/bin/certbot-auto --nginx")," command will install multiple Python packages that are required by certbot and prompt you to answer some questions. Please follow the interactive prompt."),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Log in to your server as ",Object(o.b)("inlineCode",{parentName:"li"},"erxes")," via ",Object(o.b)("inlineCode",{parentName:"li"},"ssh")," or switch to ",Object(o.b)("inlineCode",{parentName:"li"},"erxes")," from ",Object(o.b)("inlineCode",{parentName:"li"},"root")," user.",Object(o.b)("br",{parentName:"li"}),"Edit ",Object(o.b)("inlineCode",{parentName:"li"},"erxes/build/js/env.js")," file where env vars for frontend app are stored.\nThe content of the file should be as follows:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'window.env = {\n  PORT: 3000,\n  NODE_ENV: "production",\n  REACT_APP_API_URL: "https://your_domain/api",\n  REACT_APP_API_SUBSCRIPTION_URL: "wss://your_domain/api/subscriptions",\n  REACT_APP_CDN_HOST: "https://your_domain/widgets"\n};\n')),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Update all env vars with HTTPS url in the ",Object(o.b)("inlineCode",{parentName:"li"},"ecosystem.json")," file."),Object(o.b)("li",{parentName:"ol"},"Finally, you need to restart pm2 erxes processes by running the following command:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pm2 restart ecosystem.json\n")),Object(o.b)("p",null,"If you need more information about pm2, please go to official documentation ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pm2.keymetrics.io/docs/usage/application-declaration/"}),"here"),"."))}b.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
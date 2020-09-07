(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(9),o=(n(0),n(187)),a={id:"configuration",title:"Configuration"},c={id:"configuration",title:"Configuration",description:"To configure the spotify client functionality, the SpotifyClientConfig class exists.",source:"@site/docs/configuration.md",permalink:"/SpotifyAPI-NET/docs/next/configuration",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/configuration.md",version:"next",lastUpdatedBy:"Nick Hansen",lastUpdatedAt:1599462177,sidebar:"docs",previous:{title:"Error Handling",permalink:"/SpotifyAPI-NET/docs/next/error_handling"},next:{title:"Logging",permalink:"/SpotifyAPI-NET/docs/next/logging"}},l=[{value:"HTTPClient Notes",id:"httpclient-notes",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To configure the spotify client functionality, the ",Object(o.b)("inlineCode",{parentName:"p"},"SpotifyClientConfig")," class exists."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var config = SpotifyClientConfig.CreateDefault("YourAccessToken");\nvar spotify = new SpotifyClient(config);\n\n// is the same as\n\nvar spotify = new SpotifyClient("YourAccessToken");\n')),Object(o.b)("p",null,"We won't cover every possible configuration in this part, head over to the specific guides for that:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"...")),Object(o.b)("h2",{id:"httpclient-notes"},"HTTPClient Notes"),Object(o.b)("p",null,"One important part of the configuration is the used HTTPClient. By default, every time when a ",Object(o.b)("inlineCode",{parentName:"p"},"SpotifyClientConfig")," is instantiated, a new ",Object(o.b)("inlineCode",{parentName:"p"},"HTTPClient")," is created in the background. For Web Applications which require a lot of different configs due to user based access tokens, it is ",Object(o.b)("strong",{parentName:"p"},"not")," advised to create a new config from scratch with every HTTP call. Instead, a default (static) config should be used to create a new config with a new access token."),Object(o.b)("p",null,"Consider the following HTTP Endpoint:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'public HttpResult Get()\n{\n  var config = SpotifyClientConfig.CreateDefault("YourAccessToken")\n  var spotify = new SpotifyClient(config);\n}\n')),Object(o.b)("p",null,"This creates a new ",Object(o.b)("inlineCode",{parentName:"p"},"HTTPClient")," every time a request is made, which can be quite bad for the performance. Instead we should use a base config and use ",Object(o.b)("inlineCode",{parentName:"p"},"WithToken"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'// somewhere global/static\npublic static SpotifyClientConfig DefaultConfig = SpotifyClientConfig.CreateDefault();\n\npublic HttpResult Get()\n{\n  var config = DefaultConfig.WithToken("YourAccessToken");\n  var spotify = new SpotifyClient(config);\n}\n')),Object(o.b)("p",null,"This way, a single ",Object(o.b)("inlineCode",{parentName:"p"},"HTTPClient")," will be used. For a real example, checkout the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/SpotifyAPI-NET/docs/next/example_asp"}),"ASP.NET Example")))}s.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},f=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),b=r,d=f["".concat(a,".").concat(b)]||f[b]||u[b]||o;return n?i.a.createElement(d,c({ref:t},p,{components:n})):i.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
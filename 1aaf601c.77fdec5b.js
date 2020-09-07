(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),o=(r(0),r(187)),i={id:"retry_handling",title:"Retry Handling"},l={id:"retry_handling",title:"Retry Handling",description:"In Error Handling we already found out that requests can fail. We provide a way to automatically retry requests via retry handlers. Note, by default no retries are performed.",source:"@site/docs/retry_handling.md",permalink:"/SpotifyAPI-NET/docs/next/retry_handling",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/retry_handling.md",version:"next",lastUpdatedBy:"Nick Hansen",lastUpdatedAt:1599462177,sidebar:"docs",previous:{title:"Pagination",permalink:"/SpotifyAPI-NET/docs/next/pagination"},next:{title:"IPlayableItem",permalink:"/SpotifyAPI-NET/docs/next/iplayableitem"}},c=[{value:"SimpleRetryHandler",id:"simpleretryhandler",children:[]}],s={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/SpotifyAPI-NET/docs/next/error_handling"}),"Error Handling")," we already found out that requests can fail. We provide a way to automatically retry requests via retry handlers. Note, by default no retries are performed."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"var config = SpotifyClientConfig\n  .CreateDefault()\n  .WithRetryHandler(new YourCustomRetryHandler())\n")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/blob/master/SpotifyAPI.Web/Http/Interfaces/IRetryHandler.cs"}),Object(o.b)("inlineCode",{parentName:"a"},"IRetryHandler"))," only needs one function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"public class YourCustomRetryHandler : IRetryHandler\n{\n  public Task<IResponse> HandleRetry(IRequest request, IResponse response, IRetryHandler.RetryFunc retry)\n  {\n    // request is the sent request and response the received response, obviously?\n\n    // don't retry:\n    return response;\n\n    // retry once\n    var newResponse = retry(request);\n    return newResponse;\n\n    // use retry as often as you want, make sure to return a response\n  }\n}\n")),Object(o.b)("h2",{id:"simpleretryhandler"},"SimpleRetryHandler"),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"SimpleRetryHandler")," is included, which contains the following retry logic:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Retries the (configurable) status codes: 500, 502, 503 and 429"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"RetryAfter")," - specifies the delay between retried calls"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"RetryTimes")," - specifies the maxiumum amount of performed retries per call"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TooManyRequestsConsumesARetry"),' - Whether a failure of type "Too Many Requests" should use up one of the retry attempts.')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"var config = SpotifyClientConfig\n  .CreateDefault()\n  .WithRetryHandler(new SimpleRetryHandler() { RetryAfter = TimeSpan.FromSeconds(1) });\n\nvar spotify = new SpotifyClient(config);\n")))}p.isMDXComponent=!0},187:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,b=u["".concat(i,".").concat(d)]||u[d]||y[d]||o;return r?a.a.createElement(b,l({ref:t},s,{components:r})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),i=(n(0),n(186)),o={id:"iplayableitem",title:"IPlayableItem"},l={id:"iplayableitem",title:"IPlayableItem",description:"When working with playlists or the current playing context, you will encounter a type IPlayableItem, which only contains a Type property. Spotify recently introduced shows/episodes to the API, and thus had to adapt API endpoints which previously just returned track objects. Now, playlists and the current playing context can include two types, tracks and episodes. To reflect this in our models, we introduced IPlayableItem.",source:"@site/docs/iplayableitem.md",permalink:"/SpotifyAPI-NET/docs/next/iplayableitem",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/iplayableitem.md",version:"next",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1591458229,sidebar:"docs",previous:{title:"Retry Handling",permalink:"/SpotifyAPI-NET/docs/next/retry_handling"},next:{title:"Unit Testing",permalink:"/SpotifyAPI-NET/docs/next/unit_testing"}},c=[],p={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When working with playlists or the current playing context, you will encounter a type ",Object(i.b)("inlineCode",{parentName:"p"},"IPlayableItem"),", which only contains a ",Object(i.b)("inlineCode",{parentName:"p"},"Type")," property. Spotify recently introduced shows/episodes to the API, and thus had to adapt API endpoints which previously just returned track objects. Now, playlists and the current playing context can include two types, tracks and episodes. To reflect this in our models, we introduced ",Object(i.b)("inlineCode",{parentName:"p"},"IPlayableItem"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var spotify = new SpotifyClient("YourAccessToken");\n\nvar playlist = await spotify.Playlists.Get("37i9dQZEVXbMDoHDwVN2tF");\nforeach (PlaylistTrack<IPlayableItem> item in playlist.Tracks.Items)\n{\n  // When was it added\n  Console.WriteLine(item.AddedAt);\n  // The only propety on item is item.Type, it\'s a IPlayableItem\n  Console.WriteLine(item.Track.Type);\n}\n')),Object(i.b)("p",null,"Now, this type per se is probably useless to you. You're interested in the name, uri or artist of the episode/track. To get that info, you have to type cast the ",Object(i.b)("inlineCode",{parentName:"p"},"IPlayableItem")," to the respective type:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"foreach (PlaylistTrack<IPlayableItem> item in playlist.Tracks.Items)\n{\n  if (item.Track is FullTrack track)\n  {\n    // All FullTrack properties are available\n    Console.WriteLine(track.Name);\n  }\n  if (item.Track is FullEpisode episode)\n  {\n    // All FullTrack properties are available\n    Console.WriteLine(episode.Name);\n  }\n}\n")),Object(i.b)("p",null,"To this day, ",Object(i.b)("inlineCode",{parentName:"p"},"IPlayableItem")," can only be ",Object(i.b)("inlineCode",{parentName:"p"},"FullTrack")," or ",Object(i.b)("inlineCode",{parentName:"p"},"FullEpisode"),"."))}s.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,b=u["".concat(o,".").concat(d)]||u[d]||y[d]||i;return n?a.a.createElement(b,l({ref:t},p,{components:n})):a.a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{180:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),b=(a(0),a(187)),l={id:"albums",title:"Albums",sidebar_label:"Albums"},c={id:"version-5.1.1/web/albums",title:"Albums",description:"GetAlbumTracks",source:"@site/versioned_docs/version-5.1.1/web/albums.md",permalink:"/SpotifyAPI-NET/docs/web/albums",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/albums.md",version:"5.1.1",lastUpdatedBy:"Nick Hansen",lastUpdatedAt:1599462177,sidebar_label:"Albums",sidebar:"version-5.1.1/someSidebar",previous:{title:"Getting Started",permalink:"/SpotifyAPI-NET/docs/web/getting_started"},next:{title:"Artists",permalink:"/SpotifyAPI-NET/docs/web/artists"}},i=[{value:"GetAlbumTracks",id:"getalbumtracks",children:[]},{value:"GetAlbum",id:"getalbum",children:[]},{value:"GetSeveralAlbums",id:"getseveralalbums",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"getalbumtracks"},"GetAlbumTracks"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get Spotify catalog information about an album's tracks. Optional parameters can be used to limit the number of tracks returned.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify ID for the album."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"5O7V8l4SeXTymVp3IesT9C"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[limit]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"20"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[offset]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The index of the first track to return. Default: 0 (the first object)."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[market]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"DE"'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#track-object-simplified"}),"SimpleTrack")," wrapped inside a ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#paging-object"}),"Paging-object")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'Paging<SimpleTrack> tracks = _spotify.GetAlbumTracks("5O7V8l4SeXTymVp3IesT9C");\ntracks.Items.ForEach(item => Console.WriteLine(item.Name)); //Display all fetched Track-Names (max 20)\nConsole.WriteLine(tracks.Total.ToString()) //Display total album track count\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getalbum"},"GetAlbum"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get Spotify catalog information for a single album.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify ID for the album."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"5O7V8l4SeXTymVp3IesT9C"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[market]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"DE"'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#album-object-full"}),"FullAlbum")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'FullAlbum album = _spotify.GetAlbum("5O7V8l4SeXTymVp3IesT9C");\nConsole.WriteLine(album.Name + "| Popularity: " + album.Popularity); //Display name and Popularity\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getseveralalbums"},"GetSeveralAlbums"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get Spotify catalog information for multiple albums identified by their Spotify IDs.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ids"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of the Spotify IDs for the albums. Maximum: 20 IDs."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'new List<String>() { "5O7V8l4SeXTymVp3IesT9C" }'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[market]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"DE"'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"SeveralAlbums"),' which Property "Albums" contains a list of ',Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#album-object-full"}),"FullAlbum")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'SeveralAlbums albums = _spotify.GetSeveralAlbums(new List<String>() { "5O7V8l4SeXTymVp3IesT9C" });\nConsole.WriteLine(albums.Albums[0].Name);\n')),Object(b.b)("hr",null))}p.isMDXComponent=!0},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=p(a),O=n,s=m["".concat(l,".").concat(O)]||m[O]||u[O]||b;return a?r.a.createElement(s,c({ref:t},o,{components:a})):r.a.createElement(s,c({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(124)),o={id:"follow",title:"Follow",sidebar_label:"Follow"},b={unversionedId:"web/follow",id:"version-5.1.1/web/follow",isDocsHomePage:!1,title:"Follow",description:"Follow",source:"@site/versioned_docs/version-5.1.1/web/follow.md",slug:"/web/follow",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/follow",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/follow.md",version:"5.1.1",lastUpdatedBy:"Hashim Qureshi",lastUpdatedAt:1622836122,formattedLastUpdatedAt:"6/4/2021",sidebar_label:"Follow",sidebar:"version-5.1.1/someSidebar",previous:{title:"Browse",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/browse"},next:{title:"Library",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/library"}},i=[{value:"Follow",id:"follow",children:[]},{value:"Unfollow",id:"unfollow",children:[]},{value:"IsFollowing",id:"isfollowing",children:[]},{value:"FollowPlaylist",id:"followplaylist",children:[]},{value:"UnfollowPlaylist",id:"unfollowplaylist",children:[]},{value:"IsFollowingPlaylist",id:"isfollowingplaylist",children:[]}],p={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"follow"},"Follow"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Add the current user as a follower of one or more artists or other Spotify users.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"followType"),Object(l.b)("td",{parentName:"tr",align:null},"The ID type: either artist or user."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"FollowType.Artist"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ids or id"),Object(l.b)("td",{parentName:"tr",align:null},"A list of the artist or the user Spotify IDs or just a Spotify ID"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }')," or ",Object(l.b)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(l.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse response = _spotify.Follow(FollowType.Artist, "1KpCi9BOfviCVhmpI4G2sY");\n//or if it\'s a User\nErrorResponse response = _spotify.Follow(FollowType.User, "1122095781");\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"unfollow"},"Unfollow"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Remove the current user as a follower of one or more artists or other Spotify users.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"followType"),Object(l.b)("td",{parentName:"tr",align:null},"The ID type: either artist or user."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"FollowType.Artist"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ids or id"),Object(l.b)("td",{parentName:"tr",align:null},"A list of the artist or the user Spotify IDs or just a Spotify ID"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }')," or ",Object(l.b)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(l.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse response = _spotify.Unfollow(FollowType.Artist, "1KpCi9BOfviCVhmpI4G2sY");\n//or if it\'s a User\nErrorResponse response = _spotify.Unfollow(FollowType.User, "1122095781");\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"isfollowing"},"IsFollowing"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Check to see if the current user is following one or more artists or other Spotify users.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"followType"),Object(l.b)("td",{parentName:"tr",align:null},"The ID type: either artist or user."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"FollowType.Artist"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ids or id"),Object(l.b)("td",{parentName:"tr",align:null},"A list of the artist or the user Spotify IDs or just a Spotify ID"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }')," or ",Object(l.b)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ListResponse<Boolean>")," which contains the property ",Object(l.b)("inlineCode",{parentName:"p"},"List<Boolean> List")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},'//Are you one of my Followers? :P\nListResponse<Boolean> response = _spotify.IsFollowing(FollowType.User, "1122095781");\nConsole.WriteLine(response.List[0] ? "Yis!" : "No :(");\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"followplaylist"},"FollowPlaylist"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Add the current user as a follower of a playlist.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ownerId"),Object(l.b)("td",{parentName:"tr",align:null},"The Spotify user ID of the person who owns the playlist."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"maxloermans"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"playlistId"),Object(l.b)("td",{parentName:"tr",align:null},"The Spotify ID of the playlist. Any playlist can be followed, regardless of its public/private status, as long as you know its playlist ID."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"3SIp2VAsKI03mReF0dFBmI"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[showPublic]"),Object(l.b)("td",{parentName:"tr",align:null},"If true the playlist will be included in user's public playlists, if false it will remain  private."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true"))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(l.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse response = _spotify.FollowPlaylist("maxloermans", "3SIp2VAsKI03mReF0dFBmI");\nif(!response.HasError())\n    Console.WriteLine("success");\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"unfollowplaylist"},"UnfollowPlaylist"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Remove the current user as a follower of a playlist.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ownerId"),Object(l.b)("td",{parentName:"tr",align:null},"The Spotify user ID of the person who owns the playlist."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"maxloermans"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"playlistId"),Object(l.b)("td",{parentName:"tr",align:null},"The Spotify ID of the playlist that is to be no longer followed."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"3SIp2VAsKI03mReF0dFBmI"'))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(l.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse response = _spotify.UnfollowPlaylist("maxloermans", "3SIp2VAsKI03mReF0dFBmI");\nif(!response.HasError())\n    Console.WriteLine("success");\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"isfollowingplaylist"},"IsFollowingPlaylist"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Check to see if one or more Spotify users are following a specified playlist.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ownerId"),Object(l.b)("td",{parentName:"tr",align:null},"The Spotify user ID of the person who owns the playlist."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"maxloermans"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"playlistId"),Object(l.b)("td",{parentName:"tr",align:null},"The Spotify ID of the playlist."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"3SIp2VAsKI03mReF0dFBmI"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ids or id"),Object(l.b)("td",{parentName:"tr",align:null},"A list of the artist or the user Spotify IDs or just a Spotify ID"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'new List<String> { "1KpCi9BOfviCVhmpI4G2sY" }')," or ",Object(l.b)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ListResponse<Boolean>")," which contains the property ",Object(l.b)("inlineCode",{parentName:"p"},"List<Boolean> List")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},'//Am I following the playlist?\nListResponse<Boolean> response = _spotify.IsFollowing("maxloermans", "3SIp2VAsKI03mReF0dFBmI", "1122095781");\nConsole.WriteLine(response.List[0] ? "Yis!" : "No :(");\n')),Object(l.b)("hr",null))}s.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},c=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,d=c["".concat(o,".").concat(u)]||c[u]||m[u]||l;return n?a.a.createElement(d,b(b({ref:t},p),{},{components:n})):a.a.createElement(d,b({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var p=2;p<l;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
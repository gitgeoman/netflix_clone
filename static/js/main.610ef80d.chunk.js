(this.webpackJsonpnetflix_clone=this.webpackJsonpnetflix_clone||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},47:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),o=n(17),r=n.n(o),s=(n(28),n(29),n(5)),l=n.n(s),u=n(6),d=n(4),b=n(18),h=n.n(b).a.create({baseURL:"https://api.themoviedb.org/3"}),f=(n(47),n(19)),v=n(22),p=n.n(v);var j=function(e){var t=e.title,n=e.fetchURL,i=e.isLargeRow,o=Object(c.useState)([]),r=Object(d.a)(o,2),s=r[0],b=r[1],v=Object(c.useState)(""),j=Object(d.a)(v,2),g=j[0],m=j[1];return Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(n);case 2:return t=e.sent,b(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)("div",{className:"row__posters",children:s.map((function(e){return Object(a.jsx)("img",{onClick:function(){return function(e){g?m(""):p()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(e){console.log(e)}))}(e)},className:"row__poster ".concat(i&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(i?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),g&&Object(a.jsx)(f.a,{videoId:g,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},g="b192fbe37468dc3372349a098a89d7a3",m={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api?api_key=".concat(g,"&with_genres=99")};n(63);var _=function(e){var t,n,i=Object(c.useState)([]),o=Object(d.a)(i,2),r=o[0],s=o[1];return Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(m.fetchNetflixOriginals);case 2:return t=e.sent,s(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n            "https://image.tmdb.org/t/p/original/'.concat(null===r||void 0===r?void 0:r.backdrop_path,'"\n        )'),backgroundPosition:"center center"},children:[Object(a.jsxs)("div",{className:"banner__contents",children:[Object(a.jsx)("h1",{className:"banner__title",children:(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)}),Object(a.jsxs)("div",{className:"banner__buttons",children:[Object(a.jsx)("button",{className:"banner__button",children:"Play"}),Object(a.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(a.jsx)("h1",{className:"banner__description",children:(t=null===r||void 0===r?void 0:r.overview,n=200,(null===t||void 0===t?void 0:t.length)>n?t.substr(0,n-1)+"...":t)})]}),Object(a.jsx)("div",{className:"banner__faceBottom"})]})};n(64);var O=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?i(!0):i(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(a.jsxs)("div",{className:"nav ".concat(n&&"nav__black"),children:[Object(a.jsx)("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/800px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),Object(a.jsx)("img",{className:"nav_avatar",src:"https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg",alt:"Avatar Logo"})]})};var x=function(){return Object(a.jsxs)("div",{className:"App",style:{backgroundColor:"#111"},children:[Object(a.jsx)(O,{}),Object(a.jsx)(_,{}),Object(a.jsx)(j,{title:"Netflix Originals",fetchURL:m.fetchNetflixOriginals,isLargeRow:!0}),Object(a.jsx)(j,{title:"Trending Now",fetchURL:m.fetchTrending}),Object(a.jsx)(j,{title:"Top Rated",fetchURL:m.fetchTopRated})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),w()}},[[65,1,2]]]);
//# sourceMappingURL=main.610ef80d.chunk.js.map
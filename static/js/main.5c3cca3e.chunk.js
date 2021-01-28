(this["webpackJsonptv-maze"]=this["webpackJsonptv-maze"]||[]).push([[0],{105:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(0),s=t.n(i),c=t(13),r=t.n(c),o=(t(105),t(80)),A=t(81),l=t(92),d=t(91),g=t(12),j=t(15),m=t(132),b=t(177),h=t(60),u=t(179),p=t(185),f=t(176),O=t(178),x=t(24),I=t(167),v=Object(I.a)((function(e){return{root:{flexGrow:1,overflow:"hidden"},showDetailMain:{margin:e.spacing(3),paddingTop:e.spacing(6)},breadcrumb:{marginTop:"4px",marginBottom:"4px",marginLeft:"1px"},paperHead:{fontSize:e.spacing(3),padding:e.spacing(2),display:"flex",color:"white"},paperCast:{fontSize:e.spacing(8),padding:e.spacing(2),marginBottom:e.spacing(1),marginTop:e.spacing(1)},paper:{color:e.palette.text.secondary},fontInfo:{fontFamily:["Arial"],color:"black"},summary:{fontWeight:"bold",fontSize:e.spacing(3)},imageDisplay:{width:"100%",height:"100%"},movieImage:{width:"100%",height:150},personName:{whiteSpace:"nowrap",width:e.spacing(14),overflow:"hidden",textOverflow:"ellipsis"},dashboard:{textAlign:"right",marginTop:e.spacing(3)},headingPaper:{fontWeight:"bold",fontSize:e.spacing(2)},homeIcon:{fontSize:e.spacing(5)}}})),w=t(30),N=t(25),S=t(4),C=t(37),E=t(169),Q=t(170),y=t(171),k=t(86),B=t.n(k),D=t(87),H=t.n(D),W=t(173),U=t(174),R=t(88),V=t.n(R),L=t(89),J=t.n(L),z=t(182),Z=t(172),G=t(184),X=200,K=Object(I.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(X,"px)"),marginLeft:X,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{},hide:{display:"none"},drawer:{width:X,flexShrink:0},drawerPaper:{width:X},drawerHeader:Object(N.a)(Object(N.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),popular:{paddingLeft:e.spacing(2)},genres:{paddingRight:e.spacing(5)},content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-200},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},search:{padding:"2px 4px",display:"flex",width:400,marginLeft:e.spacing(8)},inputSearch:{marginLeft:e.spacing(1),flex:1},margin:{backgroundColor:"white",alignItems:"right",width:"50%",margin:"1px"},iconButton:{padding:10},headerName:{color:"white"},navigation:{textDecoration:"none"}}})),P=t(85),Y=t.n(P),F="https://api.tvmaze.com/",M={fetchShowsData:F+"shows",fetchShowsSearchData:F+"search/shows?q=",fetchEpisodeData:F+"shows/1/episodes?specials="},q=function(e,a){var t;return t="search"===e?M.fetchShowsSearchData+a:"byMovie"===e?M.fetchShowsData+"/".concat(a,"?embed=cast"):"bySeason"===e?M.fetchShowsData+"/".concat(a,"/seasons"):M.fetchShowsData,Y.a.get(t).then((function(e){return e.data})).catch((function(e){console.log(e)}))};function T(e){var a,t=K(),s=Object(C.a)(),c=Object(i.useState)(!1),r=Object(j.a)(c,2),o=r[0],A=r[1],l=Object(i.useState)({movieName:""}),d=Object(j.a)(l,2),g=d[0],b=d[1];return Object(n.jsxs)("div",{className:"header-wrapper",children:[Object(n.jsx)(E.a,{position:"fixed",className:Object(S.a)(t.appBar,Object(w.a)({},t.appBarShift,o)),children:Object(n.jsxs)(Q.a,{children:[!window.location.hash.includes("showdetails")&&Object(n.jsx)(y.a,{"data-test":"drawer-open",color:"inherit","aria-label":"open drawer",onClick:function(){A(!0)},edge:"start",className:Object(S.a)(t.menuButton,o&&t.hide),children:Object(n.jsx)(B.a,{})}),Object(n.jsx)(x.b,{to:"/",className:t.navigation,children:Object(n.jsx)(h.a,{variant:"h6","data-test":"header-text",className:t.headerName,children:"TVMAZE"})}),!window.location.hash.includes("showdetails")&&Object(n.jsxs)(m.a,{component:"form",className:t.search,style:{textAlign:"right"},children:[Object(n.jsx)(G.a,{"data-test":"search-movies",onChange:(a="movieName",function(t){var n=[];q("search",t.target.value).then((function(i){i.length>0&&(i.map((function(e){n.push(e.show)})),n.sort((function(e,a){return a.rating.average-e.rating.average}))),e.filterShowsData(n),e.genresName(""),""===t.target.value?(window.location.reload(),e.genresName("")):b(Object(N.a)(Object(N.a)({},g),{},Object(w.a)({},a,t.target.value)))}))}),className:t.inputSearch,placeholder:"Search movie names...",inputProps:{"aria-label":"search movie"}}),Object(n.jsx)(y.a,{type:"submit",className:t.iconButton,"aria-label":"search",children:Object(n.jsx)(H.a,{})}),Object(n.jsx)(Z.a,{className:t.divider,orientation:"vertical"})]})]})}),Object(n.jsxs)(z.a,{className:t.drawer,variant:"persistent",anchor:"left",open:o,"data-test":"drawer-tag",classes:{paper:t.drawerPaper},children:[Object(n.jsxs)("div",{className:t.drawerHeader,children:[Object(n.jsx)("strong",{className:t.genres,children:"Genres"}),Object(n.jsx)(y.a,{onClick:function(){A(!1)},"data-test":"handle-drawer",children:"ltr"===s.direction?Object(n.jsx)(V.a,{}):Object(n.jsx)(J.a,{})})]}),Object(n.jsx)(Z.a,{}),Object(n.jsx)("div",{children:e.genresInfo&&e.genresInfo.length>0&&e.genresInfo.map((function(a){return Object(n.jsxs)("div",{children:[Object(n.jsx)(W.a,{button:!0,children:Object(n.jsx)(U.a,{"data-test":"genres-selection",primary:a,onClick:function(){return function(a){if(e.showsInfo){var t=[];e.showsInfo.map((function(e){e.genres.map((function(n){n===a&&t.push(e)}))})),e.filterGenresData(t),e.genresName(a),A(!1)}}(a)}},a)},a),Object(n.jsx)(Z.a,{})]},a)}))})]})]})}var _="data:image/png;base64,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",$=t(58),ee=t.n($),ae=t(59),te=t.n(ae),ne=t(50),ie=t(186),se=t(175),ce=t(5),re=t(8);function oe(){var e=Object(C.a)();return Object(ne.a)(e.breakpoints.keys).reverse().reduce((function(a,t){var n=Object(se.a)(e.breakpoints.up(t));return!a&&n?t:a}),null)||"xss"}var Ae=Object(ce.a)((function(e){return{root:{backgroundColor:e.palette.grey[100],height:e.spacing(3),color:e.palette.grey[800],fontWeight:e.typography.fontWeightRegular,"&:hover, &:focus":{backgroundColor:e.palette.grey[300]},"&:active":{boxShadow:e.shadows[1],backgroundColor:Object(re.b)(e.palette.grey[300],.12)}}}}))(ie.a);function le(e){var a=v(),t=Object(i.useState)([]),c=Object(j.a)(t,2),r=c[0],o=c[1],A=Object(i.useState)([]),l=Object(j.a)(A,2),d=l[0],g=l[1],I=Object(i.useState)(!0),w=Object(j.a)(I,2),N=w[0],S=w[1],C=2,E=oe();return C="xs"===E?2:"lg"===E||"md"===E||"xl"===E?9:3,s.a.useEffect((function(){var e=window.location.hash.slice(14);q("byMovie",e).then((function(a){return o(a),S(!1),q("bySeason",e).then((function(e){g(e)})).catch((function(e){console.log(e)}))}))}),[o]),Object(n.jsx)("div",{children:N?Object(n.jsx)(f.a,{}):Object(n.jsxs)("div",{className:a.root,children:[Object(n.jsx)(T,{}),r&&Object(n.jsxs)("div",{className:a.showDetailMain,children:[Object(n.jsx)(b.a,{container:!0,spacing:5,item:!0,xs:12,className:a.breadcrumb,children:Object(n.jsxs)(p.a,{"aria-label":"breadcrumb",children:[Object(n.jsx)(x.b,{to:"/",style:{textDecoration:"none"},children:Object(n.jsx)(Ae,{href:"#",label:"Home",icon:Object(n.jsx)(te.a,{fontSize:"small"})})}),r.name&&Object(n.jsx)(Ae,{label:r.name})]})}),Object(n.jsxs)(b.a,{container:!0,spacing:2,className:"gridSummary",children:[Object(n.jsx)(b.a,{item:!0,xs:12,lg:3,xl:3,md:3,sm:5,children:Object(n.jsx)("img",{className:a.imageDisplay,src:r.image&&r.image.medium})}),Object(n.jsxs)(b.a,{item:!0,lg:9,xl:9,md:9,sm:7,children:[r.summary&&Object(n.jsxs)("div",{children:[Object(n.jsx)(h.a,{variant:"subtitle1",className:a.summary,children:r.name}),Object(n.jsx)(h.a,{variant:"subtitle1",className:a.fontInfo,dangerouslySetInnerHTML:{__html:r.summary}})]}),r&&r.rating&&Object(n.jsxs)(h.a,{variant:"subtitle1",className:a.paper,children:[Object(n.jsx)("span",{className:a.fontInfo,children:"Rating :"})," ",null===r.rating.average?Object(n.jsx)("span",{children:"NA"}):Object(n.jsx)("span",{children:r.rating.average})]}),r.language&&Object(n.jsxs)(h.a,{variant:"subtitle1",className:a.paper,children:[Object(n.jsx)("span",{className:a.fontInfo,children:"Language :"})," ",r.language]}),Object(n.jsxs)(h.a,{variant:"subtitle1",className:a.paper,children:[r.genres&&Object(n.jsx)("span",{className:a.fontInfo,children:"Genres : "}),r.genres&&r.genres.map((function(e){return Object(n.jsx)("span",{children:e+","},e)}))]}),Object(n.jsxs)(h.a,{variant:"subtitle1",className:a.paper,children:[Object(n.jsx)("span",{className:a.fontInfo,children:"Schedule:"})," ",r.schedule&&r.schedule.days.map((function(e,a){return Object(n.jsxs)("span",{children:[" ",e+" "," "]},e)})),r&&r.schedule&&r.schedule.time]})]})]}),Object(n.jsx)(b.a,{container:!0,spacing:3,children:Object(n.jsx)(b.a,{item:!0,xs:12,children:Object(n.jsx)(m.a,{className:a.paperCast,children:Object(n.jsx)(h.a,{variant:"h3",className:a.headingPaper,children:"Seasons Information"})})})}),d?Object(n.jsx)(O.a,{cellHeight:200,className:a.gridList,cols:C,children:d.map((function(e){return Object(n.jsxs)(u.a,{style:{padding:"7px"},children:[Object(n.jsx)("img",{src:e&&e.image&&e.image.medium?e.image.medium:_,alt:"season",className:a.movieImage}),Object(n.jsx)(h.a,{variant:"subtitle2",className:a.personName,children:e.name||"Season "+e.number})]},e.id)}))}):Object(n.jsx)("div",{children:"Seasons information not found"}),Object(n.jsx)(b.a,{container:!0,spacing:1,children:Object(n.jsx)(b.a,{item:!0,xs:12,children:Object(n.jsx)(m.a,{className:a.paperCast,children:Object(n.jsx)(h.a,{variant:"h3",className:a.headingPaper,children:"Cast Information"})})})}),r._embedded?Object(n.jsx)(O.a,{cellHeight:200,className:a.gridList,cols:C,children:r._embedded.cast.map((function(e,t){return Object(n.jsxs)(u.a,{style:{padding:"7px"},children:[Object(n.jsx)("img",{src:e.person.image&&e.person.image.medium?e.person.image.medium:_,alt:"cast",className:a.movieImage}),Object(n.jsx)(h.a,{variant:"subtitle2",className:a.personName,children:e.person.name})]},t)}))}):Object(n.jsx)("div",{children:"Cast information not found"})]}),Object(n.jsx)(ee.a,{smooth:!0,style:{backgroundColor:"#3f50b5",color:"#0000ff"}})]})})}var de=t(180),ge=t(90),je=t.n(ge),me=t(181),be=t(183),he=t(134),ue=Object(he.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},gridList:{width:"100%",height:"auto"},breadcrumb:{margin:"1px"},movieImage:{height:300,width:"100%"},icon:{pointerEvents:"none",margin:"2px",color:"white"},paginationDiv:{bottom:"0px"},paginator:{justifyContent:"center",padding:"10px"}}}));function pe(e){var a=ue(),t=Object(i.useState)([]),s=Object(j.a)(t,2),c=s[0],r=s[1],o=Object(i.useState)(1),A=Object(j.a)(o,2),l=A[0],d=A[1],g=Object(i.useState)(0),m=Object(j.a)(g,2),h=m[0],I=m[1],v=Object(i.useState)(!0),w=Object(j.a)(v,2),N=w[0],S=w[1],C=e.data&&e.data.length>18?18:17;Object(i.useEffect)((function(){e.data&&(r(e.data),S(!1),I(Math.ceil(e.data.length/C)))}),[r,e]);var E=2,Q=oe();return E="xs"===Q?2:"lg"===Q||"md"===Q||"xl"===Q?6:3,Object(n.jsx)("div",{children:N?Object(n.jsx)(f.a,{}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:a.root,children:[Object(n.jsx)(b.a,{container:!0,item:!0,xs:12,className:a.breadcrumb,spacing:1,children:Object(n.jsxs)(p.a,{"aria-label":"breadcrumb",children:[Object(n.jsx)(Ae,{href:"#",label:"Home",icon:Object(n.jsx)(te.a,{fontSize:"small"}),onClick:function(){return window.location.reload()}}),e.genresName&&Object(n.jsx)(Ae,{label:e.genresName})]})}),Object(n.jsx)(O.a,{"data-test":"grid-list",cellHeight:300,className:a.gridList,cols:E,children:e&&e.data.slice((l-1)*C,l*C).map((function(e){return Object(n.jsxs)(u.a,{style:{padding:"6px"},children:[Object(n.jsx)(x.b,{to:"/showdetails/".concat(e.id),children:Object(n.jsx)("img",{src:e.image&&e.image.medium?e.image&&e.image.medium:_,alt:"image not loaded",className:a.movieImage})},e.image&&e.image.medium),Object(n.jsx)(de.a,{title:e.name,subtitle:Object(n.jsx)("div",{children:e.genres&&e.genres.map((function(e){return Object(n.jsx)("span",{children:e+","},e)}))}),actionIcon:Object(n.jsxs)(me.a,{size:"small",variant:"contained",color:"primary",className:a.icon,children:[Object(n.jsx)(je.a,{color:"secondary",fontSize:"small"}),null!==e.rating.average?e.rating.average:"NA"]},e.image&&e.image.medium)},e.id)]},e.id)}))})]}),Object(n.jsx)("div",{className:a.paginationDiv,"data-test":"pagination-sample1",children:0===c.length?Object(n.jsx)("div",{"data-test":"pagination-sample",children:"No movies found"}):Object(n.jsx)("div",{children:c.length>=16&&Object(n.jsx)(be.a,{count:h,page:l,onChange:function(e,a){d(a)},defaultPage:1,color:"primary",size:"small",showFirstButton:!0,showLastButton:!0,classes:{ul:a.paginator}})})}),Object(n.jsx)(ee.a,{smooth:!0,style:{backgroundColor:"#3f50b5",color:"#0000ff"}})]})})}var fe=Object(I.a)((function(e){return{root:{display:"flex"},drawerHeader:Object(N.a)(Object(N.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-200},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function Oe(){var e=fe(),a=Object(i.useState)(!1),t=Object(j.a)(a,2),s=t[0],c=(t[1],Object(i.useState)([])),r=Object(j.a)(c,2),o=r[0],A=r[1],l=Object(i.useState)([]),d=Object(j.a)(l,2),g=d[0],m=d[1],b=Object(i.useState)([]),h=Object(j.a)(b,2),u=h[0],p=h[1],O=Object(i.useState)(""),x=Object(j.a)(O,2),I=x[0],v=x[1],N=Object(i.useState)(!0),C=Object(j.a)(N,2),E=C[0],Q=C[1];Object(i.useEffect)((function(){var e=[],a=[];q().then((function(t){t.map((function(a){a.genres.map((function(a){e.push(a)}))}));var n=t;n.sort((function(e,a){return a.rating.average-e.rating.average})),a.push.apply(a,Object(ne.a)(n));var i=Object(ne.a)(new Set(e));p(i),A(a),m(a),Q(!1)}))}),[]);return Object(n.jsx)("div",{children:E?Object(n.jsx)(f.a,{}):Object(n.jsxs)("div",{className:e.root,"data-test":"dashboard-main",id:"scroller",children:[Object(n.jsx)(T,{showsInfo:o,genresInfo:u,filterGenresData:function(e){m(e)},filterShowsData:function(e){m(e)},genresName:function(e){v(e)}}),Object(n.jsxs)("main",{className:Object(S.a)(e.content,Object(w.a)({},e.contentShift,s)),children:[Object(n.jsx)("div",{className:e.drawerHeader}),Object(n.jsx)(pe,{data:g,genresName:I})]})]})})}t(130);var xe=function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(A.a)(t,[{key:"render",value:function(){return Object(n.jsxs)(g.c,{children:[Object(n.jsx)(g.a,{exact:!0,path:"/",component:Oe}),Object(n.jsx)(g.a,{exact:!0,path:"/dashboard",component:Oe}),Object(n.jsx)(g.a,{exact:!0,path:"/showdetails/:id",component:le}),Object(n.jsx)(g.a,{exact:!0,path:"*",component:Oe})]})}}]),t}(i.Component),Ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(n.jsx)(x.a,{children:Object(n.jsx)(xe,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/tv-maze",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/tv-maze","/service-worker.js");Ie?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):ve(e)}))}}()}},[[131,1,2]]]);
//# sourceMappingURL=main.5c3cca3e.chunk.js.map
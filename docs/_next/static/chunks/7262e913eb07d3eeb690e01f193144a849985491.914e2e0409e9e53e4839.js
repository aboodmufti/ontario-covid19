(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"7oih":function(e,t,a){"use strict";var n=a("cpVT"),r=a("q1tI"),i=a.n(r),o=a("bXiM"),s=a("5CWz"),l=a("wx14"),c=a("Ff2n"),d=(a("17x9"),a("iuhU")),f=a("H2TA"),p=a("ye/S"),u=r.forwardRef((function(e,t){var a=e.absolute,n=void 0!==a&&a,i=e.classes,o=e.className,s=e.component,f=void 0===s?"hr":s,p=e.flexItem,u=void 0!==p&&p,m=e.light,b=void 0!==m&&m,y=e.orientation,v=void 0===y?"horizontal":y,g=e.role,h=void 0===g?"hr"!==f?"separator":void 0:g,k=e.variant,O=void 0===k?"fullWidth":k,j=Object(c.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return r.createElement(f,Object(l.a)({className:Object(d.a)(i.root,o,"fullWidth"!==O&&i[O],n&&i.absolute,u&&i.flexItem,b&&i.light,"vertical"===v&&i.vertical),role:h,ref:t},j))})),m=Object(f.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(p.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(u),b=a("Xt1q"),y=a("ODXe"),v=a("kfZ5"),g=a("wpWl"),h=a("tr08"),k=a("4Hym"),O=a("bfFb"),j={entering:{opacity:1},entered:{opacity:1}},w={enter:g.b.enteringScreen,exit:g.b.leavingScreen},E=r.forwardRef((function(e,t){var a=e.children,n=e.disableStrictModeCompat,i=void 0!==n&&n,o=e.in,s=e.onEnter,d=e.onEntered,f=e.onEntering,p=e.onExit,u=e.onExited,m=e.onExiting,b=e.style,g=e.TransitionComponent,E=void 0===g?v.a:g,x=e.timeout,K=void 0===x?w:x,_=Object(c.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),T=Object(h.a)(),P=T.unstable_strictMode&&!i,N=r.useRef(null),C=Object(O.a)(a.ref,t),D=Object(O.a)(P?N:void 0,C),I=function(e){return function(t,a){if(e){var n=P?[N.current,t]:[t,a],r=Object(y.a)(n,2),i=r[0],o=r[1];void 0===o?e(i):e(i,o)}}},X=I(f),R=I((function(e,t){Object(k.b)(e);var a=Object(k.a)({style:b,timeout:K},{mode:"enter"});e.style.webkitTransition=T.transitions.create("opacity",a),e.style.transition=T.transitions.create("opacity",a),s&&s(e,t)})),B=I(d),S=I(m),M=I((function(e){var t=Object(k.a)({style:b,timeout:K},{mode:"exit"});e.style.webkitTransition=T.transitions.create("opacity",t),e.style.transition=T.transitions.create("opacity",t),p&&p(e)})),A=I(u);return r.createElement(E,Object(l.a)({appear:!0,in:o,nodeRef:P?N:void 0,onEnter:R,onEntered:B,onEntering:X,onExit:M,onExited:A,onExiting:S,timeout:K},_),(function(e,t){return r.cloneElement(a,Object(l.a)({style:Object(l.a)({opacity:0,visibility:"exited"!==e||o?void 0:"hidden"},j[e],b,a.props.style),ref:D},t))}))})),x=r.forwardRef((function(e,t){var a=e.children,n=e.classes,i=e.className,o=e.invisible,s=void 0!==o&&o,f=e.open,p=e.transitionDuration,u=e.TransitionComponent,m=void 0===u?E:u,b=Object(c.a)(e,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return r.createElement(m,Object(l.a)({in:f,timeout:p},b),r.createElement("div",{className:Object(d.a)(n.root,i,s&&n.invisible),"aria-hidden":!0,ref:t},a))})),K=Object(f.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(x),_=a("i8i4"),T=a("l3Wi");function P(e,t){var a=function(e,t){var a,n=t.getBoundingClientRect();if(t.fakeTransform)a=t.fakeTransform;else{var r=window.getComputedStyle(t);a=r.getPropertyValue("-webkit-transform")||r.getPropertyValue("transform")}var i=0,o=0;if(a&&"none"!==a&&"string"===typeof a){var s=a.split("(")[1].split(")")[0].split(",");i=parseInt(s[4],10),o=parseInt(s[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(i-n.left,"px)"):"right"===e?"translateX(-".concat(n.left+n.width-i,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(o-n.top,"px)"):"translateY(-".concat(n.top+n.height-o,"px)")}(e,t);a&&(t.style.webkitTransform=a,t.style.transform=a)}var N={enter:g.b.enteringScreen,exit:g.b.leavingScreen},C=r.forwardRef((function(e,t){var a=e.children,n=e.direction,i=void 0===n?"down":n,o=e.in,s=e.onEnter,d=e.onEntered,f=e.onEntering,p=e.onExit,u=e.onExited,m=e.onExiting,b=e.style,y=e.timeout,g=void 0===y?N:y,j=e.TransitionComponent,w=void 0===j?v.a:j,E=Object(c.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),x=Object(h.a)(),K=r.useRef(null),C=r.useCallback((function(e){K.current=_.findDOMNode(e)}),[]),D=Object(O.a)(a.ref,C),I=Object(O.a)(D,t),X=function(e){return function(t){e&&(void 0===t?e(K.current):e(K.current,t))}},R=X((function(e,t){P(i,e),Object(k.b)(e),s&&s(e,t)})),B=X((function(e,t){var a=Object(k.a)({timeout:g,style:b},{mode:"enter"});e.style.webkitTransition=x.transitions.create("-webkit-transform",Object(l.a)({},a,{easing:x.transitions.easing.easeOut})),e.style.transition=x.transitions.create("transform",Object(l.a)({},a,{easing:x.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",f&&f(e,t)})),S=X(d),M=X(m),A=X((function(e){var t=Object(k.a)({timeout:g,style:b},{mode:"exit"});e.style.webkitTransition=x.transitions.create("-webkit-transform",Object(l.a)({},t,{easing:x.transitions.easing.sharp})),e.style.transition=x.transitions.create("transform",Object(l.a)({},t,{easing:x.transitions.easing.sharp})),P(i,e),p&&p(e)})),W=X((function(e){e.style.webkitTransition="",e.style.transition="",u&&u(e)})),z=r.useCallback((function(){K.current&&P(i,K.current)}),[i]);return r.useEffect((function(){if(!o&&"down"!==i&&"right"!==i){var e=Object(T.a)((function(){K.current&&P(i,K.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[i,o]),r.useEffect((function(){o||z()}),[o,z]),r.createElement(w,Object(l.a)({nodeRef:K,onEnter:R,onEntered:S,onEntering:B,onExit:A,onExited:W,onExiting:M,appear:!0,in:o,timeout:g},E),(function(e,t){return r.cloneElement(a,Object(l.a)({ref:I,style:Object(l.a)({visibility:"exited"!==e||o?void 0:"hidden"},b,a.props.style)},t))}))})),D=a("kKAo"),I=a("NqtD"),X={left:"right",right:"left",top:"down",bottom:"up"};var R={enter:g.b.enteringScreen,exit:g.b.leavingScreen},B=r.forwardRef((function(e,t){var a=e.anchor,n=void 0===a?"left":a,i=e.BackdropProps,o=e.children,s=e.classes,f=e.className,p=e.elevation,u=void 0===p?16:p,m=e.ModalProps,y=(m=void 0===m?{}:m).BackdropProps,v=Object(c.a)(m,["BackdropProps"]),g=e.onClose,k=e.open,O=void 0!==k&&k,j=e.PaperProps,w=void 0===j?{}:j,E=e.SlideProps,x=e.TransitionComponent,_=void 0===x?C:x,T=e.transitionDuration,P=void 0===T?R:T,N=e.variant,B=void 0===N?"temporary":N,S=Object(c.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),M=Object(h.a)(),A=r.useRef(!1);r.useEffect((function(){A.current=!0}),[]);var W=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?X[t]:t}(M,n),z=r.createElement(D.a,Object(l.a)({elevation:"temporary"===B?u:0,square:!0},w,{className:Object(d.a)(s.paper,s["paperAnchor".concat(Object(I.a)(W))],w.className,"temporary"!==B&&s["paperAnchorDocked".concat(Object(I.a)(W))])}),o);if("permanent"===B)return r.createElement("div",Object(l.a)({className:Object(d.a)(s.root,s.docked,f),ref:t},S),z);var L=r.createElement(_,Object(l.a)({in:O,direction:X[W],timeout:P,appear:A.current},E),z);return"persistent"===B?r.createElement("div",Object(l.a)({className:Object(d.a)(s.root,s.docked,f),ref:t},S),L):r.createElement(b.a,Object(l.a)({BackdropProps:Object(l.a)({},i,y,{transitionDuration:P}),BackdropComponent:K,className:Object(d.a)(s.root,s.modal,f),open:O,onClose:g,ref:t},S,v),L)})),S=Object(f.a)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(B),M=a("ZPUd"),A=a.n(M),W=a("PsDL"),z=a("eD//"),L=a("tVbE"),V=a("ofer"),q=a("MquD"),H=r.forwardRef((function(e,t){var a=e.children,n=e.classes,i=e.className,o=e.disableTypography,s=void 0!==o&&o,f=e.inset,p=void 0!==f&&f,u=e.primary,m=e.primaryTypographyProps,b=e.secondary,y=e.secondaryTypographyProps,v=Object(c.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),g=r.useContext(q.a).dense,h=null!=u?u:a;null==h||h.type===V.a||s||(h=r.createElement(V.a,Object(l.a)({variant:g?"body2":"body1",className:n.primary,component:"span",display:"block"},m),h));var k=b;return null==k||k.type===V.a||s||(k=r.createElement(V.a,Object(l.a)({variant:"body2",className:n.secondary,color:"textSecondary",display:"block"},y),k)),r.createElement("div",Object(l.a)({className:Object(d.a)(n.root,i,g&&n.dense,p&&n.inset,h&&k&&n.multiline),ref:t},v),h,k)})),U=Object(f.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(H),G=a("uniG"),Y=a.n(G),Z=a("lO0E"),J=a("Ji2X"),F=a("R/WZ"),Q=a("BomS"),$=i.a.createElement;function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ae=Object(F.a)((function(e){return{drawer:{width:240},menuButton:{marginRight:e.spacing(2)},closeButton:{margin:e.spacing(2)},toolbar:te(te({},e.mixins.toolbar),{},{textAlign:"right"}),appBar:{flexGrow:1},title:{flexGrow:1},drawerPaper:{width:240},content:{padding:e.spacing(3)}}}));t.a=function(e){var t=e.window,a=e.menuItems,n=void 0===a?[]:a,i=e.children,l=ae(),c=Object(r.useState)(!1),d=c[0],f=c[1],p=function(){f(!d)},u=$("div",null,$("div",{className:l.toolbar},$(W.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:p,className:l.closeButton},$(A.a,null))),$(m,null),$(z.a,null,n.map((function(e,t){var a=e.title,n=e.href;return $(L.a,{button:!0,component:"a",key:t,href:n},$(U,{primary:a}))})))),b=void 0!==t?function(){return t().document.body}:void 0;return $("div",{className:l.root},$(s.a,null),$(o.a,{position:"fixed",className:l.appBar},$(Z.a,null,$(W.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:p,className:l.menuButton},$(Y.a,null)),$(V.a,{variant:"h6",noWrap:!0,className:l.title},"Covid-19 in Ontario"),$(Q.a,null))),$("nav",{className:l.drawer},$(S,{container:b,variant:"temporary",anchor:"left",open:d,onClose:p,classes:{paper:l.drawerPaper},ModalProps:{keepMounted:!1}},u)),$("main",{className:l.content},$("div",{className:l.toolbar}),$(J.a,null,i)))}},ZPUd:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=(0,n(a("8/g6")).default)(r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=i},cpVT:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},mPjd:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));var n=[{title:"Active cases",dataKeyX:"date_string",bars:[{dataKey:"active_cases",fill:"#f9d45c",name:"Active cases",stackId:"a"}]},{title:"Total cases",dataKeyX:"date_string",areas:[{dataKey:"vocsTotal",fill:"#ef8c8c",stroke:"#ef8c8c",name:"Variants of concern",stackId:"a"},{dataKey:"totalNonVOC",fill:"#f9d45c",stroke:"#f9d45c",name:"Vanilla cases",stackId:"a"}]},{title:"New cases",dataKeyX:"date_string",bars:[{dataKey:"new_cases",name:"New cases",fill:"#f9d45c"}],lines:[{dataKey:"new_cases_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"Total deaths",dataKeyX:"date_string",areas:[{dataKey:"Deaths",name:"Total deaths",fill:"#ef8c8c"}]},{title:"New deaths",dataKeyX:"date_string",bars:[{dataKey:"new_deaths",name:"New deaths",fill:"#ef8c8c"}],lines:[{dataKey:"new_deaths_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"New tests",dataKeyX:"date_string",bars:[{dataKey:"Total tests completed in the last day",name:"New tests",fill:"#509ee3"}],lines:[{dataKey:"Under Investigation",name:"Pending tests",dot:!1,strokeWidth:2,stroke:"teal"},{dataKey:"tests_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"Percent positive",dataKeyX:"date_string",bars:[{dataKey:"percent_positive",name:"Percent positive",fill:"#509ee3"}],lines:[{dataKey:"tests_positive_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"Patients hospitalized",dataKeyX:"date_string",bars:[{dataKey:"Number of patients hospitalized with COVID-19",name:"Patients hospitalized",fill:"#ef8c8c"}]},{title:"Patients in ICU",dataKeyX:"date_string",bars:[{dataKey:"Number of patients in ICU on a ventilator due to COVID-19",fill:"#509ee3",name:"ICU (with ventilator)",stackId:"a"},{dataKey:"icu_no_ventilator",fill:"#7172ad",name:"ICU (no ventilator)",stackId:"a"}]}],r=[{dataKeyX:"date_string",title:"Daily vaccines administered",bars:[{dataKey:"previous_day_doses_administered",name:"Daily doses administered",fill:"#509ee3"}],lines:[{dataKey:"new_vaccines_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{dataKeyX:"date_string",title:"Total vaccines administered",areas:[{dataKey:"total_doses_administered",name:"Total doses administered",fill:"#509ee3"}]},{dataKeyX:"date_string",title:"Total people fully vaccinated",areas:[{dataKey:"total_individuals_fully_vaccinated",name:"Total people fully vacincated",fill:"#509ee3"}]}],i={title:"Cases by age group",dataKeyX:"ageGroup",bars:[{dataKey:"deceased",fill:"#ef8c8c",name:"Deceased",stackId:"a"},{dataKey:"active",fill:"#f9d45c",name:"Active",stackId:"a"},{dataKey:"resolved",fill:"green",name:"Resolved",stackId:"a"}]},o=[{title:"Deaths by age group 0-50s",dataKeyX:"month",lines:[{dataKey:"<20-deceased",fill:"#21660b",stroke:"#21660b",name:"<20"},{dataKey:"20s-deceased",fill:"#5f884a",stroke:"#5f884a",name:"20s"},{dataKey:"30s-deceased",fill:"#5b796a",stroke:"#5b796a",name:"30s"},{dataKey:"40s-deceased",fill:"#737a69",stroke:"#737a69",name:"40s"},{dataKey:"50s-deceased",fill:"#000000",stroke:"#000000",name:"50s"}]},{title:"Deaths by age group 50s-90s+",dataKeyX:"month",lines:[{dataKey:"50s-deceased",fill:"#000000",stroke:"#000000",name:"50s"},{dataKey:"60s-deceased",fill:"#3d3cff",stroke:"#3d3cff",name:"60s"},{dataKey:"70s-deceased",fill:"#9552f9",stroke:"#9552f9",name:"70s"},{dataKey:"80s-deceased",fill:"#20e0ff",stroke:"#20e0ff",name:"80s"},{dataKey:"90+-deceased",fill:"#de425b",stroke:"#de425b",name:"90+"}]},{title:"All monthly recoveries",dataKeyX:"month",lines:[{dataKey:"<20-resolved",fill:"#21660b",stroke:"#21660b",name:"<20"},{dataKey:"20s-resolved",fill:"#5f884a",stroke:"#5f884a",name:"20s"},{dataKey:"30s-resolved",fill:"#5b796a",stroke:"#5b796a",name:"30s"},{dataKey:"40s-resolved",fill:"#737a69",stroke:"#737a69",name:"40s"},{dataKey:"50s-resolved",fill:"#000000",stroke:"#000000",name:"50s"},{dataKey:"60s-resolved",fill:"#3d3cff",stroke:"#3d3cff",name:"60s"},{dataKey:"70s-resolved",fill:"#9552f9",stroke:"#9552f9",name:"70s"},{dataKey:"80s-resolved",fill:"#20e0ff",stroke:"#20e0ff",name:"80s"},{dataKey:"90+-resolved",fill:"#de425b",stroke:"#de425b",name:"90+"}]}]},uniG:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=(0,n(a("8/g6")).default)(r.default.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=i}}]);
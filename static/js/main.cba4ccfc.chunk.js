(this["webpackJsonpshakespeare-interpretations"]=this["webpackJsonpshakespeare-interpretations"]||[]).push([[0],{27:function(e,t,A){},28:function(e,t,A){},32:function(e,t,A){},34:function(e,t,A){},35:function(e,t,A){},36:function(e,t,A){},42:function(e,t,A){},43:function(e,t,A){},44:function(e,t,A){},45:function(e,t,A){},46:function(e,t,A){},47:function(e,t,A){"use strict";A.r(t);var n=A(1),c=A.n(n),r=A(19),s=A.n(r),a=(A(27),A(10)),i=A(5),o=(A(28),A(4)),j=A(3),u=A(7),l=A.n(u),d=A(9),b=function(){return fetch("https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/play-titles").then((function(e){return e.ok?e.json():console.log("something went wrong")})).catch((function(e){return e}))},f=function(){return fetch("https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/themes").then((function(e){return e.ok?e.json():console.log("something went wrong")})).catch((function(e){return e}))},g=function(e){return fetch("https://dictionaryapi.com/api/v3/references/learners/json/".concat(e,"?key=c80e6519-7311-4235-9297-4ba6a1b27611")).then((function(e){return e.ok?e.json():console.log("something went wrong")})).catch((function(e){return e}))},h=function(e){return fetch("https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/by-play/".concat(e)).then((function(e){return e.ok?e.json():console.log("something went wrong, res:",e)})).catch((function(e){return e}))},p=function(e){return fetch("https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/by-theme/".concat(e)).then((function(e){return e.ok?e.json():console.log("something went wrong, res:",e)})).catch((function(e){return e}))},O=A(20),x=(A(32),A(0)),w=function(e){var t=e.word,A=Object(n.useState)(""),c=Object(i.a)(A,2),r=c[0],s=c[1],a=function(){var e=Object(d.a)(l.a.mark((function e(){var A;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(t);case 3:A=e.sent,s(A[0].meta["app-shortdef"].def[0]),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t.length>=5&&a()}),[]),Object(x.jsxs)("div",{className:"Word",children:[t.length>=5&&r&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{"data-tip":!0,"data-for":t,className:"definition",children:[" ",Object(x.jsx)("span",{className:"defined word",children:t})]}),Object(x.jsx)(O.a,{id:t,children:Object(x.jsx)("span",{children:r})})]}),t.length<5&&Object(x.jsx)("span",{className:"word",children:t}),t.length>=5&&!r&&Object(x.jsx)("span",{className:"word",children:t})]},t)},m=(A(34),A.p+"static/media/add.31409190.png"),B=A(12),v=A.n(B),I=function(e){var t=e.quote,A=e.addQuote,c=e.type,r=e.disableFavoriteButton,s=e.resetDisabledButton,a=Object(n.useState)(!1),o=Object(i.a)(a,2),j=o[0],u=o[1],l=v()(),d=t.quote.split(" ").map((function(e){return Object(x.jsx)(w,{word:e,id:e},v()())}));Object(n.useEffect)((function(){r&&u(!1),"new"===c&&s()}),[r,c,s]);return Object(x.jsxs)(x.Fragment,{children:["new"===c&&Object(x.jsxs)("div",{className:"Quote",id:l,children:[Object(x.jsx)("div",{className:"words-container",children:d}),Object(x.jsx)("button",{onClick:function(){return A(t.quote,l),void u(!0)},className:"favorite-btn",disabled:j,children:Object(x.jsx)("img",{src:m,alt:"plus sign",className:"saveIcon"})})]},l),"edit"===c&&Object(x.jsx)("div",{className:"Quote",id:l,children:Object(x.jsx)("div",{className:"words-container",children:d})},l)]})},D=(A(35),A(36),function(e){var t,A=e.type;return t="404"===A?Object(x.jsxs)("div",{className:"error-quote",children:[Object(x.jsx)("span",{children:"To be, or not to be, that is the question: "}),Object(x.jsx)("span",{children:"Whether 'tis nobler in the mind to suffer"}),Object(x.jsx)("span",{children:" The slings and arrows of outrageous fortune,"}),Object(x.jsx)("span",{children:"Or to take arms against a sea of troubles "}),Object(x.jsx)("span",{children:" And by opposing end them. "}),Object(x.jsx)("span",{children:" To die\u2014to sleep, No more "}),Object(x.jsx)("h2",{children:"Page Not Found"})]}):Object(x.jsxs)("div",{className:"error-quote",children:[Object(x.jsx)("span",{children:" Oh, conspiracy, are you ashamed to show your face even at night, "}),Object(x.jsx)("span",{children:" when evil things are most free? If so, when it's day, "}),Object(x.jsx)("span",{children:"where are you going to find a cave dark enough to hide your monstrous face? "}),Object(x.jsx)("span",{children:"-Julius Caesar: Act 2 Scene 1 Page 4"}),Object(x.jsx)("h2",{children:"Internal Server Error."})]}),Object(x.jsx)("div",{className:"Error",children:Object(x.jsx)("p",{children:t})})}),Q=function(e){var t=e.handleSubmitInterpretation,A=e.handleSubmitEditInterpretation,c=e.type,r=Object(n.useState)(""),s=Object(i.a)(r,2),a=s[0],j=s[1],u=Object(n.useState)(!0),l=Object(i.a)(u,2),d=l[0],b=l[1],f=Object(n.useState)("Type your interpretation here..."),g=Object(i.a)(f,2),h=g[0],p=g[1];Object(n.useEffect)((function(){"editInterpretation"===c&&function(){var e=JSON.parse(localStorage.getItem("interpretations")),t=window.location.href.split("/").indexOf("edit")+1,A=window.location.href.split("/")[t],n=e.filter((function(e){return parseInt(e.id)===parseInt(A)}));p(n[0].interpretation)}()}),[c]);var O=function(e){"newInterpretation"===c?(t(e,a),j("")):"editInterpretation"===c&&(A(h),p(""))};return Object(x.jsxs)("div",{children:["newInterpretation"===c&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("input",{type:"text",placeholder:"Type your interpretation here...",onChange:function(e){return function(e){e.preventDefault(),j(e.target.value),e.target.value&&b(!1)}(e)},value:a}),Object(x.jsx)("button",{onClick:function(e){return O(e)},className:"submit-btn",disabled:d,children:"SUBMIT INTERPRETATION"}),Object(x.jsx)(o.b,{to:"/my-interpretations",children:Object(x.jsx)("button",{className:"my-interpretations-btn",children:"GO TO MY INTERPRETATIONS"})})]}),"editInterpretation"===c&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("input",{type:"text",placeholder:h||"Type your interpretation here...",value:h,onChange:function(e){return function(e){p(e.target.value),e.target.value&&b(!1)}(e)}}),Object(x.jsxs)("div",{className:"buttonContainer",children:[Object(x.jsx)("button",{onClick:function(){return O()},className:"submit-btn",disabled:d,children:"Submit Intepretation"}),Object(x.jsx)(o.b,{to:"/my-interpretations",children:Object(x.jsx)("span",{children:Object(x.jsx)("button",{className:"my-interpretations-btn",children:"GO TO MY INTERPRETATIONS"})})})]})]})]})},C=function(e){var t=e.addInterpretation,A=e.addQuote,c=e.isEditing,r=e.editInterpretation,s=Object(n.useState)(""),a=Object(i.a)(s,2),j=a[0],u=a[1],b=Object(n.useState)(null),f=Object(i.a)(b,2),g=f[0],O=f[1],w=Object(n.useState)(!1),m=Object(i.a)(w,2),B=m[0],v=m[1],C=Object(n.useState)(null),E=Object(i.a)(C,2),J=E[0],k=E[1],y=function(){var e=Object(d.a)(l.a.mark((function e(t){var A;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t);case 3:A=e.sent,u({quote:A.quote.quote,id:A.quote.id}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),O("no quote found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(l.a.mark((function e(t){var A;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(t);case 3:A=e.sent,u({quote:A.quote.quote,id:A.quote.id}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),O("no quote found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){if(c&&function(){var e=JSON.parse(localStorage.getItem("interpretations")),t=window.location.href.split("/").indexOf("edit")+1,A=window.location.href.split("/")[t],n=e.filter((function(e){return parseInt(e.id)===parseInt(A)}));n||window.location.assign("/badpath"),u({quote:n[0].quote}),k(n[0].id)}(),!c)if(window.location.href.includes("/category/title/")){var e=window.location.href.split("/")[window.location.href.split("/").indexOf("title")+1];S(e)}else if(window.location.href.includes("/category/theme/")){var t=window.location.href.split("/")[window.location.href.split("/").indexOf("theme")+1];y(t)}};Object(n.useEffect)((function(){P()}),[]);return Object(x.jsxs)("div",{className:"InterpretationIndex",children:[!c&&Object(x.jsxs)(x.Fragment,{children:[g&&Object(x.jsx)(D,{type:g}),Object(x.jsxs)("div",{className:"quote-container",children:[Object(x.jsxs)("nav",{children:[Object(x.jsx)("button",{onClick:function(){return P(),void v(!0)},children:"GET A NEW QUOTE"}),Object(x.jsx)(o.b,{to:"/doth_translate/",children:Object(x.jsx)("button",{children:"CHOOSE A NEW CATEGORY"})})]}),j&&Object(x.jsx)(I,{quote:j,addQuote:A,type:"new",disableFavoriteButton:B,resetDisabledButton:function(){v(!1)}})]}),Object(x.jsx)(Q,{handleSubmitInterpretation:function(e,A){t(j,A)},type:"newInterpretation"})]}),c&&Object(x.jsxs)(x.Fragment,{children:[g&&Object(x.jsx)(D,{type:g}),Object(x.jsxs)("div",{className:"quote-container",children:[Object(x.jsx)("nav",{children:Object(x.jsx)(o.b,{to:"/doth_translate/",children:Object(x.jsx)("span",{children:Object(x.jsx)("button",{className:"arrow-transition-button",children:"CHOOSE A NEW CATEGORY"})})})}),j&&Object(x.jsx)(I,{quote:j,type:"edit"})]}),Object(x.jsx)(Q,{handleSubmitEditInterpretation:function(e){r(j,e,J)},type:"editInterpretation"})]})]})},E=(A(42),A(43),A.p+"static/media/bin.a5de3858.png"),J=A.p+"static/media/pencil.acdbed0d.png",k=function(e){var t,A=e.cardData,n=e.type,c=e.deleteQuote;return"favorites"===n?t=Object(x.jsxs)("div",{className:"favorites-container",id:A.id,children:[Object(x.jsx)("p",{children:A.quote}),Object(x.jsx)("button",{onClick:function(){return c(A.id)},children:Object(x.jsx)("img",{src:E,alt:"trash bin",className:"bin"})}),Object(x.jsx)("button",{children:Object(x.jsx)("img",{src:"data:image/png;base64,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",alt:"right arrow",className:"arrow"})})]},A.id):"submissions"===n?t=Object(x.jsxs)("div",{className:"submissions",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"Quote:"}),Object(x.jsxs)("p",{children:[" ",A.quote," "]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{className:"interpretations-container",children:"Your Interpretation:"}),Object(x.jsxs)("p",{children:[" ",A.interpretation," "]}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{children:Object(x.jsx)(o.b,{to:"edit/".concat(A.id),children:Object(x.jsx)("img",{src:J,alt:"pencil",className:"pencil"})})})})]})]}):"theme-options"===n?t=Object(x.jsx)("div",{className:"theme-options",children:Object(x.jsx)("button",{children:A})}):"title-options"===n&&(t=Object(x.jsx)("div",{className:"title-options",children:Object(x.jsx)("button",{children:A})})),Object(x.jsx)("div",{className:"Card",children:t})},y=function(e){var t,A=e.cards,n=e.type,c=e.deleteQuote;return"theme-options"===n?t=A.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(o.b,{to:"/category/theme/".concat(e),children:Object(x.jsx)(k,{cardData:e,type:n})})},e)})):"title-options"===n?t=A.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(o.b,{to:"/category/title/".concat(e),children:Object(x.jsx)(k,{cardData:e,type:n})})},e)})):"submissions"!==n&&"favorites"!==n||(t=A.map((function(e){return Object(x.jsx)(k,{cardData:e,type:n,deleteQuote:c},v()())}))),Object(x.jsxs)("div",{className:"CardsContainer",children:["submissions"===n&&Object(x.jsxs)("div",{className:"interpretations",children:[Object(x.jsx)("h2",{className:"title",children:"My Interpretations"}),t,!t.length&&Object(x.jsx)("button",{children:Object(x.jsx)(o.b,{to:"/",children:"Go back to start interpreting"})})]}),"favorites"===n&&Object(x.jsxs)("div",{className:"favorites",children:[Object(x.jsx)("h2",{className:"title",children:"Saved Quotes"}),t,!t.length&&Object(x.jsx)("button",{children:Object(x.jsx)(o.b,{to:"/doth_translate/",children:"Find a favorite Quote"})})]}),"title-options"===n&&Object(x.jsx)("div",{className:"titles",children:t}),"theme-options"===n&&Object(x.jsx)("div",{className:"themes",children:t})]})},S=(A(44),function(e){var t=e.favorites,A=e.savedInterpretations,n=e.deleteQuote;return Object(x.jsxs)("div",{className:"InterpretationSubmissionIndex",children:[Object(x.jsx)(y,{cards:t,type:"favorites",deleteQuote:n}),Object(x.jsx)(y,{cards:A,type:"submissions"})]})}),P=(A(45),function(){return Object(n.useEffect)((function(){b().then((function(e){var t=JSON.stringify(e.quote);localStorage.setItem("titles",t)})),f().then((function(e){var t=JSON.stringify(e.quote);localStorage.setItem("themes",t)}))}),[]),Object(x.jsxs)("div",{className:"DashboardIndex",children:[Object(x.jsx)("h1",{children:"Let's Get Started!"}),Object(x.jsx)("h2",{children:"I would like to choose a quote by..."}),Object(x.jsxs)("div",{className:"button-container",children:[Object(x.jsx)(o.b,{to:"/category/theme",children:Object(x.jsx)("button",{className:"theme-btn",children:"THEME"})}),Object(x.jsx)(o.b,{to:"/category/title",children:Object(x.jsx)("button",{className:"title-btn",children:"PLAY"})})]})]})}),N=A.p+"static/media/Loading.45fe4ef4.png",G=(A(46),function(e){var t=e.category,A=Object(n.useState)([]),c=Object(i.a)(A,2),r=c[0],s=c[1],a=Object(n.useState)([]),o=Object(i.a)(a,2),j=o[0],u=o[1],g=Object(n.useState)(!0),h=Object(i.a)(g,2),p=h[0],O=h[1],w=Object(n.useState)(null),m=Object(i.a)(w,2),B=m[0],v=m[1],I=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b();case 3:t=e.sent,s(t.quote),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v("no options found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,u(t.quote),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v("no options found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=t.match.params.type;if("theme"===e)if(localStorage.themes){var A=JSON.parse(localStorage.getItem("themes"));u(A),O(!1)}else Q(),O(!1);else if("title"===e)if(localStorage.titles){var n=JSON.parse(localStorage.getItem("titles"));s(n),O(!1)}else I(),O(!1)}),[t.match.params.type]),Object(x.jsxs)("div",{className:"CategoryIndex",children:[B&&Object(x.jsx)(D,{type:B}),p&&Object(x.jsxs)(x.Fragment,{children:[" ",Object(x.jsx)("p",{children:"Loading..."}),Object(x.jsx)("img",{src:N,alt:"old clock "})]}),"theme"===t.match.params.type&&Object(x.jsx)(y,{cards:j,type:"theme-options"}),"title"===t.match.params.type&&Object(x.jsx)(y,{cards:r,type:"title-options"})]})}),T=A.p+"static/media/shakespeare.23aff639.png";var q=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),A=t[0],c=t[1],r=Object(n.useState)([]),s=Object(i.a)(r,2),u=s[0],l=s[1],d=function(e,t){var n={quote:e.quote,interpretation:t,id:Date.now()};c([].concat(Object(a.a)(A),[n]));var r=JSON.stringify([].concat(Object(a.a)(A),[n]));localStorage.setItem("interpretations",r)},b=function(e,t){if(!u.includes(e)){var A={quote:e,id:t};l([].concat(Object(a.a)(u),[A]));var n=JSON.stringify([].concat(Object(a.a)(u),[A]));localStorage.setItem("favorites",n)}},f=function(e){var t=JSON.parse(localStorage.getItem("favorites")).filter((function(t){return t.id!==e})),A=JSON.stringify(Object(a.a)(t));localStorage.setItem("favorites",A),l(t)},g=function(e,t,n){var r={quote:e.quote,interpretation:t,id:n},s=A.filter((function(e){return e.id!==n}));c([].concat(Object(a.a)(s),[r]));var i=JSON.stringify([].concat(Object(a.a)(s),[r]));localStorage.setItem("interpretations",i)};return Object(n.useEffect)((function(){!function(){if(localStorage.favorites){var e=JSON.parse(localStorage.getItem("favorites"));l(e)}if(localStorage.interpretations){var t=JSON.parse(localStorage.getItem("interpretations"));c(t)}}()}),[]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(o.b,{to:"/doth_translate/",children:Object(x.jsx)("h1",{className:"logo",children:" Doth Translate "})}),Object(x.jsxs)(j.c,{children:["\u2003     ",Object(x.jsx)(j.a,{exact:!0,path:"/doth_translate/",render:function(){return Object(x.jsx)(P,{})}}),"\u2003     ",Object(x.jsx)(j.a,{exact:!0,path:"/category/:type",render:function(e){return Object(x.jsx)(G,{category:e})}}),Object(x.jsx)(j.a,{exact:!0,path:"/category/theme/:choice",render:function(e){return Object(x.jsx)(C,{addInterpretation:d,addQuote:b,match:e,isEditing:!1})}}),Object(x.jsx)(j.a,{exact:!0,path:"/category/title/:choice",render:function(e){return Object(x.jsx)(C,{addInterpretation:d,addQuote:b,match:e,isEditing:!1})}}),Object(x.jsx)(j.a,{exact:!0,path:"/my-interpretations",render:function(){return Object(x.jsx)(S,{favorites:u,savedInterpretations:A,deleteQuote:f})}}),Object(x.jsx)(j.a,{exact:!0,path:"/edit/:id",render:function(e){return Object(x.jsx)(C,{addInterpretation:d,addQuote:b,match:e,isEditing:!0,editInterpretation:g})}}),Object(x.jsx)(j.a,{render:function(){return Object(x.jsx)(D,{type:"404"})}})]}),Object(x.jsxs)("nav",{className:"back-to-main",children:[Object(x.jsx)(o.b,{to:"/doth_translate/",children:Object(x.jsx)("img",{src:T,alt:"Shakespeare icon",className:"shakespeare"})}),Object(x.jsx)("div",{className:"more-info",children:Object(x.jsx)("p",{children:"Shakespearean Context Clues App: Grades 5-8"})})]})]})},M=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,50)).then((function(t){var A=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;A(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(o.a,{children:Object(x.jsx)(q,{})})}),document.getElementById("root")),M()}},[[47,1,2]]]);
//# sourceMappingURL=main.cba4ccfc.chunk.js.map
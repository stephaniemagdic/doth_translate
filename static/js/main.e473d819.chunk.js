(this["webpackJsonpshakespeare-interpretations"]=this["webpackJsonpshakespeare-interpretations"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(19),s=n.n(a),i=(n(27),n(10)),o=n(5),u=(n(28),n(4)),l=n(3),j=n(7),d=n.n(j),b=n(9),h=function(){return fetch("https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/play-titles").then((function(e){return e.ok?e.json():console.log("something went wrong")})).catch((function(e){return e}))},p=function(){return fetch("https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/themes").then((function(e){return e.ok?e.json():console.log("something went wrong")})).catch((function(e){return e}))},O=function(e){return fetch("https://dictionaryapi.com/api/v3/references/learners/json/".concat(e,"?key=c80e6519-7311-4235-9297-4ba6a1b27611")).then((function(e){return e.ok?e.json():console.log("something went wrong")})).catch((function(e){return e}))},f=function(e){return fetch("https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/by-play/".concat(e)).then((function(e){return e.ok?e.json():console.log("something went wrong, res:",e)})).catch((function(e){return e}))},x=function(e){return fetch("https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/by-theme/".concat(e)).then((function(e){return e.ok?e.json():console.log("something went wrong, res:",e)})).catch((function(e){return e}))},m=n(20),v=(n(32),n(0)),g=function(e){var t=e.word,n=Object(r.useState)(""),c=Object(o.a)(n,2),a=c[0],s=c[1],i=function(){var e=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(t);case 3:n=e.sent,s(n[0].meta["app-shortdef"].def[0]),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){t.length>=5&&i()}),[]),Object(v.jsxs)("div",{className:"Word",children:[t.length>=5&&a&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{"data-tip":!0,"data-for":t,className:"definition",children:[" ",Object(v.jsx)("span",{className:"defined word",children:t})]}),Object(v.jsx)(m.a,{id:t,children:Object(v.jsx)("span",{children:a})})]}),t.length<5&&Object(v.jsx)("span",{className:"word",children:t}),t.length>=5&&!a&&Object(v.jsx)("span",{className:"word",children:t})]},t)},y=(n(34),n.p+"static/media/add.31409190.png"),N=n(12),w=n.n(N),S=function(e){var t=e.quote,n=e.addQuote,c=e.type,a=e.disableFavoriteButton,s=e.resetDisabledButton,i=Object(r.useState)(!1),u=Object(o.a)(i,2),l=u[0],j=u[1],d=w()(),b=t.quote.split(" ").map((function(e){return Object(v.jsx)(g,{word:e,id:e},w()())}));Object(r.useEffect)((function(){a&&j(!1),"new"===c&&s()}),[a,c,s]);return Object(v.jsxs)(v.Fragment,{children:["new"===c&&Object(v.jsxs)("div",{className:"Quote",id:d,children:[Object(v.jsx)("div",{className:"words-container",children:b}),Object(v.jsx)("button",{onClick:function(){return n(t.quote,d),void j(!0)},className:"favorite-btn",disabled:l,children:Object(v.jsx)("img",{src:y,alt:"plus sign",className:"saveIcon"})})]},d),"edit"===c&&Object(v.jsx)("div",{className:"Quote",id:d,children:Object(v.jsx)("div",{className:"words-container",children:b})},d)]})},I=(n(35),n(36),function(e){var t,n=e.type;return t="404"===n?Object(v.jsxs)("div",{className:"error-quote",children:[Object(v.jsx)("span",{children:"To be, or not to be, that is the question: "}),Object(v.jsx)("span",{children:"Whether 'tis nobler in the mind to suffer"}),Object(v.jsx)("span",{children:" The slings and arrows of outrageous fortune,"}),Object(v.jsx)("span",{children:"Or to take arms against a sea of troubles "}),Object(v.jsx)("span",{children:" And by opposing end them. "}),Object(v.jsx)("span",{children:" To die\u2014to sleep, No more "}),Object(v.jsx)("h2",{children:"Page Not Found"})]}):Object(v.jsxs)("div",{className:"error-quote",children:[Object(v.jsx)("span",{children:" Oh, conspiracy, are you ashamed to show your face even at night, "}),Object(v.jsx)("span",{children:" when evil things are most free? If so, when it's day, "}),Object(v.jsx)("span",{children:"where are you going to find a cave dark enough to hide your monstrous face? "}),Object(v.jsx)("span",{children:"-Julius Caesar: Act 2 Scene 1 Page 4"}),Object(v.jsx)("h2",{children:"Internal Server Error."})]}),Object(v.jsx)("div",{className:"Error",children:Object(v.jsx)("p",{children:t})})}),k=function(e){var t=e.handleSubmitInterpretation,n=e.handleSubmitEditInterpretation,c=e.type,a=Object(r.useState)(""),s=Object(o.a)(a,2),i=s[0],l=s[1],j=Object(r.useState)(!0),d=Object(o.a)(j,2),b=d[0],h=d[1],p=Object(r.useState)("Type your interpretation here..."),O=Object(o.a)(p,2),f=O[0],x=O[1];Object(r.useEffect)((function(){"editInterpretation"===c&&function(){var e=JSON.parse(localStorage.getItem("interpretations")),t=window.location.href.split("/").indexOf("edit")+1,n=window.location.href.split("/")[t],r=e.filter((function(e){return parseInt(e.id)===parseInt(n)}));x(r[0].interpretation)}()}),[c]);var m=function(e){"newInterpretation"===c?(t(e,i),l("")):"editInterpretation"===c&&(n(f),x(""))};return Object(v.jsxs)("div",{children:["newInterpretation"===c&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("input",{type:"text",placeholder:"Type your interpretation here...",onChange:function(e){return function(e){e.preventDefault(),l(e.target.value),e.target.value&&h(!1)}(e)},value:i}),Object(v.jsx)("button",{onClick:function(e){return m(e)},className:"submit-btn",disabled:b,children:"SUBMIT INTERPRETATION"}),Object(v.jsx)(u.b,{to:"/my-interpretations",children:Object(v.jsx)("button",{className:"my-interpretations-btn",children:"GO TO MY INTERPRETATIONS"})})]}),"editInterpretation"===c&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("input",{type:"text",placeholder:f||"Type your interpretation here...",value:f,onChange:function(e){return function(e){x(e.target.value),e.target.value&&h(!1)}(e)}}),Object(v.jsxs)("div",{className:"buttonContainer",children:[Object(v.jsx)("button",{onClick:function(){return m()},className:"submit-btn",disabled:b,children:"Submit Intepretation"}),Object(v.jsx)(u.b,{to:"/my-interpretations",children:Object(v.jsx)("span",{children:Object(v.jsx)("button",{className:"my-interpretations-btn",children:"GO TO MY INTERPRETATIONS"})})})]})]})]})},q=function(e){var t=e.addInterpretation,n=e.addQuote,c=e.isEditing,a=e.editInterpretation,s=Object(r.useState)(""),i=Object(o.a)(s,2),l=i[0],j=i[1],h=Object(r.useState)(null),p=Object(o.a)(h,2),O=p[0],m=p[1],g=Object(r.useState)(!1),y=Object(o.a)(g,2),N=y[0],w=y[1],q=Object(r.useState)(null),E=Object(o.a)(q,2),T=E[0],C=E[1],Q=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(t);case 3:n=e.sent,j({quote:n.quote.quote,id:n.quote.id}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m("no quote found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(t);case 3:n=e.sent,j({quote:n.quote.quote,id:n.quote.id}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m("no quote found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){if(c&&function(){var e=JSON.parse(localStorage.getItem("interpretations")),t=window.location.href.split("/").indexOf("edit")+1,n=window.location.href.split("/")[t],r=e.filter((function(e){return parseInt(e.id)===parseInt(n)}));r||window.location.assign("/badpath"),j({quote:r[0].quote}),C(r[0].id)}(),!c)if(window.location.href.includes("/category/title/")){var e=window.location.href.split("/")[window.location.href.split("/").indexOf("title")+1];J(e)}else if(window.location.href.includes("/category/theme/")){var t=window.location.href.split("/")[window.location.href.split("/").indexOf("theme")+1];Q(t)}};Object(r.useEffect)((function(){F()}),[]);return Object(v.jsxs)("div",{className:"InterpretationIndex",children:[!c&&Object(v.jsxs)(v.Fragment,{children:[O&&Object(v.jsx)(I,{type:O}),Object(v.jsxs)("div",{className:"quote-container",children:[Object(v.jsxs)("nav",{children:[Object(v.jsx)("button",{onClick:function(){return F(),void w(!0)},children:"GET A NEW QUOTE"}),Object(v.jsx)(u.b,{to:"/doth_translate/",children:Object(v.jsx)("button",{children:"CHOOSE A NEW CATEGORY"})})]}),l&&Object(v.jsx)(S,{quote:l,addQuote:n,type:"new",disableFavoriteButton:N,resetDisabledButton:function(){w(!1)}})]}),Object(v.jsx)(k,{handleSubmitInterpretation:function(e,n){t(l,n)},type:"newInterpretation"})]}),c&&Object(v.jsxs)(v.Fragment,{children:[O&&Object(v.jsx)(I,{type:O}),Object(v.jsxs)("div",{className:"quote-container",children:[Object(v.jsx)("nav",{children:Object(v.jsx)(u.b,{to:"/doth_translate/",children:Object(v.jsx)("span",{children:Object(v.jsx)("button",{className:"arrow-transition-button",children:"CHOOSE A NEW CATEGORY"})})})}),l&&Object(v.jsx)(S,{quote:l,type:"edit"})]}),Object(v.jsx)(k,{handleSubmitEditInterpretation:function(e){a(l,e,T)},type:"editInterpretation"})]})]})},E=(n(42),n(43),n.p+"static/media/bin.a5de3858.png"),T=n.p+"static/media/pencil.acdbed0d.png",C=function(e){var t,n=e.cardData,r=e.type,c=e.deleteQuote;return"favorites"===r?t=Object(v.jsxs)("div",{className:"favorites-container",id:n.id,children:[Object(v.jsx)("p",{children:n.quote}),Object(v.jsx)("button",{onClick:function(){return c(n.id)},children:Object(v.jsx)("img",{src:E,alt:"trash bin",className:"bin"})})]},n.id):"submissions"===r?t=Object(v.jsxs)("div",{className:"submissions",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:"Quote:"}),Object(v.jsxs)("p",{children:[" ",n.quote," "]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{className:"interpretations-container",children:"Your Interpretation:"}),Object(v.jsxs)("p",{children:[" ",n.interpretation," "]}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{children:Object(v.jsx)(u.b,{to:"edit/".concat(n.id),children:Object(v.jsx)("img",{src:T,alt:"pencil",className:"pencil"})})})})]})]}):"theme-options"===r?t=Object(v.jsx)("div",{className:"theme-options",children:Object(v.jsx)("button",{children:n})}):"title-options"===r&&(t=Object(v.jsx)("div",{className:"title-options",children:Object(v.jsx)("button",{children:n})})),Object(v.jsx)("div",{className:"Card",children:t})},Q=function(e){var t,n=e.cards,r=e.type,c=e.deleteQuote;return"theme-options"===r?t=n.map((function(e){return Object(v.jsx)("div",{children:Object(v.jsx)(u.b,{to:"/category/theme/".concat(e),children:Object(v.jsx)(C,{cardData:e,type:r})})},e)})):"title-options"===r?t=n.map((function(e){return Object(v.jsx)("div",{children:Object(v.jsx)(u.b,{to:"/category/title/".concat(e),children:Object(v.jsx)(C,{cardData:e,type:r})})},e)})):"submissions"!==r&&"favorites"!==r||(t=n.map((function(e){return Object(v.jsx)(C,{cardData:e,type:r,deleteQuote:c},w()())}))),Object(v.jsxs)("div",{className:"CardsContainer",children:["submissions"===r&&Object(v.jsxs)("div",{className:"interpretations",children:[Object(v.jsx)("h2",{className:"title",children:"My Interpretations"}),t,!t.length&&Object(v.jsx)("button",{children:Object(v.jsx)(u.b,{to:"/doth_translate/",children:"Go back to start interpreting"})})]}),"favorites"===r&&Object(v.jsxs)("div",{className:"favorites",children:[Object(v.jsx)("h2",{className:"title",children:"Saved Quotes"}),t,!t.length&&Object(v.jsx)("button",{children:Object(v.jsx)(u.b,{to:"/doth_translate/",children:"Find a favorite Quote"})})]}),"title-options"===r&&Object(v.jsx)("div",{className:"titles",children:t}),"theme-options"===r&&Object(v.jsx)("div",{className:"themes",children:t})]})},J=(n(44),function(e){var t=e.favorites,n=e.savedInterpretations,r=e.deleteQuote;return Object(v.jsxs)("div",{className:"InterpretationSubmissionIndex",children:[Object(v.jsx)(Q,{cards:t,type:"favorites",deleteQuote:r}),Object(v.jsx)(Q,{cards:n,type:"submissions"})]})}),F=(n(45),function(){return Object(r.useEffect)((function(){h().then((function(e){var t=JSON.stringify(e.quote);localStorage.setItem("titles",t)})),p().then((function(e){var t=JSON.stringify(e.quote);localStorage.setItem("themes",t)}))}),[]),Object(v.jsxs)("div",{className:"DashboardIndex",children:[Object(v.jsx)("h1",{children:"Let's Get Started!"}),Object(v.jsx)("h2",{children:"I would like to choose a quote by..."}),Object(v.jsxs)("div",{className:"button-container",children:[Object(v.jsx)(u.b,{to:"/category/theme",children:Object(v.jsx)("button",{className:"theme-btn",children:"THEME"})}),Object(v.jsx)(u.b,{to:"/category/title",children:Object(v.jsx)("button",{className:"title-btn",children:"PLAY"})})]})]})}),A=n.p+"static/media/Loading.45fe4ef4.png",D=(n(46),function(e){var t=e.category,n=Object(r.useState)([]),c=Object(o.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)([]),u=Object(o.a)(i,2),l=u[0],j=u[1],O=Object(r.useState)(!0),f=Object(o.a)(O,2),x=f[0],m=f[1],g=Object(r.useState)(null),y=Object(o.a)(g,2),N=y[0],w=y[1],S=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h();case 3:t=e.sent,s(t.quote),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),w("no options found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:t=e.sent,j(t.quote),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),w("no options found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=t.match.params.type;if("theme"===e)if(localStorage.themes){var n=JSON.parse(localStorage.getItem("themes"));j(n),m(!1)}else k(),m(!1);else if("title"===e)if(localStorage.titles){var r=JSON.parse(localStorage.getItem("titles"));s(r),m(!1)}else S(),m(!1)}),[t.match.params.type]),Object(v.jsxs)("div",{className:"CategoryIndex",children:[N&&Object(v.jsx)(I,{type:N}),x&&Object(v.jsxs)(v.Fragment,{children:[" ",Object(v.jsx)("p",{children:"Loading..."}),Object(v.jsx)("img",{src:A,alt:"old clock "})]}),"theme"===t.match.params.type&&Object(v.jsx)(Q,{cards:l,type:"theme-options"}),"title"===t.match.params.type&&Object(v.jsx)(Q,{cards:a,type:"title-options"})]})}),G=n.p+"static/media/shakespeare.23aff639.png";var P=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(o.a)(a,2),j=s[0],d=s[1],b=function(e,t){var r={quote:e.quote,interpretation:t,id:Date.now()};c([].concat(Object(i.a)(n),[r]));var a=JSON.stringify([].concat(Object(i.a)(n),[r]));localStorage.setItem("interpretations",a)},h=function(e,t){if(!j.includes(e)){var n={quote:e,id:t};d([].concat(Object(i.a)(j),[n]));var r=JSON.stringify([].concat(Object(i.a)(j),[n]));localStorage.setItem("favorites",r)}},p=function(e){var t=JSON.parse(localStorage.getItem("favorites")).filter((function(t){return t.id!==e})),n=JSON.stringify(Object(i.a)(t));localStorage.setItem("favorites",n),d(t)},O=function(e,t,r){var a={quote:e.quote,interpretation:t,id:r},s=n.filter((function(e){return e.id!==r}));c([].concat(Object(i.a)(s),[a]));var o=JSON.stringify([].concat(Object(i.a)(s),[a]));localStorage.setItem("interpretations",o)};return Object(r.useEffect)((function(){!function(){if(localStorage.favorites){var e=JSON.parse(localStorage.getItem("favorites"));d(e)}if(localStorage.interpretations){var t=JSON.parse(localStorage.getItem("interpretations"));c(t)}}()}),[]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(u.b,{to:"/doth_translate/",children:Object(v.jsx)("h1",{className:"logo",children:" Doth Translate "})}),Object(v.jsxs)(l.c,{children:["\u2003     ",Object(v.jsx)(l.a,{exact:!0,path:"/doth_translate/",render:function(){return Object(v.jsx)(F,{})}}),"\u2003     ",Object(v.jsx)(l.a,{exact:!0,path:"/category/:type",render:function(e){return Object(v.jsx)(D,{category:e})}}),Object(v.jsx)(l.a,{exact:!0,path:"/category/theme/:choice",render:function(e){return Object(v.jsx)(q,{addInterpretation:b,addQuote:h,match:e,isEditing:!1})}}),Object(v.jsx)(l.a,{exact:!0,path:"/category/title/:choice",render:function(e){return Object(v.jsx)(q,{addInterpretation:b,addQuote:h,match:e,isEditing:!1})}}),Object(v.jsx)(l.a,{exact:!0,path:"/my-interpretations",render:function(){return Object(v.jsx)(J,{favorites:j,savedInterpretations:n,deleteQuote:p})}}),Object(v.jsx)(l.a,{exact:!0,path:"/edit/:id",render:function(e){return Object(v.jsx)(q,{addInterpretation:b,addQuote:h,match:e,isEditing:!0,editInterpretation:O})}}),Object(v.jsx)(l.a,{path:"*",render:function(){return Object(v.jsx)(I,{type:"404"})}})]}),Object(v.jsxs)("nav",{className:"back-to-main",children:[Object(v.jsx)(u.b,{to:"/doth_translate/",children:Object(v.jsx)("img",{src:G,alt:"Shakespeare icon",className:"shakespeare"})}),Object(v.jsx)("div",{className:"more-info",children:Object(v.jsx)("p",{children:"Shakespearean Context Clues App: Grades 5-8"})})]})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(u.a,{children:Object(v.jsx)(P,{})})}),document.getElementById("root")),R()}},[[47,1,2]]]);
//# sourceMappingURL=main.e473d819.chunk.js.map
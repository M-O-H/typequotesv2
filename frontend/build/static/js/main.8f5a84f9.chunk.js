(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{69:function(n,t,e){},79:function(n,t,e){},80:function(n,t,e){},81:function(n,t,e){"use strict";e.r(t);var c,r,a,i,o,s,l,u,d,j,b,f,m,p,h,x,O,g,v,y,w,k,N,B,q,S,E,z,C,L,I,W,D,F,J,T,A,M,R=e(1),G=e(38),_=e.n(G),H=e(5),K=e.n(H),P=e(9),Q=e(10),U=e(2),V=e(44),X=function(n,t){var e;(e=n.classList).remove.apply(e,Object(V.a)(t)),n.classList.add(t[0])},Y=e(3),Z=e(19),$=e.n(Z),nn=e(0),tn=Y.a.div(c||(c=Object(U.a)(["\n\tpadding: 0em;\n\twidth: 100%;\n\tdisplay:flex;\n\t// justify-content: center;\n"]))),en=Y.a.div(r||(r=Object(U.a)(["\n\tcolor: var(\t--text-color);\n\tpadding: 1.5rem 2rem;\n\tfont-size: 4rem;\n\tmargin: .5rem;\n"]))),cn=Y.a.div(a||(a=Object(U.a)(["\n\tdisplay: flex;\n\tfont-family: var(--quoteBox-fontFamily);\n\tbackground-color: var(--quoteBox-background);\n\tjustify-content: center;\n\talign-items: center;\n\tflex-directoin: column;\n"]))),rn=function(n){var t=n.result,e=function(){var n=Object(P.a)(K.a.mark((function n(){return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.id){n.next=3;break}return n.next=3,$.a.post("/result",t).catch((function(n){if(n)throw n}));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(R.useEffect)((function(){document.onkeydown=null,e()}),[t]),Object(nn.jsxs)(tn,{children:[Object(nn.jsx)(cn,{children:Object(nn.jsx)(en,{className:"wpm",children:t.wpm})}),Object(nn.jsx)(cn,{children:Object(nn.jsx)(en,{className:"acc",children:t.acc})})]})},an=e(16),on=e.n(an),sn=(e(69),0),ln=null,un=0,dn=0,jn=0,bn=Y.a.div(i||(i=Object(U.a)(["\ndisplay: flex;\nborder-radius; 10px;\njustify-content: center;\nalign-items: center;\nflex-direction: column;\n"]))),fn=Y.a.div(o||(o=Object(U.a)(["\nalign-items: center;\ndisplay: grid;\ngrid-row-flow: column;\ngap: 2rem;\nwidth: fit-content;\nfont-family: var(--quoteBox-fontFamily);\nbackground-color: var(--quoteBox-background);\ncolor: var(--quoteBox-text-color);\ntransition: background 500ms, color 700ms ease-in-out;\npadding: 1em;\nborder-radius: .6em;\n"]))),mn=Y.a.div(s||(s=Object(U.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 100%;\nheight: 100%;"]))),pn=Y.a.div(l||(l=Object(U.a)(["\n\tpadding-top: .4rem;\n"]))),hn=Y.a.button(u||(u=Object(U.a)(["\nbackground: none;\ncolor: #E9E1E1;\nborder: none;\nmargin-left: auto;\n"]))),xn=Y.a.button(d||(d=Object(U.a)(["\nfont-family: var(--quoteBox-fontFamily);\nbackground-color: var(--quoteBox-background);\ncolor: var(\t--text-color);\nborder: none;\n"]))),On=Y.a.div(j||(j=Object(U.a)(["\n\tdisplay: flex;\n\tcolor: #E9E1E1;\n\tpadding: .4em 0;\n"]))),gn=Y.a.div(b||(b=Object(U.a)(["\ndisplay: grid;\ngrid-template-columns: repeat(2, 1fr);\ngap: 1.5em;\n"]))),vn=function(n,t){var e=document.querySelectorAll("span"),c=e[dn];if(e[0].style.backgroundColor="initial",ln||(ln=new Date),8===n.keyCode&&dn>0?(--sn,--jn,c.classList.remove("cursor"),(c=e[--dn]).classList.remove("incorrect","done")):jn>=93?console.log("inc"):n.key===c.innerText?(++sn,jn=0,X(c,["done","incorrect","cursor"]),c=e[++dn]):n.key!==c.innerText&&(++un,++jn,X(c,["incorrect","done","cursor"]),c=e[++dn]),dn>=t.length){var r=function(n,t,e,c,r){var a=(new Date-e)/1e3,i=t.split(" ").length,o=Math.floor(i/a*60),s=Math.floor((c-r)/n.length*100);return{wpm:o,accuracy:s>0?s:0,numberOfWords:i}}(e,t,ln,sn,un);return r}c.classList.add("cursor")},yn=function(){dn=0,sn=0,ln=null,un=0,dn=0;var n=Object(R.useState)((function(){return""})),t=Object(Q.a)(n,2),e=t[0],c=t[1],r=Object(R.useState)((function(){return!0})),a=Object(Q.a)(r,2),i=a[0],o=a[1],s=Object(R.useState)((function(){return null})),l=Object(Q.a)(s,2),u=l[0],d=l[1],j=Object(R.useState)((function(){return"off"})),b=Object(Q.a)(j,2),f=b[0],m=b[1],p=function(){var n=Object(P.a)(K.a.mark((function n(){return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m("off"),o(!0),d(null),n.next=5,$.a.get("https://api.quotable.io/random").then((function(n){o(!1),c(n.data.content)})).catch((function(n){throw n}));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(n){n.target.blur(),p()};i||(document.onkeydown=function(n){"off"===f&&m("on");var t,c=vn(n,e);c&&$()("/user").then((function(n){t={id:n.data.id,wpm:c.wpm,acc:c.accuracy},d(t)})).then((function(n){n&&(t={wpm:c.wpm,acc:c.accuracy},d(t))}))}),Object(R.useEffect)((function(){return d(null),p(),function(){return document.onkeydown=null}}),[]);return Object(nn.jsx)(bn,{children:!0===i?Object(nn.jsx)(mn,{className:"SpinnerWrapper",children:Object(nn.jsx)(on.a,{className:"spinner",animation:"border"})}):null==u?Object(nn.jsx)("div",{children:Object(nn.jsxs)(fn,{children:[Object(nn.jsx)(pn,{children:e.split("").map((function(n,t){return Object(nn.jsx)("span",{className:"char",children:n.toLowerCase()},t)}))}),Object(nn.jsxs)(On,{children:[Object(nn.jsxs)(gn,{children:[Object(nn.jsxs)("div",{children:["Game / ",f]}),Object(nn.jsxs)("div",{children:["Words / ",e.split(" ").length]})]}),Object(nn.jsxs)(hn,{type:"submit",tabindex:"-1",onClick:h,className:"disabled",children:["Next quote",Object(nn.jsx)("span",{className:"iconify","data-icon":"grommet-icons:form-next-link"})]})]})]})}):Object(nn.jsxs)("div",{children:[Object(nn.jsx)(rn,{result:u}),Object(nn.jsxs)(xn,{type:"submit",tabindex:"-1",onClick:h,className:"disabled",children:["Next quote",Object(nn.jsx)("span",{className:"iconify","data-icon":"grommet-icons:form-next-link"})]})]})})},wn=e(13),kn=Y.a.div(f||(f=Object(U.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding: 0 2rem;\n"]))),Nn=Y.a.div(m||(m=Object(U.a)(["\nfont-size: 1rem;\nalign-items: center;\ndisplay: grid;\ngrid-auto-flow: column;\ngap: 2rem;\nwidth: fit-content;\n"]))),Bn=Y.a.div(p||(p=Object(U.a)(['\nfont-size: 2em;\nfont-family:  "Roboto Mono";\ncolor: lightgoldenrodyellow;\n']))),qn=Y.a.span(h||(h=Object(U.a)(["\n\tcolor: var(--icons-text-color);\n\tbackground-color: var(--icons-background);\n\tcursor: pointer;\n\tfont-size: 1.7em;\n"]))),Sn=Y.a.span(x||(x=Object(U.a)(["\n\tcolor: var(--icons-text-color);\n\tbackground-color: var(--icons-background);\n\tcursor: pointer;\n\tfont-size: 1.5em;\n"]))),En=function(){return Object(nn.jsxs)(kn,{children:[Object(nn.jsxs)(Bn,{children:[Object(nn.jsx)("div",{children:"Type"}),Object(nn.jsx)("div",{children:"quotes"})]}),Object(nn.jsxs)(Nn,{children:[Object(nn.jsx)(wn.b,{to:"/",children:Object(nn.jsx)(qn,{className:"iconify","data-icon":"fluent:keyboard-layout-split-24-filled"})}),Object(nn.jsx)(wn.b,{to:"/settings",children:Object(nn.jsx)(qn,{className:"iconify","data-icon":"fluent:dark-theme-24-filled"})}),Object(nn.jsx)(wn.b,{to:"/profile",children:Object(nn.jsx)(qn,{className:"iconify","data-icon":"carbon:user-avatar-filled"})}),Object(nn.jsx)(wn.b,{to:"/rank",children:Object(nn.jsx)(Sn,{className:"iconify","data-icon":"fa-solid:crown"})})]})]})},zn=Y.a.div(O||(O=Object(U.a)(["\nheight: 100%;\n"]))),Cn=Y.a.div(g||(g=Object(U.a)(["\nalign-self: start;\ntext-align: center;\nfont-size: 1rem;\npadding: .4rem;\ncursor: pointer;\ncolor: #fff;\nbox-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;\nborder-radius: 4px;\ntransition: all 500ms;\n"]))),Ln=Y.a.div(v||(v=Object(U.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n"]))),In=Y.a.div(y||(y=Object(U.a)(["\ndisplay: grid;\nalign-items: center;\ngrid-template-columns: repeat(3, 1fr);\ngrid-template-columns: repeat(3, minmax(200px, 1fr));\ngrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\ngap: 1rem;\npadding: 0 3rem;\nwidth: 100%;\n"]))),Wn=Y.a.div(w||(w=Object(U.a)(["\n\tfont-size: 20px;\n\tpadding: 2rem;\n\ttext-align: center;\n\tcolor: var(--text-color)\n"]))),Dn=function(){var n=Object(R.useRef)("default"),t=function(t){document.body.classList.replace(n.current,t),n.current=t,localStorage.setItem("theme",n.current)};return Object(nn.jsxs)(zn,{children:[Object(nn.jsx)(Wn,{children:"Themes"}),Object(nn.jsx)(Ln,{children:Object(nn.jsxs)(In,{children:[Object(nn.jsx)(Cn,{className:"DefaultBtn",onClick:function(){return t("default")},children:"Default"}),Object(nn.jsx)(Cn,{className:"ishtarBtn",onClick:function(){return t("ishtar")},children:"Ishtar"}),Object(nn.jsx)(Cn,{className:"bentoBtn",onClick:function(){return t("bento")},children:"bento"}),Object(nn.jsx)(Cn,{className:"archBtn",onClick:function(){return t("arch")},children:"Arch"}),Object(nn.jsx)(Cn,{className:"campingBtn",onClick:function(){return t("camping")},children:"camping"})]})})]})},Fn=Y.a.div(k||(k=Object(U.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tbackground: var(--quoteBox-background);\n"]))),Jn=Y.a.h1(N||(N=Object(U.a)(["\n\tcolor: var(--text-color);\n"]))),Tn=(Y.a.img(B||(B=Object(U.a)(["\n\twidth: 3em;\n\theight: 3em;\n"]))),Y.a.span(q||(q=Object(U.a)(["\nbackground: lightblue;\npadding: 3rem;\nborder-radius: 5rem;\n"]))),function(n,t){var e=n.props,c=t.serialize,r=void 0===c?JSON.stringify:c,a=t.deserialize;void 0===a&&JSON.parse;return Object(nn.jsxs)(nn.Fragment,{children:[Object(nn.jsx)("img",{width:"25%",src:e.img}),Object(nn.jsx)(Fn,{}),Object(nn.jsx)(Jn,{children:e.username}),Object(nn.jsx)(Jn,{children:r(e.wpm)}),Object(nn.jsx)(Jn,{children:r(e.rank)})]})}),An=Y.a.div(S||(S=Object(U.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-item: center;\n\tpadding: 0 3em;\n"]))),Mn=Y.a.div(E||(E=Object(U.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 100%;\nheight: 100%;"]))),Rn=function(){var n=Object(R.useState)((function(){return null})),t=Object(Q.a)(n,2),e=t[0],c=t[1],r=function(){var n=Object(P.a)(K.a.mark((function n(){return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/userInfo").then((function(n){return n.json()})).then((function(n){return c(n)})).catch((function(n){return console.log(n)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(R.useEffect)((function(){r()}),[]),Object(nn.jsx)(An,{children:null===e?Object(nn.jsx)(Mn,{className:"SpinnerWrapper",children:Object(nn.jsx)(on.a,{className:"spinner",animation:"border"})}):Object(nn.jsx)(Tn,{props:e})})},Gn=e(4),_n=e(43),Hn=e.n(_n),Kn=Y.a.div(z||(z=Object(U.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-item: center;\n\tpadding: 3rem;\n"]))),Pn=function(){var n=Object(P.a)(K.a.mark((function n(){return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"http://localhost:3001/auth/google",window.open("http://localhost:3001/auth/google","_self","width=500, height=600");case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Qn=function(){var n=Object(R.useState)((function(){return!1})),t=Object(Q.a)(n,2),e=t[0],c=t[1],r=function(){var n=Object(P.a)(K.a.mark((function n(){return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/user").then((function(n){return n.json()})).then((function(n){c("user not found"!==n)})).catch((function(n){n&&c(!1)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(R.useEffect)((function(){r()}),[e]),Object(nn.jsx)(Kn,{children:e?Object(nn.jsx)(Gn.a,{to:"/profile"}):Object(nn.jsx)(Hn.a,{onClick:Pn,style:{width:"17em"}})})},Un=Y.a.div(C||(C=Object(U.a)(["\n"]))),Vn=Y.a.div(L||(L=Object(U.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(5, 1fr);\n\tbackground: var(--quoteBox-background);\n\talign-items: center;\n\tborder-radius: .6em;\n\tmargin: 1em 0;\n\tpadding: .6em 0; \n"]))),Xn=Y.a.div(I||(I=Object(U.a)(["\n\ttext-align: center;\n\tfont-size: .9rem;\n\tcolor: #fff;\n"]))),Yn=Y.a.img(W||(W=Object(U.a)(["\n\twidth: 3em;\n\theight: 3em;\n"]))),Zn=Y.a.div(D||(D=Object(U.a)(["\ndisplay: grid;\ngrid-template-columns: repeat(5, 1fr);\nalign-items: center;\nborder-radius: .7em;\n"]))),$n=Y.a.div(F||(F=Object(U.a)(["\n\tfont-size: 1rem;\n\ttext-align: center;\n\tcolor: #fff;\n\tcolor: var(\t--quoteBox-text-color)\n"]))),nt=Y.a.div(J||(J=Object(U.a)(["\n\tbackground-color: var--quoteBox-background);\n\theight: 100%;\n\t"]))),tt=Y.a.div(T||(T=Object(U.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 100%;\nheight: 100%;\n"]))),et=function(){var n=Object(R.useState)((function(){return null})),t=Object(Q.a)(n,2),e=t[0],c=t[1],r=1,a=function(){var n=Object(P.a)(K.a.mark((function n(){return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:fetch("/board").then((function(n){if(n.ok)return n.json()})).then((function(n){return c(n)})).catch((function(n){if(n)throw n}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(R.useEffect)((function(){a()}),[]),Object(nn.jsxs)(Un,{children:[Object(nn.jsxs)(Zn,{children:[Object(nn.jsx)($n,{children:"#"}),Object(nn.jsx)($n,{}),Object(nn.jsx)($n,{children:"username"}),Object(nn.jsx)($n,{children:"rank"}),Object(nn.jsx)($n,{children:"wpm"})]}),Object(nn.jsx)(nt,{children:null===e?Object(nn.jsx)(tt,{className:"SpinnerWrapper",children:Object(nn.jsx)(on.a,{className:"spinner",animation:"border"})}):e.map((function(n){return Object(nn.jsx)("div",{children:Object(nn.jsxs)(Vn,{className:"box",children:[Object(nn.jsx)(Xn,{children:r++}),Object(nn.jsx)(Xn,{children:Object(nn.jsx)(Yn,{src:n.img})}),Object(nn.jsx)(Xn,{children:n.username}),Object(nn.jsx)(Xn,{children:n.rank}),Object(nn.jsx)(Xn,{children:n.wpm})]})},n.googleId)}))})]})},ct=(e(79),e(80),Y.a.div(A||(A=Object(U.a)(["\nmax-width: 1000px;\nwidth: 100%;\ndisplay: grid;\ngrid-template-rows: auto 1fr auto;\ngrid-auto-flow: row;\ngap: 1em;\nmin-height: 100vh;\npadding: 2rem;\n"]))));Y.a.div(M||(M=Object(U.a)(["\n  color: #fff;\n"])));var rt=function(){var n=Object(R.useState)((function(){return!1})),t=Object(Q.a)(n,2),e=t[0],c=t[1],r=function(){var n=Object(P.a)(K.a.mark((function n(){return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/user").then((function(n){return n.json()})).then((function(n){c("no user login"!==n)})).catch((function(n){n&&c("server error")}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(R.useEffect)((function(){r()}),[]),Object(nn.jsx)("div",{className:"App",children:Object(nn.jsx)(wn.a,{children:Object(nn.jsxs)(ct,{children:[Object(nn.jsx)(En,{}),Object(nn.jsxs)(Gn.d,{children:[Object(nn.jsx)(Gn.b,{path:"/",exact:!0,component:yn}),Object(nn.jsx)(Gn.b,{path:"/settings",exact:!0,component:Dn}),Object(nn.jsx)(Gn.b,{path:"/failed",children:"Error loging in. please try again later!"}),Object(nn.jsx)(Gn.b,{path:"/success",exact:!0,children:"thanks for login in "}),Object(nn.jsx)(Gn.b,{path:"/login",exact:!0,component:Qn}),Object(nn.jsx)(Gn.b,{path:"/rank",exact:!0,component:et}),!0===e?Object(nn.jsx)(Gn.b,{path:"/profile",exact:!0,component:Rn}):Object(nn.jsx)(Gn.a,{to:"/login"})]})]})})})},at=localStorage.getItem("theme"),it=function(){return at&&document.body.classList.add(at),Object(nn.jsx)(rt,{})};_.a.render(Object(nn.jsx)(it,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.8f5a84f9.chunk.js.map
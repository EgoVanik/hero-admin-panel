(this.webpackJsonphero_admin_panel=this.webpackJsonphero_admin_panel||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(4),i=n.n(a),s=n(2),o=n(17),l=n(19),u=n(7),d=n.n(u),j=n(11),b=function(){return{request:function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r,c,a,i,s=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"GET",r=s.length>2&&void 0!==s[2]?s[2]:null,c=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"application/json"},e.prev=3,e.next=6,fetch(t,{method:n,body:r,headers:c});case 6:if((a=e.sent).ok){e.next=9;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 9:return e.next=11,a.json();case 11:return i=e.sent,e.abrupt("return",i);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}()}},A=n(36),h=n(38),f=n(3),g=n(10),p=Object(f.c)(),m=p.getInitialState({heroesLoadingStatus:"idle"}),x=Object(f.b)("heroes/fetchHeroes",(function(){return(0,b().request)("https://hero-panel.herokuapp.com/heroes")})),O=Object(f.d)({name:"heroes",initialState:m,reducers:{heroCreated:function(e,t){p.addOne(e,t.payload)},heroDeleted:function(e,t){p.removeOne(e,t.payload)}},extraReducers:function(e){e.addCase(x.pending,(function(e){e.heroesLoadingStatus="loading"})).addCase(x.fulfilled,(function(e,t){e.heroesLoadingStatus="idle",p.setAll(e,t.payload)})).addCase(x.rejected,(function(e){e.heroesLoadingStatus="error"})).addDefaultCase((function(){}))}}),I=O.actions,E=O.reducer,v=p.getSelectors((function(e){return e.heroes})).selectAll,N=Object(g.a)((function(e){return e.filters.activeFilter}),v,(function(e,t){return"all"===e?t:t.filter((function(t){return t.element===e}))})),S=E,C=(I.heroesFetching,I.heroesFetched,I.heroesFetchingError,I.heroCreated),R=I.heroDeleted,B=n(1),k=function(e){var t,n=e.name,r=e.description,c=e.element,a=e.onDelete;switch(c){case"fire":t="bg-danger bg-gradient";break;case"water":t="bg-primary bg-gradient";break;case"wind":t="bg-success bg-gradient";break;case"earth":t="bg-secondary bg-gradient";break;default:t="bg-warning bg-gradient"}return Object(B.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-white ".concat(t),children:[Object(B.jsx)("img",{src:"data:image/jpeg;base64,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",className:"img-fluid w-25 d-inline",alt:"unknown hero",style:{objectFit:"cover"}}),Object(B.jsxs)("div",{className:"card-body",children:[Object(B.jsx)("h3",{className:"card-title",children:n}),Object(B.jsx)("p",{className:"card-text",children:r})]}),Object(B.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light",children:Object(B.jsx)("button",{type:"button",className:"btn-close btn-close","aria-label":"Close",onClick:a})})]})},L=function(){return Object(B.jsx)("div",{className:"spinner-border mx-auto mt-5",role:"status",children:Object(B.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},F=(n(30),function(){var e=Object(s.c)(N),t=Object(s.c)((function(e){return e.heroes.heroesLoadingStatus})),n=Object(s.b)(),c=b().request;Object(r.useEffect)((function(){n(x())}),[]);var a=Object(r.useCallback)((function(e){c("https://hero-panel.herokuapp.com/heroes/".concat(e),"DELETE").then((function(t){return console.log(t,"Deleted id: ".concat(e))})).then(n(R(e))).catch((function(e){return console.log(e)}))}),[c]);if("loading"===t)return Object(B.jsx)(L,{});if("error"===t)return Object(B.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var i,u=0===(i=e).length?Object(B.jsx)(A.a,{timeout:0,classNames:"hero",children:Object(B.jsx)("h5",{className:"text-center mt-5",children:"\u0413\u0435\u0440\u043e\u0435\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"})}):i.map((function(e){var t=e.id,n=Object(l.a)(e,["id"]);return Object(B.jsx)(A.a,{timeout:500,classNames:"hero",children:Object(B.jsx)(k,Object(o.a)(Object(o.a)({},n),{},{onDelete:function(){return a(t)}}))},t)}));return Object(B.jsx)(h.a,{component:"ul",children:u})}),Q=n(13),w=n(37),H=Object(f.c)(),D=H.getInitialState({filtersLoadingStatus:"idle",activeFilter:"all"}),y=Object(f.b)("filters/fetchFilters",Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b(),n=t.request,e.next=3,n("https://hero-panel.herokuapp.com/filters");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))),K=Object(f.d)({name:"filters",initialState:D,reducers:{filtersChanged:function(e,t){e.activeFilter=t.payload}},extraReducers:function(e){e.addCase(y.pending,(function(e){e.filtersLoadingStatus="loading"})).addCase(y.fulfilled,(function(e,t){e.filtersLoadingStatus="idle",H.setAll(e,t.payload)})).addCase(y.rejected,(function(e){e.filtersLoadingStatus="error"})).addDefaultCase((function(){}))}}),G=K.actions,P=K.reducer,U=H.getSelectors((function(e){return e.filters})).selectAll,Z=P,q=(G.filtersFetching,G.filtersFetched,G.filtersFetchingError,G.filtersChanged),J=function(){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}},X=Object(f.a)({reducer:{heroes:S,filters:Z},middleware:function(e){return e().concat(J)},devTools:!1}),M=function(){var e=Object(r.useState)(""),t=Object(Q.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(Q.a)(a,2),o=i[0],l=i[1],u=Object(r.useState)(""),d=Object(Q.a)(u,2),j=d[0],A=d[1],h=Object(s.c)((function(e){return e.filters})).filtersLoadingStatus,f=U(X.getState()),g=Object(s.b)(),p=b().request;return Object(B.jsxs)("form",{className:"border p-4 shadow-lg rounded",onSubmit:function(e){e.preventDefault();var t={id:Object(w.a)(),name:n,description:o,element:j};p("https://hero-panel.herokuapp.com/heroes","POST",JSON.stringify(t)).then((function(e){return console.log(e,"Success")})).then(g(C(t))).catch((function(e){return console.log(e)})),c(""),l(""),A("")},children:[Object(B.jsxs)("div",{className:"mb-3",children:[Object(B.jsx)("label",{htmlFor:"name",className:"form-label fs-4",children:"\u0418\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0433\u0435\u0440\u043e\u044f"}),Object(B.jsx)("input",{required:!0,type:"text",name:"name",className:"form-control",id:"name",placeholder:"\u041a\u0430\u043a \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442?",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(B.jsxs)("div",{className:"mb-3",children:[Object(B.jsx)("label",{htmlFor:"text",className:"form-label fs-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(B.jsx)("textarea",{required:!0,name:"text",className:"form-control",id:"text",placeholder:"\u0427\u0442\u043e \u044f \u0443\u043c\u0435\u044e?",style:{height:"130px"},value:o,onChange:function(e){return l(e.target.value)}})]}),Object(B.jsxs)("div",{className:"mb-3",children:[Object(B.jsx)("label",{htmlFor:"element",className:"form-label",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0433\u0435\u0440\u043e\u044f"}),Object(B.jsxs)("select",{required:!0,className:"form-select",id:"element",name:"element",value:j,onChange:function(e){return A(e.target.value)},children:[Object(B.jsx)("option",{value:"",children:"\u042f \u0432\u043b\u0430\u0434\u0435\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c..."}),function(e,t){return"loading"===t?Object(B.jsx)("option",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"}):"error"===t?Object(B.jsx)("option",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}):e&&e.length>0?e.map((function(e){var t=e.name,n=e.label;if("all"!==t)return Object(B.jsx)("option",{value:t,children:n},t)})):void 0}(f,h)]})]}),Object(B.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})},z=n(18),Y=n.n(z),W=function(){var e=Object(s.c)((function(e){return e.filters})),t=e.filtersLoadingStatus,n=e.activeFilter,c=U(X.getState()),a=Object(s.b)(),i=b().request;if(Object(r.useEffect)((function(){a(y(i))}),[]),"loading"===t)return Object(B.jsx)(L,{});if("error"===t)return Object(B.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var o,l=0===(o=c).length?Object(B.jsx)("h5",{className:"text-center mt-5",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"}):o.map((function(e){var t=e.name,r=e.className,c=e.label,i=Y()("btn",r,{active:t===n});return Object(B.jsx)("button",{id:t,className:i,onClick:function(){return a(q(t))},children:c},t)}));return Object(B.jsx)("div",{className:"card shadow-lg mt-4",children:Object(B.jsxs)("div",{className:"card-body",children:[Object(B.jsx)("p",{className:"card-text",children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0439\u0442\u0435 \u0433\u0435\u0440\u043e\u0435\u0432 \u043f\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c"}),Object(B.jsx)("div",{className:"btn-group",children:l})]})})},T=(n(31),function(){return Object(B.jsx)("main",{className:"app",children:Object(B.jsxs)("div",{className:"content",children:[Object(B.jsx)(F,{}),Object(B.jsxs)("div",{className:"content__interactive",children:[Object(B.jsx)(M,{}),Object(B.jsx)(W,{})]})]})})});n(32);i.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsx)(s.a,{store:X,children:Object(B.jsx)(T,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.8e78698b.chunk.js.map
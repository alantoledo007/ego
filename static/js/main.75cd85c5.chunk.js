(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),i=t(7),o=t(4),m=t(18),s=t(8),d=t(14),u=t.n(d),E=t(104);function f(e){var a=e.show,t=e.handleToggle;return l.a.createElement("div",{className:u.a.menu+(a?" "+u.a.show:"")},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#",onClick:t},"Cerrar",l.a.createElement("img",{src:"/img/close.svg",alt:"Image to close menu"})))),l.a.createElement("div",{className:u.a["menu-tab"]},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Modelos")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Servicios y Accesorios")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Financiaci\xf3n")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Reviews y Comunidad")))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("hr",null)))),l.a.createElement("div",{className:u.a["menu-tab"]},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Toyota Mobility Service")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Toyota Gazoo Racing")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Toyota H\xedbridos")))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("hr",null)))),l.a.createElement("div",{className:u.a["menu-tab"]},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Concesionarios")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Test Drive")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Contacto")))),l.a.createElement("div",{className:u.a["menu-tab"]+" "+u.a["menu-tab-dark"]},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Actividades")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Servicios al Cliente")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Ventas Especiales")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Innovaci\xf3n")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Prensa")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Acerca de...")))))}var g=function(){var e=Object(n.useState)({menuToggled:!1}),a=Object(m.a)(e,2),t=a[0],r=a[1],c=function(e){e.preventDefault(),r(Object(o.a)(Object(o.a)({},t),{},{menuToggled:!t.menuToggled}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:u.a["navbar-ego"]+" sticky-top bg-white"},l.a.createElement(s.b,{to:"/",className:u.a["navbar-ego-brand"]},l.a.createElement("img",{src:"/img/logo.svg",alt:"Ego - logo"})),l.a.createElement(E.a,{className:"mt-auto"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.c,{activeClassName:u.a.active,exact:!0,to:"/"},"Modelos")),l.a.createElement("li",null,l.a.createElement(s.c,{activeClassName:u.a.active,to:"/ficha-de-modelo"},"Ficha de modelo")))),l.a.createElement(s.b,{to:"#",onClick:c,className:u.a["btn-menu"]},l.a.createElement("span",null,"Men\xfa"),l.a.createElement("img",{src:"/img/menu.svg",alt:"Men\xfa - Icono"}))),l.a.createElement(f,{handleToggle:c,show:t.menuToggled}))};function v(){return l.a.createElement("footer",null)}var h=t(106),p=t(105),b=t(51),_=t.n(b),y=t(17),w=t(27),O=t.n(w);var j=t(53),N=t.n(j),T="http://localhost:8000/api/models";var k=t(107),C=t(9),D=t.n(C);var I=l.a.forwardRef((function(e,a){var t=e.children,n=e.onClick;return l.a.createElement("a",{className:D.a["filter-title"]+" "+D.a["filter-title-right"],href:"#",ref:a,onClick:function(e){e.preventDefault(),n(e)}},t)})),F=l.a.forwardRef((function(e,a){var t=e.children,n=e.onClick;return l.a.createElement("a",{className:D.a["filter-title"]+" "+D.a["filter-title-left"],href:"#",ref:a,onClick:function(e){e.preventDefault(),n(e)}},t)}));var S=Object(y.b)((function(e){return{orderBy:e.models.orderBy,orderDirection:e.models.orderDirection,vehicleId:e.models.vehicleId,vehicles:e.vehicles.vehicles}}),(function(e){return{getVehicles:function(){return e((function(e){return O.a.get("http://localhost:8000/api/vehicles").then((function(e){return e.data})).then((function(a){e({type:"GET_VEHICLES",payload:a.data})}))}))},filterVehicle:function(a){return e(function(e){return function(a){a({type:"FILTER_VEHICLE",payload:e})}}(a))},applyOrder:function(a){return e(function(e){return function(a){a({type:"APPLY_ORDER",payload:e})}}(a))}}}))((function(e){var a=e.vehicles,t=e.getVehicles,r=e.filterVehicle,c=e.vehicleId,i=e.orderBy,d=e.orderDirection,u=e.applyOrder,E=Object(n.useState)({dropdownToggled:!1,dropdownToggledFilter:!1}),f=Object(m.a)(E,2),g=f[0],v=f[1],h=function(e){return function(a){console.log(e),a.preventDefault(),r(e)}},p=function(e,a){return function(t){t.preventDefault(),u({orderBy:e,orderDirection:a})}};return Object(n.useEffect)((function(){t()}),[]),l.a.createElement("div",{className:D.a["filter-nav"]},l.a.createElement(k.a,{alignRight:!0,className:"mr-auto",onToggle:function(e){v(Object(o.a)(Object(o.a)({},g),{},{dropdownToggledFilter:e}))}},l.a.createElement(k.a.Toggle,{as:F},"Filtrar por",l.a.createElement("img",{src:"/img/fill-1.svg",alt:"Flecha dropdown",className:D.a["Fill-1"]+(g.dropdownToggledFilter?" "+D.a.active:"")})),l.a.createElement(k.a.Menu,null,l.a.createElement(k.a.Item,{active:null===c,onClick:h(null),eventKey:"1"},"Todos"),a.map((function(e,a){return l.a.createElement(k.a.Item,{key:e.id,onClick:h(e.id),active:c===e.id,eventKey:""+(a+2)},e.name)})))),l.a.createElement("div",{className:D.a["desktop-filter"]},l.a.createElement("span",{className:D.a["filter-title"]},"Filtrar por"),l.a.createElement(s.b,{to:"#",onClick:h(null),className:D.a["filter-badge"]+(null===c?" "+D.a.active:"")},"Todos"),a.map((function(e){return l.a.createElement(s.b,{key:e.id,onClick:h(e.id),to:"#",className:D.a["filter-badge"]+(c===e.id?" "+D.a.active:"")},e.name)}))),l.a.createElement("div",{className:"w-25 text-right"},l.a.createElement(k.a,{alignRight:!0,className:"ml-auto",onToggle:function(e){v(Object(o.a)(Object(o.a)({},g),{},{dropdownToggled:e}))}},l.a.createElement(k.a.Toggle,{as:I},"Ordernar por",l.a.createElement("img",{src:"/img/fill-1.svg",alt:"Flecha dropdown",className:D.a["Fill-1"]+(g.dropdownToggled?" "+D.a.active:"")})),l.a.createElement(k.a.Menu,null,l.a.createElement(k.a.Item,{active:"id"===i&&"asc"===d,onClick:p("id","asc"),eventKey:"1"},"Nada"),l.a.createElement(k.a.Item,{active:"price"===i&&"asc"===d,onClick:p("price","asc"),eventKey:"2"},"De ",l.a.createElement("b",null,"menor")," a ",l.a.createElement("b",null,"mayor")," precio"),l.a.createElement(k.a.Item,{active:"price"===i&&"desc"===d,onClick:p("price","desc"),eventKey:"3"},"De ",l.a.createElement("b",null,"mayor")," a ",l.a.createElement("b",null,"menor")," precio"),l.a.createElement(k.a.Item,{active:"year"===i&&"desc"===d,onClick:p("year","desc"),eventKey:"3"},"M\xe1s ",l.a.createElement("b",null,"nuevos")," primero"),l.a.createElement(k.a.Item,{active:"year"===i&&"asc"===d,onClick:p("year","asc"),eventKey:"3"},"M\xe1s ",l.a.createElement("b",null,"viejos")," primero")))))})),M=t(61),x=t.n(M),L=t(108);function B(e){var a=e.data,t=a.id,n=a.model,r=a.card_image,c=a.year,i=a.price;return l.a.createElement(p.a,{lg:3,md:6},l.a.createElement(L.a,{className:"border-0"},l.a.createElement(L.a.Body,{className:"text-center"},l.a.createElement(L.a.Title,{className:"text-center"},n),l.a.createElement("span",null,c," | ",l.a.createElement(x.a,{displayType:"text",decimalSeparator:",",thousandSeparator:".",prefix:"$",value:i})),l.a.createElement(s.b,{to:"/ficha-de-modelo/"+t},l.a.createElement("img",{src:r,width:"100%",alt:"Imagen de: "+n})),l.a.createElement(s.b,{to:"/ficha-de-modelo/"+t,className:"btn btn-dark btn-ego"},"Ver Modelo"))))}var A=Object(y.b)((function(e){return{orderBy:e.models.orderBy,orderDirection:e.models.orderDirection,vehicleId:e.models.vehicleId,models:e.models.models}}),(function(e){return{getModels:function(a){return e(function(e){var a=N.a.stringify(e);return console.log(a),function(e){O.a.get(T+"?"+a).then((function(e){return e.data})).then((function(a){e({type:"GET_MODELS",payload:a.data})}))}}(a))}}}))((function(e){var a=e.models,t=e.getModels,r=e.orderBy,c=e.orderDirection,i=e.vehicleId,s=Object(n.useState)({models:[]}),d=Object(m.a)(s,2),u=d[0],E=d[1];return Object(n.useEffect)((function(){t({orderBy:r,orderDirection:c,vehicleId:i})}),[r,c,i]),Object(n.useEffect)((function(){E(Object(o.a)(Object(o.a)({},u),{},{models:a||[]}))}),[a]),l.a.createElement(h.a,null,u.models.map((function(e){return l.a.createElement(B,{key:e.id,data:e})})))}));var R=function(){return l.a.createElement(E.a,null,l.a.createElement(h.a,null,l.a.createElement(p.a,null,l.a.createElement("h1",{className:_.a["page-title"]},"Descubr\xed todos los modelos"))),l.a.createElement(h.a,null,l.a.createElement(p.a,null,l.a.createElement(S,null))),l.a.createElement(A,null))},G=t(29),P=t.n(G);var V=Object(y.b)((function(e){return{model:e.models.model}}),(function(e){return{getModel:function(a){return e(function(e){return function(a){return O.a.get(T+"/"+e).then((function(e){return e.data})).then((function(e){a({type:"GET_MODEL",payload:e.data})}))}}(a))}}}))((function(e){var a=e.id,t=e.model,r=e.getModel;return Object(n.useEffect)((function(){a&&r(a)}),[a]),l.a.createElement(h.a,null,a===t.model&&l.a.createElement(i.a,{to:"/"}),l.a.createElement(p.a,{md:6},l.a.createElement("img",{className:"img-fluid "+P.a["img-main"],src:t.main_image,alt:"Imagen principal de "+t.model})),l.a.createElement(p.a,{md:6},l.a.createElement("h2",{className:P.a["model-title"]},t.model," ",t.version),l.a.createElement("h1",{className:P.a["main-title"]},t.title),l.a.createElement("p",{className:P.a["short-description"]},t.short_description)))})),K=t(30),H=t.n(K);function z(e){var a=e.detail,t=e.description;return l.a.createElement(p.a,{md:6},l.a.createElement("div",{className:H.a["details-container"]},l.a.createElement("h3",{className:H.a.title},a),l.a.createElement("p",{className:H.a.description},t)))}function J(e){var a=e.image,t=e.detail;return l.a.createElement(p.a,{className:"my-4",md:6},l.a.createElement("img",{src:a,className:"img-fluid rounded",alt:"Imagen de "+t}))}var W=function(e){var a=e.data,t=e.imageLeft,r=a.detail,c=a.image,i=a.description,o=Object(n.useState)(window.innerWidth),s=Object(m.a)(o,2),d=s[0],u=s[1],E=function(){u(window.innerWidth)};return Object(n.useEffect)((function(){return window.addEventListener("resize",E),function(){window.removeEventListener("resize",E)}}),[]),l.a.createElement(h.a,{className:H.a.container+" d-flex align-items-center justify-content-between"},(t||d<=800)&&l.a.createElement(l.a.Fragment,null,l.a.createElement(J,{image:c,detail:r}),l.a.createElement(z,{detail:r,description:i}))||l.a.createElement(l.a.Fragment,null,l.a.createElement(z,{detail:r,description:i}),l.a.createElement(J,{image:c,detail:r})))},U=t(24),Y=t.n(U),Z=t(34);function $(e){var a=e.pages,t=e.activePage,n=e.onClick;return l.a.createElement("div",{className:"d-flex w-100 justify-content-center"},a.map((function(e){var a=t===e;return l.a.createElement("div",{className:Y.a["pagination-item"]+(a?" "+Y.a.active:""),key:e,onClick:function(){return n(e)}})})))}function q(e){var a=e.type,t=e.onClick,n=e.isEdge,r=a===Z.a.PREV?l.a.createElement("img",{className:"arrow-img",src:"/img/arrow-left.svg"}):l.a.createElement("img",{className:"arrow-img",src:"/img/arrow-right.svg"});return l.a.createElement("div",{className:Y.a["arrow-container"],onClick:t,disabled:n},r)}var Q=function(e){var a=e.details;return l.a.createElement("div",{className:Y.a["details-content"]},l.a.createElement(Z.b,{renderArrow:q,renderPagination:$,itemsToShow:4,itemsToScroll:1,itemPosition:Z.a.CENTER,breakPoints:[{width:500,itemsToShow:1.5},{width:600,itemsToShow:2.5},{width:800,itemsToShow:3.5},{width:900,itemsToShow:4.5}]},a.map((function(e,a){return l.a.createElement(L.a,{key:a,className:Y.a["card-carousel"]+" border-0 bg-transparent"},l.a.createElement(L.a.Body,null,l.a.createElement("img",{className:"img-fluid",key:e.id,src:e.image}),l.a.createElement("h5",{className:Y.a["card-title"]},e.detail),l.a.createElement("p",null,e.description)))}))))};var X=Object(y.b)((function(e){return{details:e.models.details}}),(function(e){return{getDetails:function(a){return e(function(e){return function(a){return O.a.get("http://localhost:8000/api/details/model/"+e).then((function(e){return e.data})).then((function(e){a({type:"GET_DETAILS",payload:e.data})}))}}(a))}}}))((function(e){var a=e.id,t=e.details,r=e.getDetails,c=Object(n.useState)({details:[],mainDetails:[]}),i=Object(m.a)(c,2),s=i[0],d=i[1];return Object(n.useEffect)((function(){a&&r(a)}),[a]),Object(n.useEffect)((function(){var e=[],a=[];t.forEach((function(t){t.is_main?a.push(t):e.push(t)})),d(Object(o.a)(Object(o.a)({},s),{},{details:e,mainDetails:a}))}),[t]),l.a.createElement(l.a.Fragment,null,l.a.createElement(Q,{details:s.details}),l.a.createElement(E.a,null,s.mainDetails.map((function(e,a){return l.a.createElement(W,{key:e.id,imageLeft:!!(a%2),data:e})}))))}));var ee=function(){var e=Object(i.f)().id;return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,null,l.a.createElement(V,{id:e})),l.a.createElement(X,{id:e}))};t(99);var ae=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null),l.a.createElement(i.b,{exact:!0,path:"/",component:R}),l.a.createElement(i.b,{exact:!0,path:"/ficha-de-modelo/:id?",component:ee}),l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=t(26),ne={models:[],orderBy:"id",orderDirection:"asc",vehicleId:null,model:{},details:[]};var le={vehicles:[]};var re=t(66),ce=Object(te.d)(Object(te.c)({models:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_MODELS":return Object(o.a)(Object(o.a)({},e),{},{models:a.payload});case"FILTER_VEHICLE":return Object(o.a)(Object(o.a)({},e),{},{vehicleId:a.payload});case"APPLY_ORDER":return Object(o.a)(Object(o.a)({},e),{},{orderBy:a.payload.orderBy,orderDirection:a.payload.orderDirection});case"GET_MODEL":return Object(o.a)(Object(o.a)({},e),{},{model:a.payload});case"GET_DETAILS":return Object(o.a)(Object(o.a)({},e),{},{details:a.payload});default:return e}},vehicles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_VEHICLES":return Object(o.a)(Object(o.a)({},e),{},{vehicles:a.payload});default:return e}}}),Object(te.a)(re.a));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y.a,{store:ce},l.a.createElement(s.a,null,l.a.createElement(ae,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},14:function(e,a,t){e.exports={"btn-menu":"navbar-ego_btn-menu__y9q-j","navbar-ego":"navbar-ego_navbar-ego__16HNc",active:"navbar-ego_active__3KAdA","navbar-ego-brand":"navbar-ego_navbar-ego-brand__1HoKn",menu:"navbar-ego_menu__2c2Fl",show:"navbar-ego_show__3YSn6","menu-tab":"navbar-ego_menu-tab__1rcFH","menu-tab-dark":"navbar-ego_menu-tab-dark__3LG-m"}},24:function(e,a,t){e.exports={"details-content":"detailsCarousel_details-content__39KX7","pagination-item":"detailsCarousel_pagination-item__2AzGW",active:"detailsCarousel_active__1lw2b","card-title":"detailsCarousel_card-title__2uGfj","card-carousel":"detailsCarousel_card-carousel__1UMxO","arrow-container":"detailsCarousel_arrow-container__2uiMc","arrow-img":"detailsCarousel_arrow-img__3AcmA"}},29:function(e,a,t){e.exports={"img-main":"model_img-main__eu-g1","model-title":"model_model-title__1RZGP","main-title":"model_main-title__JzNF9","short-description":"model_short-description__1PN1l"}},30:function(e,a,t){e.exports={container:"mainDetail_container__3bGH1","details-container":"mainDetail_details-container__3AUzb",title:"mainDetail_title__3rIvt",description:"mainDetail_description__B4jfe"}},51:function(e,a,t){e.exports={"page-title":"home_page-title__3spil"}},70:function(e,a,t){e.exports=t(100)},9:function(e,a,t){e.exports={"desktop-filter":"filters_desktop-filter__2BnjJ","filter-nav":"filters_filter-nav__QB2Ul","Fill-1":"filters_Fill-1__1OUdc",active:"filters_active__1ZdJC","filter-title":"filters_filter-title__l7EPL","filter-title-left":"filters_filter-title-left__1vMk_","filter-title-right":"filters_filter-title-right__2Alxx","filter-badge":"filters_filter-badge__3AA7t"}},99:function(e,a,t){}},[[70,1,2]]]);
//# sourceMappingURL=main.75cd85c5.chunk.js.map
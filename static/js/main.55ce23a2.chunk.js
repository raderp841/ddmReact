(this["webpackJsonpdrug-mart"]=this["webpackJsonpdrug-mart"]||[]).push([[0],{26:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},32:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=(a(31),a(32),a(33),a(34),a(6)),s=a(1),i=function(){return r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h3",null,"About DrugMart"),r.a.createElement("hr",null),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6"},r.a.createElement("img",{className:"img-fluid img-responsive img-thumbnail",src:"https://s3-prod.crainscleveland.com/s3fs-public/styles/width_792/public/ddm_concord_township.jpg"})),r.a.createElement("div",{className:"col-12 d-md-none d-block"},r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6"},r.a.createElement("p",null," Discount Drug Mart, Inc., is an Ohio-based drug store chain that opened its first store in Elyria, Ohio in 1969. Since that time, Drug Mart has established stores in over 20 Ohio counties, and currently operates 76 stores, including Dayton and Columbus. The company also expects to announce further expansion within the year."),r.a.createElement("p",null,"Low prices, outstanding customer service and broad based product lines are at the heart of Drug Mart\u2019s growth and success. The company slogan says it all: ",r.a.createElement("i",null,r.a.createElement("q",null,"Discount Drug Mart Saves You the Runaround\u2026We Have Everything You Need."))))))},u=a(5),m=a(4);function d(e){return{type:"REMOVE_ITEM",itemId:e}}var p=a(12),h=a(13),E=a(14),v=a(15);var b=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"d-none success-added",id:"added-item-"+this.props.product.id}),r.a.createElement("img",{src:this.props.product.imgPath,className:"card-img-bottom d-none d-sm-block lrg-product-img"}),r.a.createElement("img",{src:this.props.product.imgPath,className:"d-block d-sm-none small-product-img"}),r.a.createElement("h4",{className:"card-header bg-white"},this.props.product.name),r.a.createElement("h5",{className:"card-body text-muted"},"$",this.props.product.price),this.props.isCart?r.a.createElement("button",{style:{margin:10},className:" float-right mb3 btn btn-danger",onClick:function(){return e.props.handleRemoveItem(e.props.product.id)}},"Remove"):r.a.createElement("button",{style:{margin:10},id:"product-add",className:" float-right mb3 btn btn-success",onClick:function(){e.props.handleAddItem(e.props.product),g(e.props.product.name,e.props.product.id)}},"Add to cart"))}}]),a}(r.a.Component),f=Object(m.b)((function(e){return Object(u.a)({},e)}),(function(e){return{handleAddItem:function(t){return e(function(e){return{type:"ADD_ITEM",item:e}}(t))},handleRemoveItem:function(t){return e(d(t))}}}))(b),g=function(e,t){var a=document.getElementById("added-item-"+t);a.innerHTML=e+" added to cart",a.classList.remove(["d-none"]),setTimeout((function(){return a.classList.add(["d-none"])}),1e3)},N=function(e){for(var t,a,n=0,r=0;r<e.length;r++)n+=e[r].price;return t=n,a=2,Number(Math.round(t+"e"+a)+"e-"+a)};var y=Object(m.b)((function(e){return Object(u.a)({},e)}),(function(e){return{handleRemoveItem:function(t){return e(d(t))}}}))((function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Here is your cart"),r.a.createElement("div",{className:"row text-center"},void 0!=e.CartReducer.cartItems&&0!=e.CartReducer.cartItems.count?e.CartReducer.cartItems.map((function(e){return r.a.createElement("div",{key:e.id+Math.random(),className:"col-md-6 col-lg-4 align-content-center"},r.a.createElement(f,{product:e,isCart:!0}))})):r.a.createElement("p",null,"You have no items in your cart")),r.a.createElement("hr",null),r.a.createElement("h4",null,"Total: $",N(e.CartReducer.cartItems)))})),O=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Contact us"))};function C(e){if(!e.ok)throw Error(e.statusText);return e}var I=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentWillMount",value:function(){this.props.dispatch((function(e){return e({type:"FETCH_PRODUCTS_BEGIN"}),fetch("https://discountdm.herokuapp.com/getItems").then(C).then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_PRODUCTS_SUCCESS",payload:{products:t}}),t})).catch((function(t){return e(function(e){return{type:"FETCH_PRODUCTS_FAILURE",payload:{error:e}}}(t))}))}))}},{key:"render",value:function(){var e=this.props,t=e.error,a=e.loading,n=e.products;return t?r.a.createElement("div",null,"Error! ",t.message):a?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"row text-center"},n.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-md-6 col-lg-4"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement(f,{isCart:!1,product:e})))})))}}]),a}(r.a.Component),j=Object(m.b)((function(e){return{products:e.ProductReducer.items,loading:e.ProductReducer.loading,error:e.ProductReducer.error}}))(I),R=function(e){return r.a.createElement("span",{className:"cart-counter"},e.counter>0?r.a.createElement("span",{className:"span-counter"}," ",e.counter," "):r.a.createElement("span",null))},k=Object(m.b)((function(e){return{cartItems:e.CartReducer.cartItems}}))((function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand navbar-light"},r.a.createElement("div",{className:"d-none d-sm-none d-md-block "},r.a.createElement(l.b,{className:"navbar-brand",to:"/"},"Discount Drug Mart")),r.a.createElement("div",{className:"d-sm-block d-md-none header-brand"},r.a.createElement(l.b,{className:"navbar-brand",to:"/"},"DDM")),r.a.createElement("div",{className:"navbar",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item header-link"},r.a.createElement(l.b,{className:"nav-link",to:"/shop"},"Shop")),r.a.createElement("li",{className:"nav-item header-link"},r.a.createElement(l.b,{className:"nav-link",to:"/about"},"About")),r.a.createElement("li",{className:"nav-item header-link"},r.a.createElement(l.b,{className:"nav-link",to:"/cart"},"Cart ",r.a.createElement(R,{counter:void 0!=e.cartItems?e.cartItems.length:0})))))))})),T=a(8),D=a(25),w=a(21),_={cartItems:[]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return{cartItems:[].concat(Object(w.a)(e.cartItems),[t.item])};case"REMOVE_ITEM":var a=!1;return{cartItems:Object(w.a)(e.cartItems.filter((function(e){if(a||e.id!=t.itemId)return e;a=!0})))};default:return _}},x={items:[],loading:!1,error:null},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS_BEGIN":return Object(u.a)({},e,{loading:!0,error:null});case"FETCH_PRODUCTS_SUCCESS":return Object(u.a)({},e,{loading:!1,items:t.payload.products});case"FETCH_PRODUCTS_FAILURE":return Object(u.a)({},e,{loading:!1,error:t.payload.error,items:[]});default:return e}},P=Object(T.d)(Object(T.c)({CartReducer:M,ProductReducer:S}),Object(T.a)(D.a)),U=Object(m.b)()((function(){return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement(k,null),r.a.createElement(s.c,null,r.a.createElement("div",{className:"container"},r.a.createElement(s.a,{exact:!0,path:"/",component:j}),r.a.createElement(s.a,{exact:!0,path:"/cart",component:y}),r.a.createElement(s.a,{exact:!0,path:"/about",component:i}),r.a.createElement(s.a,{exact:!0,path:"/contact",component:O}),r.a.createElement(s.a,{exact:!0,path:"/shop",component:j})))))})),A=function(){return r.a.createElement(m.a,{store:P},r.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.55ce23a2.chunk.js.map
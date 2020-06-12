(this["webpackJsonpdrug-mart"]=this["webpackJsonpdrug-mart"]||[]).push([[0],{26:function(e,t,r){e.exports=r(40)},31:function(e,t,r){},32:function(e,t,r){},40:function(e,t,r){"use strict";r.r(t);var a,n=r(0),c=r.n(n),o=r(14),s=r.n(o),l=(r(31),r(32),r(33),r(34),r(3)),u=r(1),m=function(){return c.a.createElement("div",{className:"col-12 text-center"},c.a.createElement("h3",null,"About DrugMart"),c.a.createElement("hr",null),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6"},c.a.createElement("img",{className:"img-fluid img-responsive img-thumbnail",src:"https://s3-prod.crainscleveland.com/s3fs-public/styles/width_792/public/ddm_concord_township.jpg"})),c.a.createElement("div",{className:"col-12 d-md-none d-block"},c.a.createElement("hr",null)),c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6"},c.a.createElement("p",null," Discount Drug Mart, Inc., is an Ohio-based drug store chain that opened its first store in Elyria, Ohio in 1969. Since that time, Drug Mart has established stores in over 20 Ohio counties, and currently operates 76 stores, including Dayton and Columbus. The company also expects to announce further expansion within the year."),c.a.createElement("p",null,"Low prices, outstanding customer service and broad based product lines are at the heart of Drug Mart\u2019s growth and success. The company slogan says it all: ",c.a.createElement("i",null,c.a.createElement("q",null,"Discount Drug Mart Saves You the Runaround\u2026We Have Everything You Need."))))))},i=r(4),d=r(7),p=r(8),E=r(9),h=r(10),f=r(2),v=function(e){return{type:"REMOVE_ITEM",userItemId:e}};function b(e){return function(t){return t({type:"FETCH_ITEMS_BEGIN"}),fetch("https://discountdm.herokuapp.com/getItemsForUser",{headers:{USERID:e}}).then(g).then((function(e){return e.json()})).then((function(e){return t({type:"FETCH_ITEMS_SUCCESS",payload:{items:e}}),e})).catch((function(e){return t(function(e){return{type:"FETCH_ITEMS_FAILURE",payload:{error:e}}}(e))}))}}function g(e){if(!e.ok)throw Error(e.statusText);return e}var I=function(e){Object(h.a)(r,e);var t=Object(E.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){a=void 0!==this.props.UserReducer.user&&-1!==this.props.UserReducer.user.id}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"card h-100"},c.a.createElement("div",{className:"d-none success-added",id:"added-item-"+this.props.product.id}),c.a.createElement("img",{src:this.props.product.imgPath,className:"card-img-bottom d-none d-sm-block lrg-product-img"}),c.a.createElement("img",{src:this.props.product.imgPath,className:"d-block d-sm-none small-product-img"}),c.a.createElement("h4",{className:"card-header bg-white"},this.props.product.name),c.a.createElement("h5",{className:"card-body text-muted"},"$",this.props.product.price),this.props.isCart?c.a.createElement("button",{style:{margin:10},className:" float-right mb3 btn btn-danger",onClick:function(){return e.props.handleRemoveItem(e.props.product.userItemId)}},"Remove"):c.a.createElement("button",{style:{margin:10},id:"product-add",className:" float-right mb3 btn btn-success",disabled:!a,onClick:function(){a&&(e.props.handleAddItem(e.props.UserReducer.user.id,e.props.product),N(e.props.product.name,e.props.product.id))}},"Add to cart"))}}]),r}(c.a.Component),y=Object(f.b)((function(e){return Object(i.a)({},e)}),(function(e){return{handleAddItem:function(t,r){return e(function(e,t){return function(r){return fetch("https://discountdm.herokuapp.com/addItem",{headers:{USERID:e,ITEMID:t.id}}).then(g).then((function(e){return e.json()})).then((function(e){e&&r(function(e){return{type:"ADD_ITEM",item:e}}(t))})).catch((function(e){return console.log(e)}))}}(t,r))},handleRemoveItem:function(t){return e(function(e){return function(t){return fetch("https://discountdm.herokuapp.com/removeItem",{headers:{ITEMID:e}}).then(g).then((function(e){return e.json()})).then((function(r){r&&t(v(e))})).catch((function(e){return console.log(e)}))}}(t))}}}))(I),N=function(e,t){var r=document.getElementById("added-item-"+t);r.innerHTML=e+" added to cart",r.classList.remove(["d-none"]),setTimeout((function(){return r.classList.add(["d-none"])}),1e3)},S=function(e){Object(h.a)(r,e);var t=Object(E.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){void 0!==this.props.UserReducer.user&&this.props.handleFetchCartItems(this.props.UserReducer.user.id)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("p",null,"Here is your cart"),c.a.createElement("div",{className:"row text-center"},void 0!==this.props.CartReducer.cartItems&&0!==this.props.CartReducer.cartItems.length?this.props.CartReducer.cartItems.map((function(e){return c.a.createElement("div",{key:e.id+Math.random(),className:"col-md-6 col-lg-4 align-content-center"},c.a.createElement(y,{product:e,isCart:!0}))})):c.a.createElement("p",null,"You have no items in your cart")),c.a.createElement("hr",null),c.a.createElement("h4",null,"Total: $",R(this.props.CartReducer.cartItems)))}}]),r}(c.a.Component),R=function(e){for(var t,r,a=0,n=0;n<e.length;n++)a+=e[n].price;return t=a,r=2,Number(Math.round(t+"e"+r)+"e-"+r)};var O=Object(f.b)((function(e){return Object(i.a)({},e)}),(function(e){return{handleRemoveItem:function(t){return e(v(t))},handleFetchCartItems:function(t){return e(b(t))}}}))(S),C=function(){return c.a.createElement("div",null,c.a.createElement("p",null,"Contact us"))};function U(e){if(!e.ok)throw Error(e.statusText);return e}var _,T,w,j,k=Object(f.b)((function(e){return{userId:e.UserReducer.user.id}}),(function(e){return{handleGetItemsForUser:function(t){return e(b(t))}}}))((function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("h3",{className:"offset-sm-3 col-sm-6"},"Welcome ",e.userName),c.a.createElement(l.b,{to:"/shop",onClick:function(){return e.handleGetItemsForUser(e.userId)},className:"btn btn-primary offset-sm-3 col-sm-6"},"Shop")),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},c.a.createElement(l.b,{to:"/cart",onClick:function(){return e.handleGetItemsForUser(e.userId)},className:"btn btn-primary offset-sm-3 col-sm-6"},"My Cart")))})),D=function(e){Object(h.a)(r,e);var t=Object(E.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidUpdate",value:function(){M()}},{key:"render",value:function(){var e=this;return void 0==this.props.user||-1==this.props.user.id?c.a.createElement("div",null,c.a.createElement("form",{className:"container text-center"},c.a.createElement("h3",null,"Sign in"),c.a.createElement("hr",null),void 0==this.props.user?c.a.createElement("div",{className:"alert-danger offset-sm-3 col-sm-6"},"Username or Password is invalid"):c.a.createElement("span",null),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"offset-sm-3 col-sm-6"},"Username"),c.a.createElement("input",{id:"username",type:"text",className:"form-control offset-sm-3 col-sm-6",placeholder:"enter username"})),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"offset-sm-3 col-sm-6"},"Password"),c.a.createElement("input",{id:"password",type:"password",className:"form-control offset-sm-3 col-sm-6",placeholder:"enter password"})),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group row"},c.a.createElement("button",{className:"btn btn-primary btn-block offset-5 col-2",onClick:function(){return e.props.handleOnLogin(document.getElementById("username").value,document.getElementById("password").value)}},"Login"))):(localStorage.setItem("userId",this.props.user.id),c.a.createElement(k,{userName:this.props.user.userName}))}}]),r}(c.a.Component),M=function(){null!==document.getElementById("username")&&null!==document.getElementById("password")&&(document.getElementById("username").value="",document.getElementById("password").value="")},L=Object(f.b)((function(e){return{user:e.UserReducer.user}}),(function(e){return{handleOnLogin:function(t,r){e(function(e,t){return function(r){return r({type:"LOGIN_USER_BEGIN"}),fetch("https://discountdm.herokuapp.com/loginUser",{headers:{USERNAME:e,PASSWORD:t}}).then(U).then((function(e){return e.json()})).then((function(e){return r({type:"LOGIN_USER_SUCCESS",payload:{user:e}}),e})).catch((function(e){return r(function(e){return{type:"LOGIN_USER_FAILURE",payload:{error:e}}}(e))}))}}(t,r))}}}))(D),x=function(){return c.a.createElement("div",{className:"row"},c.a.createElement("h3",{className:"col-xs-12 offset-sm-3 col-sm-6 text-center"},"Registered Successfully"),c.a.createElement(l.b,{to:"/login",className:"btn btn-primary col-xs-12 offset-sm-3 col-sm-6"},"Login Now"))},F=function(e){Object(h.a)(r,e);var t=Object(E.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){_=document.getElementById("username"),T=document.getElementById("password"),w=document.getElementById("passwordCheck"),alert("For demo use only. Please use a dummy password for safety (e.g. 'Test123!'")}},{key:"render",value:function(){var e=this;return void 0===this.props.regSuccess||!1===this.props.regSuccess?c.a.createElement("div",null,c.a.createElement("form",{className:"container text-center"},c.a.createElement("h3",null,"Register"),c.a.createElement("hr",null),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"offset-sm-3 col-sm-6"},"Username"),c.a.createElement("input",{id:"username",type:"text",className:"form-control offset-sm-3 col-sm-6",placeholder:"enter username"})),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"offset-sm-3 col-sm-6"},"Password"),c.a.createElement("input",{id:"password",type:"password",className:"form-control offset-sm-3 col-sm-6",placeholder:"enter password"})),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"offset-sm-3 col-sm-6"},"Confirm Password"),c.a.createElement("input",{id:"passwordCheck",type:"password",className:"form-control offset-sm-3 col-sm-6",placeholder:"retype password"})),c.a.createElement("br",null)),c.a.createElement("div",{className:"form-group row"},c.a.createElement("button",{className:"btn btn-primary btn-block offset-5 col-2",onClick:function(){P(T.value,w.value)?(!0,e.props.handleRegisterUser(_.value,T.value)):!1}},"Sign up"))):c.a.createElement(x,null)}}]),r}(c.a.Component),G=Object(f.b)((function(e){return{regSuccess:e.UserReducer.regSuccess}}),(function(e){return{handleRegisterUser:function(t,r){return e(function(e,t){return function(r){return r({type:"REGISTER_USER_BEGIN"}),fetch("https://discountdm.herokuapp.com/registerUser",{headers:{USERNAME:e,PASSWORD:t}}).then(U).then((function(e){return e.json()})).then((function(e){return r({type:"REGISTER_USER_SUCCESS"}),e})).catch((function(e){return r(function(e){return{type:"REGISTER_USER_FAILURE",payload:{error:e}}}(e))}))}}(t,r))}}}))(F),P=function(e,t){return e===t};function A(e){if(!e.ok)throw Error(e.statusText);return e}var B=function(e){Object(h.a)(r,e);var t=Object(E.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("shopItems"))||[];void 0===e||0==e.length?this.props.dispatch((function(e){return e({type:"FETCH_PRODUCTS_BEGIN"}),fetch("https://discountdm.herokuapp.com/getItems").then(A).then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_PRODUCTS_SUCCESS",payload:{products:t}}),t})).catch((function(t){return e(function(e){return{type:"FETCH_PRODUCTS_FAILURE",payload:{error:e}}}(t))}))})):this.props.dispatch(function(e){return{type:"SET_PRODUCTS",payload:{products:e}}}(e)),j=void 0!==this.props.user&&-1!==this.props.user.id}},{key:"render",value:function(){var e=this.props,t=e.error,r=e.loading,a=e.products;return t?c.a.createElement("div",null,"Error! ",t.message):r?c.a.createElement("div",null,"Loading..."):c.a.createElement("div",{className:"row text-center"},j?c.a.createElement("span",null):c.a.createElement("p",{className:"col-12 alert-danger"},"Please login to add items to cart"),a.map((function(e){return c.a.createElement("div",{key:e.id,className:"col-md-6 col-lg-4"},c.a.createElement("div",{className:"card mb-3"},c.a.createElement(y,{isCart:!1,product:e})))})))}}]),r}(c.a.Component),H=Object(f.b)((function(e){return{products:e.ProductReducer.items,loading:e.ProductReducer.loading,error:e.ProductReducer.error,user:e.UserReducer.user,cartItems:e.CartReducer.cartItems}}))(B),J=Object(f.b)((function(e){return{items:e.CartReducer.cartItems}}))((function(e){return c.a.createElement("span",{className:"cart-counter"},void 0!==e.items&&e.items.length>0?c.a.createElement("span",{className:"span-counter"}," ",e.items.length," "):c.a.createElement("span",null))})),W=Object(f.b)((function(e){return{cartItems:e.CartReducer.cartItems,user:e.UserReducer.user}}),(function(e){return{handleLogout:function(){e({type:"LOGOUT_USER"}),e({type:"SET_CART_ITEMS",payload:{items:[]}})}}}))((function(e){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand navbar-light"},c.a.createElement("div",{className:"d-none d-sm-none d-md-block "},c.a.createElement(l.b,{className:"navbar-brand",to:"/"},"Discount Drug Mart")),c.a.createElement("div",{className:"d-sm-block d-md-none header-brand"},c.a.createElement(l.b,{className:"navbar-brand",to:"/"},"DDM")),c.a.createElement("div",{className:" navbar-collapse justify-content-between",id:"navbarText"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item header-link"},c.a.createElement(l.b,{className:"nav-link",to:"/shop"},"Shop")),c.a.createElement("li",{className:"nav-item header-link"},c.a.createElement(l.b,{className:"nav-link",to:"/about"},"About")),c.a.createElement("li",{className:"nav-item header-link"},c.a.createElement(l.b,{className:"nav-link",to:"/cart"},"Cart ",c.a.createElement(J,null)))),void 0!==e.user&&-1!==e.user.id?c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item header-link"},c.a.createElement(l.b,{onClick:function(){return e.handleLogout()},className:"nav-link",to:"/login"},"Logout"))):c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item header-link"},c.a.createElement(l.b,{className:"nav-link",to:"/login"},"Login")),c.a.createElement("li",{className:"nav-item header-link"},c.a.createElement(l.b,{className:"nav-link",to:"/register"},"Register"))))))})),Y=r(12),$=r(25),V=r(21),q={cartItems:[],loading:!1,error:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":var r=[].concat(Object(V.a)(e.cartItems),[t.item]);return localStorage.setItem("cartItems",JSON.stringify(r)),{cartItems:r};case"REMOVE_ITEM":var a=Object(V.a)(e.cartItems.filter((function(e){return e.userItemId!==t.userItemId})));return localStorage.setItem("cartItems",JSON.stringify(a)),{cartItems:a};case"SET_CART_ITEMS":return{cartItems:t.payload.items};case"FETCH_ITEMS_BEGIN":return Object(i.a)({},e,{loading:!0,error:null});case"FETCH_ITEMS_FAILURE":return Object(i.a)({},e,{loading:!1,error:t.payload.error});case"FETCH_ITEMS_SUCCESS":return Object(i.a)({},e,{loading:!1,cartItems:t.payload.items});default:return Object(i.a)({},e)}},K={items:[],loading:!1,error:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS_BEGIN":return Object(i.a)({},e,{loading:!0,error:null});case"FETCH_PRODUCTS_SUCCESS":return localStorage.setItem("shopItems",JSON.stringify(t.payload.products)),Object(i.a)({},e,{loading:!1,items:t.payload.products});case"FETCH_PRODUCTS_FAILURE":return Object(i.a)({},e,{loading:!1,error:t.payload.error,items:[]});case"SET_PRODUCTS":return Object(i.a)({},e,{loading:!1,items:t.payload.products});default:return e}},X={user:{id:-1,userName:"default"},regSuccess:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER_BEGIN":return{state:e};case"LOGIN_USER_SUCCESS":return{user:t.payload.user};case"LOGIN_USER_FAILURE":case"REGISTER_USER_BEGIN":return{state:e};case"REGISTER_USER_SUCCESS":return{regSuccess:!0};case"REGISTER_USER_FAILURE":return{state:e};case"LOGOUT_USER":return localStorage.removeItem("userId"),{undefined:void 0};default:return e}},ee=Object(Y.d)(Object(Y.c)({CartReducer:z,ProductReducer:Q,UserReducer:Z}),Object(Y.a)($.a)),te=Object(f.b)()((function(){return c.a.createElement("div",null,c.a.createElement(l.a,null,c.a.createElement(W,null),c.a.createElement(u.c,null,c.a.createElement("div",{className:"container"},c.a.createElement(u.a,{exact:!0,path:"/ddmReact",component:H}),c.a.createElement(u.a,{exact:!0,path:"/cart",component:O}),c.a.createElement(u.a,{exact:!0,path:"/about",component:m}),c.a.createElement(u.a,{exact:!0,path:"/contact",component:C}),c.a.createElement(u.a,{exact:!0,path:"/shop",component:H}),c.a.createElement(u.a,{exact:!0,path:"/login",component:L}),c.a.createElement(u.a,{exact:!0,path:"/register",component:G})))))})),re=function(){return c.a.createElement(f.a,{store:ee},c.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.deb78b35.chunk.js.map
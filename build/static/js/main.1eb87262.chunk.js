(this["webpackJsonprisht-pusht"]=this["webpackJsonprisht-pusht"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(13),r=c.n(a),s=(c(18),c(5)),i=(c(19),c(3)),o=c.p+"static/media/logo.077d501e.png",d=c(0),l=function(){return Object(d.jsx)("div",{className:"Navbar",children:Object(d.jsx)("div",{className:"row text-center",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("img",{src:o,className:"img-fluid",alt:""})})})})},u=function(e){var t=e.logo,c=e.name,n=e.p1,a=e.p2;return Object(d.jsx)("div",{className:"Card",children:n?Object(d.jsxs)("div",{className:"d-flex flex-column",children:[Object(d.jsx)("div",{className:"number-admin-card",children:Object(d.jsx)("h2",{className:"font-weight-bold",style:{fontWeight:"bold",fontSize:"38px"},children:n})}),Object(d.jsx)("div",{className:"text-order-card mt-3",style:{fontWeight:"500"},children:a}),Object(d.jsx)("div",{className:"viewmore mt-3",children:Object(d.jsx)("h1",{style:{color:"#2C6975",fontSize:"35px",fontWeight:"800",textTransform:"uppercase"},children:"View More"})})]}):Object(d.jsxs)(d.Fragment,{children:[" ",Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("img",{src:t,className:"img-fluid",alt:c})}),Object(d.jsx)("div",{className:"name",children:c})," "]})})},j=c.p+"static/media/all.b2584843.svg",h=c.p+"static/media/add.2c5a8f78.svg",p=c.p+"static/media/add-item.e79a67fe.svg",b=c.p+"static/media/statistc.1967b994.svg",m=c(9),O=function(){return Object(d.jsxs)("div",{className:"admin-panel",children:[Object(d.jsx)("h1",{className:"bold-text",children:"Admin Panel"}),Object(d.jsxs)("div",{className:"row g-5",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)(m.c,{to:"/orders",children:Object(d.jsx)(u,{name:"All Orders",logo:j})})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)(m.c,{to:"category",children:Object(d.jsx)(u,{name:"Add/Modify/Delete Category",logo:h})})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)(m.c,{to:"item",children:Object(d.jsx)(u,{name:"Add/Modify/Delete Items",logo:p})})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)(m.c,{to:"statistics",children:Object(d.jsx)(u,{name:"Statistics",logo:b})})})]})]})},f=function(e){var t=e.orderid,c=e.datetime,n=e.buyername,a=e.purchasedworth,r=e.orders;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"Card mt-5 d-flex flex-column",children:[Object(d.jsxs)("div",{className:"order-info d-flex flex-row flex-md-row flex-sm-column justify-content-between align-items-baseline",children:[Object(d.jsxs)("div",{className:"order-id",children:[Object(d.jsx)("span",{children:"Order ID : "}),Object(d.jsx)("span",{className:"o_id",children:t})]}),Object(d.jsx)("div",{className:"date-time",children:Object(d.jsx)("p",{children:c})})]}),Object(d.jsxs)("div",{className:"more-info px-3 mt-5  d-flex flex-column flex-lg-row flex-md-row",children:[Object(d.jsx)("div",{className:"text text-start",children:Object(d.jsxs)("h4",{children:["Buyer\u2019s Name : ",n]})}),Object(d.jsx)("div",{className:"text",children:Object(d.jsxs)("h4",{children:["Purchsed worth : \u20b9 ",a]})}),Object(d.jsx)("div",{className:"text border-0 text-end",children:Object(d.jsxs)("h4",{children:["Items : ",r]})})]}),Object(d.jsx)("div",{className:"button-details mt-5",children:Object(d.jsxs)("span",{children:["More Details ",Object(d.jsx)("i",{class:"fas fa-chevron-right"})]})})]})})},x="ADD_CATEGORY",g="ADD_PRODUCTS",y="ADD_SUBCATEGORY",v="CALL_API",S="ADD_ORDERS",N=Object(n.createContext)(null),C=function(){var e=Object(n.useContext)(N),t=e.state,c=e.dispatch;return Object(n.useEffect)((function(){c({type:v})}),[]),Object(d.jsxs)("div",{className:"order mb-4 d-flex flex-column",children:[Object(d.jsx)("h1",{className:"bold-text",children:"view all orders"}),t.Orders.orders?t.Orders.orders.map((function(e){return Object(d.jsx)(f,{orderid:e.Order_ID,datetime:e.Date,buyername:e.Buyers_name,purchasedworth:e.Total_price,orders:e.Total_price})})):"LOADING..."]})},A=c(2),w=function(e){var t=e.img,c=e.name,n=e.onDelete,a=e.categoryid,r=e.EditHandler,s=e.Description,i=e.short_description,o=e.price;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"category-card text-center d-flex flex-column mt-2",children:[Object(d.jsx)("div",{className:"delete",style:{textAlign:"right"},children:Object(d.jsx)("span",{children:Object(d.jsx)("i",{onClick:function(){n(a)},style:{padding:"13px 6px"},className:"fas fa-times text-white"})})}),Object(d.jsx)("div",{className:"img-block mt-3",children:Object(d.jsx)(m.b,{to:"/subcategory/"+a,children:Object(d.jsx)("img",{src:t,className:"img-fluid",alt:"category"})})}),Object(d.jsx)("div",{className:"edit mt-4",style:{textAlign:"right"},children:Object(d.jsx)("span",{children:Object(d.jsx)("i",{onClick:function(){r(a,c,t,s,i,o)},style:{padding:"13px 6px",justifySelf:"end"},className:"fas fa-pencil-alt"})})})]}),Object(d.jsx)("div",{className:"category-name mt-4",children:Object(d.jsx)("p",{children:c})})]})},E=c(10),T=c(4),D=c.n(T),F=c(6),P=c(7),k=c.n(P),_=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND,B="seabasketofficial@gmail.com",I="Seabasket@1234";console.log(_);var Y=function(){var e=Object(F.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(JSON.stringify(t)),e.abrupt("return",fetch("https://rishtpusht.pythonanywhere.com/api/addCategory/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+k()("".concat(B,":").concat(I))},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(F.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(JSON.stringify(t)),e.abrupt("return",fetch("https://rishtpusht.pythonanywhere.com/api/addSubCategory/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+k()("".concat(B,":").concat(I))},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(F.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://rishtpusht.pythonanywhere.com/api/deleteCategory/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+k()("".concat(B,":").concat(I))},body:JSON.stringify({cid:t})}).then((function(e){return e.json()})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(F.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(JSON.stringify({scid:t})),e.abrupt("return",fetch("https://rishtpusht.pythonanywhere.com/api/deletesubcategory/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+k()("".concat(B,":").concat(I))},body:JSON.stringify({scid:t})}).then((function(e){return e.json()})).catch((function(e){console.log(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(F.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://rishtpusht.pythonanywhere.com/api/editCategory/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+k()("".concat(B,":").concat(I))},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(F.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(JSON.stringify(t)),e.abrupt("return",fetch("https://rishtpusht.pythonanywhere.com/api/editSubCategory/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+k()("".concat(B,":").concat(I))},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(F.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://rishtpusht.pythonanywhere.com/api/getCategories",{method:"POST",headers:{Authorization:"Basic "+k()("".concat(B,":").concat(I))}}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(F.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://rishtpusht.pythonanywhere.com/api/products/category/".concat(t,"/"),{method:"POST",headers:{Authorization:"Basic "+k()("".concat(B,":").concat(I))}}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(F.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://rishtpusht.pythonanywhere.com/api/addimage/",{method:"POST",headers:{Authorization:"Basic "+k()("".concat(B,":").concat(I))},body:t}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e){var t,c=e.setName,a=e.setDescription,r=e.setShortDescription,i=e.setCategoryId,o=e.setSubCatId,l=e.setPriceForm,u=e.setFileHandler,j=e.add,h=e.handleForm,p=e.des,b=e.name,m=e.descrp,O=e.price,f=e.shortdes,x=Object(n.useContext)(N),g=x.state,y=(x.dispatch,Object(n.useState)([])),v=Object(s.a)(y,2),S=v[0],C=v[1];return Object(d.jsx)("div",{children:Object(d.jsx)("form",{action:"",onSubmit:h,children:Object(d.jsxs)("div",{className:"row align-items-center justify-content-around",children:[Object(d.jsx)("div",{className:"col-md-5 pt-4 pb-4",children:Object(d.jsxs)("div",{style:{borderStyle:"dashed",padding:"50px"},className:"Card  d-flex flex-column text-center align-items-center",children:[Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABiCAYAAACyAirtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVuSURBVHgB7Z3PcdtGFMZ/TnLI0ccc1xVYHQTpwOkAHcSpgEgFlioQUoHlCkDfcpNVAXjNSUoFDJ5A2BhaJEhwgd23eL+ZTyA51Mzi4cP+edhdvsJwja4ave6pz6bR006bnYwBXrEsxEBZo7e7o+N8xGBfGj00Wu9ebzAWR9boutFjo+1Eum/0nnFGNRQhzdmKac10SFWjHCMpskYl85vpJdW0BnMYanHEY6hDBjOUsSJMkzfGYFcY0SMXSUZksRtqXx/4PqVhRMIf6KiljtVeDiMa5E6/RZeJDklujPcYwXHobPqGtMIIhqNtPjQYxcylBEfapjJzBcCxDFOZuWYmxT7VkKxDPzGS79FkCJ/KMCZB8lSajOBbkopwGF5x6DLBVKpQzI/Eh8xtskce7Q32X6N/MC5m6U3gvqxJ9IBjWamFU/UR4yJKdF3wOZVhjMKh60LPrQpjFCW6LnQIZRhn4dB1gUPpFkX8QHgyjFN4h6I0TAx5LLkTf8EY4udG/6IkrxV6JbSjTTEYp7Fu9Fvvvds7Pu0pGD8RlncY55Dx7cmEG/huf6+Jz7QzRdYshApdHegUVDHDQtrQTeEWPWx2R0c6lI3+JrGaLEPPXV7TGkqkednZsfPLSQSZKakh6GKk/grmK9I0V2ewDOWU6Ah2/kLZ80jL6ku3KG7yK+IPcHGk/Fpq3LGqUTpql4LHHNiCYYrAZZxDK5QRczALTuc6UBnnlMwJU/M4KdYglpxPOVPZQqpGQb9L3B9j8L4w7s6U/7mfsZxmrgM40gvaa5YxtTrqxS6OuIJV4+dOdCzDXBURE0uQavxW7450E6h9fSBSYgj+flbdFyln5/uKMs9VEz4wOdORA9vEFeW6xzvCBqVgelLPzotmWfcoo4WMNqC3tCOImpedHrKpKJiPgjgMMKUyJiKjda6GfkXB/KSena/xSMjfqxmrknCU6InTGOV4YIW+Uc/YrLovUs/O33MBGToTgDVxjF5Sz85njEDrFkM1cQ2JHemaq+IMNP8aRE2cD00d6SZQT+puyJe07lw8VVbdF6lm5wd3fdZsKlFO/OToiukpqhjgYyQFHaMCPaSWnX88drKriAqasqk6CnTFeEgvdkGyyAqZuqk6UsrOf9fP0pxnKdFPia6YH9L1/omtIi7sMYXOqvsilez8Xf+kXMQFPaaatDbqSCE7X/dPqIy4oEsxVYdDt7nq/oloKXTqpupwKE6gdpvbZujiqdHvfNuzKkU2tNtCBt3y8VIqdN0ROcshR9e16RTtquRDKlgeGrPzz0t4tBS2YLkU6LlOtaYCFxhasvPPs0krBQUtMTpK4r9ed7Jrsrgr5nlLvgm1U/SW5XAj6QaHYfhlLcay3182fLORZmFJVbRgTeG0bBq9ieFn5Yy0WMsfMdYGw/DHJ/ljNZbhE3mu+TwXS4z1gGH44esEP2sKDZ/cdC/EWGsM43LWtFPEn5Ght+SxHlkOlm6YBpk7tu7eSI31hNVaxmVI32rd/6AbFX7CMMbz5/4HnbFKlE+BNYLxFwMDwIL4p2P4UCg0xehU1YdOtt+R7dazpf5Q2jrv/njDgdqqn3mXpvAGwzgN6VdtTv3yEn7BKhSaYjSkghFkwDZhhUJTjI6p5AIKYJuoQqEpRpOYqqMEtgkqFJpiNJmphFQ3vA+Fphjtq8AzKZorFJpi1EmeIedMSErbGIZCU4xEFTOt4CqAbQIKhZb4SC01uFe7bxz681yh0BAbaZmCPnnJ0WuwUMQaD6mhbols4XKOPoOFIrY4yKCsYKIaytcD2YzWZL8S/5L9JT+EXjf6vDuumZApgiwbjGS0Bnu7OzriIXVjbXZHmX8uEwsedq+797PwP0jtY4rwUGOHAAAAAElFTkSuQmCC",className:"imgvec",alt:""}),Object(d.jsx)("input",{type:"file",name:"uploadimage",className:"custom-file-input",onChange:u}),Object(d.jsx)("span",{className:"upload",children:"Upload File"})]})}),Object(d.jsxs)("div",{className:"col-md-5",children:[Object(d.jsx)("div",{className:"note",children:Object(d.jsx)("p",{children:"Add an Image of 45px X 45px dimension for best visibility"})}),Object(d.jsxs)("div",{className:"input-category-name",children:[Object(d.jsx)("input",{type:"text",placeholder:j,value:b,onChange:c,className:"category",required:!0}),p?Object(d.jsx)("input",{type:"text",placeholder:p,value:m,onChange:a,className:"category",required:!0}):"",o?Object(d.jsx)("input",{type:"text",placeholder:"Enter Short Description",value:f,onChange:r,className:"category",required:!0}):"",o?Object(d.jsx)("input",{type:"text",placeholder:"Enter Price",value:O,onChange:l,className:"category",required:!0}):"",o?Object(d.jsxs)("select",{onChange:function(e){i(e),R(e.target.value).then((function(e){if(e.err)return alert("Cannot Fetch Categories");C(e.Sub_Categories)}))},placeholder:"Select categories",className:"category",children:[Object(d.jsx)("option",{value:"select",children:"Select Category"}),g.Categories.Categories?g.Categories.Categories.map((function(e,t){return Object(d.jsx)("option",{id:t,value:e.cid,children:e.name})})):""]}):"",i?Object(d.jsxs)("select",(t={className:"form-control",placeholder:"Select Subcategory",onChange:o},Object(E.a)(t,"className","category"),Object(E.a)(t,"children",[Object(d.jsx)("option",{value:"select",children:"Select Sub Category"}),S?S.map((function(e){return Object(d.jsx)("option",{value:e.scid,children:e.name})})):""]),t)):""]}),Object(d.jsx)("div",{className:"add-category",children:Object(d.jsx)("button",{type:"submit",children:j})})]})]})})})},H=function(){var e=Object(n.useContext)(N),t=e.state,c=e.dispatch,a=Object(n.useState)(null),r=Object(s.a)(a,2),i=r[0],o=r[1],l=Object(n.useState)(!1),u=Object(s.a)(l,2),j=u[0],h=u[1],p=Object(n.useState)(!1),b=Object(s.a)(p,2),m=b[0],O=b[1],f=Object(n.useState)(),x=Object(s.a)(f,2),g=x[0],y=x[1],S=Object(n.useState)({name:"",have_sub:!0,image_url:"",description:""}),C=Object(s.a)(S,2),E=C[0],T=C[1],D=function(e,t,c,n){O(!m),y(e),T(Object(A.a)(Object(A.a)({},E),{},{name:t,description:n,image_url:c})),window.scrollTo(0,0)};if(i){var F=new FormData;F.append("file",i),L(F).then((function(e){T(Object(A.a)(Object(A.a)({},E),{},{image_url:e.url})),alert("Image Uploaded Successfully..")})),o(null)}var P=function(e){J(e).then((function(e){e?h(!j):alert("Deleted UnSuccessfull")}))};console.log(E);return Object(n.useEffect)((function(){c({type:v})}),[j]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"bold-text",children:m?"Edit Category":"Add Category"}),Object(d.jsx)("div",{className:"add-category",children:Object(d.jsx)(G,{add:m?"Edit Name":"Add Name",name:E.name,descrp:E.description,des:m?"Edit Description":"Add Description",setName:function(e){T(Object(A.a)(Object(A.a)({},E),{},{name:e.target.value}))},setDescription:function(e){T(Object(A.a)(Object(A.a)({},E),{},{description:e.target.value}))},setFileHandler:function(e){o(e.target.files[0])},pname:m?"Edit Category":"Add Category",handleForm:function(e){e.preventDefault(),m?z({cid:g,name:E.name,image_url:E.image_url,description:E.description}).then((function(e){e.err?alert("Failed to upload category"):alert("Category Edited Successfully")})):Y(E).then((function(e){if(e.err)return alert("Failed to Add Category...");alert("Category Added Successfully!")})),T(Object(A.a)(Object(A.a)({},E),{},{name:"",description:"",image_url:""})),O(!m),h(!j)}})}),t.Categories.Categories?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"modify-delete",style:{marginTop:"120px"},children:[Object(d.jsx)("h1",{className:"bold-text",children:"MODIFY/DELETE CATEGORY"}),Object(d.jsx)("div",{className:"row g-4 text-center",children:t.Categories.Categories?t.Categories.Categories.map((function(e,t){return Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsx)(w,{categoryid:e.cid,onDelete:P,name:e.name,img:e.url,EditHandler:D,Description:e.description})},t)})):""})]})}):Object(d.jsx)("h2",{className:"mt-5 text-center",style:{marginTop:"100px"},children:"No Categories"})]})},Q=(c.p,function(){var e=Object(F.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://rishtpusht.pythonanywhere.com/api/addProduct/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+k()("".concat(B,":").concat(I))},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),V=function(){var e=Object(F.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://rishtpusht.pythonanywhere.com/api/deleteProduct/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+k()("".concat(B,":").concat(I))},body:JSON.stringify({pid:t})}).then((function(e){return e.json()})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(F.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://rishtpusht.pythonanywhere.com/api/products",{method:"POST",headers:{Authorization:"Basic "+k()("".concat(B,":").concat(I))}}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(F.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://rishtpusht.pythonanywhere.com/api/editProduct/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Basic "+k()("".concat(B,":").concat(I))},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(n.useContext)(N),t=e.state,c=e.dispatch,a=Object(n.useState)(null),r=Object(s.a)(a,2),i=r[0],o=r[1],l=Object(n.useState)(!1),u=Object(s.a)(l,2),j=u[0],h=u[1],p=Object(n.useState)(!1),b=Object(s.a)(p,2),m=b[0],O=b[1],f=Object(n.useState)(),x=Object(s.a)(f,2),g=x[0],y=x[1],S=Object(n.useState)({cid:"",scid:"",name:"",image_url:"",price:"",in_stock:!0,short_description:"",description:""}),C=Object(s.a)(S,2),E=C[0],T=C[1];console.log(E);var D=function(e,t,c,n,a,r){O(!m),y(e),T(Object(A.a)(Object(A.a)({},E),{},{name:t,description:n,short_description:a,price:r,image_url:c})),window.scrollTo(0,0)},F=function(e){console.log(e),V(e).then((function(e){e?h(!j):alert("Deleted UnSuccessfull")}))};if(i){var P=new FormData;P.append("file",i),L(P).then((function(e){T(Object(A.a)(Object(A.a)({},E),{},{image_url:e.url})),alert("Image Uploaded Successfully..")})),o(null)}return Object(n.useEffect)((function(){c({type:v})}),[j]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"bold-text",children:m?"Update Item":"Add Item"}),Object(d.jsx)("div",{className:"add-item",children:Object(d.jsx)(G,{add:"Add Product",des:"Item Description",name:E.name,price:E.price,descrp:E.description,shortdes:E.short_description,setName:function(e){T(Object(A.a)(Object(A.a)({},E),{},{name:e.target.value}))},setDescription:function(e){T(Object(A.a)(Object(A.a)({},E),{},{description:e.target.value}))},setShortDescription:function(e){T(Object(A.a)(Object(A.a)({},E),{},{short_description:e.target.value}))},setCategoryId:function(e){console.log(e.target.value),T(Object(A.a)(Object(A.a)({},E),{},{cid:e.target.value}))},setSubCatId:function(e){T(Object(A.a)(Object(A.a)({},E),{},{scid:e.target.value}))},setPriceForm:function(e){T(Object(A.a)(Object(A.a)({},E),{},{price:e.target.value}))},setFileHandler:function(e){o(e.target.files[0])},handleForm:function(e){e.preventDefault(),m?W({pid:g,name:E.name,image_url:E.image_url,price:E.price,in_stock:!0,short_description:E.short_description,description:E.description}).then((function(e){e.err?alert("Failed to upload category"):alert("Product Edited Successfully")})):Q(E).then((function(e){e.err?console.log(e.err):alert("Product Added Successfully")})),T(Object(A.a)(Object(A.a)({},E),{},{cid:"",scid:"",name:"",image_url:"",price:"",in_stock:!0,short_description:"",description:""})),y(null),h(!j),O(!m)},Categories:t})}),Object(d.jsxs)("div",{className:"modify-delete",style:{marginTop:"120px"},children:[Object(d.jsx)("h1",{className:"bold-text",children:"MODIFY/DELETE ITEM"}),Object(d.jsx)("div",{className:"row g-4 text-center",children:t.Products.Products?t.Products.Products.map((function(e,t){return Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsx)(w,{categoryid:e.pid,onDelete:F,name:e.name,img:e.image_url,Description:e.description,short_description:e.short_description,price:e.price,EditHandler:D})},t)})):""})]})]})},$=function(){return Object(d.jsxs)("div",{className:"statistics",children:[Object(d.jsx)("h1",{className:"bold-text",children:"statistics"}),Object(d.jsx)("div",{className:"statistics-cards",children:Object(d.jsxs)("div",{className:"row g-4",children:[Object(d.jsx)("div",{className:"col-4 mb-3",children:Object(d.jsx)(u,{p1:"351",p2:"Total Number of Orders"})}),Object(d.jsx)("div",{className:"col-4 mb-3",children:Object(d.jsx)(u,{p1:"\u20b9 95,721",p2:"Total Worth of Sale"})}),Object(d.jsx)("div",{className:"col-4 mb-3",children:Object(d.jsx)(u,{p1:"24",p2:"Total Orders Cancelled"})}),Object(d.jsx)("div",{className:"col-4 mb-3",children:Object(d.jsx)(u,{p1:"327",p2:"Total Orders Delivered"})}),Object(d.jsx)("div",{className:"col-4 mb-3",children:Object(d.jsx)(u,{p1:"16",p2:"Total Products on Sale"})}),Object(d.jsx)("div",{className:"col-4 mb-3",children:Object(d.jsx)(u,{p1:"8",p2:"Total Vendors Selling"})})]})})]})},ee=function(){var e=Object(i.g)().categoryid,t=Object(n.useContext)(N),c=t.state,a=t.dispatch,r=Object(n.useState)(null),o=Object(s.a)(r,2),l=o[0],u=o[1],j=Object(n.useState)(!1),h=Object(s.a)(j,2),p=h[0],b=h[1],m=Object(n.useState)(!1),O=Object(s.a)(m,2),f=O[0],x=O[1],g=Object(n.useState)({name:"",cid:e,scid:"",image_url:""}),v=Object(s.a)(g,2),S=v[0],C=v[1];console.log(S);var E=function(e,t,c){x(!f),C(Object(A.a)(Object(A.a)({},S),{},{scid:e,name:t,image_url:c})),window.scrollTo(0,0)};if(l){var T=new FormData;T.append("file",l),L(T).then((function(e){C(Object(A.a)(Object(A.a)({},S),{},{image_url:e.url})),alert("Image Uploaded Successfully..")})),u(null)}var D=function(e){console.log(e),M(e).then((function(e){e?(console.log(e),b(!p)):alert("Deleted Successfull")}))};return Object(n.useEffect)((function(){R(S.cid).then((function(e){if(e.err)return alert("Cannot Fetch Categories");a({type:y,payload:e})}))}),[p]),Object(d.jsx)("div",{children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"bold-text",children:f?"Edit SubCategory":"Add SubCategory"}),Object(d.jsx)("div",{className:"add-category",children:Object(d.jsx)(G,{add:f?"Edit Name":"Add Name",name:S.name,setName:function(e){C(Object(A.a)(Object(A.a)({},S),{},{name:e.target.value}))},setFileHandler:function(e){u(e.target.files[0])},pname:f?"Edit Sub Category":"Add Sub Category",handleForm:function(e){e.preventDefault(),f?q({scid:S.scid,name:S.name,image_url:S.image_url}).then((function(e){e.err?alert("Failed to upload category"):alert("SubCategory Edited Successfully")})):U({name:S.name,cid:S.cid,image_url:S.image_url}).then((function(e){if(e.err)return alert("Failed to Add Category...");alert("SubCategory Added Successfully!")})),C(Object(A.a)(Object(A.a)({},S),{},{name:"",description:"",image_url:""})),b(!p),x(!f)}})}),Object(d.jsxs)("div",{className:"modify-delete",style:{marginTop:"120px"},children:[Object(d.jsx)("h1",{className:"bold-text",children:"MODIFY/DELETE SUBCATEGORY"}),Object(d.jsx)("div",{className:"row g-4 text-center",children:c.SubCategories.Sub_Categories?c.SubCategories.Sub_Categories.map((function(e,t){return Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsx)(w,{categoryid:e.scid,onDelete:D,name:e.name,img:e.url,EditHandler:E})},t)})):""})]})]})})},te={Categories:[],Orders:[],Products:[],SubCategories:[],loading:!1},ce=function(e,t){switch(t.type){case v:return Object(A.a)(Object(A.a)({},e),{},{loading:!0});case g:return Object(A.a)(Object(A.a)({},e),{},{Products:t.payload});case y:return Object(A.a)(Object(A.a)({},e),{},{SubCategories:t.payload,loading:!1});case x:return Object(A.a)(Object(A.a)({},e),{},{Categories:t.payload,loading:!1});case S:return Object(A.a)(Object(A.a)({},e),{},{Orders:t.payload,loading:!1})}},ne=function(){var e=Object(F.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://rishtpusht.pythonanywhere.com/api/allorders/",{method:"POST",headers:{Authorization:"Basic "+k()("".concat(B,":").concat(I))}}).then((function(e){return e.json()})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var ae=function(){var e=Object(n.useReducer)(ce,te),t=Object(s.a)(e,2),c=t[0],a=t[1],r=c.loading;return Object(n.useLayoutEffect)((function(){K().then((function(e){if(e.err)return alert("Cannot Fetch Categories");a({type:x,payload:e})})),ne().then((function(e){if(e.err)return alert("Orders cannot be fetched");a({type:S,payload:e})})),Z().then((function(e){if(e.err)return alert("Orders cannot be fetched");a({type:g,payload:e})}))}),[r]),Object(d.jsx)(N.Provider,{value:{state:c,dispatch:a},children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",element:Object(d.jsx)(O,{})}),Object(d.jsx)(i.a,{path:"orders",element:Object(d.jsx)(C,{})}),Object(d.jsx)(i.a,{path:"category",element:Object(d.jsx)(H,{})}),Object(d.jsx)(i.a,{path:"item",element:Object(d.jsx)(X,{})}),Object(d.jsx)(i.a,{path:"statistics",element:Object(d.jsx)($,{})}),Object(d.jsx)(i.a,{path:"subcategory/:categoryid",element:Object(d.jsx)(ee,{})})]})]})})};r.a.render(Object(d.jsx)(m.a,{children:Object(d.jsx)(ae,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.1eb87262.chunk.js.map
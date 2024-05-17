import{c as N,r as m,j as e,u as S}from"./index-BmBdP5-B.js";function k({item:c,total:y,setTotal:f,Basket:t,dispatch:a,products:p}){var g;const{id:r,count:x,version:n}=c;m.useState(!1);const[v,h]=m.useState([]),o="https://fakestoreapi.com/products/"+r;m.useEffect(()=>{n=="v1"&&fetch(o).then(i=>i.json()).then(i=>{h(i)})},[t]);const u=i=>{let d=t.find(l=>l.id==r&&l.version==n);d.count+=i,d.count||(t=t.filter(l=>{if(!(l.id==r&&l.version==n))return l})),a({type:"EDIT_BASKET",payload:[...t]})},j=()=>{let i=t.filter(d=>{if(!(d.id==r&&d.version==n))return d});a({type:"EDIT_BASKET",payload:[...i]})},T=p.find(i=>i.id==r),s=n=="v1"?v:T;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"basket_item",children:[e.jsxs("div",{className:"image",children:[e.jsx("div",{className:"img",children:e.jsx("img",{src:n=="v1"?s.image:s==null?void 0:s.images[0],alt:""})}),e.jsxs("div",{className:"title",children:[e.jsxs("div",{children:[(g=s==null?void 0:s.title)==null?void 0:g.slice(0,16),"..."]}),e.jsxs("div",{children:["Category:",n=="v1"?s.category:s==null?void 0:s.category.name]}),e.jsxs("div",{className:"count",children:[e.jsx("div",{onClick:()=>u(-1),className:"decrease",children:"-"}),e.jsx("div",{children:x}),e.jsx("div",{onClick:()=>u(1),className:"increase",children:"+"})]})]})]}),e.jsxs("div",{className:"price",children:[e.jsxs("h3",{style:{color:"green"},children:["$",+((s==null?void 0:s.price)*x).toFixed(2)]}),e.jsx("div",{onClick:j,style:{color:"red"},children:"Delete"})]})]})})}const E=c=>({products:c.products}),I=N(E)(k);function $({dispatch:c,user:y,products:f,discount:t,delivery:a,v1products:p,basket:r}){document.title="Basket | Online Store",S();const[x,n]=m.useState(!1),v=r.reduce((h,o)=>{const u=o.version==="v1"?p.find(j=>j.id===o.id):f.find(j=>j.id===o.id);return h+o.count*(u?u.price:0)},0).toFixed(2);return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"basket_container",children:[!r.length&&e.jsx("h1",{className:"notProduct",children:x?"The order has been saved. You can view your orders from your profile.":"There are no products in the basket!"}),r.length>0&&e.jsx("div",{className:"basket_elements",children:r.map((h,o)=>e.jsx(I,{Basket:r,item:h},o))}),r.length>0&&e.jsxs("div",{className:"receipt",children:[e.jsxs("div",{className:"cortej",children:[e.jsxs("h3",{children:["Products ",e.jsxs("strong",{children:["(",r.length,")"]}),":"]}),e.jsxs("h3",{children:["$",v]})]}),e.jsxs("div",{className:"cortej",children:[e.jsx("h3",{children:"Discount:"}),e.jsxs("h3",{children:["$",t.length?t[0]:0]})]}),e.jsxs("div",{className:"cortej",children:[e.jsx("h3",{children:"Delivery:"}),e.jsxs("h3",{children:["$",a]})]}),e.jsx("div",{className:"cortej cortejLine"}),e.jsxs("div",{style:{alignItems:"center",marginTop:"50px"},className:"cortej",children:[e.jsx("h3",{style:{color:"black",fontSize:"25px"},children:"Total:"}),e.jsxs("h3",{style:{color:"green"},children:["$",(+v+a-(t.length?t[0]:0)).toFixed(2)]})]}),e.jsx("div",{className:"orderBtn",children:e.jsx("button",{children:"Confirm the Order"})})]})]})})}const C=c=>({basket:c.basket,v1products:c.v1products,products:c.products,delivery:c.deliveryAmount,discount:c.discount,user:c.user}),_=N(C)($);export{_ as default};

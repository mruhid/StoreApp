import{c as o,j as t}from"./index-BmBdP5-B.js";function r({product:d,version:e,activeSize:l,basket:a,dispatch:i}){let n=a.find(s=>s.id==d.id&&s.version==e);const c=()=>{i({type:"SET_BASKET",payload:{count:1,version:e,id:d.id}})};return t.jsx(t.Fragment,{children:t.jsxs("div",{children:[n&&t.jsx("p",{children:"Product added on Basket"}),t.jsx("button",{onClick:c,disabled:n,children:"Add to basket"})]})})}const u=d=>({basket:d.basket}),x=o(u)(r);export{x as A};
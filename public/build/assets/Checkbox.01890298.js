import{i as u,x as r,G as n,g as d,o as i,d as p,C as h}from"./app.639d0eff.js";const f=["value"],k={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(t,{emit:a}){const c=t,e=u({get(){return c.checked},set(o){a("update:checked",o)}});return(o,s)=>r((i(),p("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>h(e)?e.value=l:null),type:"checkbox",value:t.value,class:"rounded border-gray-300 text-light-blue-500 shadow-sm focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50"},null,8,f)),[[n,d(e)]])}};export{k as _};

import{d,av as l,I as v,m as f,V as p,aq as m,ax as g,aw as h,a3 as y,N as u,E as _}from"./entry.20502f4c.js";const q=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:a}=l(i),n=v(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&f("dd-navigation").value){const{navigation:t}=p();return{navigation:t}}const{data:o}=await m(`content-navigation-${h(n.value)}`,()=>g(n.value));return{navigation:o}},render(i){const a=y(),{navigation:n}=i,o=e=>u(_,{to:e._path},()=>e.title),t=(e,r)=>u("ul",r?{"data-level":r}:null,e.map(s=>s.children?u("li",null,[o(s),t(s.children,r+1)]):u("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}}),N=q;export{N as default};

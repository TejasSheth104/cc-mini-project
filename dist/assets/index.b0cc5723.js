import{r as s,R as e,a as f}from"./vendor.74f57222.js";const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function u(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=u(t);fetch(t.href,n)}};p();let i="";const d=async()=>i||(i=`${(await(await fetch("./config.json")).json()).CdkThreeTierServerlessStack.HttpApiUrl}/notes`,i),m=async()=>await(await fetch(await d())).json(),y=async l=>{await fetch(await d(),{body:JSON.stringify(l),headers:{"Content-Type":"application/json"},method:"POST",mode:"cors"})},E=()=>{const[l,o]=s.exports.useState(""),[u,a]=s.exports.useState([]),[t,n]=s.exports.useState("");s.exports.useEffect(()=>{m().then(r=>a(r))},[]);const c=async()=>{if(l&&t){o(""),n(""),await y({date:new Date().toISOString(),note:l,subject:t,type:"note"});const r=await m();a(r)}};return e.createElement("div",null,e.createElement("div",null,e.createElement("div",null,e.createElement("input",{onChange:r=>n(r.target.value),placeholder:"Note Subject",type:"text",value:t})),e.createElement("div",null,e.createElement("textarea",{onChange:r=>o(r.target.value),placeholder:"Note Body",value:l})),e.createElement("div",null,e.createElement("button",{onClick:c},"save"))),e.createElement("div",null,e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Subject"),e.createElement("th",null,"Note"),e.createElement("th",null,"Date"))),e.createElement("tbody",null,u.map(r=>e.createElement("tr",{key:r.date},e.createElement("td",null,r.subject),e.createElement("td",null,r.note),e.createElement("td",null,new Date(r.date).toLocaleString())))))))};f.render(e.createElement(e.StrictMode,null,e.createElement(E,null)),document.getElementById("root"));
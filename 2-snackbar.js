import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as r}from"./assets/vendor-BbbuE1sJ.js";const c=document.querySelector(".snackbar-input"),i=document.querySelector(".form");document.querySelectorAll(".radio");i.addEventListener("submit",m);function m(e){e.preventDefault();const t=c.value,s=e.currentTarget.elements.state.value;return e.currentTarget.reset(),new Promise((o,n)=>{setTimeout(()=>{s==="rejected"?n(r.error({icon:"none",close:!1,message:`❌ Rejected promise in ${t}ms`})):o(r.success({icon:"none",close:!1,message:`✅ Fulfilled promise in ${t}ms`}))},t)})}
//# sourceMappingURL=2-snackbar.js.map
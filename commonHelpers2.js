import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as o}from"./assets/vendor-77e16229.js";const t=document.querySelector(".form");t.addEventListener("submit",i=>{i.preventDefault();const s=Number(t.delay.value);new Promise((e,r)=>{t.state.value==="fulfilled"?setTimeout(()=>{e(s)},s):t.state.value==="rejected"&&setTimeout(()=>{r(s)},s)}).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topCenter"})}).catch(e=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topCenter"})}),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map

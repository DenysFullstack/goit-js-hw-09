function e(e,t){new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?o(`✅ Fulfilled promise ${e} in ${t}ms`):n(`❌ Rejected promise ${e} in ${t}ms`)}),t)})).then((e=>console.log(e))).catch((e=>console.log(e)))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{delay:o,step:n,amount:l}=t.target.elements;let m=Number(l.value);for(let t=0;t<m;t+=1)e(t+1,Number(o.value)+Number(n.value*t))}));
//# sourceMappingURL=03-promises.61014be2.js.map
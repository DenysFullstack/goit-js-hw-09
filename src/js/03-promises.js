const form = document.querySelector('.form')

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e){
  e.preventDefault();
  const { delay, step, amount } = e.target.elements;
  let number = Number(amount.value)
  for(let i = 0; i < number; i+=1) {
    createPromise(i+1, Number(delay.value) + Number(step.value * i))
  }
}

function createPromise(position, delay) {

  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=>{
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`)
      }
    },delay)
    
  })
  promise
  .then((result)=> console.log(result))
  .catch((error)=> console.log(error))
}

// Імпорт бібліотеки iziToast та її стилів
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector(".form")
form.addEventListener("submit", event => {
    event.preventDefault();
    const second = Number(form.delay.value);
    

    const promise = new Promise((resolve, reject) => {
        if (form.state.value === "fulfilled") {
            setTimeout(() => {
                resolve(second)
            },second)
        } else if (form.state.value === "rejected") {
            setTimeout(() => {
                reject(second)
            }, second);
        } 
            
        
    })
    promise
        .then(second => {
        iziToast.success({
          title: 'Success',
          message: `✅ Fulfilled promise in ${second}ms`,
          position: 'topCenter',
        });
        })
        .catch(second => {
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise in ${second}ms`,
          position: 'topCenter',
        });
        })
    form.reset();
}

)

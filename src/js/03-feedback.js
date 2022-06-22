import throttle from 'lodash.throttle';
let data; 

const STORAGE_KEY = "feedback-form-state"
const form = document.querySelector(".feedback-form");
const inputElone = document.querySelector("[name='email']");
const inputEltwo = document.querySelector("[name='message']");


form.addEventListener("input", throttle(handleform, 500));
function handleform () {
    const email = form.email.value
    const message = form.message.value
    const obj = {
        email,
        message
    }
    data = localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
}

if(localStorage.getItem(STORAGE_KEY)){
    const value =  JSON.parse(localStorage.getItem(STORAGE_KEY))
    inputElone.value = value.email ;
    inputEltwo.value = value.message;
};

form.addEventListener("submit", handlesubmit);
function handlesubmit (event) {
    event.preventDefault()
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    
    if(inputElone.value === ''||inputEltwo.value === '') {
    return alert("Введи значення у всі поля")
}
    localStorage.removeItem(STORAGE_KEY)
    event.target.reset();

}


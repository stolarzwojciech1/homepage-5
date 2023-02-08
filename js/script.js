
const welcome = () =>{
console.log("Cześć");
}

welcome();

const button1 = () => {
const themeName = document.querySelector(".themeName");
const body = document.querySelector(".body");

body.classList.toggle("body__dark");
themeName.innerText = body.classList.contains("body__dark") ? "Tło 1" : "Tło 2";


}

let init = () => {const button = document.querySelector(".section__button");

button.addEventListener("click", button1);



}
init();
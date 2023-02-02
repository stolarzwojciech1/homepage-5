console.log("Cześć");

let button = document.querySelector(".section__button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");


button.addEventListener("click", () => {
    body.classList.toggle("body__dark");

    themeName.innerText = body.classList.contains("body__dark") ? "Tło 1" : "Tło 2";
});
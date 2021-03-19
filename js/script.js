let body = document.querySelector("body");
let themebutton = document.querySelector(".themebutton");

themebutton.onclick = function(){
    body.classList.toggle('page-light');
    body.classList.toggle('page-dark');
}
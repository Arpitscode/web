const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let login = document.querySelector('.login');
let menu = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('open');
    login.classList.remove('show');
}

window.onscroll = () => {
    navbar.classList.remove('open');
    login.classList.remove('show');
}

let user = document.querySelector('.user');
user.onclick = () => {
    login.classList.toggle('show');
    navbar.classList.remove('open');
}
const submit = document.querySelector('.btn');
submit.onclick = () => {
    alert("You want to submit.");
    login.classList.remove('show');
}

let animationstop = document.querySelector('#user-name');
const userbtn = document.querySelector('#btn');
let thanksbtn=document.querySelector('#btn');

animationstop.onclick = () => {
    animationstop.classList.toggle('stop');
}
userbtn.onclick = () => {
    animationstop.classList.remove('stop');
    alert("You want to submit your name.");
    switch (thanksbtn.innerHTML) {
        case "Submit":
            thanksbtn.innerHTML = "Thanks";
            break;
        case "Thanks":
            thanksbtn.innerHTML = "Submit";
            break;
    }
}

//for more and less content by button

let morebtn = document.querySelector('.aboutbtn');
let pmore = document.querySelector('.more');
let lessbtn = document.querySelector('.aboutbtn');

morebtn.onclick = () => {
    // lessbtn.innerHTML="Less";  
    pmore.classList.toggle('see');
    switch (lessbtn.innerHTML) {
        case "More":
            lessbtn.innerHTML = "Less";
            break;
        case "Less":
            lessbtn.innerHTML = "More";
            break;
    }
}
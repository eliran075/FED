// JavaScript Document
console.log("hi");

var openButton = document.querySelector("header > nav > button > img");

openButton.addEventListener("click", openMenu);

function openMenu() {
    var deNav = document.querySelector("header nav ul:first-of-type");
    deNav.classList.toggle("toonMenu");
}
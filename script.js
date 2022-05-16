var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebaar");
var container = document.querySelector(".container");


menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebaar");
    container.classList.toggle("large-container");

}
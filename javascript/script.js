const mainMenu = document.getElementById("mainMenu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const items = document.querySelectorAll("nav .mainMenu li a");
const header = document.querySelector("header");
const logo = document.getElementById("logo");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

items.forEach(item => {
    item.addEventListener("click", function() {
        close();
    });
});

function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
    document.body.style.overflow = "hidden";
    header.style.backgroundColor = "#fff";
    openMenu.style.color = "#fff"
    logo.style.color = "#fff";
}

function close() {
    mainMenu.style.top = "-110%";
    document.body.style.overflow = "auto";
    header.style.backgroundColor = "#2707F2";
    openMenu.style.color = "#3BD9BC";
    logo.style.color = "#3BD9BC"
}
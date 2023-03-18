
let menuEmail= document.querySelector(".navbar-email");
let desktopMenu=document.querySelector(".desktop-menu")
let btnMenuMovil=document.querySelector(".menu")
let MenuMovil=document.querySelector(".mobile-menu")

btnMenuMovil.addEventListener('click',toggleMenuMovil )
menuEmail.addEventListener('click', toggleDesktopMenu)


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuMovil(){
    MenuMovil.classList.toggle('inactive');
}
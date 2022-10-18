let menuIcon = document.querySelector(".menu-icon");
let menuOverlay = document.querySelector(".menu-overlay");
let menuContent = document.querySelector(".menu-content");
let closeMenu = document.querySelector(".close-menu");

menuIcon.addEventListener("click", () => {
    menuOverlay.style.transitionDelay = "0s";
    menuOverlay.style.width = "100%";
    menuContent.style.width = getComputedStyle(document.documentElement).getPropertyValue('--menu-content-width');
});

closeMenu.addEventListener("click", () => {
    menuOverlay.style.transitionDelay = "0.5s";
    menuOverlay.style.width = "0%";
    menuContent.style.width = "0%";
})

window.onclick = function (event) {
    if (event.target == menuOverlay) {
        menuOverlay.style.transitionDelay = "0.5s";
        menuOverlay.style.width = "0%";
        menuContent.style.width = "0%";
    }
}
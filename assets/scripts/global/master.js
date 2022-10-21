function menuMain() {
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
}
menuMain();

function darkMode() {
    var darkModeIcon = document.querySelector(".dark-mode");
    var lightModeIcon = document.querySelector(".light-mode");

    var lightMode = localStorage.getItem("lightMode");
    lightModeBtn = document.querySelector(".theme-mode");

    lightModeEnable = () => {
        document.body.classList.add("light-mode");
        localStorage.setItem("lightMode", "true");
    }

    lightModeDisable = () => {
        document.body.classList.remove("light-mode");
        localStorage.setItem("lightMode", null);
    }

    if (lightMode === "true") {
        lightModeEnable();
    }

    lightModeBtn.addEventListener("click", () => {
        lightMode = localStorage.getItem("lightMode");

        if (lightMode == "true") {
            lightModeDisable();
        } else {
            lightModeEnable();
        }
    })
}
darkMode();
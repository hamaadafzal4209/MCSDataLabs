const navBar = document.querySelector(".navBar");
const menuIcon = document.querySelector(".menu-icon");
const themeIcon = document.getElementById("themeIcon");

menuIcon.addEventListener("click", () => {
    if (navBar.style.left === "-100%") {
        navBar.style.left = "0px";
    } else {
        navBar.style.left = "-100%";
    }
});

function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark");

    const teamMapImg = document.getElementById("team-map");
    const goalsLogo = document.getElementById("goalsLogo");
    const headLineLeft1 = document.getElementById("head-line-left-1");
    const headLineRight1 = document.getElementById("head-line-right-1");
    const headLineLeft2 = document.getElementById("head-line-left-2");
    const headLineRight2 = document.getElementById("head-line-right-2");
    const headLineLeft3 = document.getElementById("head-line-left-3");
    const headLineRight3 = document.getElementById("head-line-right-3");
    const useCaseImage = document.getElementById("use-case-image");
    const footer = document.querySelector('footer');

    // Toggle image source based on dark mode
    if (isDarkMode) {
        if (teamMapImg) teamMapImg.src = "images/darkMode-map.svg";
        if (goalsLogo) goalsLogo.src = "images/darkMode-goalslogo.png";
        if (headLineLeft1) headLineLeft1.src = "images/head-line-white.png";
        if (headLineRight1) {
            headLineRight1.src = "images/head-line-white.png";
            headLineRight1.classList.add("rotate-180");
        }
        if (headLineLeft2) headLineLeft2.src = "images/head-line-white.png";
        if (headLineRight2) {
            headLineRight2.src = "images/head-line-white.png";
            headLineRight2.classList.add("rotate-180");
        }
        if (headLineLeft3) headLineLeft3.src = "images/head-line-white.png";
        if (headLineRight3) {
            headLineRight3.src = "images/head-line-white.png";
            headLineRight3.classList.add("rotate-180");
        }
        if (useCaseImage) useCaseImage.src = "images/darkMode-usecase.png";
        if (footer) footer.style.backgroundImage = 'url("images/footer-dark.png")';

        // Change icon to moon
        themeIcon.classList.remove("bxs-moon");
        themeIcon.classList.add("bxs-sun");
    } else {
        if (teamMapImg) teamMapImg.src = "images/team-map.png";
        if (goalsLogo) goalsLogo.src = "images/goals-logo.png";
        if (headLineLeft1) headLineLeft1.src = "images/head-line.png";
        if (headLineRight1) {
            headLineRight1.src = "images/head-line-right.png";
            headLineRight1.classList.remove("rotate-180");
        }
        if (headLineLeft2) headLineLeft2.src = "images/head-line.png";
        if (headLineRight2) {
            headLineRight2.src = "images/head-line-right.png";
            headLineRight2.classList.remove("rotate-180");
        }
        if (headLineLeft3) headLineLeft3.src = "images/head-line.png";
        if (headLineRight3) {
            headLineRight3.src = "images/head-line-right.png";
            headLineRight3.classList.remove("rotate-180");
        }
        if (useCaseImage) useCaseImage.src = "images/usecases.png";
        if (footer) footer.style.backgroundImage = 'url("images/footer-divider.png")';

        // Change icon to sun
        themeIcon.classList.remove("bxs-sun");
        themeIcon.classList.add("bxs-moon");
    }

    // Save dark mode preference in localStorage
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
}

// Check localStorage on page load
document.addEventListener("DOMContentLoaded", function () {
    const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    const body = document.body;

    const teamMapImg = document.getElementById("team-map");
    const goalsLogo = document.getElementById("goalsLogo");
    const headLineLeft1 = document.getElementById("head-line-left-1");
    const headLineRight1 = document.getElementById("head-line-right-1");
    const headLineLeft2 = document.getElementById("head-line-left-2");
    const headLineRight2 = document.getElementById("head-line-right-2");
    const headLineLeft3 = document.getElementById("head-line-left-3");
    const headLineRight3 = document.getElementById("head-line-right-3");
    const useCaseImage = document.getElementById("use-case-image");
    const footer = document.querySelector('footer');

    if (isDarkMode) {
        body.classList.add("dark");
        if (teamMapImg) teamMapImg.src = "images/darkMode-map.svg";
        if (goalsLogo) goalsLogo.src = "images/darkMode-goalslogo.png";
        if (headLineLeft1) headLineLeft1.src = "images/head-line-white.png";
        if (headLineRight1) {
            headLineRight1.src = "images/head-line-white.png";
            headLineRight1.classList.add("rotate-180");
        }
        if (headLineLeft2) headLineLeft2.src = "images/head-line-white.png";
        if (headLineRight2) {
            headLineRight2.src = "images/head-line-white.png";
            headLineRight2.classList.add("rotate-180");
        }
        if (headLineLeft3) headLineLeft3.src = "images/head-line-white.png";
        if (headLineRight3) {
            headLineRight3.src = "images/head-line-white.png";
            headLineRight3.classList.add("rotate-180");
        }
        if (useCaseImage) useCaseImage.src = "images/darkMode-usecase.png";
        if (footer) footer.style.backgroundImage = 'url("images/footer-dark.png")';
    } else {
        body.classList.remove("dark");
        if (teamMapImg) teamMapImg.src = "images/team-map.png";
        if (goalsLogo) goalsLogo.src = "images/goals-logo.png";
        if (headLineLeft1) headLineLeft1.src = "images/head-line.png";
        if (headLineRight1) {
            headLineRight1.src = "images/head-line-right.png";
            headLineRight1.classList.remove("rotate-180");
        }
        if (headLineLeft2) headLineLeft2.src = "images/head-line.png";
        if (headLineRight2) {
            headLineRight2.src = "images/head-line-right.png";
            headLineRight2.classList.remove("rotate-180");
        }
        if (headLineLeft3) headLineLeft3.src = "images/head-line.png";
        if (headLineRight3) {
            headLineRight3.src = "images/head-line-right.png";
            headLineRight3.classList.remove("rotate-180");
        }
        if (useCaseImage) useCaseImage.src = "images/usecases.png";
        if (footer) footer.style.backgroundImage = 'url("images/footer-divider.png")';
    }
});
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark");

    const teamMapImg = document.getElementById("team-map");
    const goalsLogo = document.getElementById("goalsLogo");
    const headLineLeft = document.getElementById("head-line-left");
    const headLineRight = document.getElementById("head-line-right");
    const useCaseImage = document.getElementById("use-case-image");
    const headLineLeftImg = document.getElementById("head-line-left-img");
    const headLineRightImg = document.getElementById("head-line-right-img");
    const footer = document.querySelector('footer');

    // Toggle image source based on dark mode
    if (isDarkMode) {
        if (teamMapImg) teamMapImg.src = "images/darkMode-map.svg";
        if (goalsLogo) goalsLogo.src = "images/darkMode-goalslogo.png";
        if (headLineLeft) headLineLeft.src = "images/head-line-white.png";
        if (headLineRight) {
            headLineRight.src = "images/head-line-white.png";
            headLineRight.classList.add("rotate-180");
        }
        if (useCaseImage) useCaseImage.src = "images/darkMode-usecase.png";
        if (headLineLeftImg) headLineLeftImg.src = "images/head-line-white.png";
        if (headLineRightImg) headLineRightImg.src = 'images/head-line-white.png';
        if (footer) footer.style.backgroundImage = 'url("images/footer-dark.png")';

        // Change icon to moon
        themeIcon.classList.remove("bxs-moon");
        themeIcon.classList.add("bxs-sun");
    } else {
        if (teamMapImg) teamMapImg.src = "images/team-map.png";
        if (goalsLogo) goalsLogo.src = "images/goals-logo.png";
        if (headLineLeft) headLineLeft.src = "images/head-line.png";
        if (headLineRight) {
            headLineRight.src = "images/head-line-right.png";
            headLineRight.classList.remove("rotate-180");
        }
        if (useCaseImage) useCaseImage.src = "images/usecases.png";
        if (headLineLeftImg) headLineLeftImg.src = "images/head-line.png";
        if (headLineRightImg) headLineRightImg.src = 'images/head-line-right.png';
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
    const headLineLeft = document.getElementById("head-line-left");
    const headLineRight = document.getElementById("head-line-right");
    const footer = document.querySelector('footer');

    if (isDarkMode) {
        body.classList.add("dark");
        if (teamMapImg) teamMapImg.src = "images/darkMode-map.svg";
        if (goalsLogo) goalsLogo.src = "images/darkMode-goalslogo.png";
        if (headLineLeft) headLineLeft.src = "images/head-line-white.png";
        if (headLineRight) {
            headLineRight.src = "images/head-line-white.png";
            headLineRight.classList.add("rotate-180");
        }
        if (footer) footer.style.backgroundImage = 'url("images/footer-dark.png")';
    } else {
        body.classList.remove("dark");
        if (teamMapImg) teamMapImg.src = "images/team-map.png";
        if (goalsLogo) goalsLogo.src = "images/goals-logo.png";
        if (headLineLeft) headLineLeft.src = "images/head-line.png";
        if (headLineRight) {
            headLineRight.src = "images/head-line-right.png";
            headLineRight.classList.remove("rotate-180");
        }
        if (footer) footer.style.backgroundImage = 'url("images/footer-divider.png")';
    }
});
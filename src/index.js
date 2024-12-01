import { homePage } from "./home";
import { aboutPage } from "./about";
import "./style.css";

homePage.homeLoad("content");

const index = (function () {
    const divContainer = document.getElementById("content");
    function clearDiv() {
        divContainer.innerHTML = "";
    }

    const homeButton = document.getElementById("home-btn");
    
    homeButton.addEventListener("click", () => {
        clearDiv();
        homePage.homeLoad("content");
    })

    const aboutButton = document.getElementById("about-btn");

    aboutButton.addEventListener("click", () => {
        clearDiv();
        aboutPage.aboutLoad("content");
    })
})();
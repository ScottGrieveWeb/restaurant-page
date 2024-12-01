import { homePage } from "./home";
import "./style.css";

homePage.homeLoad("content");

const index = function () {
    const divContainer = document.getElementById("content");
    function clearDiv() {
        divContainer.innerHTML = "";
    }
    
    const homeButton = document.getElementById("home-btn");
    
    homeButton.addEventListener("click", () => {
        clearDiv();
        homePage.homeLoad("content");
    })
}();
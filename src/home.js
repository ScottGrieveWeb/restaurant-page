import restaurantImage from "./images/background.jpg";

export const homePage = (function () {
    function homeLoad(id){
        const contentDiv = document.getElementById(id);

        const mainImage = document.createElement('img');
        mainImage.src = restaurantImage;
        mainImage.setAttribute("id", "restaurant-img");

        const headLine = document.createElement("h1");
        const headLineNode = document.createTextNode("Welcome to Himalayan Times");
        headLine.appendChild(headLineNode);

        contentDiv.appendChild(mainImage);
        contentDiv.appendChild(headLine);
    }

    return {
        homeLoad
    };
})();
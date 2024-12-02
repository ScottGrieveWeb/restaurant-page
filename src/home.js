import restaurantImage from "./images/background.jpg";

export const homePage = (function () {
    function homeLoad(id){
        const contentDiv = document.getElementById(id);

        const imageWrapper = document.createElement('div');
        imageWrapper.setAttribute("id", "image-wrapper");

        const mainImage = document.createElement('img');
        mainImage.src = restaurantImage;
        mainImage.setAttribute("id", "restaurant-img");

        const headLine = document.createElement("h1");
        const headLineNode = document.createTextNode("Welcome to Himalayan Times");
        headLine.appendChild(headLineNode);

        imageWrapper.appendChild(mainImage);
        imageWrapper.appendChild(headLine);
        contentDiv.appendChild(imageWrapper);
    }

    return {
        homeLoad
    };
})();
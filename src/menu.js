import menuImage from "./images/menu.png";

export const menuPage = (function() {
    function menuLoad(id){
        const contentDiv = document.getElementById(id);

        const menuImg = document.createElement("img");
        menuImg.src = menuImage;

        contentDiv.appendChild(menuImg);
    };
    return {
        menuLoad
    }
})();
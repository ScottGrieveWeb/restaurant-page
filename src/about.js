import restaurantImage from "./images/restaurant.jpg";

export const aboutPage = (function (){

    function aboutLoad(id){
        const contentDiv = document.getElementById(id);

        const mainImage = document.createElement('img');
        mainImage.src = restaurantImage;
        mainImage.setAttribute("id", "restaurant-img");

        const headLine = document.createElement('h1');
        const headLineNode = document.createTextNode('About My Restaurant');
        headLine.appendChild(headLineNode);

        const para = document.createElement('p');
        const paraText = document.createTextNode('We are a restaurant! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id metus sit amet justo convallis luctus. Donec lacinia erat sapien, eu bibendum sem pulvinar vel. Nunc sit amet tristique dolor, eget tincidunt enim. Curabitur ullamcorper sapien leo, eu auctor est tristique in.');
        para.appendChild(paraText);

        contentDiv.appendChild(mainImage);
        contentDiv.appendChild(headLine);
        contentDiv.appendChild(para);
    }
    
    return {
        aboutLoad
    }

})();
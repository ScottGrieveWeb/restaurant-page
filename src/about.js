import restaurantImage from "./images/background.jpg";

export const aboutPage = (function (){

    function aboutLoad(id){
        const contentDiv = document.getElementById(id);

        const mainImage = document.createElement('img');
        mainImage.src = restaurantImage;
        mainImage.setAttribute("id", "restaurant-img");

        const headLine = document.createElement('h1');
        const headLineNode = document.createTextNode('About Us');
        headLine.appendChild(headLineNode);

        const para = document.createElement('p');
        const paraText = document.createTextNode(`Himalayan Times Restaurant is located on 67-69 Church Street, Larkhall ML9 1EZ. We are for you and all you need to do is decide what you want to eat. We have all your favourite dishes such as European Dishes, Starters, House Specialties, Tandoori Mains and much more. Also, don't forget to provide your feedback.`);
        para.appendChild(paraText);

        contentDiv.appendChild(mainImage);
        contentDiv.appendChild(headLine);
        contentDiv.appendChild(para);
    }
    
    return {
        aboutLoad
    }

})();
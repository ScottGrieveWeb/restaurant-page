export const homePage = (function () {
    function pageLoad(id){
        const contentDiv = document.getElementById(id);

        const headLine = document.createElement("h1");
        const headLineNode = document.createTextNode("My Restaurant");
        headLine.appendChild(headLineNode);

        const tagLine = document.createElement("h3");
        const tagLineNode = document.createTextNode("The best restaurant on the web!");
        tagLine.appendChild(tagLineNode);

        contentDiv.appendChild(headLine);
        contentDiv.appendChild(tagLine);
    }

    return {
        pageLoad
    };
})();
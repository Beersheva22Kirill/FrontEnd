// const a = 1;
// var b;
// let c;

const detailImgElement = document.querySelector(".details-image");
const detailTitleElement = document.querySelector(".details-title");
const thumbnailsAnchors = document.querySelectorAll(".thumbnails_ancor");
const mainSection = document.querySelector("main");
const detailContainer = document.querySelector(".details-container");
const HIDDEN = "hidden";
const POINT = "point";

// for(let i = 0; i < thumbnailsAnchors.length; i++){
//     thumbnailsAnchors[i].addEventListener("click",function(){ //обычный рабочий код
//         setDetails(thumbnailsAnchors[i]);
//     })
// }

thumbnailsAnchors.forEach(anchor => anchor.addEventListener("click", //более профессиональный код
setDetails.bind(undefined,anchor))) // undefined параметр это первый параметр который должен быть This 

function setDetails(anchor){
    detailImgElement.src = anchor.getAttribute("data-details-image");
    detailTitleElement.innerHTML = anchor.getAttribute("data-details-text");
    showDetails();
}

function showDetails (){
    mainSection.classList.remove(HIDDEN);
    detailContainer.classList.add(POINT); 
    setTimeout(function(){
        detailContainer.classList.remove(POINT); 
    })
}

function hideDetails(){
    mainSection.classList.add(HIDDEN);
}
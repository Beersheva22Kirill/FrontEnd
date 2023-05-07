// const a = 1;
// var b;
// let c;

const detailImgElement = document.querySelector(".details-image");
const detailTitleElement = document.querySelector(".details-title");
const thumbnailsAnchors = document.querySelectorAll(".thumbnails_ancor");
const mainSection = document.querySelector("main");
const HIDDEN = "hidden";

for(let i = 0; i < thumbnailsAnchors.length; i++){
    thumbnailsAnchors[i].addEventListener("click",function(){
        setDetails(thumbnailsAnchors[i]);
    })
}

function setDetails(anchor){
    showDetails();
    detailImgElement.src = anchor.getAttribute("data-details-image");
    detailTitleElement.innerHTML = anchor.getAttribute("data-details-text");
}

function showDetails (){
    mainSection.classList.remove(HIDDEN);
}

function hideDetails(){
    mainSection.classList.add(HIDDEN);
}
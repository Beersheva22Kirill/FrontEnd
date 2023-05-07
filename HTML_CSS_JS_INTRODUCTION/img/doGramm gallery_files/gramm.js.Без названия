// const a = 1;
// var b;
// let c;

const detailImgElement = document.querySelector(".details-image");
const detailTitleElement = document.querySelector(".details-title");
const thumbnailsAnchors = document.querySelectorAll(".thumbnails_ancor");

for(let i = 0; i < thumbnailsAnchors.length; i++){
    thumbnailsAnchors[i].addEventListener("click",function(){
        setDetails(thumbnailsAnchors[i]);
    })
}

function setDetails(anchor){
    detailImgElement.src = anchor.getAttribute("data-details-image");
    detailTitleElement.innerHTML = anchor.getAttribute("data-details-text");
}
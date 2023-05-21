
{/* <li class="thumbnails_item">
    <a href="#" class="thumbnails_ancor" data-details-image = "img/galery/1.jpg" data-details-text="The most biuteful image">
        <img class="thumbnails_image" src="img/galery/1.jpg" alt="">
        <span class="thumbnails_title">Cat face</span>
    </a>
</li> */}

const detailImgElement = document.querySelector(".details-image");
const detailTitleElement = document.querySelector(".details-title");
const mainSection = document.querySelector("main");
const detailContainer = document.querySelector(".details-container");
const thumbContainerElement = document.querySelector(".thumbnails_container");
const hideButtonElement = document.querySelector(".hideButton");

import moviesObj from '../movies.json' assert {type: 'json'}


const HIDDEN = "hidden";
const POINT = "point";

let prefix = moviesObj.httpPrefix;
let stringForInner = '';
moviesObj.results.forEach(element => stringForInner += 
    `<li class="thumbnails_item">\
        <a href="#" class= "thumbnails_ancor" data-details-image = "${prefix + element.poster_path}" data-details-text="${element.overview.slice(0,100)}">\
            <img class="thumbnails_image" src="${prefix + element.backdrop_path}" alt="">\
            <span class="thumbnails_title">${element.original_title}</span>\
        </a>\
    </li>`);

thumbContainerElement.innerHTML = stringForInner;
const thumbnailsAnchors = document.querySelectorAll(".thumbnails_ancor");
thumbnailsAnchors.forEach(anchor => anchor.addEventListener("click",setDetails.bind(undefined,anchor))) 

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

hideButtonElement.addEventListener("click",hideDetails)

function hideDetails(){
    mainSection.classList.add(HIDDEN);
}

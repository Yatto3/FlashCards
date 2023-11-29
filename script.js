"use strict";

const fleshCardElem = document.querySelector("[data-card]");
const nextFleshCardButton = document.querySelector("[data-next]");
const prevFleshCardButton = document.querySelector("[data-prev]");
const cardPositions = document.querySelector("[data-position]");

let elemIndex = 0 ;
let isCardFlipped = false;

let elements = [ 
    ["H", "Hydrogen"],
    ["He", "Helium"],
    ["Li", "Lithium"],
    ["Be", "Beryllium"],
    ["B", "Boron"],
    ["C", "Carbon"],
    ["N", "Nitrogen"],
    ["O", "Oxygen"],
    ["F", "Fluorine"],
    ["Ne", "Neon"],
    ["Na", "Sodium"],
    ["Mg", "Magnesium"],
    ["Al", "Aluminium"],
    ["Si", "Silicon"],
    ["P", "Phosphorus"],
    ["S", "Sulfur"],

]

function shuffleElements(elem){
    for ( let i = elem.length - 1  ; i > 0 ; i-- ){

        let tempIndex = elem[i];
        let randomIndex = Math.floor( Math.random() * elem.length );

        elem[i] = elem[randomIndex];
        elem[randomIndex] = tempIndex;
        

    }
    console.log(elements);
}
function flipCard(){
    let deg = 360;
    if ( !isCardFlipped ){
        isCardFlipped = true;
        fleshCardElem.style.transform = `rotateY(${deg}deg)`;
        fleshCardElem.classList.toggle("card-back");
        fleshCardElem.innerHTML = elements[elemIndex][1];        
        return ;
    }
    isCardFlipped = false ;
    fleshCardElem.style.transform = `rotateY(${deg-deg}deg)`;
    fleshCardElem.innerHTML = elements[elemIndex][0];    
    
    return;
}

function initCardContext(){
    fleshCardElem.innerHTML = elements[elemIndex][0];
}

function nextCard(){
    if ( elemIndex == elements.length - 1 ) return;
    
    elemIndex++;
    fleshCardElem.innerHTML = elements[elemIndex][0];
    prevFleshCardButton.style.pointerEvents = "auto";
    updateCardPos();
}

function prevCard(){
    if ( elemIndex == 0 ){
        prevFleshCardButton.style.pointerEvents = "none";
        return;
    }
    prevFleshCardButton.style.pointerEvents = "auto";
    elemIndex--;
    fleshCardElem.innerHTML = elements[elemIndex][0];
    updateCardPos();
}

function updateCardPos(){
    cardPositions.querySelector("span").innerHTML = elemIndex + 1;
}

window.onload = function(){
    shuffleElements(elements);
    initCardContext();
    cardPositions.querySelector("span").innerHTML = elemIndex + 1 ;
    fleshCardElem.addEventListener("click",flipCard);
    nextFleshCardButton.addEventListener("click",nextCard);
    prevFleshCardButton.addEventListener("click",prevCard);
   
}
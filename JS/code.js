//h2 otsikon värinmuutos kun hiiri menee tekstin päälle.
let title = document.getElementById("heading2");

title.addEventListener("mouseenter", changeColorCard);
title.addEventListener("mouseleave", changeColorCard);

//hiirellä tekstin päälle, vaihtuu väri
function changeColorCard(){
  title.classList.toggle("textcolor");
}

//takaisin etusivulle button
function frontPage() {
    location.href="index.html";
}

//Liittyy Listaan, ei toimi..
let ulChildren = document.querySelectorAll(".ul>*")
/**@type{element} */
let elem;
for(elem of ulChildren){
    let hr = document.createElement("hr");
    elem.parentElement.insertBefore(hr,elem);

}
//Listan fontin värin muutos 1. rivillä.
let list = document.querySelector(".list-group-item");

list.classList.add("ulListColor");

//kortin tekstivärin muutos
let cardTC = document.querySelector(".card-text");

cardTC.classList.add("cardTexColor");

//takaisin sivun alkuun button (About). 
function Page() {
  location.href="about.html";
}
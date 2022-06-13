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
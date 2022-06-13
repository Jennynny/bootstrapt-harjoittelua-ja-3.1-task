
/*Rest */
fetch('https://yesno.wtf/api')
.then(response => response.json())
.then(
    data => {
    document.getElementById('print-here').innerHTML =
"<h3>" + data.answer + "</h2>"; 
    document.getElementById('print-here').innerHTML +=
'<img src="' + data.image + '"/>'; 
}
);

/**Haluaisitko korun?kahdessa funktiossa, kyllä ja ei  napeille omat. Else = peruuta mahdollisuus alertissa */
function confirmYes() {
    let confirmYes = confirm("Kiitos! Mahtavaa! Täyttäisitkö yhteydenottolomakkeen tai laittaisitko viestiä instagramissa @jkorut");
    if (confirmYes) {
      alert("Kiitos vielä ja on hienoa, että kotimainen käsityö kiinnostaa sinua.");
    } else {
      alert("Hupsista");
    }
}
function confirmNo(){
    let confirmNo = confirm("Kiitos kun tutustui JKoruihin.")
  if (confirmNo) {
    // if true
    alert("Otathan rohkeasti yhteyttä, jos jokin koruissani jäi mietityttämään.");
  } else {
    // if false
    alert("Haluaisitko sittenkin korun? Täytä vain yhteydenottolomake tai laita viestiä Instagramissa @jkorut");
  }
}


//takaisin sivun alkuun button (galleria)
function Page() {
    location.href="galleria.html";
}


//Alkuun ja takaisin nappulat addEventListener (yhteystiedot.html)
let button1= document.getElementById("home");
let button2= document.getElementById("back");

button1.addEventListener("click",alkuun);
button2.addEventListener("click",takaisin);

function alkuun(){
  location.href="index.html";
}

function takaisin(){
  location.href="yhteystiedot.html";
}

//h3 otsikon manipulointia (yhteystiedot.html 'Laitetaanko pakettiin?') taustaväri + muita mahdollisia muotoiluja.
let h3 = document.getElementById("h3");

h3.classList.add("headlinebg");


//p elementin muotoilua
let p = document.querySelector("p");

p.addEventListener("mouseenter", changeColor);
p.addEventListener("mouseleave", changeColor);
p.addEventListener("click", changeBg);

//hiirellä tekstin päälle, vaihtuu väri, tämä ei nyt toimi, koska koko laatikko on värjätty.
/*function changeColor(){
  p.classList.toggle("textcolor");
}*/
// kun tekstiä klikkaa, vaihtuu testin taustaväri (yhteystiedot.html "JKoruja voit...").
function changeBg(){
  p.classList.toggle("textbg");
}

//lomakkeen 'lähetä' painikkeen alert-viesti. (yhteystiedot.html)
let buttons = document.getElementById("enterButton");

enterButton.addEventListener("click", enter);

function enter(){
  alert("Yhteydenottosi tiedot eivät mene tästä eteenpäin tällä harjoitusverkkosivulla");
}

//Muuntaa kokonaan tekstin taustavärin id:stä kun hiiri on tekstin päällä (yhteystiedot)
let clearfix = document.getElementById("clearfix");

clearfix.addEventListener("mouseenter", changeColor);
clearfix.addEventListener("mouseleave", changeColor);

//hiiri tekstin päälle, taustaväri vaihtuu 
function changeColor(){
  clearfix.classList.toggle("textcolorR");
}


/*
//tekstin ja värin vaihto
document.querySelector("h3").textContent=" Tilaa tuotteita, anna palautetta, tiedustele tilaus- ja korjaustöistä!";
let h3= document.querySelector("h3");
h3.style.color= "pink";

//Tekstin värinvaihto kun hiiri on tekstin päällä
let p = document.querySelector("p");
p.addEventListener("mouseenter",changeColor);
p.addEventListener("mouseleave",changeColor);

function changeColor(){
    p.classList.toggle("textcolor");
}

//tekstin värin vaihto
let m = document.getElementById("clearfix");
m.style.color = "teal";

//taustan värin vaihto
let n = document.getElementById("clearfix");
n.style.backgroundColor = "beige";*/

/*värinvaihtoa?
let aloitus = document.querySelector("#aloitusbox>card-body");
*/

//Ei toimi yhtäaikaa toisen samanlaisen kanssa samalla sivulla.
/*let CardColor = document.getElementById("h2otsikko");

CardColor.addEventListener("mouseenter", changeColor);
CardColor.addEventListener("mouseleave", changeColor);

//hiirellä tekstin päälle, vaihtuu väri
function changeColor(){
  CardColor.classList.toggle("textcolor");
}*/

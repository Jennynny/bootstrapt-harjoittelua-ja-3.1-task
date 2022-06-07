
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

//takaisin etusivulle button
function frontPage() {
    location.href="index.html";
}

//Alkuun ja takaisin nappulat addEventListener
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

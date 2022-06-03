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

/**Haluaisitko korun?kahdessa funktiossa, molemmille napeille omat */
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


//takaisin sivun alkuun butto (galleria)
function Page() {
    location.href="galleria.html";
}

//takaisin etusivulle button
function frontpage() {
    location.href="index.html";
}

/*
// set endpoint and your access key
endpoint = 'latest'
access_key = 'lx3c5h6c9w4zhau3l8j689my4s92gw9zr0qms27ncb7sfntej45pp60qouo5';

// get the most recent exchange rates via the "latest" endpoint:
$.ajax({
url: 'https://metals-api.com/api/' + endpoint + '?access_key=' + access_key,   
dataType: 'jsonp',
success: function(json) {

// exchange rata data is stored in json.rates
alert(json.rates.EUR);

// base currency is stored in json.base
alert(json.base);

// timestamp can be accessed in json.timestamp
alert(json.timestamp);

}
});*/
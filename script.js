//Artūra 6 nodarbība JS//
function atjaunotIetvaru(which) {
  document.getElementById("lapas_saturs").innerHTML = '<' + 'object id="lapas" type="text/html" data="' + which.href + '"></' + 'object>';
}
//JS pogas krāsu pārlādē zaļā krāsā no CSS pārslēdzas//
window.onload = function() {
  zimetuzcanva();
  var navLinks = document.querySelectorAll('.topnav a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
}

function zimetuzcanva() {
  var kanva = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.fillStyle = "green";
  konteksts.fillRect(20, 20, 150, 100);
}

function taisnsturis() {
  var kanva = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.strokeStyle = "red";
  konteksts.strokeRect(60, 60, 150, 100);
}

function aplis() {
  var kanva = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.beginPath();
  konteksts.arc(200, 200, 50, 0, 2 * Math.PI);
  konteksts.lineWidth = 20;
  konteksts.fillStyle = "green";
  konteksts.strokeStyle = "red";
  konteksts.fill();
  konteksts.stroke();
}

function linija() {
  var kanva = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.beginPath();
  konteksts.moveTo(50, 300);
  konteksts.lineTo(250, 350);
  konteksts.lineWidth = 5;
  konteksts.strokeStyle = "green";
  konteksts.stroke();
}

function teksts() {
  var kanva = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.font = "30px Sofia";
  konteksts.fillStyle = "red";
  konteksts.fillText("Sveiki, pasaule!", 200, 150);
}

//pogu ievades logi//
function aprekins() {
  let vards = document.getElementById("vards").value;
  let pirmais = parseFloat(document.getElementById("a").value);
  let otrais = parseFloat(document.getElementById("b").value);

  //pārbaudam vai ievadīts tas ko vēlamies TEST JS//
  if (!vards.match(/^[a-zA-Zā-žĀ-Ž\s]*$/)) {//if (!vards.match(/^[a-zA-Z\s]*$/)) neļau ievadīt piemēram Laimonis1, bet tikai var Vārdu Laimonis un atļauj atstarpes rakstīt un neatpazīst garumzīmes
    //(/^[a-zA-Zā-žĀ-Ž]+$/) paņem LV burtus, bet neļauj atstarpi rakstīt
    //(/^[a-zA-Zā-žĀ-Ž\s]*$/) paņem ar atstarpēm
    //$ izteiksmē beigas no ievades virknes, vienkārši beigas ievades virknei
    //^sākuma ievades virknes//
    //(/^[a-zA-Zā-žĀ-Ž\s]*$/) šī daļa (\s pasaka, ka nedrīkst būt tukšuma zīme//
    alert("Lūdzu ievadīt vārdu!");
    return; //pārbauda vai tiek ievadīts teksts, pretēji izlec alerts(paziņojums aptur darbību tikt tālāk///  
  }
  //neļauj iet tālāk kamēr nav ievadīts 1 un 2 skaitlis====piemērs bez ievadlauka vārds//
  //if (isNaN(pirmais) || isNaN(otrais)){//
  // alert("Ievadi skaitli");//
  //return;//
  //}

  //ievadlauks vārds sākumu pārbauda, lai nav tukšums nestrādāaaq nostrādā kad ir tukšss lauks!!!!!!!!!!!
  if (pirmais === "" || otrais === "" || isNaN(pirmais) || isNaN(otrais)) {
    alert("Ievadi skaitli");
    return;
  }
  //pārbauda caur iebūbēto funkciju, lai ievadītu veselus skaitli, pretējā gadījumā izlec alerts//
  if (!Number.isInteger(Number(pirmais)) || !Number.isInteger(Number(otrais))) {
    alert("Ievadīt tikai veselu skaitli!");
    return;
  }

  let summa = pirmais * otrais;
  console.log("Tevi sauc: " + vards + " Atbilde ir:" + summa);
  document.getElementById("rezultats").innerHTML = "Tevi sauc: " + vards + "<br>Tu ievadīji a vērtību: " + pirmais + "<br> un otrā vērtība: " + otrais + "<br><br> Atbilde ir:" + summa;
}

let age = 100;

if (age < 18) {
  console.log("Nepilngadīgs");
} else if (age >= 18 && age < 65) {
  console.log("Pilngadīgs");
} else {
  console.log("Pensionārs");
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i == 5) {
    console.log("Cipars ir pieci");
  }
}

let j = 0;
while (j <= 10) {
  console.log("Vertibas: " + j);
  j++;
}

let k = 8;

do {
  console.log("DO WHILE:" + k);
  k++;
} while (k <= 10)

let skaitlis = [6, 3, 6, 31, 78, 9];

for (let i = 0; i < skaitlis.length; i++) {
  console.log(skaitlis[i]);
  if (i == 2) {
    console.log("ir");
  }
  if (skaitlis[i] == 31) {
    console.log("IRRR");
  }
}


//navigācijas pogas matemātika JS laukuma un perimetra aprēķini
//parseFloat pārveido tekstu par skaitli//
function aprekinat() {
  let pirmais = parseFloat(document.getElementById("augstums").value);
  let otrais = parseFloat(document.getElementById("paltums").value);
  let laukums = pirmais * otrais;
  let per = (pirmais + otrais) * 2;
  document.getElementById("atbilde").innerHTML = "laukums: " + laukums + "<br>Perimetrs: " + per;
}

/*----------------------Bounce efekts JS+CS---------------------*/

let myText = document.getElementById("bounceTxt").innerHTML, l
let wrapText = "";

for (let i = 0; i < myText.length; i++) {
  wrapText += "<em>" + myText.charAt(i) + "</em>";
}

document.getElementById("bounceTxt").innerHTML = wrapText;

let myLetters = document.getElementsByTagName("em");
let jo = 0;

function applyBounce() {
  setTimeout(function() {
    myLetters[jo].className = "bounce-me";
    jo++;

    if (jo < myLetters.length) {
      applyBounce();
    }
  }, 250);
}

applyBounce();
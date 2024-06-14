window.onload = function() {
  zimetuzcanva();
}

function zimetuzcanva() {
    const kanva = document.getElementById("zimejums");
    const konteksts = kanva.getContext("2d");
    konteksts.fillStyle = "green";
    konteksts.fillRect(20, 20, 150, 100); /1 x 2 y 3 platums 4 augstums/
}


function taisnstūris() {
  const kanva = document.getElementById("zimejums");
  const konteksts = kanva.getContext("2d");
  konteksts.fillStyle = "red"; //figūras aizpildījums/
  konteksts.fillRect(50, 100, 150, 100) //figūras aizpildījums
  konteksts.strokeStyle = "blue"; //kontūras krāsa
  konteksts.strokeRect(50, 100, 150, 100); /1 x 2 y 3 platums 4 augstums/
}
function aplis() {
    const kanva = document.getElementById("zimejums");
    const konteksts = kanva.getContext("2d");
    konteksts.beginPath();
    konteksts.arc(200, 200, 50, 0, 2 * Math.PI); //x, y, rādiuss sākuma leņķis, beigu leņķis
  konteksts.fillStyle = "green";
    konteksts.fill(); //aizpildījums pēc izsaukuma = zīmē
    konteksts.lineWidth=20; //biezums līnijai px
  konteksts.strokeStyle = "blue"; //līnijas krāsa
    konteksts.stroke();
}
function līnija() {
  var kanva = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.beginPath();
  konteksts.moveTo(50, 300);//pārvietot kur vēlos zīmēt
konteksts.lineTo(250, 350);//līnijas zīmēšana līdz beigu punkts x, y
  konteksts.lineWidth=5;
  konteksts.strokeStyle = "red";
  konteksts.stroke();
}
function teksts() {
  var kanva = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.font = "30px Arial";
  konteksts.fillStyle = "red";
  konteksts.fillText("Sveiki, pasaule!", 200, 150); //x,y
  konteksts.strokeText("Sveiki, pasaule!", 200, 150);
  konteksts.lineWidth=5;
  konteksts.strokeSyle = "yellow";
  konteksts.stroke();
}

//14.06 nodarbība JS ar mainīgajiem 
function aprekins() {  
  let pirmais = 5;
  let otrais = 10.5;
  let summa = pirmais / otrais;
  console.log("Atbilde ir:" + summa);//lai izsauktu mainīgo izvadīt..console.log(raksta ko grib lai vieglāk saprastu pašam=apskatīt consule devtool)
  }

function aprekins() {  
  let pirmais = 5;
  let otrais = 10.5;
  let summa = pirmais / otrais;
  console.log("Atbilde ir:" + summa);
}
//komentārs atcelts 2 piemērs}
//JS aprēķina consule logā ko ievadīju
//function aprekins() {  
    //let pirmais = document.getElementById("a").value; /*pirmais skaitlis*/
    //let otrais = document.getElementById("b").value;/*otrais skaitlis*/
    //let summa = pirmais * otrais;
   // console.log("Atbilde ir:" + summa);
//}

//parseFloat() - pārveido tekstu par skaitli un ar komatiem var strādāt
//komentāra piemērs
  //function aprekins() {
   // let pirmais = parseFloat(document.getElementById("a").value);
   // let otrais = parseFloat(document.getElementById("b").value);
   // let summa = pirmais * otrais;
   // console.log("Atbilde ir:" + summa); //paragrāfa vietā atsaucamais, kur vēlamies izvadīt atbildi
    //document.getElementById("rezultats").innerText="Atbilde ir:" + summa;
 // }


//ar teksta logu next piemērs kur tekstu apvieno ar skaitli
function aprekins() {
  let vards = document.getElementById("vards").value;
  let pirmais = parseFloat(document.getElementById("a").value);
  let otrais = parseFloat(document.getElementById("b").value);
  let summa = pirmais * otrais;
  console.log("Tevi sauc: " + vards + " Atbilde ir:" + summa);
  document.getElementById("rezultats").innerHTML = "Tevi sauc: " + vards + "<br>Tu ievadīji a vērtību:" + pirmais + "<br>un otrā vērtība" + otrais + "<br>Atbilde ir:" + summa;
}
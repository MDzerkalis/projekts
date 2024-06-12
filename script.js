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
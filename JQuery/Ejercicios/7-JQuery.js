$(document).ready(iniciarPrograma);

function iniciarPrograma(){
  $('#P1').click(presionarParrafo);
  $('#P2').click(presionarParrafo2);
}

function presionarParrafo() {
  alert("Se ha presionado el parrafo 1");
$('#P1').css("color","red");
}

function presionarParrafo2() {
alert("Se ha presionado el parrafo 2");
$('#P2').css("text-decoration","underline purple");
}

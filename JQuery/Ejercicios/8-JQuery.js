$(document).ready(iniciarPrograma);

function iniciarPrograma() {
$('#T1 tr').click(tablaColor1);
$('#T2 tr').click(tablaColor2);
}

function tablaColor1() {
if($(this).hasClass("verdeclaro")){
$(this).removeClass("verdeclaro");
}else{
  $(this).addClass("verdeclaro");
}
}


function tablaColor2() {
if($(this).hasClass("azulclaro")){
  $(this).removeClass("azulclaro");
}else{
  $(this).addClass("azulclaro");
}
}
// $('#T2 tr').css("background-color","lightgreen")

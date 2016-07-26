// 1.- Averiguar por qué no me deja hacer global a la variable que tiene new Date
// 2.- Averiguar como usar getTimezoneOffset para hacer un the real timezone
// 3.- Averiguar como usar Moment Timezone, estoy segura que funciona como la cosa de PHP que te da automáticamente la hora según zona horaria

// Pruebas para hora mundial (obtenemos la zona horaria local)
/*
var x = new Date();
var timeZone = x.getTimezoneOffset() / 60;
$("#time").html(timeZone);
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////


/* ===== Hora Local =====*/

function actualizarHora (){        
  
  var horaFecha = new Date();  

  var hora = horaFecha.getHours();
  var minuto = horaFecha.getMinutes();
  var segundo = horaFecha.getSeconds();
 
  var horaComp = ( hora < 10 )? "0"+hora : hora; // manera de hacer un if de una sola línea (operador terneario !buscar)
  var minutoComp = ( minuto < 10 )? "0"+minuto : minuto;
  var segundoComp = ( segundo < 10)? "0"+segundo : segundo; 

  var horaLocal = horaComp +':'+ minutoComp + ':' + segundoComp;

  $("#tiempo").html(horaLocal);
};


/* ===== Hora Mundial ===== */

function horarioMundial() {
    var d = new Date();
    
    var hora = d.getHours();
    var minuto = d.getMinutes();
    var segundo = d.getSeconds();

    var arg = ["Buenos Aires", +1];
		var brs = ["Sao Paulo", +1];
		var mex = ["México DF", -1];
		var ven = ["Caracas", 0];
		var ecd = ["Quito", -1];
		var bol = ["La Paz", 0];
    var par = ["Asunción", 0];
		var col = ["Bogotá", -1];


    var horaM = hora - arg;

    var horaComp = ( horaM < 10 )? "0"+horaM : horaM; 
  	var minutoComp = ( minuto < 10 )? "0"+minuto : minuto; 
  	var segundoComp = ( segundo < 10)? "0"+segundo : segundo; 

    var horarioM = horaComp + ":" + minutoComp + ":" + segundoComp;

    $("#demo").html(horarioM);
}

/* ===== Fecha =====*/
function darFecha (){

    var horaFecha = new Date();  
  
    var meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
    var diaSem = new Array('Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado');
 
    var diaActual = horaFecha.getDate();
    var año = horaFecha.getFullYear();
    var mes = horaFecha.getMonth();
    var dia = horaFecha.getDay();

    var fecha = diaSem[dia] + ', ' + diaActual + ' de ' + meses[mes]  + ' de ' + año;

    $("#fecha").html(fecha);
};


/* ===== Ejecutar Hora y Fecha Local ===== */

$(document).ready(function() {

darFecha();
actualizarHora();
horarioMundial();
setInterval(actualizarHora, 1000);
setInterval(horarioMundial, 1000);
});

/* ===== Modal ===== */

// Llama al modal
var modal = document.getElementById('myModal');

// Llama al botón que abre el modal
var btn = document.getElementById("myBtn");

// Llama al span que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando hace click en el botón, se abre el modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// cuando se hace click en el span (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando se hace click en cualquier parte fuera del modal, lo cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    






function konwertuj() {

var KM = document.getElementById("KM").value;
var KW = document.getElementById("KW");

var kilowaty = 0.74;

var suma = KM * kilowaty;

KW.innerHTML = suma + " KW";

}

var element = document.getElementById("KM");

element.addEventListener("input", konwertuj, false);
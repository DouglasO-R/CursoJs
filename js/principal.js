var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista Aparecida";

var trPaciente = document.querySelector("#primeiro-paciente");
var peso = document.querySelector(".info-peso").textContent;


var altura = document.querySelector(".info-altura").textContent;


var imc = peso / (altura * altura);
var Tdimc = document.querySelector(".info-imc");
Tdimc.textContent = imc;

console.log(peso);
console.log(altura);
console.log(imc);
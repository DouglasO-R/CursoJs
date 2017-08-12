var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista Aparecida";

var Paciente = document.querySelector("#primeiro-paciente");
var peso = Paciente.querySelector(".info-peso").textContent;


var altura = Paciente.querySelector(".info-altura").textContent;

var alturaV = true;
var pesoV = true;
var Tdimc = document.querySelector(".info-imc");

if(altura >= 3.00 || altura <= 0)
    {
        console.log("altura invalida")
        alturaV = false;
        Tdimc.textContent = "Altura inválida!";
    }
if(peso >= 100 || peso <= 0)
    {
        console.log("peso invalido");
        pesoV = false;
        Tdimc.textContent = "Peso inválido!";
    }    
 if(alturaV && pesoV)
    {
        var imc = peso / (altura * altura);       
        Tdimc.textContent = imc;
    }   




console.log(peso);
console.log(altura);
console.log(imc);
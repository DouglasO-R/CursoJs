var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista Aparecida";

var pacientes = document.querySelectorAll(".paciente");
var adiciona = document.querySelector("#btnAdiciona");

for(var i = 0; i < pacientes.length; i++)
    {
        var paciente = pacientes[i];

        var peso = paciente.querySelector(".info-peso").textContent;     
        var altura = paciente.querySelector(".info-altura").textContent;
  
        var tdImc = paciente.querySelector(".info-imc");

        var pesoV = true;
        var alturaV = true;

        if (peso <= 0 || peso >= 100) {
            console.log("Peso inválido!");
            pesoV = false;
            tdImc.textContent = "Peso inválido";
            paciente.classList.add("paciente-invalido");
        }

        if (altura <= 0 || altura >= 2.50) {
            console.log("Altura inválida!");
            alturaV = false;
            tdImc.textContent = "Altura inválida";
            paciente.classList.add("paciente-invalido");
        }

         if (alturaV && pesoV) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
         }         
    }

     adiciona.addEventListener("click",ola);

     var form = document.querySelector("#form-adiciona");

    function ola(){
         event.preventDefault();

         var nome = form.nome.value;
         var peso = form.peso.value;
         var altura = form.altura.value;
         var gordura = form.gordura.value;
   
         var Npaciente = document.createElement("tr");

         var Nnome = document.createElement("td");
         var Npeso = document.createElement("td");
         var Naltura = document.createElement("td");
         var Ngordura = document.createElement("td");
         var Nimc = document.createElement("td");

         Nnome.textContent = nome;
         Npeso.textContent = peso;
         Naltura.textContent = altura;
         Ngordura.textContent = gordura;
         
         Npaciente.appendChild(Nnome);
         Npaciente.appendChild(Npeso);
         Npaciente.appendChild(Naltura);
         Npaciente.appendChild(Ngordura);

         var tabela = document.querySelector("#tabela-pacientes");

         tabela.appendChild(Npaciente);

         console.log(Nnome);
         console.log(Npaciente);
         console.log(altura);
         console.log(gordura);
          
    }
    



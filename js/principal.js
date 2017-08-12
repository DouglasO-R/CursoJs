var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista Aparecida";

var pacientes = document.querySelectorAll(".paciente");

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

    



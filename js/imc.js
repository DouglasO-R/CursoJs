var titulo = document.querySelector(".titulo"),
    pacientes = document.querySelectorAll(".paciente");
titulo.textContent = "Nutricionista Aparecida";


for(var i = 0; i < pacientes.length; i++)
    {
        var paciente = pacientes[i];

        var peso = paciente.querySelector(".info-peso").textContent;     
        var altura = paciente.querySelector(".info-altura").textContent;
  
        var tdImc = paciente.querySelector(".info-imc");

        var pesoV = validaPeso(peso);
        var alturaV = validaAltura(altura);

        if (!pesoV) {
            console.log("Peso inválido!");
            pesoV = false;
            tdImc.textContent = "Peso inválido";
            paciente.classList.add("paciente-invalido");
        }

        if (!alturaV) {
            console.log("Altura inválida!");
            alturaV = false;
            tdImc.textContent = "Altura inválida";
            paciente.classList.add("paciente-invalido");
        }

        if (alturaV && pesoV) {
         var imc = calculaImc(peso,altura);
         tdImc.textContent = imc;
        }         
    }
    
    function calculaImc(peso,altura){
        var imc = peso / (altura * altura);
        return imc.toFixed(2);
    }

    function validaPeso(peso){
        if(peso > 0 && peso <= 300){
            return true;
        } else {
            return false;
        }
    }

    function validaAltura(altura){
        if(altura > 0 && altura < 3.0){
            return true;
        } else {
            return false;
        }
    }
    



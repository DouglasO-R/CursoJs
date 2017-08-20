var adiciona = document.querySelector("#btnAdiciona");
adiciona.addEventListener("click",adicionaT);

function adicionaT(){
    event.preventDefault();
    
    
    var form = document.querySelector("#form-adiciona");

    var paciente = dadosForm(form);
    
    var Nlinha = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(Nlinha);
    form.reset();

    console.log(paciente);
     
}

function dadosForm(form)
{
    var paciente = {
     nome: form.nome.value,
     peso: form.peso.value,
     altura: form.altura.value,
     gordura: form.gordura.value,
     imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
    
}

function montaTr(paciente)
{
    var Npaciente = document.createElement("tr");
    Npaciente.classList.add("paciente");
    

    
    var Npeso = montaTd(paciente.peso,"peso");
    var Naltura = montaTd(paciente.altura,"altura");
    var Ngordura = montaTd(paciente.gordura,"gordura");
    var Nimc = montaTd(paciente.imc,"imc");
    
     
        
    Npaciente.appendChild(montaTd(paciente.nome,"nome"));
    Npaciente.appendChild(Npeso);
    Npaciente.appendChild(Naltura);
    Npaciente.appendChild(Ngordura);
    Npaciente.appendChild(Nimc);
    
    return Npaciente;
}

function montaTd(dado,classe){

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add("info-" + classe);

    return td;
}
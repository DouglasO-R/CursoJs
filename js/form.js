var adiciona = document.querySelector("#btnAdiciona");
adiciona.addEventListener("click",adicionaT);

function adicionaT(){
    var adiciona = document.querySelector("#btnAdiciona"),
        form = document.querySelector("#form-adiciona"),
        paciente = dadosForm(form),
        Nlinha = montaTr(paciente),
        tabela = document.querySelector("#tabela-pacientes");
    
    event.preventDefault();
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
    var Npaciente = document.createElement("tr"),       
        Npeso = montaTd(paciente.peso,"peso"),
        Naltura = montaTd(paciente.altura,"altura"),
        Ngordura = montaTd(paciente.gordura,"gordura"),
        Nimc = montaTd(paciente.imc,"imc");     
         
    Npaciente.classList.add("paciente");    
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
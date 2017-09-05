var adiciona = document.querySelector("#btnAdiciona");
adiciona.addEventListener("click",adicionaT);

function adicionaT(){
    event.preventDefault();

    var adiciona = document.querySelector("#btnAdiciona"),
        form = document.querySelector("#form-adiciona"),
        paciente = dadosForm(form),
        erros = validaPaciente(paciente),  
        msgErro = document.querySelector("#mensagem-erro");      

    if (erros.length > 0){
        exibeErro(erros);
        return;
    }

    adicionaTabela(paciente);

    form.reset();

    msgErro.innerHTML = "";   
  
}

function adicionaTabela(paciente) {
    var Nlinha = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(Nlinha);
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

function validaPaciente(paciente) {
   var erros = [];

    if(!validaPeso(paciente.peso)) {
       erros.push("peso invalido");
    }
    
    if(!validaAltura(paciente.altura)) {
        erros.push("altura invalida");
    } 

    if(paciente.nome == "") {
        erros.push("nome invalido");
    }

    if(paciente.gordura == "") {
        erros.push("gordura invalido");
    }
    return erros;
}

function exibeErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    },);
}
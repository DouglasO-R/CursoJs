var buscaPaciente = document.querySelector("#btnBusca");

buscaPaciente.addEventListener("click",function () {

    var req = new XMLHttpRequest();
    req.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    req.addEventListener("load", function() {
        
        var result = req.responseText;
        console.log(typeof result);
        var pacientes = JSON.parse(result);
        console.log(pacientes);

        pacientes.forEach( function(paciente){
            adicionaTabela(paciente);

        });
    });

    req.send();
});
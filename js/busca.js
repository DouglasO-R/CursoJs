var buscaPaciente = document.querySelector("#btnBusca");

buscaPaciente.addEventListener("click",function () {

    var req = new XMLHttpRequest();
    req.open("GET", "https://api-pacientes.herokuapp.com/paci11entes");
    
    req.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

      if(req.status == 200) {

        erroAjax.classList.add("invisivel");
        var result = req.responseText;
        var pacientes = JSON.parse(result);

        pacientes.forEach( function(paciente){
            adicionaTabela(paciente);

        });

      }else{
          
        erroAjax.classList.remove("invisivel");

      }

    });

    req.send();
});
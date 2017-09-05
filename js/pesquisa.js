var campoPesquisa = document.querySelector("#pesquisar-tabela");

campoPesquisa.addEventListener("input",function() {        
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
        for(var i = 0; i < pacientes.length; i += 1) {
                var paciente = pacientes[i];
                var tdNome = paciente.querySelector(".info-nome");
                var nome = tdNome.textContent;
                var expressao = new RegExp(this.value, "i");

                console.log(this.value) ;

                if(!expressao.test(nome)) {
                    paciente.classList.add("invisivel");
                } else {
                    paciente.classList.remove("invisivel");
                }
                
            }

    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var pacientes = paciente[i];
            paciente.classList.remove("invisivel")
        }
    }
 


});
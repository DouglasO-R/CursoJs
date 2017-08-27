var tabela = document.querySelector("#tabela-pacientes");
    tabela.addEventListener("dblclick", function(event) {
        var eventoAlvo = event.target;
        var paiDoEvento = eventoAlvo.parentNode;
        paiDoEvento.classList.add("fadeOut");
        setTimeout(function() {
        paiDoEvento.remove();
        },500);        
});


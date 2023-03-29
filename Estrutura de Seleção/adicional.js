function verificachecagem(texto) {
    if (texto == "padrao"){
        document.getElementById("qtdePadrao").disabled = 
        !document.getElementById("qtdePadrao").disabled
    }

    if (texto == "kit"){
        document.getElementById("qtdeKit").disabled = 
        !document.getElementById("qtdeKit").disabled
    }

    if (texto == "suplemento"){
        document.getElementById("qtdeSuplemento").disabled = 
        !document.getElementById("qtdeSuplemento").disabled
    }

    if (texto == "arroz"){
        document.getElementById("qtdeArroz").disabled = 
        !document.getElementById("qtdeArroz").disabled
    }

    if (texto == "feijao"){
        document.getElementById("qtdeFeijao").disabled = 
        !document.getElementById("qtdeFeijao").disabled
    }
}

function calcularadicional() {
    let total = 0
    if(document.getElementById("padrao").checked){
    total = total + 50 * document.getElementById("qtdePadrao").value
    }

    if(document.getElementById("kit").checked){
    total = total + 25 * document.getElementById("qtdeKit").value
    }

    if(document.getElementById("suplemento").checked){
    total = total + 10 * document.getElementById("qtdeSuplemento").value
    }

    if(document.getElementById("arroz").checked){
     total = total + 5 * document.getElementById("qtdeArroz").value
    }

    if(document.getElementById("feijao").checked){
    total = total + 2 * document.getElementById("qtdeFeijao").value
    }

    document.getElementById("total").innerHTML = "O total de pontos deu: " + total + " pontos"
}


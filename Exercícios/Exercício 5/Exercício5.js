function desconto(){
    let preco = Number (document.getElementById("preco").value)

    let desconto = preco * 0.90
    document.getElementById("desconto").innerHTML = "Preço com o desconto: " + desconto + " reais"
}
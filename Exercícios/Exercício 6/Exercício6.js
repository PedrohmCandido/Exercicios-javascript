function calculasalario(){
    let salarioF = Number (document.getElementById("salarioF").value)
    let vendas = Number (document.getElementById("vendas").value)

    let comissao = vendas * 0.04

    let total = salarioF + comissao

    document.getElementById("comissao").innerHTML = "Comissão: " + comissao
    document.getElementById("salarioT").innerHTML = "Salário Final " + total
}
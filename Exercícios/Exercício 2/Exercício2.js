function multiplica(){
    let numero1 = Number (document.getElementById("n1").value)
    let numero2 = Number (document.getElementById("n2").value)
    let numero3 = Number (document.getElementById("n3").value)

    let multiplicacao = numero1 * numero2 * numero3

    document.getElementById("multiplicacao").innerHTML = "Multiplicação: " + multiplicacao
}
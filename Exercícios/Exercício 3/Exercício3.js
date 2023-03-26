function divisao(){
    let numero1 = Number (document.getElementById("n1").value)
    let numero2 = Number (document.getElementById("n2").value)

    let divisao = numero1 / numero2
    document.getElementById("divisao").innerHTML = "Divisão: " + divisao
}
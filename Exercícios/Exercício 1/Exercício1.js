function subtracao(){
    let numero1 = Number (document.getElementById("n1").value)
    let numero2 = Number (document.getElementById("n2").value)

    let subtracao = numero1 - numero2
    document.getElementById("menos").innerHTML = "Subtração: " + subtracao
}
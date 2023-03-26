function peso(){
    let peso = Number (document.getElementById("peso").value)

    let novopeso1 = peso * 1.15
    let novopeso2 = peso * 0.80
    document.getElementById("novopeso1").innerHTML = "Peso atual após um aumento de 15%: " + Math.round(novopeso1)
    document.getElementById("novopeso2").innerHTML = "Peso atual após perda de 20%: " + Math.round(novopeso2)

}
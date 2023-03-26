function gramas(){
    let peso = Number (document.getElementById("peso").value)

    let gramas = peso * 1000
    document.getElementById("gramas").innerHTML = "Peso: " + gramas + " gramas"
}m
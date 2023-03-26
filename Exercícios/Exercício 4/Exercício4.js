function media(){
    let nota1 = Number (document.getElementById("n1").value)
    let nota2 = Number (document.getElementById("n2").value)

    let media = ((nota1 * 2) + (nota2 * 3)) / 5
    document.getElementById("media").innerHTML = "Média ponderada: " + media
}
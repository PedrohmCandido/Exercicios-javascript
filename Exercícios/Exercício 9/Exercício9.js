function area(){
    let base1 = Number (document.getElementById("base1").value)
    let base2 = Number (document.getElementById("base2").value)
    let altura = Number (document.getElementById("altura").value)

    let area = ((base2 + base1) * altura) / 2
    document.getElementById("Área").innerHTML = "Área do trapézio: " + Math.round(area)
}
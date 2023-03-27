function condicional(){
    let kits = Number (document.getElementById("kits").value)
    let pontos
    if(kits >= 80){
        pontos = 5000
    }
    else if ((kits < 80) && (kits >= 64)){
        pontos = 4000
    }
    else if ((kits < 64) && (kits >= 40)){
        pontos = 2000
    }
    else if ((kits <40) && (kits >= 16)){
        pontos = 1000
    }
    else if ((kits < 16 ) && (kits >= 0)){
        pontos = 0
    }
    else {
        pontos = -1 // indica que a quantidade de kits é negativa //
    }
    if (pontos == -1){
        document.getElementById("pontos").innerHTML = "Impossível calcular"
    }
    else{
        document.getElementById("pontos").innerHTML = "pontos: " + pontos 
    }

}
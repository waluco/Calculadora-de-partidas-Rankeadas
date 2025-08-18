let vitoria = calculaPartidaRankeada(102, 1)
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

if (vitoria < 10){
    console.log("O Herói tem saldo de " + vitoria + " e está no nível " + nivel[0] )
}else if (vitoria >= 11 && vitoria <= 20 ){
    console.log("O Herói tem saldo de " + vitoria + " e está no nível " + nivel[1] )
}else if (vitoria >= 21 && vitoria <= 50 ){
    console.log("O Herói tem saldo de " + vitoria + " e está no nível " + nivel[2] )
}else if (vitoria >= 51 && vitoria <= 80 ){
    console.log("O Herói tem saldo de " + vitoria + " e está no nível " + nivel[3] )
}else if (vitoria >= 81 && vitoria <= 90 ){
    console.log("O Herói tem saldo de " + vitoria + " e está no nível " + nivel[4] )
}else if (vitoria >= 91 && vitoria <= 100 ){
    console.log("O Herói tem saldo de " + vitoria + " e está no nível " + nivel[5] )
}else{
    console.log("O Herói tem saldo de " + vitoria + " e está no nível " + nivel[6] )
}

function calculaPartidaRankeada(vitoria, derrota) {
    let resultado = vitoria - derrota
    return(resultado)    
}



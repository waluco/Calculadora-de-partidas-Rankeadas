function calculaVitoria(vitorias, derrotas) {
  saldo = vitorias - derrotas;
  return saldo;
}

function defineNivel(tipo) {
  if (resultado <= 10) {
    tipo = "Ferro";
  } else if (resultado >= 11 && resultado <= 20) {
    tipo = "Bronze";
  } else if (resultado >= 21 && resultado <= 50) {
    tipo = "Prata";
  } else if (resultado >= 51 && resultado <= 80) {
    tipo = "Ouro";
  } else if (resultado >= 81 && resultado <= 90) {
    tipo = "Diamante";
  } else if (resultado >= 91 && resultado <= 100) {
    tipo = "Lendário";
  } else tipo = "Imortal";
  return tipo
}

resultado = calculaVitoria(15, 1);
tipo = defineNivel(resultado)
//console.log(resultado);

console.log("O Herói tem de saldo de: " + resultado + " está no nível de: " + tipo)




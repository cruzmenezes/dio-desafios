/*
O IMC - INDICE DE MASSA CORPORAL

FORMULA DO IMC:
IMC = PESO / (ALTURA * ALTURA)

ELABORE UM ALGORITMO QUE DADO O PESO E A ALTURA DE UM ADULTO E MOSTRE SUA CONDIÇÃO 
CONFORME A TABELA ABAIXO:

IMC ADULTO CONDIÇÃO:
- ABAIXO DE 18.5 ABAIXO DO PESO;
- ENTRE 18.5 E 25 PESO NORMAL;
- ENTRE 25 A 30 ACIMA DO  PESO;
- ENTRE 30 A 40 OBESO;
- ACIMA DE 40 OBESO GRAVE;
*/

// start

const altura = 1.65;
const peso = 80;
const imc = peso / Math.pow(altura, 2);

console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log("IMC ABAIXO");
} else if (imc >= 18.5 && imc < 25) {
    console.log("IMC NORMAL");
} else if (imc >= 25 && imc < 30) {
    console.log("IMC ACIMA DO PESO");
} else if (imc >= 30 && imc < 40) {
    console.log("IMC OBESO");
} else {
    console.log("IMC GRAVE");
}
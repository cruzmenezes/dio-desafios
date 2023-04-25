/* FAÇA UM PROGRAMA QUE CALCULAR O VALOR DE UMA VIAGEM.

VARIAVEIS E OPERADORES
let = let variavel = 10;  'o vlor pode mudar ao logo do ciclo de vida do programa'
const = const variavel = 20; 'O valor não mudar depois que o mesmo for declarado'

+ = adição
- = subtração
* = multiplicação
/ = divisão

três variaveis serão declarada, sendo elas:
1 - preço do combustivel;
2 - gasto medio do combustivel do carro por km;
3 - distância em km da viagem;

*/

// declaração de variaveis
const precoCombustivel = 6.0;
const kmPorLitros = 10;
const distanciaEmKm = 200;
// fim variaveis

// inicio logica

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));

// fim logica

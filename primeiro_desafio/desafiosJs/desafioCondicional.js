// ESTRUTURAS CONDICIONAIS

/* FAÇA UM PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM.

5 VARIAVEIS SENDO ELAS:
1 - PREÇO DO ETANOL;
2 - PREÇO DO GASOLINA;
3 - TIPO DE COMBUSTIVEL UTILIZADO PELO VEICULO;
4 - GASTO MEDIO DE COMBUSTIVEL POR KM;
5 - DISTANCIA EM KM DA VIAGEM;

*/

const precoGasolina = 6.0;
const precoEtanol = 4.0;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol'

const litrosConsumido = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === 'Gasolina') {

    const valorGasto = litrosConsumido * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = litrosConsumido * precoGasolina;
    console.log(valorGasto.toFixed(2));

}



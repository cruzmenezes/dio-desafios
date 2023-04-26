/*

ALGORITMO QUE CALCULE O FORMA DE PAGAMENTO DE UM PRODUTO
COM CONDIÇÃO ABAIXO:

CONDIÇÃO DE PAGAMENTO:

1 - A VISTA DEBITO, 10% DE DESCONTO;
2 - A VISTA NO DINHEIRO OU PIX, 15% DE DESCONTO
3 - EM DUAS VEZES, PREÇO NORMAL DA ETIQUETA SEM JUROS;
4 - ACIMA DE  DUAS VEZES, PREÇO NORMAL DA ETIQUETA MAIS 10% JUROS;

*/





const precoEtiqueta = 100;
const formaPagamento = 5;


if (formaPagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));

} else if (formaPagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));

} else if (formaPagamento === 3){
    console.log(precoEtiqueta);

} else if(formaPagamento === 4) {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));

} else {
    console.log('forma de pagamento não encontrado!!!');
}
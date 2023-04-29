
// for (let i = 1; i <= 10; i++) {
//     const element = (i * 5);
//     console.log(i)

// }

// CRIA UM PROGRAMA QUE SEJA CAPAZ DE PERCORRER UMA LISTA DE NUMERO E 
// IMPRIMA CADA NUMERO DA LISTA.

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero);
    }

}
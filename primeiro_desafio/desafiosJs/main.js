

const { gets, print } = require('./funcoe-aux');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;


for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);
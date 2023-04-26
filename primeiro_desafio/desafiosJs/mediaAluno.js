

/*

1 - FAÇA UM ALGORITIMO QUE DADO AS 3 NOTAS TIRADAS POR UM ALUNO EM UM 
SEMESTRE DA FACULDADE CALCULE E IMPRIMA A SUA MEDIA E A SUA CLASSIFICAÇÃO
CONFORME A TABELA ABAIXO.

MEDIA = (NOTA1 + NOTA2 + NOTA3) / 3;

CLASSIFICAÇÃO:

- MEDIA MENOR QUE 5, REPROVADO;
- MEDIA ENTRE 5 A 7, RECUPERAÇÃO;
- MEDIA ACIMA 7 , APROVADO, PARABÉNS... ;

*/




//  START

const nota1 = 5;
const nota2 = 8;
const nota3 = 9;

const media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(2))

if (media < 5) {
    console.log("REPROVADO");
} else if (media >= 5 && media <= 7) {
    console.log("RECUPERAÇÃO");
} else {
    console.log("APROVADO, PARABÉNS!!!");
}

//END 
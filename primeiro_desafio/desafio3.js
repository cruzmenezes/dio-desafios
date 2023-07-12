// ESCOPO DO DESAFIO 3

// Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

// O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

// Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.



// Função para exibir uma mensagem e obter a escolha do usuário
function obterEscolha(mensagem) {
    return prompt(mensagem);
  }
  
  
  // Função para exibir uma mensagem na tela
  function exibirMensagem(mensagem) {
    console.log(mensagem);
  }
  
  // Função para solicitar as tecnologias que o usuário deseja aprender
  function obterTecnologias() {
    const tecnologias = [];
    let adicionarMais = true;
  
    while (adicionarMais) {
      const tecnologia = obterEscolha('Digite uma tecnologia que você gostaria de aprender:');
      tecnologias.push(tecnologia);
  
      const resposta = obterEscolha('Tem mais alguma tecnologia que você gostaria de aprender? (Digite "sim" ou "não")');
      adicionarMais = (resposta.toLowerCase() === 'sim');
    }
  
    return tecnologias;
  }
  
  // Fluxo principal do jogo
  function iniciarJogo() {
    exibirMensagem('Bem-vindo ao jogo de escolhas de carreira na área de programação!');
  
    // Escolha da área
    const area = obterEscolha('Escolha uma área: Front-End ou Back-End');
  
    if (area.toLowerCase() === 'front-end') {
      exibirMensagem('Ótima escolha! Agora você pode optar por aprender React ou Vue.');
  
      const escolhaFrontEnd = obterEscolha('Digite a tecnologia que você gostaria de aprender (React ou Vue):');
  
      exibirMensagem(`Parabéns! Você escolheu aprender ${escolhaFrontEnd} no Front-End.`);
  
      // Especialização ou Fullstack
      const especializacaoFrontEnd = obterEscolha('Você gostaria de se especializar em Front-End ou se desenvolver como Fullstack?');
  
      if (especializacaoFrontEnd.toLowerCase() === 'front-end') {
        exibirMensagem('Ótimo! Você está no caminho certo para se tornar um especialista em Front-End!');
      } else if (especializacaoFrontEnd.toLowerCase() === 'fullstack') {
        exibirMensagem('Excelente escolha! Ser um desenvolvedor Fullstack permitirá que você trabalhe em várias áreas do desenvolvimento web.');
      }
  
    } else if (area.toLowerCase() === 'back-end') {
      exibirMensagem('Ótima escolha! Agora você pode optar por aprender C# ou Java.');
  
      const escolhaBackEnd = obterEscolha('Digite a tecnologia que você gostaria de aprender (C# ou Java):');
  
      exibirMensagem(`Parabéns! Você escolheu aprender ${escolhaBackEnd} no Back-End.`);
  
      // Especialização ou Fullstack
      const especializacaoBackEnd = obterEscolha('Você gostaria de se especializar em Back-End ou se desenvolver como Fullstack?');
  
      if (especializacaoBackEnd.toLowerCase() === 'back-end') {
        exibirMensagem('Ótimo! Você está no caminho certo para se tornar um especialista em Back-End!');
      } else if (especializacaoBackEnd.toLowerCase() === 'fullstack') {
        exibirMensagem('Excelente escolha! Ser um desenvolvedor Fullstack permitirá que você trabalhe em várias áreas do desenvolvimento web.');
      }
  
    } else {
      exibirMensagem('Opção inválida. Reinicie o jogo e escolha uma área válida.');
      return;
    }
  
    // Escolha das tecnologias para aprender
    exibirMensagem('Agora, vamos escolher as tecnologias que você gostaria de aprender.');
  
    const tecnologiasEscolhidas = obterTecnologias();
  
    exibirMensagem('Parabéns por escolher as seguintes tecnologias:');
    for (const tecnologia of tecnologiasEscolhidas) {
      exibirMensagem(`- ${tecnologia}`);
    }
  
    exibirMensagem('Obrigado por jogar! Boa sorte em sua jornada de aprendizado.');
  
  }
  
  // Iniciar o jogo
  iniciarJogo();
  
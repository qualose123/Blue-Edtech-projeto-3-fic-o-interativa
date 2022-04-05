const prompt = require("prompt-sync")();
//sinopse

do {
  console.log(
    "\nAjude Drake a colocar a vida nos trilhos denovo, atualmente ele está desempregado, e com pouco dinheiro.Você tem 9 ações para tentar por Drake nos trilhos, caso a saúde ou a autoestima de drake chegue a 0 você perde o jogo,caso a autoestima de Drake chegue a 100, você deu um norte e algum sentido pra viver a Drake, sendo assim, você ganha o jogo \n"
  );
  //status Drake e funções de passagem de tempo por ação
  let Drake = {
    dinheiro: 100,
    saude: 80,
    dia: 1,
    autoestima: 50,
    horas: 7,
    gastodesaude: function () {
      this.saude = this.saude -= 30;
    },
    recuperarenergia: function () {
      this.saude = this.saude + 30;
      if (this.saude >= 100) {
        console.log("Drake está a todo o vapor!, cheio de energia!");
      }
    },
    gastodedinheiro: function () {
      this.dinheiro = this.dinheiro -= 30;
      if (this.dinheiro < 30) {
        console.log("Drake está com pouco dinheiro, cuidado!");
      }
      if (this.dinheiro < 0) {
        ("ITAU INFORMA: você entrou em cheque especial");
      }
    },
    aumentodinheiro: function () {
      this.dinheiro = this.dinheiro + 30;
    },

    passatempoTres: function () {
      this.horas = this.horas + 3;
      if (this.horas >= 24) {
        this.horas = 0;
      }
      if (this.horas == 0) {
        this.dia++;
      }
    },
    passatempoum: function () {
      this.horas = this.horas + 1;
      if (this.horas >= 24) {
        this.horas = 0;
      }
      if (this.horas == 0) {
        this.dia++;
      }
    },
    passatempodois: function () {
      this.horas = this.horas + 2;
      if (this.horas >= 24) {
        this.horas = 0;
      }
      if (this.horas == 0) {
        this.dia++;
      }
    },
    passatempooito: function () {
      this.horas = this.horas + 8;
      if (this.horas >= 24) {
        this.horas = 0;
      }
      if (this.horas == 0) {
        this.dia++;
      }
    },
    aumentoautoestima: function () {
      this.autoestima = this.autoestima + 20;
    },
    abaixarautoestima: function () {
      this.autoestima = this.autoestima -= 20;
    },
  };
  console.clear();
  console.log(`Dinheiro:${Drake.dinheiro}
Saúde:${Drake.saude}
Dia:${Drake.dia}
Autoestima:${Drake.autoestima}
Horas:${Drake.horas}`);

  while (true) {
    //VALIDAÇÃO E PRIMEIRA AÇÃO
    console.log(`\nRESPONDA AS OPÇÕES COM [1], [2] OU [3]\n`);
    console.log(
      "\nplan nan nan!(alarme), agora são exatamente 7 horas da manhã\n"
    );
    console.log("\nEscolha uma dentre três ações para Drake executar\n");
    console.log(`1- Dormir mais um pouco
2- Escovar os dentes e Tomar café
3- Ligar o computador e instalar o Pacote Office`);
    let perg1 = +prompt();

    for (let i = 0; perg1 !== 1 || perg1 !== 2 || perg1 !== 3; i++) {
      if (perg1 == 1) {
        Drake.passatempoTres();
        break;
      } else if (perg1 == 2) {
        Drake.passatempoum();
        Drake.recuperarenergia();
        break;
      } else if (perg1 == 3) {
        Drake.passatempodois();
        break;
      }
      perg1 = +prompt("Insira um número válido(1, 2 ou 3)");
    }
    console.clear();
    console.log(`Dinheiro:${Drake.dinheiro}
Saúde:${Drake.saude}
Dia:${Drake.dia}
Autoestima:${Drake.autoestima}
Horas:${Drake.horas}`);
    console.log();

    //VALIDAÇÃO E SEGUNDA AÇÃO
    console.log("\nEscolha uma dentre três ações para Drake executar\n");
    console.log(`1- Fazer o curriculum com o Microsoft Word
2- Lavar louça
3- ver 2 episódios de Game of Thrones`);
    let perg2 = +prompt();
    for (let i = 0; perg2 !== 1 || perg2 !== 2 || perg2 !== 3; i++) {
      if (perg2 == 1) {
        Drake.passatempoum();
        Drake.gastodesaude();
        break;
      } else if (perg2 == 2) {
        Drake.passatempoum();
        Drake.gastodesaude();
        break;
      } else if (perg2 == 3) {
        Drake.gastodesaude();
        Drake.passatempodois();
        break;
      }

      perg2 = +prompt("Insira um número válido(1, 2 ou 3)");
    }
    if (Drake.saude <= 0) {
      console.log("A saude de Drake chegou a 0, você fracassou");
      break;
    }
    if (Drake.autoestima <= 0) {
      console.log("Drake entrou em depressão e se matou, você fracaçou");
      break;
    }
    if (Drake.autoestima >= 100) {
      console.log("Parabéns você venceu o jogo!");
      break;
    }
    console.clear();
    console.log(`Dinheiro:${Drake.dinheiro}
  Saúde:${Drake.saude}
  Dia:${Drake.dia}
  Autoestima:${Drake.autoestima}
  Horas:${Drake.horas}`);
    console.log();

    //VALIDAÇÃO E TERCEIRA AÇÃO
    console.log("\nEscolha uma dentre três ações para Drake executar\n");
    console.log(`1- Ir para academia para treino de bíceps e costas+30 minutos de cardio
 2-Distribuir os currículos nos comércios locais e na cidade vizinha
 3- jogar 3 partidas de league of legends`);
    let perg3 = +prompt();
    for (let i = 0; perg3 !== 1 || perg3 !== 2 || perg3 !== 3; i++) {
      if (perg3 == 1) {
        Drake.passatempodois();
        Drake.recuperarenergia();
        Drake.aumentoautoestima();
        break;
      } else if (perg3 == 2) {
        Drake.passatempooito();
        Drake.gastodesaude();
        Drake.gastodedinheiro();
        Drake.aumentoautoestima();
        break;
      } else if (perg3 == 3) {
        Drake.gastodesaude();
        Drake.passatempodois();
        Drake.abaixarautoestima();
        break;
      }

      perg3 = +prompt("Insira um número válido(1, 2 ou 3)");
    }
    if (Drake.saude <= 0) {
      console.log("A saude de Drake chegou a 0, você fracassou");
      break;
    }
    if (Drake.autoestima <= 0) {
      console.log("Drake entrou em depressão e se matou, você fracaçou");
      break;
    }
    if (Drake.autoestima >= 100) {
      console.log("Parabéns você venceu o jogo!");
      break;
    }
    console.clear();
    console.log(`Dinheiro:${Drake.dinheiro}
Saúde:${Drake.saude}
Dia:${Drake.dia}
Autoestima:${Drake.autoestima}
Horas:${Drake.horas}`);
    console.log();

    //   //VALIDAÇÃO E QUARTA AÇÃO
    console.log("\nEscolha uma dentre três ações para Drake executar\n");
    console.log(`1- Ir a lanchonete comer algo
   2-Ir na casa do seu amigo Peter
   3- Ir fazer compras no supermercado`);
    let perg4 = +prompt();
    for (let i = 0; perg4 !== 1 || perg4 !== 2 || perg4 !== 3; i++) {
      if (perg4 == 1) {
        Drake.passatempoum();
        Drake.recuperarenergia();
        Drake.gastodedinheiro();
        break;
      } else if (perg4 == 2) {
        Drake.passatempoTres();
        Drake.gastodesaude();
        break;
      } else if (perg4 == 3) {
        Drake.gastodesaude();
        Drake.passatempoTres();
        break;
      }

      perg4 = +prompt("Insira um número válido(1, 2 ou 3)");
    }
    if (Drake.saude <= 0) {
      console.log("A saude de Drake chegou a 0, você fracassou");
      break;
    }
    if (Drake.autoestima <= 0) {
      console.log("Drake entrou em depressão e se matou, você fracaçou");
      break;
    }
    if (Drake.autoestima >= 100) {
      console.log("Parabéns você venceu o jogo!");
      break;
    }
    console.clear();
    console.log(`Dinheiro:${Drake.dinheiro}
Saúde:${Drake.saude}
Dia:${Drake.dia}
Autoestima:${Drake.autoestima}
Horas:${Drake.horas}`);
    console.log();

    //   //VALIDAÇÃO E QUINTA AÇÃO
    console.log("\nEscolha uma dentre três ações para Drake executar\n");
    console.log(`1- Ir para casa
    2-Passar no bar, tomar cerveja e ir pra casa
    3- pedir uma pizza, esperar ela ficar pronta e ir pra casa`);
    let perg5 = +prompt();
    for (let i = 0; perg5 !== 1 || perg5 !== 2 || perg5 !== 3; i++) {
      if (perg5 == 1) {
        Drake.passatempoum();
        Drake.gastodesaude();
        break;
      } else if (perg5 == 2) {
        Drake.passatempoTres();
        Drake.gastodesaude();
        Drake.gastodedinheiro();
        break;
      } else if (perg5 == 3) {
        Drake.gastodesaude();
        Drake.passatempoTres();
        Drake.gastodedinheiro();
        break;
      }

      perg5 = +prompt("Insira um número válido(1, 2 ou 3)");
    }
    if (Drake.saude <= 0) {
      console.log("A saude de Drake chegou a 0, você fracassou");
      break;
    }
    if (Drake.autoestima <= 0) {
      console.log("Drake entrou em depressão e se matou, você fracaçou");
      break;
    }
    if (Drake.autoestima >= 100) {
      console.log("Parabéns você venceu o jogo!");
      break;
    }
    console.clear();
    console.log(`Dinheiro:${Drake.dinheiro}
  Saúde:${Drake.saude}
  Dia:${Drake.dia}
  Autoestima:${Drake.autoestima}
  Horas:${Drake.horas}`);
    console.log();

    //   //VALIDAÇÃO E SEXTA AÇÃO
    console.log("\nEscolha uma dentre três ações para Drake executar\n");
    console.log(
      "\nSeu amig Peter acabou de te ligar e ofereceu R$30 de dinheiro para você trocar uma torneira para ele na casa dele\n"
    );
    console.log(`1- Ir trocar a torneira para o Peter?
      2-Dormir?
      3- comer pizza e dormir um pouco `);
    let perg6 = +prompt();
    for (let i = 0; perg6 !== 1 || perg6 !== 2 || perg6 !== 3; i++) {
      if (perg6 == 1) {
        Drake.aumentoautoestima();
        Drake.aumentodinheiro();
        break;
      } else if (perg6 == 2) {
        Drake.passatempooito();
        Drake.abaixarautoestima();
        break;
      } else if (perg6 == 3) {
        Drake.passatempooito();
        Drake.abaixarautoestima();
        break;
      }

      perg6 = +prompt("Insira um número válido(1, 2 ou 3)");
    }
    if (Drake.saude <= 0) {
      console.log("A saude de Drake chegou a 0, você fracassou");
      break;
    }
    if (Drake.autoestima <= 0) {
      console.log("Drake entrou em depressão e se matou, você fracaçou");
      break;
    }
    if (Drake.autoestima >= 100) {
      console.log("Parabéns você venceu o jogo!");
      break;
    }
    console.clear();
    console.log(`Dinheiro:${Drake.dinheiro}
Saúde:${Drake.saude}
Dia:${Drake.dia}
Autoestima:${Drake.autoestima}
Horas:${Drake.horas}`);
    console.log();

    //   //VALIDAÇÃO E SÉTIMA AÇÃO
    console.log("\nEscolha uma dentre três ações para Drake executar\n");
    console.log(
      "A vizinha ofereceu R$30 para Drake trocar a lâmpada da casa dela que queimou, entretanto, Drake está sem café e ainda não fez seu treino, o que ele deve fazer?"
    );
    console.log();
    console.log(`1-ir treinar com o seu saco de pancadas
      2-Ir comprar café
      3- Ir trocar a lâmpada da vizinha`);
    let perg7 = +prompt();
    for (let i = 0; perg7 !== 1 || perg7 !== 2 || perg7 !== 3; i++) {
      if (perg7 == 1) {
        Drake.aumentoautoestima();
        Drake.passatempoum;
        break;
      } else if (perg7 == 2) {
        Drake.gastodedinheiro();
        Drake.passatempodois;
        break;
      } else if (perg7 == 3) {
        Drake.aumentodinheiro();
        Drake.passatempoum;
        break;
      }

      perg7 = +prompt("Insira um número válido(1, 2 ou 3)");
    }
    if (Drake.saude <= 0) {
      console.log("A saude de Drake chegou a 0, você fracassou");
      break;
    }
    if (Drake.autoestima <= 0) {
      console.log("Drake entrou em depressão e se matou, você fracaçou");
      break;
    }
    if (Drake.autoestima >= 100) {
      console.log("Parabéns você venceu o jogo!");
      break;
    }
    console.clear();
    console.log(`Dinheiro:${Drake.dinheiro}
  Saúde:${Drake.saude}
  Dia:${Drake.dia}
  Autoestima:${Drake.autoestima}
  Horas:${Drake.horas}`);
    console.log();

    //   //VALIDAÇÃO E OITAVA AÇÃO
    console.log("\nEscolha uma dentre três ações para Drake executar\n");
    console.log(
      "\nTe ligaram para uma entrevista de emprego, entretanto Drake tinha agendado alguns afazeres... o que Drake deve fazer?\n"
    );
    console.log(`1- Ir para uma seção de massagem?
      2-Ir para a entrevista de emprego?
      3- Jogar um torneio de league of legends com sua equipe, da qual o seu amigo Peter faz parte. `);
    let perg8 = +prompt();
    for (let i = 0; perg8 !== 1 || perg8 !== 2 || perg8 !== 3; i++) {
      if (perg8 == 1) {
        Drake.gastodedinheiro();
        Drake.recuperarenergia();
        Drake.abaixarautoestima();
        Drake.passatempoTres;
        break;
      } else if (perg8 == 2) {
        Drake.aumentoautoestima();
        Drake.aumentodinheiro();
        Drake.passatempodois;
        break;
      } else if (perg8 == 3) {
        Drake.abaixarautoestima();
        Drake.gastodesaude;
        Drake.passatempoTres;
        break;
      }

      perg8 = +prompt("Insira um número válido(1, 2 ou 3)");
    }
    if (Drake.saude <= 0) {
      console.log("A saude de Drake chegou a 0, você fracassou");
      break;
    }
    if (Drake.autoestima <= 0) {
      console.log("Drake entrou em depressão e se matou, você fracaçou");
      break;
    }
    if (Drake.autoestima >= 100) {
      console.log("Parabéns você venceu o jogo!");
      break;
    }
    console.clear();
    console.log(`Dinheiro:${Drake.dinheiro}
Saúde:${Drake.saude}
Dia:${Drake.dia}
Autoestima:${Drake.autoestima}
Horas:${Drake.horas}`);
    console.log();

    //   //VALIDAÇÃO E AÇÃO FINAL
    console.log("\nEscolha uma dentre três ações para Drake executar\n");
    console.log(
      "\nSe chegou até aqui é porque é alguem sábio, este é o momento que definirá, se o Drake vai ficar com a autoestima no máximo e colocar sua vida nos trilhos, ou vai fracassar em sua vida pessoal\n"
    );
    console.log(
      "Drake foi chamado para uma empresa de segurança, e o empregador falou para Drake para levar os documentos em até 8 horas ou não o contrataria, o que Drake deve fazer?"
    );
    console.log(`1- levar os documentos a empresa
    2-Deixar o emprego de lado e esperar por um melhor
    3- Decidir viver de bicos,serviços gerais free lancer, para levantar uma grana as vezes `);
    let perg9 = +prompt();
    for (let i = 0; perg9 !== 1 || perg9 !== 2 || perg9 !== 3; i++) {
      if (perg9 == 1) {
        Drake.aumentoautoestima();
        Drake.aumentodinheiro();
        break;
      } else if (perg9 == 2) {
        Drake.abaixarautoestima();
        break;
      } else if (perg9 == 3) {
        Drake.aumentodinheiro;
        Drake.abaixarautoestima();
        break;
      }

      perg9 = +prompt("Insira um número válido(1, 2 ou 3)");
    }
    if (Drake.saude <= 0) {
      console.log("A saude de Drake chegou a 0, você fracassou");
      break;
    }
    if (Drake.autoestima <= 0) {
      console.log("Drake entrou em depressão e se matou, você fracaçou");
      break;
    }
    if (Drake.autoestima >= 100) {
      console.log("Parabéns você venceu o jogo!");
      break;
    }

    console.clear();
    console.log(`Dinheiro:${Drake.dinheiro}
    Saúde:${Drake.saude}
    Dia:${Drake.dia}
    Autoestima:${Drake.autoestima}
    Horas:${Drake.horas}`);
    console.log();
  }
  console.log(
    "Digite [sim] se quiser recomeçar ou qualquer tecla para encerrar o jogo"
  );
  recomecar = prompt().toLowerCase();
} while (recomecar == "sim" || recomecar == "s");

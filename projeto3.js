const prompt = require("prompt-sync")();
//sinopse
console.log(
  "Ajude Drake a colocar a vida nos trilhos denovo, atualmente ele está desempregado, e com pouco dinheiro.Você tem uma semana para por Drake nos trilhos denovo"
);
//status Drake e funções de passagem de tempo por ação
let Drake = {
  dinheiro: 100,
  energiaEsaude: 100,
  dia: 1,
  horas: 7,
  gastodeenerdia: function () {
    this.energiaEsaude = this.energiaEsaude - 20;
    if (this.energiaEsaude < 50) {
      console.log("Que fome :( ....");
    }
    if (this.energiaEsaude <= 0) {
      console.log(
        "Drake desmaiou de fome, agora ele vai ter que pagar o hospital que o socorreu."
      );
      this.dinheiro = this.dinheiro - 50;
    }
  },
  recuperarenergia: function () {
    this.energiaEsaude = this.energiaEsaude + 50;
    if (this.energiaEsaude >= 100) {
      console.log("Drake está a todo o vapor!, cheio de energia!");
    }
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
  passatempodormir: function () {
    this.horas = this.horas + 8;
    if (this.horas >= 24) {
      this.horas = 0;
    }
    if (this.horas == 0) {
      this.dia++;
    }
  },
};
let variaveldecontrolegeral = "";
while (variaveldecontrolegeral = true) {
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
      break;
    } else if (perg1 == 3) {
      Drake.passatempodois();
      break;
    }
    perg1 = +prompt("Insira um número válido(1, 2 ou 3)");
    
  }
  console.log(Drake);
  
}

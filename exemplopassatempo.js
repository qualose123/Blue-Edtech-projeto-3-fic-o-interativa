const prompt = require("prompt-sync")();

let timing = {
  dia: 1,
  horas: 7,
  passatempoLutar: function () {
    this.horas = this.horas + 1;
    if (this.horas >= 24) {
      this.horas = 0;
    }
  },
  passatempoDormir: function () {
    this.horas = this.horas + 8;
    if (this.horas >= 24) {
      this.horas = 0;
    }
  },
  passatempoTrabalhar: function () {
    this.horas = this.horas + 8;
    if (this.horas >= 24) {
      this.horas = 0;
    }
  },
  passatempoAcademia: function () {
    this.horas = this.horas + 1;
    if (this.horas >= 24) {
      this.horas = 0;
    }
  },
};

console.log(timing);
timing.passatempoDormir();
console.log(timing);
timing.passatempoTrabalhar();
console.log(timing);
timing.passatempoTrabalhar();
console.log(timing);
timing.passatempoTrabalhar();
console.log(timing);

const mega = require("./todosOsJogos/numSorteados");
const objLista = require("./todosOsJogos/objLista");
//const contagem = require('./funcao/fazContagem')

let numeros = [];
let ordemMega = [];
for (sorteio of mega) {
  ordemMega.push(sorteio);

  for (numero of sorteio) {
    switch (numero) {
      case 1:
        objLista.um++;
        break;
      case 2:
        objLista.dois++;
        break;
      case 3:
        objLista.tres++;
        break;
      case 4:
        objLista.quatro++;
        break;
      case 5:
        objLista.cinco++;
        break;
      case 6:
        objLista.seis++;
        break;
      case 7:
        objLista.sete++;
        break;
      case 8:
        objLista.oito++;
        break;
      case 9:
        objLista.nove++;
        break;
      case 10:
        objLista.dez++;
        break;
      case 11:
        objLista.onze++;
        break;
      case 12:
        objLista.doze++;
        break;
      case 13:
        objLista.treze++;
        break;
      case 14:
        objLista.quatorze++;
        break;
      case 15:
        objLista.quinze++;
        break;
      case 16:
        objLista.dezesseis++;
        break;
      case 17:
        objLista.dezessete++;
        break;
      case 18:
        objLista.dezoito++;
        break;
      case 19:
        objLista.dezenove++;
        break;
      case 20:
        objLista.vinte++;
        break;
      case 21:
        objLista.vinte_um++;
        break;
      case 22:
        objLista.vinte_dois++;
        break;
      case 23:
        objLista.vinte_tres++;
        break;
      case 24:
        objLista.vinte_quatro++;
        break;
      case 25:
        objLista.vinte_cinco++;
        break;
      case 26:
        objLista.vinte_seis++;
        break;
      case 27:
        objLista.vinte_sete++;
        break;
      case 28:
        objLista.vinte_oito++;
        break;
      case 29:
        objLista.vinte_nove++;
        break;
      case 30:
        objLista.trinta++;
        break;
      case 31:
        objLista.trinta_um++;
        break;
      case 32:
        objLista.trinta_dois++;
        break;
      case 33:
        objLista.trinta_tres++;
        break;
      case 34:
        objLista.trinta_quatro++;
        break;
      case 35:
        objLista.trinta_cinco++;
        break;
      case 36:
        objLista.trinta_seis++;
        break;
      case 37:
        objLista.trinta_sete++;
        break;
      case 38:
        objLista.trinta_oito++;
        break;
      case 39:
        objLista.trinta_nove++;
        break;
      case 40:
        objLista.quarenta++;
        break;
      case 41:
        objLista.quarenta_um++;
        break;
      case 42:
        objLista.quarenta_dois++;
        break;
      case 43:
        objLista.quarenta_tres++;
        break;
      case 44:
        objLista.quarenta_quatro++;
        break;
      case 45:
        objLista.quarenta_cinco++;
        break;
      case 46:
        objLista.quarenta_seis++;
        break;
      case 47:
        objLista.quarenta_sete++;
        break;
      case 48:
        objLista.quarenta_oito++;
        break;
      case 49:
        objLista.quarenta_nove++;
        break;
      case 50:
        objLista.cinquenta++;
        break;
      case 51:
        objLista.cinquenta_um++;
        break;
      case 52:
        objLista.cinquenta_dois++;
        break;
      case 53:
        objLista.cinquenta_tres++;
        break;
      case 54:
        objLista.cinquenta_quatro++;
        break;
      case 55:
        objLista.cinquenta_cinco++;
        break;
      case 56:
        objLista.cinquenta_seis++;
        break;
      case 57:
        objLista.cinquenta_sete++;
        break;
      case 58:
        objLista.cinquenta_oito++;
        break;
      case 59:
        objLista.cinquenta_nove++;
        break;
      case 60:
        objLista.sessenta++;
        break;
    }
  }
}

for (numero in objLista) {
  let o = objLista[numero] + ":" + numero;
  numeros.push(o);
}

let tratandoNome = (nome) => {
  let divisor = 0;
  for (let i = 0; i < nome.length; i++) {
    nome[i] === ":" ? (divisor = i) : "";
  }
  return {
    numero: nome.slice(0, divisor),
    nome: nome.slice(divisor + 1, nome.length).replace("_", " e "),
  };
};

const relatorio = (array) => {
  let ordemCrecente = numeros.sort();
  let ordemDecrescente = [...ordemCrecente].reverse();

  for (let i = 0; i <= 9; i++) {
    let str = ordemCrecente[i];
    let resultado = tratandoNome(str);
    console.log(
      `O ${i + 1}º menos sorterado é: ${resultado.nome} sorteado ${
        resultado.numero
      } vezes`
    );
  }
  console.log(
    "#################################################################"
  );

  for (let i = 0; i <= 9; i++) {
    let str = ordemDecrescente[i];
    let resultado = tratandoNome(str);
    console.log(
      `O ${i + 1}º mais sorterado é: ${resultado.nome} sorteado ${
        resultado.numero
      } vezes`
    );
  }
};
relatorio(numeros);

console.log(
  "#################################################################"
);

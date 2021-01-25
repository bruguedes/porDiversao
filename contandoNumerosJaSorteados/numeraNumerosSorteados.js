const mega = require("./todosOsJogos/numSorteados");
const objLista = {}


let numeros = [];

for (sorteio of mega) {
   for (numero of sorteio) {
    objLista[numero]? objLista[numero]+=1:objLista[numero]=1
  }
}
console.log(objLista)
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

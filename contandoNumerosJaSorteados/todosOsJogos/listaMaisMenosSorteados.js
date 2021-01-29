//const mega = require("./numSorteados");




const maisSorteado = []
const menosSorteado = []


// trata o nome de cada numero
const tratandoNome = (nome) => {
  let divisor = 0;
  for (let i = 0; i < nome.length; i++) {
    nome[i] === ":" ? (divisor = i) : "";
  }
  return {
    numero: nome.slice(0, divisor),
    nome: nome.slice(divisor + 1, nome.length).replace("_", " e "),
  };
};



//const separaNumeros = array=>{}
const relatorio = (array) => {

  let  objLista = {}
  let numeros = []
 // inseri o numero como chave do objeto e faz o incremento de quantas vezes aparece no array (mega)
  for (jogoSorteado of array) {
   
    for (numero of jogoSorteado) {
     objLista[numero]? objLista[numero]+=1:objLista[numero]=1
   }
 }

//Insere dentro do array numero invertendo o resultado para fazer o sort
for (numero in objLista) {
  //let o = objLista[numero] + ":" + numero;
  numeros.push(objLista[numero] + ":" + numero);
}

  let ordemCrecente = numeros.sort();
  let ordemDecrescente = [...ordemCrecente].reverse();

  for (let i = 0; i <= 9; i++) {
    let str = ordemCrecente[i];
    let resultado = tratandoNome(ordemCrecente[i]);
    menosSorteado.push(resultado.nome);
   
  }
  

  for (let i = 0; i <= 9; i++) {
    let str = ordemDecrescente[i];
    let resultado = tratandoNome(ordemDecrescente[i]);
    maisSorteado.push(resultado.nome)
   
  }
};




//console.log(separaNumeros(mega));



//console.log(menosSorteado)
//console.log(maisSorteado)

module.exports = {
  relatorio,
  menosSorteado,
  maisSorteado,
  
}


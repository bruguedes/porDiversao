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
const arrMaisMenos = (arrDestino, ordem) =>{
  for (let i = 0; i <= 9; i++) {
    let str = ordem[i];
    let resultado = tratandoNome(ordem[i]);
    arrDestino.push(Number(resultado.nome));
   
  }
}

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
  numeros.push(objLista[numero] + ":" + numero);
}

  let ordemCrecente = numeros.sort();
  let ordemDecrescente = [...ordemCrecente].reverse();

  arrMaisMenos(maisSorteado, ordemCrecente)
  arrMaisMenos(menosSorteado, ordemDecrescente)
 
};


module.exports = {
  relatorio,
  menosSorteado,
  maisSorteado,
  
}


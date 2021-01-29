const fs = require('fs')
const {join} = require('path');
const filePath = join(__dirname,'jogos.jason')

const {maisSorteado, menosSorteado, relatorio} = require('./todosOsJogos/listaMaisMenosSorteados')
const mega = require("./todosOsJogos/numerosSorteadosMega");
const {filtrar:filtrarJogos, jogos:jogosFiltrados} = require('./todosOsJogos/eliminaJogoRepitido')



let meusPreferidos = [02, 07, 30, 32, 33, 29, 11, 60, 59, 13]
const saveJogos = (jogos)=>{
    fs.writeFileSync(filePath, JSON.stringify(jogos, null, ))
}


let escolher = (qdtJogos, qtdNumeros, arrMaisSorteado, arrMenosSorteado)=>{
    let posicaoArr = 0
    let ultimaDezena = 0
    let paraFiltrar = []
  for(let j=1; j<=qdtJogos; j++){
    let jogo = []
    
    
    for (let i = 1; i <= qtdNumeros; i++) {
        let qualArr = Math.ceil(Math.random() * 2);
        switch (qualArr) {
            
            case 1 : do {
                posicaoArr = Math.floor(Math.random() * arrMaisSorteado.length);
                ultimaDezena = arrMaisSorteado[posicaoArr];
                } while (jogo.includes(ultimaDezena) === true);
               break
            case 2 :  do {
                posicaoArr = Math.floor(Math.random() * arrMenosSorteado.length);
                ultimaDezena = arrMenosSorteado[posicaoArr];
               } while (jogo.includes(ultimaDezena) === true);
               break
        }
        jogo.push(ultimaDezena);
       
    }
    let jogoOrdenado = jogo.sort((a, b)=> a-b)
    
    paraFiltrar.push(jogoOrdenado);
    
}

filtrarJogos(paraFiltrar)
saveJogos(jogosFiltrados)
console.log(jogosFiltrados)

}
//E passado como parametro para function escolher o numero de jogos para gerar, a quantidade de numeros de
//em cada jogo e os array com mais e menos numeros sorteados.
//caso queria aumentar o numero de opões de escolha ou basta icluir os numeros nos array.
//se quiser colocar jogos com seus numeros preferidos, pode substituir em um dos array ou criar outro array
// e passar nos parametros o mesmo array.
//ex.: escolher(6,6, meusPreferidos, meusPreferidos)

relatorio(mega)
escolher(5, 6, maisSorteado, menosSorteado)



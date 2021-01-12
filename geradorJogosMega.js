let maisSorteado = [05, 10, 23, 33, 42, 53 ]
let menosSorteado = [26, 55, 22, 21, 15, 48]
let meusPreferidos = [02, 07, 30, 32, 33, 29, 11, 60, 59, 13]
let jogos = []

let escolher = (qdtJogos, qtdNumeros, arrMaisSorteado, arrMenosSorteado)=>{
    let posicaoArr = 0
    let ultimaDezena = 0
  for(let j=1; j<=qdtJogos; j++){
      let jogo = []
    for (let i = 1; i <= qtdNumeros; i++) {
        let qualArr = Math.ceil(Math.random() * 2);

        if (qualArr === 1) {
            do {
                posicaoArr = Math.floor(Math.random() * arrMaisSorteado.length);
                ultimaDezena = arrMaisSorteado[posicaoArr];
                } while (jogo.includes(ultimaDezena) === true);
                 jogo.push(ultimaDezena);
        } else {
            do {
                dezena = Math.floor(Math.random() * arrMenosSorteado.length);
                ultimaDezena = arrMenosSorteado[dezena];
                } while (jogo.includes(ultimaDezena) === true);
            jogo.push(ultimaDezena);
        }
    }
    let jogoOrdenado = jogo.sort((a, b)=> a-b)
    
    jogos.push(jogoOrdenado);
}
}
//E passado como parametro para function escolher o numero de jogos para gerar, a quantidade de numeros de
//em cada jogo e os array com mais e menos numeros sorteados.
//caso queria aumentar o numero de opões de escolha ou basta icluir os numeros nos array.
//se quiser colocar jogos com seus numeros preferidos, pode substituir em um dos array ou criar outro array
// e passar nos parametros o mesmo array.
//ex.: escolher(6,6, meusPreferidos, meusPreferidos)


//escolher(6,6, meusPreferidos, meusPreferidos)
escolher(6, 6, maisSorteado, menosSorteado)
console.log(jogos)
const mega = require('./todosOsJogos/numSorteados')
const objLista = require('./todosOsJogos/objLista')
//const contagem = require('./funcao/fazContagem')


let numeros = []
let ordemMega = []
for(sorteio of mega){
    ordemMega.push(sorteio)
       
    for(numero of sorteio){
        switch (numero) {
            case 1: objLista.um++
                break
            case 2: objLista.dois++
                break
            case 3: objLista.tres++
                break
            case 4: objLista.quatro++
                break
            case 5: objLista.cinco++
                break
            case 6: objLista.seis++
                break
            case 7: objLista.sete++
                break
            case 8: objLista.oito++
                break
            case 9: objLista.nove++
                break
            case 10: objLista.dez++
                break
            case 11: objLista.onze++
                break
            case 12: objLista.doze++
                break
            case 13: objLista.treze++
                break
            case 14: objLista.quatorze++
                break
            case 15: objLista.quinze++
                break
            case 16: objLista.dezesseis++
                break
            case 17: objLista.dezessete++
                break
            case 18: objLista.dezoito++
                break
            case 19: objLista.dezenove++
                break
            case 20: objLista.vinte++
                break
            case 21: objLista.vinte_um++
                break
            case 22: objLista.vinte_dois++
                break
            case 23: objLista.vinte_tres++
                break
            case 24: objLista.vinte_quatro++
                break
            case 25: objLista.vinte_cinco++
                break
            case 26: objLista.vinte_seis++
                break
            case 27: objLista.vinte_sete++
                break
            case 28: objLista.vinte_oito++
                break
            case 29: objLista.vinte_nove++
                break
            case 30: objLista.trinta++
                break
            case 31: objLista.trinta_um++
                break
            case 32: objLista.trinta_dois++
                break
            case 33: objLista.trinta_tres++
                break
            case 34: objLista.trinta_quatro++
                break
            case 35: objLista.trinta_cinco++
                break
            case 36: objLista.trinta_seis++
                break
            case 37: objLista.trinta_sete++
                break
            case 38: objLista.trinta_oito++
                break
            case 39: objLista.trinta_nove++
                break
            case 40: objLista.quarenta++
                break
            case 41: objLista.quarenta_um++
                break
            case 42: objLista.quarenta_dois++
                break
            case 43: objLista.quarenta_tres++
                break
            case 44: objLista.quarenta_quatro++
                break
            case 45: objLista.quarenta_cinco++
                break
            case 46: objLista.quarenta_seis++
                break
            case 47: objLista.quarenta_sete++
                break
            case 48: objLista.quarenta_oito++
                break
            case 49: objLista.quarenta_nove++
                break
            case 50: objLista.cinquenta++
                break
            case 51: objLista.cinquenta_um++
                break
            case 52: objLista.cinquenta_dois++
                break
            case 53: objLista.cinquenta_tres++
                break
            case 54: objLista.cinquenta_quatro++
                break
            case 55: objLista.cinquenta_cinco++
                break
            case 56: objLista.cinquenta_seis++
                break
            case 57: objLista.cinquenta_sete++
                break
            case 58: objLista.cinquenta_oito++
                break
            case 59: objLista.cinquenta_nove++
                break
            case 60: objLista.sessenta++
                break
        }
    }
  } 

//let maisSorteadas = objLista=>{
for(numero in objLista){
    //numero => numeros
    let p = numero
    let b = objLista[numero]
    let o = b+':'+ p
    numeros.push(o)

 }
 let tratandoNome=(nome)=>{
    let divisor = 0
     for(let i=0; i<nome.length; i++){
    nome[i]===":"? divisor= i:""
    }
    return {nome: nome.slice(0,divisor), numero: nome.slice((divisor+1),nome.length).replace('_', ' e ') }
 }
//let resultado =

 numeros.sort()
 for(let i=0; i<=9; i++){
    let n = i+1
    let str = numeros[i]
    let resultado = tratandoNome(str)
    console.log('O '+n+'º primeiro número menos sorterado é: '+resultado.numero)
}
console.log('#################################################################')
numeros.reverse()
for(let i=0; i<=9; i++){
    let n = i+1
    let str = numeros[i]
    let resultado = tratandoNome(str)
    console.log('O '+n+'º primeiro número mais sorterado é: '+resultado.numero)
}



console.log('#################################################################')
//console.log(numeros)
// let maisS={}
// for(numero in objLista){
//     for(let i; i<6;i++){
//         numero==numeros[i]? maisS=numero:''
//         console.log(numero)
//     }
// }

//console.log(numeros) 
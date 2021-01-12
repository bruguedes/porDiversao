 
let brinquedos = ["João", "Jonas", "Bruno", "Eduardo"];
let adjetivo = ["baitola", "mala","zé ruela", "pegador", "Boca de veludo", "pega ninguém", "Lobinho"];
function juntarNomes(brinquedo, objeto) {
  return brinquedo + " " + objeto;
}

function processar(caixaLista, caixaObjeto, caixaFuncao) {
  let listaTratada = [];
  for (item of caixaLista) {
    let r = Math.floor(Math.random() * caixaObjeto.length)
    let site = caixaFuncao(item, caixaObjeto[r]);
    listaTratada.push(site);
    //console.log(site)
    //console.log(r)
  }
  return listaTratada;
}
console.log(processar(brinquedos, adjetivo, juntarNomes));
 
/* 
 let num = Math.random() * 50
console.log(num)
console.log(Math.round(num))
console.log(Math.round(Math.random() * 2)) */
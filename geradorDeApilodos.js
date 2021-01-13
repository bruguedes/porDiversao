 
let nomes = ["João", "Jonas", "Bruno", "Eduardo"];
let adjetivo = ["apelidoX", "apelidoY","apelidoZ", "apelidoH", ""];
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
console.log(processar(nomes, adjetivo, juntarNomes));
 

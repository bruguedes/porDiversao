const jogos = [];
let filtrar = (array) => {
   
    let jogosEmObj = array.reduce((object, item) => {
      if (!object[item]) {
        object[item] = 1;
      }
      return object;
    }, {});
    //console.log(jogosEmObj);
    let jogosAtualizados = () => {
      for (obj in jogosEmObj) {
        let jogo = obj.split(",");
        //console.log(jogo);
        jogos.push(jogo);


      }
    };
    return jogosAtualizados();
  };
  
 
  module.exports = { filtrar, jogos };


//  Percorre o array de jogos e retona um novo array sem os jogos repitidos
  
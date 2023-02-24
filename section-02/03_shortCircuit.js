/**
* && -> false && true -> false
* || -> true && false -> true
*/

/**
* Valores e suas avaliações
* ! FALSY: false, 0, '', "", ``, null, undefined, NaN
*
* 
*
*/

function falaOi(){
  return 'Oi';
}
let vaiExecutar = false;
console.log(vaiExecutar && falaOi());

function falarNome(nome = "Insira um nome"){
  console.log(nome);
}
falarNome();
//o codigo e o mesmo que
/*function falarNome(nome){
  n = nome || "Insira um nome"
  console.log(nome);
}
falarNome();
*/

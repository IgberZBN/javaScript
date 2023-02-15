/**
 * arquivo js externo
 */

document.write('Hello world!');
console.log('Another hello world!'); //comentario
// alert('Hello world inside alert');

let mensage = 'My mensage';
let mensage2 = 'My another mesage';
let meuPeso = 83.1;
let minhaAltura = 1.75;
let minhaIdade = 40;
let ehDoador = false;
let test = null;

/* CRIAR CONSTANTES e atribuir valor */
const PI = 3.1415;
const TAXA = 0.5;

test = 'Algum valor';

/* ESCREVER O CONTEUDO DE VARIAVEIS E CONSTANTES */
document.write(/*html*/ `<p>Mensage ${mensage}</p>`);
document.write(/*html*/ `<p>Mensage 2 ${mensage2}</p>`);
document.write(/*html*/ `<p>Peso: ${meuPeso}</p>`);
document.write(/*html*/ `<p>Altura: ${minhaAltura}</p>`);
document.write(/*html*/ `<p>Idade: ${minhaIdade}</p>`);
document.write(/*html*/ `<p>Doador? ${ehDoador}</p>`);
document.write(/*html*/ `<p>Teste: ${test}</p>`);
document.write(/*html*/ `<p>PI ${PI}</p>`);
document.write(/*html*/ `<p>TAXA ${TAXA}</p>`);

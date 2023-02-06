// Strings são indexadas
// !              012345678
let stringTest = 'hello man';
console.log(stringTest.length);
// metodos
console.log(stringTest[4]); //* output = 'o'
console.log(stringTest[9]); //* output = undefined
console.log(stringTest.charAt(2)); //* output = 'l'
console.log(stringTest.charAt(9)); //* output =

console.log(stringTest.indexOf('man')); //* output = 6 // indexOf é case sensitive
console.log(stringTest.indexOf('hello', 3)); //* output = 0 // apos "," e o valor que ele vai procurar a buscar
console.log(stringTest.lastIndexOf('hello')); //* output = 0 // ele começa de trás para frente

//* Expressão regulares
console.log(stringTest.match(/[a-z]/g));
console.log(stringTest.replace('hello', 'hi')); // * troca a palavra "hello" por "hi"

// ? Exercicio

const nome = prompt('Digite seu nome');
document.body.innerHTML += /*HTML*/ `<p>Seu nome é: ${nome} </p>`;
document.body.innerHTML += /*HTML*/ `<p>Seu nome tem ${nome.length} letras </p>`;
document.body.innerHTML += /*HTML*/ `<p>A segunda letra do seu nome é: ${nome[1]} </p>`;
document.body.innerHTML += /*HTML*/ `<p>Qual o primeiro indice da letra "a" no seu nome? ${
  nome.indexOf('a') + 1
} </p>`;
document.body.innerHTML += /*HTML*/ `<p>Qual o ultimo indice da letra "a" no seu nome? ${
  nome.lastIndexOf('a') + 1
} </p>`;
document.body.innerHTML += /*HTML*/ `<p>As ultimas 3 letras do seu nome são: ${nome.slice(
  -3
)}</p>`;
document.body.innerHTML += /*HTML*/ `<p>As palavras do seu nome são: ${nome.split(
  ' '
)}</p>`;
document.body.innerHTML += /*HTML*/ `<p>Seu nome em letras maisculas: ${nome.toUpperCase()}</p>`;
document.body.innerHTML += /*HTML*/ `<p>Seu nome em letras minisculas: ${nome.toLowerCase()}</p>`;

// comentario em linha

/*
Comentario em bloco
*/

// criar variaveis use let ou var
// let produto = 'Arroz';
// let quant = 2;
// let precoUnitario = 4.99;
// let precoTotal = quant * precoUnitario;

// document.write(`Preço Total R$ ${precoTotal} <br>`);
// console.log(new Intl.NumberFormat('pt-BR').format(precoTotal));

// document.write(
//   `Preço Total ${precoTotal.toLocaleString('pt-BR', {
//     style: 'currency',
//     currency: 'BRL',
//   })}<hr>`
// );

// // criar constante
// const nome = 'Edson Maia';
// const peso = 83.5;
// const altura = 1.75;
// const imc = peso / (altura * altura);
// document.write(`IMC: ${imc} <br>`);
// document.write(`IMC: ${imc.toFixed(2)} <br>`);

// let nota1 = 7.5;
// let nota2 = 5.5;
// let nota3 = 4.0;
// let notaFinal = nota1 + nota2 + nota3;
// document.write('Nota final' + notaFinal + '<br>');

// let compra = 1999.99;
// let desconto = 145.42;
// let compraComDesconto = compra - desconto;
// document.write(
//   compraComDesconto.toLocaleString('pt-BR', {
//     style: 'currency',
//     currency: 'BRL',
//   }) + '<br>'
// );

//! Exercicio

// * Desafio 1

let lutador = 'Fedor Vladimirovich Emelianenko';
let nacionalidade = 'Russo';
let idade = 44;
let peso = 106;
let altura = 1.83;

document.write(html`
  <div>
    <h2>lutador</h2>
    <p>${lutador}</p>
    <p>${nacionalidade}</p>
    <p>${idade}</p>
    <p>${peso}</p>
    <p>${altura}</p>
  </div>
`);

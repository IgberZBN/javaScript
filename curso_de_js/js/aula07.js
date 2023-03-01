/* Arquivo JS aula 07 DOM */

// DOM = Document Object Model
//  Arvore com elementos desde o Browser, a janela do Browser, o Documento e cada elemento html que formam os conteudos.

/**
 * @param navigator
 * @param window
 *  @param location
 *  @param document -> @param html -> @param heade e @param body
 *  @param history
 */

// * PARA MANIPULAR O DOM PRECISAMOS
// indicar qual objeto usar usar, depois chamar um método(função) para selecionar ele, seus dados, trazer informações, etc.

/**
 * @param querySelector()
 * seleciona o primeiro elemento com base na tag, #id ou .class
 */

let titulo = document.querySelector('#titulo');
console.log(titulo);

/**
 * @param textContent
 * propriedade ou atributo textContent
 * serve para acessar ou alterar o conteudo
 * de um elemento que foi selecionado
 */

console.log(titulo.textContent);
console.log(titulo.innerHTML);

titulo.textContent = 'DOM';
console.log(titulo.textContent);

/**
 * @param querySelectorAll()
 * seleciona todos os elementos co mbase na tag, #id ou .class
 */

let testando = document.querySelectorAll('.box');
console.log(testando);

document.write(testando[0].textContent);
document.write(testando[1].textContent);
document.write(testando[2].textContent);

testando[0].textContent = 'texto qualquer';

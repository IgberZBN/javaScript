/* Arquivo JS aula 09 DOM + alterar CSS */

let titulo = document.querySelector('h1');

titulo.textContent = 'Aula 09 manipular CSS';
// titulo.innerHTML = 'Aula manipular CSS';

let image = document.querySelector('#foto');

image.setAttribute('src', 'https://avatarfiles.alphacoders.com/277/277051.png');
image.setAttribute('width', '250px');

/* Manipular CSS */

titulo.style.color = 'red';
titulo.style.borderBottom = '2px solid red';
titulo.style.textAlign = 'center';

let box = document.querySelectorAll('.box');
// box[0].setAttribute('class', 'azul');
// box[0].removeAttribute('class');

// MODOS DE COR //
let tela = document.querySelector('main');
let btnDark = document.querySelector('#btDark');
let btnLight = document.querySelector('#btLight');

btnDark.addEventListener('click', modoDark);
btnLight.addEventListener('click', modoLight);

function modoDark() {
  console.log('modo dark');
  tela.classList.add('dark');
  tela.classList.remove('light');
}

function modoLight() {
  console.log('modo light');
  tela.classList.add('light');
  tela.classList.remove('remove');
}

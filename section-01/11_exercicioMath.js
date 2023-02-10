const title = document.querySelector('#num-titulo');
const text = document.querySelector('#text');

const num1 = Number(prompt('Digite um numero'));

title.innerHTML = num1;

text.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(num1)}</p>`;
text.innerHTML += `<p>${num1} e inteiro: ${Number.isInteger(num1)}</p>`;
text.innerHTML += `<p>E NaN: ${isNaN(num1)}</p>`;
text.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num1)}</p>`;
text.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num1)}</p>`;
text.innerHTML += `<p>Com duas casas decimais: ${num1.toFixed(2)}</p>`;

const inNome = document.querySelector('#inNome');
const inSobrenome = document.querySelector('#inSobrenome');
const inPeso = document.querySelector('#inPeso');
const inAltura = document.querySelector('#inAltura');
const btn = document.querySelector('.btn');
const resp = document.querySelector('#resp');
const pessoas = [];

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const nome = inNome.value;
  const sobrenome = inSobrenome.value;
  const peso = Number(inPeso.value);
  const altura = Number(inAltura.value);

  people = criarPessoa(nome, sobrenome, peso, altura);
  exibirPessoa(nome, sobrenome, peso, altura);
  console.log(people);

  return pessoas.push(people);
});

function criarPessoa(nome, sobrenome, peso, altura) {
  return {
    nome,
    sobrenome,
    peso,
    altura,
  };
}

function exibirPessoa(nome, sobrenome, peso, altura) {
  resp.innerHTML += /*HTML*/ `<p> ${nome} ${sobrenome} ${peso} ${altura}</p>`;
}

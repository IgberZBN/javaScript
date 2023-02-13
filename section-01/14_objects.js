//const pessoa1 = {
//  nome: 'Luiz',
//  sobrenome: 'Miranda',
//  idade: 25
//};

//console.log(pessoa1);

//function criarPessoa(nome, sobrenome, idade){
//  return{
//     nome,
//     sobrenome,
//     idade
//  };
//}

//const pessoa1 = criarPessoa('Luiz', 'Otavio', 25);
//console.log(pessoa1);
//const pessoa2 = criarPessoa('Gabriel', 'Benitez', 20);
//console.log(pessoa2);

const pessoa1 = {
  nome: 'Gabriel',
  sobrenome: 'Benitez',
  idade: 25,

  fala() {
    console.log(`Nome: ${this.nome}, idade: ${this.idade}`);
  }

};

pessoa1.fala();


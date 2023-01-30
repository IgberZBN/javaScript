/*
    Luiza otavio miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25 Luiza otavio nasceu em 1980
*/

const nome = 'Luiza';
const sobrenome = 'miranda';
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc;
let anoNascimento;

imc = peso / altura ** 2;
anoNascimento = 2020 - idade;

console.log(
  `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc.toFixed(
    2
  )} ${nome} ${sobrenome} nasceu em ${anoNascimento}`
);

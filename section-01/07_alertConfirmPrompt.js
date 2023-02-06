/**
 * window.alert('Mensagem')
 * return:
 * * undefined
 */
alert('Mensagem.');

/**
 * window.confirm('Mensagem')
 *  return:
 * * true
 *  ! false
 */
confirm('Deseja realmente apagar?');

/**
 * window.prompt('Mensagem')
 * return:
 * * String
 */
prompt('Digite o seu nome:');

// ? Exercicio, adquirir dois valores do usuario e somar eles
const num1 = Number(prompt('Digite o primeiro valor'));
const num2 = Number(prompt('Digite o segundo valor'));
alert(`O resultado foi ${num1 + num2}`);

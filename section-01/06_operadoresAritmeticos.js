/*  Elementos:
 *   + adicao ou concatenacao
 *   - subtracao
 *   * multiplicacao
 *   /  divisao
 *   ** potenciacao
 *   % resto da divisao
 */

/* Precendencia:
 *   ()
 *   **
 * * / %
 *   + -
 */

// Incrimento
let contI = 0;
contI++;
console.log(contI);
contI++;
console.log(contI);
contI++;
console.log(contI);
// Decremento
let contD = 3;
contD--;
console.log(contD);
contD--;
console.log(contD);
contD--;
console.log(contD);

//Conveter string para number
const texto = '10';
console.log(parseFloat(texto)); //converte para um numero com ponto flutuante
console.log(parseInt(texto)); //converte para um numero inteiro
console.log(Number(texto)); //conveter automaticamente para inteiro ou flutuante

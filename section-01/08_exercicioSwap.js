// ? Faça as variaveis trocarem de valor
let varA = 'A'; // B
console.log(varA);
let varB = 'B'; // C
console.log(varB);
let varC = 'C'; // A
console.log(varC);

// ! Resposta
let temp = varA;
varA = varB;
varB = varC;
varC = temp;
console.log(varA);
console.log(varB);
console.log(varC);
// * Outro metodo
[varA, varB, varC] = [varB, varC, varA];

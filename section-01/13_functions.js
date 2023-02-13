function salve(nome) {
  return `Bom dia! ${nome}`;
}

const variavel = salve('Gabriel');
console.log(variavel);

function soma(num1 = 1, num2 = 1) {
  return num1+num2
}

console.log(soma(2,2));

const raiz = function(n){
  return n ** 0.5
};

console.log(raiz(9));

const multiplicar2 = (n)=>{
  return n * 2
};

console.log(multiplicar2(8));

const multiplicar3 = n => n * 3

console.log(multiplicar3(3));


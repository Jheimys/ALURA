//O método sort() molda elementos de um array em strings e os ordena em ordem crescente.

let numeros = [1, 2, 3, 101, 20, 3, 30, 31, 40];
numeros.sort();
console.log(numeros);
console.log(typeof(numeros))

// Saída
// [1, 101, 2, 20, 3, 3, 30, 31, 40]

// Isso ocorre pois o método trata os elementos do array como strings e os coloca em ordem 
//sequencial de acordo com sua posição na tabela ASCII, onde 20 vem antes de 3.

//Para que o sort() funcione de acordo com o esperado, precisamos passar os parâmetros de 
//comparação de forma explícita:

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
// Saída 
//[1, 2, 3, 4, 5]
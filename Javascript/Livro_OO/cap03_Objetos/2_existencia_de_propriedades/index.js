/*
- O operador 'in' procura uma propriedade com um determinado nome em um objeto específico
e retorna true se ela for encontrada.

- O operador 'in' verifica tanto as propriedades proprias quanto as de protótipos

- O método hasOwnProperty() retorna true somente se a propriedade dada existir e for
  uma propriedade própria.
*/

//Exemplo 1
const person1 = {
    name: 'Nicolas',
    age: 40
} 

console.log('name' in person1) // true
console.log('age' in person1)  // true
console.log('title' in person1) // False


console.log('name' in person1) // true
console.log(person1.hasOwnProperty('name')) // true

console.log('toString' in person1) // true
console.log(person1.hasOwnProperty('toString')) // False, esse é um método do protótipo
 
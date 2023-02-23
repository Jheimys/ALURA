//Método filter():
// - Assim como método map() cria um novo array.
// A diferença é que cada elemento do vetor é submetido a uma condição
//se verdadeira, add o elemento a um novo array.

console.log('EXEMPLO 01')

const numeros = [10, 13, 20, 8, 15]

const pares = numeros.filter(num => num % 2 === 0)

console.log(pares) // array com númerros pares

console.log(pares.join(',')) // uma string com os números pares

console.log('')

console.log('EXEMPLO 02: Amigos com idade > 21 ou que contenha a letra B no nome')

const amigos = [
    {
        nome:'Ana',
        idade: 20,
    },

    {
        nome:'Bruno',
        idade:17,
    },

    { 
        nome:'Cátia',
        idade:25
    }
]

const amigos2 = amigos.filter(aux => aux.idade > 21 || aux.nome.includes('B'))

console.log(amigos2)  //[ { nome: 'Bruno', idade: 17 }, { nome: 'Cátia', idade: 25 } ]



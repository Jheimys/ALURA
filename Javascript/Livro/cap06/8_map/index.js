//Método map():
    // percorre o array e cria um novo array com a mesma quantidade de itens do original

//Sintaxe:
    // const novoArray = array.map( aux => alguama coisa )

console.log('EXEMPLO 01:')
const numeros = [10, 13, 20, 8, 15]

const dobros = numeros.map(num => num * 2)

console.log(dobros)
console.log(dobros.join(','))  // transfoma o array em uma string
console.log(typeof(dobros.join(',')))

console.log('')

console.log('EXEMPLO 02:')

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

const amigos2 = amigos.map(aux => ({nome: aux.nome, nasc: 2022 - aux.idade}))

console.log(amigos2)
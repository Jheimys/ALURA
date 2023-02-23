//Método reduce()
//- últil para obter valores cumulativos ou concatenados a partir de um array

const numeros = [10, 13, 20, 8, 15]

const soma = numeros.reduce((acc, num) => acc + num, 0)

console.log(`Soma: ${soma}`)

// No código a cima acc começa de 0 e num 10.
// se caso o último parametro 0 não fosse informado o acc se iniciaria com 10.

console.log('EXEMPLO 02')

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

const somaIdades = amigos.reduce((acc, amigo) => acc + amigo.idade, 0)
const todos = amigos.reduce((acc, amigo) => acc + amigo.nome + ' ', '')

console.log(somaIdades)
console.log(todos)


console.log('EXEMPLO 03: Otendo o maior valor do array')

const num = [10, 13, 20, 8, 15]

const maior = num.reduce((a,b) => Math.max(a,b), 0)

console.log(maior)

//Fiz um ex. com array de obj noo exercicio 10.1


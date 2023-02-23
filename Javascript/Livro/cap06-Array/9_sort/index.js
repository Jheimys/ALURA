// O método sort() é usada para clasificar itens de um vetor em ordem alfabética crescente.
//O método reverse() classifica os dados em ordem decrescente.

const nomes = ['Pedro', 'Ana', 'João']
nomes.sort()
console.log(nomes)              //[ 'Ana', 'João', 'Pedro' ]
console.log(nomes.join(', '))   //Ana, João, Pedro

nomes.reverse()
console.log(nomes.join(', '))  //Pedro, João, Ana

console.log('-'.repeat(40))

console.log('Exemplo 02:')

const numeros = [50, 100, 2]
numeros.sort()
console.log(numeros.join(', ')) //100, 2, 50

numeros.sort((a,b) => a - b)
console.log(numeros) // [ 2, 50, 100 ]

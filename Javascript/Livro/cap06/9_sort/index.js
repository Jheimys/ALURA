// O método sort() é usada para clasificar itens de um vetor em ordem alfabética crescente.
//O método reverse() classifica os dados em ordem decrescente.

const nomes = ['Pedro', 'Ana', 'João']
nomes.sort()
console.log(nomes)
console.log(nomes.join(', '))

nomes.reverse()
console.log(nomes.join(', '))

console.log('-'.repeat(40))

console.log('Exemplo 02:')

const numeros = [50, 100, 2]
numeros.sort()
console.log(numeros.join(', '))

numeros.sort((a,b) => a - b)
console.log(numeros)

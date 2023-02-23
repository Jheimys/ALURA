//Para percorrer um vetor usamos:
// o loop --> for .. of  OU método forEach()

const cidades = ['Pelotas', 'São Lourenço', 'Porto Alegre']

console.log('EXEMPLO 01: for .. of')
for(const cidade of cidades){
    console.log(cidade) 
}

console.log('')

console.log('EXEMPLO 02: forEach()')
cidades.forEach((cidade, i) => {
    console.log(`${i +1}º Cidade: ${cidade}`)
})

console.log('')

console.log('EXEMPLO 03: soma com forEach()')
const numeros = [5, 10, 15, 20]
let soma = 0
numeros.forEach(num => soma += num)
console.log(`A soma dos números é: ${soma}`)


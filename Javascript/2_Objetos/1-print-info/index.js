//Acessando uma obj com a notação de ponto
const cliente ={
    nome: 'André',
    idade: 36,
    cpf: '123456677',
    email:'andre@email.com'
}

console.log('EXEMPLO 01')
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos, portador do cpf:${cliente.cpf.substring(0,3)}******`)
console.log('')

//Acessando por colchetes
console.log('EXEMPLO 02')
const chaves = ['nome', 'idade', 'cpf', 'email']
console.log(cliente[chaves[0]])
console.log('')

//Usando o forEach para percorre o array
console.log('EXEMPLO 03')
chaves.forEach(info => console.log(cliente[info]))
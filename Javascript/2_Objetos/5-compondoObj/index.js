
const cliente ={
    nome: 'André',
    idade: 36,
    cpf: '123456677',
    email:'andre@email.com',
    fones:["2732641355", "2733712397"]
}

cliente.dependentes = {
    nome: 'Sara',
    parentesco:'filha',
    dataNasc:'19/09/2011'
}

console.log(cliente)

cliente.dependentes.nome = 'Sara Silva'

console.log(cliente)

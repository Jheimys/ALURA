//Acessando uma obj com a notação de ponto
const cliente ={
    nome: 'André',
    idade: 36,
    cpf: '123456677',
    email:'andre@email.com',
    fones:["2732641355", "2733712397"]
}

cliente.fones.forEach(fone => console.log(fone))

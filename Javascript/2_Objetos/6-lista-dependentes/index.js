
const cliente ={
    nome: 'André',
    idade: 36,
    cpf: '123456677',
    email:'andre@email.com',
    fones:["2732641355", "2733712397"],
    dependentes:[{
        nome: 'Sara',
        parentesco:'filha',
        dataNasc:'19/09/2011'
    }]
}

cliente.dependentes.push({
    nome:'Samia Maria',
    parentesco: 'filha',
    dataNasc:'18/09/2014'
})

console.log(cliente)



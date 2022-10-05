
const clientes = [
    {
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
    },


    {
        nome: 'João',
        idade: 40,
        cpf: '123456699',
        email:'jão@email.com',
        fones:["2732641355", "2733712397"],
        dependentes:[{
            nome: 'Gabriela',
            parentesco:'filha',
            dataNasc:'19/09/2011'
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
console.table(listaDependentes)




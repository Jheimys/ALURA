
//Para percorre obj usamos o método "for in"
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
    },
    {
        nome:'Samia Maria',
        parentesco: 'filha',
        dataNasc:'18/09/2014'
    }],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

// const propsCliente = Object.keys(cliente)
// const listaValores = Object.values(cliente)
// console.log(propsCliente)
// console.log(listaValores )

//console.log(Object.entries(cliente))

function oferecerSeguro(obj){
    const propsCliente = Object.keys(obj)
    if(propsCliente.includes('dependentes')){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)



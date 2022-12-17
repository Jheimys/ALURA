const clientes = require('./clientes.json')

function filtarApartamentoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
       return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty('complemento'))
    })
}

const filtro = filtarApartamentoSemComplemento(clientes)
console.log(filtro)
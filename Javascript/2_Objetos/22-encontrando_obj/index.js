const cliente = require('./clientes.json')
//console.log(cliente) 

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor))
}

const encontrado = encontrar(cliente, 'telefone', "58996279799")
console.log(encontrado)
//Etapa 1: Encontrar quantos elementos possui preços menores que meu elemento pivo.

//Etapa 2: Posicionar o pivo 

//Etapa 3: dividir a lista a partir do pivo

const listaLivros = require('./array')

function encontraMenores(pivo, array){
    let menores = 0

    for(let atual = 0; atual < array.length; atual++){
        let produtoAtual = array[atual]

        if(produtoAtual.preco < pivo.preco){
            menores++
        }
    }

    trocaLugares(array, array.indexOf(pivo), menores)

    return array
}

function trocaLugares(array, de, para){
    const elem1 = array[de]
    const elem2 = array[para]

    array[de] = elem2
    array[para] = elem1

}

function divideNoPivo(array){
    let pivo = array[Math.floor(array.length / 2)]
    encontraMenores(pivo, array)
    let valoresMenores = 0 

    for(let analisando = 0; analisando < array.length; analisando++){
        let atual = array[analisando]

        if(atual.preco < pivo.preco && atual !== pivo){
            trocaLugares(array, analisando, valoresMenores)
            valoresMenores++
        }
    }

    return array
}

//console.log(encontraMenores(listaLivros[2], listaLivros))

//console.log(divideNoPivo(listaLivros))

module.exports = trocaLugares

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')

//console.log(listaDeTeclas)

for( let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`

    //função anônima
    tecla.onclick = function () {
        tocaSom(idAudio)
    }
  
}

/* let contador = 0

while (contador < listaDeTeclas.length ) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`

    //função anônima
    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    contador += 1 

    //console.log(contador)
} */




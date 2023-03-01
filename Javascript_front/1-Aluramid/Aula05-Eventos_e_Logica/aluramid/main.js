
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    if(elemento && elemento.localName === 'audio') {  
        elemento.play()
    } else {
        console.log('Elemento não encontrado ou seletor inválido!')
    }
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

    tecla.onkeydown = function (e) {
        console.log(e)

        if(e.code === "Space" || e.code === "Enter") {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function (e) {
        if(e.code === "Space" || e.code === "Enter") {
            tecla.classList.remove('ativa')
        } 
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




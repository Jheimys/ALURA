const controle = document.querySelectorAll('.controle-ajuste')
console.log(controle)

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        //console.log(evento.target.textContent)
        manipulaDados(evento.target.textContent)
       
    })
})

function manipulaDados(operacao) {
    if(operacao === '-') {
        braco.value = parseInt(braco.value) -1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}
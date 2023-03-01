const controle = document.querySelectorAll('.controle-ajuste')
//console.log(controle)

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        //console.log(evento.target.textContent)
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        //console.log(evento.target.parentNode)
       
    })
})

function manipulaDados(operacao, controle) {

    const peca = controle.querySelector('.controle-contador')
    console.log(peca)

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}
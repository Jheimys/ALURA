const controle = document.querySelectorAll('[data-controle]')
//busca pelo data-atributes
//console.log(controle)

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        //console.log(evento)
        //console.log(evento.target)
        //console.log(evento.target.textContent)
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        console.log(evento.target.parentNode)
       
    })
})

function manipulaDados(operacao, controle) {

    const peca = controle.querySelector('[data-contador]')
    console.log(peca)

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}
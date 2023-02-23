const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) =>{
    e.preventDefault()

    let numero = Number(frm.inNumero.value)
    
    let resultado = numero
    let resposta = ''

    frm.inNumero.value = ''
    inNumero.focus()

    if(numero == 0 || numero == 1){
        resposta = `O fatorial de ${numero} é 1`
    }

    for(let i = 1; i < numero; i++){
        resultado *=i
        console.log(resultado)
        resposta = `O fatorial de ${numero} é ${resultado}.`
    }

    resp.innerText = resposta
})


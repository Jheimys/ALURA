const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    let resposta = `Entre ${numero} e 1:`

    for(let i = numero; i > 0; i--){
        resposta += `${i}, `
    }

    resp.innerText = resposta
})
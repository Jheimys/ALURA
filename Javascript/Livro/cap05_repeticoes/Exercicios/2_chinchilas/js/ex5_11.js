const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const fruta = frm.inFruta.value
    const num = Number(frm.inNumero.value)

    let lista = ''

    for(let i = 1; i <= num; i++){
        if (i % 2 == 1) {
            lista += fruta
        } else {
            lista += '*'
        }
    }

    resp.innerText = lista

    frm.inFruta.value = ''
    frm.inNumero.value = ''
    frm.inFruta.value.focus()
})
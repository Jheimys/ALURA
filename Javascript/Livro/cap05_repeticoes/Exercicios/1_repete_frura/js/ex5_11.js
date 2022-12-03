const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const numChinchilasInicial = Number(frm.inchinchilas.value)
    const numAnos = Number(frm.inNumero.value)
    let numchinchilas = numChinchilasInicial 

    let lista = ''

    for(let i = 2; i <= numAnos; i++){
        if(numchinchilas < 2){
            console.log('Para fazer a previsão devemos ter pelo menos um casal de chinchila!')
        } else {
            numchinchilas *= 3
            console.log(numchinchilas)
        }

        lista += ` ${i}° Ano: ${numchinchilas}\n`
        //console.log(lista)
    }

    resp.innerText ='1° Ano:' + numChinchilasInicial +'\n' + lista

    frm.inchinchilas.value = ''
    frm.inNumero.value = ''
    frm.inchinchilas.focus()
})
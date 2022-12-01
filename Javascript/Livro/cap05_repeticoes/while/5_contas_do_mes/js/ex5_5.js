const frm1 = document.querySelector('#form1')
const frm2 = document.querySelector('#form2')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')
const resp4 = document.querySelector('#outResp4')

let resposta = ''
let saldo = ''
let numConta = 0
let valTotal = 0

frm1.addEventListener('submit', (e) => {
    e.preventDefault()

    const descricao = frm1.inDescricao.value
    const valor = Number(frm1.inValor.value)

    numConta++
    valTotal += valor

    resposta += `${descricao} -R$ ${valor.toFixed(2)}\n`
    resp1.innerText = `${resposta} ${"-".repeat(40)}`
    resp2.innerText = `${numConta} conta(s) - Total R$: ${valTotal.toFixed(2)}`
    resp3.innerText = `${"-".repeat(40)}`

    frm1.inDescricao.value = ''
    frm1.inValor.value = ''
    frm1.inDescricao.focus()
})

frm2.addEventListener('submit', (e) => {
    e.preventDefault()

    const salario = Number(frm2.inSalario.value)
    saldo = `${salario - valTotal}`

    resp4.innerText = `O Saldo do mês é ${saldo}`  
})
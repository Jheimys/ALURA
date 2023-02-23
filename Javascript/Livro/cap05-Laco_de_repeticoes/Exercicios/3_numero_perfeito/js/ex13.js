const frm = document.querySelector('form')
const resp1 = document.querySelector('#resp1')
const resp2 = document.querySelector('#resp2')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    
    let divisores = ''
    let soma = 0
    let resposta1 = ''
    let resposta2 = ''

    for(let i = 1; i <= num / 2; i++){
        if (num % i == 0) {
            divisores += i + ','
            soma += i
            console.log(divisores)
            //console.log(soma)
        }
    }
    
    if(soma == num ) {
        resposta1 = `Divisores do ${num}: ${divisores} (soma ${soma})`
        resposta2 = `${num} É um número perfeito!`
    } else {
        resposta1 = `Divisores do ${num}: ${divisores} (soma ${soma})`
        resposta2 = `${num} Não é um número perfeito!`
    }
    
    resp1.innerText = resposta1
    resp2.innerText = resposta2
})
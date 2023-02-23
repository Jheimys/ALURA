const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit',(e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let temDivisor = 0
    
    for(let i = 2; i <= num / 2; i++){
    // como o maior divisor inteiro possível de um número é sua metade, indicamos
    //que a repetição deve ir até num/2
        if(num % i == 0){
            temDivisor = 1
            break
        }
    }

    if(num > 1 && !temDivisor){
        resp.innerText = `O número ${num} é primo!`
    } else {
        resp.innerText = `O número ${num} não é primo!`
    }

    // forma 1
    //let numDivisores = 0

    // for(let i = 1; i <= num; i++){
    //     if(num % i == 0){
    //         numDivisores++
    //     }
    // }

    // if(numDivisores == 2){
    //     resp.innerText = `O número ${num} é primo!`
    // } else {
    //     resp.innerText = `O número ${num} não é primo!`
    // }

    // frm.inNumero.value = ''
    // frm.inNumero.focus()

})
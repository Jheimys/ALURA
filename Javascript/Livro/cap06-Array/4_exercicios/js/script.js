const form = document.querySelector('form')
const respErros = document.querySelector('#outErros')
const respChances = document.querySelector('#outChances')
const respDica = document.querySelector('#outDica')

const erros = []
const CHANCES = 6

//Math.floor() retira a parte flutuante
const sorteado = Math.floor(Math.random()*100) + 1
console.log('Número sorteado:', sorteado)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const numero = form.inNumero.value
    console.log(numero)

    if(numero == sorteado){
        respDica.innerText = `Parabéns você acertou!`
        form.btSubmit.disabled = true
        form.btNovo.className = 'exibe'

    } else if(erros.includes(numero)){
        alert('Esse número já foi utilizado. Tente outro!')
    } else if(numero > sorteado) {
        erros.push(numero)
        const numErros = erros.length
        const numChances = CHANCES - numErros

        respErros.innerText = `${numErros} (${erros.join(",")})`
        respChances.innerText = numChances

        if(numChances == 0) {
            alert('Suas chances acabaram!')
            form.btSubmit.disabled = true
            form.btNovo.className = "exibe"
            respDica.innerText = ` Game Over!! o número sorteado foi ${sorteado}`
        } else {
            respDica.innerText = `Tente um número menor que ${numero}`
        }
    } else {
        erros.push(numero)
        const numErros = erros.length
        const numChances = CHANCES - numErros

        respErros.innerText = `${numErros} (${erros.join(",")})`
        respChances.innerText = numChances

        if(numChances == 0) {
            alert('Suas chances acabaram!')
            form.btSubmit.disabled = true
            form.btNovo.className = "exibe"
            respDica.innerText = ` Game Over!! o número sorteado foi ${sorteado}`
        } else {
            respDica.innerText = `Tente um número maior que ${numero}`
        } 
    }

    form.inNumero.value = ""
    form.inNumero.focus()
})

//console.log(erros)
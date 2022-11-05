const form = document.querySelector('form')
const resp = document.querySelector('pre')

const carros = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const modelo = form.inModelo.value
    const preco = Number(form.inPreco.value)
    carros.push({modelo, preco})

    form.inModelo.value = ''
    form.inPreco.value = ''
    inModelo.focus()

    //Dispara um evento de click em btListar(equi. a um click bt na pg)
    form.btListar.dispatchEvent(new Event('click'))
})

console.log(carros)

form.btListar.addEventListener('click', () => {
    if(carros.length === 0){
        alert('Não há carros cadastrados')
        return
    }

    const lista = carros.reduce((acc, carro) => acc + carro.modelo + "-R$" + carro.preco.toFixed(2) + '\n', '')

    console.log(lista)

    

    resp.innerText = `Lista dos carros cadastrados\n${'-'.repeat(40)}\n${lista}`
})

form.btFiltrar.addEventListener('click', () => {
    const maximo = Number(prompt('Qual o valor máximo que o cliente deseja pagar?'))

    if(maximo == 0 || isNaN(maximo)){
        return
    }

    const carrosFilter = carros.filter(carro => carro.preco <= maximo)

    if(carrosFilter.length == 0){
        alert('Não há carros com preço inferior ou igual ao solicitado!')
        return
    }

    let lista = ''

    for(const carro of carrosFilter){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }

    resp.innerText = `Carros até R$:  ${maximo.toFixed(2)}\n${'-'.repeat(40)}\n${lista}`
})

form.btSimular.addEventListener('click', () => {
    const desconto = Number(prompt('Qual o precentual de desconto:'))

    if(desconto == 0 || isNaN(desconto)){
        return
    }

    carrosDesconto = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100)
    }))

    let lista = ''

    for(const carro of carrosDesconto){
        lista += `${carro.modelo} - R$:${carro.preco.toFixed(2)}\n`
    }

    resp.innerText = `Carros com descontos de ${desconto}%\n${'-'.repeat(40)}\n${lista}`
})
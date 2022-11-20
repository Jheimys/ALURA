const form = document.querySelector('form')
const resp = document.querySelector('pre')

const criancas = []
console.log('Vetor de criancas:', criancas)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = form.inNome.value
    const idade = Number(form.inIdade.value)
    criancas.push({nome, idade})
    console.log('Vetor de criancas dentro form:', criancas)
    form.reset()
    form.inNome.focus()

    // Dispara o evento de click automático no bt Listar.  
    form.btListar.dispatchEvent(new Event('click')) 
})


form.btListar.addEventListener('click', () => {
    if(criancas.length === 0){
        alert('Não há crianças na lista!')
        return
    }

    let lista = ''

    criancas.forEach((crianca) => {
        const {nome, idade} = crianca
        lista += `${nome} - ${idade} anos\n`
    })

    resp.innerText = lista
    //console.log(lista)
})

form.btResumir.addEventListener('click', () => {
    if(criancas.length == 0){
        alert('Não há crianças na lista!')
        return
    }

    const copia = [...criancas]
    copia.sort((a,b) => a.idade - b.idade) //Ordena o vetor copia pela idade
    let aux = copia[0].idade //Menor idade do vetor ordenado

    console.log('Vetor copia:', copia)
    //console.log(aux)

    let resumo = ''
    let nomes = []
    console.log('Vetor de nomes:',nomes)

    copia.forEach((crianca) => {
        const {nome, idade} = crianca

        if(idade == aux){
            nomes.push(nome)   
        } else {
            resumo += `${aux} ano(s): ${nomes.length} criança(s) -`
            resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`
            resumo += `(${nomes.join(', ')})\n\n`
            console.log('lista resumo:', resumo)
            
            aux = idade

            nomes = []
            nomes.push(nome)
            console.log('Vetor nome dentro do else:', nomes)   
        }
    })

    resumo += `${aux} ano(s): ${nomes.length} criança(s) -`
    resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`
    resumo += `(${nomes.join(', ')})\n\n`
    resp.innerText = resumo 
  
})




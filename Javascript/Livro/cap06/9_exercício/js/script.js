const form = document.querySelector('form')
const resp = document.querySelector('pre')

const criancas = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = form.inNome.value
    const idade = Number(form.inIdade.value)
    criancas.push({nome, idade})
    form.reset()
    form.inNome.focus()
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

    console.log(copia)
    //console.log(aux)

    let resumo = ''
    let nomes = []

    copia.forEach((crianca) => {
        const {nome, idade} = crianca

        if(idade == aux){

            nomes.push(nome)
            

        } else {
            console.log('aux:', aux)
            resumo += `${aux} ano(s): ${nomes.length} criança(s) -`
            resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`
            resumo += `(${nomes.join(', ')})\n\n`
            //console.log(resumo)
            
            aux = idade

            nomes = []
            nomes.push(nome)
            
        }

    })

    
    resumo += `${aux} ano(s): ${nomes.length} criança(s) -`
    resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`
    resumo += `(${nomes.join(', ')})\n\n`
    resp.innerText = resumo 
  
})

console.log(criancas)


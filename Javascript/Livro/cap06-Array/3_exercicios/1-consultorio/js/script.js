const frm = document.querySelector("form") //obtém os elementos da Pg.
const resNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []    // declara o vetor global

frm.addEventListener('submit', (e) => {
    e.preventDefault()                 //evita o envio do form.
    const nome = frm.inPaciente.value  //obtém o nome do paciente
    pacientes.push(nome) // add o nome no final do vetor
    let lista = ""                     //string para concatenar pacientes

    for(let i = 0; i < pacientes.length; i++ ){
        lista += `${i + 1}. ${pacientes[i]}\n`
    }

    respLista.innerText = lista       //exibe lista de paciente na tela
    frm.inPaciente.value = ''        // limpa o conteúdo do campo do form
    frm.inPaciente.focus()           //Posiciona o curso no campo 
})

//Add um "ouvinte" p/ o evento de click no btUrgencia que está no form
frm.btUrgencia.addEventListener('click', () => {

    //Verifica de as validações do from estão ok (no caso, paciente is required)
    if(!frm.checkValidity()){
        alert('Informe o nome do paciente a ser  atendido em caráter de urgência')
        frm.inPaciente.focus()
        return
    }

    const nome = frm.inPaciente.value
    pacientes.unshift(nome)
    let lista = ''

    //ForEach sobre o array paciente
    pacientes.forEach((paciente, i) => (lista += `${i + 1}.${paciente}\n`))
    respLista.innerText = lista
    frm.inPaciente.value = ''
    frm.inPaciente.focus()
})

frm.btAtender.addEventListener('click', () => {
    if(pacientes == 0){
        alert('Não há pacienetes na lista de espera')
        frm.inPaciente.focus()
        return
    }

    const atender = pacientes.shift()    //Remove o 1° da lista
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
})
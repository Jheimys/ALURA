const nome = ['James', 'Marina', 'Pedro', 'Elisa']
const idade = [39, 35, 8, 0]

const nomeIdade = [nome, idade]

const exibirNomeIdade = (nomePessoa) => {
    if(nomeIdade[0].includes(nomePessoa)){
        let indice = nomeIdade[0].indexOf(nomePessoa)

        return `Meu nome é ${nomeIdade[0][indice]} e tenho ${nomeIdade[1][indice]} anos`
    } else {
        return "Seu nome não está na lista!"
    }
}

console.log(exibirNomeIdade('José'))
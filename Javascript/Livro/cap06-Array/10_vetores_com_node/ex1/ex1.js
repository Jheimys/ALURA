import promptSync from "prompt-sync";
import chalk from "chalk";
const prompt = promptSync()

console.log(chalk.green("Informe os alunos. Apos, digite 'Fim' no nome para sair"))
const alunos = []

do {
    const nome = prompt('Nome:') //lê o nome
    if(nome == 'Fim'){ // verifica o nome, antes de ler as notas
        break   // sai do laço
    }

    const nota = Number(prompt('Nota:'))  //lê a nota
    alunos.push({nome, nota})

    console.log('Ok! Aluno(a) cadastrado(a)')
}while(true)

console.log("-".repeat(40))
//console.log(alunos)

const maior = alunos.reduce((a,b) => Math.max(a,b.nota), 0) // Maior nota
console.log(`Maior nota: ${maior}`) 

if(maior >= 7) {
    const destaques = alunos.filter(aluno => aluno.nota >= 7)

    //console.log(`Destaques:${destaques}`)

    destaques.forEach((destaque) => {
        console.log(`- ${destaque.nome}`)
    })
} else {
    console.log('Não há destaque nessa turma')
}
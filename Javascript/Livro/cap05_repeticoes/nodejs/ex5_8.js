import promptSync from"prompt-sync"
import chalk from "chalk"

const prompt = promptSync()

console.log(chalk.yellow("Programa Anos de Copa do Mundo. Digite o número 0 para sair"))
console.log('-'.repeat(60))

do {
    const ano = Number(prompt(chalk.green('Digite um ano:')))
    if(ano == 0){
        break
    } else if (ano == 1942 || ano == 1946){
        console.log(chalk.red(`Não houve copa em ${ano}. Segunda guerra mundial`))
    } else if (ano >= 1930 && ano % 4 == 2){
        console.log(chalk.red('É ano de copa do mundo!'))
    } else {
        console.log(chalk.red('Não é ano de copa do mundo!'))  
    }
} while (true);
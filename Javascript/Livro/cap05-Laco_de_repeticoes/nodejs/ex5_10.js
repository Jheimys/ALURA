import chalk from "chalk";
import PromptSync from "prompt-sync";
const prompt = PromptSync()

const valor = Number(prompt(chalk.green('Valor da compra:')))
const num = Number(prompt(chalk.green('Número de parcelas:')))

const valorParcela = Math.floor(valor / num)  //valor das parcelas sem decimal
//console.log(valorParcela)
const ultimaParcela = valorParcela + (valor % num)
//console.log(ultimaParcela)

for(let i = 1; i < num; i++){
    console.log(`${i}º Parcela:${valorParcela.toFixed(2)}`)
}

console.log(`${num}° Parcela: ${ultimaParcela.toFixed(2)}`)
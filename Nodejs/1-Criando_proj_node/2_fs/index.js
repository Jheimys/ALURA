
import fs from 'fs'
import chalk from 'chalk';

function tratarErro(erro){
    throw new Error(chalk.red(erro))
}

function pegaArquivo(caminhoArquivo){
    const encoding = 'utf-8'

    fs.readFile(caminhoArquivo, encoding, (erro, texto) => {
        if(erro){
            tratarErro(erro)
        }
        console.log(chalk.green(texto))
    })
}

pegaArquivo('./arquivo/texto.md')
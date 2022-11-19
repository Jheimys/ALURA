
import fs from 'fs'
import chalk from 'chalk';

function tratarErro(erro){
    throw new Error(chalk.red(erro))
}

async function pegaArquivo(caminhoArquivo){
    try {
        const enconding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoArquivo, enconding)
        console.log(chalk.green(texto)) 
    } catch (erro) {
        tratarErro(erro)
    }
}

/* 
Os blocos try e catch, que são as ferramentas do JavaScript para “captura” de exceções. Ou seja, qualquer erro ocorrido durante a execução do código no bloco try é tratado dentro do bloco catch.
*/

// function pegaArquivo(caminhoArquivo){
//     const encoding = 'utf-8'
//     fs.promises.readFile(caminhoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(tratarErro)
// }



pegaArquivo('./arquivo/texto.md')
pegaArquivo('./arquivo/')
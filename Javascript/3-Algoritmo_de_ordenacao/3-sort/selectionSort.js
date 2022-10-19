const livros = require('./obj')
const menorValor = require('./menorValor')

for(let atual = 0; atual < livros.length; atual++){
   
    let menor = menorValor(livros, atual)
    //console.log("menor:", menor)
    //console.log(livros[menor])
    
    let livroAtual = livros[atual]
    //console.log(livroAtual)

    let livroMenorPreco = livros[menor]
    //console.log(livros[menor])

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
    
}
console.log(livros)
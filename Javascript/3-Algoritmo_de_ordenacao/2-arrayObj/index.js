const livros = require('./obj')

let maisBarato = 0

for(let atual = 0; atual < livros.length; atual++){
    if(livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual
        //console.log(maisBarato)
    }
}


console.log(`O preço mais barato é: ${livros[maisBarato].preco} com o titulo:${livros[maisBarato].titulo}`)
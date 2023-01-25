import express from "express"
import db from "./config/dbConect.js"
import livros from "./models/Livro.js"
import routes from "./routes/index.js"

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
    console.log('conexão com o banco feita com sucesso.')
})

const app = express()

routes(app)


//Habilita o uso do json nos métodos.
app.use(express.json())

// const livros = [
//     {id: 1, "titulo": "senhor dos Aneis"},
//     {id: 2, "titulo": "O Hobbit"}
// ]



app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    res.json(livros[index])
})



app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params
    let index = buscaLivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`)
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app
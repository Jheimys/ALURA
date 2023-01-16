// 1° --> importar express
// 2° --> Chamar o express
// 3° --> Criar uma rota
// 4° --> exportar app 
import express from "express"

const app = express()

const livros = [
    {id: 1, "titulo": "Conjuntos e funções"},
    {id: 2, "titulo": "Logaritmos"},
    {id: 3, "titulo": "Tigonometria"}
]

//Para ler arquivos json
app.use(express.json())

//Rotas
app.get('/', (req, res) => {
    res.status(200).send('Fundamentos da Matemática Elementar')
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    res.json(livros[index]) 
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send('O livro foi cadastrado com  sucesso.')
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
    res.send(`O livro ${id} foi removido com sucesso.`)
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}



export default app
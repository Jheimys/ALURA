// 1° --> importar express
// 2° --> Chamar o express
// 3° --> Criar uma rota
// 4° --> exportar app 
import express from "express"
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"

db.on('error', console.log.bind(console, 'Erro de conexão.'))
db.once('open', () => {
    console.log('Conexão com o banco feita com sucesso.')
})

const app = express()



//Para ler arquivos json
app.use(express.json())

//Rotas
app.get('/', (req, res) => {
    res.status(200).send('Fundamentos da Matemática Elementar')
})

app.get('/livros', (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros)
    })
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    res.json(livros[index]) 
})

app.post('/livros', (req, res) => {
   let livro = new livros(req.body)
    //persistir os dados no banco
    livro.save((err) => {

        if(err) {
            res.status(500).send({message: `${err.message} - Falha ao cadastar livro.`})
        } else {
            res.status(201).send(livro.toJSON())
        }
    })
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
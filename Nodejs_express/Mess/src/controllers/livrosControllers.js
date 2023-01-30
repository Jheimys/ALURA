import livros from "../models/Livro.js"

class livroController {
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static buscarLivroPorId = (req, res) => {
        const id = req.params.id 

        livros.findById(id, (err, livros) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
            } else {
                res.status(200).send(livros)
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body)

        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar o livro`})
            } else {
                res.status(200).send(livro.toJSON())
            }
        })
    }
}

export default livroController
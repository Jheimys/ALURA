import express from "express"
import livroController from "../controllers/livrosControllers.js"

const router = express.Router()

router
    .get('/livros', livroController.listarLivros)
    .get('/livros/busca', livroController.listarLivroPorEditora)
    .get('/livros/:id', livroController.buscarLivroPorId)
    .post('/livros', livroController.cadastrarLivro)
    .put('/livros/:id', livroController.atualizarLivro)
    .delete('/livros/:id', livroController.excluirLivro)

export default router
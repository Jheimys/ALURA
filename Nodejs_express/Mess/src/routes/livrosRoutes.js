import express from "express"
import livroController from "../controllers/livrosControllers.js"

const router = express.Router()

router
    .get('/livros', livroController.listarLivros)
    .get('/livros/:id', livroController.buscarLivroPorId)
    .post('/livros', livroController.cadastrarLivro)

export default router
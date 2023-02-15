import express from 'express'
import companhiaController from '../controllers/companhiaController.js'

const router = express.Router()

router
    .get('/companhia', companhiaController.listarCompanhia)
    .get('/companhia/:id', companhiaController.listarCompanhiaPorId)
    .post('/companhia', companhiaController.cadastrarCia)
    .put('/companhia/:id', companhiaController.atualizarCompanhia)
    .delete('/companhia/:id', companhiaController.deleteCompanhia)

export default router
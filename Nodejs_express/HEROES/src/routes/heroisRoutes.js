import express from "express"
import heroisController from "../controllers/herois.Controller.js"

const router = express.Router()

router
    .get('/herois', heroisController.listarHerois)
    .get('/herois/busca', heroisController.listarHeroisPorCompanhia)
    .get('/herois/:id', heroisController.buscarHeroiPorId)
    .post('/herois', heroisController.cadastrarHeroi)
    .put('/herois/:id', heroisController.atualizarHeroi)
    .delete('/herois/:id', heroisController.removerHeroi)

export default router
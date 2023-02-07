import express from "express"
import heroisController from "../controllers/herois.Controller.js"

const router = express.Router()

router
    .get('/herois', heroisController.listarHerois)

export default router
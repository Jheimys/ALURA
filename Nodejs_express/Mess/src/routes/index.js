import express from "express"
import livros from "./livrosRoutes.js"
import autores from "./autores.Routes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Fundamentos da Matemática Elementar'})
    })

    app.use(
        express.json(),
        livros,
        autores
    )
}

export default routes
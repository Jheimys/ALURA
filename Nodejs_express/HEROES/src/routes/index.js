import express from "express"
import companhia from "./companhiaRoutes.js"
import herois from "./heroisRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Liga dos Heróis'})
    })

    app.use(
        express.json(),
        herois,
        companhia
    )
}

export default routes
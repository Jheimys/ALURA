const express = require('express')
const bodyParser = require('body-parser')

const port = 3000

const app = express()

app.use(bodyParser.json())

app.get('/teste', (req, res) => {
    res.status(200).send({message: 'Boas vindas à API'})
})

app.listen(port, () => {
    console.log(`O servidor esta rodando na porta ${port}`)
})

module.export = app
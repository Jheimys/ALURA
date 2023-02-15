import companhia from "../models/companhia.js"

class companhiaController {
    static listarCompanhia = (req, res) => {
        companhia.find((err, companhia) => {
            res.status(200).json(companhia)
        })
    }

    static listarCompanhiaPorId = (req, res) => {
        const id = req.params.id 

        companhia.findById(id, (err, companhia) => {
            if(err) {
                res.status(400).send({message:`${err.message} - Id inválido`})
            } else {
                res.status(200).send(companhia)
            }
        })
    }

    static cadastrarCia = (req, res) => {
        let cia = new companhia(req.body)

        cia.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar`})
            } else {
                res.status(200).send(cia.toJSON())
            }
        })
    }

    static atualizarCompanhia = (req, res) => {
        const id = req.params.id 

        companhia.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha na atualização`})
            } else {
                res.status(200).send('Atuaçização feita com sucesso.')
            }
        })
    }

    static deleteCompanhia = (req, res) => {
        const id = req.params.id 

        companhia.findByIdAndDelete(id, (err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao deeletar companhia`})
            } else {
                res.status(200).send('Companhia deletada com sucesso.')
            }
        })
    }

}

export default companhiaController
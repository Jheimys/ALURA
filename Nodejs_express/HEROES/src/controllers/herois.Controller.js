import herois from '../models/Herois.js'

class heroisController {
    static listarHerois = (req, res) => {
        herois.find()
            .populate('conpanhia')
            .exec((err, herois) => {
                res.status(200).json(herois)
            })
    }

    static buscarHeroiPorId = (req, res) => {
        const id = req.params.id 

        herois.findById(id)
            .populate('conpanhia', 'nome')
            .exec((err, herois) => {
                if(err) {
                    res.status(400).send({message: `${err.message} - Id não encontrado`})
                } else {
                    res.status(200).send(herois)
                }
            })
    }

    static cadastrarHeroi = (req, res) => {
        let heroi = new herois(req.body)

        heroi.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar heroi.`})
            } else {
                res.status(200).send(heroi.toJSON())
            }
        })
    }

    static atualizarHeroi = (req, res) => {
        const id = req.params.id 

        herois.findByIdAndUpdate(id, {$set: req.body}, (err, livros) => {
            if(err) {
                res.status(500).send({message: `${err.message} - erro interno.`})
            } else {
                res.status(200).send('Dados de herois atualizado.')
            }
        })
    }

    static removerHeroi = (req, res) => {
        const id = req.params.id 

        herois.findByIdAndRemove(id, (err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Id não encontrado`})
            } else {
                res.status(200).send('Herói removido com sucesso.')
            }
        })
    }

    static listarHeroisPorCompanhia = (req, res) => {
        const companhia = req.query.companhia 

        //            = modelo    = constante    
        herois.find({'conpanhia': companhia}, {}, (err, herois) => {
            res.status(200).send(herois)
        })
    }
}

export default heroisController


import herois from '../models/Herois.js'

class heroisController {
    static listarHerois = (req, res) => {
        herois.find((err, herois) => {
            res.status(200).json(herois)
        })
    }
}

export default heroisController


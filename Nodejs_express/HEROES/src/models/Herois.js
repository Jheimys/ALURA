import mongoose from "mongoose";

const heroisSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    poder: {type: String, required: true},
    fraqueza: {type: String, required: true},
    conpanhia: {type: mongoose.Schema.Types.ObjectId, ref: 'companhia', required: true}
})

const herois = mongoose.model('herois', heroisSchema)

export default herois
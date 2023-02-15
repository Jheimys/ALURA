import mongoose from "mongoose"

const companhiaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String, required: true}
    }, 
    
    {
        versionKey: false
    }
)

const companhia = mongoose.model('companhia', companhiaSchema)

export default companhia
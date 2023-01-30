import mongoose from"mongoose"

mongoose.connect('mongodb+srv://james:123@cluster0.eu8vcuu.mongodb.net/livros_de_matematica')

let db = mongoose.connection

export default db
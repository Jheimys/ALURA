import mongoose from "mongoose"

mongoose.connect('mongodb+srv://james:123@cluster0.to8qze8.mongodb.net/liga')

let db = mongoose.connection

export default db
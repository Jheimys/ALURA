import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://james:jb0327550522@cluster0.0gemx07.mongodb.net/alura-node')

let db = mongoose.connection

export default db
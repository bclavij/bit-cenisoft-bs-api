const mongoose = require('mongoose')

const libroSchema = new mongoose.Schema({
    caratula: { type: String, required: true },
    nombre: { type: String, required: true }, 
    descripcion: { type: String, required: false }, 
    valorUnitario: { type: Number, required: true, min: 0 },
    categorias:{ type: [String], required: true,}
})

const Libro = mongoose.model('libros', libroSchema)

module.exports = Libro

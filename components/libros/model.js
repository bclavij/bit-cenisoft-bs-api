const mongoose = require('mongoose')

const Libro = mongoose.model('libros', { caratula: String, nombre: String, descripcion: String, valorUnitario: Number, categorias: String })

module.exports = Libro

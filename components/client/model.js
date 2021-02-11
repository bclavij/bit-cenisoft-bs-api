const mongoose = require('mongoose')

const Client = mongoose.model('clientes', { nombre: String, direccion: String, celular: String, correo: String, contrasena: String })

module.exports = Client

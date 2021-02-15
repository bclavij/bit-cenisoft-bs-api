const mongoose = require('mongoose')

const detalleSchema = new mongoose.Schema({
    idLibro: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'libros' },
    libro: { type: String, required: true }, 
    valorUnitario: { type: Number, required: true, min: 0 },
    Cantidad:{ type: Number, required: true, min: 1 }
})

const ventaSchema = new mongoose.Schema({
    idCliente: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'clientes' },
    detalles : {
        type: [detalleSchema],
        required: false/*,
        validate: {
            validador: (val) => {
                console.log('validation ', Array.isArray(val) && val.length>0)
                return Array.isArray(val) && val.length>0
            },
            message: props => 'Sale must have at least one detail!'
        }*/
    },
    total: { type: Number, required: true, min: 0 },
    fecha: { type: Date, required: false }
})

const Venta = mongoose.model('ventas', ventaSchema)

module.exports = Venta
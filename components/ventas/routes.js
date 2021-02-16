const express = require('express')
const router = express.Router()
const api_client = require('./actions')

// GET by ID 
router.get('/:id?', api_client.getVenta)

// POST Crear una venta
router.post('/', api_client.createVenta)

// PUT actualizar una venta
router.put('/:id', api_client.updateVenta)

// DELETE eliminar una venta
router.delete('/:id', api_client.deleteVenta)

// POST insertar un nuevo detalle
router.post('/:id?/insertarDetalle', api_client.insertDetalleVenta)

// DELETE eliminar detalle
router.delete('/:id?/eliminarDetalle/:idDetalle', api_client.deleteVentaDetalle)

// PUT actualizar detalle
router.put('/:id?/actualizarDetalle/:idDetalle', api_client.updateDetalleVenta)


module.exports = router

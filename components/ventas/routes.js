const express = require('express')
const router = express.Router()
const api_client = require('./actions')

// GET by ID
router.get('/:id?', api_client.getVenta)

// POST Create a Client
router.post('/', api_client.createVenta)

// PUT Update a Client's info
router.put('/:id', api_client.updateVenta)

// PUT Update a Client's info
router.patch('/:id', api_client.insertDetalleVenta)

// DELETE by ID
router.delete('/:id', api_client.deleteVenta)

// DELETE by ID
router.delete('/:id?/eliminarDetalle/:idDetalle', api_client.deleteVentaDetalle)

// GET detalle by ID
router.get('/:id/:idDetalle?', api_client.getVentaDetalle)

module.exports = router

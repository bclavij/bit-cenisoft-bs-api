const express = require('express')
const router = express.Router()
const api_client = require('./actions')

// GET by ID
router.get('/:id?', api_client.getLibro)

// POST Create a Libro
router.post('/', api_client.createLibro)

// PUT Update a Libro's info
router.put('/:id', api_client.updateLibro)

// DELETE by ID
router.delete('/:id', api_client.deleteLibro)

module.exports = router

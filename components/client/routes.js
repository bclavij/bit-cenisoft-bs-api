const express = require('express')
const router = express.Router()
const api_client = require('./actions')

// GET by ID
router.get('/:id?', api_client.getClient)

// POST Create a Client
router.post('/', api_client.createClient)

// PUT Update a Client's info
router.put('/:id', api_client.updateClient)

// DELETE by ID
router.delete('/:id', api_client.deleteClient)

module.exports = router

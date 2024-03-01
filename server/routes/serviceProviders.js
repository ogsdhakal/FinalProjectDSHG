const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: "Get all service providers"})
})

router.get('/:id', (req, res) => {
    res.json({mssg: "Get a single service provider"})
})

module.exports = router
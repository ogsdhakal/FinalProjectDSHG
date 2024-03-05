const express = require('express')
const {
     addServiceProviders, 
     getAllServiceProviders, 
     getaServiceProvider
    } = require('../controllers/serviceProvidersController')

const router = express.Router()

// Get all service providers
router.get('/', getAllServiceProviders)

// Add service providers
router.post('/', addServiceProviders)

// Get a single service providers
router.get('/:id', getaServiceProvider)

module.exports = router
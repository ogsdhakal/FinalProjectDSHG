const express = require('express')
const {
     addServiceProviders, 
     getAllServiceProviders, 
     getaServiceProvider
    } = require('../controllers/serviceProvidersController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require validation for user
router.use(requireAuth)

// Get all service providers
router.get('/', getAllServiceProviders)

// Add service providers
router.post('/', addServiceProviders)

// Get a single service providers
router.get('/:id', getaServiceProvider)

module.exports = router
const ServiceProvider = require('../models/serviceProvidersModel')
const mongoose = require('mongoose');

// get all service providers
const getAllServiceProviders = async (req, res) => {
    try{
        const serviceProvider = await ServiceProvider.find({})
        res.status(200).json(serviceProvider)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// get a single service providers
const getaServiceProvider = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid service provider ID." });
    }
    
    const serviceProvider = await ServiceProvider.findById(id)
    if(!serviceProvider){
       return res.status(404).json({error: "No such service provider."})
    }
    res.status(200).json(serviceProvider)
}

// add service providers
const addServiceProviders = async (req, res) => {
    const {name,address, phone} = req.body
    try{
        const serviceProvider = await ServiceProvider.create({ name, address, phone })
        res.status(200).json(serviceProvider)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllServiceProviders,
    getaServiceProvider,
    addServiceProviders
}
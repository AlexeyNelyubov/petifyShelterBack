const express = require('express')
const petsRouter = require('./Pets.js')
const russuanCyties = require('./RussianCities.js')

const router = express.Router()

router.use('/pets', petsRouter)
router.use('/city', russuanCyties)

module.exports = router


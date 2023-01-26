const express = require('express')
const petsRouter = require('./Pets.js')
const russuanCyties = require('./RussianCities.js')

const router = express.Router()

router.use('/', petsRouter)
router.use('/', russuanCyties)

module.exports = router


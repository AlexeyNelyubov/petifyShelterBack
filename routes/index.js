const express = require('express')
const petsRouter = require('./Pets.js')
const petIdRouter = require('./PetId.js')
const russuanCyties = require('./RussianCities.js')
const SignUp = require('./SignUp.js')

const router = express.Router()

router.use('/pets', petsRouter)
router.use('/pet', petIdRouter)
router.use('/city', russuanCyties)
router.use('/signup', SignUp)

module.exports = router


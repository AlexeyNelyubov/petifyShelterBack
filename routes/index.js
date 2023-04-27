const express = require('express')
const petRouter = require ('./Pet.js');
const petsRouter = require('./Pets.js')
const petIdRouter = require('./PetId.js')
const russuanCyties = require('./RussianCities.js')
const signUp = require('./SignUp.js')
const signIn = require ('./SignIn.js')
const newPet = require ('./newPet.js')

const router = express.Router()

router.use('/pet', petRouter)
// router.use('/pets', petsRouter)
// router.use('/pet', petIdRouter)
router.use('/city', russuanCyties)
router.use('/signup', signUp)
router.use('/signin', signIn)
// router.use('/newpet', newPet)


module.exports = router

 
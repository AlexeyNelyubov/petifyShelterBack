const express = require('express')
const petsRouter = require('./Pets.js')
const petIdRouter = require('./PetId.js')
const russuanCyties = require('./RussianCities.js')
const signUp = require('./SignUp.js')
const signIn = require ('./SignIn.js')
const {logOut} = require ('./logOut.js')

const router = express.Router()

router.use('/pets', petsRouter)
router.use('/pet', petIdRouter)
router.use('/city', russuanCyties)
router.use('/signup', signUp)
router.use('/signin', signIn)
router.get('/logout', logOut)

module.exports = router

 
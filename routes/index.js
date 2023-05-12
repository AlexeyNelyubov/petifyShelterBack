const express = require('express')
const petRouter = require ('./Pet.js');
const citiesRouter = require('./Cities.js')
const signUpRouter = require('./SignUp.js')
const signInRouter = require ('./SignIn.js')


const router = express.Router()

router.use('/pet', petRouter)
router.use('/city', citiesRouter)
router.use('/signup', signUpRouter)
router.use('/signin', signInRouter)


module.exports = router

 
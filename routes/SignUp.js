const express = require('express');
const router = express.Router()
const {SignUp} = require('../controllers/signupcontrollers.js') 
router.post('/', SignUp)

module.exports = router;
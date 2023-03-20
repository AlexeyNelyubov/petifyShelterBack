const express = require('express');
const router = express.Router()
const {SignUp} = require('../controllers/signUpController.js') 
router.post('/', SignUp)

module.exports = router;
const express = require('express');
const router = express.Router();
const {newPet} = require('../controllers/newPetController.js')

router.post('/', newPet)

module.exports = router
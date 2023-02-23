const express = require('express');
const { PetId } = require ('../controllers/petidcontroller.js')
const router = express.Router();


router.get ('/:id', PetId)

module.exports = router;
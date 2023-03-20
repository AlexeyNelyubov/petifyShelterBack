const express = require ('express')

const { listPets } = require ('../controllers/petsController.js')
const router = express.Router();

router.get ('/', listPets)

module.exports = router;
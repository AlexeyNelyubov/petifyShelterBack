const express = require ('express')

const { listPets } = require ('../controllers/petscontroller.js')
const router = express.Router();

router.get ('/pets', listPets)

module.exports = router;
const express = require('express')
const router = express.Router()
const { listPets } = require ('../controllers/petsController.js')
const {PetId} = require('../controllers/petIdController.js') 
const {newPet} = require('../controllers/newPetController.js')


router.get('/allpets', listPets);
router.get('/:id', PetId);
router.post('/add-pet', newPet);

module.exports = router;
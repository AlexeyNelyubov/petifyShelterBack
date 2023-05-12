const express = require ('express')

const { listCities } = require ('../controllers/cityController.js')
const router = express.Router();

router.get ('/', listCities)

module.exports = router;

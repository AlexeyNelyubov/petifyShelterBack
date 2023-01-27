const express = require ('express')

const { listCities } = require ('../controllers/citycontroller.js')
const router = express.Router();

router.get ('/', listCities)

module.exports = router;

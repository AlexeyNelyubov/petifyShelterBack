const express = require('express')
const {signIn} = require ('../controllers/signInController.js')
const router = express.Router()

router.post('/', signIn)

module.exports = router;
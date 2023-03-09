const express = require('express')
const {signIn} = require ('../controllers/signincontroller.js')
const router = express.Router()

router.get('/:email.:password', signIn)

module.exports = router;
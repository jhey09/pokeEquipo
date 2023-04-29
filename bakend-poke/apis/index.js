const express = require('express')
const router = express.Router()
const pokemon = require('./pokeApp')

router.use( '/api', pokemon)


module.exports = router

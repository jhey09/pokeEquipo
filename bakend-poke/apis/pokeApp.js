const express = require('express')
const router = express.Router()
const axios = require('axios')


router.get('/', async (req, res) => {
    url = `https://pokeapi.co/api/v2/pokemon/ditto`
    fetch(url)
  .then(response => response.json())
  .then(data => res.json(data));

    
  

  
})




  module.exports = router
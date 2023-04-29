const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const pokemon = require('./apis/index')


app.use(express.json())

app.use(cors())

app.use( '/', pokemon)

app.get('/', (req, res) => {
  res.send('Servidor vivo')
})


const PORT = 4001

app.listen(PORT, () => {
  console.log(`Servidor conectado en ${PORT}`)
})


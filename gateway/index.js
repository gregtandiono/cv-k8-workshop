const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
require('dotenv').config()
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('API Gateway'))

app.get('/products', async (req, res) => {
  try {
    const products = await axios.get(process.env.productServiceHost)
    res.json(products.data)
  } catch (e) {
    res.status(400).json({ error: e })
  }
})

app.get('/members', async (req, res) => {
  try {
    const products = await axios.get(process.env.memberServiceHost)
    res.json(products.data)
  } catch (e) {
    res.status(400).json({ error: e })
  }
})

app.listen(process.env.port, () => {
  console.log('API Gateway is listening on port:', process.env.port)
})

const express = require('express')
const bodyParser = require('body-parser')
const faker = require('faker')
require('dotenv').config()
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  const products = []
  for (let i = 0; i < 8; i++) {
    products.push({
      name: faker.commerce.productName(),
      id: faker.random.uuid(),
      price: faker.commerce.price(),
      color: faker.commerce.color()
    })
  }
  res.json(products)
})

app.listen(process.env.port, () => {
  console.log('Product service is listening on port:', process.env.port)
})

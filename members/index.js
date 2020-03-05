const express = require('express')
const bodyParser = require('body-parser')
const faker = require('faker')
require('dotenv').config()
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  const members = []
  for (let i = 0; i < 15; i++) {
    members.push({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    })
  }
  res.json(members)
})

app.listen(process.env.port, () => {
  console.log('Member service is listening on port:', process.env.port)
})

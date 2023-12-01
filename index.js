const express = require('express')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 8080

const app = express()

app.use(cors())

app.get('/', (req, res, next) => {
  res.status(200)
  res.end('Welcome to test server!!')
})

app.listen(port, () => {
  console.log(`server started on port: ${8080}`)
})
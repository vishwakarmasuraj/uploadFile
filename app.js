const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')
require('dotenv').config()
// process.env.PORT
// console.log(process.env.PORT)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

mongoose.connect(process.env.DATABASE_CONNECTION).then(() => {
  console.log('connect to DB')
})

app.listen(3000)

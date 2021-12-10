const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')
require('dotenv').config()
const port = process.env.PORT
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

mongoose.connect(process.env.DATABASE_CONNECTION).then(() => {
  console.log('connect to DB')
})

app.listen(port, () => console.log(`server is listening at ${ port }`))

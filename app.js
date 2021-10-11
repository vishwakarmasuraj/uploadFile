const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

mongoose
  .connect(
    'mongodb+srv://suraj:suraj%405151@cluster0.oodet.mongodb.net/one?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('connect to DB')
  })

app.listen(3000)

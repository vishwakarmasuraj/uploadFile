const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose
  .connect(
    'mongodb+srv://suraj:suraj%405151@cluster0.oodet.mongodb.net/one?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('connect to DB')
  })

app.listen(3000)

const express = require('express')
const router = express.Router()

router.use('/fileUpload', require('./routes'))

module.exports = router

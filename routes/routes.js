const express = require('express')
const router = express.Router()
const multer = require('multer')

// const fileController = require('./../controller/uploadFile')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (
      file.mimetype == 'M4A' ||
      file.mimetype == 'FLAC' ||
      file.mimetype == 'MP3' ||
      file.mimetype == ' WAV' ||
      file.mimetype == 'MP4' ||
      file.mimetype == 'WMA' ||
      file.mimetype ||
      'AAC'
    ) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Only Audio format allowed!'))
    }
    cb(null, __dirname + './../uploads') //you tell where to upload the files,
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

var upload = multer({
  storage: storage,
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...')
  },
})

router.post('/profile', upload.single('file'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log('code here....')
  console.log(req.file)
})

module.exports = router

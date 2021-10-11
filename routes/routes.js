const express = require('express')
const router = express.Router()
const multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (
      (file.mimetype == 'document/txt' || file.mimetype == 'document/pdf',
      file.mimetype == 'document/ppt and PPTX')
    ) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Only .txt, pdf and ppt and pptx format allowed'))
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

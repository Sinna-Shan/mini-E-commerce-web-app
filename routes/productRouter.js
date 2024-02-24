const express = require('express');
const router = express.Router();
const controller = require('./../controllers/productController')
const multer = require('multer');

// defining file storage and file name for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname+'/../uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix+file.originalname);
  }
})

const upload = multer({ storage: storage })

// route handlers
router.route('/').get(controller.getAllProducts).post(upload.array('files'),controller.createProduct);
router.route('/:id').get(controller.getProductByID).patch(upload.array('files'),controller.updateProduct).delete(controller.deleteProduct);


module.exports = router;

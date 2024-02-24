const Product = require('./../models/productModel');

// get all products
exports.getAllProducts = async function (req, res) {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: 'success',
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// find a product by its ID
exports.getProductByID = async function (req, res) {
  try {
    const products = await Product.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// create a new product
exports.createProduct = async function (req, res) {
  try {
    const imgUrls = req.files.map((file) => file.filename);
    const data = { ...req.body, images: imgUrls };
    const products = await Product.create(data);
    res.status(200).json({
      status: 'success',
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

// update a product
exports.updateProduct = async function (req, res) {
  try {
    const data = req.files
      ? { ...req.body, images: req.files.map((file) => file.filename) }
      : req.body;

    const products = await Product.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

//delete a product
exports.deleteProduct = async function (req, res) {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

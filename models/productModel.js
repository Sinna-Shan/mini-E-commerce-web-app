const mongoose = require('mongoose');
// schema for mongoose
const productSchema = new mongoose.Schema({
  SKU: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
  },
  isFavorite:{
    type: Boolean,
    default: false,
  }
});

// create model from schema
const Product = mongoose.model('Product', productSchema);
module.exports = Product;

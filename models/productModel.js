const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Product title is required"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  image: {
    type: String,
    required: [true, "Please provide an image"],
  },
  price: {
    type: String,
    required: [true, "Product price is required"],
  },
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;

//Model - Controller - Route -index.js

//index.js - Route - Controller - Model

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product title is required"],
      unique: [true, "Product with this title already exists"],
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
  },
  { timestamps: true }
);

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;

//Model - Controller - Route -index.js

//index.js - Route - Controller - Model

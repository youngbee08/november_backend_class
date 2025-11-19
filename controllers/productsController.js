const productModel = require("../models/productModel");

async function createProduct(req, res) {
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "All fields are required",
    });
  }
  try {
    const product = await productModel.create(req.body);
    if (!product) {
      return res.status(400).json({
        status: "error",
        message: "Unable to create product, please try again.",
      });
    }
    res.status(201).json({
      status: "success",
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.log("error creating product", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}

module.exports = { createProduct };

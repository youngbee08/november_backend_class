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

async function getProducts(req, res) {
  try {
    const getProducts = await productModel.find();
    if (!getProducts) {
      return res.status(404).json({
        status: "error",
        message: "Couldn't find any product..",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Product found successful",
      products: getProducts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}

module.exports = { createProduct, getProducts };

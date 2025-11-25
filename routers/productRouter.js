const {
  createProduct,
  getProducts,
} = require("../controllers/productsController");
const express = require("express");

const productRouter = express.Router();
productRouter.post("/create", createProduct);
productRouter.get("/", getProducts);

module.exports = productRouter;

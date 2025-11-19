const { createProduct } = require("../controllers/productsController");
const express = require("express");

const productRouter = express.Router();
productRouter.post("/create", createProduct);

module.exports = productRouter
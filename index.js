const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(
    `App is running on port:${port} Server Url: http://localhost:${port}`
  );
});

const products = [
  {
    name: "Century",
    price: "$40",
    category: "electronics",
    available: true,
  },
  {
    name: "Table",
    price: "$40",
    category: "furniture",
    available: true,
  },
  {
    name: "Chair",
    price: "$40",
    category: "furniture",
    available: true,
  },
  {
    name: "Century",
    price: "$40",
    category: "electronics",
    available: true,
  },
  {
    name: "Century",
    price: "$40",
    category: "electronics",
    available: true,
  },
  {
    name: "Century",
    price: "$40",
    category: "electronics",
    available: true,
  },
];

const token = "dgfdgfdgfhddghgdhjgdhg2665udwqii2q90@287732ewhhsdjk";
const checkIsAuthenticated = (req, res, next) => {
  if (!req.query.token) {
    return res.status(401).json({
      status: "error",
      message: "Unauthorized",
    });
  }
  if (req.query.token !== token) {
    return res.status(422).json({
      status: "error",
      message: "Invalid token",
    });
  }
  next()
};

app.get("/products", checkIsAuthenticated, (req, res) => {
  if (products.length === 0) {
    return res.json({
      success: false,
      message: "Unable to find product.",
      products,
    });
  }
  if (req.query.q === "electronics") {
    const electronicProduct = products.filter((p) => {
      return p.category === "electronics";
    });
    if (!electronicProduct) {
      return res.json({
        success: false,
        message: "Couldn't find product under that category",
      });
    }
    return res.json({
      success: true,
      message: "Product under electronics category was found successfully.",
      electronicProduct,
    });
  }
  res.json({
    success: true,
    message: "Product found successfully.",
    products,
  });
});

app.get("/products/:id", (req, res) => {
  if (products.length === 0 || !products[req.params.id]) {
    return res.json({
      success: false,
      message: "Unable to find product.",
    });
  }
  res.json({
    success: true,
    message: "Product found successfully.",
    product: products[req.params.id],
  });
});

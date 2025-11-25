const express = require("express");
const app = express();
const port = 3000;
const connectToDb = require("./config/connectToDb");
const dotenv = require("dotenv");
const productRouter = require("./routers/productRouter");
dotenv.config();
app.use(express.json());
app.listen(port, () => {
  console.log(
    `App is running on port:${port} Server Url: http://localhost:${port}`
  );
});
connectToDb();

app.use("/api/products", productRouter);

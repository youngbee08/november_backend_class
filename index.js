const express = require("express");
const app = express();
const port = 4000;
const connectToDb = require("./config/connectToDb");
const dotenv = require("dotenv");
const productRouter = require("./routers/productRouter");
const userRouter = require("./routers/UserRouter");
dotenv.config();
app.use(express.json());
app.listen(port, () => {
  console.log(
    `App is running on port:${port} Server Url: http://localhost:${port}`
  );
});
connectToDb();

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

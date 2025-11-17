const express = require("express");
const app = express();
const port = 3000;
const connectToDb = require("./config/connectToDb");
const dotenv = require("dotenv");
dotenv.config();
app.listen(port, () => {
  console.log(
    `App is running on port:${port} Server Url: http://localhost:${port}`
  );
});
connectToDb();

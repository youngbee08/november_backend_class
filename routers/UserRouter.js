const { signUp } = require("../controllers/UserController");
const express = require("express");

const userRouter = express.Router();

userRouter.post("/create", signUp);

module.exports = userRouter;

const userModel = require("../models/userModel");
const { hashPassword } = require("../utility/bcryptjs");

const signUp = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      status: "error",
      message: "All fields are required",
    });
  }
  try {
    const { password } = req.body;
    const hashed = hashPassword(password);
    const user = await userModel.create({
      ...req.body,
      password: hashed,
    });
    if (!user) {
      return res.status(400).json({
        status: "error",
        message: "An unexpected error occured while signing up",
      });
    }
    res.status(201).json({
      stratus: "success",
      message: "Account created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signUp };

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Name is required"],
      unique: [true, "Account already exist"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;

const bcrypt = require("bcryptjs");

async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { hashPassword };

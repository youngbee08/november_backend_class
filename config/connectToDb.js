const mongoose = require("mongoose");

async function connectToDb() {
  const uri = process.env.MONGO_URI;

  const connected = await mongoose.connect(uri);
  if (connected) {
    console.log("App connected to database");
  } else {
    console.log("Unable to connect app to databsae");
  }
}

module.exports = connectToDb;
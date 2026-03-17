const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("Buyer", buyerSchema);

const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  ProductName: String,
  Price: Number,
  Catergory: String
});
module.exports = mongoose.model("Product", productSchema);

const Product = require("../Models/product.model");

// GET ALL
exports.getAll = async (req, res, next) => {
  try {
    const products = await Product.find();

    const formatted = products.map((p) => ({
      productname: p.productname,
      price: p.price,
      catergory: p.catergory,
      id: p._id,
    }));

    res.json({
      success: true,
      message: "Projects list retrieved successfully.",
      data: formatted,
    });
  } catch (err) {
    next(err);
  }
};

// GET BY ID
exports.getById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: "Product not found." });

    res.json({
      success: true,
      message: "Product retrieved successfully.",
      data: {
        productname: product.productname,
        price: product.price,             
        catergory: product.catergory,
        id: product._id,
      },
    });
  } catch (err) {
    next(err);
  }
};

// ADD
exports.add = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      message: "Product added successfully.",
      data: {
        productname: product.productname,
        price: product.price,
        catergory: product.catergory,
        id: product._id,
      },
    });
  } catch (err) {
    next(err);
  }
};

// UPDATE
exports.update = async (req, res, next) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Product not found." });

    res.json({
      success: true,
      message: "Product updated successfully.",
    });
  } catch (err) {
    next(err);
  }
};

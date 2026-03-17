const Seller = require("../Models/seller.model");

// GET ALL
exports.getAll = async (req, res, next) => {
  try {
    const sellers = await Seller.find();

    const formatted = sellers.map((u) => ({
      name: u.name,
      location: u.location,
      email: u.email,
      password: u.password,
      id: u._id,
    }));

    res.json({
      success: true,
      message: "Sellers list retrieved successfully.",
      data: formatted,
    });
  } catch (err) {
    next(err);
  }
};

// GET BY ID
exports.getById = async (req, res, next) => {
  try {
    const seller = await Seller.findById(req.params.id);
    if (!seller) return res.status(404).json({ success: false, message: "Seller not found." });

    res.json({
      success: true,
      message: "Seller retrieved successfully.",
      data: {
        name: seller.name,
        location: seller.location,
        email: seller.email,
        password: seller.password,
        id: seller._id,
      },
    });
  } catch (err) {
    next(err);
  }
};

// ADD
exports.add = async (req, res, next) => {
  try {
    const seller = await Seller.create(req.body);

    res.status(201).json({
      success: true,
      message: "Seller added successfully.",
      data: {
        name: seller.name,
        location: seller.location,
        email: seller.email,
        password: seller.password,
        id: seller._id,
      },
    });
  } catch (err) {
    next(err);
  }
};

// UPDATE
exports.update = async (req, res, next) => {
  try {
    const body = { ...req.body, updated: Date.now() };

    const updated = await Seller.findByIdAndUpdate(req.params.id, body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Seller not found." });

    res.json({
      success: true,
      message: "Seller updated successfully.",
    });
  } catch (err) {
    next(err);
  }
};


const Buyer = require("../Models/buyer.model");

// GET ALL
exports.getAll = async (req, res, next) => {
  try {
    const refs = await Buyer.find();

    const formatted = refs.map((r) => ({
      name: r.name,
      email: r.email,
      password: r.password,
      id: r._id,
    }));

    res.json({
      success: true,
      message: "Buyers list retrieved successfully.",
      data: formatted,
    });
  } catch (err) {
    next(err);
  }
};

// GET BY ID
exports.getById = async (req, res, next) => {
  try {
    const ref = await Buyer.findById(req.params.id);
    if (!ref) return res.status(404).json({ success: false, message: "Buyer not found." });

    res.json({
      success: true,
      message: "Buyer retrieved successfully.",
      data: {
        name: ref.name,
      email: ref.email,
      password: ref.password,
        id: ref._id,
      },
    });
  } catch (err) {
    next(err);
  }
};

// ADD
exports.add = async (req, res, next) => {
  try {
    const ref = await Buyer.create(req.body);

    res.status(201).json({
      success: true,
      message: "Buyer added successfully.",
      data: {
      name: ref.name,
      email: ref.email,
      password: ref.password,
        id: ref._id,
      },
    });
  } catch (err) {
    console.log("Error creating buyer:", err);
    next(err);
  }
};

// UPDATE
exports.update = async (req, res, next) => {
  try {
    const updated = await Buyer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Buyer not found." });

    res.json({
      success: true,
      message: "Buyer updated successfully.",
    });
  } catch (err) {
    next(err);
  }
};


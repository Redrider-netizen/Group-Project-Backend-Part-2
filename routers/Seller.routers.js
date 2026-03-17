const express = require("express");
const router = express.Router();
const controller = require("../Controllers/seller.controller");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.add);
router.put("/:id", controller.update);


module.exports = router;
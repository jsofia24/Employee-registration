const express = require("express");
const router = express.Router();
const cafesController = require("../controllers/cafes.controller");

router.post("/", cafesController.create)
router.get("/", cafesController.find)
router.get("/:id", cafesController.findOne)
router.put("/:id", cafesController.update)
router.delete("/:id", cafesController.remove)

module.exports = router
const express = require("express");
const router = express.Router();
const { getGoals } = require("../controllers/goalController.js");

router.get("/", getGoals);

router.post("/", (req, res) => {
  res.status(200).json({ message: "Post Goals" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update Goals With Id: ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete Goals With Id: ${req.params.id}` });
});

module.exports = router;

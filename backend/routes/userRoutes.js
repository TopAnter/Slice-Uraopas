const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET kaikki käyttäjät
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// POST uusi käyttäjä
router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  const saved = await newUser.save();
  res.json(saved);
});

module.exports = router;
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, firstName, lastName, age, password, field } = req.body;

    //tarkista onko username jo olemassa
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      firstName,
      lastName,
      age,
      password: hashedPassword,
      field,
      points: 0
    });

    res.json({ message: "User created", userId: user._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;


    //etsi käyttäjä
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    //tarkista salasana
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Wrong password" });
    }

    res.json({
      message: "Login successful",
      userId: user._id
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
const express = require("express");
const User = require("../models/User");

const router = express.Router();

// DELETE
router.delete("/:id", async (req, res) => {
 try {
    const userId = req.params.id;

    //poista käyttäjä
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      message: "User deleted",
      userId: deletedUser._id
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
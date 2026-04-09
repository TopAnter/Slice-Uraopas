const mongoose = require("mongoose");

//asettaa käyttäjälle scheman
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  industry: String,
});

module.exports = mongoose.model("User", userSchema);
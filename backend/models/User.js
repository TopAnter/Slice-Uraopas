const mongoose = require("mongoose");

//asettaa käyttäjälle scheman
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
  field: { type: String, required: true },
  points: Number
});

module.exports = mongoose.model("User", userSchema);
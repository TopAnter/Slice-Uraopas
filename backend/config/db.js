const mongoose = require("mongoose");

//yhdistyy tietokantaan, lähettää virheen jos ei onnistu
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB yhdistetty");
  } catch (error) {
    console.error("Virhe tietokantaan yhdistämisessä:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
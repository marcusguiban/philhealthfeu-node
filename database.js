const mongoose = require("mongoose");

module.exports = () => {
  try {
    mongoose.connect(process.env.DB_HOST + process.env.DB_NAME, {
    });

    console.log("Connected to the database successfully");
  } catch (error) {
    console.error("Could not connect to the database:", error);
  }
};

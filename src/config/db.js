const mongoose = require("mongoose");
const config = require("./config");
const db = config?.db?.url;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("mongoDB is successfully connected with mongoose");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;

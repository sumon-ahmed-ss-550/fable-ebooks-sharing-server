const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

// not found 404
app.use((req, res, next) => {
  res.status(404).send({ message: "not found 404" });
});

// error handle
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
module.exports = app;

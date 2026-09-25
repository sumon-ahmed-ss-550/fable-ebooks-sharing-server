const express = require("express");
const router = express.Router();

// access all controllers
const {
  writerAllBook,
  writerOneBook,
  writerInsertBook,
  writerUpdateBook,
  writerDeleteBook,
} = require("../controllers/writer.controllers");

// get all books
router.get("/api/writer/book", writerAllBook);

// get one book
router.get("/api/writer/book/:id", writerOneBook);

// insert one book
router.post("/api/writer/book", writerInsertBook);

// update one book
router.patch("/api/writer/book/:id", writerUpdateBook);

// delete one book
router.delete("/api/writer/book/:id", writerDeleteBook);

module.exports = router;

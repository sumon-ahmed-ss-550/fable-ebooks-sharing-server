const express = require("express");
const router = express.Router();

// access all controllers
const {
  readerAllBook,
  readerOneBook,
  readerInsertBook,
  readerUpdateBook,
  readerDeleteBook,
} = require("../controllers/reader.controllers");

// get all books
router.get("/api/reader/book", readerAllBook);

// get one book
router.get("/api/reader/book/:id", readerOneBook);

// insert one book
router.post("/api/reader/book", readerInsertBook);

// update one book
router.patch("/api/reader/book/:id", readerUpdateBook);

// delete one book
router.delete("/api/reader/book/:id", readerDeleteBook);

module.exports = router;

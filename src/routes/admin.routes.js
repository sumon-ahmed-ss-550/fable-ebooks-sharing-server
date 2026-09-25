const express = require("express");
const router = express.Router();

// access all controllers
const {
  adminAllBook,
  adminOneBook,
  adminInsertBook,
  adminUpdateBook,
  adminDeleteBook,
} = require("../controllers/admin.controllers");

// get all books
router.get("/api/admin/book", adminAllBook);

// get one book
router.get("/api/admin/book/:id", adminOneBook);

// insert one book
router.post("/api/admin/book", adminInsertBook);

// update one book
router.patch("/api/admin/book/:id", adminUpdateBook);

// delete one book
router.delete("/api/admin/book/:id", adminDeleteBook);

module.exports = router;

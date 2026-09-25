// get all books
const adminAllBook = async (req, res) => {
  try {
    res.status(200).send({ message: "get all books" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// get one book
const adminOneBook = async (req, res) => {
  try {
    res.status(200).send({ message: "get one book" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// insert one book
const adminInsertBook = async (req, res) => {
  try {
    res.status(201).send({ message: "insert one book" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// update one book
const adminUpdateBook = async (req, res) => {
  try {
    res.status(200).send({ message: "update one book" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// delete one book
const adminDeleteBook = async (req, res) => {
  try {
    res.status(200).send({ message: "delete one book" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  adminAllBook,
  adminOneBook,
  adminInsertBook,
  adminUpdateBook,
  adminDeleteBook,
};

// get all books
const readerAllBook = async (req, res) => {
  try {
    res.status(200).send({ message: "get all books" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// get one book
const readerOneBook = async (req, res) => {
  try {
    res.status(200).send({ message: "get one book" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// insert one book
const readerInsertBook = async (req, res) => {
  try {
    res.status(201).send({ message: "insert one book" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// update one book
const readerUpdateBook = async (req, res) => {
  try {
    res.status(200).send({ message: "update one book" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// delete one book
const readerDeleteBook = async (req, res) => {
  try {
    res.status(200).send({ message: "delete one book" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  readerAllBook,
  readerOneBook,
  readerInsertBook,
  readerUpdateBook,
  readerDeleteBook,
};

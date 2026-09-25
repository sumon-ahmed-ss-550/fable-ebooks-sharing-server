// get all books
const writerAllBook = async (req, res) => {
  try {
    res.status(200).send({ message: "get all books" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// get one book
const writerOneBook = async (req, res) => {
  try {
    res.status(200).send({ message: "get one book" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// insert one book
const writerInsertBook = async (req, res) => {
  try {
    res.status(201).send({ message: "insert one book" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// update one book
const writerUpdateBook = async (req, res) => {
  try {
    res.status(200).send({ message: "update one book" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// delete one book
const writerDeleteBook = async (req, res) => {
  try {
    res.status(200).send({ message: "delete one book" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  writerAllBook,
  writerOneBook,
  writerInsertBook,
  writerUpdateBook,
  writerDeleteBook,
};

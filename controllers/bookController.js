const Book = require('../models/Book');


const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.json({ books });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books', details: error.message });
  }
};


const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.json({ books });
  } catch (error) {
    res.status(500).json({ error: 'Failed to Get the book', details: error.message });
  }
};

const createBook = async (req, res) => {
  const { title, author, isbn, publishedYear } = req.body;

  try {
    const newBook = await Book.create({ title, author, isbn, publishedYear });
    res.status(201).json({ message: 'Book Added successfully !!', book: newBook });
  } catch (error) {
    res.status(400).json({ error: 'Failed to Add the  book', details: error.message });
  }
};


const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ error: ' Book don\'t added' });
    }
    res.json({ book });
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch the book', details: error.message });
  }
};


const updateBookById = async (req, res) => {
  const { id } = req.params;
  const { title, author, isbn, publishedYear } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, isbn, publishedYear },
      { new: true, runValidators: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book updated successfully', book: updatedBook });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update book', details: error.message });
  }
};


const deleteBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete book', details: error.message });
  }
};


module.exports = {
  getAllBooks,
  getBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
};

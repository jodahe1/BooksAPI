const express = require('express');
const {
  getAllBooks,
  getBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
} = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

// Admin-only route: Get all books
router.get('/all', authMiddleware, roleMiddleware('admin'), getAllBooks);

// General route: Get a specific book by ID
router.get('/:id', authMiddleware, getBookById);

// General route: Get books accessible to the user
router.get('/', authMiddleware, getBooks);

// General route: Add a new book (User or Admin)
router.post('/', authMiddleware, createBook);

// General route: Update a book by ID (User or Admin)
router.put('/:id', authMiddleware, updateBookById);

// Admin-only route: Delete a book by ID
router.delete('/:id', authMiddleware, roleMiddleware('admin'), deleteBookById);

module.exports = router;

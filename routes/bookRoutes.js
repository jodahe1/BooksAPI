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


router.get('/all', authMiddleware, roleMiddleware('admin'), getAllBooks);

router.get('/:id', authMiddleware, getBookById);

router.get('/', authMiddleware, getBooks);


router.post('/', authMiddleware, createBook);

router.put('/:id', authMiddleware, updateBookById);


router.delete('/:id', authMiddleware, roleMiddleware('admin'), deleteBookById);

module.exports = router;

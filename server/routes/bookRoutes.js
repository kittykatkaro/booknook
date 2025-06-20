const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');

const auth = require('../middleware/auth');

// POST: Save a new book
router.post('/', BookController.addBook);

// GET : Get all books
router.get('/', BookController.getAllBooks);

// DELETE: Delete a book by ID
router.delete('/:id', BookController.deleteBook);

module.exports = router;

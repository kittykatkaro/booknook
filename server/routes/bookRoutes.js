const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');

// POST: Save a new book
router.post('/', BookController.addBook);

// GET : Get all books
router.get('/', BookController.getAllBooks);

module.exports = router;

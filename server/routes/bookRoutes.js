const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');

// POST: Save a new book
router.post('/', BookController.addBook);

module.exports = router;

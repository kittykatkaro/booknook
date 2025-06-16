const Book = require('../models/Book');

exports.addBook = async (req, res) => {
	try {
		const { googleBookId, title, authors, thumbnail, averageRating } =
			req.body;

		// Check if the book already exists
		const existingBook = await Book.findOne({ googleBookId });
		if (existingBook) {
			return res.status(400).json({ message: 'Book already exists' });
		}

		const newBook = new Book({
			googleBookId,
			title,
			authors,
			thumbnail,
			averageRating,
		});

		const savedBook = await newBook.save();
		res.status(201).json(savedBook);
	} catch (error) {
		console.error('Error adding book:', error);
		res.status(500).json({ message: 'Server error' });
	}
};

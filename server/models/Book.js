const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
	{
		googleBookId: { type: String, required: true, unique: true },
		title: String,
		authors: [String],
		thumbnail: String,
		averageRating: Number,
		reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);

import { useState } from 'react';
import axios from 'axios';

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const [books, setBooks] = useState([]);

	const handleSearch = async () => {
		if (!searchTerm) return;

		try {
			const response = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
					searchTerm
				)}`
			);
			setBooks(response.data.items || []);
		} catch (error) {
			console.error('Error fetching books:', error);
		}
	};

	const handleSave = async (book) => {
		const bookData = {
			googleBookId: book.id,
			title: book.volumeInfo.title,
			authors: book.volumeInfo.authors || [],
			thumbnail: book.volumeInfo.imageLinks?.thumbnail || '',
			averageRating: book.volumeInfo.averageRating || 0,
		};

		try {
			await axios.post('http://localhost:5000/api/books', bookData);
			alert('Book saved successfully!');
		} catch (error) {
			console.error('Error saving book:', error);
			alert('Failed to save book. Please try again.');
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-md mx-auto">
				<h1 className="text-3xl font-bold mb-4">📚 BookNook Search</h1>
				<div className="flex mb-4">
					<input
						type="text"
						className="flex-1 border p-2 rounded-l"
						placeholder="Search for books..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<button
						onClick={handleSearch}
						className="bg-blue-500 text-white p-2 rounded-r"
					>
						Search
					</button>
				</div>

				{books.length > 0 && (
					<div>
						{books.map((book) => (
							<div
								key={book.id}
								className="border p-2 mb-2 rounded bg-white shadow"
							>
								<h2 className="font-bold text-lg">
									{book.volumeInfo.title}
								</h2>
								<p className="text-sm text-gray-600">
									{book.volumeInfo.authors?.join(', ')}
								</p>
								<button
									onClick={() => handleSave(book)}
									className="mt-2 bg-green-500 text-white p-1 rounded"
								>
									Save
								</button>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default App;

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
	res.send('API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require('mongoose');
mongoose
	.connect(process.env.MONGO_URI, {
		serverSelectionTimeoutMS: 10000,
	})
	.then(() => console.log('MongoDB connected 🚀'))
	.catch((err) => console.error('MongoDB connection error:', err));

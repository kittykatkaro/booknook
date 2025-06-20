const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const SECRET_KEY = process.env.JWT_SECRET || 'devsecretkey';

exports.registerUser = async (req, res) => {
	try {
		const { username, password } = req.body;

		// Check if user already exists
		const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.status(400).json({ message: 'Username already exists' });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = new User({
			username,
			password: hashedPassword,
		});
		await newUser.save();

		res.status(201).json({ message: 'User registered successfully' });
	} catch (error) {
		console.error('Error registering user:', error);
		res.status(500).json({ message: 'Server error' });
	}
};

exports.loginUser = async (req, res) => {
	try {
		const { username, password } = req.body;

		// Find the user by username
		const user = await User.findOne({ username });
		if (!user) {
			return res
				.status(400)
				.json({ message: 'Invalid username or password' });
		}
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res
				.status(400)
				.json({ message: 'Invalid username or password' });
		}

		const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
			expiresIn: '7d', // Token expires in 7 days
		});
		res.json({ token });
	} catch (error) {
		console.error('Error logging in user:', error);
		res.status(500).json({ message: 'Server error' });
	}
};

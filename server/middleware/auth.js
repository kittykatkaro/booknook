const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'devsecretkey';

module.exports = (req, res, next) => {
	const auth = req.headers.authorization;

	if (!auth || !auth.startsWith('Bearer ')) {
		return res.status(401).json({ message: 'Unauthorized' });
	}

	try {
		const token = auth.split(' ')[1];
		const decoded = jwt.verify(token, SECRET_KEY);
		req.userId = decoded.userId; // Attach user ID to request object
		next();
	} catch (error) {
		console.error('JWT verification error:', error);
		return res.status(401).json({ message: 'Unauthorized' });
	}
};

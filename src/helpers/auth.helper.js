const jwt = require('jsonwebtoken');

/**
 * Middleware to verify JWT token and set the user in the request object.
 */
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({
            auth: false,
            message: "Missing token"
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, jwtDecoded) => {
        if (error) {
            return res.status(401).json({
                auth: false,
                message: "Not authorized"
            });
        }

        req.user = jwtDecoded;
        next();
    });
}

/**
 * Middleware to verify if the user is an admin.
 * This middleware should be used after the verifyToken middleware.
*/
const verifyAdmin = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(403).send({ message: 'No token provided.' });

    jwt.verify(token, configs.jwt.secret, (err, decoded) => {
        if (err) return res.status(500).send({ message: 'Failed to authenticate token.' });

        if (decoded.role !== 'admin') {
            return res.status(403).send({ message: 'Access denied. Admins only.' });
        }

        next();
    });
};


/**
 * Helper function to generate JWT token.
 */
function generateToken(userId, role) {
    return jwt.sign(
        { id: userId, role: role },
        process.env.JWT_SECRET,
        { expiresIn: 86400 }
    );
}

module.exports = {
    verifyToken,
    verifyAdmin,
    generateToken
};

/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken');
const secrets = require('../secrets')

module.exports = (req, res, next) => {
  const token = req.headers.authorization
	if (token) {
    console.log(token)
		const secret = secrets.jwtSecret;
		jwt.verify(token, secret, function(err, decodedToken) {
			if (err) {
				res.status(401).json({ message: 'invalid token oof' });
			} else {
				req.token = decodedToken;
				next();
			}
		});
	} else {
		res.status(401).json({ message: 'Please login and try again!' });
	}
};
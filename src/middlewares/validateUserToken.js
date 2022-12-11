const jwtValidation = require('../auth/validateJwt');

const validateUserToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  const { type, message } = jwtValidation.verifyToken(token);

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  if (type) {
    return res.status(401).json({ message });
  }

  next();
};

module.exports = {
  validateUserToken,
};
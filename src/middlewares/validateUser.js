const jwtValidation = require('../auth/validateJwt');

const validateToken = (req, res, next) => {
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

const validateDataUser = (req, res, next) => {
  const { displayName, email, password } = req.body;
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (!regexEmail.test(email)) {
    return res.status(400)
    .json({ message: '"email" must be a valid email' });
  }

  if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }

  next();
};

module.exports = {
  validateToken,
  validateDataUser,
};
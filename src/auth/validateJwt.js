const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '50min',
};

const createToken = (dataWithoutPassword) => {
  const token = jwt.sign({ data: dataWithoutPassword }, secret, jwtConfig);
  return token;
};

const verifyToken = (authorization) => {
  try {
    const payload = jwt.verify(authorization, secret);
    return { type: null, data: payload };
  } catch (error) {
    return { type: error, message: 'Expired or invalid token' };
  }
};

module.exports = { createToken, verifyToken };
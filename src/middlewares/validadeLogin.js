const Joi = require('joi');

const loginValid = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  const { error } = loginValid.validate({ email, password });
  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = validateLogin;
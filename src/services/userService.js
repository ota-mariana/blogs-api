const { User } = require('../models');

const getUserByLogin = async (email, password) => {
  const userLogin = await User.findOne({ where: { email, password } });
  return userLogin;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return allUsers;
};

const getUserById = async (id) => {
  const userById = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return userById;
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByLogin,
};
const { User } = require('../models');
const { createToken } = require('../auth/validateJwt');

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

const addNewUser = async ({ displayName, email, password, image }) => {
  const userExist = await User.findOne({ where: { email } });

  if (userExist) {
    return { type: 'USER_EXIST', message: 'User already registered' };
  }
  
  const newUser = await User.create({ displayName, email, password, image });
  const { password: _password, ...dataWithoutPassword } = newUser.dataValues;
  const token = createToken(dataWithoutPassword);

  if (!userExist) {
    return { token };
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByLogin,
  addNewUser,
};
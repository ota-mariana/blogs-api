const { createToken } = require('../auth/validateJwt');
const userService = require('../services/userService');

const getUserByLogin = async (req, res) => {
  const { email, password } = req.body;
 
  const login = await userService.getUserByLogin(email, password);

  if (!login) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const { password: _password, ...dataWithoutPassword } = login.dataValues;
  const token = createToken(dataWithoutPassword);
  
  // return { userLogin: dataWithoutPassword, token };

  return res.status(200).json({ token });
};

const getAllUsers = async (_req, res) => {
  const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const userById = await userService.getUserById(id);

  if (!userById) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(userById);
};

const addNewUser = async (req, res) => {
  const user = req.body;
  const { type, message, token } = await userService.addNewUser(user);
  console.log(`log da newUser ${message}`);

  if (type === 'USER_EXIST') {
    return res.status(409).json({ message });
  }

  return res.status(201).json({ token });
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByLogin,
  addNewUser,
};
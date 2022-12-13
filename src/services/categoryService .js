const { Category } = require('../models');
// const { createToken } = require('../auth/validateJwt');

const addNewCategory = async (category) => {
  const newCategory = await Category.create(category);
  // const { password: _password, ...dataWithoutPassword } = newUser.dataValues;
  // const token = createToken(dataWithoutPassword);

    return newCategory;
};

module.exports = {
  addNewCategory,
};
const categoryService = require('../services/categoryService ');

const addNewCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoryService.addNewCategory({ name });
  return res.status(201).json(newCategory);
};

module.exports = {
  addNewCategory,
};
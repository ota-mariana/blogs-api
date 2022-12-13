const { Category } = require('../models');

const addNewCategory = async (category) => {
  const newCategory = await Category.create(category);
    return newCategory;
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
    return allCategories;
};

module.exports = {
  addNewCategory,
  getAllCategories,
};
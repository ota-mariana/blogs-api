'use strict';
module.exports = (sequelize, DataTypes) => {
  const postsCategories = sequelize.define('PostCategory', {},
  {
    sequelize,
    // modelName: 'posts_categories',
    underscored: true,
    timestamps: false,
  });

  postsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postsCategories,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: postsCategories,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
  };

  return postsCategories;
};
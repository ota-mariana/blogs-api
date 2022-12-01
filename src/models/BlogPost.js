'use strict';
module.exports = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING(255),
    content: DataTypes.STRING(255),
    userId: DataTypes.INTEGER,
    published: DataTypes.DATETIME,
    updated: DataTypes.DATETIME
  }, {
    sequelize,
    // modelName: 'blog_posts',
    underscored: true,
    timestamps: false,
  });

  blogPosts.associate = (models) => {
    blogPosts.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id',
    })
  };

  return blogPosts;
};
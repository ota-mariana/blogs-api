'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING(255)
  }, {
    sequelize,
    // modelName: 'categories',
    underscored: true,
    timestamps: false,
  });
  return categories;
};
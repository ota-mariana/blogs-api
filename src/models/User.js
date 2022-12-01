'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    displayName: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    image: DataTypes.STRING(255)
  }, {
    sequelize,
    // modelName: 'users',
    underscored: true,
    timestamps: false,
  });

  users.associate = (models) => {
    users.hasMany(models.BlogPost, {
      as: 'user',
      foreignKey: 'user_id',
    })
  };

  return users;
};
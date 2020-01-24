'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

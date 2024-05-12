'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({ Review }) {
      User.hasMany(Review, { as: 'author', foreignKey: 'author_id' })
    }

  };
  User.init({
    userId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    username: DataTypes.STRING,
    favoriteBook: DataTypes.STRING,
    favoriteGenre: DataTypes.STRING,
    aboutMe: DataTypes.STRING,
    passwordDigest: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
  });
  return User;
};
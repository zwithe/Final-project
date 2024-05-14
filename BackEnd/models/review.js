'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
  
    static associate({ User }) {
      Review.belongsTo(User, { as: 'author', foreignKey: 'author_id' })
    }

  };
  Review.init({
    reviewId: {
      type:  DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    olid: DataTypes.STRING,
    authorId: DataTypes.SMALLINT,
    content: DataTypes.STRING,
    stars: DataTypes.FLOAT,
  }, {
    sequelize,
    underscored: true,
    modelName: 'Review',
  });
  return Review;

};
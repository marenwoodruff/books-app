'use strict';
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    publication_year: DataTypes.STRING,
    read: DataTypes.BOOLEAN
  }, {});
  book.associate = function(models) {
    // associations can be defined here
  };
  return book;
};
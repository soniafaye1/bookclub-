const Sequelize = require("sequelize");
const db = require("../db");

const Book = db.define("book", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  published_date: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  contributer: {
    type: Sequelize.STRING,
  },
  author: {
    type: Sequelize.STRING,
  },
  publisher: {
    type: Sequelize.STRING,
  },
});

module.exports = Book;

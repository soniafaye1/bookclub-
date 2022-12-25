//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Book = require("./models/Book");
const Review = require("./models/Review");

//associations
User.belongsToMany(Book, { through: "userBook" });
Book.belongsToMany(User, { through: "userBook" });

Book.belongsToMany(Review, { through: "bookReview" });
Review.belongsToMany(Book, { through: "bookReview" });

User.hasMany(Review);
Review.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Book,
    Review,
    userBook,
    bookReview,
  },
};

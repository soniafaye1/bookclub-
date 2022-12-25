const Sequelize = require("sequelize");
const db = require("../db");

const UserBook = db.define("userBook", {
  status: {
    type: Sequelize.ENUM(["TBR", "Reading", "Read"]),
  },
  favorite: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = UserBook;

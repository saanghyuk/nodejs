// 이제 내가 app.js에서 쓸 수 있도록, db를 연결하는

const Sequelize = require("sequelize");

const config = require("../config/config.json");

const env = process.env.NODE_ENV || "development";
const {
  username,
  password,
  database,
  host,
  dialect
} = require("../config/config")[env];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect
});

const Member = require("./member")(sequelize, Sequelize.DataTypes);

const db = {};
db.Member = Member;
module.exports = db;

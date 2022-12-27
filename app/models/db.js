const mysql = require("mysql2/promise");
const dbconfig = require("../configs/db.configs");

const connection = mysql.createPool({
  host: dbconfig.DB_HOST,
  user: dbconfig.DB_USER,
  password: dbconfig.DB_PASSWORD,
  database: dbconfig.DB_DATABASE,
});

module.exports = connection;

require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

function runQuery(query, params) {
  return new Promise((resolve, reject) => {
    connection.query(query, params, function (error, results, fields) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = runQuery;
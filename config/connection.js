const mysql = require("mysql");

const db = process.env.JAWSDB_URL || {
  port: 3306,
  host: "localhost",
  user: "root",
  password: "thakali1234",
  database: "burgers_db"
};

let connection = mysql.createConnection(db);
// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("[DB ERROR] Error connecting: " + err.stack);
    return;
  }
  console.log(
    `[DB CONNECTION] Connected to http://localhost:3306 on thread ${
      connection.threadId
    }`
  );
});

module.exports = connection;

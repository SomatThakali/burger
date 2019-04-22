const mysql = require("mysql");

const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db",
  use_env_variable: "JAWS_DB_URL"
});

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

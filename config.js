var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fortnite123",
  database: "nodelogin"
});

connection.connect(function(err) {
  if (!err) {
    console.log("Database is connected");
  } else {
    console.log("Connection failed");
  }
});

module.exports = connection;

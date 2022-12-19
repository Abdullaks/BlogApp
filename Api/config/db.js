const mysql = require("mysql");
//mysql db connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "112233",
  database: "blogapp"
});
db.connect(function(err) {
  if (err) return console.error("error: " + err.message);
  console.log("Connected to the MySQL database.");
});

module.exports = db;

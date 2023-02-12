const mysql = require("mysql2");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Piyush@123",
    database: "tododb",
  });
}

connection.on("connect", () => {
  console.log(`--> Connected to database '${connection.config.database}'.`);
});

connection.on("error", (err) => {
  console.log("--> Connection error: ", err);
});

connection.connect();

module.exports = connection;

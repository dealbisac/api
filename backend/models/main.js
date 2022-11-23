import mysql from "mysql";

// Setup the database connection
const db = mysql.createConnection({
    host: "localhost",      // servername
    user: "root",           // database_user
    password: "",           // database_password
    database: "myportfolio" // your_database
});

export default db;
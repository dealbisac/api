import express from "express";
import cors from "cors";

import mainRoutes from "./routes/main.js";
import userRoutes from "./routes/userRoutes.js"
import educationRoutes from "./routes/educationRoutes.js"

//Intialize the app with express
const app = express();
app.use(cors());
app.use(express.json());

// Setup the database connection
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     // database: "vehicle_gps"
//     database: "myportfolio"
// });

//middleware to connect to the database
// app.use((req, res, next) => {
//     req.db = db;
//     next();
// });

// Test whether the query can be executed or not.
// app.get("/testcontact", (req, res) => {
//     //query to get the selected data from the database
//     const sql = "SELECT * FROM contact";

//     //execute the query
//     db.query(sql, (err, result) => {
//         if (err) { throw err; }
//         res.send(result);
//     });
// });

// Test the get request to the server
// app.get("/showusers", (req, res) => {
//     const sql = "SELECT * FROM users";
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send(result);
//     });
// });

//Test the get request to the server to get education details
// app.get("/showeducation", (req, res) => {
//     const sql = "SELECT * FROM education";
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send(result);
//     });
// });



// Setup the routes
app.use("/api", mainRoutes);
app.use("api/user", userRoutes);
app.use("/api/education", educationRoutes);


// Define the port where the server should listen
app.listen(8800, () => {
    console.log("connected to the server")
})
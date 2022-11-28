import db from "../models/main.js";
// import { json } from "express";

export const login = (req, res) => {
    // OLD WAY OF DOING IT
    // When the model is implemented, the data provided by the user
    // is compared with the data in database and acts accordingly.
    // const matched = true;
    // get json data from the request body
    // const { username, password } = req.body;
    // if(username==="dipendra" && password==="dipendra123"){
    //     res.send("Successfully Logged in")
    // } else {
    //     res.send ("Username or Password does not match.")
    // }

    // NEW WAY WHEN DATABASE IS IMPLEMENTED
    // get json data from the request body
    const { username, password } = req.body;

    // prepare the query
    const sql = "SELECT * FROM `user` WHERE username = ? AND password = ?";
    db.query(sql, [username, password], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send("Successfully Logged in");
        } else {
            res.send("Username or Password does not match.");
        }
    });
}

export const register = (req, res) => {
    // get json data from the request body
    const { name, address, username, password } = req.body;

    // prepare the query
    const sql = "INSERT INTO `user`(`name`, `address`, `username`, `password`) VALUES (?,?,?,?)";
    db.query
    (sql, [name, address, username, password], (err, result) => {
        if (err) throw err;
        res.send("Data inserted sucessfully");
    });
    res.send("User successfully created" + "\n" + "Name: " + name + "\n" + "Address: " + address + "\n" + "Username: " + username + "\n" + "Password: " + password);
}
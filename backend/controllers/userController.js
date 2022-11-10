// user model is imported.

import { json } from "express";

export const login = (req, res) => {
    // When the model is implemented, the data provided by the user
    // is compared with the data in database and acts accordingly.
    // const matched = true;
    // get json data from the request body
    const { username, password } = req.body;
    if(username==="dipendra" && password==="dipendra123"){
        res.send("Successfully Logged in")
    } else {
        res.send ("Username or Password does not match.")
    }
}

export const register = (req, res) => {
    // the data provided by the user is stored in the database.

    // get json data from the request body
    const { name, address, username, password } = req.body;
    res.send("User successfully created" + "\n" + "Name: " + name + "\n" + "Address: " + address + "\n" + "Username: " + username + "\n" + "Password: " + password);
}
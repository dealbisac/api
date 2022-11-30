import db from "../models/main.js";

//controller for user login
export const login = (req, res) => {
    // get the data from the request
    const username = req.body.username;
    const password = req.body.password;

    console.log(username);
    console.log(password);

    // prepare the query
    const sql = "SELECT * FROM `user` WHERE username = ? AND password = ?";
    db.query(sql, [username, password], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send("Login sucessfully");
        } else {
            res.send("Invalid username or password");
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
import express from "express";

//Intialize the app with express
const app = express();


//define the home address of the app
app.get("/", (req, res) => {
    res.send("Hello World");
});

//define new URI for the app
app.get("/about", (req, res) => {
    res.send("About Page");
});

// Define the port where the server should listen
app.listen(8800, () => {
    console.log("connected to the server")
})
import express from "express";

import mainRoutes from "./routes/main.js";
import userRoutes from "./routes/userRoutes.js"

//Intialize the app with express
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api", mainRoutes);
app.use("/api/user", userRoutes);


// Define the port where the server should listen
app.listen(8800, () => {
    console.log("connected to the server")
})
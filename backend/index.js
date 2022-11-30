import express from "express";
import cors from "cors";

import mainRoutes from "./routes/main.js";
import userRoutes from "./routes/userRoutes.js"
import educationRoutes from "./routes/educationRoutes.js"

//Intialize the app with express
const app = express();
app.use(cors());
app.use(express.json());

// Setup the routes
app.use("/api", mainRoutes);
app.use("/api/user", userRoutes);
app.use("/api/education", educationRoutes);


// Define the port where the server should listen
app.listen(8800, () => {
    console.log("connected to the server")
})
import express from "express";
import {home, about, blog} from "../controllers/mainController.js";

const router = express.Router();

//define the home address of the app
router.get("/", home);

// define the home address
router.get("/", (req, res) => {
    res.send("Hello World");
});

//define new URI for the app
router.get("/about", about);

//define new URI for the app
router.get("/blog", blog);

export default router;
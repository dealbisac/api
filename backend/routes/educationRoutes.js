import express from "express";
import {showEducations, showEducation, updateEducation} from "../controllers/educationController.js";

const router = express.Router();

// show all education details.
router.get("/", showEducations);

// show individiual education details
router.get("/:id", showEducation);

// edit the education details
// router.get("/:id", editEducation);

// update the education details
router.get("/", updateEducation);

// delete the education details
// router.get("/", deleteEducation);

export default router;
import express from "express";
import {
    showEducation, 
    showEducations, 
    insertEducation, 
    updateEducation,
    deleteEducation
} from "../controllers/educationController.js";

const router = express.Router();

// show all education details.
router.get("/", showEducations);

// show individiual education details
router.get("/:id", showEducation);

// insert education details
router.post("/", insertEducation);

// update the education details
router.put("/:id", updateEducation);

// delete the education details
router.delete("/:id", deleteEducation);

export default router;
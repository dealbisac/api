import express from "express"
import { login, register} from '../controllers/userController.js'

//Setup the app.
const router = express.Router();

// Login API for user
router.post("/login", login);

//Register API for user
router.post("/register", register);

// return the app instant.
export default router;
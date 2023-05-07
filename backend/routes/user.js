import express from "express";
import User from "../models/user.js"
import getallusers, {   getmyprofile, login, logout, register} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all",getallusers)  
    
router.post("/new",register)

router.post("/login",login)

router.get("/login",logout)
    
router.get("/me",isAuthenticated,getmyprofile)

// router.put("/userid/:idby",updateuser)

// router.delete("/userid/:idby",deleteuser)

export default router;
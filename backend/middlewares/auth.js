import User from "../models/user.js"
import jwt  from "jsonwebtoken";

export const isAuthenticated= async(req,res,next)=>{
    const {token}=req.cookies;

if(!token) return res.status(404).json({
    success: false,
    message: "login first",
});

const decodeddata = jwt.verify(token,process.env.JWT_SECRET);

req.user=await User.findById(decodeddata._id);  //as we store data in req.user we can access the data in the next middlewares too

next()
}
import { registerUser, loginUser } from "../services/authServices.js"
import { cookieOptions } from "../config/config.js";

const register_user = async(req,res)=> {
    const {name, email, password} = req.body;
    const {token, user} = await registerUser(name,email,password);
    req.user = user;
    res.cookie("accessToken", token, cookieOptions);
    res.status(200).json({message : "Registration Successful"});
}

const login_user = async(req,res)=> {
    const {email, password} = req.body;
    try{
        const {token, user} = await loginUser(email,password);
        req.user = user;
        res.cookie("accessToken", token, cookieOptions);
        res.status(200).json({message : "Login Success"}); 
    }
    catch(error){
        console.error("Login error:", error.message);
        res.status(401).json({message : error.message || "Invalid Credentials"});
    }
};

const logout_user = async(req,res)=> {
    res.clearCookie("accessToken", cookieOptions);
    res.status(200).json({message: "Logout Successful"});
};

export default {
    register_user,
    login_user,
    logout_user
}
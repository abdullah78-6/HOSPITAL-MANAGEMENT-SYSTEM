import express from "express"
import { Getprofile, Login, Logout, Signup } from "../controllers/admin-user.js";
const Adminuserrouter=express.Router();
Adminuserrouter.post("/signup",Signup);
Adminuserrouter.post("/login",Login);
Adminuserrouter.get("/pr",Getprofile);
Adminuserrouter.post("/logout",Logout);
export default Adminuserrouter;
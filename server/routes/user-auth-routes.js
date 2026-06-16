import express from "express";
import { Getprofile, Login, Logout, Signup } from "../controllers/user-controller.js";
const Userauthrouter=express.Router();
Userauthrouter.post("/signup",Signup);
Userauthrouter.post("/login",Login);
Userauthrouter.post("/logout",Logout);
Userauthrouter.get("/get",Getprofile);
export default Userauthrouter;
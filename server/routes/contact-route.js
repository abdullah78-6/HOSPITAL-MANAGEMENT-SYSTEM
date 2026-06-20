import express from "express"
import { Addcontact } from "../controllers/contact-control.js";
const contactrouter=express.Router();
contactrouter.post("/contact",Addcontact);
export default contactrouter;
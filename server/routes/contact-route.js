import express from "express"
import { Addcontact, Deletecontact, Getcontact } from "../controllers/contact-control.js";
const contactrouter=express.Router();
contactrouter.post("/contact",Addcontact);
contactrouter.get("/getcontact",Getcontact);
contactrouter.delete("/deletecontact",Deletecontact);
export default contactrouter;
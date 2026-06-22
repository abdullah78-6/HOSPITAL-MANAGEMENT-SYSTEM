import express from "express"
import { Bookappointment, Deleteappointment, Getappointment } from "../controllers/appointment-controller.js";
const Appintmentrouter=express.Router();
Appintmentrouter.post("/book",Bookappointment);
Appintmentrouter.get("/display",Getappointment);
Appintmentrouter.delete("/delete2",Deleteappointment);
export default Appintmentrouter;
import express from "express"
import { Bookappointment, Getappointment } from "../controllers/appointment-controller.js";
const Appintmentrouter=express.Router();
Appintmentrouter.post("/book",Bookappointment);
Appintmentrouter.get("/get",Getappointment);
export default Appintmentrouter;
import express from "express"
import { Add, Dashboard, Deletepatient, Get } from "../controllers/add-patient.js";
const addrouter=express.Router();
addrouter.post("/add",Add);
addrouter.get("/get",Get);
addrouter.delete("/del",Deletepatient);
addrouter.get("/dashboard",Dashboard);
export default addrouter;

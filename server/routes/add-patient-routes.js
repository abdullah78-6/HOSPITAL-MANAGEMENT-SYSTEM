import express from "express"
import { Add, Deletepatient, Get } from "../controllers/add-patient.js";
const addrouter=express.Router();
addrouter.post("/add",Add);
addrouter.get("/get",Get);
addrouter.delete("/del",Deletepatient);
export default addrouter;

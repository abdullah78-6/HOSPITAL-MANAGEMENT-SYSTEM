import express from "express"
import { Add, Get } from "../controllers/add-patient.js";
const addrouter=express.Router();
addrouter.post("/add",Add);
addrouter.get("/get",Get);
export default addrouter;

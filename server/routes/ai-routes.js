import express from "express"
import { Airesult } from "../controllers/Ai-control.js";
const Airouter=express.Router();
Airouter.post("/gemni",Airesult);
export default Airouter;
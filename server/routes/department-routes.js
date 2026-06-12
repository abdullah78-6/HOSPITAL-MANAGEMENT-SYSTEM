import express from "express"
import { Adddepartment } from "../controllers/add-department.js";
import multer from "multer";
const Departmentrouter=express.Router();
const fashionrouter=express.Router();
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload=multer({storage:storage});

Departmentrouter.post("/dpt",upload.single("image"),Adddepartment);
export default Departmentrouter;
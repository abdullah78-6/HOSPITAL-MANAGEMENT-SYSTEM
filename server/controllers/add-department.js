import departmentmodel from "../models/department-model.js";
import cloudinary from "../utils/cloudinary.js"
import fs from "fs";
const Adddepartment=async(req,res)=>{
    try {
         if(!req.file){
       return  res.json({status:false,result:"ADD IMAGE "})
    }
    
   
    const {name,doctor,details}=req.body;
    if(!name||!doctor||!details){
        return res.json({status:false,result:"ALL FIELDS ARE REQUIRED"});
    }
    // cloudinary
    const result=await cloudinary.uploader.upload(req.file.path,{
        folder:"uploads",
        resource_type:"image",
        timeout:120000
    })
    console.log(result.secure_url);
    fs.unlinkSync(req.file.path);
    const departmentstore=new departmentmodel({
        name,
        doctor,
        details,
        localfile:req.file.filename,
        image:result.secure_url,
        public_id:result.public_id
    })
    
        await departmentstore.save();
      return   res.json({status:true,result:"PRODUCT ADDED SUCCESSFULLY"})
        
    } catch (error) {
        console.log("add item error ",error);
      return  res.json({status:false,result:"ADD ITEM ERROR "});
        
    }

}
const Deletedepartment=async(req,res)=>{

}
const UpdateDepartment=async(req,res)=>{

}
const Getdepartment=async(req,res)=>{

}
export{Deletedepartment,Adddepartment,UpdateDepartment,Getdepartment}
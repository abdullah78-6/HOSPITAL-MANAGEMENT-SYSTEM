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
      return   res.json({status:true,result:"Department Added Successfully"})
        
    } catch (error) {
        console.log("add item error ",error);
      return  res.json({status:false,result:"ADD ITEM ERROR "});
        
    }

}
const Deletedepartment=async(req,res)=>{
  try {
        const department=await departmentmodel.findById(req.body.id);
      if(!department){
    return  res.json({success:false,message:"PRODUCT NOT FOUND"});

        }
        
         console.log("this is public id ",department.public_id);
    if(department.public_id){
           
            await cloudinary.uploader.destroy(department.public_id);

        }
        
        await departmentmodel.findByIdAndDelete(req.body.id);
         res.json({success:true,message:"DATA DELETED SUCESSFULLY "});
        
    } catch (error) {
        console.log("delete error",error);
         res.json({success:false,message:"DATA DELETE ERROR"});
        
    }

}
const UpdateDepartment=async(req,res)=>{
  try {
    const {name,id}=req.body;
    if(!id||!name){
        return res.json({status:false,message:"Id And Name Are Required"});
    }
    const department=await departmentmodel.findById(id);
    if(!department){
        return res.json({status:false,message:"Department not found"});
    }
    department.doctor=name
    await department.save();
        return res.json({status:true,message:"Department Updated Successfully "})    
        
        
    } catch (error) {
        console.log("reset password error",error);
        res.json({status:false,message:"RESET PASSWORD ERROR"});
        
    }


}
const Getdepartment=async(req,res)=>{
    try {
            const department=await departmentmodel.find();
            
            return res.json({status:true,finallist:department});
    
        } catch (error) {
            console.log("get patient error ",error);
            res.json({status:false,message:error.message});
            
        }

}
export{Deletedepartment,Adddepartment,UpdateDepartment,Getdepartment}
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import usermodel from "../models/user-auth-model.js"
const createtoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"});
}
const Signup=async(req,res)=>{
     const {name,email,password}=req.body;
        try {
            const exist=await usermodel.findOne({email});
            if(exist){
                return res.json({status:false,message:"USER IS ALREADY EXIST "});
            }
            if(!validator.isEmail(email)){
                return res.json({status:false,message:"PLEASE ENTER A VALID EMAIL "});
            }
            if(password.length<8){
                return res.json({status:false,message:"PLEASE ENTER A STRONG PASSWORD "});
            }
            const salt=await bcrypt.genSalt(10);
            const hashedpassword=await bcrypt.hash(password,salt);
            const newuser=new usermodel({
                name:name,
                email:email,
                password:hashedpassword
            })
            const user=await newuser.save();
            const token=createtoken(user._id);
            return res.json({status:true,message:"USER REGISTER SUCCESSFULLY"});
    
    
            
        } catch (error) {
            console.log(error);
            return res.json({status:false,message:"SIGN-UP ERROR"});
            
        }

}
const Login=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await usermodel.findOne({email});
        if(!user){
            return res.json({status:false,message:"USER DOES NOT EXIST "});
        }
        const ismatch=await bcrypt.compare(password,user.password);
        if(!ismatch){
            return res.json({status:false,message:"PASSWORD IS INCORRECT"});
        }
        const token=createtoken(user._id);
        res.cookie("token2",token,{
            httpOnly:true,
            secure:true,
            sameSite:"none",
            maxAge:24*60*60*1000
        })

        return res.json({status:true,email:email,message:"LOGIN SUCCESSFULLY"});
        
    } catch (error) {
        console.log("ERROR");
        return res.json({status:false,message:"LOGIN ERROR"});
        
    }


}
const Getprofile=async(req,res)=>{
    try {
            const token=req.cookies.token2;
            if(!token){
                return res.json({status:false});
            }
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            const user=await usermodel.findById(decoded.id).select("email");
            if(!user){
                return res.json({status:false});
            }
            res.json({status:true,email:user.email})
        } catch (error) {
            res.json({status:false});
        }

}
const Logout=async(req,res)=>{
     try {
        res.clearCookie("token2",{
        httpOnly:true,
        secure: true,
        sameSite:"none"
    });
    return res.json({status:true,message:"Logged Out "})
        
    } catch (error) {
        console.log("logout ",error);
        res.json({status:false,message:"Logout error"});
        
    }
   

}
export {Signup,Login,Getprofile,Logout}

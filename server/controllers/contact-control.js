import contactmodel from "../models/contact-model.js";
import transporter from "../utils/transporter.js";
import nodemailer from "nodemailer"
const Addcontact=async(req,res)=>{
    const {name,message,email,phone_no}=req.body;
    try {
        if(!name||!message||!email||!phone_no){
            return res.json({status:false,message:"All Fields Are Required"});
        }
        const info=await transporter.sendMail({
                    from:process.env.USER,
                    to:"abdullahqidwai02@gmail.com",
                    subject:"New Contact Found",
                    html:`
                    <h2>new contact found </h2>
                    <p>Name: ${name}</p>
                     <p>Email: ${email}</p>
                    <p>Phone: ${phone_no}</p>
                    <p>Message: ${message}</p>
    
                    `
                });
                console.log("mail sent ",info);
                 const newcontact=new contactmodel({
                    name:name,
                    email:email,
                    phone_no:phone_no,
                    message:message
                });
                await newcontact.save();
                
                
                res.json({status:true,message:"Thanks For Response"});

        
    } catch (error) {
        console.log("add contact error",error);
        return res.json({status:false,message:"Add Contact Error"});
        
    }
     
}

const  Deletecontact2=async(req,res)=>{

}
export {Addcontact,Deletecontact2}
import mongoose from "mongoose";
const contactschema=new mongoose.Schema({
    name:{type:String,required:true},
    phone_no:{type:Number,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
    
    
    

})
const contactmodel=mongoose.model.patient||mongoose.model("contact-model",contactschema);
export default contactmodel;
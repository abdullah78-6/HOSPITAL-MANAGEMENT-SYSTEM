import mongoose from "mongoose";
const appointmentschema=new mongoose.Schema({
    First_Name:{type:String,required:true},
    Last_Name:{type:String,required:true},
    Contact:{type:Number,required:true},
    Age:{type:Number,required:true},
    Appointment_Date:{type:Date,required:true},
    

})
const appointmentmodel=mongoose.model.patient||mongoose.model("appointment-model",appointmentschema);
export default appointmentmodel;
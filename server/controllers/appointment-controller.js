import appointmentmodel from "../models/appointment-model.js"
const Bookappointment=async(req,res)=>{
    const {first_name,last_name,contact,age,date}=req.body;
    try {
        if(!first_name||!last_name||!contact||!age||!date){
            return res.json({status:false,message:"All Fields Are Required"});
        }

        const newappointment=new appointmentmodel({
            First_Name:first_name,
            Last_Name:last_name,
            Contact:contact,
            Age:age,
            Appointment_Date:date
        })
        await newappointment.save();
        return res.json({status:true,message:"Booking Confirmed"});
        
        
    } catch (error) {
        console.log(error.message);
        return res.json({status:false,message:"book appointment error"});
        
    }

}
const Getappointment=async(req,res)=>{
    try {
            const appointment=await appointmentmodel.find();
            
            return res.json({status:true,appointment:appointment});
    
        } catch (error) {
            console.log("get appointment error ",error);
            res.json({status:false,message:error.message});
            
        }

}
const Deleteappointment=async(req,res)=>{
    try {
            const {id}=req.body;
            const appointment=await appointmentmodel.findByIdAndDelete({_id:id});
            if(appointment){
                return res.json({status:true,message:"DELETE SUCCESSFULLY"});
            }
            else{
                return res.json({status:false,message:"DATA NOT DELETE"});
            }
            
    
            
        } catch (error) {
            console.log(error);
            res.json({status:false,message:"delete appointment error"});
            
            
        }

}
export {Bookappointment,Getappointment,Deleteappointment}
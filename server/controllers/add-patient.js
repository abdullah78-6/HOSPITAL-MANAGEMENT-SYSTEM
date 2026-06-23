import patientmodel from "../models/add-patient-model.js";
import appointmentmodel from "../models/appointment-model.js";
import departmentmodel from "../models/department-model.js";
import usermodel from "../models/user-auth-model.js";
const Add=async(req,res)=>{
    const {patientdetails}=req.body;
    try {
        const name=patientdetails.name;
        const phone_no=patientdetails.phone_no;
        const disease=patientdetails.disease;
        const age=patientdetails.age;
        const admitdate=patientdetails.admitdate;
        const bill=patientdetails.bill;
        
        const newpatient=new patientmodel({
            name:name,
            phone_no:phone_no,
            disease:disease,
            age:age,
            admit_date:admitdate,
            bill:bill
        })
        const patient=await newpatient.save();
        return res.json({status:true,message:"PATIENT REGISTERED SUCCESSFULLY"});


    } catch (error) {
        console.log(error);
        res.json({status:false,message:"add patient error in server"})
        
    }

}
const Deletepatient=async(req,res)=>{
    try {
        const {id}=req.body;
        const patient=await patientmodel.findByIdAndDelete({_id:id});
        if(patient){
            return res.json({status:true,message:"DELETE SUCCESSFULLY"});
        }
        else{
            return res.json({status:false,message:"DATA NOT DELETE"});
        }
        

        
    } catch (error) {
        console.log(error);
        res.json({status:false,message:"delete patient error"});
        
        
    }

}
const Get=async(req,res)=>{
    try {
        const patient=await patientmodel.find();
        
        return res.json({status:true,patientlist:patient});

    } catch (error) {
        console.log("get patient error ",error);
        res.json({status:false,message:error.message});
        
    }

}
const Dashboard=async(req,res)=>{
        try {
            const totalpatient=await patientmodel.find({}).countDocuments();
            const totalappointment=await appointmentmodel.find({}).countDocuments();
            const regesterpeople=await usermodel.find({}).countDocuments();
            const totaldoctors=await departmentmodel.find({}).countDocuments();
            res.json({status:true,totalpatient:totalpatient,totalappointment:totalappointment,regesterpeople:regesterpeople,totaldoctors:totaldoctors});
            
        } catch (error) {
            console.log("dashboard error ",error);
            res.json({status:false,message:"dashboard error"});
            
        }
        

    }
export{Add,Deletepatient,Get,Dashboard}
import patientmodel from "../models/add-patient-model.js";
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
        
    } catch (error) {
        
        
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
export{Add,Deletepatient,Get}
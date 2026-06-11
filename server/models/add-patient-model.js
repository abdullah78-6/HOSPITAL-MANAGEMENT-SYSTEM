import mongoose from "mongoose"
const patientschema=new mongoose.Schema({
    name:{type:String,required:true},
    phone_no:{type:Number,required:true},
    disease:{type:String,required:true},
    age:{type:Number,required:true},
    admit_date:{type:Date,required:true},
    bill:{type:Number,required:true}

})
const patientmodel=mongoose.model.patient||mongoose.model("patient-model",patientschema);
export default patientmodel;
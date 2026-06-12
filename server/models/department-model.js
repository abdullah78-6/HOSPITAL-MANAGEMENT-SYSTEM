import mongoose from "mongoose"
const departmentschema=new mongoose.Schema({
    name:{type:String,required:true},
    doctor:{type:String,required:true},
    details:{type:String,required:true},
     image:{type:String,required:true},
    public_id:{type:String,required:true},
    localfile:{type:String,required:true},
   

})
const departmentmodel=mongoose.model.patient||mongoose.model("department-model",departmentschema);
export default departmentmodel;
import mongoose from "mongoose"
export const Getdbconnection=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DATA BASE IS SUCCESSFULLY CONNECTED ");
    } catch (error) {
        console.log("db connction error",error.message);
        
    }

}
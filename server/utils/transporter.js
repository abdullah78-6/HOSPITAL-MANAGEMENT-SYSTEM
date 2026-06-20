import nodemailer from "nodemailer"
const transporter=nodemailer.createTransport({
    host:"smtp-relay.brevo.com",
    
    port:587,//use port 2525 on production
    secure:false,
    
    auth:{
        user:process.env.BREVO_USER,
        pass:process.env.BREVO_API_KEY

    },
});
transporter.verify((error,success)=>{
    if(error){
        console.log("SMTP VERIFY ERROR",error);
    }
    else{
        console.log("SMTP SERVER READY ");
    }
})
export default transporter;
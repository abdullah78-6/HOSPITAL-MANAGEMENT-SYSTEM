import express from "express"
import cors from "cors"
import "dotenv/config"
import { Getdbconnection } from "./utils/db.js";
import cookieParser from "cookie-parser";
import Adminuserrouter from "./routes/admin-user-routes.js";
import addrouter from "./routes/add-patient-routes.js";
import Departmentrouter from "./routes/department-routes.js";
import Userauthrouter from "./routes/user-auth-routes.js";
import Appintmentrouter from "./routes/appointment-route.js";
import contactrouter from "./routes/contact-route.js";
import Airouter from "./routes/ai-routes.js";
const app=express();
app.use(express.json());
app.use(cors({
    origin:[
        "https://hospital-management-system-admin-panel-kvi6.onrender.com",
        "https://hospital-management-system-frontend-f3mz.onrender.com"
    ],
    credentials:true
}));
app.use(cookieParser());
app.get("/",(req,res)=>{
    res.send("SERVER IS READY TO DO WORK ");

})
app.use("/api/admin",Adminuserrouter);
app.use("/api/admin",addrouter);
app.use("/api/admin",Departmentrouter);
app.use("/api/user",Userauthrouter);
app.use("/api/user",Appintmentrouter);
app.use("/api/cnt",contactrouter);
app.use("/api/ai",Airouter);
await Getdbconnection();
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server is listining on http://localhost:${port}`);
})


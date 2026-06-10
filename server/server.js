import express from "express"
import cors from "cors"
import "dotenv/config"
import { Getdbconnection } from "./utils/db.js";
import cookieParser from "cookie-parser";
import Adminuserrouter from "./routes/admin-user-routes.js";
const app=express();
app.use(express.json());
app.use(cors({
    origin:[
        "http://localhost:5173",
        "http://localhost:5174"
    ],
    credentials:true
}));
app.use(cookieParser());
app.get("/",(req,res)=>{
    res.send("SERVER IS READY TO DO WORK ");

})
app.use("/api/admin",Adminuserrouter);
await Getdbconnection();
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server is listining on http://localhost:${port}`);
})


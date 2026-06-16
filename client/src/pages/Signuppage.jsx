import {useDispatch,useSelector} from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { control } from "../store/slice";
const Signup=({url})=>{
    const dispatch=useDispatch();
    const formtype=useSelector(state=>state.main.formtype);
    const logininfo2=useSelector(state=>state.main.logininfo2);
const Onchangehandler=(event)=>{
    dispatch(control.setlogininfo2({
        name:event.target.name,
        value:event.target.value
    }))

}
const Onsubmithandler=async(e)=>{
    e.preventDefault();
    event.preventDefault();
    let newurl=url;
    if(formtype==="login"){
        
        newurl=newurl+"/api/user/login"
        
        
      

    }
    else{
        
        newurl=newurl+"/api/user/signup"
    }
    try{
        const response=await axios.post(newurl,logininfo2,{
            withCredentials:true
        });

    if(response.data.status){
        
          if(formtype==="login"){
         
             const res=await axios.get(url+"/api/user/get",{
            withCredentials:true,
        })
        if(res.data.status){
            dispatch(control.setbackendemail2(res.data.email));
        
        }
        else{
            dispatch(control.setbackendemail2(""));
        
        }
       
       
          }
        
       
        
        toast.success(response.data.message);
        
    }
    else{
        toast.error(response.data.message);
    }

    }
    catch(err){
        toast.error("SERVER ERROR");

    }
    


}
    return <div className="p-4 font-semibold text-sm  flex gap-9">
       <form className="flex flex-col justify-center items-center gap-7" onSubmit={Onsubmithandler}>
    {formtype!=="login"&&
        <div >
            
            <label htmlFor="name">enter name</label>
            <input onChange={Onchangehandler} value={logininfo2.name} name="name" type="text" placeholder="enter name" required/>
            </div>}
            <div>
            <label htmlFor="email">enter email</label>
            <input onChange={Onchangehandler} value={logininfo2.email} name="email" type="email" placeholder="enter email" required/>
        </div>
        <div>
            <label htmlFor="password">enter password</label>
            <input onChange={Onchangehandler} value={logininfo2.password} name="password" type="password" placeholder="enter password" required/>
        </div>
        <div>
            {formtype==="login"?
            <p onClick={()=>dispatch(control.setformtype("signup"))}>Create a new account </p>:
            <p onClick={()=>dispatch(control.setformtype("login"))}>Already have an account </p>}
            
        </div>
        <div>
            {formtype==="login"?
            <button type="submit">Login</button>:
            <button type="submit">Signup</button>
           }
    
        </div>
       </form>
    </div>

}
export default Signup;
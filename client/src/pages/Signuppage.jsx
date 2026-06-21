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
    return <div className=" font-semibold    min-h-[70vh] px-4 py-10 flex justify-center items-center  flex-wrap ">
       <form className="flex flex-col text-center   justify-center items-center gap-10 bg-[#618764] rounded-2xl p-3 md:p-12 xl:p-12 lg:p-12 " onSubmit={Onsubmithandler}>
    {formtype!=="login"&&
        <div className="flex justify-center items-center flex-wrap gap-5" >
                <div className="w-40 text-right">
            <label className="text-xl capitalize text-pink-100" htmlFor="name">enter name</label>
            </div>
            <div>
            <input className="border-2 text-gray-800 border-blue-900 focus:border-white focus:outline-none p-1 rounded-3xl  "  onChange={Onchangehandler} value={logininfo2.name} name="name" type="text" placeholder="enter name" required/>
            </div>           
            </div>}
            <div className="flex justify-center items-center gap-5 flex-wrap">
                <div className="w-40 text-right">
            <label className="text-xl capitalize text-pink-100" htmlFor="email">enter email</label>
            </div>
            <div>
            <input className="border-2 text-gray-800 border-blue-900 focus:border-white focus:outline-none p-1 rounded-3xl  "  onChange={Onchangehandler} value={logininfo2.email} name="email" type="email" placeholder="enter email" required/>
            </div>
        </div>
        <div className="flex justify-center items-center gap-5 flex-wrap">
            <div className="w-40 text-right">
            <label className="text-xl capitalize text-pink-100" htmlFor="password">enter password</label>
            </div>
            <div>
            <input className="border-2 text-gray-800 border-blue-900 focus:border-white focus:outline-none p-1 rounded-3xl  " onChange={Onchangehandler} value={logininfo2.password} name="password" type="password" placeholder="enter password" required/>
            </div>
        </div>
        <div>
            {formtype==="login"?
            <div>
            <p className="bg-blue-800 text-white capitalize p-2 rounded-2xl hover:bg-blue-900 transition ease-in-out duration-200 cursor-pointer"  onClick={()=>dispatch(control.setformtype("signup"))}>Create a new account </p>
            </div>:
            <div>
            <p className="bg-blue-800 text-white capitalize p-2 rounded-2xl hover:bg-blue-900 transition ease-in-out duration-200 cursor-pointer" onClick={()=>dispatch(control.setformtype("login"))}>Already have an account </p>
            </div>}

            
        </div>
        <div>
            {formtype==="login"?
            <button className="bg-red-800 text-white capitalize p-2 rounded-2xl hover:bg-red-900 transition ease-in-out duration-200 cursor-pointer hover:scale-120" type="submit">Login</button>:
            <button className="bg-red-800 text-white capitalize p-2 rounded-2xl hover:bg-red-900 transition ease-in-out duration-200 cursor-pointer hover:scale-120" type="submit">Signup</button>
           }
    
        </div>
       </form>
    </div>

}
export default Signup;
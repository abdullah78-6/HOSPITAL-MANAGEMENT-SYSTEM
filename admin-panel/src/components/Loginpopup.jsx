import { useSelector,useDispatch } from "react-redux";
import toast from "react-hot-toast"
import axios from "axios"
import { control } from "../store/slice";
const Loginpopup=({url})=>{
    const dispatch=useDispatch();
    const logininfo=useSelector(state=>state.main.logininfo);
    const onchangehandler=(event)=>{
        dispatch(control.setlogininfo({
            name:event.target.name,
            value:event.target.value
        }))

    }
    const login=async(e)=>{
        e.preventDefault();
        try {
            const response=await axios.post(url+"/api/admin/login",logininfo,{
            withCredentials:true    
            });
                
            if(!response.data.status){
          toast.error(response.data.result);
            dispatch(control.setbackendemail(response.data.email));
            return ;
            }
            toast.success(response.data.result);
            const res=await axios.get(
                url+"/api/admin/pr",
                {withCredentials:true}
            );
            if(res.data.status){
                dispatch(control.setbackendemail(res.data.email));
            }
            else{
                dispatch(control.setbackendemail(""));
                toast.error("AUTHENTICATION FAILED AFTER LOGIN");

            }
         
        } catch (error) {
            console.log(error);
        toast.error("SERVER ERROR");
            dispatch(control.setbackendemail(""));
            
        }
        
        

    }
    return <div>
        <form onSubmit={login}>
            
            <div>
        <label htmlFor="email">enter-email</label>
        <input onChange={onchangehandler} value={logininfo.email} name="email" type="email" placeholder="enter-email" required />
        </div>
           <div>
        <label htmlFor="password">enter-password</label>
        <input onChange={onchangehandler} value={logininfo.password} name="password" type="password" placeholder="enter-password" required />
        </div>
        <div>
            <button type="submit" className="bg-cyan-600 p-2 mt-3 "> Sign-in</button>
        </div>
        </form>
    </div>

}
export default Loginpopup;
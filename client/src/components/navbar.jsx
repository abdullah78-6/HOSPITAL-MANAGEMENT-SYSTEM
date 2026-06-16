import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { control } from "../store/slice";
import { useEffect } from "react";
const Navbar=({url})=>{
     const backendemail2=useSelector(state=>state.main.backendemail2);
     const dispatch=useDispatch();
    const getprofile=async()=>{
        
            try {
                const res=await axios.get(url+"/api/user/get",{
                    withCredentials:true
                })
                if(res.data.status){
                    dispatch(control.setbackendemail2(res.data.email));
                    
                }
                else{
                    dispatch(control.setbackendemail2(""));
                    
                }
            } catch (error) {
                dispatch(control.setbackendemail2(""));
                
                
        
        };

    }
    useEffect(()=>{
        getprofile();

    },[]);
   const Logout=async(e)=>{
        e.preventDefault();
          const response=await axios.post(url+"/api/user/logout",{},{
            withCredentials:true
        });
        if(response.data.status){
            dispatch(control.setbackendemail2(""));
            
        toast.success(response.data.message);

        }
        else{
            toast.error(response.data.message);
        }

    }
   
    return <div>
        <h1 className="text-4xl bg-red-200 text-pink-700 p-3 ">{backendemail2.slice(0,1)}</h1>
        <button onClick={Logout} className="bg-orange-600 p-3">Logout</button>


    </div>

}
export default Navbar;
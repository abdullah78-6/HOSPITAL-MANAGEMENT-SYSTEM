import {Link} from "react-router-dom"
import { control } from "../store/slice";
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from "react";
import axios from "axios"
import toast from "react-hot-toast"
const Sidebar=({url})=>{
    const dispatch=useDispatch();
    const navbarclass=useSelector(state=>state.main.navbarclass);
    const backendemail=useSelector(state=>state.main.backendemail);
    useEffect(()=>{
        const fetchuser=async()=>{
            try {
                const res=await axios.get(url+"/api/admin/pr",{
                    withCredentials:true
                })
                if(res.data.status){
                    dispatch(control.setbackendemail(res.data.email));
                    
                }
                else{
                    dispatch(control.setbackendemail(""));
                    
                }
            } catch (error) {
                dispatch(control.setbackendemail(""));
                
                
            }
        };
        fetchuser();

    },[]);
    const Logout=async(e)=>{
        e.preventDefault();
          const response=await axios.post(url+"/api/admin/logout",{},{
            withCredentials:true
        });
        if(response.data.status){
            dispatch(control.setbackendemail(""));
            
        toast.success(response.data.message);

        }
        else{
            toast.error(response.data.message);
        }


    }
    
    return <div className="bg-[#618764]  h-screen text-[#273338] font-semibold overflow-y-auto p-4">
        {backendemail?<h1> WELCOME TO ADMI PANEL {backendemail.slice(0,1)}</h1>:<></>}
        <ul className="flex justify-between items-center flex-col gap-6 text-sm capitalize mt-7">
            <Link onClick={()=>dispatch(control.setnavbarclass("one"))}  to="/" className={` ${navbarclass=="one"?"bg-amber-500 hover:bg-amber-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800":"bg-pink-800 hover:bg-pink-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800"}`}>dashboard</Link>
            
            <Link onClick={()=>dispatch(control.setnavbarclass("two"))} to="/add-departments" className={` ${navbarclass=="two"?"bg-amber-500 hover:bg-amber-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800":"bg-pink-800 hover:bg-pink-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800 w-35"}`}   >add departments</Link>
            
            <Link onClick={()=>dispatch(control.setnavbarclass("three"))} to="/doctors" className={` ${navbarclass=="three"?"bg-amber-500 hover:bg-amber-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800":"bg-pink-800 hover:bg-pink-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800"}`}  >doctors</Link>
            <Link onClick={()=>dispatch(control.setnavbarclass("four"))} to="/appointments" className={` ${navbarclass=="four"?"bg-amber-500 hover:bg-amber-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800":"bg-pink-800 hover:bg-pink-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800"}`}  >appointments</Link>
            <Link onClick={()=>dispatch(control.setnavbarclass("list"))} to="/list" className={` ${navbarclass=="list"?"bg-amber-500 hover:bg-amber-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800":"bg-pink-800 hover:bg-pink-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800"}`}  > patients lists </Link>
            <Link onClick={()=>dispatch(control.setnavbarclass("five"))} to="/add-patients" className={` ${navbarclass=="five"?"bg-amber-500 hover:bg-amber-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800":"bg-pink-800 hover:bg-pink-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800"}`}  >add patients </Link>
           {!backendemail? <Link to="/login" className="bg-blue-700 text-white p-3 rounded-3xl hover:bg-blue-900 transition ease-in-out duration-200" >LOGIN</Link>:<button className="bg-red-700 text-white p-3 rounded-3xl hover:bg-red-900 transition ease-in-out duration-200" onClick={Logout}>LOGOUT</button>}
        </ul>

    </div>

}
export default Sidebar;
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
    
    return <div className="bg-[#618764] w-64 min-h-screen text-[#273338] font-semibold overflow-y-auto p-4">
        <div className="mt-4 bg-white/20 rounded-xl p-4">
  {backendemail && (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-white/80">Welcome</p>
        <h2 className="text-lg font-bold text-white">
          Admin
        </h2>
      </div>

      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-pink-800 font-bold text-lg shadow-md">
        {backendemail.slice(0, 1).toUpperCase()}
      </div>
    </div>
  )}
</div>
        <ul className="flex justify-between items-center flex-col gap-6 text-sm capitalize mt-12">
            <Link onClick={()=>dispatch(control.setnavbarclass("one"))}  to="/" className={` ${navbarclass=="one"?"bg-amber-500 hover:bg-amber-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800":"bg-pink-800 hover:bg-pink-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800"}`}>dashboard</Link>
            
            <Link onClick={()=>dispatch(control.setnavbarclass("two"))} to="/add-departments" className={` ${navbarclass=="two"?"bg-amber-500 hover:bg-amber-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800":"bg-pink-800 hover:bg-pink-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800 w-35"}`}   >add departments</Link>
            
            
            <Link onClick={()=>dispatch(control.setnavbarclass("four"))} to="/appointments" className={` ${navbarclass=="four"?"bg-amber-500 hover:bg-amber-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800":"bg-pink-800 hover:bg-pink-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800"}`}  >appointments</Link>
            <Link onClick={()=>dispatch(control.setnavbarclass("list"))} to="/list" className={` ${navbarclass=="list"?"bg-amber-500 hover:bg-amber-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800":"bg-pink-800 hover:bg-pink-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800"}`}  > patients lists </Link>
            <Link onClick={()=>dispatch(control.setnavbarclass("enquiries"))} to="/enquiries" className={` ${navbarclass=="enquiries"?"bg-amber-500 hover:bg-amber-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800":"bg-pink-800 hover:bg-pink-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800"}`}  >Enquiries</Link>
            <Link onClick={()=>dispatch(control.setnavbarclass("five"))} to="/add-patients" className={` ${navbarclass=="five"?"bg-amber-500 hover:bg-amber-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800":"bg-pink-800 hover:bg-pink-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800"}`}  >add patients </Link>
            <Link onClick={()=>dispatch(control.setnavbarclass("dlist"))} to="/dlist" className={` ${navbarclass=="dlist"?"bg-amber-500 hover:bg-amber-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800":"bg-pink-800 hover:bg-pink-900 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-green-800"}`}  >departments list</Link>
           {!backendemail? <Link to="/login" className="bg-blue-700 text-white p-3 rounded-3xl hover:bg-blue-900 transition ease-in-out duration-200" >LOGIN</Link>:<button className="bg-red-700 text-white p-3 rounded-3xl hover:bg-red-900 transition ease-in-out duration-200" onClick={Logout}>LOGOUT</button>}
        </ul>

    </div>

}
export default Sidebar;
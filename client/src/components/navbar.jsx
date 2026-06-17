import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { control } from "../store/slice";
import { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Navbar=({url})=>{
     const backendemail2=useSelector(state=>state.main.backendemail2);
     const dispatch=useDispatch();
     const navigate=useNavigate();
     const mobilenav=useSelector(state=>state.main.mobilenav);
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
   
    return <div className="font-semibold capitalize bg-[#618764] p-3 flex justify-between items-center  relative">
        <div>
            
            <Link onClick={()=>dispatch(control.setnavbarclass(""))} to="/" className="text-2xl capitalize text-[#273338]" >medicare-<span className="text-2xl capitalize text-pink-800">Hospital</span></Link>
        </div>
        <ul className=" hidden xl:flex xl:justify-center xl:items-center  xl:text-xl xl:text-gray-200 xl:gap-7     md:flex md:justify-center md:items-center  md:text-xl md:text-gray-200 md:gap-7     lg:flex lg:justify-center lg:items-center  lg:text-xl lg:text-gray-200 lg:gap-7 ">
            <Link className="hover:underline hover:text-pink-800 " to="/">home</Link>
            <Link className="hover:underline hover:text-pink-800  ">our services</Link>
            <Link className="hover:underline hover:text-pink-800  " to="/appointment">book  appointment</Link>
            <Link className="hover:underline hover:text-pink-800  ">about-us</Link>
            <Link className="hover:underline hover:text-pink-800  ">contact-us</Link>
        </ul>
      {mobilenav && (
  <div className="absolute top-16 left-0 w-full bg-[#618764] shadow-lg border-t border-[#4d6c50] md:hidden lg:hidden xl:hidden z-50 animate-[slideDown_0.4s_ease-in-out] ">
    <ul className="flex flex-col items-center gap-5 py-6 text-lg text-gray-200">
      <Link
        onClick={() => dispatch(control.setmobilenav(false))}
        className="hover:text-pink-800 transition duration-200"
        to="/"
      >
        Home
      </Link>

      <Link
        onClick={() => dispatch(control.setmobilenav(false))}
        className="hover:text-pink-800 transition duration-200"
      >
        Our Services
      </Link>

      <Link
        onClick={() => dispatch(control.setmobilenav(false))}
        className="hover:text-pink-800 transition duration-200"
        to="/appointment"
      >
        Book Appointment
      </Link>

      <Link
        onClick={() => dispatch(control.setmobilenav(false))}
        className="hover:text-pink-800 transition duration-200"
      >
        About Us
      </Link>

      <Link
        onClick={() => dispatch(control.setmobilenav(false))}
        className="hover:text-pink-800 transition duration-200"
      >
        Contact Us
      </Link>

      <div className="flex items-center gap-4 pt-4">
        {backendemail2 && (
          <h1 className="bg-white cursor-pointer hover:bg-pink-800 hover:text-white transition duration-200 w-10 h-10 flex items-center justify-center text-pink-800 rounded-full">
            {backendemail2.slice(0, 1)}
          </h1>
        )}

        {backendemail2 ? (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
            onClick={Logout}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
            onClick={() => navigate("/login")}
          >
            Signin
          </button>
        )}
      </div>
    </ul>
  </div>
)}
                <div className=" hidden xl:flex xl:justify-end xl:items-center xl:gap-6          md:flex md:justify-end md:items-center md:gap-6         lg:flex lg:justify-end lg:items-center lg:gap-6">
            <div>
        {backendemail2?<h1 className="bg-white cursor-pointer hover:bg-pink-800 hover:text-white transition ease-in-out duration-200 p-2 w-10 h-10 text-pink-800   text-center rounded-full">{backendemail2.slice(0,1)}</h1>:<></>}
        </div>
        <div >
       {backendemail2?<button className="bg-red-500 transition ease-in-out duration-200 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded" onClick={Logout}>Logout</button>:<button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded transition ease-in-out duration-200" onClick={()=>navigate("/login")} >Signin</button>} 
        
        </div>
        </div>
        <div className="md:hidden xl:hidden lg:hidden">
            {!mobilenav?
            <div>
            <GiHamburgerMenu  className="text-3xl text-white cursor-pointer hover:text-pink-300 transition-all duration-300 hover:scale-110" onClick={()=>dispatch(control.setmobilenav(true))}/>
            </div>:
            <div>
             <ImCross className="text-2xl text-white cursor-pointer hover:text-red-300 transition-all duration-300 hover:rotate-90" onClick={()=>dispatch(control.setmobilenav(false))}/>
             </div>}

        </div>


    </div>

}
export default Navbar;
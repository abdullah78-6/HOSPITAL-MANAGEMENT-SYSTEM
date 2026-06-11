import { useSelector,useDispatch } from "react-redux";
import toast from "react-hot-toast"
import axios from "axios"
import { control } from "../store/slice";
import {useNavigate} from "react-router-dom"
const Loginpopup=({url})=>{
    const dispatch=useDispatch();
    const logininfo=useSelector(state=>state.main.logininfo);
    const navigate=useNavigate();
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
            navigate("/");
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
    return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-pink-100 p-4 ml-4">
    <form
      onSubmit={login}
      className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-gray-200 "
    >
      <h1 className="text-3xl font-bold text-center mb-8 text-green-800">
        Admin <span className="text-pink-800">Login</span>
      </h1>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-semibold text-gray-700"
        >
          Email Address
        </label>

        <input
          onChange={onchangehandler}
          value={logininfo.email}
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-semibold text-gray-700"
        >
          Password
        </label>

        <input
          onChange={onchangehandler}
          value={logininfo.password}
          name="password"
          type="password"
          placeholder="Enter your password"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md"
      >
        Sign In
      </button>

      <p className="text-center text-gray-500 text-sm mt-6">
        Hospital Management Admin Panel
      </p>
    </form>
  </div>
);

}
export default Loginpopup;
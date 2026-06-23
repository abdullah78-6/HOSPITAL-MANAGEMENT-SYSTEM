import axios from "axios"
import toast from "react-hot-toast"
import {useSelector,useDispatch} from "react-redux"
import { control } from "../store/slice";
const Addpatient=({url})=>{
    const dispatch=useDispatch();
    const patientdetails=useSelector(state=>state.main.patientdetails);
    const backendemail=useSelector(state=>state.main.backendemail);
    const Onchangehandler=(event)=>{
        dispatch(control.setpatientdetails({
            name:event.target.name,
            value:event.target.value
        }))

    }
    const Admitpatient=async(e)=>{
        e.preventDefault();
        if(!backendemail){
            toast.error("Admin Login Required");
            return ;
            
        }
        try {
            const response=await axios.post(url+"/api/admin/add",{patientdetails},{
            withCredentials:true,
        })
        if(response.data.status){
            toast.success(response.data.message);
        }
        else{
            toast.error(response.data.error);
        }
            
        } catch (error) {
            toast.error(error.message);
            console.log(error.message);
            
        }
        
        

    }
    return <div className="min-h-screen bg-gray-100 w-full    flex justify-center items-center px-4 py-8 capitalize font-semibold text-xl">
        <div className="flex justify-center items-center shadow-2xl bg-white p-6 rounded-4xl px-10 md:px-19 lg:px-19 xl:px-19">
            <form onSubmit={Admitpatient}  className="space-y-6 flex flex-col justify-center items-center text-center">
                <div className="flex flex-col items-center justify-center text-center">
                    <label className="block mb-2 font-medium text-gray-700" htmlFor="name">enter-name</label>
                    <input className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500" onChange={Onchangehandler} value={patientdetails.name} name="name" type="text" placeholder="patient name" required />
                </div>
                <div className="flex flex-col items-center">
                    <label className="block mb-2 font-medium text-gray-700" htmlFor="phoneno">mobile-no</label>
                    <input className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500" onChange={Onchangehandler} value={patientdetails.phone_no} name="phone_no" type="number" placeholder="patient mobile" required />
                </div>
                <div className="flex flex-col items-center" >
                    <label className="block mb-2 font-medium text-gray-700" htmlFor="disease">disease name</label>
                    <input className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500" onChange={Onchangehandler} value={patientdetails.disease} name="disease" type="text" placeholder="patien disease" required />
                </div>
                <div className="flex flex-col items-center">
                    <label className="block mb-2 font-medium text-gray-700" htmlFor="age">patient age</label>
                    <input className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500" onChange={Onchangehandler} value={patientdetails.age} name="age" type="number" placeholder="patien age" required />
                </div>
                <div className="flex flex-col items-center">
                    <label className="block mb-2 font-medium text-gray-700" htmlFor="date">admit date</label>
                    <input className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500" onChange={Onchangehandler} value={patientdetails.admitdate} name="admitdate" type="date"  required />
                </div>
                <div className="flex flex-col items-center">
                    <label className="block mb-2 font-medium text-gray-700" htmlFor="bill">total bill</label>
                    <input className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500" onChange={Onchangehandler} value={patientdetails.bill} name="bill" type="number" placeholder="total bill ₹ "  required />
                </div>
                <div>
                    <button  type="submit" className="bg-green-900 p-2 text-xl mt-4 hover:bg-green-950 hover:text-white rounded-3xl text-pink-300 transition ease-in-out duration-200">REGISTERED PATIENT</button>
                </div>
            </form>
        </div>
    </div>
}
export default Addpatient;
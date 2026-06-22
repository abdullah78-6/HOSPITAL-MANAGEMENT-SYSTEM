 import axios from "axios"
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import { control } from "../store/slice";
import toast from "react-hot-toast"
import { FaTrash } from "react-icons/fa";
const Appointment=({url})=>{
   
    const dispatch=useDispatch();
    const backendemail=useSelector(state=>state.main.backendemail);
    const appointment=useSelector(state=>state.main.appointment);
    const Fetch=async()=>{
        try {
            const res=await axios.get(url+"/api/user/display",{
                withCredentials:true
            })
            if(res.data.status){
                
                dispatch(control.setappointment(res.data.appointment))
                
            }
            else{
                toast.error(res.data.message);
                
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
            
        }

    }
    const Delete=async(id)=>{
      const response=await axios.delete(url+"/api/user/delete2",{
        data:{id:id},
      withCredentials:true
      })
      if(response.data.status){
        toast.success(response.data.message);
        await Fetch();
      }
      else{
        toast.error(response.data.message);
      }

    }
useEffect(()=>{
    Fetch();
},[]);
   return (
  <div className="w-full  p-2 sm:p-2">
    <div className="mb-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center capitalize text-green-800">
        Hospital-
        <span className="text-pink-800">Appointments</span>
      </h1>
    </div>
   {!backendemail?(
      <h1 className="text-center text-2xl font-semibold text-red-700 mt-10">
            ADMIN LOGIN REQUIRED
          </h1>

    ):appointment.length===0?(
      <h1 className="text-center  capitalize font-semibold text-red-800 text-2xl">list is empty</h1>

    ):(
      <div className="h-[75vh] overflow-y-auto pr-2">
      {appointment.map((item, i) => (
        <div
          key={item._id}
          className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 mb-4"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-800 font-bold">
              {i + 1}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 flex-1">
              
              <div>
                <p className="text-xs text-gray-500 uppercase">
                  First Name
                </p>
                <h1 className="text-pink-800 font-semibold break-words">
                  {item.First_Name}
                </h1>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">
                  Last Name
                </p>
                <h1 className="text-pink-800 font-semibold break-words">
                  {item.Last_Name}
                </h1>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase">
                  Phone
                </p>
                <h1 className="text-pink-800">
                  {item.Contact}
                </h1>
              </div>

              

              <div>
                <p className="text-xs text-gray-500 uppercase">
                  Age
                </p>
                <h1 className="text-pink-800">
                  {item.Age}
                </h1>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase">
                  Appointment Date
                </p>
                <h1 className="text-pink-800">
                  {new Date(item.Appointment_Date).toLocaleDateString(
                    "en-GB"
                  )}
                </h1>
              </div>
            </div>

            
              <h1 className="font-bold text-lg text-red-800" onClick={()=>Delete(item._id)}>
               <FaTrash/>
              </h1>
          </div>
        </div>
      ))}
    </div>
    )
  }

    
  </div>
);

}


export default Appointment;
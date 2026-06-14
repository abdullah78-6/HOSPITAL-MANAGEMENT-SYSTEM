import axios from "axios"
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import { control } from "../store/slice";
import toast from "react-hot-toast"
import { FaTrash } from "react-icons/fa";
const Patientlist=({url})=>{
    const dispatch=useDispatch();
    const backendemail=useSelector(state=>state.main.backendemail);
    const Illlist=useSelector(state=>state.main.Illlist);
    const Fetch=async()=>{
        try {
            const res=await axios.get(url+"/api/admin/get",{
                withCredentials:true
            })
            if(res.data.status){
                
                dispatch(control.setIlllist(res.data.patientlist))
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
      const response=await axios.delete(url+"/api/admin/del",{
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
        <span className="text-pink-800">Patients List</span>
      </h1>
    </div>
   {!backendemail?(
      <h1 className="text-center text-2xl font-semibold text-red-700 mt-10">
            ADMIN LOGIN REQUIRED
          </h1>

    ):Illlist.length===0?(
      <h1 className="text-center  capitalize font-semibold text-red-800 text-2xl">list is empty</h1>

    ):(
      <div className="h-[75vh] overflow-y-auto pr-2">
      {Illlist.map((item, i) => (
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
                  Patient Name
                </p>
                <h1 className="text-pink-800 font-semibold break-words">
                  {item.name}
                </h1>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase">
                  Phone
                </p>
                <h1 className="text-pink-800">
                  {item.phone_no}
                </h1>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase">
                  Disease
                </p>
                <h1 className="text-gray-800">
                  {item.disease}
                </h1>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase">
                  Age
                </p>
                <h1 className="text-pink-800">
                  {item.age}
                </h1>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase">
                  Admit Date
                </p>
                <h1 className="text-pink-800">
                  {new Date(item.admit_date).toLocaleDateString(
                    "en-GB"
                  )}
                </h1>
              </div>
            </div>

            <div className="bg-pink-50 px-4 py-2 rounded-lg border border-pink-200">
              <p className="text-xs text-gray-500 uppercase">
                Bill Amount
              </p>
              <h1 className="font-bold text-lg text-pink-800">
                ₹{item.bill}
              </h1>
             
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
export default Patientlist;
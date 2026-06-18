import axios from "axios";
import { ImCross } from "react-icons/im";
import toast from "react-hot-toast"
import {useSelector,useDispatch} from "react-redux"
import { control } from "../store/slice";
import { useEffect, useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";
const Departments=({url})=>{
    const dispatch=useDispatch();
    const Dlist=useSelector(state=>state.main.Dlist);
    const FetchDepartment=async()=>{
        const response=await axios.get(url+"/api/admin/dptget",{
            withCredentials:true
        })
        if(response.data.status){
            dispatch(control.setDlist(response.data.finallist));
            
            
        }
        else{
            toast.error(response.data.message);
        }

    }
    useEffect(()=>{
        FetchDepartment();
    },[]);
  
        return (
            
            <div className="font-semibold text-xl capitalize w-full  p-2 sm:p-2">
               
                <div>
                    <h1 className="text-2xl mt-2 text-center text-green-800">hospital Departments </h1>
                </div>
           

    

    <div className="h-[95vh] overflow-y-auto pr-2 mt-5 bg-gray-100 ">
                <div className="flex justify-between items-center  gap-5 flex-col flex-wrap font-semibold">
                    {Dlist.map((index,i)=>(
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4" key={index._id}>
  {Dlist.map((index, i) => (
    <div
      key={index._id}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 border border-gray-200"
    >
      <div className="flex items-center gap-5">
      
        <div className="w-28 h-28 shrink-0">
          <img
            src={index.image}
            alt={index.name}
            className="w-full h-full rounded-full object-cover border-4 border-pink-200"
          />
        </div>

      
        <div className="flex-1">
          <h1 className="text-lg font-bold text-green-700">
            {i + 1}. {index.name}
          </h1>

          <p className="text-blue-700 mt-2">
            <span className="font-semibold">Doctor:</span>{" "}
            {index.doctor}
          </p>

          <p className="text-gray-600 mt-2 text-sm">
            {index.details}
          </p>
        </div>
      </div>

      
      
        </div>
      ))}
    
      

      
      <div className="flex justify-end gap-4 mt-5">
        
      </div>
    </div>
  ))}
</div>
                

        
                </div>
               </div>
          
               


               
            
           )
}
export default Departments;
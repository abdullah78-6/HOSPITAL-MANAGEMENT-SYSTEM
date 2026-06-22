import axios from "axios";
import { ImCross } from "react-icons/im";
import toast from "react-hot-toast"
import {useSelector,useDispatch} from "react-redux"
import { control } from "../store/slice";
import { useEffect, useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";
const Enquiries=({url})=>{
const dispatch=useDispatch();
const backendemail=useSelector(state=>state.main.backendemail);
const contact=useSelector(state=>state.main.contact);
const FetchDepartment=async()=>{
        const response=await axios.get(url+"/api/cnt/getcontact",{
            withCredentials:true
        })
        if(response.data.status){
            dispatch(control.setcontact(response.data.contact));
            
            
        }
        else{
            toast.error(response.data.message);
        }

    }
    useEffect(()=>{
        FetchDepartment();
    },[]);
    const Delete=async(id)=>{
       const response=await axios.delete(url+"/api/cnt/deletecontact",{
        data:{id:id},
        withCredentials:true
       })
       if(response.data.status){
        toast.success(response.data.message);
         FetchDepartment();
       }
       else{
        toast.error(response.data.message);
       }


    }
   
     return (
            
            <div className="font-semibold text-xl capitalize w-full  p-2 sm:p-2">
               
                <div>
                    <h1 className="text-2xl mt-2 text-center text-pink-800">hospital enquiries</h1>
                </div>
            {!backendemail?(
      <h1 className="text-center text-2xl font-semibold text-red-700 mt-10">
            ADMIN LOGIN REQUIRED
          </h1>

    ):contact.length===0?(
      <h1 className="text-center  capitalize font-semibold text-red-800 text-2xl">list is empty</h1>

    ):<div className="h-[95vh] overflow-y-auto pr-2 mt-5 bg-gray-100 ">
                <div className="flex justify-between items-center  gap-5 flex-col flex-wrap font-semibold">
                    
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4" >
  {contact.map((index, i) => (
    <div
      key={index._id}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 border border-gray-200"
    >
      <div className="flex items-center gap-5">
      
        

      
        <div className="flex-1">
          
          <p className="text-blue-700 mt-2">
            
            {index.name}
          </p>

          <p className="text-gray-600 mt-2 text-sm">
            {index.phone_no}
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            {index.email}
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            {index.message}
          </p>
        </div>
      </div>

      
    
      
      <div className="flex justify-end gap-4 mt-5">
      

        <button
          onClick={() => Delete(index._id)}
          className="bg-red-100 text-red-700 p-3 rounded-full hover:bg-red-700 hover:text-white transition"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  ))}
</div>
                

     
                </div>
               </div>
     }         
               


               
            </div>
        )
}



export default Enquiries;
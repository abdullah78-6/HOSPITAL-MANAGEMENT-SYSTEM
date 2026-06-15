import axios from "axios";
import { ImCross } from "react-icons/im";
import toast from "react-hot-toast"
import {useSelector,useDispatch} from "react-redux"
import { control } from "../store/slice";
import { useEffect, useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";
const Departmentlist=({url})=>{
    const dispatch=useDispatch();
    const Dlist=useSelector(state=>state.main.Dlist);
    const [edit,setedit]=useState(false);
    
    const[newname,setnewname]=useState("");
    const backendemail=useSelector(state=>state.main.backendemail);
    const storeid=useSelector(state=>state.main.storeid);
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
    },[Dlist]);
    const Delete=async(id)=>{
       const response=await axios.delete(url+"/api/admin/ddel",{
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
    const Check=(id)=>{
    dispatch(control.setstoreid(id));
        setedit(true);
        

    }
    const Cancel=()=>{
        setedit(false);
        dispatch(control.setstoreid(null));
    }
    const Update=async(id)=>{
        if(!newname){
            toast.error("Please Add Name First");
            return ;
        }
        const response=await axios.put(
            url+"/api/admin/dput",
            {
                id,
                name:newname

            },
            {
            withCredentials:true
            }
        )
        if(response.data.status){
            toast.success(response.data.message);
            setedit(false);
            setnewname("");
             await FetchDepartment();      
        }
        else{
            toast.error(response.data.message);
        }
        

    }
        return (
            
            <div className="font-semibold text-xl capitalize w-full  p-2 sm:p-2">
               
                <div>
                    <h1 className="text-2xl mt-2 text-center text-pink-800">hospital Department list</h1>
                </div>
            {!backendemail?(
      <h1 className="text-center text-2xl font-semibold text-red-700 mt-10">
            ADMIN LOGIN REQUIRED
          </h1>

    ):Dlist.length===0?(
      <h1 className="text-center  capitalize font-semibold text-red-800 text-2xl">list is empty</h1>

    ):<div className="h-[95vh] overflow-y-auto pr-2 mt-5 bg-gray-100 ">
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

      
      {edit && storeid === index._id && (
        <div className="mt-4 flex gap-3 flex-wrap">
          <input
            onChange={(e) => setnewname(e.target.value)}
            type="text"
            placeholder="Enter New Name"
            className="border-2 border-green-700 rounded-xl px-3 py-2 outline-none focus:border-pink-700 text-blue-700"
          />

          <button
            onClick={() => Update(index._id)}
            className="bg-blue-700 hover:bg-blue-900 text-white px-4 py-2 rounded-xl"
          >
            Update
          </button>

          <button
            onClick={Cancel}
            className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-xl"
          >
            <ImCross />
          </button>
        </div>
      )}

      
      <div className="flex justify-end gap-4 mt-5">
        <button
          onClick={() => Check(index._id)}
          className="bg-pink-100 text-pink-700 p-3 rounded-full hover:bg-pink-700 hover:text-white transition"
        >
          <FaPenClip />
        </button>

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
                

                    ))}
                </div>
               </div>
     }         
               


               
            </div>
        )
}
export default Departmentlist;
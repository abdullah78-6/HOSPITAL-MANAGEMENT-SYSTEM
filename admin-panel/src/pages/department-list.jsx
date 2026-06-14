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
                        <div key={index._id} className="flex justify-between items-center  gap-15 mt-5 text-pink-800 flex-row  ">
                            <div>
                                <h1 className="text-yellow-700">{i+1}</h1>
                            </div>
                            <div className="flex justify-center items-center ">
                                <img src={index.image} className=" w-auto rounded-full h-auto"/>
                            </div>
                            <div>
                                <h1 className="text-green-800">{index.name}</h1>
                            </div>
                            <div className="flex justify-center items-center gap-3">
                                {edit?<input onChange={(e)=>setnewname(e.target.value) } className="border-2 border-green-800  focus:border focus:border-pink-800 p-2 text-xl rounded-2xl " type="text"  placeholder="add new doctor name " />:<p>{index.doctor}</p>}
                                {edit?<div>
                                    <button className="bg-blue-900 hover:bg-blue-950 transitio ease-in-out duration-200 p-2 rounded-2xl text-sm text-green-300 " onClick={()=>Update(index._id)}>Edit</button>
                                    </div>:<></>}
                                    {edit?<div>
                                    <button className="bg-red-700 hover:bg-red-950 transition ease-in-out duration-200 p-2 rounded-2xl text-sm text-white " onClick={()=>setedit(false)}><ImCross/></button>
                                    </div>:<></>}
                            
                            </div>
                            <div>
                                <h1 className="text-blue-700 ">{index.details}</h1>
                            </div>
                            <h1 className="font-bold text-lg text-red-800 hover:bg-red-950 transition ease-in-out duration-200 p-2 rounded-2xl" >
                             <FaTrash onClick={()=>Delete(index._id)}/>
                            </h1>
                            <h1 className="text-pink-800 rounded-2xl p-2  hover:bg-pink-950 transition ease-in-out duration-200"><FaPenClip onClick={()=>setedit(true)} /></h1>
                           

                        </div>

                    ))}
                </div>
               </div>
     }         
               


               
            </div>
        )
}
export default Departmentlist;
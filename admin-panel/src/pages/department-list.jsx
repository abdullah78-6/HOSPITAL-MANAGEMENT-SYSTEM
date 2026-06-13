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
            <div className="font-semibold text-xl capitalize ">
                <div>
                    <h1 className="text-2xl mt-2 text-center text-pink-800">hospital Department list</h1>
                </div>
                <div>
                    {Dlist.length===0&&<h1 className="text-center  capitalize font-semibold text-red-800 text-2xl">list is empty</h1>}
               </div>
               <div className="flex justify-center flex-wrap items-center mt-15">
                <div className="flex justify-center items-center flex-col ">
                    {Dlist.map((index,i)=>(
                        <div key={index._id} className="flex justify-center items-center flex-wrap gap-15">
                            <div>
                                <h1>{i+1}</h1>
                            </div>
                            <div>
                                <img src={index.image} className="w-30"/>
                            </div>
                            <div>
                                <h1>{index.name}</h1>
                            </div>
                            <div className="flex justify-center items-center gap-3">
                                {edit?<input onChange={(e)=>setnewname(e.target.value)} type="text"  placeholder="add new doctor name " />:<p>{index.doctor}</p>}
                                {edit?<div>
                                    <button className="bg-blue-900 p-3 " onClick={()=>Update(index._id)}>Edit</button>
                                    </div>:<></>}
                                    {edit?<div>
                                    <button className="bg-red-900 p-3 " onClick={()=>setedit(false)}><ImCross/></button>
                                    </div>:<></>}
                            
                            </div>
                            <div>
                                <h1>{index.details}</h1>
                            </div>
                            <h1 className="font-bold text-lg text-red-800" >
                             <FaTrash onClick={()=>Delete(index._id)}/>
                            </h1>
                            <h1>Edit Doctor Name <FaPenClip onClick={()=>setedit(true)} /></h1>
                           

                        </div>

                    ))}
                </div>
               </div>
            </div>
        )
}
export default Departmentlist;
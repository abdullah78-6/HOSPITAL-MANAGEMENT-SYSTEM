import axios from "axios"
import { useState } from "react";
import toast from "react-hot-toast"
import {useSelector,useDispatch} from "react-redux"
import assestsimg from "../assets/assests";
import { control } from "../store/slice";
import { ClipLoader } from "react-spinners";
const Adddepartment=({url})=>{
    const dispatch=useDispatch();
    const [img,setimg]=useState(false);
    const[loading,setloading]=useState(false);
    const departments=useSelector(state=>state.main.departments);
    const backendemail=useSelector(state=>state.main.backendemail);
    const onchangehandler=(event)=>{
        dispatch(control.setdepartments({
            name:event.target.name,
            value:event.target.value
        }))

    }
    const adddepartment=async(e)=>{
        e.preventDefault();
        if(!img){
            toast.error("Please Add Image")
            return ;
        }
        if(!backendemail){
          toast.error("Admin Login Required");
          return ;
        }
        try {
            setloading(true);
            const formdata=new FormData();
     formdata.append("image",img);
     formdata.append("name",departments.department_name);
     formdata.append("doctor",departments.department_doctor);
     formdata.append("details",departments.department_details);
     const response=await axios.post(
        
        url+"/api/admin/dpt",
        formdata,
        {
            withCredentials:true
        }
     );
     
     if(response.data.status){
        toast.success(response.data.result);
        setloading(false);
     }
     else{
        toast.error(response.data.result);
        setloading(false);
     }

            
        } catch (error) {
            setloading(false);
            console.log(error);
            
        }
     
     



    }
    return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Add Department
        </h2>

        <form
          onSubmit={adddepartment}
          encType="multipart/form-data"
          className="space-y-6"
        >
          
          <div className="flex flex-col items-center">
            <label
              htmlFor="image"
              className="cursor-pointer group"
            >
              <img
                className="w-32 h-32 md:w-32 md:h-32 object-cover rounded-xl border-2 border-dashed border-gray-300 group-hover:border-red-500 transition"
                src={
                  img ? URL.createObjectURL(img) : assestsimg.image
                }
                alt="upload"
              />
            </label>

            <input
              className="hidden"
              onChange={(e) => setimg(e.target.files[0])}
              id="image"
              type="file"
              accept="image/*"
            />

            <p className="text-sm text-gray-500 mt-2">
              Click image to upload
            </p>
          </div>


          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Department Name
            </label>

            <input
              onChange={onchangehandler}
              value={departments.department_name}
              name="department_name"
              type="text"
              placeholder="Enter department name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>


          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Department Doctor
            </label>

            <input
              onChange={onchangehandler}
              value={departments.department_doctor}
              name="department_doctor"
              type="text"
              placeholder="Enter doctor name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>


          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Department Details
            </label>

            <textarea
              onChange={onchangehandler}
              value={departments.department_details}
              name="department_details"
              rows="5"
              placeholder="Enter department details"
              required
              className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>


          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-lg transition duration-300 flex justify-center items-center gap-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <ClipLoader size={20} color="#fff" />
                <span>Adding...</span>
              </>
            ) : (
              "Add Department"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Adddepartment
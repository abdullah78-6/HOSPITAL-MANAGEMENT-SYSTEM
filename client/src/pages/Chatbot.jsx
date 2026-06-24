import { useDispatch, useSelector } from "react-redux";
import { control } from "../store/slice";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import axios from "axios"
import { useState } from "react";
const Chat=({url})=>{
    const dispatch=useDispatch();
    const airesponse=useSelector(state=>state.main.airesponse);
    const aiquestions=useSelector(state=>state.main.aiquestions);
    const backendemail2=useSelector(state=>state.main.backendemail2);
    const[loading,setloading]=useState(false);
    const Onchangehandler=(e)=>{
        dispatch(control.setaiquestions({
            name:e.target.name,
            value:e.target.value
        }))
    }
    const Ai=async()=>{
        
        if(!backendemail2){
            toast.error("User Login Required");
            return ;
        }
        if(!aiquestions.queries){
            toast.error("Please Enter Questions");
            return ;
        }
        setloading(true);
        try {
            setloading(true);
            const res=await axios.post(url+"/api/ai/gemni",aiquestions,{
                withCredentials:true
            })
            if(res.data.status){
                dispatch(control.setairesponse(res.data.result));
                setloading(false);
            }
            else{
                toast.error(res.data.message);
                setloading(false);
            }
            
        } catch (error) {
            console.log("ai server error ",error);
            setloading(false);
            
        }


    }
    return (
  <div className="w-full min-h-[80vh] flex justify-center items-center p-4 text-green-800">
    <div className="w-full max-w-4xl bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-4 sm:p-6">
      
      {/* Response Section */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold mb-3">
          AI Response
        </h2>

        <div className="border rounded-xl p-4 min-h-[150px] max-h-[400px] overflow-y-auto break-words">
          {airesponse ? (
            <p className="text-sm sm:text-base whitespace-pre-wrap">
              {airesponse}
            </p>
          ) : (
            <p className="text-gray-500">
              Ask a question to get started...
            </p>
          )}
        </div>
      </div>

      {/* Input Section */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          onChange={Onchangehandler}
          value={aiquestions.queries}
          name="queries"
          type="text"
          placeholder="Ask anything..."
          className="flex-1 border-2 border-green-800 rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-600 text-pink-800"
        />

        <button
          onClick={Ai}
          disabled={loading}
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl transition-all duration-300 flex justify-center items-center"
        >
          {loading ? (
            <ClipLoader size={20} color="#fff" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  </div>
);
        
}
export default Chat;
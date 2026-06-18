import { useDispatch, useSelector } from "react-redux";
import { control } from "../store/slice";
import toast from "react-hot-toast";
import axios from "axios";
const Appointment = ({url}) => {
    const dispatch=useDispatch();
    const backendemail2=useSelector(state=>state.main.backendemail2);
    const appointment=useSelector(state=>state.main.appointment);
    const Onchangehandler=(e)=>{
        dispatch(control.setappointment({
            name:e.target.name,
            value:e.target.value
        }))

    }
    const BookAppointment=async(e)=>{
        e.preventDefault();
        if(!backendemail2){
            toast.error("User Login Required");
            return ;
        }
        const response=await axios.post(url+"/api/user/book", appointment,{
           
            withCredentials:true,
            
        })
        if(response.data.status){
            toast.success(response.data.message);
        }
        else{
            toast.error(response.data.message);
        }
        

    }

return (
  <div className="font-semibold text-xl flex justify-center items-center min-h-[80vh] px-4 py-10 bg-gradient-to-br from-[#C1EBE9] via-[#D8F3DC] to-[#EAF4F4]">
    <form
      className="flex justify-center items-center flex-col gap-7 bg-[#618764]/95 p-12 rounded-[35px] shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-2 border-white/30 backdrop-blur-md"
      onSubmit={BookAppointment}
    >
      <div className="text-center mb-2">
        <h2 className="text-4xl font-bold text-white drop-shadow-lg">
          Book Appointment
        </h2>
        <p className="text-pink-100 text-base mt-2">
          Medicare Hospital
        </p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <label className="text-pink-100 tracking-wide font-bold">
          First Name
        </label>

        <input
          onChange={Onchangehandler}
          value={appointment.first_name}
          name="first_name"
          className="border-2 border-blue-900 text-gray-800 bg-white px-5 py-3 rounded-full focus:border-white focus:outline-none shadow-lg transition-all duration-300 w-[280px]"
          type="text"
          placeholder="First Name"
          required
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <label className="text-pink-100 tracking-wide font-bold">
          Last Name
        </label>

        <input
          onChange={Onchangehandler}
          value={appointment.last_name}
          name="last_name"
          className="border-2 border-blue-900 text-gray-800 bg-white px-5 py-3 rounded-full focus:border-white focus:outline-none shadow-lg transition-all duration-300 w-[280px]"
          type="text"
          placeholder="Last Name"
          required
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <label className="text-pink-100 tracking-wide font-bold">
          Contact
        </label>

        <input
          onChange={Onchangehandler}
          value={appointment.contact}
          name="contact"
          className="border-2 border-blue-900 text-gray-800 bg-white px-5 py-3 rounded-full focus:border-white focus:outline-none shadow-lg transition-all duration-300 w-[280px]"
          type="number"
          placeholder="Contact-no +91"
          required
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <label className="text-pink-100 tracking-wide font-bold">
          Age
        </label>

        <input
          onChange={Onchangehandler}
          value={appointment.age}
          name="age"
          className="border-2 border-blue-900 text-gray-800 bg-white px-5 py-3 rounded-full focus:border-white focus:outline-none shadow-lg transition-all duration-300 w-[280px]"
          type="number"
          placeholder="Age"
          required
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <label className="text-pink-100 tracking-wide font-bold">
          Appointment Date
        </label>

        <input
          onChange={Onchangehandler}
          value={appointment.date}
          name="date"
          className="border-2 border-blue-900 text-gray-800 bg-white px-5 py-3 rounded-full focus:border-white focus:outline-none shadow-lg transition-all duration-300 w-[280px]"
          type="date"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-red-800 text-white px-10 py-3 rounded-full hover:bg-red-900 hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl mt-2 tracking-wide"
      >
        Book Appointment
      </button>
    </form>
  </div>
);



}
export default Appointment;
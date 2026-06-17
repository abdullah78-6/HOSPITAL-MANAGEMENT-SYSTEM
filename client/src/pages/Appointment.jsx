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
        <div className="font-semibold text-xl flex justify-center items-center ">
            <form className="flex justify-center items-center flex-col gap-4 " onSubmit={BookAppointment}>
                <div className="flex justify-center items-center gap-9 ">
                    <div>
                        <label htmlFor="first name"> First Name</label>
                    </div>
                    <div>
                        <input onChange={Onchangehandler} value={appointment.first_name} name="first_name" className="border-2 p-2 rounded-3xl " type="text" placeholder="First Name" required />
                    </div>
                </div>



                <div className="flex justify-center items-center gap-9">
                    <div>
                        <label htmlFor="Last name"> Last Name</label>
                    </div>
                    <div>
                        <input onChange={Onchangehandler} value={appointment.last_name} name="last_name" className="border-2 p-2 rounded-3xl " type="text" placeholder="Last Name" required />
                    </div>
                </div>





                <div className="flex justify-center items-center gap-15">
                    <div>
                        <label htmlFor="phone no">Contact</label>
                    </div>
                    <div>
                        <input onChange={Onchangehandler} value={appointment.contact} name="contact" className="border-2 p-2 rounded-3xl " type="number" placeholder="Contact-no +91" required />
                    </div>
                </div>







                <div className="flex justify-center items-center gap-23">
                    <div>
                        <label htmlFor="Age">Age</label>
                    </div>
                    <div>
                        <input onChange={Onchangehandler} value={appointment.age} name="age" className="border-2 p-2 rounded-3xl " type="number" placeholder="Age" required />
                    </div>
                </div>






                <div className="flex justify-center items-center gap-5 flex-col">
                    <div >
                        <label  htmlFor="Date">Appointment Date</label>
                    </div>
                    <div>
                        <input onChange={Onchangehandler} value={appointment.date} name="date" className="border-2 p-2 rounded-3xl " type="date" placeholder="date" required />
                    </div>
                </div>
                <div>
                    <button type="submit" className="bg-black p-3 text-white mt-3">Book Appointment</button>
                </div>
            </form>

        </div>
    )

}
export default Appointment;
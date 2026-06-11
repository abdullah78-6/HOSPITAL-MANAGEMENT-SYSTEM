import axios from "axios"
import toast from "react-hot-toast"
import {useSelector,useDispatch} from "react-redux"
import { control } from "../store/slice";
const Addpatient=({url})=>{
    const dispatch=useDispatch();
    const patientdetails=useSelector(state=>state.main.patientdetails);
    const Onchangehandler=(event)=>{
        dispatch(control.setpatientdetails({
            name:event.target.name,
            value:event.target.value
        }))

    }
    const Admitpatient=async(e)=>{
        e.preventDefault();
        try {
            const response=await axios.post(url+"/api/admin/add",{patientdetails},{
            withCredentials:true,
        })
        if(response.data.status){
            toast.success(response.data.message);
        }
        else{
            toast.error(response.data.error);
        }
            
        } catch (error) {
            toast.error(error.message);
            console.log(error.message);
            
        }
        
        

    }
    return <div>
        <div>
            <form onSubmit={Admitpatient}>
                <div>
                    <label htmlFor="name">enter-name</label>
                    <input onChange={Onchangehandler} value={patientdetails.name} name="name" type="text" placeholder="patient name" required />
                </div>
                <div>
                    <label htmlFor="phoneno">mobile-no</label>
                    <input onChange={Onchangehandler} value={patientdetails.phone_no} name="phone_no" type="number" placeholder="patient mobile" required />
                </div>
                <div>
                    <label htmlFor="disease">disease name</label>
                    <input onChange={Onchangehandler} value={patientdetails.disease} name="disease" type="text" placeholder="patien disease" required />
                </div>
                <div>
                    <label htmlFor="age">patient age</label>
                    <input onChange={Onchangehandler} value={patientdetails.age} name="age" type="number" placeholder="patien age" required />
                </div>
                <div>
                    <label htmlFor="date">admit date</label>
                    <input onChange={Onchangehandler} value={patientdetails.admitdate} name="admitdate" type="date"  required />
                </div>
                <div>
                    <label htmlFor="bill">total bill</label>
                    <input onChange={Onchangehandler} value={patientdetails.bill} name="bill" type="number" placeholder="total bill ₹ "  required />
                </div>
                <div>
                    <button  type="submit" className="bg-green-900 p-3 text-xl mt-4">REGISTERED PATIENT</button>
                </div>
            </form>
        </div>
    </div>
}
export default Addpatient;
import {Link} from "react-router-dom"
import { control } from "../store/slice";
import {useDispatch} from "react-redux"
const Navbar=()=>{
    const dispatch=useDispatch();
    return <div className="font-semibold capitalize bg-[#618764] p-4 ">
        <div className="flex justify-items-start items-center  ">
        <Link onClick={()=>dispatch(control.setnavbarclass(""))} to="/" className="text-2xl capitalize text-[#273338]" >medicare-<span className="text-2xl capitalize text-pink-800">Hospital</span></Link>
        </div>
        
    </div>

}
export default Navbar;
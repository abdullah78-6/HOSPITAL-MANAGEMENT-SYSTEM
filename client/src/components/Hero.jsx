import image from "../assets/images.jpg"
import {useNavigate} from "react-router-dom"
const Hero=()=>{
    const navigate=useNavigate();
    return <div className="font-semibold capitalize flex justify-center items-center gap-4 flex-wrap text-[#273338] min-h-screen  bg-gradient-to-br from-pink-100 via-green-100 to-cyan-50 " >
        <div className="flex flex-col justify-center items-center " >
              <div className="mb-4 px-5 py-2 bg-white rounded-full shadow-md text-pink-700 text-sm ">
          🏥 Trusted Healthcare Management System
        </div>
            <div className="w-auto">
                <h1 className="text-3xl leading-tight text-pink-800 ">Smart Healthcare Management for Better Patient Care</h1>
            </div>
            <div>
                <p className="max-w-2xl leading-relaxed  mt-7 text-xl text-green-800">Manage appointments, patient records, doctors, departments, billing, and healthcare services efficiently with our modern Hospital Management System. Streamline hospital operations while delivering exceptional patient care.</p>
                <div className="flex gap-8 justify-center items-center mt-5">
               <div className=" text-center">
                <button onClick={()=>navigate("/appointment")} className="bg-pink-800 p-2 text-white rounded-2xl hover:bg-pink-900 transition ease-in-out duration-200 ">Book Appointment</button>
                </div>
                <div className=" text-center ">
                <button onClick={()=>navigate("/contact")} className="bg-blue-800 p-2 text-white rounded-2xl hover:bg-blue-900 transition ease-in-out duration-200 ">Contact Us</button>
                </div>
                </div>
                <div className="flex gap-8 mt-10 flex-wrap justify-center">
          <div className="bg-white p-4 rounded-2xl shadow-md min-w-[120px]">
            <h2 className="text-2xl font-bold text-pink-700">10K+</h2>
            <p className="text-gray-600 text-sm">Patients Served</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-md min-w-[120px]">
            <h2 className="text-2xl font-bold text-blue-700">50+</h2>
            <p className="text-gray-600 text-sm">Expert Doctors</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-md min-w-[120px]">
            <h2 className="text-2xl font-bold text-green-700">24/7</h2>
            <p className="text-gray-600 text-sm">Emergency Care</p>
          </div>
        </div>

                
        
            </div>
            
            
                
            
        </div>
            
        <div className="mt-5">
            <div>
                <img className="rounded-2xl hover:scale-105 transition-all duration-500 " src={image}/>
            </div>
            
        
        </div>
        
         
    </div>

}
export default Hero;
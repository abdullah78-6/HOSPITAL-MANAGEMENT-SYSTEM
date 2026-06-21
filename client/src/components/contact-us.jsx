import {useSelector,useDispatch} from "react-redux"
import toast from "react-hot-toast"
import { control } from "../store/slice";
import axios from "axios"
const Contact = ({url}) => {
  const dispatch=useDispatch();
  const contact=useSelector(state=>state.main.contact);
  const backendemail=useSelector(state=>state.main.backendemail2);
  const onchangehandler=(e)=>{
    dispatch(control.setcontact({
      name:e.target.name,
      value:e.target.value
    }))
  }
  const Submit=async(e)=>{
    e.preventDefault();
    if(!backendemail){
      toast.error("User Login Required");
      return ;
    }
    try {
    const res=await axios.post(url+"/api/cnt/contact", contact,{
           
            withCredentials:true,
      })
     if(res.data.status){
      toast.success(res.data.message);
     }
     else{
      toast.error(res.data.message);
     }
      
    } catch (error) {
      console.log("contact server error",error);
      toast.error(error.message);
      
    }

  }
  return (
    <div className="font-semibold">
      <header className=" text-white p-4">
    </header>
 <section>
        <main className="flex justify-center flex-wrap">
          <div className="flex justify-center items-center gap-5 flex-wrap flex-col ">
            <h1 className="text-1xl text-center sm:text-4xl md:text-5xl lg:text-6xl text-green-800 mt-5">
               Contact Medicare-<span className="text-pink-800">Hospital</span>
            </h1>

            <h2 className=" text-center  sm:text-2xl md:text-2xl lg:text-2xl text-gray-600 lg:w-2xl ">
               We're here to assist you with appointments, medical inquiries,
  emergency support, and healthcare services. Reach out to our team
  and we'll respond as soon as possible.
            </h2>
          </div>

          {/* <div>
            <img src="\src\assets\download (14).jfif" alt="contact" />
          </div> */}
        </main>
      </section>

      <section>
        <div className="flex justify-center flex-wrap flex-col gap-0.5">
          <div className="mt-5">
            <h1 className="text-3xl text-green-800 uppercase text-center">
              send message
            </h1>
          </div>

          <div>
            <h1 className="text-2xl text-gray-700 capitalize text-center">
              ask me anything here
            </h1>
          </div>
        </div>

        <main className="flex justify-center gap-28 mt-14 flex-wrap">
          <form
            className="w-full max-w-lg space-y-6 ml-10 bg-gradient-to-br rounded-2xl p-5 md:p-8 lg:p-8 xl:p-8 from-green-200 via-white to-pink-200"
            onSubmit={Submit}
            
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-green-800 text-xl uppercase mb-2"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                placeholder="Enter name"
                className="border border-gray-800 rounded-2xl p-2"
                required
                onChange={onchangehandler}
                name="name"
                value={contact.name}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-green-800 text-xl uppercase mb-2"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="border border-gray-800 rounded-2xl p-2"
                required
                onChange={onchangehandler}
                name="email"
                value={contact.email}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="number"
                className="text-green-800 text-xl uppercase mb-2"
              >
                Phone Number
              </label>

              <input
                type="number"
                id="number"
                placeholder="Phone"
                className="border border-gray-800 rounded-2xl p-2"
                required
                onChange={onchangehandler}
                name="phone_no"
                value={contact.phone_no}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-green-800 text-xl uppercase mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="4"
                placeholder="Your message here"
                className="border border-gray-800 rounded-2xl p-2 resize-none"
                required
                onChange={onchangehandler}
                name="message"
                value={contact.message}
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                
                className="text-xl uppercase bg-red-600 text-white px-6 py-2 rounded-2xl hover:bg-red-500 transition ease-in-out duration-200"
              >Submit</button>
            </div>
          </form>
         </main>
      </section>

    
    </div>
  );
};

export default Contact;
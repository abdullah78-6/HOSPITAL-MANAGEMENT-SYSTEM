import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast"
import {useSelector,useDispatch} from "react-redux"
import {Line,CartesianGrid,XAxis,YAxis,LineChart,ResponsiveContainer,BarChart,Bar, Legend,Pie,PieChart,Tooltip,Cell} from "recharts"
import SlotCounter from 'react-slot-counter';
import { control } from "../store/slice";
const Dashboard=({url})=>{
    const dispatch=useDispatch();
   const totalpatient=useSelector(state=>state.main.totalpatient);
   const totalregester=useSelector(state=>state.main.totalregesterpeople);
   const totalappointment=useSelector(state=>state.main.totalappointments);
   const totaldoctor=useSelector(state=>state.main.totaldoctors);
    const Fetchtotal=async()=>{
        const response=await axios.get(url+"/api/admin/dashboard",{
            withCredentials:true,
        })
        if(response.data.status){
            dispatch(control.settotalpatient(response.data.totalpatient));
            dispatch(control.settotalregesterpeople(response.data.regesterpeople));
            
            dispatch(control.settotaldoctors(response.data.totaldoctors));
            dispatch(control.settotalappointments(response.data.totalappointment));
        }
        else{
            toast(response.data.message);
        }

    }
    useEffect(()=>{
        Fetchtotal();
    },[]);
    const linedata=[
        {
            name:"Appointments",
            count:totalappointment
        },
         {
            name:"Patient",
            count:totalpatient,

        },
    ];
    const pieData=[
        {
            name:"Registered Users",
            value:totalregester,

        },
        {
            name:"Doctors",
            value:totaldoctor,

        },
        
    ];

        

   return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 w-full text-pink-800 font-semibold">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#5C766D]">
          Dashboard Overview
        </h1>
        <p className="text-slate-500 mt-1">
          Statistics and analytics summary
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 className="text-slate-500 text-sm font-medium">
            Total Patients
          </h3>
          
          <p className="text-4xl font-bold mt-3">
          <SlotCounter value={totalpatient}/>
          
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 className="text-slate-500 text-sm font-medium">
            Registered Users
          </h3>
          <p className="text-4xl font-bold mt-3">
            <SlotCounter value={totalregester}/>
            
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 className="text-slate-500 text-sm font-medium">
            Total Doctors
          </h3>
          <p className="text-4xl font-bold mt-3">
            <SlotCounter value={totaldoctor}/>
            
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 className="text-slate-500 text-sm font-medium">
            Total Appointments
          </h3>
          <p className="text-4xl font-bold mt-3">
            <SlotCounter value={totalappointment}/>
            
          </p>
        </div>
      </div>
      


      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">
            Appointments vs Patients
          </h2>

          <div className=" h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={linedata}>
                <CartesianGrid strokeDasharray="3 3"stroke="#EDE9E6" />
                <XAxis dataKey="name" tick={{fill:"#5C4F4A"}} />
                <YAxis tick={{fill:"#5C4F4A"}} />
                <Tooltip />
                <Legend />

                <Line
                  type="monotone"
                  dataKey="count"
                  strokeWidth={4}
                  dot={{ r: 7 ,fill:"#C9996B"}}
                  activeDot={{ r: 10,fill:"#5C766D" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>


        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">
            Registered Users vs Doctors
          </h2>

          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  innerRadius={60}
                  paddingAngle={5}
                  label
                    
                  
                >
                    <Cell fill="#C9996B"/>
                    <Cell fill="#5C766D"/>
                </Pie>


        


                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Dashboard;
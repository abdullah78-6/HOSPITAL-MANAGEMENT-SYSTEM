import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
import {Routes,Route} from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Adddepartment from "./pages/add-department"
import Doctor from "./pages/doctors"
import Appointment from "./pages/appointments"
import Addpatient from "./pages/add-patients"
import { useSelector } from "react-redux"
import Loginpopup from "./components/Loginpopup"
function App() {
  const loginstatus=useSelector(state=>state.main.loginstatus);
  const backendurl="http://localhost:5000"
  return <div>
 
    <Navbar/>
    <hr/>
     <div className="flex">
    <Sidebar url={backendurl}/>
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/add-departments" element={<Adddepartment/>}></Route>
      <Route path="/doctors" element={<Doctor/>}></Route>
      <Route path="/appointments" element={<Appointment/>}></Route>
      <Route path="/add-patients" element={<Addpatient/>}></Route>
      <Route path="/login" element={<Loginpopup url={backendurl}/>}></Route>
    </Routes>
    </div>
  </div>

}

export default App

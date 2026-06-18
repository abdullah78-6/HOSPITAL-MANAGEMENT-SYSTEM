
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Appointment from "./pages/Appointment";
import Departments from "./pages/Department";
import Signup from "./pages/Signuppage"
import {Routes,Route, Outlet} from "react-router-dom"
function App() {
  const url="http://localhost:5000";
  return <div>
    <Navbar url={url}/>
       <Outlet/>
     <Footer/>
    
     
   </div>
}

export default App

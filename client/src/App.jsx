
import Navbar from "./components/navbar";
import Signup from "./pages/Signuppage"
import {Routes,Route, Outlet} from "react-router-dom"
function App() {
  const url="http://localhost:5000";
  return <div>
    <Navbar url={url}/>
    <Outlet/>
    <Routes>
      <Route path="/login" element={<Signup url={url}/>}></Route>
    
    
    </Routes>
  </div>

  
}

export default App

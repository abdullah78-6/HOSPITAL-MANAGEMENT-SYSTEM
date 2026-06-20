import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Toaster} from "react-hot-toast";
import {Provider} from "react-redux"
import {BrowserRouter, RouterProvider,createBrowserRouter} from "react-router-dom"
import ClientStore from './store/store.js';
import Appointment from './pages/Appointment.jsx';
import Signup from './pages/Signuppage.jsx';
import Departments from './pages/Department.jsx';
import Hero from './components/Hero.jsx';
import Contact from './components/contact-us.jsx';
import About from './components/about.jsx';
import Services from './components/our services.jsx';
import Achievement from './components/Achievements.jsx';
const url="http://localhost:5000";
const router=createBrowserRouter([
  
  {
    path:"/",
    element:<App />,
    children:[
      {
        index:true,
        element:(
          <>
          <Hero/>
          <Services/>
          <About/>
          <Achievement/>
          
          </>
        )
      },
      {
        path:"/appointment",
        element:<Appointment url={url}/>
      },
      {
        path:"/login",
        element:<Signup url={url}/>
      },
      {
        path:"/departments",
        element:<Departments url={url}/>
      },
      {
        path:"/contact",
        element:<Contact url={url}/>
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ClientStore}>
  <RouterProvider router={router}>

  </RouterProvider>
    

    <Toaster/>
    </Provider>
  </StrictMode>,
)

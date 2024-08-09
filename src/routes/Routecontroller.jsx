import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Home from "../components/home/Home"





const Register = lazy(() => import("./register/Register"))
const Login = lazy(() => import("./Login/Login"))
const Profile = lazy(() => import("./profile/Profile"))







export const Routecontroller = () => {
  return (
    <>
     
 <Routes> 
 <Route path="/" element={<Suspense fallback={<p>Loading...</p>}><Home/></Suspense>}/>
<Route path="register" element={<Suspense fallback={<p>Loading...</p>}><Register/></Suspense>}/>
<Route path="Login" element={<Suspense fallback={<p>Loading...</p>}><Login/></Suspense>}/>
<Route path="profile" element={<Suspense fallback={<p>Loading...</p>}><Profile/></Suspense>}/>



   </Routes>
    
    </>
 
  
  )
}

export default Routecontroller

import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"


const Register = lazy(() => import("./register/Register"))
const Login = lazy(() => import("./Login/Login"))
const Profile = lazy(() => import("./profile/Profile"))




export const Routecontroller = () => {
  return (
   <Routes>
<Route path="register" element={<Suspense fallback={<p>Loading...</p>}><Register/></Suspense>}/>
<Route path="Login" element={<Suspense fallback={<p>Loading...</p>}><Login/></Suspense>}/>
<Route path="profile" element={<Suspense fallback={<p>Loading...</p>}><Profile/></Suspense>}/>


   </Routes>
  )
}

export default Routecontroller

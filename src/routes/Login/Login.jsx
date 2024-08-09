import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useState } from "react";
import "./Login.css"
const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
 
 const handleUserLogin = (e) =>{

e.preventDefault();



axios.post("/auth/login", {email, password})
.then (response => {
  if(response.status === 201) {
    localStorage.setItem("Token", response.data.access_token )
    Navigate("/profile")
  }
})

 }
  return (
    <form onSubmit={handleUserLogin}>

    <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
    <input type='password' placeholder='Enter your password' onChange={(e) => setpassword(e.target.value)} />
 
    <button type='submit'>Login</button>
    
    </form>
  )

}

export default Login
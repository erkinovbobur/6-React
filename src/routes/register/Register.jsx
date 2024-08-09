import  { useState } from 'react'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'
import "./Register.css"
 const Register = () => {
    const Navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [avatar, setAvatar] = useState("")

const handleUserRegister = (e) => {
    e.preventDefault();
   axios.post("/users", {name, email, password, avatar})
    .then(response =>
      {
        if( response.status === 201){
          alert("User created successfully");
          Navigate("/login")
        }

      } )
}

return (
  <div className='wrapper' >
    <form onSubmit={handleUserRegister}>
<input type='text' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
<input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
<input type='password' placeholder='Enter your password' onChange={(e) => setpassword(e.target.value)} />
<input type="url" placeholder='Enter your avatar url'  onChange={(e) => setAvatar(e.target.value)} />
<button type='submit'>Register</button>

</form>
  </div>
  )
}

export default Register
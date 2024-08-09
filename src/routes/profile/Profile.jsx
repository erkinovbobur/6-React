import { useEffect, useState } from 'react'
import axios from 'axios'
import "./Profile.css"

 const Profile = () => {
    const[profile, setProfile] = useState(null)

    useEffect (() => {
        axios("/auth/profile")
        .then(response => setProfile(response.data))
          
            
        
    }, [])
    console.log(profile)
  return (
    
    <div>
       {
     profile && 
     <img  src={profile.avatar} alt="" />
    
       } 
        
    </div>
         
        
    
        
             
             
            
           
  )
}
export default Profile
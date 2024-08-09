import { useEffect, useState } from 'react'
import axios from '../../api/axios'
import "./Profile.css"
import { useNavigate } from 'react-router-dom';

 const Profile = () => {
  const navigate = useNavigate;
  const [profile, setProfile] = useState({}); 

  useEffect(() => {
    axios.get("auth/profile")
      .then(response => setProfile(response.data))
      .catch(error => {
        console.error("Error fetching profile:", error);
        if (error.response && error.response.status === 401) {
          navigate('/register');
        }
      });
  }, [navigate]);
  return (
    
    <div className='wrapper' >
      <div>
       <img src={profile.avatar} alt="" />
        <p>{profile.name}</p>
        <p>{profile.email}</p>
    </div>
    </div>
         
        
    
        
             
             
            
           
  )
}
export default Profile
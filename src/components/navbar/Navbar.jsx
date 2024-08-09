


import './Navbar.css'; 
import { Link } from 'react-router-dom';
const Navbar = () => {
  return  (
   
    <nav className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          <a href="#">Logo</a>
        </div>
        <ul>
          <li className='navbar__item'><Link to="/register">Register</Link></li>
          <li className='navbar__item'><Link to="/login">Login</Link></li>
          <li className='navbar__item'><Link to="/profile">Profile</Link></li>
      
  
        </ul>
         
      </div>
    </nav>
  );

  }
export default Navbar;

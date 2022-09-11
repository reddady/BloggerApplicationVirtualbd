import React from 'react'
import './Navbar.css'
import pic from "../static/images/pic.jpg"
import Avatar from '@mui/material/Avatar';
import {  Link } from "react-router-dom";


// navbar components ... 
export default function Navbar() {
  return (
<nav className=' nav'>
<div className='profile'>

<Avatar className='Avator_pic'

        alt="Remy Sharp"
        src={pic}
        sx={{ width: 100, height: 100 , left:10,  }}
      />
<div className="nameOfProfile">
  <h4>Ishtiuq Ahmed Chowdhury</h4>
  <h5>User</h5>
</div>
</div>

  <ul className='nav-container'>
    <li className='nav-link'>
      <Link  to='/'>My Profile</Link>
    </li>
    <li className='nav-link'>
     
      <Link  to='/Settings'>Settings</Link>
    
    </li>
    <li className='nav-link'>
      <Link to='/Subscription'>Subscription</Link>

    </li>
    <li className='nav-link'>
      <Link   to='/Blogger'>Blogger</Link>
    </li>
  </ul>

</nav>
  )
}

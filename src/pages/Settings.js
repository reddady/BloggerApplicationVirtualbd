import React from 'react'
import "./Settings.css";
import Information from '../components/information'
function Settings() {
  return (

<div className='InfoSe'>
  
<Information/> 



<div className='SecurityDiv'>

<from>
<div className='Security_info'>
<div className='Secury'>
        <label>Change Password </label>
        <input type="password" placeholder='Change Password ' ></input>
</div>
        <div className='Secury'>
        <label>Confirm Password </label>
        <input type="password" placeholder='Confirm Password'></input>
    </div>
    </div>
    <div className='buttonDiv'>
    <button className='button'>Submit</button>
    </div>

</from>
</div>
</div>

  )
}

export default Settings
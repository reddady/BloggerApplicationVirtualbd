import React from 'react'
import "./information.css"
function information() {
  return (
  
    <div className='Information_div'>
<from >
<div className='from_field'>
<div className='details-personal'>
 <h4 className='title'> Information</h4>
<div className='Fildes'>
    <div className='Input_field_inline'>
<div className='FristName'>
        <label >Frist Name </label>
        <input type="text" placeholder='Ishtiuq Ahmed'></input>
</div>
        <div className='Last_name'>
        <label>Last Name </label>
        <input type="text" placeholder='Chowdhury'></input>
    </div>

    </div>
    
    <div className='Input_field'>
        <label>Email </label>
        <input type="text" placeholder='Enter  your Email  address'></input>
    </div>
    <div className='Input_field'>
        <label>Date of Birth </label>
        <input className='Dateinput'  type="date" placeholder='Frist Name '></input>
    </div>
    <div className='Input_field'>
        <label>Profession</label>
        <input type="text" placeholder='Graphic & UI/UX Designer'></input>
    </div>
    <div className='Input_field'>
        <label>Phone </label>
        <input type="text" placeholder='+880 1674 668 544 '></input>
    </div>
    <div className='Input_field'>
        <label>Nationality </label>
        <input type="text" placeholder='Bangladesh'></input>
    </div>
    <div className='Input_field_Bio'>
        <label>Bio</label>
        <input type="text" placeholder='Enter Your Bio '></input>
    </div>
</div>

</div>

</div>
<button className='button'>Submit</button>
</from>
    </div>


  )
}

export default information
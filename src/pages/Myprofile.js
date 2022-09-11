import React from 'react'
import './Myprofile.css'
import {Container ,Row , Col} from "react-bootstrap"
function Myprofile() {
  return (
<div className='about_con'>
  <div className='About'>
    <h3>About Me</h3>
    <p className='About_me'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   </p>
  </div>
  <div className='Container'>
<Container>
  <Row>
    <Col md={3}>
   
    
      <h3>Contact information</h3>

<p><span>Profession:</span>Graphic & UI/UX Designer

</p>
<p><span>Phone:</span>+880 1674 668 544 

</p>
<p><span>Date of Birth:</span> 02.10.1990

</p>
<p><span>Nationality:</span> Bangladeshi

</p>


    </Col>
  </Row>
</Container>
</div>
</div>
  )
}

export default Myprofile


import React from 'react'
import video1 from '../assets/video1.mp4'


const Video = () => {
  return (
    <div>
    <video src={video1} autoPlay loop muted className='video'>

    </video>

    <div className="about " >
   
    <p>AutoVec is  a private company established in 2010.</p> 
    <p>It is known for its integrity, promptness and reliability</p>
    </div>
    <div className="services ">
    <p> Our Services Include:</p> 
        <li>Car Sales</li>
    <li>Car Purchase</li>
    <li>Car Maintenance</li>
    <li>Car Insurance</li>
    <li>Consultancy</li>
        
    </div>
    </div>
  )
}

export default Video
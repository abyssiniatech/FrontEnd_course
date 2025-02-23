import React, { useState } from 'react'

function Usestate1() {
    const [car,setCar]=useState({
        name:"toyota",
        year:2023,
        model:"rava 4"
    })
    
  
  return (
    <div>
    
           <p>{car.name}</p>
           <p>{car.model}</p>
           <p>{car.year}</p>
           <input type="text"  placeholder='enter your name '  />
    </div>
  )
}

export default Usestate1

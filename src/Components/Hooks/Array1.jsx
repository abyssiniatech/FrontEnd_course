import React, { useState } from 'react'
import list from './List'
import List from './List'
function Array1() {
    const [list,setList]=useState(List)
  return (
    <div className='border-l-gray-500 text-white bold flex  rounded text-center'>
          <h1>map function in react js</h1>
          {
            list.map((lis,index)=>{
                return <p className='bg-pink-600 border-2 p-2 text-white rounded mb-2 w-[200px]' key={index}>{lis.name}|| {lis.age} || {lis.position}</p>
            })
          } 
    </div>
  )
}

export default Array1

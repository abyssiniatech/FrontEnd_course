import React, { useState } from 'react'

function Math() {
    const [value,setvalue]=useState(0);
    const [name,setname]=useState("");
    const handleDecrement=()=>{
       setvalue(value-1)
    }
    const handleReset=()=>{
        setvalue(0)
    }
    const handleIncrement=()=>{
        setvalue(value+1)
    }
    const handleName=(e)=>{
        setname(e.target.value)
    }
    const handleForm=(e)=>{
        e.preventDefault()

    }
  return (
    <div className="bg-pink-700 text-white text-center  rounded">
       <p >Basic calculator</p>
       <p>{value}</p>
      
        <button className='w-[60px] bg-green-300 m-2 p-4 text-white bold rounded hover:bg-blue-400' onClick={handleDecrement}>-</button>
        <button className='w-[60px] bg-green-300 m-2 p-4 text-white bold rounded hover:bg-blue-400' onClick={handleReset}>0</button>
        <button className='w-[60px] bg-green-300 m-2 p-4 text-white bold rounded hover:bg-blue-400' onClick={handleIncrement}>+</button>
        <hr />
        <p className='border-2-white p-4 rounded text-center text-white'>{name}</p>
        <form onSubmit={handleForm} >
        <input type="text" onChange={handleName} className=' p-4 text-center rounded bg-white text-black' />
       <button className='bg-blue-500 text-white bold p-4 m-2 rounded hover:green-400'>Add</button>
        </form>
    </div>
  )
}

export default Math

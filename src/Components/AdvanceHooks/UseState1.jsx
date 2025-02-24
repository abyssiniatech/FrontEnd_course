import React, { useState } from 'react'

function UseState1() {
    const  [value,setvalue]=useState(0)
    const  handleinc=()=>{
        setvalue(value+1)
    }
    const handleres=()=>{
        setvalue(0)
    }
    const handledec=()=>{
        setvalue(value-1)
    }
    const handleSumbit=(e)=>{
        e.preventDefault()
    }
  return (
    <>
    <div className='bg-black text-white w-[500px] m-auto text-center rounded' >
        <div className='text-center text-4xl p-4 m-4 text-white'>
            <p>{value}</p>
        </div>
          <button onClick={handleinc} className='bg-green-700 text-white p-4 m-4 rounded text-3xl hover:rotate-45 text-center   '>+</button>
          <button onClick={handleres} className='bg-yellow-700 text-white p-4 m-4 rounded text-3xl hover:rotate-45 text-center   '>0</button>
          <button onClick={handledec} className='bg-red-700 text-white p-4 m-4 rounded  text-3xl hover:rotate-y-3 text-center   '>-</button>
          <hr />
      
    </div>
      <section className='bg-black text-white flex w-[500px] m-auto text-center mt-4' >
        <form  onSubmit={handleSumbit}>
            <label htmlFor="name">Name</label>
            <input type="text"  id='name' onChange="enter your name"  className='bg-transparent'/>
            <br />
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder='Ex@...'  className='bg-transparent' />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" id='password'  className='bg-transparent'/>
               <br />
        <button>Submit</button>
            </form>
      </section>
    </>
  )
}

export default UseState1

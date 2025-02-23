import React from 'react'

function Position() {
  return (
    <div className='relative bg-pink-500  w-100 text-center bold m-8 h-[200px] hover:bg-amber-600'>
          <h1 className='text-center text-white text-2xl underline'>Absolute position</h1>
          <div className='bg-blue-500 text-white p-4 absolute left-0 top-0'>absolute</div>
          <div className='bg-blue-500 text-white p-4 absolute right-0 bottom-0'>absolute</div>
          <div className='absolute bg-green-200  text-center bottom-0 left-0 p-4'>relative</div>
          <div className='absolute bg-green-200  text-center top-0 right-0 p-4'>relative</div>
          
    </div>
  )
}

export default Position

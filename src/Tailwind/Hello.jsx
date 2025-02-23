import React from 'react'

function Hello() {
  return (
    <div className='bg-green-600'>
    <div className='mb-2 w-1/20 bg-amber-500'>5%</div>
    <div className=' mb-2 w-1/10 bg-amber-500'>10%</div>
    <div className=' mb-2 w-1/5 bg-amber-500'>20%</div>
    <div className=' mb-2 w-1/4 bg-amber-500'>25%</div>
    <div className=' mb-2 w-1/3 bg-amber-500'>30%</div>
    <div className=" mb-2 w-1/2 bg-amber-500">50%</div>
    <div  className=" mb-2 w-2/3 bg-amber-500">70%</div>
    <div  className=" mb-2 w-[90%] bg-amber-500">70%</div>
       {/* height in tailwind css */}
     <div className='bg-teal-500  flex'>
  <div className='bg-pink-500 h-50 text-center w-[40px] mr-2'>10</div>
  <div className='bg-pink-500 h-40 text-center w-[40px] mr-2'>20</div>
  <div className='bg-pink-500 h-30 text-center w-[40px] mr-2'>30</div>
  <div className='bg-pink-500 h-10 text-center w-[40px] mr-2'>40</div>
     </div>
    </div> 
  )
}

export default Hello

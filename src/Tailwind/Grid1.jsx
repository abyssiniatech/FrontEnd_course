import React from 'react'

function Grid1() {
  return (
    <>
    <div className='bg-teal-300 w-full  grid grid-cols-4 grid-rows-3 p-3 gap-3 rounded '>
          <div className=' transform-3d rounded t bg-pink-200 text-center text-3xl w-[50px] hover:bg-black hover:text-white'>
               01
          </div>
          <div className=' rounded col-auto bg-pink-300 text-center text-3xl w-[50px] hover:bg-black hover:text-white'>
               02
          </div>
          <div className=' rounded bg-pink-400 text-center text-3xl w-[50px] hover:bg-black hover:text-white'>
               03
          </div>
          <div className=' rounded bg-pink-400 text-center text-3xl w-[50px] hover:bg-black hover:text-white'>
               04
          </div>
          <div className=' rounded bg-pink-500 text-center text-3xl w-[50px] hover:bg-black hover:text-white'>
               05
          </div>
          <div className=' rounded bg-pink-600 text-center text-3xl w-[50px] hover:bg-black hover:text-white'>
               06
          </div>
          <div className=' rounded bg-pink-700 text-center text-3xl w-[50px] hover:bg-black hover:text-white'>
               07
          </div>
          <div className=' rounded bg-pink-800 text-center text-3xl w-[50px] hover:bg-black hover:text-white'>
               08
          </div>

    </div>
    <button className=" animate-ping  bg-red-100 transition ease-in-out delay-150 duration-100 hover:bg-blue-400 hover:text-white text-center rounded p-5 m-3 hover:rotate-45">
            btn transition
          </button>
          <button className=" animate-bounce  bg-red-100 transition ease-in-out delay-150 duration-100 hover:bg-blue-400 hover:text-white text-center rounded p-5 m-3 hover:rotate-45">
            btn transition
          </button>
          <button className=" animate-spin  bg-red-100 transition ease-in-out delay-150 duration-100 hover:bg-blue-400 hover:text-white text-center rounded p-5 m-3 hover:rotate-45">
            btn transition
          </button>
     </>
  )
}

export default Grid1

import React from 'react'
import img from "./img/sura4.jpg"
import img1 from "./img/IMG_20240501_011642_804.jpg"
function Flex() {
  return (
    <div>
          <div className="bg-black text-4xl  text-white text-center">
          <h1 className='p-2'>Tailwind mster class</h1>
               <header className='bg-green-300 text-center text-3xl p-2  w-full flex '>
                   
                   <img src={img} alt="surafel image" className='w-[100px] saturate-200 rounded  m-2 rotate-45' />
                   <img src={img1} alt="these second image"  className='w-[100px]  rounded m-2'/>
                   <img src={img} alt="surafel image" className='w-[160px] saturate-200 rounded  m-2' />
                   <img src={img1} alt="these second image"  className='w-[160px]  rounded m-2'/>
                   <img src={img} alt="surafel image" className='w-[160px] saturate-200 rounded  m-2' />
                   <img src={img1} alt="these second image"  className='w-[160px]  rounded m-2'/>
               </header>
          </div>
          {/* unorderd list in react js
           */}
           

           <ul className='bg-fuchsia-200 m-5 p-2 flex justify-between '>
            <li className='bg-pink-400 text-white p-5 m-5 rounded border-2 text-center text-2xl hover:bg-green-400 Hover:text-white'>01</li>
            <li className='bg-pink-400 text-white p-5 m-5 rounded border-2 text-center text-2xl hover:bg-green-400 Hover:text-white'>02</li>
            <li className='bg-pink-400 text-white p-5 m-5 rounded border-2 text-center text-2xl hover:bg-green-400 Hover:text-white'>03</li>
            <li className='bg-pink-400 text-white p-5 m-5 rounded border-2 text-center text-2xl hover:bg-green-400 Hover:text-white'>04</li>
            <li className='bg-pink-400 text-white p-5 m-5 rounded border-2 text-center text-2xl hover:bg-green-400 Hover:text-white'>04</li>
           </ul>
           {/* these is the grid property */}
           <div className="bg-blue-300 m-3 p3 w-full rounded border-2 list-none text-center grid grid-cols-3 grid-rows-3">
            <li className="bg-amber-300 text-red-500 p-3 m-3">01</li> <li className="bg-amber-300 text-red-500 p-3 m-3">01</li>
            <li className="bg-amber-300 text-red-500 p-3 m-3">02</li>
            <li className="bg-amber-300 text-red-500 p-3 m-3">03</li>
            <li className="bg-amber-300 text-red-500 p-3 m-3">04</li>
            <li className="bg-amber-300 text-red-500 p-3 m-3">05</li>
            <li className="bg-amber-300 text-red-500 p-3 m-3">06</li>
           </div>







          <footer>
            <h2 className='bg-pink-700 text-white bold text-3xl text-center'>&copy;{new Date().getFullYear()}</h2>
          </footer>
    </div>
  )
}

export default Flex

import React from 'react'
import img from "../../assets/react.svg"
function Project1() {
  return (
    <div className='bg-green-400 mt-2'>
    <div  className=" bg-black text-white bold  flex p-4   ">
    <img src={img} alt="no image  here" />
      <ul className='flex p-4 m-4'>
          <a className='p-4 hover:bg-white hover:text-black rounded' href="#"><li>Home</li></a>
          <a className='p-4 hover:bg-white hover:text-black rounded' href="#"><li>Main</li></a>
          <a className='p-4 hover:bg-white hover:text-black rounded' href="#"><li>About </li></a>
          <a  className='p-4 hover:bg-white hover:text-black rounded' href="#"><li>Contact</li></a>
          < input type="text" className='bg-white  text-2xl text-center text-black rounded h-12'  placeholder="enter here" />

      </ul>
    </div>
    <div className="bg-blue-300">
      <img className='w-[100%]' src="https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyfGVufDB8fDB8fHww" />
    </div>
     <footer className='bg-pink-700 text-white'>
            <h2 className='text-center rounded bold text-3xl'>&copy; {new Date().getFullYear() } By surafel mengist</h2>
     </footer>
</div>
  )
}

export default Project1











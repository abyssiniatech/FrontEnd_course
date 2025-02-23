import React, { useState } from 'react'

function Todo() {
    const [todo,setTodo]=useState("");
    const [todos,setTodos]=useState([]);
    const handleChange=(e)=>{
        setTodo(e.target.value)
    }
const handleform=(e)=>{
     e.preventDefault();
     setTodos([...todos,todo])
}
  return (
    <div className='  m-4  w-[800px]'>
        <form onSubmit={handleform}>
        <input type="text " onChange={handleChange}  className='bg-white p-4  border-0'/>
        <button  className='bg-blue-400 text-white bold text-center p-4 ml-[200px] rounded hover:bg-green-400'>Add to do list</button>
        </form>
         
         {
            todos.map((list)=>{
                return <p key={list.id} className=''>{list}</p>
            })
         }
    </div>
  )
}

export default Todo

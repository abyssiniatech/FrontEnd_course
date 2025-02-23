import  React, { useState } from 'react'

function Todo() {
    const [todo,setTodo]=useState('');
    const [todos,setTodos]=useState([]);
    const handleForm=(e)=>{
           e.preventDefault();
           setTodos([...todos,todo]);
    }
    const handleInput=(e)=>{
        setTodo(e.target.value)
    }
  return (
    <div className='text-center  w-1/2 h-1/2 ' >
         <form onSubmit={handleForm} className='flex justifyContent-spaceBetween'>
            <input className='' onChange={handleInput} type="text" placeholder='Add to do..' />
            <button className='bg-green-600 text-bold '>Add</button>
         </form>
         {todos.map((list)=>{
            return <p key={list.id}>{list}</p>
         })}
    </div>
  )
}

export default Todo

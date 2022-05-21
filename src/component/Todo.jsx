import React from 'react'
import { useState } from 'react'
import {v4 as uuid} from "uuid"
import TodoList from './TodoList'
import style from "./Todo.module.css"
const Todo = () => {

    const [value, setValue]= useState ("")
    const [todos, setTodo] = useState([])
    
    const handleChange = () =>{
        const info={
         id : uuid(),
         title : value,
         status:false
        }

        setTodo([...todos, info])
        setValue("")
    }
   
    const handleDlt = (id)=>{

         let netList = todos.filter((item)=>item.id !== id)
         setTodo(netList)
    }
   

  return (
    <div >
        <h1 className={style.head}>Add Your Todos</h1>
        <input className={style.Add} value={value} 
                  type="text" 
                  placeholder='Add Todo'
                  onChange={(e)=>setValue(e.target.value)}       
        />

        <button className={style.AddBtn} onClick={handleChange}>+</button>
        
        <h5>Here you can see your Todo-list</h5>
        {todos.map((info)=>(
               <TodoList key={info.id} title={info.title} id={info.id} todos={todos} handleDlt={handleDlt}/>
        ))}  

         
    </div>
  )
}

export default Todo
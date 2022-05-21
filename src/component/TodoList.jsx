import React from 'react'
import TodoItem from './TodoItem'
import style from "./Todo.module.css"
const TodoList = ({title,todos,id,handleDlt}) => {

    

  return (
    <div className={style.todoDiv}> 
          
          <TodoItem key = {todos.id} title = {title} id ={id} handleDlt = {handleDlt}></TodoItem>
          
    </div>
  )
}

export default TodoList
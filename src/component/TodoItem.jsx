import React from 'react'
import style from "./Todo.module.css"
const TodoItem = ({title,id,handleDlt}) => {
  
  //const [list,setList]=useState([]) 
  console.log(id)
  const handleDlt1 = ()=>{
    
    handleDlt(id)
  }
//git remote add origin https://github.com/Shubham0442/Todo-React-App.git
  return (
    <div>
       
      <input type="checkbox" />
        {title}
      {/* <span>&#9734;</span> */}
      <div>
      <button className={style.dltBtn} onClick={handleDlt1}>Delete</button>
      </div>
    </div>

    
  )
}

export default TodoItem
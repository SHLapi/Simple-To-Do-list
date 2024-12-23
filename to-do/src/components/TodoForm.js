'use client'
import { useState } from 'react';


export const TodoForm = ({addTodo}) => {
  const [task, setTask] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("")
  }


  return (
    <form className="TodoForm" onSubmit={submitHandler} > 
      <input type="text" 
        value={task}
        className="todo-input" 
        placeholder="New Task?"
        onChange={(e)=> setTask(e.target.value)} />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>

  )
}

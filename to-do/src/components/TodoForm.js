'use client'
import { useState } from 'react';
import { Alert } from '@mui/material';


export const TodoForm = ({addTodo}) => {
  const [task, setTask] = useState("")

  const submitHandler = (e) => {
    task.length === 0 ? 
    (alert("No task Entered"))
    :
    (e.preventDefault(),
    addTodo(task),
    setTask(""))
  }


  return (
    <form onSubmit={submitHandler} > 
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
